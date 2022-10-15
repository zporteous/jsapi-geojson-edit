"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6461],{16461:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var n=t(1413),i=t(74165),o=t(15861),a=t(15671),s=t(43144),f=(t(59486),t(92026)),u=t(42306),l=t(99278),c=t(45502),p=t(17314),v=t(80394),y=t(21449),m=t(64145),h=t(77960),d=t(55343),x=t(55185),Z=t(53866),k=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,[{key:"convertVectorFieldData",value:function(e){var r=l.Z.fromJSON(e.pixelBlock),t=(0,m.KC)(r,e.type);return Promise.resolve((0,f.pC)(t)&&t.toJSON())}},{key:"decode",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(r){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.J)(r.data,r.options);case 2:return t=e.sent,e.abrupt("return",t&&t.toJSON());case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},{key:"symbolize",value:function(e){e.pixelBlock=l.Z.fromJSON(e.pixelBlock),e.extent=e.extent?Z.Z.fromJSON(e.extent):null;var r=this.symbolizer.symbolize(e);return Promise.resolve((0,f.pC)(r)&&r.toJSON())}},{key:"updateSymbolizer",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(r){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.symbolizer=d.Z.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===(null===(t=this.symbolizer)||void 0===t?void 0:t.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=r.histograms);case 1:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()},{key:"stretch",value:function(e){var r=this.symbolizer.simpleStretch(l.Z.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve((0,f.pC)(r)&&r.toJSON())}},{key:"estimateStatisticsHistograms",value:function(e){var r=(0,y.Hv)(l.Z.fromJSON(e.srcPixelBlock));return Promise.resolve(r)}},{key:"split",value:function(e){var r=(0,p.Vl)(l.Z.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return r&&r.forEach((function(e,t){r.set(t,null===e||void 0===e?void 0:e.toJSON())})),Promise.resolve(r)}},{key:"mosaicAndTransform",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(r){var t,n,o,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.srcPixelBlocks.map((function(e){return e?new l.Z(e):null})),o=(0,p.us)(n,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo,clipOffset:r.clipOffset,clipSize:r.clipSize}),s=o,e.abrupt("return",(r.coefs&&(s=(0,p.Uk)(o,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation)),r.projectDirections&&r.gcsGrid&&(a=(0,p.Qh)(r.destDimension,r.gcsGrid),s=(0,f.Wg)((0,m.xQ)(s,r.isUV?"vector-uv":"vector-magdir",a))),{pixelBlock:null===(t=s)||void 0===t?void 0:t.toJSON(),localNorthDirections:a}));case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},{key:"createFlowMesh",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(r,t){var n,o,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={data:new Float32Array(r.flowData.buffer),mask:new Uint8Array(r.flowData.maskBuffer),width:r.flowData.width,height:r.flowData.height},e.next=3,(0,x.GE)(r.meshType,r.simulationSettings,n,t.signal);case 3:return o=e.sent,a=o.vertexData,s=o.indexData,e.abrupt("return",{result:{vertexBuffer:a.buffer,indexBuffer:s.buffer},transferList:[a.buffer,s.buffer]});case 7:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()},{key:"getProjectionOffsetGrid",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(r){var t,o,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Z.Z.fromJSON(r.projectedExtent),o=Z.Z.fromJSON(r.srcBufferExtent),a=null,r.datumTransformationSteps&&(a=new u.Z({steps:r.datumTransformationSteps})),e.t0=r.includeGCSGrid||(0,v.Mk)(t.spatialReference,o.spatialReference,a),!e.t0){e.next=7;break}return e.next=7,(0,v.zD)();case 7:return s=r.rasterTransform?(0,h.c)(r.rasterTransform):null,e.abrupt("return",(0,v.Qp)((0,n.Z)((0,n.Z)({},r),{},{projectedExtent:t,srcBufferExtent:o,datumTransformation:a,rasterTransform:s})));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}]),e}()},32935:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(15671),i=t(43144),o=t(60136),a=t(54062),s=t(27366),f=t(46784),u=t(49861),l=(t(63780),t(93169),t(25243),t(69912)),c=function(e){(0,o.Z)(t,e);var r=(0,a.Z)(t);function t(){return(0,n.Z)(this,t),r.apply(this,arguments)}return(0,i.Z)(t,[{key:"affectsPixelSize",get:function(){return!1}},{key:"forwardTransform",value:function(e){return e}},{key:"inverseTransform",value:function(e){return e}}]),t}(f.wq);(0,s._)([(0,u.Cb)()],c.prototype,"affectsPixelSize",null),(0,s._)([(0,u.Cb)({json:{write:!0}})],c.prototype,"spatialReference",void 0);var p=c=(0,s._)([(0,l.j)("esri.layers.support.rasterTransforms.BaseRasterTransform")],c)},3089:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(15671),i=t(43144),o=t(60136),a=t(54062),s=t(27366),f=t(49861),u=(t(63780),t(93169),t(25243),t(27135)),l=t(69912),c=function(e){(0,o.Z)(t,e);var r=(0,a.Z)(t);function t(){var e;return(0,n.Z)(this,t),(e=r.apply(this,arguments)).type="gcs-shift",e.tolerance=1e-8,e}return(0,i.Z)(t,[{key:"forwardTransform",value:function(e){return"point"===(e=e.clone()).type?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}},{key:"inverseTransform",value:function(e){return"point"===(e=e.clone()).type?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}}]),t}(t(32935).Z);(0,s._)([(0,u.J)({GCSShiftXform:"gcs-shift"})],c.prototype,"type",void 0),(0,s._)([(0,f.Cb)()],c.prototype,"tolerance",void 0);var p=c=(0,s._)([(0,l.j)("esri.layers.support.rasterTransforms.GCSShiftTransform")],c)},69405:function(e,r,t){t.d(r,{Z:function(){return k}});var n=t(15671),i=t(43144),o=t(60136),a=t(54062),s=t(29439),f=t(27366),u=(t(59486),t(49861)),l=(t(63780),t(93169),t(25243),t(27135)),c=t(38511),p=t(69912),v=t(31201),y=t(32935),m=t(7882),h=t(53866);function d(e,r,t){var n=r.x,i=r.y;if(t<2)return{x:e[0]+n*e[2]+i*e[4],y:e[1]+n*e[3]+i*e[5]};if(2===t){var o=n*n,a=i*i,s=n*i;return{x:e[0]+n*e[2]+i*e[4]+o*e[6]+s*e[8]+a*e[10],y:e[1]+n*e[3]+i*e[5]+o*e[7]+s*e[9]+a*e[11]}}var f=n*n,u=i*i,l=n*i,c=f*n,p=f*i,v=n*u,y=i*u;return{x:e[0]+n*e[2]+i*e[4]+f*e[6]+l*e[8]+u*e[10]+c*e[12]+p*e[14]+v*e[16]+y*e[18],y:e[1]+n*e[3]+i*e[5]+f*e[7]+l*e[9]+u*e[11]+c*e[13]+p*e[15]+v*e[17]+y*e[19]}}function x(e,r,t){var n=r.xmin,i=r.ymin,o=r.xmax,a=r.ymax,s=r.spatialReference,f=[];if(t<2)f.push({x:n,y:a}),f.push({x:o,y:a}),f.push({x:n,y:i}),f.push({x:o,y:i});else{for(var u=10,l=0;l<u;l++)f.push({x:n,y:i+(a-i)*l/(u-1)}),f.push({x:o,y:i+(a-i)*l/(u-1)});u=8;for(var c=1;c<=u;c++)f.push({x:n+(o-n)*c/u,y:i}),f.push({x:n+(o-n)*c/u,y:a})}f=f.map((function(r){return d(e,r,t)}));var p=f.map((function(e){return e.x})),v=f.map((function(e){return e.y}));return new h.Z({xmin:Math.min.apply(null,p),xmax:Math.max.apply(null,p),ymin:Math.min.apply(null,v),ymax:Math.max.apply(null,v),spatialReference:s})}var Z=function(e){(0,o.Z)(t,e);var r=(0,a.Z)(t);function t(){var e;return(0,n.Z)(this,t),(e=r.apply(this,arguments)).polynomialOrder=1,e.type="polynomial",e}return(0,i.Z)(t,[{key:"readForwardCoefficients",value:function(e,r){var t=r.coeffX,n=r.coeffY;if(null===t||void 0===t||!t.length||null===n||void 0===n||!n.length||t.length!==n.length)return null;for(var i=[],o=0;o<t.length;o++)i.push(t[o]),i.push(n[o]);return i}},{key:"writeForwardCoefficients",value:function(e,r,t){for(var n=[],i=[],o=0;o<(null===e||void 0===e?void 0:e.length);o++)o%2==0?n.push(e[o]):i.push(e[o]);r.coeffX=n,r.coeffY=i}},{key:"inverseCoefficients",get:function(){var e=this._get("inverseCoefficients"),r=this._get("forwardCoefficients");return!e&&r&&this.polynomialOrder<2&&(e=function(e){var r=(0,s.Z)(e,6),t=r[0],n=r[1],i=r[2],o=r[3],a=r[4],f=r[5],u=i*f-a*o,l=a*o-i*f;return[(a*n-t*f)/u,(i*n-t*o)/l,f/u,o/l,-a/u,-i/l]}(r)),e},set:function(e){this._set("inverseCoefficients",e)}},{key:"readInverseCoefficients",value:function(e,r){var t=r.inverseCoeffX,n=r.inverseCoeffY;if(null===t||void 0===t||!t.length||null===n||void 0===n||!n.length||t.length!==n.length)return null;for(var i=[],o=0;o<t.length;o++)i.push(t[o]),i.push(n[o]);return i}},{key:"writeInverseCoefficients",value:function(e,r,t){for(var n=[],i=[],o=0;o<(null===e||void 0===e?void 0:e.length);o++)o%2==0?n.push(e[o]):i.push(e[o]);r.inverseCoeffX=n,r.inverseCoeffY=i}},{key:"affectsPixelSize",get:function(){return this.polynomialOrder>0}},{key:"forwardTransform",value:function(e){if("point"===e.type){var r=d(this.forwardCoefficients,e,this.polynomialOrder);return new m.Z({x:r.x,y:r.y,spatialReference:e.spatialReference})}return x(this.forwardCoefficients,e,this.polynomialOrder)}},{key:"inverseTransform",value:function(e){if("point"===e.type){var r=d(this.inverseCoefficients,e,this.polynomialOrder);return new m.Z({x:r.x,y:r.y,spatialReference:e.spatialReference})}return x(this.inverseCoefficients,e,this.polynomialOrder)}}]),t}(y.Z);(0,f._)([(0,u.Cb)({json:{write:!0}})],Z.prototype,"polynomialOrder",void 0),(0,f._)([(0,u.Cb)()],Z.prototype,"forwardCoefficients",void 0),(0,f._)([(0,c.r)("forwardCoefficients",["coeffX","coeffY"])],Z.prototype,"readForwardCoefficients",null),(0,f._)([(0,v.c)("forwardCoefficients")],Z.prototype,"writeForwardCoefficients",null),(0,f._)([(0,u.Cb)({json:{write:!0}})],Z.prototype,"inverseCoefficients",null),(0,f._)([(0,c.r)("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],Z.prototype,"readInverseCoefficients",null),(0,f._)([(0,v.c)("inverseCoefficients")],Z.prototype,"writeInverseCoefficients",null),(0,f._)([(0,u.Cb)()],Z.prototype,"affectsPixelSize",null),(0,f._)([(0,l.J)({PolynomialXform:"polynomial"})],Z.prototype,"type",void 0);var k=Z=(0,f._)([(0,p.j)("esri.layers.support.rasterTransforms.PolynomialTransform")],Z)},77960:function(e,r,t){t.d(r,{j:function(){return h},c:function(){return d}});var n=t(3089),i=t(43144),o=t(15671),a=t(60136),s=t(54062),f=t(27366),u=(t(32718),t(25243),t(63780),t(93169),t(75366),t(27135)),l=t(69912),c=function(e){(0,a.Z)(t,e);var r=(0,s.Z)(t);function t(){var e;return(0,o.Z)(this,t),(e=r.apply(this,arguments)).type="identity",e}return(0,i.Z)(t)}(t(32935).Z);(0,f._)([(0,u.J)({IdentityXform:"identity"})],c.prototype,"type",void 0);var p=c=(0,f._)([(0,l.j)("esri.layers.support.rasterTransforms.IdentityTransform")],c),v=t(69405),y={GCSShiftXform:n.Z,IdentityXform:p,PolynomialXform:v.Z},m=Object.keys(y);function h(e){var r=null===e||void 0===e?void 0:e.type;return!e||m.includes(r)}function d(e){if(!(null===e||void 0===e?void 0:e.type))return null;var r=y[null===e||void 0===e?void 0:e.type];if(r){var t=new r;return t.read(e),t}return null}}}]);
//# sourceMappingURL=6461.9abc7ccf.chunk.js.map