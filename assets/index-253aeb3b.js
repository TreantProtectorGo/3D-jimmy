(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function ql(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const ot={},Is=[],Tn=()=>{},zp=()=>!1,kp=/^on[^a-z]/,Jo=n=>kp.test(n),Yl=n=>n.startsWith("onUpdate:"),Rt=Object.assign,Kl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hp=Object.prototype.hasOwnProperty,$e=(n,e)=>Hp.call(n,e),Ue=Array.isArray,Ds=n=>kr(n)==="[object Map]",Qo=n=>kr(n)==="[object Set]",Oc=n=>kr(n)==="[object Date]",ze=n=>typeof n=="function",yt=n=>typeof n=="string",Cr=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",Ud=n=>st(n)&&ze(n.then)&&ze(n.catch),Nd=Object.prototype.toString,kr=n=>Nd.call(n),Vp=n=>kr(n).slice(8,-1),Od=n=>kr(n)==="[object Object]",$l=n=>yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Po=ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Gp=/-(\w)/g,Bn=ea(n=>n.replace(Gp,(e,t)=>t?t.toUpperCase():"")),Wp=/\B([A-Z])/g,tr=ea(n=>n.replace(Wp,"-$1").toLowerCase()),ta=ea(n=>n.charAt(0).toUpperCase()+n.slice(1)),ya=ea(n=>n?`on${ta(n)}`:""),Lr=(n,e)=>!Object.is(n,e),Io=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Bo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Fd=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Fc;const fl=()=>Fc||(Fc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zl(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=yt(i)?Yp(i):Zl(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(yt(n))return n;if(st(n))return n}}const Xp=/;(?![^(]*\))/g,jp=/:([^]+)/,qp=/\/\*[^]*?\*\//g;function Yp(n){const e={};return n.replace(qp,"").split(Xp).forEach(t=>{if(t){const i=t.split(jp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Pr(n){let e="";if(yt(n))e=n;else if(Ue(n))for(let t=0;t<n.length;t++){const i=Pr(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Kp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$p=ql(Kp);function Bd(n){return!!n||n===""}function Zp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=na(n[i],e[i]);return t}function na(n,e){if(n===e)return!0;let t=Oc(n),i=Oc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Cr(n),i=Cr(e),t||i)return n===e;if(t=Ue(n),i=Ue(e),t||i)return t&&i?Zp(n,e):!1;if(t=st(n),i=st(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!na(n[o],e[o]))return!1}}return String(n)===String(e)}function Jp(n,e){return n.findIndex(t=>na(t,e))}const Ls=n=>yt(n)?n:n==null?"":Ue(n)||st(n)&&(n.toString===Nd||!ze(n.toString))?JSON.stringify(n,zd,2):String(n),zd=(n,e)=>e&&e.__v_isRef?zd(n,e.value):Ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:Qo(e)?{[`Set(${e.size})`]:[...e.values()]}:st(e)&&!Ue(e)&&!Od(e)?String(e):e;let Mn;class Qp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Mn,!e&&Mn&&(this.index=(Mn.scopes||(Mn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Mn;try{return Mn=this,e()}finally{Mn=t}}}on(){Mn=this}off(){Mn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function em(n,e=Mn){e&&e.active&&e.effects.push(n)}function tm(){return Mn}const Jl=n=>{const e=new Set(n);return e.w=0,e.n=0,e},kd=n=>(n.w&bi)>0,Hd=n=>(n.n&bi)>0,nm=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=bi},im=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];kd(s)&&!Hd(s)?s.delete(n):e[t++]=s,s.w&=~bi,s.n&=~bi}e.length=t}},pl=new WeakMap;let Mr=0,bi=1;const ml=30;let Sn;const qi=Symbol(""),gl=Symbol("");class Ql{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,em(this,i)}run(){if(!this.active)return this.fn();let e=Sn,t=Mi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Sn,Sn=this,Mi=!0,bi=1<<++Mr,Mr<=ml?nm(this):Bc(this),this.fn()}finally{Mr<=ml&&im(this),bi=1<<--Mr,Sn=this.parent,Mi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Sn===this?this.deferStop=!0:this.active&&(Bc(this),this.onStop&&this.onStop(),this.active=!1)}}function Bc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Mi=!0;const Vd=[];function nr(){Vd.push(Mi),Mi=!1}function ir(){const n=Vd.pop();Mi=n===void 0?!0:n}function Jt(n,e,t){if(Mi&&Sn){let i=pl.get(n);i||pl.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Jl()),Gd(s)}}function Gd(n,e){let t=!1;Mr<=ml?Hd(n)||(n.n|=bi,t=!kd(n)):t=!n.has(Sn),t&&(n.add(Sn),Sn.deps.push(n))}function si(n,e,t,i,s,r){const o=pl.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ue(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ue(n)?$l(t)&&a.push(o.get("length")):(a.push(o.get(qi)),Ds(n)&&a.push(o.get(gl)));break;case"delete":Ue(n)||(a.push(o.get(qi)),Ds(n)&&a.push(o.get(gl)));break;case"set":Ds(n)&&a.push(o.get(qi));break}if(a.length===1)a[0]&&_l(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);_l(Jl(l))}}function _l(n,e){const t=Ue(n)?n:[...n];for(const i of t)i.computed&&zc(i);for(const i of t)i.computed||zc(i)}function zc(n,e){(n!==Sn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const sm=ql("__proto__,__v_isRef,__isVue"),Wd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cr)),rm=ec(),om=ec(!1,!0),am=ec(!0),kc=lm();function lm(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Qe(this);for(let r=0,o=this.length;r<o;r++)Jt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(Qe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){nr();const i=Qe(this)[e].apply(this,t);return ir(),i}}),n}function cm(n){const e=Qe(this);return Jt(e,"has",n),e.hasOwnProperty(n)}function ec(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?bm:Kd:e?Yd:qd).get(i))return i;const o=Ue(i);if(!n){if(o&&$e(kc,s))return Reflect.get(kc,s,r);if(s==="hasOwnProperty")return cm}const a=Reflect.get(i,s,r);return(Cr(s)?Wd.has(s):sm(s))||(n||Jt(i,"get",s),e)?a:Bt(a)?o&&$l(s)?a:a.value:st(a)?n?Zd(a):dn(a):a}}const um=Xd(),hm=Xd(!0);function Xd(n=!1){return function(t,i,s,r){let o=t[i];if(ks(o)&&Bt(o)&&!Bt(s))return!1;if(!n&&(!zo(s)&&!ks(s)&&(o=Qe(o),s=Qe(s)),!Ue(t)&&Bt(o)&&!Bt(s)))return o.value=s,!0;const a=Ue(t)&&$l(i)?Number(i)<t.length:$e(t,i),l=Reflect.set(t,i,s,r);return t===Qe(r)&&(a?Lr(s,o)&&si(t,"set",i,s):si(t,"add",i,s)),l}}function dm(n,e){const t=$e(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&si(n,"delete",e,void 0),i}function fm(n,e){const t=Reflect.has(n,e);return(!Cr(e)||!Wd.has(e))&&Jt(n,"has",e),t}function pm(n){return Jt(n,"iterate",Ue(n)?"length":qi),Reflect.ownKeys(n)}const jd={get:rm,set:um,deleteProperty:dm,has:fm,ownKeys:pm},mm={get:am,set(n,e){return!0},deleteProperty(n,e){return!0}},gm=Rt({},jd,{get:om,set:hm}),tc=n=>n,ia=n=>Reflect.getPrototypeOf(n);function Yr(n,e,t=!1,i=!1){n=n.__v_raw;const s=Qe(n),r=Qe(e);t||(e!==r&&Jt(s,"get",e),Jt(s,"get",r));const{has:o}=ia(s),a=i?tc:t?sc:Ir;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function Kr(n,e=!1){const t=this.__v_raw,i=Qe(t),s=Qe(n);return e||(n!==s&&Jt(i,"has",n),Jt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function $r(n,e=!1){return n=n.__v_raw,!e&&Jt(Qe(n),"iterate",qi),Reflect.get(n,"size",n)}function Hc(n){n=Qe(n);const e=Qe(this);return ia(e).has.call(e,n)||(e.add(n),si(e,"add",n,n)),this}function Vc(n,e){e=Qe(e);const t=Qe(this),{has:i,get:s}=ia(t);let r=i.call(t,n);r||(n=Qe(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?Lr(e,o)&&si(t,"set",n,e):si(t,"add",n,e),this}function Gc(n){const e=Qe(this),{has:t,get:i}=ia(e);let s=t.call(e,n);s||(n=Qe(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&si(e,"delete",n,void 0),r}function Wc(){const n=Qe(this),e=n.size!==0,t=n.clear();return e&&si(n,"clear",void 0,void 0),t}function Zr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=Qe(o),l=e?tc:n?sc:Ir;return!n&&Jt(a,"iterate",qi),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Jr(n,e,t){return function(...i){const s=this.__v_raw,r=Qe(s),o=Ds(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?tc:e?sc:Ir;return!e&&Jt(r,"iterate",l?gl:qi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function li(n){return function(...e){return n==="delete"?!1:this}}function _m(){const n={get(r){return Yr(this,r)},get size(){return $r(this)},has:Kr,add:Hc,set:Vc,delete:Gc,clear:Wc,forEach:Zr(!1,!1)},e={get(r){return Yr(this,r,!1,!0)},get size(){return $r(this)},has:Kr,add:Hc,set:Vc,delete:Gc,clear:Wc,forEach:Zr(!1,!0)},t={get(r){return Yr(this,r,!0)},get size(){return $r(this,!0)},has(r){return Kr.call(this,r,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:Zr(!0,!1)},i={get(r){return Yr(this,r,!0,!0)},get size(){return $r(this,!0)},has(r){return Kr.call(this,r,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:Zr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Jr(r,!1,!1),t[r]=Jr(r,!0,!1),e[r]=Jr(r,!1,!0),i[r]=Jr(r,!0,!0)}),[n,t,e,i]}const[vm,xm,Mm,ym]=_m();function nc(n,e){const t=e?n?ym:Mm:n?xm:vm;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get($e(t,s)&&s in i?t:i,s,r)}const Sm={get:nc(!1,!1)},Em={get:nc(!1,!0)},Tm={get:nc(!0,!1)},qd=new WeakMap,Yd=new WeakMap,Kd=new WeakMap,bm=new WeakMap;function Am(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wm(n){return n.__v_skip||!Object.isExtensible(n)?0:Am(Vp(n))}function dn(n){return ks(n)?n:ic(n,!1,jd,Sm,qd)}function $d(n){return ic(n,!1,gm,Em,Yd)}function Zd(n){return ic(n,!0,mm,Tm,Kd)}function ic(n,e,t,i,s){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=wm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Us(n){return ks(n)?Us(n.__v_raw):!!(n&&n.__v_isReactive)}function ks(n){return!!(n&&n.__v_isReadonly)}function zo(n){return!!(n&&n.__v_isShallow)}function Jd(n){return Us(n)||ks(n)}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function Qd(n){return Bo(n,"__v_skip",!0),n}const Ir=n=>st(n)?dn(n):n,sc=n=>st(n)?Zd(n):n;function ef(n){Mi&&Sn&&(n=Qe(n),Gd(n.dep||(n.dep=Jl())))}function tf(n,e){n=Qe(n);const t=n.dep;t&&_l(t)}function Bt(n){return!!(n&&n.__v_isRef===!0)}function lt(n){return nf(n,!1)}function Rm(n){return nf(n,!0)}function nf(n,e){return Bt(n)?n:new Cm(n,e)}class Cm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Qe(e),this._value=t?e:Ir(e)}get value(){return ef(this),this._value}set value(e){const t=this.__v_isShallow||zo(e)||ks(e);e=t?e:Qe(e),Lr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ir(e),tf(this))}}function Yi(n){return Bt(n)?n.value:n}const Lm={get:(n,e,t)=>Yi(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Bt(s)&&!Bt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function sf(n){return Us(n)?n:new Proxy(n,Lm)}class Pm{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ql(e,()=>{this._dirty||(this._dirty=!0,tf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Qe(this);return ef(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Im(n,e,t=!1){let i,s;const r=ze(n);return r?(i=n,s=Tn):(i=n.get,s=n.set),new Pm(i,s,r||!s,t)}function yi(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){sa(r,e,t)}return s}function bn(n,e,t,i){if(ze(n)){const r=yi(n,e,t,i);return r&&Ud(r)&&r.catch(o=>{sa(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(bn(n[r],e,t,i));return s}function sa(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){yi(l,null,10,[n,o,a]);return}}Dm(n,t,s,i)}function Dm(n,e,t,i=!0){console.error(n)}let Dr=!1,vl=!1;const Ft=[];let Dn=0;const Ns=[];let Zn=null,Hi=0;const rf=Promise.resolve();let rc=null;function oc(n){const e=rc||rf;return n?e.then(this?n.bind(this):n):e}function Um(n){let e=Dn+1,t=Ft.length;for(;e<t;){const i=e+t>>>1;Ur(Ft[i])<n?e=i+1:t=i}return e}function ac(n){(!Ft.length||!Ft.includes(n,Dr&&n.allowRecurse?Dn+1:Dn))&&(n.id==null?Ft.push(n):Ft.splice(Um(n.id),0,n),of())}function of(){!Dr&&!vl&&(vl=!0,rc=rf.then(lf))}function Nm(n){const e=Ft.indexOf(n);e>Dn&&Ft.splice(e,1)}function Om(n){Ue(n)?Ns.push(...n):(!Zn||!Zn.includes(n,n.allowRecurse?Hi+1:Hi))&&Ns.push(n),of()}function Xc(n,e=Dr?Dn+1:0){for(;e<Ft.length;e++){const t=Ft[e];t&&t.pre&&(Ft.splice(e,1),e--,t())}}function af(n){if(Ns.length){const e=[...new Set(Ns)];if(Ns.length=0,Zn){Zn.push(...e);return}for(Zn=e,Zn.sort((t,i)=>Ur(t)-Ur(i)),Hi=0;Hi<Zn.length;Hi++)Zn[Hi]();Zn=null,Hi=0}}const Ur=n=>n.id==null?1/0:n.id,Fm=(n,e)=>{const t=Ur(n)-Ur(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function lf(n){vl=!1,Dr=!0,Ft.sort(Fm);const e=Tn;try{for(Dn=0;Dn<Ft.length;Dn++){const t=Ft[Dn];t&&t.active!==!1&&yi(t,null,14)}}finally{Dn=0,Ft.length=0,af(),Dr=!1,rc=null,(Ft.length||Ns.length)&&lf()}}function Bm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ot;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||ot;d&&(s=t.map(p=>yt(p)?p.trim():p)),h&&(s=t.map(Fd))}let a,l=i[a=ya(e)]||i[a=ya(Bn(e))];!l&&r&&(l=i[a=ya(tr(e))]),l&&bn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,bn(c,n,6,s)}}function cf(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ze(n)){const l=c=>{const u=cf(c,e,!0);u&&(a=!0,Rt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(st(n)&&i.set(n,null),null):(Ue(r)?r.forEach(l=>o[l]=null):Rt(o,r),st(n)&&i.set(n,o),o)}function ra(n,e){return!n||!Jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(n,e[0].toLowerCase()+e.slice(1))||$e(n,tr(e))||$e(n,e))}let hn=null,oa=null;function ko(n){const e=hn;return hn=n,oa=n&&n.type.__scopeId||null,e}function zm(n){oa=n}function km(){oa=null}function Qn(n,e=hn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&iu(-1);const r=ko(e);let o;try{o=n(...s)}finally{ko(r),i._d&&iu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Sa(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:_}=n;let m,f;const E=ko(n);try{if(t.shapeFlag&4){const T=s||i;m=In(u.call(T,T,h,r,p,d,g)),f=l}else{const T=e;m=In(T.length>1?T(r,{attrs:l,slots:a,emit:c}):T(r,null)),f=e.props?l:Hm(l)}}catch(T){Tr.length=0,sa(T,n,1),m=ct(ns)}let M=m;if(f&&_!==!1){const T=Object.keys(f),{shapeFlag:R}=M;T.length&&R&7&&(o&&T.some(Yl)&&(f=Vm(f,o)),M=Ai(M,f))}return t.dirs&&(M=Ai(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),m=M,ko(E),m}const Hm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Jo(t))&&((e||(e={}))[t]=n[t]);return e},Vm=(n,e)=>{const t={};for(const i in n)(!Yl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Gm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?jc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!ra(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?jc(i,o,c):!0:!!o;return!1}function jc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ra(t,r))return!0}return!1}function Wm({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Xm=n=>n.__isSuspense;function jm(n,e){e&&e.pendingBranch?Ue(n)?e.effects.push(...n):e.effects.push(n):Om(n)}const Qr={};function Ki(n,e,t){return uf(n,e,t)}function uf(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:o}=ot){var a;const l=tm()===((a=Dt)==null?void 0:a.scope)?Dt:null;let c,u=!1,h=!1;if(Bt(n)?(c=()=>n.value,u=zo(n)):Us(n)?(c=()=>n,i=!0):Ue(n)?(h=!0,u=n.some(T=>Us(T)||zo(T)),c=()=>n.map(T=>{if(Bt(T))return T.value;if(Us(T))return Wi(T);if(ze(T))return yi(T,l,2)})):ze(n)?e?c=()=>yi(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),bn(n,l,3,[p])}:c=Tn,e&&i){const T=c;c=()=>Wi(T())}let d,p=T=>{d=E.onStop=()=>{yi(T,l,4)}},g;if(Or)if(p=Tn,e?t&&bn(e,l,3,[c(),h?[]:void 0,p]):c(),s==="sync"){const T=Fg();g=T.__watcherHandles||(T.__watcherHandles=[])}else return Tn;let _=h?new Array(n.length).fill(Qr):Qr;const m=()=>{if(E.active)if(e){const T=E.run();(i||u||(h?T.some((R,P)=>Lr(R,_[P])):Lr(T,_)))&&(d&&d(),bn(e,l,3,[T,_===Qr?void 0:h&&_[0]===Qr?[]:_,p]),_=T)}else E.run()};m.allowRecurse=!!e;let f;s==="sync"?f=m:s==="post"?f=()=>Yt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),f=()=>ac(m));const E=new Ql(c,f);e?t?m():_=E.run():s==="post"?Yt(E.run.bind(E),l&&l.suspense):E.run();const M=()=>{E.stop(),l&&l.scope&&Kl(l.scope.effects,E)};return g&&g.push(M),M}function qm(n,e,t){const i=this.proxy,s=yt(n)?n.includes(".")?hf(i,n):()=>i[n]:n.bind(i,i);let r;ze(e)?r=e:(r=e.handler,t=e);const o=Dt;Vs(this);const a=uf(s,r.bind(i),t);return o?Vs(o):$i(),a}function hf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Wi(n,e){if(!st(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Bt(n))Wi(n.value,e);else if(Ue(n))for(let t=0;t<n.length;t++)Wi(n[t],e);else if(Qo(n)||Ds(n))n.forEach(t=>{Wi(t,e)});else if(Od(n))for(const t in n)Wi(n[t],e);return n}function qc(n,e){const t=hn;if(t===null)return n;const i=ha(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ot]=e[r];o&&(ze(o)&&(o={mounted:o,updated:o}),o.deep&&Wi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Ii(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(nr(),bn(l,t,8,[n.el,a,n,e]),ir())}}function Hr(n,e){return ze(n)?(()=>Rt({name:n.name},e,{setup:n}))():n}const Do=n=>!!n.type.__asyncLoader,df=n=>n.type.__isKeepAlive;function ff(n,e){mf(n,"a",e)}function pf(n,e){mf(n,"da",e)}function mf(n,e,t=Dt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(aa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)df(s.parent.vnode)&&Ym(i,e,t,s),s=s.parent}}function Ym(n,e,t,i){const s=aa(e,n,i,!0);la(()=>{Kl(i[e],s)},t)}function aa(n,e,t=Dt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;nr(),Vs(t);const a=bn(e,t,n,o);return $i(),ir(),a});return i?s.unshift(r):s.push(r),r}}const oi=n=>(e,t=Dt)=>(!Or||n==="sp")&&aa(n,(...i)=>e(...i),t),Km=oi("bm"),lc=oi("m"),$m=oi("bu"),Zm=oi("u"),Jm=oi("bum"),la=oi("um"),Qm=oi("sp"),eg=oi("rtg"),tg=oi("rtc");function ng(n,e=Dt){aa("ec",n,e)}const gf="components";function Xi(n,e){return sg(gf,n,!0,e)||n}const ig=Symbol.for("v-ndc");function sg(n,e,t=!0,i=!1){const s=hn||Dt;if(s){const r=s.type;if(n===gf){const a=Ug(r,!1);if(a&&(a===e||a===Bn(e)||a===ta(Bn(e))))return r}const o=Yc(s[n]||r[n],e)||Yc(s.appContext[n],e);return!o&&i?r:o}}function Yc(n,e){return n&&(n[e]||n[Bn(e)]||n[ta(Bn(e))])}function Hs(n,e,t,i){let s;const r=t&&t[i];if(Ue(n)||yt(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r&&r[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(st(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(n[c],c,a,r&&r[a])}}else s=[];return t&&(t[i]=s),s}const xl=n=>n?wf(n)?ha(n)||n.proxy:xl(n.parent):null,Er=Rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xl(n.parent),$root:n=>xl(n.root),$emit:n=>n.emit,$options:n=>cc(n),$forceUpdate:n=>n.f||(n.f=()=>ac(n.update)),$nextTick:n=>n.n||(n.n=oc.bind(n.proxy)),$watch:n=>qm.bind(n)}),Ea=(n,e)=>n!==ot&&!n.__isScriptSetup&&$e(n,e),rg={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ea(i,e))return o[e]=1,i[e];if(s!==ot&&$e(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&$e(c,e))return o[e]=3,r[e];if(t!==ot&&$e(t,e))return o[e]=4,t[e];Ml&&(o[e]=0)}}const u=Er[e];let h,d;if(u)return e==="$attrs"&&Jt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ot&&$e(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,$e(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ea(s,e)?(s[e]=t,!0):i!==ot&&$e(i,e)?(i[e]=t,!0):$e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ot&&$e(n,o)||Ea(e,o)||(a=r[0])&&$e(a,o)||$e(i,o)||$e(Er,o)||$e(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:$e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Kc(n){return Ue(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ml=!0;function og(n){const e=cc(n),t=n.proxy,i=n.ctx;Ml=!1,e.beforeCreate&&$c(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:f,beforeUnmount:E,destroyed:M,unmounted:T,render:R,renderTracked:P,renderTriggered:L,errorCaptured:W,serverPrefetch:y,expose:w,inheritAttrs:re,components:fe,directives:H,filters:Y}=e;if(c&&ag(c,i,null),o)for(const V in o){const G=o[V];ze(G)&&(i[V]=G.bind(t))}if(s){const V=s.call(t,t);st(V)&&(n.data=dn(V))}if(Ml=!0,r)for(const V in r){const G=r[V],he=ze(G)?G.bind(t,t):ze(G.get)?G.get.bind(t,t):Tn,de=!ze(G)&&ze(G.set)?G.set.bind(t):Tn,z=sn({get:he,set:de});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>z.value,set:j=>z.value=j})}if(a)for(const V in a)_f(a[V],i,t,V);if(l){const V=ze(l)?l.call(t):l;Reflect.ownKeys(V).forEach(G=>{nn(G,V[G])})}u&&$c(u,n,"c");function ue(V,G){Ue(G)?G.forEach(he=>V(he.bind(t))):G&&V(G.bind(t))}if(ue(Km,h),ue(lc,d),ue($m,p),ue(Zm,g),ue(ff,_),ue(pf,m),ue(ng,W),ue(tg,P),ue(eg,L),ue(Jm,E),ue(la,T),ue(Qm,y),Ue(w))if(w.length){const V=n.exposed||(n.exposed={});w.forEach(G=>{Object.defineProperty(V,G,{get:()=>t[G],set:he=>t[G]=he})})}else n.exposed||(n.exposed={});R&&n.render===Tn&&(n.render=R),re!=null&&(n.inheritAttrs=re),fe&&(n.components=fe),H&&(n.directives=H)}function ag(n,e,t=Tn){Ue(n)&&(n=yl(n));for(const i in n){const s=n[i];let r;st(s)?"default"in s?r=et(s.from||i,s.default,!0):r=et(s.from||i):r=et(s),Bt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function $c(n,e,t){bn(Ue(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function _f(n,e,t,i){const s=i.includes(".")?hf(t,i):()=>t[i];if(yt(n)){const r=e[n];ze(r)&&Ki(s,r)}else if(ze(n))Ki(s,n.bind(t));else if(st(n))if(Ue(n))n.forEach(r=>_f(r,e,t,i));else{const r=ze(n.handler)?n.handler.bind(t):e[n.handler];ze(r)&&Ki(s,r,n)}}function cc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Ho(l,c,o,!0)),Ho(l,e,o)),st(e)&&r.set(e,l),l}function Ho(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Ho(n,r,t,!0),s&&s.forEach(o=>Ho(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=lg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const lg={data:Zc,props:Jc,emits:Jc,methods:yr,computed:yr,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:yr,directives:yr,watch:ug,provide:Zc,inject:cg};function Zc(n,e){return e?n?function(){return Rt(ze(n)?n.call(this,this):n,ze(e)?e.call(this,this):e)}:e:n}function cg(n,e){return yr(yl(n),yl(e))}function yl(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Vt(n,e){return n?[...new Set([].concat(n,e))]:e}function yr(n,e){return n?Rt(Object.create(null),n,e):e}function Jc(n,e){return n?Ue(n)&&Ue(e)?[...new Set([...n,...e])]:Rt(Object.create(null),Kc(n),Kc(e??{})):e}function ug(n,e){if(!n)return e;if(!e)return n;const t=Rt(Object.create(null),n);for(const i in e)t[i]=Vt(n[i],e[i]);return t}function vf(){return{app:null,config:{isNativeTag:zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hg=0;function dg(n,e){return function(i,s=null){ze(i)||(i=Rt({},i)),s!=null&&!st(s)&&(s=null);const r=vf(),o=new Set;let a=!1;const l=r.app={_uid:hg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Bg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ze(c.install)?(o.add(c),c.install(l,...u)):ze(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=ct(i,s);return d.appContext=r,u&&e?e(d,c):n(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ha(d.component)||d.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Vo=l;try{return c()}finally{Vo=null}}};return l}}let Vo=null;function nn(n,e){if(Dt){let t=Dt.provides;const i=Dt.parent&&Dt.parent.provides;i===t&&(t=Dt.provides=Object.create(i)),t[n]=e}}function et(n,e,t=!1){const i=Dt||hn;if(i||Vo){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Vo._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ze(e)?e.call(i&&i.proxy):e}}function fg(n,e,t,i=!1){const s={},r={};Bo(r,ua,1),n.propsDefaults=Object.create(null),xf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:$d(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function pg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Qe(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ra(n.emitsOptions,d))continue;const p=e[d];if(l)if($e(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=Bn(d);s[g]=Sl(l,a,g,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{xf(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!$e(e,h)&&((u=tr(h))===h||!$e(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Sl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!$e(e,h))&&(delete r[h],c=!0)}c&&si(n,"set","$attrs")}function xf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Po(l))continue;const c=e[l];let u;s&&$e(s,u=Bn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ra(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Qe(t),c=a||ot;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Sl(s,l,h,c[h],n,!$e(c,h))}}return o}function Sl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=$e(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ze(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(Vs(s),i=c[t]=l.call(null,e),$i())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===tr(t))&&(i=!0))}return i}function Mf(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ze(n)){const u=h=>{l=!0;const[d,p]=Mf(h,e,!0);Rt(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return st(n)&&i.set(n,Is),Is;if(Ue(r))for(let u=0;u<r.length;u++){const h=Bn(r[u]);Qc(h)&&(o[h]=ot)}else if(r)for(const u in r){const h=Bn(u);if(Qc(h)){const d=r[u],p=o[h]=Ue(d)||ze(d)?{type:d}:Rt({},d);if(p){const g=nu(Boolean,p.type),_=nu(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||$e(p,"default"))&&a.push(h)}}}const c=[o,a];return st(n)&&i.set(n,c),c}function Qc(n){return n[0]!=="$"}function eu(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function tu(n,e){return eu(n)===eu(e)}function nu(n,e){return Ue(e)?e.findIndex(t=>tu(t,n)):ze(e)&&tu(e,n)?0:-1}const yf=n=>n[0]==="_"||n==="$stable",uc=n=>Ue(n)?n.map(In):[In(n)],mg=(n,e,t)=>{if(e._n)return e;const i=Qn((...s)=>uc(e(...s)),t);return i._c=!1,i},Sf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(yf(s))continue;const r=n[s];if(ze(r))e[s]=mg(s,r,i);else if(r!=null){const o=uc(r);e[s]=()=>o}}},Ef=(n,e)=>{const t=uc(e);n.slots.default=()=>t},gg=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Qe(e),Bo(e,"_",t)):Sf(e,n.slots={})}else n.slots={},e&&Ef(n,e);Bo(n.slots,ua,1)},_g=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ot;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Rt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,Sf(e,s)),o=e}else e&&(Ef(n,e),o={default:1});if(r)for(const a in s)!yf(a)&&!(a in o)&&delete s[a]};function El(n,e,t,i,s=!1){if(Ue(n)){n.forEach((d,p)=>El(d,e&&(Ue(e)?e[p]:e),t,i,s));return}if(Do(i)&&!s)return;const r=i.shapeFlag&4?ha(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ot?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(yt(c)?(u[c]=null,$e(h,c)&&(h[c]=null)):Bt(c)&&(c.value=null)),ze(l))yi(l,a,12,[o,u]);else{const d=yt(l),p=Bt(l);if(d||p){const g=()=>{if(n.f){const _=d?$e(h,l)?h[l]:u[l]:l.value;s?Ue(_)&&Kl(_,r):Ue(_)?_.includes(r)||_.push(r):d?(u[l]=[r],$e(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,$e(h,l)&&(h[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Yt(g,t)):g()}}}const Yt=jm;function vg(n){return xg(n)}function xg(n,e){const t=fl();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Tn,insertStaticContent:g}=n,_=(v,C,A,N=null,O=null,$=null,ae=!1,Z=null,ce=!!C.dynamicChildren)=>{if(v===C)return;v&&!cr(v,C)&&(N=B(v),j(v,O,$,!0),v=null),C.patchFlag===-2&&(ce=!1,C.dynamicChildren=null);const{type:ne,ref:xe,shapeFlag:S}=C;switch(ne){case ca:m(v,C,A,N);break;case ns:f(v,C,A,N);break;case Uo:v==null&&E(C,A,N,ae);break;case Mt:fe(v,C,A,N,O,$,ae,Z,ce);break;default:S&1?R(v,C,A,N,O,$,ae,Z,ce):S&6?H(v,C,A,N,O,$,ae,Z,ce):(S&64||S&128)&&ne.process(v,C,A,N,O,$,ae,Z,ce,le)}xe!=null&&O&&El(xe,v&&v.ref,$,C||v,!C)},m=(v,C,A,N)=>{if(v==null)i(C.el=a(C.children),A,N);else{const O=C.el=v.el;C.children!==v.children&&c(O,C.children)}},f=(v,C,A,N)=>{v==null?i(C.el=l(C.children||""),A,N):C.el=v.el},E=(v,C,A,N)=>{[v.el,v.anchor]=g(v.children,C,A,N,v.el,v.anchor)},M=({el:v,anchor:C},A,N)=>{let O;for(;v&&v!==C;)O=d(v),i(v,A,N),v=O;i(C,A,N)},T=({el:v,anchor:C})=>{let A;for(;v&&v!==C;)A=d(v),s(v),v=A;s(C)},R=(v,C,A,N,O,$,ae,Z,ce)=>{ae=ae||C.type==="svg",v==null?P(C,A,N,O,$,ae,Z,ce):y(v,C,O,$,ae,Z,ce)},P=(v,C,A,N,O,$,ae,Z)=>{let ce,ne;const{type:xe,props:S,shapeFlag:x,transition:U,dirs:ee}=v;if(ce=v.el=o(v.type,$,S&&S.is,S),x&8?u(ce,v.children):x&16&&W(v.children,ce,null,N,O,$&&xe!=="foreignObject",ae,Z),ee&&Ii(v,null,N,"created"),L(ce,v,v.scopeId,ae,N),S){for(const se in S)se!=="value"&&!Po(se)&&r(ce,se,null,S[se],$,v.children,N,O,Re);"value"in S&&r(ce,"value",null,S.value),(ne=S.onVnodeBeforeMount)&&Cn(ne,N,v)}ee&&Ii(v,null,N,"beforeMount");const te=(!O||O&&!O.pendingBranch)&&U&&!U.persisted;te&&U.beforeEnter(ce),i(ce,C,A),((ne=S&&S.onVnodeMounted)||te||ee)&&Yt(()=>{ne&&Cn(ne,N,v),te&&U.enter(ce),ee&&Ii(v,null,N,"mounted")},O)},L=(v,C,A,N,O)=>{if(A&&p(v,A),N)for(let $=0;$<N.length;$++)p(v,N[$]);if(O){let $=O.subTree;if(C===$){const ae=O.vnode;L(v,ae,ae.scopeId,ae.slotScopeIds,O.parent)}}},W=(v,C,A,N,O,$,ae,Z,ce=0)=>{for(let ne=ce;ne<v.length;ne++){const xe=v[ne]=Z?gi(v[ne]):In(v[ne]);_(null,xe,C,A,N,O,$,ae,Z)}},y=(v,C,A,N,O,$,ae)=>{const Z=C.el=v.el;let{patchFlag:ce,dynamicChildren:ne,dirs:xe}=C;ce|=v.patchFlag&16;const S=v.props||ot,x=C.props||ot;let U;A&&Di(A,!1),(U=x.onVnodeBeforeUpdate)&&Cn(U,A,C,v),xe&&Ii(C,v,A,"beforeUpdate"),A&&Di(A,!0);const ee=O&&C.type!=="foreignObject";if(ne?w(v.dynamicChildren,ne,Z,A,N,ee,$):ae||G(v,C,Z,null,A,N,ee,$,!1),ce>0){if(ce&16)re(Z,C,S,x,A,N,O);else if(ce&2&&S.class!==x.class&&r(Z,"class",null,x.class,O),ce&4&&r(Z,"style",S.style,x.style,O),ce&8){const te=C.dynamicProps;for(let se=0;se<te.length;se++){const ye=te[se],pe=S[ye],X=x[ye];(X!==pe||ye==="value")&&r(Z,ye,pe,X,O,v.children,A,N,Re)}}ce&1&&v.children!==C.children&&u(Z,C.children)}else!ae&&ne==null&&re(Z,C,S,x,A,N,O);((U=x.onVnodeUpdated)||xe)&&Yt(()=>{U&&Cn(U,A,C,v),xe&&Ii(C,v,A,"updated")},N)},w=(v,C,A,N,O,$,ae)=>{for(let Z=0;Z<C.length;Z++){const ce=v[Z],ne=C[Z],xe=ce.el&&(ce.type===Mt||!cr(ce,ne)||ce.shapeFlag&70)?h(ce.el):A;_(ce,ne,xe,null,N,O,$,ae,!0)}},re=(v,C,A,N,O,$,ae)=>{if(A!==N){if(A!==ot)for(const Z in A)!Po(Z)&&!(Z in N)&&r(v,Z,A[Z],null,ae,C.children,O,$,Re);for(const Z in N){if(Po(Z))continue;const ce=N[Z],ne=A[Z];ce!==ne&&Z!=="value"&&r(v,Z,ne,ce,ae,C.children,O,$,Re)}"value"in N&&r(v,"value",A.value,N.value)}},fe=(v,C,A,N,O,$,ae,Z,ce)=>{const ne=C.el=v?v.el:a(""),xe=C.anchor=v?v.anchor:a("");let{patchFlag:S,dynamicChildren:x,slotScopeIds:U}=C;U&&(Z=Z?Z.concat(U):U),v==null?(i(ne,A,N),i(xe,A,N),W(C.children,A,xe,O,$,ae,Z,ce)):S>0&&S&64&&x&&v.dynamicChildren?(w(v.dynamicChildren,x,A,O,$,ae,Z),(C.key!=null||O&&C===O.subTree)&&Tf(v,C,!0)):G(v,C,A,xe,O,$,ae,Z,ce)},H=(v,C,A,N,O,$,ae,Z,ce)=>{C.slotScopeIds=Z,v==null?C.shapeFlag&512?O.ctx.activate(C,A,N,ae,ce):Y(C,A,N,O,$,ae,ce):K(v,C,ce)},Y=(v,C,A,N,O,$,ae)=>{const Z=v.component=Cg(v,N,O);if(df(v)&&(Z.ctx.renderer=le),Lg(Z),Z.asyncDep){if(O&&O.registerDep(Z,ue),!v.el){const ce=Z.subTree=ct(ns);f(null,ce,C,A)}return}ue(Z,v,C,A,O,$,ae)},K=(v,C,A)=>{const N=C.component=v.component;if(Gm(v,C,A))if(N.asyncDep&&!N.asyncResolved){V(N,C,A);return}else N.next=C,Nm(N.update),N.update();else C.el=v.el,N.vnode=C},ue=(v,C,A,N,O,$,ae)=>{const Z=()=>{if(v.isMounted){let{next:xe,bu:S,u:x,parent:U,vnode:ee}=v,te=xe,se;Di(v,!1),xe?(xe.el=ee.el,V(v,xe,ae)):xe=ee,S&&Io(S),(se=xe.props&&xe.props.onVnodeBeforeUpdate)&&Cn(se,U,xe,ee),Di(v,!0);const ye=Sa(v),pe=v.subTree;v.subTree=ye,_(pe,ye,h(pe.el),B(pe),v,O,$),xe.el=ye.el,te===null&&Wm(v,ye.el),x&&Yt(x,O),(se=xe.props&&xe.props.onVnodeUpdated)&&Yt(()=>Cn(se,U,xe,ee),O)}else{let xe;const{el:S,props:x}=C,{bm:U,m:ee,parent:te}=v,se=Do(C);if(Di(v,!1),U&&Io(U),!se&&(xe=x&&x.onVnodeBeforeMount)&&Cn(xe,te,C),Di(v,!0),S&&Te){const ye=()=>{v.subTree=Sa(v),Te(S,v.subTree,v,O,null)};se?C.type.__asyncLoader().then(()=>!v.isUnmounted&&ye()):ye()}else{const ye=v.subTree=Sa(v);_(null,ye,A,N,v,O,$),C.el=ye.el}if(ee&&Yt(ee,O),!se&&(xe=x&&x.onVnodeMounted)){const ye=C;Yt(()=>Cn(xe,te,ye),O)}(C.shapeFlag&256||te&&Do(te.vnode)&&te.vnode.shapeFlag&256)&&v.a&&Yt(v.a,O),v.isMounted=!0,C=A=N=null}},ce=v.effect=new Ql(Z,()=>ac(ne),v.scope),ne=v.update=()=>ce.run();ne.id=v.uid,Di(v,!0),ne()},V=(v,C,A)=>{C.component=v;const N=v.vnode.props;v.vnode=C,v.next=null,pg(v,C.props,N,A),_g(v,C.children,A),nr(),Xc(),ir()},G=(v,C,A,N,O,$,ae,Z,ce=!1)=>{const ne=v&&v.children,xe=v?v.shapeFlag:0,S=C.children,{patchFlag:x,shapeFlag:U}=C;if(x>0){if(x&128){de(ne,S,A,N,O,$,ae,Z,ce);return}else if(x&256){he(ne,S,A,N,O,$,ae,Z,ce);return}}U&8?(xe&16&&Re(ne,O,$),S!==ne&&u(A,S)):xe&16?U&16?de(ne,S,A,N,O,$,ae,Z,ce):Re(ne,O,$,!0):(xe&8&&u(A,""),U&16&&W(S,A,N,O,$,ae,Z,ce))},he=(v,C,A,N,O,$,ae,Z,ce)=>{v=v||Is,C=C||Is;const ne=v.length,xe=C.length,S=Math.min(ne,xe);let x;for(x=0;x<S;x++){const U=C[x]=ce?gi(C[x]):In(C[x]);_(v[x],U,A,null,O,$,ae,Z,ce)}ne>xe?Re(v,O,$,!0,!1,S):W(C,A,N,O,$,ae,Z,ce,S)},de=(v,C,A,N,O,$,ae,Z,ce)=>{let ne=0;const xe=C.length;let S=v.length-1,x=xe-1;for(;ne<=S&&ne<=x;){const U=v[ne],ee=C[ne]=ce?gi(C[ne]):In(C[ne]);if(cr(U,ee))_(U,ee,A,null,O,$,ae,Z,ce);else break;ne++}for(;ne<=S&&ne<=x;){const U=v[S],ee=C[x]=ce?gi(C[x]):In(C[x]);if(cr(U,ee))_(U,ee,A,null,O,$,ae,Z,ce);else break;S--,x--}if(ne>S){if(ne<=x){const U=x+1,ee=U<xe?C[U].el:N;for(;ne<=x;)_(null,C[ne]=ce?gi(C[ne]):In(C[ne]),A,ee,O,$,ae,Z,ce),ne++}}else if(ne>x)for(;ne<=S;)j(v[ne],O,$,!0),ne++;else{const U=ne,ee=ne,te=new Map;for(ne=ee;ne<=x;ne++){const Se=C[ne]=ce?gi(C[ne]):In(C[ne]);Se.key!=null&&te.set(Se.key,ne)}let se,ye=0;const pe=x-ee+1;let X=!1,Ie=0;const Le=new Array(pe);for(ne=0;ne<pe;ne++)Le[ne]=0;for(ne=U;ne<=S;ne++){const Se=v[ne];if(ye>=pe){j(Se,O,$,!0);continue}let Ae;if(Se.key!=null)Ae=te.get(Se.key);else for(se=ee;se<=x;se++)if(Le[se-ee]===0&&cr(Se,C[se])){Ae=se;break}Ae===void 0?j(Se,O,$,!0):(Le[Ae-ee]=ne+1,Ae>=Ie?Ie=Ae:X=!0,_(Se,C[Ae],A,null,O,$,ae,Z,ce),ye++)}const Pe=X?Mg(Le):Is;for(se=Pe.length-1,ne=pe-1;ne>=0;ne--){const Se=ee+ne,Ae=C[Se],He=Se+1<xe?C[Se+1].el:N;Le[ne]===0?_(null,Ae,A,He,O,$,ae,Z,ce):X&&(se<0||ne!==Pe[se]?z(Ae,A,He,2):se--)}}},z=(v,C,A,N,O=null)=>{const{el:$,type:ae,transition:Z,children:ce,shapeFlag:ne}=v;if(ne&6){z(v.component.subTree,C,A,N);return}if(ne&128){v.suspense.move(C,A,N);return}if(ne&64){ae.move(v,C,A,le);return}if(ae===Mt){i($,C,A);for(let S=0;S<ce.length;S++)z(ce[S],C,A,N);i(v.anchor,C,A);return}if(ae===Uo){M(v,C,A);return}if(N!==2&&ne&1&&Z)if(N===0)Z.beforeEnter($),i($,C,A),Yt(()=>Z.enter($),O);else{const{leave:S,delayLeave:x,afterLeave:U}=Z,ee=()=>i($,C,A),te=()=>{S($,()=>{ee(),U&&U()})};x?x($,ee,te):te()}else i($,C,A)},j=(v,C,A,N=!1,O=!1)=>{const{type:$,props:ae,ref:Z,children:ce,dynamicChildren:ne,shapeFlag:xe,patchFlag:S,dirs:x}=v;if(Z!=null&&El(Z,null,A,v,!0),xe&256){C.ctx.deactivate(v);return}const U=xe&1&&x,ee=!Do(v);let te;if(ee&&(te=ae&&ae.onVnodeBeforeUnmount)&&Cn(te,C,v),xe&6)Me(v.component,A,N);else{if(xe&128){v.suspense.unmount(A,N);return}U&&Ii(v,null,C,"beforeUnmount"),xe&64?v.type.remove(v,C,A,O,le,N):ne&&($!==Mt||S>0&&S&64)?Re(ne,C,A,!1,!0):($===Mt&&S&384||!O&&xe&16)&&Re(ce,C,A),N&&me(v)}(ee&&(te=ae&&ae.onVnodeUnmounted)||U)&&Yt(()=>{te&&Cn(te,C,v),U&&Ii(v,null,C,"unmounted")},A)},me=v=>{const{type:C,el:A,anchor:N,transition:O}=v;if(C===Mt){ge(A,N);return}if(C===Uo){T(v);return}const $=()=>{s(A),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:ae,delayLeave:Z}=O,ce=()=>ae(A,$);Z?Z(v.el,$,ce):ce()}else $()},ge=(v,C)=>{let A;for(;v!==C;)A=d(v),s(v),v=A;s(C)},Me=(v,C,A)=>{const{bum:N,scope:O,update:$,subTree:ae,um:Z}=v;N&&Io(N),O.stop(),$&&($.active=!1,j(ae,v,C,A)),Z&&Yt(Z,C),Yt(()=>{v.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Re=(v,C,A,N=!1,O=!1,$=0)=>{for(let ae=$;ae<v.length;ae++)j(v[ae],C,A,N,O)},B=v=>v.shapeFlag&6?B(v.component.subTree):v.shapeFlag&128?v.suspense.next():d(v.anchor||v.el),ie=(v,C,A)=>{v==null?C._vnode&&j(C._vnode,null,null,!0):_(C._vnode||null,v,C,null,null,null,A),Xc(),af(),C._vnode=v},le={p:_,um:j,m:z,r:me,mt:Y,mc:W,pc:G,pbc:w,n:B,o:n};let Ee,Te;return e&&([Ee,Te]=e(le)),{render:ie,hydrate:Ee,createApp:dg(ie,Ee)}}function Di({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Tf(n,e,t=!1){const i=n.children,s=e.children;if(Ue(i)&&Ue(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=gi(s[r]),a.el=o.el),t||Tf(o,a)),a.type===ca&&(a.el=o.el)}}function Mg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const yg=n=>n.__isTeleport,Mt=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),ns=Symbol.for("v-cmt"),Uo=Symbol.for("v-stc"),Tr=[];let En=null;function ft(n=!1){Tr.push(En=n?null:[])}function Sg(){Tr.pop(),En=Tr[Tr.length-1]||null}let Nr=1;function iu(n){Nr+=n}function bf(n){return n.dynamicChildren=Nr>0?En||Is:null,Sg(),Nr>0&&En&&En.push(n),n}function At(n,e,t,i,s,r){return bf(oe(n,e,t,i,s,r,!0))}function Go(n,e,t,i,s){return bf(ct(n,e,t,i,s,!0))}function Tl(n){return n?n.__v_isVNode===!0:!1}function cr(n,e){return n.type===e.type&&n.key===e.key}const ua="__vInternal",Af=({key:n})=>n??null,No=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?yt(n)||Bt(n)||ze(n)?{i:hn,r:n,k:e,f:!!t}:n:null);function oe(n,e=null,t=null,i=0,s=null,r=n===Mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Af(e),ref:e&&No(e),scopeId:oa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:hn};return a?(hc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=yt(t)?8:16),Nr>0&&!o&&En&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&En.push(l),l}const ct=Eg;function Eg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===ig)&&(n=ns),Tl(n)){const a=Ai(n,e,!0);return t&&hc(a,t),Nr>0&&!r&&En&&(a.shapeFlag&6?En[En.indexOf(n)]=a:En.push(a)),a.patchFlag|=-2,a}if(Ng(n)&&(n=n.__vccOpts),e){e=Tg(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=Pr(a)),st(l)&&(Jd(l)&&!Ue(l)&&(l=Rt({},l)),e.style=Zl(l))}const o=yt(n)?1:Xm(n)?128:yg(n)?64:st(n)?4:ze(n)?2:0;return oe(n,e,t,i,s,o,r,!0)}function Tg(n){return n?Jd(n)||ua in n?Rt({},n):n:null}function Ai(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?Ag(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Af(a),ref:e&&e.ref?t&&s?Ue(s)?s.concat(No(e)):[s,No(e)]:No(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Mt?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ai(n.ssContent),ssFallback:n.ssFallback&&Ai(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Os(n=" ",e=0){return ct(ca,null,n,e)}function bg(n,e){const t=ct(Uo,null,n);return t.staticCount=e,t}function Wo(n="",e=!1){return e?(ft(),Go(ns,null,n)):ct(ns,null,n)}function In(n){return n==null||typeof n=="boolean"?ct(ns):Ue(n)?ct(Mt,null,n.slice()):typeof n=="object"?gi(n):ct(ca,null,String(n))}function gi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ai(n)}function hc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ue(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),hc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(ua in e)?e._ctx=hn:s===3&&hn&&(hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:hn},t=32):(e=String(e),i&64?(t=16,e=[Os(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ag(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Pr([e.class,i.class]));else if(s==="style")e.style=Zl([e.style,i.style]);else if(Jo(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ue(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Cn(n,e,t,i=null){bn(n,e,7,[t,i])}const wg=vf();let Rg=0;function Cg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||wg,r={uid:Rg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mf(i,s),emitsOptions:cf(i,s),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:i.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Bm.bind(null,r),n.ce&&n.ce(r),r}let Dt=null,dc,ls,su="__VUE_INSTANCE_SETTERS__";(ls=fl()[su])||(ls=fl()[su]=[]),ls.push(n=>Dt=n),dc=n=>{ls.length>1?ls.forEach(e=>e(n)):ls[0](n)};const Vs=n=>{dc(n),n.scope.on()},$i=()=>{Dt&&Dt.scope.off(),dc(null)};function wf(n){return n.vnode.shapeFlag&4}let Or=!1;function Lg(n,e=!1){Or=e;const{props:t,children:i}=n.vnode,s=wf(n);fg(n,t,s,e),gg(n,i);const r=s?Pg(n,e):void 0;return Or=!1,r}function Pg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Qd(new Proxy(n.ctx,rg));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Dg(n):null;Vs(n),nr();const r=yi(i,n,0,[n.props,s]);if(ir(),$i(),Ud(r)){if(r.then($i,$i),e)return r.then(o=>{ru(n,o,e)}).catch(o=>{sa(o,n,0)});n.asyncDep=r}else ru(n,r,e)}else Rf(n,e)}function ru(n,e,t){ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=sf(e)),Rf(n,t)}let ou;function Rf(n,e,t){const i=n.type;if(!n.render){if(!e&&ou&&!i.render){const s=i.template||cc(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Rt(Rt({isCustomElement:r,delimiters:a},o),l);i.render=ou(s,c)}}n.render=i.render||Tn}Vs(n),nr(),og(n),ir(),$i()}function Ig(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Jt(n,"get","$attrs"),e[t]}}))}function Dg(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Ig(n)},slots:n.slots,emit:n.emit,expose:e}}function ha(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(sf(Qd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Er)return Er[t](n)},has(e,t){return t in e||t in Er}}))}function Ug(n,e=!0){return ze(n)?n.displayName||n.name:n.name||e&&n.__name}function Ng(n){return ze(n)&&"__vccOpts"in n}const sn=(n,e)=>Im(n,e,Or);function wt(n,e,t){const i=arguments.length;return i===2?st(e)&&!Ue(e)?Tl(e)?ct(n,null,[e]):ct(n,e):ct(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Tl(t)&&(t=[t]),ct(n,e,t))}const Og=Symbol.for("v-scx"),Fg=()=>et(Og),Bg="3.3.4",zg="http://www.w3.org/2000/svg",Vi=typeof document<"u"?document:null,au=Vi&&Vi.createElement("template"),kg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?Vi.createElementNS(zg,n):Vi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Vi.createTextNode(n),createComment:n=>Vi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Vi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{au.innerHTML=i?`<svg>${n}</svg>`:n;const a=au.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Hg(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Vg(n,e,t){const i=n.style,s=yt(t);if(t&&!s){if(e&&!yt(e))for(const r in e)t[r]==null&&bl(i,r,"");for(const r in t)bl(i,r,t[r])}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const lu=/\s*!important$/;function bl(n,e,t){if(Ue(t))t.forEach(i=>bl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Gg(n,e);lu.test(t)?n.setProperty(tr(i),t.replace(lu,""),"important"):n[i]=t}}const cu=["Webkit","Moz","ms"],Ta={};function Gg(n,e){const t=Ta[e];if(t)return t;let i=Bn(e);if(i!=="filter"&&i in n)return Ta[e]=i;i=ta(i);for(let s=0;s<cu.length;s++){const r=cu[s]+i;if(r in n)return Ta[e]=r}return e}const uu="http://www.w3.org/1999/xlink";function Wg(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(uu,e.slice(6,e.length)):n.setAttributeNS(uu,e,t);else{const r=$p(e);t==null||r&&!Bd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Xg(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Bd(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Cf(n,e,t,i){n.addEventListener(e,t,i)}function jg(n,e,t,i){n.removeEventListener(e,t,i)}function qg(n,e,t,i,s=null){const r=n._vei||(n._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Yg(e);if(i){const c=r[e]=Zg(i,s);Cf(n,a,c,l)}else o&&(jg(n,a,o,l),r[e]=void 0)}}const hu=/(?:Once|Passive|Capture)$/;function Yg(n){let e;if(hu.test(n)){e={};let i;for(;i=n.match(hu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):tr(n.slice(2)),e]}let ba=0;const Kg=Promise.resolve(),$g=()=>ba||(Kg.then(()=>ba=0),ba=Date.now());function Zg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;bn(Jg(i,t.value),e,5,[i])};return t.value=n,t.attached=$g(),t}function Jg(n,e){if(Ue(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const du=/^on[a-z]/,Qg=(n,e,t,i,s=!1,r,o,a,l)=>{e==="class"?Hg(n,i,s):e==="style"?Vg(n,t,i):Jo(e)?Yl(e)||qg(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):e_(n,e,i,s))?Xg(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Wg(n,e,i,s))};function e_(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&du.test(e)&&ze(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||du.test(e)&&yt(t)?!1:e in n}const fu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ue(e)?t=>Io(e,t):e},pu={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Qo(e);Cf(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Fd(Xo(o)):Xo(o));n._assign(n.multiple?s?new Set(r):r:r[0])}),n._assign=fu(i)},mounted(n,{value:e}){mu(n,e)},beforeUpdate(n,e,t){n._assign=fu(t)},updated(n,{value:e}){mu(n,e)}};function mu(n,e){const t=n.multiple;if(!(t&&!Ue(e)&&!Qo(e))){for(let i=0,s=n.options.length;i<s;i++){const r=n.options[i],o=Xo(r);if(t)Ue(e)?r.selected=Jp(e,o)>-1:r.selected=e.has(o);else if(na(Xo(r),e)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Xo(n){return"_value"in n?n._value:n.value}const t_=Rt({patchProp:Qg},kg);let gu;function n_(){return gu||(gu=vg(t_))}const i_=(...n)=>{const e=n_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=s_(i);if(!s)return;const r=e._component;!ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function s_(n){return yt(n)?document.querySelector(n):n}const Vr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="155",r_=0,_u=1,o_=2,Lf=1,a_=2,$n=3,ri=0,Zt=1,Un=2,Si=0,Fs=1,vu=2,xu=3,Mu=4,l_=5,Cs=100,c_=101,u_=102,yu=103,Su=104,h_=200,d_=201,f_=202,p_=203,Pf=204,If=205,m_=206,g_=207,__=208,v_=209,x_=210,M_=0,y_=1,S_=2,Al=3,E_=4,T_=5,b_=6,A_=7,Df=0,w_=1,R_=2,Ei=0,C_=1,L_=2,P_=3,I_=4,D_=5,Uf=300,Gs=301,Ws=302,wl=303,Rl=304,da=306,Xs=1e3,cn=1001,jo=1002,bt=1003,Cl=1004,Oo=1005,Kt=1006,Nf=1007,is=1008,Ti=1009,U_=1010,N_=1011,pc=1012,Of=1013,xi=1014,ei=1015,Fr=1016,Ff=1017,Bf=1018,Zi=1020,O_=1021,un=1023,F_=1024,B_=1025,Ji=1026,js=1027,z_=1028,zf=1029,k_=1030,kf=1031,Hf=1033,Aa=33776,wa=33777,Ra=33778,Ca=33779,Eu=35840,Tu=35841,bu=35842,Au=35843,H_=36196,wu=37492,Ru=37496,Cu=37808,Lu=37809,Pu=37810,Iu=37811,Du=37812,Uu=37813,Nu=37814,Ou=37815,Fu=37816,Bu=37817,zu=37818,ku=37819,Hu=37820,Vu=37821,La=36492,V_=36283,Gu=36284,Wu=36285,Xu=36286,Br=2300,qs=2301,Pa=2302,ju=2400,qu=2401,Yu=2402,G_=2500,W_=0,Vf=1,Ll=2,Gf=3e3,Qi=3001,X_=3200,j_=3201,Wf=0,q_=1,es="",Be="srgb",zn="srgb-linear",Xf="display-p3",Ia=7680,Y_=519,K_=512,$_=513,Z_=514,J_=515,Q_=516,ev=517,tv=518,nv=519,Pl=35044,Ku="300 es",Il=1035,ti=2e3,qo=2001;class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $u=1234567;const br=Math.PI/180,Ys=180/Math.PI;function An(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function mc(n,e){return(n%e+e)%e}function iv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function sv(n,e,t){return n!==e?(t-n)/(e-n):0}function Ar(n,e,t){return(1-t)*n+t*e}function rv(n,e,t,i){return Ar(n,e,1-Math.exp(-t*i))}function ov(n,e=1){return e-Math.abs(mc(n,e*2)-e)}function av(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function lv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function cv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function uv(n,e){return n+Math.random()*(e-n)}function hv(n){return n*(.5-Math.random())}function dv(n){n!==void 0&&($u=n);let e=$u+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fv(n){return n*br}function pv(n){return n*Ys}function Dl(n){return(n&n-1)===0&&n!==0}function jf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mv(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Jn={DEG2RAD:br,RAD2DEG:Ys,generateUUID:An,clamp:It,euclideanModulo:mc,mapLinear:iv,inverseLerp:sv,lerp:Ar,damp:rv,pingpong:ov,smoothstep:av,smootherstep:lv,randInt:cv,randFloat:uv,randFloatSpread:hv,seededRandom:dv,degToRad:fv,radToDeg:pv,isPowerOfTwo:Dl,ceilPowerOfTwo:jf,floorPowerOfTwo:Yo,setQuaternionFromProperEuler:mv,normalize:nt,denormalize:Nn};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,s,r,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],E=s[1],M=s[4],T=s[7],R=s[2],P=s[5],L=s[8];return r[0]=o*_+a*E+l*R,r[3]=o*m+a*M+l*P,r[6]=o*f+a*T+l*L,r[1]=c*_+u*E+h*R,r[4]=c*m+u*M+h*P,r[7]=c*f+u*T+h*L,r[2]=d*_+p*E+g*R,r[5]=d*m+p*M+g*P,r[8]=d*f+p*T+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Da.makeScale(e,t)),this}rotate(e){return this.premultiply(Da.makeRotation(-e)),this}translate(e,t){return this.premultiply(Da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new Xe;function qf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Zu={};function wr(n){n in Zu||(Zu[n]=!0,console.warn(n))}function Bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ua(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const gv=new Xe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),_v=new Xe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function vv(n){return n.convertSRGBToLinear().applyMatrix3(_v)}function xv(n){return n.applyMatrix3(gv).convertLinearToSRGB()}const Mv={[zn]:n=>n,[Be]:n=>n.convertSRGBToLinear(),[Xf]:vv},yv={[zn]:n=>n,[Be]:n=>n.convertLinearToSRGB(),[Xf]:xv},gn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return zn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Mv[e],s=yv[t];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let cs;class Yf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=zr("canvas")),cs.width=e.width,cs.height=e.height;const i=cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bs(t[i]/255)*255):t[i]=Bs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sv=0;class Kf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=An(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Na(s[o].image)):r.push(Na(s[o]))}else r=Na(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ev=0;class Ut extends os{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=cn,s=cn,r=Kt,o=is,a=un,l=Ti,c=Ut.DEFAULT_ANISOTROPY,u=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=An(),this.name="",this.source=new Kf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Qi?Be:es),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Be?Qi:Gf}set encoding(e){wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qi?Be:es}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Uf;Ut.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,i=0,s=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,T=(p+1)/2,R=(f+1)/2,P=(u+d)/4,L=(h+_)/4,W=(g+m)/4;return M>T&&M>R?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=P/i,r=L/i):T>R?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=P/s,r=W/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=L/r,s=W/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tv extends os{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(wr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Qi?Be:es),this.texture=new Ut(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Kt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends Tv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $f extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bv extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*_,E=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const R=Math.sqrt(M),P=Math.atan2(R,f*E);m=Math.sin(m*P)/R,a=Math.sin(a*P)/R}const T=a*E;if(l=l*m+d*T,c=c*m+p*T,u=u*m+g*T,h=h*m+_*T,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*i,u=l*i+a*t-r*s,h=l*s+r*i-o*t,d=-r*t-o*i-a*s;return this.x=c*l+d*-r+u*-a-h*-o,this.y=u*l+d*-o+h*-r-c*-a,this.z=h*l+d*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oa.copy(this).projectOnVector(e),this.sub(Oa)}reflect(e){return this.sub(Oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oa=new I,Ju=new Ri;class rn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox),us.applyMatrix4(e.matrixWorld),this.union(us);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)Gn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Gn)}else s.boundingBox===null&&s.computeBoundingBox(),us.copy(s.boundingBox),us.applyMatrix4(e.matrixWorld),this.union(us)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),eo.subVectors(this.max,ur),hs.subVectors(e.a,ur),ds.subVectors(e.b,ur),fs.subVectors(e.c,ur),ci.subVectors(ds,hs),ui.subVectors(fs,ds),Ui.subVectors(hs,fs);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ui.z,Ui.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ui.z,0,-Ui.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ui.y,Ui.x,0];return!Fa(t,hs,ds,fs,eo)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,hs,ds,fs,eo))?!1:(to.crossVectors(ci,ui),t=[to.x,to.y,to.z],Fa(t,hs,ds,fs,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new I,new I,new I,new I,new I,new I,new I,new I],Gn=new I,us=new rn,hs=new I,ds=new I,fs=new I,ci=new I,ui=new I,Ui=new I,ur=new I,eo=new I,to=new I,Ni=new I;function Fa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ni.fromArray(n,r);const a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Av=new rn,hr=new I,Ba=new I;class pn{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Av.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(hr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(Ba)),this.expandByPoint(hr.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new I,za=new I,no=new I,hi=new I,ka=new I,io=new I,Ha=new I;class Gr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){za.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(za);const r=e.distanceTo(t)*.5,o=-this.direction.dot(no),a=hi.dot(this.direction),l=-hi.dot(no),c=hi.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(za).addScaledVector(no,d),p}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),s=Wn.dot(Wn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,s,r){ka.subVectors(t,e),io.subVectors(i,e),Ha.crossVectors(ka,io);let o=this.direction.dot(Ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const l=a*this.direction.dot(io.crossVectors(hi,io));if(l<0)return null;const c=a*this.direction.dot(ka.cross(hi));if(c<0||l+c>o)return null;const u=-a*hi.dot(Ha);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,t,i,s,r,o,a,l,c,u,h,d,p,g,_,m){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,p,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),r=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wv,e,Rv)}lookAt(e,t,i){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),di.crossVectors(i,en),di.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),di.crossVectors(i,en)),di.normalize(),so.crossVectors(en,di),s[0]=di.x,s[4]=so.x,s[8]=en.x,s[1]=di.y,s[5]=so.y,s[9]=en.y,s[2]=di.z,s[6]=so.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],E=i[3],M=i[7],T=i[11],R=i[15],P=s[0],L=s[4],W=s[8],y=s[12],w=s[1],re=s[5],fe=s[9],H=s[13],Y=s[2],K=s[6],ue=s[10],V=s[14],G=s[3],he=s[7],de=s[11],z=s[15];return r[0]=o*P+a*w+l*Y+c*G,r[4]=o*L+a*re+l*K+c*he,r[8]=o*W+a*fe+l*ue+c*de,r[12]=o*y+a*H+l*V+c*z,r[1]=u*P+h*w+d*Y+p*G,r[5]=u*L+h*re+d*K+p*he,r[9]=u*W+h*fe+d*ue+p*de,r[13]=u*y+h*H+d*V+p*z,r[2]=g*P+_*w+m*Y+f*G,r[6]=g*L+_*re+m*K+f*he,r[10]=g*W+_*fe+m*ue+f*de,r[14]=g*y+_*H+m*V+f*z,r[3]=E*P+M*w+T*Y+R*G,r[7]=E*L+M*re+T*K+R*he,r[11]=E*W+M*fe+T*ue+R*de,r[15]=E*y+M*H+T*V+R*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*p-i*l*p)+_*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=h*m*c-_*d*c+_*l*p-a*m*p-h*l*f+a*d*f,M=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,T=u*_*c-g*h*c+g*a*p-o*_*p-u*a*f+o*h*f,R=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,P=t*E+i*M+s*T+r*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=E*L,e[1]=(_*d*r-h*m*r-_*s*p+i*m*p+h*s*f-i*d*f)*L,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*f+i*l*f)*L,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*L,e[4]=M*L,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*L,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*L,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*L,e[8]=T*L,e[9]=(g*h*r-u*_*r-g*i*p+t*_*p+u*i*f-t*h*f)*L,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*f+t*a*f)*L,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*L,e[12]=R*L,e[13]=(u*_*s-g*h*s+g*i*d-t*_*d-u*i*m+t*h*m)*L,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*L,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,_=o*u,m=o*h,f=a*h,E=l*c,M=l*u,T=l*h,R=i.x,P=i.y,L=i.z;return s[0]=(1-(_+f))*R,s[1]=(p+T)*R,s[2]=(g-M)*R,s[3]=0,s[4]=(p-T)*P,s[5]=(1-(d+f))*P,s[6]=(m+E)*P,s[7]=0,s[8]=(g+M)*L,s[9]=(m-E)*L,s[10]=(1-(d+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ps.set(s[0],s[1],s[2]).length();const o=ps.set(s[4],s[5],s[6]).length(),a=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_n.copy(this);const c=1/r,u=1/o,h=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ti){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let p,g;if(a===ti)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===qo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ti){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,p=(i+s)*u;let g,_;if(a===ti)g=(o+r)*h,_=-2*h;else if(a===qo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ps=new I,_n=new We,wv=new I(0,0,0),Rv=new I(1,1,1),di=new I,so=new I,en=new I,Qu=new We,eh=new Ri;class Wr{constructor(e=0,t=0,i=0,s=Wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eh.setFromEuler(this),this.setFromQuaternion(eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wr.DEFAULT_ORDER="XYZ";class gc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cv=0;const th=new I,ms=new Ri,Xn=new We,ro=new I,dr=new I,Lv=new I,Pv=new Ri,nh=new I(1,0,0),ih=new I(0,1,0),sh=new I(0,0,1),Iv={type:"added"},rh={type:"removed"};class ht extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new I,t=new Wr,i=new Ri,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Xe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(nh,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,t){return th.copy(e).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nh,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ro.copy(e):ro.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(dr,ro,this.up):Xn.lookAt(ro,dr,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(Xn),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Iv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(rh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ht.DEFAULT_UP=new I(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new I,jn=new I,Va=new I,qn=new I,gs=new I,_s=new I,oh=new I,Ga=new I,Wa=new I,Xa=new I;let oo=!1;class yn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),jn.subVectors(i,t),Va.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(jn),l=vn.dot(Va),c=jn.dot(jn),u=jn.dot(Va),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,qn),qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,i,s,r,o,a,l){return oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oo=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,qn),l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),jn.subVectors(e,t),vn.cross(jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),vn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oo=!0),yn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,i),_s.subVectors(r,i),Ga.subVectors(e,i);const l=gs.dot(Ga),c=_s.dot(Ga);if(l<=0&&c<=0)return t.copy(i);Wa.subVectors(e,s);const u=gs.dot(Wa),h=_s.dot(Wa);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(gs,o);Xa.subVectors(e,r);const p=gs.dot(Xa),g=_s.dot(Xa);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(_s,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return oh.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(oh,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(gs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Dv=0;class Fn extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=An(),this.name="",this.type="Material",this.blending=Fs,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=If,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},ao={h:0,s:0,l:0};function ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=gn.workingColorSpace){return this.r=e,this.g=t,this.b=i,gn.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=gn.workingColorSpace){if(e=mc(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ja(o,r,e+1/3),this.g=ja(o,r,e),this.b=ja(o,r,e-1/3)}return gn.toWorkingColorSpace(this,s),this}setStyle(e,t=Be){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Be){const i=Zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return gn.fromWorkingColorSpace(Ot.copy(this),e),Math.round(It(Ot.r*255,0,255))*65536+Math.round(It(Ot.g*255,0,255))*256+Math.round(It(Ot.b*255,0,255))}getHexString(e=Be){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gn.workingColorSpace){gn.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,s=Ot.g,r=Ot.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gn.workingColorSpace){return gn.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Be){gn.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,s=Ot.b;return e!==Be?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xn),xn.h+=e,xn.s+=t,xn.l+=i,this.setHSL(xn.h,xn.s,xn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(ao);const i=Ar(xn.h,ao.h,t),s=Ar(xn.s,ao.s,t),r=Ar(xn.l,ao.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new ke;ke.NAMES=Zf;class ni extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new I,lo=new qe;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pl,this.updateRange={offset:0,count:-1},this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Jf extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qf extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fn extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Uv=0;const an=new We,qa=new ht,vs=new I,tn=new rn,fr=new rn,Tt=new I;class mn extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?Qf:Jf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(tn.min,fr.min),tn.expandByPoint(Tt),Tt.addVectors(tn.max,fr.max),tn.expandByPoint(Tt)):(tn.expandByPoint(fr.min),tn.expandByPoint(fr.max))}tn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(e,c),Tt.add(vs)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new I,u[w]=new I;const h=new I,d=new I,p=new I,g=new qe,_=new qe,m=new qe,f=new I,E=new I;function M(w,re,fe){h.fromArray(s,w*3),d.fromArray(s,re*3),p.fromArray(s,fe*3),g.fromArray(o,w*2),_.fromArray(o,re*2),m.fromArray(o,fe*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const H=1/(_.x*m.y-m.x*_.y);isFinite(H)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(H),E.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(H),c[w].add(f),c[re].add(f),c[fe].add(f),u[w].add(E),u[re].add(E),u[fe].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let w=0,re=T.length;w<re;++w){const fe=T[w],H=fe.start,Y=fe.count;for(let K=H,ue=H+Y;K<ue;K+=3)M(i[K+0],i[K+1],i[K+2])}const R=new I,P=new I,L=new I,W=new I;function y(w){L.fromArray(r,w*3),W.copy(L);const re=c[w];R.copy(re),R.sub(L.multiplyScalar(L.dot(re))).normalize(),P.crossVectors(W,re);const H=P.dot(u[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=H}for(let w=0,re=T.length;w<re;++w){const fe=T[w],H=fe.start,Y=fe.count;for(let K=H,ue=H+Y;K<ue;K+=3)y(i[K+0]),y(i[K+1]),y(i[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new jt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ah=new We,Oi=new Gr,co=new pn,lh=new I,xs=new I,Ms=new I,ys=new I,Ya=new I,uo=new I,ho=new qe,fo=new qe,po=new qe,ch=new I,uh=new I,hh=new I,mo=new I,go=new I;class Xt extends ht{constructor(e=new mn,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ya.fromBufferAttribute(h,e),o?uo.addScaledVector(Ya,u):uo.addScaledVector(Ya.sub(t),u))}t.add(uo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(co.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(co,lh)===null||Oi.origin.distanceToSquared(lh)>(e.far-e.near)**2))&&(ah.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(ah),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,R=M;T<R;T+=3){const P=a.getX(T),L=a.getX(T+1),W=a.getX(T+2);s=_o(this,f,e,i,c,u,h,P,L,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=a.getX(m),M=a.getX(m+1),T=a.getX(m+2);s=_o(this,o,e,i,c,u,h,E,M,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,R=M;T<R;T+=3){const P=T,L=T+1,W=T+2;s=_o(this,f,e,i,c,u,h,P,L,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,M=m+1,T=m+2;s=_o(this,o,e,i,c,u,h,E,M,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Nv(n,e,t,i,s,r,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ri,a),l===null)return null;go.copy(a),go.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(go);return c<t.near||c>t.far?null:{distance:c,point:go.clone(),object:n}}function _o(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,xs),n.getVertexPosition(l,Ms),n.getVertexPosition(c,ys);const u=Nv(n,e,t,i,xs,Ms,ys,mo);if(u){s&&(ho.fromBufferAttribute(s,a),fo.fromBufferAttribute(s,l),po.fromBufferAttribute(s,c),u.uv=yn.getInterpolation(mo,xs,Ms,ys,ho,fo,po,new qe)),r&&(ho.fromBufferAttribute(r,a),fo.fromBufferAttribute(r,l),po.fromBufferAttribute(r,c),u.uv1=yn.getInterpolation(mo,xs,Ms,ys,ho,fo,po,new qe),u.uv2=u.uv1),o&&(ch.fromBufferAttribute(o,a),uh.fromBufferAttribute(o,l),hh.fromBufferAttribute(o,c),u.normal=yn.getInterpolation(mo,xs,Ms,ys,ch,uh,hh,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};yn.getNormal(xs,Ms,ys,h.normal),u.face=h}return u}class as extends mn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(h,2));function g(_,m,f,E,M,T,R,P,L,W,y){const w=T/L,re=R/W,fe=T/2,H=R/2,Y=P/2,K=L+1,ue=W+1;let V=0,G=0;const he=new I;for(let de=0;de<ue;de++){const z=de*re-H;for(let j=0;j<K;j++){const me=j*w-fe;he[_]=me*E,he[m]=z*M,he[f]=Y,c.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[f]=P>0?1:-1,u.push(he.x,he.y,he.z),h.push(j/L),h.push(1-de/W),V+=1}}for(let de=0;de<W;de++)for(let z=0;z<L;z++){const j=d+z+K*de,me=d+z+K*(de+1),ge=d+(z+1)+K*(de+1),Me=d+(z+1)+K*de;l.push(j,me,Me),l.push(me,ge,Me),G+=6}a.addGroup(p,G,y),p+=G,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=Ks(n[t]);for(const s in i)e[s]=i[s]}return e}function Ov(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ep(n){return n.getRenderTarget()===null?n.outputColorSpace:zn}const _c={clone:Ks,merge:Gt};var Fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fv,this.fragmentShader=Bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tp extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends tp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ss=-90,Es=1;class zv extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const s=new Wt(Ss,Es,e,t);s.layers=this.layers,this.add(s);const r=new Wt(Ss,Es,e,t);r.layers=this.layers,this.add(r);const o=new Wt(Ss,Es,e,t);o.layers=this.layers,this.add(o);const a=new Wt(Ss,Es,e,t);a.layers=this.layers,this.add(a);const l=new Wt(Ss,Es,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Ss,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class np extends Ut{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kv extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(wr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qi?Be:es),this.texture=new np(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new as(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Si});r.uniforms.tEquirect.value=t;const o=new Xt(s,r),a=t.minFilter;return t.minFilter===is&&(t.minFilter=Kt),new zv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ka=new I,Hv=new I,Vv=new Xe;class zi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ka.subVectors(i,t).cross(Hv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ka),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Vv.getNormalMatrix(e),s=this.coplanarPoint(Ka).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new pn,vo=new I;class fa{constructor(e=new zi,t=new zi,i=new zi,s=new zi,r=new zi,o=new zi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],E=s[13],M=s[14],T=s[15];if(i[0].setComponents(l-r,d-c,m-p,T-f).normalize(),i[1].setComponents(l+r,d+c,m+p,T+f).normalize(),i[2].setComponents(l+o,d+u,m+g,T+E).normalize(),i[3].setComponents(l-o,d-u,m-g,T-E).normalize(),i[4].setComponents(l-a,d-h,m-_,T-M).normalize(),t===ti)i[5].setComponents(l+a,d+h,m+_,T+M).normalize();else if(t===qo)i[5].setComponents(a,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(vo.x=s.normal.x>0?e.max.x:e.min.x,vo.y=s.normal.y>0?e.max.y:e.min.y,vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ip(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Gv(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,d=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;n.bindBuffer(h,c),p.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class vc extends mn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const E=f*d-o;for(let M=0;M<c;M++){const T=M*h-r;g.push(T,-E,0),_.push(0,0,1),m.push(M/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const M=E+c*f,T=E+c*(f+1),R=E+1+c*(f+1),P=E+1+c*f;p.push(M,T,P),p.push(T,R,P)}this.setIndex(p),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$v=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ex=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vx="gl_FragColor = linearToOutputTexel( gl_FragColor );",xx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ux=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Hx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kx=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,$x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,i0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,s0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,d0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,K0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tM=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_M=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Wv,alphahash_pars_fragment:Xv,alphamap_fragment:jv,alphamap_pars_fragment:qv,alphatest_fragment:Yv,alphatest_pars_fragment:Kv,aomap_fragment:$v,aomap_pars_fragment:Zv,begin_vertex:Jv,beginnormal_vertex:Qv,bsdfs:ex,iridescence_fragment:tx,bumpmap_pars_fragment:nx,clipping_planes_fragment:ix,clipping_planes_pars_fragment:sx,clipping_planes_pars_vertex:rx,clipping_planes_vertex:ox,color_fragment:ax,color_pars_fragment:lx,color_pars_vertex:cx,color_vertex:ux,common:hx,cube_uv_reflection_fragment:dx,defaultnormal_vertex:fx,displacementmap_pars_vertex:px,displacementmap_vertex:mx,emissivemap_fragment:gx,emissivemap_pars_fragment:_x,colorspace_fragment:vx,colorspace_pars_fragment:xx,envmap_fragment:Mx,envmap_common_pars_fragment:yx,envmap_pars_fragment:Sx,envmap_pars_vertex:Ex,envmap_physical_pars_fragment:Nx,envmap_vertex:Tx,fog_vertex:bx,fog_pars_vertex:Ax,fog_fragment:wx,fog_pars_fragment:Rx,gradientmap_pars_fragment:Cx,lightmap_fragment:Lx,lightmap_pars_fragment:Px,lights_lambert_fragment:Ix,lights_lambert_pars_fragment:Dx,lights_pars_begin:Ux,lights_toon_fragment:Ox,lights_toon_pars_fragment:Fx,lights_phong_fragment:Bx,lights_phong_pars_fragment:zx,lights_physical_fragment:kx,lights_physical_pars_fragment:Hx,lights_fragment_begin:Vx,lights_fragment_maps:Gx,lights_fragment_end:Wx,logdepthbuf_fragment:Xx,logdepthbuf_pars_fragment:jx,logdepthbuf_pars_vertex:qx,logdepthbuf_vertex:Yx,map_fragment:Kx,map_pars_fragment:$x,map_particle_fragment:Zx,map_particle_pars_fragment:Jx,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:e0,morphcolor_vertex:t0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:s0,normal_fragment_begin:r0,normal_fragment_maps:o0,normal_pars_fragment:a0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:_0,project_vertex:v0,dithering_fragment:x0,dithering_pars_fragment:M0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:T0,shadowmap_vertex:b0,shadowmask_pars_fragment:A0,skinbase_vertex:w0,skinning_pars_vertex:R0,skinning_vertex:C0,skinnormal_vertex:L0,specularmap_fragment:P0,specularmap_pars_fragment:I0,tonemapping_fragment:D0,tonemapping_pars_fragment:U0,transmission_fragment:N0,transmission_pars_fragment:O0,uv_pars_fragment:F0,uv_pars_vertex:B0,uv_vertex:z0,worldpos_vertex:k0,background_vert:H0,background_frag:V0,backgroundCube_vert:G0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:j0,depth_vert:q0,depth_frag:Y0,distanceRGBA_vert:K0,distanceRGBA_frag:$0,equirect_vert:Z0,equirect_frag:J0,linedashed_vert:Q0,linedashed_frag:eM,meshbasic_vert:tM,meshbasic_frag:nM,meshlambert_vert:iM,meshlambert_frag:sM,meshmatcap_vert:rM,meshmatcap_frag:oM,meshnormal_vert:aM,meshnormal_frag:lM,meshphong_vert:cM,meshphong_frag:uM,meshphysical_vert:hM,meshphysical_frag:dM,meshtoon_vert:fM,meshtoon_frag:pM,points_vert:mM,points_frag:gM,shadow_vert:_M,shadow_frag:vM,sprite_vert:xM,sprite_frag:MM},ve={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},$t={basic:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Gt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Gt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Gt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Gt([ve.points,ve.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Gt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Gt([ve.common,ve.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Gt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Gt([ve.sprite,ve.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Gt([ve.common,ve.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Gt([ve.lights,ve.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};$t.physical={uniforms:Gt([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const xo={r:0,b:0,g:0};function yM(n,e,t,i,s,r,o){const a=new ke(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(m,f){let E=!1,M=f.isScene===!0?f.background:null;switch(M&&M.isTexture&&(M=(f.backgroundBlurriness>0?t:e).get(M)),M===null?_(a,l):M&&M.isColor&&(_(M,1),E=!0),n.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),E=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),E=!0;break}(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===da)?(u===void 0&&(u=new Xt(new as(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Ks($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,L,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=M.colorSpace!==Be,(h!==M||d!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Xt(new vc(2,2),new wi({name:"BackgroundMaterial",uniforms:Ks($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=M.colorSpace!==Be,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(xo,ep(n)),i.buffers.color.setClear(xo.r,xo.g,xo.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function SM(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(Y,K,ue,V,G){let he=!1;if(o){const de=_(V,ue,K);c!==de&&(c=de,p(c.object)),he=f(Y,V,ue,G),he&&E(Y,V,ue,G)}else{const de=K.wireframe===!0;(c.geometry!==V.id||c.program!==ue.id||c.wireframe!==de)&&(c.geometry=V.id,c.program=ue.id,c.wireframe=de,he=!0)}G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,W(Y,K,ue,V),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(Y){return i.isWebGL2?n.bindVertexArray(Y):r.bindVertexArrayOES(Y)}function g(Y){return i.isWebGL2?n.deleteVertexArray(Y):r.deleteVertexArrayOES(Y)}function _(Y,K,ue){const V=ue.wireframe===!0;let G=a[Y.id];G===void 0&&(G={},a[Y.id]=G);let he=G[K.id];he===void 0&&(he={},G[K.id]=he);let de=he[V];return de===void 0&&(de=m(d()),he[V]=de),de}function m(Y){const K=[],ue=[],V=[];for(let G=0;G<s;G++)K[G]=0,ue[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ue,attributeDivisors:V,object:Y,attributes:{},index:null}}function f(Y,K,ue,V){const G=c.attributes,he=K.attributes;let de=0;const z=ue.getAttributes();for(const j in z)if(z[j].location>=0){const ge=G[j];let Me=he[j];if(Me===void 0&&(j==="instanceMatrix"&&Y.instanceMatrix&&(Me=Y.instanceMatrix),j==="instanceColor"&&Y.instanceColor&&(Me=Y.instanceColor)),ge===void 0||ge.attribute!==Me||Me&&ge.data!==Me.data)return!0;de++}return c.attributesNum!==de||c.index!==V}function E(Y,K,ue,V){const G={},he=K.attributes;let de=0;const z=ue.getAttributes();for(const j in z)if(z[j].location>=0){let ge=he[j];ge===void 0&&(j==="instanceMatrix"&&Y.instanceMatrix&&(ge=Y.instanceMatrix),j==="instanceColor"&&Y.instanceColor&&(ge=Y.instanceColor));const Me={};Me.attribute=ge,ge&&ge.data&&(Me.data=ge.data),G[j]=Me,de++}c.attributes=G,c.attributesNum=de,c.index=V}function M(){const Y=c.newAttributes;for(let K=0,ue=Y.length;K<ue;K++)Y[K]=0}function T(Y){R(Y,0)}function R(Y,K){const ue=c.newAttributes,V=c.enabledAttributes,G=c.attributeDivisors;ue[Y]=1,V[Y]===0&&(n.enableVertexAttribArray(Y),V[Y]=1),G[Y]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,K),G[Y]=K)}function P(){const Y=c.newAttributes,K=c.enabledAttributes;for(let ue=0,V=K.length;ue<V;ue++)K[ue]!==Y[ue]&&(n.disableVertexAttribArray(ue),K[ue]=0)}function L(Y,K,ue,V,G,he,de){de===!0?n.vertexAttribIPointer(Y,K,ue,G,he):n.vertexAttribPointer(Y,K,ue,V,G,he)}function W(Y,K,ue,V){if(i.isWebGL2===!1&&(Y.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const G=V.attributes,he=ue.getAttributes(),de=K.defaultAttributeValues;for(const z in he){const j=he[z];if(j.location>=0){let me=G[z];if(me===void 0&&(z==="instanceMatrix"&&Y.instanceMatrix&&(me=Y.instanceMatrix),z==="instanceColor"&&Y.instanceColor&&(me=Y.instanceColor)),me!==void 0){const ge=me.normalized,Me=me.itemSize,Re=t.get(me);if(Re===void 0)continue;const B=Re.buffer,ie=Re.type,le=Re.bytesPerElement,Ee=i.isWebGL2===!0&&(ie===n.INT||ie===n.UNSIGNED_INT||me.gpuType===Of);if(me.isInterleavedBufferAttribute){const Te=me.data,v=Te.stride,C=me.offset;if(Te.isInstancedInterleavedBuffer){for(let A=0;A<j.locationSize;A++)R(j.location+A,Te.meshPerAttribute);Y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let A=0;A<j.locationSize;A++)T(j.location+A);n.bindBuffer(n.ARRAY_BUFFER,B);for(let A=0;A<j.locationSize;A++)L(j.location+A,Me/j.locationSize,ie,ge,v*le,(C+Me/j.locationSize*A)*le,Ee)}else{if(me.isInstancedBufferAttribute){for(let Te=0;Te<j.locationSize;Te++)R(j.location+Te,me.meshPerAttribute);Y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Te=0;Te<j.locationSize;Te++)T(j.location+Te);n.bindBuffer(n.ARRAY_BUFFER,B);for(let Te=0;Te<j.locationSize;Te++)L(j.location+Te,Me/j.locationSize,ie,ge,Me*le,Me/j.locationSize*Te*le,Ee)}}else if(de!==void 0){const ge=de[z];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(j.location,ge);break;case 3:n.vertexAttrib3fv(j.location,ge);break;case 4:n.vertexAttrib4fv(j.location,ge);break;default:n.vertexAttrib1fv(j.location,ge)}}}}P()}function y(){fe();for(const Y in a){const K=a[Y];for(const ue in K){const V=K[ue];for(const G in V)g(V[G].object),delete V[G];delete K[ue]}delete a[Y]}}function w(Y){if(a[Y.id]===void 0)return;const K=a[Y.id];for(const ue in K){const V=K[ue];for(const G in V)g(V[G].object),delete V[G];delete K[ue]}delete a[Y.id]}function re(Y){for(const K in a){const ue=a[K];if(ue[Y.id]===void 0)continue;const V=ue[Y.id];for(const G in V)g(V[G].object),delete V[G];delete ue[Y.id]}}function fe(){H(),u=!0,c!==l&&(c=l,p(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:fe,resetDefaultState:H,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:re,initAttributes:M,enableAttribute:T,disableUnusedAttributes:P}}function EM(n,e,t,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,p;if(s)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function TM(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,T=o||e.has("OES_texture_float"),R=M&&T,P=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:T,floatVertexTextures:R,maxSamples:P}}function bM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new zi,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,M=E*4;let T=f.clippingState||null;l.value=T,T=u(g,d,M,p);for(let R=0;R!==M;++R)T[R]=t[R];f.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,T=p;M!==_;++M,T+=4)o.copy(h[M]).applyMatrix4(E,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function AM(n){let e=new WeakMap;function t(o,a){return a===wl?o.mapping=Gs:a===Rl&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===wl||a===Rl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kv(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class xc extends tp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,dh=[.125,.215,.35,.446,.526,.582],Gi=20,$a=new xc,fh=new ke;let Za=null;const ki=(1+Math.sqrt(5))/2,Ts=1/ki,ph=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ki,Ts),new I(0,ki,-Ts),new I(Ts,0,ki),new I(-Ts,0,ki),new I(ki,Ts,0),new I(-ki,Ts,0)];class mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Za=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Za),e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Fr,format:un,colorSpace:zn,depthBuffer:!1},s=gh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wM(r)),this._blurMaterial=RM(r,e,t)}return s}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,i,s){const a=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(fh),u.toneMapping=Ei,u.autoClear=!1;const p=new ni({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new Xt(new as,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(fh),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const M=this._cubeSize;Mo(s,E*M,f>2?M:0,M,M),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Gs||e.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Mo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ph[(s-1)%ph.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const f=[];let E=0;for(let L=0;L<Gi;++L){const W=L/_,y=Math.exp(-W*W/2);f.push(y),L===0?E+=y:L<m&&(E+=2*y)}for(let L=0;L<f.length;L++)f[L]=f[L]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const T=this._sizeLods[s],R=3*T*(s>M-Ps?s-M+Ps:0),P=4*(this._cubeSize-T);Mo(t,R,P,3*T,2*T),l.setRenderTarget(t),l.render(h,$a)}}function wM(n){const e=[],t=[],i=[];let s=n;const r=n-Ps+1+dh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ps?l=dh[o-n+Ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),M=new Float32Array(m*g*p),T=new Float32Array(f*g*p);for(let P=0;P<p;P++){const L=P%3*2/3-1,W=P>2?0:-1,y=[L,W,0,L+2/3,W,0,L+2/3,W+1,0,L,W,0,L+2/3,W+1,0,L,W+1,0];E.set(y,_*g*P),M.set(d,m*g*P);const w=[P,P,P,P,P,P];T.set(w,f*g*P)}const R=new mn;R.setAttribute("position",new jt(E,_)),R.setAttribute("uv",new jt(M,m)),R.setAttribute("faceIndex",new jt(T,f)),e.push(R),s>Ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gh(n,e,t){const i=new ss(n,e,t);return i.texture.mapping=da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function RM(n,e,t){const i=new Float32Array(Gi),s=new I(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function _h(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function vh(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Mc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===wl||l===Rl,u=l===Gs||l===Ws;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new mh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new mh(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function LM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function PM(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let M=0,T=E.length;M<T;M+=3){const R=E[M+0],P=E[M+1],L=E[M+2];d.push(R,P,P,L,L,R)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,T=E.length/3-1;M<T;M+=3){const R=M+0,P=M+1,L=M+2;d.push(R,P,P,L,L,R)}}else return;const m=new(qf(d)?Qf:Jf)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function IM(n,e,t,i){const s=i.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){n.drawElements(r,p,a,d*l),t.update(p,r,1)}function h(d,p,g){if(g===0)return;let _,m;if(s)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,a,d*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function DM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function UM(n,e){return n[0]-e[0]}function NM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function OM(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new Je,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==g){let Y=function(){fe.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let W=0;E===!0&&(W=1),M===!0&&(W=2),T===!0&&(W=3);let y=u.attributes.position.count*W,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const re=new Float32Array(y*w*4*g),fe=new $f(re,y,w,g);fe.type=ei,fe.needsUpdate=!0;const H=W*4;for(let K=0;K<g;K++){const ue=R[K],V=P[K],G=L[K],he=y*w*4*K;for(let de=0;de<ue.count;de++){const z=de*H;E===!0&&(o.fromBufferAttribute(ue,de),re[he+z+0]=o.x,re[he+z+1]=o.y,re[he+z+2]=o.z,re[he+z+3]=0),M===!0&&(o.fromBufferAttribute(V,de),re[he+z+4]=o.x,re[he+z+5]=o.y,re[he+z+6]=o.z,re[he+z+7]=0),T===!0&&(o.fromBufferAttribute(G,de),re[he+z+8]=o.x,re[he+z+9]=o.y,re[he+z+10]=o.z,re[he+z+11]=G.itemSize===4?o.w:1)}}_={count:g,texture:fe,size:new qe(y,w)},r.set(u,_),u.addEventListener("dispose",Y)}let m=0;for(let E=0;E<d.length;E++)m+=d[E];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",f),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let M=0;M<p;M++)g[M]=[M,0];i[u.id]=g}for(let M=0;M<p;M++){const T=g[M];T[0]=M,T[1]=d[M]}g.sort(NM);for(let M=0;M<8;M++)M<p&&g[M][1]?(a[M][0]=g[M][0],a[M][1]=g[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(UM);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let M=0;M<8;M++){const T=a[M],R=T[0],P=T[1];R!==Number.MAX_SAFE_INTEGER&&P?(_&&u.getAttribute("morphTarget"+M)!==_[R]&&u.setAttribute("morphTarget"+M,_[R]),m&&u.getAttribute("morphNormal"+M)!==m[R]&&u.setAttribute("morphNormal"+M,m[R]),s[M]=P,f+=P):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),m&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),s[M]=0)}const E=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function FM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const sp=new Ut,rp=new $f,op=new bv,ap=new np,xh=[],Mh=[],yh=new Float32Array(16),Sh=new Float32Array(9),Eh=new Float32Array(4);function sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=xh[s];if(r===void 0&&(r=new Float32Array(s),xh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pa(n,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function BM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function VM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Eh.set(i),n.uniformMatrix2fv(this.addr,!1,Eh),Et(t,i)}}function GM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Sh.set(i),n.uniformMatrix3fv(this.addr,!1,Sh),Et(t,i)}}function WM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;yh.set(i),n.uniformMatrix4fv(this.addr,!1,yh),Et(t,i)}}function XM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function KM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function QM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||sp,s)}function ey(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||op,s)}function ty(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ap,s)}function ny(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||rp,s)}function iy(n){switch(n){case 5126:return BM;case 35664:return zM;case 35665:return kM;case 35666:return HM;case 35674:return VM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return jM;case 35668:case 35672:return qM;case 35669:case 35673:return YM;case 5125:return KM;case 36294:return $M;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ny}}function sy(n,e){n.uniform1fv(this.addr,e)}function ry(n,e){const t=sr(e,this.size,2);n.uniform2fv(this.addr,t)}function oy(n,e){const t=sr(e,this.size,3);n.uniform3fv(this.addr,t)}function ay(n,e){const t=sr(e,this.size,4);n.uniform4fv(this.addr,t)}function ly(n,e){const t=sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cy(n,e){const t=sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uy(n,e){const t=sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hy(n,e){n.uniform1iv(this.addr,e)}function dy(n,e){n.uniform2iv(this.addr,e)}function fy(n,e){n.uniform3iv(this.addr,e)}function py(n,e){n.uniform4iv(this.addr,e)}function my(n,e){n.uniform1uiv(this.addr,e)}function gy(n,e){n.uniform2uiv(this.addr,e)}function _y(n,e){n.uniform3uiv(this.addr,e)}function vy(n,e){n.uniform4uiv(this.addr,e)}function xy(n,e,t){const i=this.cache,s=e.length,r=pa(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sp,r[o])}function My(n,e,t){const i=this.cache,s=e.length,r=pa(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||op,r[o])}function yy(n,e,t){const i=this.cache,s=e.length,r=pa(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ap,r[o])}function Sy(n,e,t){const i=this.cache,s=e.length,r=pa(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rp,r[o])}function Ey(n){switch(n){case 5126:return sy;case 35664:return ry;case 35665:return oy;case 35666:return ay;case 35674:return ly;case 35675:return cy;case 35676:return uy;case 5124:case 35670:return hy;case 35667:case 35671:return dy;case 35668:case 35672:return fy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return _y;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return Sy}}class Ty{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=iy(t.type)}}class by{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Ey(t.type)}}class Ay{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function Th(n,e){n.seq.push(e),n.map[e.id]=e}function wy(n,e,t){const i=n.name,s=i.length;for(Ja.lastIndex=0;;){const r=Ja.exec(i),o=Ja.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Th(t,c===void 0?new Ty(a,n,e):new by(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Ay(a),Th(t,h)),t=h}}}class Fo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);wy(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function bh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Ry=0;function Cy(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Ly(n){switch(n){case zn:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Ah(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Cy(n.getShaderSource(e),o)}else return s}function Py(n,e){const t=Ly(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Iy(n,e){let t;switch(e){case C_:t="Linear";break;case L_:t="Reinhard";break;case P_:t="OptimizedCineon";break;case I_:t="ACESFilmic";break;case D_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dy(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sr).join(`
`)}function Uy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ny(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Sr(n){return n!==""}function wh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(n){return n.replace(Oy,By)}const Fy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function By(n,e){let t=Ge[e];if(t===void 0){const i=Fy.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ul(t)}const zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(n){return n.replace(zy,ky)}function ky(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function Vy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function Wy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Df:e="ENVMAP_BLENDING_MULTIPLY";break;case w_:e="ENVMAP_BLENDING_MIX";break;case R_:e="ENVMAP_BLENDING_ADD";break}return e}function Xy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jy(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Hy(t),c=Vy(t),u=Gy(t),h=Wy(t),d=Xy(t),p=t.isWebGL2?"":Dy(t),g=Uy(r),_=s.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sr).join(`
`),f.length>0&&(f+=`
`)):(m=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),f=[p,Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Ei?Iy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Py("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=Ul(o),o=wh(o,t),o=Rh(o,t),a=Ul(a),a=wh(a,t),a=Rh(a,t),o=Ch(o),a=Ch(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=E+m+o,T=E+f+a,R=bh(s,s.VERTEX_SHADER,M),P=bh(s,s.FRAGMENT_SHADER,T);if(s.attachShader(_,R),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_),n.debug.checkShaderErrors){const y=s.getProgramInfoLog(_).trim(),w=s.getShaderInfoLog(R).trim(),re=s.getShaderInfoLog(P).trim();let fe=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(fe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,P);else{const Y=Ah(s,R,"vertex"),K=Ah(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+Y+`
`+K)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(w===""||re==="")&&(H=!1);H&&(this.diagnostics={runnable:fe,programLog:y,vertexShader:{log:w,prefix:m},fragmentShader:{log:re,prefix:f}})}s.deleteShader(R),s.deleteShader(P);let L;this.getUniforms=function(){return L===void 0&&(L=new Fo(s,_)),L};let W;return this.getAttributes=function(){return W===void 0&&(W=Ny(s,_)),W},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ry++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=P,this}let qy=0;class Yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ky(e),t.set(e,i)),i}}class Ky{constructor(e){this.id=qy++,this.code=e,this.usedTimes=0}}function $y(n,e,t,i,s,r,o){const a=new gc,l=new Yy,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,w,re,fe,H){const Y=fe.fog,K=H.geometry,ue=y.isMeshStandardMaterial?fe.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||ue),G=V&&V.mapping===da?V.image.height:null,he=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const de=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,z=de!==void 0?de.length:0;let j=0;K.morphAttributes.position!==void 0&&(j=1),K.morphAttributes.normal!==void 0&&(j=2),K.morphAttributes.color!==void 0&&(j=3);let me,ge,Me,Re;if(he){const rt=$t[he];me=rt.vertexShader,ge=rt.fragmentShader}else me=y.vertexShader,ge=y.fragmentShader,l.update(y),Me=l.getVertexShaderID(y),Re=l.getFragmentShaderID(y);const B=n.getRenderTarget(),ie=H.isInstancedMesh===!0,le=!!y.map,Ee=!!y.matcap,Te=!!V,v=!!y.aoMap,C=!!y.lightMap,A=!!y.bumpMap,N=!!y.normalMap,O=!!y.displacementMap,$=!!y.emissiveMap,ae=!!y.metalnessMap,Z=!!y.roughnessMap,ce=y.anisotropy>0,ne=y.clearcoat>0,xe=y.iridescence>0,S=y.sheen>0,x=y.transmission>0,U=ce&&!!y.anisotropyMap,ee=ne&&!!y.clearcoatMap,te=ne&&!!y.clearcoatNormalMap,se=ne&&!!y.clearcoatRoughnessMap,ye=xe&&!!y.iridescenceMap,pe=xe&&!!y.iridescenceThicknessMap,X=S&&!!y.sheenColorMap,Ie=S&&!!y.sheenRoughnessMap,Le=!!y.specularMap,Pe=!!y.specularColorMap,Se=!!y.specularIntensityMap,Ae=x&&!!y.transmissionMap,He=x&&!!y.thicknessMap,it=!!y.gradientMap,D=!!y.alphaMap,be=y.alphaTest>0,q=!!y.alphaHash,_e=!!y.extensions,we=!!K.attributes.uv1,Ze=!!K.attributes.uv2,ut=!!K.attributes.uv3;let mt=Ei;return y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(mt=n.toneMapping),{isWebGL2:u,shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:me,fragmentShader:ge,defines:y.defines,customVertexShaderID:Me,customFragmentShaderID:Re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:ie,instancingColor:ie&&H.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:zn,map:le,matcap:Ee,envMap:Te,envMapMode:Te&&V.mapping,envMapCubeUVHeight:G,aoMap:v,lightMap:C,bumpMap:A,normalMap:N,displacementMap:d&&O,emissiveMap:$,normalMapObjectSpace:N&&y.normalMapType===q_,normalMapTangentSpace:N&&y.normalMapType===Wf,metalnessMap:ae,roughnessMap:Z,anisotropy:ce,anisotropyMap:U,clearcoat:ne,clearcoatMap:ee,clearcoatNormalMap:te,clearcoatRoughnessMap:se,iridescence:xe,iridescenceMap:ye,iridescenceThicknessMap:pe,sheen:S,sheenColorMap:X,sheenRoughnessMap:Ie,specularMap:Le,specularColorMap:Pe,specularIntensityMap:Se,transmission:x,transmissionMap:Ae,thicknessMap:He,gradientMap:it,opaque:y.transparent===!1&&y.blending===Fs,alphaMap:D,alphaTest:be,alphaHash:q,combine:y.combine,mapUv:le&&_(y.map.channel),aoMapUv:v&&_(y.aoMap.channel),lightMapUv:C&&_(y.lightMap.channel),bumpMapUv:A&&_(y.bumpMap.channel),normalMapUv:N&&_(y.normalMap.channel),displacementMapUv:O&&_(y.displacementMap.channel),emissiveMapUv:$&&_(y.emissiveMap.channel),metalnessMapUv:ae&&_(y.metalnessMap.channel),roughnessMapUv:Z&&_(y.roughnessMap.channel),anisotropyMapUv:U&&_(y.anisotropyMap.channel),clearcoatMapUv:ee&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:X&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(y.sheenRoughnessMap.channel),specularMapUv:Le&&_(y.specularMap.channel),specularColorMapUv:Pe&&_(y.specularColorMap.channel),specularIntensityMapUv:Se&&_(y.specularIntensityMap.channel),transmissionMapUv:Ae&&_(y.transmissionMap.channel),thicknessMapUv:He&&_(y.thicknessMap.channel),alphaMapUv:D&&_(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(N||ce),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:Ze,vertexUv3s:ut,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(le||D),fog:!!Y,useFog:y.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:j,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&re.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,useLegacyLights:n._useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Un,flipSided:y.side===Zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:_e&&y.extensions.derivatives===!0,extensionFragDepth:_e&&y.extensions.fragDepth===!0,extensionDrawBuffers:_e&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const re in y.defines)w.push(re),w.push(y.defines[re]);return y.isRawShaderMaterial===!1&&(E(w,y),M(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function E(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),y.push(a.mask)}function T(y){const w=g[y.type];let re;if(w){const fe=$t[w];re=_c.clone(fe.uniforms)}else re=y.uniforms;return re}function R(y,w){let re;for(let fe=0,H=c.length;fe<H;fe++){const Y=c[fe];if(Y.cacheKey===w){re=Y,++re.usedTimes;break}}return re===void 0&&(re=new jy(n,w,y,r),c.push(re)),re}function P(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function L(y){l.remove(y)}function W(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:R,releaseProgram:P,releaseShaderCache:L,programs:c,dispose:W}}function Zy(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Jy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ph(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ih(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,p,g,_,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Jy),i.length>1&&i.sort(d||Ph),s.length>1&&s.sort(d||Ph)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Qy(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ih,n.set(i,[o])):s>=r.length?(o=new Ih,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function eS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ke};break;case"SpotLight":t={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function tS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nS=0;function iS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sS(n,e){const t=new eS,i=tS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new I);const r=new I,o=new We,a=new We;function l(u,h){let d=0,p=0,g=0;for(let re=0;re<9;re++)s.probe[re].set(0,0,0);let _=0,m=0,f=0,E=0,M=0,T=0,R=0,P=0,L=0,W=0;u.sort(iS);const y=h===!0?Math.PI:1;for(let re=0,fe=u.length;re<fe;re++){const H=u[re],Y=H.color,K=H.intensity,ue=H.distance,V=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)d+=Y.r*K*y,p+=Y.g*K*y,g+=Y.b*K*y;else if(H.isLightProbe)for(let G=0;G<9;G++)s.probe[G].addScaledVector(H.sh.coefficients[G],K);else if(H.isDirectionalLight){const G=t.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity*y),H.castShadow){const he=H.shadow,de=i.get(H);de.shadowBias=he.bias,de.shadowNormalBias=he.normalBias,de.shadowRadius=he.radius,de.shadowMapSize=he.mapSize,s.directionalShadow[_]=de,s.directionalShadowMap[_]=V,s.directionalShadowMatrix[_]=H.shadow.matrix,T++}s.directional[_]=G,_++}else if(H.isSpotLight){const G=t.get(H);G.position.setFromMatrixPosition(H.matrixWorld),G.color.copy(Y).multiplyScalar(K*y),G.distance=ue,G.coneCos=Math.cos(H.angle),G.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),G.decay=H.decay,s.spot[f]=G;const he=H.shadow;if(H.map&&(s.spotLightMap[L]=H.map,L++,he.updateMatrices(H),H.castShadow&&W++),s.spotLightMatrix[f]=he.matrix,H.castShadow){const de=i.get(H);de.shadowBias=he.bias,de.shadowNormalBias=he.normalBias,de.shadowRadius=he.radius,de.shadowMapSize=he.mapSize,s.spotShadow[f]=de,s.spotShadowMap[f]=V,P++}f++}else if(H.isRectAreaLight){const G=t.get(H);G.color.copy(Y).multiplyScalar(K),G.halfWidth.set(H.width*.5,0,0),G.halfHeight.set(0,H.height*.5,0),s.rectArea[E]=G,E++}else if(H.isPointLight){const G=t.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity*y),G.distance=H.distance,G.decay=H.decay,H.castShadow){const he=H.shadow,de=i.get(H);de.shadowBias=he.bias,de.shadowNormalBias=he.normalBias,de.shadowRadius=he.radius,de.shadowMapSize=he.mapSize,de.shadowCameraNear=he.camera.near,de.shadowCameraFar=he.camera.far,s.pointShadow[m]=de,s.pointShadowMap[m]=V,s.pointShadowMatrix[m]=H.shadow.matrix,R++}s.point[m]=G,m++}else if(H.isHemisphereLight){const G=t.get(H);G.skyColor.copy(H.color).multiplyScalar(K*y),G.groundColor.copy(H.groundColor).multiplyScalar(K*y),s.hemi[M]=G,M++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const w=s.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==f||w.rectAreaLength!==E||w.hemiLength!==M||w.numDirectionalShadows!==T||w.numPointShadows!==R||w.numSpotShadows!==P||w.numSpotMaps!==L)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=E,s.point.length=m,s.hemi.length=M,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=P+L-W,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=W,w.directionalLength=_,w.pointLength=m,w.spotLength=f,w.rectAreaLength=E,w.hemiLength=M,w.numDirectionalShadows=T,w.numPointShadows=R,w.numSpotShadows=P,w.numSpotMaps=L,s.version=nS++)}function c(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let E=0,M=u.length;E<M;E++){const T=u[E];if(T.isDirectionalLight){const R=s.directional[d];R.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(T.isSpotLight){const R=s.spot[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),g++}else if(T.isRectAreaLight){const R=s.rectArea[_];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(f),a.identity(),o.copy(T.matrixWorld),o.premultiply(f),a.extractRotation(o),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const R=s.point[p];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(f),p++}else if(T.isHemisphereLight){const R=s.hemi[m];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function Dh(n,e){const t=new sS(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function rS(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Dh(n,e),t.set(r,[l])):o>=a.length?(l=new Dh(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class oS extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aS extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uS(n,e,t){let i=new fa;const s=new qe,r=new qe,o=new Je,a=new oS({depthPacking:j_}),l=new aS,c={},u=t.maxTextureSize,h={[ri]:Zt,[Zt]:ri,[Un]:Un},d=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:lS,fragmentShader:cS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lf;let f=this.type;this.render=function(R,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const W=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),re=n.state;re.setBlending(Si),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const fe=f!==$n&&this.type===$n,H=f===$n&&this.type!==$n;for(let Y=0,K=R.length;Y<K;Y++){const ue=R[Y],V=ue.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const G=V.getFrameExtents();if(s.multiply(G),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,V.mapSize.y=r.y)),V.map===null||fe===!0||H===!0){const de=this.type!==$n?{minFilter:bt,magFilter:bt}:{};V.map!==null&&V.map.dispose(),V.map=new ss(s.x,s.y,de),V.map.texture.name=ue.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const he=V.getViewportCount();for(let de=0;de<he;de++){const z=V.getViewport(de);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),re.viewport(o),V.updateMatrices(ue,de),i=V.getFrustum(),T(P,L,V.camera,ue,this.type)}V.isPointLightShadow!==!0&&this.type===$n&&E(V,L),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(W,y,w)};function E(R,P){const L=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ss(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,L,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,L,p,_,null)}function M(R,P,L,W){let y=null;const w=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)y=w;else if(y=L.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const re=y.uuid,fe=P.uuid;let H=c[re];H===void 0&&(H={},c[re]=H);let Y=H[fe];Y===void 0&&(Y=y.clone(),H[fe]=Y),y=Y}if(y.visible=P.visible,y.wireframe=P.wireframe,W===$n?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const re=n.properties.get(y);re.light=L}return y}function T(R,P,L,W,y){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===$n)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const fe=e.update(R),H=R.material;if(Array.isArray(H)){const Y=fe.groups;for(let K=0,ue=Y.length;K<ue;K++){const V=Y[K],G=H[V.materialIndex];if(G&&G.visible){const he=M(R,G,W,y);n.renderBufferDirect(L,null,fe,he,R,V)}}}else if(H.visible){const Y=M(R,H,W,y);n.renderBufferDirect(L,null,fe,Y,R,null)}}const re=R.children;for(let fe=0,H=re.length;fe<H;fe++)T(re[fe],P,L,W,y)}}function hS(n,e,t){const i=t.isWebGL2;function s(){let D=!1;const be=new Je;let q=null;const _e=new Je(0,0,0,0);return{setMask:function(we){q!==we&&!D&&(n.colorMask(we,we,we,we),q=we)},setLocked:function(we){D=we},setClear:function(we,Ze,ut,mt,ai){ai===!0&&(we*=mt,Ze*=mt,ut*=mt),be.set(we,Ze,ut,mt),_e.equals(be)===!1&&(n.clearColor(we,Ze,ut,mt),_e.copy(be))},reset:function(){D=!1,q=null,_e.set(-1,0,0,0)}}}function r(){let D=!1,be=null,q=null,_e=null;return{setTest:function(we){we?B(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(we){be!==we&&!D&&(n.depthMask(we),be=we)},setFunc:function(we){if(q!==we){switch(we){case M_:n.depthFunc(n.NEVER);break;case y_:n.depthFunc(n.ALWAYS);break;case S_:n.depthFunc(n.LESS);break;case Al:n.depthFunc(n.LEQUAL);break;case E_:n.depthFunc(n.EQUAL);break;case T_:n.depthFunc(n.GEQUAL);break;case b_:n.depthFunc(n.GREATER);break;case A_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=we}},setLocked:function(we){D=we},setClear:function(we){_e!==we&&(n.clearDepth(we),_e=we)},reset:function(){D=!1,be=null,q=null,_e=null}}}function o(){let D=!1,be=null,q=null,_e=null,we=null,Ze=null,ut=null,mt=null,ai=null;return{setTest:function(rt){D||(rt?B(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(rt){be!==rt&&!D&&(n.stencilMask(rt),be=rt)},setFunc:function(rt,Rn,zt){(q!==rt||_e!==Rn||we!==zt)&&(n.stencilFunc(rt,Rn,zt),q=rt,_e=Rn,we=zt)},setOp:function(rt,Rn,zt){(Ze!==rt||ut!==Rn||mt!==zt)&&(n.stencilOp(rt,Rn,zt),Ze=rt,ut=Rn,mt=zt)},setLocked:function(rt){D=rt},setClear:function(rt){ai!==rt&&(n.clearStencil(rt),ai=rt)},reset:function(){D=!1,be=null,q=null,_e=null,we=null,Ze=null,ut=null,mt=null,ai=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,E=null,M=null,T=null,R=null,P=null,L=null,W=null,y=!1,w=null,re=null,fe=null,H=null,Y=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,V=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),ue=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ue=V>=2);let he=null,de={};const z=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),me=new Je().fromArray(z),ge=new Je().fromArray(j);function Me(D,be,q,_e){const we=new Uint8Array(4),Ze=n.createTexture();n.bindTexture(D,Ze),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ut=0;ut<q;ut++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(be,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(be+ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Ze}const Re={};Re[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(n.DEPTH_TEST),l.setFunc(Al),O(!1),$(_u),B(n.CULL_FACE),A(Si);function B(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function ie(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function le(D,be){return p[D]!==be?(n.bindFramebuffer(D,be),p[D]=be,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=be),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=be)),!0):!1}function Ee(D,be){let q=_,_e=!1;if(D)if(q=g.get(be),q===void 0&&(q=[],g.set(be,q)),D.isWebGLMultipleRenderTargets){const we=D.texture;if(q.length!==we.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Ze=0,ut=we.length;Ze<ut;Ze++)q[Ze]=n.COLOR_ATTACHMENT0+Ze;q.length=we.length,_e=!0}}else q[0]!==n.COLOR_ATTACHMENT0&&(q[0]=n.COLOR_ATTACHMENT0,_e=!0);else q[0]!==n.BACK&&(q[0]=n.BACK,_e=!0);_e&&(t.isWebGL2?n.drawBuffers(q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function Te(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const v={[Cs]:n.FUNC_ADD,[c_]:n.FUNC_SUBTRACT,[u_]:n.FUNC_REVERSE_SUBTRACT};if(i)v[yu]=n.MIN,v[Su]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(v[yu]=D.MIN_EXT,v[Su]=D.MAX_EXT)}const C={[h_]:n.ZERO,[d_]:n.ONE,[f_]:n.SRC_COLOR,[Pf]:n.SRC_ALPHA,[x_]:n.SRC_ALPHA_SATURATE,[__]:n.DST_COLOR,[m_]:n.DST_ALPHA,[p_]:n.ONE_MINUS_SRC_COLOR,[If]:n.ONE_MINUS_SRC_ALPHA,[v_]:n.ONE_MINUS_DST_COLOR,[g_]:n.ONE_MINUS_DST_ALPHA};function A(D,be,q,_e,we,Ze,ut,mt){if(D===Si){f===!0&&(ie(n.BLEND),f=!1);return}if(f===!1&&(B(n.BLEND),f=!0),D!==l_){if(D!==E||mt!==y){if((M!==Cs||P!==Cs)&&(n.blendEquation(n.FUNC_ADD),M=Cs,P=Cs),mt)switch(D){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vu:n.blendFunc(n.ONE,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,R=null,L=null,W=null,E=D,y=mt}return}we=we||be,Ze=Ze||q,ut=ut||_e,(be!==M||we!==P)&&(n.blendEquationSeparate(v[be],v[we]),M=be,P=we),(q!==T||_e!==R||Ze!==L||ut!==W)&&(n.blendFuncSeparate(C[q],C[_e],C[Ze],C[ut]),T=q,R=_e,L=Ze,W=ut),E=D,y=!1}function N(D,be){D.side===Un?ie(n.CULL_FACE):B(n.CULL_FACE);let q=D.side===Zt;be&&(q=!q),O(q),D.blending===Fs&&D.transparent===!1?A(Si):A(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const _e=D.stencilWrite;c.setTest(_e),_e&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Z(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function O(D){w!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),w=D)}function $(D){D!==r_?(B(n.CULL_FACE),D!==re&&(D===_u?n.cullFace(n.BACK):D===o_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),re=D}function ae(D){D!==fe&&(ue&&n.lineWidth(D),fe=D)}function Z(D,be,q){D?(B(n.POLYGON_OFFSET_FILL),(H!==be||Y!==q)&&(n.polygonOffset(be,q),H=be,Y=q)):ie(n.POLYGON_OFFSET_FILL)}function ce(D){D?B(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function ne(D){D===void 0&&(D=n.TEXTURE0+K-1),he!==D&&(n.activeTexture(D),he=D)}function xe(D,be,q){q===void 0&&(he===null?q=n.TEXTURE0+K-1:q=he);let _e=de[q];_e===void 0&&(_e={type:void 0,texture:void 0},de[q]=_e),(_e.type!==D||_e.texture!==be)&&(he!==q&&(n.activeTexture(q),he=q),n.bindTexture(D,be||Re[D]),_e.type=D,_e.texture=be)}function S(){const D=de[he];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function U(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){me.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),me.copy(D))}function Se(D){ge.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ge.copy(D))}function Ae(D,be){let q=h.get(be);q===void 0&&(q=new WeakMap,h.set(be,q));let _e=q.get(D);_e===void 0&&(_e=n.getUniformBlockIndex(be,D.name),q.set(D,_e))}function He(D,be){const _e=h.get(be).get(D);u.get(be)!==_e&&(n.uniformBlockBinding(be,_e,D.__bindingPointIndex),u.set(be,_e))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},he=null,de={},p={},g=new WeakMap,_=[],m=null,f=!1,E=null,M=null,T=null,R=null,P=null,L=null,W=null,y=!1,w=null,re=null,fe=null,H=null,Y=null,me.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:B,disable:ie,bindFramebuffer:le,drawBuffers:Ee,useProgram:Te,setBlending:A,setMaterial:N,setFlipSided:O,setCullFace:$,setLineWidth:ae,setPolygonOffset:Z,setScissorTest:ce,activeTexture:ne,bindTexture:xe,unbindTexture:S,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Ie,texImage3D:Le,updateUBOMapping:Ae,uniformBlockBinding:He,texStorage2D:pe,texStorage3D:X,texSubImage2D:ee,texSubImage3D:te,compressedTexSubImage2D:se,compressedTexSubImage3D:ye,scissor:Pe,viewport:Se,reset:it}}function dS(n,e,t,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,x){return f?new OffscreenCanvas(S,x):zr("canvas")}function M(S,x,U,ee){let te=1;if((S.width>ee||S.height>ee)&&(te=ee/Math.max(S.width,S.height)),te<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const se=x?Yo:Math.floor,ye=se(te*S.width),pe=se(te*S.height);_===void 0&&(_=E(ye,pe));const X=U?E(ye,pe):_;return X.width=ye,X.height=pe,X.getContext("2d").drawImage(S,0,0,ye,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ye+"x"+pe+")."),X}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function T(S){return Dl(S.width)&&Dl(S.height)}function R(S){return a?!1:S.wrapS!==cn||S.wrapT!==cn||S.minFilter!==bt&&S.minFilter!==Kt}function P(S,x){return S.generateMipmaps&&x&&S.minFilter!==bt&&S.minFilter!==Kt}function L(S){n.generateMipmap(S)}function W(S,x,U,ee,te=!1){if(a===!1)return x;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let se=x;return x===n.RED&&(U===n.FLOAT&&(se=n.R32F),U===n.HALF_FLOAT&&(se=n.R16F),U===n.UNSIGNED_BYTE&&(se=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(se=n.R8UI),U===n.UNSIGNED_SHORT&&(se=n.R16UI),U===n.UNSIGNED_INT&&(se=n.R32UI),U===n.BYTE&&(se=n.R8I),U===n.SHORT&&(se=n.R16I),U===n.INT&&(se=n.R32I)),x===n.RG&&(U===n.FLOAT&&(se=n.RG32F),U===n.HALF_FLOAT&&(se=n.RG16F),U===n.UNSIGNED_BYTE&&(se=n.RG8)),x===n.RGBA&&(U===n.FLOAT&&(se=n.RGBA32F),U===n.HALF_FLOAT&&(se=n.RGBA16F),U===n.UNSIGNED_BYTE&&(se=ee===Be&&te===!1?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)),(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function y(S,x,U){return P(S,U)===!0||S.isFramebufferTexture&&S.minFilter!==bt&&S.minFilter!==Kt?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function w(S){return S===bt||S===Cl||S===Oo?n.NEAREST:n.LINEAR}function re(S){const x=S.target;x.removeEventListener("dispose",re),H(x),x.isVideoTexture&&g.delete(x)}function fe(S){const x=S.target;x.removeEventListener("dispose",fe),K(x)}function H(S){const x=i.get(S);if(x.__webglInit===void 0)return;const U=S.source,ee=m.get(U);if(ee){const te=ee[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&Y(S),Object.keys(ee).length===0&&m.delete(U)}i.remove(S)}function Y(S){const x=i.get(S);n.deleteTexture(x.__webglTexture);const U=S.source,ee=m.get(U);delete ee[x.__cacheKey],o.memory.textures--}function K(S){const x=S.texture,U=i.get(S),ee=i.get(x);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(U.__webglFramebuffer[te]))for(let se=0;se<U.__webglFramebuffer[te].length;se++)n.deleteFramebuffer(U.__webglFramebuffer[te][se]);else n.deleteFramebuffer(U.__webglFramebuffer[te]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[te])}else{if(Array.isArray(U.__webglFramebuffer))for(let te=0;te<U.__webglFramebuffer.length;te++)n.deleteFramebuffer(U.__webglFramebuffer[te]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let te=0;te<U.__webglColorRenderbuffer.length;te++)U.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[te]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let te=0,se=x.length;te<se;te++){const ye=i.get(x[te]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(x[te])}i.remove(x),i.remove(S)}let ue=0;function V(){ue=0}function G(){const S=ue;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),ue+=1,S}function he(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function de(S,x){const U=i.get(S);if(S.isVideoTexture&&ne(S),S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){const ee=S.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(U,S,x);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function z(S,x){const U=i.get(S);if(S.version>0&&U.__version!==S.version){le(U,S,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function j(S,x){const U=i.get(S);if(S.version>0&&U.__version!==S.version){le(U,S,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function me(S,x){const U=i.get(S);if(S.version>0&&U.__version!==S.version){Ee(U,S,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const ge={[Xs]:n.REPEAT,[cn]:n.CLAMP_TO_EDGE,[jo]:n.MIRRORED_REPEAT},Me={[bt]:n.NEAREST,[Cl]:n.NEAREST_MIPMAP_NEAREST,[Oo]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[Nf]:n.LINEAR_MIPMAP_NEAREST,[is]:n.LINEAR_MIPMAP_LINEAR},Re={[K_]:n.NEVER,[nv]:n.ALWAYS,[$_]:n.LESS,[J_]:n.LEQUAL,[Z_]:n.EQUAL,[tv]:n.GEQUAL,[Q_]:n.GREATER,[ev]:n.NOTEQUAL};function B(S,x,U){if(U?(n.texParameteri(S,n.TEXTURE_WRAP_S,ge[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ge[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ge[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Me[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Me[x.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==cn||x.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,w(x.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==bt&&x.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===bt||x.minFilter!==Oo&&x.minFilter!==is||x.type===ei&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Fr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(S,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function ie(S,x){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",re));const ee=x.source;let te=m.get(ee);te===void 0&&(te={},m.set(ee,te));const se=he(x);if(se!==S.__cacheKey){te[se]===void 0&&(te[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),te[se].usedTimes++;const ye=te[S.__cacheKey];ye!==void 0&&(te[S.__cacheKey].usedTimes--,ye.usedTimes===0&&Y(x)),S.__cacheKey=se,S.__webglTexture=te[se].texture}return U}function le(S,x,U){let ee=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=n.TEXTURE_3D);const te=ie(S,x),se=x.source;t.bindTexture(ee,S.__webglTexture,n.TEXTURE0+U);const ye=i.get(se);if(se.version!==ye.__version||te===!0){t.activeTexture(n.TEXTURE0+U),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const pe=R(x)&&T(x.image)===!1;let X=M(x.image,pe,!1,u);X=xe(x,X);const Ie=T(X)||a,Le=r.convert(x.format,x.colorSpace);let Pe=r.convert(x.type),Se=W(x.internalFormat,Le,Pe,x.colorSpace);B(ee,x,Ie);let Ae;const He=x.mipmaps,it=a&&x.isVideoTexture!==!0,D=ye.__version===void 0||te===!0,be=y(x,X,Ie);if(x.isDepthTexture)Se=n.DEPTH_COMPONENT,a?x.type===ei?Se=n.DEPTH_COMPONENT32F:x.type===xi?Se=n.DEPTH_COMPONENT24:x.type===Zi?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:x.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ji&&Se===n.DEPTH_COMPONENT&&x.type!==pc&&x.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=xi,Pe=r.convert(x.type)),x.format===js&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,x.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Zi,Pe=r.convert(x.type))),D&&(it?t.texStorage2D(n.TEXTURE_2D,1,Se,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,Se,X.width,X.height,0,Le,Pe,null));else if(x.isDataTexture)if(He.length>0&&Ie){it&&D&&t.texStorage2D(n.TEXTURE_2D,be,Se,He[0].width,He[0].height);for(let q=0,_e=He.length;q<_e;q++)Ae=He[q],it?t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Le,Pe,Ae.data):t.texImage2D(n.TEXTURE_2D,q,Se,Ae.width,Ae.height,0,Le,Pe,Ae.data);x.generateMipmaps=!1}else it?(D&&t.texStorage2D(n.TEXTURE_2D,be,Se,X.width,X.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,X.width,X.height,Le,Pe,X.data)):t.texImage2D(n.TEXTURE_2D,0,Se,X.width,X.height,0,Le,Pe,X.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){it&&D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Se,He[0].width,He[0].height,X.depth);for(let q=0,_e=He.length;q<_e;q++)Ae=He[q],x.format!==un?Le!==null?it?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ae.width,Ae.height,X.depth,Le,Ae.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Se,Ae.width,Ae.height,X.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ae.width,Ae.height,X.depth,Le,Pe,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Se,Ae.width,Ae.height,X.depth,0,Le,Pe,Ae.data)}else{it&&D&&t.texStorage2D(n.TEXTURE_2D,be,Se,He[0].width,He[0].height);for(let q=0,_e=He.length;q<_e;q++)Ae=He[q],x.format!==un?Le!==null?it?t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Le,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Se,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Le,Pe,Ae.data):t.texImage2D(n.TEXTURE_2D,q,Se,Ae.width,Ae.height,0,Le,Pe,Ae.data)}else if(x.isDataArrayTexture)it?(D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Se,X.width,X.height,X.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,Le,Pe,X.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,X.width,X.height,X.depth,0,Le,Pe,X.data);else if(x.isData3DTexture)it?(D&&t.texStorage3D(n.TEXTURE_3D,be,Se,X.width,X.height,X.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,Le,Pe,X.data)):t.texImage3D(n.TEXTURE_3D,0,Se,X.width,X.height,X.depth,0,Le,Pe,X.data);else if(x.isFramebufferTexture){if(D)if(it)t.texStorage2D(n.TEXTURE_2D,be,Se,X.width,X.height);else{let q=X.width,_e=X.height;for(let we=0;we<be;we++)t.texImage2D(n.TEXTURE_2D,we,Se,q,_e,0,Le,Pe,null),q>>=1,_e>>=1}}else if(He.length>0&&Ie){it&&D&&t.texStorage2D(n.TEXTURE_2D,be,Se,He[0].width,He[0].height);for(let q=0,_e=He.length;q<_e;q++)Ae=He[q],it?t.texSubImage2D(n.TEXTURE_2D,q,0,0,Le,Pe,Ae):t.texImage2D(n.TEXTURE_2D,q,Se,Le,Pe,Ae);x.generateMipmaps=!1}else it?(D&&t.texStorage2D(n.TEXTURE_2D,be,Se,X.width,X.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,Pe,X)):t.texImage2D(n.TEXTURE_2D,0,Se,Le,Pe,X);P(x,Ie)&&L(ee),ye.__version=se.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Ee(S,x,U){if(x.image.length!==6)return;const ee=ie(S,x),te=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+U);const se=i.get(te);if(te.version!==se.__version||ee===!0){t.activeTexture(n.TEXTURE0+U),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,pe=x.image[0]&&x.image[0].isDataTexture,X=[];for(let q=0;q<6;q++)!ye&&!pe?X[q]=M(x.image[q],!1,!0,c):X[q]=pe?x.image[q].image:x.image[q],X[q]=xe(x,X[q]);const Ie=X[0],Le=T(Ie)||a,Pe=r.convert(x.format,x.colorSpace),Se=r.convert(x.type),Ae=W(x.internalFormat,Pe,Se,x.colorSpace),He=a&&x.isVideoTexture!==!0,it=se.__version===void 0||ee===!0;let D=y(x,Ie,Le);B(n.TEXTURE_CUBE_MAP,x,Le);let be;if(ye){He&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,D,Ae,Ie.width,Ie.height);for(let q=0;q<6;q++){be=X[q].mipmaps;for(let _e=0;_e<be.length;_e++){const we=be[_e];x.format!==un?Pe!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e,0,0,we.width,we.height,Pe,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e,Ae,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e,0,0,we.width,we.height,Pe,Se,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e,Ae,we.width,we.height,0,Pe,Se,we.data)}}}else{be=x.mipmaps,He&&it&&(be.length>0&&D++,t.texStorage2D(n.TEXTURE_CUBE_MAP,D,Ae,X[0].width,X[0].height));for(let q=0;q<6;q++)if(pe){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,X[q].width,X[q].height,Pe,Se,X[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ae,X[q].width,X[q].height,0,Pe,Se,X[q].data);for(let _e=0;_e<be.length;_e++){const Ze=be[_e].image[q].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e+1,0,0,Ze.width,Ze.height,Pe,Se,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e+1,Ae,Ze.width,Ze.height,0,Pe,Se,Ze.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Pe,Se,X[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ae,Pe,Se,X[q]);for(let _e=0;_e<be.length;_e++){const we=be[_e];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e+1,0,0,Pe,Se,we.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e+1,Ae,Pe,Se,we.image[q])}}}P(x,Le)&&L(n.TEXTURE_CUBE_MAP),se.__version=te.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Te(S,x,U,ee,te,se){const ye=r.convert(U.format,U.colorSpace),pe=r.convert(U.type),X=W(U.internalFormat,ye,pe,U.colorSpace);if(!i.get(x).__hasExternalTextures){const Le=Math.max(1,x.width>>se),Pe=Math.max(1,x.height>>se);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,se,X,Le,Pe,x.depth,0,ye,pe,null):t.texImage2D(te,se,X,Le,Pe,0,ye,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ce(x)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,te,i.get(U).__webglTexture,0,Z(x)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,te,i.get(U).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function v(S,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let ee=n.DEPTH_COMPONENT16;if(U||ce(x)){const te=x.depthTexture;te&&te.isDepthTexture&&(te.type===ei?ee=n.DEPTH_COMPONENT32F:te.type===xi&&(ee=n.DEPTH_COMPONENT24));const se=Z(x);ce(x)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,ee,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,ee,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){const ee=Z(x);U&&ce(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,x.width,x.height):ce(x)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const ee=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let te=0;te<ee.length;te++){const se=ee[te],ye=r.convert(se.format,se.colorSpace),pe=r.convert(se.type),X=W(se.internalFormat,ye,pe,se.colorSpace),Ie=Z(x);U&&ce(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,X,x.width,x.height):ce(x)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function C(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),de(x.depthTexture,0);const ee=i.get(x.depthTexture).__webglTexture,te=Z(x);if(x.depthTexture.format===Ji)ce(x)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(x.depthTexture.format===js)ce(x)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function A(S){const x=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");C(x.__webglFramebuffer,S)}else if(U){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]=n.createRenderbuffer(),v(x.__webglDepthbuffer[ee],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),v(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(S,x,U){const ee=i.get(S);x!==void 0&&Te(ee.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&A(S)}function O(S){const x=S.texture,U=i.get(S),ee=i.get(x);S.addEventListener("dispose",fe),S.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=x.version,o.memory.textures++);const te=S.isWebGLCubeRenderTarget===!0,se=S.isWebGLMultipleRenderTargets===!0,ye=T(S)||a;if(te){U.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[pe]=[];for(let X=0;X<x.mipmaps.length;X++)U.__webglFramebuffer[pe][X]=n.createFramebuffer()}else U.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)U.__webglFramebuffer[pe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(se)if(s.drawBuffers){const pe=S.texture;for(let X=0,Ie=pe.length;X<Ie;X++){const Le=i.get(pe[X]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&ce(S)===!1){const pe=se?x:[x];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let X=0;X<pe.length;X++){const Ie=pe[X];U.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[X]);const Le=r.convert(Ie.format,Ie.colorSpace),Pe=r.convert(Ie.type),Se=W(Ie.internalFormat,Le,Pe,Ie.colorSpace,S.isXRRenderTarget===!0),Ae=Z(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Se,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,U.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),v(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),B(n.TEXTURE_CUBE_MAP,x,ye);for(let pe=0;pe<6;pe++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let X=0;X<x.mipmaps.length;X++)Te(U.__webglFramebuffer[pe][X],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,X);else Te(U.__webglFramebuffer[pe],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);P(x,ye)&&L(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const pe=S.texture;for(let X=0,Ie=pe.length;X<Ie;X++){const Le=pe[X],Pe=i.get(Le);t.bindTexture(n.TEXTURE_2D,Pe.__webglTexture),B(n.TEXTURE_2D,Le,ye),Te(U.__webglFramebuffer,S,Le,n.COLOR_ATTACHMENT0+X,n.TEXTURE_2D,0),P(Le,ye)&&L(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?pe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ee.__webglTexture),B(pe,x,ye),a&&x.mipmaps&&x.mipmaps.length>0)for(let X=0;X<x.mipmaps.length;X++)Te(U.__webglFramebuffer[X],S,x,n.COLOR_ATTACHMENT0,pe,X);else Te(U.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,pe,0);P(x,ye)&&L(pe),t.unbindTexture()}S.depthBuffer&&A(S)}function $(S){const x=T(S)||a,U=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0,te=U.length;ee<te;ee++){const se=U[ee];if(P(se,x)){const ye=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(se).__webglTexture;t.bindTexture(ye,pe),L(ye),t.unbindTexture()}}}function ae(S){if(a&&S.samples>0&&ce(S)===!1){const x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],U=S.width,ee=S.height;let te=n.COLOR_BUFFER_BIT;const se=[],ye=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(S),X=S.isWebGLMultipleRenderTargets===!0;if(X)for(let Ie=0;Ie<x.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ie=0;Ie<x.length;Ie++){se.push(n.COLOR_ATTACHMENT0+Ie),S.depthBuffer&&se.push(ye);const Le=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Le===!1&&(S.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),X&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ie]),Le===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ye])),X){const Pe=i.get(x[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,U,ee,0,0,U,ee,te,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let Ie=0;Ie<x.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ie]);const Le=i.get(x[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Z(S){return Math.min(h,S.samples)}function ce(S){const x=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ne(S){const x=o.render.frame;g.get(S)!==x&&(g.set(S,x),S.update())}function xe(S,x){const U=S.colorSpace,ee=S.format,te=S.type;return S.isCompressedTexture===!0||S.format===Il||U!==zn&&U!==es&&(U===Be?a===!1?e.has("EXT_sRGB")===!0&&ee===un?(S.format=Il,S.minFilter=Kt,S.generateMipmaps=!1):x=Yf.sRGBToLinear(x):(ee!==un||te!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=de,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=me,this.rebindTextures=N,this.setupRenderTarget=O,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ce}function fS(n,e,t){const i=t.isWebGL2;function s(r,o=es){let a;if(r===Ti)return n.UNSIGNED_BYTE;if(r===Ff)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Bf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===U_)return n.BYTE;if(r===N_)return n.SHORT;if(r===pc)return n.UNSIGNED_SHORT;if(r===Of)return n.INT;if(r===xi)return n.UNSIGNED_INT;if(r===ei)return n.FLOAT;if(r===Fr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===O_)return n.ALPHA;if(r===un)return n.RGBA;if(r===F_)return n.LUMINANCE;if(r===B_)return n.LUMINANCE_ALPHA;if(r===Ji)return n.DEPTH_COMPONENT;if(r===js)return n.DEPTH_STENCIL;if(r===Il)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===z_)return n.RED;if(r===zf)return n.RED_INTEGER;if(r===k_)return n.RG;if(r===kf)return n.RG_INTEGER;if(r===Hf)return n.RGBA_INTEGER;if(r===Aa||r===wa||r===Ra||r===Ca)if(o===Be)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Aa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Aa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ra)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ca)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eu||r===Tu||r===bu||r===Au)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Eu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Au)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===H_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===wu||r===Ru)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===wu)return o===Be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ru)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cu||r===Lu||r===Pu||r===Iu||r===Du||r===Uu||r===Nu||r===Ou||r===Fu||r===Bu||r===zu||r===ku||r===Hu||r===Vu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Cu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Iu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Du)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ou)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ku)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===La)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===La)return o===Be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===V_||r===Gu||r===Wu||r===Xu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===La)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Gu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class pS extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mS={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ji;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class gS extends Ut{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Ji,u!==Ji&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ji&&(i=xi),i===void 0&&u===js&&(i=Zi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _S extends os{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const E=[],M=[],T=new Wt;T.layers.enable(1),T.viewport=new Je;const R=new Wt;R.layers.enable(2),R.viewport=new Je;const P=[T,R],L=new pS;L.layers.enable(1),L.layers.enable(2);let W=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=E[z];return j===void 0&&(j=new Qa,E[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=E[z];return j===void 0&&(j=new Qa,E[z]=j),j.getGripSpace()},this.getHand=function(z){let j=E[z];return j===void 0&&(j=new Qa,E[z]=j),j.getHandSpace()};function w(z){const j=M.indexOf(z.inputSource);if(j===-1)return;const me=E[j];me!==void 0&&(me.update(z.inputSource,z.frame,c||o),me.dispatchEvent({type:z.type,data:z.inputSource}))}function re(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",fe);for(let z=0;z<E.length;z++){const j=M[z];j!==null&&(M[z]=null,E[z].disconnect(j))}W=null,y=null,e.setRenderTarget(m),p=null,d=null,h=null,s=null,f=null,de.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",re),s.addEventListener("inputsourceschange",fe),_.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:p}),f=new ss(p.framebufferWidth,p.framebufferHeight,{format:un,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,me=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=_.stencil?js:Ji,me=_.stencil?Zi:xi);const Me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Me),s.updateRenderState({layers:[d]}),f=new ss(d.textureWidth,d.textureHeight,{format:un,type:Ti,depthTexture:new gS(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Re=e.properties.get(f);Re.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function fe(z){for(let j=0;j<z.removed.length;j++){const me=z.removed[j],ge=M.indexOf(me);ge>=0&&(M[ge]=null,E[ge].disconnect(me))}for(let j=0;j<z.added.length;j++){const me=z.added[j];let ge=M.indexOf(me);if(ge===-1){for(let Re=0;Re<E.length;Re++)if(Re>=M.length){M.push(me),ge=Re;break}else if(M[Re]===null){M[Re]=me,ge=Re;break}if(ge===-1)break}const Me=E[ge];Me&&Me.connect(me)}}const H=new I,Y=new I;function K(z,j,me){H.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(me.matrixWorld);const ge=H.distanceTo(Y),Me=j.projectionMatrix.elements,Re=me.projectionMatrix.elements,B=Me[14]/(Me[10]-1),ie=Me[14]/(Me[10]+1),le=(Me[9]+1)/Me[5],Ee=(Me[9]-1)/Me[5],Te=(Me[8]-1)/Me[0],v=(Re[8]+1)/Re[0],C=B*Te,A=B*v,N=ge/(-Te+v),O=N*-Te;j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(O),z.translateZ(N),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const $=B+N,ae=ie+N,Z=C-O,ce=A+(ge-O),ne=le*ie/ae*$,xe=Ee*ie/ae*$;z.projectionMatrix.makePerspective(Z,ce,ne,xe,$,ae),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function ue(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;L.near=R.near=T.near=z.near,L.far=R.far=T.far=z.far,(W!==L.near||y!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),W=L.near,y=L.far);const j=z.parent,me=L.cameras;ue(L,j);for(let ge=0;ge<me.length;ge++)ue(me[ge],j);me.length===2?K(L,T,R):L.projectionMatrix.copy(T.projectionMatrix),V(z,L,j)};function V(z,j,me){me===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(me.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const ge=z.children;for(let Me=0,Re=ge.length;Me<Re;Me++)ge[Me].updateMatrixWorld(!0);z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ys*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let G=null;function he(z,j){if(u=j.getViewerPose(c||o),g=j,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ge=!1;me.length!==L.cameras.length&&(L.cameras.length=0,ge=!0);for(let Me=0;Me<me.length;Me++){const Re=me[Me];let B=null;if(p!==null)B=p.getViewport(Re);else{const le=h.getViewSubImage(d,Re);B=le.viewport,Me===0&&(e.setRenderTargetTextures(f,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(f))}let ie=P[Me];ie===void 0&&(ie=new Wt,ie.layers.enable(Me),ie.viewport=new Je,P[Me]=ie),ie.matrix.fromArray(Re.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Re.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(B.x,B.y,B.width,B.height),Me===0&&(L.matrix.copy(ie.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ge===!0&&L.cameras.push(ie)}}for(let me=0;me<E.length;me++){const ge=M[me],Me=E[me];ge!==null&&Me!==void 0&&Me.update(ge,j,c||o)}G&&G(z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const de=new ip;de.setAnimationLoop(he),this.setAnimationLoop=function(z){G=z},this.dispose=function(){}}}function vS(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ep(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,M,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*M,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Zt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xS(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,M){const T=M.program;i.uniformBlockBinding(E,T)}function c(E,M){let T=s[E.id];T===void 0&&(g(E),T=u(E),s[E.id]=T,E.addEventListener("dispose",m));const R=M.program;i.updateUBOMapping(E,R);const P=e.render.frame;r[E.id]!==P&&(d(E),r[E.id]=P)}function u(E){const M=h();E.__bindingPointIndex=M;const T=n.createBuffer(),R=E.__size,P=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,T),T}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=s[E.id],T=E.uniforms,R=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let P=0,L=T.length;P<L;P++){const W=T[P];if(p(W,P,R)===!0){const y=W.__offset,w=Array.isArray(W.value)?W.value:[W.value];let re=0;for(let fe=0;fe<w.length;fe++){const H=w[fe],Y=_(H);typeof H=="number"?(W.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,y+re,W.__data)):H.isMatrix3?(W.__data[0]=H.elements[0],W.__data[1]=H.elements[1],W.__data[2]=H.elements[2],W.__data[3]=H.elements[0],W.__data[4]=H.elements[3],W.__data[5]=H.elements[4],W.__data[6]=H.elements[5],W.__data[7]=H.elements[0],W.__data[8]=H.elements[6],W.__data[9]=H.elements[7],W.__data[10]=H.elements[8],W.__data[11]=H.elements[0]):(H.toArray(W.__data,re),re+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,y,W.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,M,T){const R=E.value;if(T[M]===void 0){if(typeof R=="number")T[M]=R;else{const P=Array.isArray(R)?R:[R],L=[];for(let W=0;W<P.length;W++)L.push(P[W].clone());T[M]=L}return!0}else if(typeof R=="number"){if(T[M]!==R)return T[M]=R,!0}else{const P=Array.isArray(T[M])?T[M]:[T[M]],L=Array.isArray(R)?R:[R];for(let W=0;W<P.length;W++){const y=P[W];if(y.equals(L[W])===!1)return y.copy(L[W]),!0}}return!1}function g(E){const M=E.uniforms;let T=0;const R=16;let P=0;for(let L=0,W=M.length;L<W;L++){const y=M[L],w={boundary:0,storage:0},re=Array.isArray(y.value)?y.value:[y.value];for(let fe=0,H=re.length;fe<H;fe++){const Y=re[fe],K=_(Y);w.boundary+=K.boundary,w.storage+=K.storage}if(y.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=T,L>0){P=T%R;const fe=R-P;P!==0&&fe-w.boundary<0&&(T+=R-P,y.__offset=T)}T+=w.storage}return P=T%R,P>0&&(T+=R-P),E.__size=T,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}function MS(){const n=zr("canvas");return n.style.display="block",n}class lp{constructor(e={}){const{canvas:t=MS(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Be,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;const M=this;let T=!1,R=0,P=0,L=null,W=-1,y=null;const w=new Je,re=new Je;let fe=null;const H=new ke(0);let Y=0,K=t.width,ue=t.height,V=1,G=null,he=null;const de=new Je(0,0,K,ue),z=new Je(0,0,K,ue);let j=!1;const me=new fa;let ge=!1,Me=!1,Re=null;const B=new We,ie=new qe,le=new I,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return L===null?V:1}let v=i;function C(b,k){for(let Q=0;Q<b.length;Q++){const F=b[Q],J=t.getContext(F,k);if(J!==null)return J}return null}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fc}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",_e,!1),v===null){const k=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&k.shift(),v=C(k,b),v===null)throw C(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&v instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),v.getShaderPrecisionFormat===void 0&&(v.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let A,N,O,$,ae,Z,ce,ne,xe,S,x,U,ee,te,se,ye,pe,X,Ie,Le,Pe,Se,Ae,He;function it(){A=new LM(v),N=new TM(v,A,e),A.init(N),Se=new fS(v,A,N),O=new hS(v,A,N),$=new DM(v),ae=new Zy,Z=new dS(v,A,O,ae,N,Se,$),ce=new AM(M),ne=new CM(M),xe=new Gv(v,N),Ae=new SM(v,A,xe,N),S=new PM(v,xe,$,Ae),x=new FM(v,S,xe,$),Ie=new OM(v,N,Z),ye=new bM(ae),U=new $y(M,ce,ne,A,N,Ae,ye),ee=new vS(M,ae),te=new Qy,se=new rS(A,N),X=new yM(M,ce,ne,O,x,d,l),pe=new uS(M,x,N),He=new xS(v,$,N,O),Le=new EM(v,A,$,N),Pe=new IM(v,A,$,N),$.programs=U.programs,M.capabilities=N,M.extensions=A,M.properties=ae,M.renderLists=te,M.shadowMap=pe,M.state=O,M.info=$}it();const D=new _S(M,v);this.xr=D,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const b=A.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=A.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(K,ue,!1))},this.getSize=function(b){return b.set(K,ue)},this.setSize=function(b,k,Q=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,ue=k,t.width=Math.floor(b*V),t.height=Math.floor(k*V),Q===!0&&(t.style.width=b+"px",t.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(K*V,ue*V).floor()},this.setDrawingBufferSize=function(b,k,Q){K=b,ue=k,V=Q,t.width=Math.floor(b*Q),t.height=Math.floor(k*Q),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(de)},this.setViewport=function(b,k,Q,F){b.isVector4?de.set(b.x,b.y,b.z,b.w):de.set(b,k,Q,F),O.viewport(w.copy(de).multiplyScalar(V).floor())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,k,Q,F){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,k,Q,F),O.scissor(re.copy(z).multiplyScalar(V).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(b){O.setScissorTest(j=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){he=b},this.getClearColor=function(b){return b.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(b=!0,k=!0,Q=!0){let F=0;if(b){let J=!1;if(L!==null){const Ce=L.texture.format;J=Ce===Hf||Ce===kf||Ce===zf}if(J){const Ce=L.texture.type,De=Ce===Ti||Ce===xi||Ce===pc||Ce===Zi||Ce===Ff||Ce===Bf,Oe=X.getClearColor(),Fe=X.getClearAlpha(),je=Oe.r,Ne=Oe.g,Ve=Oe.b;De?(p[0]=je,p[1]=Ne,p[2]=Ve,p[3]=Fe,v.clearBufferuiv(v.COLOR,0,p)):(g[0]=je,g[1]=Ne,g[2]=Ve,g[3]=Fe,v.clearBufferiv(v.COLOR,0,g))}else F|=v.COLOR_BUFFER_BIT}k&&(F|=v.DEPTH_BUFFER_BIT),Q&&(F|=v.STENCIL_BUFFER_BIT),v.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),te.dispose(),se.dispose(),ae.dispose(),ce.dispose(),ne.dispose(),x.dispose(),Ae.dispose(),He.dispose(),U.dispose(),D.dispose(),D.removeEventListener("sessionstart",rt),D.removeEventListener("sessionend",Rn),Re&&(Re.dispose(),Re=null),zt.stop()};function be(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=$.autoReset,k=pe.enabled,Q=pe.autoUpdate,F=pe.needsUpdate,J=pe.type;it(),$.autoReset=b,pe.enabled=k,pe.autoUpdate=Q,pe.needsUpdate=F,pe.type=J}function _e(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function we(b){const k=b.target;k.removeEventListener("dispose",we),Ze(k)}function Ze(b){ut(b),ae.remove(b)}function ut(b){const k=ae.get(b).programs;k!==void 0&&(k.forEach(function(Q){U.releaseProgram(Q)}),b.isShaderMaterial&&U.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,Q,F,J,Ce){k===null&&(k=Ee);const De=J.isMesh&&J.matrixWorld.determinant()<0,Oe=Np(b,k,Q,F,J);O.setMaterial(F,De);let Fe=Q.index,je=1;if(F.wireframe===!0){if(Fe=S.getWireframeAttribute(Q),Fe===void 0)return;je=2}const Ne=Q.drawRange,Ve=Q.attributes.position;let dt=Ne.start*je,pt=(Ne.start+Ne.count)*je;Ce!==null&&(dt=Math.max(dt,Ce.start*je),pt=Math.min(pt,(Ce.start+Ce.count)*je)),Fe!==null?(dt=Math.max(dt,0),pt=Math.min(pt,Fe.count)):Ve!=null&&(dt=Math.max(dt,0),pt=Math.min(pt,Ve.count));const on=pt-dt;if(on<0||on===1/0)return;Ae.setup(J,F,Oe,Q,Fe);let Hn,gt=Le;if(Fe!==null&&(Hn=xe.get(Fe),gt=Pe,gt.setIndex(Hn)),J.isMesh)F.wireframe===!0?(O.setLineWidth(F.wireframeLinewidth*Te()),gt.setMode(v.LINES)):gt.setMode(v.TRIANGLES);else if(J.isLine){let Ye=F.linewidth;Ye===void 0&&(Ye=1),O.setLineWidth(Ye*Te()),J.isLineSegments?gt.setMode(v.LINES):J.isLineLoop?gt.setMode(v.LINE_LOOP):gt.setMode(v.LINE_STRIP)}else J.isPoints?gt.setMode(v.POINTS):J.isSprite&&gt.setMode(v.TRIANGLES);if(J.isInstancedMesh)gt.renderInstances(dt,on,J.count);else if(Q.isInstancedBufferGeometry){const Ye=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,_a=Math.min(Q.instanceCount,Ye);gt.renderInstances(dt,on,_a)}else gt.render(dt,on)},this.compile=function(b,k){function Q(F,J,Ce){F.transparent===!0&&F.side===Un&&F.forceSinglePass===!1?(F.side=Zt,F.needsUpdate=!0,qr(F,J,Ce),F.side=ri,F.needsUpdate=!0,qr(F,J,Ce),F.side=Un):qr(F,J,Ce)}m=se.get(b),m.init(),E.push(m),b.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(M._useLegacyLights),b.traverse(function(F){const J=F.material;if(J)if(Array.isArray(J))for(let Ce=0;Ce<J.length;Ce++){const De=J[Ce];Q(De,b,F)}else Q(J,b,F)}),E.pop(),m=null};let mt=null;function ai(b){mt&&mt(b)}function rt(){zt.stop()}function Rn(){zt.start()}const zt=new ip;zt.setAnimationLoop(ai),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(b){mt=b,D.setAnimationLoop(b),b===null?zt.stop():zt.start()},D.addEventListener("sessionstart",rt),D.addEventListener("sessionend",Rn),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(k),k=D.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,k,L),m=se.get(b,E.length),m.init(),E.push(m),B.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),me.setFromProjectionMatrix(B),Me=this.localClippingEnabled,ge=ye.init(this.clippingPlanes,Me),_=te.get(b,f.length),_.init(),f.push(_),Lc(b,k,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(G,he),this.info.render.frame++,ge===!0&&ye.beginShadows();const Q=m.state.shadowsArray;if(pe.render(Q,b,k),ge===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(_,b),m.setupLights(M._useLegacyLights),k.isArrayCamera){const F=k.cameras;for(let J=0,Ce=F.length;J<Ce;J++){const De=F[J];Pc(_,b,De,De.viewport)}}else Pc(_,b,k);L!==null&&(Z.updateMultisampleRenderTarget(L),Z.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(M,b,k),Ae.resetDefaultState(),W=-1,y=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Lc(b,k,Q,F){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||me.intersectsSprite(b)){F&&le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(B);const De=x.update(b),Oe=b.material;Oe.visible&&_.push(b,De,Oe,Q,le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||me.intersectsObject(b))){const De=x.update(b),Oe=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),le.copy(b.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),le.copy(De.boundingSphere.center)),le.applyMatrix4(b.matrixWorld).applyMatrix4(B)),Array.isArray(Oe)){const Fe=De.groups;for(let je=0,Ne=Fe.length;je<Ne;je++){const Ve=Fe[je],dt=Oe[Ve.materialIndex];dt&&dt.visible&&_.push(b,De,dt,Q,le.z,Ve)}}else Oe.visible&&_.push(b,De,Oe,Q,le.z,null)}}const Ce=b.children;for(let De=0,Oe=Ce.length;De<Oe;De++)Lc(Ce[De],k,Q,F)}function Pc(b,k,Q,F){const J=b.opaque,Ce=b.transmissive,De=b.transparent;m.setupLightsView(Q),ge===!0&&ye.setGlobalState(M.clippingPlanes,Q),Ce.length>0&&Up(J,Ce,k,Q),F&&O.viewport(w.copy(F)),J.length>0&&jr(J,k,Q),Ce.length>0&&jr(Ce,k,Q),De.length>0&&jr(De,k,Q),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Up(b,k,Q,F){const J=N.isWebGL2;Re===null&&(Re=new ss(1,1,{generateMipmaps:!0,type:A.has("EXT_color_buffer_half_float")?Fr:Ti,minFilter:is,samples:J?4:0})),M.getDrawingBufferSize(ie),J?Re.setSize(ie.x,ie.y):Re.setSize(Yo(ie.x),Yo(ie.y));const Ce=M.getRenderTarget();M.setRenderTarget(Re),M.getClearColor(H),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear();const De=M.toneMapping;M.toneMapping=Ei,jr(b,Q,F),Z.updateMultisampleRenderTarget(Re),Z.updateRenderTargetMipmap(Re);let Oe=!1;for(let Fe=0,je=k.length;Fe<je;Fe++){const Ne=k[Fe],Ve=Ne.object,dt=Ne.geometry,pt=Ne.material,on=Ne.group;if(pt.side===Un&&Ve.layers.test(F.layers)){const Hn=pt.side;pt.side=Zt,pt.needsUpdate=!0,Ic(Ve,Q,F,dt,pt,on),pt.side=Hn,pt.needsUpdate=!0,Oe=!0}}Oe===!0&&(Z.updateMultisampleRenderTarget(Re),Z.updateRenderTargetMipmap(Re)),M.setRenderTarget(Ce),M.setClearColor(H,Y),M.toneMapping=De}function jr(b,k,Q){const F=k.isScene===!0?k.overrideMaterial:null;for(let J=0,Ce=b.length;J<Ce;J++){const De=b[J],Oe=De.object,Fe=De.geometry,je=F===null?De.material:F,Ne=De.group;Oe.layers.test(Q.layers)&&Ic(Oe,k,Q,Fe,je,Ne)}}function Ic(b,k,Q,F,J,Ce){b.onBeforeRender(M,k,Q,F,J,Ce),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),J.onBeforeRender(M,k,Q,F,b,Ce),J.transparent===!0&&J.side===Un&&J.forceSinglePass===!1?(J.side=Zt,J.needsUpdate=!0,M.renderBufferDirect(Q,k,F,J,b,Ce),J.side=ri,J.needsUpdate=!0,M.renderBufferDirect(Q,k,F,J,b,Ce),J.side=Un):M.renderBufferDirect(Q,k,F,J,b,Ce),b.onAfterRender(M,k,Q,F,J,Ce)}function qr(b,k,Q){k.isScene!==!0&&(k=Ee);const F=ae.get(b),J=m.state.lights,Ce=m.state.shadowsArray,De=J.state.version,Oe=U.getParameters(b,J.state,Ce,k,Q),Fe=U.getProgramCacheKey(Oe);let je=F.programs;F.environment=b.isMeshStandardMaterial?k.environment:null,F.fog=k.fog,F.envMap=(b.isMeshStandardMaterial?ne:ce).get(b.envMap||F.environment),je===void 0&&(b.addEventListener("dispose",we),je=new Map,F.programs=je);let Ne=je.get(Fe);if(Ne!==void 0){if(F.currentProgram===Ne&&F.lightsStateVersion===De)return Dc(b,Oe),Ne}else Oe.uniforms=U.getUniforms(b),b.onBuild(Q,Oe,M),b.onBeforeCompile(Oe,M),Ne=U.acquireProgram(Oe,Fe),je.set(Fe,Ne),F.uniforms=Oe.uniforms;const Ve=F.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ve.clippingPlanes=ye.uniform),Dc(b,Oe),F.needsLights=Fp(b),F.lightsStateVersion=De,F.needsLights&&(Ve.ambientLightColor.value=J.state.ambient,Ve.lightProbe.value=J.state.probe,Ve.directionalLights.value=J.state.directional,Ve.directionalLightShadows.value=J.state.directionalShadow,Ve.spotLights.value=J.state.spot,Ve.spotLightShadows.value=J.state.spotShadow,Ve.rectAreaLights.value=J.state.rectArea,Ve.ltc_1.value=J.state.rectAreaLTC1,Ve.ltc_2.value=J.state.rectAreaLTC2,Ve.pointLights.value=J.state.point,Ve.pointLightShadows.value=J.state.pointShadow,Ve.hemisphereLights.value=J.state.hemi,Ve.directionalShadowMap.value=J.state.directionalShadowMap,Ve.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ve.spotShadowMap.value=J.state.spotShadowMap,Ve.spotLightMatrix.value=J.state.spotLightMatrix,Ve.spotLightMap.value=J.state.spotLightMap,Ve.pointShadowMap.value=J.state.pointShadowMap,Ve.pointShadowMatrix.value=J.state.pointShadowMatrix);const dt=Ne.getUniforms(),pt=Fo.seqWithValue(dt.seq,Ve);return F.currentProgram=Ne,F.uniformsList=pt,Ne}function Dc(b,k){const Q=ae.get(b);Q.outputColorSpace=k.outputColorSpace,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function Np(b,k,Q,F,J){k.isScene!==!0&&(k=Ee),Z.resetTextureUnits();const Ce=k.fog,De=F.isMeshStandardMaterial?k.environment:null,Oe=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:zn,Fe=(F.isMeshStandardMaterial?ne:ce).get(F.envMap||De),je=F.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ne=!!Q.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ve=!!Q.morphAttributes.position,dt=!!Q.morphAttributes.normal,pt=!!Q.morphAttributes.color;let on=Ei;F.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(on=M.toneMapping);const Hn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gt=Hn!==void 0?Hn.length:0,Ye=ae.get(F),_a=m.state.lights;if(ge===!0&&(Me===!0||b!==y)){const Qt=b===y&&F.id===W;ye.setState(F,b,Qt)}let _t=!1;F.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==_a.state.version||Ye.outputColorSpace!==Oe||J.isInstancedMesh&&Ye.instancing===!1||!J.isInstancedMesh&&Ye.instancing===!0||J.isSkinnedMesh&&Ye.skinning===!1||!J.isSkinnedMesh&&Ye.skinning===!0||J.isInstancedMesh&&Ye.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ye.instancingColor===!1&&J.instanceColor!==null||Ye.envMap!==Fe||F.fog===!0&&Ye.fog!==Ce||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ye.numPlanes||Ye.numIntersection!==ye.numIntersection)||Ye.vertexAlphas!==je||Ye.vertexTangents!==Ne||Ye.morphTargets!==Ve||Ye.morphNormals!==dt||Ye.morphColors!==pt||Ye.toneMapping!==on||N.isWebGL2===!0&&Ye.morphTargetsCount!==gt)&&(_t=!0):(_t=!0,Ye.__version=F.version);let Li=Ye.currentProgram;_t===!0&&(Li=qr(F,k,J));let Uc=!1,lr=!1,va=!1;const kt=Li.getUniforms(),Pi=Ye.uniforms;if(O.useProgram(Li.program)&&(Uc=!0,lr=!0,va=!0),F.id!==W&&(W=F.id,lr=!0),Uc||y!==b){if(kt.setValue(v,"projectionMatrix",b.projectionMatrix),N.logarithmicDepthBuffer&&kt.setValue(v,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),y!==b&&(y=b,lr=!0,va=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Qt=kt.map.cameraPosition;Qt!==void 0&&Qt.setValue(v,le.setFromMatrixPosition(b.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&kt.setValue(v,"isOrthographic",b.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||J.isSkinnedMesh)&&kt.setValue(v,"viewMatrix",b.matrixWorldInverse)}if(J.isSkinnedMesh){kt.setOptional(v,J,"bindMatrix"),kt.setOptional(v,J,"bindMatrixInverse");const Qt=J.skeleton;Qt&&(N.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),kt.setValue(v,"boneTexture",Qt.boneTexture,Z),kt.setValue(v,"boneTextureSize",Qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xa=Q.morphAttributes;if((xa.position!==void 0||xa.normal!==void 0||xa.color!==void 0&&N.isWebGL2===!0)&&Ie.update(J,Q,Li),(lr||Ye.receiveShadow!==J.receiveShadow)&&(Ye.receiveShadow=J.receiveShadow,kt.setValue(v,"receiveShadow",J.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Pi.envMap.value=Fe,Pi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),lr&&(kt.setValue(v,"toneMappingExposure",M.toneMappingExposure),Ye.needsLights&&Op(Pi,va),Ce&&F.fog===!0&&ee.refreshFogUniforms(Pi,Ce),ee.refreshMaterialUniforms(Pi,F,V,ue,Re),Fo.upload(v,Ye.uniformsList,Pi,Z)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Fo.upload(v,Ye.uniformsList,Pi,Z),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&kt.setValue(v,"center",J.center),kt.setValue(v,"modelViewMatrix",J.modelViewMatrix),kt.setValue(v,"normalMatrix",J.normalMatrix),kt.setValue(v,"modelMatrix",J.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Qt=F.uniformsGroups;for(let Ma=0,Bp=Qt.length;Ma<Bp;Ma++)if(N.isWebGL2){const Nc=Qt[Ma];He.update(Nc,Li),He.bind(Nc,Li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Li}function Op(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Fp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,k,Q){ae.get(b.texture).__webglTexture=k,ae.get(b.depthTexture).__webglTexture=Q;const F=ae.get(b);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=Q===void 0,F.__autoAllocateDepthBuffer||A.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,k){const Q=ae.get(b);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,Q=0){L=b,R=k,P=Q;let F=!0,J=null,Ce=!1,De=!1;if(b){const Fe=ae.get(b);Fe.__useDefaultFramebuffer!==void 0?(O.bindFramebuffer(v.FRAMEBUFFER,null),F=!1):Fe.__webglFramebuffer===void 0?Z.setupRenderTarget(b):Fe.__hasExternalTextures&&Z.rebindTextures(b,ae.get(b.texture).__webglTexture,ae.get(b.depthTexture).__webglTexture);const je=b.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(De=!0);const Ne=ae.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?J=Ne[k][Q]:J=Ne[k],Ce=!0):N.isWebGL2&&b.samples>0&&Z.useMultisampledRTT(b)===!1?J=ae.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?J=Ne[Q]:J=Ne,w.copy(b.viewport),re.copy(b.scissor),fe=b.scissorTest}else w.copy(de).multiplyScalar(V).floor(),re.copy(z).multiplyScalar(V).floor(),fe=j;if(O.bindFramebuffer(v.FRAMEBUFFER,J)&&N.drawBuffers&&F&&O.drawBuffers(b,J),O.viewport(w),O.scissor(re),O.setScissorTest(fe),Ce){const Fe=ae.get(b.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+k,Fe.__webglTexture,Q)}else if(De){const Fe=ae.get(b.texture),je=k||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Fe.__webglTexture,Q||0,je)}W=-1},this.readRenderTargetPixels=function(b,k,Q,F,J,Ce,De){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){O.bindFramebuffer(v.FRAMEBUFFER,Oe);try{const Fe=b.texture,je=Fe.format,Ne=Fe.type;if(je!==un&&Se.convert(je)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ne===Fr&&(A.has("EXT_color_buffer_half_float")||N.isWebGL2&&A.has("EXT_color_buffer_float"));if(Ne!==Ti&&Se.convert(Ne)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===ei&&(N.isWebGL2||A.has("OES_texture_float")||A.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-F&&Q>=0&&Q<=b.height-J&&v.readPixels(k,Q,F,J,Se.convert(je),Se.convert(Ne),Ce)}finally{const Fe=L!==null?ae.get(L).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(b,k,Q=0){const F=Math.pow(2,-Q),J=Math.floor(k.image.width*F),Ce=Math.floor(k.image.height*F);Z.setTexture2D(k,0),v.copyTexSubImage2D(v.TEXTURE_2D,Q,0,0,b.x,b.y,J,Ce),O.unbindTexture()},this.copyTextureToTexture=function(b,k,Q,F=0){const J=k.image.width,Ce=k.image.height,De=Se.convert(Q.format),Oe=Se.convert(Q.type);Z.setTexture2D(Q,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,Q.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,Q.unpackAlignment),k.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,F,b.x,b.y,J,Ce,De,Oe,k.image.data):k.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,F,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,De,k.mipmaps[0].data):v.texSubImage2D(v.TEXTURE_2D,F,b.x,b.y,De,Oe,k.image),F===0&&Q.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),O.unbindTexture()},this.copyTextureToTexture3D=function(b,k,Q,F,J=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=b.max.x-b.min.x+1,De=b.max.y-b.min.y+1,Oe=b.max.z-b.min.z+1,Fe=Se.convert(F.format),je=Se.convert(F.type);let Ne;if(F.isData3DTexture)Z.setTexture3D(F,0),Ne=v.TEXTURE_3D;else if(F.isDataArrayTexture)Z.setTexture2DArray(F,0),Ne=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,F.unpackAlignment);const Ve=v.getParameter(v.UNPACK_ROW_LENGTH),dt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),pt=v.getParameter(v.UNPACK_SKIP_PIXELS),on=v.getParameter(v.UNPACK_SKIP_ROWS),Hn=v.getParameter(v.UNPACK_SKIP_IMAGES),gt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,gt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,gt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,b.min.x),v.pixelStorei(v.UNPACK_SKIP_ROWS,b.min.y),v.pixelStorei(v.UNPACK_SKIP_IMAGES,b.min.z),Q.isDataTexture||Q.isData3DTexture?v.texSubImage3D(Ne,J,k.x,k.y,k.z,Ce,De,Oe,Fe,je,gt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),v.compressedTexSubImage3D(Ne,J,k.x,k.y,k.z,Ce,De,Oe,Fe,gt.data)):v.texSubImage3D(Ne,J,k.x,k.y,k.z,Ce,De,Oe,Fe,je,gt),v.pixelStorei(v.UNPACK_ROW_LENGTH,Ve),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,dt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,pt),v.pixelStorei(v.UNPACK_SKIP_ROWS,on),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Hn),J===0&&F.generateMipmaps&&v.generateMipmap(Ne),O.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),O.unbindTexture()},this.resetState=function(){R=0,P=0,L=null,O.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Be?Qi:Gf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qi?Be:zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class yS extends lp{}yS.prototype.isWebGL1Renderer=!0;class SS extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class cp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new I;class ii{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ii(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Uh=new I,Nh=new Je,Oh=new Je,ES=new I,Fh=new We,bs=new I,el=new pn,Bh=new We,tl=new Gr;class TS extends Xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)bs.fromBufferAttribute(t,i),this.applyBoneTransform(i,bs),this.boundingBox.expandByPoint(bs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)bs.fromBufferAttribute(t,i),this.applyBoneTransform(i,bs),this.boundingSphere.expandByPoint(bs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(s),e.ray.intersectsSphere(el)!==!1&&(Bh.copy(s).invert(),tl.copy(e.ray).applyMatrix4(Bh),!(this.boundingBox!==null&&tl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Nh.fromBufferAttribute(s.attributes.skinIndex,e),Oh.fromBufferAttribute(s.attributes.skinWeight,e),Uh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Oh.getComponent(r);if(o!==0){const a=Nh.getComponent(r);Fh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(ES.copy(Uh).applyMatrix4(Fh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class up extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bS extends Ut{constructor(e=null,t=1,i=1,s,r,o,a,l,c=bt,u=bt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zh=new We,AS=new We;class yc{constructor(e=[],t=[]){this.uuid=An(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new We;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:AS;zh.multiplyMatrices(a,t[r]),zh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new yc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=jf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new bS(t,e,e,un,ei);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new up),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class kh extends jt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const As=new We,Hh=new We,yo=[],Vh=new rn,wS=new We,pr=new Xt,mr=new pn;class RS extends Xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kh(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),Vh.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(Vh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),mr.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(i),e.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),Hh.multiplyMatrices(i,As),pr.matrixWorld=Hh,pr.raycast(e,yo);for(let o=0,a=yo.length;o<a;o++){const l=yo[o];l.instanceId=r,l.object=this,t.push(l)}yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new kh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class hp extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gh=new I,Wh=new I,Xh=new We,nl=new Gr,So=new pn;class Sc extends ht{constructor(e=new mn,t=new hp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Gh.fromBufferAttribute(t,s-1),Wh.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Gh.distanceTo(Wh);e.setAttribute("lineDistance",new fn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(s),So.radius+=r,e.ray.intersectsSphere(So)===!1)return;Xh.copy(s).invert(),nl.copy(e.ray).applyMatrix4(Xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,d=new I,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const f=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let M=f,T=E-1;M<T;M+=p){const R=g.getX(M),P=g.getX(M+1);if(c.fromBufferAttribute(m,R),u.fromBufferAttribute(m,P),nl.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const W=e.ray.origin.distanceTo(d);W<e.near||W>e.far||t.push({distance:W,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),E=Math.min(m.count,o.start+o.count);for(let M=f,T=E-1;M<T;M+=p){if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,M+1),nl.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const jh=new I,qh=new I;class CS extends Sc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)jh.fromBufferAttribute(t,s),qh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+jh.distanceTo(qh);e.setAttribute("lineDistance",new fn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class LS extends Sc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class dp extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yh=new We,Nl=new Gr,Eo=new pn,To=new I;class PS extends ht{constructor(e=new mn,t=new dp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;Yh.copy(s).invert(),Nl.copy(e.ray).applyMatrix4(Yh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);To.fromBufferAttribute(h,m),Kh(To,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)To.fromBufferAttribute(h,g),Kh(To,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Kh(n,e,t,i,s,r,o){const a=Nl.distanceSqToPoint(n);if(a<t){const l=new I;Nl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class IS extends mn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,s=new I,r=new I;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,p=h.count;for(let g=d,_=d+p;g<_;g+=3)for(let m=0;m<3;m++){const f=a.getX(g+m),E=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,E),$h(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),$h(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new fn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function $h(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}class Ec extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wf,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ci extends Ec{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function fi(n,e,t){return fp(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function bo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function fp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function DS(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Zh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function pp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Xr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class US extends Xr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ju,endingEnd:ju}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qu:r=e,a=2*t-i;break;case Yu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qu:o=e,l=2*i-t;break;case Yu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,T=p*m-p*_;for(let R=0;R!==a;++R)r[R]=f*o[u+R]+E*o[c+R]+M*o[l+R]+T*o[h+R];return r}}class NS extends Xr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class OS extends Xr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new OS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new NS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new US(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case qs:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return qs;case this.InterpolantFactoryMethodSmooth:return Pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=fi(i,r,o),this.values=fi(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&fp(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=fi(this.times),t=fi(this.values),i=this.getValueSize(),s=this.getInterpolation()===Pa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,d=h-i,p=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=fi(e,0,o),this.values=fi(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=fi(this.times,0),t=fi(this.values,0),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=qs;class rr extends kn{}rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Br;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class mp extends kn{}mp.prototype.ValueTypeName="color";class $s extends kn{}$s.prototype.ValueTypeName="number";class FS extends Xr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ri.slerpFlat(r,0,o,c-a,o,c,l);return r}}class rs extends kn{InterpolantFactoryMethodLinear(e){return new FS(this.times,this.values,this.getValueSize(),e)}}rs.prototype.ValueTypeName="quaternion";rs.prototype.DefaultInterpolation=qs;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends kn{}or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Br;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends kn{}Zs.prototype.ValueTypeName="vector";class BS{constructor(e,t=-1,i,s=G_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=An(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(kS(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(kn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=DS(l);l=Zh(l,1,u),c=Zh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new $s(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,p,g,_){if(p.length!==0){const m=[],f=[];pp(p,m,f,g),m.length!==0&&_.push(new h(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let E=0;E!==d[g].morphTargets.length;++E){const M=d[g];m.push(M.time),f.push(M.morphTarget===_?1:0)}s.push(new $s(".morphTargetInfluence["+_+"]",m,f))}l=p.length*o}else{const p=".bones["+t[h].name+"]";i(Zs,p+".position",d,"pos",s),i(rs,p+".quaternion",d,"rot",s),i(Zs,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zS(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $s;case"vector":case"vector2":case"vector3":case"vector4":return Zs;case"color":return mp;case"quaternion":return rs;case"bool":case"boolean":return rr;case"string":return or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function kS(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zS(n.type);if(n.times===void 0){const t=[],i=[];pp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Js={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class HS{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const VS=new HS;class ar{constructor(e){this.manager=e!==void 0?e:VS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ar.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class GS extends Error{constructor(e,t){super(e),this.response=t}}class gp extends ar{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Js.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:i,onError:s});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Yn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){E();function E(){h.read().then(({done:M,value:T})=>{if(M)f.close();else{_+=T.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let P=0,L=u.length;P<L;P++){const W=u[P];W.onProgress&&W.onProgress(R)}f.enqueue(T),E()}})}}});return new Response(m)}else throw new GS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Js.add(e,c);const u=Yn[e];delete Yn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Yn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Yn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class WS extends ar{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Js.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=zr("img");function l(){u(),Js.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class XS extends ar{constructor(e){super(e)}load(e,t,i,s){const r=new Ut,o=new WS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ma extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const il=new We,Jh=new I,Qh=new I;class Tc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jh),Qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qh),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jS extends Tc{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ys*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class qS extends ma{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ed=new We,gr=new I,sl=new I;class YS extends Tc{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),i.position.copy(gr),sl.copy(i.position),sl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(sl),i.updateMatrixWorld(),s.makeTranslation(-gr.x,-gr.y,-gr.z),ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed)}}class _p extends ma{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new YS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class KS extends Tc{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $S extends ma{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new KS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZS extends ma{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ol{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class JS extends mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class QS extends ar{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Js.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Js.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const bc="\\[\\]\\.:\\/",eE=new RegExp("["+bc+"]","g"),Ac="[^"+bc+"]",tE="[^"+bc.replace("\\.","")+"]",nE=/((?:WC+[\/:])*)/.source.replace("WC",Ac),iE=/(WCOD+)?/.source.replace("WCOD",tE),sE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),rE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),oE=new RegExp("^"+nE+iE+sE+rE+"$"),aE=["material","materials","bones","map"];class lE{constructor(e,t,i){const s=i||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class tt{constructor(e,t,i){this.path=t,this.parsedPath=i||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,i):new tt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eE,"")}static parseTrackName(e){const t=oE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);aE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=lE;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fl extends cp{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class td{constructor(e,t,i=0,s=1/0){this.ray=new Gr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new gc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Bl(e,this,i,t),i.sort(nd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Bl(e[s],this,i,t);return i.sort(nd),i}}function nd(n,e){return n.distance-e.distance}function Bl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Bl(s[r],e,t,!0)}}const id=new I,Ao=new I;class cE{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){id.subVectors(e,this.start),Ao.subVectors(this.end,this.start);const i=Ao.dot(Ao);let r=Ao.dot(id)/i;return t&&(r=It(r,0,1)),r}closestPointToPoint(e,t,i){const s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);const sd=new rn,wo=new I;class vp extends JS{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new fn(e,3)),this.setAttribute("uv",new fn(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Fl(t,6,1);return this.setAttribute("instanceStart",new ii(i,3,0)),this.setAttribute("instanceEnd",new ii(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Fl(t,6,1);return this.setAttribute("instanceColorStart",new ii(i,3,0)),this.setAttribute("instanceColorEnd",new ii(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new IS(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),sd.setFromBufferAttribute(t),this.boundingBox.union(sd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)wo.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(wo)),wo.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(wo));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}ve.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new qe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};$t.line={uniforms:_c.merge([ve.common,ve.fog,ve.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class wc extends wi{constructor(e){super({type:"LineMaterial",uniforms:_c.clone($t.line.uniforms),vertexShader:$t.line.vertexShader,fragmentShader:$t.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const rd=new I,od=new I,Ct=new Je,Lt=new Je,Ln=new Je,rl=new I,ol=new We,Pt=new cE,ad=new I,Ro=new rn,Co=new pn,Pn=new Je;let On,ts;function ld(n,e,t){return Pn.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Pn.multiplyScalar(1/Pn.w),Pn.x=ts/t.width,Pn.y=ts/t.height,Pn.applyMatrix4(n.projectionMatrixInverse),Pn.multiplyScalar(1/Pn.w),Math.abs(Math.max(Pn.x,Pn.y))}function uE(n,e){const t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){Pt.start.fromBufferAttribute(s,a),Pt.end.fromBufferAttribute(r,a),Pt.applyMatrix4(t);const c=new I,u=new I;On.distanceSqToSegment(Pt.start,Pt.end,u,c),u.distanceTo(c)<ts*.5&&e.push({point:u,pointOnLine:c,distance:On.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function hE(n,e,t){const i=e.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;On.at(1,Ln),Ln.w=1,Ln.applyMatrix4(e.matrixWorldInverse),Ln.applyMatrix4(i),Ln.multiplyScalar(1/Ln.w),Ln.x*=r.x/2,Ln.y*=r.y/2,Ln.z=0,rl.copy(Ln),ol.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=u;d<p;d++){if(Ct.fromBufferAttribute(l,d),Lt.fromBufferAttribute(c,d),Ct.w=1,Lt.w=1,Ct.applyMatrix4(ol),Lt.applyMatrix4(ol),Ct.z>h&&Lt.z>h)continue;if(Ct.z>h){const M=Ct.z-Lt.z,T=(Ct.z-h)/M;Ct.lerp(Lt,T)}else if(Lt.z>h){const M=Lt.z-Ct.z,T=(Lt.z-h)/M;Lt.lerp(Ct,T)}Ct.applyMatrix4(i),Lt.applyMatrix4(i),Ct.multiplyScalar(1/Ct.w),Lt.multiplyScalar(1/Lt.w),Ct.x*=r.x/2,Ct.y*=r.y/2,Lt.x*=r.x/2,Lt.y*=r.y/2,Pt.start.copy(Ct),Pt.start.z=0,Pt.end.copy(Lt),Pt.end.z=0;const _=Pt.closestPointToPointParameter(rl,!0);Pt.at(_,ad);const m=Jn.lerp(Ct.z,Lt.z,_),f=m>=-1&&m<=1,E=rl.distanceTo(ad)<ts*.5;if(f&&E){Pt.start.fromBufferAttribute(l,d),Pt.end.fromBufferAttribute(c,d),Pt.start.applyMatrix4(o),Pt.end.applyMatrix4(o);const M=new I,T=new I;On.distanceSqToSegment(Pt.start,Pt.end,T,M),t.push({point:T,pointOnLine:M,distance:On.origin.distanceTo(T),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}class dE extends Xt{constructor(e=new vp,t=new wc({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)rd.fromBufferAttribute(t,o),od.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+rd.distanceTo(od);const r=new Fl(s,2,1);return e.setAttribute("instanceDistanceStart",new ii(r,1,0)),e.setAttribute("instanceDistanceEnd",new ii(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;On=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;ts=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Co.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=ts*.5;else{const h=Math.max(s.near,Co.distanceToPoint(On.origin));c=ld(s,h,l.resolution)}if(Co.radius+=c,On.intersectsSphere(Co)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ro.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=ts*.5;else{const h=Math.max(s.near,Ro.distanceToPoint(On.origin));u=ld(s,h,l.resolution)}Ro.expandByScalar(u),On.intersectsBox(Ro)!==!1&&(i?uE(this,t):hE(this,s,t))}}class xp extends vp{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setColors(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class fE extends dE{constructor(e=new xp,t=new wc({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function cd(n,e){if(e===W_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ll||e===Vf){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Ll)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class pE extends ar{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new RE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new vE(t)}),this.register(function(t){return new bE(t)}),this.register(function(t){return new ME(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new gE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new PE(t)})}load(e,t,i,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Ol.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new gp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Mp){try{o[Ke.KHR_BINARY_GLTF]=new IE(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new XE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ke.KHR_MATERIALS_UNLIT:o[h]=new _E;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[h]=new DE(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[h]=new UE;break;case Ke.KHR_MESH_QUANTIZATION:o[h]=new NE;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function mE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gE{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ke(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $S(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _p(u),c.distance=h;break;case"spot":c=new qS(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,_i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class _E{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return ni}extendParams(e,t,i){const s=[];e.color=new ke(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Be))}return Promise.all(s)}}class vE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class xE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(a,a)}return Promise.all(r)}}class ME{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class yE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Be)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class SE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class EE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ke(a[0],a[1],a[2]),Promise.all(r)}}class TE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class bE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ke(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Be)),Promise.all(r)}}class AE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class wE{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class RE{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class CE{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class LE{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,s.mode,s.filter),p})})}else return null}}class PE{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==ln.TRIANGLES&&c.mode!==ln.TRIANGLE_STRIP&&c.mode!==ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const _=new We,m=new I,f=new Ri,E=new I(1,1,1),M=new RS(g.geometry,g.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,T),l.SCALE&&E.fromBufferAttribute(l.SCALE,T),M.setMatrixAt(T,_.compose(m,f,E));for(const T in l)T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,l[T]);ht.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Mp="glTF",_r=12,ud={JSON:1313821514,BIN:5130562};class IE{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_r),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-_r,r=new DataView(e,_r);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===ud.JSON){const c=new Uint8Array(e,_r+o,a);this.content=i.decode(c)}else if(l===ud.BIN){const c=_r+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class DE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=zl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=zl[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],p=zs[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){s.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],_=l[p];_!==void 0&&(g.normalized=_)}h(d)},a,c)})})}}class UE{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class NE{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class yp extends Xr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,d=h*h,p=d*h,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,E=1-m,M=f-d+h;for(let T=0;T!==a;T++){const R=o[_+T+a],P=o[_+T+l]*u,L=o[g+T+a],W=o[g+T]*u;r[T]=E*R+M*P+m*L+f*W}return r}}const OE=new Ri;class FE extends yp{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return OE.fromArray(r).normalize().toArray(r),r}}const ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hd={9728:bt,9729:Kt,9984:Cl,9985:Nf,9986:Oo,9987:is},dd={33071:cn,33648:jo,10497:Xs},al={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BE={CUBICSPLINE:void 0,LINEAR:qs,STEP:Br},ll={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ec({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),n.DefaultMaterial}function Bi(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function _i(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function HE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VE(n){let e;const t=n.extensions&&n.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+cl(t.attributes):e=n.indices+":"+cl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+cl(n.targets[i]);return e}function cl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function kl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function GE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const WE=new We;class XE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new XS(this.options.manager):this.textureLoader=new QS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};Bi(r,a,s),_i(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Ol.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=al[s.type],a=zs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new jt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=al[s.type],c=zs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==h){const f=Math.floor(d/p),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let M=t.cache.get(E);M||(_=new c(a,f*p,s.count*p/u),M=new cp(_,p/u),t.cache.add(E,M)),m=new ii(M,l,d%p/u,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new jt(_,l,g);if(s.sparse!==void 0){const f=al.SCALAR,E=zs[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,T=s.sparse.values.byteOffset||0,R=new E(o[1],M,s.sparse.count*f),P=new c(o[2],T,s.sparse.count*l);a!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized));for(let L=0,W=R.length;L<W;L++){const y=R[L];if(m.setX(y,P[L*l]),l>=2&&m.setY(y,P[L*l+1]),l>=3&&m.setZ(y,P[L*l+2]),l>=4&&m.setW(y,P[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=hd[d.magFilter]||Kt,u.minFilter=hd[d.minFilter]||is,u.wrapS=dd[d.wrapS]||Xs,u.wrapT=dd[d.wrapT]||Xs,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ut(_);m.needsUpdate=!0,d(m)}),t.load(Ol.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||GE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new dp,Fn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new hp,Fn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ec}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const h=s[Ke.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Be)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Un);const u=r.alphaMode||ll.OPAQUE;if(u===ll.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ll.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ni&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new qe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==ni&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ni&&(a.emissive=new ke().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==ni&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Be)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),_i(h,r),t.associations.set(h,{materials:e}),r.extensions&&Bi(s,h,r),h})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=VE(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=fd(new mn,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?zE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let f;const E=c[p];if(m.mode===ln.TRIANGLES||m.mode===ln.TRIANGLE_STRIP||m.mode===ln.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new TS(_,E):new Xt(_,E),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===ln.TRIANGLE_STRIP?f.geometry=cd(f.geometry,Vf):m.mode===ln.TRIANGLE_FAN&&(f.geometry=cd(f.geometry,Ll));else if(m.mode===ln.LINES)f=new CS(_,E);else if(m.mode===ln.LINE_STRIP)f=new Sc(_,E);else if(m.mode===ln.LINE_LOOP)f=new LS(_,E);else if(m.mode===ln.POINTS)f=new PS(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&HE(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),_i(f,r),m.extensions&&Bi(s,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Bi(s,h[0],r),h[0];const d=new ji;r.extensions&&Bi(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Wt(Jn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new xc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),_i(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new We;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new yc(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const p=s.channels[h],g=s.samplers[p.sampler],_=p.target,m=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,E=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",E)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],g=h[2],_=h[3],m=h[4],f=[];for(let E=0,M=d.length;E<M;E++){const T=d[E],R=p[E],P=g[E],L=_[E],W=m[E];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const y=i._createAnimationTracks(T,R,P,L,W);if(y)for(let w=0;w<y.length;w++)f.push(y[w])}return new BS(r,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,WE)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new up:c.length>1?u=new ji:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),_i(u,r),r.extensions&&Bi(i,u,r),r.matrix!==void 0){const h=new We;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new ji;i.name&&(r.name=s.createUniqueName(i.name)),_i(r,i),i.extensions&&Bi(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of s.associations)(d instanceof Fn||d instanceof Ut)&&h.set(d,p);return u.traverse(d=>{const p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];pi[r.path]===pi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(pi[r.path]){case pi.weights:c=$s;break;case pi.rotation:c=rs;break;case pi.position:case pi.scale:c=Zs;break;default:switch(i.itemSize){case 1:c=$s;break;case 2:case 3:default:c=Zs;break}break}const u=s.interpolation!==void 0?BE[s.interpolation]:qs,h=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+pi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=kl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof rs?FE:yp;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function jE(n,e,t){const i=e.attributes,s=new rn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=kl(zs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,l=new I;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=kl(zs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new pn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function fd(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=zl[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return _i(n,e),jE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?kE(n,e.targets,t):n})}const ws=new Wr(0,0,0,"YXZ"),Rs=new I,qE={type:"change"},YE={type:"lock"},KE={type:"unlock"},pd=Math.PI/2;class $E extends os{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=ZE.bind(this),this._onPointerlockChange=JE.bind(this),this._onPointerlockError=QE.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;Rs.setFromMatrixColumn(t.matrix,0),Rs.crossVectors(t.up,Rs),t.position.addScaledVector(Rs,e)}moveRight(e){const t=this.camera;Rs.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Rs,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function ZE(n){if(this.isLocked===!1)return;const e=n.movementX||n.mozMovementX||n.webkitMovementX||0,t=n.movementY||n.mozMovementY||n.webkitMovementY||0,i=this.camera;ws.setFromQuaternion(i.quaternion),ws.y-=e*.002*this.pointerSpeed,ws.x-=t*.002*this.pointerSpeed,ws.x=Math.max(pd-this.maxPolarAngle,Math.min(pd-this.minPolarAngle,ws.x)),i.quaternion.setFromEuler(ws),this.dispatchEvent(qE)}function JE(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(YE),this.isLocked=!0):(this.dispatchEvent(KE),this.isLocked=!1)}function QE(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const eT="/3D-jimmy/assets/shelf-f3c2b710.glb",tT="/3D-jimmy/assets/map_pointer-2d7216c4.glb";const nT={data(){return{isModalOpen:!0}},methods:{showModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1},requestDeviceMotion(){typeof DeviceMotionEvent.requestPermission=="function"&&DeviceMotionEvent.requestPermission().then(n=>{n==="granted"&&(window.addEventListener("devicemotion",e=>{}),window.addEventListener("deviceorientation",e=>{}))}).catch(console.error)},requestDeviceOrientation(){typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(n=>{n==="granted"&&window.addEventListener("deviceorientation",()=>{})}).catch(console.error):console.log("Or")}},mounted(){navigator.permissions.query({name:"accelerometer"}).then(n=>{n.state==="granted"?this.isModalOpen=!1:n.state})}},iT={key:0,class:"modal"},sT={class:"modal-dialog"},rT={class:"modal-content"},oT={class:"modal-header"},aT=oe("h1",{class:"modal-title fs-5"},"Request Permission",-1),lT=oe("div",{class:"modal-footer"},[oe("p",null,"We need some permission to run the navigation")],-1);function cT(n,e,t,i,s,r){return ft(),At("div",null,[s.isModalOpen?(ft(),At("div",iT,[oe("div",sT,[oe("div",rT,[oe("div",oT,[aT,oe("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:e[0]||(e[0]=(...o)=>r.closeModal&&r.closeModal(...o))})]),oe("button",{type:"button",class:"btn btn-primary my-3 mx-auto",onClick:e[1]||(e[1]=(...o)=>r.requestDeviceMotion&&r.requestDeviceMotion(...o)),style:{"max-width":"200px"}},"Request Permission"),lT])])])):Wo("",!0)])}const uT=Vr(nT,[["render",cT]]);/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const xt={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},md={itemsToShow:{default:xt.itemsToShow,type:Number},itemsToScroll:{default:xt.itemsToScroll,type:Number},wrapAround:{default:xt.wrapAround,type:Boolean},throttle:{default:xt.throttle,type:Number},snapAlign:{default:xt.snapAlign,validator(n){return["start","end","center","center-even","center-odd"].includes(n)}},transition:{default:xt.transition,type:Number},breakpoints:{default:xt.breakpoints,type:Object},autoplay:{default:xt.autoplay,type:Number},pauseAutoplayOnHover:{default:xt.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:xt.mouseDrag,type:Boolean},touchDrag:{default:xt.touchDrag,type:Boolean},dir:{default:xt.dir,validator(n){return["rtl","ltr"].includes(n)}},i18n:{default:xt.i18n,type:Object},settings:{default(){return{}},type:Object}};function hT({config:n,slidesCount:e}){const{snapAlign:t,wrapAround:i,itemsToShow:s=1}=n;if(i)return Math.max(e-1,0);let r;switch(t){case"start":r=e-s;break;case"end":r=e-1;break;case"center":case"center-odd":r=e-Math.ceil((s-.5)/2);break;case"center-even":r=e-Math.ceil(s/2);break;default:r=0;break}return Math.max(r,0)}function dT({config:n,slidesCount:e}){const{wrapAround:t,snapAlign:i,itemsToShow:s=1}=n;let r=0;if(t||s>e)return r;switch(i){case"start":r=0;break;case"end":r=s-1;break;case"center":case"center-odd":r=Math.floor((s-1)/2);break;case"center-even":r=Math.floor((s-2)/2);break;default:r=0;break}return r}function Hl({val:n,max:e,min:t}){return e<t?n:Math.min(Math.max(n,t),e)}function fT({config:n,currentSlide:e,slidesCount:t}){const{snapAlign:i,wrapAround:s,itemsToShow:r=1}=n;let o=e;switch(i){case"center":case"center-odd":o-=(r-1)/2;break;case"center-even":o-=(r-2)/2;break;case"end":o-=r-1;break}return s?o:Hl({val:o,max:t-r,min:0})}function Sp(n){return n?n.reduce((e,t)=>{var i;return t.type===Mt?[...e,...Sp(t.children)]:((i=t.type)===null||i===void 0?void 0:i.name)==="CarouselSlide"?[...e,t]:e},[]):[]}function Ko({val:n,max:e,min:t=0}){return n>e?Ko({val:n-(e+1),max:e,min:t}):n<t?Ko({val:n+(e+1),max:e,min:t}):n}function pT(n,e){let t;return e?function(...i){const s=this;t||(n.apply(s,i),t=!0,setTimeout(()=>t=!1,e))}:n}function mT(n,e){let t;return function(...i){t&&clearTimeout(t),t=setTimeout(()=>{n(...i),t=null},e)}}function Ep(n="",e={}){return Object.entries(e).reduce((t,[i,s])=>t.replace(`{${i}}`,String(s)),n)}var gT=Hr({name:"ARIA",setup(){const n=et("config",dn(Object.assign({},xt))),e=et("currentSlide",lt(0)),t=et("slidesCount",lt(0));return()=>wt("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Ep(n.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:t.value}))}}),_T=Hr({name:"Carousel",props:md,setup(n,{slots:e,emit:t,expose:i}){var s;const r=lt(null),o=lt([]),a=lt(0),l=lt(0),c=dn(Object.assign({},xt));let u=Object.assign({},xt),h;const d=lt((s=n.modelValue)!==null&&s!==void 0?s:0),p=lt(0),g=lt(0),_=lt(0),m=lt(0);let f,E;nn("config",c),nn("slidesCount",l),nn("currentSlide",d),nn("maxSlide",_),nn("minSlide",m),nn("slideWidth",a);function M(){h=Object.assign({},n.breakpoints),u=Object.assign(Object.assign(Object.assign({},u),n),{i18n:Object.assign(Object.assign({},u.i18n),n.i18n),breakpoints:void 0}),R(u)}function T(){if(!h||!Object.keys(h).length)return;const A=Object.keys(h).map(O=>Number(O)).sort((O,$)=>+$-+O);let N=Object.assign({},u);A.some(O=>{const $=window.matchMedia(`(min-width: ${O}px)`).matches;return $&&(N=Object.assign(Object.assign({},N),h[O])),$}),R(N)}function R(A){Object.entries(A).forEach(([N,O])=>c[N]=O)}const P=mT(()=>{T(),L()},16);function L(){if(!r.value)return;const A=r.value.getBoundingClientRect();a.value=A.width/c.itemsToShow}function W(){l.value<=0||(g.value=Math.ceil((l.value-1)/2),_.value=hT({config:c,slidesCount:l.value}),m.value=dT({config:c,slidesCount:l.value}),c.wrapAround||(d.value=Hl({val:d.value,max:_.value,min:m.value})))}lc(()=>{oc(()=>L()),setTimeout(()=>L(),1e3),T(),de(),window.addEventListener("resize",P,{passive:!0}),t("init")}),la(()=>{E&&clearTimeout(E),f&&clearInterval(f),window.removeEventListener("resize",P,{passive:!0})});let y=!1;const w={x:0,y:0},re={x:0,y:0},fe=dn({x:0,y:0}),H=lt(!1),Y=lt(!1),K=()=>{H.value=!0},ue=()=>{H.value=!1};function V(A){["INPUT","TEXTAREA","SELECT"].includes(A.target.tagName)||(y=A.type==="touchstart",y||A.preventDefault(),!(!y&&A.button!==0||j.value)&&(w.x=y?A.touches[0].clientX:A.clientX,w.y=y?A.touches[0].clientY:A.clientY,document.addEventListener(y?"touchmove":"mousemove",G,!0),document.addEventListener(y?"touchend":"mouseup",he,!0)))}const G=pT(A=>{Y.value=!0,re.x=y?A.touches[0].clientX:A.clientX,re.y=y?A.touches[0].clientY:A.clientY;const N=re.x-w.x,O=re.y-w.y;fe.y=O,fe.x=N},c.throttle);function he(){const A=c.dir==="rtl"?-1:1,N=Math.sign(fe.x)*.4,O=Math.round(fe.x/a.value+N)*A;if(O&&!y){const $=ae=>{ae.stopPropagation(),window.removeEventListener("click",$,!0)};window.addEventListener("click",$,!0)}me(d.value-O),fe.x=0,fe.y=0,Y.value=!1,document.removeEventListener(y?"touchmove":"mousemove",G,!0),document.removeEventListener(y?"touchend":"mouseup",he,!0)}function de(){!c.autoplay||c.autoplay<=0||(f=setInterval(()=>{c.pauseAutoplayOnHover&&H.value||ge()},c.autoplay))}function z(){f&&(clearInterval(f),f=null),de()}const j=lt(!1);function me(A){const N=c.wrapAround?A:Hl({val:A,max:_.value,min:m.value});d.value===N||j.value||(t("slide-start",{slidingToIndex:A,currentSlideIndex:d.value,prevSlideIndex:p.value,slidesCount:l.value}),j.value=!0,p.value=d.value,d.value=N,E=setTimeout(()=>{if(c.wrapAround){const O=Ko({val:N,max:_.value,min:0});O!==d.value&&(d.value=O,t("loop",{currentSlideIndex:d.value,slidingToIndex:A}))}t("update:modelValue",d.value),t("slide-end",{currentSlideIndex:d.value,prevSlideIndex:p.value,slidesCount:l.value}),j.value=!1,z()},c.transition))}function ge(){me(d.value+c.itemsToScroll)}function Me(){me(d.value-c.itemsToScroll)}const Re={slideTo:me,next:ge,prev:Me};nn("nav",Re),nn("isSliding",j);const B=sn(()=>fT({config:c,currentSlide:d.value,slidesCount:l.value}));nn("slidesToScroll",B);const ie=sn(()=>{const A=c.dir==="rtl"?-1:1,N=B.value*a.value*A;return{transform:`translateX(${fe.x-N}px)`,transition:`${j.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${l.value*a.value}px`:"",width:"100%"}});function le(){M(),T(),W(),L(),z()}Object.keys(md).forEach(A=>{["modelValue"].includes(A)||Ki(()=>n[A],le)}),Ki(()=>n.modelValue,A=>{A!==d.value&&me(Number(A))}),Ki(l,W),t("before-init"),M();const Ee={config:c,slidesCount:l,slideWidth:a,next:ge,prev:Me,slideTo:me,currentSlide:d,maxSlide:_,minSlide:m,middleSlide:g};i({updateBreakpointsConfigs:T,updateSlidesData:W,updateSlideWidth:L,initDefaultConfigs:M,restartCarousel:le,slideTo:me,next:ge,prev:Me,nav:Re,data:Ee});const Te=e.default||e.slides,v=e.addons,C=dn(Ee);return()=>{const A=Sp(Te?.(C)),N=v?.(C)||[];A.forEach((Z,ce)=>Z.props.index=ce);let O=A;if(c.wrapAround){const Z=A.map((ne,xe)=>Ai(ne,{index:-A.length+xe,isClone:!0,key:`clone-before-${xe}`})),ce=A.map((ne,xe)=>Ai(ne,{index:A.length+xe,isClone:!0,key:`clone-after-${xe}`}));O=[...Z,...A,...ce]}o.value=A,l.value=Math.max(A.length,1);const $=wt("ol",{class:"carousel__track",style:ie.value,onMousedownCapture:c.mouseDrag?V:null,onTouchstartPassiveCapture:c.touchDrag?V:null},O),ae=wt("div",{class:"carousel__viewport"},$);return wt("section",{ref:r,class:{carousel:!0,"is-sliding":j.value,"is-dragging":Y.value,"is-hover":H.value,"carousel--rtl":c.dir==="rtl"},dir:c.dir,"aria-label":c.i18n.ariaGallery,tabindex:"0",onMouseenter:K,onMouseleave:ue},[ae,N,wt(gT)])}}}),Vl;(function(n){n.arrowUp="arrowUp",n.arrowDown="arrowDown",n.arrowRight="arrowRight",n.arrowLeft="arrowLeft"})(Vl||(Vl={}));const vT={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function xT(n){return n in Vl}const Gl=n=>{const e=et("config",dn(Object.assign({},xt))),t=String(n.name),i=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!xT(t))return;const s=vT[t],r=wt("path",{d:s}),o=e.i18n[i]||n.title||t,a=wt("title",o);return wt("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":o},[a,r])};Gl.props={name:String,title:String};const MT=(n,{slots:e,attrs:t})=>{const{next:i,prev:s}=e||{},r=et("config",dn(Object.assign({},xt))),o=et("maxSlide",lt(1)),a=et("minSlide",lt(1)),l=et("currentSlide",lt(1)),c=et("nav",{}),{dir:u,wrapAround:h,i18n:d}=r,p=u==="rtl",g=wt("button",{type:"button",class:["carousel__prev",!h&&l.value<=a.value&&"carousel__prev--disabled",t?.class],"aria-label":d.ariaPreviousSlide,onClick:c.prev},s?.()||wt(Gl,{name:p?"arrowRight":"arrowLeft"})),_=wt("button",{type:"button",class:["carousel__next",!h&&l.value>=o.value&&"carousel__next--disabled",t?.class],"aria-label":d.ariaNextSlide,onClick:c.next},i?.()||wt(Gl,{name:p?"arrowLeft":"arrowRight"}));return[g,_]},yT=()=>{const n=et("config",dn(Object.assign({},xt))),e=et("maxSlide",lt(1)),t=et("minSlide",lt(1)),i=et("currentSlide",lt(1)),s=et("nav",{}),r=a=>Ko({val:i.value,max:e.value,min:0})===a,o=[];for(let a=t.value;a<e.value+1;a++){const l=wt("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(a)},"aria-label":Ep(n.i18n.ariaNavigateToSlide,{slideNumber:a+1}),onClick:()=>s.slideTo(a)}),c=wt("li",{class:"carousel__pagination-item",key:a},l);o.push(c)}return wt("ol",{class:"carousel__pagination"},o)};var ST=Hr({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(n,{slots:e}){const t=et("config",dn(Object.assign({},xt))),i=et("currentSlide",lt(0)),s=et("slidesToScroll",lt(0)),r=et("isSliding",lt(!1)),o=()=>n.index===i.value,a=()=>n.index===i.value-1,l=()=>n.index===i.value+1,c=()=>{const u=Math.floor(s.value),h=Math.ceil(s.value+t.itemsToShow-1);return n.index>=u&&n.index<=h};return()=>{var u;return wt("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":n.isClone,"carousel__slide--visible":c(),"carousel__slide--active":o(),"carousel__slide--prev":a(),"carousel__slide--next":l(),"carousel__slide--sliding":r.value},"aria-hidden":!c()},(u=e.default)===null||u===void 0?void 0:u.call(e))}}});const ET={components:{Carousel:_T,Navigation:MT,Pagination:yT,Slide:ST},props:{title:{type:String,required:!0},imageSrc:{type:Array,required:!1,default:()=>[]},showModal:{type:Boolean,required:!0},closeModal:{type:Function,required:!0},products:{type:Array,required:!1,default:()=>[]}}},TT=n=>(zm("data-v-f5d260e3"),n=n(),km(),n),bT={key:0,class:"modal"},AT={class:"modal-dialog modal-lg"},wT={class:"modal-content"},RT={class:"modal-header"},CT={class:"modal-title fs-5"},LT={class:"modal-body"},PT=["src"],IT={class:"table"},DT=TT(()=>oe("thead",null,[oe("tr",null,[oe("th",null,"Product"),oe("th",null,"Manufacturer"),oe("th",null,"Price")])],-1));function UT(n,e,t,i,s,r){const o=Xi("Slide"),a=Xi("Navigation"),l=Xi("Pagination"),c=Xi("Carousel");return t.showModal?(ft(),At("div",bT,[oe("div",AT,[oe("div",wT,[oe("div",RT,[oe("h1",CT,Ls(t.title),1),oe("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:e[0]||(e[0]=(...u)=>t.closeModal&&t.closeModal(...u))})]),oe("div",LT,[t.imageSrc.length>0?(ft(),Go(c,{key:0,autoplay:5e3,"wrap-around":!0},{addons:Qn(()=>[ct(a),ct(l)]),default:Qn(()=>[(ft(!0),At(Mt,null,Hs(t.imageSrc,(u,h)=>(ft(),Go(o,{key:h},{default:Qn(()=>[oe("img",{src:u,alt:"Carousel Image",class:"banner"},null,8,PT)]),_:2},1024))),128))]),_:1})):Wo("",!0),oe("table",IT,[DT,oe("tbody",null,[(ft(!0),At(Mt,null,Hs(t.products,u=>(ft(),At("tr",null,[oe("td",null,Ls(u.name),1),oe("td",null,Ls(u.manufacturer),1),oe("td",null,Ls(u.price),1)]))),256))])])])])])])):Wo("",!0)}const NT=Vr(ET,[["render",UT],["__scopeId","data-v-f5d260e3"]]);var qt=new SS,Lo=null;let OT=new as(4.5,8,.1),gd=null;var FT=new ni({color:9474192}),_d=0;const BT={props:{sentIndex:{type:Number,required:!0}},components:{Modal:NT},data(){return{showModal:!1,modalTitle:"title",modalProducts:[],modalImageSrc:[],mapData:[],wallsData:[],points:[],shelfs:[],path:[],objects3D:[],startPoint:null,startPointSelectedIndex:null,destinationPoint:null,destinationPointSelectedIndex:null,camera:new Wt(75,window.innerWidth/window.innerHeight,.1,1e3),renderer:new lp,ambientLight:new ZS(16777215,.8),pointLight:new _p(16777215,.3,0,1e-4),loader:new pE,pointerLockControls:null,cameraDirection:new I,movement:{forward:!1,backward:!1,left:!1,right:!1,rotateLeft:!1,rotateRight:!1},orientation:{initialAlpha:0,initialBeta:0,initialGamma:0},motion:{previousAcc:null,stepCount:0,forwardAnimation:null},objectRaycaster:new td,cameraRaycaster:new td,mouse:new qe,cameraDirection:new I}},mounted(){this.fetchJSONFile()},methods:{async fetchJSONFile(){try{const e=await(await fetch("https://treantprotectorgo.github.io/json/A.json")).json();this.mapData=e.map,this.wallsData=e.wall,this.points=e.points,this.shelfs=e.shelfs,this.path=e.path,this.startPoint=this.points[0].name,this.startPointSelectedIndex=0,console.log("Received index:",this.sentIndex),this.sentIndex==4?(this.destinationPoint=this.points[4].name,this.destinationPointSelectedIndex=4):this.sentIndex==3?(this.destinationPoint=this.points[3].name,this.destinationPointSelectedIndex=3):(this.destinationPoint=this.points[1].name,this.destinationPointSelectedIndex=1),this.init3D(),this.initLisnter(),this.animate()}catch(n){console.log(n)}},changeStartPoint(n){this.startPointSelectedIndex=n,this.setCameraPosition(this.points[this.startPointSelectedIndex].x,this.points[this.startPointSelectedIndex].y,this.points[this.startPointSelectedIndex].z),qt.remove(qt.getObjectByName("Path")),this.loadPath()},changeDestinationPoint(n){this.destinationPointSelectedIndex=n,this.setPointerPosition(this.points[this.destinationPointSelectedIndex].x,this.points[this.destinationPointSelectedIndex].y,this.points[this.destinationPointSelectedIndex].z),qt.remove(qt.getObjectByName("Path")),this.loadPath()},init3D(){qt.background=new ke(11259375),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),qt.add(this.ambientLight),this.pointLight.position.set(0,10,0),this.pointLight.castShadow=!0,qt.add(this.pointLight),this.setCameraPosition(this.points[this.startPointSelectedIndex].x,this.points[this.startPointSelectedIndex].y,this.points[this.startPointSelectedIndex].z),this.loadMap(),this.loadWall(),this.loadShelf(),this.loadPointer(),this.loadPath(),this.pointerLockControls=new $E(this.camera,this.renderer.domElement)},initLisnter(){document.addEventListener("keydown",n=>{this.handleKeyDown(n.code)}),document.addEventListener("keyup",n=>{this.handleKeyUp(n.code)}),window.addEventListener("resize",this.handleResize),window.addEventListener("deviceorientation",this.handleOrientation,!1),window.addEventListener("devicemotion",this.handleMotion,!1),document.querySelectorAll("canvas")[0].addEventListener("click",n=>this.handleClickOnObject(n))},setCameraPosition(n,e,t){this.camera.position.x=n,this.camera.position.y=e,this.camera.position.z=t},loadMap(){gd=new as(this.mapData.x,this.mapData.y,this.mapData.z);let n=new Xt(gd,new ni({color:8421504}));n.position.set(0,-.05,0),qt.add(n)},loadWall(){for(let i=0;i<this.wallsData.length;i++){let s=new Xt(OT,FT);s.position.set(this.wallsData[i].location.x,this.wallsData[i].location.y,this.wallsData[i].location.z);var n=Jn.degToRad(this.wallsData[i].rotation.aplha),e=Jn.degToRad(this.wallsData[i].rotation.beta),t=Jn.degToRad(this.wallsData[i].rotation.gamma);s.rotation.set(n,e,t),qt.add(s),this.objects3D.push(s)}},loadShelf(){for(let n=0;n<this.shelfs.length;n++)this.loader.load(eT,function(e,t){return function(i){i.scene.scale.set(1,1,1),i.scene.position.set(e.location.x,e.location.y,e.location.z);var s=Jn.degToRad(e.rotation.aplha),r=Jn.degToRad(e.rotation.beta),o=Jn.degToRad(e.rotation.gamma);i.scene.rotation.set(s,r,o),i.scene.name="Shelf "+n,qt.add(i.scene),t.push(i.scene)}}(this.shelfs[n],this.objects3D),void 0,function(e){console.error(e)})},loadPointer(){this.loader.load(tT,function(n){return function(e){e.scene.scale.set(1,1,1),e.scene.position.set(n.x,n.y,n.z),e.scene.name="Pointer",Lo=e.scene,qt.add(e.scene)}}(this.points[this.destinationPointSelectedIndex]),void 0,function(n){console.error(n)})},loadPath(){for(var n=this.path[this.startPointSelectedIndex][this.destinationPointSelectedIndex],e=[],t=0;t<n.length;t++)e.push(n[t].x),e.push(n[t].y),e.push(n[t].z);var i=new xp;i.setPositions(e);var s=new wc({color:14492194,linewidth:5,resolution:new qe(window.innerWidth,window.innerHeight)}),r=new fE(i,s);r.name="Path",qt.add(r)},handleKeyDown(n){switch(n){case"KeyW":this.movement.forward=!0;break;case"KeyS":this.movement.backward=!0;break;case"KeyA":this.movement.left=!0;break;case"KeyD":this.movement.right=!0;break;case"KeyQ":this.movement.rotateLeft=!0;break;case"KeyE":this.movement.rotateRight=!0;break}this.checkCameraCollision()&&(this.movement.forward=!1)},handleKeyUp(n){switch(n){case"KeyW":this.movement.forward=!1;break;case"KeyS":this.movement.backward=!1;break;case"KeyA":this.movement.left=!1;break;case"KeyD":this.movement.right=!1;break;case"KeyQ":this.movement.rotateLeft=!1;break;case"KeyE":this.movement.rotateRight=!1;break}},handleResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},handleOrientation(n){this.orientation.initialAlpha===0&&this.orientation.initialBeta===0&&this.orientation.initialGamma===0&&(this.orientation.initialAlpha=n.alpha||0,this.orientation.initialBeta=n.beta||0,this.orientation.initialGamma=n.gamma||0);var e=(n.alpha||0)-this.orientation.initialAlpha,t=e;e=e-_d,_d=t,e=Jn.degToRad(e),this.camera.rotation.y+=e},handleMotion(n){if(Math.abs(n.acceleration.x)<1&&Math.abs(n.acceleration.y)<1&&Math.abs(n.acceleration.z)<1||Math.abs(n.acceleration.x)>3&&Math.abs(n.acceleration.y)>3&&Math.abs(n.acceleration.z)>3)return;const s=n.accelerationIncludingGravity;if(!s)return;const r=this.getMagnitude(s);if(this.previousAcc){const o=Math.abs(r-this.previousAcc);if(this.checkCameraCollision())return;o>.3&&(this.motion.stepCount++,this.camera.getWorldDirection(this.cameraDirection),this.pointerLockControls.getObject().position.add(this.cameraDirection.multiplyScalar(.05)))}this.previousAcc=r},getMagnitude(n){const{x:e,y:t,z:i}=n;return Math.sqrt(e*e+t*t+i*i)},checkCameraCollision(){const n=new fa,e=new We().multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse);n.setFromProjectionMatrix(e);const t=2.5;for(let i=0;i<this.objects3D.length;i++){const s=this.objects3D[i],r=new rn().setFromObject(s);if(r.isEmpty())continue;const o=new I;if(r.getCenter(o),this.camera.position.distanceTo(o)<=t&&n.intersectsBox(r))return!0}},updateCameraPosition(){if(this.checkCameraCollision()){this.movement.forward=!1;return}},setPointerPosition(n,e,t){Lo.position.x=n,Lo.position.y=e,Lo.position.z=t},handleClickOnObject(n){this.mouse.x=n.clientX/window.innerWidth*2-1,this.mouse.y=-(n.clientY/window.innerHeight)*2+1,this.performCollisionDetection()},findTopParent(n){let e=n;for(;e.parent.name!=="";)e=e.parent;return e},updateObjectRaycaster(){this.objectRaycaster.setFromCamera(this.mouse,this.camera)},performCollisionDetection(){this.updateObjectRaycaster();const n=this.objectRaycaster.intersectObjects(qt.children,!0);var e=10;if(n.length>0&&n[0].distance<e){console.log(n);for(var t=0;t<n.length;t++){var i=n[t],s=this.findTopParent(i.object);let r=s.name.split(" "),o=Number(r[1]);this.modalTitle=this.shelfs[o].name,this.modalImageSrc=this.shelfs[o].img,this.modalProducts=this.shelfs[o].products,this.openModal();break}}},animate(){requestAnimationFrame(this.animate);var n=.1,e=.01;this.movement.forward&&(this.camera.getWorldDirection(this.cameraDirection),this.pointerLockControls.getObject().position.add(this.cameraDirection.multiplyScalar(n))),this.movement.backward&&(this.camera.getWorldDirection(this.cameraDirection),this.pointerLockControls.getObject().position.add(this.cameraDirection.multiplyScalar(-n))),this.movement.left&&(this.camera.getWorldDirection(this.cameraDirection),this.pointerLockControls.getObject().position.add(this.cameraDirection.cross(new I(0,1,0)).normalize().multiplyScalar(-n))),this.movement.right&&(this.camera.getWorldDirection(this.cameraDirection),this.pointerLockControls.getObject().position.add(this.cameraDirection.cross(new I(0,1,0)).normalize().multiplyScalar(n))),this.movement.rotateLeft&&(this.pointerLockControls.getObject().rotation.y+=e),this.movement.rotateRight&&(this.pointerLockControls.getObject().rotation.y-=e),this.updateCameraPosition(),this.renderer.render(qt,this.camera)},openModal(){this.showModal=!0},closeModal(){this.showModal=!1}}},zT={class:"InputSection d-flex justify-content-evenly py-2"},kT={class:"col-5"},HT={class:"Selection input-group"},VT=oe("label",{class:"input-group-text",for:"sPoint"},"Start",-1),GT=["value"],WT={class:"col-5"},XT={class:"Selection input-group col-5"},jT=oe("label",{class:"input-group-text",for:"dPoint"},"End",-1),qT=["value"],YT=oe("div",{style:{position:"absolute","z-index":"100","background-color":"white",opacity:"0.5",bottom:"0"}},null,-1),KT={class:"row w-100 fixed-bottom m-0",style:{opacity:"0.5",position:"absolute"}},$T=oe("span",{class:"material-symbols-outlined"}," turn_left ",-1),ZT=[$T],JT=oe("span",{class:"material-symbols-outlined"}," straight ",-1),QT=[JT],eb=oe("span",{class:"material-symbols-outlined"}," turn_right ",-1),tb=[eb],nb=oe("div",{class:"fixed-bottom mx-auto"},null,-1);function ib(n,e,t,i,s,r){const o=Xi("Modal");return ft(),At(Mt,null,[oe("div",zT,[oe("div",kT,[oe("div",HT,[VT,qc(oe("select",{class:"form-select","onUpdate:modelValue":e[0]||(e[0]=a=>s.startPoint=a),id:"sPoint",onChange:e[1]||(e[1]=a=>r.changeStartPoint(a.target.selectedIndex))},[(ft(!0),At(Mt,null,Hs(s.points,a=>(ft(),At("option",{value:a.name,key:a.name},Ls(a.name),9,GT))),128))],544),[[pu,s.startPoint]])])]),oe("div",WT,[oe("div",XT,[jT,qc(oe("select",{class:"form-select","onUpdate:modelValue":e[2]||(e[2]=a=>s.destinationPoint=a),id:"dPoint",onChange:e[3]||(e[3]=a=>r.changeDestinationPoint(a.target.selectedIndex))},[(ft(!0),At(Mt,null,Hs(s.points,a=>(ft(),At("option",{value:a.name,key:a.name},Ls(a.name),9,qT))),128))],544),[[pu,s.destinationPoint]])])])]),YT,oe("div",KT,[oe("button",{type:"button",class:"btn btn-primary col",onTouchstart:e[4]||(e[4]=a=>this.movement.rotateLeft=!0),onTouchend:e[5]||(e[5]=a=>this.movement.rotateLeft=!1)},ZT,32),oe("button",{type:"button",class:"btn btn-primary col",onTouchstart:e[6]||(e[6]=a=>this.movement.forward=!0),onTouchend:e[7]||(e[7]=a=>this.movement.forward=!1)},QT,32),oe("button",{type:"button",class:"btn btn-primary col",onTouchstart:e[8]||(e[8]=a=>this.movement.rotateRight=!0),onTouchend:e[9]||(e[9]=a=>this.movement.rotateRight=!1)},tb,32)]),s.showModal?(ft(),Go(o,{key:0,products:s.modalProducts,imageSrc:s.modalImageSrc,title:s.modalTitle,showModal:s.showModal,closeModal:r.closeModal,style:{"z-index":"1050"}},null,8,["products","imageSrc","title","showModal","closeModal"])):Wo("",!0),nb],64)}const sb=Vr(BT,[["render",ib]]),rb="modulepreload",ob=function(n){return"/3D-jimmy/"+n},vd={},ab=function(e,t,i){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=ob(r),r in vd)return;vd[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":rb,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};await ab(()=>import("./A-dc06ddff.js"),[]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const vr=typeof window<"u";function lb(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const at=Object.assign;function ul(n,e){const t={};for(const i in e){const s=e[i];t[i]=wn(s)?s.map(n):n(s)}return t}const Rr=()=>{},wn=Array.isArray;function hl(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=db(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function cb(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function ub(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Qs(e.matched[i],t.matched[s])&&Tp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Qs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Tp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!hb(n[t],e[t]))return!1;return!0}function hb(n,e){return wn(n)?xd(n,e):wn(e)?xd(e,n):n===e}function xd(n,e){return wn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function db(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var $o;(function(n){n.pop="pop",n.push="push"})($o||($o={}));var Md;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Md||(Md={}));function fb(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const pb=()=>({left:window.pageXOffset,top:window.pageYOffset});function mb(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=fb(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function yd(n,e){return(history.state?history.state.position-e:-1)+n}const Wl=new Map;function gb(n,e){Wl.set(n,e)}function _b(n){const e=Wl.get(n);return Wl.delete(n),e}function vb(n){return typeof n=="string"||n&&typeof n=="object"}function bp(n){return typeof n=="string"||typeof n=="symbol"}const mi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ap=Symbol("");var Sd;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Sd||(Sd={}));function er(n,e){return at(new Error,{type:n,[Ap]:!0},e)}function Kn(n,e){return n instanceof Error&&Ap in n&&(e==null||!!(n.type&e))}const Ed="[^/]+?",xb={sensitive:!1,strict:!1,start:!0,end:!0},Mb=/[.+*?^${}()[\]/\\]/g;function yb(n,e){const t=at({},xb,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(t.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Mb,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:_,optional:m,regexp:f}=d;r.push({name:g,repeatable:_,optional:m});const E=f||Ed;if(E!==Ed){p+=10;try{new RegExp(`(${E})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+T.message)}}let M=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),s+=M,p+=20,m&&(p+=-8),_&&(p+=-20),E===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=r[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:_,optional:m}=p,f=g in c?c[g]:"";if(wn(f)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=wn(f)?f.join("/"):f;if(!E)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Sb(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Eb(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Sb(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Td(i))return 1;if(Td(s))return-1}return s.length-i.length}function Td(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Tb={type:0,value:""},bb=/[a-zA-Z0-9_]/;function Ab(n){if(!n)return[[]];if(n==="/")return[[Tb]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:bb.test(l)?d():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function wb(n,e,t){const i=yb(Ab(n.path),t),s=at(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Rb(n,e){const t=[],i=new Map;e=wd({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const p=!d,g=Cb(u);g.aliasOf=d&&d.record;const _=wd(e,u),m=[g];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of M)m.push(at({},g,{components:d?d.record.components:g.components,path:T,aliasOf:d?d.record:g}))}let f,E;for(const M of m){const{path:T}=M;if(h&&T[0]!=="/"){const R=h.record.path,P=R[R.length-1]==="/"?"":"/";M.path=h.record.path+(T&&P+T)}if(f=wb(M,h,_),d?d.alias.push(f):(E=E||f,E!==f&&E.alias.push(f),p&&u.name&&!Ad(f)&&o(u.name)),g.children){const R=g.children;for(let P=0;P<R.length;P++)r(R[P],f,d&&d.children[P])}d=d||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return E?()=>{o(E)}:Rr}function o(u){if(bp(u)){const h=i.get(u);h&&(i.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&Eb(u,t[h])>=0&&(u.record.path!==t[h].record.path||!wp(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Ad(u)&&i.set(u.record.name,u)}function c(u,h){let d,p={},g,_;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw er(1,{location:u});_=d.record.name,p=at(bd(h.params,d.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&bd(u.params,d.keys.map(E=>E.name))),g=d.stringify(p)}else if("path"in u)g=u.path,d=t.find(E=>E.re.test(g)),d&&(p=d.parse(g),_=d.record.name);else{if(d=h.name?i.get(h.name):t.find(E=>E.re.test(h.path)),!d)throw er(1,{location:u,currentLocation:h});_=d.record.name,p=at({},h.params,u.params),g=d.stringify(p)}const m=[];let f=d;for(;f;)m.unshift(f.record),f=f.parent;return{name:_,path:g,params:p,matched:m,meta:Pb(m)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function bd(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Cb(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Lb(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Lb(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Ad(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Pb(n){return n.reduce((e,t)=>at(e,t.meta),{})}function wd(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function wp(n,e){return e.children.some(t=>t===n||wp(n,t))}const Rp=/#/g,Ib=/&/g,Db=/\//g,Ub=/=/g,Nb=/\?/g,Cp=/\+/g,Ob=/%5B/g,Fb=/%5D/g,Lp=/%5E/g,Bb=/%60/g,Pp=/%7B/g,zb=/%7C/g,Ip=/%7D/g,kb=/%20/g;function Rc(n){return encodeURI(""+n).replace(zb,"|").replace(Ob,"[").replace(Fb,"]")}function Hb(n){return Rc(n).replace(Pp,"{").replace(Ip,"}").replace(Lp,"^")}function Xl(n){return Rc(n).replace(Cp,"%2B").replace(kb,"+").replace(Rp,"%23").replace(Ib,"%26").replace(Bb,"`").replace(Pp,"{").replace(Ip,"}").replace(Lp,"^")}function Vb(n){return Xl(n).replace(Ub,"%3D")}function Gb(n){return Rc(n).replace(Rp,"%23").replace(Nb,"%3F")}function Wb(n){return n==null?"":Gb(n).replace(Db,"%2F")}function Zo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Xb(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Cp," "),o=r.indexOf("="),a=Zo(o<0?r:r.slice(0,o)),l=o<0?null:Zo(r.slice(o+1));if(a in e){let c=e[a];wn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Rd(n){let e="";for(let t in n){const i=n[t];if(t=Vb(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(wn(i)?i.map(r=>r&&Xl(r)):[i&&Xl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function jb(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=wn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Dp=Symbol(""),Cd=Symbol(""),ga=Symbol(""),Cc=Symbol(""),jl=Symbol("");function xr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function qb(n,e,t){const i=()=>{n[e].delete(t)};la(i),pf(i),ff(()=>{n[e].add(t)}),n[e].add(t)}function Yb(n){const e=et(Dp,{}).value;e&&qb(e,"leaveGuards",n)}function vi(n,e,t,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(er(4,{from:t,to:e})):h instanceof Error?a(h):vb(h)?a(er(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=n.call(i&&i.instances[s],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function dl(n,e,t,i){const s=[];for(const r of n)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Kb(a)){const c=(a.__vccOpts||a)[e];c&&s.push(vi(c,t,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=lb(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&vi(d,t,i,r,o)()}))}}return s}function Kb(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Ld(n){const e=et(ga),t=et(Cc),i=sn(()=>e.resolve(Yi(n.to))),s=sn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const d=h.findIndex(Qs.bind(null,u));if(d>-1)return d;const p=Pd(l[c-2]);return c>1&&Pd(u)===p&&h[h.length-1].path!==p?h.findIndex(Qs.bind(null,l[c-2])):d}),r=sn(()=>s.value>-1&&Qb(t.params,i.value.params)),o=sn(()=>s.value>-1&&s.value===t.matched.length-1&&Tp(t.params,i.value.params));function a(l={}){return Jb(l)?e[Yi(n.replace)?"replace":"push"](Yi(n.to)).catch(Rr):Promise.resolve()}return{route:i,href:sn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const $b=Hr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ld,setup(n,{slots:e}){const t=dn(Ld(n)),{options:i}=et(ga),s=sn(()=>({[Id(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Id(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:wt("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Zb=$b;function Jb(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Qb(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!wn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Pd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Id=(n,e,t)=>n??e??t,eA=Hr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=et(jl),s=sn(()=>n.route||i.value),r=et(Cd,0),o=sn(()=>{let c=Yi(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=sn(()=>s.value.matched[o.value]);nn(Cd,sn(()=>o.value+1)),nn(Dp,a),nn(jl,s);const l=lt();return Ki(()=>[l.value,a.value,n.name],([c,u,h],[d,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Qs(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,d=h&&h.components[u];if(!d)return Dd(t.default,{Component:d,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=wt(d,at({},g,e,{onVnodeUnmounted:f=>{f.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Dd(t.default,{Component:m,route:c})||m}}});function Dd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const tA=eA;function nA(n){const e=Rb(n.routes,n),t=n.parseQuery||Xb,i=n.stringifyQuery||Rd,s=n.history,r=xr(),o=xr(),a=xr(),l=Rm(mi);let c=mi;vr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ul.bind(null,B=>""+B),h=ul.bind(null,Wb),d=ul.bind(null,Zo);function p(B,ie){let le,Ee;return bp(B)?(le=e.getRecordMatcher(B),Ee=ie):Ee=B,e.addRoute(Ee,le)}function g(B){const ie=e.getRecordMatcher(B);ie&&e.removeRoute(ie)}function _(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function f(B,ie){if(ie=at({},ie||l.value),typeof B=="string"){const A=hl(t,B,ie.path),N=e.resolve({path:A.path},ie),O=s.createHref(A.fullPath);return at(A,N,{params:d(N.params),hash:Zo(A.hash),redirectedFrom:void 0,href:O})}let le;if("path"in B)le=at({},B,{path:hl(t,B.path,ie.path).path});else{const A=at({},B.params);for(const N in A)A[N]==null&&delete A[N];le=at({},B,{params:h(A)}),ie.params=h(ie.params)}const Ee=e.resolve(le,ie),Te=B.hash||"";Ee.params=u(d(Ee.params));const v=cb(i,at({},B,{hash:Hb(Te),path:Ee.path})),C=s.createHref(v);return at({fullPath:v,hash:Te,query:i===Rd?jb(B.query):B.query||{}},Ee,{redirectedFrom:void 0,href:C})}function E(B){return typeof B=="string"?hl(t,B,l.value.path):at({},B)}function M(B,ie){if(c!==B)return er(8,{from:ie,to:B})}function T(B){return L(B)}function R(B){return T(at(E(B),{replace:!0}))}function P(B){const ie=B.matched[B.matched.length-1];if(ie&&ie.redirect){const{redirect:le}=ie;let Ee=typeof le=="function"?le(B):le;return typeof Ee=="string"&&(Ee=Ee.includes("?")||Ee.includes("#")?Ee=E(Ee):{path:Ee},Ee.params={}),at({query:B.query,hash:B.hash,params:"path"in Ee?{}:B.params},Ee)}}function L(B,ie){const le=c=f(B),Ee=l.value,Te=B.state,v=B.force,C=B.replace===!0,A=P(le);if(A)return L(at(E(A),{state:typeof A=="object"?at({},Te,A.state):Te,force:v,replace:C}),ie||le);const N=le;N.redirectedFrom=ie;let O;return!v&&ub(i,Ee,le)&&(O=er(16,{to:N,from:Ee}),z(Ee,Ee,!0,!1)),(O?Promise.resolve(O):w(N,Ee)).catch($=>Kn($)?Kn($,2)?$:de($):G($,N,Ee)).then($=>{if($){if(Kn($,2))return L(at({replace:C},E($.to),{state:typeof $.to=="object"?at({},Te,$.to.state):Te,force:v}),ie||N)}else $=fe(N,Ee,!0,C,Te);return re(N,Ee,$),$})}function W(B,ie){const le=M(B,ie);return le?Promise.reject(le):Promise.resolve()}function y(B){const ie=ge.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(B):B()}function w(B,ie){let le;const[Ee,Te,v]=iA(B,ie);le=dl(Ee.reverse(),"beforeRouteLeave",B,ie);for(const A of Ee)A.leaveGuards.forEach(N=>{le.push(vi(N,B,ie))});const C=W.bind(null,B,ie);return le.push(C),Re(le).then(()=>{le=[];for(const A of r.list())le.push(vi(A,B,ie));return le.push(C),Re(le)}).then(()=>{le=dl(Te,"beforeRouteUpdate",B,ie);for(const A of Te)A.updateGuards.forEach(N=>{le.push(vi(N,B,ie))});return le.push(C),Re(le)}).then(()=>{le=[];for(const A of v)if(A.beforeEnter)if(wn(A.beforeEnter))for(const N of A.beforeEnter)le.push(vi(N,B,ie));else le.push(vi(A.beforeEnter,B,ie));return le.push(C),Re(le)}).then(()=>(B.matched.forEach(A=>A.enterCallbacks={}),le=dl(v,"beforeRouteEnter",B,ie),le.push(C),Re(le))).then(()=>{le=[];for(const A of o.list())le.push(vi(A,B,ie));return le.push(C),Re(le)}).catch(A=>Kn(A,8)?A:Promise.reject(A))}function re(B,ie,le){a.list().forEach(Ee=>y(()=>Ee(B,ie,le)))}function fe(B,ie,le,Ee,Te){const v=M(B,ie);if(v)return v;const C=ie===mi,A=vr?history.state:{};le&&(Ee||C?s.replace(B.fullPath,at({scroll:C&&A&&A.scroll},Te)):s.push(B.fullPath,Te)),l.value=B,z(B,ie,le,C),de()}let H;function Y(){H||(H=s.listen((B,ie,le)=>{if(!Me.listening)return;const Ee=f(B),Te=P(Ee);if(Te){L(at(Te,{replace:!0}),Ee).catch(Rr);return}c=Ee;const v=l.value;vr&&gb(yd(v.fullPath,le.delta),pb()),w(Ee,v).catch(C=>Kn(C,12)?C:Kn(C,2)?(L(C.to,Ee).then(A=>{Kn(A,20)&&!le.delta&&le.type===$o.pop&&s.go(-1,!1)}).catch(Rr),Promise.reject()):(le.delta&&s.go(-le.delta,!1),G(C,Ee,v))).then(C=>{C=C||fe(Ee,v,!1),C&&(le.delta&&!Kn(C,8)?s.go(-le.delta,!1):le.type===$o.pop&&Kn(C,20)&&s.go(-1,!1)),re(Ee,v,C)}).catch(Rr)}))}let K=xr(),ue=xr(),V;function G(B,ie,le){de(B);const Ee=ue.list();return Ee.length?Ee.forEach(Te=>Te(B,ie,le)):console.error(B),Promise.reject(B)}function he(){return V&&l.value!==mi?Promise.resolve():new Promise((B,ie)=>{K.add([B,ie])})}function de(B){return V||(V=!B,Y(),K.list().forEach(([ie,le])=>B?le(B):ie()),K.reset()),B}function z(B,ie,le,Ee){const{scrollBehavior:Te}=n;if(!vr||!Te)return Promise.resolve();const v=!le&&_b(yd(B.fullPath,0))||(Ee||!le)&&history.state&&history.state.scroll||null;return oc().then(()=>Te(B,ie,v)).then(C=>C&&mb(C)).catch(C=>G(C,B,ie))}const j=B=>s.go(B);let me;const ge=new Set,Me={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:_,resolve:f,options:n,push:T,replace:R,go:j,back:()=>j(-1),forward:()=>j(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:he,install(B){const ie=this;B.component("RouterLink",Zb),B.component("RouterView",tA),B.config.globalProperties.$router=ie,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Yi(l)}),vr&&!me&&l.value===mi&&(me=!0,T(s.location).catch(Te=>{}));const le={};for(const Te in mi)Object.defineProperty(le,Te,{get:()=>l.value[Te],enumerable:!0});B.provide(ga,ie),B.provide(Cc,$d(le)),B.provide(jl,l);const Ee=B.unmount;ge.add(B),B.unmount=function(){ge.delete(B),ge.size<1&&(c=mi,H&&H(),H=null,l.value=mi,me=!1,V=!1),Ee()}}};function Re(B){return B.reduce((ie,le)=>ie.then(()=>y(le)),Promise.resolve())}return Me}function iA(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Qs(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Qs(c,l))||s.push(l))}return[t,i,s]}function sA(){return et(ga)}function rA(){return et(Cc)}const oA={__name:"App",setup(n){return lc(()=>{sA().push("/")}),(e,t)=>{const i=Xi("router-view");return ft(),At("div",null,[ct(i)])}}},aA=Vr(oA,[["__scopeId","data-v-7f22a75b"]]);const lA={data(){return{slides:[],activeIndex:0}},mounted(){for(let n=1;n<=26;n++)this.slides.push({image:`https://treantprotectorgo.github.io/json/image/big/${n}.jpg`,alt:`Slide ${n}`})},methods:{prevSlide(){this.activeIndex=this.activeIndex===0?this.slides.length-1:this.activeIndex-1},nextSlide(){this.activeIndex=this.activeIndex===this.slides.length-1?0:this.activeIndex+1},generateRoute(n){if(n==="A")return{path:"/IndoorNavigation_RequestPermission",query:{value:4}};if(n==="B")return{path:"/IndoorNavigation_RequestPermission",query:{value:4}};if(n==="C")return{path:"/IndoorNavigation_RequestPermission",query:{value:3}};if(n==="D")return{path:"/IndoorNavigation_RequestPermission",query:{value:3}}}}},cA={class:"md-3 m-2",id:"app"},uA={id:"carouselBannerIndicators",class:"carousel slide rounded bg-white shadow-sm","data-bs-ride":"carousel"},hA={class:"carousel-indicators"},dA=["data-bs-slide-to","aria-current","aria-label"],fA={class:"carousel-inner m-auto rounded"},pA=["src","alt"],mA=oe("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},null,-1),gA=oe("span",{class:"visually-hidden"},"Previous",-1),_A=[mA,gA],vA=oe("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1),xA=oe("span",{class:"visually-hidden"},"Next",-1),MA=[vA,xA],yA={class:"container my-3 text-center bg-white btnGroup"},SA=oe("p",{class:"fs-5 title text-start p-0 m-0"},"Quick actions",-1),EA=oe("a",{href:"https://chaujin.github.io/DEMO/",class:"btn btn-sq-responsive"},[oe("img",{style:{width:"6vh"},src:"https://treantprotectorgo.github.io/json/image/AR-View.png",class:"rounded mx-auto d-block",alt:"..."}),Os(" AR Game ")],-1),TA=oe("img",{style:{width:"7vh"},src:"https://treantprotectorgo.github.io/json/image/VR-Map.png",class:"rounded mx-auto d-block",alt:"..."},null,-1),bA={class:"mt-3 rounded container bg-light p-3"},AA=oe("p",{class:"fs-5 title"},"Spotlight",-1),wA={class:"row row-cols-2 row-cols-sm-4 g-2"},RA={class:"col"},CA=oe("div",{class:"card"},[oe("img",{src:"https://api.pns.hk/medias/zoom-front-93690.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxNDk2MjN8aW1hZ2UvanBlZ3xhRE5tTDJnNVl5ODVPVGMwTlRBeU5qSXhNakUwTDFCT1UwaExMVGt6Tmprd0xXWnliMjUwTG1wd1p3fDU4M2QzMzFjZTYxMTNiZTc0YzI0MDNlNTg5NjAyNGY3MDM5MjBlNjY1Y2Y4YTM4ZjFiNzM4MTAzYmM1ZDNjZTM",class:"card-img-top",alt:"..."}),oe("div",{class:"card-body bg-light"},[oe("h5",{class:"card-title fs-6 fw-normal"},"榮華"),oe("p",{class:"card-text fw-bold"}," 雙黃白蓮蓉月餅 "),oe("td",{class:"card-text"},[oe("span",{style:{color:"red"}},"$238.50 "),oe("del",null,[oe("small",{class:"text-muted"},"$398.00")])])])],-1),LA={class:"col"},PA=oe("div",{class:"card"},[oe("img",{src:"https://api.pns.hk/medias/zoom-front-41471.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxMzQyNjl8aW1hZ2UvanBlZ3xhRGhoTDJnMU5TODVPVGMwTkRjMU16VTRNak00TDFCT1UwaExMVFF4TkRjeExXWnliMjUwTG1wd1p3fGMyYTZkYjU4OGM0NTllYTk4ZjU5MzJiMDFmZWMzZDQ5ZjZjY2Y0NWI3YTE0OGQ0YTY2NTEzNTNmNzhhZDAwYTg",class:"card-img-top",alt:"..."}),oe("div",{class:"card-body bg-light"},[oe("h5",{class:"card-title fs-6 fw-normal"},"恆香"),oe("p",{class:"card-text fw-bold"}," 恆香伍仁月餅 "),oe("td",{class:"card-text"},[oe("span",{style:{color:"red"}},"$238.00 "),oe("del",null,[oe("small",{class:"text-muted"},"$408.00")])])])],-1),IA={class:"col"},DA=oe("div",{class:"card"},[oe("img",{src:"https://api.pns.hk/medias/-LEMON-TEA-250ML-6PACK-185711.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3w0NjY0MTR8aW1hZ2UvanBlZ3xhRFprTDJnME15ODVNekU0TnpJNU5qRXpNelF5THlCTVJVMVBUaUJVUlVFZ01qVXdUVXdnTmxCQlEwc3RNVGcxTnpFeExtcHdad3xjNDQ0MmQ0Mzg4NDc4ZjA2NjMyMDQ2YzczYjJjMTUwNzgxZTdiZDcwNmUyNjUzYjkzYjQ4OWE4MDUwNzBjNjhi",class:"card-img-top",alt:"..."}),oe("div",{class:"card-body bg-light"},[oe("h5",{class:"card-title fs-6 fw-normal"},"維他"),oe("p",{class:"card-text fw-bold"}," 檸檬茶 "),oe("td",{class:"card-text"},[oe("span",{style:{color:"red"}},"$18.00 ")])])],-1),UA={class:"col"},NA=oe("div",{class:"card"},[oe("img",{src:"https://api.pns.hk/medias/zoom-front-307847.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxNDIwMDZ8aW1hZ2UvanBlZ3xhRGhpTDJnMlppODVNelkwTXpJM05EazNOelU0TDFCT1UwaExMVE13TnpnME55MW1jbTl1ZEM1cWNHY3w5MTMxZWVmZWU3YmMwNTcyNzA5ZjM4MDgwYmY3NjdiMzMzMjUyNDMxNWVjNjhjMjliNDY3ZjMyMTAzYmM5NzEy",class:"card-img-top",alt:"..."}),oe("div",{class:"card-body bg-light"},[oe("h5",{class:"card-title fs-6 fw-normal"},"維他奶"),oe("p",{class:"card-text fw-bold"}," 麥精維他奶９包裝 "),oe("td",{class:"card-text"},[oe("span",{style:{color:"red"}},"$54.00/ 2件 "),oe("small",{class:"text-muted"},"$31.00")])])],-1),OA=bg('<section class="pb-5 mb-5"><div class="mt-3 rounded container px-1"><div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 rounded"><div class="col"><div class="card"><img src="https://api.pns.hk/medias/STRAWBERRY-ICE-CREAM-134317.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3w5Njk3M3xpbWFnZS9qcGVnfGFETmpMMmd4TVM4NU16RTVNakl3TVRFM05UTTBMMU5VVWtGWFFrVlNVbGtnU1VORklFTlNSVUZOTFRFek5ETXhOeTVxY0djfDIzZWZjMzRjMWEzMjFlYmZiYjQxZGMxYjVlMjIzMGY5NGVkNWMwYzU0ZmI1NjQ1ZWM5OTk0ZThlMDE2MzU5NTg" class="card-img-top" alt="..."><div class="card-body bg-light"><h5 class="card-title fs-6">HAAGEN-DAZS</h5><p class="card-text fw-bold"> 士多啤梨雪糕家庭裝 </p><p class="card-text"><small class="text-muted">$49.00</small></p></div></div></div><div class="col"><div class="card"><img src="https://api.pns.hk/medias/zoom-front-114639.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxMTIwNTB8aW1hZ2UvanBlZ3xhREpoTDJoak9DODVOVGcyTURNME16YzJOek0wTDFCT1UwaExMVEV4TkRZek9TMW1jbTl1ZEM1cWNHY3xlYmJhNzEwMmY3ZjkxZGNhODQzZWM5MDljMDYxYzlhMzg5ODhmYzdlZmVkZTRiMDIzNzhkNTc1YjZmOWQ2ODg5" class="card-img-top" alt="..."><div class="card-body bg-light"><h5 class="card-title fs-6">可口可樂</h5><p class="card-text fw-bold"> 可口可樂８罐裝 </p><p class="card-text"><small class="text-muted">$38.00</small></p></div></div></div><div class="col"><div class="card"><img src="https://api.pns.hk/medias/-LOW-SUGAR-LEMON-TEA-250ML-9PACK-355420.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxMTY1MjJ8aW1hZ2UvanBlZ3xhRGN5TDJnME5pODVNekU1TXpBMU5UYzJORGM0THlCTVQxY2dVMVZIUVZJZ1RFVk5UMDRnVkVWQklESTFNRTFNSURsUVFVTkxMVE0xTlRReU1DNXFjR2N8NjVhZWFmYzVjZTNhNThiMDQ2ZmUxZjNlY2I5YmI3NmQwN2I4MDAxNzNlY2RhYzgwZWU3M2VhNWE4NmFiMWQ1Yg" class="card-img-top" alt="..."><div class="card-body bg-light"><h5 class="card-title">維他</h5><p class="card-text fw-bold"> 低糖檸檬茶250毫升(9包裝) </p><p class="card-text"><small class="text-muted">$25.00</small></p></div></div></div><div class="col"><div class="card"><img src="https://api.pns.hk/medias/POTATO-CHIPS-BBQ-126070.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxMTQ3NDZ8aW1hZ2UvanBlZ3xhRFkwTDJoaU5TODVNekU0TlRFeE5UYzFNRGN3TDFCUFZFRlVUeUJEU0VsUVV5MUNRbEV0TVRJMk1EY3dMbXB3Wnd8MzgyMzc5NmYxY2EwMzE1OTAxYzdhZjhlZWIxMTk4NmIxOWUwNjRlMTVkOWM1OWEwNWJjNTllODYyNzZmMzU3YQ" class="card-img-top" alt="..."><div class="card-body bg-light"><h5 class="card-title">卡樂B</h5><p class="card-text fw-bold"> 卡樂B薯片BBQ味105克 </p><p class="card-text"><small class="text-muted">$20.00</small></p></div></div></div><div class="col"><div class="card"><img src="https://api.pns.hk/medias/zoom-front-110103.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxNDI5NjB8aW1hZ2UvanBlZ3xhRFV3TDJnME55ODVPRFF3T0RZNE9EVXhOelF5TDFCT1UwaExMVEV4TURFd015MW1jbTl1ZEM1cWNHY3xhOGNhZTgwNWZlMzg4ZDkwZjY0YTA3YTc1OWRhMzJiNTk4YjRkYWMwZWU2NTM5NzkyY2UwNjk4MjNmOTU0MDYy" class="card-img-top" alt="..."><div class="card-body bg-light"><h5 class="card-title">保利</h5><p class="card-text fw-bold"> UHT 牛奶 </p><p class="card-text"><small class="text-muted">$60.00</small></p></div></div></div><div class="col"><div class="card"><img src="https://api.pns.hk/medias/CLASSIC-CORN-FLAKES-115554.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxNTA0OTB8aW1hZ2UvanBlZ3xhR0kxTDJnek1DODVNekU0TlRRM05ESXpNall5TDBOTVFWTlRTVU1nUTA5U1RpQkdURUZMUlZNdE1URTFOVFUwTG1wd1p3fDgxMGY0YTRlNDYwMGI2MDI1ZGM4OTdlOWY2NzMyZDliMjkyMGI2Yzk1Y2VkMjA1MmI2MWEwZDg3YjU0ZjA0NzU" class="card-img-top" alt="..."><div class="card-body bg-light"><h5 class="card-title">家樂氏</h5><p class="card-text fw-bold"> 原味玉米片 </p><p class="card-text"><small class="text-muted">$42.50</small></p></div></div></div></div></div></section>',1),FA=oe("footer",null,[oe("nav",{class:"nav border-top nav-pills nav-justified fixed-bottom flex-nowrap"},[oe("div",{class:"btn-group",role:"group",style:{width:"100%"}},[oe("button",{type:"button",class:"btn btn-light",style:{color:"#094FA3"}},[oe("i",{style:{display:"flex","flex-direction":"column","font-size":"28px"},class:"material-icons"},"home"),Os(" Home")]),oe("a",{href:"https://nevercod.github.io/chat/",class:"btn btn-light"},[oe("i",{style:{display:"flex","flex-direction":"column","font-size":"28px"},class:"material-icons"},"chat"),Os(" Chat")]),oe("a",{href:"https://treantprotectorgo.github.io/vue-bootstrap/",class:"btn btn-light"},[oe("i",{style:{display:"flex","flex-direction":"column","font-size":"28px"},class:"material-icons"},"shopping_cart"),Os(" Cart ")])])])],-1);function BA(n,e,t,i,s,r){const o=Xi("router-link");return ft(),At(Mt,null,[oe("section",null,[oe("section",cA,[oe("div",uA,[oe("div",hA,[(ft(!0),At(Mt,null,Hs(s.slides,(a,l)=>(ft(),At("button",{key:l,type:"button","data-bs-target":"#carouselBannerIndicators","data-bs-slide-to":l,class:Pr({active:l===s.activeIndex}),"aria-current":l===s.activeIndex,"aria-label":"Slide "+(l+1)},null,10,dA))),128))]),oe("div",fA,[(ft(!0),At(Mt,null,Hs(s.slides,(a,l)=>(ft(),At("div",{key:l,class:Pr({"carousel-item":!0,active:l===s.activeIndex})},[oe("img",{src:a.image,class:"d-block img-fluid h-100",alt:a.alt},null,8,pA)],2))),128))]),oe("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselBannerIndicators",onClick:e[0]||(e[0]=(...a)=>r.prevSlide&&r.prevSlide(...a))},_A),oe("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselBannerIndicators",onClick:e[1]||(e[1]=(...a)=>r.nextSlide&&r.nextSlide(...a))},MA)])]),oe("section",yA,[oe("div",null,[SA,EA,ct(o,{to:"/IndoorNavigation_RequestPermission",class:"btn btn-sq-responsive"},{default:Qn(()=>[TA,Os(" VR Map ")]),_:1})])])]),oe("div",bA,[AA,oe("div",wA,[oe("div",RA,[ct(o,{to:r.generateRoute("A")},{default:Qn(()=>[CA]),_:1},8,["to"])]),oe("div",LA,[ct(o,{to:r.generateRoute("B")},{default:Qn(()=>[PA]),_:1},8,["to"])]),oe("div",IA,[ct(o,{to:r.generateRoute("C")},{default:Qn(()=>[DA]),_:1},8,["to"])]),oe("div",UA,[ct(o,{to:r.generateRoute("D")},{default:Qn(()=>[NA]),_:1},8,["to"])])])]),OA,FA],64)}const zA=Vr(lA,[["render",BA]]),kA={__name:"IndoorNavigation_RequestPermission",setup(n){Yb((i,s,r)=>{i.path!==s.path?(r(s.path),location.reload()):r()});const e=rA();console.log(e.query);const t=e.query.value;return console.log(t),(i,s)=>(ft(),At(Mt,null,[ct(uT),ct(sb,{sentIndex:Yi(t)},null,8,["sentIndex"])],64))}},HA=[{path:"/",name:"Home",component:zA},{path:"/IndoorNavigation_RequestPermission",name:"IndoorNavigation_RequestPermission",component:kA}],VA=nA({history:createWebHashHistory(),routes:HA});i_(aA).use(VA).mount("#app");
