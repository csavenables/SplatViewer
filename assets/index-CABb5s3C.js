var Mu=Object.defineProperty;var Eu=(r,e,t)=>e in r?Mu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var k=(r,e,t)=>Eu(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Cu(r){const e=document.createElement("div");e.className="loader hidden",e.innerHTML=`
    <div class="loader-spinner" aria-hidden="true"></div>
    <p class="loader-message">Loading...</p>
  `,r.appendChild(e);const t=e.querySelector(".loader-message");if(!t)throw new Error("Loader UI initialization failed.");return{show(n){t.textContent=n??"Loading...",e.classList.remove("hidden")},hide(){e.classList.add("hidden")}}}function vo(r){const e=document.createElement("button");return e.type="button",e.id=r.id,e.textContent=r.label,e.className=`toolbar-button toolbar-button-${r.variant??"secondary"}`,e.addEventListener("click",r.onClick),e}function bu(r,e){const t=document.createElement("div");t.className="toolbar",r.appendChild(t);const n=vo({id:"btn-reset",label:"Reset",onClick:()=>e.onReset()}),i=vo({id:"btn-fullscreen",label:"Fullscreen",onClick:()=>{const s=!e.isFullscreen();e.onToggleFullscreen(s),i.classList.toggle("active",s),i.textContent=s?"Exit Fullscreen":"Fullscreen"}});return t.appendChild(n),t.appendChild(i),{setConfig(s){n.classList.toggle("hidden",!s.ui.enableReset),i.classList.toggle("hidden",!s.ui.enableFullscreen)}}}function Tu(r,e,t={}){const n=t.embedMode??!1,i=t.controlsVisible??!n,s=t.replayButtonVisible??n;r.innerHTML=`
    <div class="app-shell${n?" app-shell-embed":""}">
      <header class="app-header${i?"":" hidden"}">
        <h1 class="app-title">3DGSViewerV1</h1>
        <p class="scene-title">Scene</p>
      </header>
      <main class="viewer-root">
        <section class="viewer-host" id="viewer-host"></section>
        <div class="annotation-host" id="annotation-host"></div>
        <aside class="splat-panel${i?"":" hidden"}" aria-label="Splat visibility controls">
          <h2 class="splat-panel-title">Splats</h2>
          <div class="splat-controls"></div>
          <div class="annotation-editor hidden">
            <h3 class="interior-title">Annotations</h3>
            <label class="interior-row interior-check">
              <input data-ann="editMode" type="checkbox" />
              Edit Mode
            </label>
            <label class="interior-row">
              Pin
              <select data-ann="pinSelect"></select>
            </label>
            <div class="annotation-editor-actions">
              <button type="button" class="splat-toggle" data-ann="add">Add</button>
              <button type="button" class="splat-toggle" data-ann="delete">Delete</button>
              <button type="button" class="splat-toggle" data-ann="save">Save</button>
            </div>
            <label class="interior-row">
              Asset
              <select data-ann="assetSelect"></select>
            </label>
            <label class="interior-row">
              X
              <input data-ann="x" type="number" step="0.01" />
            </label>
            <label class="interior-row">
              Y
              <input data-ann="y" type="number" step="0.01" />
            </label>
            <label class="interior-row">
              Z
              <input data-ann="z" type="number" step="0.01" />
            </label>
            <label class="interior-row">
              Nudge
              <input data-ann="step" type="number" step="0.005" value="0.01" />
            </label>
            <div class="annotation-editor-actions">
              <button type="button" class="splat-toggle" data-ann="x-">X-</button>
              <button type="button" class="splat-toggle" data-ann="x+">X+</button>
              <button type="button" class="splat-toggle" data-ann="y-">Y-</button>
              <button type="button" class="splat-toggle" data-ann="y+">Y+</button>
              <button type="button" class="splat-toggle" data-ann="z-">Z-</button>
              <button type="button" class="splat-toggle" data-ann="z+">Z+</button>
            </div>
            <label class="interior-row">
              Title
              <input data-ann="title" type="text" />
            </label>
            <label class="interior-row annotation-textarea-row">
              Body
              <textarea data-ann="body" rows="3"></textarea>
            </label>
          </div>
          <div class="interior-debug">
            <h3 class="interior-title">Interior Debug</h3>
            <label class="interior-row">Radius <input data-key="radius" type="range" min="0.2" max="20" step="0.05" /></label>
            <label class="interior-row">Softness <input data-key="softness" type="range" min="0.05" max="0.6" step="0.01" /></label>
            <label class="interior-row">Fade Alpha <input data-key="fadeAlpha" type="range" min="0" max="1" step="0.01" /></label>
            <label class="interior-row">Max Dist <input data-key="maxDistance" type="range" min="1" max="100" step="1" /></label>
            <label class="interior-row">Target X <input data-key="targetX" type="range" min="-10" max="10" step="0.05" /></label>
            <label class="interior-row">Target Y <input data-key="targetY" type="range" min="-10" max="10" step="0.05" /></label>
            <label class="interior-row">Target Z <input data-key="targetZ" type="range" min="-10" max="10" step="0.05" /></label>
            <label class="interior-row interior-check">
              <input data-key="enabled" type="checkbox" />
              Enabled
            </label>
          </div>
        </aside>
        <div class="transition-overlay"></div>
        <button type="button" class="replay-button${s?"":" hidden"}" aria-label="Replay intro">
          Replay
        </button>
      </main>
      <div class="error-panel hidden" role="alert">
        <h2 class="error-title"></h2>
        <ul class="error-details"></ul>
      </div>
      <footer class="app-footer${i?"":" hidden"}">
        <p>R: Reset</p>
      </footer>
    </div>
  `;const o=r.querySelector("#viewer-host"),a=r.querySelector(".transition-overlay"),l=r.querySelector("#annotation-host"),c=r.querySelector(".error-panel"),u=r.querySelector(".error-title"),d=r.querySelector(".error-details"),f=r.querySelector(".scene-title"),h=r.querySelector(".app-footer"),g=r.querySelector(".splat-controls"),S=r.querySelector(".interior-debug"),p=r.querySelector(".annotation-editor"),m=r.querySelector(".replay-button");if(!o||!a||!l||!c||!u||!d||!f||!h||!g||!S||!p||!m)throw new Error("App shell failed to initialize.");const A=Cu(o),v=bu(h,e);m.onclick=()=>{var ee;return(ee=t.onReplay)==null?void 0:ee.call(t)};const E=ee=>p.querySelector(`[data-ann="${ee}"]`),C=ee=>p.querySelector(`[data-ann="${ee}"]`),b=ee=>p.querySelector(`button[data-ann="${ee}"]`),x=E("editMode"),I=C("pinSelect"),_=C("assetSelect"),y=E("x"),L=E("y"),B=E("z"),N=E("step"),R=E("title"),F=p.querySelector('textarea[data-ann="body"]'),O=b("add"),W=b("delete"),X=b("save"),z=b("x-"),H=b("x+"),q=b("y-"),ie=b("y+"),V=b("z-"),Z=b("z+");let j=null;return{toolbar:v,setLoading(ee,se){ee?A.show(se):A.hide()},setError(ee,se){u.textContent=ee,d.innerHTML="";for(const ce of se){const fe=document.createElement("li");fe.textContent=ce,d.appendChild(fe)}c.classList.remove("hidden")},clearError(){c.classList.add("hidden"),u.textContent="",d.innerHTML=""},configureToolbar(ee){i&&v.setConfig(ee)},configureInteriorDebug(ee,se){const ce=Re=>S.querySelector(`input[data-key="${Re}"]`),fe=ce("radius"),ae=ce("softness"),Ce=ce("fadeAlpha"),G=ce("maxDistance"),Be=ce("targetX"),ve=ce("targetY"),xe=ce("targetZ"),_e=ce("enabled");if(!fe||!ae||!Ce||!G||!Be||!ve||!xe||!_e)return;fe.value=String(ee.radius),ae.value=String(ee.softness),Ce.value=String(ee.fadeAlpha),G.value=String(ee.maxDistance),Be.value=String(ee.target[0]),ve.value=String(ee.target[1]),xe.value=String(ee.target[2]),_e.checked=ee.enabled;const Xe=()=>{se({target:[Number(Be.value),Number(ve.value),Number(xe.value)]})};fe.oninput=()=>se({radius:Number(fe.value)}),ae.oninput=()=>se({softness:Number(ae.value)}),Ce.oninput=()=>se({fadeAlpha:Number(Ce.value)}),G.oninput=()=>se({maxDistance:Number(G.value)}),Be.oninput=Xe,ve.oninput=Xe,xe.oninput=Xe,_e.onchange=()=>se({enabled:_e.checked})},setSceneTitle(ee){f.textContent=ee},setSplatOptions(ee,se){if(!i){g.innerHTML="";return}const ce=ee.some(fe=>fe.id==="staircase"&&fe.active);S.classList.toggle("hidden",!ce),g.innerHTML="";for(const fe of ee){const ae=document.createElement("button");ae.type="button",ae.className="splat-toggle",ae.dataset.splatId=fe.id,ae.dataset.active=fe.active?"true":"false",ae.dataset.loaded=fe.loaded?"true":"false",ae.textContent=fe.label,ae.classList.toggle("active",fe.active),ae.classList.toggle("failed",fe.failed),ae.disabled=!fe.loaded||fe.failed,ae.onclick=()=>{if(!ae.disabled){for(const Ce of g.querySelectorAll("button.splat-toggle"))Ce.classList.remove("active");ae.classList.add("active"),se(fe.id)}},g.appendChild(ae)}},configureAnnotationEditor(ee){if(j=ee,!x||!I||!_||!y||!L||!B||!N||!R||!F||!O||!W||!X||!z||!H||!q||!ie||!V||!Z)return;x.onchange=()=>j==null?void 0:j.onToggleEdit(x.checked),I.onchange=()=>j==null?void 0:j.onSelectPin(I.value),O.onclick=()=>j==null?void 0:j.onAddPin(),W.onclick=()=>j==null?void 0:j.onDeleteSelected(),X.onclick=()=>j==null?void 0:j.onSave();const se=()=>{j==null||j.onUpdateSelected({pos:[Number(y.value),Number(L.value),Number(B.value)]})};y.onchange=se,L.onchange=se,B.onchange=se,R.onchange=()=>j==null?void 0:j.onUpdateSelected({title:R.value}),F.onchange=()=>j==null?void 0:j.onUpdateSelected({body:F.value}),_.onchange=()=>j==null?void 0:j.onUpdateSelected({assetId:_.value==="__all__"?null:_.value});const ce=()=>Math.max(.001,Number(N.value)||.01);z.onclick=()=>j==null?void 0:j.onNudge("x",-ce()),H.onclick=()=>j==null?void 0:j.onNudge("x",ce()),q.onclick=()=>j==null?void 0:j.onNudge("y",-ce()),ie.onclick=()=>j==null?void 0:j.onNudge("y",ce()),V.onclick=()=>j==null?void 0:j.onNudge("z",-ce()),Z.onclick=()=>j==null?void 0:j.onNudge("z",ce())},setAnnotationEditorState(ee){if(!i){p.classList.add("hidden");return}if(p.classList.toggle("hidden",!ee.available),!x||!I||!_||!y||!L||!B||!R||!F||!W)return;x.checked=ee.editMode,I.innerHTML="";for(const ae of ee.pins){const Ce=document.createElement("option");Ce.value=ae.id,Ce.textContent=`${ae.order}. ${ae.title||ae.id}`,I.appendChild(Ce)}ee.selectedId&&(I.value=ee.selectedId),_.innerHTML="";const se=document.createElement("option");se.value="__all__",se.textContent="All splats",_.appendChild(se);for(const ae of ee.assetIds){const Ce=document.createElement("option");Ce.value=ae,Ce.textContent=ae,_.appendChild(Ce)}const ce=ee.pins.find(ae=>ae.id===ee.selectedId)??null;ce&&(y.value=ce.pos[0].toFixed(4),L.value=ce.pos[1].toFixed(4),B.value=ce.pos[2].toFixed(4),R.value=ce.title,F.value=ce.body,_.value=ce.assetId??"__all__"),W.disabled=!ce;const fe=!ee.editMode||!ce;y.disabled=fe,L.disabled=fe,B.disabled=fe,R.disabled=fe,F.disabled=fe,_.disabled=fe},getOverlayElement(){return a},getCanvasHostElement(){return o},getAnnotationHostElement(){return l}}}function Ds(r){return r===null?null:r==="1"||r.toLowerCase()==="true"?!0:r==="0"||r.toLowerCase()==="false"?!1:null}function wu(r){if(!r)return null;try{return new URL(r).origin}catch{return null}}function Ru(r,e="cake"){const t=new URLSearchParams(r),n=t.get("scene")??e,i=n===e,s=Ds(t.get("embed"))??i,o=Ds(t.get("controls"))??!s,a=Ds(t.get("replayButton"))??s;return{sceneId:n,embed:s,autorotateOverride:Ds(t.get("autorotate")),controlsVisible:o,replayButtonVisible:a,parentOrigin:wu(t.get("parentOrigin"))}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="160",un={ROTATE:0,DOLLY:1,PAN:2},dn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iu=0,xo=1,Pu=2,Tc=1,Du=2,Bn=3,Tn=0,jt=1,fn=2,kn=0,Vn=1,Ca=2,_o=3,yo=4,wc=5,hi=100,Lu=101,Fu=102,Mo=103,Eo=104,Bu=200,Uu=201,Ou=202,Nu=203,vs=204,xs=205,zu=206,Hu=207,ku=208,Vu=209,Gu=210,Wu=211,Xu=212,Yu=213,qu=214,Qu=0,ju=1,Ku=2,mr=3,Zu=4,$u=5,Ju=6,ed=7,Rc=0,td=1,nd=2,ei=0,id=1,sd=2,rd=3,ad=4,od=5,ld=6,Ic=300,Ki=301,Zi=302,ba=303,Ta=304,Rr=306,wa=1e3,xn=1001,Ra=1002,Ct=1003,Co=1004,zr=1005,hn=1006,cd=1007,_s=1008,bn=1009,ud=1010,dd=1011,Va=1012,Pc=1013,sn=1014,En=1015,$i=1016,Dc=1017,Lc=1018,Si=1020,hd=1021,Ht=1023,fd=1024,pd=1025,ti=1026,Ji=1027,md=1028,Ga=1029,gd=1030,Fc=1031,ds=1033,Hr=33776,kr=33777,Vr=33778,Gr=33779,bo=35840,To=35841,wo=35842,Ro=35843,Bc=36196,Io=37492,Po=37496,Do=37808,Lo=37809,Fo=37810,Bo=37811,Uo=37812,Oo=37813,No=37814,zo=37815,Ho=37816,ko=37817,Vo=37818,Go=37819,Wo=37820,Xo=37821,Wr=36492,Yo=36494,qo=36495,Sd=36283,Qo=36284,jo=36285,Ko=36286,Uc=3e3,Ai=3001,Ad=3200,Oc=3201,vd=0,xd=1,pn="",Dt="srgb",Wn="srgb-linear",Wa="display-p3",Ir="display-p3-linear",gr="linear",ct="srgb",Sr="rec709",Ar="p3",_i=7680,Zo=519,_d=512,yd=513,Md=514,Nc=515,Ed=516,Cd=517,bd=518,Td=519,$o=35044,wd=35048,Jo="300 es",Ia=1035,Hn=2e3,vr=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let el=1234567;const hs=Math.PI/180,ys=180/Math.PI;function ns(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Bt(r,e,t){return Math.max(e,Math.min(t,r))}function Xa(r,e){return(r%e+e)%e}function Rd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Id(r,e,t){return r!==e?(t-r)/(e-r):0}function fs(r,e,t){return(1-t)*r+t*e}function Pd(r,e,t,n){return fs(r,e,1-Math.exp(-t*n))}function Dd(r,e=1){return e-Math.abs(Xa(r,e*2)-e)}function Ld(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Fd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Bd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ud(r,e){return r+Math.random()*(e-r)}function Od(r){return r*(.5-Math.random())}function Nd(r){r!==void 0&&(el=r);let e=el+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zd(r){return r*hs}function Hd(r){return r*ys}function Pa(r){return(r&r-1)===0&&r!==0}function kd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function xr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Vd(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),f=o((e-n)/2),h=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*d,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*d,a*c);break;case"ZXZ":r.set(l*d,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*h,a*c);break;case"YXY":r.set(l*h,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ki(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Lt={DEG2RAD:hs,RAD2DEG:ys,generateUUID:ns,clamp:Bt,euclideanModulo:Xa,mapLinear:Rd,inverseLerp:Id,lerp:fs,damp:Pd,pingpong:Dd,smoothstep:Ld,smootherstep:Fd,randInt:Bd,randFloat:Ud,randFloatSpread:Od,seededRandom:Nd,degToRad:zd,radToDeg:Hd,isPowerOfTwo:Pa,ceilPowerOfTwo:kd,floorPowerOfTwo:xr,setQuaternionFromProperEuler:Vd,normalize:Gt,denormalize:ki};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],S=i[0],p=i[3],m=i[6],A=i[1],v=i[4],E=i[7],C=i[2],b=i[5],x=i[8];return s[0]=o*S+a*A+l*C,s[3]=o*p+a*v+l*b,s[6]=o*m+a*E+l*x,s[1]=c*S+u*A+d*C,s[4]=c*p+u*v+d*b,s[7]=c*m+u*E+d*x,s[2]=f*S+h*A+g*C,s[5]=f*p+h*v+g*b,s[8]=f*m+h*E+g*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,g=t*d+n*f+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=d*S,e[1]=(i*c-u*n)*S,e[2]=(a*n-i*o)*S,e[3]=f*S,e[4]=(u*t-i*l)*S,e[5]=(i*s-a*t)*S,e[6]=h*S,e[7]=(n*l-c*t)*S,e[8]=(o*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new He;function zc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _r(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gd(){const r=_r("canvas");return r.style.display="block",r}const tl={};function ps(r){r in tl||(tl[r]=!0,console.warn(r))}const nl=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),il=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[Wn]:{transfer:gr,primaries:Sr,toReference:r=>r,fromReference:r=>r},[Dt]:{transfer:ct,primaries:Sr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ir]:{transfer:gr,primaries:Ar,toReference:r=>r.applyMatrix3(il),fromReference:r=>r.applyMatrix3(nl)},[Wa]:{transfer:ct,primaries:Ar,toReference:r=>r.convertSRGBToLinear().applyMatrix3(il),fromReference:r=>r.applyMatrix3(nl).convertLinearToSRGB()}},Wd=new Set([Wn,Ir]),at={enabled:!0,_workingColorSpace:Wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Wd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ls[e].toReference,i=Ls[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ls[r].primaries},getTransfer:function(r){return r===pn?gr:Ls[r].transfer}};function Yi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yi;class Hc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yi===void 0&&(yi=_r("canvas")),yi.width=e.width,yi.height=e.height;const n=yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Yi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xd=0;class kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=ns(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(qr(i[o].image)):s.push(qr(i[o]))}else s=qr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function qr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yd=0;class Kt extends ni{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=xn,i=xn,s=hn,o=_s,a=Ht,l=bn,c=Kt.DEFAULT_ANISOTROPY,u=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=ns(),this.name="",this.source=new kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ai?Dt:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?Ai:Uc}set encoding(e){ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ai?Dt:pn}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Ic;Kt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],S=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-S)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+S)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(h+1)/2,C=(m+1)/2,b=(u+f)/4,x=(d+S)/4,I=(g+p)/4;return v>E&&v>C?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=x/n):E>C?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=b/i,s=I/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=x/s,i=I/s),this.set(n,i,s,t),this}let A=Math.sqrt((p-g)*(p-g)+(d-S)*(d-S)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(d-S)/A,this.z=(f-u)/A,this.w=Math.acos((c+h+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qd extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ps("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ai?Dt:pn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends qd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vc extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qd extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class it{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const f=s[o+0],h=s[o+1],g=s[o+2],S=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=S;return}if(d!==S||l!==f||c!==h||u!==g){let p=1-a;const m=l*f+c*h+u*g+d*S,A=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const C=Math.sqrt(v),b=Math.atan2(C,m*A);p=Math.sin(p*b)/C,a=Math.sin(a*b)/C}const E=a*A;if(l=l*p+f*E,c=c*p+h*E,u=u*p+g*E,d=d*p+S*E,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-a*h,e[t+2]=c*g+u*h+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),f=l(n/2),h=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-i)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(s-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(o-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new w,sl=new it;class Mt{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),Bs.subVectors(this.max,os),Mi.subVectors(e.a,os),Ei.subVectors(e.b,os),Ci.subVectors(e.c,os),Yn.subVectors(Ei,Mi),qn.subVectors(Ci,Ei),ri.subVectors(Mi,Ci);let t=[0,-Yn.z,Yn.y,0,-qn.z,qn.y,0,-ri.z,ri.y,Yn.z,0,-Yn.x,qn.z,0,-qn.x,ri.z,0,-ri.x,-Yn.y,Yn.x,0,-qn.y,qn.x,0,-ri.y,ri.x,0];return!jr(t,Mi,Ei,Ci,Bs)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,Mi,Ei,Ci,Bs))?!1:(Us.crossVectors(Yn,qn),t=[Us.x,Us.y,Us.z],jr(t,Mi,Ei,Ci,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new w,new w,new w,new w,new w,new w,new w,new w],gn=new w,Fs=new Mt,Mi=new w,Ei=new w,Ci=new w,Yn=new w,qn=new w,ri=new w,os=new w,Bs=new w,Us=new w,ai=new w;function jr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ai.fromArray(r,s);const a=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=e.dot(ai),c=t.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jd=new Mt,ls=new w,Kr=new w;class Pr{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ls,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(Kr)),this.expandByPoint(ls.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new w,Zr=new w,Os=new w,Qn=new w,$r=new w,Ns=new w,Jr=new w;let Dr=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zr.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(Zr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Os),a=Qn.dot(this.direction),l=-Qn.dot(Os),c=Qn.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const S=1/u;d*=S,f*=S,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Zr).addScaledVector(Os,f),h}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,i,s){$r.subVectors(t,e),Ns.subVectors(n,e),Jr.crossVectors($r,Ns);let o=this.direction.dot(Jr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const l=a*this.direction.dot(Ns.crossVectors(Qn,Ns));if(l<0)return null;const c=a*this.direction.dot($r.cross(Qn));if(c<0||l+c>o)return null;const u=-a*Qn.dot(Jr);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Oe{constructor(e,t,n,i,s,o,a,l,c,u,d,f,h,g,S,p){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,d,f,h,g,S,p)}set(e,t,n,i,s,o,a,l,c,u,d,f,h,g,S,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=S,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),o=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,S=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-S*c,t[9]=-a*l,t[2]=S-f*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,S=c*d;t[0]=f+S*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=S+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,S=c*d;t[0]=f-S*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=S-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,S=a*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+S,t[1]=l*d,t[5]=S*c+f,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=S-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-S*d}else if(e.order==="XZY"){const f=o*l,h=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+S,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=S*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kd,e,Zd)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),jn.crossVectors(n,Jt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),jn.crossVectors(n,Jt)),jn.normalize(),zs.crossVectors(Jt,jn),i[0]=jn.x,i[4]=zs.x,i[8]=Jt.x,i[1]=jn.y,i[5]=zs.y,i[9]=Jt.y,i[2]=jn.z,i[6]=zs.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],S=n[6],p=n[10],m=n[14],A=n[3],v=n[7],E=n[11],C=n[15],b=i[0],x=i[4],I=i[8],_=i[12],y=i[1],L=i[5],B=i[9],N=i[13],R=i[2],F=i[6],O=i[10],W=i[14],X=i[3],z=i[7],H=i[11],q=i[15];return s[0]=o*b+a*y+l*R+c*X,s[4]=o*x+a*L+l*F+c*z,s[8]=o*I+a*B+l*O+c*H,s[12]=o*_+a*N+l*W+c*q,s[1]=u*b+d*y+f*R+h*X,s[5]=u*x+d*L+f*F+h*z,s[9]=u*I+d*B+f*O+h*H,s[13]=u*_+d*N+f*W+h*q,s[2]=g*b+S*y+p*R+m*X,s[6]=g*x+S*L+p*F+m*z,s[10]=g*I+S*B+p*O+m*H,s[14]=g*_+S*N+p*W+m*q,s[3]=A*b+v*y+E*R+C*X,s[7]=A*x+v*L+E*F+C*z,s[11]=A*I+v*B+E*O+C*H,s[15]=A*_+v*N+E*W+C*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],S=e[7],p=e[11],m=e[15];return g*(+s*l*d-i*c*d-s*a*f+n*c*f+i*a*h-n*l*h)+S*(+t*l*h-t*c*f+s*o*f-i*o*h+i*c*u-s*l*u)+p*(+t*c*d-t*a*h-s*o*d+n*o*h+s*a*u-n*c*u)+m*(-i*a*u-t*l*d+t*a*f+i*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],S=e[13],p=e[14],m=e[15],A=d*p*c-S*f*c+S*l*h-a*p*h-d*l*m+a*f*m,v=g*f*c-u*p*c-g*l*h+o*p*h+u*l*m-o*f*m,E=u*S*c-g*d*c+g*a*h-o*S*h-u*a*m+o*d*m,C=g*d*l-u*S*l-g*a*f+o*S*f+u*a*p-o*d*p,b=t*A+n*v+i*E+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/b;return e[0]=A*x,e[1]=(S*f*s-d*p*s-S*i*h+n*p*h+d*i*m-n*f*m)*x,e[2]=(a*p*s-S*l*s+S*i*c-n*p*c-a*i*m+n*l*m)*x,e[3]=(d*l*s-a*f*s-d*i*c+n*f*c+a*i*h-n*l*h)*x,e[4]=v*x,e[5]=(u*p*s-g*f*s+g*i*h-t*p*h-u*i*m+t*f*m)*x,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*x,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*h+t*l*h)*x,e[8]=E*x,e[9]=(g*d*s-u*S*s-g*n*h+t*S*h+u*n*m-t*d*m)*x,e[10]=(o*S*s-g*a*s+g*n*c-t*S*c-o*n*m+t*a*m)*x,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*h-t*a*h)*x,e[12]=C*x,e[13]=(u*S*i-g*d*i+g*n*f-t*S*f-u*n*p+t*d*p)*x,e[14]=(g*a*i-o*S*i-g*n*l+t*S*l+o*n*p-t*a*p)*x,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*f+t*a*f)*x,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,g=s*d,S=o*u,p=o*d,m=a*d,A=l*c,v=l*u,E=l*d,C=n.x,b=n.y,x=n.z;return i[0]=(1-(S+m))*C,i[1]=(h+E)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(h-E)*b,i[5]=(1-(f+m))*b,i[6]=(p+A)*b,i[7]=0,i[8]=(g+v)*x,i[9]=(p-A)*x,i[10]=(1-(f+S))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=bi.set(i[0],i[1],i[2]).length();const o=bi.set(i[4],i[5],i[6]).length(),a=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const c=1/s,u=1/o,d=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Hn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let h,g;if(a===Hn)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===vr)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Hn){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(o-s),f=(t+e)*c,h=(n+i)*u;let g,S;if(a===Hn)g=(o+s)*d,S=-2*d;else if(a===vr)g=s*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=S,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new w,Sn=new Oe,Kd=new w(0,0,0),Zd=new w(1,1,1),jn=new w,zs=new w,Jt=new w,rl=new Oe,al=new it;class is{constructor(e=0,t=0,n=0,i=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class Gc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $d=0;const ol=new w,Ti=new it,Pn=new Oe,Hs=new w,cs=new w,Jd=new w,eh=new it,ll=new w(1,0,0),cl=new w(0,1,0),ul=new w(0,0,1),th={type:"added"},nh={type:"removed"};class xt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new w,t=new is,n=new it,i=new w(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new He}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return ol.copy(e).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hs.copy(e):Hs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(cs,Hs,this.up):Pn.lookAt(Hs,cs,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(th)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,Jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,eh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new w(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new w,Dn=new w,ea=new w,Ln=new w,wi=new w,Ri=new w,dl=new w,ta=new w,na=new w,ia=new w;let ks=!1;class vn{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),An.subVectors(e,t),i.cross(An);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){An.subVectors(i,t),Dn.subVectors(n,t),ea.subVectors(e,t);const o=An.dot(An),a=An.dot(Dn),l=An.dot(ea),c=Dn.dot(Dn),u=Dn.dot(ea),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,n,i,s,o,a,l){return ks===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ks=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static isFrontFacing(e,t,n,i){return An.subVectors(n,t),Dn.subVectors(e,t),An.cross(Dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),An.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ks===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ks=!0),vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;wi.subVectors(i,n),Ri.subVectors(s,n),ta.subVectors(e,n);const l=wi.dot(ta),c=Ri.dot(ta);if(l<=0&&c<=0)return t.copy(n);na.subVectors(e,i);const u=wi.dot(na),d=Ri.dot(na);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(wi,o);ia.subVectors(e,s);const h=wi.dot(ia),g=Ri.dot(ia);if(g>=0&&h<=g)return t.copy(s);const S=h*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ri,a);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return dl.subVectors(s,i),a=(d-u)/(d-u+(h-g)),t.copy(i).addScaledVector(dl,a);const m=1/(p+S+f);return o=S*m,a=f*m,t.copy(n).addScaledVector(wi,o).addScaledVector(Ri,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function sa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=Xa(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=sa(o,s,e+1/3),this.g=sa(o,s,e),this.b=sa(o,s,e-1/3)}return at.toWorkingColorSpace(this,i),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=Wc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return at.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Bt(Nt.r*255,0,255))*65536+Math.round(Bt(Nt.g*255,0,255))*256+Math.round(Bt(Nt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,s=Nt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Dt){at.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(Vs);const n=fs(Kn.h,Vs.h,t),i=fs(Kn.s,Vs.s,t),s=fs(Kn.l,Vs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new et;et.NAMES=Wc;let ih=0;class ws extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Vn,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vs,this.blendDst=xs,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vn&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vs&&(n.blendSrc=this.blendSrc),this.blendDst!==xs&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xi extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nn=sh();function sh(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function rh(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Bt(r,-65504,65504),Nn.floatView[0]=r;const e=Nn.uint32View[0],t=e>>23&511;return Nn.baseTable[t]+((e&8388607)>>Nn.shiftTable[t])}function ah(r){const e=r>>10;return Nn.uint32View[0]=Nn.mantissaTable[Nn.offsetTable[e]+(r&1023)]+Nn.exponentTable[e],Nn.floatView[0]}const Ms={toHalfFloat:rh,fromHalfFloat:ah},_t=new w,Gs=new Me;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$o&&(e.usage=this.usage),e}}class Xc extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yc extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let oh=0;const ln=new Oe,ra=new xt,Ii=new w,en=new Mt,us=new Mt,It=new w;class Zt extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zc(e)?Yc:Xc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new an(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];us.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(en.min,us.min),en.expandByPoint(It),It.addVectors(en.max,us.max),en.expandByPoint(It)):(en.expandByPoint(us.min),en.expandByPoint(us.max))}en.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(Ii.fromBufferAttribute(e,c),It.add(Ii)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new w,u[y]=new w;const d=new w,f=new w,h=new w,g=new Me,S=new Me,p=new Me,m=new w,A=new w;function v(y,L,B){d.fromArray(i,y*3),f.fromArray(i,L*3),h.fromArray(i,B*3),g.fromArray(o,y*2),S.fromArray(o,L*2),p.fromArray(o,B*2),f.sub(d),h.sub(d),S.sub(g),p.sub(g);const N=1/(S.x*p.y-p.x*S.y);isFinite(N)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(h,-S.y).multiplyScalar(N),A.copy(h).multiplyScalar(S.x).addScaledVector(f,-p.x).multiplyScalar(N),c[y].add(m),c[L].add(m),c[B].add(m),u[y].add(A),u[L].add(A),u[B].add(A))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let y=0,L=E.length;y<L;++y){const B=E[y],N=B.start,R=B.count;for(let F=N,O=N+R;F<O;F+=3)v(n[F+0],n[F+1],n[F+2])}const C=new w,b=new w,x=new w,I=new w;function _(y){x.fromArray(s,y*3),I.copy(x);const L=c[y];C.copy(L),C.sub(x.multiplyScalar(x.dot(L))).normalize(),b.crossVectors(I,L);const N=b.dot(u[y])<0?-1:1;l[y*4]=C.x,l[y*4+1]=C.y,l[y*4+2]=C.z,l[y*4+3]=N}for(let y=0,L=E.length;y<L;++y){const B=E[y],N=B.start,R=B.count;for(let F=N,O=N+R;F<O;F+=3)_(n[F+0]),_(n[F+1]),_(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new w,s=new w,o=new w,a=new w,l=new w,c=new w,u=new w,d=new w;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),S=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?h=l[S]*a.data.stride+a.offset:h=l[S]*u;for(let m=0;m<u;m++)f[g++]=c[h++]}return new Yt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hl=new Oe,oi=new Dr,Ws=new Pr,fl=new w,Pi=new w,Di=new w,Li=new w,aa=new w,Xs=new w,Ys=new Me,qs=new Me,Qs=new Me,pl=new w,ml=new w,gl=new w,js=new w,Ks=new w;class yt extends xt{constructor(e=new Zt,t=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Xs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(aa.fromBufferAttribute(d,e),o?Xs.addScaledVector(aa,u):Xs.addScaledVector(aa.sub(t),u))}t.add(Xs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),oi.copy(e.ray).recast(e.near),!(Ws.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Ws,fl)===null||oi.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(hl.copy(s).invert(),oi.copy(e.ray).applyMatrix4(hl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=f.length;g<S;g++){const p=f[g],m=o[p.materialIndex],A=Math.max(p.start,h.start),v=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let E=A,C=v;E<C;E+=3){const b=a.getX(E),x=a.getX(E+1),I=a.getX(E+2);i=Zs(this,m,e,n,c,u,d,b,x,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),S=Math.min(a.count,h.start+h.count);for(let p=g,m=S;p<m;p+=3){const A=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);i=Zs(this,o,e,n,c,u,d,A,v,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=f.length;g<S;g++){const p=f[g],m=o[p.materialIndex],A=Math.max(p.start,h.start),v=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let E=A,C=v;E<C;E+=3){const b=E,x=E+1,I=E+2;i=Zs(this,m,e,n,c,u,d,b,x,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),S=Math.min(l.count,h.start+h.count);for(let p=g,m=S;p<m;p+=3){const A=p,v=p+1,E=p+2;i=Zs(this,o,e,n,c,u,d,A,v,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function lh(r,e,t,n,i,s,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Tn,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:r}}function Zs(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Pi),r.getVertexPosition(l,Di),r.getVertexPosition(c,Li);const u=lh(r,e,t,n,Pi,Di,Li,js);if(u){i&&(Ys.fromBufferAttribute(i,a),qs.fromBufferAttribute(i,l),Qs.fromBufferAttribute(i,c),u.uv=vn.getInterpolation(js,Pi,Di,Li,Ys,qs,Qs,new Me)),s&&(Ys.fromBufferAttribute(s,a),qs.fromBufferAttribute(s,l),Qs.fromBufferAttribute(s,c),u.uv1=vn.getInterpolation(js,Pi,Di,Li,Ys,qs,Qs,new Me),u.uv2=u.uv1),o&&(pl.fromBufferAttribute(o,a),ml.fromBufferAttribute(o,l),gl.fromBufferAttribute(o,c),u.normal=vn.getInterpolation(js,Pi,Di,Li,pl,ml,gl,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new w,materialIndex:0};vn.getNormal(Pi,Di,Li,d.normal),u.face=d}return u}class ss extends Zt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(d,2));function g(S,p,m,A,v,E,C,b,x,I,_){const y=E/x,L=C/I,B=E/2,N=C/2,R=b/2,F=x+1,O=I+1;let W=0,X=0;const z=new w;for(let H=0;H<O;H++){const q=H*L-N;for(let ie=0;ie<F;ie++){const V=ie*y-B;z[S]=V*A,z[p]=q*v,z[m]=R,c.push(z.x,z.y,z.z),z[S]=0,z[p]=0,z[m]=b>0?1:-1,u.push(z.x,z.y,z.z),d.push(ie/x),d.push(1-H/I),W+=1}}for(let H=0;H<I;H++)for(let q=0;q<x;q++){const ie=f+q+F*H,V=f+q+F*(H+1),Z=f+(q+1)+F*(H+1),j=f+(q+1)+F*H;l.push(ie,V,j),l.push(V,Z,j),X+=6}a.addGroup(h,X,_),h+=X,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function es(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(r){const e={};for(let t=0;t<r.length;t++){const n=es(r[t]);for(const i in n)e[i]=n[i]}return e}function ch(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function qc(r){return r.getRenderTarget()===null?r.outputColorSpace:at.workingColorSpace}const uh={clone:es,merge:Wt};var dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dh,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=ch(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qc extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends Qc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,Bi=1;class fh extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(Fi,Bi,e,t);i.layers=this.layers,this.add(i);const s=new nn(Fi,Bi,e,t);s.layers=this.layers,this.add(s);const o=new nn(Fi,Bi,e,t);o.layers=this.layers,this.add(o);const a=new nn(Fi,Bi,e,t);a.layers=this.layers,this.add(a);const l=new nn(Fi,Bi,e,t);l.layers=this.layers,this.add(l);const c=new nn(Fi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jc extends Kt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ph extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ps("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ai?Dt:pn),this.texture=new jc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ss(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:kn});s.uniforms.tEquirect.value=t;const o=new yt(i,s),a=t.minFilter;return t.minFilter===_s&&(t.minFilter=hn),new fh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const oa=new w,mh=new w,gh=new He;class Un{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=oa.subVectors(n,t).cross(mh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gh.getNormalMatrix(e),i=this.coplanarPoint(oa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Pr,$s=new w;class Kc{constructor(e=new Un,t=new Un,n=new Un,i=new Un,s=new Un,o=new Un){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],h=i[8],g=i[9],S=i[10],p=i[11],m=i[12],A=i[13],v=i[14],E=i[15];if(n[0].setComponents(l-s,f-c,p-h,E-m).normalize(),n[1].setComponents(l+s,f+c,p+h,E+m).normalize(),n[2].setComponents(l+o,f+u,p+g,E+A).normalize(),n[3].setComponents(l-o,f-u,p-g,E-A).normalize(),n[4].setComponents(l-a,f-d,p-S,E-v).normalize(),t===Hn)n[5].setComponents(l+a,f+d,p+S,E+v).normalize();else if(t===vr)n[5].setComponents(a,d,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($s.x=i.normal.x>0?e.max.x:e.min.x,$s.y=i.normal.y>0?e.max.y:e.min.y,$s.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zc(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Sh(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,f=c.usage,h=d.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,d,f),c.onUploadCallback();let S;if(d instanceof Float32Array)S=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)S=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=r.SHORT;else if(d instanceof Uint32Array)S=r.UNSIGNED_INT;else if(d instanceof Int32Array)S=r.INT;else if(d instanceof Int8Array)S=r.BYTE;else if(d instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:h}}function s(c,u,d){const f=u.array,h=u._updateRange,g=u.updateRanges;if(r.bindBuffer(d,c),h.count===-1&&g.length===0&&r.bufferSubData(d,0,f),g.length!==0){for(let S=0,p=g.length;S<p;S++){const m=g[S];t?r.bufferSubData(d,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):r.bufferSubData(d,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}h.count!==-1&&(t?r.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count):r.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,i(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class Es extends Zt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,f=t/l,h=[],g=[],S=[],p=[];for(let m=0;m<u;m++){const A=m*f-o;for(let v=0;v<c;v++){const E=v*d-s;g.push(E,-A,0),S.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<a;A++){const v=A+c*m,E=A+c*(m+1),C=A+1+c*(m+1),b=A+1+c*m;h.push(v,E,b),h.push(E,C,b)}this.setIndex(h),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(S,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vh=`#ifdef USE_ALPHAHASH
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
#endif`,xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ih=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ph=`#ifdef USE_IRIDESCENCE
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
#endif`,Dh=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kh=`#define PI 3.141592653589793
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
} // validated`,Vh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Gh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",jh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Kh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$h=`#ifdef USE_ENVMAP
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
#endif`,Jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,af=`#ifdef USE_GRADIENTMAP
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
}`,of=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,df=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Af=`struct PhysicalMaterial {
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,vf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rf=`#if defined( USE_POINTS_UV )
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
#endif`,If=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Df=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lf=`#ifdef USE_MORPHNORMALS
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
#endif`,Ff=`#ifdef USE_MORPHTARGETS
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
#endif`,Bf=`#ifdef USE_MORPHTARGETS
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
#endif`,Uf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Of=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
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
#endif`,Vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ip=`float getShadowMask() {
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
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dp=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Cp=`#if DEPTH_PACKING == 3200
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
}`,bp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Tp=`#define DISTANCE
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`uniform float scale;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Dp=`#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Fp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Bp=`#define LAMBERT
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
}`,Up=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Op=`#define MATCAP
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
}`,Np=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,zp=`#define NORMAL
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
}`,Hp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,kp=`#define PHONG
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
}`,Vp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Gp=`#define STANDARD
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Xp=`#define TOON
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
}`,Yp=`uniform float size;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,jp=`uniform vec3 color;
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
}`,Kp=`uniform float rotation;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Ah,alphahash_pars_fragment:vh,alphamap_fragment:xh,alphamap_pars_fragment:_h,alphatest_fragment:yh,alphatest_pars_fragment:Mh,aomap_fragment:Eh,aomap_pars_fragment:Ch,batching_pars_vertex:bh,batching_vertex:Th,begin_vertex:wh,beginnormal_vertex:Rh,bsdfs:Ih,iridescence_fragment:Ph,bumpmap_pars_fragment:Dh,clipping_planes_fragment:Lh,clipping_planes_pars_fragment:Fh,clipping_planes_pars_vertex:Bh,clipping_planes_vertex:Uh,color_fragment:Oh,color_pars_fragment:Nh,color_pars_vertex:zh,color_vertex:Hh,common:kh,cube_uv_reflection_fragment:Vh,defaultnormal_vertex:Gh,displacementmap_pars_vertex:Wh,displacementmap_vertex:Xh,emissivemap_fragment:Yh,emissivemap_pars_fragment:qh,colorspace_fragment:Qh,colorspace_pars_fragment:jh,envmap_fragment:Kh,envmap_common_pars_fragment:Zh,envmap_pars_fragment:$h,envmap_pars_vertex:Jh,envmap_physical_pars_fragment:hf,envmap_vertex:ef,fog_vertex:tf,fog_pars_vertex:nf,fog_fragment:sf,fog_pars_fragment:rf,gradientmap_pars_fragment:af,lightmap_fragment:of,lightmap_pars_fragment:lf,lights_lambert_fragment:cf,lights_lambert_pars_fragment:uf,lights_pars_begin:df,lights_toon_fragment:ff,lights_toon_pars_fragment:pf,lights_phong_fragment:mf,lights_phong_pars_fragment:gf,lights_physical_fragment:Sf,lights_physical_pars_fragment:Af,lights_fragment_begin:vf,lights_fragment_maps:xf,lights_fragment_end:_f,logdepthbuf_fragment:yf,logdepthbuf_pars_fragment:Mf,logdepthbuf_pars_vertex:Ef,logdepthbuf_vertex:Cf,map_fragment:bf,map_pars_fragment:Tf,map_particle_fragment:wf,map_particle_pars_fragment:Rf,metalnessmap_fragment:If,metalnessmap_pars_fragment:Pf,morphcolor_vertex:Df,morphnormal_vertex:Lf,morphtarget_pars_vertex:Ff,morphtarget_vertex:Bf,normal_fragment_begin:Uf,normal_fragment_maps:Of,normal_pars_fragment:Nf,normal_pars_vertex:zf,normal_vertex:Hf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:Vf,clearcoat_normal_fragment_maps:Gf,clearcoat_pars_fragment:Wf,iridescence_pars_fragment:Xf,opaque_fragment:Yf,packing:qf,premultiplied_alpha_fragment:Qf,project_vertex:jf,dithering_fragment:Kf,dithering_pars_fragment:Zf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Jf,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:tp,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:ap,skinnormal_vertex:op,specularmap_fragment:lp,specularmap_pars_fragment:cp,tonemapping_fragment:up,tonemapping_pars_fragment:dp,transmission_fragment:hp,transmission_pars_fragment:fp,uv_pars_fragment:pp,uv_pars_vertex:mp,uv_vertex:gp,worldpos_vertex:Sp,background_vert:Ap,background_frag:vp,backgroundCube_vert:xp,backgroundCube_frag:_p,cube_vert:yp,cube_frag:Mp,depth_vert:Ep,depth_frag:Cp,distanceRGBA_vert:bp,distanceRGBA_frag:Tp,equirect_vert:wp,equirect_frag:Rp,linedashed_vert:Ip,linedashed_frag:Pp,meshbasic_vert:Dp,meshbasic_frag:Lp,meshlambert_vert:Fp,meshlambert_frag:Bp,meshmatcap_vert:Up,meshmatcap_frag:Op,meshnormal_vert:Np,meshnormal_frag:zp,meshphong_vert:Hp,meshphong_frag:kp,meshphysical_vert:Vp,meshphysical_frag:Gp,meshtoon_vert:Wp,meshtoon_frag:Xp,points_vert:Yp,points_frag:qp,shadow_vert:Qp,shadow_frag:jp,sprite_vert:Kp,sprite_frag:Zp},Ae={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Mn={basic:{uniforms:Wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Wt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Wt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Wt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Wt([Ae.points,Ae.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Wt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Wt([Ae.common,Ae.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Wt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Wt([Ae.sprite,Ae.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Wt([Ae.common,Ae.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Wt([Ae.lights,Ae.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Mn.physical={uniforms:Wt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Js={r:0,b:0,g:0};function $p(r,e,t,n,i,s,o){const a=new et(0);let l=s===!0?0:1,c,u,d=null,f=0,h=null;function g(p,m){let A=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?S(a,l):v&&v.isColor&&(S(v,1),A=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||A)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Rr)?(u===void 0&&(u=new yt(new ss(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:es(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=at.getTransfer(v.colorSpace)!==ct,(d!==v||f!==v.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,h=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new yt(new Es(2,2),new mn({name:"BackgroundMaterial",uniforms:es(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=at.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,h=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function S(p,m){p.getRGB(Js,qc(r)),n.buffers.color.setClear(Js.r,Js.g,Js.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,S(a,l)},render:g}}function Jp(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function d(R,F,O,W,X){let z=!1;if(o){const H=S(W,O,F);c!==H&&(c=H,h(c.object)),z=m(R,W,O,X),z&&A(R,W,O,X)}else{const H=F.wireframe===!0;(c.geometry!==W.id||c.program!==O.id||c.wireframe!==H)&&(c.geometry=W.id,c.program=O.id,c.wireframe=H,z=!0)}X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,I(R,F,O,W),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function h(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function S(R,F,O){const W=O.wireframe===!0;let X=a[R.id];X===void 0&&(X={},a[R.id]=X);let z=X[F.id];z===void 0&&(z={},X[F.id]=z);let H=z[W];return H===void 0&&(H=p(f()),z[W]=H),H}function p(R){const F=[],O=[],W=[];for(let X=0;X<i;X++)F[X]=0,O[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:W,object:R,attributes:{},index:null}}function m(R,F,O,W){const X=c.attributes,z=F.attributes;let H=0;const q=O.getAttributes();for(const ie in q)if(q[ie].location>=0){const Z=X[ie];let j=z[ie];if(j===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),Z===void 0||Z.attribute!==j||j&&Z.data!==j.data)return!0;H++}return c.attributesNum!==H||c.index!==W}function A(R,F,O,W){const X={},z=F.attributes;let H=0;const q=O.getAttributes();for(const ie in q)if(q[ie].location>=0){let Z=z[ie];Z===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor));const j={};j.attribute=Z,Z&&Z.data&&(j.data=Z.data),X[ie]=j,H++}c.attributes=X,c.attributesNum=H,c.index=W}function v(){const R=c.newAttributes;for(let F=0,O=R.length;F<O;F++)R[F]=0}function E(R){C(R,0)}function C(R,F){const O=c.newAttributes,W=c.enabledAttributes,X=c.attributeDivisors;O[R]=1,W[R]===0&&(r.enableVertexAttribArray(R),W[R]=1),X[R]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,F),X[R]=F)}function b(){const R=c.newAttributes,F=c.enabledAttributes;for(let O=0,W=F.length;O<W;O++)F[O]!==R[O]&&(r.disableVertexAttribArray(O),F[O]=0)}function x(R,F,O,W,X,z,H){H===!0?r.vertexAttribIPointer(R,F,O,X,z):r.vertexAttribPointer(R,F,O,W,X,z)}function I(R,F,O,W){if(n.isWebGL2===!1&&(R.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const X=W.attributes,z=O.getAttributes(),H=F.defaultAttributeValues;for(const q in z){const ie=z[q];if(ie.location>=0){let V=X[q];if(V===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(V=R.instanceColor)),V!==void 0){const Z=V.normalized,j=V.itemSize,ee=t.get(V);if(ee===void 0)continue;const se=ee.buffer,ce=ee.type,fe=ee.bytesPerElement,ae=n.isWebGL2===!0&&(ce===r.INT||ce===r.UNSIGNED_INT||V.gpuType===Pc);if(V.isInterleavedBufferAttribute){const Ce=V.data,G=Ce.stride,Be=V.offset;if(Ce.isInstancedInterleavedBuffer){for(let ve=0;ve<ie.locationSize;ve++)C(ie.location+ve,Ce.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ve=0;ve<ie.locationSize;ve++)E(ie.location+ve);r.bindBuffer(r.ARRAY_BUFFER,se);for(let ve=0;ve<ie.locationSize;ve++)x(ie.location+ve,j/ie.locationSize,ce,Z,G*fe,(Be+j/ie.locationSize*ve)*fe,ae)}else{if(V.isInstancedBufferAttribute){for(let Ce=0;Ce<ie.locationSize;Ce++)C(ie.location+Ce,V.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ce=0;Ce<ie.locationSize;Ce++)E(ie.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,se);for(let Ce=0;Ce<ie.locationSize;Ce++)x(ie.location+Ce,j/ie.locationSize,ce,Z,j*fe,j/ie.locationSize*Ce*fe,ae)}}else if(H!==void 0){const Z=H[q];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(ie.location,Z);break;case 3:r.vertexAttrib3fv(ie.location,Z);break;case 4:r.vertexAttrib4fv(ie.location,Z);break;default:r.vertexAttrib1fv(ie.location,Z)}}}}b()}function _(){B();for(const R in a){const F=a[R];for(const O in F){const W=F[O];for(const X in W)g(W[X].object),delete W[X];delete F[O]}delete a[R]}}function y(R){if(a[R.id]===void 0)return;const F=a[R.id];for(const O in F){const W=F[O];for(const X in W)g(W[X].object),delete W[X];delete F[O]}delete a[R.id]}function L(R){for(const F in a){const O=a[F];if(O[R.id]===void 0)continue;const W=O[R.id];for(const X in W)g(W[X].object),delete W[X];delete O[R.id]}}function B(){N(),u=!0,c!==l&&(c=l,h(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:N,dispose:_,releaseStatesOfGeometry:y,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:E,disableUnusedAttributes:b}}function em(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,d){r.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,f){if(f===0)return;let h,g;if(i)h=r,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,u,d,f),t.update(d,s,f)}function c(u,d,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<f;g++)this.render(u[g],d[g]);else{h.multiDrawArraysWEBGL(s,u,0,d,0,f);let g=0;for(let S=0;S<f;S++)g+=d[S];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function tm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,E=o||e.has("OES_texture_float"),C=v&&E,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:h,maxCubemapSize:g,maxAttributes:S,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:A,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:b}}function nm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Un,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const A=s?0:n,v=A*4;let E=m.clippingState||null;l.value=E,E=u(g,f,v,h);for(let C=0;C!==v;++C)E[C]=t[C];m.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,g){const S=d!==null?d.length:0;let p=null;if(S!==0){if(p=l.value,g!==!0||p===null){const m=h+S*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,E=h;v!==S;++v,E+=4)o.copy(d[v]).applyMatrix4(A,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function im(r){let e=new WeakMap;function t(o,a){return a===ba?o.mapping=Ki:a===Ta&&(o.mapping=Zi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ba||a===Ta)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ph(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ya extends Qc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gi=4,Sl=[.125,.215,.35,.446,.526,.582],fi=20,la=new Ya,Al=new et;let ca=null,ua=0,da=0;const di=(1+Math.sqrt(5))/2,Ui=1/di,vl=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,di,Ui),new w(0,di,-Ui),new w(Ui,0,di),new w(-Ui,0,di),new w(di,Ui,0),new w(-di,Ui,0)];class xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ca,ua,da),e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:$i,format:Ht,colorSpace:Wn,depthBuffer:!1},i=_l(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sm(s)),this._blurMaterial=rm(s,e,t)}return i}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,n,i){const a=new nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Al),u.toneMapping=ei,u.autoClear=!1;const h=new xi({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new yt(new ss,h);let S=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,S=!0):(h.color.copy(Al),S=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):A===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;er(i,A*v,m>2?v:0,v,v),u.setRenderTarget(i),S&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ki||e.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;er(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,la)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=vl[(i-1)%vl.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new yt(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*fi-1),S=s/g,p=isFinite(s)?1+Math.floor(u*S):fi;p>fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fi}`);const m=[];let A=0;for(let x=0;x<fi;++x){const I=x/S,_=Math.exp(-I*I/2);m.push(_),x===0?A+=_:x<p&&(A+=2*_)}for(let x=0;x<m.length;x++)m[x]=m[x]/A;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const E=this._sizeLods[i],C=3*E*(i>v-Gi?i-v+Gi:0),b=4*(this._cubeSize-E);er(t,C,b,3*E,2*E),l.setRenderTarget(t),l.render(d,la)}}function sm(r){const e=[],t=[],n=[];let i=r;const s=r-Gi+1+Sl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Gi?l=Sl[o-r+Gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,S=3,p=2,m=1,A=new Float32Array(S*g*h),v=new Float32Array(p*g*h),E=new Float32Array(m*g*h);for(let b=0;b<h;b++){const x=b%3*2/3-1,I=b>2?0:-1,_=[x,I,0,x+2/3,I,0,x+2/3,I+1,0,x,I,0,x+2/3,I+1,0,x,I+1,0];A.set(_,S*g*b),v.set(f,p*g*b);const y=[b,b,b,b,b,b];E.set(y,m*g*b)}const C=new Zt;C.setAttribute("position",new Yt(A,S)),C.setAttribute("uv",new Yt(v,p)),C.setAttribute("faceIndex",new Yt(E,m)),e.push(C),i>Gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _l(r,e,t){const n=new Xn(r,e,t);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function rm(r,e,t){const n=new Float32Array(fi),i=new w(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qa(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function yl(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ml(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function qa(){return`

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
	`}function am(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ba||l===Ta,u=l===Ki||l===Zi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new xl(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new xl(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function om(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lm(r,e,t,n){const i={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const S=f.morphAttributes[g];for(let p=0,m=S.length;p<m;p++)e.remove(S[p])}f.removeEventListener("dispose",o),delete i[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const h=d.morphAttributes;for(const g in h){const S=h[g];for(let p=0,m=S.length;p<m;p++)e.update(S[p],r.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,g=d.attributes.position;let S=0;if(h!==null){const A=h.array;S=h.version;for(let v=0,E=A.length;v<E;v+=3){const C=A[v+0],b=A[v+1],x=A[v+2];f.push(C,b,b,x,x,C)}}else if(g!==void 0){const A=g.array;S=g.version;for(let v=0,E=A.length/3-1;v<E;v+=3){const C=v+0,b=v+1,x=v+2;f.push(C,b,b,x,x,C)}}else return;const p=new(zc(f)?Yc:Xc)(f,1);p.version=S;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function cm(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,g){r.drawElements(s,g,a,h*l),t.update(g,s,1)}function d(h,g,S){if(S===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,h*l,S),t.update(g,s,S)}function f(h,g,S){if(S===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<S;m++)this.render(h[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,h,0,S);let m=0;for(let A=0;A<S;A++)m+=g[A];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function um(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dm(r,e){return r[0]-e[0]}function hm(r,e){return Math.abs(e[1])-Math.abs(r[1])}function fm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new vt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=h!==void 0?h.length:0;let S=s.get(u);if(S===void 0||S.count!==g){let R=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",R)};S!==void 0&&S.texture.dispose();const A=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let I=0;A===!0&&(I=1),v===!0&&(I=2),E===!0&&(I=3);let _=u.attributes.position.count*I,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const L=new Float32Array(_*y*4*g),B=new Vc(L,_,y,g);B.type=En,B.needsUpdate=!0;const N=I*4;for(let F=0;F<g;F++){const O=C[F],W=b[F],X=x[F],z=_*y*4*F;for(let H=0;H<O.count;H++){const q=H*N;A===!0&&(o.fromBufferAttribute(O,H),L[z+q+0]=o.x,L[z+q+1]=o.y,L[z+q+2]=o.z,L[z+q+3]=0),v===!0&&(o.fromBufferAttribute(W,H),L[z+q+4]=o.x,L[z+q+5]=o.y,L[z+q+6]=o.z,L[z+q+7]=0),E===!0&&(o.fromBufferAttribute(X,H),L[z+q+8]=o.x,L[z+q+9]=o.y,L[z+q+10]=o.z,L[z+q+11]=X.itemSize===4?o.w:1)}}S={count:g,texture:B,size:new Me(_,y)},s.set(u,S),u.addEventListener("dispose",R)}let p=0;for(let A=0;A<f.length;A++)p+=f[A];const m=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",m),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",S.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}else{const h=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==h){g=[];for(let v=0;v<h;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<h;v++){const E=g[v];E[0]=v,E[1]=f[v]}g.sort(hm);for(let v=0;v<8;v++)v<h&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(dm);const S=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const E=a[v],C=E[0],b=E[1];C!==Number.MAX_SAFE_INTEGER&&b?(S&&u.getAttribute("morphTarget"+v)!==S[C]&&u.setAttribute("morphTarget"+v,S[C]),p&&u.getAttribute("morphNormal"+v)!==p[C]&&u.setAttribute("morphNormal"+v,p[C]),i[v]=b,m+=b):(S&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const A=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",A),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function pm(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Qa extends Kt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:ti,u!==ti&&u!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ti&&(n=sn),n===void 0&&u===Ji&&(n=Si),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $c=new Kt,Jc=new Qa(1,1);Jc.compareFunction=Nc;const eu=new Vc,tu=new Qd,nu=new jc,El=[],Cl=[],bl=new Float32Array(16),Tl=new Float32Array(9),wl=new Float32Array(4);function rs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=El[i];if(s===void 0&&(s=new Float32Array(i),El[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Tt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Lr(r,e){let t=Cl[e];t===void 0&&(t=new Int32Array(e),Cl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function mm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2fv(this.addr,e),Tt(t,e)}}function Sm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;r.uniform3fv(this.addr,e),Tt(t,e)}}function Am(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4fv(this.addr,e),Tt(t,e)}}function vm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;wl.set(n),r.uniformMatrix2fv(this.addr,!1,wl),Tt(t,n)}}function xm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;Tl.set(n),r.uniformMatrix3fv(this.addr,!1,Tl),Tt(t,n)}}function _m(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;bl.set(n),r.uniformMatrix4fv(this.addr,!1,bl),Tt(t,n)}}function ym(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Mm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2iv(this.addr,e),Tt(t,e)}}function Em(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3iv(this.addr,e),Tt(t,e)}}function Cm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4iv(this.addr,e),Tt(t,e)}}function bm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Tm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2uiv(this.addr,e),Tt(t,e)}}function wm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3uiv(this.addr,e),Tt(t,e)}}function Rm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4uiv(this.addr,e),Tt(t,e)}}function Im(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Jc:$c;t.setTexture2D(e||s,i)}function Pm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tu,i)}function Dm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nu,i)}function Lm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||eu,i)}function Fm(r){switch(r){case 5126:return mm;case 35664:return gm;case 35665:return Sm;case 35666:return Am;case 35674:return vm;case 35675:return xm;case 35676:return _m;case 5124:case 35670:return ym;case 35667:case 35671:return Mm;case 35668:case 35672:return Em;case 35669:case 35673:return Cm;case 5125:return bm;case 36294:return Tm;case 36295:return wm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Bm(r,e){r.uniform1fv(this.addr,e)}function Um(r,e){const t=rs(e,this.size,2);r.uniform2fv(this.addr,t)}function Om(r,e){const t=rs(e,this.size,3);r.uniform3fv(this.addr,t)}function Nm(r,e){const t=rs(e,this.size,4);r.uniform4fv(this.addr,t)}function zm(r,e){const t=rs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Hm(r,e){const t=rs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function km(r,e){const t=rs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Vm(r,e){r.uniform1iv(this.addr,e)}function Gm(r,e){r.uniform2iv(this.addr,e)}function Wm(r,e){r.uniform3iv(this.addr,e)}function Xm(r,e){r.uniform4iv(this.addr,e)}function Ym(r,e){r.uniform1uiv(this.addr,e)}function qm(r,e){r.uniform2uiv(this.addr,e)}function Qm(r,e){r.uniform3uiv(this.addr,e)}function jm(r,e){r.uniform4uiv(this.addr,e)}function Km(r,e,t){const n=this.cache,i=e.length,s=Lr(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||$c,s[o])}function Zm(r,e,t){const n=this.cache,i=e.length,s=Lr(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||tu,s[o])}function $m(r,e,t){const n=this.cache,i=e.length,s=Lr(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||nu,s[o])}function Jm(r,e,t){const n=this.cache,i=e.length,s=Lr(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||eu,s[o])}function eg(r){switch(r){case 5126:return Bm;case 35664:return Um;case 35665:return Om;case 35666:return Nm;case 35674:return zm;case 35675:return Hm;case 35676:return km;case 5124:case 35670:return Vm;case 35667:case 35671:return Gm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return Ym;case 36294:return qm;case 36295:return Qm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Jm}}class tg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fm(t.type)}}class ng{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eg(t.type)}}class ig{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function Rl(r,e){r.seq.push(e),r.map[e.id]=e}function sg(r,e,t){const n=r.name,i=n.length;for(ha.lastIndex=0;;){const s=ha.exec(n),o=ha.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Rl(t,c===void 0?new tg(a,r,e):new ng(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new ig(a),Rl(t,d)),t=d}}}class fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);sg(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Il(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const rg=37297;let ag=0;function og(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function lg(r){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(r);let n;switch(e===t?n="":e===Ar&&t===Sr?n="LinearDisplayP3ToLinearSRGB":e===Sr&&t===Ar&&(n="LinearSRGBToLinearDisplayP3"),r){case Wn:case Ir:return[n,"LinearTransferOETF"];case Dt:case Wa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Pl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+og(r.getShaderSource(e),o)}else return i}function cg(r,e){const t=lg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ug(r,e){let t;switch(e){case id:t="Linear";break;case sd:t="Reinhard";break;case rd:t="OptimizedCineon";break;case ad:t="ACESFilmic";break;case ld:t="AgX";break;case od:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wi).join(`
`)}function hg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Wi).join(`
`)}function fg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pg(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Wi(r){return r!==""}function Dl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ll(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(r){return r.replace(mg,Sg)}const gg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sg(r,e){let t=qe[e];if(t===void 0){const n=gg.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}const Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(r){return r.replace(Ag,vg)}function vg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function _g(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ki:case Zi:e="ENVMAP_TYPE_CUBE";break;case Rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function Mg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Rc:e="ENVMAP_BLENDING_MULTIPLY";break;case td:e="ENVMAP_BLENDING_MIX";break;case nd:e="ENVMAP_BLENDING_ADD";break}return e}function Eg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xg(t),c=_g(t),u=yg(t),d=Mg(t),f=Eg(t),h=t.isWebGL2?"":dg(t),g=hg(t),S=fg(s),p=i.createProgram();let m,A,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Wi).join(`
`),m.length>0&&(m+=`
`),A=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Wi).join(`
`),A.length>0&&(A+=`
`)):(m=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),A=[h,Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?qe.tonemapping_pars_fragment:"",t.toneMapping!==ei?ug("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,cg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wi).join(`
`)),o=Da(o),o=Dl(o,t),o=Ll(o,t),a=Da(a),a=Dl(a,t),a=Ll(a,t),o=Fl(o),a=Fl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,A=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const E=v+m+o,C=v+A+a,b=Il(i,i.VERTEX_SHADER,E),x=Il(i,i.FRAGMENT_SHADER,C);i.attachShader(p,b),i.attachShader(p,x),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function I(B){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(b).trim(),F=i.getShaderInfoLog(x).trim();let O=!0,W=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,b,x);else{const X=Pl(i,b,"vertex"),z=Pl(i,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+X+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(R===""||F==="")&&(W=!1);W&&(B.diagnostics={runnable:O,programLog:N,vertexShader:{log:R,prefix:m},fragmentShader:{log:F,prefix:A}})}i.deleteShader(b),i.deleteShader(x),_=new fr(i,p),y=pg(i,p)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(p,rg)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ag++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=x,this}let bg=0;class Tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wg(e),t.set(e,n)),n}}class wg{constructor(e){this.id=bg++,this.code=e,this.usedTimes=0}}function Rg(r,e,t,n,i,s,o){const a=new Gc,l=new Tg,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(_){return _===0?"uv":`uv${_}`}function p(_,y,L,B,N){const R=B.fog,F=N.geometry,O=_.isMeshStandardMaterial?B.environment:null,W=(_.isMeshStandardMaterial?t:e).get(_.envMap||O),X=W&&W.mapping===Rr?W.image.height:null,z=g[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const H=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,q=H!==void 0?H.length:0;let ie=0;F.morphAttributes.position!==void 0&&(ie=1),F.morphAttributes.normal!==void 0&&(ie=2),F.morphAttributes.color!==void 0&&(ie=3);let V,Z,j,ee;if(z){const kt=Mn[z];V=kt.vertexShader,Z=kt.fragmentShader}else V=_.vertexShader,Z=_.fragmentShader,l.update(_),j=l.getVertexShaderID(_),ee=l.getFragmentShaderID(_);const se=r.getRenderTarget(),ce=N.isInstancedMesh===!0,fe=N.isBatchedMesh===!0,ae=!!_.map,Ce=!!_.matcap,G=!!W,Be=!!_.aoMap,ve=!!_.lightMap,xe=!!_.bumpMap,_e=!!_.normalMap,Xe=!!_.displacementMap,Re=!!_.emissiveMap,P=!!_.metalnessMap,T=!!_.roughnessMap,K=_.anisotropy>0,he=_.clearcoat>0,ue=_.iridescence>0,de=_.sheen>0,Pe=_.transmission>0,ye=K&&!!_.anisotropyMap,be=he&&!!_.clearcoatMap,Fe=he&&!!_.clearcoatNormalMap,Ve=he&&!!_.clearcoatRoughnessMap,le=ue&&!!_.iridescenceMap,Qe=ue&&!!_.iridescenceThicknessMap,M=de&&!!_.sheenColorMap,Q=de&&!!_.sheenRoughnessMap,oe=!!_.specularMap,re=!!_.specularColorMap,Ee=!!_.specularIntensityMap,Ne=Pe&&!!_.transmissionMap,ke=Pe&&!!_.thicknessMap,Ye=!!_.gradientMap,ge=!!_.alphaMap,U=_.alphaTest>0,pe=!!_.alphaHash,me=!!_.extensions,De=!!F.attributes.uv1,Ie=!!F.attributes.uv2,$e=!!F.attributes.uv3;let tt=ei;return _.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(tt=r.toneMapping),{isWebGL2:u,shaderID:z,shaderType:_.type,shaderName:_.name,vertexShader:V,fragmentShader:Z,defines:_.defines,customVertexShaderID:j,customFragmentShaderID:ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:fe,instancing:ce,instancingColor:ce&&N.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Wn,map:ae,matcap:Ce,envMap:G,envMapMode:G&&W.mapping,envMapCubeUVHeight:X,aoMap:Be,lightMap:ve,bumpMap:xe,normalMap:_e,displacementMap:f&&Xe,emissiveMap:Re,normalMapObjectSpace:_e&&_.normalMapType===xd,normalMapTangentSpace:_e&&_.normalMapType===vd,metalnessMap:P,roughnessMap:T,anisotropy:K,anisotropyMap:ye,clearcoat:he,clearcoatMap:be,clearcoatNormalMap:Fe,clearcoatRoughnessMap:Ve,iridescence:ue,iridescenceMap:le,iridescenceThicknessMap:Qe,sheen:de,sheenColorMap:M,sheenRoughnessMap:Q,specularMap:oe,specularColorMap:re,specularIntensityMap:Ee,transmission:Pe,transmissionMap:Ne,thicknessMap:ke,gradientMap:Ye,opaque:_.transparent===!1&&_.blending===Vn,alphaMap:ge,alphaTest:U,alphaHash:pe,combine:_.combine,mapUv:ae&&S(_.map.channel),aoMapUv:Be&&S(_.aoMap.channel),lightMapUv:ve&&S(_.lightMap.channel),bumpMapUv:xe&&S(_.bumpMap.channel),normalMapUv:_e&&S(_.normalMap.channel),displacementMapUv:Xe&&S(_.displacementMap.channel),emissiveMapUv:Re&&S(_.emissiveMap.channel),metalnessMapUv:P&&S(_.metalnessMap.channel),roughnessMapUv:T&&S(_.roughnessMap.channel),anisotropyMapUv:ye&&S(_.anisotropyMap.channel),clearcoatMapUv:be&&S(_.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&S(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&S(_.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&S(_.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&S(_.iridescenceThicknessMap.channel),sheenColorMapUv:M&&S(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&S(_.sheenRoughnessMap.channel),specularMapUv:oe&&S(_.specularMap.channel),specularColorMapUv:re&&S(_.specularColorMap.channel),specularIntensityMapUv:Ee&&S(_.specularIntensityMap.channel),transmissionMapUv:Ne&&S(_.transmissionMap.channel),thicknessMapUv:ke&&S(_.thicknessMap.channel),alphaMapUv:ge&&S(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_e||K),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Ie,vertexUv3s:$e,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(ae||ge),fog:!!R,useFog:_.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ie,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:tt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ae&&_.map.isVideoTexture===!0&&at.getTransfer(_.map.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:me&&_.extensions.derivatives===!0,extensionFragDepth:me&&_.extensions.fragDepth===!0,extensionDrawBuffers:me&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function m(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)y.push(L),y.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(A(y,_),v(y,_),y.push(r.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function A(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function v(_,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function E(_){const y=g[_.type];let L;if(y){const B=Mn[y];L=uh.clone(B.uniforms)}else L=_.uniforms;return L}function C(_,y){let L;for(let B=0,N=c.length;B<N;B++){const R=c[B];if(R.cacheKey===y){L=R,++L.usedTimes;break}}return L===void 0&&(L=new Cg(r,y,_,s),c.push(L)),L}function b(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),_.destroy()}}function x(_){l.remove(_)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:E,acquireProgram:C,releaseProgram:b,releaseShaderCache:x,programs:c,dispose:I}}function Ig(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Pg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ul(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ol(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,h,g,S,p){let m=r[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:S,group:p},r[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=S,m.group=p),e++,m}function a(d,f,h,g,S,p){const m=o(d,f,h,g,S,p);h.transmission>0?n.push(m):h.transparent===!0?i.push(m):t.push(m)}function l(d,f,h,g,S,p){const m=o(d,f,h,g,S,p);h.transmission>0?n.unshift(m):h.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||Pg),n.length>1&&n.sort(f||Ul),i.length>1&&i.sort(f||Ul)}function u(){for(let d=e,f=r.length;d<f;d++){const h=r[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Dg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ol,r.set(n,[o])):i>=s.length?(o=new Ol,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Lg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new et};break;case"SpotLight":t={position:new w,direction:new w,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function Fg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Bg=0;function Ug(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Og(r,e){const t=new Lg,n=Fg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new w);const s=new w,o=new Oe,a=new Oe;function l(u,d){let f=0,h=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let S=0,p=0,m=0,A=0,v=0,E=0,C=0,b=0,x=0,I=0,_=0;u.sort(Ug);const y=d===!0?Math.PI:1;for(let B=0,N=u.length;B<N;B++){const R=u[B],F=R.color,O=R.intensity,W=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=F.r*O*y,h+=F.g*O*y,g+=F.b*O*y;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],O);_++}else if(R.isDirectionalLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity*y),R.castShadow){const H=R.shadow,q=n.get(R);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,i.directionalShadow[S]=q,i.directionalShadowMap[S]=X,i.directionalShadowMatrix[S]=R.shadow.matrix,E++}i.directional[S]=z,S++}else if(R.isSpotLight){const z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(F).multiplyScalar(O*y),z.distance=W,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[m]=z;const H=R.shadow;if(R.map&&(i.spotLightMap[x]=R.map,x++,H.updateMatrices(R),R.castShadow&&I++),i.spotLightMatrix[m]=H.matrix,R.castShadow){const q=n.get(R);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,i.spotShadow[m]=q,i.spotShadowMap[m]=X,b++}m++}else if(R.isRectAreaLight){const z=t.get(R);z.color.copy(F).multiplyScalar(O),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[A]=z,A++}else if(R.isPointLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity*y),z.distance=R.distance,z.decay=R.decay,R.castShadow){const H=R.shadow,q=n.get(R);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,q.shadowCameraNear=H.camera.near,q.shadowCameraFar=H.camera.far,i.pointShadow[p]=q,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=R.shadow.matrix,C++}i.point[p]=z,p++}else if(R.isHemisphereLight){const z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(O*y),z.groundColor.copy(R.groundColor).multiplyScalar(O*y),i.hemi[v]=z,v++}}A>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==S||L.pointLength!==p||L.spotLength!==m||L.rectAreaLength!==A||L.hemiLength!==v||L.numDirectionalShadows!==E||L.numPointShadows!==C||L.numSpotShadows!==b||L.numSpotMaps!==x||L.numLightProbes!==_)&&(i.directional.length=S,i.spot.length=m,i.rectArea.length=A,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=b+x-I,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=_,L.directionalLength=S,L.pointLength=p,L.spotLength=m,L.rectAreaLength=A,L.hemiLength=v,L.numDirectionalShadows=E,L.numPointShadows=C,L.numSpotShadows=b,L.numSpotMaps=x,L.numLightProbes=_,i.version=Bg++)}function c(u,d){let f=0,h=0,g=0,S=0,p=0;const m=d.matrixWorldInverse;for(let A=0,v=u.length;A<v;A++){const E=u[A];if(E.isDirectionalLight){const C=i.directional[f];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),f++}else if(E.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),g++}else if(E.isRectAreaLight){const C=i.rectArea[S];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),a.identity(),o.copy(E.matrixWorld),o.premultiply(m),a.extractRotation(o),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),S++}else if(E.isPointLight){const C=i.point[h];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const C=i.hemi[p];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function Nl(r,e){const t=new Og(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ng(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Nl(r,e),t.set(s,[l])):o>=a.length?(l=new Nl(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class iu extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zg extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kg=`uniform sampler2D shadow_pass;
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
}`;function Vg(r,e,t){let n=new Kc;const i=new Me,s=new Me,o=new vt,a=new iu({depthPacking:Oc}),l=new zg,c={},u=t.maxTextureSize,d={[Tn]:jt,[jt]:Tn,[fn]:fn},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Hg,fragmentShader:kg}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new yt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let m=this.type;this.render=function(b,x,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const _=r.getRenderTarget(),y=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),B=r.state;B.setBlending(kn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=m!==Bn&&this.type===Bn,R=m===Bn&&this.type!==Bn;for(let F=0,O=b.length;F<O;F++){const W=b[F],X=W.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const z=X.getFrameExtents();if(i.multiply(z),s.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/z.x),i.x=s.x*z.x,X.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/z.y),i.y=s.y*z.y,X.mapSize.y=s.y)),X.map===null||N===!0||R===!0){const q=this.type!==Bn?{minFilter:Ct,magFilter:Ct}:{};X.map!==null&&X.map.dispose(),X.map=new Xn(i.x,i.y,q),X.map.texture.name=W.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const H=X.getViewportCount();for(let q=0;q<H;q++){const ie=X.getViewport(q);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),B.viewport(o),X.updateMatrices(W,q),n=X.getFrustum(),E(x,I,X.camera,W,this.type)}X.isPointLightShadow!==!0&&this.type===Bn&&A(X,I),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(_,y,L)};function A(b,x){const I=e.update(S);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Xn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(x,null,I,f,S,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(x,null,I,h,S,null)}function v(b,x,I,_){let y=null;const L=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)y=L;else if(y=I.isPointLight===!0?l:a,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const B=y.uuid,N=x.uuid;let R=c[B];R===void 0&&(R={},c[B]=R);let F=R[N];F===void 0&&(F=y.clone(),R[N]=F,x.addEventListener("dispose",C)),y=F}if(y.visible=x.visible,y.wireframe=x.wireframe,_===Bn?y.side=x.shadowSide!==null?x.shadowSide:x.side:y.side=x.shadowSide!==null?x.shadowSide:d[x.side],y.alphaMap=x.alphaMap,y.alphaTest=x.alphaTest,y.map=x.map,y.clipShadows=x.clipShadows,y.clippingPlanes=x.clippingPlanes,y.clipIntersection=x.clipIntersection,y.displacementMap=x.displacementMap,y.displacementScale=x.displacementScale,y.displacementBias=x.displacementBias,y.wireframeLinewidth=x.wireframeLinewidth,y.linewidth=x.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=r.properties.get(y);B.light=I}return y}function E(b,x,I,_,y){if(b.visible===!1)return;if(b.layers.test(x.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Bn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const N=e.update(b),R=b.material;if(Array.isArray(R)){const F=N.groups;for(let O=0,W=F.length;O<W;O++){const X=F[O],z=R[X.materialIndex];if(z&&z.visible){const H=v(b,z,_,y);b.onBeforeShadow(r,b,x,I,N,H,X),r.renderBufferDirect(I,null,N,H,b,X),b.onAfterShadow(r,b,x,I,N,H,X)}}}else if(R.visible){const F=v(b,R,_,y);b.onBeforeShadow(r,b,x,I,N,F,null),r.renderBufferDirect(I,null,N,F,b,null),b.onAfterShadow(r,b,x,I,N,F,null)}}const B=b.children;for(let N=0,R=B.length;N<R;N++)E(B[N],x,I,_,y)}function C(b){b.target.removeEventListener("dispose",C);for(const I in c){const _=c[I],y=b.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}function Gg(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const pe=new vt;let me=null;const De=new vt(0,0,0,0);return{setMask:function(Ie){me!==Ie&&!U&&(r.colorMask(Ie,Ie,Ie,Ie),me=Ie)},setLocked:function(Ie){U=Ie},setClear:function(Ie,$e,tt,wt,kt){kt===!0&&(Ie*=wt,$e*=wt,tt*=wt),pe.set(Ie,$e,tt,wt),De.equals(pe)===!1&&(r.clearColor(Ie,$e,tt,wt),De.copy(pe))},reset:function(){U=!1,me=null,De.set(-1,0,0,0)}}}function s(){let U=!1,pe=null,me=null,De=null;return{setTest:function(Ie){Ie?fe(r.DEPTH_TEST):ae(r.DEPTH_TEST)},setMask:function(Ie){pe!==Ie&&!U&&(r.depthMask(Ie),pe=Ie)},setFunc:function(Ie){if(me!==Ie){switch(Ie){case Qu:r.depthFunc(r.NEVER);break;case ju:r.depthFunc(r.ALWAYS);break;case Ku:r.depthFunc(r.LESS);break;case mr:r.depthFunc(r.LEQUAL);break;case Zu:r.depthFunc(r.EQUAL);break;case $u:r.depthFunc(r.GEQUAL);break;case Ju:r.depthFunc(r.GREATER);break;case ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Ie}},setLocked:function(Ie){U=Ie},setClear:function(Ie){De!==Ie&&(r.clearDepth(Ie),De=Ie)},reset:function(){U=!1,pe=null,me=null,De=null}}}function o(){let U=!1,pe=null,me=null,De=null,Ie=null,$e=null,tt=null,wt=null,kt=null;return{setTest:function(ot){U||(ot?fe(r.STENCIL_TEST):ae(r.STENCIL_TEST))},setMask:function(ot){pe!==ot&&!U&&(r.stencilMask(ot),pe=ot)},setFunc:function(ot,Vt,yn){(me!==ot||De!==Vt||Ie!==yn)&&(r.stencilFunc(ot,Vt,yn),me=ot,De=Vt,Ie=yn)},setOp:function(ot,Vt,yn){($e!==ot||tt!==Vt||wt!==yn)&&(r.stencilOp(ot,Vt,yn),$e=ot,tt=Vt,wt=yn)},setLocked:function(ot){U=ot},setClear:function(ot){kt!==ot&&(r.clearStencil(ot),kt=ot)},reset:function(){U=!1,pe=null,me=null,De=null,Ie=null,$e=null,tt=null,wt=null,kt=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},h={},g=new WeakMap,S=[],p=null,m=!1,A=null,v=null,E=null,C=null,b=null,x=null,I=null,_=new et(0,0,0),y=0,L=!1,B=null,N=null,R=null,F=null,O=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,z=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=z>=1):H.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=z>=2);let q=null,ie={};const V=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),j=new vt().fromArray(V),ee=new vt().fromArray(Z);function se(U,pe,me,De){const Ie=new Uint8Array(4),$e=r.createTexture();r.bindTexture(U,$e),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let tt=0;tt<me;tt++)n&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(pe,0,r.RGBA,1,1,De,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(pe+tt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return $e}const ce={};ce[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ce[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(r.DEPTH_TEST),l.setFunc(mr),Re(!1),P(xo),fe(r.CULL_FACE),_e(kn);function fe(U){f[U]!==!0&&(r.enable(U),f[U]=!0)}function ae(U){f[U]!==!1&&(r.disable(U),f[U]=!1)}function Ce(U,pe){return h[U]!==pe?(r.bindFramebuffer(U,pe),h[U]=pe,n&&(U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=pe),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=pe)),!0):!1}function G(U,pe){let me=S,De=!1;if(U)if(me=g.get(pe),me===void 0&&(me=[],g.set(pe,me)),U.isWebGLMultipleRenderTargets){const Ie=U.texture;if(me.length!==Ie.length||me[0]!==r.COLOR_ATTACHMENT0){for(let $e=0,tt=Ie.length;$e<tt;$e++)me[$e]=r.COLOR_ATTACHMENT0+$e;me.length=Ie.length,De=!0}}else me[0]!==r.COLOR_ATTACHMENT0&&(me[0]=r.COLOR_ATTACHMENT0,De=!0);else me[0]!==r.BACK&&(me[0]=r.BACK,De=!0);De&&(t.isWebGL2?r.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Be(U){return p!==U?(r.useProgram(U),p=U,!0):!1}const ve={[hi]:r.FUNC_ADD,[Lu]:r.FUNC_SUBTRACT,[Fu]:r.FUNC_REVERSE_SUBTRACT};if(n)ve[Mo]=r.MIN,ve[Eo]=r.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ve[Mo]=U.MIN_EXT,ve[Eo]=U.MAX_EXT)}const xe={[Bu]:r.ZERO,[Uu]:r.ONE,[Ou]:r.SRC_COLOR,[vs]:r.SRC_ALPHA,[Gu]:r.SRC_ALPHA_SATURATE,[ku]:r.DST_COLOR,[zu]:r.DST_ALPHA,[Nu]:r.ONE_MINUS_SRC_COLOR,[xs]:r.ONE_MINUS_SRC_ALPHA,[Vu]:r.ONE_MINUS_DST_COLOR,[Hu]:r.ONE_MINUS_DST_ALPHA,[Wu]:r.CONSTANT_COLOR,[Xu]:r.ONE_MINUS_CONSTANT_COLOR,[Yu]:r.CONSTANT_ALPHA,[qu]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(U,pe,me,De,Ie,$e,tt,wt,kt,ot){if(U===kn){m===!0&&(ae(r.BLEND),m=!1);return}if(m===!1&&(fe(r.BLEND),m=!0),U!==wc){if(U!==A||ot!==L){if((v!==hi||b!==hi)&&(r.blendEquation(r.FUNC_ADD),v=hi,b=hi),ot)switch(U){case Vn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ca:r.blendFunc(r.ONE,r.ONE);break;case _o:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Vn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ca:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case _o:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,C=null,x=null,I=null,_.set(0,0,0),y=0,A=U,L=ot}return}Ie=Ie||pe,$e=$e||me,tt=tt||De,(pe!==v||Ie!==b)&&(r.blendEquationSeparate(ve[pe],ve[Ie]),v=pe,b=Ie),(me!==E||De!==C||$e!==x||tt!==I)&&(r.blendFuncSeparate(xe[me],xe[De],xe[$e],xe[tt]),E=me,C=De,x=$e,I=tt),(wt.equals(_)===!1||kt!==y)&&(r.blendColor(wt.r,wt.g,wt.b,kt),_.copy(wt),y=kt),A=U,L=!1}function Xe(U,pe){U.side===fn?ae(r.CULL_FACE):fe(r.CULL_FACE);let me=U.side===jt;pe&&(me=!me),Re(me),U.blending===Vn&&U.transparent===!1?_e(kn):_e(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const De=U.stencilWrite;c.setTest(De),De&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),K(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Re(U){B!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),B=U)}function P(U){U!==Iu?(fe(r.CULL_FACE),U!==N&&(U===xo?r.cullFace(r.BACK):U===Pu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ae(r.CULL_FACE),N=U}function T(U){U!==R&&(X&&r.lineWidth(U),R=U)}function K(U,pe,me){U?(fe(r.POLYGON_OFFSET_FILL),(F!==pe||O!==me)&&(r.polygonOffset(pe,me),F=pe,O=me)):ae(r.POLYGON_OFFSET_FILL)}function he(U){U?fe(r.SCISSOR_TEST):ae(r.SCISSOR_TEST)}function ue(U){U===void 0&&(U=r.TEXTURE0+W-1),q!==U&&(r.activeTexture(U),q=U)}function de(U,pe,me){me===void 0&&(q===null?me=r.TEXTURE0+W-1:me=q);let De=ie[me];De===void 0&&(De={type:void 0,texture:void 0},ie[me]=De),(De.type!==U||De.texture!==pe)&&(q!==me&&(r.activeTexture(me),q=me),r.bindTexture(U,pe||ce[U]),De.type=U,De.texture=pe)}function Pe(){const U=ie[q];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ye(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function M(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(U){j.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),j.copy(U))}function Ne(U){ee.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function ke(U,pe){let me=d.get(pe);me===void 0&&(me=new WeakMap,d.set(pe,me));let De=me.get(U);De===void 0&&(De=r.getUniformBlockIndex(pe,U.name),me.set(U,De))}function Ye(U,pe){const De=d.get(pe).get(U);u.get(pe)!==De&&(r.uniformBlockBinding(pe,De,U.__bindingPointIndex),u.set(pe,De))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},q=null,ie={},h={},g=new WeakMap,S=[],p=null,m=!1,A=null,v=null,E=null,C=null,b=null,x=null,I=null,_=new et(0,0,0),y=0,L=!1,B=null,N=null,R=null,F=null,O=null,j.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:fe,disable:ae,bindFramebuffer:Ce,drawBuffers:G,useProgram:Be,setBlending:_e,setMaterial:Xe,setFlipSided:Re,setCullFace:P,setLineWidth:T,setPolygonOffset:K,setScissorTest:he,activeTexture:ue,bindTexture:de,unbindTexture:Pe,compressedTexImage2D:ye,compressedTexImage3D:be,texImage2D:oe,texImage3D:re,updateUBOMapping:ke,uniformBlockBinding:Ye,texStorage2D:M,texStorage3D:Q,texSubImage2D:Fe,texSubImage3D:Ve,compressedTexSubImage2D:le,compressedTexSubImage3D:Qe,scissor:Ee,viewport:Ne,reset:ge}}function Wg(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return h?new OffscreenCanvas(P,T):_r("canvas")}function S(P,T,K,he){let ue=1;if((P.width>he||P.height>he)&&(ue=he/Math.max(P.width,P.height)),ue<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const de=T?xr:Math.floor,Pe=de(ue*P.width),ye=de(ue*P.height);d===void 0&&(d=g(Pe,ye));const be=K?g(Pe,ye):d;return be.width=Pe,be.height=ye,be.getContext("2d").drawImage(P,0,0,Pe,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Pe+"x"+ye+")."),be}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function p(P){return Pa(P.width)&&Pa(P.height)}function m(P){return a?!1:P.wrapS!==xn||P.wrapT!==xn||P.minFilter!==Ct&&P.minFilter!==hn}function A(P,T){return P.generateMipmaps&&T&&P.minFilter!==Ct&&P.minFilter!==hn}function v(P){r.generateMipmap(P)}function E(P,T,K,he,ue=!1){if(a===!1)return T;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=T;if(T===r.RED&&(K===r.FLOAT&&(de=r.R32F),K===r.HALF_FLOAT&&(de=r.R16F),K===r.UNSIGNED_BYTE&&(de=r.R8)),T===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(de=r.R8UI),K===r.UNSIGNED_SHORT&&(de=r.R16UI),K===r.UNSIGNED_INT&&(de=r.R32UI),K===r.BYTE&&(de=r.R8I),K===r.SHORT&&(de=r.R16I),K===r.INT&&(de=r.R32I)),T===r.RG&&(K===r.FLOAT&&(de=r.RG32F),K===r.HALF_FLOAT&&(de=r.RG16F),K===r.UNSIGNED_BYTE&&(de=r.RG8)),T===r.RGBA){const Pe=ue?gr:at.getTransfer(he);K===r.FLOAT&&(de=r.RGBA32F),K===r.HALF_FLOAT&&(de=r.RGBA16F),K===r.UNSIGNED_BYTE&&(de=Pe===ct?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function C(P,T,K){return A(P,K)===!0||P.isFramebufferTexture&&P.minFilter!==Ct&&P.minFilter!==hn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function b(P){return P===Ct||P===Co||P===zr?r.NEAREST:r.LINEAR}function x(P){const T=P.target;T.removeEventListener("dispose",x),_(T),T.isVideoTexture&&u.delete(T)}function I(P){const T=P.target;T.removeEventListener("dispose",I),L(T)}function _(P){const T=n.get(P);if(T.__webglInit===void 0)return;const K=P.source,he=f.get(K);if(he){const ue=he[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&y(P),Object.keys(he).length===0&&f.delete(K)}n.remove(P)}function y(P){const T=n.get(P);r.deleteTexture(T.__webglTexture);const K=P.source,he=f.get(K);delete he[T.__cacheKey],o.memory.textures--}function L(P){const T=P.texture,K=n.get(P),he=n.get(T);if(he.__webglTexture!==void 0&&(r.deleteTexture(he.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(K.__webglFramebuffer[ue]))for(let de=0;de<K.__webglFramebuffer[ue].length;de++)r.deleteFramebuffer(K.__webglFramebuffer[ue][de]);else r.deleteFramebuffer(K.__webglFramebuffer[ue]);K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer[ue])}else{if(Array.isArray(K.__webglFramebuffer))for(let ue=0;ue<K.__webglFramebuffer.length;ue++)r.deleteFramebuffer(K.__webglFramebuffer[ue]);else r.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&r.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ue=0;ue<K.__webglColorRenderbuffer.length;ue++)K.__webglColorRenderbuffer[ue]&&r.deleteRenderbuffer(K.__webglColorRenderbuffer[ue]);K.__webglDepthRenderbuffer&&r.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ue=0,de=T.length;ue<de;ue++){const Pe=n.get(T[ue]);Pe.__webglTexture&&(r.deleteTexture(Pe.__webglTexture),o.memory.textures--),n.remove(T[ue])}n.remove(T),n.remove(P)}let B=0;function N(){B=0}function R(){const P=B;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),B+=1,P}function F(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function O(P,T){const K=n.get(P);if(P.isVideoTexture&&Xe(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const he=P.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(K,P,T);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+T)}function W(P,T){const K=n.get(P);if(P.version>0&&K.__version!==P.version){j(K,P,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+T)}function X(P,T){const K=n.get(P);if(P.version>0&&K.__version!==P.version){j(K,P,T);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+T)}function z(P,T){const K=n.get(P);if(P.version>0&&K.__version!==P.version){ee(K,P,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+T)}const H={[wa]:r.REPEAT,[xn]:r.CLAMP_TO_EDGE,[Ra]:r.MIRRORED_REPEAT},q={[Ct]:r.NEAREST,[Co]:r.NEAREST_MIPMAP_NEAREST,[zr]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[cd]:r.LINEAR_MIPMAP_NEAREST,[_s]:r.LINEAR_MIPMAP_LINEAR},ie={[_d]:r.NEVER,[Td]:r.ALWAYS,[yd]:r.LESS,[Nc]:r.LEQUAL,[Md]:r.EQUAL,[bd]:r.GEQUAL,[Ed]:r.GREATER,[Cd]:r.NOTEQUAL};function V(P,T,K){if(K?(r.texParameteri(P,r.TEXTURE_WRAP_S,H[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,H[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,H[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,q[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,q[T.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==xn||T.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,b(T.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,b(T.minFilter)),T.minFilter!==Ct&&T.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ie[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const he=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ct||T.minFilter!==zr&&T.minFilter!==_s||T.type===En&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===$i&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(P,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Z(P,T){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",x));const he=T.source;let ue=f.get(he);ue===void 0&&(ue={},f.set(he,ue));const de=F(T);if(de!==P.__cacheKey){ue[de]===void 0&&(ue[de]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ue[de].usedTimes++;const Pe=ue[P.__cacheKey];Pe!==void 0&&(ue[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&y(T)),P.__cacheKey=de,P.__webglTexture=ue[de].texture}return K}function j(P,T,K){let he=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=r.TEXTURE_3D);const ue=Z(P,T),de=T.source;t.bindTexture(he,P.__webglTexture,r.TEXTURE0+K);const Pe=n.get(de);if(de.version!==Pe.__version||ue===!0){t.activeTexture(r.TEXTURE0+K);const ye=at.getPrimaries(at.workingColorSpace),be=T.colorSpace===pn?null:at.getPrimaries(T.colorSpace),Fe=T.colorSpace===pn||ye===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ve=m(T)&&p(T.image)===!1;let le=S(T.image,Ve,!1,i.maxTextureSize);le=Re(T,le);const Qe=p(le)||a,M=s.convert(T.format,T.colorSpace);let Q=s.convert(T.type),oe=E(T.internalFormat,M,Q,T.colorSpace,T.isVideoTexture);V(he,T,Qe);let re;const Ee=T.mipmaps,Ne=a&&T.isVideoTexture!==!0&&oe!==Bc,ke=Pe.__version===void 0||ue===!0,Ye=C(T,le,Qe);if(T.isDepthTexture)oe=r.DEPTH_COMPONENT,a?T.type===En?oe=r.DEPTH_COMPONENT32F:T.type===sn?oe=r.DEPTH_COMPONENT24:T.type===Si?oe=r.DEPTH24_STENCIL8:oe=r.DEPTH_COMPONENT16:T.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ti&&oe===r.DEPTH_COMPONENT&&T.type!==Va&&T.type!==sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=sn,Q=s.convert(T.type)),T.format===Ji&&oe===r.DEPTH_COMPONENT&&(oe=r.DEPTH_STENCIL,T.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Si,Q=s.convert(T.type))),ke&&(Ne?t.texStorage2D(r.TEXTURE_2D,1,oe,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,oe,le.width,le.height,0,M,Q,null));else if(T.isDataTexture)if(Ee.length>0&&Qe){Ne&&ke&&t.texStorage2D(r.TEXTURE_2D,Ye,oe,Ee[0].width,Ee[0].height);for(let ge=0,U=Ee.length;ge<U;ge++)re=Ee[ge],Ne?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,re.width,re.height,M,Q,re.data):t.texImage2D(r.TEXTURE_2D,ge,oe,re.width,re.height,0,M,Q,re.data);T.generateMipmaps=!1}else Ne?(ke&&t.texStorage2D(r.TEXTURE_2D,Ye,oe,le.width,le.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,le.width,le.height,M,Q,le.data)):t.texImage2D(r.TEXTURE_2D,0,oe,le.width,le.height,0,M,Q,le.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ne&&ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ye,oe,Ee[0].width,Ee[0].height,le.depth);for(let ge=0,U=Ee.length;ge<U;ge++)re=Ee[ge],T.format!==Ht?M!==null?Ne?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,re.width,re.height,le.depth,M,re.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,oe,re.width,re.height,le.depth,0,re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,re.width,re.height,le.depth,M,Q,re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ge,oe,re.width,re.height,le.depth,0,M,Q,re.data)}else{Ne&&ke&&t.texStorage2D(r.TEXTURE_2D,Ye,oe,Ee[0].width,Ee[0].height);for(let ge=0,U=Ee.length;ge<U;ge++)re=Ee[ge],T.format!==Ht?M!==null?Ne?t.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,re.width,re.height,M,re.data):t.compressedTexImage2D(r.TEXTURE_2D,ge,oe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,re.width,re.height,M,Q,re.data):t.texImage2D(r.TEXTURE_2D,ge,oe,re.width,re.height,0,M,Q,re.data)}else if(T.isDataArrayTexture)Ne?(ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ye,oe,le.width,le.height,le.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,M,Q,le.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,oe,le.width,le.height,le.depth,0,M,Q,le.data);else if(T.isData3DTexture)Ne?(ke&&t.texStorage3D(r.TEXTURE_3D,Ye,oe,le.width,le.height,le.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,M,Q,le.data)):t.texImage3D(r.TEXTURE_3D,0,oe,le.width,le.height,le.depth,0,M,Q,le.data);else if(T.isFramebufferTexture){if(ke)if(Ne)t.texStorage2D(r.TEXTURE_2D,Ye,oe,le.width,le.height);else{let ge=le.width,U=le.height;for(let pe=0;pe<Ye;pe++)t.texImage2D(r.TEXTURE_2D,pe,oe,ge,U,0,M,Q,null),ge>>=1,U>>=1}}else if(Ee.length>0&&Qe){Ne&&ke&&t.texStorage2D(r.TEXTURE_2D,Ye,oe,Ee[0].width,Ee[0].height);for(let ge=0,U=Ee.length;ge<U;ge++)re=Ee[ge],Ne?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,M,Q,re):t.texImage2D(r.TEXTURE_2D,ge,oe,M,Q,re);T.generateMipmaps=!1}else Ne?(ke&&t.texStorage2D(r.TEXTURE_2D,Ye,oe,le.width,le.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,M,Q,le)):t.texImage2D(r.TEXTURE_2D,0,oe,M,Q,le);A(T,Qe)&&v(he),Pe.__version=de.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ee(P,T,K){if(T.image.length!==6)return;const he=Z(P,T),ue=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+K);const de=n.get(ue);if(ue.version!==de.__version||he===!0){t.activeTexture(r.TEXTURE0+K);const Pe=at.getPrimaries(at.workingColorSpace),ye=T.colorSpace===pn?null:at.getPrimaries(T.colorSpace),be=T.colorSpace===pn||Pe===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,Ve=T.image[0]&&T.image[0].isDataTexture,le=[];for(let ge=0;ge<6;ge++)!Fe&&!Ve?le[ge]=S(T.image[ge],!1,!0,i.maxCubemapSize):le[ge]=Ve?T.image[ge].image:T.image[ge],le[ge]=Re(T,le[ge]);const Qe=le[0],M=p(Qe)||a,Q=s.convert(T.format,T.colorSpace),oe=s.convert(T.type),re=E(T.internalFormat,Q,oe,T.colorSpace),Ee=a&&T.isVideoTexture!==!0,Ne=de.__version===void 0||he===!0;let ke=C(T,Qe,M);V(r.TEXTURE_CUBE_MAP,T,M);let Ye;if(Fe){Ee&&Ne&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,re,Qe.width,Qe.height);for(let ge=0;ge<6;ge++){Ye=le[ge].mipmaps;for(let U=0;U<Ye.length;U++){const pe=Ye[U];T.format!==Ht?Q!==null?Ee?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U,0,0,pe.width,pe.height,Q,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U,re,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U,0,0,pe.width,pe.height,Q,oe,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U,re,pe.width,pe.height,0,Q,oe,pe.data)}}}else{Ye=T.mipmaps,Ee&&Ne&&(Ye.length>0&&ke++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,re,le[0].width,le[0].height));for(let ge=0;ge<6;ge++)if(Ve){Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,le[ge].width,le[ge].height,Q,oe,le[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,re,le[ge].width,le[ge].height,0,Q,oe,le[ge].data);for(let U=0;U<Ye.length;U++){const me=Ye[U].image[ge].image;Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U+1,0,0,me.width,me.height,Q,oe,me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U+1,re,me.width,me.height,0,Q,oe,me.data)}}else{Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Q,oe,le[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,re,Q,oe,le[ge]);for(let U=0;U<Ye.length;U++){const pe=Ye[U];Ee?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U+1,0,0,Q,oe,pe.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U+1,re,Q,oe,pe.image[ge])}}}A(T,M)&&v(r.TEXTURE_CUBE_MAP),de.__version=ue.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function se(P,T,K,he,ue,de){const Pe=s.convert(K.format,K.colorSpace),ye=s.convert(K.type),be=E(K.internalFormat,Pe,ye,K.colorSpace);if(!n.get(T).__hasExternalTextures){const Ve=Math.max(1,T.width>>de),le=Math.max(1,T.height>>de);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?t.texImage3D(ue,de,be,Ve,le,T.depth,0,Pe,ye,null):t.texImage2D(ue,de,be,Ve,le,0,Pe,ye,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),_e(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ue,n.get(K).__webglTexture,0,xe(T)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,ue,n.get(K).__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ce(P,T,K){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let he=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(K||_e(T)){const ue=T.depthTexture;ue&&ue.isDepthTexture&&(ue.type===En?he=r.DEPTH_COMPONENT32F:ue.type===sn&&(he=r.DEPTH_COMPONENT24));const de=xe(T);_e(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,he,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,de,he,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,he,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const he=xe(T);K&&_e(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,r.DEPTH24_STENCIL8,T.width,T.height):_e(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const he=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ue=0;ue<he.length;ue++){const de=he[ue],Pe=s.convert(de.format,de.colorSpace),ye=s.convert(de.type),be=E(de.internalFormat,Pe,ye,de.colorSpace),Fe=xe(T);K&&_e(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,be,T.width,T.height):_e(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Fe,be,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,be,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const he=n.get(T.depthTexture).__webglTexture,ue=xe(T);if(T.depthTexture.format===ti)_e(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,he,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,he,0);else if(T.depthTexture.format===Ji)_e(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,he,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function ae(P){const T=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");fe(T.__webglFramebuffer,P)}else if(K){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]=r.createRenderbuffer(),ce(T.__webglDepthbuffer[he],P,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),ce(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(P,T,K){const he=n.get(P);T!==void 0&&se(he.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&ae(P)}function G(P){const T=P.texture,K=n.get(P),he=n.get(T);P.addEventListener("dispose",I),P.isWebGLMultipleRenderTargets!==!0&&(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=T.version,o.memory.textures++);const ue=P.isWebGLCubeRenderTarget===!0,de=P.isWebGLMultipleRenderTargets===!0,Pe=p(P)||a;if(ue){K.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(a&&T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[ye]=[];for(let be=0;be<T.mipmaps.length;be++)K.__webglFramebuffer[ye][be]=r.createFramebuffer()}else K.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)K.__webglFramebuffer[ye]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(de)if(i.drawBuffers){const ye=P.texture;for(let be=0,Fe=ye.length;be<Fe;be++){const Ve=n.get(ye[be]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&_e(P)===!1){const ye=de?T:[T];K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let be=0;be<ye.length;be++){const Fe=ye[be];K.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[be]);const Ve=s.convert(Fe.format,Fe.colorSpace),le=s.convert(Fe.type),Qe=E(Fe.internalFormat,Ve,le,Fe.colorSpace,P.isXRRenderTarget===!0),M=xe(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,M,Qe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,K.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),ce(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),V(r.TEXTURE_CUBE_MAP,T,Pe);for(let ye=0;ye<6;ye++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)se(K.__webglFramebuffer[ye][be],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,be);else se(K.__webglFramebuffer[ye],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);A(T,Pe)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const ye=P.texture;for(let be=0,Fe=ye.length;be<Fe;be++){const Ve=ye[be],le=n.get(Ve);t.bindTexture(r.TEXTURE_2D,le.__webglTexture),V(r.TEXTURE_2D,Ve,Pe),se(K.__webglFramebuffer,P,Ve,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),A(Ve,Pe)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ye=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,he.__webglTexture),V(ye,T,Pe),a&&T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)se(K.__webglFramebuffer[be],P,T,r.COLOR_ATTACHMENT0,ye,be);else se(K.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,ye,0);A(T,Pe)&&v(ye),t.unbindTexture()}P.depthBuffer&&ae(P)}function Be(P){const T=p(P)||a,K=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let he=0,ue=K.length;he<ue;he++){const de=K[he];if(A(de,T)){const Pe=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ye=n.get(de).__webglTexture;t.bindTexture(Pe,ye),v(Pe),t.unbindTexture()}}}function ve(P){if(a&&P.samples>0&&_e(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],K=P.width,he=P.height;let ue=r.COLOR_BUFFER_BIT;const de=[],Pe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(P),be=P.isWebGLMultipleRenderTargets===!0;if(be)for(let Fe=0;Fe<T.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){de.push(r.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&de.push(Pe);const Ve=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Ve===!1&&(P.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),be&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Fe]),Ve===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Pe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Pe])),be){const le=n.get(T[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,le,0)}r.blitFramebuffer(0,0,K,he,0,0,K,he,ue,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Fe=0;Fe<T.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Fe]);const Ve=n.get(T[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,Ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function xe(P){return Math.min(i.maxSamples,P.samples)}function _e(P){const T=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xe(P){const T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Re(P,T){const K=P.colorSpace,he=P.format,ue=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Ia||K!==Wn&&K!==pn&&(at.getTransfer(K)===ct?a===!1?e.has("EXT_sRGB")===!0&&he===Ht?(P.format=Ia,P.minFilter=hn,P.generateMipmaps=!1):T=Hc.sRGBToLinear(T):(he!==Ht||ue!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}this.allocateTextureUnit=R,this.resetTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=Ce,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=se,this.useMultisampledRTT=_e}function su(r,e,t){const n=t.isWebGL2;function i(s,o=pn){let a;const l=at.getTransfer(o);if(s===bn)return r.UNSIGNED_BYTE;if(s===Dc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Lc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ud)return r.BYTE;if(s===dd)return r.SHORT;if(s===Va)return r.UNSIGNED_SHORT;if(s===Pc)return r.INT;if(s===sn)return r.UNSIGNED_INT;if(s===En)return r.FLOAT;if(s===$i)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===hd)return r.ALPHA;if(s===Ht)return r.RGBA;if(s===fd)return r.LUMINANCE;if(s===pd)return r.LUMINANCE_ALPHA;if(s===ti)return r.DEPTH_COMPONENT;if(s===Ji)return r.DEPTH_STENCIL;if(s===Ia)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===md)return r.RED;if(s===Ga)return r.RED_INTEGER;if(s===gd)return r.RG;if(s===Fc)return r.RG_INTEGER;if(s===ds)return r.RGBA_INTEGER;if(s===Hr||s===kr||s===Vr||s===Gr)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Hr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Hr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bo||s===To||s===wo||s===Ro)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===bo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===To)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ro)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Io||s===Po)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Io)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Po)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Do||s===Lo||s===Fo||s===Bo||s===Uo||s===Oo||s===No||s===zo||s===Ho||s===ko||s===Vo||s===Go||s===Wo||s===Xo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Do)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Uo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Oo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===No)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ho)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ko)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Go)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wr||s===Yo||s===qo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Wr)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sd||s===Qo||s===jo||s===Ko)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Wr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Qo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===jo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ko)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Si?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Xg extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tr extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yg={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,n),m=this._getHandJoint(c,S);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qg extends ni{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const S=t.getContextAttributes();let p=null,m=null;const A=[],v=[],E=new Me;let C=null;const b=new nn;b.layers.enable(1),b.viewport=new vt;const x=new nn;x.layers.enable(2),x.viewport=new vt;const I=[b,x],_=new Xg;_.layers.enable(1),_.layers.enable(2);let y=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=A[V];return Z===void 0&&(Z=new fa,A[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=A[V];return Z===void 0&&(Z=new fa,A[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=A[V];return Z===void 0&&(Z=new fa,A[V]=Z),Z.getHandSpace()};function B(V){const Z=v.indexOf(V.inputSource);if(Z===-1)return;const j=A[Z];j!==void 0&&(j.update(V.inputSource,V.frame,c||o),j.dispatchEvent({type:V.type,data:V.inputSource}))}function N(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",R);for(let V=0;V<A.length;V++){const Z=v[V];Z!==null&&(v[V]=null,A[V].disconnect(Z))}y=null,L=null,e.setRenderTarget(p),h=null,f=null,d=null,i=null,m=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",N),i.addEventListener("inputsourceschange",R),S.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),m=new Xn(h.framebufferWidth,h.framebufferHeight,{format:Ht,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let Z=null,j=null,ee=null;S.depth&&(ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=S.stencil?Ji:ti,j=S.stencil?Si:sn);const se={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(se),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new Xn(f.textureWidth,f.textureHeight,{format:Ht,type:bn,depthTexture:new Qa(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const ce=e.properties.get(m);ce.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(V){for(let Z=0;Z<V.removed.length;Z++){const j=V.removed[Z],ee=v.indexOf(j);ee>=0&&(v[ee]=null,A[ee].disconnect(j))}for(let Z=0;Z<V.added.length;Z++){const j=V.added[Z];let ee=v.indexOf(j);if(ee===-1){for(let ce=0;ce<A.length;ce++)if(ce>=v.length){v.push(j),ee=ce;break}else if(v[ce]===null){v[ce]=j,ee=ce;break}if(ee===-1)break}const se=A[ee];se&&se.connect(j)}}const F=new w,O=new w;function W(V,Z,j){F.setFromMatrixPosition(Z.matrixWorld),O.setFromMatrixPosition(j.matrixWorld);const ee=F.distanceTo(O),se=Z.projectionMatrix.elements,ce=j.projectionMatrix.elements,fe=se[14]/(se[10]-1),ae=se[14]/(se[10]+1),Ce=(se[9]+1)/se[5],G=(se[9]-1)/se[5],Be=(se[8]-1)/se[0],ve=(ce[8]+1)/ce[0],xe=fe*Be,_e=fe*ve,Xe=ee/(-Be+ve),Re=Xe*-Be;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Re),V.translateZ(Xe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const P=fe+Xe,T=ae+Xe,K=xe-Re,he=_e+(ee-Re),ue=Ce*ae/T*P,de=G*ae/T*P;V.projectionMatrix.makePerspective(K,he,ue,de,P,T),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;_.near=x.near=b.near=V.near,_.far=x.far=b.far=V.far,(y!==_.near||L!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,L=_.far);const Z=V.parent,j=_.cameras;X(_,Z);for(let ee=0;ee<j.length;ee++)X(j[ee],Z);j.length===2?W(_,b,x):_.projectionMatrix.copy(b.projectionMatrix),z(V,_,Z)};function z(V,Z,j){j===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(j.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ys*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)};let H=null;function q(V,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const j=u.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let ee=!1;j.length!==_.cameras.length&&(_.cameras.length=0,ee=!0);for(let se=0;se<j.length;se++){const ce=j[se];let fe=null;if(h!==null)fe=h.getViewport(ce);else{const Ce=d.getViewSubImage(f,ce);fe=Ce.viewport,se===0&&(e.setRenderTargetTextures(m,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(m))}let ae=I[se];ae===void 0&&(ae=new nn,ae.layers.enable(se),ae.viewport=new vt,I[se]=ae),ae.matrix.fromArray(ce.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ce.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(fe.x,fe.y,fe.width,fe.height),se===0&&(_.matrix.copy(ae.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ee===!0&&_.cameras.push(ae)}}for(let j=0;j<A.length;j++){const ee=v[j],se=A[j];ee!==null&&se!==void 0&&se.update(ee,Z,c||o)}H&&H(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ie=new Zc;ie.setAnimationLoop(q),this.setAnimationLoop=function(V){H=V},this.dispose=function(){}}}function Qg(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,qc(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,A,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,E)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),S(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,A,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const A=e.get(m).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,A,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*A,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,A){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function S(p,m){const A=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jg(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,v){const E=v.program;n.uniformBlockBinding(A,E)}function c(A,v){let E=i[A.id];E===void 0&&(g(A),E=u(A),i[A.id]=E,A.addEventListener("dispose",p));const C=v.program;n.updateUBOMapping(A,C);const b=e.render.frame;s[A.id]!==b&&(f(A),s[A.id]=b)}function u(A){const v=d();A.__bindingPointIndex=v;const E=r.createBuffer(),C=A.__size,b=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,C,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,E),E}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const v=i[A.id],E=A.uniforms,C=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,x=E.length;b<x;b++){const I=Array.isArray(E[b])?E[b]:[E[b]];for(let _=0,y=I.length;_<y;_++){const L=I[_];if(h(L,b,_,C)===!0){const B=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let R=0;for(let F=0;F<N.length;F++){const O=N[F],W=S(O);typeof O=="number"||typeof O=="boolean"?(L.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,B+R,L.__data)):O.isMatrix3?(L.__data[0]=O.elements[0],L.__data[1]=O.elements[1],L.__data[2]=O.elements[2],L.__data[3]=0,L.__data[4]=O.elements[3],L.__data[5]=O.elements[4],L.__data[6]=O.elements[5],L.__data[7]=0,L.__data[8]=O.elements[6],L.__data[9]=O.elements[7],L.__data[10]=O.elements[8],L.__data[11]=0):(O.toArray(L.__data,R),R+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(A,v,E,C){const b=A.value,x=v+"_"+E;if(C[x]===void 0)return typeof b=="number"||typeof b=="boolean"?C[x]=b:C[x]=b.clone(),!0;{const I=C[x];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return C[x]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(A){const v=A.uniforms;let E=0;const C=16;for(let x=0,I=v.length;x<I;x++){const _=Array.isArray(v[x])?v[x]:[v[x]];for(let y=0,L=_.length;y<L;y++){const B=_[y],N=Array.isArray(B.value)?B.value:[B.value];for(let R=0,F=N.length;R<F;R++){const O=N[R],W=S(O),X=E%C;X!==0&&C-X<W.boundary&&(E+=C-X),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=W.storage}}}const b=E%C;return b>0&&(E+=C-b),A.__size=E,A.__cache={},this}function S(A){const v={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function p(A){const v=A.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const A in i)r.deleteBuffer(i[A]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class ja{constructor(e={}){const{canvas:t=Gd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const h=new Uint32Array(4),g=new Int32Array(4);let S=null,p=null;const m=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=ei,this.toneMappingExposure=1;const v=this;let E=!1,C=0,b=0,x=null,I=-1,_=null;const y=new vt,L=new vt;let B=null;const N=new et(0);let R=0,F=t.width,O=t.height,W=1,X=null,z=null;const H=new vt(0,0,F,O),q=new vt(0,0,F,O);let ie=!1;const V=new Kc;let Z=!1,j=!1,ee=null;const se=new Oe,ce=new Me,fe=new w,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return x===null?W:1}let G=n;function Be(D,Y){for(let J=0;J<D.length;J++){const te=D[J],$=t.getContext(te,Y);if($!==null)return $}return null}try{const D={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",pe,!1),G===null){const Y=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Y.shift(),G=Be(Y,D),G===null)throw Be(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ve,xe,_e,Xe,Re,P,T,K,he,ue,de,Pe,ye,be,Fe,Ve,le,Qe,M,Q,oe,re,Ee,Ne;function ke(){ve=new om(G),xe=new tm(G,ve,e),ve.init(xe),re=new su(G,ve,xe),_e=new Gg(G,ve,xe),Xe=new um(G),Re=new Ig,P=new Wg(G,ve,_e,Re,xe,re,Xe),T=new im(v),K=new am(v),he=new Sh(G,xe),Ee=new Jp(G,ve,he,xe),ue=new lm(G,he,Xe,Ee),de=new pm(G,ue,he,Xe),M=new fm(G,xe,P),Ve=new nm(Re),Pe=new Rg(v,T,K,ve,xe,Ee,Ve),ye=new Qg(v,Re),be=new Dg,Fe=new Ng(ve,xe),Qe=new $p(v,T,K,_e,de,f,l),le=new Vg(v,de,xe),Ne=new jg(G,Xe,xe,_e),Q=new em(G,ve,Xe,xe),oe=new cm(G,ve,Xe,xe),Xe.programs=Pe.programs,v.capabilities=xe,v.extensions=ve,v.properties=Re,v.renderLists=be,v.shadowMap=le,v.state=_e,v.info=Xe}ke();const Ye=new qg(v,G);this.xr=Ye,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const D=ve.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ve.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(D){D!==void 0&&(W=D,this.setSize(F,O,!1))},this.getSize=function(D){return D.set(F,O)},this.setSize=function(D,Y,J=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,O=Y,t.width=Math.floor(D*W),t.height=Math.floor(Y*W),J===!0&&(t.style.width=D+"px",t.style.height=Y+"px"),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(F*W,O*W).floor()},this.setDrawingBufferSize=function(D,Y,J){F=D,O=Y,W=J,t.width=Math.floor(D*J),t.height=Math.floor(Y*J),this.setViewport(0,0,D,Y)},this.getCurrentViewport=function(D){return D.copy(y)},this.getViewport=function(D){return D.copy(H)},this.setViewport=function(D,Y,J,te){D.isVector4?H.set(D.x,D.y,D.z,D.w):H.set(D,Y,J,te),_e.viewport(y.copy(H).multiplyScalar(W).floor())},this.getScissor=function(D){return D.copy(q)},this.setScissor=function(D,Y,J,te){D.isVector4?q.set(D.x,D.y,D.z,D.w):q.set(D,Y,J,te),_e.scissor(L.copy(q).multiplyScalar(W).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(D){_e.setScissorTest(ie=D)},this.setOpaqueSort=function(D){X=D},this.setTransparentSort=function(D){z=D},this.getClearColor=function(D){return D.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(D=!0,Y=!0,J=!0){let te=0;if(D){let $=!1;if(x!==null){const Te=x.texture.format;$=Te===ds||Te===Fc||Te===Ga}if($){const Te=x.texture.type,Le=Te===bn||Te===sn||Te===Va||Te===Si||Te===Dc||Te===Lc,Ue=Qe.getClearColor(),ze=Qe.getClearAlpha(),je=Ue.r,Ge=Ue.g,We=Ue.b;Le?(h[0]=je,h[1]=Ge,h[2]=We,h[3]=ze,G.clearBufferuiv(G.COLOR,0,h)):(g[0]=je,g[1]=Ge,g[2]=We,g[3]=ze,G.clearBufferiv(G.COLOR,0,g))}else te|=G.COLOR_BUFFER_BIT}Y&&(te|=G.DEPTH_BUFFER_BIT),J&&(te|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),be.dispose(),Fe.dispose(),Re.dispose(),T.dispose(),K.dispose(),de.dispose(),Ee.dispose(),Ne.dispose(),Pe.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",kt),Ye.removeEventListener("sessionend",ot),ee&&(ee.dispose(),ee=null),Vt.stop()};function ge(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const D=Xe.autoReset,Y=le.enabled,J=le.autoUpdate,te=le.needsUpdate,$=le.type;ke(),Xe.autoReset=D,le.enabled=Y,le.autoUpdate=J,le.needsUpdate=te,le.type=$}function pe(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function me(D){const Y=D.target;Y.removeEventListener("dispose",me),De(Y)}function De(D){Ie(D),Re.remove(D)}function Ie(D){const Y=Re.get(D).programs;Y!==void 0&&(Y.forEach(function(J){Pe.releaseProgram(J)}),D.isShaderMaterial&&Pe.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,J,te,$,Te){Y===null&&(Y=ae);const Le=$.isMesh&&$.matrixWorld.determinant()<0,Ue=vu(D,Y,J,te,$);_e.setMaterial(te,Le);let ze=J.index,je=1;if(te.wireframe===!0){if(ze=ue.getWireframeAttribute(J),ze===void 0)return;je=2}const Ge=J.drawRange,We=J.attributes.position;let gt=Ge.start*je,$t=(Ge.start+Ge.count)*je;Te!==null&&(gt=Math.max(gt,Te.start*je),$t=Math.min($t,(Te.start+Te.count)*je)),ze!==null?(gt=Math.max(gt,0),$t=Math.min($t,ze.count)):We!=null&&(gt=Math.max(gt,0),$t=Math.min($t,We.count));const Rt=$t-gt;if(Rt<0||Rt===1/0)return;Ee.setup($,te,Ue,J,ze);let wn,ft=Q;if(ze!==null&&(wn=he.get(ze),ft=oe,ft.setIndex(wn)),$.isMesh)te.wireframe===!0?(_e.setLineWidth(te.wireframeLinewidth*Ce()),ft.setMode(G.LINES)):ft.setMode(G.TRIANGLES);else if($.isLine){let Ke=te.linewidth;Ke===void 0&&(Ke=1),_e.setLineWidth(Ke*Ce()),$.isLineSegments?ft.setMode(G.LINES):$.isLineLoop?ft.setMode(G.LINE_LOOP):ft.setMode(G.LINE_STRIP)}else $.isPoints?ft.setMode(G.POINTS):$.isSprite&&ft.setMode(G.TRIANGLES);if($.isBatchedMesh)ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)ft.renderInstances(gt,Rt,$.count);else if(J.isInstancedBufferGeometry){const Ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Br=Math.min(J.instanceCount,Ke);ft.renderInstances(gt,Rt,Br)}else ft.render(gt,Rt)};function $e(D,Y,J){D.transparent===!0&&D.side===fn&&D.forceSinglePass===!1?(D.side=jt,D.needsUpdate=!0,Ps(D,Y,J),D.side=Tn,D.needsUpdate=!0,Ps(D,Y,J),D.side=fn):Ps(D,Y,J)}this.compile=function(D,Y,J=null){J===null&&(J=D),p=Fe.get(J),p.init(),A.push(p),J.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),D!==J&&D.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(v._useLegacyLights);const te=new Set;return D.traverse(function($){const Te=$.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const Ue=Te[Le];$e(Ue,J,$),te.add(Ue)}else $e(Te,J,$),te.add(Te)}),A.pop(),p=null,te},this.compileAsync=function(D,Y,J=null){const te=this.compile(D,Y,J);return new Promise($=>{function Te(){if(te.forEach(function(Le){Re.get(Le).currentProgram.isReady()&&te.delete(Le)}),te.size===0){$(D);return}setTimeout(Te,10)}ve.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let tt=null;function wt(D){tt&&tt(D)}function kt(){Vt.stop()}function ot(){Vt.start()}const Vt=new Zc;Vt.setAnimationLoop(wt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(D){tt=D,Ye.setAnimationLoop(D),D===null?Vt.stop():Vt.start()},Ye.addEventListener("sessionstart",kt),Ye.addEventListener("sessionend",ot),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(Y),Y=Ye.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,Y,x),p=Fe.get(D,A.length),p.init(),A.push(p),se.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V.setFromProjectionMatrix(se),j=this.localClippingEnabled,Z=Ve.init(this.clippingPlanes,j),S=be.get(D,m.length),S.init(),m.push(S),yn(D,Y,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(X,z),this.info.render.frame++,Z===!0&&Ve.beginShadows();const J=p.state.shadowsArray;if(le.render(J,D,Y),Z===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(S,D),p.setupLights(v._useLegacyLights),Y.isArrayCamera){const te=Y.cameras;for(let $=0,Te=te.length;$<Te;$++){const Le=te[$];fo(S,D,Le,Le.viewport)}}else fo(S,D,Y);x!==null&&(P.updateMultisampleRenderTarget(x),P.updateRenderTargetMipmap(x)),D.isScene===!0&&D.onAfterRender(v,D,Y),Ee.resetDefaultState(),I=-1,_=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,m.pop(),m.length>0?S=m[m.length-1]:S=null};function yn(D,Y,J,te){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)J=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||V.intersectsSprite(D)){te&&fe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(se);const Le=de.update(D),Ue=D.material;Ue.visible&&S.push(D,Le,Ue,J,fe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||V.intersectsObject(D))){const Le=de.update(D),Ue=D.material;if(te&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),fe.copy(D.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),fe.copy(Le.boundingSphere.center)),fe.applyMatrix4(D.matrixWorld).applyMatrix4(se)),Array.isArray(Ue)){const ze=Le.groups;for(let je=0,Ge=ze.length;je<Ge;je++){const We=ze[je],gt=Ue[We.materialIndex];gt&&gt.visible&&S.push(D,Le,gt,J,fe.z,We)}}else Ue.visible&&S.push(D,Le,Ue,J,fe.z,null)}}const Te=D.children;for(let Le=0,Ue=Te.length;Le<Ue;Le++)yn(Te[Le],Y,J,te)}function fo(D,Y,J,te){const $=D.opaque,Te=D.transmissive,Le=D.transparent;p.setupLightsView(J),Z===!0&&Ve.setGlobalState(v.clippingPlanes,J),Te.length>0&&Au($,Te,Y,J),te&&_e.viewport(y.copy(te)),$.length>0&&Is($,Y,J),Te.length>0&&Is(Te,Y,J),Le.length>0&&Is(Le,Y,J),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Au(D,Y,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const Te=xe.isWebGL2;ee===null&&(ee=new Xn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?$i:bn,minFilter:_s,samples:Te?4:0})),v.getDrawingBufferSize(ce),Te?ee.setSize(ce.x,ce.y):ee.setSize(xr(ce.x),xr(ce.y));const Le=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(N),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear();const Ue=v.toneMapping;v.toneMapping=ei,Is(D,J,te),P.updateMultisampleRenderTarget(ee),P.updateRenderTargetMipmap(ee);let ze=!1;for(let je=0,Ge=Y.length;je<Ge;je++){const We=Y[je],gt=We.object,$t=We.geometry,Rt=We.material,wn=We.group;if(Rt.side===fn&&gt.layers.test(te.layers)){const ft=Rt.side;Rt.side=jt,Rt.needsUpdate=!0,po(gt,J,te,$t,Rt,wn),Rt.side=ft,Rt.needsUpdate=!0,ze=!0}}ze===!0&&(P.updateMultisampleRenderTarget(ee),P.updateRenderTargetMipmap(ee)),v.setRenderTarget(Le),v.setClearColor(N,R),v.toneMapping=Ue}function Is(D,Y,J){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Te=D.length;$<Te;$++){const Le=D[$],Ue=Le.object,ze=Le.geometry,je=te===null?Le.material:te,Ge=Le.group;Ue.layers.test(J.layers)&&po(Ue,Y,J,ze,je,Ge)}}function po(D,Y,J,te,$,Te){D.onBeforeRender(v,Y,J,te,$,Te),D.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),$.onBeforeRender(v,Y,J,te,D,Te),$.transparent===!0&&$.side===fn&&$.forceSinglePass===!1?($.side=jt,$.needsUpdate=!0,v.renderBufferDirect(J,Y,te,$,D,Te),$.side=Tn,$.needsUpdate=!0,v.renderBufferDirect(J,Y,te,$,D,Te),$.side=fn):v.renderBufferDirect(J,Y,te,$,D,Te),D.onAfterRender(v,Y,J,te,$,Te)}function Ps(D,Y,J){Y.isScene!==!0&&(Y=ae);const te=Re.get(D),$=p.state.lights,Te=p.state.shadowsArray,Le=$.state.version,Ue=Pe.getParameters(D,$.state,Te,Y,J),ze=Pe.getProgramCacheKey(Ue);let je=te.programs;te.environment=D.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(D.isMeshStandardMaterial?K:T).get(D.envMap||te.environment),je===void 0&&(D.addEventListener("dispose",me),je=new Map,te.programs=je);let Ge=je.get(ze);if(Ge!==void 0){if(te.currentProgram===Ge&&te.lightsStateVersion===Le)return go(D,Ue),Ge}else Ue.uniforms=Pe.getUniforms(D),D.onBuild(J,Ue,v),D.onBeforeCompile(Ue,v),Ge=Pe.acquireProgram(Ue,ze),je.set(ze,Ge),te.uniforms=Ue.uniforms;const We=te.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(We.clippingPlanes=Ve.uniform),go(D,Ue),te.needsLights=_u(D),te.lightsStateVersion=Le,te.needsLights&&(We.ambientLightColor.value=$.state.ambient,We.lightProbe.value=$.state.probe,We.directionalLights.value=$.state.directional,We.directionalLightShadows.value=$.state.directionalShadow,We.spotLights.value=$.state.spot,We.spotLightShadows.value=$.state.spotShadow,We.rectAreaLights.value=$.state.rectArea,We.ltc_1.value=$.state.rectAreaLTC1,We.ltc_2.value=$.state.rectAreaLTC2,We.pointLights.value=$.state.point,We.pointLightShadows.value=$.state.pointShadow,We.hemisphereLights.value=$.state.hemi,We.directionalShadowMap.value=$.state.directionalShadowMap,We.directionalShadowMatrix.value=$.state.directionalShadowMatrix,We.spotShadowMap.value=$.state.spotShadowMap,We.spotLightMatrix.value=$.state.spotLightMatrix,We.spotLightMap.value=$.state.spotLightMap,We.pointShadowMap.value=$.state.pointShadowMap,We.pointShadowMatrix.value=$.state.pointShadowMatrix),te.currentProgram=Ge,te.uniformsList=null,Ge}function mo(D){if(D.uniformsList===null){const Y=D.currentProgram.getUniforms();D.uniformsList=fr.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function go(D,Y){const J=Re.get(D);J.outputColorSpace=Y.outputColorSpace,J.batching=Y.batching,J.instancing=Y.instancing,J.instancingColor=Y.instancingColor,J.skinning=Y.skinning,J.morphTargets=Y.morphTargets,J.morphNormals=Y.morphNormals,J.morphColors=Y.morphColors,J.morphTargetsCount=Y.morphTargetsCount,J.numClippingPlanes=Y.numClippingPlanes,J.numIntersection=Y.numClipIntersection,J.vertexAlphas=Y.vertexAlphas,J.vertexTangents=Y.vertexTangents,J.toneMapping=Y.toneMapping}function vu(D,Y,J,te,$){Y.isScene!==!0&&(Y=ae),P.resetTextureUnits();const Te=Y.fog,Le=te.isMeshStandardMaterial?Y.environment:null,Ue=x===null?v.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Wn,ze=(te.isMeshStandardMaterial?K:T).get(te.envMap||Le),je=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ge=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!J.morphAttributes.position,gt=!!J.morphAttributes.normal,$t=!!J.morphAttributes.color;let Rt=ei;te.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(Rt=v.toneMapping);const wn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ft=wn!==void 0?wn.length:0,Ke=Re.get(te),Br=p.state.lights;if(Z===!0&&(j===!0||D!==_)){const on=D===_&&te.id===I;Ve.setState(te,D,on)}let mt=!1;te.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Br.state.version||Ke.outputColorSpace!==Ue||$.isBatchedMesh&&Ke.batching===!1||!$.isBatchedMesh&&Ke.batching===!0||$.isInstancedMesh&&Ke.instancing===!1||!$.isInstancedMesh&&Ke.instancing===!0||$.isSkinnedMesh&&Ke.skinning===!1||!$.isSkinnedMesh&&Ke.skinning===!0||$.isInstancedMesh&&Ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ke.instancingColor===!1&&$.instanceColor!==null||Ke.envMap!==ze||te.fog===!0&&Ke.fog!==Te||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ve.numPlanes||Ke.numIntersection!==Ve.numIntersection)||Ke.vertexAlphas!==je||Ke.vertexTangents!==Ge||Ke.morphTargets!==We||Ke.morphNormals!==gt||Ke.morphColors!==$t||Ke.toneMapping!==Rt||xe.isWebGL2===!0&&Ke.morphTargetsCount!==ft)&&(mt=!0):(mt=!0,Ke.__version=te.version);let ii=Ke.currentProgram;mt===!0&&(ii=Ps(te,Y,$));let So=!1,as=!1,Ur=!1;const Ut=ii.getUniforms(),si=Ke.uniforms;if(_e.useProgram(ii.program)&&(So=!0,as=!0,Ur=!0),te.id!==I&&(I=te.id,as=!0),So||_!==D){Ut.setValue(G,"projectionMatrix",D.projectionMatrix),Ut.setValue(G,"viewMatrix",D.matrixWorldInverse);const on=Ut.map.cameraPosition;on!==void 0&&on.setValue(G,fe.setFromMatrixPosition(D.matrixWorld)),xe.logarithmicDepthBuffer&&Ut.setValue(G,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ut.setValue(G,"isOrthographic",D.isOrthographicCamera===!0),_!==D&&(_=D,as=!0,Ur=!0)}if($.isSkinnedMesh){Ut.setOptional(G,$,"bindMatrix"),Ut.setOptional(G,$,"bindMatrixInverse");const on=$.skeleton;on&&(xe.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Ut.setValue(G,"boneTexture",on.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Ut.setOptional(G,$,"batchingTexture"),Ut.setValue(G,"batchingTexture",$._matricesTexture,P));const Or=J.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0&&xe.isWebGL2===!0)&&M.update($,J,ii),(as||Ke.receiveShadow!==$.receiveShadow)&&(Ke.receiveShadow=$.receiveShadow,Ut.setValue(G,"receiveShadow",$.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(si.envMap.value=ze,si.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),as&&(Ut.setValue(G,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&xu(si,Ur),Te&&te.fog===!0&&ye.refreshFogUniforms(si,Te),ye.refreshMaterialUniforms(si,te,W,O,ee),fr.upload(G,mo(Ke),si,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(fr.upload(G,mo(Ke),si,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ut.setValue(G,"center",$.center),Ut.setValue(G,"modelViewMatrix",$.modelViewMatrix),Ut.setValue(G,"normalMatrix",$.normalMatrix),Ut.setValue(G,"modelMatrix",$.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const on=te.uniformsGroups;for(let Nr=0,yu=on.length;Nr<yu;Nr++)if(xe.isWebGL2){const Ao=on[Nr];Ne.update(Ao,ii),Ne.bind(Ao,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function xu(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function _u(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(D,Y,J){Re.get(D.texture).__webglTexture=Y,Re.get(D.depthTexture).__webglTexture=J;const te=Re.get(D);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,Y){const J=Re.get(D);J.__webglFramebuffer=Y,J.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(D,Y=0,J=0){x=D,C=Y,b=J;let te=!0,$=null,Te=!1,Le=!1;if(D){const ze=Re.get(D);ze.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(G.FRAMEBUFFER,null),te=!1):ze.__webglFramebuffer===void 0?P.setupRenderTarget(D):ze.__hasExternalTextures&&P.rebindTextures(D,Re.get(D.texture).__webglTexture,Re.get(D.depthTexture).__webglTexture);const je=D.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Le=!0);const Ge=Re.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ge[Y])?$=Ge[Y][J]:$=Ge[Y],Te=!0):xe.isWebGL2&&D.samples>0&&P.useMultisampledRTT(D)===!1?$=Re.get(D).__webglMultisampledFramebuffer:Array.isArray(Ge)?$=Ge[J]:$=Ge,y.copy(D.viewport),L.copy(D.scissor),B=D.scissorTest}else y.copy(H).multiplyScalar(W).floor(),L.copy(q).multiplyScalar(W).floor(),B=ie;if(_e.bindFramebuffer(G.FRAMEBUFFER,$)&&xe.drawBuffers&&te&&_e.drawBuffers(D,$),_e.viewport(y),_e.scissor(L),_e.setScissorTest(B),Te){const ze=Re.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ze.__webglTexture,J)}else if(Le){const ze=Re.get(D.texture),je=Y||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ze.__webglTexture,J||0,je)}I=-1},this.readRenderTargetPixels=function(D,Y,J,te,$,Te,Le){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Re.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){_e.bindFramebuffer(G.FRAMEBUFFER,Ue);try{const ze=D.texture,je=ze.format,Ge=ze.type;if(je!==Ht&&re.convert(je)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===$i&&(ve.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ge!==bn&&re.convert(Ge)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===En&&(xe.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-te&&J>=0&&J<=D.height-$&&G.readPixels(Y,J,te,$,re.convert(je),re.convert(Ge),Te)}finally{const ze=x!==null?Re.get(x).__webglFramebuffer:null;_e.bindFramebuffer(G.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(D,Y,J=0){const te=Math.pow(2,-J),$=Math.floor(Y.image.width*te),Te=Math.floor(Y.image.height*te);P.setTexture2D(Y,0),G.copyTexSubImage2D(G.TEXTURE_2D,J,0,0,D.x,D.y,$,Te),_e.unbindTexture()},this.copyTextureToTexture=function(D,Y,J,te=0){const $=Y.image.width,Te=Y.image.height,Le=re.convert(J.format),Ue=re.convert(J.type);P.setTexture2D(J,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,J.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,J.unpackAlignment),Y.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,te,D.x,D.y,$,Te,Le,Ue,Y.image.data):Y.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,te,D.x,D.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Le,Y.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,te,D.x,D.y,Le,Ue,Y.image),te===0&&J.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(D,Y,J,te,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=D.max.x-D.min.x+1,Le=D.max.y-D.min.y+1,Ue=D.max.z-D.min.z+1,ze=re.convert(te.format),je=re.convert(te.type);let Ge;if(te.isData3DTexture)P.setTexture3D(te,0),Ge=G.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)P.setTexture2DArray(te,0),Ge=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,te.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,te.unpackAlignment);const We=G.getParameter(G.UNPACK_ROW_LENGTH),gt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),$t=G.getParameter(G.UNPACK_SKIP_PIXELS),Rt=G.getParameter(G.UNPACK_SKIP_ROWS),wn=G.getParameter(G.UNPACK_SKIP_IMAGES),ft=J.isCompressedTexture?J.mipmaps[$]:J.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,ft.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ft.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,D.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,D.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,D.min.z),J.isDataTexture||J.isData3DTexture?G.texSubImage3D(Ge,$,Y.x,Y.y,Y.z,Te,Le,Ue,ze,je,ft.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ge,$,Y.x,Y.y,Y.z,Te,Le,Ue,ze,ft.data)):G.texSubImage3D(Ge,$,Y.x,Y.y,Y.z,Te,Le,Ue,ze,je,ft),G.pixelStorei(G.UNPACK_ROW_LENGTH,We),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,gt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,$t),G.pixelStorei(G.UNPACK_SKIP_ROWS,Rt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,wn),$===0&&te.generateMipmaps&&G.generateMipmap(Ge),_e.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?P.setTextureCube(D,0):D.isData3DTexture?P.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?P.setTexture2DArray(D,0):P.setTexture2D(D,0),_e.unbindTexture()},this.resetState=function(){C=0,b=0,x=null,_e.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Wa?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===Ir?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?Ai:Uc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ai?Dt:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Kg extends ja{}Kg.prototype.isWebGL1Renderer=!0;class ru extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Zn extends Kt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Ct,u=Ct,d,f){super(null,o,a,l,c,u,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zg extends Yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class au extends ws{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zl=new Oe,La=new Dr,nr=new Pr,ir=new w;class $g extends xt{constructor(e=new Zt,t=new au){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(i),nr.radius+=s,e.ray.intersectsSphere(nr)===!1)return;zl.copy(i).invert(),La.copy(e.ray).applyMatrix4(zl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=f,S=h;g<S;g++){const p=c.getX(g);ir.fromBufferAttribute(d,p),Hl(ir,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,S=h;g<S;g++)ir.fromBufferAttribute(d,g),Hl(ir,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Hl(r,e,t,n,i,s,o){const a=La.distanceSqToPoint(r);if(a<t){const l=new w;La.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Cs extends Zt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],f=[],h=[];let g=0;const S=[],p=n/2;let m=0;A(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new an(d,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(h,2));function A(){const E=new w,C=new w;let b=0;const x=(t-e)/n;for(let I=0;I<=s;I++){const _=[],y=I/s,L=y*(t-e)+e;for(let B=0;B<=i;B++){const N=B/i,R=N*l+a,F=Math.sin(R),O=Math.cos(R);C.x=L*F,C.y=-y*n+p,C.z=L*O,d.push(C.x,C.y,C.z),E.set(F,x,O).normalize(),f.push(E.x,E.y,E.z),h.push(N,1-y),_.push(g++)}S.push(_)}for(let I=0;I<i;I++)for(let _=0;_<s;_++){const y=S[_][I],L=S[_+1][I],B=S[_+1][I+1],N=S[_][I+1];u.push(y,L,N),u.push(L,B,N),b+=6}c.addGroup(m,b,0),m+=b}function v(E){const C=g,b=new Me,x=new w;let I=0;const _=E===!0?e:t,y=E===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,p*y,0),f.push(0,y,0),h.push(.5,.5),g++;const L=g;for(let B=0;B<=i;B++){const R=B/i*l+a,F=Math.cos(R),O=Math.sin(R);x.x=_*O,x.y=p*y,x.z=_*F,d.push(x.x,x.y,x.z),f.push(0,y,0),b.x=F*.5+.5,b.y=O*.5*y+.5,h.push(b.x,b.y),g++}for(let B=0;B<i;B++){const N=C+B,R=L+B;E===!0?u.push(R,R+1,N):u.push(R+1,R,N),I+=3}c.addGroup(m,I,E===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ka extends Cs{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ka(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yr extends Zt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new w,f=new w,h=[],g=[],S=[],p=[];for(let m=0;m<=n;m++){const A=[],v=m/n;let E=0;m===0&&o===0?E=.5/t:m===n&&l===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const b=C/t;d.x=-e*Math.cos(i+b*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(i+b*s)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),p.push(b+E,1-v),A.push(c++)}u.push(A)}for(let m=0;m<n;m++)for(let A=0;A<t;A++){const v=u[m][A+1],E=u[m][A],C=u[m+1][A],b=u[m+1][A+1];(m!==0||o>0)&&h.push(v,E,b),(m!==n-1||l<Math.PI)&&h.push(E,C,b)}this.setIndex(h),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(S,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jg extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class e0 extends Jg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class t0 extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Mr{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);class n0{constructor(e,t){k(this,"root");k(this,"pinLayer");k(this,"tooltip");k(this,"tooltipTitle");k(this,"tooltipBody");k(this,"nav");k(this,"prevButton");k(this,"closeButton");k(this,"nextButton");k(this,"pinElements",new Map);this.root=document.createElement("div"),this.root.className="annotation-overlay hidden",this.pinLayer=document.createElement("div"),this.pinLayer.className="annotation-pins",this.root.appendChild(this.pinLayer),this.tooltip=document.createElement("aside"),this.tooltip.className="annotation-tooltip hidden",this.tooltipTitle=document.createElement("h3"),this.tooltipTitle.className="annotation-tooltip-title",this.tooltipBody=document.createElement("p"),this.tooltipBody.className="annotation-tooltip-body",this.tooltip.append(this.tooltipTitle,this.tooltipBody),this.root.appendChild(this.tooltip),this.nav=document.createElement("nav"),this.nav.className="annotation-nav hidden",this.prevButton=document.createElement("button"),this.prevButton.type="button",this.prevButton.className="annotation-nav-btn",this.prevButton.textContent="Prev",this.prevButton.onclick=()=>t.onPrev(),this.closeButton=document.createElement("button"),this.closeButton.type="button",this.closeButton.className="annotation-nav-btn annotation-nav-btn-close",this.closeButton.textContent="Close",this.closeButton.onclick=()=>t.onClose(),this.nextButton=document.createElement("button"),this.nextButton.type="button",this.nextButton.className="annotation-nav-btn",this.nextButton.textContent="Next",this.nextButton.onclick=()=>t.onNext(),this.nav.append(this.prevButton,this.closeButton,this.nextButton),this.root.appendChild(this.nav),e.appendChild(this.root),this.root.addEventListener("click",n=>{const i=n.target,s=i==null?void 0:i.closest("button.annotation-pin");if(!s)return;const o=s.dataset.pinId;!o||s.dataset.clickable!=="true"||t.onSelect(o)})}setVisible(e){this.root.classList.toggle("hidden",!e)}render(e){for(const s of e.pins){let o=this.pinElements.get(s.pin.id);o||(o=document.createElement("button"),o.type="button",o.className="annotation-pin",o.dataset.pinId=s.pin.id,this.pinLayer.appendChild(o),this.pinElements.set(s.pin.id,o)),o.textContent=String(s.pin.order),o.style.left=`${s.screenX}px`,o.style.top=`${s.screenY}px`,o.style.opacity=`${s.alpha}`,o.dataset.clickable=s.clickable?"true":"false",o.classList.toggle("is-selected",e.selectedId===s.pin.id),o.classList.toggle("is-occluded",s.occluded),o.classList.toggle("hidden",!s.visible),o.disabled=!s.clickable,o.setAttribute("aria-label",`${s.pin.order}. ${s.pin.title}`)}for(const[s,o]of this.pinElements)e.pins.some(a=>a.pin.id===s)||(o.remove(),this.pinElements.delete(s));const t=e.pins.find(s=>s.pin.id===e.selectedId),n=!!(t&&e.showTooltip&&t.visible);if(this.tooltip.classList.toggle("hidden",!n),t&&n){const s=this.root.clientWidth,o=this.root.clientHeight;this.tooltipTitle.textContent=t.pin.title,this.tooltipBody.textContent=t.pin.body,this.tooltip.style.left=`${Math.max(12,Math.min(s-260,t.screenX+18))}px`,this.tooltip.style.top=`${Math.max(12,Math.min(o-120,t.screenY+16))}px`}const i=!!(e.selectedId&&e.showNav);this.nav.classList.toggle("hidden",!i),this.prevButton.disabled=!e.canPrev,this.nextButton.disabled=!e.canNext}dispose(){this.root.remove(),this.pinElements.clear()}}const i0=1e3/15,kl=.25;class s0{constructor(e,t,n){k(this,"renderTarget",null);k(this,"depthMaterial",new iu({depthPacking:Oc,blending:kn}));k(this,"pixel",new Uint8Array(4));k(this,"occlusionById",new Map);k(this,"nextSampleAtMs",0);this.renderer=e,this.scene=t,this.camera=n}resolve(e,t,n,i,s){return s>=this.nextSampleAtMs&&(this.nextSampleAtMs=s+i0,this.updateDepthMap(e,t,n,i)),this.occlusionById}dispose(){var e;(e=this.renderTarget)==null||e.dispose(),this.renderTarget=null,this.depthMaterial.dispose(),this.occlusionById.clear()}updateDepthMap(e,t,n,i){if(this.ensureRenderTarget(t,n),!this.renderTarget)return;const s=this.renderTarget.width,o=this.renderTarget.height,a=this.renderer.getRenderTarget(),l=this.renderer.autoClear,c=this.scene.overrideMaterial;try{this.renderer.autoClear=!0,this.scene.overrideMaterial=this.depthMaterial,this.renderer.setRenderTarget(this.renderTarget),this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,this.camera);for(const u of e){if(!u.visible){this.occlusionById.set(u.id,!1);continue}const d=Math.round(u.x*(s-1)),f=Math.round(u.y*(o-1)),h=Lt.clamp(d,0,s-1),g=Lt.clamp(o-1-f,0,o-1);this.renderer.readRenderTargetPixels(this.renderTarget,h,g,1,1,this.pixel);const S=r0(this.pixel),p=u.ndcDepth>S+i;this.occlusionById.set(u.id,p)}}finally{this.scene.overrideMaterial=c,this.renderer.setRenderTarget(a),this.renderer.autoClear=l}}ensureRenderTarget(e,t){var s;const n=Math.max(16,Math.floor(e*kl)),i=Math.max(16,Math.floor(t*kl));this.renderTarget&&this.renderTarget.width===n&&this.renderTarget.height===i||((s=this.renderTarget)==null||s.dispose(),this.renderTarget=new Xn(n,i,{depthBuffer:!0,stencilBuffer:!1,minFilter:Ct,magFilter:Ct,type:bn,format:Ht}))}}function r0(r){const e=r[0]/255,t=r[1]/255,n=r[2]/255,i=r[3]/255;return e/(256*256*256)+t/(256*256)+n/256+i}class a0{constructor(e){k(this,"overlay");k(this,"occlusionResolver");k(this,"config",null);k(this,"assetIds",[]);k(this,"pins",[]);k(this,"selectedId",null);k(this,"activeAssetId",null);k(this,"baseLimits",null);k(this,"baseEnablePan",!0);k(this,"controlProfileActive",!1);k(this,"editMode",!1);k(this,"editorListener",null);this.options=e,this.overlay=new n0(e.host,{onSelect:t=>this.selectAnnotation(t),onPrev:()=>this.selectPrev(),onNext:()=>this.selectNext(),onClose:()=>this.close()}),this.occlusionResolver=new s0(e.renderer,e.scene,e.camera)}configure(e){var t,n,i,s;this.baseLimits=e.camera.limits,this.baseEnablePan=e.ui.enablePan,this.config=e.annotations.enabled?e.annotations:null,this.pins=((t=this.config)==null?void 0:t.pins.slice(0,20))??[],this.assetIds.splice(0,this.assetIds.length,...e.assets.map(o=>o.id)),(((n=this.config)==null?void 0:n.pins.length)??0)>20&&console.warn("AnnotationManager: limiting annotations to 20 pins for performance."),this.selectedId=null,this.activeAssetId=((i=e.assets[0])==null?void 0:i.id)??null,this.editMode=!1,this.overlay.setVisible(!!(this.config&&this.pins.length>0)),this.resetControlProfile(),(s=this.config)!=null&&s.defaultSelectedId&&this.selectAnnotation(this.config.defaultSelectedId),this.emitEditorState()}clear(){this.config=null,this.assetIds.length=0,this.pins=[],this.selectedId=null,this.activeAssetId=null,this.editMode=!1,this.overlay.setVisible(!1),this.resetControlProfile(),this.emitEditorState()}update(e,t,n){if(!this.config||this.pins.length===0||t<=0||n<=0)return;const i=this.projectPins(t,n,e),s=this.pins.filter(l=>!l.assetId||l.assetId===this.activeAssetId),o=this.selectedId?s.findIndex(l=>l.id===this.selectedId):-1,a={pins:i,selectedId:this.selectedId,showTooltip:this.config.ui.showTooltip,showNav:this.config.ui.showNav,canPrev:o>0,canNext:o>=0&&o<s.length-1};this.overlay.render(a)}setActiveAssetId(e){if(this.activeAssetId=e,!this.selectedId){this.emitEditorState();return}const t=this.pins.find(n=>n.id===this.selectedId);if(t!=null&&t.assetId&&t.assetId!==e){this.close();return}this.emitEditorState()}setEditMode(e){this.editMode=e,this.emitEditorState()}onEditorStateChange(e){this.editorListener=e,this.emitEditorState()}selectAnnotation(e){const t=this.pins.find(i=>i.id===e);if(!t)return;this.selectedId=e;const n=t.camera.orbitLimits??this.baseLimits??void 0;this.applyControlProfile(!!t.camera.lockControls,n,this.baseEnablePan),this.options.cameraController.animateTo({position:t.camera.position,target:t.camera.target,fov:t.camera.fov,durationMs:t.camera.transitionMs}),this.emitEditorState()}updateSelected(e){if(!this.config||!this.selectedId)return;const t=this.pins.findIndex(a=>a.id===this.selectedId);if(t<0)return;const n=this.pins[t],i=new w;this.options.cameraController.getTarget(i);const s=e.pos?[...e.pos]:[i.x,i.y,i.z],o=[this.options.camera.position.x,this.options.camera.position.y,this.options.camera.position.z];this.pins[t]={...n,title:e.title??n.title,body:e.body??n.body,pos:e.pos?[...e.pos]:n.pos,assetId:e.assetId===void 0?n.assetId:e.assetId===null||e.assetId==="__all__"?void 0:e.assetId,camera:{...n.camera,position:o,target:s,fov:this.options.camera.fov}},this.syncConfigPins(),this.emitEditorState()}nudgeSelected(e,t){if(!this.selectedId)return;const n=this.pins.find(s=>s.id===this.selectedId);if(!n)return;const i=[...n.pos];e==="x"&&(i[0]+=t),e==="y"&&(i[1]+=t),e==="z"&&(i[2]+=t),this.updateSelected({pos:i})}addPin(){if(!this.config)return;if(this.pins.length>=20){console.warn("AnnotationManager: max 20 pins reached.");return}const e=this.pins.reduce((c,u)=>Math.max(c,u.order),0)+1,t=`pin_${e}`,n=new w;this.options.cameraController.getTarget(n);const i=this.options.camera.position.clone().sub(n).normalize(),s=n.clone().add(i.multiplyScalar(.2)),o=[this.options.camera.position.x,this.options.camera.position.y,this.options.camera.position.z],a=[n.x,n.y,n.z],l={id:t,order:e,pos:[s.x,s.y,s.z],title:`Annotation ${e}`,body:"Edit this description.",assetId:this.activeAssetId??void 0,camera:{position:o,target:a,fov:this.options.camera.fov,transitionMs:700,lockControls:!0,orbitLimits:this.baseLimits?{...this.baseLimits}:void 0}};this.pins.push(l),this.pins.sort((c,u)=>c.order-u.order),this.selectedId=l.id,this.overlay.setVisible(!0),this.syncConfigPins(),this.emitEditorState()}deleteSelected(){var t;if(!this.selectedId)return;const e=this.pins.filter(n=>n.id!==this.selectedId);this.pins=e,this.selectedId=((t=e[0])==null?void 0:t.id)??null,this.selectedId||this.resetControlProfile(),this.syncConfigPins(),this.emitEditorState()}exportAnnotations(){return this.config?{...this.config,pins:this.pins.map(e=>({...e,pos:[...e.pos],camera:{...e.camera,position:[...e.camera.position],target:[...e.camera.target],orbitLimits:e.camera.orbitLimits?{...e.camera.orbitLimits}:void 0}}))}:null}dispose(){this.resetControlProfile(),this.overlay.dispose(),this.occlusionResolver.dispose()}projectPins(e,t,n){const i=new w,s=new w,o=new w,a=[],l=[],c=this.config.ui.occlusion;for(const d of this.pins){if(d.assetId&&d.assetId!==this.activeAssetId)continue;i.set(d.pos[0],d.pos[1],d.pos[2]),s.copy(i).project(this.options.camera),o.copy(i).applyMatrix4(this.options.camera.matrixWorldInverse);const f=o.z<0,h=s.z>=-1&&s.z<=1,g=s.x>=-1&&s.x<=1&&s.y>=-1&&s.y<=1,S=f&&h&&g,p=(s.x*.5+.5)*e,m=(-s.y*.5+.5)*t,A={id:d.id,visible:S,x:s.x*.5+.5,y:-s.y*.5+.5,ndcDepth:s.z*.5+.5};a.push(A),l.push({pin:d,world:i.clone(),screenX:p,screenY:m,ndcDepth:A.ndcDepth,visible:S,occluded:!1,alpha:1,clickable:!0})}const u=c.enabled?this.occlusionResolver.resolve(a,e,t,c.epsilon,n):new Map;return l.map(d=>{const f=d.visible&&!!u.get(d.pin.id),h=!f||!c.disableClickWhenOccluded;return{...d,occluded:f,clickable:h,alpha:f?c.fadeAlpha:1}})}selectPrev(){if(!this.selectedId)return;const e=this.pins.filter(n=>!n.assetId||n.assetId===this.activeAssetId),t=e.findIndex(n=>n.id===this.selectedId);t<=0||this.selectAnnotation(e[t-1].id)}selectNext(){if(!this.selectedId)return;const e=this.pins.filter(n=>!n.assetId||n.assetId===this.activeAssetId),t=e.findIndex(n=>n.id===this.selectedId);t<0||t>=e.length-1||this.selectAnnotation(e[t+1].id)}close(){this.selectedId=null,this.resetControlProfile(),this.emitEditorState()}applyControlProfile(e,t,n){this.controlProfileActive&&(this.options.cameraController.popControlProfile(),this.controlProfileActive=!1),this.options.cameraController.pushControlProfile({lockControls:e,limits:t,enablePan:n}),this.controlProfileActive=!0}resetControlProfile(){this.controlProfileActive&&(this.options.cameraController.popControlProfile(),this.controlProfileActive=!1)}emitEditorState(){this.editorListener&&this.editorListener({available:!!this.config,editMode:this.editMode,selectedId:this.selectedId,activeAssetId:this.activeAssetId,assetIds:[...this.assetIds],pins:this.pins.map(e=>({id:e.id,assetId:e.assetId,order:e.order,pos:[...e.pos],title:e.title,body:e.body}))})}syncConfigPins(){this.config&&(this.config={...this.config,pins:this.pins.map(e=>({...e,pos:[...e.pos],camera:{...e.camera,position:[...e.camera.position],target:[...e.camera.target],orbitLimits:e.camera.orbitLimits?{...e.camera.orbitLimits}:void 0}}))})}}const o0="annotation-file-handles",l0=1,Oi="sceneHandles";function Vl(){return typeof window<"u"&&"showSaveFilePicker"in window}class c0{async load(e){if(!Vl())return null;const t=await this.getHandle(e);if(!t)return null;const n=t;if((n.queryPermission?await n.queryPermission({mode:"read"}):"granted")!=="granted")return null;try{const o=await(await t.getFile()).text(),a=JSON.parse(o);return!Gl(a)||!Gl(a.annotations)?null:a.annotations}catch{return null}}async save(e,t){if(!Vl())return{ok:!1,reason:"File System Access API is not available in this browser."};let n=await this.getHandle(e);if(!n){try{const o=window.showSaveFilePicker;if(!o)return{ok:!1,reason:"File save picker is unavailable."};n=await o({suggestedName:`${e}.annotations.json`,types:[{description:"JSON",accept:{"application/json":[".json"]}}]})}catch{return{ok:!1,reason:"Save cancelled."}}if(!n)return{ok:!1,reason:"No file handle was selected."};await this.putHandle(e,n)}const i=n;if((i.requestPermission?await i.requestPermission({mode:"readwrite"}):"granted")!=="granted")return{ok:!1,reason:"File permission denied."};try{const o=await n.createWritable(),a=JSON.stringify({annotations:t},null,2);return await o.write(a),await o.close(),{ok:!0}}catch{return{ok:!1,reason:"Unable to write file."}}}async getHandle(e){const t=await this.openDb();return new Promise((n,i)=>{const a=t.transaction(Oi,"readonly").objectStore(Oi).get(e);a.onsuccess=()=>{const l=a.result;n((l==null?void 0:l.handle)??null)},a.onerror=()=>i(a.error)})}async putHandle(e,t){const n=await this.openDb();await new Promise((i,s)=>{const l=n.transaction(Oi,"readwrite").objectStore(Oi).put({sceneId:e,handle:t});l.onsuccess=()=>i(),l.onerror=()=>s(l.error)})}async openDb(){return new Promise((e,t)=>{const n=indexedDB.open(o0,l0);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(Oi)||i.createObjectStore(Oi,{keyPath:"sceneId"})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}}function Gl(r){return typeof r=="object"&&r!==null}const mi=class mi{constructor(e,t){let n,i;this.promise=new Promise((c,u)=>{n=c,i=u});const s=n.bind(this),o=i.bind(this),a=(...c)=>{s(...c)},l=c=>{o(c)};e(a.bind(this),l.bind(this)),this.abortHandler=t,this.id=mi.idGen++}then(e){return new mi((t,n)=>{this.promise=this.promise.then((...i)=>{const s=e(...i);s instanceof Promise||s instanceof mi?s.then((...o)=>{t(...o)}):t(s)}).catch(i=>{n(i)})},this.abortHandler)}catch(e){return new mi(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}};k(mi,"idGen",0);let bs=mi;class ou extends Error{constructor(e){super(e)}}(function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){r[0]=t;const n=e[0];let i=n>>16&32768,s=n>>12&2047;const o=n>>23&255;return o<103?i:o>142?(i|=31744,i|=(o==255?0:1)&&n&8388607,i):o<113?(s|=2048,i|=(s>>114-o)+(s>>113-o&1),i):(i|=o-112<<10|s>>1,i+=s&1,i)}})();const pa=function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){return r[0]=t,e[0]}}(),u0=function(r,e){return r[e]+(r[e+1]<<8)+(r[e+2]<<16)+(r[e+3]<<24)},Fr=function(r,e,t=!0,n){const i=new AbortController,s=i.signal;let o=!1;const a=u=>{i.abort(u),o=!0};let l=!1;const c=(u,d,f,h)=>{e&&!l&&(e(u,d,f,h),u===100&&(l=!0))};return new bs((u,d)=>{const f={signal:s};n&&(f.headers=n),fetch(r,f).then(async h=>{if(!h.ok){const v=await h.text();d(new Error(`Fetch failed: ${h.status} ${h.statusText} ${v}`));return}const g=h.body.getReader();let S=0,p=h.headers.get("Content-Length"),m=p?parseInt(p):void 0;const A=[];for(;!o;)try{const{value:v,done:E}=await g.read();if(E){if(c(100,"100%",v,m),t){const x=new Blob(A).arrayBuffer();u(x)}else u();break}S+=v.length;let C,b;m!==void 0&&(C=S/m*100,b=`${C.toFixed(2)}%`),t&&A.push(v),c(C,b,v,m)}catch(v){d(v);return}}).catch(h=>{d(new ou(h))})},a)},ht=function(r,e,t){return Math.max(Math.min(r,t),e)},Ni=function(){return performance.now()/1e3},Vi=r=>{if(r.geometry&&(r.geometry.dispose(),r.geometry=null),r.material&&(r.material.dispose(),r.material=null),r.children)for(let e of r.children)Vi(e)},rn=(r,e)=>new Promise(t=>{window.setTimeout(()=>{t(r?r():void 0)},e?1:50)}),qi=(r=0)=>{let e=0;if(r===1)e=9;else if(r===2)e=24;else if(r===3)e=45;else if(r>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},Za=()=>{let r,e;return{promise:new Promise((n,i)=>{r=n,e=i}),resolve:r,reject:e}},ma=r=>{let e,t;return r||(r=()=>{}),{promise:new bs((i,s)=>{e=i,t=s},r),resolve:e,reject:t}};class d0{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function $a(){const r=navigator.userAgent;return r.indexOf("iPhone")>0||r.indexOf("iPad")>0}function lu(){if($a()){const r=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new d0(parseInt(r[1]||0,10),parseInt(r[2]||0,10),parseInt(r[3]||0,10))}else return null}const h0=14,As=class As{constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=qi(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+h0,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=qi(e);for(let i=0;i<n;i++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=As.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,i,s,o,a,l,c,u,d,f,h,g,...S){const p=[e,t,n,i,s,o,a,l,c,u,d,f,h,g,...this.defaultSphericalHarmonics];for(let m=0;m<S.length&&m<this.sphericalHarmonicsCount;m++)p[m]=S[m];return this.addSplat(p),p}addSplatFromArray(e,t){const n=e.splats[t],i=As.createSplat(this.sphericalHarmonicsDegree);for(let s=0;s<this.componentCount&&s<n.length;s++)i[s]=n[s];this.addSplat(i)}};k(As,"OFFSET",{X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37});let Se=As;class Je{}k(Je,"DefaultSplatSortDistanceMapPrecision",16),k(Je,"MemoryPageSize",65536),k(Je,"BytesPerFloat",4),k(Je,"BytesPerInt",4),k(Je,"MaxScenes",32),k(Je,"ProgressiveLoadSectionSize",262144),k(Je,"ProgressiveLoadSectionDelayDuration",15),k(Je,"SphericalHarmonics8BitCompressionRange",3);const f0=Je.SphericalHarmonics8BitCompressionRange,$n=f0/2,Et=Ms.toHalfFloat.bind(Ms),Ja=Ms.fromHalfFloat.bind(Ms),dt=(r,e,t=!1,n,i)=>{if(e===0)return r;if(e===1||e===2&&!t)return Ms.fromHalfFloat(r);if(e===2)return eo(r,n,i)},ms=(r,e,t)=>{r=ht(r,e,t);const n=t-e;return ht(Math.floor((r-e)/n*255),0,255)},eo=(r,e,t)=>{const n=t-e;return r/255*n+e},cu=(r,e,t)=>ms(Ja(r,e,t)),p0=(r,e,t)=>Et(eo(r,e,t)),nt=(r,e,t,n=!1)=>t===0?r.getFloat32(e*4,!0):t===1||t===2&&!n?r.getUint16(e*2,!0):r.getUint8(e,!0),m0=function(){const r=e=>e;return function(e,t,n,i=!1){if(t===n)return e;let s=r;return t===2&&i?n===1?s=p0:n==0&&(s=eo):t===2||t===1?n===0?s=Ja:n==2&&(i?s=cu:s=r):t===0&&(n===1?s=Et:n==2&&(i?s=ms:s=Et)),s(e)}}(),zi=(r,e,t,n,i=0)=>{const s=new Uint8Array(r,e),o=new Uint8Array(t,n);for(let a=0;a<i;a++)o[a]=s[a]},ne=class ne{constructor(e,t=!0){k(this,"getSplatScaleAndRotation",function(){const e=new Oe,t=new Oe,n=new Oe,i=new w,s=new w,o=new it;return function(a,l,c,u,d){const f=this.globalSplatIndexToSectionMap[a],h=this.sections[f],g=a-h.splatCountOffset,S=h.bytesPerSplat*g+ne.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,p=new DataView(this.bufferData,h.dataBase+S);s.set(dt(nt(p,0,this.compressionLevel),this.compressionLevel),dt(nt(p,1,this.compressionLevel),this.compressionLevel),dt(nt(p,2,this.compressionLevel),this.compressionLevel)),d&&(d.x!==void 0&&(s.x=d.x),d.y!==void 0&&(s.y=d.y),d.z!==void 0&&(s.z=d.z)),o.set(dt(nt(p,4,this.compressionLevel),this.compressionLevel),dt(nt(p,5,this.compressionLevel),this.compressionLevel),dt(nt(p,6,this.compressionLevel),this.compressionLevel),dt(nt(p,3,this.compressionLevel),this.compressionLevel)),u?(e.makeScale(s.x,s.y,s.z),t.makeRotationFromQuaternion(o),n.copy(e).multiply(t).multiply(u),n.decompose(i,c,l)):(l.copy(s),c.copy(o))}}());k(this,"fillSplatScaleRotationArray",function(){const e=new Oe,t=new Oe,n=new Oe,i=new w,s=new it,o=new w,a=l=>{const c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,u,d,f,h,g,S){const p=this.splatCount;d=d||0,f=f||p-1,h===void 0&&(h=d);const m=(A,v)=>m0(A,v,g);for(let A=d;A<=f;A++){const v=this.globalSplatIndexToSectionMap[A],E=this.sections[v],C=A-E.splatCountOffset,b=E.bytesPerSplat*C+ne.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,x=(A-d+h)*ne.ScaleComponentCount,I=(A-d+h)*ne.RotationComponentCount,_=new DataView(this.bufferData,E.dataBase+b),y=S&&S.x!==void 0?S.x:nt(_,0,this.compressionLevel),L=S&&S.y!==void 0?S.y:nt(_,1,this.compressionLevel),B=S&&S.z!==void 0?S.z:nt(_,2,this.compressionLevel),N=nt(_,3,this.compressionLevel),R=nt(_,4,this.compressionLevel),F=nt(_,5,this.compressionLevel),O=nt(_,6,this.compressionLevel);i.set(dt(y,this.compressionLevel),dt(L,this.compressionLevel),dt(B,this.compressionLevel)),s.set(dt(R,this.compressionLevel),dt(F,this.compressionLevel),dt(O,this.compressionLevel),dt(N,this.compressionLevel)).normalize(),u&&(o.set(0,0,0),e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(s),n.identity().premultiply(e).premultiply(t),n.premultiply(u),n.decompose(o,s,i),s.normalize()),a(s),l&&(l[x]=m(i.x,0),l[x+1]=m(i.y,0),l[x+2]=m(i.z,0)),c&&(c[I]=m(s.x,0),c[I+1]=m(s.y,0),c[I+2]=m(s.z,0),c[I+3]=m(s.w,0))}}}());k(this,"fillSphericalHarmonicsArray",function(){for(let R=0;R<15;R++)new w;const e=new He,t=new Oe,n=new w,i=new w,s=new it,o=[],a=[],l=[],c=[],u=[],d=[],f=[],h=[],g=[],S=[],p=[],m=[],A=[],v=[],E=[],C=[],b=[],x=[],I=R=>R,_=(R,F,O,W)=>{R[0]=F,R[1]=O,R[2]=W},y=(R,F,O,W,X)=>{R[0]=nt(F,W,X,!0),R[1]=nt(F,W+O,X,!0),R[2]=nt(F,W+O+O,X,!0)},L=(R,F)=>{F[0]=R[0],F[1]=R[1],F[2]=R[2]},B=(R,F,O,W)=>{F[O]=W(R[0]),F[O+1]=W(R[1]),F[O+2]=W(R[2])},N=(R,F,O,W,X)=>(F[0]=dt(R[0],O,!0,W,X),F[1]=dt(R[1],O,!0,W,X),F[2]=dt(R[2],O,!0,W,X),F);return function(R,F,O,W,X,z,H){const q=this.splatCount;W=W||0,X=X||q-1,z===void 0&&(z=W),O&&F>=1&&(t.copy(O),t.decompose(n,s,i),s.normalize(),t.makeRotationFromQuaternion(s),e.setFromMatrix4(t),_(o,e.elements[4],-e.elements[7],e.elements[1]),_(a,-e.elements[5],e.elements[8],-e.elements[2]),_(l,e.elements[3],-e.elements[6],e.elements[0]));const ie=Z=>cu(Z,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),V=Z=>ms(Z,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let Z=W;Z<=X;Z++){const j=this.globalSplatIndexToSectionMap[Z],ee=this.sections[j];F=Math.min(F,ee.sphericalHarmonicsDegree);const se=qi(F),ce=Z-ee.splatCountOffset,fe=ee.bytesPerSplat*ce+ne.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,ae=new DataView(this.bufferData,ee.dataBase+fe),Ce=(Z-W+z)*se;let G=O?0:this.compressionLevel,Be=I;G!==H&&(G===1?H===0?Be=Ja:H==2&&(Be=ie):G===0&&(H===1?Be=Et:H==2&&(Be=V)));const ve=this.minSphericalHarmonicsCoeff,xe=this.maxSphericalHarmonicsCoeff;F>=1&&(y(g,ae,3,0,this.compressionLevel),y(S,ae,3,1,this.compressionLevel),y(p,ae,3,2,this.compressionLevel),O?(N(g,g,this.compressionLevel,ve,xe),N(S,S,this.compressionLevel,ve,xe),N(p,p,this.compressionLevel,ve,xe),ne.rotateSphericalHarmonics3(g,S,p,o,a,l,v,E,C)):(L(g,v),L(S,E),L(p,C)),B(v,R,Ce,Be),B(E,R,Ce+3,Be),B(C,R,Ce+6,Be),F>=2&&(y(g,ae,5,9,this.compressionLevel),y(S,ae,5,10,this.compressionLevel),y(p,ae,5,11,this.compressionLevel),y(m,ae,5,12,this.compressionLevel),y(A,ae,5,13,this.compressionLevel),O?(N(g,g,this.compressionLevel,ve,xe),N(S,S,this.compressionLevel,ve,xe),N(p,p,this.compressionLevel,ve,xe),N(m,m,this.compressionLevel,ve,xe),N(A,A,this.compressionLevel,ve,xe),ne.rotateSphericalHarmonics5(g,S,p,m,A,o,a,l,c,u,d,f,h,v,E,C,b,x)):(L(g,v),L(S,E),L(p,C),L(m,b),L(A,x)),B(v,R,Ce+9,Be),B(E,R,Ce+12,Be),B(C,R,Ce+15,Be),B(b,R,Ce+18,Be),B(x,R,Ce+21,Be)))}}}());this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const i=e.fullBucketCount*e.bucketSize;if(t<i)n=Math.floor(t/e.bucketSize);else{let s=i;n=e.fullBucketCount;let o=0;for(;s<e.splatCount;){let a=e.partiallyFilledBucketLengths[o];if(t>=s&&t<s+a)break;s+=a,n++,o++}}return n}getSplatCenter(e,t,n){const i=this.globalSplatIndexToSectionMap[e],s=this.sections[i],o=e-s.splatCountOffset,a=s.bytesPerSplat*o,l=new DataView(this.bufferData,s.dataBase+a),c=nt(l,0,this.compressionLevel),u=nt(l,1,this.compressionLevel),d=nt(l,2,this.compressionLevel);if(this.compressionLevel>=1){const h=this.getBucketIndex(s,o)*ne.BucketStorageSizeFloats,g=s.compressionScaleFactor,S=s.compressionScaleRange;t.x=(c-S)*g+s.bucketArray[h],t.y=(u-S)*g+s.bucketArray[h+1],t.z=(d-S)*g+s.bucketArray[h+2]}else t.x=c,t.y=u,t.z=d;n&&t.applyMatrix4(n)}getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],i=this.sections[n],s=e-i.splatCountOffset,o=i.bytesPerSplat*s+ne.CompressionLevels[this.compressionLevel].ColorOffsetBytes,a=new Uint8Array(this.bufferData,i.dataBase+o,4);t.set(a[0],a[1],a[2],a[3])}fillSplatCenterArray(e,t,n,i,s){const o=this.splatCount;n=n||0,i=i||o-1,s===void 0&&(s=n);const a=new w;for(let l=n;l<=i;l++){const c=this.globalSplatIndexToSectionMap[l],u=this.sections[c],d=l-u.splatCountOffset,f=(l-n+s)*ne.CenterComponentCount,h=u.bytesPerSplat*d,g=new DataView(this.bufferData,u.dataBase+h),S=nt(g,0,this.compressionLevel),p=nt(g,1,this.compressionLevel),m=nt(g,2,this.compressionLevel);if(this.compressionLevel>=1){const v=this.getBucketIndex(u,d)*ne.BucketStorageSizeFloats,E=u.compressionScaleFactor,C=u.compressionScaleRange;a.x=(S-C)*E+u.bucketArray[v],a.y=(p-C)*E+u.bucketArray[v+1],a.z=(m-C)*E+u.bucketArray[v+2]}else a.x=S,a.y=p,a.z=m;t&&a.applyMatrix4(t),e[f]=a.x,e[f+1]=a.y,e[f+2]=a.z}}fillSplatCovarianceArray(e,t,n,i,s,o){const a=this.splatCount,l=new w,c=new it;n=n||0,i=i||a-1,s===void 0&&(s=n);for(let u=n;u<=i;u++){const d=this.globalSplatIndexToSectionMap[u],f=this.sections[d],h=u-f.splatCountOffset,g=(u-n+s)*ne.CovarianceComponentCount,S=f.bytesPerSplat*h+ne.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,p=new DataView(this.bufferData,f.dataBase+S);l.set(dt(nt(p,0,this.compressionLevel),this.compressionLevel),dt(nt(p,1,this.compressionLevel),this.compressionLevel),dt(nt(p,2,this.compressionLevel),this.compressionLevel)),c.set(dt(nt(p,4,this.compressionLevel),this.compressionLevel),dt(nt(p,5,this.compressionLevel),this.compressionLevel),dt(nt(p,6,this.compressionLevel),this.compressionLevel),dt(nt(p,3,this.compressionLevel),this.compressionLevel)),ne.computeCovariance(l,c,t,e,g,o)}}fillSplatColorArray(e,t,n,i,s){const o=this.splatCount;n=n||0,i=i||o-1,s===void 0&&(s=n);for(let a=n;a<=i;a++){const l=this.globalSplatIndexToSectionMap[a],c=this.sections[l],u=a-c.splatCountOffset,d=(a-n+s)*ne.ColorComponentCount,f=c.bytesPerSplat*u+ne.CompressionLevels[this.compressionLevel].ColorOffsetBytes,h=new Uint8Array(this.bufferData,c.dataBase+f);let g=h[3];g=g>=t?g:0,e[d]=h[0],e[d+1]=h[1],e[d+2]=h[2],e[d+3]=g}}static parseHeader(e){const t=new Uint8Array(e,0,ne.HeaderSizeBytes),n=new Uint16Array(e,0,ne.HeaderSizeBytes/2),i=new Uint32Array(e,0,ne.HeaderSizeBytes/4),s=new Float32Array(e,0,ne.HeaderSizeBytes/4),o=t[0],a=t[1],l=i[1],c=i[2],u=i[3],d=i[4],f=n[10],h=new w(s[6],s[7],s[8]),g=s[9]||-$n,S=s[10]||$n;return{versionMajor:o,versionMinor:a,maxSectionCount:l,sectionCount:c,maxSplatCount:u,splatCount:d,compressionLevel:f,sceneCenter:h,minSphericalHarmonicsCoeff:g,maxSphericalHarmonicsCoeff:S}}static writeHeaderCountsToBuffer(e,t,n){const i=new Uint32Array(n,0,ne.HeaderSizeBytes/4);i[2]=e,i[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,ne.HeaderSizeBytes),i=new Uint16Array(t,0,ne.HeaderSizeBytes/2),s=new Uint32Array(t,0,ne.HeaderSizeBytes/4),o=new Float32Array(t,0,ne.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,s[1]=e.maxSectionCount,s[2]=e.sectionCount,s[3]=e.maxSplatCount,s[4]=e.splatCount,i[10]=e.compressionLevel,o[6]=e.sceneCenter.x,o[7]=e.sceneCenter.y,o[8]=e.sceneCenter.z,o[9]=e.minSphericalHarmonicsCoeff||-$n,o[10]=e.maxSphericalHarmonicsCoeff||$n}static parseSectionHeaders(e,t,n=0,i){const s=e.compressionLevel,o=e.maxSectionCount,a=new Uint16Array(t,n,o*ne.SectionHeaderSizeBytes/2),l=new Uint32Array(t,n,o*ne.SectionHeaderSizeBytes/4),c=new Float32Array(t,n,o*ne.SectionHeaderSizeBytes/4),u=[];let d=0,f=d/2,h=d/4,g=ne.HeaderSizeBytes+e.maxSectionCount*ne.SectionHeaderSizeBytes,S=0;for(let p=0;p<o;p++){const m=l[h+1],A=l[h+2],v=l[h+3],E=c[h+4],C=E/2,b=a[f+10],x=l[h+6]||ne.CompressionLevels[s].ScaleRange,I=l[h+8],_=l[h+9],y=_*4,L=b*v+y,B=a[f+20],{bytesPerSplat:N}=ne.calculateComponentStorage(s,B),R=N*m,F=R+L,O={bytesPerSplat:N,splatCountOffset:S,splatCount:i?m:0,maxSplatCount:m,bucketSize:A,bucketCount:v,bucketBlockSize:E,halfBucketBlockSize:C,bucketStorageSizeBytes:b,bucketsStorageSizeBytes:L,splatDataStorageSizeBytes:R,storageSizeBytes:F,compressionScaleRange:x,compressionScaleFactor:C/x,base:g,bucketsBase:g+y,dataBase:g+L,fullBucketCount:I,partiallyFilledBucketCount:_,sphericalHarmonicsDegree:B};u[p]=O,g+=F,d+=ne.SectionHeaderSizeBytes,f=d/2,h=d/4,S+=m}return u}static writeSectionHeaderToBuffer(e,t,n,i=0){const s=new Uint16Array(n,i,ne.SectionHeaderSizeBytes/2),o=new Uint32Array(n,i,ne.SectionHeaderSizeBytes/4),a=new Float32Array(n,i,ne.SectionHeaderSizeBytes/4);o[0]=e.splatCount,o[1]=e.maxSplatCount,o[2]=t>=1?e.bucketSize:0,o[3]=t>=1?e.bucketCount:0,a[4]=t>=1?e.bucketBlockSize:0,s[10]=t>=1?ne.BucketStorageSizeBytes:0,o[6]=t>=1?e.compressionScaleRange:0,o[7]=e.storageSizeBytes,o[8]=t>=1?e.fullBucketCount:0,o[9]=t>=1?e.partiallyFilledBucketCount:0,s[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const i=new Uint32Array(t,n,ne.SectionHeaderSizeBytes/4);i[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=ne.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new w().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=ne.parseSectionHeaders(n,this.bufferData,ne.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=ne.CompressionLevels[e].BytesPerCenter,i=ne.CompressionLevels[e].BytesPerScale,s=ne.CompressionLevels[e].BytesPerRotation,o=ne.CompressionLevels[e].BytesPerColor,a=qi(t),l=ne.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*a,c=n+i+s+o+l;return{bytesPerCenter:n,bytesPerScale:i,bytesPerRotation:s,bytesPerColor:o,sphericalHarmonicsComponentsPerSplat:a,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:c}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*ne.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let i=0;i<n.maxSplatCount;i++){const s=e+i;this.globalSplatIndexToLocalSplatIndexMap[s]=i,this.globalSplatIndexToSectionMap[s]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){ne.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=ne.HeaderSizeBytes+ne.SectionHeaderSizeBytes*e;ne.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static generateFromUncompressedSplatArrays(e,t,n,i,s,o,a=[]){let l=0;for(let C=0;C<e.length;C++){const b=e[C];l=Math.max(b.sphericalHarmonicsDegree,l)}let c,u;for(let C=0;C<e.length;C++){const b=e[C];for(let x=0;x<b.splats.length;x++){const I=b.splats[x];for(let _=Se.OFFSET.FRC0;_<Se.OFFSET.FRC23&&_<I.length;_++)(!c||I[_]<c)&&(c=I[_]),(!u||I[_]>u)&&(u=I[_])}}c=c||-$n,u=u||$n;const{bytesPerSplat:d}=ne.calculateComponentStorage(n,l),f=ne.CompressionLevels[n].ScaleRange,h=[],g=[];let S=0;for(let C=0;C<e.length;C++){const b=e[C],x=new Se(l);for(let j=0;j<b.splatCount;j++){const ee=b.splats[j];(ee[Se.OFFSET.OPACITY]||0)>=t&&x.addSplat(ee)}const I=a[C]||{},_=(I.blockSizeFactor||1)*(s||ne.BucketBlockSize),y=Math.ceil((I.bucketSizeFactor||1)*(o||ne.BucketSize)),L=ne.computeBucketsForUncompressedSplatArray(x,_,y),B=L.fullBuckets.length,N=L.partiallyFullBuckets.map(j=>j.splats.length),R=N.length,F=[...L.fullBuckets,...L.partiallyFullBuckets],O=x.splats.length*d,W=R*4,X=n>=1?F.length*ne.BucketStorageSizeBytes+W:0,z=O+X,H=new ArrayBuffer(z),q=f/(_*.5),ie=new w;let V=0;for(let j=0;j<F.length;j++){const ee=F[j];ie.fromArray(ee.center);for(let se=0;se<ee.splats.length;se++){let ce=ee.splats[se];const fe=x.splats[ce],ae=X+V*d;ne.writeSplatDataToSectionBuffer(fe,H,ae,n,l,ie,q,f,c,u),V++}}if(S+=V,n>=1){const j=new Uint32Array(H,0,N.length*4);for(let se=0;se<N.length;se++)j[se]=N[se];const ee=new Float32Array(H,W,F.length*ne.BucketStorageSizeFloats);for(let se=0;se<F.length;se++){const ce=F[se],fe=se*3;ee[fe]=ce.center[0],ee[fe+1]=ce.center[1],ee[fe+2]=ce.center[2]}}h.push(H);const Z=new ArrayBuffer(ne.SectionHeaderSizeBytes);ne.writeSectionHeaderToBuffer({maxSplatCount:V,splatCount:V,bucketSize:y,bucketCount:F.length,bucketBlockSize:_,compressionScaleRange:f,storageSizeBytes:z,fullBucketCount:B,partiallyFilledBucketCount:R,sphericalHarmonicsDegree:l},n,Z,0),g.push(Z)}let p=0;for(let C of h)p+=C.byteLength;const m=ne.HeaderSizeBytes+ne.SectionHeaderSizeBytes*h.length+p,A=new ArrayBuffer(m);ne.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:h.length,sectionCount:h.length,maxSplatCount:S,splatCount:S,compressionLevel:n,sceneCenter:i,minSphericalHarmonicsCoeff:c,maxSphericalHarmonicsCoeff:u},A);let v=ne.HeaderSizeBytes;for(let C of g)new Uint8Array(A,v,ne.SectionHeaderSizeBytes).set(new Uint8Array(C)),v+=ne.SectionHeaderSizeBytes;for(let C of h)new Uint8Array(A,v,C.byteLength).set(new Uint8Array(C)),v+=C.byteLength;return new ne(A)}static computeBucketsForUncompressedSplatArray(e,t,n){let i=e.splatCount;const s=t/2,o=new w,a=new w;for(let S=0;S<i;S++){const p=e.splats[S],m=[p[Se.OFFSET.X],p[Se.OFFSET.Y],p[Se.OFFSET.Z]];(S===0||m[0]<o.x)&&(o.x=m[0]),(S===0||m[0]>a.x)&&(a.x=m[0]),(S===0||m[1]<o.y)&&(o.y=m[1]),(S===0||m[1]>a.y)&&(a.y=m[1]),(S===0||m[2]<o.z)&&(o.z=m[2]),(S===0||m[2]>a.z)&&(a.z=m[2])}const l=new w().copy(a).sub(o),c=Math.ceil(l.y/t),u=Math.ceil(l.z/t),d=new w,f=[],h={};for(let S=0;S<i;S++){const p=e.splats[S],m=[p[Se.OFFSET.X],p[Se.OFFSET.Y],p[Se.OFFSET.Z]],A=Math.floor((m[0]-o.x)/t),v=Math.floor((m[1]-o.y)/t),E=Math.floor((m[2]-o.z)/t);d.x=A*t+o.x+s,d.y=v*t+o.y+s,d.z=E*t+o.z+s;const C=A*(c*u)+v*u+E;let b=h[C];b||(h[C]=b={splats:[],center:d.toArray()}),b.splats.push(S),b.splats.length>=n&&(f.push(b),h[C]=null)}const g=[];for(let S in h)if(h.hasOwnProperty(S)){const p=h[S];p&&g.push(p)}return{fullBuckets:f,partiallyFullBuckets:g}}static preallocateUncompressed(e,t){const n=ne.CompressionLevels[0].SphericalHarmonicsDegrees[t],i=ne.HeaderSizeBytes+ne.SectionHeaderSizeBytes,s=i+n.BytesPerSplat*e,o=new ArrayBuffer(s);return ne.writeHeaderToBuffer({versionMajor:ne.CurrentMajorVersion,versionMinor:ne.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new w},o),ne.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:t},0,o,ne.HeaderSizeBytes),{splatBuffer:new ne(o,!0),splatBufferDataOffsetBytes:i}}};k(ne,"CurrentMajorVersion",0),k(ne,"CurrentMinorVersion",1),k(ne,"CenterComponentCount",3),k(ne,"ScaleComponentCount",3),k(ne,"RotationComponentCount",4),k(ne,"ColorComponentCount",4),k(ne,"CovarianceComponentCount",6),k(ne,"SplatScaleOffsetFloat",3),k(ne,"SplatRotationOffsetFloat",6),k(ne,"CompressionLevels",{0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}}),k(ne,"CovarianceSizeFloats",6),k(ne,"HeaderSizeBytes",4096),k(ne,"SectionHeaderSizeBytes",1024),k(ne,"BucketStorageSizeBytes",12),k(ne,"BucketStorageSizeFloats",3),k(ne,"BucketBlockSize",5),k(ne,"BucketSize",256),k(ne,"computeCovariance",function(){const e=new Oe,t=new He,n=new He,i=new He,s=new He,o=new He,a=new He;return function(l,c,u,d,f=0,h){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),n.setFromMatrix4(e),i.copy(n).multiply(t),s.copy(i).transpose().premultiply(i),u&&(o.setFromMatrix4(u),a.copy(o).transpose(),s.multiply(a),s.premultiply(o)),h>=1?(d[f]=Et(s.elements[0]),d[f+1]=Et(s.elements[3]),d[f+2]=Et(s.elements[6]),d[f+3]=Et(s.elements[4]),d[f+4]=Et(s.elements[7]),d[f+5]=Et(s.elements[8])):(d[f]=s.elements[0],d[f+1]=s.elements[3],d[f+2]=s.elements[6],d[f+3]=s.elements[4],d[f+4]=s.elements[7],d[f+5]=s.elements[8])}}()),k(ne,"dot3",(e,t,n,i,s)=>{s[0]=s[1]=s[2]=0;const o=i[0],a=i[1],l=i[2];ne.addInto3(e[0]*o,e[1]*o,e[2]*o,s),ne.addInto3(t[0]*a,t[1]*a,t[2]*a,s),ne.addInto3(n[0]*l,n[1]*l,n[2]*l,s)}),k(ne,"addInto3",(e,t,n,i)=>{i[0]=i[0]+e,i[1]=i[1]+t,i[2]=i[2]+n}),k(ne,"dot5",(e,t,n,i,s,o,a)=>{a[0]=a[1]=a[2]=0;const l=o[0],c=o[1],u=o[2],d=o[3],f=o[4];ne.addInto3(e[0]*l,e[1]*l,e[2]*l,a),ne.addInto3(t[0]*c,t[1]*c,t[2]*c,a),ne.addInto3(n[0]*u,n[1]*u,n[2]*u,a),ne.addInto3(i[0]*d,i[1]*d,i[2]*d,a),ne.addInto3(s[0]*f,s[1]*f,s[2]*f,a)}),k(ne,"rotateSphericalHarmonics3",(e,t,n,i,s,o,a,l,c)=>{ne.dot3(e,t,n,i,a),ne.dot3(e,t,n,s,l),ne.dot3(e,t,n,o,c)}),k(ne,"rotateSphericalHarmonics5",(e,t,n,i,s,o,a,l,c,u,d,f,h,g,S,p,m,A)=>{const v=Math.sqrt(.25),E=Math.sqrt(3/4),C=Math.sqrt(1/3),b=Math.sqrt(4/3),x=Math.sqrt(1/12);c[0]=v*(l[2]*o[0]+l[0]*o[2]+(o[2]*l[0]+o[0]*l[2])),c[1]=l[1]*o[0]+o[1]*l[0],c[2]=E*(l[1]*o[1]+o[1]*l[1]),c[3]=l[1]*o[2]+o[1]*l[2],c[4]=v*(l[2]*o[2]-l[0]*o[0]+(o[2]*l[2]-o[0]*l[0])),ne.dot5(e,t,n,i,s,c,g),u[0]=v*(a[2]*o[0]+a[0]*o[2]+(o[2]*a[0]+o[0]*a[2])),u[1]=a[1]*o[0]+o[1]*a[0],u[2]=E*(a[1]*o[1]+o[1]*a[1]),u[3]=a[1]*o[2]+o[1]*a[2],u[4]=v*(a[2]*o[2]-a[0]*o[0]+(o[2]*a[2]-o[0]*a[0])),ne.dot5(e,t,n,i,s,u,S),d[0]=C*(a[2]*a[0]+a[0]*a[2])+-x*(l[2]*l[0]+l[0]*l[2]+(o[2]*o[0]+o[0]*o[2])),d[1]=b*a[1]*a[0]+-C*(l[1]*l[0]+o[1]*o[0]),d[2]=a[1]*a[1]+-v*(l[1]*l[1]+o[1]*o[1]),d[3]=b*a[1]*a[2]+-C*(l[1]*l[2]+o[1]*o[2]),d[4]=C*(a[2]*a[2]-a[0]*a[0])+-x*(l[2]*l[2]-l[0]*l[0]+(o[2]*o[2]-o[0]*o[0])),ne.dot5(e,t,n,i,s,d,p),f[0]=v*(a[2]*l[0]+a[0]*l[2]+(l[2]*a[0]+l[0]*a[2])),f[1]=a[1]*l[0]+l[1]*a[0],f[2]=E*(a[1]*l[1]+l[1]*a[1]),f[3]=a[1]*l[2]+l[1]*a[2],f[4]=v*(a[2]*l[2]-a[0]*l[0]+(l[2]*a[2]-l[0]*a[0])),ne.dot5(e,t,n,i,s,f,m),h[0]=v*(l[2]*l[0]+l[0]*l[2]-(o[2]*o[0]+o[0]*o[2])),h[1]=l[1]*l[0]-o[1]*o[0],h[2]=E*(l[1]*l[1]-o[1]*o[1]),h[3]=l[1]*l[2]-o[1]*o[2],h[4]=v*(l[2]*l[2]-l[0]*l[0]-(o[2]*o[2]-o[0]*o[0])),ne.dot5(e,t,n,i,s,h,A)}),k(ne,"writeSplatDataToSectionBuffer",function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),i=new ArrayBuffer(4),s=new ArrayBuffer(256),o=new it,a=new w,l=new w,{X:c,Y:u,Z:d,SCALE0:f,SCALE1:h,SCALE2:g,ROTATION0:S,ROTATION1:p,ROTATION2:m,ROTATION3:A,FDC0:v,FDC1:E,FDC2:C,OPACITY:b,FRC0:x,FRC9:I}=Se.OFFSET,_=(y,L,B)=>{const N=B*2+1;return y=Math.round(y*L)+B,ht(y,0,N)};return function(y,L,B,N,R,F,O,W,X=-$n,z=$n){const H=qi(R),q=ne.CompressionLevels[N].BytesPerCenter,ie=ne.CompressionLevels[N].BytesPerScale,V=ne.CompressionLevels[N].BytesPerRotation,Z=ne.CompressionLevels[N].BytesPerColor,j=B,ee=j+q,se=ee+ie,ce=se+V,fe=ce+Z;if(y[S]!==void 0?(o.set(y[S],y[p],y[m],y[A]),o.normalize()):o.set(1,0,0,0),y[f]!==void 0?a.set(y[f]||0,y[h]||0,y[g]||0):a.set(0,0,0),N===0){const Ce=new Float32Array(L,j,ne.CenterComponentCount),G=new Float32Array(L,se,ne.RotationComponentCount),Be=new Float32Array(L,ee,ne.ScaleComponentCount);if(G.set([o.x,o.y,o.z,o.w]),Be.set([a.x,a.y,a.z]),Ce.set([y[c],y[u],y[d]]),R>0){const ve=new Float32Array(L,fe,H);if(R>=1){for(let xe=0;xe<9;xe++)ve[xe]=y[x+xe]||0;if(R>=2)for(let xe=0;xe<15;xe++)ve[xe+9]=y[I+xe]||0}}}else{const Ce=new Uint16Array(e,0,ne.CenterComponentCount),G=new Uint16Array(n,0,ne.RotationComponentCount),Be=new Uint16Array(t,0,ne.ScaleComponentCount);if(G.set([Et(o.x),Et(o.y),Et(o.z),Et(o.w)]),Be.set([Et(a.x),Et(a.y),Et(a.z)]),l.set(y[c],y[u],y[d]).sub(F),l.x=_(l.x,O,W),l.y=_(l.y,O,W),l.z=_(l.z,O,W),Ce.set([l.x,l.y,l.z]),R>0){const ve=N===1?Uint16Array:Uint8Array,xe=N===1?2:1,_e=new ve(s,0,H);if(R>=1){for(let Re=0;Re<9;Re++){const P=y[x+Re]||0;_e[Re]=N===1?Et(P):ms(P,X,z)}const Xe=9*xe;if(zi(_e.buffer,0,L,fe,Xe),R>=2){for(let Re=0;Re<15;Re++){const P=y[I+Re]||0;_e[Re+9]=N===1?Et(P):ms(P,X,z)}zi(_e.buffer,Xe,L,fe+Xe,15*xe)}}}zi(Ce.buffer,0,L,j,6),zi(Be.buffer,0,L,ee,6),zi(G.buffer,0,L,se,8)}const ae=new Uint8ClampedArray(i,0,4);ae.set([y[v]||0,y[E]||0,y[C]||0]),ae[3]=y[b]||0,zi(ae.buffer,0,L,ce,4)}}());let we=ne;const Wl=new Uint8Array([112,108,121,10]),Xl=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),ga="end_header",Sa=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),Cn=(r,e)=>{const t=(1<<e)-1;return(r&t)/t},Yl=(r,e)=>{r.x=Cn(e>>>21,11),r.y=Cn(e>>>11,10),r.z=Cn(e,11)},g0=(r,e)=>{r.x=Cn(e>>>24,8),r.y=Cn(e>>>16,8),r.z=Cn(e>>>8,8),r.w=Cn(e,8)},S0=(r,e)=>{const t=1/(Math.sqrt(2)*.5),n=(Cn(e>>>20,10)-.5)*t,i=(Cn(e>>>10,10)-.5)*t,s=(Cn(e,10)-.5)*t,o=Math.sqrt(1-(n*n+i*i+s*s));switch(e>>>30){case 0:r.set(o,n,i,s);break;case 1:r.set(n,o,i,s);break;case 2:r.set(n,i,o,s);break;case 3:r.set(n,i,s,o);break}},Fn=(r,e,t)=>r*(1-t)+e*t,pt=(r,e)=>{var t;return(t=r.properties.find(n=>n.name===e&&n.storage))==null?void 0:t.storage},rt=class rt{static decodeHeaderText(e){let t,n,i,s;const o=e.split(`
`).filter(d=>!d.startsWith("comment "));let a=0,l=!1;for(let d=1;d<o.length;++d){const f=o[d].split(" ");switch(f[0]){case"format":if(f[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:f[1],count:parseInt(f[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"?i=t:t.name==="sh"&&(s=t);break;case"property":{if(!Sa.has(f[1]))throw new Error(`Unrecognized property data type '${f[1]}' in ply header`);const h=Sa.get(f[1]),g=h.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(a+=h.BYTES_PER_ELEMENT),t.properties.push({type:f[1],name:f[2],storage:null,byteSize:h.BYTES_PER_ELEMENT,storageSizeByes:g}),t.storageSizeBytes+=g;break}case ga:l=!0;break;default:throw new Error(`Unrecognized header value '${f[0]}' in ply header`)}if(l)break}let c=0,u=0;return s&&(u=s.properties.length,s.properties.length>=45?c=3:s.properties.length>=24?c=2:s.properties.length>=9&&(c=1)),{chunkElement:n,vertexElement:i,shElement:s,bytesPerSplat:a,headerSizeBytes:e.indexOf(ga)+ga.length+1,sphericalHarmonicsDegree:c,sphericalHarmonicsPerSplat:u}}static decodeHeader(e){const t=(h,g)=>{const S=h.length-g.length;let p,m;for(p=0;p<=S;++p){for(m=0;m<g.length&&h[p+m]===g[m];++m);if(m===g.length)return p}return-1},n=(h,g)=>{if(h.length<g.length)return!1;for(let S=0;S<g.length;++S)if(h[S]!==g[S])return!1;return!0};let i=new Uint8Array(e),s;if(i.length>=Wl.length&&!n(i,Wl))throw new Error("Invalid PLY header");if(s=t(i,Xl),s===-1)throw new Error("End of PLY header not found");const o=new TextDecoder("ascii").decode(i.slice(0,s)),{chunkElement:a,vertexElement:l,shElement:c,sphericalHarmonicsDegree:u,sphericalHarmonicsPerSplat:d,bytesPerSplat:f}=rt.decodeHeaderText(o);return{headerSizeBytes:s+Xl.length,bytesPerSplat:f,chunkElement:a,vertexElement:l,shElement:c,sphericalHarmonicsDegree:u,sphericalHarmonicsPerSplat:d}}static readElementData(e,t,n,i,s,o=null){let a=t instanceof DataView?t:new DataView(t);i=i||0,s=s||e.count-1;for(let l=i;l<=s;++l)for(let c=0;c<e.properties.length;++c){const u=e.properties[c],d=Sa.get(u.type),f=d.BYTES_PER_ELEMENT*e.count;if((!u.storage||u.storage.byteLength<f)&&(!o||o(u.name))&&(u.storage=new d(e.count)),u.storage)switch(u.type){case"char":u.storage[l]=a.getInt8(n);break;case"uchar":u.storage[l]=a.getUint8(n);break;case"short":u.storage[l]=a.getInt16(n,!0);break;case"ushort":u.storage[l]=a.getUint16(n,!0);break;case"int":u.storage[l]=a.getInt32(n,!0);break;case"uint":u.storage[l]=a.getUint32(n,!0);break;case"float":u.storage[l]=a.getFloat32(n,!0);break;case"double":u.storage[l]=a.getFloat64(n,!0);break}n+=u.byteSize}return n}static readPly(e,t=null){const n=rt.decodeHeader(e);let i=rt.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return i=rt.readElementData(n.vertexElement,e,i,null,null,t),rt.readElementData(n.shElement,e,i,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement,shElement:n.shElement,sphericalHarmonicsDegree:n.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:n.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,t,n){const i={};if(t){const s=pt(e,"min_r"),o=pt(e,"min_g"),a=pt(e,"min_b"),l=pt(e,"max_r"),c=pt(e,"max_g"),u=pt(e,"max_b"),d=pt(e,"min_x"),f=pt(e,"min_y"),h=pt(e,"min_z"),g=pt(e,"max_x"),S=pt(e,"max_y"),p=pt(e,"max_z"),m=pt(e,"min_scale_x"),A=pt(e,"min_scale_y"),v=pt(e,"min_scale_z"),E=pt(e,"max_scale_x"),C=pt(e,"max_scale_y"),b=pt(e,"max_scale_z"),x=pt(t,"packed_position"),I=pt(t,"packed_rotation"),_=pt(t,"packed_scale"),y=pt(t,"packed_color");i.colorExtremes={minR:s,maxR:l,minG:o,maxG:c,minB:a,maxB:u},i.positionExtremes={minX:d,maxX:g,minY:f,maxY:S,minZ:h,maxZ:p},i.scaleExtremes={minScaleX:m,maxScaleX:E,minScaleY:A,maxScaleY:C,minScaleZ:v,maxScaleZ:b},i.position=x,i.rotation=I,i.scale=_,i.color=y}if(n){const s={};for(let o=0;o<45;o++){const a=`f_rest_${o}`,l=pt(n,a);if(l)s[a]=l;else break}i.sh=s}return i}static parseToUncompressedSplatBufferSection(e,t,n,i,s,o,a,l,c=null){rt.readElementData(t,o,0,n,i,c);const u=we.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:d,scaleExtremes:f,colorExtremes:h,position:g,rotation:S,scale:p,color:m}=rt.getElementStorageArrays(e,t),A=Se.createSplat();for(let v=n;v<=i;++v){rt.decompressBaseSplat(v,s,g,d,p,f,S,h,m,A);const E=v*u+l;we.writeSplatDataToSectionBuffer(A,a,E,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,i,s,o,a,l=null){rt.readElementData(t,o,0,n,i,l);const{positionExtremes:c,scaleExtremes:u,colorExtremes:d,position:f,rotation:h,scale:g,color:S}=rt.getElementStorageArrays(e,t);for(let p=n;p<=i;++p){const m=Se.createSplat();rt.decompressBaseSplat(p,s,f,c,g,u,h,d,S,m),a.addSplat(m)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,t,n,i,s,o,a,l,c,u=null){rt.readElementData(t,s,o,n,i,u);const{sh:d}=rt.getElementStorageArrays(e,void 0,t),f=Object.values(d);for(let h=n;h<=i;++h)rt.decompressSphericalHarmonics(h,f,a,l,c.splats[h])}static parseToUncompressedSplatArray(e,t){const{chunkElement:n,vertexElement:i,shElement:s,sphericalHarmonicsDegree:o}=rt.readPly(e);t=Math.min(t,o);const a=new Se(t),{positionExtremes:l,scaleExtremes:c,colorExtremes:u,position:d,rotation:f,scale:h,color:g}=rt.getElementStorageArrays(n,i);let S;if(t>0){const{sh:p}=rt.getElementStorageArrays(n,void 0,s);S=Object.values(p)}for(let p=0;p<i.count;++p){a.addDefaultSplat();const m=a.getSplat(a.splatCount-1);rt.decompressBaseSplat(p,0,d,l,h,c,f,u,g,m),t>0&&rt.decompressSphericalHarmonics(p,S,t,o,m)}return a}static parseToUncompressedSplatBuffer(e,t){const{chunkElement:n,vertexElement:i,shElement:s,sphericalHarmonicsDegree:o}=rt.readPly(e);t=Math.min(t,o);const{splatBuffer:a,splatBufferDataOffsetBytes:l}=we.preallocateUncompressed(i.count,t),{positionExtremes:c,scaleExtremes:u,colorExtremes:d,position:f,rotation:h,scale:g,color:S}=rt.getElementStorageArrays(n,i);let p;if(t>0){const{sh:v}=rt.getElementStorageArrays(n,void 0,s);p=Object.values(v)}const m=we.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat,A=Se.createSplat(t);for(let v=0;v<i.count;++v){rt.decompressBaseSplat(v,0,f,c,g,u,h,d,S,A),t>0&&rt.decompressSphericalHarmonics(v,p,t,o,A);const E=v*m+l;we.writeSplatDataToSectionBuffer(A,a.bufferData,E,0,t)}return a}};k(rt,"decompressBaseSplat",function(){const e=new w,t=new it,n=new w,i=new vt,s=Se.OFFSET;return function(o,a,l,c,u,d,f,h,g,S){S=S||Se.createSplat();const p=Math.floor((a+o)/256);return Yl(e,l[o]),S0(t,f[o]),Yl(n,u[o]),g0(i,g[o]),S[s.X]=Fn(c.minX[p],c.maxX[p],e.x),S[s.Y]=Fn(c.minY[p],c.maxY[p],e.y),S[s.Z]=Fn(c.minZ[p],c.maxZ[p],e.z),S[s.ROTATION0]=t.x,S[s.ROTATION1]=t.y,S[s.ROTATION2]=t.z,S[s.ROTATION3]=t.w,S[s.SCALE0]=Math.exp(Fn(d.minScaleX[p],d.maxScaleX[p],n.x)),S[s.SCALE1]=Math.exp(Fn(d.minScaleY[p],d.maxScaleY[p],n.y)),S[s.SCALE2]=Math.exp(Fn(d.minScaleZ[p],d.maxScaleZ[p],n.z)),h.minR&&h.maxR?S[s.FDC0]=ht(Math.round(Fn(h.minR[p],h.maxR[p],i.x)*255),0,255):S[s.FDC0]=ht(Math.floor(i.x*255),0,255),h.minG&&h.maxG?S[s.FDC1]=ht(Math.round(Fn(h.minG[p],h.maxG[p],i.y)*255),0,255):S[s.FDC1]=ht(Math.floor(i.y*255),0,255),h.minB&&h.maxB?S[s.FDC2]=ht(Math.round(Fn(h.minB[p],h.maxB[p],i.z)*255),0,255):S[s.FDC2]=ht(Math.floor(i.z*255),0,255),S[s.OPACITY]=ht(Math.floor(i.w*255),0,255),S}}()),k(rt,"decompressSphericalHarmonics",function(){const e=[0,3,8,15],t=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(n,i,s,o,a){a=a||Se.createSplat();let l=e[s],c=e[o];for(let u=0;u<3;++u)for(let d=0;d<15;++d){const f=t[u*15+d];d<l&&d<c&&(a[Se.OFFSET.FRC0+f]=i[u*c+d][n]*(8/255)-4)}return a}}());let zn=rt;const Xt={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[uu,to,no,io,so,ro,ao]=[0,1,2,3,4,5,6],ql={double:uu,int:to,uint:no,float:io,short:so,ushort:ro,uchar:ao},A0={[uu]:8,[to]:4,[no]:4,[io]:4,[so]:2,[ro]:2,[ao]:1},qt=class qt{static decodeSectionHeader(e,t,n=0){const i=[];let s=!1,o=-1,a=0,l=!1,c=null;const u=[],d=[],f=[],h={};for(let m=n;m<e.length;m++){const A=e[m].trim();if(A.startsWith("element"))if(s){o--;break}else{s=!0,n=m,o=m;const v=A.split(" ");let E=0;for(let C of v){const b=C.trim();b.length>0&&(E++,E===2?c=b:E===3&&(a=parseInt(b)))}}else if(A.startsWith("property")){const v=A.match(/(\w+)\s+(\w+)\s+(\w+)/);if(v){const E=v[2],C=v[3];f.push(C);const b=t[C];h[C]=E;const x=ql[E];b!==void 0&&(u.push(b),d[b]=x)}}if(A===qt.HeaderEndToken){l=!0;break}s&&(i.push(A),o++)}const g=[];let S=0;for(let m of f){const A=h[m];if(h.hasOwnProperty(m)){const v=t[m];v!==void 0&&(g[v]=S)}S+=A0[ql[A]]}const p=qt.decodeSphericalHarmonicsFromSectionHeader(f,t);return{headerLines:i,headerStartLine:n,headerEndLine:o,fieldTypes:d,fieldIds:u,fieldOffsets:g,bytesPerVertex:S,vertexCount:a,dataSizeBytes:S*a,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:p.degree,sphericalHarmonicsCoefficientsPerChannel:p.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:p.degree1Fields,sphericalHarmonicsDegree2Fields:p.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,i=0;for(let l of e)l.startsWith("f_rest")&&n++;i=n/3;let s=0;i>=3&&(s=1),i>=8&&(s=2);let o=[],a=[];for(let l=0;l<3;l++){if(s>=1)for(let c=0;c<3;c++)o.push(t["f_rest_"+(c+i*l)]);if(s>=2)for(let c=0;c<5;c++)a.push(t["f_rest_"+(c+i*l+3)])}return{degree:s,coefficientsPerChannel:i,degree1Fields:o,degree2Fields:a}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const i=n.split(" ");let s=0;for(let o of i){const a=o.trim();a.length>0&&(s++,s===2&&t.push(a))}}return t}static checkTextForEndHeader(e){return!!e.includes(qt.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,i){const s=new Uint8Array(e,Math.max(0,t-n),n),o=i.decode(s);return qt.checkTextForEndHeader(o)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,s);if(i+=t.decode(o),n+=s,qt.checkBufferForEndHeader(e,n,s*2,t))break}return i}static readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,s);if(i+=t.decode(o),n+=s,qt.checkBufferForEndHeader(e,n,s*2,t))break}return i}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let i=0;i<t.length;i++){const s=t[i].trim();if(n.push(s),s===qt.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=qt.convertHeaderTextToLines(e);let n=Xt.INRIAV1;for(let i=0;i<t.length;i++){const s=t[i].trim();if(s.startsWith("element chunk")||s.match(/[A-Za-z]*packed_[A-Za-z]*/))n=Xt.PlayCanvasCompressed;else if(s.startsWith("element codebook_centers"))n=Xt.INRIAV2;else if(s===qt.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=qt.extractHeaderFromBufferToText(e);return qt.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,i,s,o,a=!0){const l=n*t.bytesPerVertex+i,c=t.fieldOffsets,u=t.fieldTypes;for(let d of s){const f=u[d];f===io?o[d]=e.getFloat32(l+c[d],!0):f===so?o[d]=e.getInt16(l+c[d],!0):f===ro?o[d]=e.getUint16(l+c[d],!0):f===to?o[d]=e.getInt32(l+c[d],!0):f===no?o[d]=e.getUint32(l+c[d],!0):f===ao&&(a?o[d]=e.getUint8(l+c[d])/255:o[d]=e.getUint8(l+c[d]))}}};k(qt,"HeaderEndToken","end_header");let St=qt;const du=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],v0=du.map((r,e)=>e),[Ql,x0,_0,y0,M0,E0,C0,b0,T0,w0,jl,R0,I0,Kl,Zl,P0,D0,L0]=v0,cn=class cn{static decodeHeaderLines(e){let t=0;e.forEach(u=>{u.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let s=Array.from(Array(Math.max(n-1,0))).map((u,d)=>`f_rest_${d+1}`);const o=[...du,...s],a=o.map((u,d)=>d),l=a.reduce((u,d)=>(u[o[d]]=d,u),{}),c=St.decodeSectionHeader(e,l,0);return c.splatCount=c.vertexCount,c.bytesPerSplat=c.bytesPerVertex,c.fieldsToReadIndexes=a,c}static decodeHeaderText(e){const t=St.convertHeaderTextToLines(e),n=cn.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(St.HeaderEndToken)+St.HeaderEndToken.length+1,n}static decodeHeaderFromBuffer(e){const t=St.readHeaderFromBuffer(e);return cn.decodeHeaderText(t)}static findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,t,n,i,s,o,a,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);const c=we.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let u=t;u<=n;u++){const d=cn.parseToUncompressedSplat(i,u,e,s,l),f=u*c+a;we.writeSplatDataToSectionBuffer(d,o,f,0,l)}}static parseToUncompressedSplatArraySection(e,t,n,i,s,o,a=0){a=Math.min(a,e.sphericalHarmonicsDegree);for(let l=t;l<=n;l++){const c=cn.parseToUncompressedSplat(i,l,e,s,a);o.addSplat(c)}}static decodeSectionSplatData(e,t,n,i,s=!0){if(i=Math.min(i,n.sphericalHarmonicsDegree),s){const o=new Se(i);for(let a=0;a<t;a++){const l=cn.parseToUncompressedSplat(e,a,n,0,i);o.addSplat(l)}return o}else{const{splatBuffer:o,splatBufferDataOffsetBytes:a}=we.preallocateUncompressed(t,i);return cn.parseToUncompressedSplatBufferSection(n,0,t-1,e,0,o.bufferData,a,i),o}}static readSplat(e,t,n,i,s){return St.readVertex(e,t,n,i,t.fieldsToReadIndexes,s,!0)}static parseToUncompressedSplatArray(e,t=0){const{header:n,splatCount:i,splatData:s}=$l(e);return cn.decodeSectionSplatData(s,i,n,t,!0)}static parseToUncompressedSplatBuffer(e,t=0){const{header:n,splatCount:i,splatData:s}=$l(e);return cn.decodeSectionSplatData(s,i,n,t,!1)}};k(cn,"parseToUncompressedSplat",function(){let e=[];const t=new it,n=Se.OFFSET.X,i=Se.OFFSET.Y,s=Se.OFFSET.Z,o=Se.OFFSET.SCALE0,a=Se.OFFSET.SCALE1,l=Se.OFFSET.SCALE2,c=Se.OFFSET.ROTATION0,u=Se.OFFSET.ROTATION1,d=Se.OFFSET.ROTATION2,f=Se.OFFSET.ROTATION3,h=Se.OFFSET.FDC0,g=Se.OFFSET.FDC1,S=Se.OFFSET.FDC2,p=Se.OFFSET.OPACITY,m=[];for(let A=0;A<45;A++)m[A]=Se.OFFSET.FRC0+A;return function(A,v,E,C=0,b=0){b=Math.min(b,E.sphericalHarmonicsDegree),cn.readSplat(A,E,v,C,e);const x=Se.createSplat(b);if(e[Ql]!==void 0?(x[o]=Math.exp(e[Ql]),x[a]=Math.exp(e[x0]),x[l]=Math.exp(e[_0])):(x[o]=.01,x[a]=.01,x[l]=.01),e[jl]!==void 0){const I=.28209479177387814;x[h]=(.5+I*e[jl])*255,x[g]=(.5+I*e[R0])*255,x[S]=(.5+I*e[I0])*255}else e[Zl]!==void 0?(x[h]=e[Zl]*255,x[g]=e[P0]*255,x[S]=e[D0]*255):(x[h]=0,x[g]=0,x[S]=0);if(e[Kl]!==void 0&&(x[p]=1/(1+Math.exp(-e[Kl]))*255),x[h]=ht(Math.floor(x[h]),0,255),x[g]=ht(Math.floor(x[g]),0,255),x[S]=ht(Math.floor(x[S]),0,255),x[p]=ht(Math.floor(x[p]),0,255),b>=1&&e[L0]!==void 0){for(let I=0;I<9;I++)x[m[I]]=e[E.sphericalHarmonicsDegree1Fields[I]];if(b>=2)for(let I=0;I<15;I++)x[m[9+I]]=e[E.sphericalHarmonicsDegree2Fields[I]]}return t.set(e[y0],e[M0],e[E0],e[C0]),t.normalize(),x[c]=t.x,x[u]=t.y,x[d]=t.z,x[f]=t.w,x[n]=e[b0],x[i]=e[T0],x[s]=e[w0],x}}());let Gn=cn;function $l(r){const e=Gn.decodeHeaderFromBuffer(r),t=e.splatCount,n=Gn.findSplatData(r,e);return{header:e,splatCount:t,splatData:n}}const hu=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],sr=hu.map((r,e)=>e),[rr,F0,B0,Jl,ar,U0,Aa]=[0,1,4,16,17,18,19],fu=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],Fa=fu.map((r,e)=>e),[ec,O0,N0,z0,H0,k0,V0,G0,W0,X0,Ba,pu,mu,tc]=Fa,nc=Ba,Y0=pu,q0=mu,or=r=>{const e=(31744&r)>>10,t=1023&r;return(r>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},Qt=class Qt{static decodeSectionHeadersFromHeaderLines(e){const t=Fa.reduce((u,d)=>(u[fu[d]]=d,u),{}),n=sr.reduce((u,d)=>(u[hu[d]]=d,u),{}),i=St.getHeaderSectionNames(e);let s;for(let u=0;u<i.length;u++)i[u]==="codebook_centers"&&(s=u);let o=0,a=!1;const l=[];let c=0;for(;!a;){let u;c===s?u=St.decodeSectionHeader(e,n,o):u=St.decodeSectionHeader(e,t,o),a=u.endOfHeader,o=u.headerEndLine+1,a||(u.splatCount=u.vertexCount,u.bytesPerSplat=u.bytesPerVertex),l.push(u),c++}return l}static decodeSectionHeadersFromHeaderText(e){const t=St.convertHeaderTextToLines(e);return Qt.decodeSectionHeadersFromHeaderLines(t)}static getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}static decodeHeaderFromHeaderText(e){const t=e.indexOf(St.HeaderEndToken)+St.HeaderEndToken.length+1,n=Qt.decodeSectionHeadersFromHeaderText(e),i=Qt.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:i}}static decodeHeaderFromBuffer(e){const t=St.readHeaderFromBuffer(e);return Qt.decodeHeaderFromHeaderText(t)}static findVertexData(e,t,n){let i=t.headerSizeBytes;for(let s=0;s<n&&s<t.sectionHeaders.length;s++){const o=t.sectionHeaders[s];i+=o.dataSizeBytes}return new DataView(e,i,t.sectionHeaders[n].dataSizeBytes)}static decodeCodeBook(e,t){const n=[],i=[];for(let s=0;s<t.vertexCount;s++){St.readVertex(e,t,s,0,sr,n);for(let o of sr){const a=sr[o];let l=i[a];l||(i[a]=l=[]),l.push(n[o])}}for(let s=0;s<i.length;s++){const o=i[s],a=.28209479177387814;for(let l=0;l<o.length;l++){const c=or(o[l]);s===Jl?o[l]=Math.round(1/(1+Math.exp(-c))*255):s===rr?o[l]=Math.round((.5+a*c)*255):s===ar?o[l]=Math.exp(c):o[l]=c}}return i}static decodeSectionSplatData(e,t,n,i,s){s=Math.min(s,n.sphericalHarmonicsDegree);const o=new Se(s);for(let a=0;a<t;a++){const l=Qt.parseToUncompressedSplat(e,a,n,i,0,s);o.addSplat(l)}return o}static readSplat(e,t,n,i,s){return St.readVertex(e,t,n,i,Fa,s,!1)}static parseToUncompressedSplatArray(e,t=0){const n=[],i=Qt.decodeHeaderFromBuffer(e,t);let s;for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName==="codebook_centers"){const c=Qt.findVertexData(e,i,a);s=Qt.decodeCodeBook(c,l)}}for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName!=="codebook_centers"){const c=l.vertexCount,u=Qt.findVertexData(e,i,a),d=Qt.decodeSectionSplatData(u,c,l,s,t);n.push(d)}}const o=new Se(t);for(let a of n)for(let l of a.splats)o.addSplat(l);return o}};k(Qt,"parseToUncompressedSplat",function(){let e=[];const t=new it,n=Se.OFFSET.X,i=Se.OFFSET.Y,s=Se.OFFSET.Z,o=Se.OFFSET.SCALE0,a=Se.OFFSET.SCALE1,l=Se.OFFSET.SCALE2,c=Se.OFFSET.ROTATION0,u=Se.OFFSET.ROTATION1,d=Se.OFFSET.ROTATION2,f=Se.OFFSET.ROTATION3,h=Se.OFFSET.FDC0,g=Se.OFFSET.FDC1,S=Se.OFFSET.FDC2,p=Se.OFFSET.OPACITY,m=[];for(let A=0;A<45;A++)m[A]=Se.OFFSET.FRC0+A;return function(A,v,E,C,b=0,x=0){x=Math.min(x,E.sphericalHarmonicsDegree),Qt.readSplat(A,E,v,b,e);const I=Se.createSplat(x);if(e[ec]!==void 0?(I[o]=C[ar][e[ec]],I[a]=C[ar][e[O0]],I[l]=C[ar][e[N0]]):(I[o]=.01,I[a]=.01,I[l]=.01),e[Ba]!==void 0?(I[h]=C[rr][e[Ba]],I[g]=C[rr][e[pu]],I[S]=C[rr][e[mu]]):e[nc]!==void 0?(I[h]=e[nc]*255,I[g]=e[Y0]*255,I[S]=e[q0]*255):(I[h]=0,I[g]=0,I[S]=0),e[tc]!==void 0&&(I[p]=C[Jl][e[tc]]),I[h]=ht(Math.floor(I[h]),0,255),I[g]=ht(Math.floor(I[g]),0,255),I[S]=ht(Math.floor(I[S]),0,255),I[p]=ht(Math.floor(I[p]),0,255),x>=1&&E.sphericalHarmonicsDegree>=1){for(let N=0;N<9;N++){const R=C[F0+N%3];I[m[N]]=R[e[E.sphericalHarmonicsDegree1Fields[N]]]}if(x>=2&&E.sphericalHarmonicsDegree>=2)for(let N=0;N<15;N++){const R=C[B0+N%5];I[m[9+N]]=R[e[E.sphericalHarmonicsDegree2Fields[N]]]}}const _=C[U0][e[z0]],y=C[Aa][e[H0]],L=C[Aa][e[k0]],B=C[Aa][e[V0]];return t.set(_,y,L,B),t.normalize(),I[c]=t.x,I[u]=t.y,I[d]=t.z,I[f]=t.w,I[n]=or(e[G0]),I[i]=or(e[W0]),I[s]=or(e[X0]),I}}());let Ua=Qt;class ic{static parseToUncompressedSplatArray(e,t=0){const n=St.determineHeaderFormatFromPlyBuffer(e);if(n===Xt.PlayCanvasCompressed)return zn.parseToUncompressedSplatArray(e,t);if(n===Xt.INRIAV1)return Gn.parseToUncompressedSplatArray(e,t);if(n===Xt.INRIAV2)return Ua.parseToUncompressedSplatArray(e,t)}static parseToUncompressedSplatBuffer(e,t=0){const n=St.determineHeaderFormatFromPlyBuffer(e);if(n===Xt.PlayCanvasCompressed)return zn.parseToUncompressedSplatBuffer(e,t);if(n===Xt.INRIAV1)return Gn.parseToUncompressedSplatBuffer(e,t);if(n===Xt.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}class oo{constructor(e,t,n,i){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=i}partitionUncompressedSplatArray(e){let t,n,i;if(this.partitionGenerator){const o=this.partitionGenerator(e);t=o.groupingParameters,n=o.sectionCount,i=o.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,i=this.sectionFilters;const s=[];for(let o=0;o<n;o++){const a=new Se(e.sphericalHarmonicsDegree),l=i[o];for(let c=0;c<e.splatCount;c++)l(c)&&a.addSplat(e.splats[c]);s.push(a)}return{splatArrays:s,parameters:t}}static getStandardPartitioner(e=0,t=new w,n=we.BucketBlockSize,i=we.BucketSize){const s=o=>{const a=Se.OFFSET.X,l=Se.OFFSET.Y,c=Se.OFFSET.Z;e<=0&&(e=o.splatCount);const u=new w,d=.5,f=m=>{m.x=Math.floor(m.x/d)*d,m.y=Math.floor(m.y/d)*d,m.z=Math.floor(m.z/d)*d};o.splats.forEach(m=>{u.set(m[a],m[l],m[c]).sub(t),f(u),m.centerDist=u.lengthSq()}),o.splats.sort((m,A)=>{let v=m.centerDist,E=A.centerDist;return v>E?1:-1});const h=[],g=[];e=Math.min(o.splatCount,e);const S=Math.ceil(o.splatCount/e);let p=0;for(let m=0;m<S;m++){let A=p;h.push(v=>v>=A&&v<A+e),g.push({blocksSize:n,bucketSize:i}),p+=e}return{sectionCount:h.length,sectionFilters:h,groupingParameters:g}};return new oo(void 0,void 0,void 0,s)}}class Rs{constructor(e,t,n,i,s,o,a){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=i,this.sceneCenter=s?new w().copy(s):void 0,this.blockSize=o,this.bucketSize=a}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return we.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,i=new w,s=we.BucketBlockSize,o=we.BucketSize){const a=oo.getStandardPartitioner(n,i,s,o);return new Rs(a,e,t,n,i,s,o)}}const At={Downloading:0,Processing:1,Done:2};class Er extends Error{constructor(e){super(e)}}const ut={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function sc(r,e){let t=0;for(let i of r)t+=i.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let i of r)new Uint8Array(e,n,i.sizeBytes).set(i.data),n+=i.sizeBytes;return e}function rc(r,e,t,n,i,s,o,a){return e?Rs.getStandardGenerator(t,n,i,s,o,a).generateFromUncompressedSplatArray(r):we.generateFromUncompressedSplatArrays([r],t,0,new w)}class lo{static loadFromURL(e,t,n,i,s,o,a=!0,l=0,c,u,d,f,h){let g;!n&&!a?g=ut.DownloadBeforeProcessing:a?g=ut.ProgressiveToSplatArray:g=ut.ProgressiveToSplatBuffer;const S=Je.ProgressiveLoadSectionSize,p=we.HeaderSizeBytes+we.SectionHeaderSizeBytes,m=1;let A,v,E,C,b,x=0,I=0,_=0,y=!1,L=!1,B=!1;const N=Za();let R=0,F=0,O=0,W=0,X="",z=null,H=[],q;const ie=new TextDecoder,V=(Z,j,ee)=>{const se=Z>=100;if(ee&&(H.push({data:ee,sizeBytes:ee.byteLength,startBytes:O,endBytes:O+ee.byteLength}),O+=ee.byteLength),g===ut.DownloadBeforeProcessing)se&&N.resolve(H);else{if(y){if(A===Xt.PlayCanvasCompressed&&!L){const ce=z.headerSizeBytes+z.chunkElement.storageSizeBytes;b=sc(H,b),b.byteLength>=ce&&(zn.readElementData(z.chunkElement,b,z.headerSizeBytes),R=ce,F=ce,L=!0)}}else if(X+=ie.decode(ee),St.checkTextForEndHeader(X)){if(A=St.determineHeaderFormatFromHeaderText(X),A===Xt.INRIAV1)z=Gn.decodeHeaderText(X),l=Math.min(l,z.sphericalHarmonicsDegree),x=z.splatCount,L=!0,W=z.headerSizeBytes+z.bytesPerSplat*x;else if(A===Xt.PlayCanvasCompressed){if(z=zn.decodeHeaderText(X),l=Math.min(l,z.sphericalHarmonicsDegree),g===ut.ProgressiveToSplatBuffer&&l>0)throw new Er("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");x=z.vertexElement.count,W=z.headerSizeBytes+z.bytesPerSplat*x+z.chunkElement.storageSizeBytes}else{if(g===ut.ProgressiveToSplatBuffer)throw new Er("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");g=ut.DownloadBeforeProcessing;return}if(g===ut.ProgressiveToSplatBuffer){const ce=we.CompressionLevels[0].SphericalHarmonicsDegrees[l],fe=p+ce.BytesPerSplat*x;E=new ArrayBuffer(fe),we.writeHeaderToBuffer({versionMajor:we.CurrentMajorVersion,versionMinor:we.CurrentMinorVersion,maxSectionCount:m,sectionCount:m,maxSplatCount:x,splatCount:0,compressionLevel:0,sceneCenter:new w},E)}else q=new Se(l);R=z.headerSizeBytes,F=z.headerSizeBytes,y=!0}if(y&&L&&H.length>0&&(v=sc(H,v),O-R>S||O>=W&&!B||se)){const fe=B?z.sphericalHarmonicsPerSplat:z.bytesPerSplat,Ce=(B?O:Math.min(W,O))-F,G=Math.floor(Ce/fe),Be=G*fe,ve=O-F-Be,xe=F-H[0].startBytes,_e=new DataView(v,xe,Be);if(B)A===Xt.PlayCanvasCompressed&&g===ut.ProgressiveToSplatArray&&(zn.parseSphericalHarmonicsToUncompressedSplatArraySection(z.chunkElement,z.shElement,_,_+G-1,_e,0,l,z.sphericalHarmonicsDegree,q),_+=G);else{if(g===ut.ProgressiveToSplatBuffer){const Xe=we.CompressionLevels[0].SphericalHarmonicsDegrees[l],Re=I*Xe.BytesPerSplat+p;A===Xt.PlayCanvasCompressed?zn.parseToUncompressedSplatBufferSection(z.chunkElement,z.vertexElement,0,G-1,I,_e,E,Re):Gn.parseToUncompressedSplatBufferSection(z,0,G-1,_e,0,E,Re,l)}else A===Xt.PlayCanvasCompressed?zn.parseToUncompressedSplatArraySection(z.chunkElement,z.vertexElement,0,G-1,I,_e,q):Gn.parseToUncompressedSplatArraySection(z,0,G-1,_e,0,q,l);I+=G,g===ut.ProgressiveToSplatBuffer&&(C||(we.writeSectionHeaderToBuffer({maxSplatCount:x,splatCount:I,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,E,we.HeaderSizeBytes),C=new we(E,!1)),C.updateLoadedCounts(1,I)),O>=W&&(B=!0)}if(ve===0)H=[];else{let Xe=[],Re=0;for(let P=H.length-1;P>=0;P--){const T=H[P];if(Re+=T.sizeBytes,Xe.unshift(T),Re>=ve)break}H=Xe}R+=S,F+=Be}i&&C&&i(C,se),se&&(g===ut.ProgressiveToSplatBuffer?N.resolve(C):N.resolve(q))}t&&t(Z,j,At.Downloading)};return t&&t(0,"0%",At.Downloading),Fr(e,V,!1,c).then(()=>(t&&t(0,"0%",At.Processing),N.promise.then(Z=>{if(t&&t(100,"100%",At.Done),g===ut.DownloadBeforeProcessing){const j=H.map(ee=>ee.data);return new Blob(j).arrayBuffer().then(ee=>lo.loadFromFileData(ee,s,o,a,l,u,d,f,h))}else return g===ut.ProgressiveToSplatBuffer?Z:rn(()=>rc(Z,a,s,o,u,d,f,h))})))}static loadFromFileData(e,t,n,i,s=0,o,a,l,c){return i?rn(()=>ic.parseToUncompressedSplatArray(e,s)).then(u=>rc(u,i,t,n,o,a,l,c)):rn(()=>ic.parseToUncompressedSplatBuffer(e,s))}}const Q0=r=>new ReadableStream({async start(e){e.enqueue(r),e.close()}});async function j0(r){try{const e=Q0(r);if(!e)throw new Error("Failed to create stream from data");return await K0(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function K0(r){const e=r.pipeThrough(new DecompressionStream("gzip")),n=await new Response(e).arrayBuffer();return new Uint8Array(n)}const Z0=1347635022,$0=1,J0=.15;function eS(r){const e=r>>15&1,t=r>>10&31,n=r&1023,i=e===1?-1:1;return t===0?i*Math.pow(2,-14)*n/1024:t===31?n!==0?NaN:i*(1/0):i*Math.pow(2,t-15)*(1+n/1024)}function tS(r){return(r-128)/128}function gi(r){switch(r){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${r}`),0}}const nS=function(){let r=[];const e=new it,t=Se.OFFSET.X,n=Se.OFFSET.Y,i=Se.OFFSET.Z,s=Se.OFFSET.SCALE0,o=Se.OFFSET.SCALE1,a=Se.OFFSET.SCALE2,l=Se.OFFSET.ROTATION0,c=Se.OFFSET.ROTATION1,u=Se.OFFSET.ROTATION2,d=Se.OFFSET.ROTATION3,f=Se.OFFSET.FDC0,h=Se.OFFSET.FDC1,g=Se.OFFSET.FDC2,S=Se.OFFSET.OPACITY,p=[gi(0),gi(1),gi(2),gi(3)],m=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(A,v,E){E=Math.min(v,E);const C=Se.createSplat(E);A.scale[0]!==void 0?(C[s]=A.scale[0],C[o]=A.scale[1],C[a]=A.scale[2]):(C[s]=.01,C[o]=.01,C[a]=.01),A.color[0]!==void 0?(C[f]=A.color[0],C[h]=A.color[1],C[g]=A.color[2]):r[RED]!==void 0?(C[f]=r[RED]*255,C[h]=r[GREEN]*255,C[g]=r[BLUE]*255):(C[f]=0,C[h]=0,C[g]=0),A.alpha!==void 0&&(C[S]=A.alpha),C[f]=ht(Math.floor(C[f]),0,255),C[h]=ht(Math.floor(C[h]),0,255),C[g]=ht(Math.floor(C[g]),0,255),C[S]=ht(Math.floor(C[S]),0,255);let b=p[E],x=p[v];for(let I=0;I<3;++I)for(let _=0;_<15;++_){const y=m[I*15+_];_<b&&_<x&&(C[Se.OFFSET.FRC0+y]=A.sh[I*x+_])}return e.set(A.rotation[3],A.rotation[0],A.rotation[1],A.rotation[2]),e.normalize(),C[l]=e.x,C[c]=e.y,C[u]=e.z,C[d]=e.w,C[t]=A.position[0],C[n]=A.position[1],C[i]=A.position[2],C}}();function iS(r,e,t,n){return!(r.positions.length!==e*3*(n?2:3)||r.scales.length!==e*3||r.rotations.length!==e*3||r.alphas.length!==e||r.colors.length!==e*3||r.sh.length!==e*t*3)}function ac(r,e,t,n,i){e=Math.min(e,r.shDegree);const s=r.numPoints,o=gi(r.shDegree),a=r.positions.length===s*3*2;if(!iS(r,s,o,a))return null;const l={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]};let c;a&&(c=new Uint16Array(r.positions.buffer,r.positions.byteOffset,s*3));const u=1/(1<<r.fractionalBits),d=gi(r.shDegree),f=.28209479177387814;for(let h=0;h<s;h++){if(a)for(let A=0;A<3;A++)l.position[A]=eS(c[h*3+A]);else for(let A=0;A<3;A++){const v=h*9+A*3;let E=r.positions[v];E|=r.positions[v+1]<<8,E|=r.positions[v+2]<<16,E|=E&8388608?4278190080:0,l.position[A]=E*u}for(let A=0;A<3;A++)l.scale[A]=Math.exp(r.scales[h*3+A]/16-10);const g=r.rotations.subarray(h*3,h*3+3),S=[g[0]/127.5-1,g[1]/127.5-1,g[2]/127.5-1];l.rotation[0]=S[0],l.rotation[1]=S[1],l.rotation[2]=S[2];const p=S[0]*S[0]+S[1]*S[1]+S[2]*S[2];l.rotation[3]=Math.sqrt(Math.max(0,1-p)),l.alpha=Math.floor(r.alphas[h]);for(let A=0;A<3;A++)l.color[A]=Math.floor(((r.colors[h*3+A]/255-.5)/J0*f+.5)*255);for(let A=0;A<3;A++)for(let v=0;v<d;v++)l.sh[A*d+v]=tS(r.sh[d*3*h+v*3+A]);const m=nS(l,r.shDegree,e);if(t){const A=we.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,v=h*A+i;we.writeSplatDataToSectionBuffer(m,n,v,0,e)}else n.addSplat(m)}}const sS=16,rS=1e7;function aS(r){const e=new DataView(r);let t=0;const n={magic:e.getUint32(t,!0),version:e.getUint32(t+4,!0),numPoints:e.getUint32(t+8,!0),shDegree:e.getUint8(t+12),fractionalBits:e.getUint8(t+13),flags:e.getUint8(t+14),reserved:e.getUint8(t+15)};if(t+=sS,n.magic!==Z0)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(n.version<1||n.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${n.version}`),null;if(n.numPoints>rS)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${n.numPoints}`),null;if(n.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${n.shDegree}`),null;const i=n.numPoints,s=gi(n.shDegree),o=n.version===1,a={numPoints:i,shDegree:n.shDegree,fractionalBits:n.fractionalBits,antialiased:(n.flags&$0)!==0,positions:new Uint8Array(i*3*(o?2:3)),scales:new Uint8Array(i*3),rotations:new Uint8Array(i*3),alphas:new Uint8Array(i),colors:new Uint8Array(i*3),sh:new Uint8Array(i*s*3)};try{const l=new Uint8Array(r);let c=a.positions.length,u=t;if(a.positions.set(l.slice(u,u+c)),u+=c,a.alphas.set(l.slice(u,u+a.alphas.length)),u+=a.alphas.length,a.colors.set(l.slice(u,u+a.colors.length)),u+=a.colors.length,a.scales.set(l.slice(u,u+a.scales.length)),u+=a.scales.length,a.rotations.set(l.slice(u,u+a.rotations.length)),u+=a.rotations.length,a.sh.set(l.slice(u,u+a.sh.length)),u+a.sh.length!==r.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(l){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",l),null}return a}async function oS(r){try{const e=await j0(r);return aS(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}class co{static loadFromURL(e,t,n,i,s=!0,o=0,a,l,c,u,d){return t&&t(0,"0%",At.Downloading),Fr(e,t,!0,a).then(f=>(t&&t(0,"0%",At.Processing),co.loadFromFileData(f,n,i,s,o,l,c,u,d)))}static async loadFromFileData(e,t,n,i,s=0,o,a,l,c){await rn();const u=await oS(e);s=Math.min(u.shDegree,s);const d=new Se(s);if(i)return ac(u,s,!1,d,0),Rs.getStandardGenerator(t,n,o,a,l,c).generateFromUncompressedSplatArray(d);{const{splatBuffer:f,splatBufferDataOffsetBytes:h}=we.preallocateUncompressed(u.numPoints,s);return ac(u,s,!0,f.bufferData,h),f}}}const st=class st{static parseToUncompressedSplatBufferSection(e,t,n,i,s,o){const a=we.CompressionLevels[0].BytesPerCenter,l=we.CompressionLevels[0].BytesPerScale,c=we.CompressionLevels[0].BytesPerRotation,u=we.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let d=e;d<=t;d++){const f=d*st.RowSizeBytes+i,h=new Float32Array(n,f,3),g=new Float32Array(n,f+st.CenterSizeBytes,3),S=new Uint8Array(n,f+st.CenterSizeBytes+st.ScaleSizeBytes,4),p=new Uint8Array(n,f+st.CenterSizeBytes+st.ScaleSizeBytes+st.RotationSizeBytes,4),m=new it((p[1]-128)/128,(p[2]-128)/128,(p[3]-128)/128,(p[0]-128)/128);m.normalize();const A=d*u+o,v=new Float32Array(s,A,3),E=new Float32Array(s,A+a,3),C=new Float32Array(s,A+a+l,4),b=new Uint8Array(s,A+a+l+c,4);v[0]=h[0],v[1]=h[1],v[2]=h[2],E[0]=g[0],E[1]=g[1],E[2]=g[2],C[0]=m.w,C[1]=m.x,C[2]=m.y,C[3]=m.z,b[0]=S[0],b[1]=S[1],b[2]=S[2],b[3]=S[3]}}static parseToUncompressedSplatArraySection(e,t,n,i,s){for(let o=e;o<=t;o++){const a=o*st.RowSizeBytes+i,l=new Float32Array(n,a,3),c=new Float32Array(n,a+st.CenterSizeBytes,3),u=new Uint8Array(n,a+st.CenterSizeBytes+st.ScaleSizeBytes,4),d=new Uint8Array(n,a+st.CenterSizeBytes+st.ScaleSizeBytes+st.RotationSizeBytes,4),f=new it((d[1]-128)/128,(d[2]-128)/128,(d[3]-128)/128,(d[0]-128)/128);f.normalize(),s.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],f.w,f.x,f.y,f.z,u[0],u[1],u[2],u[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/st.RowSizeBytes,n=new Se;for(let i=0;i<t;i++){const s=i*st.RowSizeBytes,o=new Float32Array(e,s,3),a=new Float32Array(e,s+st.CenterSizeBytes,3),l=new Uint8Array(e,s+st.CenterSizeBytes+st.ScaleSizeBytes,4),c=new Uint8Array(e,s+st.CenterSizeBytes+st.ScaleSizeBytes+st.ColorSizeBytes,4),u=new it((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);u.normalize(),n.addSplatFromComonents(o[0],o[1],o[2],a[0],a[1],a[2],u.w,u.x,u.y,u.z,l[0],l[1],l[2],l[3])}return n}};k(st,"RowSizeBytes",32),k(st,"CenterSizeBytes",12),k(st,"ScaleSizeBytes",12),k(st,"RotationSizeBytes",4),k(st,"ColorSizeBytes",4);let pi=st;function oc(r,e,t,n,i,s,o,a){return e?Rs.getStandardGenerator(t,n,i,s,o,a).generateFromUncompressedSplatArray(r):we.generateFromUncompressedSplatArrays([r],t,0,new w)}class uo{static loadFromURL(e,t,n,i,s,o,a=!0,l,c,u,d,f){let h=n?ut.ProgressiveToSplatBuffer:ut.ProgressiveToSplatArray;a&&(h=ut.ProgressiveToSplatArray);const g=we.HeaderSizeBytes+we.SectionHeaderSizeBytes,S=Je.ProgressiveLoadSectionSize,p=1;let m,A,v,E=0,C=0,b;const x=Za();let I=0,_=0,y=[];const L=(B,N,R,F)=>{const O=B>=100;if(R&&y.push(R),h===ut.DownloadBeforeProcessing){O&&x.resolve(y);return}if(!F){if(n)throw new Er("Cannon directly load .splat because no file size info is available.");h=ut.DownloadBeforeProcessing;return}if(!m){E=F/pi.RowSizeBytes,m=new ArrayBuffer(F);const W=we.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,X=g+W*E;h===ut.ProgressiveToSplatBuffer?(A=new ArrayBuffer(X),we.writeHeaderToBuffer({versionMajor:we.CurrentMajorVersion,versionMinor:we.CurrentMinorVersion,maxSectionCount:p,sectionCount:p,maxSplatCount:E,splatCount:C,compressionLevel:0,sceneCenter:new w},A)):b=new Se(0)}if(R){new Uint8Array(m,_,R.byteLength).set(new Uint8Array(R)),_+=R.byteLength;const W=_-I;if(W>S||O){const z=(O?W:S)/pi.RowSizeBytes,H=C+z;h===ut.ProgressiveToSplatBuffer?pi.parseToUncompressedSplatBufferSection(C,H-1,m,0,A,g):pi.parseToUncompressedSplatArraySection(C,H-1,m,0,b),C=H,h===ut.ProgressiveToSplatBuffer&&(v||(we.writeSectionHeaderToBuffer({maxSplatCount:E,splatCount:C,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,A,we.HeaderSizeBytes),v=new we(A,!1)),v.updateLoadedCounts(1,C),i&&i(v,O)),I+=S}}O&&(h===ut.ProgressiveToSplatBuffer?x.resolve(v):x.resolve(b)),t&&t(B,N,At.Downloading)};return t&&t(0,"0%",At.Downloading),Fr(e,L,!1,l).then(()=>(t&&t(0,"0%",At.Processing),x.promise.then(B=>(t&&t(100,"100%",At.Done),h===ut.DownloadBeforeProcessing?new Blob(y).arrayBuffer().then(N=>uo.loadFromFileData(N,s,o,a,c,u,d,f)):h===ut.ProgressiveToSplatBuffer?B:rn(()=>oc(B,a,s,o,c,u,d,f))))))}static loadFromFileData(e,t,n,i,s,o,a,l){return rn(()=>{const c=pi.parseStandardSplatToUncompressedSplatArray(e);return oc(c,i,t,n,s,o,a,l)})}}const Xi=class Xi{static checkVersion(e){const t=we.CurrentMajorVersion,n=we.CurrentMinorVersion,i=we.parseHeader(e);if(i.versionMajor===t&&i.versionMinor>=n||i.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${i.versionMajor}.${i.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,i,s){let o,a,l,c,u=!1,d=!1,f,h=[],g=!1,S=!1,p=0,m=0,A=0,v=!1,E=!1,C=!1,b=[];const x=Za(),I=()=>{!u&&!d&&p>=we.HeaderSizeBytes&&(d=!0,new Blob(b).arrayBuffer().then(F=>{l=new ArrayBuffer(we.HeaderSizeBytes),new Uint8Array(l).set(new Uint8Array(F,0,we.HeaderSizeBytes)),Xi.checkVersion(l),d=!1,u=!0,c=we.parseHeader(l),window.setTimeout(()=>{L()},1)}))};let _=0;const y=()=>{_===0&&(_++,window.setTimeout(()=>{_--,B()},1))},L=()=>{const R=()=>{S=!0,new Blob(b).arrayBuffer().then(O=>{S=!1,g=!0,f=new ArrayBuffer(c.maxSectionCount*we.SectionHeaderSizeBytes),new Uint8Array(f).set(new Uint8Array(O,we.HeaderSizeBytes,c.maxSectionCount*we.SectionHeaderSizeBytes)),h=we.parseSectionHeaders(c,f,0,!1);let W=0;for(let z=0;z<c.maxSectionCount;z++)W+=h[z].storageSizeBytes;const X=we.HeaderSizeBytes+c.maxSectionCount*we.SectionHeaderSizeBytes+W;if(!o){o=new ArrayBuffer(X);let z=0;for(let H=0;H<b.length;H++){const q=b[H];new Uint8Array(o,z,q.byteLength).set(new Uint8Array(q)),z+=q.byteLength}}A=we.HeaderSizeBytes+we.SectionHeaderSizeBytes*c.maxSectionCount;for(let z=0;z<=h.length&&z<c.maxSectionCount;z++)A+=h[z].storageSizeBytes;y()})};!S&&!g&&u&&p>=we.HeaderSizeBytes+we.SectionHeaderSizeBytes*c.maxSectionCount&&R()},B=()=>{if(C)return;C=!0;const R=()=>{if(C=!1,g){if(E)return;if(v=p>=A,p-m>Je.ProgressiveLoadSectionSize||v){m+=Je.ProgressiveLoadSectionSize,E=m>=A,a||(a=new we(o,!1));const O=we.HeaderSizeBytes+we.SectionHeaderSizeBytes*c.maxSectionCount;let W=0,X=0,z=0;for(let ie=0;ie<c.maxSectionCount;ie++){const V=h[ie],Z=W+V.partiallyFilledBucketCount*4+V.bucketStorageSizeBytes*V.bucketCount,j=O+Z;if(m>=j){X++;const ee=m-j,fe=we.CompressionLevels[c.compressionLevel].SphericalHarmonicsDegrees[V.sphericalHarmonicsDegree].BytesPerSplat;let ae=Math.floor(ee/fe);ae=Math.min(ae,V.maxSplatCount),z+=ae,a.updateLoadedCounts(X,z),a.updateSectionLoadedCounts(ie,ae)}else break;W+=V.storageSizeBytes}i(a,E);const H=m/A*100,q=H.toFixed(2)+"%";t&&t(H,q,At.Downloading),E?x.resolve(a):B()}}};window.setTimeout(R,Je.ProgressiveLoadSectionDelayDuration)};return Fr(e,(R,F,O)=>{O&&(b.push(O),o&&new Uint8Array(o,p,O.byteLength).set(new Uint8Array(O)),p+=O.byteLength),n?(I(),L(),B()):t&&t(R,F,At.Downloading)},!n,s).then(R=>(t&&t(0,"0%",At.Processing),(n?x.promise:Xi.loadFromFileData(R)).then(O=>(t&&t(100,"100%",At.Done),O))))}static loadFromFileData(e){return rn(()=>(Xi.checkVersion(e),new we(e)))}};k(Xi,"downloadFile",function(){let e;return function(t,n){const i=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(i),e.click()}}());let Oa=Xi;const Pt={Splat:0,KSplat:1,Ply:2,Spz:3},lc=r=>r.endsWith(".ply")?Pt.Ply:r.endsWith(".splat")?Pt.Splat:r.endsWith(".ksplat")?Pt.KSplat:r.endsWith(".spz")?Pt.Spz:null,cc={type:"change"},va={type:"start"},uc={type:"end"},lr=new Dr,dc=new Un,lS=Math.cos(70*Lt.DEG2RAD);let cr=class extends ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:un.ROTATE,MIDDLE:un.DOLLY,RIGHT:un.PAN},this.touches={ONE:dn.ROTATE,TWO:dn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",de),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(cc),n.update(),s=i.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){u.set(0,0,0)},this.update=function(){const M=new w,Q=new it().setFromUnitVectors(e.up,new w(0,1,0)),oe=Q.clone().invert(),re=new w,Ee=new it,Ne=new w,ke=2*Math.PI;return function(){Q.setFromUnitVectors(e.up,new w(0,1,0)),oe.copy(Q).invert();const ge=n.object.position;M.copy(ge).sub(n.target),M.applyQuaternion(Q),a.setFromVector3(M),n.autoRotate&&s===i.NONE&&L(_()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let U=n.minAzimuthAngle,pe=n.maxAzimuthAngle;isFinite(U)&&isFinite(pe)&&(U<-Math.PI?U+=ke:U>Math.PI&&(U-=ke),pe<-Math.PI?pe+=ke:pe>Math.PI&&(pe-=ke),U<=pe?a.theta=Math.max(U,Math.min(pe,a.theta)):a.theta=a.theta>(U+pe)/2?Math.max(U,a.theta):Math.min(pe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&b||n.object.isOrthographicCamera?a.radius=z(a.radius):a.radius=z(a.radius*c),M.setFromSpherical(a),M.applyQuaternion(oe),ge.copy(n.target).add(M),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let me=!1;if(n.zoomToCursor&&b){let De=null;if(n.object.isPerspectiveCamera){const Ie=M.length();De=z(Ie*c);const $e=Ie-De;n.object.position.addScaledVector(E,$e),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ie=new w(C.x,C.y,0);Ie.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),me=!0;const $e=new w(C.x,C.y,0);$e.unproject(n.object),n.object.position.sub($e).add(Ie),n.object.updateMatrixWorld(),De=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;De!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(De).add(n.object.position):(lr.origin.copy(n.object.position),lr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(lr.direction))<lS?e.lookAt(n.target):(dc.setFromNormalAndCoplanarPoint(n.object.up,n.target),lr.intersectPlane(dc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),me=!0);return c=1,b=!1,me||re.distanceToSquared(n.object.position)>o||8*(1-Ee.dot(n.object.quaternion))>o||Ne.distanceToSquared(n.target)>0?(n.dispatchEvent(cc),re.copy(n.object.position),Ee.copy(n.object.quaternion),Ne.copy(n.target),me=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",be),n.domElement.removeEventListener("pointerdown",Re),n.domElement.removeEventListener("pointercancel",T),n.domElement.removeEventListener("wheel",ue),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",T),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",de),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Mr,l=new Mr;let c=1;const u=new w,d=new Me,f=new Me,h=new Me,g=new Me,S=new Me,p=new Me,m=new Me,A=new Me,v=new Me,E=new w,C=new Me;let b=!1;const x=[],I={};function _(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function L(M){l.theta-=M}function B(M){l.phi-=M}const N=function(){const M=new w;return function(oe,re){M.setFromMatrixColumn(re,0),M.multiplyScalar(-oe),u.add(M)}}(),R=function(){const M=new w;return function(oe,re){n.screenSpacePanning===!0?M.setFromMatrixColumn(re,1):(M.setFromMatrixColumn(re,0),M.crossVectors(n.object.up,M)),M.multiplyScalar(oe),u.add(M)}}(),F=function(){const M=new w;return function(oe,re){const Ee=n.domElement;if(n.object.isPerspectiveCamera){const Ne=n.object.position;M.copy(Ne).sub(n.target);let ke=M.length();ke*=Math.tan(n.object.fov/2*Math.PI/180),N(2*oe*ke/Ee.clientHeight,n.object.matrix),R(2*re*ke/Ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(oe*(n.object.right-n.object.left)/n.object.zoom/Ee.clientWidth,n.object.matrix),R(re*(n.object.top-n.object.bottom)/n.object.zoom/Ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(M){if(!n.zoomToCursor)return;b=!0;const Q=n.domElement.getBoundingClientRect(),oe=M.clientX-Q.left,re=M.clientY-Q.top,Ee=Q.width,Ne=Q.height;C.x=oe/Ee*2-1,C.y=-(re/Ne)*2+1,E.set(C.x,C.y,1).unproject(e).sub(e.position).normalize()}function z(M){return Math.max(n.minDistance,Math.min(n.maxDistance,M))}function H(M){d.set(M.clientX,M.clientY)}function q(M){X(M),m.set(M.clientX,M.clientY)}function ie(M){g.set(M.clientX,M.clientY)}function V(M){f.set(M.clientX,M.clientY),h.subVectors(f,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;L(2*Math.PI*h.x/Q.clientHeight),B(2*Math.PI*h.y/Q.clientHeight),d.copy(f),n.update()}function Z(M){A.set(M.clientX,M.clientY),v.subVectors(A,m),v.y>0?O(y()):v.y<0&&W(y()),m.copy(A),n.update()}function j(M){S.set(M.clientX,M.clientY),p.subVectors(S,g).multiplyScalar(n.panSpeed),F(p.x,p.y),g.copy(S),n.update()}function ee(M){X(M),M.deltaY<0?W(y()):M.deltaY>0&&O(y()),n.update()}function se(M){let Q=!1;switch(M.code){case n.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),Q=!0;break}Q&&(M.preventDefault(),n.update())}function ce(){if(x.length===1)d.set(x[0].pageX,x[0].pageY);else{const M=.5*(x[0].pageX+x[1].pageX),Q=.5*(x[0].pageY+x[1].pageY);d.set(M,Q)}}function fe(){if(x.length===1)g.set(x[0].pageX,x[0].pageY);else{const M=.5*(x[0].pageX+x[1].pageX),Q=.5*(x[0].pageY+x[1].pageY);g.set(M,Q)}}function ae(){const M=x[0].pageX-x[1].pageX,Q=x[0].pageY-x[1].pageY,oe=Math.sqrt(M*M+Q*Q);m.set(0,oe)}function Ce(){n.enableZoom&&ae(),n.enablePan&&fe()}function G(){n.enableZoom&&ae(),n.enableRotate&&ce()}function Be(M){if(x.length==1)f.set(M.pageX,M.pageY);else{const oe=Qe(M),re=.5*(M.pageX+oe.x),Ee=.5*(M.pageY+oe.y);f.set(re,Ee)}h.subVectors(f,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;L(2*Math.PI*h.x/Q.clientHeight),B(2*Math.PI*h.y/Q.clientHeight),d.copy(f)}function ve(M){if(x.length===1)S.set(M.pageX,M.pageY);else{const Q=Qe(M),oe=.5*(M.pageX+Q.x),re=.5*(M.pageY+Q.y);S.set(oe,re)}p.subVectors(S,g).multiplyScalar(n.panSpeed),F(p.x,p.y),g.copy(S)}function xe(M){const Q=Qe(M),oe=M.pageX-Q.x,re=M.pageY-Q.y,Ee=Math.sqrt(oe*oe+re*re);A.set(0,Ee),v.set(0,Math.pow(A.y/m.y,n.zoomSpeed)),O(v.y),m.copy(A)}function _e(M){n.enableZoom&&xe(M),n.enablePan&&ve(M)}function Xe(M){n.enableZoom&&xe(M),n.enableRotate&&Be(M)}function Re(M){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(M.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",T)),Fe(M),M.pointerType==="touch"?Pe(M):K(M))}function P(M){n.enabled!==!1&&(M.pointerType==="touch"?ye(M):he(M))}function T(M){Ve(M),x.length===0&&(n.domElement.releasePointerCapture(M.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",T)),n.dispatchEvent(uc),s=i.NONE}function K(M){let Q;switch(M.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case un.DOLLY:if(n.enableZoom===!1)return;q(M),s=i.DOLLY;break;case un.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enablePan===!1)return;ie(M),s=i.PAN}else{if(n.enableRotate===!1)return;H(M),s=i.ROTATE}break;case un.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enableRotate===!1)return;H(M),s=i.ROTATE}else{if(n.enablePan===!1)return;ie(M),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(va)}function he(M){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;V(M);break;case i.DOLLY:if(n.enableZoom===!1)return;Z(M);break;case i.PAN:if(n.enablePan===!1)return;j(M);break}}function ue(M){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(M.preventDefault(),n.dispatchEvent(va),ee(M),n.dispatchEvent(uc))}function de(M){n.enabled===!1||n.enablePan===!1||se(M)}function Pe(M){switch(le(M),x.length){case 1:switch(n.touches.ONE){case dn.ROTATE:if(n.enableRotate===!1)return;ce(),s=i.TOUCH_ROTATE;break;case dn.PAN:if(n.enablePan===!1)return;fe(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case dn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(),s=i.TOUCH_DOLLY_PAN;break;case dn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;G(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(va)}function ye(M){switch(le(M),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Be(M),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ve(M),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_e(M),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Xe(M),n.update();break;default:s=i.NONE}}function be(M){n.enabled!==!1&&M.preventDefault()}function Fe(M){x.push(M)}function Ve(M){delete I[M.pointerId];for(let Q=0;Q<x.length;Q++)if(x[Q].pointerId==M.pointerId){x.splice(Q,1);return}}function le(M){let Q=I[M.pointerId];Q===void 0&&(Q=new Me,I[M.pointerId]=Q),Q.set(M.pageX,M.pageY)}function Qe(M){const Q=M.pointerId===x[0].pointerId?x[1]:x[0];return I[Q.pointerId]}n.domElement.addEventListener("contextmenu",be),n.domElement.addEventListener("pointerdown",Re),n.domElement.addEventListener("pointercancel",T),n.domElement.addEventListener("wheel",ue,{passive:!1}),this.update()}};const cS=(r,e,t,n,i)=>{const s=performance.now();let o=r.style.display==="none"?0:parseFloat(r.style.opacity);isNaN(o)&&(o=1);const a=window.setInterval(()=>{const c=performance.now()-s;let u=Math.min(c/n,1);u>.999&&(u=1);let d;e?(d=(1-u)*o,d<1e-4&&(d=0)):d=(1-o)*u+o,d>0?(r.style.display=t,r.style.opacity=d):r.style.display="none",u>=1&&(i&&i(),window.clearInterval(a))},16);return a},uS=500,Tr=class Tr{constructor(e,t){this.taskIDGen=0,this.elementID=Tr.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(i,s,o,a,l)=>{o?i.style.display=s?a:"none":this.fadeTransitions[l]=cS(i,!s,a,uS,()=>{this.fadeTransitions[l]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}};k(Tr,"elementIDGen",0);let Na=Tr;class dS{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class hS{constructor(e){k(this,"update",function(e,t,n,i,s,o,a,l,c,u,d,f,h,g){const S=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==S&&(this.infoCells.cameraPosition.innerHTML=S),n){const m=n,A=`${m.x.toFixed(5)}, ${m.y.toFixed(5)}, ${m.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==A&&(this.infoCells.cameraLookAt.innerHTML=A)}const p=`${i.x.toFixed(5)}, ${i.y.toFixed(5)}, ${i.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==p&&(this.infoCells.cameraUp.innerHTML=p),this.infoCells.orthographicCamera.innerHTML=s?"Orthographic":"Perspective",o){const m=o,A=`${m.x.toFixed(5)}, ${m.y.toFixed(5)}, ${m.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=A}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=a,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${u.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${d.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${f.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${h.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${g}`});this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const i=document.createElement("div");i.style.display="table";for(let s of t){const o=document.createElement("div");o.style.display="table-row",o.className="info-panel-row";const a=document.createElement("div");a.style.display="table-cell",a.innerHTML=`${s[0]}: `,a.classList.add("info-panel-cell","label-cell");const l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";const c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[s[1]]=c,o.appendChild(a),o.appendChild(l),o.appendChild(c),i.appendChild(o)}this.infoPanel.appendChild(i),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const hc=new w;class fS extends xt{constructor(e=new w(0,0,1),t=new w(0,0,0),n=1,i=.1,s=16776960,o=n*.2,a=o*.2){super(),this.type="ArrowHelper";const l=new Cs(i,i,n,32);l.translate(0,n/2,0);const c=new Cs(0,a,o,32);c.translate(0,n,0),this.position.copy(t),this.line=new yt(l,new xi({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new yt(c,new xi({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{hc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(hc,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class gs{constructor(e){k(this,"updateFocusMarker",function(){const e=new w,t=new Oe,n=new w;return function(i,s,o){t.copy(s.matrixWorld).invert(),e.copy(i).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(s.matrixWorld),n.copy(s.position).sub(i);const a=n.length();this.focusMarker.position.copy(i),this.focusMarker.scale.set(a,a,a),this.focusMarker.material.uniforms.realFocusPosition.value.copy(i),this.focusMarker.material.uniforms.viewport.value.copy(o),this.focusMarker.material.uniformsNeedUpdate=!0}}());k(this,"positionAndOrientControlPlane",function(){const e=new it,t=new w(0,1,0);return function(n,i){e.setFromUnitVectors(t,i),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}}());this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new Xn(e,t,{format:Ht,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new Qa(e,t),this.splatRenderTarget.depthTexture.format=ti,this.splatRenderTarget.depthTexture.type=sn}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new mn({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:wc,blendSrc:vs,blendSrcAlpha:vs,blendDst:xs,blendDstAlpha:xs});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new yt(new Es(2,2),t),this.renderTargetCopyCamera=new Ya(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(Vi(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new Ka(.5,1.5,32),t=new xi({color:16777215}),n=new yt(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const i=new yt(e,t);i.position.set(0,-1,0);const s=new yt(e,t);s.rotation.set(0,0,Math.PI/2),s.position.set(1,0,0);const o=new yt(e,t);o.rotation.set(0,0,-Math.PI/2),o.position.set(-1,0,0),this.meshCursor=new xt,this.meshCursor.add(n),this.meshCursor.add(i),this.meshCursor.add(s),this.meshCursor.add(o),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(Vi(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new yr(.5,32,32),t=gs.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new yt(e,t)}}destroyFocusMarker(){this.focusMarker&&(Vi(this.focusMarker),this.focusMarker=null)}setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new Es(1,1);e.rotateX(-Math.PI/2);const t=new xi({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=fn;const n=new yt(e,t),i=new w(0,1,0);i.normalize();const s=new w(0,0,0),o=.5,a=.01,l=56576,c=new fS(i,s,o,a,l,.1,.03);this.controlPlane=new xt,this.controlPlane.add(n),this.controlPlane.add(c)}}destroyControlPlane(){this.controlPlane&&(Vi(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(Vi(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new yr(1,32,32),n=new xt,i=(s,o)=>{let a=new yt(t,gs.buildDebugMaterial(s));a.renderOrder=e,n.add(a),a.position.fromArray(o)};return i(16711680,[-50,0,0]),i(16711680,[50,0,0]),i(65280,[0,0,-50]),i(65280,[0,0,50]),i(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new ss(3,3,3),n=new xt;let i=12303291;const s=a=>{let l=new yt(t,gs.buildDebugMaterial(i));l.renderOrder=e,n.add(l),l.position.fromArray(a)};let o=10;return s([-o,0,-o]),s([-o,0,o]),s([o,0,-o]),s([o,0,o]),n}static buildDebugMaterial(e){const t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,n=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,i={color:{type:"v3",value:new et(e)}},s=new mn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:Tn});return s.extensions.fragDepth=!0,s}static buildFocusMarkerMaterial(e){const t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,n=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,i={color:{type:"v3",value:new et(e)},realFocusPosition:{type:"v3",value:new w},viewport:{type:"v2",value:new Me},opacity:{value:0}};return new mn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:Tn})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const pS=new w(1,0,0),mS=new w(0,1,0),gS=new w(0,0,1);class xa{constructor(e=new w,t=new w){k(this,"intersectBox",function(){const e=new w,t=[],n=[],i=[];return function(s,o){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,i[0]=this.direction.x,i[1]=this.direction.y,i[2]=this.direction.z,this.boxContainsPoint(s,this.origin,1e-4))return o&&(o.origin.copy(this.origin),o.normal.set(0,0,0),o.distance=-1),!0;for(let a=0;a<3;a++){if(i[a]==0)continue;const l=a==0?pS:a==1?mS:gS,c=i[a]<0?s.max:s.min;let u=-Math.sign(i[a]);t[0]=a==0?c.x:a==1?c.y:c.z;let d=t[0]-n[a];if(d*u<0){const f=(a+1)%3,h=(a+2)%3;if(t[2]=i[f]/i[a]*d+n[f],t[1]=i[h]/i[a]*d+n[h],e.set(t[a],t[h],t[f]),this.boxContainsPoint(s,e,1e-4))return o&&(o.origin.copy(e),o.normal.copy(l).multiplyScalar(u),o.distance=e.sub(this.origin).length()),!0}}return!1}}());k(this,"intersectSphere",function(){const e=new w;return function(t,n,i){e.copy(t).sub(this.origin);const s=e.dot(this.direction),o=s*s,l=e.dot(e)-o,c=n*n;if(l>c)return!1;const u=Math.sqrt(c-l),d=s-u,f=s+u;if(f<0)return!1;let h=d<0?f:d;return i&&(i.origin.copy(this.origin).addScaledVector(this.direction,h),i.normal.copy(i.origin).sub(t).normalize(),i.distance=h),!0}}());this.origin=new w,this.direction=new w,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}}class ho{constructor(){this.origin=new w,this.normal=new w,this.distance=0,this.splatIndex=0}set(e,t,n,i){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=i}clone(){const e=new ho;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const On={ThreeD:0,TwoD:1};class SS{constructor(e,t,n=!1){k(this,"setFromCameraAndScreenPosition",function(){const e=new Me;return function(t,n,i){if(e.x=n.x/i.x*2-1,e.y=(i.y-n.y)/i.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}}());k(this,"intersectSplatMesh",function(){const e=new Oe,t=new Oe,n=new Oe,i=new xa,s=new w;return function(o,a=[]){const l=o.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){const u=l.subTrees[c];t.copy(o.matrixWorld),o.dynamicMode&&(o.getSceneTransform(c,n),t.multiply(n)),e.copy(t).invert(),i.origin.copy(this.ray.origin).applyMatrix4(e),i.direction.copy(this.ray.origin).add(this.ray.direction),i.direction.applyMatrix4(e).sub(i.origin).normalize();const d=[];u.rootNode&&this.castRayAtSplatTreeNode(i,l,u.rootNode,d),d.forEach(f=>{f.origin.applyMatrix4(t),f.normal.applyMatrix4(t).normalize(),f.distance=s.copy(f.origin).sub(this.ray.origin).length()}),a.push(...d)}return a.sort((c,u)=>c.distance>u.distance?1:-1),a}}}());k(this,"castRayAtSplatTreeNode",function(){const e=new vt,t=new w,n=new w,i=new it,s=new ho,o=1e-7,a=new w(0,0,0),l=new Oe,c=new Oe,u=new Oe,d=new Oe,f=new Oe,h=new xa;return function(g,S,p,m=[]){if(g.intersectBox(p.boundingBox)){if(p.data&&p.data.indexes&&p.data.indexes.length>0)for(let A=0;A<p.data.indexes.length;A++){const v=p.data.indexes[A],E=S.splatMesh.getSceneIndexForSplat(v);if(S.splatMesh.getScene(E).visible&&(S.splatMesh.getSplatColor(v,e),S.splatMesh.getSplatCenter(v,t),S.splatMesh.getSplatScaleAndRotation(v,n,i),!(n.x<=o||n.y<=o||S.splatMesh.splatRenderMode===On.ThreeD&&n.z<=o)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(n.x,n.y,n.z),u.makeRotationFromQuaternion(i);const b=Math.log10(e.w)*2;if(l.makeScale(b,b,b),f.copy(l).multiply(u).multiply(c),d.copy(f).invert(),h.origin.copy(g.origin).sub(t).applyMatrix4(d),h.direction.copy(g.origin).add(g.direction).sub(t),h.direction.applyMatrix4(d).sub(h.origin).normalize(),h.intersectSphere(a,1,s)){const x=s.clone();x.splatIndex=v,x.origin.applyMatrix4(f).add(t),m.push(x)}}else{let b=n.x+n.y,x=2;if(S.splatMesh.splatRenderMode===On.ThreeD&&(b+=n.z,x=3),b=b/x,g.intersectSphere(t,b,s)){const I=s.clone();I.splatIndex=v,m.push(I)}}}if(p.children&&p.children.length>0)for(let A of p.children)this.castRayAtSplatTreeNode(g,S,A,m);return m}}}());this.ray=new xa(e,t),this.raycastAgainstTrueSplatEllipsoid=n}}class Qi{static buildVertexShaderBase(e=!1,t=!1,n=0,i=""){let s=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(s+=`
            uniform float sceneOpacity[${Je.MaxScenes}];
            uniform int sceneVisibility[${Je.MaxScenes}];
        `),e&&(s+=`
            uniform highp mat4 transforms[${Je.MaxScenes}];
        `),s+=`
        ${i}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${Je.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${Je.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(s+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?s+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:s+="mat4 transformModelViewMatrix = modelViewMatrix;",s+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(s+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?s+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:s+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,s+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(s+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?s+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(s+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),s+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(s+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(s+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),s+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),s+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),s}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,i=1,s=!1){const o={sceneCenter:{type:"v3",value:new w},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new Me},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new Me},basisViewport:{type:"v2",value:new Me},debugColor:{type:"v3",value:new et},centersColorsTextureSize:{type:"v2",value:new Me(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new Me(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:i},pointCloudModeEnabled:{type:"i",value:s?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new Me(1024,1024)},sceneCount:{type:"i",value:1}};for(let a=0;a<Je.MaxScenes;a++)o.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),o.sphericalHarmonics8BitCompressionRangeMax.value.push(Je.SphericalHarmonics8BitCompressionRange/2);if(t){const a=[];for(let c=0;c<Je.MaxScenes;c++)a.push(1);o.sceneOpacity={type:"f",value:a};const l=[];for(let c=0;c<Je.MaxScenes;c++)l.push(1);o.sceneVisibility={type:"i",value:l}}if(e){const a=[];for(let l=0;l<Je.MaxScenes;l++)a.push(new Oe);o.transforms={type:"mat4",value:a}}return o}}class Cr{static build(e=!1,t=!1,n=!1,i=2048,s=1,o=!1,a=0,l=.3){let u=Qi.buildVertexShaderBase(e,t,a,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);u+=Cr.buildVertexShaderProjection(n,t,i,l);const d=Cr.buildFragmentShader(),f=Qi.getUniforms(e,t,a,s,o);return f.covariancesTextureSize={type:"v2",value:new Me(1024,1024)},f.covariancesTexture={type:"t",value:null},f.covariancesTextureHalfFloat={type:"t",value:null},f.covariancesAreHalfFloat={type:"i",value:0},new mn({uniforms:f,vertexShader:u,fragmentShader:d,transparent:!0,alphaTest:1,blending:Vn,depthTest:!0,depthWrite:!1,side:fn})}static buildVertexShaderProjection(e,t,n,i){let s=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?s+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:s+=`
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
            `,s+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(s+=`
                vColor.a *= splatOpacityFromScene;
            `),s+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,s+=Qi.getVertexShaderFadeIn(),s+="}",s}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}}class br{static build(e=!1,t=!1,n=1,i=!1,s=0){let a=Qi.buildVertexShaderBase(e,t,s,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);a+=br.buildVertexShaderProjection();const l=br.buildFragmentShader(),c=Qi.getUniforms(e,t,s,n,i);return c.scaleRotationsTexture={type:"t",value:null},c.scaleRotationsTextureSize={type:"v2",value:new Me(1024,1024)},new mn({uniforms:c,vertexShader:a,fragmentShader:l,transparent:!0,alphaTest:1,blending:Vn,depthTest:!0,depthWrite:!1,side:fn})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=Qi.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class AS{static build(e){const t=new Zt;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(4*3),i=new Yt(n,3);t.setAttribute("position",i),i.setXYZ(0,-1,-1,0),i.setXYZ(1,-1,1,0),i.setXYZ(2,1,1,0),i.setXYZ(3,1,-1,0),i.needsUpdate=!0;const s=new t0().copy(t),o=new Uint32Array(e),a=new Zg(o,1,!1);return a.setUsage(wd),s.setAttribute("splatIndex",a),s.instanceCount=0,s}}class vS extends xt{constructor(e,t=new w,n=new it,i=new w(1,1,1),s=1,o=1,a=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(i),this.transform=new Oe,this.minimumAlpha=s,this.opacity=o,this.visible=a}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}const wr=class wr{constructor(e,t,n,i){this.min=new w().copy(e),this.max=new w().copy(t),this.boundingBox=new Mt(this.min,this.max),this.center=new w().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=i||wr.idGen++}};k(wr,"idGen",0);let za=wr;class Ss{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new w,this.sceneMin=new w,this.sceneMax=new w,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new w().fromArray(e.min),n=new w().fromArray(e.max),i=new za(t,n,e.depth,e.id);if(e.data.indexes){i.data={indexes:[]};for(let s of e.data.indexes)i.data.indexes.push(s)}if(e.children)for(let s of e.children)i.children.push(Ss.convertWorkerSubTreeNode(s));return i}static convertWorkerSubTree(e,t){const n=new Ss(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new w().fromArray(e.sceneMin),n.sceneMax=new w().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=Ss.convertWorkerSubTreeNode(e.rootNode);const i=(s,o)=>{s.children.length===0&&o(s);for(let a of s.children)i(a,o)};return n.nodesWithIndexes=[],i(n.rootNode,s=>{s.data&&s.data.indexes&&s.data.indexes.length>0&&n.nodesWithIndexes.push(s)}),n}}function xS(r){let e=0;class t{constructor(l,c){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]]}containsPoint(l){return l[0]>=this.min[0]&&l[0]<=this.max[0]&&l[1]>=this.min[1]&&l[1]<=this.max[1]&&l[2]>=this.min[2]&&l[2]<=this.max[2]}}class n{constructor(l,c){this.maxDepth=l,this.maxCentersPerNode=c,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class i{constructor(l,c,u,d){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]],this.center=[(c[0]-l[0])*.5+l[0],(c[1]-l[1])*.5+l[1],(c[2]-l[2])*.5+l[2]],this.depth=u,this.children=[],this.data=null,this.id=d||e++}}processSplatTreeNode=function(a,l,c,u){const d=l.data.indexes.length;if(d<a.maxCentersPerNode||l.depth>a.maxDepth){const A=[];for(let v=0;v<l.data.indexes.length;v++)a.addedIndexes[l.data.indexes[v]]||(A.push(l.data.indexes[v]),a.addedIndexes[l.data.indexes[v]]=!0);l.data.indexes=A,l.data.indexes.sort((v,E)=>v>E?1:-1),a.nodesWithIndexes.push(l);return}const f=[l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2]],h=[f[0]*.5,f[1]*.5,f[2]*.5],g=[l.min[0]+h[0],l.min[1]+h[1],l.min[2]+h[2]],S=[new t([g[0]-h[0],g[1],g[2]-h[2]],[g[0],g[1]+h[1],g[2]]),new t([g[0],g[1],g[2]-h[2]],[g[0]+h[0],g[1]+h[1],g[2]]),new t([g[0],g[1],g[2]],[g[0]+h[0],g[1]+h[1],g[2]+h[2]]),new t([g[0]-h[0],g[1],g[2]],[g[0],g[1]+h[1],g[2]+h[2]]),new t([g[0]-h[0],g[1]-h[1],g[2]-h[2]],[g[0],g[1],g[2]]),new t([g[0],g[1]-h[1],g[2]-h[2]],[g[0]+h[0],g[1],g[2]]),new t([g[0],g[1]-h[1],g[2]],[g[0]+h[0],g[1],g[2]+h[2]]),new t([g[0]-h[0],g[1]-h[1],g[2]],[g[0],g[1],g[2]+h[2]])],p=[];for(let A=0;A<S.length;A++)p[A]=[];const m=[0,0,0];for(let A=0;A<d;A++){const v=l.data.indexes[A],E=c[v];m[0]=u[E],m[1]=u[E+1],m[2]=u[E+2];for(let C=0;C<S.length;C++)S[C].containsPoint(m)&&p[C].push(v)}for(let A=0;A<S.length;A++){const v=new i(S[A].min,S[A].max,l.depth+1);v.data={indexes:p[A]},l.children.push(v)}l.data={};for(let A of l.children)processSplatTreeNode(a,A,c,u)};const s=(a,l,c)=>{const u=[0,0,0],d=[0,0,0],f=[],h=Math.floor(a.length/4);for(let S=0;S<h;S++){const p=S*4,m=a[p],A=a[p+1],v=a[p+2],E=Math.round(a[p+3]);(S===0||m<u[0])&&(u[0]=m),(S===0||m>d[0])&&(d[0]=m),(S===0||A<u[1])&&(u[1]=A),(S===0||A>d[1])&&(d[1]=A),(S===0||v<u[2])&&(u[2]=v),(S===0||v>d[2])&&(d[2]=v),f.push(E)}const g=new n(l,c);return g.sceneMin=u,g.sceneMax=d,g.rootNode=new i(g.sceneMin,g.sceneMax,0),g.rootNode.data={indexes:f},g};function o(a,l,c){const u=[];for(let f of a){const h=Math.floor(f.length/4);for(let g=0;g<h;g++){const S=g*4,p=Math.round(f[S+3]);u[p]=S}}const d=[];for(let f of a){const h=s(f,l,c);d.push(h),processSplatTreeNode(h,h.rootNode,u,f)}r.postMessage({subTrees:d})}r.onmessage=a=>{a.data.process&&o(a.data.process.centers,a.data.process.maxDepth,a.data.process.maxCentersPerNode)}}function _S(r,e,t,n,i){r.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:i}},t)}function yS(){return new Worker(URL.createObjectURL(new Blob(["(",xS.toString(),")(self)"],{type:"application/javascript"})))}class MS{constructor(e,t){k(this,"processSplatMesh",function(e,t=()=>!0,n,i){this.splatTreeWorker||(this.splatTreeWorker=yS()),this.splatMesh=e,this.subTrees=[];const s=new w,o=(a,l)=>{const c=new Float32Array(l*4);let u=0;for(let d=0;d<l;d++){const f=d+a;if(t(f)){e.getSplatCenter(f,s);const h=u*4;c[h]=s.x,c[h+1]=s.y,c[h+2]=s.z,c[h+3]=f,u++}}return c};return new Promise(a=>{const l=()=>this.disposed?(this.diposeSplatTreeWorker(),a(),!0):!1;n&&n(!1),rn(()=>{if(l())return;const c=[];if(e.dynamicMode){let u=0;for(let d=0;d<e.scenes.length;d++){const h=e.getScene(d).splatBuffer.getSplatCount(),g=o(u,h);c.push(g),u+=h}}else{const u=o(0,e.getSplatCount());c.push(u)}this.splatTreeWorker.onmessage=u=>{l()||u.data.subTrees&&(i&&i(!1),rn(()=>{if(!l()){for(let d of u.data.subTrees){const f=Ss.convertWorkerSubTree(d,e);this.subTrees.push(f)}this.diposeSplatTreeWorker(),i&&i(!0),rn(()=>{a()})}}))},rn(()=>{if(l())return;n&&n(!0);const u=c.map(d=>d.buffer);_S(this.splatTreeWorker,c,u,this.maxDepth,this.maxCentersPerNode)})})})});this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,i)=>{n.children.length===0&&i(n);for(let s of n.children)t(s,i)};for(let n of this.subTrees)t(n.rootNode,e)}}function ES(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function CS(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,E=o||e.has("OES_texture_float"),C=v&&E,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:h,maxCubemapSize:g,maxAttributes:S,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:A,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:b}}const ji={Default:0,Instant:2},vi={None:0,Info:3},fc=new Zt,bS=new xi,ur=6,TS=4,wS=4,RS=4,IS=6,PS=8,_a=4,ya=4,pc=1,DS=.012,LS=.003,mc=1,gc=16777216;class Ft extends yt{constructor(t=On.ThreeD,n=!1,i=!1,s=!1,o=1,a=!0,l=!1,c=!1,u=1024,d=vi.None,f=0,h=1,g=.3){super(fc,bS);k(this,"buildSplatTree",function(t=[],n,i){return new Promise(s=>{this.disposeSplatTree(),this.baseSplatTree=new MS(8,1e3);const o=performance.now(),a=new vt;this.baseSplatTree.processSplatMesh(this,l=>{this.getSplatColor(l,a);const c=this.getSceneIndexForSplat(l),u=t[c]||1;return a.w>=u},n,i).then(()=>{const l=performance.now()-o;if(this.logLevel>=vi.Info&&console.log("SplatTree build: "+l+" ms"),this.disposed)s();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let c=0,u=0,d=0;this.splatTree.visitLeaves(f=>{const h=f.data.indexes.length;h>0&&(u+=h,d++,c++)}),this.logLevel>=vi.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${c}`),u=u/d,console.log(`Avg splat count per node: ${u}`),console.log(`Total splat count: ${this.getSplatCount()}`)),s()}})})});k(this,"updateUniforms",function(){const t=new Me;return function(n,i,s,o,a,l){if(this.getSplatCount()>0){if(t.set(n.x*this.devicePixelRatio,n.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(t),this.material.uniforms.basisViewport.value.set(1/t.x,1/t.y),this.material.uniforms.focal.value.set(i,s),this.material.uniforms.orthographicMode.value=o?1:0,this.material.uniforms.orthoZoom.value=a,this.material.uniforms.inverseFocalAdjustment.value=l,this.dynamicMode)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.transforms.value[u].copy(this.getScene(u).transform);if(this.enableOptionalEffects)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.sceneOpacity.value[u]=ht(this.getScene(u).opacity,0,1),this.material.uniforms.sceneVisibility.value[u]=this.getScene(u).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}}());k(this,"setupDistancesComputationTransformFeedback",function(){let t;return function(){const n=this.getMaxSplatCount();if(!this.renderer)return;const i=this.lastRenderer!==this.renderer,s=t!==n;if(!i&&!s)return;i?this.disposeDistancesComputationGPUResources():s&&this.disposeDistancesComputationGPUBufferResources();const o=this.renderer.getContext(),a=(h,g,S)=>{const p=h.createShader(g);if(!p)return console.error("Fatal error: gl could not create a shader object."),null;if(h.shaderSource(p,S),h.compileShader(p),!h.getShaderParameter(p,h.COMPILE_STATUS)){let A="unknown";g===h.VERTEX_SHADER?A="vertex shader":g===h.FRAGMENT_SHADER&&(A="fragement shader");const v=h.getShaderInfoLog(p);return console.error("Failed to compile "+A+" with these errors:"+v),h.deleteShader(p),null}return p};let l;this.integerBasedDistancesComputation?(l=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${Je.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:l+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(l=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${Je.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:l+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const c=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,u=o.getParameter(o.VERTEX_ARRAY_BINDING),d=o.getParameter(o.CURRENT_PROGRAM),f=d?o.getProgramParameter(d,o.DELETE_STATUS):!1;if(i&&(this.distancesTransformFeedback.vao=o.createVertexArray()),o.bindVertexArray(this.distancesTransformFeedback.vao),i){const h=o.createProgram(),g=a(o,o.VERTEX_SHADER,l),S=a(o,o.FRAGMENT_SHADER,c);if(!g||!S)throw new Error("Could not compile shaders for distances computation on GPU.");if(o.attachShader(h,g),o.attachShader(h,S),o.transformFeedbackVaryings(h,["distance"],o.SEPARATE_ATTRIBS),o.linkProgram(h),!o.getProgramParameter(h,o.LINK_STATUS)){const m=o.getProgramInfoLog(h);throw console.error("Fatal error: Failed to link program: "+m),o.deleteProgram(h),o.deleteShader(S),o.deleteShader(g),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=h,this.distancesTransformFeedback.vertexShader=g,this.distancesTransformFeedback.vertexShader=S}if(o.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let h=0;h<this.scenes.length;h++)this.distancesTransformFeedback.transformsLocs[h]=o.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${h}]`)}else this.distancesTransformFeedback.modelViewProjLoc=o.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(i||s)&&(this.distancesTransformFeedback.centersBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?o.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,o.INT,0,0):o.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,o.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),o.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,o.UNSIGNED_INT,0,0))),(i||s)&&(this.distancesTransformFeedback.outDistancesBuffer=o.createBuffer()),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),o.bufferData(o.ARRAY_BUFFER,n*4,o.STATIC_READ),i&&(this.distancesTransformFeedback.id=o.createTransformFeedback()),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),d&&f!==!0&&o.useProgram(d),u&&o.bindVertexArray(u),this.lastRenderer=this.renderer,t=n}}());k(this,"fillTransformsArray",function(){const t=[];return function(n){t.length!==n.length&&(t.length=n.length);for(let i=0;i<this.scenes.length;i++){const o=this.getScene(i).transform.elements;for(let a=0;a<16;a++)t[i*16+a]=o[a]}n.set(t)}}());k(this,"computeDistancesOnGPU",function(){const t=new Oe;return function(n,i){if(!this.renderer)return;const s=this.renderer.getContext(),o=s.getParameter(s.VERTEX_ARRAY_BINDING),a=s.getParameter(s.CURRENT_PROGRAM),l=a?s.getProgramParameter(a,s.DELETE_STATUS):!1;if(s.bindVertexArray(this.distancesTransformFeedback.vao),s.useProgram(this.distancesTransformFeedback.program),s.enable(s.RASTERIZER_DISCARD),this.dynamicMode)for(let d=0;d<this.scenes.length;d++)if(t.copy(this.getScene(d).transform),t.premultiply(n),this.integerBasedDistancesComputation){const f=Ft.getIntegerMatrixArray(t),h=[f[2],f[6],f[10],f[14]];s.uniform4i(this.distancesTransformFeedback.transformsLocs[d],h[0],h[1],h[2],h[3])}else s.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[d],!1,t.elements);else if(this.integerBasedDistancesComputation){const d=Ft.getIntegerMatrixArray(n),f=[d[2],d[6],d[10]];s.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,f[0],f[1],f[2])}else{const d=[n.elements[2],n.elements[6],n.elements[10]];s.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,d[0],d[1],d[2])}s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?s.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,s.INT,0,0):s.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,s.FLOAT,!1,0,0),this.dynamicMode&&(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),s.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,s.UNSIGNED_INT,0,0)),s.bindTransformFeedback(s.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),s.beginTransformFeedback(s.POINTS),s.drawArrays(s.POINTS,0,this.getSplatCount()),s.endTransformFeedback(),s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER,0,null),s.bindTransformFeedback(s.TRANSFORM_FEEDBACK,null),s.disable(s.RASTERIZER_DISCARD);const c=s.fenceSync(s.SYNC_GPU_COMMANDS_COMPLETE,0);s.flush();const u=new Promise(d=>{const f=()=>{if(this.disposed)d();else switch(s.clientWaitSync(c,0,0)){case s.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(f),this.computeDistancesOnGPUSyncTimeout;case s.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,s.deleteSync(c);const p=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),s.getBufferSubData(s.ARRAY_BUFFER,0,i),s.bindBuffer(s.ARRAY_BUFFER,null),p&&s.bindVertexArray(p),d()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(f)});return a&&l!==!0&&s.useProgram(a),o&&s.bindVertexArray(o),u}}());k(this,"getSplatCenter",function(){const t={};return function(n,i,s){this.getLocalSplatParameters(n,t,s),t.splatBuffer.getSplatCenter(t.localIndex,i,t.sceneTransform)}}());k(this,"getSplatScaleAndRotation",function(){const t={},n=new w;return function(i,s,o,a){this.getLocalSplatParameters(i,t,a),n.x=void 0,n.y=void 0,n.z=void 0,this.splatRenderMode===On.TwoD&&(n.z=0),t.splatBuffer.getSplatScaleAndRotation(t.localIndex,s,o,t.sceneTransform,n)}}());k(this,"getSplatColor",function(){const t={};return function(n,i){this.getLocalSplatParameters(n,t),t.splatBuffer.getSplatColor(t.localIndex,i)}}());this.renderer=void 0,this.splatRenderMode=t,this.dynamicMode=n,this.enableOptionalEffects=i,this.halfPrecisionCovariancesOnGPU=s,this.devicePixelRatio=o,this.enableDistancesComputationOnGPU=a,this.integerBasedDistancesComputation=l,this.antialiased=c,this.kernel2DSize=g,this.maxScreenSpaceSplatSize=u,this.logLevel=d,this.sphericalHarmonicsDegree=f,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=h,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new Mt,this.calculatedSceneCenter=new w,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(t,n,i){const s=[];s.length=n.length;for(let o=0;o<n.length;o++){const a=n[o],l=i[o]||{};let c=l.position||[0,0,0],u=l.rotation||[0,0,0,1],d=l.scale||[1,1,1];const f=new w().fromArray(c),h=new it().fromArray(u),g=new w().fromArray(d),S=Ft.createScene(a,f,h,g,l.splatAlphaRemovalThreshold||1,l.opacity,l.visible);t.add(S),s[o]=S}return s}static createScene(t,n,i,s,o,a=1,l=!0){return new vS(t,n,i,s,o,a,l)}static buildSplatIndexMaps(t){const n=[],i=[];let s=0;for(let o=0;o<t.length;o++){const l=t[o].getMaxSplatCount();for(let c=0;c<l;c++)n[s]=c,i[s]=o,s++}return{localSplatIndexMap:n,sceneIndexMap:i}}build(t,n,i=!0,s=!1,o,a,l=!0){this.sceneOptions=n,this.finalBuild=s;const c=Ft.getTotalMaxSplatCountForSplatBuffers(t),u=Ft.buildScenes(this,t,n);if(i)for(let p=0;p<this.scenes.length&&p<u.length;p++){const m=u[p],A=this.getScene(p);m.copyTransformData(A)}this.scenes=u;let d=3;for(let p of t){const m=p.getMinSphericalHarmonicsDegree();m<d&&(d=m)}this.minSphericalHarmonicsDegree=Math.min(d,this.sphericalHarmonicsDegree);let f=!1;if(t.length!==this.lastBuildScenes.length)f=!0;else for(let p=0;p<t.length;p++)if(t[p]!==this.lastBuildScenes[p].splatBuffer){f=!0;break}let h=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==c||f)&&(h=!1),!h){this.boundingBox=new Mt,l||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=AS.build(c),this.splatRenderMode===On.ThreeD?this.material=Cr.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=br.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const p=Ft.buildSplatIndexMaps(t);this.globalSplatIndexToLocalSplatIndexMap=p.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=p.sceneIndexMap}const g=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const S=this.refreshGPUDataFromSplatBuffers(h);for(let p=0;p<this.scenes.length;p++)this.lastBuildScenes[p]=this.scenes[p];return this.lastBuildSplatCount=g,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,s&&this.scenes.length>0&&this.buildSplatTree(n.map(p=>p.splatAlphaRemovalThreshold||1),o,a).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,S}freeIntermediateSplatData(){const t=n=>{delete n.source.data,delete n.image,n.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{t(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{t(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{t(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(n=>{n.needsUpdate=!0,n.onUpdate=()=>{t(n)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{t(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new Mt,this.calculatedSceneCenter=new w,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==fc&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let t in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(t)){const n=this.splatDataTextures[t];n.texture&&(n.texture.dispose(),n.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(t){this.onSplatTreeReadyCallback=t}getDataForDistancesComputation(t,n){const i=this.integerBasedDistancesComputation?this.getIntegerCenters(t,n,!0):this.getFloatCenters(t,n,!0),s=this.getSceneIndexes(t,n);return{centers:i,sceneIndexes:s}}refreshGPUDataFromSplatBuffers(t){const n=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(t);const i=t?this.lastBuildSplatCount:0,{centers:s,sceneIndexes:o}=this.getDataForDistancesComputation(i,n-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(s,o,t),{from:i,to:n-1,count:n-i,centers:s,sceneIndexes:o}}refreshGPUBuffersForDistancesComputation(t,n,i=!1){const s=i?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(i,t,s),this.updateGPUTransformIndexesBufferForDistancesComputation(i,n,s)}refreshDataTexturesFromSplatBuffers(t){const n=this.getSplatCount(!0),i=this.lastBuildSplatCount,s=n-1;t?this.updateBaseDataFromSplatBuffers(i,s):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(i,s),this.updateVisibleRegion(t)}setupDataTextures(){const t=this.getMaxSplatCount(),n=this.getSplatCount(!0);this.disposeTextures();const i=(I,_)=>{const y=new Me(4096,1024);for(;y.x*y.y*I<t*_;)y.y*=2;return y},s=I=>I>=1?IS:wS,o=I=>{const _=s(I),y=i(_,6);return{elementsPerTexelStored:_,texSize:y}};let a=this.getTargetCovarianceCompressionLevel();const l=0,c=this.getTargetSphericalHarmonicsCompressionLevel();let u,d,f;if(this.splatRenderMode===On.ThreeD){const I=o(a);I.texSize.x*I.texSize.y>gc&&a===0&&(a=1),u=new Float32Array(t*ur)}else d=new Float32Array(t*3),f=new Float32Array(t*4);const h=new Float32Array(t*3),g=new Uint8Array(t*4);let S=Float32Array;c===1?S=Uint16Array:c===2&&(S=Uint8Array);const p=qi(this.minSphericalHarmonicsDegree),m=this.minSphericalHarmonicsDegree?new S(t*p):void 0,A=i(ya,4),v=new Uint32Array(A.x*A.y*ya);Ft.updateCenterColorsPaddedData(0,n-1,h,g,v);const E=new Zn(v,A.x,A.y,ds,sn);if(E.internalFormat="RGBA32UI",E.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=E,this.material.uniforms.centersColorsTextureSize.value.copy(A),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:u,scales:d,rotations:f,centers:h,colors:g,sphericalHarmonics:m},centerColors:{data:v,texture:E,size:A}},this.splatRenderMode===On.ThreeD){const I=o(a),_=I.elementsPerTexelStored,y=I.texSize;let L=a>=1?Uint32Array:Float32Array;const B=a>=1?PS:RS,N=new L(y.x*y.y*B);a===0?N.set(u):Ft.updatePaddedCompressedCovariancesTextureData(u,N,0,0,u.length);let R;if(a>=1)R=new Zn(N,y.x,y.y,ds,sn),R.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=R;else{R=new Zn(N,y.x,y.y,Ht,En),this.material.uniforms.covariancesTexture.value=R;const F=new Zn(new Uint32Array(32),2,2,ds,sn);F.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=F,F.needsUpdate=!0}R.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=a>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(y),this.splatDataTextures.covariances={data:N,texture:R,size:y,compressionLevel:a,elementsPerTexelStored:_,elementsPerTexelAllocated:B}}else{const _=i(_a,6);let y=Float32Array,L=En;const B=new y(_.x*_.y*_a);Ft.updateScaleRotationsPaddedData(0,n-1,d,f,B);const N=new Zn(B,_.x,_.y,Ht,L);N.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=N,this.material.uniforms.scaleRotationsTextureSize.value.copy(_),this.splatDataTextures.scaleRotations={data:B,texture:N,size:_,compressionLevel:l}}if(m){const I=c===2?bn:$i;let _=p;_%2!==0&&_++;const y=4,L=Ht;let B=i(y,_);if(B.x*B.y<=gc){const N=B.x*B.y*y,R=new S(N);for(let O=0;O<n;O++){const W=p*O,X=_*O;for(let z=0;z<p;z++)R[X+z]=m[W+z]}const F=new Zn(R,B.x,B.y,L,I);F.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=F,this.splatDataTextures.sphericalHarmonics={componentCount:p,paddedComponentCount:_,data:R,textureCount:1,texture:F,size:B,compressionLevel:c,elementsPerTexel:y}}else{const N=p/3;_=N,_%2!==0&&_++,B=i(y,_);const R=B.x*B.y*y,F=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],O=[],W=[];for(let X=0;X<3;X++){const z=new S(R);O.push(z);for(let q=0;q<n;q++){const ie=p*q,V=_*q;if(N>=3){for(let Z=0;Z<3;Z++)z[V+Z]=m[ie+X*3+Z];if(N>=8)for(let Z=0;Z<5;Z++)z[V+3+Z]=m[ie+9+X*5+Z]}}const H=new Zn(z,B.x,B.y,L,I);W.push(H),H.needsUpdate=!0,F[X].value=H}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:p,componentCountPerChannel:N,paddedComponentCount:_,data:O,textureCount:3,textures:W,size:B,compressionLevel:c,elementsPerTexel:y}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(B),this.material.uniforms.sphericalHarmonics8BitMode.value=c===2?1:0;for(let N=0;N<this.scenes.length;N++){const R=this.scenes[N].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[N]=R.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[N]=R.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const C=i(pc,4),b=new Uint32Array(C.x*C.y*pc);for(let I=0;I<n;I++)b[I]=this.globalSplatIndexToSceneIndexMap[I];const x=new Zn(b,C.x,C.y,Ga,sn);x.internalFormat="R32UI",x.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=x,this.material.uniforms.sceneIndexesTextureSize.value.copy(C),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:b,texture:x,size:C},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(t,n){const i=this.splatDataTextures.covariances,s=i?i.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,a=o?o.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,s,a,c,t,n,t)}updateDataTexturesFromBaseData(t,n){const i=this.splatDataTextures.covariances,s=i?i.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,a=o?o.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0,u=this.splatDataTextures.centerColors,d=u.data,f=u.texture;Ft.updateCenterColorsPaddedData(t,n,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,d);const h=this.renderer?this.renderer.properties.get(f):null;if(!h||!h.__webglTexture?f.needsUpdate=!0:this.updateDataTexture(d,u.texture,u.size,h,ya,TS,4,t,n),i){const v=i.texture,E=t*ur,C=n*ur;if(s===0)for(let x=E;x<=C;x++){const I=this.splatDataTextures.baseData.covariances[x];i.data[x]=I}else Ft.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,i.data,t*i.elementsPerTexelAllocated,E,C);const b=this.renderer?this.renderer.properties.get(v):null;!b||!b.__webglTexture?v.needsUpdate=!0:s===0?this.updateDataTexture(i.data,i.texture,i.size,b,i.elementsPerTexelStored,ur,4,t,n):this.updateDataTexture(i.data,i.texture,i.size,b,i.elementsPerTexelAllocated,i.elementsPerTexelAllocated,2,t,n)}if(o){const v=o.data,E=o.texture,C=6,b=a===0?4:2;Ft.updateScaleRotationsPaddedData(t,n,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,v);const x=this.renderer?this.renderer.properties.get(E):null;!x||!x.__webglTexture?E.needsUpdate=!0:this.updateDataTexture(v,o.texture,o.size,x,_a,C,b,t,n)}const g=this.splatDataTextures.baseData.sphericalHarmonics;if(g){let v=4;c===1?v=2:c===2&&(v=1);const E=(x,I,_,y,L)=>{const B=this.renderer?this.renderer.properties.get(x):null;!B||!B.__webglTexture?x.needsUpdate=!0:this.updateDataTexture(y,x,I,B,_,L,v,t,n)},C=l.componentCount,b=l.paddedComponentCount;if(l.textureCount===1){const x=l.data;for(let I=t;I<=n;I++){const _=C*I,y=b*I;for(let L=0;L<C;L++)x[y+L]=g[_+L]}E(l.texture,l.size,l.elementsPerTexel,x,b)}else{const x=l.componentCountPerChannel;for(let I=0;I<3;I++){const _=l.data[I];for(let y=t;y<=n;y++){const L=C*y,B=b*y;if(x>=3){for(let N=0;N<3;N++)_[B+N]=g[L+I*3+N];if(x>=8)for(let N=0;N<5;N++)_[B+3+N]=g[L+9+I*5+N]}}E(l.textures[I],l.size,l.elementsPerTexel,_,b)}}}const S=this.splatDataTextures.sceneIndexes,p=S.data;for(let v=this.lastBuildSplatCount;v<=n;v++)p[v]=this.globalSplatIndexToSceneIndexMap[v];const m=S.texture,A=this.renderer?this.renderer.properties.get(m):null;!A||!A.__webglTexture?m.needsUpdate=!0:this.updateDataTexture(p,S.texture,S.size,A,1,1,1,this.lastBuildSplatCount,n)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const s=this.getScene(n).splatBuffer;(n===0||s.compressionLevel>t)&&(t=s.compressionLevel)}return t}getMinimumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const s=this.getScene(n).splatBuffer;(n===0||s.compressionLevel<t)&&(t=s.compressionLevel)}return t}static computeTextureUpdateRegion(t,n,i,s,o){const a=o/s,l=t*a,c=Math.floor(l/i),u=c*i*s,d=n*a,f=Math.floor(d/i),h=f*i*s+i*s;return{dataStart:u,dataEnd:h,startRow:c,endRow:f}}updateDataTexture(t,n,i,s,o,a,l,c,u){const d=this.renderer.getContext(),f=Ft.computeTextureUpdateRegion(c,u,i.x,o,a),h=f.dataEnd-f.dataStart,g=new t.constructor(t.buffer,f.dataStart*l,h),S=f.endRow-f.startRow+1,p=this.webGLUtils.convert(n.type),m=this.webGLUtils.convert(n.format,n.colorSpace),A=d.getParameter(d.TEXTURE_BINDING_2D);d.bindTexture(d.TEXTURE_2D,s.__webglTexture),d.texSubImage2D(d.TEXTURE_2D,0,0,f.startRow,i.x,S,m,p,g),d.bindTexture(d.TEXTURE_2D,A)}static updatePaddedCompressedCovariancesTextureData(t,n,i,s,o){let a=new DataView(n.buffer),l=i,c=0;for(let u=s;u<=o;u+=2)a.setUint16(l*2,t[u],!0),a.setUint16(l*2+2,t[u+1],!0),l+=2,c++,c>=3&&(l+=2,c=0)}static updateCenterColorsPaddedData(t,n,i,s,o){for(let a=t;a<=n;a++){const l=a*4,c=a*3,u=a*4;o[u]=u0(s,l),o[u+1]=pa(i[c]),o[u+2]=pa(i[c+1]),o[u+3]=pa(i[c+2])}}static updateScaleRotationsPaddedData(t,n,i,s,o){for(let l=t;l<=n;l++){const c=l*3,u=l*4,d=l*6;o[d]=i[c],o[d+1]=i[c+1],o[d+2]=i[c+2],o[d+3]=s[u],o[d+4]=s[u+1],o[d+5]=s[u+2]}}updateVisibleRegion(t){const n=this.getSplatCount(!0),i=new w;if(!t){const o=new w;this.scenes.forEach(a=>{o.add(a.splatBuffer.sceneCenter)}),o.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(o),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const s=t?this.lastBuildSplatCount:0;for(let o=s;o<n;o++){this.getSplatCenter(o,i,!0);const a=i.sub(this.calculatedSceneCenter).length();a>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=a)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>mc&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-mc,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(t=ji.Default){const n=DS*this.sceneFadeInRateMultiplier,i=LS*this.sceneFadeInRateMultiplier,s=this.finalBuild?n:i,o=t===ji.Default?s:i;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*o+this.visibleRegionFadeStartRadius;const l=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,c=l||t===ji.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=c,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!l}updateRenderIndexes(t,n){const i=this.geometry;i.attributes.splatIndex.set(t),i.attributes.splatIndex.needsUpdate=!0,n>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),i.instanceCount=n,i.setDrawRange(0,n)}updateTransforms(){for(let t=0;t<this.scenes.length;t++)this.getScene(t).updateTransform(this.dynamicMode)}setSplatScale(t=1){this.splatScale=t,this.material.uniforms.splatScale.value=t,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(t){this.pointCloudModeEnabled=t,this.material.uniforms.pointCloudModeEnabled.value=t?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(t=!1){return t?Ft.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getSplatCount());return n}static getTotalSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getSplatCount();return n}getMaxSplatCount(){return Ft.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getMaxSplatCount());return n}static getTotalMaxSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getMaxSplatCount();return n}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.vao&&(t.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(t.deleteProgram(this.distancesTransformFeedback.program),t.deleteShader(this.distancesTransformFeedback.vertexShader),t.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(t.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,t.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(t.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(t){if(t!==this.renderer){this.renderer=t;const n=this.renderer.getContext(),i=new ES(n),s=new CS(n,i,{});if(i.init(s),this.webGLUtils=new su(n,i,s),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:o,sceneIndexes:a}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(o,a)}}}updateGPUCentersBufferForDistancesComputation(t,n,i){if(!this.renderer)return;const s=this.renderer.getContext(),o=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao);const a=this.integerBasedDistancesComputation?Uint32Array:Float32Array,l=16,c=i*l;if(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),t)s.bufferSubData(s.ARRAY_BUFFER,c,n);else{const u=new a(this.getMaxSplatCount()*l);u.set(n),s.bufferData(s.ARRAY_BUFFER,u,s.STATIC_DRAW)}s.bindBuffer(s.ARRAY_BUFFER,null),o&&s.bindVertexArray(o)}updateGPUTransformIndexesBufferForDistancesComputation(t,n,i){if(!this.renderer||!this.dynamicMode)return;const s=this.renderer.getContext(),o=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao);const a=i*4;if(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),t)s.bufferSubData(s.ARRAY_BUFFER,a,n);else{const l=new Uint32Array(this.getMaxSplatCount()*4);l.set(n),s.bufferData(s.ARRAY_BUFFER,l,s.STATIC_DRAW)}s.bindBuffer(s.ARRAY_BUFFER,null),o&&s.bindVertexArray(o)}getSceneIndexes(t,n){let i;const s=n-t+1;i=new Uint32Array(s);for(let o=t;o<=n;o++)i[o]=this.globalSplatIndexToSceneIndexMap[o];return i}getLocalSplatParameters(t,n,i){i==null&&(i=!this.dynamicMode),n.splatBuffer=this.getSplatBufferForSplat(t),n.localIndex=this.getSplatLocalIndex(t),n.sceneTransform=i?this.getSceneTransformForSplat(t):null}fillSplatDataArrays(t,n,i,s,o,a,l,c=0,u=0,d=1,f,h,g=0,S){const p=new w;p.x=void 0,p.y=void 0,this.splatRenderMode===On.ThreeD?p.z=void 0:p.z=1;const m=new Oe;let A=0,v=this.scenes.length-1;S!=null&&S>=0&&S<=this.scenes.length&&(A=S,v=S);for(let E=A;E<=v;E++){l==null&&(l=!this.dynamicMode);const C=this.getScene(E),b=C.splatBuffer;let x;if(l&&(this.getSceneTransform(E,m),x=m),t&&b.fillSplatCovarianceArray(t,x,f,h,g,c),n||i){if(!n||!i)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');b.fillSplatScaleRotationArray(n,i,x,f,h,g,u,p)}s&&b.fillSplatCenterArray(s,x,f,h,g),o&&b.fillSplatColorArray(o,C.minimumAlpha,f,h,g),a&&b.fillSphericalHarmonicsArray(a,this.minSphericalHarmonicsDegree,x,f,h,g,d),g+=b.getSplatCount()}}getIntegerCenters(t,n,i=!1){const s=n-t+1,o=new Float32Array(s*3);this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t);let a,l=i?4:3;a=new Int32Array(s*l);for(let c=0;c<s;c++){for(let u=0;u<3;u++)a[c*l+u]=Math.round(o[c*3+u]*1e3);i&&(a[c*l+3]=1e3)}return a}getFloatCenters(t,n,i=!1){const s=n-t+1,o=new Float32Array(s*3);if(this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t),!i)return o;let a=new Float32Array(s*4);for(let l=0;l<s;l++){for(let c=0;c<3;c++)a[l*4+c]=o[l*3+c];a[l*4+3]=1}return a}getSceneTransform(t,n){const i=this.getScene(t);i.updateTransform(this.dynamicMode),n.copy(i.transform)}getScene(t){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[t]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).splatBuffer}getSceneIndexForSplat(t){return this.globalSplatIndexToSceneIndexMap[t]}getSceneTransformForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).transform}getSplatLocalIndex(t){return this.globalSplatIndexToLocalSplatIndexMap[t]}static getIntegerMatrixArray(t){const n=t.elements,i=[];for(let s=0;s<16;s++)i[s]=Math.round(n[s]*1e3);return i}computeBoundingBox(t=!1,n){let i=this.getSplatCount();if(n!=null){if(n<0||n>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");i=this.scenes[n].splatBuffer.getSplatCount()}const s=new Float32Array(i*3);this.fillSplatDataArrays(null,null,null,s,null,null,t,void 0,void 0,void 0,void 0,n);const o=new w,a=new w;for(let l=0;l<i;l++){const c=l*3,u=s[c],d=s[c+1],f=s[c+2];(l===0||u<o.x)&&(o.x=u),(l===0||d<o.y)&&(o.y=d),(l===0||f<o.z)&&(o.z=f),(l===0||u>a.x)&&(a.x=u),(l===0||d>a.y)&&(a.y=d),(l===0||f>a.z)&&(a.z=f)}return new Mt(o,a)}}var FS="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",Sc="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",BS="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",US="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function OS(r){let e,t,n,i,s,o,a,l,c,u,d,f,h,g,S,p,m,A,v,E;function C(b,x,I,_,y,L,B){const N=performance.now();if(!n&&(new Uint32Array(t,a,y.byteLength/E.BytesPerInt).set(y),new Float32Array(t,u,B.byteLength/E.BytesPerFloat).set(B),_)){let X;i?X=new Int32Array(t,d,L.byteLength/E.BytesPerInt):X=new Float32Array(t,d,L.byteLength/E.BytesPerFloat),X.set(L)}p||(p=new Uint32Array(A)),new Float32Array(t,S,16).set(I),new Uint32Array(t,h,A).set(p),e.exports.sortIndexes(a,g,d,f,h,S,l,c,u,A,b,x,o,_,i,s);const R={sortDone:!0,splatSortCount:b,splatRenderCount:x,sortTime:0};if(!n){const O=new Uint32Array(t,l,x);(!m||m.length<x)&&(m=new Uint32Array(x)),m.set(O),R.sortedIndexes=m}const F=performance.now();R.sortTime=F-N,r.postMessage(R)}r.onmessage=b=>{if(b.data.centers)centers=b.data.centers,sceneIndexes=b.data.sceneIndexes,i?new Int32Array(t,g+b.data.range.from*E.BytesPerInt*4,b.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,g+b.data.range.from*E.BytesPerFloat*4,b.data.range.count*4).set(new Float32Array(centers)),s&&new Uint32Array(t,c+b.data.range.from*4,b.data.range.count).set(new Uint32Array(sceneIndexes)),v=b.data.range.from+b.data.range.count;else if(b.data.sort){const x=Math.min(b.data.sort.splatRenderCount||0,v),I=Math.min(b.data.sort.splatSortCount||0,v),_=b.data.sort.usePrecomputedDistances;let y,L,B;n||(y=b.data.sort.indexesToSort,B=b.data.sort.transforms,_&&(L=b.data.sort.precomputedDistances)),C(I,x,b.data.sort.modelViewProj,_,y,L,B)}else if(b.data.init){E=b.data.init.Constants,o=b.data.init.splatCount,n=b.data.init.useSharedMemory,i=b.data.init.integerBasedSort,s=b.data.init.dynamicMode,A=b.data.init.distanceMapRange,v=0;const x=i?E.BytesPerInt*4:E.BytesPerFloat*4,I=new Uint8Array(b.data.init.sorterWasmBytes),_=16*E.BytesPerFloat,y=o*E.BytesPerInt,L=o*x,B=_,N=i?o*E.BytesPerInt:o*E.BytesPerFloat,R=o*E.BytesPerInt,F=o*E.BytesPerInt,O=i?A*E.BytesPerInt*2:A*E.BytesPerFloat*2,W=s?o*E.BytesPerInt:0,X=s?E.MaxScenes*_:0,z=E.MemoryPageSize*32,H=y+L+B+N+R+O+F+W+X+z,q=Math.floor(H/E.MemoryPageSize)+1,ie={module:{},env:{memory:new WebAssembly.Memory({initial:q,maximum:q,shared:!0})}};WebAssembly.compile(I).then(V=>WebAssembly.instantiate(V,ie)).then(V=>{e=V,a=0,g=a+y,S=g+L,d=S+B,f=d+N,h=f+R,l=h+O,c=l+F,u=c+W,t=ie.env.memory.buffer,n?r.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:a,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:d,transformsBuffer:t,transformsOffset:u}):r.postMessage({sortSetupPhase1Complete:!0})})}}}function NS(r,e,t,n,i,s=Je.DefaultSplatSortDistanceMapPrecision){const o=new Worker(URL.createObjectURL(new Blob(["(",OS.toString(),")(self)"],{type:"application/javascript"})));let a=FS;const l=$a()?lu():null;!t&&!e?(a=Sc,l&&l.major<=16&&l.minor<4&&(a=US)):t?e||l&&l.major<=16&&l.minor<4&&(a=BS):a=Sc;const c=atob(a),u=new Uint8Array(c.length);for(let d=0;d<c.length;d++)u[d]=c.charCodeAt(d);return o.postMessage({init:{sorterWasmBytes:u.buffer,splatCount:r,useSharedMemory:e,integerBasedSort:n,dynamicMode:i,distanceMapRange:1<<s,Constants:{BytesPerFloat:Je.BytesPerFloat,BytesPerInt:Je.BytesPerInt,MemoryPageSize:Je.MemoryPageSize,MaxScenes:Je.MaxScenes}}}),o}const Hi={None:0,VR:1,AR:2};class ts{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function u(h){h.addEventListener("end",d),await e.xr.setSession(h),n.textContent="EXIT VR",c=h}function d(){c.removeEventListener("end",d),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const f={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",f).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(u).catch(h=>{console.warn(h)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(u).catch(h=>{console.warn(h)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="VR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():o(),c&&ts.xrSessionIsGranted&&n.click()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{ts.xrSessionIsGranted=!0})}}}ts.xrSessionIsGranted=!1;ts.registerSessionGrantedListener();class zS{static createButton(e,t={}){const n=document.createElement("button");function i(){if(t.domOverlay===void 0){const f=document.createElement("div");f.style.display="none",document.body.appendChild(f);const h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.setAttribute("width",38),h.setAttribute("height",38),h.style.position="absolute",h.style.right="20px",h.style.top="20px",h.addEventListener("click",function(){c.end()}),f.appendChild(h);const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width",2),h.appendChild(g),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:f}}let c=null;async function u(f){f.addEventListener("end",d),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(f),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=f}function d(){c.removeEventListener("end",d),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(f=>{console.warn(f)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?i():o()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const pr={Always:0,Never:2},HS=50,kS=.75,VS=15e5,GS=10,WS=2.5,XS=60;var _n;let YS=(_n=class{constructor(e={}){k(this,"onKeyDown",function(){const e=new w,t=new Oe,n=new Oe;return function(i){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),i.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}}());k(this,"onMouseUp",function(){const e=new Me;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Ni()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}}());k(this,"checkForFocalPointChange",function(){const e=new Me,t=new w,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const s=n[0].origin;t.copy(s).sub(this.camera.position),t.length()>kS&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(s),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Ni())}}}());k(this,"updateSplatMesh",function(){const e=new Me;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,i=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,s=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,o=this.focalAdjustment*s,a=1/o;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*o,i*o,this.camera.isOrthographicCamera,this.camera.zoom||1,a)}}}());k(this,"addSplatBuffers",function(){return function(e,t=[],n=!0,i=!0,s=!0,o=!1,a=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null;const u=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return this.splatRenderReady=!1,new Promise(d=>{i&&(c=this.loadingSpinner.addTask("Processing splats...")),rn(()=>{if(this.isDisposingOrDisposed())d();else{const f=this.addSplatBuffersToMesh(e,t,n,s,o,l),h=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==h&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:f.centers.buffer,sceneIndexes:f.sceneIndexes.buffer,range:{from:f.from,to:f.to,count:f.count}}),(!this.sortWorker&&h>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(S=>{!this.sortWorker||!S?(this.splatRenderReady=!0,u(),d()):(a?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{u(),d()}))})})}},!0)})}}());k(this,"addSplatBuffersToMesh",function(){let e;return function(t,n,i=!0,s=!1,o=!1,a=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];o||(l=this.splatMesh.scenes.map(h=>h.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(h=>h):[]),l.push(...t),c.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const u=h=>{if(this.isDisposingOrDisposed())return;const g=this.splatMesh.getSplatCount();s&&g>=VS&&!h&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},d=h=>{this.isDisposingOrDisposed()||h&&e&&(this.loadingSpinner.removeTask(e),e=null)},f=this.splatMesh.build(l,c,!0,i,u,d,a);return i&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),f}}());k(this,"shouldRender",function(){let e=0;const t=new w,n=new it,i=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let s=!1,o=!1;if(this.camera){const a=this.camera.position,l=this.camera.quaternion;o=Math.abs(a.x-t.x)>i||Math.abs(a.y-t.y)>i||Math.abs(a.z-t.z)>i||Math.abs(l.x-n.x)>i||Math.abs(l.y-n.y)>i||Math.abs(l.z-n.z)>i||Math.abs(l.w-n.w)>i}return s=this.renderMode!==pr.Never&&(e===0||this.splatMesh.visibleRegionChanging||o||this.renderMode===pr.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,s}}());k(this,"render",function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let i of n.children)if(i.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}}());k(this,"updateFPS",function(){let e=Ni(),t=0;return function(){if(this.consecutiveRenderFrames>XS){const n=Ni();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}}());k(this,"updateForRendererSizeChanges",function(){const e=new Me,t=new Me;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}}());k(this,"timingSensitiveUpdates",function(){let e;return function(){const t=Ni();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}}());k(this,"updateCameraTransition",function(){let e=new w,t=new w,n=new w;return function(i){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const s=Math.acos(t.dot(n)),a=(s/(Math.PI/3)*.65+.3)/s*(i-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,a),this.camera.lookAt(e),this.controls.target.copy(e),a>=1&&(this.transitioningCameraTarget=!1)}}}());k(this,"updateFocusMarker",function(){const e=new Me;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const i=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let s=Math.min(i+GS*n,1);this.sceneHelper.setFocusMarkerOpacity(s),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let i;if(t?i=1:i=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),i>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let s=Math.max(i-WS*n,0);this.sceneHelper.setFocusMarkerOpacity(s),s===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}i>0&&this.forceRenderNextFrame(),t=!1}}}());k(this,"updateMeshCursor",function(){const e=[],t=new Me;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}}());k(this,"updateInfoPanel",function(){const e=new Me;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,i=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,s=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,i,this.currentFPS||"N/A",t,this.splatRenderCount,s,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}}());k(this,"runSplatSort",function(){const e=new Oe,t=[],n=new w(0,0,-1),i=new w(0,0,-1),s=new w,o=new w,a=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,u=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let d=0,f=0,h=!1,g=!1;if(i.set(0,0,-1).applyQuaternion(this.camera.quaternion),d=i.dot(n),f=o.copy(this.camera.position).sub(s).length(),!c&&!this.splatMesh.dynamicMode&&a.length===0&&(d<=.99&&(h=!0),f>=1&&(g=!0),!h&&!g))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:S,shouldSortAll:p}=this.gatherSceneNodesForSort();p=p||u,this.splatRenderCount=S,e.copy(this.camera.matrixWorld).invert();const m=this.perspectiveCamera||this.camera;e.premultiply(m.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let A=Promise.resolve(!0);return this.gpuAcceleratedSort&&(a.length<=1||a.length%2===0)&&(A=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),A.then(()=>{if(a.length===0)if(this.splatMesh.dynamicMode||p)a.push(this.splatRenderCount);else{for(let C of l)if(d<C.angleThreshold){for(let b of C.sortFractions)a.push(Math.floor(this.splatRenderCount*b));break}a.push(this.splatRenderCount)}let v=Math.min(a.shift(),this.splatRenderCount);this.splatSortCount=v,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const E={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:v,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(E.indexesToSort=this.sortWorkerIndexesToSort,E.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(E.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(C=>{this.sortPromiseResolver=C}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(C=>{this.sortWorker.postMessage(C)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:E}),a.length===0&&(s.copy(this.camera.position),n.copy(i)),!0}),A}}());k(this,"gatherSceneNodesForSort",function(){const e=[];let t=null;const n=new w,i=new w,s=new w,o=new Oe,a=new Oe,l=new Oe,c=new w,u=new w(0,0,-1),d=new w,f=h=>d.copy(h.max).sub(h.min).length();return function(h=!1){this.getRenderDimensions(c);const g=c.y/2/Math.tan(this.camera.fov/2*Lt.DEG2RAD),S=Math.atan(c.x/2/g),p=Math.atan(c.y/2/g),m=Math.cos(S),A=Math.cos(p),v=this.splatMesh.getSplatTree();if(v){a.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||a.multiply(this.splatMesh.matrixWorld);let E=0,C=0;for(let x=0;x<v.subTrees.length;x++){const I=v.subTrees[x];o.copy(a),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(x,l),o.multiply(l));const _=I.nodesWithIndexes.length;for(let y=0;y<_;y++){const L=I.nodesWithIndexes[y];if(!L.data||!L.data.indexes||L.data.indexes.length===0)continue;s.copy(L.center).applyMatrix4(o);const B=s.length();s.normalize(),n.copy(s).setX(0).normalize(),i.copy(s).setY(0).normalize();const N=u.dot(i),R=u.dot(n),F=f(L),O=R<A-.6,W=N<m-.6;!h&&(W||O)&&B>F||(C+=L.data.indexes.length,e[E]=L,L.data.distanceToNode=B,E++)}}e.length=E,e.sort((x,I)=>x.data.distanceToNode<I.data.distanceToNode?-1:1);let b=C*Je.BytesPerInt;for(let x=0;x<E;x++){const I=e[x],_=I.data.indexes.length,y=_*Je.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,b-y,_).set(I.data.indexes),b-=y}return{splatRenderCount:C,shouldSortAll:!1}}else{const E=this.splatMesh.getSplatCount();if(!t||t.length!==E){t=new Uint32Array(E);for(let C=0;C<E;C++)t[C]=C}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:E,shouldSortAll:!0}}}}());if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new w().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new w().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new w().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||Hi.None,this.webXRMode!==Hi.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||pr.Always,this.sceneRevealMode=e.sceneRevealMode||ji.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||vi.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,$a()){const n=lu();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=On.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||Je.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=ht(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new SS,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new w,this.nextCameraTarget=new w,this.mousePosition=new Me,this.mouseDownPosition=new Me,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new Na(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new dS(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new hS(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new Ft(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new ru,this.sceneHelper=new gs(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new Me;this.getRenderDimensions(e),this.perspectiveCamera=new nn(HS,e.x/e.y,.1,1e3),this.orthographicCamera=new Ya(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new Me;this.getRenderDimensions(e),this.renderer=new ja({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new et(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===Hi.VR?this.rootElement.appendChild(ts.createButton(this.renderer,e)):this.webXRMode===Hi.AR&&this.rootElement.appendChild(zS.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===Hi.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new cr(this.camera,this.renderer.domElement):this.perspectiveControls=new cr(this.camera,this.renderer.domElement):(this.perspectiveControls=new cr(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new cr(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===Hi.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Ni()}onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const i=a=>{a.saveState(),a.reset()},s=this.controls,o=e?this.orthographicControls:this.perspectiveControls;i(o),i(s),o.target.copy(s.target),e?_n.setCameraZoomFromPosition(n,t,s):_n.setCameraPositionFromZoom(n,t,o),this.controls=o,this.camera.lookAt(this.controls.target)}}adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],i=this.camera.projectionMatrix.elements[0];e.x*=i/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:lc(e),i=_n.isProgressivelyLoadable(n)&&t.progressiveLoad,s=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let o=null;s&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},l=(S,p,m)=>{if(s)if(m===At.Downloading)if(S==100)this.loadingSpinner.setMessageForTask(o,"Download complete!");else if(i)this.loadingSpinner.setMessageForTask(o,"Downloading splats...");else{const A=p?`: ${p}`:"...";this.loadingSpinner.setMessageForTask(o,`Downloading${A}`)}else m===At.Processing&&this.loadingSpinner.setMessageForTask(o,"Processing splats...")};let c=!1,u=0;const d=(S,p)=>{s&&((S&&i||p&&!i)&&(this.loadingSpinner.removeTask(o),!p&&!c&&this.loadingProgressBar.show()),i&&(p?(c=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(u)))},f=(S,p,m)=>{u=S,l(S,p,m),t.onProgress&&t.onProgress(S,p,m)},h=(S,p,m)=>{!i&&t.onProgress&&t.onProgress(0,"0%",At.Processing);const A={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([S],[A],m,p&&s,s,i,i).then(()=>{!i&&t.onProgress&&t.onProgress(100,"100%",At.Processing),d(p,m)})};return(i?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,h.bind(this),f,a.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,i,s,o,a){const l=this.downloadSplatSceneToSplatBuffer(e,n,s,!1,void 0,t,a),c=ma(l.abortHandler);return l.then(u=>(this.removeSplatSceneDownloadPromise(l),i(u,!0,!0).then(()=>{c.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(u=>{o&&o(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(l),c.reject(this.updateError(u,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(l),this.setSplatSceneDownloadAndBuildPromise(c.promise),c.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,i,s,o,a){let l=0,c=!1;const u=[],d=()=>{if(u.length>0&&!c&&!this.isDisposingOrDisposed()){c=!0;const p=u.shift();i(p.splatBuffer,p.firstBuild,p.finalBuild).then(()=>{c=!1,p.firstBuild?g.resolve():p.finalBuild&&(S.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),u.length>0&&rn(()=>d())})}},f=(p,m)=>{this.isDisposingOrDisposed()||(m||u.length===0||p.getSplatCount()>u[0].splatBuffer.getSplatCount())&&(u.push({splatBuffer:p,firstBuild:l===0,finalBuild:m}),l++,d())},h=this.downloadSplatSceneToSplatBuffer(e,n,s,!0,f,t,a),g=ma(h.abortHandler),S=ma();return this.addSplatSceneDownloadPromise(h),this.setSplatSceneDownloadAndBuildPromise(S.promise),h.then(()=>{this.removeSplatSceneDownloadPromise(h)}).catch(p=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(h);const m=this.updateError(p,"Viewer::addSplatScene -> Could not load one or more scenes");g.reject(m),o&&o(m)}),g.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const i=e.length,s=[];let o;t&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=(d,f,h,g)=>{s[d]=f;let S=0;for(let p=0;p<i;p++)S+=s[p]||0;S=S/i,h=`${S.toFixed(2)}%`,t&&g===At.Downloading&&this.loadingSpinner.setMessageForTask(o,S==100?"Download complete!":`Downloading: ${h}`),n&&n(S,h,g)},l=[],c=[];for(let d=0;d<e.length;d++){const f=e[d],h=f.format!==void 0&&f.format!==null?f.format:lc(f.path),g=this.downloadSplatSceneToSplatBuffer(f.path,f.splatAlphaRemovalThreshold,a.bind(this,d),!1,void 0,h,f.headers);l.push(g),c.push(g.promise)}const u=new bs((d,f)=>{Promise.all(c).then(h=>{t&&this.loadingSpinner.removeTask(o),n&&n(0,"0%",At.Processing),this.addSplatBuffers(h,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",At.Processing),this.clearSplatSceneDownloadAndBuildPromise(),d()})}).catch(h=>{t&&this.loadingSpinner.removeTask(o),this.clearSplatSceneDownloadAndBuildPromise(),f(this.updateError(h,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(u)})},d=>{for(let f of l)f.abort(d)});return this.addSplatSceneDownloadPromise(u),this.setSplatSceneDownloadAndBuildPromise(u),u}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,i=!1,s=void 0,o,a){try{if(o===Pt.Splat||o===Pt.KSplat||o===Pt.Ply){const l=i?!1:this.optimizeSplatData;if(o===Pt.Splat)return uo.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,l,a);if(o===Pt.KSplat)return Oa.loadFromURL(e,n,i,s,a);if(o===Pt.Ply)return lo.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,l,this.sphericalHarmonicsDegree,a)}else if(o===Pt.Spz)return co.loadFromURL(e,n,t,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,a)}catch(l){throw this.updateError(l,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===Pt.Splat||e===Pt.KSplat||e===Pt.Ply}setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,i=e.getSplatCount(),s=e.getMaxSplatCount();this.sortWorker=NS(s,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=o=>{if(o.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,o.data.splatRenderCount);else{const a=new Uint32Array(o.data.sortedIndexes.buffer,0,o.data.splatRenderCount);this.splatMesh.updateRenderIndexes(a,o.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=o.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(a=>{a()}),this.runAfterNextSort.length=0)}else if(o.data.sortCanceled)this.sortRunning=!1;else if(o.data.sortSetupPhase1Complete){this.logLevel>=vi.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(o.data.sortedIndexesBuffer,o.data.sortedIndexesOffset,s),this.sortWorkerIndexesToSort=new Uint32Array(o.data.indexesToSortBuffer,o.data.indexesToSortOffset,s),this.sortWorkerPrecomputedDistances=new n(o.data.precomputedDistancesBuffer,o.data.precomputedDistancesOffset,s),this.sortWorkerTransforms=new Float32Array(o.data.transformsBuffer,o.data.transformsOffset,Je.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(s),this.sortWorkerPrecomputedDistances=new n(s),this.sortWorkerTransforms=new Float32Array(Je.MaxScenes*16));for(let a=0;a<i;a++)this.sortWorkerIndexesToSort[a]=a;if(this.sortWorker.maxSplatCount=s,this.logLevel>=vi.Info){console.log("Sorting web worker ready.");const a=this.splatMesh.getSplatDataTextures(),l=a.covariances.size,c=a.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}updateError(e,t){return e instanceof ou?e:e instanceof Er?new Error("File type or server does not support progressive loading."):t?new Error(t):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((i,s)=>{let o;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),o=this.loadingSpinner.addTask("Removing splat scene..."));const a=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(o))},l=u=>{a(),this.splatSceneRemovalPromise=null,u?s(u):i()},c=()=>this.isDisposingOrDisposed()?(l(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(c())return;const u=[],d=[],f=[];for(let h=0;h<this.splatMesh.scenes.length;h++){let g=!1;for(let S of e)if(S===h){g=!0;break}if(!g){const S=this.splatMesh.scenes[h];u.push(S.splatBuffer),d.push(this.splatMesh.sceneOptions[h]),f.push({position:S.position.clone(),quaternion:S.quaternion.clone(),scale:S.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=ji.Instant,this.createSplatMesh(),this.addSplatBuffers(u,d,!0,!1,!0).then(()=>{c()||(a(),this.splatMesh.scenes.forEach((h,g)=>{h.position.copy(f[g].position),h.quaternion.copy(f[g].quaternion),h.scale.copy(f[g].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(c()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,l()})}))}).catch(h=>{l(h)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const i=this.splatSceneDownloadPromises[n];t.push(i),e.push(i.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&_n.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}},k(_n,"setCameraPositionFromZoom",function(){const e=new w;return function(t,n,i){const s=1/(n.zoom*.001);e.copy(i.target).sub(t.position).normalize().multiplyScalar(s).negate(),t.position.copy(i.target).add(e)}}()),k(_n,"setCameraZoomFromPosition",function(){const e=new w;return function(t,n,i){const s=e.copy(i.target).sub(n.position).length();t.zoom=1/(s*.001)}}()),_n);const Ac=[".ply",".splat",".ksplat",".spz"],Ha=32,vc="__splatRevealPatched",xc="__splatInteriorPatched";function _c(r){const e=new is(Lt.degToRad(r[0]),Lt.degToRad(r[1]),Lt.degToRad(r[2])),t=new it().setFromEuler(e);return[t.x,t.y,t.z,t.w]}function zt(r){return new Array(Ha).fill(r)}const qS={enabled:!1,target:[0,0,0],radius:.45,softness:.2,fadeAlpha:.15,maxDistance:20,affectSize:!1};class QS{constructor(){k(this,"viewer",null);k(this,"sceneIdOrder",[]);k(this,"handles",[]);k(this,"fitData",null);k(this,"warnedRevealFallback",!1);k(this,"revealBinding",null);k(this,"interiorBinding",null);k(this,"interiorConfig",{...qS});k(this,"warnedInteriorFallback",!1);k(this,"sceneGraphMutating",!1);k(this,"sceneMutationQueue",Promise.resolve());k(this,"splatBlobUrlCache",new Map);k(this,"transientBlobUrls",new Set)}async initialize(e){this.viewer=this.createViewer(e)}async loadSplat(e){return(await this.loadSplats([e]))[0]}async loadSplats(e){if(!this.viewer)throw new Error("Renderer not initialized.");if(e.length===0)return[];if(this.sceneIdOrder.length+e.length>Ha)throw new Error(`Reveal system supports up to ${Ha} loaded splat handles.`);return this.ensureSupportedAssetFormats(e),this.withSceneMutation(async()=>{const t=this.sceneIdOrder.length;await this.loadAssetsWithViewer(e);const n=[];for(let i=0;i<e.length;i+=1){const s=t+i,o=this.viewer.getSplatScene(s),a=this.createSplatHandle(e[i],o,s);n.push(a)}return this.sceneIdOrder.push(...e.map(i=>i.id)),this.handles.push(...n),this.fitData=null,this.viewer.forceRenderNextFrame(),n})}setVisible(e,t){var i;const n=this.handles.find(s=>s.id===e);n&&n.object3D.visible!==t&&(n.object3D.visible=t,this.fitData=null,(i=this.viewer)==null||i.forceRenderNextFrame())}getSplatSampleCloud(e,t){if(!this.viewer||this.sceneGraphMutating)return{points:[]};const n=this.handles.findIndex(p=>p.id===e);if(n<0)return{points:[]};const i=this.viewer.getSplatScene(n),s=i.splatBuffer.getSplatCount();if(s<=0)return{points:[]};const o=Math.max(1,Math.floor(t.maxSamples)),a=t.includeColors??!1,l=(t.randomize,Math.max(1,Math.floor(s/o))),u=t.space!=="local"?new Oe().compose(i.position,i.quaternion,i.scale):void 0,d=new w,f=new vt,h=[],g=[],S=p=>{i.splatBuffer.getSplatCenter(p,d,u),h.push(d.clone()),a&&(i.splatBuffer.getSplatColor(p,f),g.push(Lt.clamp(f.x/255,0,1),Lt.clamp(f.y/255,0,1),Lt.clamp(f.z/255,0,1)))};if(t.randomize){const p=l>1?Math.floor(Math.random()*l):0;for(let m=p;m<s&&h.length<o;m+=l)S(m);return a?{points:h,colors:new Float32Array(g)}:{points:h}}for(let p=0;p<s&&h.length<o;p+=l)S(p);return a?{points:h,colors:new Float32Array(g)}:{points:h}}getSplatSamplePoints(e,t){return this.getSplatSampleCloud(e,t).points}setInteriorView(e){var n;this.interiorConfig={enabled:e.enabled,target:[...e.target],radius:e.radius,softness:e.softness,fadeAlpha:e.fadeAlpha,maxDistance:e.maxDistance,affectSize:e.affectSize};const t=this.ensureInteriorPatch();if(!t){this.interiorConfig.enabled&&!this.warnedInteriorFallback&&(console.warn("Interior view shader injection unavailable. Effect disabled."),this.warnedInteriorFallback=!0);return}this.applyInteriorConfig(t,this.interiorConfig),(n=this.viewer)==null||n.forceRenderNextFrame()}setInteriorCameraPosition(e){const t=this.ensureInteriorPatch();t&&t.uniforms.uInteriorCameraPos.value.copy(e)}async clear(){this.viewer&&await this.withSceneMutation(async()=>{for(let e=this.sceneIdOrder.length-1;e>=0;e-=1)await this.viewer.removeSplatScene(e,!1);for(const e of this.handles)e.dispose();this.sceneIdOrder.length=0,this.handles.length=0,this.fitData=null,this.revealBinding=null,this.interiorBinding=null,this.viewer.forceRenderNextFrame()})}getFitData(){if(this.fitData)return{center:this.fitData.center.clone(),size:this.fitData.size.clone(),radius:this.fitData.radius};if(!this.viewer||this.handles.length===0||this.sceneGraphMutating)return null;const e=new Mt,t=new w,n=new Oe;let i=0;for(let l=0;l<this.handles.length;l+=1){const c=this.viewer.getSplatScene(l);if(!c.visible)continue;n.compose(c.position,c.quaternion,c.scale);const u=c.splatBuffer.getSplatCount(),f=Math.max(1,Math.floor(u/15e3));for(let h=0;h<u;h+=f)c.splatBuffer.getSplatCenter(h,t,n),e.expandByPoint(t),i+=1}if(i===0||e.isEmpty())return null;const s=e.getCenter(new w),o=e.getSize(new w),a=Math.max(.6,s.distanceTo(e.max)*1.1);return this.fitData={center:s.clone(),size:o.clone(),radius:a},{center:s,size:o,radius:a}}update(){var e;this.sceneGraphMutating||(e=this.viewer)==null||e.update()}render(){var e;this.sceneGraphMutating||(e=this.viewer)==null||e.render()}async dispose(){for(const e of this.handles)e.dispose();if(this.handles.length=0,!this.viewer){this.releaseTransientBlobUrls();return}await this.withSceneMutation(async()=>{await this.viewer.dispose()}),this.viewer=null,this.sceneIdOrder=[],this.fitData=null,this.revealBinding=null,this.interiorBinding=null,this.releaseTransientBlobUrls()}async withSceneMutation(e){const t=this.sceneMutationQueue.then(async()=>{this.sceneGraphMutating=!0;try{return await e()}finally{this.sceneGraphMutating=!1}});return this.sceneMutationQueue=t.then(()=>{},()=>{}),t}async loadAssetsWithViewer(e){if(!this.viewer)throw new Error("Renderer not initialized.");if(e.length===1){const t=e[0],n=await this.resolveAssetSource(t);try{await this.viewer.addSplatScene(n.path,{format:n.format,showLoadingUI:!1,position:t.transform.position,rotation:_c(t.transform.rotation),scale:t.transform.scale,opacity:0,visible:t.visibleDefault,splatAlphaRemovalThreshold:1})}catch(i){throw new Error(this.buildAssetLoadErrorMessage([t],i))}return}try{const t=await Promise.all(e.map(async n=>({asset:n,source:await this.resolveAssetSource(n)})));await this.viewer.addSplatScenes(t.map(({asset:n,source:i})=>({path:i.path,format:i.format,position:n.transform.position,rotation:_c(n.transform.rotation),scale:n.transform.scale,opacity:0,visible:n.visibleDefault,splatAlphaRemovalThreshold:1,showLoadingUI:!1})),!1)}catch(t){throw new Error(this.buildAssetLoadErrorMessage(e,t))}}async resolveAssetSource(e){const t=yc(e.src),n=this.resolveSceneFormat(t);return t!==".splat"?{path:e.src,format:n}:{path:await this.getSplatBlobUrl(e.src),format:n}}resolveSceneFormat(e){switch(e){case".splat":return Pt.Splat;case".ksplat":return Pt.KSplat;case".ply":return Pt.Ply;case".spz":return Pt.Spz;default:return}}async getSplatBlobUrl(e){const t=this.splatBlobUrlCache.get(e);if(t)return t;const n=(async()=>{const i=await fetch(e);if(!i.ok)throw new Error(`Failed to fetch splat source "${e}" (${i.status} ${i.statusText}).`);const s=await i.arrayBuffer(),o=URL.createObjectURL(new Blob([s],{type:"application/octet-stream"}));return this.transientBlobUrls.add(o),o})();this.splatBlobUrlCache.set(e,n);try{return await n}catch(i){throw this.splatBlobUrlCache.delete(e),i}}releaseTransientBlobUrls(){for(const e of this.transientBlobUrls)URL.revokeObjectURL(e);this.transientBlobUrls.clear(),this.splatBlobUrlCache.clear()}createSplatHandle(e,t,n){var c;const i=(c=this.viewer)==null?void 0:c.getSplatScene(n),s=i?this.computeBoundsFromScene(i):null,o=s?{minY:s.min.y,maxY:s.max.y}:this.computeBoundsFromObject(t),a=this.ensureRevealPatch(),l={id:e.id,object3D:t,boundsY:{...o},sampledBounds:s?{min:s.min.clone(),max:s.max.clone()}:void 0,setRevealBounds:u=>{l.boundsY={...u},a&&(a.uniforms.uRevealMinY.value[n]=u.minY,a.uniforms.uRevealMaxY.value[n]=u.maxY)},setRevealParams:u=>{var d;a?(a.uniforms.uRevealEnabled.value[n]=u.enabled?1:0,a.uniforms.uRevealMode.value[n]=u.mode==="bottomSphere"?1:0,a.uniforms.uRevealY.value[n]=u.revealY,a.uniforms.uRevealBand.value[n]=Math.max(1e-4,u.band),a.uniforms.uSphereEnabled.value[n]=u.enabled&&u.mode==="bottomSphere"?1:0,a.uniforms.uSphereOriginX.value[n]=u.sphereOrigin.x,a.uniforms.uSphereOriginY.value[n]=u.sphereOrigin.y,a.uniforms.uSphereOriginZ.value[n]=u.sphereOrigin.z,a.uniforms.uSphereRadius.value[n]=Math.max(1e-4,u.sphereRadius),a.uniforms.uSphereFeather.value[n]=Math.max(1e-4,u.sphereFeather),a.uniforms.uClipBottomEnabled.value[n]=u.clipBottomEnabled?1:0,a.uniforms.uClipBottomY.value[n]=u.clipBottomY,a.uniforms.uRevealAffectAlpha.value[n]=u.affectAlpha?1:0,a.uniforms.uRevealAffectSize.value[n]=u.affectSize?1:0):this.warnedRevealFallback?this.applySceneOpacityReveal(t,u,l.boundsY):(console.warn("Shader reveal unavailable. Using scene opacity dissolve fallback."),this.warnedRevealFallback=!0,this.applySceneOpacityReveal(t,u,l.boundsY)),(d=this.viewer)==null||d.forceRenderNextFrame()},dispose:()=>{a&&(a.uniforms.uRevealEnabled.value[n]=0,a.uniforms.uSphereEnabled.value[n]=0,a.uniforms.uClipBottomEnabled.value[n]=0)}};return l.setRevealBounds(o),l}computeBoundsFromObject(e){const t=new Mt().setFromObject(e);return t.isEmpty()?{minY:-1,maxY:1}:{minY:t.min.y,maxY:t.max.y}}computeBoundsFromScene(e){const t=e.splatBuffer.getSplatCount();if(t<=0)return null;const n=new Mt,i=new w,s=new Oe().compose(e.position,e.quaternion,e.scale),a=Math.max(1,Math.floor(t/18e4));let l=0;for(let c=0;c<t;c+=a)e.splatBuffer.getSplatCenter(c,i,s),n.expandByPoint(i),l+=1;return l===0||n.isEmpty()?null:n}ensureRevealPatch(){var n;if(this.revealBinding)return this.revealBinding;const e=this.viewer,t=(n=e==null?void 0:e.splatMesh)==null?void 0:n.material;return t?(this.revealBinding=this.patchRevealMaterial(t),this.revealBinding):null}ensureInteriorPatch(){var n;if(this.interiorBinding)return this.interiorBinding;const e=this.viewer,t=(n=e==null?void 0:e.splatMesh)==null?void 0:n.material;return!t||!("uniforms"in t)||typeof t.uniforms!="object"||t.uniforms===null?null:(this.interiorBinding=this.patchInteriorMaterial(t),this.applyInteriorConfig(this.interiorBinding,this.interiorConfig),this.interiorBinding)}patchRevealMaterial(e){const t=e;if(t[vc]===!0){const s=t.__splatRevealBinding;if(s)return s}const n={uRevealEnabled:{value:zt(0)},uRevealY:{value:zt(0)},uRevealBand:{value:zt(.12)},uRevealMinY:{value:zt(-1)},uRevealMaxY:{value:zt(1)},uRevealMode:{value:zt(0)},uSphereEnabled:{value:zt(0)},uSphereOriginX:{value:zt(0)},uSphereOriginY:{value:zt(0)},uSphereOriginZ:{value:zt(0)},uSphereRadius:{value:zt(1e-4)},uSphereFeather:{value:zt(.12)},uClipBottomEnabled:{value:zt(0)},uClipBottomY:{value:zt(0)},uRevealAffectAlpha:{value:zt(1)},uRevealAffectSize:{value:zt(1)}};e.uniforms.uRevealEnabled=n.uRevealEnabled,e.uniforms.uRevealY=n.uRevealY,e.uniforms.uRevealBand=n.uRevealBand,e.uniforms.uRevealMinY=n.uRevealMinY,e.uniforms.uRevealMaxY=n.uRevealMaxY,e.uniforms.uRevealMode=n.uRevealMode,e.uniforms.uSphereEnabled=n.uSphereEnabled,e.uniforms.uSphereOriginX=n.uSphereOriginX,e.uniforms.uSphereOriginY=n.uSphereOriginY,e.uniforms.uSphereOriginZ=n.uSphereOriginZ,e.uniforms.uSphereRadius=n.uSphereRadius,e.uniforms.uSphereFeather=n.uSphereFeather,e.uniforms.uClipBottomEnabled=n.uClipBottomEnabled,e.uniforms.uClipBottomY=n.uClipBottomY,e.uniforms.uRevealAffectAlpha=n.uRevealAffectAlpha,e.uniforms.uRevealAffectSize=n.uRevealAffectSize,e.vertexShader=jS(e.vertexShader).shader,e.fragmentShader=ZS(e.fragmentShader).shader,e.needsUpdate=!0;const i={material:e,uniforms:n};return t[vc]=!0,t.__splatRevealBinding=i,i}patchInteriorMaterial(e){e.uniforms||(e.uniforms={});const t=e;if(t[xc]===!0){const s=t.__splatInteriorBinding;if(s)return s}const n={uInteriorEnabled:{value:0},uInteriorTarget:{value:new w(0,0,0)},uInteriorRadius:{value:.45},uInteriorSoftness:{value:.2},uInteriorFadeAlpha:{value:.15},uInteriorMaxDist:{value:20},uInteriorAffectSize:{value:0},uInteriorCameraPos:{value:new w(0,0,0)}};e.uniforms.uInteriorEnabled=n.uInteriorEnabled,e.uniforms.uInteriorTarget=n.uInteriorTarget,e.uniforms.uInteriorRadius=n.uInteriorRadius,e.uniforms.uInteriorSoftness=n.uInteriorSoftness,e.uniforms.uInteriorFadeAlpha=n.uInteriorFadeAlpha,e.uniforms.uInteriorMaxDist=n.uInteriorMaxDist,e.uniforms.uInteriorAffectSize=n.uInteriorAffectSize,e.uniforms.uInteriorCameraPos=n.uInteriorCameraPos,e.vertexShader=KS(e.vertexShader).shader,e.fragmentShader=$S(e.fragmentShader).shader,e.needsUpdate=!0;const i={material:e,uniforms:n};return t[xc]=!0,t.__splatInteriorBinding=i,i}applyInteriorConfig(e,t){e.uniforms.uInteriorEnabled.value=t.enabled?1:0,e.uniforms.uInteriorTarget.value.set(...t.target),e.uniforms.uInteriorRadius.value=Math.max(1e-4,t.radius),e.uniforms.uInteriorSoftness.value=Math.min(.6,Math.max(.05,t.softness)),e.uniforms.uInteriorFadeAlpha.value=Math.min(1,Math.max(0,t.fadeAlpha)),e.uniforms.uInteriorMaxDist.value=Math.max(1e-4,t.maxDistance),e.uniforms.uInteriorAffectSize.value=t.affectSize?1:0}applySceneOpacityReveal(e,t,n){let i=1;if(t.mode==="bottomSphere"){const o=new Mt().setFromObject(e);if(!o.isEmpty()){const a=Math.max(t.sphereOrigin.distanceTo(o.max),t.sphereOrigin.distanceTo(o.min));i=Math.min(1,Math.max(0,t.sphereRadius/Math.max(1e-4,a)))}}else{const o=Math.max(1e-4,n.maxY-n.minY);i=Math.min(1,Math.max(0,(t.revealY-n.minY)/o))}const s=e;if(typeof s.opacity=="number"){s.opacity=t.enabled&&t.affectAlpha?i:1;return}e.traverse(o=>{const a=o;if(!a.material)return;const l=Array.isArray(a.material)?a.material:[a.material];for(const c of l){const u=c;typeof u.opacity=="number"&&(u.transparent=!0,u.opacity=t.enabled&&t.affectAlpha?i:1,u.needsUpdate=!0)}})}createViewer(e){return new YS({selfDrivenMode:!1,useBuiltInControls:!1,dynamicScene:!0,renderer:e.renderer,camera:e.camera,threeScene:e.scene,rootElement:e.rootElement,renderMode:pr.Always,sceneRevealMode:ji.Instant,enableOptionalEffects:!0,sharedMemoryForWorkers:!1,gpuAcceleratedSort:!1,optimizeSplatData:!1,logLevel:vi.None})}ensureSupportedAssetFormats(e){for(const t of e){const n=yc(t.src);if(!n||!Ac.includes(n))throw new Error(`Unsupported asset format for "${t.src}". Supported formats: ${Ac.join(", ")}.`)}}buildAssetLoadErrorMessage(e,t){const n=t instanceof Error?t.message:"Unknown renderer load error.";return e.length===1?`Failed to load splat asset "${e[0].src}". ${n}`:`Failed to load one or more splat assets [${e.map(s=>s.src).join(", ")}]. ${n}`}}function jS(r){let e=r;return e.includes("varying float vRevealWorldY;")||(e=`varying float vRevealWorldY;
varying vec3 vRevealWorldPos;
varying float vRevealSceneIndex;
${e}`),e.includes("uint sceneIndex = uint(0);")&&(e=e.replace("uint sceneIndex = uint(0);",`uint sceneIndex = uint(0);
            vRevealSceneIndex = 0.0;`)),e.includes("sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;")&&(e=e.replace("sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;",`sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
                vRevealSceneIndex = float(sceneIndex);`)),e.includes("vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));")&&(e=e.replace("vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));",`vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));
            vRevealWorldY = splatCenter.y;
            vRevealWorldPos = splatCenter;`)),e.includes("mat4 transformModelViewMatrix = viewMatrix * transform;")&&(e=e.replace("mat4 transformModelViewMatrix = viewMatrix * transform;",`mat4 transformModelViewMatrix = viewMatrix * transform;
                vec3 revealWorldCenter = (transform * vec4(splatCenter, 1.0)).xyz;
                vRevealWorldPos = revealWorldCenter;
                vRevealWorldY = revealWorldCenter.y;`)),e.includes("mat4 transformModelViewMatrix = modelViewMatrix;")&&(e=e.replace("mat4 transformModelViewMatrix = modelViewMatrix;",`mat4 transformModelViewMatrix = modelViewMatrix;
                vec3 revealWorldCenter = (modelMatrix * vec4(splatCenter, 1.0)).xyz;
                vRevealWorldPos = revealWorldCenter;
                vRevealWorldY = revealWorldCenter.y;`)),{shader:e}}function KS(r){let e=r;return e.includes("varying vec3 vInteriorSplatPos;")||(e=`varying vec3 vInteriorSplatPos;
${e}`),e.includes("varying float vInteriorSceneIndex;")||(e=`varying float vInteriorSceneIndex;
${e}`),e.includes("uint sceneIndex = uint(0);")&&(e=e.replace("uint sceneIndex = uint(0);",`uint sceneIndex = uint(0);
            vInteriorSceneIndex = 0.0;`)),e.includes("sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;")&&(e=e.replace("sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;",`sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
                vInteriorSceneIndex = float(sceneIndex);`)),e.includes("vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));")&&(e=e.replace("vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));",`vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));
            vInteriorSplatPos = splatCenter;`)),{shader:e}}function ZS(r){let e=r;e.includes("varying float vRevealWorldY;")||(e=`varying float vRevealWorldY;
varying vec3 vRevealWorldPos;
varying float vRevealSceneIndex;
${e}`),e.includes("uniform float uRevealEnabled[32];")||(e=`uniform float uRevealEnabled[32];
uniform float uRevealY[32];
uniform float uRevealBand[32];
uniform float uRevealMinY[32];
uniform float uRevealMaxY[32];
uniform float uRevealMode[32];
uniform float uSphereEnabled[32];
uniform float uSphereOriginX[32];
uniform float uSphereOriginY[32];
uniform float uSphereOriginZ[32];
uniform float uSphereRadius[32];
uniform float uSphereFeather[32];
uniform float uClipBottomEnabled[32];
uniform float uClipBottomY[32];
uniform float uRevealAffectAlpha[32];
uniform float uRevealAffectSize[32];
`+e);const t=`
  int revealScene = int(vRevealSceneIndex + 0.5);
  revealScene = clamp(revealScene, 0, 31);
  if (uClipBottomEnabled[revealScene] > 0.5 && vRevealWorldY < uClipBottomY[revealScene]) {
    discard;
  }
  float revealAlpha = 1.0;
  if (uRevealEnabled[revealScene] > 0.5) {
    if (uRevealMode[revealScene] < 0.5) {
      float revealBand = max(0.0001, uRevealBand[revealScene]);
      revealAlpha = smoothstep(uRevealY[revealScene] - revealBand, uRevealY[revealScene] + revealBand, vRevealWorldY);
    } else if (uSphereEnabled[revealScene] > 0.5) {
      vec3 sphereOrigin = vec3(uSphereOriginX[revealScene], uSphereOriginY[revealScene], uSphereOriginZ[revealScene]);
      float sphereDist = distance(vRevealWorldPos, sphereOrigin);
      float feather = max(0.0001, uSphereFeather[revealScene]);
      revealAlpha = smoothstep(uSphereRadius[revealScene] - feather, uSphereRadius[revealScene] + feather, sphereDist);
      revealAlpha = 1.0 - revealAlpha;
    }
  }
  if (uRevealAffectAlpha[revealScene] > 0.5) {
    gl_FragColor.a *= revealAlpha;
  }
`;return e.includes("#include <dithering_fragment>")?e=e.replace("#include <dithering_fragment>",`${t}
  #include <dithering_fragment>`):e=e.replace(/\}\s*$/,`${t}
}`),{shader:e}}function $S(r){let e=r;e.includes("varying vec3 vInteriorSplatPos;")||(e=`varying vec3 vInteriorSplatPos;
${e}`),e.includes("varying float vInteriorSceneIndex;")||(e=`varying float vInteriorSceneIndex;
${e}`),e.includes("uniform float uInteriorEnabled;")||(e=`uniform float uInteriorEnabled;
uniform vec3 uInteriorTarget;
uniform float uInteriorRadius;
uniform float uInteriorSoftness;
uniform float uInteriorFadeAlpha;
uniform float uInteriorMaxDist;
uniform float uInteriorAffectSize;
uniform vec3 uInteriorCameraPos;
`+e);const t=`
  if (uInteriorEnabled > 0.5) {
    vec3 A = uInteriorCameraPos;
    vec3 B = uInteriorTarget;
    vec3 AB = B - A;
    float abLen = length(AB);
    if (abLen > 0.0001 && abLen <= uInteriorMaxDist) {
      float abLenSq = dot(AB, AB);
      vec3 AP = vInteriorSplatPos - A;
      float t = clamp(dot(AP, AB) / abLenSq, 0.0, 1.0);
      if (t > 0.0 && t < 1.0) {
        vec3 closest = A + t * AB;
        float d = length(vInteriorSplatPos - closest);
        float soft = max(0.0001, uInteriorSoftness * uInteriorRadius);
        float m = smoothstep(uInteriorRadius, uInteriorRadius - soft, d);
        gl_FragColor.a = mix(gl_FragColor.a, gl_FragColor.a * uInteriorFadeAlpha, m);
        if (uInteriorAffectSize > 0.5) {
          gl_FragColor.a *= mix(1.0, 0.7, m);
        }
      }
    }
  }
`;return e.includes("#include <dithering_fragment>")?e=e.replace("#include <dithering_fragment>",`${t}
  #include <dithering_fragment>`):e=e.replace(/\}\s*$/,`${t}
}`),{shader:e}}function yc(r){const e=r.split("?")[0].split("#")[0],t=e.lastIndexOf(".");return t<0?null:e.slice(t).toLowerCase()}class JS{constructor(e){k(this,"keyHandler");this.actions=e,this.keyHandler=t=>{t.key.toLowerCase()==="r"&&this.actions.onReset(),t.key.toLowerCase()==="a"&&this.actions.onToggleAutorotate()}}bind(){window.addEventListener("keydown",this.keyHandler)}dispose(){window.removeEventListener("keydown",this.keyHandler)}}const Mc={type:"change"},Ma={type:"start"},Ec={type:"end"},dr=new Dr,Cc=new Un,eA=Math.cos(70*Lt.DEG2RAD);class tA extends ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:un.ROTATE,MIDDLE:un.DOLLY,RIGHT:un.PAN},this.touches={ONE:dn.ROTATE,TWO:dn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",de),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Mc),n.update(),s=i.NONE},this.update=function(){const M=new w,Q=new it().setFromUnitVectors(e.up,new w(0,1,0)),oe=Q.clone().invert(),re=new w,Ee=new it,Ne=new w,ke=2*Math.PI;return function(ge=null){const U=n.object.position;M.copy(U).sub(n.target),M.applyQuaternion(Q),a.setFromVector3(M),n.autoRotate&&s===i.NONE&&L(_(ge)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let pe=n.minAzimuthAngle,me=n.maxAzimuthAngle;isFinite(pe)&&isFinite(me)&&(pe<-Math.PI?pe+=ke:pe>Math.PI&&(pe-=ke),me<-Math.PI?me+=ke:me>Math.PI&&(me-=ke),pe<=me?a.theta=Math.max(pe,Math.min(me,a.theta)):a.theta=a.theta>(pe+me)/2?Math.max(pe,a.theta):Math.min(me,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?a.radius=z(a.radius):a.radius=z(a.radius*c),M.setFromSpherical(a),M.applyQuaternion(oe),U.copy(n.target).add(M),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let De=!1;if(n.zoomToCursor&&b){let Ie=null;if(n.object.isPerspectiveCamera){const $e=M.length();Ie=z($e*c);const tt=$e-Ie;n.object.position.addScaledVector(E,tt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const $e=new w(C.x,C.y,0);$e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),De=!0;const tt=new w(C.x,C.y,0);tt.unproject(n.object),n.object.position.sub(tt).add($e),n.object.updateMatrixWorld(),Ie=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ie!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ie).add(n.object.position):(dr.origin.copy(n.object.position),dr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(dr.direction))<eA?e.lookAt(n.target):(Cc.setFromNormalAndCoplanarPoint(n.object.up,n.target),dr.intersectPlane(Cc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),De=!0);return c=1,b=!1,De||re.distanceToSquared(n.object.position)>o||8*(1-Ee.dot(n.object.quaternion))>o||Ne.distanceToSquared(n.target)>0?(n.dispatchEvent(Mc),re.copy(n.object.position),Ee.copy(n.object.quaternion),Ne.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",be),n.domElement.removeEventListener("pointerdown",Re),n.domElement.removeEventListener("pointercancel",T),n.domElement.removeEventListener("wheel",ue),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",T),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",de),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Mr,l=new Mr;let c=1;const u=new w,d=new Me,f=new Me,h=new Me,g=new Me,S=new Me,p=new Me,m=new Me,A=new Me,v=new Me,E=new w,C=new Me;let b=!1;const x=[],I={};function _(M){return M!==null?2*Math.PI/60*n.autoRotateSpeed*M:2*Math.PI/60/60*n.autoRotateSpeed}function y(M){const Q=Math.abs(M)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Q)}function L(M){l.theta-=M}function B(M){l.phi-=M}const N=function(){const M=new w;return function(oe,re){M.setFromMatrixColumn(re,0),M.multiplyScalar(-oe),u.add(M)}}(),R=function(){const M=new w;return function(oe,re){n.screenSpacePanning===!0?M.setFromMatrixColumn(re,1):(M.setFromMatrixColumn(re,0),M.crossVectors(n.object.up,M)),M.multiplyScalar(oe),u.add(M)}}(),F=function(){const M=new w;return function(oe,re){const Ee=n.domElement;if(n.object.isPerspectiveCamera){const Ne=n.object.position;M.copy(Ne).sub(n.target);let ke=M.length();ke*=Math.tan(n.object.fov/2*Math.PI/180),N(2*oe*ke/Ee.clientHeight,n.object.matrix),R(2*re*ke/Ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(oe*(n.object.right-n.object.left)/n.object.zoom/Ee.clientWidth,n.object.matrix),R(re*(n.object.top-n.object.bottom)/n.object.zoom/Ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(M,Q){if(!n.zoomToCursor)return;b=!0;const oe=n.domElement.getBoundingClientRect(),re=M-oe.left,Ee=Q-oe.top,Ne=oe.width,ke=oe.height;C.x=re/Ne*2-1,C.y=-(Ee/ke)*2+1,E.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function z(M){return Math.max(n.minDistance,Math.min(n.maxDistance,M))}function H(M){d.set(M.clientX,M.clientY)}function q(M){X(M.clientX,M.clientX),m.set(M.clientX,M.clientY)}function ie(M){g.set(M.clientX,M.clientY)}function V(M){f.set(M.clientX,M.clientY),h.subVectors(f,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;L(2*Math.PI*h.x/Q.clientHeight),B(2*Math.PI*h.y/Q.clientHeight),d.copy(f),n.update()}function Z(M){A.set(M.clientX,M.clientY),v.subVectors(A,m),v.y>0?O(y(v.y)):v.y<0&&W(y(v.y)),m.copy(A),n.update()}function j(M){S.set(M.clientX,M.clientY),p.subVectors(S,g).multiplyScalar(n.panSpeed),F(p.x,p.y),g.copy(S),n.update()}function ee(M){X(M.clientX,M.clientY),M.deltaY<0?W(y(M.deltaY)):M.deltaY>0&&O(y(M.deltaY)),n.update()}function se(M){let Q=!1;switch(M.code){case n.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),Q=!0;break}Q&&(M.preventDefault(),n.update())}function ce(M){if(x.length===1)d.set(M.pageX,M.pageY);else{const Q=Qe(M),oe=.5*(M.pageX+Q.x),re=.5*(M.pageY+Q.y);d.set(oe,re)}}function fe(M){if(x.length===1)g.set(M.pageX,M.pageY);else{const Q=Qe(M),oe=.5*(M.pageX+Q.x),re=.5*(M.pageY+Q.y);g.set(oe,re)}}function ae(M){const Q=Qe(M),oe=M.pageX-Q.x,re=M.pageY-Q.y,Ee=Math.sqrt(oe*oe+re*re);m.set(0,Ee)}function Ce(M){n.enableZoom&&ae(M),n.enablePan&&fe(M)}function G(M){n.enableZoom&&ae(M),n.enableRotate&&ce(M)}function Be(M){if(x.length==1)f.set(M.pageX,M.pageY);else{const oe=Qe(M),re=.5*(M.pageX+oe.x),Ee=.5*(M.pageY+oe.y);f.set(re,Ee)}h.subVectors(f,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;L(2*Math.PI*h.x/Q.clientHeight),B(2*Math.PI*h.y/Q.clientHeight),d.copy(f)}function ve(M){if(x.length===1)S.set(M.pageX,M.pageY);else{const Q=Qe(M),oe=.5*(M.pageX+Q.x),re=.5*(M.pageY+Q.y);S.set(oe,re)}p.subVectors(S,g).multiplyScalar(n.panSpeed),F(p.x,p.y),g.copy(S)}function xe(M){const Q=Qe(M),oe=M.pageX-Q.x,re=M.pageY-Q.y,Ee=Math.sqrt(oe*oe+re*re);A.set(0,Ee),v.set(0,Math.pow(A.y/m.y,n.zoomSpeed)),O(v.y),m.copy(A);const Ne=(M.pageX+Q.x)*.5,ke=(M.pageY+Q.y)*.5;X(Ne,ke)}function _e(M){n.enableZoom&&xe(M),n.enablePan&&ve(M)}function Xe(M){n.enableZoom&&xe(M),n.enableRotate&&Be(M)}function Re(M){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(M.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",T)),Fe(M),M.pointerType==="touch"?Pe(M):K(M))}function P(M){n.enabled!==!1&&(M.pointerType==="touch"?ye(M):he(M))}function T(M){Ve(M),x.length===0&&(n.domElement.releasePointerCapture(M.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",T)),n.dispatchEvent(Ec),s=i.NONE}function K(M){let Q;switch(M.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case un.DOLLY:if(n.enableZoom===!1)return;q(M),s=i.DOLLY;break;case un.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enablePan===!1)return;ie(M),s=i.PAN}else{if(n.enableRotate===!1)return;H(M),s=i.ROTATE}break;case un.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enableRotate===!1)return;H(M),s=i.ROTATE}else{if(n.enablePan===!1)return;ie(M),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ma)}function he(M){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;V(M);break;case i.DOLLY:if(n.enableZoom===!1)return;Z(M);break;case i.PAN:if(n.enablePan===!1)return;j(M);break}}function ue(M){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(M.preventDefault(),n.dispatchEvent(Ma),ee(M),n.dispatchEvent(Ec))}function de(M){n.enabled===!1||n.enablePan===!1||se(M)}function Pe(M){switch(le(M),x.length){case 1:switch(n.touches.ONE){case dn.ROTATE:if(n.enableRotate===!1)return;ce(M),s=i.TOUCH_ROTATE;break;case dn.PAN:if(n.enablePan===!1)return;fe(M),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case dn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(M),s=i.TOUCH_DOLLY_PAN;break;case dn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;G(M),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ma)}function ye(M){switch(le(M),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Be(M),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ve(M),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_e(M),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Xe(M),n.update();break;default:s=i.NONE}}function be(M){n.enabled!==!1&&M.preventDefault()}function Fe(M){x.push(M.pointerId)}function Ve(M){delete I[M.pointerId];for(let Q=0;Q<x.length;Q++)if(x[Q]==M.pointerId){x.splice(Q,1);return}}function le(M){let Q=I[M.pointerId];Q===void 0&&(Q=new Me,I[M.pointerId]=Q),Q.set(M.pageX,M.pageY)}function Qe(M){const Q=M.pointerId===x[0]?x[1]:x[0];return I[Q]}n.domElement.addEventListener("contextmenu",be),n.domElement.addEventListener("pointerdown",Re),n.domElement.addEventListener("pointercancel",T),n.domElement.addEventListener("wheel",ue,{passive:!1}),this.update()}}function nA(r,e,t){return Math.max(e,Math.min(t,r))}function Ts(r){if(r<.5)return 4*r*r*r;const e=-2*r+2;return 1-e*e*e/2}class iA{constructor(e,t){k(this,"controls");k(this,"cameraAnimation",null);k(this,"baseLimits",{minDistance:.1,maxDistance:100,minPolarAngle:0,maxPolarAngle:Math.PI});k(this,"baseEnablePan",!0);k(this,"controlProfiles",[]);this.camera=e,this.controls=new tA(e,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!0}applyLimits(e,t){this.baseLimits={...e},this.baseEnablePan=t,this.applyEffectiveControls()}pushControlProfile(e){this.controlProfiles.push(e),this.applyEffectiveControls()}popControlProfile(){this.controlProfiles.length!==0&&(this.controlProfiles.pop(),this.applyEffectiveControls())}setAutoRotate(e,t=1){this.controls.autoRotate=e,this.controls.autoRotateSpeed=t}resetToHome(e,t){this.animateTo({position:e.position,target:e.target,fov:e.fov,durationMs:t})}setHomeImmediately(e){this.camera.position.set(...e.position),this.controls.target.set(...e.target),this.camera.fov=e.fov,this.camera.updateProjectionMatrix(),this.controls.update()}getCurrentHome(){return{position:[this.camera.position.x,this.camera.position.y,this.camera.position.z],target:[this.controls.target.x,this.controls.target.y,this.controls.target.z],fov:this.camera.fov}}getTarget(e){e.copy(this.controls.target)}frameTarget(e,t,n,i,s,o){const a=o.clone().normalize();a.lengthSq()===0&&a.set(0,0,1);const l=Math.max(.01,Lt.degToRad(i*.5)),c=Math.max(.01,Math.atan(Math.tan(l)*this.camera.aspect)),u=Math.max(.001,t.x*.5),f=Math.max(.001,t.y*.5)/Math.tan(l),h=u/Math.tan(c),g=n/Math.sin(Math.min(l,c)),S=Math.max(f,h,g)*.98,p=nA(S,s.minDistance,s.maxDistance);return this.controls.target.copy(e),this.camera.position.copy(e.clone().add(a.multiplyScalar(p))),this.camera.fov=i,this.camera.updateProjectionMatrix(),this.controls.update(),p}update(e){if(this.cameraAnimation){const t=e-this.cameraAnimation.startTime,n=Math.min(1,t/this.cameraAnimation.durationMs),i=Ts(n);this.camera.position.lerpVectors(this.cameraAnimation.fromPosition,this.cameraAnimation.toPosition,i),this.controls.target.lerpVectors(this.cameraAnimation.fromTarget,this.cameraAnimation.toTarget,i),this.camera.fov=Lt.lerp(this.cameraAnimation.fromFov,this.cameraAnimation.toFov,i),this.camera.updateProjectionMatrix(),n>=1&&(this.cameraAnimation=null)}this.controls.update()}dispose(){this.controls.dispose()}animateTo(e){this.cameraAnimation={startTime:performance.now(),durationMs:Math.max(1,e.durationMs),fromPosition:this.camera.position.clone(),fromTarget:this.controls.target.clone(),fromFov:this.camera.fov,toPosition:new w(...e.position),toTarget:new w(...e.target),toFov:e.fov}}applyEffectiveControls(){const e=this.controlProfiles[this.controlProfiles.length-1],t=(e==null?void 0:e.limits)??this.baseLimits,n=(e==null?void 0:e.enablePan)??this.baseEnablePan,i=!!(e!=null&&e.lockControls);this.controls.minDistance=t.minDistance,this.controls.maxDistance=t.maxDistance,this.controls.minPolarAngle=t.minPolarAngle,this.controls.maxPolarAngle=t.maxPolarAngle,this.controls.enableRotate=!0,this.controls.enableZoom=!0,this.controls.enablePan=!i&&n}}function Ze(r){return typeof r=="object"&&r!==null}function lt(r){return typeof r=="number"&&Number.isFinite(r)}function gu(r){return Array.isArray(r)&&r.length===3&&r.every(lt)}function ci(r,e,t){const n=r[e];return typeof n!="string"||n.trim().length===0?(t.push(`"${e}" must be a non-empty string.`),""):n}function sA(r,e,t){const n=r[e];return n==null?null:typeof n!="string"?(t.push(`"${e}" must be a string or null.`),null):n}function ui(r,e,t){const n=r[e];return typeof n!="boolean"?(t.push(`"${e}" must be a boolean.`),!1):n}function tn(r,e,t){const n=r[e];return lt(n)?n:(t.push(`"${e}" must be a number.`),0)}function Jn(r,e,t){const n=r[e];return gu(n)?n:(t.push(`"${e}" must be a numeric 3-tuple.`),[0,0,0])}function rA(r){const e=[];if(!Ze(r))return{ok:!1,errors:["Scene config must be a JSON object."]};const t=ci(r,"id",e),n=ci(r,"title",e),i=r.assets,s=[];if(!Array.isArray(i))e.push('"assets" must be an array.');else{i.length>5&&e.push('MVP limit exceeded: "assets" supports up to 5 splats.');for(let q=0;q<i.length;q+=1){const ie=i[q];if(!Ze(ie)){e.push(`assets[${q}] must be an object.`);continue}const V=ie.transform;if(!Ze(V)){e.push(`assets[${q}].transform must be an object.`);continue}s.push({id:ci(ie,"id",e),src:ci(ie,"src",e),transform:{position:Jn(V,"position",e),rotation:Jn(V,"rotation",e),scale:Jn(V,"scale",e)},visibleDefault:ui(ie,"visibleDefault",e)})}}const o=r.camera;Ze(o)||e.push('"camera" must be an object.');const a=Ze(o)?o:{},l=Ze(a.home)?a.home:null,c=Ze(a.limits)?a.limits:null;Ze(l)||e.push('"camera.home" must be an object.'),Ze(c)||e.push('"camera.limits" must be an object.');const u=r.ui;Ze(u)||e.push('"ui" must be an object.');const d=Ze(u)?u:{},f=r.transitions;Ze(f)||e.push('"transitions" must be an object.');const h=r.reveal;h!==void 0&&!Ze(h)&&e.push('"reveal" must be an object when provided.');const g=r.presentation;g!==void 0&&!Ze(g)&&e.push('"presentation" must be an object when provided.');const S=r.interiorView;S!==void 0&&!Ze(S)&&e.push('"interiorView" must be an object when provided.');const p=r.annotations;p!==void 0&&!Ze(p)&&e.push('"annotations" must be an object when provided.');const m=Ze(f)?f:{},A=Ze(h)?h:{},v=Ze(g)?g:{},E=A.particleIntro;E!==void 0&&!Ze(E)&&e.push('"reveal.particleIntro" must be an object when provided.');const C=A.bottomSphere;C!==void 0&&!Ze(C)&&e.push('"reveal.bottomSphere" must be an object when provided.');const b=A.bottomClip;b!==void 0&&!Ze(b)&&e.push('"reveal.bottomClip" must be an object when provided.');const x=Ze(E)?E:{},I=Ze(C)?C:{},_=Ze(b)?b:{},y=Ze(S)?S:{},L=Ze(p)?p:{};L.ui!==void 0&&!Ze(L.ui)&&e.push('"annotations.ui" must be an object when provided.'),Ze(L.ui)&&L.ui.occlusion!==void 0&&!Ze(L.ui.occlusion)&&e.push('"annotations.ui.occlusion" must be an object when provided.');const B=Ze(L.ui)?L.ui:{},N=Ze(B.occlusion)?B.occlusion:{},R=Ze(l)?l:{},F=Ze(c)?c:{},O=[],W=new Set,X=new Set,z=L.pins;if(z!==void 0&&!Array.isArray(z))e.push('"annotations.pins" must be an array when provided.');else if(Array.isArray(z))for(let q=0;q<z.length;q+=1){const ie=z[q];if(!Ze(ie)){e.push(`annotations.pins[${q}] must be an object.`);continue}const V=ie.camera;if(!Ze(V)){e.push(`annotations.pins[${q}].camera must be an object.`);continue}const Z=V.orbitLimits;Z!==void 0&&!Ze(Z)&&e.push(`annotations.pins[${q}].camera.orbitLimits must be an object when provided.`);const j=ie.order,ee=lt(j)?j:q+1;W.has(ee)?e.push(`annotations.pins[${q}].order must be unique.`):W.add(ee);const se=ci(ie,"id",e);se&&X.has(se)?e.push(`annotations.pins[${q}].id must be unique.`):se&&X.add(se);let ce;Ze(Z)&&(ce={minDistance:tn(Z,"minDistance",e),maxDistance:tn(Z,"maxDistance",e),minPolarAngle:tn(Z,"minPolarAngle",e),maxPolarAngle:tn(Z,"maxPolarAngle",e)}),O.push({id:se,assetId:typeof ie.assetId=="string"&&ie.assetId.trim().length>0?ie.assetId:void 0,order:ee,pos:Jn(ie,"pos",e),title:ci(ie,"title",e),body:ci(ie,"body",e),camera:{position:Jn(V,"position",e),target:Jn(V,"target",e),fov:tn(V,"fov",e),transitionMs:tn(V,"transitionMs",e),lockControls:ui(V,"lockControls",e),orbitLimits:ce}})}if(e.length>0)return{ok:!1,errors:e};const H={id:t,title:n,assets:s,camera:{home:{position:Jn(R,"position",e),target:Jn(R,"target",e),fov:tn(R,"fov",e)},limits:{minDistance:tn(F,"minDistance",e),maxDistance:tn(F,"maxDistance",e),minPolarAngle:tn(F,"minPolarAngle",e),maxPolarAngle:tn(F,"maxPolarAngle",e)},transitionMs:tn(a,"transitionMs",e)},ui:{enableFullscreen:ui(d,"enableFullscreen",e),enableAutorotate:ui(d,"enableAutorotate",e),enableReset:ui(d,"enableReset",e),enablePan:ui(d,"enablePan",e),autorotateDefaultOn:ui(d,"autorotateDefaultOn",e)},transitions:{sceneFadeMs:tn(m,"sceneFadeMs",e),fadeColour:typeof m.fadeColour=="string"?m.fadeColour:void 0},reveal:{enabled:typeof A.enabled=="boolean"?A.enabled:!0,mode:A.mode==="yRamp"||A.mode==="particleIntro"||A.mode==="bottomSphere"?A.mode:"yRamp",durationMs:lt(A.durationMs)?A.durationMs:2800,band:lt(A.band)?A.band:.12,ease:A.ease==="linear"||A.ease==="easeInOut"?A.ease:"easeInOut",affectAlpha:typeof A.affectAlpha=="boolean"?A.affectAlpha:!0,affectSize:typeof A.affectSize=="boolean"?A.affectSize:!0,startPadding:lt(A.startPadding)?A.startPadding:0,endPadding:lt(A.endPadding)?A.endPadding:0,particleIntro:{durationMs:lt(x.durationMs)?x.durationMs:1400,particleCount:lt(x.particleCount)?x.particleCount:9e3,spread:lt(x.spread)?x.spread:.45,size:lt(x.size)?x.size:.018,color:typeof x.color=="string"?x.color:"#ffdda8",blend:x.blend==="additive"||x.blend==="normal"?x.blend:"additive"},bottomSphere:{durationMs:lt(I.durationMs)?I.durationMs:1900,feather:lt(I.feather)?I.feather:.18,originYOffset:lt(I.originYOffset)?I.originYOffset:0,maxRadiusScale:lt(I.maxRadiusScale)?I.maxRadiusScale:1.08},bottomClip:{enabled:typeof _.enabled=="boolean"?_.enabled:!1,offset:lt(_.offset)?_.offset:0}},presentation:{mode:v.mode==="embedHero"?"embedHero":"standard",introAutoRotateDelayMs:lt(v.introAutoRotateDelayMs)?v.introAutoRotateDelayMs:400,idleRotateSpeed:lt(v.idleRotateSpeed)?v.idleRotateSpeed:.32,introSpinDegrees:lt(v.introSpinDegrees)?v.introSpinDegrees:0},interiorView:{enabled:typeof y.enabled=="boolean"?y.enabled:!1,target:gu(y.target)?y.target:[0,0,0],radius:lt(y.radius)?y.radius:.45,softness:lt(y.softness)?y.softness:.2,fadeAlpha:lt(y.fadeAlpha)?y.fadeAlpha:.15,maxDistance:lt(y.maxDistance)?y.maxDistance:20,affectSize:typeof y.affectSize=="boolean"?y.affectSize:!1},annotations:{enabled:typeof L.enabled=="boolean"?L.enabled:!1,defaultSelectedId:sA(L,"defaultSelectedId",e),pins:O,ui:{showTooltip:typeof B.showTooltip=="boolean"?B.showTooltip:!0,showNav:typeof B.showNav=="boolean"?B.showNav:!0,pinStyle:(B.pinStyle==="numbered","numbered"),occlusion:{enabled:typeof N.enabled=="boolean"?N.enabled:!0,mode:(N.mode==="depth","depth"),fadeAlpha:lt(N.fadeAlpha)?N.fadeAlpha:.18,disableClickWhenOccluded:typeof N.disableClickWhenOccluded=="boolean"?N.disableClickWhenOccluded:!0,epsilon:lt(N.epsilon)?N.epsilon:.01}}}};H.camera.limits.maxDistance<H.camera.limits.minDistance&&e.push('"camera.limits.maxDistance" must be >= "camera.limits.minDistance".'),H.camera.limits.maxPolarAngle<H.camera.limits.minPolarAngle&&e.push('"camera.limits.maxPolarAngle" must be >= "camera.limits.minPolarAngle".'),H.reveal.durationMs<=0&&e.push('"reveal.durationMs" must be > 0.'),H.reveal.band<=0&&e.push('"reveal.band" must be > 0.'),H.reveal.particleIntro.durationMs<=0&&e.push('"reveal.particleIntro.durationMs" must be > 0.'),H.reveal.particleIntro.particleCount<=0&&e.push('"reveal.particleIntro.particleCount" must be > 0.'),H.reveal.particleIntro.spread<0&&e.push('"reveal.particleIntro.spread" must be >= 0.'),H.reveal.particleIntro.size<=0&&e.push('"reveal.particleIntro.size" must be > 0.'),H.reveal.bottomSphere.durationMs<=0&&e.push('"reveal.bottomSphere.durationMs" must be > 0.'),H.reveal.bottomSphere.feather<=0&&e.push('"reveal.bottomSphere.feather" must be > 0.'),H.reveal.bottomSphere.maxRadiusScale<=0&&e.push('"reveal.bottomSphere.maxRadiusScale" must be > 0.'),H.presentation.introAutoRotateDelayMs<0&&e.push('"presentation.introAutoRotateDelayMs" must be >= 0.'),H.presentation.idleRotateSpeed<=0&&e.push('"presentation.idleRotateSpeed" must be > 0.'),H.interiorView.radius<=0&&e.push('"interiorView.radius" must be > 0.'),H.interiorView.maxDistance<=0&&e.push('"interiorView.maxDistance" must be > 0.');for(const q of H.annotations.pins)q.assetId&&!H.assets.some(ie=>ie.id===q.assetId)&&e.push(`annotations pin "${q.id}" assetId "${q.assetId}" must match an existing asset id.`),q.camera.transitionMs<=0&&e.push(`annotations pin "${q.id}" camera.transitionMs must be > 0.`),q.camera.fov<=0&&e.push(`annotations pin "${q.id}" camera.fov must be > 0.`),q.camera.orbitLimits&&(q.camera.orbitLimits.maxDistance<q.camera.orbitLimits.minDistance&&e.push(`annotations pin "${q.id}" camera.orbitLimits.maxDistance must be >= minDistance.`),q.camera.orbitLimits.maxPolarAngle<q.camera.orbitLimits.minPolarAngle&&e.push(`annotations pin "${q.id}" camera.orbitLimits.maxPolarAngle must be >= minPolarAngle.`));return H.annotations.defaultSelectedId&&!H.annotations.pins.some(q=>q.id===H.annotations.defaultSelectedId)&&e.push('"annotations.defaultSelectedId" must match an existing pin id.'),H.annotations.ui.occlusion.epsilon<0&&e.push('"annotations.ui.occlusion.epsilon" must be >= 0.'),H.interiorView.softness=Math.min(.6,Math.max(.05,H.interiorView.softness)),H.interiorView.fadeAlpha=Math.min(1,Math.max(0,H.interiorView.fadeAlpha)),H.annotations.ui.occlusion.fadeAlpha=Math.min(1,Math.max(0,H.annotations.ui.occlusion.fadeAlpha)),H.annotations.pins.sort((q,ie)=>q.order-ie.order),e.length>0?{ok:!1,errors:e}:{ok:!0,data:H}}function aA(r){return r.startsWith("/")?r.slice(1):r}function Su(r){const e=aA(r);return new URL(e,oA()).toString()}function oA(){const r=new URL(".",import.meta.url),e=r.pathname;return e.includes("/src/")?new URL("/",r).toString():e.includes("/assets/")?new URL("../",r).toString():r.toString()}class hr extends Error{constructor(e,t=[]){super(e),this.details=t,this.name="SceneConfigError"}}async function lA(r){const e=Su(`scenes/${r}/scene.json`);let t;try{t=await fetch(e)}catch{throw new hr(`Failed to fetch "${e}". Check your network and static asset path.`)}if(!t.ok)throw new hr(`Scene config not found: "${e}" (${t.status} ${t.statusText}).`);let n;try{n=await t.json()}catch{throw new hr(`Scene config at "${e}" is not valid JSON.`)}const i=rA(n);if(!i.ok)throw new hr(`Scene config validation failed for "${e}".`,i.errors);return cA(i.data)}function cA(r){const e=r.assets.map(t=>({...t,src:uA(t.src)}));return{...r,assets:e}}function uA(r){return dA(r)?r:Su(r)}function dA(r){return/^(?:[a-z]+:)?\/\//i.test(r)||r.startsWith("data:")}const hA={enabled:!0,mode:"yRamp",durationMs:2800,band:.12,ease:"easeInOut",affectAlpha:!0,affectSize:!0,startPadding:0,endPadding:0,particleIntro:{durationMs:1400,particleCount:9e3,spread:.45,size:.018,color:"#ffdda8",blend:"additive"},bottomSphere:{durationMs:1900,feather:.18,originYOffset:0,maxRadiusScale:1.08},bottomClip:{enabled:!1,offset:0}};function bc(r,e){return e==="linear"?r:Ts(r)}class fA{constructor(){k(this,"baseScaleByHandle",new WeakMap)}primeRevealInStart(e,t){if(!t.enabled){this.applyRevealScale(e,1,!1);return}this.applyRevealScale(e,0,t.affectSize)}async revealIn(e,t,n){if(!n.enabled){this.applyRevealScale(e,1,!1),e.setRevealParams({enabled:!1,mode:n.mode==="bottomSphere"?"bottomSphere":"yRamp",revealY:t.maxY,band:n.band,sphereOrigin:this.computeBottomSphereOrigin(e,n),sphereRadius:this.computeBottomSphereMaxRadius(e,n),sphereFeather:n.bottomSphere.feather,clipBottomEnabled:n.bottomClip.enabled,clipBottomY:e.boundsY.minY+n.bottomClip.offset,affectAlpha:n.affectAlpha,affectSize:n.affectSize});return}if(n.mode==="bottomSphere"){await this.animateSphere(e,n,1);return}const i=t.minY+n.startPadding,s=t.maxY+n.endPadding;await this.animateY(e,i,s,n,1)}async revealOut(e,t,n){if(!n.enabled)return;if(n.mode==="bottomSphere"){await this.animateSphere(e,n,.5,!0);return}const i=t.minY+n.startPadding,s=t.maxY+n.endPadding;await this.animateY(e,s,i,n,.5)}async animateY(e,t,n,i,s){const o=performance.now(),a=Math.max(100,i.durationMs*s);await new Promise(l=>{const c=u=>{const d=Math.min(1,(u-o)/a),f=bc(d,i.ease),h=t+(n-t)*f;if(this.applyRevealScale(e,f,i.affectSize),e.setRevealParams({enabled:!0,mode:"yRamp",revealY:h,band:i.band,sphereOrigin:this.computeBottomSphereOrigin(e,i),sphereRadius:0,sphereFeather:i.bottomSphere.feather,clipBottomEnabled:i.bottomClip.enabled,clipBottomY:e.boundsY.minY+i.bottomClip.offset,affectAlpha:i.affectAlpha,affectSize:i.affectSize}),d>=1){l();return}requestAnimationFrame(c)};requestAnimationFrame(c)}),this.applyRevealScale(e,1,i.affectSize)}async animateSphere(e,t,n,i=!1){const s=performance.now(),o=Math.max(100,t.bottomSphere.durationMs*n),a=this.computeBottomSphereOrigin(e,t),l=this.computeBottomSphereMaxRadius(e,t),c=Math.max(1e-4,t.bottomSphere.feather*.02),u=i?1:0,d=c+(l-c)*u;this.applyRevealScale(e,u,t.affectSize),e.setRevealParams({enabled:!0,mode:"bottomSphere",revealY:e.boundsY.maxY,band:t.band,sphereOrigin:a,sphereRadius:d,sphereFeather:t.bottomSphere.feather,clipBottomEnabled:t.bottomClip.enabled,clipBottomY:e.boundsY.minY+t.bottomClip.offset,affectAlpha:t.affectAlpha,affectSize:t.affectSize}),await new Promise(f=>{const h=g=>{const S=Math.min(1,(g-s)/o),p=bc(S,t.ease),m=i?1-p:p;this.applyRevealScale(e,m,t.affectSize);const A=c+(l-c)*m;if(e.setRevealParams({enabled:!0,mode:"bottomSphere",revealY:e.boundsY.maxY,band:t.band,sphereOrigin:a,sphereRadius:A,sphereFeather:t.bottomSphere.feather,clipBottomEnabled:t.bottomClip.enabled,clipBottomY:e.boundsY.minY+t.bottomClip.offset,affectAlpha:t.affectAlpha,affectSize:t.affectSize}),S>=1){f();return}requestAnimationFrame(h)};requestAnimationFrame(h)}),i||(this.applyRevealScale(e,1,t.affectSize),e.setRevealParams({enabled:!0,mode:"bottomSphere",revealY:e.boundsY.maxY,band:t.band,sphereOrigin:a,sphereRadius:l*2.25,sphereFeather:t.bottomSphere.feather,clipBottomEnabled:t.bottomClip.enabled,clipBottomY:e.boundsY.minY+t.bottomClip.offset,affectAlpha:t.affectAlpha,affectSize:t.affectSize}),e.setRevealParams({enabled:!1,mode:"bottomSphere",revealY:e.boundsY.maxY,band:t.band,sphereOrigin:a,sphereRadius:l*2.25,sphereFeather:t.bottomSphere.feather,clipBottomEnabled:t.bottomClip.enabled,clipBottomY:e.boundsY.minY+t.bottomClip.offset,affectAlpha:t.affectAlpha,affectSize:t.affectSize}))}computeBottomSphereOrigin(e,t){const n=e.sampledBounds?new Mt(e.sampledBounds.min.clone(),e.sampledBounds.max.clone()):new Mt().setFromObject(e.object3D);return n.isEmpty()?new w(0,t.bottomSphere.originYOffset,0):new w((n.min.x+n.max.x)*.5,n.min.y+t.bottomSphere.originYOffset,(n.min.z+n.max.z)*.5)}computeBottomSphereMaxRadius(e,t){const n=e.sampledBounds?new Mt(e.sampledBounds.min.clone(),e.sampledBounds.max.clone()):new Mt().setFromObject(e.object3D),i=this.computeBottomSphereOrigin(e,t);if(n.isEmpty())return 1;let s=0;const o=[new w(n.min.x,n.min.y,n.min.z),new w(n.min.x,n.min.y,n.max.z),new w(n.min.x,n.max.y,n.min.z),new w(n.min.x,n.max.y,n.max.z),new w(n.max.x,n.min.y,n.min.z),new w(n.max.x,n.min.y,n.max.z),new w(n.max.x,n.max.y,n.min.z),new w(n.max.x,n.max.y,n.max.z)];for(const d of o)s=Math.max(s,i.distanceTo(d));const a=n.getSize(new w),l=Math.max(.001,a.length()),c=Math.max(2.2,t.bottomSphere.maxRadiusScale),u=l*.45;return Math.max(.01,s*c+u)}applyRevealScale(e,t,n){const i=this.getBaseScale(e);if(!n){e.object3D.scale.copy(i);return}const o=.86+Math.min(1,Math.max(0,t))*.14;e.object3D.scale.set(i.x*o,i.y*o,i.z*o)}getBaseScale(e){const t=this.baseScaleByHandle.get(e);if(t)return t;const n=e.object3D.scale.clone();return this.baseScaleByHandle.set(e,n),n}}class Ea extends Error{constructor(e,t=[]){super(e),this.details=t,this.name="SceneLoadError"}}class pA{constructor(e,t){k(this,"activeConfig",null);k(this,"activeHandles",[]);k(this,"activeItems",[]);k(this,"handleById",new Map);k(this,"revealController",new fA);k(this,"currentActiveId",null);k(this,"interiorBaseConfig",null);k(this,"opVersion",0);this.renderer=e,this.events=t}get config(){return this.activeConfig}getActiveSplatId(){return this.currentActiveId}getActiveHandle(){return this.currentActiveId?this.handleById.get(this.currentActiveId)??null:null}async loadScene(e){var i,s;this.opVersion+=1;const t=this.opVersion;this.events.onLoading("Loading scene configuration...");let n;try{n=await lA(e)}catch(o){throw o instanceof Error?new Ea(o.message):new Ea("Unknown error while loading scene configuration.")}if(this.activeHandles.length>0){this.events.onLoading("Dissolving current scene...");const o=((i=this.activeConfig)==null?void 0:i.reveal)??hA;await Promise.all(this.activeHandles.map(a=>this.revealController.revealOut(a,a.boundsY,o)))}this.events.onLoading("Loading splat assets...");try{if(await this.renderer.clear(),t!==this.opVersion)return this.activeConfig??n;this.interiorBaseConfig=n.interiorView,this.handleById.clear(),this.activeHandles=await this.renderer.loadSplats(n.assets),this.currentActiveId=((s=n.assets[0])==null?void 0:s.id)??null,this.applyInteriorForActive(this.currentActiveId),this.activeItems=n.assets.map((a,l)=>({id:a.id,label:a.id.replaceAll("_"," "),active:l===0,loaded:!0,failed:!1}));for(const a of this.activeHandles)this.handleById.set(a.id,a);this.events.onItemsChanged(this.getSplatItems());const o=n.assets[0];if(o){const a=this.handleById.get(o.id);a&&(this.renderer.setVisible(o.id,!0),await this.prepareRevealStart([a],n.reveal))}}catch(o){const a=o instanceof Error?o.message:"Unknown error while loading splat assets.";throw new Ea("Unable to load scene assets.",[a])}return this.activeConfig=n,this.events.onReady(n),n}async revealActiveScene(e={}){if(!this.activeConfig)return;const t=this.activeConfig.reveal;await Promise.all(this.activeHandles.map(async n=>{const i=this.activeItems.find(s=>s.id===n.id);if(!(i!=null&&i.active)){this.renderer.setVisible(n.id,!1);return}this.renderer.setVisible(n.id,!0),e.beforeRevealIn&&await e.beforeRevealIn({handle:n,config:this.activeConfig,reveal:t}),await this.revealController.revealIn(n,n.boundsY,t)}))}async resetActiveRevealStart(){if(!this.activeConfig)return;const e=[];for(const t of this.activeHandles){const n=this.activeItems.find(i=>i.id===t.id);n!=null&&n.active&&(this.renderer.setVisible(t.id,!0),e.push(t))}await this.prepareRevealStart(e,this.activeConfig.reveal)}getSplatItems(){return this.activeItems.map(e=>({...e}))}getInteriorViewConfig(){return this.interiorBaseConfig?{...this.interiorBaseConfig,target:[...this.interiorBaseConfig.target]}:null}updateInteriorViewConfig(e){if(!this.interiorBaseConfig)return;const t={...this.interiorBaseConfig,...e,target:e.target?[...e.target]:[...this.interiorBaseConfig.target]};this.interiorBaseConfig=t,this.applyInteriorForActive(this.currentActiveId)}async activateSplat(e,t){if(!this.activeConfig)return!1;const n=this.handleById.get(e),i=this.activeItems.find(l=>l.id===e);if(!n||!i||i.failed)return!1;if(this.currentActiveId===e)return!0;this.opVersion+=1;const s=this.opVersion,o=this.activeConfig.reveal,a=this.currentActiveId;if(a&&a!==e){const l=this.handleById.get(a);if(l&&(await this.revealController.revealOut(l,l.boundsY,o),s!==this.opVersion))return!1}for(const l of this.activeItems)l.id!==e&&(this.renderer.setVisible(l.id,!1),l.active=!1);return this.renderer.setVisible(e,!0),i.active=!0,this.currentActiveId=e,this.events.onItemsChanged(this.getSplatItems()),this.applyInteriorForActive(this.currentActiveId),await this.prepareRevealStart([n],o),t&&await t(),await this.revealController.revealIn(n,n.boundsY,o),s!==this.opVersion?!1:(this.events.onItemsChanged(this.getSplatItems()),!0)}async dispose(){this.activeHandles=[],this.activeItems=[],this.handleById.clear(),this.currentActiveId=null,this.interiorBaseConfig=null,await this.renderer.dispose()}async prepareRevealStart(e,t){for(const n of e){const i=n.boundsY.minY+t.startPadding,s=n.sampledBounds?new Mt(n.sampledBounds.min.clone(),n.sampledBounds.max.clone()):new Mt().setFromObject(n.object3D),o=s.isEmpty()?new w(0,i+t.bottomSphere.originYOffset,0):new w((s.min.x+s.max.x)*.5,s.min.y+t.bottomSphere.originYOffset,(s.min.z+s.max.z)*.5);n.setRevealBounds(n.boundsY),n.setRevealParams({enabled:t.enabled,mode:t.mode==="bottomSphere"?"bottomSphere":"yRamp",revealY:i,band:t.band,sphereOrigin:o,sphereRadius:1e-4,sphereFeather:t.bottomSphere.feather,clipBottomEnabled:t.bottomClip.enabled,clipBottomY:n.boundsY.minY+t.bottomClip.offset,affectAlpha:t.affectAlpha,affectSize:t.affectSize}),this.revealController.primeRevealInStart(n,t)}}applyInteriorForActive(e){const t=this.interiorBaseConfig;t&&this.renderer.setInteriorView({...t,enabled:t.enabled&&e==="staircase"})}}function mA(r){const e=new et;try{return e.set(r),e}catch{return e.set("#ffdda8"),e}}class gA{constructor(e){k(this,"points",null);k(this,"geometry",null);k(this,"material",null);k(this,"rafId",0);this.scene=e}async play(e,t,n,i,s={}){if(this.disposeCurrent(),i||e.length===0)return;const o=Math.min(n.particleCount,e.length);if(o<=0)return;const a=new Float32Array(o*3),l=new Float32Array(o*3),c=new Float32Array(o*3),u=Math.max(.001,t.maxY-t.minY),d=Math.max(.01,u*n.spread),f=mA(n.color),h=s.sourceColors??null,g=!!(h&&h.length>=o*3);for(let A=0;A<o;A+=1){const v=e[A],E=Math.random()*Math.PI*2,C=Math.acos(2*Math.random()-1),b=d*(.4+Math.random()*.6),x=new w(Math.sin(C)*Math.cos(E),Math.cos(C),Math.sin(C)*Math.sin(E)).multiplyScalar(b),I=A*3;a[I]=v.x+x.x,a[I+1]=v.y+x.y,a[I+2]=v.z+x.z,l[I]=v.x,l[I+1]=v.y,l[I+2]=v.z,c[I]=a[I],c[I+1]=a[I+1],c[I+2]=a[I+2]}if(this.geometry=new Zt,this.geometry.setAttribute("position",new Yt(c,3)),g&&h){const A=new Float32Array(o*3);A.set(h.subarray(0,o*3)),this.geometry.setAttribute("color",new Yt(A,3))}this.material=new au({color:f,vertexColors:g,size:Math.max(.001,n.size),transparent:!0,opacity:.95,depthWrite:!1,depthTest:!0,blending:n.blend==="additive"?Ca:Vn,sizeAttenuation:!0}),this.points=new $g(this.geometry,this.material),this.points.renderOrder=-1;const S=s.anchor??null;S?S.add(this.points):this.scene.add(this.points);const p=performance.now(),m=Math.max(120,n.durationMs);await new Promise(A=>{const v=E=>{var I;const C=Math.min(1,(E-p)/m),b=Ts(C),x=(I=this.geometry)==null?void 0:I.getAttribute("position");if(x instanceof Yt){for(let _=0;_<o;_+=1){const y=_*3;x.array[y]=a[y]+(l[y]-a[y])*b,x.array[y+1]=a[y+1]+(l[y+1]-a[y+1])*b,x.array[y+2]=a[y+2]+(l[y+2]-a[y+2])*b}x.needsUpdate=!0}if(this.material&&(this.material.opacity=.92),C>=1){A();return}this.rafId=requestAnimationFrame(v)};this.rafId=requestAnimationFrame(v)})}async cover(e){if(!this.material||!this.points)return;this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=0);const t=performance.now(),n=Math.max(140,e),i=.25,s=this.material.opacity;await new Promise(o=>{const a=l=>{const c=Math.min(1,(l-t)/n),u=c<=i?0:(c-i)/(1-i),d=Ts(u);if(this.material&&(this.material.opacity=s*(1-d)),c>=1){o();return}this.rafId=requestAnimationFrame(a)};this.rafId=requestAnimationFrame(a)}),this.disposeCurrent()}dispose(){this.disposeCurrent()}disposeCurrent(){var e;this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=0),this.points&&((e=this.points.parent)==null||e.remove(this.points),this.points=null),this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}}class SA{constructor(e,t,n={}){k(this,"scene",new ru);k(this,"camera",new nn(50,1,.01,100));k(this,"webglRenderer",new ja({antialias:!0,alpha:!0}));k(this,"cameraController");k(this,"splatRenderer",new QS);k(this,"sceneManager");k(this,"inputBindings");k(this,"annotationManager");k(this,"annotationPersistence",new c0);k(this,"particleIntroController",new gA(this.scene));k(this,"resizeObserver");k(this,"activeSceneId","");k(this,"activeConfig",null);k(this,"fittedHome",null);k(this,"autoRotate",!1);k(this,"disposed",!1);k(this,"pendingResizeSync",!1);k(this,"queuedSelectionId",null);k(this,"processingSelection",!1);k(this,"reducedMotion",window.matchMedia("(prefers-reduced-motion: reduce)").matches);k(this,"autorotateOverride",null);k(this,"idleRotateResumeTimer",0);k(this,"currentIdleRotateSpeed",.35);k(this,"introInProgress",null);k(this,"onUserInteraction",()=>{this.autoRotate&&(this.cameraController.setAutoRotate(!1,this.currentIdleRotateSpeed),this.scheduleIdleResume(1800))});k(this,"onFrame",()=>{const e=performance.now();this.cameraController.update(e),this.splatRenderer.setInteriorCameraPosition(this.camera.position),this.splatRenderer.update(),this.annotationManager.update(e,this.container.clientWidth,this.container.clientHeight),this.splatRenderer.render()});k(this,"onResize",()=>{this.scheduleResizeSync()});var s,o;this.container=e,this.ui=t,this.autorotateOverride=n.autorotateOverride??null,this.webglRenderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.webglRenderer.setSize(e.clientWidth,e.clientHeight),this.webglRenderer.setAnimationLoop(this.onFrame),this.webglRenderer.outputColorSpace=Dt,e.appendChild(this.webglRenderer.domElement),this.cameraController=new iA(this.camera,this.webglRenderer.domElement),this.sceneManager=new pA(this.splatRenderer,{onLoading:a=>{this.ui.setLoading(!0,a)},onReady:a=>{this.ui.configureToolbar(a),this.ui.setSceneTitle(a.title)},onItemsChanged:a=>{const l=a.find(c=>c.active);this.annotationManager.setActiveAssetId((l==null?void 0:l.id)??null),this.ui.setSplatOptions(a,c=>{this.enqueueSplatSelection(c)})}}),this.inputBindings=new JS({onReset:()=>this.resetView(),onToggleAutorotate:()=>this.toggleAutorotate()}),this.annotationManager=new a0({host:this.ui.getAnnotationHostElement(),camera:this.camera,renderer:this.webglRenderer,scene:this.scene,cameraController:this.cameraController}),this.annotationManager.onEditorStateChange(a=>{this.ui.setAnnotationEditorState(a)}),this.ui.configureAnnotationEditor({onToggleEdit:a=>this.annotationManager.setEditMode(a),onSelectPin:a=>this.annotationManager.selectAnnotation(a),onAddPin:()=>this.annotationManager.addPin(),onDeleteSelected:()=>this.annotationManager.deleteSelected(),onUpdateSelected:a=>this.annotationManager.updateSelected(a),onNudge:(a,l)=>this.annotationManager.nudgeSelected(a,l),onSave:()=>{this.saveAnnotations()}}),this.scene.background=new et("#ffffff");const i=new e0("#ffffff",.8);this.scene.add(i),this.resizeObserver=new ResizeObserver(()=>this.scheduleResizeSync()),this.resizeObserver.observe(this.container),window.addEventListener("resize",this.onResize),(s=window.visualViewport)==null||s.addEventListener("resize",this.onResize),(o=window.visualViewport)==null||o.addEventListener("scroll",this.onResize),this.bindIdleInteraction()}async init(e){await this.splatRenderer.initialize({scene:this.scene,camera:this.camera,renderer:this.webglRenderer,rootElement:this.container}),this.inputBindings.bind(),await this.loadScene(e)}async loadScene(e){if(!this.disposed)try{this.annotationManager.clear(),this.ui.clearError();const t=await this.sceneManager.loadScene(e),n=await this.annotationPersistence.load(e),i=n?{...t,annotations:n}:t;this.activeConfig=i,this.applySceneConfig(i),this.activeSceneId=e;const s=this.sceneManager.getInteriorViewConfig();s&&this.ui.configureInteriorDebug(s,o=>{this.sceneManager.updateInteriorViewConfig(o)}),this.ui.setLoading(!1),await this.playIntro(),this.annotationManager.configure(i)}catch(t){this.ui.setLoading(!1);const n=t instanceof Error?t.message:"Unknown error while loading scene.",i=typeof t=="object"&&t!==null&&"details"in t&&Array.isArray(t.details)?t.details??[]:[];this.ui.setError(n,i)}}resetView(){const e=this.sceneManager.config;e&&this.cameraController.setHomeImmediately(this.fittedHome??e.camera.home)}toggleAutorotate(){const e=this.sceneManager.config;return!e||!e.ui.enableAutorotate?this.autoRotate:(this.autoRotate=!this.autoRotate,this.cameraController.setAutoRotate(this.autoRotate,this.currentIdleRotateSpeed),this.autoRotate)}setAutoRotateExplicit(e){this.autoRotate=e,this.cameraController.setAutoRotate(e,this.currentIdleRotateSpeed)}setFullscreen(e){var n;const t=this.container.parentElement??this.container;if(e){(n=t.requestFullscreen)==null||n.call(t);return}document.exitFullscreen()}isFullscreen(){return document.fullscreenElement!==null}getActiveSceneId(){return this.activeSceneId}dispose(){var t,n;if(this.disposed)return;this.disposed=!0,this.activeConfig=null,this.fittedHome=null,this.inputBindings.dispose(),this.clearIdleResumeTimer();const e=this.webglRenderer.domElement;e.removeEventListener("pointerdown",this.onUserInteraction),e.removeEventListener("wheel",this.onUserInteraction),e.removeEventListener("touchstart",this.onUserInteraction),this.particleIntroController.dispose(),this.annotationManager.dispose(),this.sceneManager.dispose(),this.cameraController.dispose(),this.webglRenderer.dispose(),this.webglRenderer.setAnimationLoop(null),this.resizeObserver.disconnect(),window.removeEventListener("resize",this.onResize),(t=window.visualViewport)==null||t.removeEventListener("resize",this.onResize),(n=window.visualViewport)==null||n.removeEventListener("scroll",this.onResize)}applySceneConfig(e){this.cameraController.applyLimits(e.camera.limits,e.ui.enablePan),this.fitCameraToContent(e),this.currentIdleRotateSpeed=e.presentation.idleRotateSpeed;const t=this.autorotateOverride??(e.ui.autorotateDefaultOn&&e.ui.enableAutorotate);this.autoRotate=t,this.cameraController.setAutoRotate(!1,this.currentIdleRotateSpeed)}enqueueSplatSelection(e){this.queuedSelectionId=e,!this.processingSelection&&(this.processingSelection=!0,this.processQueuedSelections())}async processQueuedSelections(){for(;this.queuedSelectionId;){const e=this.queuedSelectionId;this.queuedSelectionId=null;try{await this.sceneManager.activateSplat(e,()=>{this.activeConfig&&this.fitCameraToContent(this.activeConfig)})}catch{}}this.processingSelection=!1}fitCameraToContent(e){const t=this.splatRenderer.getFitData();if(!t){this.cameraController.setHomeImmediately(e.camera.home),this.fittedHome=e.camera.home;return}const n={...e.camera.limits,maxDistance:Math.max(e.camera.limits.maxDistance,t.radius*8)};this.cameraController.applyLimits(n,e.ui.enablePan);const i=new w(...e.camera.home.position).sub(new w(...e.camera.home.target)),s=this.cameraController.frameTarget(t.center,t.size,t.radius,e.camera.home.fov,n,i);this.cameraController.applyLimits({...n,maxDistance:Math.max(n.maxDistance,s*2.5)},e.ui.enablePan),this.fittedHome=this.cameraController.getCurrentHome()}async playIntro(){if(this.introInProgress)return this.introInProgress;this.introInProgress=this.runIntroSequence();try{await this.introInProgress}finally{this.introInProgress=null}}async runIntroSequence(){if(!this.activeConfig)return;this.cameraController.setAutoRotate(!1,this.currentIdleRotateSpeed),await this.sceneManager.resetActiveRevealStart();const e=this.sceneManager.getActiveHandle(),t=this.activeConfig.reveal,n=this.getRevealDurationMs(t);let i=[],s=null,o=0;if(e&&!this.reducedMotion&&t.particleIntro.durationMs>0&&t.particleIntro.particleCount>0){const d=this.splatRenderer.getSplatSampleCloud(e.id,{maxSamples:t.particleIntro.particleCount,randomize:!0,space:"local",includeColors:!0});i=d.points,s=d.colors??null,i.length>0&&(o=Math.max(120,t.particleIntro.durationMs))}const a=[],l=new Set,c=e&&this.activeConfig?this.computeIntroOrientation(e,this.activeConfig):null;e&&c&&(e.object3D.quaternion.copy(c.start),a.push(this.animateIntroSpin(e,c.end,c.spinDegrees,n+o)),l.add(e.id)),e&&o>0&&await this.particleIntroController.play(i,e.boundsY,{...t.particleIntro,durationMs:o},this.reducedMotion,{anchor:e.object3D,sourceColors:s}),await this.sceneManager.revealActiveScene({reducedMotion:this.reducedMotion,beforeRevealIn:({handle:d,reveal:f})=>{const h=this.getRevealDurationMs(f);if(!l.has(d.id)){const g=this.computeIntroOrientation(d,this.activeConfig);g&&(d.object3D.quaternion.copy(g.start),a.push(this.animateIntroSpin(d,g.end,g.spinDegrees,h)),l.add(d.id))}this.particleIntroController.cover(this.reducedMotion?Math.max(280,Math.floor(h*.4)):h)}}),a.length>0&&await Promise.allSettled(a);const u=this.shouldEnableAutoRotateAfterIntro(this.activeConfig);if(this.autoRotate=u,u){const d=this.activeConfig.presentation.introAutoRotateDelayMs;d<=0?this.cameraController.setAutoRotate(!0,this.currentIdleRotateSpeed):this.scheduleIdleResume(d);return}this.cameraController.setAutoRotate(!1,this.currentIdleRotateSpeed)}async animateIntroSpin(e,t,n,i){const s=Math.max(200,i),o=new w(0,1,0),a=new it,l=u=>{a.setFromAxisAngle(o,Lt.degToRad(u)),e.object3D.quaternion.copy(t).multiply(a)};l(n);const c=performance.now();await new Promise(u=>{const d=f=>{const h=Math.min(1,(f-c)/s),g=Ts(h);if(l(n*(1-g)),h>=1){e.object3D.quaternion.copy(t),u();return}requestAnimationFrame(d)};requestAnimationFrame(d)})}computeIntroOrientation(e,t){const n=t.presentation.introSpinDegrees;if(Math.abs(n)<.001)return null;const i=t.assets.find(l=>l.id===e.id);if(!i)return null;const s=new it().setFromEuler(new is(Lt.degToRad(i.transform.rotation[0]),Lt.degToRad(i.transform.rotation[1]),Lt.degToRad(i.transform.rotation[2]))),o=new it().setFromAxisAngle(new w(0,1,0),Lt.degToRad(n));return{start:s.clone().multiply(o),end:s,spinDegrees:n}}getRevealDurationMs(e){return e.mode==="bottomSphere"?e.bottomSphere.durationMs:e.durationMs}shouldEnableAutoRotateAfterIntro(e){return e.ui.enableAutorotate?this.autorotateOverride!==null?this.autorotateOverride:e.presentation.mode==="embedHero"?!0:e.ui.autorotateDefaultOn:!1}scheduleResizeSync(){this.pendingResizeSync||this.disposed||(this.pendingResizeSync=!0,requestAnimationFrame(()=>{this.pendingResizeSync=!1,this.syncViewport()}))}syncViewport(){const e=this.container.clientWidth,t=this.container.clientHeight;e<=0||t<=0||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.webglRenderer.setSize(e,t),this.activeConfig&&this.fitCameraToContent(this.activeConfig))}bindIdleInteraction(){const e=this.webglRenderer.domElement;e.addEventListener("pointerdown",this.onUserInteraction,{passive:!0}),e.addEventListener("wheel",this.onUserInteraction,{passive:!0}),e.addEventListener("touchstart",this.onUserInteraction,{passive:!0})}scheduleIdleResume(e){this.clearIdleResumeTimer(),this.autoRotate&&(this.idleRotateResumeTimer=window.setTimeout(()=>{this.cameraController.setAutoRotate(!0,this.currentIdleRotateSpeed)},Math.max(0,e)))}clearIdleResumeTimer(){this.idleRotateResumeTimer&&(window.clearTimeout(this.idleRotateResumeTimer),this.idleRotateResumeTimer=0)}async saveAnnotations(){if(!this.activeConfig)return;const e=this.annotationManager.exportAnnotations();if(!e)return;const t=await this.annotationPersistence.save(this.activeSceneId||"scene",e);if(t.ok){this.activeConfig={...this.activeConfig,annotations:e};return}const n=JSON.stringify({annotations:e},null,2),i=new Blob([n],{type:"application/json"}),s=URL.createObjectURL(i),o=document.createElement("a");o.href=s,o.download=`${this.activeSceneId||"scene"}-annotations.json`,o.click(),URL.revokeObjectURL(s),console.warn(`Annotation save fallback used: ${t.reason}`)}}function AA(){const r=document.querySelector("#app");if(!r)throw new Error("Missing #app root element.");const e=Ru(window.location.search);let t;const n=Tu(r,{onReset:()=>t.resetView(),onToggleAutorotate:()=>t.toggleAutorotate(),onToggleFullscreen:u=>t.setFullscreen(u),isFullscreen:()=>t.isFullscreen()},{embedMode:e.embed,controlsVisible:e.controlsVisible,replayButtonVisible:e.replayButtonVisible,onReplay:()=>{t.playIntro()}});t=new SA(n.getCanvasHostElement(),n,{embedMode:e.embed,autorotateOverride:e.autorotateOverride});const i=e.sceneId,s=(()=>{if(!document.referrer)return null;try{return new URL(document.referrer).origin}catch{return null}})(),o=e.parentOrigin??s,a=o,l=u=>{if(window.parent===window||!o)return;const d=o;window.parent.postMessage(u,d)},c=u=>{if(!u.data||typeof u.data!="object"||window.parent!==window&&!a||a&&u.origin!==a)return;const d=u.data;switch(d.type){case"viewer:playIntro":t.playIntro();break;case"viewer:setAutoRotate":typeof d.value=="boolean"&&t.setAutoRotateExplicit(d.value);break;case"viewer:reset":t.resetView();break}};window.addEventListener("message",c),(async()=>(await t.init(i),l({type:"viewer:ready",sceneId:t.getActiveSceneId()})))()}AA();
