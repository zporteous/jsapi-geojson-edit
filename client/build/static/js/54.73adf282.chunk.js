"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[54],{70054:function(e,t,r){r.r(t),r.d(t,{default:function(){return q}});var o=r(74165),n=r(15861),i=r(1413),l=r(15671),s=r(43144),a=r(60136),u=r(54062),y=r(27366),p=r(42265),c=r(76200),d=(r(51508),r(92026)),v=r(97642),f=r(66978),h=r(35995),S=r(49861),m=(r(63780),r(93169),r(25243),r(38511)),b=r(69912),g=r(53866),C=r(92975),_=r(30651),k=r(6693),Z=r(6061),w=r(29598),x=r(71684),G=r(56811),R=r(45948),P=r(22061),j=r(16851),F=r(91946),E=r(16072),M=r(61459),L=["atom","xml"],T={base:P.Z,key:"type",typeMap:{"simple-line":j.default},errorContext:"symbol"},A={base:P.Z,key:"type",typeMap:{"picture-marker":F.Z,"simple-marker":E.default},errorContext:"symbol"},D={base:P.Z,key:"type",typeMap:{"simple-fill":M.default},errorContext:"symbol"},O=function(e){(0,a.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;(0,l.Z)(this,r);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).description=null,e.fullExtent=null,e.legendEnabled=!0,e.lineSymbol=null,e.pointSymbol=null,e.polygonSymbol=null,e.operationalLayerType="GeoRSS",e.url=null,e.type="geo-rss",e}return(0,s.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,i.Z)({url:e},t):e}},{key:"readFeatureCollections",value:function(e,t){return t.featureCollection.layers.forEach((function(e){var t,r=e.layerDefinition.drawingInfo.renderer.symbol;r&&"esriSFS"===r.type&&(null===(t=r.outline)||void 0===t?void 0:t.style.includes("esriSFS"))&&(r.outline.style="esriSLSSolid")})),t.featureCollection.layers}},{key:"hasPoints",get:function(){return this._hasGeometry("esriGeometryPoint")}},{key:"hasPolylines",get:function(){return this._hasGeometry("esriGeometryPolyline")}},{key:"hasPolygons",get:function(){return this._hasGeometry("esriGeometryPolygon")}},{key:"title",get:function(){var e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,h.vt)(this.url,L)||"GeoRSS":e||""},set:function(e){this._set("title",e)}},{key:"load",value:function(e){var t=this,r=(0,d.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(f.r9).then((function(){return t._fetchService(r)})).then((function(e){t.read(e,{origin:"service"})}))),Promise.resolve(this)}},{key:"hasDataChanged",value:function(){var e=(0,n.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchService();case 2:return t=e.sent,e.abrupt("return",(this.read(t,{origin:"service",ignoreDefaults:!0}),!0));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_fetchService",value:function(){var e=(0,n.Z)((0,o.Z)().mark((function e(t){var r,n,i,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.spatialReference,e.next=3,(0,c.default)(p.Z.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:(0,C.oR)(n)?void 0:null!==(r=n.wkid)&&void 0!==r?r:JSON.stringify(n)},signal:t});case 3:return i=e.sent,l=i.data,e.abrupt("return",l);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_hasGeometry",value:function(e){var t,r;return null!==(t=null===(r=this.featureCollections)||void 0===r?void 0:r.some((function(t){var r,o;return(null===(r=t.featureSet)||void 0===r?void 0:r.geometryType)===e&&(null===(o=t.featureSet.features)||void 0===o?void 0:o.length)>0})))&&void 0!==t&&t}}]),r}((0,k.h)((0,x.Q)((0,Z.q)((0,w.I)((0,G.M)((0,v.R)(_.Z)))))));(0,y._)([(0,S.Cb)()],O.prototype,"description",void 0),(0,y._)([(0,S.Cb)()],O.prototype,"featureCollections",void 0),(0,y._)([(0,m.r)("service","featureCollections",["featureCollection.layers"])],O.prototype,"readFeatureCollections",null),(0,y._)([(0,S.Cb)({type:g.Z,json:{name:"lookAtExtent"}})],O.prototype,"fullExtent",void 0),(0,y._)([(0,S.Cb)(R.id)],O.prototype,"id",void 0),(0,y._)([(0,S.Cb)(R.rn)],O.prototype,"legendEnabled",void 0),(0,y._)([(0,S.Cb)({types:T,json:{write:!0}})],O.prototype,"lineSymbol",void 0),(0,y._)([(0,S.Cb)({type:["show","hide"]})],O.prototype,"listMode",void 0),(0,y._)([(0,S.Cb)({types:A,json:{write:!0}})],O.prototype,"pointSymbol",void 0),(0,y._)([(0,S.Cb)({types:D,json:{write:!0}})],O.prototype,"polygonSymbol",void 0),(0,y._)([(0,S.Cb)({type:["GeoRSS"]})],O.prototype,"operationalLayerType",void 0),(0,y._)([(0,S.Cb)(R.HQ)],O.prototype,"url",void 0),(0,y._)([(0,S.Cb)({json:{origins:{service:{read:{source:"name",reader:function(e){return e||void 0}}}}}})],O.prototype,"title",null),(0,y._)([(0,S.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],O.prototype,"type",void 0);var q=O=(0,y._)([(0,b.j)("esri.layers.GeoRSSLayer")],O)}}]);
//# sourceMappingURL=54.73adf282.chunk.js.map