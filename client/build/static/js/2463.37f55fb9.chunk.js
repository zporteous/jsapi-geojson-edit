"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[2463],{92463:function(e,n,t){t.r(n),t.d(n,{hydratedAdapter:function(){return c}});var a=t(53866),r=t(77577),i=t(7882),o=t(80885),s=t(29909),c={convertToGEGeometry:function(e,n){if(null==n)return null;var t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){var a=e.hasZ(n),r=e.hasM(n),o=new i.Z({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return a&&(o.z=e.getPointZ(n)),r&&(o.m=e.getPointM(n)),o.cache._geVersion=n,o},exportPolygon:function(e,n,t){var a=new o.Z({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportPolyline:function(e,n,t){var a=new s.Z({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportMultipoint:function(e,n,t){var a=new r.Z({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return a.cache._geVersion=n,a},exportExtent:function(e,n,t){var r=e.hasZ(n),i=e.hasM(n),o=new a.Z({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(r){var s=e.getZExtent(n);o.zmin=s.vmin,o.zmax=s.vmax}if(i){var c=e.getMExtent(n);o.mmin=c.vmin,o.mmax=c.vmax}return o.cache._geVersion=n,o}}}}]);
//# sourceMappingURL=2463.37f55fb9.chunk.js.map