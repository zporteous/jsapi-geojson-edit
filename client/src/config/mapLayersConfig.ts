import Field from '@arcgis/core/layers/support/Field';
import CodedValueDomain from '@arcgis/core/layers/support/CodedValueDomain';
import FieldElement from "@arcgis/core/form/elements/FieldElement";
import FormTemplate from "@arcgis/core/form/FormTemplate";
import FeatureForm from "@arcgis/core/widgets/FeatureForm";
import CustomContent from "@arcgis/core/popup/content/CustomContent";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import ActionButton from "@arcgis/core/support/actions/ActionButton";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol"; 
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol"; 

import api from './api';


export const importance = new CodedValueDomain({
  "codedValues":[
    {
      "name":"High",
      "code":"High"
    },
    {
      "name":"Medium",
      "code":"Medium"
    },
    {
      "name":"Low",
      "code":"Low"
    }
  ]
})

export const poi_type = new CodedValueDomain({
  "codedValues":[
    {
      "name":"Mountain",
      "code":"Mountain"
    },
    {
      "name":"Hike",
      "code":"Hike"
    },
    {
      "name":"River",
      "code":"River"
    },
    {
      "name":"Waterfall",
      "code":"Waterfall"
    },
    {
      "name":"Meadow",
      "code":"Meadow"
    },
    {
      "name":"Lake",
      "code":"Lake"
    },
    {
      "name":"Fishing",
      "code":"Fishing"
    },
    {
      "name":"Camping",
      "code":"Camping"
    }
  ]
})

export const poiFields=[
  new Field({
    "name":"poi_id",
    "alias":"ID",
    "type":"integer"
  }),
  new Field({
    "name":"poi_name",
    "alias":"Name",
    "type":"string",
  }),
  new Field({
    "name":"poi_type",
    "alias":"Type",
    "type":"string",
    "domain":poi_type,
  }),
  new Field({
    "name":"add_date",
    "alias":"Date added",
    "type":"string",
  }),
  new Field({
    "name":"update_date",
    "alias":"Updated",
    "type":"string",
  }),
  new Field({
    "name":"description",
    "alias":"Description",
    "type":"string",
  }),
  new Field({
    "name":"num_comments",
    "alias":"Number of comments",
    "type":"integer"
  })
]

const poi_edit_1 = new FieldElement({
  fieldName: "poi_name",
  label: "Place Name",
});

const poi_edit_2 = new FieldElement({
  fieldName: "poi_type",
  label: "Type",
});

const poi_edit_3 = new FieldElement({
  fieldName: "description",
  label: "Description",
});

export const formTemplate = new FormTemplate({
  title: "Add a new point of interest",
  description: "Enter all relevant information below",
  elements: [poi_edit_1, poi_edit_2, poi_edit_3] 
});



const formatAMPM = (date:any) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes.toString().padStart(2, '0');
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export const contentWidget = new CustomContent({
  outFields: ["*"],
  creator: async (feature:any) => {
    let res = await api.getComments(feature.graphic.attributes.poi_id)
    if (res.data.length===0) {
      return `<div class="comment-feed-title">No Comments Yet for ${feature.graphic.attributes.poi_name}...</div>`
    }
    let comments = res.data.map((row:any) => {
      let d = Date.parse(row.comment_date)
      let date = new Date(d)
      return `
      <div class="comment-container">
            <div class="comment-user-name">${row.commenter}</div>
            <div class="comment-text-box"><p>${row.comment}</p></div>
            <div class="comment-time">${date.toDateString()} ${formatAMPM(date)}</div>
      </div>
      `
    })
    return `
    <div class="comment-feed-container">
        <div class="comment-feed-title">Comments for ${feature.graphic.attributes.poi_name}</div>
        ${comments.join("")}
        <input></input>
    </div>
    `
  }
});

const popupCommentAction = new ActionButton( {
  title: "Add a comment",
  id: "add-comment",
  className: "esri-icon-comment"
});

export const poiPopupTemplate = new PopupTemplate({
  title: "ID: {poi_id}",
  content: [contentWidget],
  actions:[popupCommentAction]
});

export const renderer = new UniqueValueRenderer({
  field: "poi_type",
  // defaultSymbol: ,  
  uniqueValueInfos: [{
    // All features with value of "North" will be blue
    value: "Mountain",
    symbol: new PictureMarkerSymbol( {
      url: "https://img.icons8.com/stickers/100/000000/mountain.png",
      width:"50px",
      height:"50px"
    })
  }, {
    // All features with value of "East" will be green
    value: "River",
    symbol: new PictureMarkerSymbol( {
      url: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-river-vacation-planning-adventure-flaticons-lineal-color-flat-icons.png",
      width:"40px",
      height:"40px"
    })
  }, {
    // All features with value of "South" will be red
    value: "Hike",
    symbol: new PictureMarkerSymbol( {
      url: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-hiking-summer-travel-flaticons-lineal-color-flat-icons.png",
      width:"40px",
      height:"40px"
    })
  }, {
    // All features with value of "West" will be yellow
    value: "Waterfall",
    symbol: new PictureMarkerSymbol( {
      url: "https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-waterfall-adventure-wanicon-flat-wanicon.png",
      width:"40px",
      height:"40px"
    })
  },{
    // All features with value of "South" will be red
    value: "Meadow",
    symbol: new PictureMarkerSymbol( {
      url: "https://img.icons8.com/external-filled-color-icons-papa-vector/78/000000/external-Meadow-land-types-filled-color-icons-papa-vector.png",
      width:"40px",
      height:"40px"
    })
  },{
    // All features with value of "South" will be red
    value: "Lake",
    symbol: new PictureMarkerSymbol( {
      url: "https://img.icons8.com/plasticine/100/000000/lake.png",
      width:"40px",
      height:"40px"
    })
  },{
    // All features with value of "South" will be red
    value: "Fishing",
    symbol: new PictureMarkerSymbol( {
      url: "https://img.icons8.com/stickers/100/000000/fishing-pole.png",
      width:"50px",
      height:"50px"
    })
  },{
    // All features with value of "South" will be red
    value: "Camping",
    symbol: new PictureMarkerSymbol( {
      url: "https://img.icons8.com/emoji/48/000000/camping.png",
      width:"40px",
      height:"40px"
    })
  }
],
});