"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[345],{59447:function(e,t,n){n.d(t,{r:function(){return u}});var r=n(15671),o=n(43144),u=function(){function e(){(0,r.Z)(this,e),this._outer=new Map}return(0,o.Z)(e,[{key:"clear",value:function(){this._outer.clear()}},{key:"empty",get:function(){return 0===this._outer.size}},{key:"get",value:function(e,t){var n;return null===(n=this._outer.get(e))||void 0===n?void 0:n.get(t)}},{key:"set",value:function(e,t,n){var r=this._outer.get(e);r?r.set(t,n):this._outer.set(e,new Map([[t,n]]))}},{key:"delete",value:function(e,t){var n=this._outer.get(e);n&&(n.delete(t),0===n.size&&this._outer.delete(e))}},{key:"forEach",value:function(e){this._outer.forEach((function(t,n){return e(t,n)}))}}]),e}()},60345:function(e,t,n){n.r(t),n.d(t,{BufferObject:function(){return r.f},FramebufferObject:function(){return o.X},Program:function(){return u.$},ProgramCache:function(){return c.G},Renderbuffer:function(){return i.r},ShaderCompiler:function(){return f.B},Texture:function(){return a.x},VertexArrayObject:function(){return s.U},createContextOrErrorHTML:function(){return v.sj},createProgram:function(){return l.H},glslifyDefineMap:function(){return h.K}});var r=n(44070),o=n(53634),u=n(47428),c=n(68267),i=n(15880),f=n(56648),a=n(51378),s=n(45412),h=n(65706),l=n(96721),v=n(49800)},68267:function(e,t,n){n.d(t,{G:function(){return f}});var r=n(15671),o=n(43144),u=n(92026),c=n(59447),i=n(47428),f=function(){function e(t){(0,r.Z)(this,e),this._rctx=t,this._store=new c.r}return(0,o.Z)(e,[{key:"dispose",value:function(){this._store.forEach((function(e){return e.forEach((function(e){return e.dispose()}))})),this._store.clear()}},{key:"acquire",value:function(e,t,n,r){var o=this._store.get(e,t);if((0,u.pC)(o))return o.ref(),o;var c=new i.$(this._rctx,e,t,n,r);return c.ref(),this._store.set(e,t,c),c}},{key:"test",get:function(){var e=0;return this._store.forEach((function(t){return t.forEach((function(t){return e+=t.hasGLName?2:1}))})),{cachedWebGLObjects:e}}}]),e}()},65706:function(e,t,n){function r(e){return"number"==typeof e.options[e.value]}function o(e){var t="";for(var n in e){var o=e[n];if("boolean"==typeof o)o&&(t+="#define ".concat(n,"\n"));else if("number"==typeof o)t+="#define ".concat(n," ").concat(o.toFixed(),"\n");else if("object"==typeof o)if(r(o)){var u=o.value,c=o.options,i=o.namespace,f=i?"".concat(i,"_"):"";for(var a in c)t+="#define ".concat(f).concat(a," ").concat(c[a].toFixed(),"\n");t+="#define ".concat(n," ").concat(f).concat(u,"\n")}else{var s=o.options,h=0;for(var l in s)t+="#define ".concat(s[l]," ").concat((h++).toFixed(),"\n");t+="#define ".concat(n," ").concat(s[o.value],"\n")}}return t}n.d(t,{K:function(){return o}})}}]);
//# sourceMappingURL=345.0444962b.chunk.js.map