(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(n,t,r){"use strict";r.r(t);var e=r(2);let u=document.getElementById("sample-file");u&&u.addEventListener("change",function(){if(u.selectedIndex<=0)return;let n=u.selectedOptions[0].innerText;n&&i(n)},!1);let c,o=document.getElementById("local-file");if(o&&o.addEventListener("change",function(){let n=o.files[0];if(n){let t=new FileReader;t.onload=n=>{f(t.result)},t.readAsArrayBuffer(n)}},!1),window.location.search&&""!=window.location.search){let n=new URLSearchParams(window.location.search).get("file");n&&""!=n&&i(n)}function i(n){fetch(n).then(n=>{n.arrayBuffer().then(n=>f(n))})}function f(n){c&&(c.destroy(),c=null);let t=document.getElementById("player");n&&t&&(c=e.a.new(t,new Uint8Array(n)))}},function(n,t,r){"use strict";(function(n){r.d(t,"a",function(){return E}),r.d(t,"E",function(){return C}),r.d(t,"t",function(){return I}),r.d(t,"u",function(){return S}),r.d(t,"G",function(){return B}),r.d(t,"D",function(){return F}),r.d(t,"l",function(){return T}),r.d(t,"r",function(){return j}),r.d(t,"g",function(){return k}),r.d(t,"T",function(){return O}),r.d(t,"ab",function(){return L}),r.d(t,"gb",function(){return R}),r.d(t,"ib",function(){return $}),r.d(t,"Jb",function(){return U}),r.d(t,"Mb",function(){return D}),r.d(t,"O",function(){return J}),r.d(t,"hb",function(){return P}),r.d(t,"Hb",function(){return N}),r.d(t,"vb",function(){return _}),r.d(t,"jb",function(){return q}),r.d(t,"P",function(){return H}),r.d(t,"Q",function(){return W}),r.d(t,"S",function(){return z}),r.d(t,"U",function(){return G}),r.d(t,"rb",function(){return K}),r.d(t,"V",function(){return M}),r.d(t,"sb",function(){return Q}),r.d(t,"N",function(){return V}),r.d(t,"X",function(){return X}),r.d(t,"mb",function(){return Y}),r.d(t,"Cb",function(){return Z}),r.d(t,"Lb",function(){return nn}),r.d(t,"zb",function(){return tn}),r.d(t,"Z",function(){return rn}),r.d(t,"wb",function(){return en}),r.d(t,"xb",function(){return un}),r.d(t,"bb",function(){return cn}),r.d(t,"cb",function(){return on}),r.d(t,"yb",function(){return fn}),r.d(t,"Eb",function(){return an}),r.d(t,"qb",function(){return dn}),r.d(t,"Fb",function(){return ln}),r.d(t,"R",function(){return sn}),r.d(t,"eb",function(){return bn}),r.d(t,"tb",function(){return hn}),r.d(t,"ub",function(){return yn}),r.d(t,"M",function(){return gn}),r.d(t,"L",function(){return wn}),r.d(t,"ob",function(){return pn}),r.d(t,"I",function(){return mn}),r.d(t,"db",function(){return An}),r.d(t,"Kb",function(){return vn}),r.d(t,"Gb",function(){return xn}),r.d(t,"fb",function(){return En}),r.d(t,"Ab",function(){return Cn}),r.d(t,"Ib",function(){return In}),r.d(t,"kb",function(){return Sn}),r.d(t,"Db",function(){return Bn}),r.d(t,"J",function(){return Fn}),r.d(t,"lb",function(){return Tn}),r.d(t,"Bb",function(){return jn}),r.d(t,"K",function(){return kn}),r.d(t,"pb",function(){return On}),r.d(t,"Y",function(){return Ln}),r.d(t,"W",function(){return Rn}),r.d(t,"nb",function(){return $n}),r.d(t,"f",function(){return Un}),r.d(t,"q",function(){return Dn}),r.d(t,"m",function(){return Jn}),r.d(t,"h",function(){return Pn}),r.d(t,"o",function(){return Nn}),r.d(t,"s",function(){return _n}),r.d(t,"i",function(){return qn}),r.d(t,"B",function(){return Hn}),r.d(t,"c",function(){return Wn}),r.d(t,"n",function(){return zn}),r.d(t,"j",function(){return Gn}),r.d(t,"k",function(){return Kn}),r.d(t,"p",function(){return Mn}),r.d(t,"b",function(){return Qn}),r.d(t,"d",function(){return Vn}),r.d(t,"e",function(){return Xn}),r.d(t,"A",function(){return Yn}),r.d(t,"H",function(){return Zn}),r.d(t,"F",function(){return nt}),r.d(t,"C",function(){return tt}),r.d(t,"y",function(){return rt}),r.d(t,"x",function(){return et}),r.d(t,"z",function(){return ut}),r.d(t,"w",function(){return ct}),r.d(t,"v",function(){return ot});var e=r(4);const u="undefined"!=typeof AudioContext?AudioContext:webkitAudioContext,c=new Array(32);c.fill(void 0),c.push(void 0,null,!0,!1);let o=c.length;function i(n){o===c.length&&c.push(c.length+1);const t=o;return o=c[t],c[t]=n,t}function f(n){return c[n]}function a(n){const t=f(n);return function(n){n<36||(c[n]=o,o=n)}(n),t}let d=new TextDecoder("utf-8"),l=null;function s(){return null!==l&&l.buffer===e.g.buffer||(l=new Uint8Array(e.g.buffer)),l}function b(n,t){return d.decode(s().subarray(n,n+t))}let h,y=0,g=new TextEncoder("utf-8");h="function"==typeof g.encodeInto?function(n){let t=n.length,r=e.e(t),u=0;{const t=s();for(;u<n.length;u++){const e=n.charCodeAt(u);if(e>127)break;t[r+u]=e}}if(u!==n.length){n=n.slice(u),r=e.f(r,t,t=u+3*n.length);const c=s().subarray(r+u,r+t);u+=g.encodeInto(n,c).written}return y=u,r}:function(n){let t=n.length,r=e.e(t),u=0;{const t=s();for(;u<n.length;u++){const e=n.charCodeAt(u);if(e>127)break;t[r+u]=e}}if(u!==n.length){const c=g.encode(n.slice(u));r=e.f(r,t,t=u+c.length),s().set(c,r+u),u+=c.length}return y=u,r};let w=null;function p(){return null!==w&&w.buffer===e.g.buffer||(w=new Int32Array(e.g.buffer)),w}function m(n){e.c(i(n))}let A=null;function v(n,t){return(null!==A&&A.buffer===e.g.buffer||(A=new Float32Array(e.g.buffer)),A).subarray(n/4,n/4+t)}function x(n){return null==n}class E{static __wrap(n){const t=Object.create(E.prototype);return t.ptr=n,t}free(){const n=this.ptr;this.ptr=0,e.b(n)}static new(n,t){const r=e.i(i(n),i(t));return E.__wrap(r)}destroy(){e.h(this.ptr)}}const C=function(n){a(n)},I=function(n){const t=a(n).original;if(1==t.cnt--)return t.a=0,!0;return!1},S=function(n){a(n)},B=function(n,t){return i(b(n,t))},F=function(n){return i(f(n))},T=function(){return i(new Error)},j=function(n,t){const r=f(t).stack,e=h(r),u=y;p()[n/4+0]=e,p()[n/4+1]=u},k=function(n,t){const r=b(n,t).slice();e.d(n,1*t),console.error(r)},O=function(n){console.debug(f(n))},L=function(n){console.error(f(n))},R=function(n){console.info(f(n))},$=function(n){console.log(f(n))},U=function(n){console.warn(f(n))},D=function(n){return f(n)instanceof Window},J=function(n,t,r,e){try{f(n).copyToChannel(v(t,r),e)}catch(n){m(n)}},P=function(n){return f(n).length},N=function(n){try{f(n).start()}catch(n){m(n)}},_=function(n,t){f(n).buffer=f(t)},q=function(){try{return i(new u)}catch(n){m(n)}},H=function(n,t,r,e){try{return i(f(n).createBuffer(t>>>0,r>>>0,e))}catch(n){m(n)}},W=function(n){try{return i(f(n).createBufferSource())}catch(n){m(n)}},z=function(n,t,r,e){try{return i(f(n).createScriptProcessor(t>>>0,r>>>0,e>>>0))}catch(n){m(n)}},G=function(n,t,r,e){try{return i(f(n).decodeAudioData(f(t),f(r),f(e)))}catch(n){m(n)}},K=function(n){try{return i(f(n).resume())}catch(n){m(n)}},M=function(n){return i(f(n).destination)},Q=function(n){return f(n).sampleRate},V=function(n,t){try{return i(f(n).connect(f(t)))}catch(n){m(n)}},X=function(n){try{f(n).disconnect()}catch(n){m(n)}},Y=function(n){try{return i(f(n).outputBuffer)}catch(n){m(n)}},Z=function(n,t,r,e,u){try{f(n).setProperty(b(t,r),b(e,u))}catch(n){m(n)}},nn=function(n){return f(n)instanceof CanvasRenderingContext2D},tn=function(n,t){f(n).globalAlpha=t},rn=function(n,t,r,e){try{f(n).drawImage(f(t),r,e)}catch(n){m(n)}},en=function(n,t){f(n).fillStyle=f(t)},un=function(n,t,r){f(n).filter=b(t,r)},cn=function(n,t,r,e,u){f(n).fillRect(t,r,e,u)},on=function(n,t,r,e,u){try{f(n).fillText(b(t,r),e,u)}catch(n){m(n)}},fn=function(n,t,r){f(n).font=b(t,r)},an=function(n,t,r){f(n).textAlign=b(t,r)},dn=function(n){try{f(n).resetTransform()}catch(n){m(n)}},ln=function(n,t,r,e,u,c,o){try{f(n).setTransform(t,r,e,u,c,o)}catch(n){m(n)}},sn=function(n,t,r,e,u){try{return i(f(n).createElementNS(0===t?void 0:b(t,r),b(e,u)))}catch(n){m(n)}},bn=function(n,t,r){const e=f(n).getElementById(b(t,r));return x(e)?0:i(e)},hn=function(n,t,r,e,u){try{f(n).setAttribute(b(t,r),b(e,u))}catch(n){m(n)}},yn=function(n,t,r,e,u,c,o){try{f(n).setAttributeNS(0===t?void 0:b(t,r),b(e,u),b(c,o))}catch(n){m(n)}},gn=function(n){return f(n).clientWidth},wn=function(n){return f(n).clientHeight},pn=function(n){f(n).remove()},mn=function(n,t,r,e){try{f(n).addEventListener(b(t,r),f(e))}catch(n){m(n)}},An=function(n,t,r){try{const e=f(n).getContext(b(t,r));return x(e)?0:i(e)}catch(n){m(n)}},vn=function(n){return f(n).width},xn=function(n,t){f(n).width=t>>>0},En=function(n){return f(n).height},Cn=function(n,t){f(n).height=t>>>0},In=function(n){return i(f(n).style)},Sn=function(){try{return i(new Image)}catch(n){m(n)}},Bn=function(n,t,r){f(n).src=b(t,r)},Fn=function(n,t){try{return i(f(n).appendChild(f(t)))}catch(n){m(n)}},Tn=function(n){return f(n).now()},jn=function(n,t){f(n).onaudioprocess=f(t)},kn=function(n,t){try{f(n).cancelAnimationFrame(t)}catch(n){m(n)}},On=function(n,t){try{return f(n).requestAnimationFrame(f(t))}catch(n){m(n)}},Ln=function(n){const t=f(n).document;return x(t)?0:i(t)},Rn=function(n){return f(n).devicePixelRatio},$n=function(n){const t=f(n).performance;return x(t)?0:i(t)},Un=function(n,t){try{return i(f(n).call(f(t)))}catch(n){m(n)}},Dn=function(n,t,r){return i(f(n).slice(t>>>0,r>>>0))},Jn=function(n,t){return i(new Function(b(n,t)))},Pn=function(){try{return i(globalThis.globalThis)}catch(n){m(n)}},Nn=function(){try{return i(self.self)}catch(n){m(n)}},_n=function(){try{return i(window.window)}catch(n){m(n)}},qn=function(){try{return i(n.global)}catch(n){m(n)}},Hn=function(n){return void 0===f(n)},Wn=function(n){return i(f(n).buffer)},zn=function(n,t,r){return i(new Uint8Array(f(n),t>>>0,r>>>0))},Gn=function(n){return f(n).length},Kn=function(n){return i(new Uint8Array(f(n)))},Mn=function(n,t,r){f(n).set(f(t),r>>>0)},Qn=function(n){return i(f(n).buffer)},Vn=function(n){return f(n).byteLength},Xn=function(n){return f(n).byteOffset},Yn=function(n,t){const r=function n(t){const r=typeof t;if("number"==r||"boolean"==r||null==t)return`${t}`;if("string"==r)return`"${t}"`;if("symbol"==r){const n=t.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==r){const n=t.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(t)){const r=t.length;let e="[";r>0&&(e+=n(t[0]));for(let u=1;u<r;u++)e+=", "+n(t[u]);return e+="]"}const e=/\[object ([^\]]+)\]/.exec(toString.call(t));let u;if(!(e.length>1))return toString.call(t);if("Object"==(u=e[1]))try{return"Object("+JSON.stringify(t)+")"}catch(n){return"Object"}return t instanceof Error?`${t.name}: ${t.message}\n${t.stack}`:u}(f(t)),e=h(r),u=y;p()[n/4+0]=e,p()[n/4+1]=u},Zn=function(n,t){throw new Error(b(n,t))},nt=function(n){throw a(n)},tt=function(){return i(e.g)},rt=function(n,t,r){const u={a:n,b:t,cnt:1},c=n=>{u.cnt++;const t=u.a;u.a=0;try{return function(n,t,r){e.a.get(53)(n,t,i(r))}(t,u.b,n)}finally{0==--u.cnt?e.a.get(47)(t,u.b):u.a=t}};return c.original=u,i(c)},et=function(n,t,r){const u={a:n,b:t,cnt:1},c=n=>{u.cnt++;const t=u.a;u.a=0;try{return function(n,t,r){e.a.get(53)(n,t,i(r))}(t,u.b,n)}finally{0==--u.cnt?e.a.get(47)(t,u.b):u.a=t}};return c.original=u,i(c)},ut=function(n,t,r){const u={a:n,b:t,cnt:1},c=n=>{u.cnt++;const t=u.a;u.a=0;try{return function(n,t,r){e.a.get(53)(n,t,i(r))}(t,u.b,n)}finally{0==--u.cnt?e.a.get(47)(t,u.b):u.a=t}};return c.original=u,i(c)},ct=function(n,t,r){const u={a:n,b:t,cnt:1},c=n=>{u.cnt++;const t=u.a;u.a=0;try{return function(n,t,r){e.a.get(50)(n,t,r)}(t,u.b,n)}finally{0==--u.cnt?e.a.get(47)(t,u.b):u.a=t}};return c.original=u,i(c)},ot=function(n,t,r){const u={a:n,b:t,cnt:1},c=()=>{u.cnt++;const n=u.a;u.a=0;try{return function(n,t){e.a.get(46)(n,t)}(n,u.b)}finally{0==--u.cnt?e.a.get(47)(n,u.b):u.a=n}};return c.original=u,i(c)}}).call(this,r(3))},function(n,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}n.exports=r},function(n,t,r){"use strict";var e=r.w[n.i];n.exports=e;r(2);e.j()}]]);