"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[3503],{53503:function(i,t,e){e.r(t),e.d(t,{default:function(){return L}});var n=e(93433),r=e(37762),a=e(15671),s=e(43144),h=e(60136),o=e(54062),l=e(27366),c=(e(51508),e(91505)),u=e(100),p=e(84652),v=e(92026),d=e(94172),y=e(49861),f=(e(25243),e(69912)),g=e(93655),_=e(20008),b=e(74982),m=e(83089),w=(0,s.Z)((function i(t,e,n,r,s){(0,a.Z)(this,i),this.graphic=t,this.index=e,this.x=n,this.y=r,this.viewEvent=s,this.type="graphic-click"})),k=(0,s.Z)((function i(t,e,n,r,s){(0,a.Z)(this,i),this.graphic=t,this.index=e,this.x=n,this.y=r,this.viewEvent=s,this.type="graphic-double-click"})),G=function(){function i(t,e,n,r,s,h,o,l,c,u){(0,a.Z)(this,i),this.graphic=t,this.allGraphics=e,this.index=n,this.x=r,this.y=s,this.dx=h,this.dy=o,this.totalDx=l,this.totalDy=c,this.viewEvent=u,this.defaultPrevented=!1,this.type="graphic-move-start"}return(0,s.Z)(i,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),i}(),C=function(){function i(t,e,n,r,s,h,o,l,c,u){(0,a.Z)(this,i),this.graphic=t,this.allGraphics=e,this.index=n,this.x=r,this.y=s,this.dx=h,this.dy=o,this.totalDx=l,this.totalDy=c,this.viewEvent=u,this.defaultPrevented=!1,this.type="graphic-move"}return(0,s.Z)(i,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),i}(),x=function(){function i(t,e,n,r,s,h,o,l,c,u){(0,a.Z)(this,i),this.graphic=t,this.allGraphics=e,this.index=n,this.x=r,this.y=s,this.dx=h,this.dy=o,this.totalDx=l,this.totalDy=c,this.viewEvent=u,this.defaultPrevented=!1,this.type="graphic-move-stop"}return(0,s.Z)(i,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),i}(),S=(0,s.Z)((function i(t,e,n,r,s){(0,a.Z)(this,i),this.graphic=t,this.index=e,this.x=n,this.y=r,this.viewEvent=s,this.type="graphic-pointer-over"})),Z=(0,s.Z)((function i(t,e,n,r,s){(0,a.Z)(this,i),this.graphic=t,this.index=e,this.x=n,this.y=r,this.viewEvent=s,this.type="graphic-pointer-out"})),E=(0,s.Z)((function i(t,e,n,r,s){(0,a.Z)(this,i),this.graphic=t,this.index=e,this.x=n,this.y=r,this.viewEvent=s,this.type="graphic-pointer-down"})),O=(0,s.Z)((function i(t,e,n,r,s){(0,a.Z)(this,i),this.graphic=t,this.index=e,this.x=n,this.y=r,this.viewEvent=s,this.type="graphic-pointer-up"})),P=e(91806),D=e(2346),H=e(72612),M=e(16072),I=e(16851),T=e(61459),U="indicator-symbols",A=function(i){(0,h.Z)(e,i);var t=(0,o.Z)(e);function e(i){var n;return(0,a.Z)(this,e),(n=t.call(this,i))._activeGraphic=null,n._dragEvent=null,n._handles=new u.Z,n._hoverGraphic=null,n._indicators=[],n._initialDragGeometry=null,n._viewHandles=new u.Z,n._manipulators=[],n._layerViews=null,n.type="graphic-mover",n.callbacks={onGraphicClick:function(){},onGraphicDoubleClick:function(){},onGraphicMoveStart:function(){},onGraphicMove:function(){},onGraphicMoveStop:function(){},onGraphicPointerOver:function(){},onGraphicPointerOut:function(){},onGraphicPointerDown:function(){},onGraphicPointerUp:function(){}},n.enableMoveAllGraphics=!1,n.graphics=[],n.indicatorsEnabled=!1,n.layer=new g.Z({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),n.view=null,n}return(0,s.Z)(e,[{key:"initialize",value:function(){var i=this;(0,m.p)(this.view,this.layer),this._highlightHelper=new b.Z({view:this.view}),this.refresh(),this._handles.add([(0,d.YP)((function(){var t;return[i.graphics,null===(t=i.graphics)||void 0===t?void 0:t.length]}),(function(){return i.refresh()})),(0,d.gx)((function(){var t;return null===(t=i.view)||void 0===t?void 0:t.ready}),(function(){i._viewHandles.add([i.view.on("immediate-click",(function(t){return i._clickHandler(t)}),P.f.TOOL),i.view.on("double-click",(function(t){return i._doubleClickHandler(t)}),P.f.TOOL),i.view.on("pointer-down",(function(t){return i._pointerDownHandler(t)}),P.f.TOOL),i.view.on("pointer-move",(function(t){return i._pointerMoveHandler(t)}),P.f.TOOL),i.view.on("pointer-up",(function(t){return i._pointerUpHandler(t)}),P.f.TOOL),i.view.on("drag",(function(t){return i._dragHandler(t)}),P.f.TOOL),i.view.on("key-down",(function(t){return i._keyDownHandler(t)}),P.f.TOOL)])}),{once:!0,initial:!0}),(0,d.YP)((function(){return i.view}),(function(t){i._highlightHelper.removeAll(),i._highlightHelper.view=t}))])}},{key:"destroy",value:function(){var i;this._removeIndicators(),null!==(i=this.view.map)&&void 0!==i&&i.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((function(i){return i.destroy()})),this._manipulators=null,this._handles=(0,v.SC)(this._handles),this._viewHandles=(0,v.SC)(this._viewHandles)}},{key:"highlightsEnabled",set:function(i){var t,e;null!==(t=this._highlightHelper)&&void 0!==t&&t.removeAll(),this._set("highlightsEnabled",i),i&&(null===(e=this._highlightHelper)||void 0===e||e.add(this.graphics))}},{key:"state",get:function(){var i=!!this.get("view.ready"),t=!!this.get("graphics.length"),e=this._activeGraphic;return i&&t?e?"moving":"active":i?"ready":"disabled"}},{key:"refresh",value:function(){this.reset(),this._setup()}},{key:"reset",value:function(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null,this._highlightHelper.removeAll()}},{key:"updateGeometry",value:function(i,t){var e=this.graphics[i];e&&(e.set("geometry",t),this._setUpIndicators())}},{key:"_setup",value:function(){this._setUpHighlights(),this._setUpIndicators(),this._setUpManipulators(),this._syncLayerViews()}},{key:"_clickHandler",value:function(i){var t=this._findTargetGraphic((0,H.vT)(i));if(t){var e=new w(t,this.graphics.indexOf(t),i.x,i.y,i);this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e)}}},{key:"_doubleClickHandler",value:function(i){var t=this._findTargetGraphic((0,H.vT)(i));if(t){var e=new k(t,this.graphics.indexOf(t),i.x,i.y,i);this.emit("graphic-double-click",e),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(e)}}},{key:"_pointerDownHandler",value:function(i){var t=this._findTargetGraphic((0,H.vT)(i));if(t){this._activeGraphic=t;var e=i.x,n=i.y,r=new E(t,this.graphics.indexOf(t),e,n,i);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}},{key:"_pointerUpHandler",value:function(i){if(this._activeGraphic){var t=i.x,e=i.y,n=this.graphics.indexOf(this._activeGraphic),r=new O(this._activeGraphic,n,t,e,i);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}},{key:"_pointerMoveHandler",value:function(i){if(!this._dragEvent){var t=this._findTargetGraphic((0,H.vT)(i));if(t){var e=i.x,n=i.y;if(this._hoverGraphic){if(this._hoverGraphic===t)return;var r=this.graphics.indexOf(this._hoverGraphic),a=new Z(this.graphics[r],r,e,n,i);this._hoverGraphic=null,this.emit("graphic-pointer-out",a),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(a)}var s=this.graphics.indexOf(t),h=new S(t,s,e,n,i);return this._hoverGraphic=t,this.emit("graphic-pointer-over",h),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(h))}if(this._hoverGraphic){var o=i.x,l=i.y,c=this.graphics.indexOf(this._hoverGraphic),u=new Z(this.graphics[c],c,o,l,i);this._hoverGraphic=null,this.emit("graphic-pointer-out",u),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(u)}}}},{key:"_dragHandler",value:function(i){var t=this;if(("start"===i.action||this._dragEvent)&&this._activeGraphic&&this._activeGraphic.geometry){"start"===i.action&&this._removeIndicators(),i.stopPropagation();var e=i.action,n=i.x,r=i.y,a=this.graphics.indexOf(this._activeGraphic),s=this._dragEvent?n-this._dragEvent.x:0,h=this._dragEvent?r-this._dragEvent.y:0,o=n-i.origin.x,l=r-i.origin.y,c="start"===e?this._activeGraphic.geometry:this._initialDragGeometry,u=(0,_.e7)(c,o,l,this.view);if(this._activeGraphic.geometry=u,this.enableMoveAllGraphics&&this.graphics.forEach((function(i){i!==t._activeGraphic&&(i.geometry=(0,_.e7)(i.geometry,s,h,t.view))})),this._dragEvent=i,"start"===e){this._initialDragGeometry=(0,p.d9)(c);var v=new G(this._activeGraphic,this.graphics,a,n,r,s,h,o,l,i);this.emit("graphic-move-start",v),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(v),v.defaultPrevented&&this._activeGraphic.set("geometry",c)}else if("update"===e){var d=new C(this._activeGraphic,this.graphics,a,n,r,s,h,o,l,i);this.emit("graphic-move",d),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(d),d.defaultPrevented&&(this._activeGraphic.geometry=c)}else{var y=new x(this._activeGraphic,this.graphics,a,n,r,s,h,o,l,i);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",y),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(y),y.defaultPrevented&&(this.graphics[a].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}}},{key:"_keyDownHandler",value:function(i){"a"!==i.key&&"d"!==i.key&&"n"!==i.key||"moving"!==this.state||i.stopPropagation()}},{key:"_findTargetGraphic",value:function(i){var t=this,e=this.view.toMap(i),n=null,r=Number.MAX_VALUE;this._syncLayerViews();var a=this._layerViews.flatMap((function(i){return"graphicsViews"in i?Array.from(i.graphicsViews(),(function(i){return i.hitTest(e)})).flat():i.graphicsView.hitTest(e)})).filter((function(i){return t.graphics.includes(i)}));return a.length?a[0]:(this._manipulators.forEach((function(t){var e=t.intersectionDistance(i);(0,v.pC)(e)&&e<r&&(r=e,n=t.graphic)})),n)}},{key:"_syncLayerViews",value:function(){this._layerViews=[];var i,t=new Set,e=(0,r.Z)(this.graphics);try{for(e.s();!(i=e.n()).done;){var a=i.value,s=(0,m.j)(this.view,a.layer);s&&t.add(s)}}catch(h){e.e(h)}finally{e.f()}this._layerViews=(0,n.Z)(t)}},{key:"_setUpManipulators",value:function(){var i=this.graphics,t=this.view;this._manipulators.forEach((function(i){return i.destroy()})),this._manipulators=null!==i&&void 0!==i&&i.length?i.map((function(i){return new D.L({graphic:i,view:t})})):[]}},{key:"_setUpHighlights",value:function(){this.highlightsEnabled&&this._highlightHelper.add(this.graphics)}},{key:"_setUpIndicators",value:function(){var i=this;if(this._removeIndicators(),this.indicatorsEnabled){var t,e=(0,r.Z)(this.graphics);try{var n=function(){var e=t.value,n=e.clone();n.symbol=i._getSymbolForIndicator(e),i._indicators.push(n),i._handles.add((0,d.YP)((function(){return e.symbol}),(function(){return i._setUpIndicators()})),U)};for(e.s();!(t=e.n()).done;)n()}catch(a){e.e(a)}finally{e.f()}this.layer.addMany(this._indicators)}}},{key:"_removeIndicators",value:function(){this._handles.remove(U),this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((function(i){return i.destroy()})),this._indicators=[])}},{key:"_getSymbolForIndicator",value:function(i){if((0,v.Wi)(i.symbol))return null;switch(i.symbol.type){case"cim":return new M.default({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":var t=i.symbol,e=t.xoffset,n=t.yoffset,r=t.height,a=t.width,s=r===a?a:Math.max(r,a);return new M.default({xoffset:e,yoffset:n,size:s,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"simple-marker":var h=i.symbol,o=h.xoffset,l=h.yoffset,c=h.size,u=h.style;return new M.default({xoffset:o,yoffset:l,style:"circle"===u?"circle":"square",size:c+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"simple-fill":return new T.default({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new I.default({color:[255,127,0,1],style:"dash",width:1});case"text":var p=i.symbol,d=p.xoffset,y=p.yoffset;return new M.default({xoffset:d,yoffset:y,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});default:return null}}}]),e}(c.Z.EventedAccessor);(0,l._)([(0,y.Cb)()],A.prototype,"_activeGraphic",void 0),(0,l._)([(0,y.Cb)({readOnly:!0})],A.prototype,"type",void 0),(0,l._)([(0,y.Cb)()],A.prototype,"callbacks",void 0),(0,l._)([(0,y.Cb)()],A.prototype,"enableMoveAllGraphics",void 0),(0,l._)([(0,y.Cb)()],A.prototype,"graphics",void 0),(0,l._)([(0,y.Cb)({value:!1})],A.prototype,"highlightsEnabled",null),(0,l._)([(0,y.Cb)()],A.prototype,"indicatorsEnabled",void 0),(0,l._)([(0,y.Cb)()],A.prototype,"layer",void 0),(0,l._)([(0,y.Cb)({readOnly:!0})],A.prototype,"state",null),(0,l._)([(0,y.Cb)()],A.prototype,"view",void 0);var L=A=(0,l._)([(0,f.j)("esri.views.draw.support.GraphicMover")],A)},74982:function(i,t,e){e.d(t,{Z:function(){return d}});var n=e(15671),r=e(43144),a=e(60136),s=e(54062),h=e(27366),o=e(41691),l=e(49861),c=(e(63780),e(93169),e(25243),e(69912)),u=e(83089),p=e(69787),v=function(i){(0,a.Z)(e,i);var t=(0,s.Z)(e);function e(i){var r;return(0,n.Z)(this,e),(r=t.call(this,i)).view=null,r}return(0,r.Z)(e,[{key:"count",get:function(){return this.handles.size}},{key:"add",value:function(i){var t=this,e=Array.isArray(i)?i:[i];null!=i&&e&&e.length&&e.forEach((function(i){return t._highlight(i)}))}},{key:"remove",value:function(i){var t=this,e=Array.isArray(i)?i:[i];null!=i&&e&&e.length&&e.forEach((function(i){return t._unhighlight(i)}))}},{key:"removeAll",value:function(){this.handles.removeAll()}},{key:"_highlight",value:function(i){var t=(0,u.j)(this.view,i.layer);(0,p.tl)(t)&&this.handles.add(t.highlight(i),"feature-".concat(i.getObjectId()))}},{key:"_unhighlight",value:function(i){i&&this.handles.remove("feature-".concat(i.getObjectId()))}}]),e}(o.r);(0,h._)([(0,l.Cb)({readOnly:!0})],v.prototype,"count",null),(0,h._)([(0,l.Cb)()],v.prototype,"view",void 0),(0,h._)([(0,l.Cb)()],v.prototype,"add",null);var d=v=(0,h._)([(0,c.j)("esri.views.draw.support.HighlightHelper")],v)},2346:function(i,t,e){e.d(t,{L:function(){return G}});var n=e(15671),r=e(43144),a=e(60136),s=e(54062),h=e(27366),o=e(85015),l=e(91505),c=e(92026),u=e(94172),p=e(17842),v=e(49861),d=(e(63780),e(93169),e(25243),e(69912)),y=e(88396),f=e(11186),g=e(71353),_=e(79803),b=e(74509),m=e(61574),w=e(64575),k=e(45008),G=function(i){(0,a.Z)(e,i);var t=(0,s.Z)(e);function e(i){var r;return(0,n.Z)(this,e),(r=t.call(this,i)).layer=null,r.interactive=!0,r.selectable=!1,r.grabbable=!0,r.dragging=!1,r.cursor=null,r.events=new l.Z.EventEmitter,r._circleCollisionCache=null,r._graphicSymbolChangedHandle=null,r._originalSymbol=null,r}return(0,r.Z)(e,[{key:"graphic",set:function(i){this._circleCollisionCache=null,this._originalSymbol=i.symbol,this._set("graphic",i),this.attachSymbolChanged()}},{key:"elevationInfo",get:function(){var i="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,t=(0,b.vu)(this.graphic),e=i?i.offset:0;return new w.ZP({mode:t,offset:e})}},{key:"focusedSymbol",set:function(i){i!==this._get("focusedSymbol")&&(this._set("focusedSymbol",i),this._updateGraphicSymbol(),this._circleCollisionCache=null)}},{key:"grabbableForEvent",value:function(){return!0}},{key:"grabbing",set:function(i){i!==this._get("grabbing")&&(this._set("grabbing",i),this._updateGraphicSymbol())}},{key:"hovering",set:function(i){i!==this._get("hovering")&&(this._set("hovering",i),this._updateGraphicSymbol())}},{key:"selected",set:function(i){i!==this._get("selected")&&(this._set("selected",i),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:i?"select":"deselect"}))}},{key:"_focused",get:function(){return this._get("hovering")||this._get("grabbing")}},{key:"destroy",value:function(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}},{key:"intersectionDistance",value:function(i){var t=this.graphic;if(!1===t.visible)return null;var e=t.geometry;if((0,c.Wi)(e))return null;var n=this._get("focusedSymbol"),r=(0,c.pC)(n)?n:t.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,i,e,r):this._intersectDistance3D(this.view,i,t)}},{key:"attach",value:function(){this.attachSymbolChanged(),(0,c.pC)(this.layer)&&this.layer.add(this.graphic)}},{key:"detach",value:function(){this.detachSymbolChanged(),this._resetGraphicSymbol(),(0,c.pC)(this.layer)&&this.layer.remove(this.graphic)}},{key:"attachSymbolChanged",value:function(){var i=this;this.detachSymbolChanged(),this._graphicSymbolChangedHandle=(0,u.YP)((function(){var t;return null===(t=i.graphic)||void 0===t?void 0:t.symbol}),(function(t){(0,c.pC)(t)&&t!==i.focusedSymbol&&t!==i._originalSymbol&&(i._originalSymbol=t,i._focused&&(0,c.pC)(i.focusedSymbol)&&(i.graphic.symbol=i.focusedSymbol))}),u.Z_)}},{key:"detachSymbolChanged",value:function(){(0,c.pC)(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}},{key:"_updateGraphicSymbol",value:function(){this.graphic.symbol=this._focused&&(0,c.pC)(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}},{key:"_resetGraphicSymbol",value:function(){this.graphic.symbol=this._originalSymbol}},{key:"_intersectDistance2D",value:function(i,t,e,n){if(n=n||(0,m.js)(e),(0,c.Wi)(n))return null;var r=this._circleCollisionCache;if("point"!==e.type||"simple-marker"!==n.type)return(0,k.D)(t,e,i)?1:null;if((0,c.Wi)(r)||!r.originalPoint.equals(e)){var a=e,s=i.spatialReference;if((0,_.Up)(a.spatialReference,s)){var h=(0,_.iV)(a,s);r={originalPoint:a.clone(),mapPoint:h,radiusPx:(0,p.F2)(n.size)},this._circleCollisionCache=r}}if((0,c.pC)(r)){var o=(0,p.md)(t,x),l=i.toScreen(r.mapPoint),u=r.radiusPx,v=l.x+(0,p.F2)(n.xoffset),d=l.y-(0,p.F2)(n.yoffset);return(0,y.s)(o,[v,d])<u*u?1:null}return null}},{key:"_intersectDistance3D",value:function(i,t,e){var n=i.toMap(t,{include:[e]});return n&&(0,_.KC)(n,C,i.renderSpatialReference)?(0,f.i)(C,i.state.camera.eye):null}}]),e}(o.Z);(0,h._)([(0,v.Cb)({constructOnly:!0,nonNullable:!0})],G.prototype,"graphic",null),(0,h._)([(0,v.Cb)()],G.prototype,"elevationInfo",null),(0,h._)([(0,v.Cb)({constructOnly:!0,nonNullable:!0})],G.prototype,"view",void 0),(0,h._)([(0,v.Cb)({value:null})],G.prototype,"focusedSymbol",null),(0,h._)([(0,v.Cb)({constructOnly:!0})],G.prototype,"layer",void 0),(0,h._)([(0,v.Cb)()],G.prototype,"interactive",void 0),(0,h._)([(0,v.Cb)()],G.prototype,"selectable",void 0),(0,h._)([(0,v.Cb)()],G.prototype,"grabbable",void 0),(0,h._)([(0,v.Cb)({value:!1})],G.prototype,"grabbing",null),(0,h._)([(0,v.Cb)()],G.prototype,"dragging",void 0),(0,h._)([(0,v.Cb)()],G.prototype,"hovering",null),(0,h._)([(0,v.Cb)({value:!1})],G.prototype,"selected",null),(0,h._)([(0,v.Cb)()],G.prototype,"cursor",void 0),G=(0,h._)([(0,d.j)("esri.views.interactive.GraphicManipulator")],G);var C=(0,g.c)(),x=(0,p.s1)()}}]);
//# sourceMappingURL=3503.d8f52d0d.chunk.js.map