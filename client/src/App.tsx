import './App.css';
import {useRef, useState, useEffect, ReactNode} from 'react';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import Editor from "@arcgis/core/widgets/Editor";
import Expand from '@arcgis/core/widgets/Expand';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import CommentForm from './components/CommentForm';
import { poiPopupTemplate, poiFields, formTemplate, renderer} from './config/mapLayersConfig';
import api from './config/api';
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import Snackbar from '@mui/material/Snackbar';


function App() {

  const g = new GeoJSONLayer()
  const [geojsonLayerState, setGeojsonLayerState] = useState<GeoJSONLayer>(g)
  const [addedFeatures, setAddedFeatures] = useState<Array<number>>([])
  const [statusSnackbarOpen, setStatusSnackbarOpen] = useState(false)
  const [statusSnackbarText, setStatusSnackbarText] = useState<string>()
  const [commentForm, setCommentForm] = useState<ReactNode>()

  const mapRef = useRef(null);
  const editorExpandRef = useRef<any>(null);
  const commentExpandRef = useRef<any>(null);

  useEffect(() => {

  const poiGeojsonLayer = new GeoJSONLayer({
    url: `https://jge.zpdev.app/poi`,
    editingEnabled: true,
    fields: poiFields,
    popupTemplate: poiPopupTemplate,
    renderer: renderer  //optional
  });

  poiGeojsonLayer.on("edits", function(event) {
    var arr = event.addedFeatures.map((r)=>{return r.objectId})
    setAddedFeatures(prevState => prevState.concat(arr))
    setGeojsonLayerState(poiGeojsonLayer)
  });

  if (mapRef.current) {

    const map = new Map({
      basemap: "topo-vector",
      layers:[poiGeojsonLayer]
    });

    const view = new MapView({
      container: mapRef.current,
      map: map,
      center: [-119.79, 37.39],
      zoom: 7,
    });

    

    // geojsonlayer popup actions
    view.popup.on("trigger-action", (event) => {
      if (event.action.id === "add-comment") {
        commentExpand.expand()
        setCommentForm(<CommentForm
                          poi_name={view.popup.features[0].attributes.poi_name}
                          poi_id={view.popup.features[0].attributes.poi_id}
                        />) 
        view.popup.close()
      } 
    });

    reactiveUtils.when(
      () => view.popup.visible,
      () => {
        commentExpand.collapse()
      }
    );

    poiGeojsonLayer.queryExtent()
    .then(Extent=>{
      view.goTo(Extent)
    })

    let fs:any = {layer:poiGeojsonLayer} // new generic to fix typescript error
    const editor = new Editor({
      view: view,
      layerInfos: [
        {
          layer: poiGeojsonLayer as unknown as FeatureLayer,
          addEnabled:true,
          updateEnabled:false,
          deleteEnabled:false,
          formTemplate: formTemplate
        }
      ],
      snappingOptions: {
        enabled: true,
        featureSources: [fs] 
      }
    });

    const editorExpand = new Expand({
      view: view,
      content: editor,
      container:editorExpandRef.current,
      expanded: false,
      label:"",
    });

    const commentExpand = new Expand({
      view: view,
      expandIconClass: "esri-icon-comment",
      content: commentExpandRef.current,
      expanded: false
    });

    view.ui.add(editorExpand, "top-left")
    view.ui.add(commentExpand, "top-left")
    view.ui.add("save-changes-button","top-left");
  }
  
  },[]);

  return (
    <div className="App">
      
      <div className="map-view" ref={mapRef}>
        <div id="icon-link">Icons by <a target="_blank" rel='noreferrer' href="https://icons8.com">Icons8</a></div>
      </div>
      <div ref={editorExpandRef}></div>
      <div ref={commentExpandRef} id="comment-expand-content">
        {addedFeatures.length>0 ? 
          "Please save all edits via the save button below..." 
          : !commentForm ? 
          "View and submit comments by clicking on locations..." 
          : commentForm}
      </div>
      <div 
        id="save-changes-button" 
        className="esri-widget esri-widget--button esri-widget esri-interactive esri-icon-save background-color--active"
        style={addedFeatures.length > 0 ? {backgroundColor:"lightgreen"} : {}}
        onClick={()=>{
          if (addedFeatures.length === 0) {
            setStatusSnackbarText(`No features to save`)
            setStatusSnackbarOpen(true)
          } else {
          api.updateManyPois(geojsonLayerState, addedFeatures)
            .then((data)=>{
              setStatusSnackbarText(`Added ${addedFeatures.length} Feature(s)...`)
              setStatusSnackbarOpen(true)
              setAddedFeatures([])
            })
            .catch((message:any)=>setStatusSnackbarText("Error with adding features"))
          }
        }}
      ></div>
      <Snackbar 
        open={statusSnackbarOpen} 
        autoHideDuration={5000} 
        message={statusSnackbarText}
        onClose={()=>{setStatusSnackbarOpen(!statusSnackbarOpen)}}
        anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
      />
    </div>
  );
}

export default App;
