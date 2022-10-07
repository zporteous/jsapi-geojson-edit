"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[876,8920],{46228:function(e,t,n){n.d(t,{I:function(){return i},v:function(){return a}});var r=n(16889);function i(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=(0,r.uZ)(e,0,c),a=0;a<4;a++)t[n+a]=Math.floor(256*l(i*o[a]))}function a(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=0,r=0;r<4;r++)n+=e[t+r]*u[r];return n}var o=[1,256,65536,16777216],u=[1/256,1/65536,1/16777216,1/4294967296],c=a(new Uint8ClampedArray([255,255,255,255]));function l(e){return e-Math.floor(e)}},94304:function(e,t,n){n.r(t),n.d(t,{CIMSymbolRasterizer:function(){return b},GeometryStyle:function(){return r}});var r,i,a=n(37762),o=n(74165),u=n(15861),c=n(15671),l=n(43144),s=n(51995),f=n(76200),m=n(66978),h=n(17842),d=n(643),g=n(77981),p=n(79815),y=n(59001),v=n(16285),C=n(22532),P=n(31027),M=n(49729),S=n(83748);(i=r||(r={})).Legend="legend",i.Preview="preview";var w=function(e,t,n){if(e&&e.targetSize){var r;if(n){var i=Math.max(n.frame.xmax-n.frame.xmin,n.frame.ymax-n.frame.ymin);r=e.targetSize/(0,h.F2)(i)}else r=e.targetSize/t.referenceSize;return r}return e&&e.scaleFactor?e.scaleFactor:1},x={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}},b=function(){function e(t,n){(0,c.Z)(this,e),this._spatialReference=t,this._avoidSDF=n,this._resourceCache=new Map,this._pictureMarkerCache=new Map,this._textRasterizer=new C.Z,this._cimResourceManager=new y.Z,this._rasterizer=new v.Z(this._cimResourceManager)}return(0,l.Z)(e,[{key:"rasterizeCIMSymbolAsync",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,n,r,i,a,u,c,l){var s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=i||(n?null!=n.centroid?"esriGeometryPolygon":(0,g.Ji)(n.geometry):null)||I(t),e.next=3,this.analyzeCIMSymbol(t,n?R(n.attributes):null,r,i,l);case 3:return s=e.sent,e.abrupt("return",this.rasterizeCIMSymbol(s,n,i,a,u,c));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n,r,i,a,o,u,c){return e.apply(this,arguments)}}()},{key:"analyzeCIMSymbol",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,n,r,i,a){var u,c,l,s,f,h;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=[],c=n?{geometryType:i,spatialReference:this._spatialReference,fields:n}:null,e.next=3,(0,p.c)(t.data,c,this._cimResourceManager,u,this._avoidSDF);case 3:for((0,m.k_)(a),s=0,f=u;s<f.length;s++)"CIMPictureMarker"!==(h=f[s]).cim.type&&"CIMPictureFill"!==h.cim.type&&"CIMPictureStroke"!==h.cim.type||(l||(l=[]),l.push(this._fetchPictureMarkerResource(h,a))),r&&"text"===h.type&&"string"==typeof h.text&&h.text.includes("[")&&(h.text=(0,P.Qs)(r,h.text,h.cim.textCase));if(e.t0=l,!e.t0){e.next=9;break}return e.next=9,Promise.all(l);case 9:return e.abrupt("return",u);case 10:case"end":return e.stop()}}),e,this)})));return function(t,n,r,i,a){return e.apply(this,arguments)}}()},{key:"_fetchPictureMarkerResource",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,n){var r,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.materialHash,this._pictureMarkerCache.get(r)){e.next=6;break}return e.next=4,(0,f.default)(t.cim.url,{responseType:"image",signal:n&&n.signal});case 4:i=e.sent.data,this._pictureMarkerCache.set(r,i);case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"rasterizeCIMSymbol",value:function(e,t,n,r,i,o){var u,c=[],l=(0,a.Z)(e);try{for(l.s();!(u=l.n()).done;){var s=u.value;r&&"function"==typeof r.scaleFactor&&(r.scaleFactor=r.scaleFactor(t,i,o));var f=this._getRasterizedResource(s,t,n,r,i,o);if(f){var m=0,h=f.anchorX||0,d=f.anchorY||0,g=!1,p=0,y=0;if("esriGeometryPoint"===n){var v=w(r,s,null);if(p=(0,P.hf)(s.offsetX,t,i,o)*v||0,y=(0,P.hf)(s.offsetY,t,i,o)*v||0,"marker"===s.type)m=(0,P.hf)(s.rotation,t,i,o)||0,g=!!s.rotateClockwise&&s.rotateClockwise;else if("text"===s.type){if(m=(0,P.hf)(s.angle,t,i,o)||0,void 0!==s.horizontalAlignment)switch(s.horizontalAlignment){case"left":h=-.5;break;case"right":h=.5;break;default:h=0}if(void 0!==s.verticalAlignment)switch(s.verticalAlignment){case"top":d=.5;break;case"bottom":d=-.5;break;case"baseline":d=-.25;break;default:d=0}}}null!=f&&c.push({angle:m,rotateClockWise:g,anchorX:h,anchorY:d,offsetX:p,offsetY:y,rasterizedResource:f})}}}catch(C){l.e(C)}finally{l.f()}return this.getSymbolImage(c)}},{key:"getSymbolImage",value:function(e){for(var t=document.createElement("canvas"),n=t.getContext("2d"),r=0,i=0,a=0,o=0,u=[],c=0;c<e.length;c++){var l=e[c],s=l.rasterizedResource;if(s){var f=s.size,m=l.offsetX,d=l.offsetY,g=l.anchorX,p=l.anchorY,y=l.rotateClockWise||!1,v=l.angle,C=(0,h.F2)(m)-f[0]*(.5+g),P=(0,h.F2)(d)-f[1]*(.5+p),M=C+f[0],w=P+f[1];if(v){y&&(v=-v);var x=Math.sin(v*Math.PI/180),b=Math.cos(v*Math.PI/180),R=C*b-P*x,I=C*x+P*b,T=C*b-w*x,k=C*x+w*b,z=M*b-w*x,L=M*x+w*b,F=M*b-P*x,A=M*x+P*b;C=Math.min(R,T,z,F),P=Math.min(I,k,L,A),M=Math.max(R,T,z,F),w=Math.max(I,k,L,A)}r=C<r?C:r,i=P<i?P:i,a=M>a?M:a,o=w>o?w:o;var B=n.createImageData(s.size[0],s.size[1]);B.data.set(new Uint8ClampedArray(s.image.buffer));var D={offsetX:m,offsetY:d,rotateClockwise:y,angle:v,rasterizedImage:B,anchorX:g,anchorY:p};u.push(D)}}t.width=a-r,t.height=o-i;for(var _=-r,O=o,N=0;N<u.length;N++){var U=u[N],Z=this._imageDataToCanvas(U.rasterizedImage),E=U.rasterizedImage.width,W=U.rasterizedImage.height,H=_-E*(.5+U.anchorX),G=O-W*(.5-U.anchorY);if(U.angle){var X=(360-U.angle)*Math.PI/180;n.save(),n.translate((0,h.F2)(U.offsetX),-(0,h.F2)(U.offsetY)),n.translate(_,O),n.rotate(X),n.translate(-_,-O),n.drawImage(Z,H,G),n.restore()}else n.drawImage(Z,H+(0,h.F2)(U.offsetX),G-(0,h.F2)(U.offsetY))}var Y=new S.e({x:_/t.width-.5,y:O/t.height-.5});return{imageData:0!==t.width&&0!==t.height?n.getImageData(0,0,t.width,t.height):n.createImageData(1,1),anchorPosition:Y}}},{key:"_imageDataToCanvas",value:function(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var t=this._imageDataCanvas,n=t.getContext("2d");return t.width=e.width,t.height=e.height,n.putImageData(e,0,0),t}},{key:"_imageTo32Array",value:function(e,t,n,r){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var i=this._imageDataCanvas,a=i.getContext("2d");if(i.width=t,i.height=n,a.drawImage(e,0,0,t,n),r){a.save();var o=new s.Z(r);a.fillStyle=o.toHex(),a.globalCompositeOperation="multiply",a.fillRect(0,0,t,n),a.globalCompositeOperation="destination-atop",a.drawImage(e,0,0,t,n),a.restore()}return new Uint32Array(a.getImageData(0,0,t,n).data.buffer)}},{key:"_getRasterizedResource",value:function(e,t,n,i,a,o){var u,c,l,s,f=null,m=null;if("esriGeometryPolyline"===n||"esriGeometryPolygon"===n){var h=i&&i.style?i.style:r.Legend,g="esriGeometryPolyline"===n?x.stroke[h]:x.fill[h];if("line"===e.type){var p;if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){var y=(0,P.hf)(e.width,t,a,o),v=(0,P.hf)(e.color,t,a,o),C=this._getPictureResource(e,y,v),S=C.image,b=C.width,R=C.height;return this._rasterizePictureResource(e,S,b,R,g,y)}return null}u=(p=T(e,t,a,o)).analyzedCIM,l=p.hash,c=this._embedCIMLayerInVectorMarker(u,g)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type){var I=(0,P.hf)(e.size,t,a,o),k=(0,P.hf)(e.color,t,a,o),z=this._getPictureResource(e,I,k),L=z.image,F=z.width,A=z.height;return this._rasterizePictureResource(e,L,F,A,g,I)}if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=(0,P.hf)(e.offsetX,t,a,o),e.cim.offsetY=(0,P.hf)(e.offsetY,t,a,o),e.cim.rotation=(0,P.hf)(e.rotation,t,a,o),e.cim.markerPlacement=e.markerPlacement,u=T(e,t,a,o).analyzedCIM,l=(0,d.hP)(JSON.stringify(u)).toString(),c=this._embedCIMLayerInVectorMarker(u,g),f=(0,P.hf)(e.size,t,a,o),m=e.path}else{if("text"===e.type)return null;if("fill"===e.type){var B;if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){var D,_,O,N=e.cim.size||e.cim.height;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){var U=this._getPictureResource(e,N,(0,P.hf)(e.color,t,a,o));D=U.image,_=U.width,O=U.height}else{var Z=T(e,t,a,o);u=Z.analyzedCIM,l=Z.hash;var E=this._rasterizer.rasterizeJSONResource({cim:u,type:e.type,url:e.url,mosaicHash:l,size:N,path:m},1,this._avoidSDF);D=E.image,_=E.size[0],O=E.size[1]}return this._rasterizePictureResource(e,D,_,O,g,null)}if("CIMSolidFill"!==e.cim.type)return null;u=(B=T(e,t,a,o)).analyzedCIM,l=B.hash,c=this._embedCIMLayerInVectorMarker(u,g)}}}else{if("text"===e.type)return s=this._rasterizeTextResource(e,t,i,a,o);var W=T(e,t,a,o);u=W.analyzedCIM,l=W.hash;var H=w(i,e,null);if("CIMPictureMarker"===e.cim.type){var G=(0,P.hf)(e.size,t,a,o)*H,X=this._getPictureResource(e,G,(0,P.hf)(e.color,t,a,o));return s={image:X.image,size:[X.width,X.height],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0}}(0,M.FW)(u,H,{preserveOutlineWidth:!1}),c=u}l+=n,i&&(l+=JSON.stringify(i));var Y=this._resourceCache;return Y.has(l)?Y.get(l):(s=this._rasterizer.rasterizeJSONResource({cim:c,type:e.type,url:e.url,mosaicHash:l,size:f,path:m},window.devicePixelRatio||1,this._avoidSDF),Y.set(l,s),s)}},{key:"_rasterizeTextResource",value:function(e,t,n,r,i){var a=w(n,e,null),o=(0,P.hf)(e.text,t,r,i);if(!o||0===o.length)return null;var u=(0,P.hf)(e.fontName,t,r,i),c=(0,P.hf)(e.style,t,r,i),l=(0,P.hf)(e.weight,t,r,i),s=(0,P.hf)(e.decoration,t,r,i),f=(0,P.hf)(e.size,t,r,i)*a,m=(0,P.hf)(e.horizontalAlignment,t,r,i),h=(0,P.hf)(e.verticalAlignment,t,r,i),d=(0,P.nn)((0,P.hf)(e.color,t,r,i)),g=(0,P.nn)((0,P.hf)(e.outlineColor,t,r,i)),p={color:d,size:f,horizontalAlignment:m,verticalAlignment:h,font:{family:u,style:c,weight:l,decoration:s},halo:{size:(0,P.hf)(e.outlineSize,t,r,i)||0,color:g,style:c},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(o,p)}},{key:"_rasterizePictureResource",value:function(e,t,n,r,i,o){var u=document.createElement("canvas"),c=u.getContext("2d");u.height=(0,h.F2)(Math.max(i.frame.ymax-i.frame.ymin,o)),u.width=(0,h.F2)(i.frame.xmax-i.frame.xmin);var l=c.createImageData(n,r);l.data.set(new Uint8ClampedArray(t.buffer));var s=this._imageDataToCanvas(l),f=c.createPattern(s,"repeat"),m=Math.cos((-e.cim.rotation||0)*Math.PI/180),d=Math.sin((-e.cim.rotation||0)*Math.PI/180);f.setTransform({m11:m,m12:d,m21:-d,m22:m,m41:(0,h.F2)(e.cim.offsetX)||0,m42:(0,h.F2)(e.cim.offsetY)||0});var p,y,v,C=i.canvasPaths;(0,g.oU)(C)?(p=C.rings,c.fillStyle=f,y=c.fill,v=["evenodd"]):(0,g.l9)(C)&&(p=C.paths,c.strokeStyle=f,c.lineWidth=o,y=c.stroke,p[0][0][1]=u.height/2,p[0][1][1]=u.height/2),c.beginPath();var P,M=(0,a.Z)(p);try{for(M.s();!(P=M.n()).done;){var S=P.value,w=S?S.length:0;if(w>1){var x=S[0];c.moveTo((0,h.F2)(x[0]),(0,h.F2)(x[1]));for(var b=1;b<w;++b)x=S[b],c.lineTo((0,h.F2)(x[0]),(0,h.F2)(x[1]));c.closePath()}}}catch(T){M.e(T)}finally{M.f()}y.apply(c,v);var R=c.getImageData(0,0,u.width,u.height),I=new Uint8Array(R.data);return{size:[u.width,u.height],image:new Uint32Array(I.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}},{key:"_getPictureResource",value:function(e,t,n){var r=this._pictureMarkerCache.get(e.materialHash);if(!r)return null;var i=r.height/r.width,a=t?i>1?(0,h.F2)(t):(0,h.F2)(t)/i:r.width,o=t?i>1?(0,h.F2)(t)*i:(0,h.F2)(t):r.height;return{image:this._imageTo32Array(r,a,o,n),width:a,height:o}}},{key:"_embedCIMLayerInVectorMarker",value:function(e,t){var n=(0,g.oU)(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol",r=t.frame;return{type:"CIMVectorMarker",frame:r,size:r.ymax-r.ymin,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:n,symbolLayers:[e]}}]}}}]),e}();function R(e){return(e?Object.keys(e):[]).map((function(t){return{name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"}}))}function I(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function T(e,t,n,r){var i,a;return"function"==typeof e.materialHash?(i=(0,e.materialHash)(t,n,r),a=(0,p.S)(e.cim,e.materialOverrides)):(i=e.materialHash,a=e.cim),{analyzedCIM:a,hash:i}}},16285:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(37762),i=n(29439),a=n(15671),o=n(43144),u=n(78915),c=n(691),l=n(6388),s=n(31027),f=function(){function e(t){(0,a.Z)(this,e),this._resourceManager=t}return(0,o.Z)(e,[{key:"dispose",value:function(){this._rasterizationCanvas=null}},{key:"rasterizeJSONResource",value:function(e,t,n){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){var r=u.fN.rasterizeSimpleFill(this._rasterizationCanvas,e.style,t),a=(0,i.Z)(r,3),o=a[0];return{size:[a[1],a[2]],image:new Uint32Array(o.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){var s,f;if("simple-line"===e.type||"esriSLS"===e.type)switch(s=(0,u.U1)(e.style,e.cap),e.cap){case"butt":f="Butt";break;case"square":f="Square";break;default:f="Round"}else s=e.dashTemplate,f=e.cim.capStyle;var m=u.fN.rasterizeSimpleLine(s,f),h=(0,i.Z)(m,3),d=h[0];return{size:[h[1],h[2]],image:new Uint32Array(d.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}var g,p,y;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(g=u.B$.fromSimpleMarker(e),y=(0,l.Fp)(g)):e.cim&&"CIMHatchFill"===e.cim.type?(g=u.B$.fromCIMHatchFill(e.cim),p=new c.Z(g.frame.xmin,-g.frame.ymax,g.frame.xmax-g.frame.xmin,g.frame.ymax-g.frame.ymin)):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(g=u.B$.fromCIMInsidePolygon(e.cim),p=new c.Z(g.frame.xmin,-g.frame.ymax,g.frame.xmax-g.frame.xmin,g.frame.ymax-g.frame.ymin)):(g=e.cim,y=(0,l.Fp)(g)),y&&!n){var v=(0,l.RL)(y),C=(0,i.Z)(v,3),P=C[0],M=C[1],S=C[2];return P?{size:[M,S],image:new Uint32Array(P.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}var w=u.B$.rasterize(this._rasterizationCanvas,g,p,this._resourceManager,!n),x=(0,i.Z)(w,5),b=x[0],R=x[1],I=x[2],T=x[3],k=x[4];return b?{size:[R,I],image:new Uint32Array(b.buffer),sdf:!1,simplePattern:!1,anchorX:T,anchorY:k}:null}},{key:"rasterizeImageResource",value:function(e,t,n,a){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;var o=this._rasterizationCanvas.getContext("2d");n instanceof ImageData?o.putImageData(n,0,0):(n.setAttribute("width","".concat(e,"px")),n.setAttribute("height","".concat(t,"px")),o.drawImage(n,0,0,e,t));var u,c=o.getImageData(0,0,e,t),l=new Uint8Array(c.data);if(a){var f,m=(0,r.Z)(a);try{for(m.s();!(f=m.n()).done;){var h=f.value;if(h&&h.oldColor&&4===h.oldColor.length&&h.newColor&&4===h.newColor.length){var d=(0,i.Z)(h.oldColor,4),g=d[0],p=d[1],y=d[2],v=d[3],C=(0,i.Z)(h.newColor,4),P=C[0],M=C[1],S=C[2],w=C[3];if(g===P&&p===M&&y===S&&v===w)continue;for(var x=0;x<l.length;x+=4)g===l[x]&&p===l[x+1]&&y===l[x+2]&&v===l[x+3]&&(l[x]=P,l[x+1]=M,l[x+2]=S,l[x+3]=w)}}}catch(F){m.e(F)}finally{m.f()}}for(var b=0;b<l.length;b+=4)u=l[b+3]/255,l[b]=l[b]*u,l[b+1]=l[b+1]*u,l[b+2]=l[b+2]*u;var R=l,I=e,T=t,k=512;if(I>=k||T>=k){var z=I/T;z>1?(I=k,T=Math.round(k/z)):(T=k,I=Math.round(k*z)),R=new Uint8Array(4*I*T);var L=new Uint8ClampedArray(R.buffer);(0,s.TT)(l,e,t,L,I,T,!1)}return{size:[I,T],image:new Uint32Array(R.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}]),e}()},48202:function(e,t,n){var r,i,a,o,u,c,l,s,f,m,h,d,g,p,y,v,C,P,M,S,w,x,b,R,I,T,k,z,L,F,A,B,D,_,O,N,U,Z,E,W,H,G,X,Y,J,V,q,Q,K,$,j,ee,te,ne,re,ie,ae,oe,ue,ce,le;n.d(t,{$y:function(){return x},AH:function(){return i},CS:function(){return q},DD:function(){return s},Dd:function(){return L},Em:function(){return w},JS:function(){return J},Ky:function(){return f},Lh:function(){return Q},Qb:function(){return ae},RL:function(){return r},RS:function(){return ue},TF:function(){return S},Tx:function(){return u},UR:function(){return C},UX:function(){return ie},bj:function(){return V},eZ:function(){return l},id:function(){return I},kP:function(){return N},of:function(){return h},r4:function(){return W},sj:function(){return U},v2:function(){return a},zQ:function(){return z},zV:function(){return v}}),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(r||(r={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(i||(i={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(a||(a={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(o||(o={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(u||(u={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(c||(c={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(l||(l={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(s||(s={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(f||(f={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(m||(m={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(h||(h={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(d||(d={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(g||(g={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(p||(p={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(y||(y={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(v||(v={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(C||(C={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(P||(P={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(M||(M={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(S||(S={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(w||(w={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(x||(x={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(b||(b={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(R||(R={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(I||(I={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(T||(T={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(k||(k={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(z||(z={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(L||(L={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(F||(F={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(A||(A={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(B||(B={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(D||(D={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(_||(_={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(O||(O={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(N||(N={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(U||(U={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(Z||(Z={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(E||(E={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(W||(W={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(H||(H={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(G||(G={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(X||(X={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(Y||(Y={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(J||(J={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(V||(V={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(q||(q={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(Q||(Q={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(K||(K={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}($||($={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(j||(j={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(ee||(ee={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(te||(te={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(ne||(ne={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(re||(re={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(ie||(ie={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(ae||(ae={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(oe||(oe={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(ue||(ue={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(ce||(ce={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(le||(le={}))},54763:function(e,t,n){n.r(t),n.d(t,{previewCIMSymbol:function(){return m}});var r=n(74165),i=n(15861),a=n(17842),o=n(94304),u=n(49729),c=n(37817),l=n(69157),s=new o.CIMSymbolRasterizer(null,!0),f=c.b_.maxSize;function m(e){return h.apply(this,arguments)}function h(){return h=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i,o,c,m,h,d,g,p,y,v,C,P,M,S,w,x,b,R,I,T,k,z=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=z.length>1&&void 0!==z[1]?z[1]:{},i=n.size,o=n.maxSize,c=n.node,m=n.opacity,h=n.cimOptions||n,d=h.feature,g=h.fieldMap,p=h.geometryType,y=h.style,v=(0,u.kW)(t),C="number"==typeof i?i:null,(P=Math.min(null!=C?C:v,null!=o?o:(0,a.Wz)(f)))!==v&&(t=t.clone(),(0,u.PI)(t,P,{preserveOutlineWidth:!0})),M=3,t&&t.data&&t.data.symbol&&"CIMPointSymbol"!==t.data.symbol.type&&(M=1),e.next=7,s.rasterizeCIMSymbolAsync(t,d,g,p,{scaleFactor:M,style:y});case 7:return S=e.sent,(w=document.createElement("canvas")).width=S.imageData.width,w.height=S.imageData.height,w.getContext("2d").putImageData(S.imageData,0,0),x=w.width/M,b=w.height/M,null!=i&&(null==(null===n||void 0===n?void 0:n.scale)||null!==n&&void 0!==n&&n.scale)&&(x=(R=x/b)<=1?Math.ceil(P*R):P,b=R<=1?P:Math.ceil(P/R)),(I=new Image(x,b)).src=w.toDataURL(),null!=m&&(I.style.opacity="".concat(m)),T=I,null!=n.effectView&&(k={shape:{type:"image",x:0,y:0,width:x,height:b,src:I.src},fill:null,stroke:null,offset:[0,0]},T=(0,l.w)([[k]],[x,b],{effectView:n.effectView})),e.abrupt("return",(c&&c.appendChild(T),T));case 18:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}},91935:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1413),i=n(10064),a=n(32718),o=n(58971);function u(e,t,n,i,o){var u=e.referencesGeometry()&&o?l(t,i,o):t,c=e.repurposeFeature(u);try{return e.evaluate((0,r.Z)((0,r.Z)({},n),{},{$feature:c}))}catch(s){return a.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",s),null}}var c=new Map;function l(e,t,n){var u=n.transform,l=n.hasZ,s=n.hasM;c.has(t)||c.set(t,function(e){var t={};switch(e){case"esriGeometryPoint":return function(e,n,r,i){return(0,o.U1)(n,t,e,r,i)};case"esriGeometryPolygon":return function(e,n,r,i){return(0,o.Ie)(n,t,e,r,i)};case"esriGeometryPolyline":return function(e,n,r,i){return(0,o.G6)(n,t,e,r,i)};case"esriGeometryMultipoint":return function(e,n,r,i){return(0,o.J9)(n,t,e,r,i)};default:return a.Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new i.Z("mapview-arcade","Unable to handle geometryType: ".concat(e))),function(e){return e}}}(t));var f=c.get(t)(e.geometry,u,l,s);return(0,r.Z)((0,r.Z)({},e),{},{geometry:f})}},38999:function(e,t,n){var r,i;function a(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function o(e){switch(e){case"top":return i.Top;case"middle":return i.Center;case"baseline":return i.Baseline;case"bottom":return i.Bottom}}function u(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[r.Right,i.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[r.Center,i.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[r.Left,i.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[r.Right,i.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[r.Center,i.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[r.Left,i.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[r.Right,i.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[r.Center,i.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[r.Left,i.Top];default:return console.debug("Found invalid placement type ".concat(e)),[r.Center,i.Center]}}function c(e){switch(e){case r.Right:return-1;case r.Center:return 0;case r.Left:return 1;default:return console.debug("Found invalid horizontal alignment ".concat(e)),0}}function l(e){switch(e){case i.Top:return 1;case i.Center:return 0;case i.Bottom:case i.Baseline:return-1;default:return console.debug("Found invalid vertical alignment ".concat(e)),0}}function s(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function f(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}n.d(t,{Hd:function(){return s},M7:function(){return r},NS:function(){return f},TR:function(){return i},b7:function(){return o},g:function(){return c},kH:function(){return a},qv:function(){return u},tf:function(){return l}}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(r||(r={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(i||(i={}))},94109:function(e,t,n){n.d(t,{$0:function(){return o},AI:function(){return r},Al:function(){return h},By:function(){return C},C1:function(){return G},CQ:function(){return Y},CU:function(){return N},D3:function(){return m},Ex:function(){return l},I_:function(){return a},Ic:function(){return d},Ij:function(){return y},Ip:function(){return W},Iv:function(){return Q},Iw:function(){return s},Jw:function(){return w},MI:function(){return H},QU:function(){return S},SD:function(){return $},Tz:function(){return J},Uh:function(){return X},V4:function(){return O},XJ:function(){return E},Xj:function(){return M},Zd:function(){return A},_5:function(){return R},_6:function(){return K},a:function(){return U},aK:function(){return k},dn:function(){return _},e0:function(){return q},eF:function(){return f},eV:function(){return u},f2:function(){return v},fL:function(){return Z},iJ:function(){return g},iV:function(){return B},jk:function(){return j},kF:function(){return x},lK:function(){return z},m4:function(){return L},mx:function(){return P},nM:function(){return p},oK:function(){return V},pU:function(){return T},ru:function(){return i},tQ:function(){return D},uG:function(){return F},xl:function(){return I},xm:function(){return c},yP:function(){return b}});var r=1e-30,i=4294967295,a=512,o=8,u=10,c=29,l=24,s=8,f={metrics:{width:15,height:17,left:0,top:-7,advance:14}},m=0,h=0,d=0,g=1,p=2,y=3,v=4,C=5,P=6,M=12,S=5,w=6,x=5,b=6,R=0,I=1,T=2,k=3,z=4,L=2,F=1,A=2,B=4,D=1.05,_=3,O=5,N=6,U=1.15,Z=2,E=8,W=500,H=10,G=1024,X=2,Y=0,J=1,V=4,q=8,Q=16,K=4,$=1,j=4},73271:function(e,t,n){n.d(t,{Au:function(){return i},Jz:function(){return o},UJ:function(){return a}});var r=new Float32Array(1);new Uint32Array(r.buffer);function i(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function a(e,t){return 65535&e|t<<16}function o(e,t,n,r){return 255&e|(255&t)<<8|(255&n)<<16|r<<24}}}]);
//# sourceMappingURL=876.0e3f6ade.chunk.js.map