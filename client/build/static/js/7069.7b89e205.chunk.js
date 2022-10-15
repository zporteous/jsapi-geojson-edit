"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[7069],{97069:function(n,t,e){e.r(t),e.d(t,{l:function(){return a}});var r,o,i,u={exports:{}};r=u,o=function(){return{load:function(n){var t=n.locateFile,e={},o=void 0!==o?o:{},i=function(){var n;return{resolve:function(t){return n(t)},promise:new Promise((function(t){return n=t}))}}();o.locateFile=t,o.onRuntimeInitialized=function(){i.resolve(e)},e.Module=o,e.whenLoaded=function(){return i.promise};var u,a={};for(u in o)o.hasOwnProperty(u)&&(a[u]=o[u]);var f,s,c,l,p,m="object"==typeof window,h="function"==typeof importScripts,d="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,y="";d?(y=h?require("path").dirname(y)+"/":__dirname+"/",f=function(n,t){return l||(l=require("fs")),p||(p=require("path")),n=p.normalize(n),l.readFileSync(n,t?null:"utf8")},c=function(n){var t=f(n,!0);return t.buffer||(t=new Uint8Array(t)),function(n,t){n||U("Assertion failed: "+t)}(t.buffer),t},s=function(n,t,e){l||(l=require("fs")),p||(p=require("path")),n=p.normalize(n),l.readFile(n,(function(n,r){n?e(n):t(r.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),r.exports=o,process.on("uncaughtException",(function(n){if(!(n instanceof V))throw n})),process.on("unhandledRejection",U),o.inspect=function(){return"[Emscripten Module object]"}):(m||h)&&(h?y=self.location.href:"undefined"!=typeof document&&document.currentScript&&(y=document.currentScript.src),y=0!==y.indexOf("blob:")?y.substr(0,y.lastIndexOf("/")+1):"",f=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},h&&(c=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),s=function(n,t,e){var r=new XMLHttpRequest;r.open("GET",n,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):e()},r.onerror=e,r.send(null)});var g=o.print||console.log.bind(console),v=o.printErr||console.warn.bind(console);for(u in a)a.hasOwnProperty(u)&&(o[u]=a[u]);a=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&o.quit;var w,b,A=0;o.wasmBinary&&(w=o.wasmBinary),o.noExitRuntime,"object"!=typeof WebAssembly&&U("no native wasm support detected");var _,E,R,P,S=!1,T="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function j(n,t,e){for(var r=t+e,o=t;n[o]&&!(o>=r);)++o;if(o-t>16&&n.subarray&&T)return T.decode(n.subarray(t,o));for(var i="";t<o;){var u=n[t++];if(128&u){var a=63&n[t++];if(192!=(224&u)){var f=63&n[t++];if((u=224==(240&u)?(15&u)<<12|a<<6|f:(7&u)<<18|a<<12|f<<6|63&n[t++])<65536)i+=String.fromCharCode(u);else{var s=u-65536;i+=String.fromCharCode(55296|s>>10,56320|1023&s)}}else i+=String.fromCharCode((31&u)<<6|a)}else i+=String.fromCharCode(u)}return i}function I(n,t){return n%t>0&&(n+=t-n%t),n}function x(n){_=n,o.HEAP8=new Int8Array(n),o.HEAP16=new Int16Array(n),o.HEAP32=R=new Int32Array(n),o.HEAPU8=E=new Uint8Array(n),o.HEAPU16=new Uint16Array(n),o.HEAPU32=new Uint32Array(n),o.HEAPF32=new Float32Array(n),o.HEAPF64=new Float64Array(n)}o.INITIAL_MEMORY;var H=[],M=[],C=[];function F(n){H.unshift(n)}function k(n){C.unshift(n)}var q,O=0,W=null;function U(n){throw o.onAbort&&o.onAbort(n),v(n+=""),S=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}function L(n){return n.startsWith("data:application/octet-stream;base64,")}function B(n){return n.startsWith("file://")}function D(n){try{if(n==q&&w)return new Uint8Array(w);if(c)return c(n);throw"both async and sync fetching of the wasm failed"}catch(v){U(v)}}function z(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var e=t.func;"number"==typeof e?void 0===t.arg?P.get(e)():P.get(e)(t.arg):e(void 0===t.arg?null:t.arg)}else t(o)}}function N(n){try{return b.grow(n-_.byteLength+65535>>>16),x(b.buffer),1}catch(r){}}o.preloadedImages={},o.preloadedAudios={},L(q="libtess.wasm")||(q=function(n){return o.locateFile?o.locateFile(n,y):y+n}(q));var G={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var e=G.buffers[n];0===t||10===t?((1===n?g:v)(j(e,0)),e.length=0):e.push(t)},varargs:void 0,get:function(){return G.varargs+=4,R[G.varargs-4>>2]},getStr:function(n){return function(n,t){return n?j(E,n,t):""}(n)},get64:function(n,t){return n}},X={h:function(){throw"longjmp"},l:function(n,t,e){E.copyWithin(n,t,t+e)},g:function(n){var t=E.length,e=2147483648;if((n>>>=0)>e)return!1;for(var r=1;r<=4;r*=2){var o=t*(1+.2/r);if(o=Math.min(o,n+100663296),N(Math.min(e,I(Math.max(n,o),65536))))return!0}return!1},f:function(n,t,e,r){for(var o=0,i=0;i<e;i++){for(var u=R[t+8*i>>2],a=R[t+(8*i+4)>>2],f=0;f<a;f++)G.printChar(n,E[u+f]);o+=a}return R[r>>2]=o,0},b:function(){return A},k:function(n){var e=J();try{return P.get(n)()}catch(t){if(K(e),t!==t+0&&"longjmp"!==t)throw t;Q(1,0)}},d:function(n,t){var r=J();try{return P.get(n)(t)}catch(e){if(K(r),e!==e+0&&"longjmp"!==e)throw e;Q(1,0)}},j:function(n,t,e){var r=J();try{return P.get(n)(t,e)}catch(o){if(K(r),o!==o+0&&"longjmp"!==o)throw o;Q(1,0)}},i:function(n,t,e,r){var o=J();try{return P.get(n)(t,e,r)}catch(i){if(K(o),i!==i+0&&"longjmp"!==i)throw i;Q(1,0)}},e:function(n,t){var r=J();try{P.get(n)(t)}catch(e){if(K(r),e!==e+0&&"longjmp"!==e)throw e;Q(1,0)}},c:function(n,t,e){var r=J();try{P.get(n)(t,e)}catch(o){if(K(r),o!==o+0&&"longjmp"!==o)throw o;Q(1,0)}},a:function(n){!function(n){A=n}(n)}};(function(){var n={a:X};function t(n,t){var e=n.exports;o.asm=e,x((b=o.asm.m).buffer),P=o.asm.q,function(n){M.unshift(n)}(o.asm.n),function(n){if(O--,o.monitorRunDependencies&&o.monitorRunDependencies(O),0==O&&W){var t=W;W=null,t()}}()}function e(n){t(n.instance)}function r(t){return function(){if(!w&&(m||h)){if("function"==typeof fetch&&!B(q))return fetch(q,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+q+"'";return n.arrayBuffer()})).catch((function(){return D(q)}));if(s)return new Promise((function(n,t){s(q,(function(t){n(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return D(q)}))}().then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){v("failed to asynchronously prepare wasm: "+n),U(n)}))}if(O++,o.monitorRunDependencies&&o.monitorRunDependencies(O),o.instantiateWasm)try{return o.instantiateWasm(n,t)}catch(i){return v("Module.instantiateWasm callback failed with error: "+i),!1}w||"function"!=typeof WebAssembly.instantiateStreaming||L(q)||B(q)||"function"!=typeof fetch?r(e):fetch(q,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(e,(function(n){return v("wasm streaming compile failed: "+n),v("falling back to ArrayBuffer instantiation"),r(e)}))}))})(),o.___wasm_call_ctors=function(){return(o.___wasm_call_ctors=o.asm.n).apply(null,arguments)},o._malloc=function(){return(o._malloc=o.asm.o).apply(null,arguments)},o._free=function(){return(o._free=o.asm.p).apply(null,arguments)},o._triangulate=function(){return(o._triangulate=o.asm.r).apply(null,arguments)};var Y,J=o.stackSave=function(){return(J=o.stackSave=o.asm.s).apply(null,arguments)},K=o.stackRestore=function(){return(K=o.stackRestore=o.asm.t).apply(null,arguments)},Q=o._setThrew=function(){return(Q=o._setThrew=o.asm.u).apply(null,arguments)};function V(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function Z(n){function t(){Y||(Y=!0,o.calledRun=!0,S||(z(M),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)k(o.postRun.shift());z(C)}()))}O>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)F(o.preRun.shift());z(H)}(),O>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),t()}),1)):t()))}if(W=function n(){Y||Z(),Y||(W=n)},o.run=Z,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();Z();var $=null,nn=null,tn=null,en=null,rn=e.Module,on=0;return e.triangulate=function(n,t,e){$||($=rn._triangulate);var r=rn.HEAPF32,o=rn.HEAP32.BYTES_PER_ELEMENT,i=r.BYTES_PER_ELEMENT;e>on&&(on=e,tn&&(rn._free(tn),tn=0),nn&&(rn._free(nn),nn=0)),tn||(tn=rn._malloc(e*i)),en||(en=rn._malloc(4e3*o));var u=2*e;nn||(nn=rn._malloc(u*i)),(r=rn.HEAPF32).set(n,tn/i),rn.HEAP32.set(t,en/o);var a=u/2,f=$(tn,en,Math.min(t.length,4e3),2,nn,a),s=2*f,c=(r=rn.HEAPF32).slice(nn/i,nn/i+s),l={};return l.buffer=c,l.vertexCount=f,l},e.whenLoaded()}}},void 0!==(i=o())&&(r.exports=i);var a=function(n,t){for(var e=function(){var e=t[r];if("string"!=typeof e&&!Array.isArray(e)){var o=function(t){if("default"!==t&&!(t in n)){var r=Object.getOwnPropertyDescriptor(e,t);r&&Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}};for(var i in e)o(i)}},r=0;r<t.length;r++)e();return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:u.exports},[u.exports])}}]);
//# sourceMappingURL=7069.7b89e205.chunk.js.map