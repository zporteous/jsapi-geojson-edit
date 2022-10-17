import axios from "axios";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import Query from "@arcgis/core/rest/support/Query";
import { arcgisToGeoJSON } from "@terraformer/arcgis";

const backend = axios.create({})
const baseUrl = 'https://jge.zpdev.app'

function a2g(layer:GeoJSONLayer, ids:number[]){
  return new Promise((resolve, reject) => {
    const query = new Query()
    query.where = `poi_id in (${ids.join(',')})`
    query.returnGeometry = true;
    layer
      .queryFeatures(query)
      .then(({ features }) => {
        const FeatureCollection = {
          type: "FeatureCollection",
          features: [] as any
        };
        FeatureCollection.features = features.map(
          ({ attributes, geometry }, index) => {
            return {
              id: index,
              properties: attributes,
              geometry: arcgisToGeoJSON(geometry)
            };
          }
        );
          resolve(FeatureCollection);
      })
      .catch((error) => {
        console.warn(error)
        reject({message:"error"})
      }); 
  }
)};

interface commentSubmission{
  poi_id:number
  commenter:string
  comment:string
  importance:string
}

//functions to make api calls
const api = {

  getPois: (body: Object, poi_id: number ) => {
    return backend.get(`${baseUrl}/poi`, body);
  },

  updateManyPois: async (layer: GeoJSONLayer, ids:number[]) => {
    var features = await a2g(layer,ids)
    return backend.put(`${baseUrl}/poi/editMany`, features);
  },

  getComments: (poi_id: number ) => {
    return backend.get(`${baseUrl}/comment/${poi_id}`);
  },

  createComment: (body:commentSubmission) => {
    return backend.post(`${baseUrl}/comment/${body.poi_id}`, body);
  },

  deleteComment: (comment_id: number) => {
    return backend.delete(`${baseUrl}/comment/${comment_id}`);
  },

};

export default api;