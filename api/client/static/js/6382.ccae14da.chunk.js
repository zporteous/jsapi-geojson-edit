"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6382],{16382:function(e,t,n){n.r(t),n.d(t,{ElevationQuery:function(){return C},GeometryDescriptor:function(){return z},getFinestLodIndex:function(){return S}});var r=n(60136),a=n(54062),i=n(37762),o=n(74165),s=n(1413),l=n(15861),u=n(15671),c=n(43144),f=n(14921),p=n(10064),h=n(92026),v=n(66978),m=n(68860),y=n(77577),d=n(7882),x=n(29909),Z=n(79803),k=n(65156),T=(n(59486),n(93169),n(32718)),w=n(81753),g=T.Z.getLogger("esri.layers.support.ElevationSampler"),R=function(){function e(){(0,u.Z)(this,e)}return(0,c.Z)(e,[{key:"queryElevation",value:function(e){return function(e,t){var n=E(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":!function(e,t,n){e.z=n.elevationAt(t.x,t.y)}(e,n,t);break;case"polyline":!function(e,t,n){A.spatialReference=t.spatialReference;for(var r=e.hasM&&!e.hasZ,a=0;a<e.paths.length;a++)for(var i=e.paths[a],o=t.paths[a],s=0;s<i.length;s++){var l=i[s],u=o[s];A.x=u[0],A.y=u[1],r&&(l[3]=l[2]),l[2]=n.elevationAt(A.x,A.y)}e.hasZ=!0}(e,n,t);break;case"multipoint":!function(e,t,n){A.spatialReference=t.spatialReference;for(var r=e.hasM&&!e.hasZ,a=0;a<e.points.length;a++){var i=e.points[a],o=t.points[a];A.x=o[0],A.y=o[1],r&&(i[3]=i[2]),i[2]=n.elevationAt(A.x,A.y)}e.hasZ=!0}(e,n,t)}return e}(e.clone(),this)}},{key:"on",value:function(){return q}},{key:"projectIfRequired",value:function(e,t){return E(e,t)}}]),e}(),_=function(e){(0,r.Z)(n,e);var t=(0,a.Z)(n);function n(e,r,a){var i;(0,u.Z)(this,n),(i=t.call(this)).tile=e,i.noDataValue=a,i.extent=(0,k.HH)(e.tile.extent,r.spatialReference),i.extent.zmin=e.zmin,i.extent.zmax=e.zmax,i.aaExtent=e.tile.extent;var o=(0,m.c9)(r.spatialReference),s=r.lodAt(e.tile.level).resolution*o;return i.demResolution={min:s,max:s},i}return(0,c.Z)(n,[{key:"spatialReference",get:function(){return this.extent.spatialReference}},{key:"contains",value:function(e){var t=this.projectIfRequired(e,this.spatialReference);return!(0,h.Wi)(t)&&this.containsAt(t.x,t.y)}},{key:"containsAt",value:function(e,t){return(0,k.jE)(this.aaExtent,e,t)}},{key:"elevationAt",value:function(e,t){if(!this.containsAt(e,t)){var n=this.extent,r="".concat(n.xmin,", ").concat(n.ymin,", ").concat(n.xmax,", ").concat(n.ymax);return g.warn("#elevationAt()","Point used to sample elevation (".concat(e,", ").concat(t,") is outside of the sampler extent (").concat(r,")")),this.noDataValue}return(0,h.Pt)(this.tile.sample(e,t),this.noDataValue)}}]),n}(R),b=function(e){(0,r.Z)(n,e);var t=(0,a.Z)(n);function n(e,r,a){var i,o;(0,u.Z)(this,n),i=t.call(this),"number"==typeof r?(i.noDataValue=r,o=null):(o=r,i.noDataValue=a),i.samplers=o?e.map((function(e){return new _(e,o,i.noDataValue)})):e;var s=i.samplers[0];if(s){i.extent=s.extent.clone();var l=s.demResolution,c=l.min,f=l.max;i.demResolution={min:c,max:f};for(var p=1;p<i.samplers.length;p++){var h=i.samplers[p];i.extent.union(h.extent),i.demResolution.min=Math.min(i.demResolution.min,h.demResolution.min),i.demResolution.max=Math.max(i.demResolution.max,h.demResolution.max)}}else i.extent=(0,k.HH)((0,k.Ue)(),o.spatialReference),i.demResolution={min:0,max:0};return i}return(0,c.Z)(n,[{key:"spatialReference",get:function(){return this.extent.spatialReference}},{key:"elevationAt",value:function(e,t){var n,r=(0,i.Z)(this.samplers);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(a.containsAt(e,t))return a.elevationAt(e,t)}}catch(o){r.e(o)}finally{r.f()}return g.warn("#elevationAt()","Point used to sample elevation (".concat(e,", ").concat(t,") is outside of the sampler")),this.noDataValue}}]),n}(R);function E(e,t){if((0,h.Wi)(e))return null;var n=e.spatialReference;if(n.equals(t))return e;var r=(0,w.iV)(e,t);return r||g.error("Cannot project geometry spatial reference (wkid:".concat(n.wkid,") to elevation sampler spatial reference (wkid:").concat(t.wkid,")")),r}var A=new d.Z,q={remove:function(){}},D=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if((0,u.Z)(this,e),this.tile=t,this.zmin=0,this.zmax=0,(0,h.pC)(n)){var r=t.extent;this.samplerData={pixelData:n.values,width:n.width,height:n.height,safeWidth:.99999999*(n.width-1),noDataValue:n.noDataValue,dx:(n.width-1)/(r[2]-r[0]),dy:(n.width-1)/(r[3]-r[1]),x0:r[0],y1:r[3]},this.zmin=n.minValue,this.zmax=n.maxValue}}return(0,c.Z)(e,[{key:"sample",value:function(e,t){if(!(0,h.Wi)(this.samplerData)){var n=this.samplerData,r=n.safeWidth,a=n.width,i=n.pixelData,o=n.noDataValue,s=n.dx,l=n.dy,u=n.y1,c=n.x0,f=I(l*(u-t),0,r),p=I(s*(e-c),0,r),v=Math.floor(f),m=Math.floor(p),y=v*a+m,d=y+a,x=i[y],Z=i[d],k=i[y+1],T=i[d+1];if(x!==o&&Z!==o&&k!==o&&T!==o){var w=p-m,g=x+(k-x)*w;return g+(Z+(T-Z)*w-g)*(f-v)}}}}]),e}();function I(e,t,n){return e<t?t:e>n?n:e}var C=function(){function e(){(0,u.Z)(this,e)}return(0,c.Z)(e,[{key:"queryAll",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var a,i,l,u,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=r&&r.ignoreInvisibleLayers?t.filter((function(e){return e.visible})):t.slice()).length){e.next=2;break}throw new p.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");case 2:return a=z.fromGeometry(n),i=!1,r&&r.returnSampleInfo||(i=!0),l=(0,s.Z)((0,s.Z)((0,s.Z)({},L),r),{},{returnSampleInfo:!0}),e.next=8,this.query(t[t.length-1],a,l);case 8:return u=e.sent,e.next=11,this._queryAllContinue(t,u,l);case 11:return c=e.sent,e.abrupt("return",(c.geometry=c.geometry.export(),i&&delete c.sampleInfo,c));case 13:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"query",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var a,i,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new p.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");case 2:if(n&&(n instanceof z||"point"===n.type||"multipoint"===n.type||"polyline"===n.type)){e.next=4;break}throw new p.Z("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");case 4:return a=(0,s.Z)((0,s.Z)({},L),r),i=new F(t,n.spatialReference,a),l=a.signal,e.next=7,t.load({signal:l});case 7:return e.next=9,this._createGeometryDescriptor(i,n,l);case 9:return e.next=11,this._selectTiles(i,l);case 11:return e.next=13,this._populateElevationTiles(i,l);case 13:return this._sampleGeometryWithElevation(i),e.abrupt("return",this._createQueryResult(i,l));case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"createSampler",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new p.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");case 2:if(n&&"extent"===n.type){e.next=4;break}throw new p.Z("elevation-query:invalid-extent","Invalid or undefined extent");case 4:return a=(0,s.Z)((0,s.Z)({},L),r),e.abrupt("return",this._createSampler(t,n,a));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"createSamplerAll",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var a,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=r&&r.ignoreInvisibleLayers?t.filter((function(e){return e.visible})):t.slice()).length){e.next=2;break}throw new p.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");case 2:if(n&&"extent"===n.type){e.next=4;break}throw new p.Z("elevation-query:invalid-extent","Invalid or undefined extent");case 4:return a=(0,s.Z)((0,s.Z)((0,s.Z)({},L),r),{},{returnSampleInfo:!0}),e.next=7,this._createSampler(t[t.length-1],n,a);case 7:return i=e.sent,e.abrupt("return",this._createSamplerAllContinue(t,n,i,a));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"_createSampler",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r,a){var i,s,l,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.signal,e.next=3,t.load({signal:i});case 3:if(s=n.spatialReference,l=t.tileInfo.spatialReference,e.t0=s.equals(l),e.t0){e.next=9;break}return e.next=8,(0,Z.iQ)([{source:s,dest:l}],{signal:i});case 8:n=(0,Z.iV)(n,l);case 9:return u=new V(t,n,r,a),e.next=12,this._selectTiles(u,i);case 12:return e.next=14,this._populateElevationTiles(u,i);case 14:return e.abrupt("return",new b(u.elevationTiles,u.layer.tileInfo,u.options.noDataValue));case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"_createSamplerAllContinue",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r,a){var i,s,l,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.pop(),t.length){e.next=2;break}return e.abrupt("return",r);case 2:return i=r.samplers.map((function(e){return(0,k.oJ)(e.extent)})),e.next=5,this._createSampler(t[t.length-1],n,a,i);case 5:if(0!==(s=e.sent).samplers.length){e.next=8;break}return e.abrupt("return",r);case 8:return l=r.samplers.concat(s.samplers),u=new b(l,a.noDataValue),e.abrupt("return",this._createSamplerAllContinue(t,n,u,a));case 10:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"_queryAllContinue",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var a,i,s,l,u,c,f,p;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=t.pop(),i=n.geometry.coordinates,s=[],l=[],u=0;u<i.length;u++)(c=n.sampleInfo[u]).demResolution>=0?c.source||(c.source=a):t.length&&(s.push(i[u]),l.push(u));if(t.length&&0!==s.length){e.next=4;break}return e.abrupt("return",n);case 4:return f=n.geometry.clone(s),e.next=7,this.query(t[t.length-1],f,r);case 7:return p=e.sent,e.abrupt("return",(l.forEach((function(e,t){i[e].z=p.geometry.coordinates[t].z,n.sampleInfo[e].demResolution=p.sampleInfo[t].demResolution})),this._queryAllContinue(t,n,r)));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"_createQueryResult",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.geometry.project(t.outSpatialReference,n);case 2:return e.t0=e.sent.export(),e.t1=t.options.noDataValue,r={geometry:e.t0,noDataValue:e.t1},e.abrupt("return",(t.options.returnSampleInfo&&(r.sampleInfo=this._extractSampleInfo(t)),t.geometry.coordinates.forEach((function(e){e.tile=null,e.elevationTile=null})),r));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_createGeometryDescriptor",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var a,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.layer.tileInfo.spatialReference,!(n instanceof z)){e.next=7;break}return e.next=4,n.project(i,r);case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,(0,Z.iQ)([{source:n.spatialReference,dest:i}],{signal:r});case 9:a=(0,Z.iV)(n,i);case 10:if(a){e.next=12;break}throw new p.Z("elevation-query:spatial-reference-mismatch","Cannot query elevation in '".concat(n.spatialReference.wkid,"' on an elevation service in '").concat(i.wkid,"'"));case 12:t.geometry=z.fromGeometry(a);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"_selectTiles",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.options.demResolution,"geometry"===t.type&&this._preselectOutsideLayerExtent(t),"number"!=typeof r){e.next=5;break}this._selectTilesClosestResolution(t),e.next=14;break;case 5:if("finest-contiguous"!==r){e.next=10;break}return e.next=8,this._selectTilesFinestContiguous(t,n);case 8:e.next=14;break;case 10:if("auto"===r){e.next=12;break}throw new p.Z("elevation-query:invalid-dem-resolution","Invalid dem resolution value '".concat(r,'\', expected a number, "finest-contiguous" or "auto"'));case 12:return e.next=14,this._selectTilesAuto(t,n);case 14:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_preselectOutsideLayerExtent",value:function(e){if(!(0,h.Wi)(e.layer.fullExtent)){var t=new D(null);t.sample=function(){return e.options.noDataValue},e.outsideExtentTile=t;var n=e.layer.fullExtent;e.geometry.coordinates.forEach((function(e){var r=e.x,a=e.y;(r<n.xmin||r>n.xmax||a<n.ymin||a>n.ymax)&&(e.elevationTile=t)}))}}},{key:"_selectTilesClosestResolution",value:function(e){var t=e.layer.tileInfo,n=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(n)}},{key:"_findNearestDemResolutionLODIndex",value:function(e,t){for(var n=t/(0,m.c9)(e.spatialReference),r=e.lods[0],a=0,i=1;i<e.lods.length;i++){var o=e.lods[i];Math.abs(o.resolution-n)<Math.abs(r.resolution-n)&&(r=o,a=i)}return a}},{key:"_selectTilesFinestContiguous",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=S(t.layer.tileInfo,t.options.minDemResolution),e.next=3,this._selectTilesFinestContiguousAt(t,r,n);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_selectTilesFinestContiguousAt",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var a,i,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.layer,t.selectTilesAtLOD(n),!(n<0)){e.next=3;break}return e.abrupt("return");case 3:if(i=a.tilemapCache,s=t.getTilesToFetch(),e.prev=4,!i){e.next=10;break}return e.next=8,(0,v.Hl)(Promise.all(s.map((function(e){return i.fetchAvailability(e.level,e.row,e.col,{signal:r})}))),r);case 8:e.next=14;break;case 10:return e.next=12,this._populateElevationTiles(t,r);case 12:if(t.allElevationTilesFetched()){e.next=14;break}throw t.clearElevationTiles(),new p.Z("elevation-query:has-unavailable-tiles");case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(4),(0,v.r9)(e.t0),e.next=21,this._selectTilesFinestContiguousAt(t,n-1,r);case 21:case"end":return e.stop()}}),e,this,[[4,16]])})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"_populateElevationTiles",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r,a,i,s,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getTilesToFetch(),a={},i=t.options.cache,s=t.options.noDataValue,u=r.map(function(){var e=(0,l.Z)((0,o.Z)().mark((function e(r){var l,u,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l="".concat(t.layer.uid,":").concat(r.id,":").concat(s),u=(0,h.pC)(i)?i.get(l):null,!(0,h.pC)(u)){e.next=6;break}e.t0=u,e.next=9;break;case 6:return e.next=8,t.layer.fetchTile(r.level,r.row,r.col,{noDataValue:s,signal:n});case 8:e.t0=e.sent;case 9:c=e.t0,(0,h.pC)(i)&&i.put(l,c),a[r.id]=new D(r,c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,(0,v.Hl)((0,v.as)(u),n);case 3:t.populateElevationTiles(a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_selectTilesAuto",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r,a,i,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._selectTilesAutoFinest(t),this._reduceTilesForMaximumRequests(t),r=t.layer.tilemapCache){e.next=4;break}return e.abrupt("return",this._selectTilesAutoPrefetchUpsample(t,n));case 4:return a=t.getTilesToFetch(),i={},s=a.map(function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t){var a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:null,level:0,row:0,col:0,extent:(0,k.Ue)()},e.next=3,(0,f.q6)(r.fetchAvailabilityUpsample(t.level,t.row,t.col,a,{signal:n}));case 3:!1===(s=e.sent).ok?(0,v.r9)(s.error):i[t.id]=a;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=7,(0,v.Hl)(Promise.all(s),n);case 7:t.remapTiles(i);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_reduceTilesForMaximumRequests",value:function(e){var t=e.layer.tileInfo,n=0,r={},a=function(e){e.id in r?r[e.id]++:(r[e.id]=1,n++)},i=function(e){var t=r[e.id];1===t?(delete r[e.id],n--):r[e.id]=t-1};e.forEachTileToFetch(a,i);for(var o=!0;o&&(o=!1,e.forEachTileToFetch((function(r){n<=e.options.maximumAutoTileRequests||(i(r),t.upsampleTile(r)&&(o=!0),a(r))}),i),o););}},{key:"_selectTilesAutoFinest",value:function(e){var t=S(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}},{key:"_selectTilesAutoPrefetchUpsample",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.layer.tileInfo,e.next=3,this._populateElevationTiles(t,n);case 3:if(a=!1,t.forEachTileToFetch((function(e,t){r.upsampleTile(e)?a=!0:t()})),e.t0=a,!e.t0){e.next=9;break}return e.next=9,this._selectTilesAutoPrefetchUpsample(t,n);case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_sampleGeometryWithElevation",value:function(e){e.geometry.coordinates.forEach((function(t){var n=t.elevationTile,r=e.options.noDataValue;if(n){var a=n.sample(t.x,t.y);(0,h.pC)(a)?r=a:t.elevationTile=null}t.z=r}))}},{key:"_extractSampleInfo",value:function(e){var t=e.layer.tileInfo,n=(0,m.c9)(t.spatialReference);return e.geometry.coordinates.map((function(r){var a=-1;return r.elevationTile&&r.elevationTile!==e.outsideExtentTile&&(a=t.lodAt(r.elevationTile.tile.level).resolution*n),{demResolution:a}}))}}]),e}(),z=function(){function e(){(0,u.Z)(this,e)}return(0,c.Z)(e,[{key:"export",value:function(){return this._exporter(this.coordinates,this.spatialReference)}},{key:"clone",value:function(t){var n=this,r=new e;return r.geometry=this.geometry,r.spatialReference=this.spatialReference,r.coordinates=t||this.coordinates.map((function(e){return n._cloneCoordinate(e)})),r._exporter=this._exporter,r}},{key:"project",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r,a,i,s,l=this;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.spatialReference.equals(t)){e.next=2;break}return e.abrupt("return",this.clone());case 2:return e.next=4,(0,Z.iQ)([{source:this.spatialReference,dest:t}],{signal:n});case 4:if(r=new y.Z({spatialReference:this.spatialReference,points:this.coordinates.map((function(e){return[e.x,e.y]}))}),a=(0,Z.iV)(r,t)){e.next=7;break}return e.abrupt("return",null);case 7:return i=this.coordinates.map((function(e,t){var n=l._cloneCoordinate(e),r=a.points[t];return n.x=r[0],n.y=r[1],n})),s=this.clone(i),e.abrupt("return",(s.spatialReference=t,s));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_cloneCoordinate",value:function(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}}],[{key:"fromGeometry",value:function(t){var n=new e;if(n.geometry=t,n.spatialReference=t.spatialReference,t instanceof e)n.coordinates=t.coordinates.map((function(e){return n._cloneCoordinate(e)})),n._exporter=function(e,n){var r=t.clone(e);return r.spatialReference=n,r};else switch(t.type){case"point":var r=t,a=r.hasZ,o=r.hasM;n.coordinates=a&&o?[{x:r.x,y:r.y,z:r.z,m:r.m}]:a?[{x:r.x,y:r.y,z:r.z}]:o?[{x:r.x,y:r.y,m:r.m}]:[{x:r.x,y:r.y}],n._exporter=function(e,n){return t.hasM?new d.Z(e[0].x,e[0].y,e[0].z,e[0].m,n):new d.Z(e[0].x,e[0].y,e[0].z,n)};break;case"multipoint":var s=t,l=s.hasZ,u=s.hasM;n.coordinates=l&&u?s.points.map((function(e){return{x:e[0],y:e[1],z:e[2],m:e[3]}})):l?s.points.map((function(e){return{x:e[0],y:e[1],z:e[2]}})):u?s.points.map((function(e){return{x:e[0],y:e[1],m:e[2]}})):s.points.map((function(e){return{x:e[0],y:e[1]}})),n._exporter=function(e,n){return t.hasM?new y.Z({points:e.map((function(e){return[e.x,e.y,e.z,e.m]})),hasZ:!0,hasM:!0,spatiaReference:n}):new y.Z(e.map((function(e){return[e.x,e.y,e.z]})),n)};break;case"polyline":var c,f=t,p=[],h=[],v=t.hasZ,m=t.hasM,Z=0,k=(0,i.Z)(f.paths);try{for(k.s();!(c=k.n()).done;){var T=c.value;if(h.push([Z,Z+T.length]),Z+=T.length,v&&m){var w,g=(0,i.Z)(T);try{for(g.s();!(w=g.n()).done;){var R=w.value;p.push({x:R[0],y:R[1],z:R[2],m:R[3]})}}catch(M){g.e(M)}finally{g.f()}}else if(v){var _,b=(0,i.Z)(T);try{for(b.s();!(_=b.n()).done;){var E=_.value;p.push({x:E[0],y:E[1],z:E[2]})}}catch(M){b.e(M)}finally{b.f()}}else if(m){var A,q=(0,i.Z)(T);try{for(q.s();!(A=q.n()).done;){var D=A.value;p.push({x:D[0],y:D[1],m:D[2]})}}catch(M){q.e(M)}finally{q.f()}}else{var I,C=(0,i.Z)(T);try{for(C.s();!(I=C.n()).done;){var z=I.value;p.push({x:z[0],y:z[1]})}}catch(M){C.e(M)}finally{C.f()}}}}catch(M){k.e(M)}finally{k.f()}n.coordinates=p,n._exporter=function(e,n){var r=t.hasM?e.map((function(e){return[e.x,e.y,e.z,e.m]})):e.map((function(e){return[e.x,e.y,e.z]})),a=h.map((function(e){return r.slice(e[0],e[1])}));return new x.Z({paths:a,hasM:t.hasM,hasZ:!0,spatialReference:n})}}return n}}]),e}(),M=(0,c.Z)((function e(t,n){(0,u.Z)(this,e),this.layer=t,this.options=n})),F=function(e){(0,r.Z)(n,e);var t=(0,a.Z)(n);function n(e,r,a){var i;return(0,u.Z)(this,n),(i=t.call(this,e,a)).outSpatialReference=r,i.type="geometry",i}return(0,c.Z)(n,[{key:"selectTilesAtLOD",value:function(e){if(e<0)this.geometry.coordinates.forEach((function(e){return e.tile=null}));else{var t=this.layer.tileInfo,n=t.lods[e].level;this.geometry.coordinates.forEach((function(e){e.tile=t.tileAt(n,e.x,e.y)}))}}},{key:"allElevationTilesFetched",value:function(){return!this.geometry.coordinates.some((function(e){return!e.elevationTile}))}},{key:"clearElevationTiles",value:function(){var e,t=(0,i.Z)(this.geometry.coordinates);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.elevationTile!==this.outsideExtentTile&&(n.elevationTile=null)}}catch(r){t.e(r)}finally{t.f()}}},{key:"populateElevationTiles",value:function(e){var t,n=(0,i.Z)(this.geometry.coordinates);try{for(n.s();!(t=n.n()).done;){var r=t.value;!r.elevationTile&&r.tile&&(r.elevationTile=e[r.tile.id])}}catch(a){n.e(a)}finally{n.f()}}},{key:"remapTiles",value:function(e){var t,n=(0,i.Z)(this.geometry.coordinates);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.tile=e[r.tile.id]}}catch(a){n.e(a)}finally{n.f()}}},{key:"getTilesToFetch",value:function(){var e,t={},n=[],r=(0,i.Z)(this.geometry.coordinates);try{for(r.s();!(e=r.n()).done;){var a=e.value,o=a.tile;a.elevationTile||!a.tile||t[o.id]||(t[o.id]=o,n.push(o))}}catch(s){r.e(s)}finally{r.f()}return n}},{key:"forEachTileToFetch",value:function(e){var t,n=(0,i.Z)(this.geometry.coordinates);try{var r=function(){var n=t.value;n.tile&&!n.elevationTile&&e(n.tile,(function(){return n.tile=null}))};for(n.s();!(t=n.n()).done;)r()}catch(a){n.e(a)}finally{n.f()}}}]),n}(M),V=function(e){(0,r.Z)(n,e);var t=(0,a.Z)(n);function n(e,r,a,i){var o;return(0,u.Z)(this,n),(o=t.call(this,e,a)).type="extent",o.elevationTiles=[],o.candidateTiles=[],o.fetchedCandidates=new Set,o.extent=r.intersection(e.fullExtent),o.maskExtents=i,o}return(0,c.Z)(n,[{key:"selectTilesAtLOD",value:function(e,t){var n=this._maximumLodForRequests(t),r=Math.min(n,e);r<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(r)}},{key:"_maximumLodForRequests",value:function(e){var t=this.layer.tileInfo;if(!e)return t.lods.length-1;var n=this.extent;if((0,h.Wi)(n))return-1;for(var r=t.lods.length-1;r>=0;r--){var a=t.lods[r],i=a.resolution*t.size[0],o=a.resolution*t.size[1];if(Math.ceil(n.width/i)*Math.ceil(n.height/o)<=e)return r}return-1}},{key:"allElevationTilesFetched",value:function(){return this.candidateTiles.length===this.elevationTiles.length}},{key:"clearElevationTiles",value:function(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}},{key:"populateElevationTiles",value:function(e){var t,n=(0,i.Z)(this.candidateTiles);try{for(n.s();!(t=n.n()).done;){var r=t.value,a=e[r.id];a&&(this.fetchedCandidates.add(r),this.elevationTiles.push(a))}}catch(o){n.e(o)}finally{n.f()}}},{key:"remapTiles",value:function(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((function(t){return e[t.id]})))}},{key:"getTilesToFetch",value:function(){return this.candidateTiles}},{key:"forEachTileToFetch",value:function(e,t){var n=this,r=this.candidateTiles;this.candidateTiles=[],r.forEach((function(r){if(n.fetchedCandidates.has(r))t&&t(r);else{var a=!1;e(r,(function(){return a=!0})),a?t&&t(r):n.candidateTiles.push(r)}})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}},{key:"_uniqueNonOverlappingTiles",value:function(e,t){var n,r={},a=[],o=(0,i.Z)(e);try{for(o.s();!(n=o.n()).done;){var s=n.value;r[s.id]?t&&t(s):(r[s.id]=s,a.push(s))}}catch(u){o.e(u)}finally{o.f()}var l=a.sort((function(e,t){return e.level-t.level}));return l.filter((function(e,n){for(var r=0;r<n;r++)if((0,k.r3)(l[r].extent,e.extent))return t&&t(e),!1;return!0}))}},{key:"_selectCandidateTilesCoveringExtentAt",value:function(e){this.candidateTiles.length=0;var t=this.extent;if(!(0,h.Wi)(t))for(var n=this.layer.tileInfo,r=n.lods[e],a=n.tileAt(r.level,t.xmin,t.ymin),i=r.resolution*n.size[0],o=r.resolution*n.size[1],s=Math.ceil((t.xmax-a.extent[0])/i),l=Math.ceil((t.ymax-a.extent[1])/o),u=0;u<l;u++)for(var c=0;c<s;c++){var f={id:null,level:a.level,row:a.row-u,col:a.col+c};n.updateTileInfo(f),this._tileIsMasked(f)||this.candidateTiles.push(f)}}},{key:"_tileIsMasked",value:function(e){return!!this.maskExtents&&this.maskExtents.some((function(t){return(0,k.r3)(t,e.extent)}))}}]),n}(M);function S(e,t){var n=e.lods.length-1;if(t>0){var r=e.lods.findIndex((function(e){return e.resolution<t}));0===r?n=0:r>0&&(n=r-1)}return n}var L={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0}}}]);
//# sourceMappingURL=6382.ccae14da.chunk.js.map