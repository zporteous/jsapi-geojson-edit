"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[189],{66576:function(t,e,n){n.d(e,{B:function(){return m}});var r=n(74165),i=n(15861),o=n(1413),a=n(37762),s=n(92026),l=n(80292),u=n(35995),p=n(71907),c=n(33397),y=n(25265),f=n(49861);function v(t){return d[function(t){return t instanceof Blob?t.type:function(t){var e=(0,u.Ml)(t);return b[e]||h}(t.url)}(t)]||g}var d={},h="text/plain",g=d[h],b={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(var C in b)d[b[C]]=C;var _=n(53283);function m(t){var e=(0,s.pC)(t)&&t.origins?t.origins:[void 0];return function(n,r){var i,p=function(t,e,n){if((0,s.pC)(t)&&"resource"===t.type)return function(t,e,n){var r=(0,c.VZ)(e,n);return{type:String,read:function(t,e,n){var i=(0,_.r)(t,e,n);return r.type===String?i:"function"==typeof r.type?new r.type({url:i}):void 0},write:{writer:function(e,i,a,p){if(!p||!p.resources)return"string"==typeof e?void(i[a]=(0,_.t)(e,p)):void(i[a]=e.write({},p));var c=function(t){return(0,s.Wi)(t)?null:"string"==typeof t?t:t.url}(e),f=c?(0,_.t)(c,(0,o.Z)((0,o.Z)({},p),{},{verifyItemRelativeUrls:p&&p.verifyItemRelativeUrls?{writtenUrls:p.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),_.M.NO):null,d=r.type!==String&&(!(0,l.l)(this)||p&&p.origin&&this.originIdOf(n)>(0,y.M9)(p.origin));p&&p.portalItem&&(0,s.pC)(f)&&!(0,u.YP)(f)?d?function(t,e,n,r,i,o,a,s){var l=a.portalItem.resourceFromPath(r),p=j(n,r,a);v(p)===(0,u.Ml)(l.path)?(Z(t,e,l,p,a.resources.toUpdate),i[o]=r):w(t,e,n,r,i,o,a,s)}(this,n,e,f,i,a,p,t):function(t,e,n,r){r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(t)}),e[n]=t}(f,i,a,p):p&&p.portalItem&&((0,s.Wi)(f)||(0,s.pC)((0,_.i)(f))||(0,u.jc)(f)||d)?w(this,n,e,f,i,a,p,t):i[a]=f}}}}(t,e,n);switch((0,s.pC)(t)&&t.type?t.type:"other"){case"other":return{read:!0,write:!0};case"url":return{read:_.p.read,write:_.p.write}}}(t,n,r),d=(0,a.Z)(e);try{for(d.s();!(i=d.n()).done;){var h=i.value,g=(0,f.CJ)(n,h,r);for(var b in p)g[b]=p[b]}}catch(C){d.e(C)}finally{d.f()}}}function w(t,e,n,r,i,o,a,l){var c=(0,p.D)(),y=j(n,r,a),f=(0,u.v_)((0,s.U2)(l,"prefix"),c),d="".concat(f,".").concat(v(y)),h=a.portalItem.resourceFromPath(d);(0,u.jc)(r)&&a.resources.pendingOperations.push(function(t){return I.apply(this,arguments)}(r).then((function(t){h.path="".concat(f,".").concat(v(t)),i[o]=h.itemRelativeUrl})).catch((function(){}))),Z(t,e,h,y,a.resources.toAdd),i[o]=h.itemRelativeUrl}function Z(t,e,n,r,i){i.push({resource:n,content:r,finish:function(n){!function(t,e,n){"string"==typeof t[e]?t[e]=n.url:t[e].url=n.url}(t,e,n)}})}function j(t,e,n){return"string"==typeof t?{url:e}:new Blob([JSON.stringify(t.toJSON(n))],{type:"application/json"})}function I(){return I=(0,i.Z)((0,r.Z)().mark((function t(e){var i,o,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(n,76200));case 2:return i=t.sent.default,t.next=5,i(e,{responseType:"blob"});case 5:return o=t.sent,a=o.data,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)}))),I.apply(this,arguments)}},80292:function(t,e,n){function r(t){return t&&"getAtOrigin"in t&&"originOf"in t}n.d(e,{l:function(){return r}})},40189:function(t,e,n){n.r(e),n.d(e,{default:function(){return Y}});var r=n(74165),i=n(15861),o=n(15671),a=n(43144),s=n(60136),l=n(54062),u=n(27366),p=n(37762),c=n(85015),y=n(11582),f=n(79056),v=n(46784),d=n(92026),h=n(49861),g=(n(63780),n(93169),n(25243),n(69912)),b=0,C=function(t){(0,s.Z)(n,t);var e=(0,l.Z)(n);function n(t){var r;return(0,o.Z)(this,n),(r=e.call(this,t)).id="".concat(Date.now().toString(16),"-analysis-").concat(b++),r.title=null,r}return(0,a.Z)(n,[{key:"parent",get:function(){return this._get("parent")},set:function(t){var e=this.parent;if((0,d.pC)(e))switch(e.type){case"line-of-sight":e.removeAnalysis(this);break;case"2d":case"3d":e.analyses.includes(this)&&e.analyses.remove(this)}this._set("parent",t)}},{key:"isEditable",get:function(){return this.requiredPropertiesForEditing.every(d.pC)}}]),n}((0,v.eC)((0,y.J)((0,f.IG)(c.Z))));(0,u._)([(0,h.Cb)({type:String,constructOnly:!0,clonable:!1})],C.prototype,"id",void 0),(0,u._)([(0,h.Cb)({type:String})],C.prototype,"title",void 0),(0,u._)([(0,h.Cb)({constructOnly:!0})],C.prototype,"type",void 0),(0,u._)([(0,h.Cb)({clonable:!1,value:null})],C.prototype,"parent",null),(0,u._)([(0,h.Cb)({readOnly:!0})],C.prototype,"extent",void 0),(0,u._)([(0,h.Cb)({readOnly:!0})],C.prototype,"isEditable",null),(0,u._)([(0,h.Cb)({readOnly:!0})],C.prototype,"requiredPropertiesForEditing",void 0),(0,u._)([(0,h.Cb)({readOnly:!0})],C.prototype,"nonEditableMessage",void 0);var _=C=(0,u._)([(0,g.j)("esri.analysis.Analysis")],C);function m(t,e){return w(t)===w(e)}function w(t){if((0,d.Wi)(t))return null;var e,n=null!=t.layer?t.layer.id:"";return null==(e=null!=t.objectId?t.objectId:null!=t.layer&&"objectIdField"in t.layer&&null!=t.layer.objectIdField&&null!=t.attributes?t.attributes[t.layer.objectIdField]:t.uid)?null:"o-".concat(n,"-").concat(e)}var Z={json:{write:{writer:function(t,e){var n;(0,d.Wi)(t)||null==(null===(n=t.layer)||void 0===n?void 0:n.objectIdField)||null==t.attributes||(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(t){if(null!=t.layerId&&null!=t.objectId)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}}}}};var j=n(66576),I=n(7882),x=n(64575),O=function(t){(0,s.Z)(n,t);var e=(0,l.Z)(n);function n(t){var r;return(0,o.Z)(this,n),(r=e.call(this,t)).position=null,r.elevationInfo=null,r.feature=null,r}return(0,a.Z)(n,[{key:"equals",value:function(t){return(0,d._W)(this.position,t.position)&&(0,d._W)(this.elevationInfo,t.elevationInfo)&&m(this.feature,t.feature)}}]),n}((0,v.eC)((0,y.J)(c.Z)));(0,u._)([(0,h.Cb)({type:I.Z}),(0,j.B)()],O.prototype,"position",void 0),(0,u._)([(0,h.Cb)({type:x.ZP}),(0,j.B)()],O.prototype,"elevationInfo",void 0),(0,u._)([(0,h.Cb)(Z)],O.prototype,"feature",void 0);var k=O=(0,u._)([(0,g.j)("esri.analysis.LineOfSightAnalysisObserver")],O),E=function(t){(0,s.Z)(n,t);var e=(0,l.Z)(n);function n(t){var r;return(0,o.Z)(this,n),(r=e.call(this,t)).position=null,r.elevationInfo=null,r.feature=null,r}return(0,a.Z)(n,[{key:"equals",value:function(t){return(0,d._W)(this.position,t.position)&&(0,d._W)(this.elevationInfo,t.elevationInfo)&&m(this.feature,t.feature)}}]),n}((0,v.eC)(y.j));(0,u._)([(0,h.Cb)({type:I.Z}),(0,j.B)()],E.prototype,"position",void 0),(0,u._)([(0,h.Cb)({type:x.ZP}),(0,j.B)()],E.prototype,"elevationInfo",void 0),(0,u._)([(0,h.Cb)(Z)],E.prototype,"feature",void 0);var S=E=(0,u._)([(0,g.j)("esri.analysis.LineOfSightAnalysisTarget")],E),P=n(40281),R=n(60354),W=n(94172),F=n(79803),z=n(41414),L=n(74509),A=P.Z.ofType(S),U=function(t){(0,s.Z)(n,t);var e=(0,l.Z)(n);function n(t){var r;return(0,o.Z)(this,n),(r=e.call(this,t)).type="line-of-sight",r.observer=null,r.extent=null,r.nonEditableMessage="Assign an observer location to the analysis to allow editing.",r}return(0,a.Z)(n,[{key:"initialize",value:function(){var t=this;this.own((0,W.YP)((function(){return t._computeExtent()}),(function(e){((0,d.Wi)(e)||(0,d.Wi)(e.pending))&&t._set("extent",(0,d.pC)(e)?e.extent:null)}),W.tX))}},{key:"targets",get:function(){return this._get("targets")||new A},set:function(t){this._set("targets",(0,R.Z)(t,this.targets,A))}},{key:"spatialReference",get:function(){return(0,d.pC)(this.observer)&&(0,d.pC)(this.observer.position)?this.observer.position.spatialReference:null}},{key:"requiredPropertiesForEditing",get:function(){return[(0,d.yw)(this.observer,(function(t){return t.position}))]}},{key:"waitComputeExtent",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this._computeExtent(),t.abrupt("return",(0,d.pC)(e)?(0,d.Wg)(e.pending):null);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"_computeExtent",value:function(){var t=this.spatialReference;if((0,d.Wi)(this.observer)||(0,d.Wi)(this.observer.position)||(0,d.Wi)(t))return null;var e,n=function(t){return"absolute-height"===(0,L.VW)(t.position,t.elevationInfo)},r=this.observer.position,i=(0,z.al)(r.x,r.y,r.z,r.x,r.y,r.z),o=(0,p.Z)(this.targets);try{for(o.s();!(e=o.n()).done;){var a=e.value;if((0,d.pC)(a.position)){var s=(0,F.dz)(a.position,t);if((0,d.pC)(s.pending))return{pending:s.pending,extent:null};if((0,d.pC)(s.geometry)){var l=s.geometry,u=l.x,c=l.y,y=l.z;(0,z.pp)(i,[u,c,y])}}}}catch(v){o.e(v)}finally{o.f()}var f=(0,z.HH)(i,t);return n(this.observer)&&this.targets.every(n)||(f.zmin=null,f.zmax=null),{pending:null,extent:f}}},{key:"clear",value:function(){this.observer=null,this.targets.removeAll()}}]),n}(_);(0,u._)([(0,h.Cb)({type:["line-of-sight"]})],U.prototype,"type",void 0),(0,u._)([(0,h.Cb)({type:k,json:{read:!0,write:!0}})],U.prototype,"observer",void 0),(0,u._)([(0,h.Cb)({cast:R.R,type:A,nonNullable:!0,json:{read:!0,write:!0}})],U.prototype,"targets",null),(0,u._)([(0,h.Cb)({value:null,readOnly:!0})],U.prototype,"extent",void 0),(0,u._)([(0,h.Cb)({readOnly:!0})],U.prototype,"spatialReference",null),(0,u._)([(0,h.Cb)({readOnly:!0})],U.prototype,"requiredPropertiesForEditing",null),(0,u._)([(0,h.Cb)({readOnly:!0})],U.prototype,"nonEditableMessage",void 0);var M=U=(0,u._)([(0,g.j)("esri.analysis.LineOfSightAnalysis")],U),q=n(97642),B=n(30651),N=n(6061),T=P.Z.ofType(S),J=function(t){(0,s.Z)(n,t);var e=(0,l.Z)(n);function n(t){var r;return(0,o.Z)(this,n),(r=e.call(this,t)).type="line-of-sight",r.operationalLayerType="LineOfSightLayer",r.analysis=new M,r.opacity=1,r}return(0,a.Z)(n,[{key:"initialize",value:function(){var t=this;this.own((0,W.YP)((function(){return t.analysis}),(function(e,n){(0,d.pC)(n)&&n.parent===t&&(n.parent=null),(0,d.pC)(e)&&(e.parent=t)}),W.tX))}},{key:"load",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",((0,d.pC)(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"observer",get:function(){return(0,d.yw)(this.analysis,(function(t){return t.observer}))},set:function(t){(0,d.yw)(this.analysis,(function(e){return e.observer=t}))}},{key:"targets",get:function(){return(0,d.pC)(this.analysis)?this.analysis.targets:null},set:function(t){(0,d.yw)(this.analysis,(function(e){return e.targets=t}))}},{key:"fullExtent",get:function(){return(0,d.pC)(this.analysis)?this.analysis.extent:null}},{key:"spatialReference",get:function(){return(0,d.pC)(this.analysis)?this.analysis.spatialReference:null}},{key:"removeAnalysis",value:function(t){this.analysis===t&&(this.analysis=new M)}}]),n}((0,N.q)((0,q.R)(B.Z)));(0,u._)([(0,h.Cb)({json:{read:!1},readOnly:!0})],J.prototype,"type",void 0),(0,u._)([(0,h.Cb)({type:["LineOfSightLayer"]})],J.prototype,"operationalLayerType",void 0),(0,u._)([(0,h.Cb)({type:k,json:{read:!0,write:{ignoreOrigin:!0}}})],J.prototype,"observer",null),(0,u._)([(0,h.Cb)({type:T,json:{read:!0,write:{ignoreOrigin:!0}}})],J.prototype,"targets",null),(0,u._)([(0,h.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],J.prototype,"analysis",void 0),(0,u._)([(0,h.Cb)({readOnly:!0})],J.prototype,"fullExtent",null),(0,u._)([(0,h.Cb)({readOnly:!0})],J.prototype,"spatialReference",null),(0,u._)([(0,h.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],J.prototype,"opacity",void 0),(0,u._)([(0,h.Cb)({type:["show","hide"]})],J.prototype,"listMode",void 0);var Y=J=(0,u._)([(0,g.j)("esri.layers.LineOfSightLayer")],J)}}]);
//# sourceMappingURL=189.54ecda6c.chunk.js.map