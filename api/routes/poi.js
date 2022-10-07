const db = require('../db');
require("dotenv").config();
const Router = require('express-promise-router');

const router = new Router()

module.exports = router

async function poisAsGeoJson() {
  return new Promise(async (resolve, reject) => {
    try {
      let queryText = `
      SELECT jsonb_build_object(
        'type',     'FeatureCollection',
        'features', jsonb_agg(features.feature)
      )
      FROM (
        SELECT jsonb_build_object(
          'type',       'Feature',
          'id',         poi_id,
          'geometry',   geom,
          'properties', to_jsonb(inputs) - 'oid' - 'geom'
        ) AS feature
        FROM (select poi_id, poi_name, poi_type, description, geom from poi) inputs) features;
      `
      let {rows} = await db.query(queryText,[])
      resolve(rows[0].jsonb_build_object)
    } catch(e) {
      reject(e)
    }
  })
}

router.get("/", async (req, res) => {
  poisAsGeoJson()
    .then((data)=> {
      res.send(data)
  })
    .catch(e=>{
      console.log(e)
      res.status(500).send({message:"Internal server error"})
  })
});

router.post("/", async (req, res) => {
  var client = await db.getClient();
  const {poi_name, poi_type, description, crds} = req.body
  var geom = `POINT(${crds.long} ${crds.lat})`
  try {
      await client.query('BEGIN')
      const queryText = `insert into poi (poi_name, poi_type, description,  geom) Values ( $1,$2,$3, $4 ) returning poi_id`;
      const {rows} = await client.query(queryText, [poi_name, poi_type, description,  geom]);
      await client.query('COMMIT');
      res.send(rows)
  } catch (e) {
      await client.query('ROLLBACK')
      console.log(e.message);
      res.status(500).send({message:"Internal server error"});
  } finally {
      client.release()
  }
});


//turn geojson to json so that we can use json_to_recordset() in pg
function geojsonToJson(geojson) {
  const json = geojson.map((row) => {
    return {...row.properties,geometry:row.geometry}
  })
  return json;
}

router.put("/editMany", async (req, res) => {
  var json = await geojsonToJson(req.body.features)
  var queryText = 
  `insert into poi (poi_name,poi_type,description,geom) 
  select poi_name, poi_type, description, ST_Transform(ST_GeomFromGeoJSON(geometry), 4326) as geom 
  from json_to_recordset($1) as (poi_name text, poi_type text, description text, geometry json)
  returning poi_id`
  db.query(queryText,[JSON.stringify(json)])
    .then((data)=> {
      data.rowCount != 0 
        ? res.send({message:"Added Successfully"})
        : res.status(500).send({message:"error with adding pois"}) 
    })
    .catch(e=>{
      console.log(e)
      res.status(500).send({message:"Internal Server Error"})
    }) 
});

// update will not be available for this app

// router.put("/:poi_id", async (req, res) => {
//   const {poi_name, description, crds} = req.body
//   var geom = `POINT(${crds.long} ${crds.lat})`
//   db.query(
//     `update poi set
//     poi_name = $1,
//     description = $2,
//     geom = $3
//     where poi_id = $4 `,[poi_name, description, geom, req.params.poi_id])
//   .then((data)=> {
//     console.log(data)
//     data.rowCount != 0 
//     ? res.send({message:"Update Successful"}) 
//     : res.status(500).send({message:"No Such poi exists"}) 
//   })
//   .catch(e=>{
//     console.log(e)
//     res.status(500).send({message:"Issue with saving, please try again... "})
//   }) 
// });

router.delete("/:poi_id", async (req, res) => {
  db.query(`delete from poi where poi_id = $1`,[req.params.poi_id])
    .then((data)=> {
      data.rowCount != 0 
        ? res.send({message:"Delete Successful"})
        : res.status(500).send({message:"No Such poi exists"}) 
    })
    .catch(e=>{
      console.log(e)
      res.status(500).send({message:"Internal Server Error"})
    }) 
});