const db = require('../db');
require("dotenv").config();
const Router = require('express-promise-router');

const router = new Router()
// export our router to be mounted by the parent application
module.exports = router


router.get("/:poi_id", async (req, res) => {
  db.query(`select * from comments where poi_id = $1`,[req.params.poi_id])
    .then((data) => {
      res.send(data.rows)
  })
    .catch(e=>{
      console.log(e)
      res.status(500).send({message:"Internal Server Error"})
  }) 
});

router.post("/:poi_id", async (req, res) => {
  var client = await db.getClient();
  const {commenter, comment, importance} = req.body
  try {
      await client.query('BEGIN')
      const queryText = `insert into comments (poi_id, commenter, comment, importance) Values ( $1,$2,$3, $4 ) returning comment_id`;
      const {rows} = await client.query(queryText, [req.params.poi_id, commenter, comment, importance]);
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

router.put("/:comment_id", async (req, res) => {
  const {commenter, comment, importance} = req.body
  db.query(
    `update comments set
    commenter = $1,
    comment = $2,
    importance = $3
    where comment_id = $4 `,[commenter,comment,importance,req.params.comment_id])
  .then((data)=> {
    data.rowCount != 0 
    ? res.send({message:"Update Successful"}) 
    : res.status(500).send({message:"No Such comment exists"}) 
  })
  .catch(e=>{
    console.log(e)
    res.status(500).send({message:"Issue with saving, please try again... "})
  }) 
});

router.delete("/:comment_id", async (req, res) => {
  db.query(`delete from comments where comment_id = $1`,[req.params.comment_id])
  .then((data)=> {
    data.rowCount != 0 
    ? res.send({message:"Delete Successful"}) 
    : res.status(500).send({message:"No Such comment exists"}) 
  })
    .catch(e=>{
      console.log(e)
      res.status(500).send({message:"Internal Server Error"})
  }) 
});









