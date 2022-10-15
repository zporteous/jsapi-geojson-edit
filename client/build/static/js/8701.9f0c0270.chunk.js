"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[8701],{98701:function(e,t,r){r.r(t),r.d(t,{default:function(){return Y}});var n=r(37762),i=r(74165),o=r(15861),s=r(15671),a=r(43144),u=r(97326),p=r(11752),l=r(61120),d=r(60136),c=r(54062),y=r(27366),f=(r(59486),r(44055)),v=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(79850),r(9014),r(40464)),h=r(97642),m=r(49861),g=(r(63780),r(93169),r(25243),r(69912)),b=r(27823),C=r(30651),S=r(29439),_=r(10064),x=r(54472),k=r(92026),Z=r(67213),w=r(49818),I=r(78952),F=function(e){(0,d.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).featureDefinition=null,e.type="ogc-feature",e}return(0,a.Z)(r,[{key:"load",value:function(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}},{key:"getFeatureDefinition",value:function(){var e=this.featureDefinition,t=e.collection,r=e.layerDefinition,n=e.spatialReference,i=e.supportedCrs,o=this.layer,s=o.apiKey;return{capabilities:o.capabilities,collection:t,layerDefinition:r,queryParameters:{apiKey:s,customParameters:o.customParameters},spatialReference:n,supportedCrs:i}}},{key:"queryExtent",value:function(e){return null}},{key:"queryFeatureCount",value:function(e){return null}},{key:"queryFeatures",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.queryFeaturesJSON(e,t).then((function(e){return w.default.fromJSON(e)}))}},{key:"queryFeaturesJSON",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.getFeatureDefinition();return this.load(t).then((function(){return(0,Z.yN)(r,e,t)}))}},{key:"queryObjectIds",value:function(e){return null}},{key:"serviceSupportsSpatialReference",value:function(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}},{key:"_conformsToType",value:function(e,t){var r,n=new RegExp("^".concat(t,"$"),"i");return null!==(r=e.conformsTo.some((function(e){return n.test(e)})))&&void 0!==r&&r}},{key:"_getCapabilities",value:function(e,t){var r,n,i,o,s,a,u,p=(0,k.pC)(t)?null===(r=t.components)||void 0===r?void 0:r.parameters:null;return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!==(n=null!==(i=null===p||void 0===p||null===(o=p.limit)||void 0===o||null===(s=o.schema)||void 0===s?void 0:s.maximum)&&void 0!==i?i:null===p||void 0===p||null===(a=p.limitFeatures)||void 0===a||null===(u=a.schema)||void 0===u?void 0:u.maximum)&&void 0!==n?n:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}},{key:"_getExtent",value:function(e){var t,r=null===(t=e.extent)||void 0===t?void 0:t.spatial;if(!r)return null;var n=r.bbox[0],i=4===n.length,o=n[0],s=n[1],a=i?void 0:n[2];return{xmin:o,ymin:s,xmax:i?n[2]:n[3],ymax:i?n[3]:n[4],zmin:a,zmax:i?void 0:n[5],spatialReference:I.Z.WGS84.toJSON()}}},{key:"_getStorageSpatialReference",value:function(e){var t,r=null!==(t=e.storageCrs)&&void 0!==t?t:Z.$9,n=(0,Z.d)(r);return(0,k.Wi)(n)?I.Z.WGS84:new I.Z({wkid:n})}},{key:"_getSupportedSpatialReferences",value:function(e,t){var r,n="#/crs",i=null!==(r=e.crs)&&void 0!==r?r:[Z.$9],o=i.includes(n)?i.filter((function(e){return e!==n})).concat(t.crs):i,s=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return o.filter((function(e){return!s.test(e)}))}},{key:"_loadOGCServices",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var o,s,a,u,p,l,d,c,y,f,v,h,m,g,C,x,w,I,F,R,O,D,T,j,P,E,q,G,Q,N;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(0,k.pC)(r)?r.signal:null,s=t.apiKey,a=t.collectionId,u=t.customParameters,p=t.fields,l=t.geometryType,d=t.hasZ,c=t.objectIdField,y=t.timeInfo,f=t.url,v={fields:null===p||void 0===p?void 0:p.map((function(e){return e.toJSON()})),geometryType:b.P$.toJSON(l),hasZ:d,objectIdField:c,timeInfo:null===y||void 0===y?void 0:y.toJSON()},h={apiKey:s,customParameters:u,signal:o},e.next=14,(0,Z.gp)(f,h);case 14:return m=e.sent,e.next=17,Promise.all([(0,Z.G4)(m,h),(0,Z.j)(m,h)]);case 17:if(g=e.sent,C=(0,S.Z)(g,2),x=C[0],w=C[1],this._conformsToType(x,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson")){e.next=23;break}throw new _.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");case 23:if(I=w.collections.find((function(e){return e.id===a})),I){e.next=26;break}throw new _.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");case 26:if(!this._conformsToType(x,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")){e.next=32;break}return e.next=29,(0,Z.eS)(m,h);case 29:e.t0=e.sent,e.next=33;break;case 32:e.t0=null;case 33:return F=e.t0,e.next=36,(0,Z.w9)(I,v,h);case 36:R=e.sent,O=this._getCapabilities(R.hasZ,F),D=this._getExtent(I),T=this._getStorageSpatialReference(I).toJSON(),j=this._getSupportedSpatialReferences(I,w),P=new RegExp("^".concat(Z.Lu),"i"),E={},q=(0,n.Z)(j);try{for(q.s();!(G=q.n()).done;)Q=G.value,N=(0,Z.d)(Q),(0,k.pC)(N)&&(E[N]||(E[N]=Q.replace(P,"")))}catch(i){q.e(i)}finally{q.f()}R.extent=D,this.featureDefinition={capabilities:O,collection:I,layerDefinition:R,queryParameters:{},spatialReference:T,supportedCrs:E};case 46:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(x.Z);(0,y._)([(0,m.Cb)()],F.prototype,"featureDefinition",void 0),(0,y._)([(0,m.Cb)({constructOnly:!0})],F.prototype,"layer",void 0),(0,y._)([(0,m.Cb)()],F.prototype,"type",void 0),F=(0,y._)([(0,g.j)("esri.layers.graphics.sources.OGCFeatureSource")],F);var R=r(27961),O=r(6693),D=r(46671),T=r(7632),j=r(6061),P=r(94207),E=r(29598),q=r(71684),G=r(56811),Q=r(99063),N=r(45948),A=r(39042),L=r(87165),M=r(83040),B=r(25610),z=r(37270),H=r(77748),J=r(85116),U=r(21149),V=r(81085),W=r(53866),$=(0,B.v)(),K=function(e){(0,d.Z)(r,e);var t=(0,c.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).collectionId=null,n.copyright=null,n.definitionExpression=null,n.description=null,n.displayField=null,n.elevationInfo=null,n.featureReduction=null,n.fields=null,n.fieldsIndex=null,n.fullExtent=null,n.geometryType=null,n.hasZ=void 0,n.labelingInfo=null,n.labelsVisible=!0,n.legendEnabled=!0,n.objectIdField=null,n.operationalLayerType="OGCFeatureLayer",n.popupEnabled=!0,n.popupTemplate=null,n.screenSizePerspectiveEnabled=!0,n.source=new F({layer:(0,u.Z)(n)}),n.spatialReference=null,n.title=null,n.type="ogc-feature",n.typeIdField=null,n.types=null,n.url=null,n}return(0,a.Z)(r,[{key:"destroy",value:function(){var e;null===(e=this.source)||void 0===e||e.destroy()}},{key:"load",value:function(e){var t=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((function(){return t._fetchService(e)}))),this.when()}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"renderer",set:function(e){(0,z.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"on",value:function(e,t){return(0,p.Z)((0,l.Z)(r.prototype),"on",this).call(this,e,t)}},{key:"createPopupTemplate",value:function(e){return(0,V.eZ)(this,e)}},{key:"createQuery",value:function(){return new U.Z}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,n,i=this,o=!1,s=null===t||void 0===t||null===(r=t.feature)||void 0===r?void 0:r.attributes,a=this.typeIdField&&(null===s||void 0===s?void 0:s[this.typeIdField]);return null!=a&&this.types&&(o=this.types.some((function(t){var r,o;return t.id==a&&("inherited"===(null===(o=n=null===(r=t.domains)||void 0===r?void 0:r[e])||void 0===o?void 0:o.type)&&(n=i._getLayerDomain(e)),!0)}))),o||n||(n=this._getLayerDomain(e)),n}},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(U.Z.from(e)||r.createQuery(),t)})).then((function(e){var t;return null!==e&&void 0!==e&&null!==(t=e.features)&&void 0!==t&&t.forEach((function(e){e.layer=e.sourceLayer=r})),e}))}},{key:"serviceSupportsSpatialReference",value:function(e){var t,r;return null!==(t=null===(r=this.source)||void 0===r?void 0:r.serviceSupportsSpatialReference(e))&&void 0!==t&&t}},{key:"_fetchService",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.source.load(t);case 2:this.read(this.source.featureDefinition,{origin:"service"}),(0,z.YN)(this.renderer,this.fieldsIndex),(0,z.UF)(this.timeInfo,this.fieldsIndex);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getLayerDomain",value:function(e){if(!this.fields)return null;var t,r=(0,n.Z)(this.fields);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(i.name===e&&i.domain)return i.domain}}catch(o){r.e(o)}finally{r.f()}return null}}]),r}((0,R.V)((0,D.N)((0,T.b)((0,O.h)((0,P.c)((0,Q.n)((0,G.M)((0,j.q)((0,E.I)((0,q.Q)((0,h.R)(C.Z))))))))))));(0,y._)([(0,m.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],K.prototype,"capabilities",void 0),(0,y._)([(0,m.Cb)({type:String,json:{write:!0}})],K.prototype,"collectionId",void 0),(0,y._)([(0,m.Cb)({type:String})],K.prototype,"copyright",void 0),(0,y._)([(0,m.Cb)({readOnly:!0})],K.prototype,"defaultPopupTemplate",null),(0,y._)([(0,m.Cb)({type:String})],K.prototype,"definitionExpression",void 0),(0,y._)([(0,m.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],K.prototype,"description",void 0),(0,y._)([(0,m.Cb)({type:String})],K.prototype,"displayField",void 0),(0,y._)([(0,m.Cb)(N.PV)],K.prototype,"elevationInfo",void 0),(0,y._)([(0,m.Cb)(A.d)],K.prototype,"featureReduction",void 0),(0,y._)([(0,m.Cb)({type:[M.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],K.prototype,"fields",void 0),(0,y._)([(0,m.Cb)($.fieldsIndex)],K.prototype,"fieldsIndex",void 0),(0,y._)([(0,m.Cb)({readOnly:!0,type:W.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],K.prototype,"fullExtent",void 0),(0,y._)([(0,m.Cb)({type:b.Mk.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:b.Mk.read}}}}})],K.prototype,"geometryType",void 0),(0,y._)([(0,m.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],K.prototype,"hasZ",void 0),(0,y._)([(0,m.Cb)({type:Boolean,readOnly:!0})],K.prototype,"isTable",null),(0,y._)([(0,m.Cb)({type:[H.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:J.r},write:!0}}}})],K.prototype,"labelingInfo",void 0),(0,y._)([(0,m.Cb)(N.iR)],K.prototype,"labelsVisible",void 0),(0,y._)([(0,m.Cb)(N.rn)],K.prototype,"legendEnabled",void 0),(0,y._)([(0,m.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],K.prototype,"objectIdField",void 0),(0,y._)([(0,m.Cb)({type:["OGCFeatureLayer"]})],K.prototype,"operationalLayerType",void 0),(0,y._)([(0,m.Cb)(N.C_)],K.prototype,"popupEnabled",void 0),(0,y._)([(0,m.Cb)({type:f.Z,json:{name:"popupInfo",write:!0}})],K.prototype,"popupTemplate",void 0),(0,y._)([(0,m.Cb)({types:v.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:v.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],K.prototype,"renderer",null),(0,y._)([(0,m.Cb)(N.YI)],K.prototype,"screenSizePerspectiveEnabled",void 0),(0,y._)([(0,m.Cb)({readOnly:!0})],K.prototype,"source",void 0),(0,y._)([(0,m.Cb)({readOnly:!0,type:I.Z,json:{origins:{service:{read:!0}}}})],K.prototype,"spatialReference",void 0),(0,y._)([(0,m.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],K.prototype,"title",void 0),(0,y._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],K.prototype,"type",void 0),(0,y._)([(0,m.Cb)({type:String,readOnly:!0})],K.prototype,"typeIdField",void 0),(0,y._)([(0,m.Cb)({type:[L.Z]})],K.prototype,"types",void 0),(0,y._)([(0,m.Cb)(N.HQ)],K.prototype,"url",void 0);var Y=K=(0,y._)([(0,g.j)("esri.layers.OGCFeatureLayer")],K)}}]);
//# sourceMappingURL=8701.9f0c0270.chunk.js.map