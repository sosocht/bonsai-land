(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Js(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const mu=(i,t="#0a5c3e")=>`<path d="M0,0 C40,-90 150,-150 300,-120 C250,-45 130,-8 0,0Z" fill="${i}"/><path d="M0,0 C100,-48 200,-84 296,-118" stroke="${t}" stroke-width="4" fill="none" opacity=".55"/>`;function tr(i,t,e,n,s,r){const o=Js(r);let a="";for(let c=0;c<6;c++){const l=-80+c*30+o()*10;a+=`<g transform="rotate(${l.toFixed(0)}) scale(${(.8+o()*.45).toFixed(2)})">${mu(s[c%s.length])}</g>`}return`<g transform="translate(${i},${t}) rotate(${n}) scale(${e})"><g class="balance" style="animation-delay:${(o()*-5).toFixed(1)}s">${a}</g></g>`}function er(i,t,e,n,s,r,o=!1){const a=Js(r);let c=`<path d="M0,0 C20,-120 90,-210 210,-250" stroke="${s}" stroke-width="7" fill="none" stroke-linecap="round"/>`;for(let l=1;l<18;l++){const u=l/18,h=210*(1-Math.pow(1-u,2))*1.02,f=-250*u-(1-u)*6,d=46*(1-u*.7);for(const g of[-1,1])c+=`<ellipse cx="${(h+4).toFixed(1)}" cy="${f.toFixed(1)}" rx="${d.toFixed(1)}" ry="${(d*.2).toFixed(1)}" fill="${s}" transform="rotate(${(g*(48+a()*14)-18).toFixed(0)} ${h.toFixed(1)} ${f.toFixed(1)})"/>`}return`<g transform="translate(${i},${t}) rotate(${n}) scale(${o?-e:e},${e})"><g class="balance lent" style="animation-delay:${(a()*-6).toFixed(1)}s">${c}</g></g>`}function Vi(i,t,e,n){const s=Js(n);let r="",o="";for(let a=70+s()*40;a<900;a+=110+s()*50){r+=`<rect x="${i-t/2-3}" y="${a}" width="${t+6}" height="9" rx="4" fill="#2f9d57"/>`;for(const c of[-1,1]){const l=i+c*t*.5;o+=`<path d="M${l},${a} C${l+c*38},${a-24} ${l+c*100},${a-14} ${l+c*138},${a+16} C${l+c*96},${a+4} ${l+c*42},${a+6} ${l},${a}Z" fill="#8be36c"/>`}}return`<g class="balance tige" style="animation-delay:${(s()*-5).toFixed(1)}s" transform="rotate(${e} ${i} 900)"><rect x="${i-t/2}" y="-30" width="${t}" height="950" fill="#7fe07a"/><rect x="${i-t/2}" y="-30" width="${t*.3}" height="950" fill="#c4f59a" opacity=".75"/><rect x="${i+t*.25}" y="-30" width="${t*.25}" height="950" fill="#2f9d57" opacity=".6"/>${r}${o}</g>`}function dl(i,t,e,n,s="#ffd24d"){let r="";for(let o=0;o<5;o++)r+=`<ellipse cx="0" cy="-12" rx="7" ry="13" fill="${n}" transform="rotate(${o*72})"/>`;return`<g transform="translate(${i},${t}) scale(${e})">${r}<circle r="5" fill="${s}"/></g>`}function gu(i,t,e,n){const s=Js(n);let r=`<path d="M${i},-20 C${i+e},${t*.35} ${i-e*.6},${t*.7} ${i+e*.4},${t}" fill="none" stroke="#1a8a5c" stroke-width="${3+s()*3}" stroke-linecap="round"/>`;for(let o=1;o<=6;o++){const a=o/7,c=i+e*.4*a*a+(s()-.5)*6;r+=`<ellipse cx="${c.toFixed(1)}" cy="${(t*a).toFixed(1)}" rx="12" ry="6" fill="${["#3fd07a","#7de58a","#22b06a"][o%3]}" transform="rotate(${(s()*100-50).toFixed(0)} ${c.toFixed(1)} ${(t*a).toFixed(1)})"/>`}return s()>.45&&(r+=dl(i+e*.4,t+8,.75,s()>.5?"#ff8a2b":"#ff9fc0")),`<g class="liane" style="animation-delay:${(s()*-5).toFixed(1)}s">${r}</g>`}function xu(){const i=Js(11);let t="";for(let r=0;r<16;r++)t+=`<circle class="bulle" style="animation-delay:${(-i()*12).toFixed(1)}s;animation-duration:${(10+i()*10).toFixed(1)}s" cx="${(i()*1600).toFixed(0)}" cy="${(300+i()*600).toFixed(0)}" r="${(8+i()*26).toFixed(0)}" fill="#fff" opacity=".13"/>`;let e="";for(let r=0;r<12;r++)e+=gu(40+r*140+(i()-.5)*60,90+i()*260,(i()-.5)*80,70+r);let n="";for(let r=0;r<14;r++){const o=i()<.5;n+=dl(o?30+i()*380:1190+i()*380,770+i()*110,.9+i()*.7,i()>.45?"#ff8a2b":"#ff9fc0")}const s=document.createElement("div");return s.className="fond",s.innerHTML=`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="bleu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a3f9a"/><stop offset=".45" stop-color="#1a86d8"/><stop offset=".8" stop-color="#4fcfe6"/><stop offset="1" stop-color="#8fe9e2"/></linearGradient>
      <radialGradient id="lueur" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#dff8ff" stop-opacity=".85"/><stop offset="1" stop-color="#dff8ff" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#bleu)"/>
    <ellipse class="lueur" cx="1130" cy="190" rx="520" ry="360" fill="url(#lueur)"/>
    ${t}
    <g opacity=".5">${tr(120,760,1.3,8,["#0d6f9a","#117fa3"],3)}${tr(1490,770,1.3,-10,["#0d6f9a","#117fa3"],4)}</g>
    ${Vi(70,28,-2,5)}${Vi(150,20,2,6)}${Vi(240,16,-1,7)}
    ${Vi(1530,28,2,8)}${Vi(1450,20,-2,9)}${Vi(1360,16,1,10)}
    ${e}
    ${tr(-30,940,1.7,0,["#14a064","#2fc27a","#0e8456","#4ad98a"],12)}
    ${tr(1630,940,1.7,0,["#14a064","#2fc27a","#0e8456","#4ad98a"],13)}
    ${er(330,930,1.5,-8,"#1fb36e",21)}
    ${er(1270,930,1.5,8,"#1fb36e",22,!0)}
    ${er(520,940,1.1,-22,"#35cf80",23)}
    ${er(1090,940,1.1,22,"#35cf80",24,!0)}
    ${n}
  </svg>`,s}function _u({surCommencer:i,surParametres:t}){const e=document.createElement("main");return e.className="ecran couverture",e.appendChild(xu()),e.insertAdjacentHTML("beforeend",`
    <section class="bloc-titre">
      <h1 class="titre">
        <span class="mot">Bonsai</span>
        <span class="mot mot-land">Land<svg class="feuille-titre" viewBox="0 0 60 60" aria-hidden="true"><path d="M6,54 C4,20 28,2 56,4 C58,32 38,56 6,54Z" fill="#58d27a"/><path d="M6,54 C20,38 34,24 52,8" stroke="#0e5a3a" stroke-width="3" fill="none"/></svg></span>
      </h1>
      <p class="sous-titre">Rapetisse, grimpe et rentre à la maison !</p>
      <div class="boutons">
        <button class="bouton gros" id="btn-commencer">Commencer</button>
        <button class="bouton secondaire" id="btn-parametres">Paramètres</button>
      </div>
    </section>
    <p class="pied-couverture">Un jeu imaginé par Souheil</p>`),e.querySelector("#btn-commencer").addEventListener("click",i),e.querySelector("#btn-parametres").addEventListener("click",t),{element:e}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ra="170",vu=0,Ja=1,Mu=2,pl=1,yu=2,Xn=3,fi=0,rn=1,Oe=2,ui=0,ls=1,Nn=2,ja=3,Ka=4,Su=5,Ti=100,wu=101,bu=102,Eu=103,Tu=104,Au=200,Ru=201,Cu=202,Pu=203,Fo=204,Oo=205,Lu=206,Iu=207,Du=208,Uu=209,Nu=210,Fu=211,Ou=212,zu=213,Bu=214,zo=0,Bo=1,Ho=2,fs=3,Vo=4,Go=5,ko=6,Wo=7,ml=0,Hu=1,Vu=2,$n=0,Gu=1,ku=2,Wu=3,Xu=4,qu=5,$u=6,Yu=7,gl=300,ds=301,ps=302,Xo=303,qo=304,Wr=306,Xs=1e3,Ci=1001,$o=1002,bn=1003,Zu=1004,nr=1005,On=1006,jr=1007,Pi=1008,Jn=1009,xl=1010,_l=1011,qs=1012,Ca=1013,Ui=1014,zn=1015,js=1016,Pa=1017,La=1018,ms=1020,vl=35902,Ml=1021,yl=1022,In=1023,Sl=1024,wl=1025,us=1026,gs=1027,Ia=1028,Da=1029,bl=1030,Ua=1031,Na=1033,Dr=33776,Ur=33777,Nr=33778,Fr=33779,Yo=35840,Zo=35841,Jo=35842,jo=35843,Ko=36196,Qo=37492,ta=37496,ea=37808,na=37809,ia=37810,sa=37811,ra=37812,oa=37813,aa=37814,ca=37815,la=37816,ua=37817,ha=37818,fa=37819,da=37820,pa=37821,Or=36492,ma=36494,ga=36495,El=36283,xa=36284,_a=36285,va=36286,Ju=3200,ju=3201,Tl=0,Ku=1,li="",xn="srgb",vs="srgb-linear",Xr="linear",Ee="srgb",Gi=7680,Qa=519,Qu=512,th=513,eh=514,Al=515,nh=516,ih=517,sh=518,rh=519,Ma=35044,tc="300 es",qn=2e3,Hr=2001;class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kr=Math.PI/180,ya=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function oh(i,t){return(i%t+t)%t}function Qr(i,t,e){return(1-e)*i+e*t}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,n,s,r,o,a,c,l){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],b=s[1],E=s[4],_=s[7],F=s[2],T=s[5],P=s[8];return r[0]=o*v+a*b+c*F,r[3]=o*m+a*E+c*T,r[6]=o*p+a*_+c*P,r[1]=l*v+u*b+h*F,r[4]=l*m+u*E+h*T,r[7]=l*p+u*_+h*P,r[2]=f*v+d*b+g*F,r[5]=f*m+d*E+g*T,r[8]=f*p+d*_+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*l-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(to.makeScale(t,e)),this}rotate(t){return this.premultiply(to.makeRotation(-t)),this}translate(t,e){return this.premultiply(to.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const to=new he;function Rl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ah(){const i=Vr("canvas");return i.style.display="block",i}const ec={};function Os(i){i in ec||(ec[i]=!0,console.warn(i))}function ch(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function lh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xe={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ee&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ee&&(i.r=hs(i.r),i.g=hs(i.g),i.b=hs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?Xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const nc=[.64,.33,.3,.6,.15,.06],ic=[.2126,.7152,.0722],sc=[.3127,.329],rc=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oc=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xe.define({[vs]:{primaries:nc,whitePoint:sc,transfer:Xr,toXYZ:rc,fromXYZ:oc,luminanceCoefficients:ic,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:nc,whitePoint:sc,transfer:Ee,toXYZ:rc,fromXYZ:oc,luminanceCoefficients:ic,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}});let ki;class hh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=Vr("canvas")),ki.width=t.width,ki.height=t.height;const n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fh=0;class Cl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(eo(s[o].image)):r.push(eo(s[o]))}else r=eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dh=0;class on extends Ms{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=Ci,s=Ci,r=On,o=Pi,a=In,c=Jn,l=on.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Yn(),this.name="",this.source=new Cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xs:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xs:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=gl;on.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,s=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,_=(d+1)/2,F=(p+1)/2,T=(u+f)/4,P=(h+v)/4,R=(g+m)/4;return E>_&&E>F?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=P/n):_>F?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=R/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=P/r,s=R/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-v)/b,this.z=(f-u)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ph extends Ms{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends ph{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pl extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mh extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*v,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const F=Math.sqrt(E),T=Math.atan2(F,p*b);m=Math.sin(m*T)/F,a=Math.sin(a*T)/F}const _=a*b;if(c=c*m+f*_,l=l*m+d*_,u=u*m+g*_,h=h*m+v*_,m===1-a){const F=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=F,l*=F,u*=F,h*=F}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ac.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new L,ac=new zi;class Bi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(t.matrixWorld),this.union(ir)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),sr.subVectors(this.max,bs),Wi.subVectors(t.a,bs),Xi.subVectors(t.b,bs),qi.subVectors(t.c,bs),ni.subVectors(Xi,Wi),ii.subVectors(qi,Xi),mi.subVectors(Wi,qi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-mi.z,mi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,mi.z,0,-mi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-mi.y,mi.x,0];return!io(e,Wi,Xi,qi,sr)||(e=[1,0,0,0,1,0,0,0,1],!io(e,Wi,Xi,qi,sr))?!1:(rr.crossVectors(ni,ii),e=[rr.x,rr.y,rr.z],io(e,Wi,Xi,qi,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new L,new L,new L,new L,new L,new L,new L,new L],Cn=new L,ir=new Bi,Wi=new L,Xi=new L,qi=new L,ni=new L,ii=new L,mi=new L,bs=new L,sr=new L,rr=new L,gi=new L;function io(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const gh=new Bi,Es=new L,so=new L;class ys{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(so)),this.expandByPoint(Es.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new L,ro=new L,or=new L,si=new L,oo=new L,ar=new L,ao=new L;class Ll{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ro.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),si.copy(this.origin).sub(ro);const r=t.distanceTo(e)*.5,o=-this.direction.dot(or),a=si.dot(this.direction),c=-si.dot(or),l=si.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ro).addScaledVector(or,f),d}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){oo.subVectors(e,t),ar.subVectors(n,t),ao.crossVectors(oo,ar);let o=this.direction.dot(ao),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);const c=a*this.direction.dot(ar.crossVectors(si,ar));if(c<0)return null;const l=a*this.direction.dot(oo.cross(si));if(l<0||c+l>o)return null;const u=-a*si.dot(ao);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,o,a,c,l,u,h,f,d,g,v,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,v,m)}set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,v=l*h;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,v=l*h;e[0]=f-v*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+v,e[1]=c*h,e[5]=v*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+v,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xh,t,_h)}lookAt(t,e,n){const s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),ri.crossVectors(n,Mn),ri.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),ri.crossVectors(n,Mn)),ri.normalize(),cr.crossVectors(Mn,ri),s[0]=ri.x,s[4]=cr.x,s[8]=Mn.x,s[1]=ri.y,s[5]=cr.y,s[9]=Mn.y,s[2]=ri.z,s[6]=cr.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],b=n[3],E=n[7],_=n[11],F=n[15],T=s[0],P=s[4],R=s[8],S=s[12],M=s[1],U=s[5],q=s[9],Z=s[13],nt=s[2],J=s[6],j=s[10],ht=s[14],W=s[3],Mt=s[7],yt=s[11],zt=s[15];return r[0]=o*T+a*M+c*nt+l*W,r[4]=o*P+a*U+c*J+l*Mt,r[8]=o*R+a*q+c*j+l*yt,r[12]=o*S+a*Z+c*ht+l*zt,r[1]=u*T+h*M+f*nt+d*W,r[5]=u*P+h*U+f*J+d*Mt,r[9]=u*R+h*q+f*j+d*yt,r[13]=u*S+h*Z+f*ht+d*zt,r[2]=g*T+v*M+m*nt+p*W,r[6]=g*P+v*U+m*J+p*Mt,r[10]=g*R+v*q+m*j+p*yt,r[14]=g*S+v*Z+m*ht+p*zt,r[3]=b*T+E*M+_*nt+F*W,r[7]=b*P+E*U+_*J+F*Mt,r[11]=b*R+E*q+_*j+F*yt,r[15]=b*S+E*Z+_*ht+F*zt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*d-n*c*d)+v*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+e*l*h-e*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*f+s*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],b=h*m*l-v*f*l+v*c*d-a*m*d-h*c*p+a*f*p,E=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,_=u*v*l-g*h*l+g*a*d-o*v*d-u*a*p+o*h*p,F=g*h*c-u*v*c-g*a*f+o*v*f+u*a*m-o*h*m,T=e*b+n*E+s*_+r*F;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return t[0]=b*P,t[1]=(v*f*r-h*m*r-v*s*d+n*m*d+h*s*p-n*f*p)*P,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*P,t[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*d-n*c*d)*P,t[4]=E*P,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*P,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*P,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*d+e*c*d)*P,t[8]=_*P,t[9]=(g*h*r-u*v*r-g*n*d+e*v*d+u*n*p-e*h*p)*P,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*P,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*d-e*a*d)*P,t[12]=F*P,t[13]=(u*v*s-g*h*s+g*n*f-e*v*f-u*n*m+e*h*m)*P,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*P,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*f+e*a*f)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,v=o*u,m=o*h,p=a*h,b=c*l,E=c*u,_=c*h,F=n.x,T=n.y,P=n.z;return s[0]=(1-(v+p))*F,s[1]=(d+_)*F,s[2]=(g-E)*F,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(f+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+E)*P,s[9]=(m-b)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const l=1/r,u=1/o,h=1/a;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,e.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=qn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===qn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Hr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=qn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*l,d=(n+s)*u;let g,v;if(a===qn)g=(o+r)*h,v=-2*h;else if(a===Hr)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $i=new L,Pn=new _e,xh=new L(0,0,0),_h=new L(1,1,1),ri=new L,cr=new L,Mn=new L,cc=new _e,lc=new zi;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lc.setFromEuler(this),this.setFromQuaternion(lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vh=0;const uc=new L,Yi=new zi,Gn=new _e,lr=new L,Ts=new L,Mh=new L,yh=new zi,hc=new L(1,0,0),fc=new L(0,1,0),dc=new L(0,0,1),pc={type:"added"},Sh={type:"removed"},Zi={type:"childadded",child:null},co={type:"childremoved",child:null};class He extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new L,e=new mn,n=new zi,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new he}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(fc,t)}rotateZ(t){return this.rotateOnAxis(dc,t)}translateOnAxis(t,e){return uc.copy(t).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(fc,t)}translateZ(t){return this.translateOnAxis(dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ts,lr,this.up):Gn.lookAt(lr,Ts,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sh),co.child=t,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,Mh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,yh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}He.DEFAULT_UP=new L(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new L,kn=new L,lo=new L,Wn=new L,Ji=new L,ji=new L,mc=new L,uo=new L,ho=new L,fo=new L,po=new Re,mo=new Re,go=new Re;class Tn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),kn.subVectors(n,e),lo.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(kn),c=Ln.dot(lo),l=kn.dot(kn),u=kn.dot(lo),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return po.setScalar(0),mo.setScalar(0),go.setScalar(0),po.fromBufferAttribute(t,e),mo.fromBufferAttribute(t,n),go.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(po,r.x),o.addScaledVector(mo,r.y),o.addScaledVector(go,r.z),o}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),kn.subVectors(t,e),Ln.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),Ln.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ji.subVectors(s,n),ji.subVectors(r,n),uo.subVectors(t,n);const c=Ji.dot(uo),l=ji.dot(uo);if(c<=0&&l<=0)return e.copy(n);ho.subVectors(t,s);const u=Ji.dot(ho),h=ji.dot(ho);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ji,o);fo.subVectors(t,r);const d=Ji.dot(fo),g=ji.dot(fo);if(g>=0&&d<=g)return e.copy(r);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ji,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return mc.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(mc,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(Ji,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},ur={h:0,s:0,l:0};function xo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class oe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=oh(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xo(o,r,t+1/3),this.g=xo(o,r,t),this.b=xo(o,r,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const n=Dl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return xe.fromWorkingColorSpace(en.copy(this),t),Math.round(Ye(en.r*255,0,255))*65536+Math.round(Ye(en.g*255,0,255))*256+Math.round(Ye(en.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(en.copy(this),e);const n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=xn){xe.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,s=en.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(ur);const n=Qr(oi.h,ur.h,e),s=Qr(oi.s,ur.s,e),r=Qr(oi.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new oe;oe.NAMES=Dl;let wh=0;class Hi extends Ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Yn(),this.name="",this.blending=ls,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Oo,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==Oo&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ae extends Hi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new L,hr=new Ft;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ma,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ma&&(t.usage=this.usage),t}}class Ul extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nl extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bh=0;const En=new _e,_o=new He,Ki=new L,yn=new Bi,As=new Bi,qe=new L;class ze extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rl(t)?Nl:Ul)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return _o.lookAt(t),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ve(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];As.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(yn.min,As.min),yn.expandByPoint(qe),qe.addVectors(yn.max,As.max),yn.expandByPoint(qe)):(yn.expandByPoint(As.min),yn.expandByPoint(As.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)qe.fromBufferAttribute(a,l),c&&(Ki.fromBufferAttribute(t,l),qe.add(Ki)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new L,c[R]=new L;const l=new L,u=new L,h=new L,f=new Ft,d=new Ft,g=new Ft,v=new L,m=new L;function p(R,S,M){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(U),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(U),a[R].add(v),a[S].add(v),a[M].add(v),c[R].add(m),c[S].add(m),c[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,S=b.length;R<S;++R){const M=b[R],U=M.start,q=M.count;for(let Z=U,nt=U+q;Z<nt;Z+=3)p(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const E=new L,_=new L,F=new L,T=new L;function P(R){F.fromBufferAttribute(s,R),T.copy(F);const S=a[R];E.copy(S),E.sub(F.multiplyScalar(F.dot(S))).normalize(),_.crossVectors(T,S);const U=_.dot(c[R])<0?-1:1;o.setXYZW(R,E.x,E.y,E.z,U)}for(let R=0,S=b.length;R<S;++R){const M=b[R],U=M.start,q=M.count;for(let Z=U,nt=U+q;Z<nt;Z+=3)P(t.getX(Z+0)),P(t.getX(Z+1)),P(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new $e(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gc=new _e,xi=new Ll,fr=new ys,xc=new L,dr=new L,pr=new L,mr=new L,vo=new L,gr=new L,_c=new L,xr=new L;class B extends He{constructor(t=new ze,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(vo.fromBufferAttribute(h,t),o?gr.addScaledVector(vo,u):gr.addScaledVector(vo.sub(e),u))}e.add(gr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(fr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(fr,xc)===null||xi.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(gc.copy(r).invert(),xi.copy(t.ray).applyMatrix4(gc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=b,F=E;_<F;_+=3){const T=a.getX(_),P=a.getX(_+1),R=a.getX(_+2);s=_r(this,p,t,n,l,u,h,T,P,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const b=a.getX(m),E=a.getX(m+1),_=a.getX(m+2);s=_r(this,o,t,n,l,u,h,b,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=b,F=E;_<F;_+=3){const T=_,P=_+1,R=_+2;s=_r(this,p,t,n,l,u,h,T,P,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const b=m,E=m+1,_=m+2;s=_r(this,o,t,n,l,u,h,b,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Eh(i,t,e,n,s,r,o,a){let c;if(t.side===rn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===fi,a),c===null)return null;xr.copy(a),xr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(xr);return l<e.near||l>e.far?null:{distance:l,point:xr.clone(),object:i}}function _r(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,dr),i.getVertexPosition(c,pr),i.getVertexPosition(l,mr);const u=Eh(i,t,e,n,dr,pr,mr,_c);if(u){const h=new L;Tn.getBarycoord(_c,dr,pr,mr,h),s&&(u.uv=Tn.getInterpolatedAttribute(s,a,c,l,h,new Ft)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,a,c,l,h,new Ft)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};Tn.getNormal(dr,pr,mr,f.normal),u.face=f,u.barycoord=h}return u}class Xt extends ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(h,2));function g(v,m,p,b,E,_,F,T,P,R,S){const M=_/P,U=F/R,q=_/2,Z=F/2,nt=T/2,J=P+1,j=R+1;let ht=0,W=0;const Mt=new L;for(let yt=0;yt<j;yt++){const zt=yt*U-Z;for(let Bt=0;Bt<J;Bt++){const Gt=Bt*M-q;Mt[v]=Gt*b,Mt[m]=zt*E,Mt[p]=nt,l.push(Mt.x,Mt.y,Mt.z),Mt[v]=0,Mt[m]=0,Mt[p]=T>0?1:-1,u.push(Mt.x,Mt.y,Mt.z),h.push(Bt/P),h.push(1-yt/R),ht+=1}}for(let yt=0;yt<R;yt++)for(let zt=0;zt<P;zt++){const Bt=f+zt+J*yt,Gt=f+zt+J*(yt+1),ct=f+(zt+1)+J*(yt+1),K=f+(zt+1)+J*yt;c.push(Bt,Gt,K),c.push(Gt,ct,K),W+=6}a.addGroup(d,W,S),d+=W,f+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function pn(i){const t={};for(let e=0;e<i.length;e++){const n=xs(i[e]);for(const s in n)t[s]=n[s]}return t}function Th(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const Ah={clone:xs,merge:pn};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Hi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Th(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ol extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new L,vc=new Ft,Mc=new Ft;class Sn extends Ol{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,vc,Mc),e.subVectors(Mc,vc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qi=-90,ts=1;class Ph extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(Qi,ts,t,e);s.layers=this.layers,this.add(s);const r=new Sn(Qi,ts,t,e);r.layers=this.layers,this.add(r);const o=new Sn(Qi,ts,t,e);o.layers=this.layers,this.add(o);const a=new Sn(Qi,ts,t,e);a.layers=this.layers,this.add(a);const c=new Sn(Qi,ts,t,e);c.layers=this.layers,this.add(c);const l=new Sn(Qi,ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zl extends on{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lh extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:On}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xt(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ui});r.uniforms.tEquirect.value=e;const o=new B(s,r),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=On),new Ph(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Mo=new L,Ih=new L,Dh=new he;class Si{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Mo.subVectors(n,e).cross(Ih.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dh.getNormalMatrix(t),s=this.coplanarPoint(Mo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new ys,vr=new L;class Fa{constructor(t=new Si,e=new Si,n=new Si,s=new Si,r=new Si,o=new Si){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],b=s[13],E=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,m-d,_-p).normalize(),n[1].setComponents(c+r,f+l,m+d,_+p).normalize(),n[2].setComponents(c+o,f+u,m+g,_+b).normalize(),n[3].setComponents(c-o,f-u,m-g,_-b).normalize(),n[4].setComponents(c-a,f-h,m-v,_-E).normalize(),e===qn)n[5].setComponents(c+a,f+h,m+v,_+E).normalize();else if(e===Hr)n[5].setComponents(a,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(vr.x=s.normal.x>0?t.max.x:t.min.x,vr.y=s.normal.y>0?t.max.y:t.min.y,vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Uh(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Fe extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const b=p*f-o;for(let E=0;E<l;E++){const _=E*h-r;g.push(_,-b,0),v.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const E=b+l*p,_=b+l*(p+1),F=b+1+l*(p+1),T=b+1+l*p;d.push(E,_,T),d.push(_,F,T)}this.setIndex(d),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(v,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fh=`#ifdef USE_ALPHAHASH
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
#endif`,Oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vh=`#ifdef USE_AOMAP
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
#endif`,Gh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$h=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yh=`#ifdef USE_IRIDESCENCE
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
#endif`,Zh=`#ifdef USE_BUMPMAP
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rf=`#define PI 3.141592653589793
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
} // validated`,of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,af=`vec3 transformedNormal = objectNormal;
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
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
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
}`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Rf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Uf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Nf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
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
#endif`,Of=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xf=`#if defined( USE_POINTS_UV )
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
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
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
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ud=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Md=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sd=`#ifdef USE_SKINNING
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
#endif`,wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
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
#endif`,Ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ad=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Gd=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kd=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Wd=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Jd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jd=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Kd=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Qd=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,tp=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ep=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,np=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ip=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,sp=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,rp=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,op=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ap=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,cp=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,lp=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,up=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,hp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,fp=`uniform vec3 color;
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
}`,dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,pp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,fe={alphahash_fragment:Nh,alphahash_pars_fragment:Fh,alphamap_fragment:Oh,alphamap_pars_fragment:zh,alphatest_fragment:Bh,alphatest_pars_fragment:Hh,aomap_fragment:Vh,aomap_pars_fragment:Gh,batching_pars_vertex:kh,batching_vertex:Wh,begin_vertex:Xh,beginnormal_vertex:qh,bsdfs:$h,iridescence_fragment:Yh,bumpmap_pars_fragment:Zh,clipping_planes_fragment:Jh,clipping_planes_pars_fragment:jh,clipping_planes_pars_vertex:Kh,clipping_planes_vertex:Qh,color_fragment:tf,color_pars_fragment:ef,color_pars_vertex:nf,color_vertex:sf,common:rf,cube_uv_reflection_fragment:of,defaultnormal_vertex:af,displacementmap_pars_vertex:cf,displacementmap_vertex:lf,emissivemap_fragment:uf,emissivemap_pars_fragment:hf,colorspace_fragment:ff,colorspace_pars_fragment:df,envmap_fragment:pf,envmap_common_pars_fragment:mf,envmap_pars_fragment:gf,envmap_pars_vertex:xf,envmap_physical_pars_fragment:Rf,envmap_vertex:_f,fog_vertex:vf,fog_pars_vertex:Mf,fog_fragment:yf,fog_pars_fragment:Sf,gradientmap_pars_fragment:wf,lightmap_pars_fragment:bf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:Tf,lights_pars_begin:Af,lights_toon_fragment:Cf,lights_toon_pars_fragment:Pf,lights_phong_fragment:Lf,lights_phong_pars_fragment:If,lights_physical_fragment:Df,lights_physical_pars_fragment:Uf,lights_fragment_begin:Nf,lights_fragment_maps:Ff,lights_fragment_end:Of,logdepthbuf_fragment:zf,logdepthbuf_pars_fragment:Bf,logdepthbuf_pars_vertex:Hf,logdepthbuf_vertex:Vf,map_fragment:Gf,map_pars_fragment:kf,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:$f,morphinstance_vertex:Yf,morphcolor_vertex:Zf,morphnormal_vertex:Jf,morphtarget_pars_vertex:jf,morphtarget_vertex:Kf,normal_fragment_begin:Qf,normal_fragment_maps:td,normal_pars_fragment:ed,normal_pars_vertex:nd,normal_vertex:id,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ad,iridescence_pars_fragment:cd,opaque_fragment:ld,packing:ud,premultiplied_alpha_fragment:hd,project_vertex:fd,dithering_fragment:dd,dithering_pars_fragment:pd,roughnessmap_fragment:md,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:_d,shadowmap_vertex:vd,shadowmask_pars_fragment:Md,skinbase_vertex:yd,skinning_pars_vertex:Sd,skinning_vertex:wd,skinnormal_vertex:bd,specularmap_fragment:Ed,specularmap_pars_fragment:Td,tonemapping_fragment:Ad,tonemapping_pars_fragment:Rd,transmission_fragment:Cd,transmission_pars_fragment:Pd,uv_pars_fragment:Ld,uv_pars_vertex:Id,uv_vertex:Dd,worldpos_vertex:Ud,background_vert:Nd,background_frag:Fd,backgroundCube_vert:Od,backgroundCube_frag:zd,cube_vert:Bd,cube_frag:Hd,depth_vert:Vd,depth_frag:Gd,distanceRGBA_vert:kd,distanceRGBA_frag:Wd,equirect_vert:Xd,equirect_frag:qd,linedashed_vert:$d,linedashed_frag:Yd,meshbasic_vert:Zd,meshbasic_frag:Jd,meshlambert_vert:jd,meshlambert_frag:Kd,meshmatcap_vert:Qd,meshmatcap_frag:tp,meshnormal_vert:ep,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:sp,meshphysical_vert:rp,meshphysical_frag:op,meshtoon_vert:ap,meshtoon_frag:cp,points_vert:lp,points_frag:up,shadow_vert:hp,shadow_frag:fp,sprite_vert:dp,sprite_frag:pp},Nt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Un={basic:{uniforms:pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new oe(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:pn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:pn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new oe(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:pn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:pn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:pn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:pn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:pn([Nt.common,Nt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:pn([Nt.lights,Nt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Un.physical={uniforms:pn([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Mr={r:0,b:0,g:0},vi=new mn,mp=new _e;function gp(i,t,e,n,s,r,o){const a=new oe(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?e:t).get(E)),E}function v(b){let E=!1;const _=g(b);_===null?p(a,c):_&&_.isColor&&(p(_,1),E=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,E){const _=g(E);_&&(_.isCubeTexture||_.mapping===Wr)?(u===void 0&&(u=new B(new Xt(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:xs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vi.copy(E.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mp.makeRotationFromEuler(vi)),u.material.toneMapped=xe.getTransfer(_.colorSpace)!==Ee,(h!==_||f!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new B(new Fe(2,2),new di({name:"BackgroundMaterial",uniforms:xs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=xe.getTransfer(_.colorSpace)!==Ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,E){b.getRGB(Mr,Fl(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:v,addToRenderList:m}}function xp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,U,q,Z,nt){let J=!1;const j=h(Z,q,U);r!==j&&(r=j,l(r.object)),J=d(M,Z,q,nt),J&&g(M,Z,q,nt),nt!==null&&t.update(nt,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,_(M,U,q,Z),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,U,q){const Z=q.wireframe===!0;let nt=n[M.id];nt===void 0&&(nt={},n[M.id]=nt);let J=nt[U.id];J===void 0&&(J={},nt[U.id]=J);let j=J[Z];return j===void 0&&(j=f(c()),J[Z]=j),j}function f(M){const U=[],q=[],Z=[];for(let nt=0;nt<e;nt++)U[nt]=0,q[nt]=0,Z[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:Z,object:M,attributes:{},index:null}}function d(M,U,q,Z){const nt=r.attributes,J=U.attributes;let j=0;const ht=q.getAttributes();for(const W in ht)if(ht[W].location>=0){const yt=nt[W];let zt=J[W];if(zt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(zt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(zt=M.instanceColor)),yt===void 0||yt.attribute!==zt||zt&&yt.data!==zt.data)return!0;j++}return r.attributesNum!==j||r.index!==Z}function g(M,U,q,Z){const nt={},J=U.attributes;let j=0;const ht=q.getAttributes();for(const W in ht)if(ht[W].location>=0){let yt=J[W];yt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor));const zt={};zt.attribute=yt,yt&&yt.data&&(zt.data=yt.data),nt[W]=zt,j++}r.attributes=nt,r.attributesNum=j,r.index=Z}function v(){const M=r.newAttributes;for(let U=0,q=M.length;U<q;U++)M[U]=0}function m(M){p(M,0)}function p(M,U){const q=r.newAttributes,Z=r.enabledAttributes,nt=r.attributeDivisors;q[M]=1,Z[M]===0&&(i.enableVertexAttribArray(M),Z[M]=1),nt[M]!==U&&(i.vertexAttribDivisor(M,U),nt[M]=U)}function b(){const M=r.newAttributes,U=r.enabledAttributes;for(let q=0,Z=U.length;q<Z;q++)U[q]!==M[q]&&(i.disableVertexAttribArray(q),U[q]=0)}function E(M,U,q,Z,nt,J,j){j===!0?i.vertexAttribIPointer(M,U,q,nt,J):i.vertexAttribPointer(M,U,q,Z,nt,J)}function _(M,U,q,Z){v();const nt=Z.attributes,J=q.getAttributes(),j=U.defaultAttributeValues;for(const ht in J){const W=J[ht];if(W.location>=0){let Mt=nt[ht];if(Mt===void 0&&(ht==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),ht==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),Mt!==void 0){const yt=Mt.normalized,zt=Mt.itemSize,Bt=t.get(Mt);if(Bt===void 0)continue;const Gt=Bt.buffer,ct=Bt.type,K=Bt.bytesPerElement,ot=ct===i.INT||ct===i.UNSIGNED_INT||Mt.gpuType===Ca;if(Mt.isInterleavedBufferAttribute){const vt=Mt.data,Ct=vt.stride,Pt=Mt.offset;if(vt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<W.locationSize;Ot++)p(W.location+Ot,vt.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Ot=0;Ot<W.locationSize;Ot++)m(W.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let Ot=0;Ot<W.locationSize;Ot++)E(W.location+Ot,zt/W.locationSize,ct,yt,Ct*K,(Pt+zt/W.locationSize*Ot)*K,ot)}else{if(Mt.isInstancedBufferAttribute){for(let vt=0;vt<W.locationSize;vt++)p(W.location+vt,Mt.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let vt=0;vt<W.locationSize;vt++)m(W.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let vt=0;vt<W.locationSize;vt++)E(W.location+vt,zt/W.locationSize,ct,yt,zt*K,zt/W.locationSize*vt*K,ot)}}else if(j!==void 0){const yt=j[ht];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(W.location,yt);break;case 3:i.vertexAttrib3fv(W.location,yt);break;case 4:i.vertexAttrib4fv(W.location,yt);break;default:i.vertexAttrib1fv(W.location,yt)}}}}b()}function F(){R();for(const M in n){const U=n[M];for(const q in U){const Z=U[q];for(const nt in Z)u(Z[nt].object),delete Z[nt];delete U[q]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const U=n[M.id];for(const q in U){const Z=U[q];for(const nt in Z)u(Z[nt].object),delete Z[nt];delete U[q]}delete n[M.id]}function P(M){for(const U in n){const q=n[U];if(q[M.id]===void 0)continue;const Z=q[M.id];for(const nt in Z)u(Z[nt].object),delete Z[nt];delete q[M.id]}}function R(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function _p(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function vp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==In&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const R=P===js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Jn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==zn&&!R)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:_,vertexTextures:F,maxSamples:T}}function Mp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Si,a=new he,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const b=r?0:n,E=b*4;let _=p.clippingState||null;c.value=_,_=u(g,f,E,d);for(let F=0;F!==E;++F)_[F]=e[F];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,_=d;E!==v;++E,_+=4)o.copy(h[E]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function yp(i){let t=new WeakMap;function e(o,a){return a===Xo?o.mapping=ds:a===qo&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xo||a===qo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Lh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Hl extends Ol{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const as=4,yc=[.125,.215,.35,.446,.526,.582],Ai=20,yo=new Hl,Sc=new oe;let So=null,wo=0,bo=0,Eo=!1;const wi=(1+Math.sqrt(5))/2,es=1/wi,wc=[new L(-wi,es,0),new L(wi,es,0),new L(-es,0,wi),new L(es,0,wi),new L(0,wi,-es),new L(0,wi,es),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class bc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){So=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(So,wo,bo),this._renderer.xr.enabled=Eo,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),So=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:js,format:In,colorSpace:vs,depthBuffer:!1},s=Ec(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sp(r)),this._blurMaterial=wp(r,t,e)}return s}_compileMaterial(t){const e=new B(this._lodPlanes[0],t);this._renderer.compile(e,yo)}_sceneToCubeUV(t,e,n,s){const a=new Sn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Sc),u.toneMapping=$n,u.autoClear=!1;const d=new Ae({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new B(new Xt,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Sc),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const E=this._cubeSize;yr(s,b*E,p>2?E:0,E,E),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ds||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;yr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,yo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wc[(s-r-1)%wc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new B(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ai-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const p=[];let b=0;for(let P=0;P<Ai;++P){const R=P/v,S=Math.exp(-R*R/2);p.push(S),P===0?b+=S:P<m&&(b+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const _=this._sizeLods[s],F=3*_*(s>E-as?s-E+as:0),T=4*(this._cubeSize-_);yr(e,F,T,3*_,2*_),c.setRenderTarget(e),c.render(h,yo)}}function Sp(i){const t=[],e=[],n=[];let s=i;const r=i-as+1+yc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-as?c=yc[o-i+as-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*d),E=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let T=0;T<d;T++){const P=T%3*2/3-1,R=T>2?0:-1,S=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];b.set(S,v*g*T),E.set(f,m*g*T);const M=[T,T,T,T,T,T];_.set(M,p*g*T)}const F=new ze;F.setAttribute("position",new $e(b,v)),F.setAttribute("uv",new $e(E,m)),F.setAttribute("faceIndex",new $e(_,p)),t.push(F),s>as&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ec(i,t,e){const n=new Ni(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function wp(i,t,e){const n=new Float32Array(Ai),s=new L(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Tc(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ac(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Oa(){return`

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
	`}function bp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Xo||c===qo,u=c===ds||c===ps;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new bc(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new bc(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ep(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Os("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Tp(i,t,e,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const b=d.array;v=d.version;for(let E=0,_=b.length;E<_;E+=3){const F=b[E+0],T=b[E+1],P=b[E+2];f.push(F,T,T,P,P,F)}}else if(g!==void 0){const b=g.array;v=g.version;for(let E=0,_=b.length/3-1;E<_;E+=3){const F=E+0,T=E+1,P=E+2;f.push(F,T,T,P,P,F)}}else return;const m=new(Rl(f)?Nl:Ul)(f,1);m.version=v;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Ap(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*v[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Rp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cp(i,t,e){const n=new WeakMap,s=new Re;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let F=a.attributes.position.count*_,T=1;F>t.maxTextureSize&&(T=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const P=new Float32Array(F*T*4*h),R=new Pl(P,F,T,h);R.type=zn,R.needsUpdate=!0;const S=_*4;for(let U=0;U<h;U++){const q=p[U],Z=b[U],nt=E[U],J=F*T*4*U;for(let j=0;j<q.count;j++){const ht=j*S;g===!0&&(s.fromBufferAttribute(q,j),P[J+ht+0]=s.x,P[J+ht+1]=s.y,P[J+ht+2]=s.z,P[J+ht+3]=0),v===!0&&(s.fromBufferAttribute(Z,j),P[J+ht+4]=s.x,P[J+ht+5]=s.y,P[J+ht+6]=s.z,P[J+ht+7]=0),m===!0&&(s.fromBufferAttribute(nt,j),P[J+ht+8]=s.x,P[J+ht+9]=s.y,P[J+ht+10]=s.z,P[J+ht+11]=nt.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new Ft(F,T)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Pp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Vl extends on{constructor(t,e,n,s,r,o,a,c,l,u=us){if(u!==us&&u!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===us&&(n=Ui),n===void 0&&u===gs&&(n=ms),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=c!==void 0?c:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gl=new on,Rc=new Vl(1,1),kl=new Pl,Wl=new mh,Xl=new zl,Cc=[],Pc=[],Lc=new Float32Array(16),Ic=new Float32Array(9),Dc=new Float32Array(4);function Ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Cc[s];if(r===void 0&&(r=new Float32Array(s),Cc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qr(i,t){let e=Pc[t];e===void 0&&(e=new Int32Array(t),Pc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function Up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function Np(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(ke(e,n))return;Dc.set(n),i.uniformMatrix2fv(this.addr,!1,Dc),We(e,n)}}function Fp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(ke(e,n))return;Ic.set(n),i.uniformMatrix3fv(this.addr,!1,Ic),We(e,n)}}function Op(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(ke(e,n))return;Lc.set(n),i.uniformMatrix4fv(this.addr,!1,Lc),We(e,n)}}function zp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function Hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function Vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function Gp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function Wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function Xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function qp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rc.compareFunction=Al,r=Rc):r=Gl,e.setTexture2D(t||r,s)}function $p(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wl,s)}function Yp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xl,s)}function Zp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kl,s)}function Jp(i){switch(i){case 5126:return Lp;case 35664:return Ip;case 35665:return Dp;case 35666:return Up;case 35674:return Np;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return zp;case 35667:case 35671:return Bp;case 35668:case 35672:return Hp;case 35669:case 35673:return Vp;case 5125:return Gp;case 36294:return kp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return Zp}}function jp(i,t){i.uniform1fv(this.addr,t)}function Kp(i,t){const e=Ss(t,this.size,2);i.uniform2fv(this.addr,e)}function Qp(i,t){const e=Ss(t,this.size,3);i.uniform3fv(this.addr,e)}function t0(i,t){const e=Ss(t,this.size,4);i.uniform4fv(this.addr,e)}function e0(i,t){const e=Ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function n0(i,t){const e=Ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function i0(i,t){const e=Ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function s0(i,t){i.uniform1iv(this.addr,t)}function r0(i,t){i.uniform2iv(this.addr,t)}function o0(i,t){i.uniform3iv(this.addr,t)}function a0(i,t){i.uniform4iv(this.addr,t)}function c0(i,t){i.uniform1uiv(this.addr,t)}function l0(i,t){i.uniform2uiv(this.addr,t)}function u0(i,t){i.uniform3uiv(this.addr,t)}function h0(i,t){i.uniform4uiv(this.addr,t)}function f0(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Gl,r[o])}function d0(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wl,r[o])}function p0(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xl,r[o])}function m0(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||kl,r[o])}function g0(i){switch(i){case 5126:return jp;case 35664:return Kp;case 35665:return Qp;case 35666:return t0;case 35674:return e0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return s0;case 35667:case 35671:return r0;case 35668:case 35672:return o0;case 35669:case 35673:return a0;case 5125:return c0;case 36294:return l0;case 36295:return u0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return m0}}class x0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jp(e.type)}}class _0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g0(e.type)}}class v0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const To=/(\w+)(\])?(\[|\.)?/g;function Uc(i,t){i.seq.push(t),i.map[t.id]=t}function M0(i,t,e){const n=i.name,s=n.length;for(To.lastIndex=0;;){const r=To.exec(n),o=To.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Uc(e,l===void 0?new x0(a,i,t):new _0(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new v0(a),Uc(e,h)),e=h}}}class zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);M0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Nc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const y0=37297;let S0=0;function w0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Fc=new he;function b0(i){xe._getMatrix(Fc,xe.workingColorSpace,i);const t=`mat3( ${Fc.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case Xr:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Oc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+w0(i.getShaderSource(t),o)}else return s}function E0(i,t){const e=b0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function T0(i,t){let e;switch(t){case Gu:e="Linear";break;case ku:e="Reinhard";break;case Wu:e="Cineon";break;case Xu:e="ACESFilmic";break;case $u:e="AgX";break;case Yu:e="Neutral";break;case qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sr=new L;function A0(){xe.getLuminanceCoefficients(Sr);const i=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function C0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function P0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zs(i){return i!==""}function zc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(i){return i.replace(L0,D0)}const I0=new Map;function D0(i,t){let e=fe[t];if(e===void 0){const n=I0.get(t);if(n!==void 0)e=fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sa(e)}const U0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(i){return i.replace(U0,N0)}function N0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function F0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function O0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case ps:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function z0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:t="ENVMAP_MODE_REFRACTION";break}return t}function B0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ml:t="ENVMAP_BLENDING_MULTIPLY";break;case Hu:t="ENVMAP_BLENDING_MIX";break;case Vu:t="ENVMAP_BLENDING_ADD";break}return t}function H0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function V0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=F0(e),l=O0(e),u=z0(e),h=B0(e),f=H0(e),d=R0(e),g=C0(r),v=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(m=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?fe.tonemapping_pars_fragment:"",e.toneMapping!==$n?T0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,E0("linearToOutputTexel",e.outputColorSpace),A0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),o=Sa(o),o=zc(o,e),o=Bc(o,e),a=Sa(a),a=zc(a,e),a=Bc(a,e),o=Hc(o),a=Hc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+m+o,_=b+p+a,F=Nc(s,s.VERTEX_SHADER,E),T=Nc(s,s.FRAGMENT_SHADER,_);s.attachShader(v,F),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(U){if(i.debug.checkShaderErrors){const q=s.getProgramInfoLog(v).trim(),Z=s.getShaderInfoLog(F).trim(),nt=s.getShaderInfoLog(T).trim();let J=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,F,T);else{const ht=Oc(s,F,"vertex"),W=Oc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+q+`
`+ht+`
`+W)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Z===""||nt==="")&&(j=!1);j&&(U.diagnostics={runnable:J,programLog:q,vertexShader:{log:Z,prefix:m},fragmentShader:{log:nt,prefix:p}})}s.deleteShader(F),s.deleteShader(T),R=new zr(s,v),S=P0(s,v)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,y0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=T,this}let G0=0;class k0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new W0(t),e.set(t,n)),n}}class W0{constructor(t){this.id=G0++,this.code=t,this.usedTimes=0}}function X0(i,t,e,n,s,r,o){const a=new Il,c=new k0,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,U,q,Z){const nt=q.fog,J=Z.geometry,j=S.isMeshStandardMaterial?q.environment:null,ht=(S.isMeshStandardMaterial?e:t).get(S.envMap||j),W=ht&&ht.mapping===Wr?ht.image.height:null,Mt=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const yt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,zt=yt!==void 0?yt.length:0;let Bt=0;J.morphAttributes.position!==void 0&&(Bt=1),J.morphAttributes.normal!==void 0&&(Bt=2),J.morphAttributes.color!==void 0&&(Bt=3);let Gt,ct,K,ot;if(Mt){const pe=Un[Mt];Gt=pe.vertexShader,ct=pe.fragmentShader}else Gt=S.vertexShader,ct=S.fragmentShader,c.update(S),K=c.getVertexShaderID(S),ot=c.getFragmentShaderID(S);const vt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Pt=Z.isInstancedMesh===!0,Ot=Z.isBatchedMesh===!0,re=!!S.map,Kt=!!S.matcap,de=!!ht,X=!!S.aoMap,we=!!S.lightMap,ae=!!S.bumpMap,le=!!S.normalMap,qt=!!S.displacementMap,te=!!S.emissiveMap,jt=!!S.metalnessMap,D=!!S.roughnessMap,w=S.anisotropy>0,tt=S.clearcoat>0,_t=S.dispersion>0,z=S.iridescence>0,k=S.sheen>0,st=S.transmission>0,it=w&&!!S.anisotropyMap,gt=tt&&!!S.clearcoatMap,Lt=tt&&!!S.clearcoatNormalMap,ft=tt&&!!S.clearcoatRoughnessMap,St=z&&!!S.iridescenceMap,Dt=z&&!!S.iridescenceThicknessMap,Ht=k&&!!S.sheenColorMap,bt=k&&!!S.sheenRoughnessMap,Jt=!!S.specularMap,Yt=!!S.specularColorMap,Zt=!!S.specularIntensityMap,V=st&&!!S.transmissionMap,At=st&&!!S.thicknessMap,ut=!!S.gradientMap,mt=!!S.alphaMap,Et=S.alphaTest>0,lt=!!S.alphaHash,Qt=!!S.extensions;let ge=$n;S.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Le={shaderID:Mt,shaderType:S.type,shaderName:S.name,vertexShader:Gt,fragmentShader:ct,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:ot,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ot,batchingColor:Ot&&Z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&Z.instanceColor!==null,instancingMorph:Pt&&Z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:vs,alphaToCoverage:!!S.alphaToCoverage,map:re,matcap:Kt,envMap:de,envMapMode:de&&ht.mapping,envMapCubeUVHeight:W,aoMap:X,lightMap:we,bumpMap:ae,normalMap:le,displacementMap:f&&qt,emissiveMap:te,normalMapObjectSpace:le&&S.normalMapType===Ku,normalMapTangentSpace:le&&S.normalMapType===Tl,metalnessMap:jt,roughnessMap:D,anisotropy:w,anisotropyMap:it,clearcoat:tt,clearcoatMap:gt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:ft,dispersion:_t,iridescence:z,iridescenceMap:St,iridescenceThicknessMap:Dt,sheen:k,sheenColorMap:Ht,sheenRoughnessMap:bt,specularMap:Jt,specularColorMap:Yt,specularIntensityMap:Zt,transmission:st,transmissionMap:V,thicknessMap:At,gradientMap:ut,opaque:S.transparent===!1&&S.blending===ls&&S.alphaToCoverage===!1,alphaMap:mt,alphaTest:Et,alphaHash:lt,combine:S.combine,mapUv:re&&v(S.map.channel),aoMapUv:X&&v(S.aoMap.channel),lightMapUv:we&&v(S.lightMap.channel),bumpMapUv:ae&&v(S.bumpMap.channel),normalMapUv:le&&v(S.normalMap.channel),displacementMapUv:qt&&v(S.displacementMap.channel),emissiveMapUv:te&&v(S.emissiveMap.channel),metalnessMapUv:jt&&v(S.metalnessMap.channel),roughnessMapUv:D&&v(S.roughnessMap.channel),anisotropyMapUv:it&&v(S.anisotropyMap.channel),clearcoatMapUv:gt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:bt&&v(S.sheenRoughnessMap.channel),specularMapUv:Jt&&v(S.specularMap.channel),specularColorMapUv:Yt&&v(S.specularColorMap.channel),specularIntensityMapUv:Zt&&v(S.specularIntensityMap.channel),transmissionMapUv:V&&v(S.transmissionMap.channel),thicknessMapUv:At&&v(S.thicknessMap.channel),alphaMapUv:mt&&v(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(le||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!J.attributes.uv&&(re||mt),fog:!!nt,useFog:S.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ct,skinning:Z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:re&&S.map.isVideoTexture===!0&&xe.getTransfer(S.map.colorSpace)===Ee,decodeVideoTextureEmissive:te&&S.emissiveMap.isVideoTexture===!0&&xe.getTransfer(S.emissiveMap.colorSpace)===Ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Oe,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Qt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&S.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)M.push(U),M.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(b(M,S),E(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const M=g[S.type];let U;if(M){const q=Un[M];U=Ah.clone(q.uniforms)}else U=S.uniforms;return U}function F(S,M){let U;for(let q=0,Z=u.length;q<Z;q++){const nt=u[q];if(nt.cacheKey===M){U=nt,++U.usedTimes;break}}return U===void 0&&(U=new V0(i,M,S,r),u.push(U)),U}function T(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function P(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:F,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:R}}function q0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function a(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||$0),n.length>1&&n.sort(f||Gc),s.length>1&&s.sort(f||Gc)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Y0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new kc,i.set(n,[o])):s>=r.length?(o=new kc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Z0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new oe};break;case"SpotLight":e={position:new L,direction:new L,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function J0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let j0=0;function K0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Q0(i){const t=new Z0,e=J0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new _e,o=new _e;function a(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,b=0,E=0,_=0,F=0,T=0,P=0;l.sort(K0);for(let S=0,M=l.length;S<M;S++){const U=l[S],q=U.color,Z=U.intensity,nt=U.distance,J=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=q.r*Z,h+=q.g*Z,f+=q.b*Z;else if(U.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(U.sh.coefficients[j],Z);P++}else if(U.isDirectionalLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ht=U.shadow,W=e.get(U);W.shadowIntensity=ht.intensity,W.shadowBias=ht.bias,W.shadowNormalBias=ht.normalBias,W.shadowRadius=ht.radius,W.shadowMapSize=ht.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=U.shadow.matrix,b++}n.directional[d]=j,d++}else if(U.isSpotLight){const j=t.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(q).multiplyScalar(Z),j.distance=nt,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,n.spot[v]=j;const ht=U.shadow;if(U.map&&(n.spotLightMap[F]=U.map,F++,ht.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[v]=ht.matrix,U.castShadow){const W=e.get(U);W.shadowIntensity=ht.intensity,W.shadowBias=ht.bias,W.shadowNormalBias=ht.normalBias,W.shadowRadius=ht.radius,W.shadowMapSize=ht.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=J,_++}v++}else if(U.isRectAreaLight){const j=t.get(U);j.color.copy(q).multiplyScalar(Z),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=j,m++}else if(U.isPointLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),j.distance=U.distance,j.decay=U.decay,U.castShadow){const ht=U.shadow,W=e.get(U);W.shadowIntensity=ht.intensity,W.shadowBias=ht.bias,W.shadowNormalBias=ht.normalBias,W.shadowRadius=ht.radius,W.shadowMapSize=ht.mapSize,W.shadowCameraNear=ht.camera.near,W.shadowCameraFar=ht.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=U.shadow.matrix,E++}n.point[g]=j,g++}else if(U.isHemisphereLight){const j=t.get(U);j.skyColor.copy(U.color).multiplyScalar(Z),j.groundColor.copy(U.groundColor).multiplyScalar(Z),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==b||R.numPointShadows!==E||R.numSpotShadows!==_||R.numSpotMaps!==F||R.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=_+F-T,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,R.directionalLength=d,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=b,R.numPointShadows=E,R.numSpotShadows=_,R.numSpotMaps=F,R.numLightProbes=P,n.version=j0++)}function c(l,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const E=l[p];if(E.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(E.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Wc(i){const t=new Q0(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function tm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Wc(i),t.set(s,[a])):r>=o.length?(a=new Wc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class em extends Hi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nm extends Hi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sm=`uniform sampler2D shadow_pass;
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
}`;function rm(i,t,e){let n=new Fa;const s=new Ft,r=new Ft,o=new Re,a=new em({depthPacking:ju}),c=new nm,l={},u=e.maxTextureSize,h={[fi]:rn,[rn]:fi,[Oe]:Oe},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:im,fragmentShader:sm}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new B(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let p=this.type;this.render=function(T,P,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),q=i.state;q.setBlending(ui),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Z=p!==Xn&&this.type===Xn,nt=p===Xn&&this.type!==Xn;for(let J=0,j=T.length;J<j;J++){const ht=T[J],W=ht.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Mt=W.getFrameExtents();if(s.multiply(Mt),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Mt.x),s.x=r.x*Mt.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Mt.y),s.y=r.y*Mt.y,W.mapSize.y=r.y)),W.map===null||Z===!0||nt===!0){const zt=this.type!==Xn?{minFilter:bn,magFilter:bn}:{};W.map!==null&&W.map.dispose(),W.map=new Ni(s.x,s.y,zt),W.map.texture.name=ht.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const yt=W.getViewportCount();for(let zt=0;zt<yt;zt++){const Bt=W.getViewport(zt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),q.viewport(o),W.updateMatrices(ht,zt),n=W.getFrustum(),_(P,R,W.camera,ht,this.type)}W.isPointLightShadow!==!0&&this.type===Xn&&b(W,R),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,U)};function b(T,P){const R=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ni(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,R,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,R,d,v,null)}function E(T,P,R,S){let M=null;const U=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)M=U;else if(M=R.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const q=M.uuid,Z=P.uuid;let nt=l[q];nt===void 0&&(nt={},l[q]=nt);let J=nt[Z];J===void 0&&(J=M.clone(),nt[Z]=J,P.addEventListener("dispose",F)),M=J}if(M.visible=P.visible,M.wireframe=P.wireframe,S===Xn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:h[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=i.properties.get(M);q.light=R}return M}function _(T,P,R,S,M){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const Z=t.update(T),nt=T.material;if(Array.isArray(nt)){const J=Z.groups;for(let j=0,ht=J.length;j<ht;j++){const W=J[j],Mt=nt[W.materialIndex];if(Mt&&Mt.visible){const yt=E(T,Mt,S,M);T.onBeforeShadow(i,T,P,R,Z,yt,W),i.renderBufferDirect(R,null,Z,yt,T,W),T.onAfterShadow(i,T,P,R,Z,yt,W)}}}else if(nt.visible){const J=E(T,nt,S,M);T.onBeforeShadow(i,T,P,R,Z,J,null),i.renderBufferDirect(R,null,Z,J,T,null),T.onAfterShadow(i,T,P,R,Z,J,null)}}const q=T.children;for(let Z=0,nt=q.length;Z<nt;Z++)_(q[Z],P,R,S,M)}function F(T){T.target.removeEventListener("dispose",F);for(const R in l){const S=l[R],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const om={[zo]:Bo,[Ho]:ko,[Vo]:Wo,[fs]:Go,[Bo]:zo,[ko]:Ho,[Wo]:Vo,[Go]:fs};function am(i,t){function e(){let V=!1;const At=new Re;let ut=null;const mt=new Re(0,0,0,0);return{setMask:function(Et){ut!==Et&&!V&&(i.colorMask(Et,Et,Et,Et),ut=Et)},setLocked:function(Et){V=Et},setClear:function(Et,lt,Qt,ge,Le){Le===!0&&(Et*=ge,lt*=ge,Qt*=ge),At.set(Et,lt,Qt,ge),mt.equals(At)===!1&&(i.clearColor(Et,lt,Qt,ge),mt.copy(At))},reset:function(){V=!1,ut=null,mt.set(-1,0,0,0)}}}function n(){let V=!1,At=!1,ut=null,mt=null,Et=null;return{setReversed:function(lt){if(At!==lt){const Qt=t.get("EXT_clip_control");At?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT);const ge=Et;Et=null,this.setClear(ge)}At=lt},getReversed:function(){return At},setTest:function(lt){lt?vt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(lt){ut!==lt&&!V&&(i.depthMask(lt),ut=lt)},setFunc:function(lt){if(At&&(lt=om[lt]),mt!==lt){switch(lt){case zo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case Ho:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Go:i.depthFunc(i.GEQUAL);break;case ko:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=lt}},setLocked:function(lt){V=lt},setClear:function(lt){Et!==lt&&(At&&(lt=1-lt),i.clearDepth(lt),Et=lt)},reset:function(){V=!1,ut=null,mt=null,Et=null,At=!1}}}function s(){let V=!1,At=null,ut=null,mt=null,Et=null,lt=null,Qt=null,ge=null,Le=null;return{setTest:function(pe){V||(pe?vt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(pe){At!==pe&&!V&&(i.stencilMask(pe),At=pe)},setFunc:function(pe,Ze,Je){(ut!==pe||mt!==Ze||Et!==Je)&&(i.stencilFunc(pe,Ze,Je),ut=pe,mt=Ze,Et=Je)},setOp:function(pe,Ze,Je){(lt!==pe||Qt!==Ze||ge!==Je)&&(i.stencilOp(pe,Ze,Je),lt=pe,Qt=Ze,ge=Je)},setLocked:function(pe){V=pe},setClear:function(pe){Le!==pe&&(i.clearStencil(pe),Le=pe)},reset:function(){V=!1,At=null,ut=null,mt=null,Et=null,lt=null,Qt=null,ge=null,Le=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,b=null,E=null,_=null,F=null,T=null,P=new oe(0,0,0),R=0,S=!1,M=null,U=null,q=null,Z=null,nt=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ht=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=ht>=1):W.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=ht>=2);let Mt=null,yt={};const zt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Gt=new Re().fromArray(zt),ct=new Re().fromArray(Bt);function K(V,At,ut,mt){const Et=new Uint8Array(4),lt=i.createTexture();i.bindTexture(V,lt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<ut;Qt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(At+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return lt}const ot={};ot[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),vt(i.DEPTH_TEST),o.setFunc(fs),ae(!1),le(Ja),vt(i.CULL_FACE),X(ui);function vt(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function Ct(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function Pt(V,At){return h[V]!==At?(i.bindFramebuffer(V,At),h[V]=At,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=At),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=At),!0):!1}function Ot(V,At){let ut=d,mt=!1;if(V){ut=f.get(At),ut===void 0&&(ut=[],f.set(At,ut));const Et=V.textures;if(ut.length!==Et.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Qt=Et.length;lt<Qt;lt++)ut[lt]=i.COLOR_ATTACHMENT0+lt;ut.length=Et.length,mt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,mt=!0);mt&&i.drawBuffers(ut)}function re(V){return g!==V?(i.useProgram(V),g=V,!0):!1}const Kt={[Ti]:i.FUNC_ADD,[wu]:i.FUNC_SUBTRACT,[bu]:i.FUNC_REVERSE_SUBTRACT};Kt[Eu]=i.MIN,Kt[Tu]=i.MAX;const de={[Au]:i.ZERO,[Ru]:i.ONE,[Cu]:i.SRC_COLOR,[Fo]:i.SRC_ALPHA,[Nu]:i.SRC_ALPHA_SATURATE,[Du]:i.DST_COLOR,[Lu]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[Oo]:i.ONE_MINUS_SRC_ALPHA,[Uu]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Fu]:i.CONSTANT_COLOR,[Ou]:i.ONE_MINUS_CONSTANT_COLOR,[zu]:i.CONSTANT_ALPHA,[Bu]:i.ONE_MINUS_CONSTANT_ALPHA};function X(V,At,ut,mt,Et,lt,Qt,ge,Le,pe){if(V===ui){v===!0&&(Ct(i.BLEND),v=!1);return}if(v===!1&&(vt(i.BLEND),v=!0),V!==Su){if(V!==m||pe!==S){if((p!==Ti||_!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,_=Ti),pe)switch(V){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nn:i.blendFunc(i.ONE,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,E=null,F=null,T=null,P.set(0,0,0),R=0,m=V,S=pe}return}Et=Et||At,lt=lt||ut,Qt=Qt||mt,(At!==p||Et!==_)&&(i.blendEquationSeparate(Kt[At],Kt[Et]),p=At,_=Et),(ut!==b||mt!==E||lt!==F||Qt!==T)&&(i.blendFuncSeparate(de[ut],de[mt],de[lt],de[Qt]),b=ut,E=mt,F=lt,T=Qt),(ge.equals(P)===!1||Le!==R)&&(i.blendColor(ge.r,ge.g,ge.b,Le),P.copy(ge),R=Le),m=V,S=!1}function we(V,At){V.side===Oe?Ct(i.CULL_FACE):vt(i.CULL_FACE);let ut=V.side===rn;At&&(ut=!ut),ae(ut),V.blending===ls&&V.transparent===!1?X(ui):X(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const mt=V.stencilWrite;a.setTest(mt),mt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),te(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(V){M!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),M=V)}function le(V){V!==vu?(vt(i.CULL_FACE),V!==U&&(V===Ja?i.cullFace(i.BACK):V===Mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),U=V}function qt(V){V!==q&&(j&&i.lineWidth(V),q=V)}function te(V,At,ut){V?(vt(i.POLYGON_OFFSET_FILL),(Z!==At||nt!==ut)&&(i.polygonOffset(At,ut),Z=At,nt=ut)):Ct(i.POLYGON_OFFSET_FILL)}function jt(V){V?vt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function D(V){V===void 0&&(V=i.TEXTURE0+J-1),Mt!==V&&(i.activeTexture(V),Mt=V)}function w(V,At,ut){ut===void 0&&(Mt===null?ut=i.TEXTURE0+J-1:ut=Mt);let mt=yt[ut];mt===void 0&&(mt={type:void 0,texture:void 0},yt[ut]=mt),(mt.type!==V||mt.texture!==At)&&(Mt!==ut&&(i.activeTexture(ut),Mt=ut),i.bindTexture(V,At||ot[V]),mt.type=V,mt.texture=At)}function tt(){const V=yt[Mt];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function _t(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function k(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(V){Gt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Gt.copy(V))}function bt(V){ct.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ct.copy(V))}function Jt(V,At){let ut=l.get(At);ut===void 0&&(ut=new WeakMap,l.set(At,ut));let mt=ut.get(V);mt===void 0&&(mt=i.getUniformBlockIndex(At,V.name),ut.set(V,mt))}function Yt(V,At){const mt=l.get(At).get(V);c.get(At)!==mt&&(i.uniformBlockBinding(At,mt,V.__bindingPointIndex),c.set(At,mt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Mt=null,yt={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,b=null,E=null,_=null,F=null,T=null,P=new oe(0,0,0),R=0,S=!1,M=null,U=null,q=null,Z=null,nt=null,Gt.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:vt,disable:Ct,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:re,setBlending:X,setMaterial:we,setFlipSided:ae,setCullFace:le,setLineWidth:qt,setPolygonOffset:te,setScissorTest:jt,activeTexture:D,bindTexture:w,unbindTexture:tt,compressedTexImage2D:_t,compressedTexImage3D:z,texImage2D:St,texImage3D:Dt,updateUBOMapping:Jt,uniformBlockBinding:Yt,texStorage2D:Lt,texStorage3D:ft,texSubImage2D:k,texSubImage3D:st,compressedTexSubImage2D:it,compressedTexSubImage3D:gt,scissor:Ht,viewport:bt,reset:Zt}}function Xc(i,t,e,n){const s=cm(n);switch(e){case Ml:return i*t;case Sl:return i*t;case wl:return i*t*2;case Ia:return i*t/s.components*s.byteLength;case Da:return i*t/s.components*s.byteLength;case bl:return i*t*2/s.components*s.byteLength;case Ua:return i*t*2/s.components*s.byteLength;case yl:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case Na:return i*t*4/s.components*s.byteLength;case Dr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:case jo:return Math.max(i,16)*Math.max(t,8)/4;case Yo:case Jo:return Math.max(i,8)*Math.max(t,8)/2;case Ko:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Or:case ma:case ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case El:case xa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _a:case va:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cm(i){switch(i){case Jn:case xl:return{byteLength:1,components:1};case qs:case _l:case js:return{byteLength:2,components:1};case Pa:case La:return{byteLength:2,components:4};case Ui:case Ca:case zn:return{byteLength:4,components:1};case vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function lm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,w){return d?new OffscreenCanvas(D,w):Vr("canvas")}function v(D,w,tt){let _t=1;const z=jt(D);if((z.width>tt||z.height>tt)&&(_t=tt/Math.max(z.width,z.height)),_t<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const k=Math.floor(_t*z.width),st=Math.floor(_t*z.height);h===void 0&&(h=g(k,st));const it=w?g(k,st):h;return it.width=k,it.height=st,it.getContext("2d").drawImage(D,0,0,k,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+k+"x"+st+")."),it}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(D,w,tt,_t,z=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let k=w;if(w===i.RED&&(tt===i.FLOAT&&(k=i.R32F),tt===i.HALF_FLOAT&&(k=i.R16F),tt===i.UNSIGNED_BYTE&&(k=i.R8)),w===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(k=i.R8UI),tt===i.UNSIGNED_SHORT&&(k=i.R16UI),tt===i.UNSIGNED_INT&&(k=i.R32UI),tt===i.BYTE&&(k=i.R8I),tt===i.SHORT&&(k=i.R16I),tt===i.INT&&(k=i.R32I)),w===i.RG&&(tt===i.FLOAT&&(k=i.RG32F),tt===i.HALF_FLOAT&&(k=i.RG16F),tt===i.UNSIGNED_BYTE&&(k=i.RG8)),w===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(k=i.RG8UI),tt===i.UNSIGNED_SHORT&&(k=i.RG16UI),tt===i.UNSIGNED_INT&&(k=i.RG32UI),tt===i.BYTE&&(k=i.RG8I),tt===i.SHORT&&(k=i.RG16I),tt===i.INT&&(k=i.RG32I)),w===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(k=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(k=i.RGB16UI),tt===i.UNSIGNED_INT&&(k=i.RGB32UI),tt===i.BYTE&&(k=i.RGB8I),tt===i.SHORT&&(k=i.RGB16I),tt===i.INT&&(k=i.RGB32I)),w===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),tt===i.UNSIGNED_INT&&(k=i.RGBA32UI),tt===i.BYTE&&(k=i.RGBA8I),tt===i.SHORT&&(k=i.RGBA16I),tt===i.INT&&(k=i.RGBA32I)),w===i.RGB&&tt===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),w===i.RGBA){const st=z?Xr:xe.getTransfer(_t);tt===i.FLOAT&&(k=i.RGBA32F),tt===i.HALF_FLOAT&&(k=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(k=st===Ee?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function _(D,w){let tt;return D?w===null||w===Ui||w===ms?tt=i.DEPTH24_STENCIL8:w===zn?tt=i.DEPTH32F_STENCIL8:w===qs&&(tt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ui||w===ms?tt=i.DEPTH_COMPONENT24:w===zn?tt=i.DEPTH_COMPONENT32F:w===qs&&(tt=i.DEPTH_COMPONENT16),tt}function F(D,w){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==bn&&D.minFilter!==On?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function T(D){const w=D.target;w.removeEventListener("dispose",T),R(w),w.isVideoTexture&&u.delete(w)}function P(D){const w=D.target;w.removeEventListener("dispose",P),M(w)}function R(D){const w=n.get(D);if(w.__webglInit===void 0)return;const tt=D.source,_t=f.get(tt);if(_t){const z=_t[w.__cacheKey];z.usedTimes--,z.usedTimes===0&&S(D),Object.keys(_t).length===0&&f.delete(tt)}n.remove(D)}function S(D){const w=n.get(D);i.deleteTexture(w.__webglTexture);const tt=D.source,_t=f.get(tt);delete _t[w.__cacheKey],o.memory.textures--}function M(D){const w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(w.__webglFramebuffer[_t]))for(let z=0;z<w.__webglFramebuffer[_t].length;z++)i.deleteFramebuffer(w.__webglFramebuffer[_t][z]);else i.deleteFramebuffer(w.__webglFramebuffer[_t]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[_t])}else{if(Array.isArray(w.__webglFramebuffer))for(let _t=0;_t<w.__webglFramebuffer.length;_t++)i.deleteFramebuffer(w.__webglFramebuffer[_t]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let _t=0;_t<w.__webglColorRenderbuffer.length;_t++)w.__webglColorRenderbuffer[_t]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[_t]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const tt=D.textures;for(let _t=0,z=tt.length;_t<z;_t++){const k=n.get(tt[_t]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(tt[_t])}n.remove(D)}let U=0;function q(){U=0}function Z(){const D=U;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),U+=1,D}function nt(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function J(D,w){const tt=n.get(D);if(D.isVideoTexture&&qt(D),D.isRenderTargetTexture===!1&&D.version>0&&tt.__version!==D.version){const _t=D.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(tt,D,w);return}}e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+w)}function j(D,w){const tt=n.get(D);if(D.version>0&&tt.__version!==D.version){ct(tt,D,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+w)}function ht(D,w){const tt=n.get(D);if(D.version>0&&tt.__version!==D.version){ct(tt,D,w);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+w)}function W(D,w){const tt=n.get(D);if(D.version>0&&tt.__version!==D.version){K(tt,D,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+w)}const Mt={[Xs]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[$o]:i.MIRRORED_REPEAT},yt={[bn]:i.NEAREST,[Zu]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},zt={[Qu]:i.NEVER,[rh]:i.ALWAYS,[th]:i.LESS,[Al]:i.LEQUAL,[eh]:i.EQUAL,[sh]:i.GEQUAL,[nh]:i.GREATER,[ih]:i.NOTEQUAL};function Bt(D,w){if(w.type===zn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===On||w.magFilter===jr||w.magFilter===nr||w.magFilter===Pi||w.minFilter===On||w.minFilter===jr||w.minFilter===nr||w.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Mt[w.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Mt[w.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Mt[w.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,yt[w.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,yt[w.minFilter]),w.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,zt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===bn||w.minFilter!==nr&&w.minFilter!==Pi||w.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Gt(D,w){let tt=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",T));const _t=w.source;let z=f.get(_t);z===void 0&&(z={},f.set(_t,z));const k=nt(w);if(k!==D.__cacheKey){z[k]===void 0&&(z[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),z[k].usedTimes++;const st=z[D.__cacheKey];st!==void 0&&(z[D.__cacheKey].usedTimes--,st.usedTimes===0&&S(w)),D.__cacheKey=k,D.__webglTexture=z[k].texture}return tt}function ct(D,w,tt){let _t=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(_t=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(_t=i.TEXTURE_3D);const z=Gt(D,w),k=w.source;e.bindTexture(_t,D.__webglTexture,i.TEXTURE0+tt);const st=n.get(k);if(k.version!==st.__version||z===!0){e.activeTexture(i.TEXTURE0+tt);const it=xe.getPrimaries(xe.workingColorSpace),gt=w.colorSpace===li?null:xe.getPrimaries(w.colorSpace),Lt=w.colorSpace===li||it===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ft=v(w.image,!1,s.maxTextureSize);ft=te(w,ft);const St=r.convert(w.format,w.colorSpace),Dt=r.convert(w.type);let Ht=E(w.internalFormat,St,Dt,w.colorSpace,w.isVideoTexture);Bt(_t,w);let bt;const Jt=w.mipmaps,Yt=w.isVideoTexture!==!0,Zt=st.__version===void 0||z===!0,V=k.dataReady,At=F(w,ft);if(w.isDepthTexture)Ht=_(w.format===gs,w.type),Zt&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Ht,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Ht,ft.width,ft.height,0,St,Dt,null));else if(w.isDataTexture)if(Jt.length>0){Yt&&Zt&&e.texStorage2D(i.TEXTURE_2D,At,Ht,Jt[0].width,Jt[0].height);for(let ut=0,mt=Jt.length;ut<mt;ut++)bt=Jt[ut],Yt?V&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,bt.width,bt.height,St,Dt,bt.data):e.texImage2D(i.TEXTURE_2D,ut,Ht,bt.width,bt.height,0,St,Dt,bt.data);w.generateMipmaps=!1}else Yt?(Zt&&e.texStorage2D(i.TEXTURE_2D,At,Ht,ft.width,ft.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,St,Dt,ft.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,ft.width,ft.height,0,St,Dt,ft.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Yt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Ht,Jt[0].width,Jt[0].height,ft.depth);for(let ut=0,mt=Jt.length;ut<mt;ut++)if(bt=Jt[ut],w.format!==In)if(St!==null)if(Yt){if(V)if(w.layerUpdates.size>0){const Et=Xc(bt.width,bt.height,w.format,w.type);for(const lt of w.layerUpdates){const Qt=bt.data.subarray(lt*Et/bt.data.BYTES_PER_ELEMENT,(lt+1)*Et/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,lt,bt.width,bt.height,1,St,Qt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,bt.width,bt.height,ft.depth,St,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Ht,bt.width,bt.height,ft.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,bt.width,bt.height,ft.depth,St,Dt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Ht,bt.width,bt.height,ft.depth,0,St,Dt,bt.data)}else{Yt&&Zt&&e.texStorage2D(i.TEXTURE_2D,At,Ht,Jt[0].width,Jt[0].height);for(let ut=0,mt=Jt.length;ut<mt;ut++)bt=Jt[ut],w.format!==In?St!==null?Yt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Ht,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?V&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,bt.width,bt.height,St,Dt,bt.data):e.texImage2D(i.TEXTURE_2D,ut,Ht,bt.width,bt.height,0,St,Dt,bt.data)}else if(w.isDataArrayTexture)if(Yt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Ht,ft.width,ft.height,ft.depth),V)if(w.layerUpdates.size>0){const ut=Xc(ft.width,ft.height,w.format,w.type);for(const mt of w.layerUpdates){const Et=ft.data.subarray(mt*ut/ft.data.BYTES_PER_ELEMENT,(mt+1)*ut/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,ft.width,ft.height,1,St,Dt,Et)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,St,Dt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,ft.width,ft.height,ft.depth,0,St,Dt,ft.data);else if(w.isData3DTexture)Yt?(Zt&&e.texStorage3D(i.TEXTURE_3D,At,Ht,ft.width,ft.height,ft.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,St,Dt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,ft.width,ft.height,ft.depth,0,St,Dt,ft.data);else if(w.isFramebufferTexture){if(Zt)if(Yt)e.texStorage2D(i.TEXTURE_2D,At,Ht,ft.width,ft.height);else{let ut=ft.width,mt=ft.height;for(let Et=0;Et<At;Et++)e.texImage2D(i.TEXTURE_2D,Et,Ht,ut,mt,0,St,Dt,null),ut>>=1,mt>>=1}}else if(Jt.length>0){if(Yt&&Zt){const ut=jt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,At,Ht,ut.width,ut.height)}for(let ut=0,mt=Jt.length;ut<mt;ut++)bt=Jt[ut],Yt?V&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,St,Dt,bt):e.texImage2D(i.TEXTURE_2D,ut,Ht,St,Dt,bt);w.generateMipmaps=!1}else if(Yt){if(Zt){const ut=jt(ft);e.texStorage2D(i.TEXTURE_2D,At,Ht,ut.width,ut.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Dt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Ht,St,Dt,ft);m(w)&&p(_t),st.__version=k.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function K(D,w,tt){if(w.image.length!==6)return;const _t=Gt(D,w),z=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+tt);const k=n.get(z);if(z.version!==k.__version||_t===!0){e.activeTexture(i.TEXTURE0+tt);const st=xe.getPrimaries(xe.workingColorSpace),it=w.colorSpace===li?null:xe.getPrimaries(w.colorSpace),gt=w.colorSpace===li||st===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Lt=w.isCompressedTexture||w.image[0].isCompressedTexture,ft=w.image[0]&&w.image[0].isDataTexture,St=[];for(let mt=0;mt<6;mt++)!Lt&&!ft?St[mt]=v(w.image[mt],!0,s.maxCubemapSize):St[mt]=ft?w.image[mt].image:w.image[mt],St[mt]=te(w,St[mt]);const Dt=St[0],Ht=r.convert(w.format,w.colorSpace),bt=r.convert(w.type),Jt=E(w.internalFormat,Ht,bt,w.colorSpace),Yt=w.isVideoTexture!==!0,Zt=k.__version===void 0||_t===!0,V=z.dataReady;let At=F(w,Dt);Bt(i.TEXTURE_CUBE_MAP,w);let ut;if(Lt){Yt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Jt,Dt.width,Dt.height);for(let mt=0;mt<6;mt++){ut=St[mt].mipmaps;for(let Et=0;Et<ut.length;Et++){const lt=ut[Et];w.format!==In?Ht!==null?Yt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et,0,0,lt.width,lt.height,Ht,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et,Jt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et,0,0,lt.width,lt.height,Ht,bt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et,Jt,lt.width,lt.height,0,Ht,bt,lt.data)}}}else{if(ut=w.mipmaps,Yt&&Zt){ut.length>0&&At++;const mt=jt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Jt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(ft){Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,St[mt].width,St[mt].height,Ht,bt,St[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Jt,St[mt].width,St[mt].height,0,Ht,bt,St[mt].data);for(let Et=0;Et<ut.length;Et++){const Qt=ut[Et].image[mt].image;Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et+1,0,0,Qt.width,Qt.height,Ht,bt,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et+1,Jt,Qt.width,Qt.height,0,Ht,bt,Qt.data)}}else{Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ht,bt,St[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Jt,Ht,bt,St[mt]);for(let Et=0;Et<ut.length;Et++){const lt=ut[Et];Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et+1,0,0,Ht,bt,lt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et+1,Jt,Ht,bt,lt.image[mt])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),k.__version=z.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ot(D,w,tt,_t,z,k){const st=r.convert(tt.format,tt.colorSpace),it=r.convert(tt.type),gt=E(tt.internalFormat,st,it,tt.colorSpace),Lt=n.get(w),ft=n.get(tt);if(ft.__renderTarget=w,!Lt.__hasExternalTextures){const St=Math.max(1,w.width>>k),Dt=Math.max(1,w.height>>k);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?e.texImage3D(z,k,gt,St,Dt,w.depth,0,st,it,null):e.texImage2D(z,k,gt,St,Dt,0,st,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),le(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,z,ft.__webglTexture,0,ae(w)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_t,z,ft.__webglTexture,k),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(D,w,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,D),w.depthBuffer){const _t=w.depthTexture,z=_t&&_t.isDepthTexture?_t.type:null,k=_(w.stencilBuffer,z),st=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=ae(w);le(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,k,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,k,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,k,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,D)}else{const _t=w.textures;for(let z=0;z<_t.length;z++){const k=_t[z],st=r.convert(k.format,k.colorSpace),it=r.convert(k.type),gt=E(k.internalFormat,st,it,k.colorSpace),Lt=ae(w);tt&&le(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,gt,w.width,w.height):le(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,gt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,gt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=n.get(w.depthTexture);_t.__renderTarget=w,(!_t.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const z=_t.__webglTexture,k=ae(w);if(w.depthTexture.format===us)le(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(w.depthTexture.format===gs)le(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Pt(D){const w=n.get(D),tt=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const _t=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),_t){const z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,_t.removeEventListener("dispose",z)};_t.addEventListener("dispose",z),w.__depthDisposeCallback=z}w.__boundDepthTexture=_t}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Ct(w.__webglFramebuffer,D)}else if(tt){w.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[_t]),w.__webglDepthbuffer[_t]===void 0)w.__webglDepthbuffer[_t]=i.createRenderbuffer(),vt(w.__webglDepthbuffer[_t],D,!1);else{const z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=w.__webglDepthbuffer[_t];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,k)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),vt(w.__webglDepthbuffer,D,!1);else{const _t=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(D,w,tt){const _t=n.get(D);w!==void 0&&ot(_t.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&Pt(D)}function re(D){const w=D.texture,tt=n.get(D),_t=n.get(w);D.addEventListener("dispose",P);const z=D.textures,k=D.isWebGLCubeRenderTarget===!0,st=z.length>1;if(st||(_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture()),_t.__version=w.version,o.memory.textures++),k){tt.__webglFramebuffer=[];for(let it=0;it<6;it++)if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer[it]=[];for(let gt=0;gt<w.mipmaps.length;gt++)tt.__webglFramebuffer[it][gt]=i.createFramebuffer()}else tt.__webglFramebuffer[it]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer=[];for(let it=0;it<w.mipmaps.length;it++)tt.__webglFramebuffer[it]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(st)for(let it=0,gt=z.length;it<gt;it++){const Lt=n.get(z[it]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&le(D)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let it=0;it<z.length;it++){const gt=z[it];tt.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[it]);const Lt=r.convert(gt.format,gt.colorSpace),ft=r.convert(gt.type),St=E(gt.internalFormat,Lt,ft,gt.colorSpace,D.isXRRenderTarget===!0),Dt=ae(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,St,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,tt.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(tt.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,w);for(let it=0;it<6;it++)if(w.mipmaps&&w.mipmaps.length>0)for(let gt=0;gt<w.mipmaps.length;gt++)ot(tt.__webglFramebuffer[it][gt],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,gt);else ot(tt.__webglFramebuffer[it],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let it=0,gt=z.length;it<gt;it++){const Lt=z[it],ft=n.get(Lt);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),Bt(i.TEXTURE_2D,Lt),ot(tt.__webglFramebuffer,D,Lt,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,0),m(Lt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(it=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,_t.__webglTexture),Bt(it,w),w.mipmaps&&w.mipmaps.length>0)for(let gt=0;gt<w.mipmaps.length;gt++)ot(tt.__webglFramebuffer[gt],D,w,i.COLOR_ATTACHMENT0,it,gt);else ot(tt.__webglFramebuffer,D,w,i.COLOR_ATTACHMENT0,it,0);m(w)&&p(it),e.unbindTexture()}D.depthBuffer&&Pt(D)}function Kt(D){const w=D.textures;for(let tt=0,_t=w.length;tt<_t;tt++){const z=w[tt];if(m(z)){const k=b(D),st=n.get(z).__webglTexture;e.bindTexture(k,st),p(k),e.unbindTexture()}}}const de=[],X=[];function we(D){if(D.samples>0){if(le(D)===!1){const w=D.textures,tt=D.width,_t=D.height;let z=i.COLOR_BUFFER_BIT;const k=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(D),it=w.length>1;if(it)for(let gt=0;gt<w.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let gt=0;gt<w.length;gt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(z|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[gt]);const Lt=n.get(w[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,tt,_t,0,0,tt,_t,z,i.NEAREST),c===!0&&(de.length=0,X.length=0,de.push(i.COLOR_ATTACHMENT0+gt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(de.push(k),X.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let gt=0;gt<w.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,st.__webglColorRenderbuffer[gt]);const Lt=n.get(w[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const w=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ae(D){return Math.min(s.maxSamples,D.samples)}function le(D){const w=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qt(D){const w=o.render.frame;u.get(D)!==w&&(u.set(D,w),D.update())}function te(D,w){const tt=D.colorSpace,_t=D.format,z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||tt!==vs&&tt!==li&&(xe.getTransfer(tt)===Ee?(_t!==In||z!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),w}function jt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=q,this.setTexture2D=J,this.setTexture2DArray=j,this.setTexture3D=ht,this.setTextureCube=W,this.rebindTextures=Ot,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=le}function um(i,t){function e(n,s=li){let r;const o=xe.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xl)return i.BYTE;if(n===_l)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===js)return i.HALF_FLOAT;if(n===Ml)return i.ALPHA;if(n===yl)return i.RGB;if(n===In)return i.RGBA;if(n===Sl)return i.LUMINANCE;if(n===wl)return i.LUMINANCE_ALPHA;if(n===us)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===Ia)return i.RED;if(n===Da)return i.RED_INTEGER;if(n===bl)return i.RG;if(n===Ua)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===Dr||n===Ur||n===Nr||n===Fr)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===Zo||n===Jo||n===jo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===Qo||n===ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ko||n===Qo)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ua||n===ha||n===fa||n===da||n===pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ua)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Or||n===ma||n===ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Or)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===El||n===xa||n===_a||n===va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class hm extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ue extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fm={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const dm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new on,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new di({vertexShader:dm,fragmentShader:pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new B(new Fe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gm extends Ms{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const v=new mm,m=e.getContextAttributes();let p=null,b=null;const E=[],_=[],F=new Ft;let T=null;const P=new Sn;P.viewport=new Re;const R=new Sn;R.viewport=new Re;const S=[P,R],M=new hm;let U=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let K=E[ct];return K===void 0&&(K=new Ao,E[ct]=K),K.getTargetRaySpace()},this.getControllerGrip=function(ct){let K=E[ct];return K===void 0&&(K=new Ao,E[ct]=K),K.getGripSpace()},this.getHand=function(ct){let K=E[ct];return K===void 0&&(K=new Ao,E[ct]=K),K.getHandSpace()};function Z(ct){const K=_.indexOf(ct.inputSource);if(K===-1)return;const ot=E[K];ot!==void 0&&(ot.update(ct.inputSource,ct.frame,l||o),ot.dispatchEvent({type:ct.type,data:ct.inputSource}))}function nt(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",J);for(let ct=0;ct<E.length;ct++){const K=_[ct];K!==null&&(_[ct]=null,E[ct].disconnect(K))}U=null,q=null,v.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,b=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){r=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){a=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ct){l=ct},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ct){if(s=ct,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Ni(d.framebufferWidth,d.framebufferHeight,{format:In,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,ot=null,vt=null;m.depth&&(vt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?gs:us,ot=m.stencil?ms:Ui);const Ct={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Ni(f.textureWidth,f.textureHeight,{format:In,type:Jn,depthTexture:new Vl(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(ct){for(let K=0;K<ct.removed.length;K++){const ot=ct.removed[K],vt=_.indexOf(ot);vt>=0&&(_[vt]=null,E[vt].disconnect(ot))}for(let K=0;K<ct.added.length;K++){const ot=ct.added[K];let vt=_.indexOf(ot);if(vt===-1){for(let Pt=0;Pt<E.length;Pt++)if(Pt>=_.length){_.push(ot),vt=Pt;break}else if(_[Pt]===null){_[Pt]=ot,vt=Pt;break}if(vt===-1)break}const Ct=E[vt];Ct&&Ct.connect(ot)}}const j=new L,ht=new L;function W(ct,K,ot){j.setFromMatrixPosition(K.matrixWorld),ht.setFromMatrixPosition(ot.matrixWorld);const vt=j.distanceTo(ht),Ct=K.projectionMatrix.elements,Pt=ot.projectionMatrix.elements,Ot=Ct[14]/(Ct[10]-1),re=Ct[14]/(Ct[10]+1),Kt=(Ct[9]+1)/Ct[5],de=(Ct[9]-1)/Ct[5],X=(Ct[8]-1)/Ct[0],we=(Pt[8]+1)/Pt[0],ae=Ot*X,le=Ot*we,qt=vt/(-X+we),te=qt*-X;if(K.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(te),ct.translateZ(qt),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Ct[10]===-1)ct.projectionMatrix.copy(K.projectionMatrix),ct.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const jt=Ot+qt,D=re+qt,w=ae-te,tt=le+(vt-te),_t=Kt*re/D*jt,z=de*re/D*jt;ct.projectionMatrix.makePerspective(w,tt,_t,z,jt,D),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function Mt(ct,K){K===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(K.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(s===null)return;let K=ct.near,ot=ct.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(ot=v.depthFar)),M.near=R.near=P.near=K,M.far=R.far=P.far=ot,(U!==M.near||q!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,q=M.far),P.layers.mask=ct.layers.mask|2,R.layers.mask=ct.layers.mask|4,M.layers.mask=P.layers.mask|R.layers.mask;const vt=ct.parent,Ct=M.cameras;Mt(M,vt);for(let Pt=0;Pt<Ct.length;Pt++)Mt(Ct[Pt],vt);Ct.length===2?W(M,P,R):M.projectionMatrix.copy(P.projectionMatrix),yt(ct,M,vt)};function yt(ct,K,ot){ot===null?ct.matrix.copy(K.matrixWorld):(ct.matrix.copy(ot.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(K.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(K.projectionMatrix),ct.projectionMatrixInverse.copy(K.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=ya*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ct){c=ct,f!==null&&(f.fixedFoveation=ct),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ct)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let zt=null;function Bt(ct,K){if(u=K.getViewerPose(l||o),g=K,u!==null){const ot=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let vt=!1;ot.length!==M.cameras.length&&(M.cameras.length=0,vt=!0);for(let Pt=0;Pt<ot.length;Pt++){const Ot=ot[Pt];let re=null;if(d!==null)re=d.getViewport(Ot);else{const de=h.getViewSubImage(f,Ot);re=de.viewport,Pt===0&&(t.setRenderTargetTextures(b,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(b))}let Kt=S[Pt];Kt===void 0&&(Kt=new Sn,Kt.layers.enable(Pt),Kt.viewport=new Re,S[Pt]=Kt),Kt.matrix.fromArray(Ot.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Ot.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(re.x,re.y,re.width,re.height),Pt===0&&(M.matrix.copy(Kt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),vt===!0&&M.cameras.push(Kt)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Pt=h.getDepthInformation(ot[0]);Pt&&Pt.isValid&&Pt.texture&&v.init(t,Pt,s.renderState)}}for(let ot=0;ot<E.length;ot++){const vt=_[ot],Ct=E[ot];vt!==null&&Ct!==void 0&&Ct.update(vt,K,l||o)}zt&&zt(ct,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Gt=new Bl;Gt.setAnimationLoop(Bt),this.setAnimationLoop=function(ct){zt=ct},this.dispose=function(){}}}const Mi=new mn,xm=new _e;function _m(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,E,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),E=b.envMap,_=b.envMapRotation;E&&(m.envMap.value=E,Mi.copy(_),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(xm.makeRotationFromEuler(Mi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){const _=E.program;n.uniformBlockBinding(b,_)}function l(b,E){let _=s[b.id];_===void 0&&(g(b),_=u(b),s[b.id]=_,b.addEventListener("dispose",m));const F=E.program;n.updateUBOMapping(b,F);const T=t.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function u(b){const E=h();b.__bindingPointIndex=E;const _=i.createBuffer(),F=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,F,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,_),_}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const E=s[b.id],_=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,P=_.length;T<P;T++){const R=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,M=R.length;S<M;S++){const U=R[S];if(d(U,T,S,F)===!0){const q=U.__offset,Z=Array.isArray(U.value)?U.value:[U.value];let nt=0;for(let J=0;J<Z.length;J++){const j=Z[J],ht=v(j);typeof j=="number"||typeof j=="boolean"?(U.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,q+nt,U.__data)):j.isMatrix3?(U.__data[0]=j.elements[0],U.__data[1]=j.elements[1],U.__data[2]=j.elements[2],U.__data[3]=0,U.__data[4]=j.elements[3],U.__data[5]=j.elements[4],U.__data[6]=j.elements[5],U.__data[7]=0,U.__data[8]=j.elements[6],U.__data[9]=j.elements[7],U.__data[10]=j.elements[8],U.__data[11]=0):(j.toArray(U.__data,nt),nt+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,E,_,F){const T=b.value,P=E+"_"+_;if(F[P]===void 0)return typeof T=="number"||typeof T=="boolean"?F[P]=T:F[P]=T.clone(),!0;{const R=F[P];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return F[P]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(b){const E=b.uniforms;let _=0;const F=16;for(let P=0,R=E.length;P<R;P++){const S=Array.isArray(E[P])?E[P]:[E[P]];for(let M=0,U=S.length;M<U;M++){const q=S[M],Z=Array.isArray(q.value)?q.value:[q.value];for(let nt=0,J=Z.length;nt<J;nt++){const j=Z[nt],ht=v(j),W=_%F,Mt=W%ht.boundary,yt=W+Mt;_+=Mt,yt!==0&&F-yt<ht.storage&&(_+=F-yt),q.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=_,_+=ht.storage}}}const T=_%F;return T>0&&(_+=F-T),b.__size=_,b.__cache={},this}function v(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const _=o.indexOf(E.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Mm{constructor(t={}){const{canvas:e=ah(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=$n,this.toneMappingExposure=1;const _=this;let F=!1,T=0,P=0,R=null,S=-1,M=null;const U=new Re,q=new Re;let Z=null;const nt=new oe(0);let J=0,j=e.width,ht=e.height,W=1,Mt=null,yt=null;const zt=new Re(0,0,j,ht),Bt=new Re(0,0,j,ht);let Gt=!1;const ct=new Fa;let K=!1,ot=!1;const vt=new _e,Ct=new _e,Pt=new L,Ot=new Re,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function de(){return R===null?W:1}let X=n;function we(A,$){return e.getContext(A,$)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ra}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",lt,!1),X===null){const $="webgl2";if(X=we($,A),X===null)throw we($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ae,le,qt,te,jt,D,w,tt,_t,z,k,st,it,gt,Lt,ft,St,Dt,Ht,bt,Jt,Yt,Zt,V;function At(){ae=new Ep(X),ae.init(),Yt=new um(X,ae),le=new vp(X,ae,t,Yt),qt=new am(X,ae),le.reverseDepthBuffer&&f&&qt.buffers.depth.setReversed(!0),te=new Rp(X),jt=new q0,D=new lm(X,ae,qt,jt,le,Yt,te),w=new yp(_),tt=new bp(_),_t=new Uh(X),Zt=new xp(X,_t),z=new Tp(X,_t,te,Zt),k=new Pp(X,z,_t,te),Ht=new Cp(X,le,D),ft=new Mp(jt),st=new X0(_,w,tt,ae,le,Zt,ft),it=new _m(_,jt),gt=new Y0,Lt=new tm(ae),Dt=new gp(_,w,tt,qt,k,d,c),St=new rm(_,k,le),V=new vm(X,te,le,qt),bt=new _p(X,ae,te),Jt=new Ap(X,ae,te),te.programs=st.programs,_.capabilities=le,_.extensions=ae,_.properties=jt,_.renderLists=gt,_.shadowMap=St,_.state=qt,_.info=te}At();const ut=new gm(_,X);this.xr=ut,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(j,ht,!1))},this.getSize=function(A){return A.set(j,ht)},this.setSize=function(A,$,rt=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,ht=$,e.width=Math.floor(A*W),e.height=Math.floor($*W),rt===!0&&(e.style.width=A+"px",e.style.height=$+"px"),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(j*W,ht*W).floor()},this.setDrawingBufferSize=function(A,$,rt){j=A,ht=$,W=rt,e.width=Math.floor(A*rt),e.height=Math.floor($*rt),this.setViewport(0,0,A,$)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(zt)},this.setViewport=function(A,$,rt,Q){A.isVector4?zt.set(A.x,A.y,A.z,A.w):zt.set(A,$,rt,Q),qt.viewport(U.copy(zt).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Bt)},this.setScissor=function(A,$,rt,Q){A.isVector4?Bt.set(A.x,A.y,A.z,A.w):Bt.set(A,$,rt,Q),qt.scissor(q.copy(Bt).multiplyScalar(W).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(A){qt.setScissorTest(Gt=A)},this.setOpaqueSort=function(A){Mt=A},this.setTransparentSort=function(A){yt=A},this.getClearColor=function(A){return A.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(A=!0,$=!0,rt=!0){let Q=0;if(A){let Y=!1;if(R!==null){const wt=R.texture.format;Y=wt===Na||wt===Ua||wt===Da}if(Y){const wt=R.texture.type,Ut=wt===Jn||wt===Ui||wt===qs||wt===ms||wt===Pa||wt===La,Vt=Dt.getClearColor(),kt=Dt.getClearAlpha(),ie=Vt.r,y=Vt.g,C=Vt.b;Ut?(g[0]=ie,g[1]=y,g[2]=C,g[3]=kt,X.clearBufferuiv(X.COLOR,0,g)):(v[0]=ie,v[1]=y,v[2]=C,v[3]=kt,X.clearBufferiv(X.COLOR,0,v))}else Q|=X.COLOR_BUFFER_BIT}$&&(Q|=X.DEPTH_BUFFER_BIT),rt&&(Q|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),gt.dispose(),Lt.dispose(),jt.dispose(),w.dispose(),tt.dispose(),k.dispose(),Zt.dispose(),V.dispose(),st.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",cn),ut.removeEventListener("sessionend",je),ln.stop()};function mt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const A=te.autoReset,$=St.enabled,rt=St.autoUpdate,Q=St.needsUpdate,Y=St.type;At(),te.autoReset=A,St.enabled=$,St.autoUpdate=rt,St.needsUpdate=Q,St.type=Y}function lt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qt(A){const $=A.target;$.removeEventListener("dispose",Qt),ge($)}function ge(A){Le(A),jt.remove(A)}function Le(A){const $=jt.get(A).programs;$!==void 0&&($.forEach(function(rt){st.releaseProgram(rt)}),A.isShaderMaterial&&st.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,rt,Q,Y,wt){$===null&&($=re);const Ut=Y.isMesh&&Y.matrixWorld.determinant()<0,Vt=Ke(A,$,rt,Q,Y);qt.setMaterial(Q,Ut);let kt=rt.index,ie=1;if(Q.wireframe===!0){if(kt=z.getWireframeAttribute(rt),kt===void 0)return;ie=2}const y=rt.drawRange,C=rt.attributes.position;let O=y.start*ie,N=(y.start+y.count)*ie;wt!==null&&(O=Math.max(O,wt.start*ie),N=Math.min(N,(wt.start+wt.count)*ie)),kt!==null?(O=Math.max(O,0),N=Math.min(N,kt.count)):C!=null&&(O=Math.max(O,0),N=Math.min(N,C.count));const G=N-O;if(G<0||G===1/0)return;Zt.setup(Y,Q,Vt,rt,kt);let pt,at=bt;if(kt!==null&&(pt=_t.get(kt),at=Jt,at.setIndex(pt)),Y.isMesh)Q.wireframe===!0?(qt.setLineWidth(Q.wireframeLinewidth*de()),at.setMode(X.LINES)):at.setMode(X.TRIANGLES);else if(Y.isLine){let et=Q.linewidth;et===void 0&&(et=1),qt.setLineWidth(et*de()),Y.isLineSegments?at.setMode(X.LINES):Y.isLineLoop?at.setMode(X.LINE_LOOP):at.setMode(X.LINE_STRIP)}else Y.isPoints?at.setMode(X.POINTS):Y.isSprite&&at.setMode(X.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)at.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))at.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const et=Y._multiDrawStarts,It=Y._multiDrawCounts,Tt=Y._multiDrawCount,ne=kt?_t.get(kt).bytesPerElement:1,Me=jt.get(Q).currentProgram.getUniforms();for(let Ie=0;Ie<Tt;Ie++)Me.setValue(X,"_gl_DrawID",Ie),at.render(et[Ie]/ne,It[Ie])}else if(Y.isInstancedMesh)at.renderInstances(O,G,Y.count);else if(rt.isInstancedBufferGeometry){const et=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,It=Math.min(rt.instanceCount,et);at.renderInstances(O,G,It)}else at.render(O,G)};function pe(A,$,rt){A.transparent===!0&&A.side===Oe&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,vn(A,$,rt),A.side=fi,A.needsUpdate=!0,vn(A,$,rt),A.side=Oe):vn(A,$,rt)}this.compile=function(A,$,rt=null){rt===null&&(rt=A),p=Lt.get(rt),p.init($),E.push(p),rt.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),A!==rt&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const Q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const wt=Y.material;if(wt)if(Array.isArray(wt))for(let Ut=0;Ut<wt.length;Ut++){const Vt=wt[Ut];pe(Vt,rt,Y),Q.add(Vt)}else pe(wt,rt,Y),Q.add(wt)}),E.pop(),p=null,Q},this.compileAsync=function(A,$,rt=null){const Q=this.compile(A,$,rt);return new Promise(Y=>{function wt(){if(Q.forEach(function(Ut){jt.get(Ut).currentProgram.isReady()&&Q.delete(Ut)}),Q.size===0){Y(A);return}setTimeout(wt,10)}ae.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ze=null;function Je(A){Ze&&Ze(A)}function cn(){ln.stop()}function je(){ln.start()}const ln=new Bl;ln.setAnimationLoop(Je),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(A){Ze=A,ut.setAnimationLoop(A),A===null?ln.stop():ln.start()},ut.addEventListener("sessionstart",cn),ut.addEventListener("sessionend",je),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera($),$=ut.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,$,R),p=Lt.get(A,E.length),p.init($),E.push(p),Ct.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ct.setFromProjectionMatrix(Ct),ot=this.localClippingEnabled,K=ft.init(this.clippingPlanes,ot),m=gt.get(A,b.length),m.init(),b.push(m),ut.enabled===!0&&ut.isPresenting===!0){const wt=_.xr.getDepthSensingMesh();wt!==null&&un(wt,$,-1/0,_.sortObjects)}un(A,$,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Mt,yt),Kt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Kt&&Dt.addToRenderList(m,A),this.info.render.frame++,K===!0&&ft.beginShadows();const rt=p.state.shadowsArray;St.render(rt,A,$),K===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,Y=m.transmissive;if(p.setupLights(),$.isArrayCamera){const wt=$.cameras;if(Y.length>0)for(let Ut=0,Vt=wt.length;Ut<Vt;Ut++){const kt=wt[Ut];An(Q,Y,A,kt)}Kt&&Dt.render(A);for(let Ut=0,Vt=wt.length;Ut<Vt;Ut++){const kt=wt[Ut];jn(m,A,kt,kt.viewport)}}else Y.length>0&&An(Q,Y,A,$),Kt&&Dt.render(A),jn(m,A,$);R!==null&&(D.updateMultisampleRenderTarget(R),D.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(_,A,$),Zt.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],K===!0&&ft.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function un(A,$,rt,Q){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ct.intersectsSprite(A)){Q&&Ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);const Ut=k.update(A),Vt=A.material;Vt.visible&&m.push(A,Ut,Vt,rt,Ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ct.intersectsObject(A))){const Ut=k.update(A),Vt=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ot.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Ot.copy(Ut.boundingSphere.center)),Ot.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(Vt)){const kt=Ut.groups;for(let ie=0,y=kt.length;ie<y;ie++){const C=kt[ie],O=Vt[C.materialIndex];O&&O.visible&&m.push(A,Ut,O,rt,Ot.z,C)}}else Vt.visible&&m.push(A,Ut,Vt,rt,Ot.z,null)}}const wt=A.children;for(let Ut=0,Vt=wt.length;Ut<Vt;Ut++)un(wt[Ut],$,rt,Q)}function jn(A,$,rt,Q){const Y=A.opaque,wt=A.transmissive,Ut=A.transparent;p.setupLightsView(rt),K===!0&&ft.setGlobalState(_.clippingPlanes,rt),Q&&qt.viewport(U.copy(Q)),Y.length>0&&Rn(Y,$,rt),wt.length>0&&Rn(wt,$,rt),Ut.length>0&&Rn(Ut,$,rt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function An(A,$,rt,Q){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Ni(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?js:Jn,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));const wt=p.state.transmissionRenderTarget[Q.id],Ut=Q.viewport||U;wt.setSize(Ut.z,Ut.w);const Vt=_.getRenderTarget();_.setRenderTarget(wt),_.getClearColor(nt),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),Kt&&Dt.render(rt);const kt=_.toneMapping;_.toneMapping=$n;const ie=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),K===!0&&ft.setGlobalState(_.clippingPlanes,Q),Rn(A,rt,Q),D.updateMultisampleRenderTarget(wt),D.updateRenderTargetMipmap(wt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let y=!1;for(let C=0,O=$.length;C<O;C++){const N=$[C],G=N.object,pt=N.geometry,at=N.material,et=N.group;if(at.side===Oe&&G.layers.test(Q.layers)){const It=at.side;at.side=rn,at.needsUpdate=!0,_n(G,rt,Q,pt,at,et),at.side=It,at.needsUpdate=!0,y=!0}}y===!0&&(D.updateMultisampleRenderTarget(wt),D.updateRenderTargetMipmap(wt))}_.setRenderTarget(Vt),_.setClearColor(nt,J),ie!==void 0&&(Q.viewport=ie),_.toneMapping=kt}function Rn(A,$,rt){const Q=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,wt=A.length;Y<wt;Y++){const Ut=A[Y],Vt=Ut.object,kt=Ut.geometry,ie=Q===null?Ut.material:Q,y=Ut.group;Vt.layers.test(rt.layers)&&_n(Vt,$,rt,kt,ie,y)}}function _n(A,$,rt,Q,Y,wt){A.onBeforeRender(_,$,rt,Q,Y,wt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(_,$,rt,Q,A,wt),Y.transparent===!0&&Y.side===Oe&&Y.forceSinglePass===!1?(Y.side=rn,Y.needsUpdate=!0,_.renderBufferDirect(rt,$,Q,Y,A,wt),Y.side=fi,Y.needsUpdate=!0,_.renderBufferDirect(rt,$,Q,Y,A,wt),Y.side=Oe):_.renderBufferDirect(rt,$,Q,Y,A,wt),A.onAfterRender(_,$,rt,Q,Y,wt)}function vn(A,$,rt){$.isScene!==!0&&($=re);const Q=jt.get(A),Y=p.state.lights,wt=p.state.shadowsArray,Ut=Y.state.version,Vt=st.getParameters(A,Y.state,wt,$,rt),kt=st.getProgramCacheKey(Vt);let ie=Q.programs;Q.environment=A.isMeshStandardMaterial?$.environment:null,Q.fog=$.fog,Q.envMap=(A.isMeshStandardMaterial?tt:w).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,ie===void 0&&(A.addEventListener("dispose",Qt),ie=new Map,Q.programs=ie);let y=ie.get(kt);if(y!==void 0){if(Q.currentProgram===y&&Q.lightsStateVersion===Ut)return Kn(A,Vt),y}else Vt.uniforms=st.getUniforms(A),A.onBeforeCompile(Vt,_),y=st.acquireProgram(Vt,kt),ie.set(kt,y),Q.uniforms=Vt.uniforms;const C=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(C.clippingPlanes=ft.uniform),Kn(A,Vt),Q.needsLights=ws(A),Q.lightsStateVersion=Ut,Q.needsLights&&(C.ambientLightColor.value=Y.state.ambient,C.lightProbe.value=Y.state.probe,C.directionalLights.value=Y.state.directional,C.directionalLightShadows.value=Y.state.directionalShadow,C.spotLights.value=Y.state.spot,C.spotLightShadows.value=Y.state.spotShadow,C.rectAreaLights.value=Y.state.rectArea,C.ltc_1.value=Y.state.rectAreaLTC1,C.ltc_2.value=Y.state.rectAreaLTC2,C.pointLights.value=Y.state.point,C.pointLightShadows.value=Y.state.pointShadow,C.hemisphereLights.value=Y.state.hemi,C.directionalShadowMap.value=Y.state.directionalShadowMap,C.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,C.spotShadowMap.value=Y.state.spotShadowMap,C.spotLightMatrix.value=Y.state.spotLightMatrix,C.spotLightMap.value=Y.state.spotLightMap,C.pointShadowMap.value=Y.state.pointShadowMap,C.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=y,Q.uniformsList=null,y}function pi(A){if(A.uniformsList===null){const $=A.currentProgram.getUniforms();A.uniformsList=zr.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function Kn(A,$){const rt=jt.get(A);rt.outputColorSpace=$.outputColorSpace,rt.batching=$.batching,rt.batchingColor=$.batchingColor,rt.instancing=$.instancing,rt.instancingColor=$.instancingColor,rt.instancingMorph=$.instancingMorph,rt.skinning=$.skinning,rt.morphTargets=$.morphTargets,rt.morphNormals=$.morphNormals,rt.morphColors=$.morphColors,rt.morphTargetsCount=$.morphTargetsCount,rt.numClippingPlanes=$.numClippingPlanes,rt.numIntersection=$.numClipIntersection,rt.vertexAlphas=$.vertexAlphas,rt.vertexTangents=$.vertexTangents,rt.toneMapping=$.toneMapping}function Ke(A,$,rt,Q,Y){$.isScene!==!0&&($=re),D.resetTextureUnits();const wt=$.fog,Ut=Q.isMeshStandardMaterial?$.environment:null,Vt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:vs,kt=(Q.isMeshStandardMaterial?tt:w).get(Q.envMap||Ut),ie=Q.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,y=!!rt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),C=!!rt.morphAttributes.position,O=!!rt.morphAttributes.normal,N=!!rt.morphAttributes.color;let G=$n;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(G=_.toneMapping);const pt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,at=pt!==void 0?pt.length:0,et=jt.get(Q),It=p.state.lights;if(K===!0&&(ot===!0||A!==M)){const Qe=A===M&&Q.id===S;ft.setState(Q,A,Qe)}let Tt=!1;Q.version===et.__version?(et.needsLights&&et.lightsStateVersion!==It.state.version||et.outputColorSpace!==Vt||Y.isBatchedMesh&&et.batching===!1||!Y.isBatchedMesh&&et.batching===!0||Y.isBatchedMesh&&et.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&et.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&et.instancing===!1||!Y.isInstancedMesh&&et.instancing===!0||Y.isSkinnedMesh&&et.skinning===!1||!Y.isSkinnedMesh&&et.skinning===!0||Y.isInstancedMesh&&et.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&et.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&et.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&et.instancingMorph===!1&&Y.morphTexture!==null||et.envMap!==kt||Q.fog===!0&&et.fog!==wt||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ft.numPlanes||et.numIntersection!==ft.numIntersection)||et.vertexAlphas!==ie||et.vertexTangents!==y||et.morphTargets!==C||et.morphNormals!==O||et.morphColors!==N||et.toneMapping!==G||et.morphTargetsCount!==at)&&(Tt=!0):(Tt=!0,et.__version=Q.version);let ne=et.currentProgram;Tt===!0&&(ne=vn(Q,$,Y));let Me=!1,Ie=!1,hn=!1;const Se=ne.getUniforms(),Xe=et.uniforms;if(qt.useProgram(ne.program)&&(Me=!0,Ie=!0,hn=!0),Q.id!==S&&(S=Q.id,Ie=!0),Me||M!==A){qt.buffers.depth.getReversed()?(vt.copy(A.projectionMatrix),lh(vt),uh(vt),Se.setValue(X,"projectionMatrix",vt)):Se.setValue(X,"projectionMatrix",A.projectionMatrix),Se.setValue(X,"viewMatrix",A.matrixWorldInverse);const Dn=Se.map.cameraPosition;Dn!==void 0&&Dn.setValue(X,Pt.setFromMatrixPosition(A.matrixWorld)),le.logarithmicDepthBuffer&&Se.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Se.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Ie=!0,hn=!0)}if(Y.isSkinnedMesh){Se.setOptional(X,Y,"bindMatrix"),Se.setOptional(X,Y,"bindMatrixInverse");const Qe=Y.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Se.setValue(X,"boneTexture",Qe.boneTexture,D))}Y.isBatchedMesh&&(Se.setOptional(X,Y,"batchingTexture"),Se.setValue(X,"batchingTexture",Y._matricesTexture,D),Se.setOptional(X,Y,"batchingIdTexture"),Se.setValue(X,"batchingIdTexture",Y._indirectTexture,D),Se.setOptional(X,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Se.setValue(X,"batchingColorTexture",Y._colorsTexture,D));const ti=rt.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&Ht.update(Y,rt,ne),(Ie||et.receiveShadow!==Y.receiveShadow)&&(et.receiveShadow=Y.receiveShadow,Se.setValue(X,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Xe.envMap.value=kt,Xe.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&$.environment!==null&&(Xe.envMapIntensity.value=$.environmentIntensity),Ie&&(Se.setValue(X,"toneMappingExposure",_.toneMappingExposure),et.needsLights&&Qn(Xe,hn),wt&&Q.fog===!0&&it.refreshFogUniforms(Xe,wt),it.refreshMaterialUniforms(Xe,Q,W,ht,p.state.transmissionRenderTarget[A.id]),zr.upload(X,pi(et),Xe,D)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(zr.upload(X,pi(et),Xe,D),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Se.setValue(X,"center",Y.center),Se.setValue(X,"modelViewMatrix",Y.modelViewMatrix),Se.setValue(X,"normalMatrix",Y.normalMatrix),Se.setValue(X,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Qe=Q.uniformsGroups;for(let Dn=0,x=Qe.length;Dn<x;Dn++){const I=Qe[Dn];V.update(I,ne),V.bind(I,ne)}}return ne}function Qn(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function ws(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,$,rt){jt.get(A.texture).__webglTexture=$,jt.get(A.depthTexture).__webglTexture=rt;const Q=jt.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=rt===void 0,Q.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,$){const rt=jt.get(A);rt.__webglFramebuffer=$,rt.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(A,$=0,rt=0){R=A,T=$,P=rt;let Q=!0,Y=null,wt=!1,Ut=!1;if(A){const kt=jt.get(A);if(kt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(X.FRAMEBUFFER,null),Q=!1;else if(kt.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(kt.__hasExternalTextures)D.rebindTextures(A,jt.get(A.texture).__webglTexture,jt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const C=A.depthTexture;if(kt.__boundDepthTexture!==C){if(C!==null&&jt.has(C)&&(A.width!==C.image.width||A.height!==C.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const ie=A.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ut=!0);const y=jt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(y[$])?Y=y[$][rt]:Y=y[$],wt=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?Y=jt.get(A).__webglMultisampledFramebuffer:Array.isArray(y)?Y=y[rt]:Y=y,U.copy(A.viewport),q.copy(A.scissor),Z=A.scissorTest}else U.copy(zt).multiplyScalar(W).floor(),q.copy(Bt).multiplyScalar(W).floor(),Z=Gt;if(qt.bindFramebuffer(X.FRAMEBUFFER,Y)&&Q&&qt.drawBuffers(A,Y),qt.viewport(U),qt.scissor(q),qt.setScissorTest(Z),wt){const kt=jt.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+$,kt.__webglTexture,rt)}else if(Ut){const kt=jt.get(A.texture),ie=$||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,kt.__webglTexture,rt||0,ie)}S=-1},this.readRenderTargetPixels=function(A,$,rt,Q,Y,wt,Ut){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=jt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Vt=Vt[Ut]),Vt){qt.bindFramebuffer(X.FRAMEBUFFER,Vt);try{const kt=A.texture,ie=kt.format,y=kt.type;if(!le.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(y)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-Q&&rt>=0&&rt<=A.height-Y&&X.readPixels($,rt,Q,Y,Yt.convert(ie),Yt.convert(y),wt)}finally{const kt=R!==null?jt.get(R).__webglFramebuffer:null;qt.bindFramebuffer(X.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,$,rt,Q,Y,wt,Ut){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=jt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Vt=Vt[Ut]),Vt){const kt=A.texture,ie=kt.format,y=kt.type;if(!le.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(y))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=A.width-Q&&rt>=0&&rt<=A.height-Y){qt.bindFramebuffer(X.FRAMEBUFFER,Vt);const C=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,C),X.bufferData(X.PIXEL_PACK_BUFFER,wt.byteLength,X.STREAM_READ),X.readPixels($,rt,Q,Y,Yt.convert(ie),Yt.convert(y),0);const O=R!==null?jt.get(R).__webglFramebuffer:null;qt.bindFramebuffer(X.FRAMEBUFFER,O);const N=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await ch(X,N,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,C),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,wt),X.deleteBuffer(C),X.deleteSync(N),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,$=null,rt=0){A.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-rt),Y=Math.floor(A.image.width*Q),wt=Math.floor(A.image.height*Q),Ut=$!==null?$.x:0,Vt=$!==null?$.y:0;D.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,rt,0,0,Ut,Vt,Y,wt),qt.unbindTexture()},this.copyTextureToTexture=function(A,$,rt=null,Q=null,Y=0){A.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],$=arguments[2],Y=arguments[3]||0,rt=null);let wt,Ut,Vt,kt,ie,y,C,O,N;const G=A.isCompressedTexture?A.mipmaps[Y]:A.image;rt!==null?(wt=rt.max.x-rt.min.x,Ut=rt.max.y-rt.min.y,Vt=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,ie=rt.min.y,y=rt.isBox3?rt.min.z:0):(wt=G.width,Ut=G.height,Vt=G.depth||1,kt=0,ie=0,y=0),Q!==null?(C=Q.x,O=Q.y,N=Q.z):(C=0,O=0,N=0);const pt=Yt.convert($.format),at=Yt.convert($.type);let et;$.isData3DTexture?(D.setTexture3D($,0),et=X.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(D.setTexture2DArray($,0),et=X.TEXTURE_2D_ARRAY):(D.setTexture2D($,0),et=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,$.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,$.unpackAlignment);const It=X.getParameter(X.UNPACK_ROW_LENGTH),Tt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ne=X.getParameter(X.UNPACK_SKIP_PIXELS),Me=X.getParameter(X.UNPACK_SKIP_ROWS),Ie=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,G.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,G.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,kt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ie),X.pixelStorei(X.UNPACK_SKIP_IMAGES,y);const hn=A.isDataArrayTexture||A.isData3DTexture,Se=$.isDataArrayTexture||$.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Xe=jt.get(A),ti=jt.get($),Qe=jt.get(Xe.__renderTarget),Dn=jt.get(ti.__renderTarget);qt.bindFramebuffer(X.READ_FRAMEBUFFER,Qe.__webglFramebuffer),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let x=0;x<Vt;x++)hn&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,jt.get(A).__webglTexture,Y,y+x),A.isDepthTexture?(Se&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,jt.get($).__webglTexture,Y,N+x),X.blitFramebuffer(kt,ie,wt,Ut,C,O,wt,Ut,X.DEPTH_BUFFER_BIT,X.NEAREST)):Se?X.copyTexSubImage3D(et,Y,C,O,N+x,kt,ie,wt,Ut):X.copyTexSubImage2D(et,Y,C,O,N+x,kt,ie,wt,Ut);qt.bindFramebuffer(X.READ_FRAMEBUFFER,null),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Se?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(et,Y,C,O,N,wt,Ut,Vt,pt,at,G.data):$.isCompressedArrayTexture?X.compressedTexSubImage3D(et,Y,C,O,N,wt,Ut,Vt,pt,G.data):X.texSubImage3D(et,Y,C,O,N,wt,Ut,Vt,pt,at,G):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Y,C,O,wt,Ut,pt,at,G.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Y,C,O,G.width,G.height,pt,G.data):X.texSubImage2D(X.TEXTURE_2D,Y,C,O,wt,Ut,pt,at,G);X.pixelStorei(X.UNPACK_ROW_LENGTH,It),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Tt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ne),X.pixelStorei(X.UNPACK_SKIP_ROWS,Me),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ie),Y===0&&$.generateMipmaps&&X.generateMipmap(et),qt.unbindTexture()},this.copyTextureToTexture3D=function(A,$,rt=null,Q=null,Y=0){return A.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],$=arguments[3],Y=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,$,rt,Q,Y)},this.initRenderTarget=function(A){jt.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),qt.unbindTexture()},this.resetState=function(){T=0,P=0,R=null,qt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}class za{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new oe(t),this.density=e}clone(){return new za(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ba{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new oe(t),this.near=e,this.far=n}clone(){return new Ba(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ql extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ym{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ma,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new L;class Gr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Gr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $l extends Hi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ns;const Rs=new L,is=new L,ss=new L,rs=new Ft,Cs=new Ft,Yl=new _e,wr=new L,Ps=new L,br=new L,qc=new Ft,Ro=new Ft,$c=new Ft;class Sm extends He{constructor(t=new $l){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ym(e,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new Gr(n,3,0,!1)),ns.setAttribute("uv",new Gr(n,2,3,!1))}this.geometry=ns,this.material=t,this.center=new Ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),Yl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Er(wr.set(-.5,-.5,0),ss,o,is,s,r),Er(Ps.set(.5,-.5,0),ss,o,is,s,r),Er(br.set(.5,.5,0),ss,o,is,s,r),qc.set(0,0),Ro.set(1,0),$c.set(1,1);let a=t.ray.intersectTriangle(wr,Ps,br,!1,Rs);if(a===null&&(Er(Ps.set(-.5,.5,0),ss,o,is,s,r),Ro.set(0,1),a=t.ray.intersectTriangle(wr,br,Ps,!1,Rs),a===null))return;const c=t.ray.origin.distanceTo(Rs);c<t.near||c>t.far||e.push({distance:c,point:Rs.clone(),uv:Tn.getInterpolation(Rs,wr,Ps,br,qc,Ro,$c,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Er(i,t,e,n,s,r){rs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Cs.x=r*rs.x-s*rs.y,Cs.y=s*rs.x+r*rs.y):Cs.copy(rs),i.copy(t),i.x+=Cs.x,i.y+=Cs.y,i.applyMatrix4(Yl)}class wm extends on{constructor(t=null,e=1,n=1,s,r,o,a,c,l=bn,u=bn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yc extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const os=new _e,Zc=new _e,Tr=[],Jc=new Bi,bm=new _e,Ls=new B,Is=new ys;class Hs extends B{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Jc.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(Jc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Is.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),Zc.multiplyMatrices(n,os),Ls.matrixWorld=Zc,Ls.raycast(t,Tr);for(let o=0,a=Tr.length;o<a;o++){const c=Tr[o];c.instanceId=r,c.object=this,e.push(c)}Tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wm(new Float32Array(s*this.count),s,this.count,Ia,zn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class $r extends Hi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jc=new _e,wa=new Ll,Ar=new ys,Rr=new L;class Ha extends He{constructor(t=new ze,e=new $r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=r,t.ray.intersectsSphere(Ar)===!1)return;jc.copy(s).invert(),wa.copy(t.ray).applyMatrix4(jc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=l.getX(g);Rr.fromBufferAttribute(h,m),Kc(Rr,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,v=d;g<v;g++)Rr.fromBufferAttribute(h,g),Kc(Rr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Kc(i,t,e,n,s,r,o){const a=wa.distanceSqToPoint(i);if(a<e){const c=new L;wa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Va extends on{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Ft:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],o=[],a=new L,c=new _e;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ye(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ye(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ga extends Bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ft){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Em extends Ga{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ka(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Cr=new L,Co=new ka,Po=new ka,Lo=new ka;class Wa extends Bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Cr.subVectors(s[0],s[1]).add(s[0]),l=Cr);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Co.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,v,m),Po.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,v,m),Lo.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Po.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Lo.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Co.calc(c),Po.calc(c),Lo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Tm(i,t){const e=1-i;return e*e*t}function Am(i,t){return 2*(1-i)*i*t}function Rm(i,t){return i*i*t}function Vs(i,t,e,n){return Tm(i,t)+Am(i,e)+Rm(i,n)}function Cm(i,t){const e=1-i;return e*e*e*t}function Pm(i,t){const e=1-i;return 3*e*e*i*t}function Lm(i,t){return 3*(1-i)*i*i*t}function Im(i,t){return i*i*i*t}function Gs(i,t,e,n,s){return Cm(i,t)+Pm(i,e)+Lm(i,n)+Im(i,s)}class Zl extends Bn{constructor(t=new Ft,e=new Ft,n=new Ft,s=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ft){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dm extends Bn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y),Gs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jl extends Bn{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Um extends Bn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jl extends Bn{constructor(t=new Ft,e=new Ft,n=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ft){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,s.x,r.x,o.x),Vs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nm extends Bn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,s.x,r.x,o.x),Vs(t,s.y,r.y,o.y),Vs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kl extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Qc(a,c.x,l.x,u.x,h.x),Qc(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Ft().fromArray(s))}return this}}var tl=Object.freeze({__proto__:null,ArcCurve:Em,CatmullRomCurve3:Wa,CubicBezierCurve:Zl,CubicBezierCurve3:Dm,EllipseCurve:Ga,LineCurve:Jl,LineCurve3:Um,QuadraticBezierCurve:jl,QuadraticBezierCurve3:Nm,SplineCurve:Kl});class Fm extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new tl[s.type]().fromJSON(s))}return this}}class ba extends Fm{constructor(t){super(),this.type="Path",this.currentPoint=new Ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Jl(this.currentPoint.clone(),new Ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new jl(this.currentPoint.clone(),new Ft(t,e),new Ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Zl(this.currentPoint.clone(),new Ft(t,e),new Ft(n,s),new Ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Kl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ga(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Xa extends ze{constructor(t=[new Ft(0,-.5),new Ft(.5,0),new Ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ye(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new L,f=new Ft,d=new L,g=new L,v=new L;let m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let b=0;b<=e;b++){const E=n+b*u*s,_=Math.sin(E),F=Math.cos(E);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*_,h.y=t[T].y,h.z=t[T].x*F,o.push(h.x,h.y,h.z),f.x=b/e,f.y=T/(t.length-1),a.push(f.x,f.y);const P=c[3*T+0]*_,R=c[3*T+1],S=c[3*T+0]*F;l.push(P,R,S)}}for(let b=0;b<e;b++)for(let E=0;E<t.length-1;E++){const _=E+b*t.length,F=_,T=_+t.length,P=_+t.length+1,R=_+1;r.push(F,T,R),r.push(P,R,T)}this.setIndex(r),this.setAttribute("position",new ve(o,3)),this.setAttribute("uv",new ve(a,2)),this.setAttribute("normal",new ve(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.points,t.segments,t.phiStart,t.phiLength)}}class Ks extends Xa{constructor(t=1,e=1,n=4,s=8){const r=new ba;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Ks(t.radius,t.length,t.capSegments,t.radialSegments)}}class wn extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new L,u=new Ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(a,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wt extends ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;b(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(f,3)),this.setAttribute("uv",new ve(d,2));function b(){const _=new L,F=new L;let T=0;const P=(e-t)/n;for(let R=0;R<=r;R++){const S=[],M=R/r,U=M*(e-t)+t;for(let q=0;q<=s;q++){const Z=q/s,nt=Z*c+a,J=Math.sin(nt),j=Math.cos(nt);F.x=U*J,F.y=-M*n+m,F.z=U*j,h.push(F.x,F.y,F.z),_.set(J,P,j).normalize(),f.push(_.x,_.y,_.z),d.push(Z,1-M),S.push(g++)}v.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const M=v[S][R],U=v[S+1][R],q=v[S+1][R+1],Z=v[S][R+1];(t>0||S!==0)&&(u.push(M,U,Z),T+=3),(e>0||S!==r-1)&&(u.push(U,q,Z),T+=3)}l.addGroup(p,T,0),p+=T}function E(_){const F=g,T=new Ft,P=new L;let R=0;const S=_===!0?t:e,M=_===!0?1:-1;for(let q=1;q<=s;q++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const U=g;for(let q=0;q<=s;q++){const nt=q/s*c+a,J=Math.cos(nt),j=Math.sin(nt);P.x=S*j,P.y=m*M,P.z=S*J,h.push(P.x,P.y,P.z),f.push(0,M,0),T.x=J*.5+.5,T.y=j*.5*M+.5,d.push(T.x,T.y),g++}for(let q=0;q<s;q++){const Z=F+q,nt=U+q;_===!0?u.push(nt,nt+1,Z):u.push(nt+1,nt,Z),R+=3}l.addGroup(p,R,_===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Li extends Wt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Li(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qa extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(r.slice(),3)),this.setAttribute("uv",new ve(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const E=new L,_=new L,F=new L;for(let T=0;T<e.length;T+=3)d(e[T+0],E),d(e[T+1],_),d(e[T+2],F),c(E,_,F,b)}function c(b,E,_,F){const T=F+1,P=[];for(let R=0;R<=T;R++){P[R]=[];const S=b.clone().lerp(_,R/T),M=E.clone().lerp(_,R/T),U=T-R;for(let q=0;q<=U;q++)q===0&&R===T?P[R][q]=S:P[R][q]=S.clone().lerp(M,q/U)}for(let R=0;R<T;R++)for(let S=0;S<2*(T-R)-1;S++){const M=Math.floor(S/2);S%2===0?(f(P[R][M+1]),f(P[R+1][M]),f(P[R][M])):(f(P[R][M+1]),f(P[R+1][M+1]),f(P[R+1][M]))}}function l(b){const E=new L;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(b),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function u(){const b=new L;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];const _=m(b)/2/Math.PI+.5,F=p(b)/Math.PI+.5;o.push(_,1-F)}g(),h()}function h(){for(let b=0;b<o.length;b+=6){const E=o[b+0],_=o[b+2],F=o[b+4],T=Math.max(E,_,F),P=Math.min(E,_,F);T>.9&&P<.1&&(E<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),F<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,E){const _=b*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function g(){const b=new L,E=new L,_=new L,F=new L,T=new Ft,P=new Ft,R=new Ft;for(let S=0,M=0;S<r.length;S+=9,M+=6){b.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),T.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),F.copy(b).add(E).add(_).divideScalar(3);const U=m(F);v(T,M+0,b,U),v(P,M+2,E,U),v(R,M+4,_,U)}}function v(b,E,_,F){F<0&&b.x===1&&(o[E]=b.x-1),_.x===0&&_.z===0&&(o[E]=F/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.vertices,t.indices,t.radius,t.details)}}class _s extends ba{constructor(t){super(t),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ba().fromJSON(s))}return this}}const Om={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ql(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=Gm(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return $s(r,o,e,a,c,d,0),o}};function Ql(i,t,e,n,s){let r,o;if(s===Qm(i,t,e,n)>0)for(r=t;r<e;r+=n)o=el(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=el(r,i[r],i[r+1],o);return o&&Yr(o,o.next)&&(Zs(o),o=o.next),o}function Fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yr(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $s(i,t,e,n,s,r,o){if(!i)return;!o&&r&&$m(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Bm(i,n,s,r):zm(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Zs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Hm(Fi(i),t,e),$s(i,t,e,n,s,r,2)):o===2&&Vm(i,t,e,n,s,r):$s(Fi(i),t,e,n,s,r,1);break}}}function zm(i){const t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&cs(s,a,r,c,o,l,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ue(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,v=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=Ea(d,g,t,e,n),b=Ea(v,m,t,e,n);let E=i.prevZ,_=i.nextZ;for(;E&&E.z>=p&&_&&_.z<=b;){if(E.x>=d&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&cs(a,u,c,h,l,f,E.x,E.y)&&Ue(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&cs(a,u,c,h,l,f,_.x,_.y)&&Ue(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&cs(a,u,c,h,l,f,E.x,E.y)&&Ue(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=b;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&cs(a,u,c,h,l,f,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Hm(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Yr(s,r)&&tu(s,n,n.next,r)&&Ys(s,r)&&Ys(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Zs(n),Zs(n.next),n=i=r),n=n.next}while(n!==i);return Fi(n)}function Vm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jm(o,a)){let c=eu(o,a);o=Fi(o,o.next),c=Fi(c,c.next),$s(o,t,e,n,s,r,0),$s(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Gm(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Ql(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Zm(l));for(s.sort(km),r=0;r<s.length;r++)e=Wm(s[r],e);return e}function km(i,t){return i.x-t.x}function Wm(i,t){const e=Xm(i,t);if(!e)return t;const n=eu(e,i);return Fi(n,n.next),Fi(e,e.next)}function Xm(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&cs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Ys(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&qm(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function qm(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function $m(i,t,e,n){let s=i;do s.z===0&&(s.z=Ea(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ym(s)}function Ym(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ea(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Zm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Jm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!jm(i,t)&&(Ys(i,t)&&Ys(t,i)&&Km(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||Yr(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yr(i,t){return i.x===t.x&&i.y===t.y}function tu(i,t,e,n){const s=Lr(Ue(i,t,e)),r=Lr(Ue(i,t,n)),o=Lr(Ue(e,n,i)),a=Lr(Ue(e,n,t));return!!(s!==r&&o!==a||s===0&&Pr(i,e,t)||r===0&&Pr(i,n,t)||o===0&&Pr(e,i,n)||a===0&&Pr(e,t,n))}function Pr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Lr(i){return i>0?1:i<0?-1:0}function jm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&tu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ys(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function Km(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function eu(i,t){const e=new Ta(i.i,i.x,i.y),n=new Ta(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function el(i,t,e,n){const s=new Ta(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ta(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ks{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ks.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];nl(t),il(n,t);let o=t.length;e.forEach(nl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,il(n,e[c]);const a=Om.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function nl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function il(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class sn extends qa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sn(t.radius,t.detail)}}class Zr extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const f=(e-t)/s,d=new L,g=new Ft;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const b=p+m,E=b,_=b+n+1,F=b+n+2,T=b+1;a.push(E,_,T),a.push(_,F,T)}}this.setIndex(a),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(l,3)),this.setAttribute("uv",new ve(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Di extends ze{constructor(t=new _s([new Ft(0,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(r,3)),this.setAttribute("uv",new ve(o,2));function l(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;ks.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const b=g[m];ks.isClockWise(b)===!0&&(g[m]=b.reverse())}const v=ks.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const b=g[m];d=d.concat(b)}for(let m=0,p=d.length;m<p;m++){const b=d[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,p=v.length;m<p;m++){const b=v[m],E=b[0]+h,_=b[1]+h,F=b[2]+h;n.push(E,_,F),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return tg(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Di(n,t.curveSegments)}}function tg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ce extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,f=new L,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const b=[],E=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let F=0;F<=e;F++){const T=F/e;h.x=-t*Math.cos(s+T*r)*Math.sin(o+E*a),h.y=t*Math.cos(o+E*a),h.z=t*Math.sin(s+T*r)*Math.sin(o+E*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(T+_,1-E),b.push(l++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const E=u[p][b+1],_=u[p][b],F=u[p+1][b],T=u[p+1][b+1];(p!==0||o>0)&&d.push(E,_,T),(p!==n-1||c<Math.PI)&&d.push(_,F,T)}this.setIndex(d),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(v,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class De extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new L,h=new L,f=new L;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,b=(s+1)*d+g;o.push(v,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ee extends Hi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $a extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class nu extends $a{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Io=new _e,sl=new L,rl=new L;class iu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sl.setFromMatrixPosition(t.matrixWorld),e.position.copy(sl),rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rl),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ol=new _e,Ds=new L,Do=new L;class eg extends iu{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new Re(2,1,1,1),new Re(0,1,1,1),new Re(3,1,1,1),new Re(1,1,1,1),new Re(3,0,1,1),new Re(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ds.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ds),Do.copy(n.position),Do.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Do),n.updateMatrixWorld(),s.makeTranslation(-Ds.x,-Ds.y,-Ds.z),ol.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol)}}class Bs extends $a{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ng extends iu{constructor(){super(new Hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class su extends $a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new ng}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ig{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=al(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=al();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function al(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);function sg(i){const t=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,e=new Mm({canvas:i,antialias:!t,powerPreference:"high-performance"});let s=Math.min(t?1.5:2,window.devicePixelRatio||1);e.setPixelRatio(s);let r=0,o=0;e.toneMapping=$n;const a=new Sn(52,1,.4,5e3);let c=null,l=()=>{};const u=new ig;let h=0,f=!0;function d(){const v=i.clientWidth||window.innerWidth,m=i.clientHeight||window.innerHeight;e.setSize(v,m,!1),a.aspect=v/m,a.updateProjectionMatrix()}new ResizeObserver(d).observe(i),d();function g(){if(!f)return;const v=u.getDelta(),m=Math.min(.1,v);h+=m,r++,o+=v,o>1.5&&(r/o<28&&s>.75&&(s=Math.max(.75,s*.8),e.setPixelRatio(s),d()),r=0,o=0),l(h,m,Math.min(.33,v)),c&&e.render(c,a),requestAnimationFrame(g)}return g(),{renderer:e,camera:a,voir(v){c=v},definir(v,m){c=v,l=m||(()=>{})},temps:()=>h,arreter(){f=!1,e.dispose()}}}function Ws(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ze;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(const u in r){const h=cl(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let v=0;v<o[u].length;++v)d.push(o[u][v][f]);const g=cl(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function cl(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new $e(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){const v=u.getComponent(f,g);a.setComponent(f+h,g,v)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function Ii(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const xt=(i,t={})=>new ee({color:i,roughness:.85,metalness:0,flatShading:!0,...t});function rg(i,t,e,n,s=8){const r=new L().subVectors(t,i),o=r.length(),a=new Wt(n,e,o,s,1),c=new zi().setFromUnitVectors(new L(0,1,0),r.clone().normalize());return a.applyMatrix4(new _e().compose(new L().addVectors(i,t).multiplyScalar(.5),c,new L(1,1,1))),a}function og(i,t,e,n=8){const s=new Wa(i),r=Math.max(6,Math.floor(s.getLength()/3)),o=[];let a=s.getPoint(0);for(let c=1;c<=r;c++){const l=c/r,u=s.getPoint(l),h=t+(e-t)*((c-1)/r),f=t+(e-t)*l;o.push(rg(a,u,h,f,n));const d=new Ce(f,n,6);d.translate(u.x,u.y,u.z),o.push(d),a=u}return{geometrie:ag(o),courbe:s}}function ag(i){const t=i.map(e=>{const n=e.index?e.toNonIndexed():e;return n.deleteAttribute("uv"),n});return Ws(t,!1)}const cg=(()=>{const i=new _s;return i.moveTo(0,0),i.bezierCurveTo(.5,.4,.5,1.1,0,1.6),i.bezierCurveTo(-.5,1.1,-.5,.4,0,0),i})();function Ya(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Va(i)}function lg(i,t=[]){i.updateMatrixWorld(!0);const e=new Set(t),n=new Map,s=o=>{if(!e.has(o)){if(o.isMesh&&!o.isInstancedMesh){const a=o.material;if(a&&a.isMeshStandardMaterial&&!a.map&&!a.transparent&&!a.polygonOffset&&a.emissive.getHex()===0&&o.visible&&!o.userData.garder){const c=`${a.flatShading}|${a.roughness}|${a.metalness}|${a.side}`;n.has(c)||n.set(c,{m:a,liste:[]}),n.get(c).liste.push(o);return}}for(const a of[...o.children])s(a)}};s(i);let r=0;for(const{m:o,liste:a}of n.values()){const c=a.map(u=>{const h=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();h.applyMatrix4(u.matrixWorld),h.deleteAttribute("uv");const f=h.attributes.position.count,d=new Float32Array(f*3),g=u.material.color;for(let v=0;v<f;v++)d.set([g.r,g.g,g.b],v*3);return h.setAttribute("color",new $e(d,3)),h}),l=new B(Ws(c,!1),new ee({vertexColors:!0,roughness:o.roughness,metalness:o.metalness,flatShading:o.flatShading,side:o.side}));for(const u of a)u.parent&&u.parent.remove(u),u.geometry.dispose();i.add(l),r+=a.length}return r}const ug=(i,t,e)=>[Math.min(19.4,Math.max(-19.4,i)),Math.min(9.4,11.5+8*(1-Math.abs(i)/20),Math.max(.9,t)),Math.min(14.4,Math.max(-14.5,e))],hg={xMin:-18.6,xMax:18.6,zMin:-13.6,zMax:13.6};function ce(i,t){for(const[e,n]of Object.entries(t))n&&n.isVector3?i[e].copy(n):n&&n.isEuler?i.rotation.copy(n):i[e]=n;return i}function dn(i,t,e,n=null){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new Va(s);return r.colorSpace=xn,n&&(r.wrapS=r.wrapT=Xs,r.repeat.set(n[0],n[1])),r}function fg(){const i=new ql,t=Ii(77),e=[];function n(x,I,H,dt,Rt,se,Ne,{solide:gn=!1,rot:ei=0,mate:pu={}}={}){const Qs=new B(new Xt(x,I,H),xt(Ne,pu));return Qs.position.set(dt,Rt,se),Qs.rotation.y=ei,i.add(Qs),gn&&e.push({min:[dt-x/2,Rt-I/2,se-H/2],max:[dt+x/2,Rt+I/2,se+H/2]}),Qs}function s(x,I,H,dt,Rt,se,Ne,gn=12){const ei=new B(new Wt(x,I,H,gn),xt(Ne));return ei.position.set(dt,Rt,se),i.add(ei),ei}i.add(new nu(16773336,8016948,.55));const r=new su(16773839,.9);r.position.set(16,20,-6),i.add(r);const o=new Bs(16767392,420,60,1.6);o.position.set(0,14,0),i.add(o);const a=new Bs(16769192,150,24,1.8);a.position.set(-12,8,-10),i.add(a);const c=dn(512,512,(x,I,H)=>{const dt=Ii(5);for(let Rt=0;Rt<8;Rt++){x.fillStyle=["#b98a58","#a97b4b","#c29463","#b08050"][Rt%4],x.fillRect(0,Rt*64,I,62),x.fillStyle="rgba(0,0,0,0.22)",x.fillRect(0,Rt*64+62,I,2),x.fillStyle="rgba(0,0,0,0.12)";for(let se=0;se<14;se++)x.fillRect(dt()*I,Rt*64+6+dt()*50,30+dt()*80,1.4);x.fillStyle="rgba(0,0,0,0.25)",x.fillRect(Rt*173%400+30,Rt*64,2,62)}},[6,5]),l=new B(new Fe(40,30),new ee({map:c,roughness:.9}));l.rotation.x=-Math.PI/2,i.add(l);const u=dn(512,512,(x,I)=>{for(let H=0;H<6;H++)x.fillStyle=["#8a5e3c","#7e5535","#935f3b"][H%3],x.fillRect(H*86,0,84,512),x.fillStyle="rgba(0,0,0,0.3)",x.fillRect(H*86+84,0,2,512)},[4,1]),h=new ee({map:u,roughness:.95}),f=(x,I,H,dt,Rt,se=0)=>{const Ne=new B(new Fe(x,I),h);return Ne.position.set(H,dt,Rt),Ne.rotation.y=se,i.add(Ne),Ne};f(40,12,0,6,-15,0),f(30,12,-20,6,0,Math.PI/2),f(30,12,20,6,0,-Math.PI/2);const d=(x,I,H,dt)=>{const Rt=h.clone();Rt.map=u.clone(),Rt.map.repeat.set(x/10,I/12),Rt.map.needsUpdate=!0;const se=new B(new Fe(x,I),Rt);se.position.set(H,dt,15),se.rotation.y=Math.PI,i.add(se)};d(12,12,-14,6),d(12,12,14,6),d(16,2,0,11);const g=new B(new Di((()=>{const x=new _s;return x.moveTo(-20,12),x.lineTo(20,12),x.lineTo(0,21),x.closePath(),x})()),h);g.position.set(0,0,-15),i.add(g);const v=g.clone();v.position.set(0,0,15),v.rotation.y=Math.PI,i.add(v);const m=Math.atan2(9,20),p=Math.hypot(20,9);for(const x of[-1,1]){const I=new B(new Xt(p+1,.5,31),xt(5913894));I.position.set(x*10,16.55,0),I.rotation.z=-x*m,i.add(I)}for(let x=-13;x<=13;x+=6.5){n(40,.9,.9,0,12.1,x,3810837);for(const I of[-1,1]){const H=new B(new Xt(p,.8,.8),xt(3810837));H.position.set(I*10,16.1,x),H.rotation.z=-I*m,i.add(H)}n(.8,4.4,.8,0,14.4,x,3810837)}n(.9,.9,30,0,20.4,0,3810837);const b=dn(512,512,(x,I,H)=>{const dt=x.createLinearGradient(0,0,0,H);dt.addColorStop(0,"#1f8fe6"),dt.addColorStop(.55,"#7fe3dc"),dt.addColorStop(1,"#fff3c0"),x.fillStyle=dt,x.fillRect(0,0,I,H),x.fillStyle="#5fb7b8",x.beginPath(),x.ellipse(120,360,220,90,0,0,6.3),x.fill(),x.fillStyle="#4fb45a",x.fillRect(0,380,I,140),x.fillStyle="#7b4f2e",x.fillRect(256,190,34,200);for(const[Rt,se,Ne,gn]of[[240,170,90,"#23a04c"],[330,190,70,"#45c755"],[200,220,60,"#45c755"],[270,120,70,"#8fe55f"]])x.fillStyle=gn,x.beginPath(),x.arc(Rt,se,Ne,0,6.3),x.fill();x.fillStyle="#ff8a2b";for(const[Rt,se]of[[230,140],[320,170],[190,215]])x.beginPath(),x.arc(Rt,se,7,0,6.3),x.fill();x.fillStyle="#fffbe0",x.beginPath(),x.arc(420,90,36,0,6.3),x.fill()}),E=new B(new wn(4.2,40),new Ae({map:b}));E.position.set(9,9,-14.85),i.add(E);const _=new B(new De(4.3,.34,8,40),xt(3810837));_.position.set(9,9,-14.7),i.add(_),n(8.6,.24,.3,9,9,-14.7,3810837),n(.24,8.6,.3,9,9,-14.7,3810837);const F=new B(new Fe(9,34),new Ae({color:16773824,transparent:!0,opacity:.1,blending:Nn,depthWrite:!1,side:Oe,fog:!1}));F.position.set(11.5,5,-7.5),F.rotation.set(-.95,-.3,.12),i.add(F),n(10.4,.45,3.6,-12,3.2,-12.6,11565637,{solide:!0});for(const[x,I]of[[-16.8,-14.1],[-7.2,-14.1],[-16.8,-11.1],[-7.2,-11.1]])n(.5,3.2,.5,x,1.6,I,8015920);n(9.6,.25,3,-12,1.2,-12.6,9264952),e.push({min:[-17.2,0,-14.4],max:[-6.8,3.5,-10.8]}),n(1.2,1.1,1.4,-17,3.95,-12.6,4871528),n(.35,.9,1.5,-16.2,4.05,-12.6,8095636);const T=dn(256,128,(x,I,H)=>{x.fillStyle="#d9b27a",x.fillRect(0,0,I,H),x.fillStyle="rgba(80,50,20,0.45)";for(let dt=6;dt<I;dt+=12)for(let Rt=6;Rt<H;Rt+=12)x.beginPath(),x.arc(dt,Rt,1.5,0,6.3),x.fill()}),P=new B(new Fe(12,6),new ee({map:T,roughness:.9}));P.position.set(-12,8.6,-14.88),i.add(P);const R=[[12.6,.3,0,3.1],[12.6,.3,0,-3.1],[.3,6.4,6.2,0],[.3,6.4,-6.2,0]];for(const[x,I,H,dt]of R)n(x,I,.3,-12+H,8.6+dt,-14.75,7031343);const S=10134704,M=new ue;M.add(ce(new B(new Wt(.1,.12,2.6,8),xt(12159576)),{position:new L(0,0,0)})),M.add(ce(new B(new Xt(1.3,.6,.5),xt(7239554)),{position:new L(0,1.4,0)})),M.position.set(-16,8.8,-14.6),i.add(M);const U=new ue;U.add(new B(new Wt(.14,.14,2.8,8),xt(S)));const q=new B(new De(.42,.14,6,10,Math.PI*1.6),xt(S));q.position.y=1.5,U.add(q),U.position.set(-14.4,8.7,-14.6),U.rotation.z=.2,i.add(U);const Z=new _s;Z.moveTo(0,0),Z.lineTo(3.4,.9),Z.lineTo(3.4,-.9),Z.closePath();const nt=new B(new Di(Z),new ee({color:13160664,side:Oe,flatShading:!0}));nt.position.set(-12.3,9.6,-14.6),nt.rotation.z=-.5,i.add(nt),n(.7,.4,.5,-12.1,9.9,-14.6,12600623);for(const[x,I]of[[-10.2,14035002],[-9.6,16756768],[-9,4165606]])s(.17,.17,.9,x,7.6,-14.6,I,8),s(.05,.05,1.4,x,6.55,-14.6,S,6);for(const[x,I,H]of[[-15.2,6.9,.2],[-13.4,6.6,-.15]]){const dt=new ue;for(const Rt of[-1,1]){const se=new B(new Xt(.28,2.4,.2),xt(S));se.rotation.z=Rt*.14,dt.add(se);const Ne=new B(new Xt(.34,1.2,.26),xt(14035002));Ne.position.set(Rt*.34,-.95,0),Ne.rotation.z=Rt*.14,dt.add(Ne)}dt.position.set(x,I,-14.6),dt.rotation.z=H,i.add(dt)}for(const[x,I,H]of[[-8.4,8,16765517],[-7.7,6.9,16742981]]){const dt=new B(new De(.55,.22,8,16),xt(H));dt.position.set(x,I,-14.6),i.add(dt)}const J=new ue;J.add(ce(new B(new Wt(.1,.1,2.2,8),xt(12159576)),{rotation:new mn(0,0,Math.PI/2)})),J.add(ce(new B(new Xt(.5,.9,.5),xt(7239554)),{position:new L(-1.1,.1,0)})),J.position.set(-14.5,3.62,-12),J.rotation.y=.6,i.add(J);for(const[x,I,H]of[[-9.4,-13.2,14035002],[-8.6,-12.4,4165606],[-10.2,-11.8,4052640]])s(.42,.42,.7,x,3.78,I,H,10),s(.3,.3,.12,x,4.2,I,14541802,10);const j=new B(new Wt(.5,.5,1.1,10),new ee({color:13625583,transparent:!0,opacity:.45}));j.position.set(-15.6,3.98,-13.4),i.add(j);for(let x=0;x<12;x++){const I=new B(new Xt(.1,.45,.1),xt(11581632));I.position.set(-15.6+(t()-.5)*.6,3.7+t()*.5,-13.4+(t()-.5)*.6),I.rotation.set(t(),t(),t()),i.add(I)}s(.5,.5,.2,-10.5,3.52,-13.6,3817286);const ht=new B(new Wt(.08,.08,4,6),xt(3817286));ht.position.set(-10.5,5.5,-13.6),i.add(ht);const W=new B(new Li(.9,.9,12,1,!0),new ee({color:16756768,side:Oe,emissive:16756768,emissiveIntensity:.4}));W.position.set(-10.5,7.5,-13.2),W.rotation.x=Math.PI,i.add(W);function Mt(x,I,H,dt=0,Rt=0){const se=new ue;se.add(new B(new Xt(3*H,3*H,3*H),xt(12159576)));for(const Ne of[-1.35,1.35]){const gn=new B(new Xt(3.1*H,.3*H,3.1*H),xt(8015920));gn.position.y=Ne*H,se.add(gn)}for(const[Ne,gn]of[[-1.35,-1.35],[1.35,-1.35],[-1.35,1.35],[1.35,1.35]]){const ei=new B(new Xt(.3*H,3.1*H,.3*H),xt(8015920));ei.position.set(Ne*H,0,gn*H),se.add(ei)}se.position.set(x,dt+1.5*H,I),se.rotation.y=Rt,i.add(se),e.push({min:[x-1.5*H,dt,I-1.5*H],max:[x+1.5*H,dt+3*H,I+1.5*H]})}Mt(13.5,-11.2,1,0,.1),Mt(16.8,-11.8,1,0,-.08),Mt(15.2,-11.4,1,3,.2),Mt(16.2,-7.4,.8,0,.3);function yt(x,I,H){const dt=new ue;dt.add(new B(new Wt(1.3,1.3,3.2,14),xt(H)));for(const Rt of[-1.1,1.1]){const se=new B(new De(1.32,.09,6,16),xt(2830648));se.rotation.x=Math.PI/2,se.position.y=Rt,dt.add(se)}dt.position.set(x,1.6,I),i.add(dt),e.push({min:[x-1.3,0,I-1.3],max:[x+1.3,3.2,I+1.3]})}yt(-18.2,6.2,4160176),yt(-16.4,8.4,11553338),n(3.4,1.6,1.7,-3.4,.8,-8.4,14035002,{solide:!0}),n(3.5,.2,1.8,-3.4,1.45,-8.4,15223378);const zt=new B(new De(.7,.07,6,12,Math.PI),xt(2830648));zt.position.set(-3.4,1.7,-8.4),i.add(zt);const Bt=new ue;Bt.add(ce(new B(new Wt(2.4,2.4,.4,20),xt(11041354)),{position:new L(0,.2,0)})),Bt.add(ce(new B(new Wt(2.4,2.4,.4,20),xt(11041354)),{position:new L(0,2.6,0)})),Bt.add(ce(new B(new Wt(1.2,1.2,2.4,14),xt(9264952)),{position:new L(0,1.4,0)})),Bt.position.set(5,0,-6.4),i.add(Bt),e.push({min:[2.6,0,-8.8],max:[7.4,2.8,-4]}),s(.5,.5,.7,5.6,3.15,-6.2,14035002,10),n(1,.7,1.4,4.4,3.2,-6.8,16765517),n(.4,11,7,19.6,5.5,4.5,7031343),n(.4,11,7,17.6,5.5,4.5,7031343);const Gt=[16742981,6013163,10216314,13081599,16765517,16734815];for(const x of[1.2,4.2,7.2,10.2]){n(2.6,.3,7,18.6,x,4.5,9264952);for(let I=0;I<6;I++){const H=Gt[(I+Math.floor(x))%6];I%2?s(.45,.45,.9+I%3*.3,18.6,x+.65+I%3*.1,1.9+I*.95,H,10):n(1.1,.9+I%2*.3,.8,18.6,x+.65,1.9+I*.95,H)}}e.push({min:[17.4,0,.9],max:[19.9,11,8.1]});for(const x of[-.9,.9]){const I=new B(new Xt(.28,12.5,.28),xt(12159576));I.position.set(-18.6,5.9,-4+x),I.rotation.z=-.13,i.add(I)}for(let x=0;x<9;x++){const I=new B(new Xt(.2,.2,2),xt(11041354));I.position.set(-19+x*.12,1.2+x*1.3,-4),i.add(I)}const ct=new ue;for(let x=0;x<6;x++){const I=new B(new De(.8-x*.02,.16,6,16),xt(14137466));I.position.z=x*.28,ct.add(I)}ct.position.set(-19.5,7,-10),ct.rotation.y=Math.PI/2,i.add(ct),s(.1,.1,.8,-19.7,8.1,-10,2830648,6).rotation.z=Math.PI/2;const K=new ue,ot=new B(new Wt(3,3.4,.8,20),xt(5531516));ot.position.y=.4,K.add(ot);const vt=new B(new Wt(2.4,2.4,6.4,24,1,!0),new ee({color:10478574,transparent:!0,opacity:.28,side:Oe,roughness:.05}));vt.position.y=4,K.add(vt);const Ct=new B(new Wt(2.3,2.3,.2,20),new ee({color:10478574,emissive:6013163,emissiveIntensity:.9}));Ct.position.y=.9,K.add(Ct);const Pt=new B(new Wt(2.7,2.2,1,20),xt(7243424));Pt.position.y=7.5,K.add(Pt);const Ot=new B(new Ce(.4,12,12),new ee({color:16734815,emissive:16734815,emissiveIntensity:1}));Ot.position.y=9.2,K.add(Ot);const re=new B(new Wt(.1,.1,1.8,6),xt(7243424));re.position.y=8.4,K.add(re);const Kt=new Bs(8382463,60,14);Kt.position.y=3,K.add(Kt);const de=new B(new Wt(.5,2.1,6.4,24,1,!0),new Ae({color:8382463,transparent:!0,opacity:0,blending:Nn,depthWrite:!1,side:Oe}));de.position.y=4.1,de.visible=!1,K.add(de);const X={position:new L(-1,0,-11),platY:1,ouvrirVerre(x){vt.position.y=4+x*5.6},alarme(x){Ot.material.color.setHex(x>0?16719390:16734815),Ot.material.emissive.setHex(x>0?16719390:16734815),Kt.color.setHex(x>0?16726570:8382463),Kt.intensity=60+x*340},secouer(x){K.position.set(-1+(Math.random()-.5)*x,0,-11+(Math.random()-.5)*x)},exploser(){K.visible=!1,we.visible=!0,de.visible=!1},reparer(){K.visible=!0,we.visible=!1,K.position.set(-1,0,-11),vt.position.y=4,de.visible=!1,Ot.material.color.setHex(16734815),Ot.material.emissive.setHex(16734815),Kt.color.setHex(8382463),Kt.intensity=60,Ct.material.emissiveIntensity=.9},rayon(x){de.visible=x>.01,de.material.opacity=.34*Math.min(1.4,x),Kt.intensity=60+x*260,Ct.material.emissiveIntensity=.9+x*1.6}},we=new ue;we.add(ce(new B(new Wt(3,3.4,.8,20),xt(2830134)),{position:new L(0,.4,0)})),we.add(ce(new B(new Wt(2.3,2.3,.2,16),xt(1316378)),{position:new L(0,.9,0)}));for(let x=0;x<6;x++){const I=x/6*6.28,H=new B(new Wt(.13,.17,1.6+t()*2.4,6),xt(4869976));H.position.set(Math.cos(I)*2.2,1.6,Math.sin(I)*2.2),H.rotation.set((t()-.5)*.9,0,(t()-.5)*.9),we.add(H)}const ae=new B(new wn(6,28),new Ae({color:328965,transparent:!0,opacity:.55,depthWrite:!1}));ae.rotation.x=-Math.PI/2,ae.position.y=.05,we.add(ae),we.position.set(-1,0,-11),we.visible=!1,i.add(we),K.position.set(-1,0,-11),i.add(K),e.push({min:[-4.4,0,-14.4],max:[2.4,9,-7.6]});const le=dn(256,256,(x,I)=>{x.fillStyle="#b8453a",x.fillRect(0,0,I,I);for(const[H,dt]of[[118,"#e8c9a0"],[96,"#2f6f8a"],[70,"#e8c9a0"],[46,"#b8453a"],[22,"#ffd24d"]])x.fillStyle=dt,x.beginPath(),x.arc(128,128,H,0,6.3),x.fill()}),qt=new B(new wn(6,40),new ee({map:le,roughness:1}));qt.rotation.x=-Math.PI/2,qt.position.set(1,.03,4),i.add(qt);for(const[x,I,H,dt]of[[-17,10.8,1.2,.3],[-14.2,11.4,.9,-.2],[-16.4,11,.8,.1]]){const Rt=new B(new Xt(2.4*H,1.8*H,2*H),xt(13148268));Rt.position.set(x,I===11?1.7:.9*H,I),Rt.rotation.y=dt,i.add(Rt),e.push({min:[x-1.2*H,0,I-H],max:[x+1.2*H,1.8*H,I+H]})}for(let x=0;x<5;x++){const I=new B(new Wt(.28,.28,3.4,8),xt(15327952));I.position.set(11+x*.6,1.5,11.5),I.rotation.set(.1,0,Math.PI/2-.5+x*.1),i.add(I)}const te=new ue;te.add(ce(new B(new Wt(.06,.06,6,6),xt(2830648)),{position:new L(0,3,0)})),te.add(new B(new Li(2.1,1.6,16,1,!0),new ee({color:4165482,side:Oe,emissive:1923648,emissiveIntensity:.4}))),te.add(ce(new B(new Ce(.6,12,12),new Ae({color:16773832})),{position:new L(0,-.3,0)})),te.position.set(0,14.4,0),i.add(te);const jt=dn(512,128,(x,I,H)=>{x.fillStyle="#cfc8b4",x.fillRect(0,0,I,H);for(let dt=0;dt<4;dt++){const Rt=dt*128+10;x.fillStyle="rgba(0,0,0,0.22)",x.fillRect(Rt,14,108,100),x.fillStyle="#e4dcc6",x.fillRect(Rt+4,18,100,92),x.fillStyle="rgba(255,255,255,0.4)",x.fillRect(Rt+4,18,100,3)}x.fillStyle="rgba(0,0,0,0.4)",x.fillRect(0,0,I,4),x.fillRect(0,H-4,I,4)}),D=new ee({map:jt,roughness:.55,metalness:.15});for(let x=0;x<5;x++){const I=new B(new Xt(16,.3,1.9),D);I.position.set(0,11,13.4-x*1.95),i.add(I)}n(.8,10.3,.5,-8.4,5.15,14.7,5913894),n(.8,10.3,.5,8.4,5.15,14.7,5913894),n(17.6,.8,.5,0,10,14.7,5913894);const w=9081241;for(const x of[-1,1])n(.25,9.8,.3,x*8,4.9,14.2,w),n(.25,.25,9.6,x*8,10.7,9.6,w);const tt=new B(new Wt(.2,.2,14.4,10),xt(w));tt.rotation.z=Math.PI/2,tt.position.set(0,10.8,14.1),i.add(tt);for(let x=-6;x<=6;x++){const I=new B(new De(.34,.07,6,12),xt(5989488));I.rotation.y=Math.PI/2,I.position.set(x*.5-2.4,10.8,14.1),i.add(I)}n(2.2,1.3,1.2,5.8,12,14.3,4872810);const _t=new B(new Ce(.16,8,8),new ee({color:4052602,emissive:4052602,emissiveIntensity:1}));_t.position.set(5.8,12,13.62),i.add(_t),n(1,1.7,.16,10.2,4.2,14.9,15327952),s(.26,.26,.14,10.2,4.65,14.8,14035002,12).rotation.x=Math.PI/2,s(.26,.26,.14,10.2,3.8,14.8,4052602,12).rotation.x=Math.PI/2;const z=new B(new Fe(15.6,9),new Ae({color:16774864,transparent:!0,opacity:.2,blending:Nn,depthWrite:!1}));z.rotation.x=-Math.PI/2,z.position.set(0,.05,10.4),i.add(z),i.background=new oe(9425906),i.fog=new Ba(13495024,90,230);const k=dn(16,256,(x,I,H)=>{const dt=x.createLinearGradient(0,0,0,H);dt.addColorStop(0,"#2f8fe0"),dt.addColorStop(.55,"#8fd9f2"),dt.addColorStop(.75,"#e6f6ee"),dt.addColorStop(1,"#e6f6ee"),x.fillStyle=dt,x.fillRect(0,0,I,H)}),st=new B(new Ce(300,24,16),new Ae({map:k,side:rn,fog:!1}));st.position.set(0,-20,60),i.add(st);const it=dn(256,256,(x,I,H)=>{const dt=Ii(21);x.fillStyle="#58b84a",x.fillRect(0,0,I,H);for(let Rt=0;Rt<900;Rt++)x.fillStyle=["#4aa83f","#66c455","#52b146"][Rt%3],x.fillRect(dt()*I,dt()*H,2,5+dt()*5);for(let Rt=0;Rt<26;Rt++)x.fillStyle=["#ffffff","#ffd24d","#ff8fbf"][Rt%3],x.beginPath(),x.arc(dt()*I,dt()*H,2.2,0,6.3),x.fill()},[40,28]),gt=new B(new Fe(320,200),new ee({map:it,roughness:1}));gt.rotation.x=-Math.PI/2,gt.position.set(0,-.03,114),i.add(gt),n(16,.3,1.2,0,0,15.6,10261640);for(let x=0;x<7;x++)n(4.4,.12,3.2,Math.sin(x*.9)*2.6,.04,20+x*5.2,12104356);for(let x=-60;x<=60;x+=3)n(.6,3.2,.3,x,1.6,52,15854034),n(3,.3,.2,x+1.5,2.2,52,15854034);const Lt=new ue,ft=new B(new Ce(1.5,16,12),xt(16734815,{flatShading:!1}));ft.position.set(-9,1.5,26),Lt.add(ft);for(const x of[0,1]){const I=new B(new De(1.5,.12,6,20),xt(16777215));I.position.set(-9,1.5,26),I.rotation.set(x?Math.PI/2:0,x?0:.3,0),Lt.add(I)}[[8,24,16742981,0],[10,24.6,6013163,.3],[9,24.2,16765517,-.2]].forEach(([x,I,H,dt],Rt)=>{const se=new B(new Xt(1.8,1.8,1.8),xt(H));se.position.set(x,.9+(Rt===2?1.8:0),I),se.rotation.y=dt,Lt.add(se)});const St=new ue;St.add(ce(new B(new Xt(4.2,1.4,2),xt(16756768)),{position:new L(0,1.3,0)})),St.add(ce(new B(new Xt(1.5,1.4,2),xt(14035002)),{position:new L(2.4,1.6,0)}));for(const[x,I]of[[-1.3,-1],[-1.3,1],[1.8,-1],[1.8,1]]){const H=new B(new Wt(.5,.5,.3,12),xt(2303531));H.rotation.x=Math.PI/2,H.position.set(x,.5,I),St.add(H)}St.position.set(-1,0,33),St.rotation.y=.6,Lt.add(St);const Dt=new B(new Wt(3.2,3.2,.6,20),xt(4165606));Dt.position.set(14,.3,36),Lt.add(Dt);const Ht=new B(new Wt(2.9,2.9,.65,20),xt(15784352));Ht.position.set(14,.32,36),Lt.add(Ht);const bt=new B(new Wt(.9,.7,1.2,10),xt(16748479));bt.position.set(15.2,1.2,36.6),Lt.add(bt);const Jt=new B(new Xt(.2,.15,1.8),xt(6013163));Jt.position.set(13,.8,35),Jt.rotation.y=.5,Lt.add(Jt);const Yt=new B(new Wt(1.1,1.1,.14,16),xt(10216314));Yt.position.set(-15,.1,40),Lt.add(Yt);for(const x of[-1,1]){const I=new B(new Wt(.12,.12,8,6),xt(11553338));I.position.set(24+x*3.2,4,30),I.rotation.z=-x*.18,Lt.add(I);const H=I.clone();H.position.z=33,Lt.add(H)}const Zt=new B(new Wt(.12,.12,7.6,6),xt(11553338));Zt.rotation.z=Math.PI/2,Zt.position.set(24,7.7,31.5),Lt.add(Zt);for(const x of[-1.2,1.2]){const I=new B(new Wt(.03,.03,6,4),xt(5592405));I.position.set(24+x,4.7,31.5),Lt.add(I)}const V=new B(new Xt(2.6,.2,1),xt(16765517));V.position.set(24,1.7,31.5),Lt.add(V),i.add(Lt);for(let x=0;x<26;x++){const I=(t()-.5)*110,H=22+t()*26;if(Math.abs(I)<6&&H<50)continue;const dt=new B(new sn(1.2+t()*1.2,0),xt([4045656,3121228,5031520][x%3]));if(dt.position.set(I,.8,H),i.add(dt),x%2){const Rt=new B(new sn(.4,0),xt([16742981,16748479,16765517][x%3]));Rt.position.set(I+.4,1.9+t()*.8,H+.5),i.add(Rt)}}const At=150,ut=new Hs(new Wt(.7,1,9,6),xt(7031343),At),mt=new Hs(new sn(1,0),xt(2789194),At),Et=new Hs(new sn(1,0),xt(4045656),At),lt=new He;for(let x=0;x<At;x++){let I=(t()-.5)*220;const H=62+t()*70,dt=.9+t()*.9;Math.abs(I-2)<17&&H<102&&(I+=I>2?22:-22),lt.rotation.set(0,t()*6,0),lt.position.set(I,4.5*dt,H),lt.scale.set(dt,dt,dt),lt.updateMatrix(),ut.setMatrixAt(x,lt.matrix),lt.position.set(I,11*dt,H),lt.scale.set(5.5*dt,6.5*dt,5.5*dt),lt.updateMatrix(),mt.setMatrixAt(x,lt.matrix),lt.position.set(I+1.2*dt,15*dt,H-.8),lt.scale.set(3.6*dt,4.2*dt,3.6*dt),lt.updateMatrix(),Et.setMatrixAt(x,lt.matrix)}i.add(ut,mt,Et);const Qt=dn(128,128,x=>{x.fillStyle="#fff6df",x.beginPath(),x.arc(64,64,62,0,6.3),x.fill(),x.fillStyle="#2b3138";for(let I=0;I<12;I++){const H=I/12*6.283;x.beginPath(),x.arc(64+Math.sin(H)*52,64-Math.cos(H)*52,I%3?2.5:4.5,0,6.3),x.fill()}}),ge=new ue;ge.add(new B(new De(1.7,.2,8,30),xt(7031343))),ge.add(new B(new wn(1.7,30),new Ae({map:Qt})));const Le=new ue;Le.add(ce(new B(new Xt(.12,1,.05),xt(2830648)),{position:new L(0,.5,.05)}));const pe=new ue;pe.add(ce(new B(new Xt(.08,1.4,.05),xt(14035002)),{position:new L(0,.7,.1)})),ge.add(Le,pe),ge.position.set(-19.9,10,5),ge.rotation.y=Math.PI/2,i.add(ge);const Ze=dn(512,256,(x,I,H)=>{x.fillStyle="#2c4a3e",x.fillRect(0,0,I,H),x.strokeStyle="rgba(255,255,255,.9)",x.fillStyle="rgba(255,255,255,.9)",x.lineWidth=4,x.lineCap="round",x.font="bold 34px sans-serif",x.fillText("PLAN SECRET",30,50),x.beginPath(),x.arc(110,110,22,0,6.3),x.stroke(),x.beginPath(),x.moveTo(110,132),x.lineTo(110,200),x.moveTo(110,150),x.lineTo(70,175),x.moveTo(110,150),x.lineTo(150,175),x.moveTo(110,200),x.lineTo(85,240),x.moveTo(110,200),x.lineTo(135,240),x.stroke(),x.beginPath(),x.moveTo(190,175),x.lineTo(330,175),x.lineTo(310,155),x.moveTo(330,175),x.lineTo(310,195),x.stroke(),x.beginPath(),x.arc(400,195,7,0,6.3),x.stroke(),x.beginPath(),x.moveTo(400,202),x.lineTo(400,222),x.moveTo(400,208),x.lineTo(390,216),x.moveTo(400,208),x.lineTo(410,216),x.stroke(),x.font="bold 22px sans-serif",x.fillText("ça rétrécit !",310,140)});n(.4,5.6,8.6,19.8,6.5,-4,7031343);const Je=new B(new Fe(8,5),new ee({map:Ze,roughness:.95}));Je.position.set(19.55,6.5,-4),Je.rotation.y=-Math.PI/2,i.add(Je);const cn=new ue;cn.add(ce(new B(new Wt(1.5,1.5,.25,18),xt(11041354)),{position:new L(0,3,0)})),cn.add(ce(new B(new Wt(.22,.4,3,8),xt(8015920)),{position:new L(0,1.5,0)})),cn.add(ce(new B(new Wt(1,.8,.55,12),xt(4876938)),{position:new L(0,3.4,0)})),cn.add(ce(new B(new Wt(.1,.18,1.5,6),xt(7031343)),{position:new L(0,4.35,0)}));for(const[x,I,H,dt,Rt]of[[0,5.5,0,.9,3121228],[-.7,5,.2,.6,4573013],[.7,5.1,-.2,.55,4573013]])cn.add(ce(new B(new sn(dt,0),xt(Rt)),{position:new L(x,I,H)}));cn.position.set(13.5,0,-2.5),i.add(cn),e.push({min:[12,0,-4],max:[15,3.2,-1]});const je=new ue;je.add(ce(new B(new Xt(3,1.1,2),xt(4160176)),{position:new L(0,1.6,0)}));const ln=new B(new Wt(.75,.75,.35,14),xt(2830648));ln.rotation.x=Math.PI/2,ln.position.set(1.8,.75,0),je.add(ln);for(const x of[-.7,.7])je.add(ce(new B(new Xt(2.6,.16,.16),xt(12159576)),{position:new L(-2.2,1.2,x)}));for(const x of[-.7,.7])je.add(ce(new B(new Xt(.16,1.2,.16),xt(8015920)),{position:new L(-.7,.6,x)}));for(const[x,I]of[[-.4,.3],[.3,-.4],[.5,.4]])je.add(ce(new B(new sn(.45,0),xt(16742981)),{position:new L(x,2.35,I)}));je.position.set(-12.5,0,11.5),je.rotation.y=.5,i.add(je),e.push({min:[-15,0,9.5],max:[-10,2.4,13.5]});for(const[x,I,H]of[[-6.4,12.4,16742981],[-5.2,12.8,16748479],[6.6,12.5,16756768],[7.9,12.2,16748479]]){const dt=new B(new Wt(.7,.5,1,10),xt(12740924));dt.position.set(x,.5,I),i.add(dt),s(.04,.04,1.4,x,1.6,I,3116876,5);const Rt=new B(new sn(.55,0),xt(H));Rt.position.set(x,2.45,I),i.add(Rt);const se=new B(new sn(.6,0),xt(4045656));se.position.set(x,1.3,I),i.add(se)}const un=new ue;un.add(ce(new B(new Wt(.8,.9,1.5,12),xt(4045722)),{position:new L(0,.75,0)})),un.add(ce(new B(new Wt(.14,.2,1.8,8),xt(4045722)),{position:new L(1.2,1.5,0),rotation:new mn(0,0,-.9)}));const jn=new B(new De(.6,.08,6,12,Math.PI),xt(3119742));jn.position.set(-.1,1.5,0),un.add(jn),un.position.set(-3.4,0,11.6),un.rotation.y=-.4,i.add(un),e.push({min:[-4.8,0,10.6],max:[-2,1.6,12.6]});for(const[x,I,H,dt]of[[12.2,12,.4,14035002],[12.2,12,1.2,4165606],[13.6,12.2,.4,16765517]])s(.6,.6,.8,x,H,I,dt,12),s(.5,.5,.1,x,H+.45,I,14541802,12);e.push({min:[11.5,0,11.3],max:[14.3,1.6,12.9]});const An=new B(new De(1,.45,8,18),xt(2303531));An.rotation.x=Math.PI/2,An.position.set(16.2,.46,11),i.add(An);const Rn=An.clone();Rn.position.y=1.36,i.add(Rn),e.push({min:[14.7,0,9.5],max:[17.7,1.8,12.5]});const _n=new ue;for(const x of[-2.1,2.1]){const I=new B(new De(1.1,.09,6,22),xt(2303531));I.rotation.y=Math.PI/2,I.position.set(0,1.1,x),_n.add(I)}const vn=(x,I,H)=>{const dt=new L().subVectors(I,x),Rt=new B(new Wt(.07,.07,dt.length(),6),xt(H));Rt.position.copy(x).addScaledVector(dt,.5),Rt.quaternion.setFromUnitVectors(new L(0,1,0),dt.normalize()),_n.add(Rt)},pi=new L(0,1.1,-2.1),Kn=new L(0,1.1,2.1),Ke=new L(0,2.6,-.7),Qn=new L(0,1.2,.2),ws=new L(0,2.7,1.8);vn(pi,Ke,14035002),vn(pi,Qn,14035002),vn(Ke,Qn,14035002),vn(Ke,new L(0,2.7,1.5),14035002),vn(Kn,ws,14035002),vn(Qn,Kn,14035002),_n.add(ce(new B(new Xt(.25,.1,.9),xt(2303531)),{position:new L(0,2.75,-.8)})),_n.add(ce(new B(new Xt(1.4,.1,.1),xt(2303531)),{position:new L(0,3,1.85)})),_n.position.set(18.7,0,7),_n.rotation.z=-.12,i.add(_n);const A=[16765517,16742981,6013163,16748479,10216314];for(const x of[-6.5,6.5])for(let I=0;I<=28;I++){const H=I/28,dt=-18.5+H*37,Rt=11.2-Math.sin(H*Math.PI)*1.5,se=new B(new Ce(.13,8,6),new Ae({color:A[I%5]}));se.position.set(dt,Rt,x),i.add(se)}const $={z:1.2},rt=dn(256,512,(x,I,H)=>{x.fillStyle="#2f78a8",x.fillRect(0,0,I,H),x.fillStyle="rgba(0,0,0,0.28)";for(const[Rt,se,Ne,gn]of[[26,250,90,110],[140,250,90,110],[26,380,90,110],[140,380,90,110]])x.fillRect(Rt,se,Ne,gn);x.fillStyle="#3d8dc2";for(const[Rt,se,Ne,gn]of[[32,256,78,98],[146,256,78,98],[32,386,78,98],[146,386,78,98]])x.fillRect(Rt,se,Ne,gn);x.fillStyle="#f5e9c8",x.beginPath(),x.arc(128,130,78,0,6.3),x.fill();const dt=x.createRadialGradient(128,130,4,128,130,70);dt.addColorStop(0,"#fff3b0"),dt.addColorStop(1,"#ffc65a"),x.fillStyle=dt,x.beginPath(),x.arc(128,130,68,0,6.3),x.fill(),x.strokeStyle="#f5e9c8",x.lineWidth=6,x.beginPath(),x.moveTo(128,62),x.lineTo(128,198),x.moveTo(60,130),x.lineTo(196,130),x.stroke()}),Q=new ue;Q.add(ce(new B(new Xt(5.8,8.6,.5),xt(5913894)),{position:new L(0,4.3,.25)}));const Y=dn(64,128,(x,I,H)=>{const dt=x.createLinearGradient(0,0,0,H);dt.addColorStop(0,"#fff4c8"),dt.addColorStop(.6,"#ffd890"),dt.addColorStop(1,"#e8a860"),x.fillStyle=dt,x.fillRect(0,0,I,H),x.fillStyle="rgba(120,70,30,.35)",x.fillRect(0,H-14,I,14)});Q.add(ce(new B(new Fe(4.6,7.7),new Ae({map:Y})),{position:new L(0,3.95,.08)}));const wt=new ue;wt.position.set(-2.3,0,.45),wt.add(ce(new B(new Xt(4.6,7.7,.3),new ee({map:rt,roughness:.6})),{position:new L(2.3,3.95,0)}));const Ut=new B(new Ce(.22,10,8),xt(14725184,{flatShading:!1}));Ut.position.set(3.9,3.7,.3),wt.add(Ut);const Vt=new B(new Wt(.14,.14,.12,10),xt(14725184));Vt.rotation.x=Math.PI/2,Vt.position.set(3.9,3.2,.17),wt.add(Vt);for(const x of[1.2,6.6])wt.add(ce(new B(new Xt(.14,.7,.1),xt(2830648)),{position:new L(.15,x,.19)}));Q.add(wt);const kt=new B(new Fe(4.6,6),new Ae({color:16769696,transparent:!0,opacity:0,blending:Nn,depthWrite:!1}));kt.rotation.x=-Math.PI/2,kt.position.set(0,.07,3.2),Q.add(kt);const ie=dn(128,96,(x,I,H)=>{x.fillStyle="#f0dca8",x.fillRect(0,0,I,H),x.strokeStyle="#6b4a2f",x.lineWidth=5,x.strokeRect(3,3,I-6,H-6),x.fillStyle="#3a2615",x.font="bold 17px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("DÉMARRER",I/2,20),x.fillText("L'ANIMATION",I/2,76)});Q.add(ce(new B(new Xt(2,2.9,.25),xt(5913894)),{position:new L(-3.95,5.2,.13)})),Q.add(ce(new B(new Fe(1.7,1.28),new ee({map:ie,roughness:.9})),{position:new L(-3.95,5.75,.27)}));const y=new ee({color:14035002,emissive:14035002,emissiveIntensity:.6,roughness:.4}),C=new B(new Wt(.42,.46,.22,20),y);C.rotation.x=Math.PI/2,C.position.set(-3.95,4.45,.38),Q.add(C),Q.add(ce(new B(new De(.5,.06,8,20),xt(14725184)),{position:new L(-3.95,4.45,.27)}));const O=dn(256,80,(x,I,H)=>{x.fillStyle="#c9a06c",x.fillRect(0,0,I,H),x.strokeStyle="#6b4a2f",x.lineWidth=6,x.strokeRect(3,3,I-6,H-6),x.fillStyle="#3a2615",x.font="bold 46px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("MAISON",I/2,H/2+2)});Q.add(ce(new B(new Fe(3.2,1),new ee({map:O,roughness:.9})),{position:new L(0,9.4,.12)}));const N=new ue;N.add(ce(new B(new Wt(.4,.4,.9,8),new ee({color:16769162,emissive:16760906,emissiveIntensity:.9})),{position:new L(0,0,0)})),N.add(ce(new B(new Li(.6,.4,8),xt(2830648)),{position:new L(0,.65,0)})),N.add(ce(new B(new Xt(.15,.15,.5),xt(2830648)),{position:new L(0,0,-.35)})),N.position.set(3.7,6.2,.7);const G=new Bs(16767392,40,16,1.8);G.position.copy(N.position),G.position.z+=.8,Q.add(G),Q.add(N);const pt=dn(256,128,(x,I,H)=>{x.fillStyle="#7a5030",x.fillRect(0,0,I,H),x.strokeStyle="#d7b87a",x.lineWidth=5,x.strokeRect(8,8,I-16,H-16),x.fillStyle="#f0dca8",x.font="bold 30px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("BIENVENUE",I/2,H/2+2)}),at=new B(new Fe(4.4,2.2),new ee({map:pt,roughness:1}));at.rotation.x=-Math.PI/2,at.position.set(0,.05,1.7),Q.add(at);const et=new B(new Wt(.8,.6,1.2,10),xt(12740924));et.position.set(-3.9,.6,1),Q.add(et);for(const[x,I,H,dt,Rt]of[[-3.9,2,1,.85,4045656],[-4.3,2.7,.8,.5,16742981],[-3.5,2.8,1.2,.5,16748479]])Q.add(ce(new B(new sn(dt,0),xt(Rt)),{position:new L(x,I,H)}));Q.position.set(-20,0,$.z),Q.rotation.y=Math.PI/2,i.add(Q);const It={ouvrir(x){wt.rotation.y=-x*1.75,kt.material.opacity=.5*x},position:new L(-19.4,0,$.z)},Tt=(x,I)=>x<-12&&I>-3.2&&I<5.8,ne=(x,I,H=.8)=>!Tt(x,I)&&!e.some(dt=>x>dt.min[0]-H&&x<dt.max[0]+H&&I>dt.min[2]-H&&I<dt.max[2]+H),Me=(x=30)=>{for(let I=0;I<x;I++){const H=(t()-.5)*35,dt=-12.5+t()*24;if(ne(H,dt))return[H,dt]}return null},Ie=[12159576,11041354,13213804,9264952];for(let x=0;x<9;x++){const I=Me();if(!I)continue;const H=4+t()*4,dt=new B(new Xt(H,.26,.8+t()*.5),xt(Ie[x%4]));if(dt.position.set(I[0],.14,I[1]),dt.rotation.y=t()*3.14,i.add(dt),x%3===0){const Rt=new B(new Xt(H*.8,.26,.8),xt(Ie[(x+1)%4]));Rt.position.set(I[0]+.4,.41,I[1]+.3),Rt.rotation.y=t()*3.14,i.add(Rt)}}for(let x=0;x<16;x++){const I=Me();if(!I)continue;const H=new B(new sn(.35+t()*.25,0),xt(16052192));H.position.set(I[0],.4,I[1]),H.rotation.set(t()*6,t()*6,t()*6),i.add(H)}for(let x=0;x<9;x++){const I=Me();if(!I)continue;const H=new B(new Fe(1.6,2.1),new ee({color:x%3?16183778:12573938,roughness:1,side:Oe}));H.rotation.set(-Math.PI/2,0,t()*6),H.position.set(I[0],.05+x*.004,I[1]),i.add(H)}const hn=[14035002,4165606,16765517,4045656,2830648];for(let x=0;x<9;x++){const I=Me();if(!I)continue;const H=new B(new wn(.7+t()*1,14),new ee({color:hn[x%5],roughness:.4,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));H.rotation.x=-Math.PI/2,H.scale.set(1+t()*.8,1,1),H.rotation.z=t()*3,H.position.set(I[0],.06,I[1]),i.add(H)}{const x=Me();if(x){const I=new B(new Wt(.7,.7,1.2,12),xt(4165606));I.rotation.z=Math.PI/2,I.position.set(x[0],.7,x[1]),I.rotation.y=.8,i.add(I);const H=new B(new wn(1.6,16),new ee({color:4165606,roughness:.3,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));H.rotation.x=-Math.PI/2,H.scale.set(1.5,1,.9),H.position.set(x[0]+.8,.07,x[1]+.5),i.add(H)}}for(let x=0;x<40;x++){const I=Me();if(!I)continue;const H=new B(new Wt(.06,.06,.6+t()*.5,5),xt(x%3?11581632:13149002));if(H.rotation.set(Math.PI/2,0,t()*6),H.position.set(I[0],.08,I[1]),i.add(H),x%4===0){const dt=new B(new Wt(.2,.2,.16,6),xt(9081241));dt.position.set(I[0]+.5,.1,I[1]-.3),i.add(dt)}}for(let x=0;x<4;x++){const I=Me();if(!I)continue;const H=new ue;H.add(ce(new B(new Wt(.11,.11,2.4,8),xt(12159576)),{rotation:new mn(0,0,Math.PI/2),position:new L(0,.12,0)})),H.add(ce(new B(new Xt(.5,.5,.9),xt(x%2?14035002:7239554)),{position:new L(-1.2,.25,0)})),H.position.set(I[0],0,I[1]),H.rotation.y=t()*6,i.add(H)}for(let x=0;x<2;x++){const I=Me();if(!I)continue;for(let dt=0;dt<3;dt++){const Rt=new B(new De(.9-dt*.2,.1,6,18),xt(x?16756768:2830648));Rt.rotation.x=Math.PI/2,Rt.position.set(I[0],.1+dt*.18,I[1]),i.add(Rt)}const H=new B(new De(2.2,.1,6,16,1.6),xt(x?16756768:2830648));H.rotation.x=Math.PI/2,H.position.set(I[0]+1.6,.1,I[1]+.4),H.rotation.z=t()*6,i.add(H)}for(let x=0;x<3;x++){const I=Me();if(!I)continue;const H=new B(new De(.42,.18,8,14),xt([16765517,16742981,6013163][x]));H.rotation.x=Math.PI/2,H.position.set(I[0],.2,I[1]),i.add(H)}for(let x=0;x<4;x++){const I=Me();if(!I)continue;const H=new B(new Li(1.4+t()*.8,.7,9),xt(14729871));H.position.set(I[0],.3,I[1]),i.add(H);for(let dt=0;dt<5;dt++){const Rt=new B(new De(.28,.05,5,10,4.5),xt(15718312));Rt.rotation.set(t()*3,t()*3,t()*3),Rt.position.set(I[0]+(t()-.5)*3,.15,I[1]+(t()-.5)*3),i.add(Rt)}}for(let x=0;x<3;x++){const I=Me();if(!I)continue;const H=new ue;H.add(ce(new B(new Xt(2.4,1.6,2),xt(13148268)),{position:new L(0,.8,0)}));for(const dt of[-1,1])H.add(ce(new B(new Xt(2.4,.08,1),xt(11569752)),{position:new L(0,1.9,dt*1.3),rotation:new mn(dt*.9,0,0)}));H.position.set(I[0],0,I[1]),H.rotation.set(0,t()*6,(t()-.5)*.2),i.add(H)}for(let x=0;x<5;x++){const I=Me();if(!I)continue;const H=new B(new Xt(1.3,.6,.65),xt(11883834));H.position.set(I[0],.3+(x===4?.6:0),I[1]),H.rotation.y=t()*6,i.add(H)}{const x=Me();if(x){const I=new B(new Ce(.5,12,10),xt(14217290,{flatShading:!1}));I.position.set(x[0],.5,x[1]),i.add(I)}}for(let x=0;x<7;x++){const I=Me();if(!I)continue;const H=new B(new Xt(.7,.7,.7),xt([16742981,6013163,10216314,16765517][x%4]));H.position.set(I[0],.35,I[1]),H.rotation.y=t()*6,i.add(H)}for(let x=0;x<4;x++){const I=new B(new Xt(.9,7-x*.5,.25),xt(Ie[x]));I.position.set(-.8+x*1,3.4,-14.5+x*.05),I.rotation.z=.12+x*.03,I.rotation.x=-.12,i.add(I)}const Se=140,Xe=new Float32Array(Se*3),ti=[];for(let x=0;x<Se;x++)ti.push([(t()-.5)*36,1+t()*14,(t()-.5)*26,t()*6.28]);const Qe=new Ha(new ze().setAttribute("position",new $e(Xe,3)),new $r({map:Ya(),color:16773312,size:.5,transparent:!0,opacity:.7,blending:Nn,depthWrite:!1}));Qe.frustumCulled=!1,i.add(Qe),lg(i,[K,we,wt,Le,pe,te]);function Dn(x){const I=Qe.geometry.attributes.position;ti.forEach((H,dt)=>I.setXYZ(dt,H[0]+Math.sin(x*.2+H[3])*1.4,H[1]+Math.sin(x*.3+H[3])*.8,H[2]+Math.cos(x*.25+H[3])*1.2)),I.needsUpdate=!0,te.rotation.z=Math.sin(x*.6)*.012,Ot.material.emissiveIntensity=.4+Math.abs(Math.sin(x*2.2))*.9,F.material.opacity=.08+Math.sin(x*.4)*.025,y.emissiveIntensity=.45+Math.abs(Math.sin(x*3))*.9,de.visible&&de.scale.set(1+Math.sin(x*9)*.03,1,1+Math.sin(x*9)*.03),pe.rotation.z=-x*.6,Le.rotation.z=-x*.05+1}return{scene:i,colliders:e,maj:Dn,depart:new L(1,0,3),porteMaison:{x:-18.6,z:$.z},maisonApi:It,machineApi:X,limites:hg,limiterCamera:ug,nom:"Le grenier du professeur Mousse"}}const nn=(i,t={})=>xt(i,{flatShading:!1,roughness:.72,...t}),Pe=(i,t,e=16,n=12)=>new B(new Ce(i,e,n),t),ci=(i,t,e,n=6,s=12)=>new B(new Ks(i,t,n,s),e);function ye(i,t,e,n,s=1,r=1,o=1){return i.position.set(t,e,n),i.scale.set(s,r,o),i}function ru(i){const{jambe:t,torse:e,large:n,teteR:s,peau:r,cheveux:o,haut:a,bas:c,chaussure:l,enfant:u,lunettes:h=!1,moustache:f=!1,sac:d=!1,barbe:g=!1}=i,v=new ue,m=nn(r),p=nn(a),b=nn(c),E=nn(o,{roughness:.9}),_=nn(l),F=nn(16777215,{roughness:.5}),T=nn(new oe(r).multiplyScalar(.82).getHex()),P=t,R=t+e,S=ci(n*.86,e*.5,p);ye(S,0,P+e*.5,0,1,1,.8),v.add(S);const M=Pe(n*.8,p);ye(M,0,P+e*.2,n*.12,1,.8,.85),v.add(M);const U=new B(new Wt(n*.78,n*.82,.1,18),b);U.scale.z=.82,U.position.set(0,P+.03,0),v.add(U);const q=new B(new Xt(.1,.07,.03),nn(14725184,{metalness:.5}));q.position.set(0,P+.03,n*.66),v.add(q);const Z=new B(new De(s*.42,.045,8,18),p);Z.rotation.x=Math.PI/2,Z.position.set(0,R+.01,0),v.add(Z);const nt=new B(new Wt(s*.24,s*.28,.14,12),m);nt.position.set(0,R+.04,0),v.add(nt);const J=new ue;J.position.set(0,R+.05,0),v.add(J);const j=s*.95;J.add(ye(Pe(s,m,28,20),0,j,0,1,.97,.96)),J.add(ye(Pe(s*.7,m,20,14),0,j-s*.4,s*.2,1,.78,.88));for(const K of[-1,1]){J.add(ye(Pe(s*.28,m),K*s*.5,j-s*.27,s*.6,1,.9,.7)),J.add(ye(Pe(s*.19,m),K*s*.98,j-.01,0,.45,1,.8)),J.add(ye(Pe(s*.11,T),K*s*.99,j-.01,.01,.35,.8,.6));const ot=u?1.18:.9,vt=K*s*.37,Ct=j+s*.05,Pt=s*.84;J.add(ye(Pe(s*.21*ot,F),vt,Ct,Pt,1,1.12,.55)),J.add(ye(Pe(s*.125*ot,nn(4861724)),vt+K*.004,Ct-.005,Pt+s*.08*ot,1,1,.5)),J.add(ye(Pe(s*.07*ot,new Ae({color:1182213})),vt+K*.004,Ct-.005,Pt+s*.105*ot,1,1,.5)),J.add(ye(Pe(s*.035*ot,new Ae({color:16777215})),vt+.025,Ct+.035,Pt+s*.13*ot)),J.add(ye(Pe(s*.22*ot,T),vt,Ct+s*.1*ot,Pt-.012,1,.38,.55));const Ot=ci(s*.035,s*.24,E,4,8);Ot.rotation.z=Math.PI/2+K*(u?-.12:.05),Ot.position.set(vt,Ct+s*.3,Pt-.005),J.add(Ot),u&&J.add(ye(Pe(s*.09,new Ae({color:16748442,transparent:!0,opacity:.55})),K*s*.55,j-s*.2,s*.8,1.3,.8,.3))}J.add(ye(Pe(s*.13,m),0,j-s*.14,s*.95,1,.9,.9)),J.add(ye(Pe(s*.075,T),-s*.1,j-s*.18,s*.9)),J.add(ye(Pe(s*.075,T),s*.1,j-s*.18,s*.9));const ht=new B(new De(s*.2,.014,6,16,Math.PI),new Ae({color:9059115}));ht.rotation.z=Math.PI,ht.position.set(0,j-s*.36,s*.92),J.add(ht);const W=ye(Pe(s*.15,new Ae({color:4854800})),0,j-s*.47,s*.9,1,1.15,.4);if(W.visible=!1,J.add(W),f)for(const K of[-1,1]){const ot=ci(s*.05,s*.26,E,4,8);ot.rotation.z=Math.PI/2+K*.18,ot.position.set(K*s*.15,j-s*.27,s*.95),J.add(ot)}if(g&&J.add(ye(Pe(s*.72,new Ae({color:3877406,transparent:!0,opacity:.35}),20,14),0,j-s*.4,s*.2,1.01,.8,.9)),h){for(const ot of[-1,1]){const vt=new B(new De(s*.24,.018,6,20),nn(2830648,{metalness:.4}));vt.position.set(ot*s*.37,j+s*.05,s*.93),J.add(vt)}const K=new B(new Xt(s*.2,.02,.02),nn(2830648));K.position.set(0,j+s*.08,s*.95),J.add(K)}const Mt=new B(new Ce(s*1.04,22,14,0,Math.PI*2,0,Math.PI*(u?.56:.5)),E);Mt.position.set(0,j+.01,-.03),Mt.rotation.x=-.3,J.add(Mt);const yt=u?[[0,.98,.1],[-.35,.92,.1],[.35,.92,.1],[-.7,.7,.05],[.7,.7,.05],[-.2,.85,-.3],[.25,.85,-.3],[0,.8,-.55]]:[[0,.95,.05],[-.4,.85,.05],[.4,.85,.05],[0,.8,-.4]];for(const[K,ot,vt]of yt){const Ct=new B(new Li(s*(u?.17:.13),s*(u?.55:.28),8),E);Ct.position.set(K*s,j+ot*s,vt*s),Ct.rotation.set(.35+vt*.8,0,-K*1.2),J.add(Ct)}for(const K of[-.6,-.3,0,.3,.6])J.add(ye(Pe(s*.17,E,10,8),K*s,j+s*.78,s*(.58-Math.abs(K)*.25),1,.7,.8));for(const K of[-1,1])J.add(ye(new B(new Xt(.05,s*.34,.07),E),K*s*.9,j-s*.02,s*.25));const zt=e*.92,Bt=n*.27,Gt=[-1,1].map(K=>{const ot=new ue;ot.add(ye(Pe(Bt*1.25,p),0,0,0)),ot.add(ye(ci(Bt,zt*.34,p),0,-zt*.26,0));const vt=new ue;vt.position.set(0,-zt*.47,0),vt.rotation.x=-.12,ot.add(vt),vt.add(ye(ci(Bt*.8,zt*.3,m),0,-zt*.2,0));const Ct=new ue;Ct.position.set(0,-zt*.53,.01),vt.add(Ct),Ct.add(ye(Pe(Bt*.95,m),0,-.05,0,.9,1.1,.85)),Ct.add(ye(Pe(Bt*.4,m),K*Bt*.8,-0,Bt*.3));for(let Pt=0;Pt<4;Pt++)Ct.add(ye(ci(Bt*.17,Bt*.5,m,3,6),(Pt-1.5)*Bt*.4,-Bt*1.2,Bt*.1));return ot.position.set(K*(n+Bt*.9),R-.07,0),ot.userData.main=Ct,v.add(ot),ot}),ct=[-1,1].map(K=>{const ot=new ue;ot.add(ye(ci(n*.4,t*.3,b),0,-t*.26,0)),ot.add(ye(Pe(n*.38,b),0,-t*.5,.02)),ot.add(ye(ci(n*.33,t*.26,b),0,-t*.7,0));const vt=ye(Pe(n*.45,_),0,-t+.1,.07,1,.62,1.7);ot.add(vt),ot.add(ye(Pe(n*.3,F),0,-t+.09,n*.58,1,.65,.9));const Ct=new B(new Xt(n*.88,.05,n*1.55),F);Ct.position.set(0,-t+.03,.09),ot.add(Ct);for(let Pt=0;Pt<3;Pt++){const Ot=new B(new Xt(n*.5,.025,.035),F);Ot.position.set(0,-t+.17+Pt*.012,n*(.18+Pt*.1)),Ot.rotation.x=-.4,ot.add(Ot)}return ot.position.set(K*n*.46,P,0),v.add(ot),ot});if(d){const K=nn(3123310),ot=nn(2062928),vt=new B(new Xt(n*1.5,e*.9,.3),K);vt.position.set(0,P+e*.55,-n*.8),v.add(vt),v.add(ye(Pe(n*.75,K),0,P+e*1,-n*.8,1,.45,.35));const Ct=new B(new Xt(n*1,e*.35,.12),ot);Ct.position.set(0,P+e*.35,-n*.8-.2),v.add(Ct);const Pt=new B(new Xt(n*1,.02,.02),nn(16765517));Pt.position.set(0,P+e*.5,-n*.8-.26),v.add(Pt);const Ot=new B(new De(.12,.025,6,12,Math.PI),ot);Ot.position.set(0,P+e*1.1,-n*.8),v.add(Ot);for(const re of[-1,1]){const Kt=new B(new Xt(.09,e*.9,.05),ot);Kt.position.set(re*n*.52,P+e*.6,n*.1),Kt.rotation.x=0,v.add(Kt);const de=new B(new Xt(.09,.05,n*1.7),ot);de.position.set(re*n*.52,R-.02,-n*.3),v.add(de)}}return v.userData={jambes:ct,bras:Gt,tete:J,bouche:W,sourire:ht,mains:Gt.map(K=>K.userData.main),hauteurTete:R+.05+j},v}function dg({echelle:i=1}={}){const t=ru({jambe:.58,torse:.52,large:.3,teteR:.4,peau:15316362,cheveux:4861724,haut:16747069,bas:3895221,chaussure:14035002,enfant:!0,sac:!0});return t.scale.setScalar(i),t}function pg({echelle:i=1}={}){const t=ru({jambe:.86,torse:.78,large:.36,teteR:.3,peau:14986626,cheveux:3877406,haut:4039245,bas:7035464,chaussure:5913894,enfant:!1,lunettes:!0,moustache:!0,barbe:!0}),e=new B(new Xt(.2,.2,.04),nn(11569744));e.position.set(.2,1.35,.3),t.add(e);const n=new B(new Wt(.013,.013,.16,6),nn(14035002));return n.position.set(.22,1.47,.3),t.add(n),t.scale.setScalar(i),t}function Aa({grain:i=!1}={}){const t=new ue,e=xt(1907224,{flatShading:!1}),n=new B(new Ce(.9,10,8),e);n.scale.set(1.5,1,1),n.position.set(-1.5,1.1,0);const s=new B(new Ce(.62,10,8),e);s.position.set(0,1.2,0);const r=new B(new Ce(.58,10,8),e);r.position.set(1,1.25,0),t.add(n,s,r);const o=[];for(let a=0;a<3;a++)for(const c of[-1,1]){const l=new B(new Wt(.06,.05,1.5,4),e);l.position.set(-.9+a*.9,.6,c*.5),l.rotation.x=c*.6,t.add(l),o.push({p:l,c,i:a})}for(const a of[-1,1]){const c=new B(new Wt(.04,.04,1.1,4),e);c.position.set(1.5,1.8,a*.3),c.rotation.set(a*.4,0,-.7),t.add(c)}if(i){const a=new B(new Ks(.34,1.3,4,8),xt(16776688,{flatShading:!1}));a.rotation.z=Math.PI/2,a.position.set(.3,2.35,0),t.add(a)}return t.userData.pattes=a=>{for(const{p:c,c:l,i:u}of o)c.rotation.z=Math.sin(a*9+u*2.1+(l>0?0:Math.PI))*.35},t}function mg(){const i=new ue,t=new B(new Ce(2.6,16,12,0,Math.PI*2,0,Math.PI/2),xt(14035002,{flatShading:!1}));t.scale.set(1.25,1,1),t.position.y=.6,i.add(t);const e=xt(1907224,{flatShading:!1}),n=new B(new Ce(1,10,8),e);n.position.set(3.4,1,0),i.add(n);const s=new B(new Xt(.1,.1,5),e);s.position.set(0,3.2,0),s.rotation.y=Math.PI/2,s.visible=!1,i.add(s);for(const[r,o]of[[-1.4,1.2],[-1.4,-1.2],[.4,1.5],[.4,-1.5],[1.7,.8],[1.7,-.8]]){const a=new B(new Ce(.46,8,6),e);a.position.set(r,Math.sqrt(Math.max(.1,6.76-(r/1.25)**2-o*o))+.35,o),i.add(a)}for(const r of[-1,1])for(let o=0;o<3;o++){const a=new B(new Wt(.1,.08,2.2,4),e);a.position.set(-1.2+o*1.5,.5,r*2.4),a.rotation.x=r*.9,i.add(a)}return i}const Ri=3,yi=.42*Ri,Uo=1.8*Ri,gg=62,xg=22,_g=1.3;function vg({scene:i,colliders:t,depart:e,limites:n,limiterCamera:s}){let r={scene:i,colliders:t,limites:n,limiterCamera:s};const o=dg({echelle:Ri});o.position.copy(e),i.add(o);const a=e.clone(),c=new L;let l=!0,u=0,h=0,f=2.6;const d={yaw:0,pitch:.42,distance:17};function g(R){return a.x+yi>R.min[0]&&a.x-yi<R.max[0]&&a.y+Uo>R.min[1]&&a.y<R.max[1]&&a.z+yi>R.min[2]&&a.z-yi<R.max[2]}function v(R,S){if(S){a[R]+=S;for(const M of r.colliders){if(M.rond||!g(M))continue;const U=R==="x"?0:R==="y"?1:2;R==="y"?(S<0?(a.y=M.max[1],l=!0):a.y=M.min[1]-Uo,c.y=0):S>0?a[R]=M.min[U]-yi-.001:a[R]=M.max[U]+yi+.001}}}function m(R,S){for(const M of r.colliders){if(!M.rond||a.y>=M.haut||a.y+Uo<=(M.bas||0))continue;let U=M.x,q=M.z;if(M.x2!==void 0){const ht=M.x2-M.x,W=M.z2-M.z,Mt=ht*ht+W*W||1,yt=Math.max(0,Math.min(1,((a.x-M.x)*ht+(a.z-M.z)*W)/Mt));U=M.x+ht*yt,q=M.z+W*yt}let Z=a.x-U,nt=a.z-q;const J=Math.hypot(Z,nt),j=M.r+yi;if(!(J>=j)){if(!M.mur){if(R>=M.haut-.02&&c.y<=0){a.y=M.haut,c.y=0,l=!0;continue}if(S&&M.haut-a.y<=_g){a.y=M.haut,c.y=0,l=!0;continue}}J<1e-4?(Z=1,nt=0):(Z/=J,nt/=J),a.x=U+Z*j,a.z=q+nt*j}}}function p(R,S,M,U=0){o.parent&&o.parent.remove(o),r={scene:R.scene,colliders:R.colliders,limites:R.limites,limiterCamera:R.limiterCamera},r.scene.add(o),a.set(S,0,M),u=U,c.set(0,0,0),f=0,l=!0,o.position.copy(a),o.rotation.set(0,U,0)}function b(R,S,M){const U=S.actif("sprinter"),q=(S.actif("avancer")?1:0)-(S.actif("reculer")?1:0),Z=(S.actif("droite")?1:0)-(S.actif("gauche")?1:0),nt=U?24:14,J=-Math.sin(d.yaw),j=-Math.cos(d.yaw),ht=J*q+Math.cos(d.yaw)*Z,W=j*q-Math.sin(d.yaw)*Z,Mt=Math.hypot(ht,W),yt=Mt>.01;if(yt){c.x=ht/Mt*nt,c.z=W/Mt*nt;let ot=Math.atan2(ht/Mt,W/Mt)-u;for(;ot>Math.PI;)ot-=Math.PI*2;for(;ot<-Math.PI;)ot+=Math.PI*2;u+=ot*Math.min(1,R*12)}else c.x=0,c.z=0;l&&S.vient("sauter")&&(c.y=xg,l=!1),c.y-=gg*R;const zt=a.y,Bt=l;l=!1,v("x",c.x*R),v("z",c.z*R),v("y",c.y*R),m(zt,Bt),a.y<=0&&(a.y=0,c.y=0,l=!0),a.x=Math.min(r.limites.xMax,Math.max(r.limites.xMin,a.x)),a.z=Math.min(r.limites.zMax,Math.max(r.limites.zMin,a.z)),o.position.copy(a),o.rotation.y=u;const Gt=o.userData;yt&&l&&(h+=R*(U?15:10));const ct=yt&&l?Math.sin(h)*(U?.9:.6):0;return Gt.jambes[0].rotation.x=ct,Gt.jambes[1].rotation.x=-ct,Gt.bras[0].rotation.x=-ct*.9,Gt.bras[1].rotation.x=ct*.9,f>0&&!yt?(f-=R,Gt.bras[1].rotation.z=-2.5+Math.sin(M*11)*.35,Gt.bras[1].rotation.x=0,Gt.tete.rotation.z=Math.sin(M*3)*.08):(f=Math.min(f,0),Gt.bras[1].rotation.z=0,Gt.tete.rotation.z=0),l||(Gt.bras[0].rotation.x=-2.4,Gt.bras[1].rotation.x=-2.4,Gt.jambes[0].rotation.x=.4,Gt.jambes[1].rotation.x=-.3),o.position.y+=yt&&l?Math.abs(Math.sin(h))*.06*Ri:0,{bouge:yt,auSol:l,sprint:U}}function E(R,S){const M=d.distance,U=Math.sin(d.pitch),q=a.y+1.5*Ri,Z=Math.max(.45,Math.cos(d.pitch));let nt=a.x+Math.sin(d.yaw)*Z*M,J=Math.max(a.y+1.2,q+U*M),j=a.z+Math.cos(d.yaw)*Z*M;[nt,J,j]=r.limiterCamera(nt,J,j);const ht=a.x,W=a.y+1.4*Ri,Mt=a.z,yt=(Gt,ct,K)=>r.colliders.some(ot=>{if(!ot.rond)return Gt>ot.min[0]-.6&&Gt<ot.max[0]+.6&&ct>ot.min[1]-.6&&ct<ot.max[1]+.6&&K>ot.min[2]-.6&&K<ot.max[2]+.6;if(!ot.cam||ct>ot.haut+.6)return!1;let vt=ot.x,Ct=ot.z;if(ot.x2!==void 0){const Pt=ot.x2-ot.x,Ot=ot.z2-ot.z,re=Math.max(0,Math.min(1,((Gt-ot.x)*Pt+(K-ot.z)*Ot)/(Pt*Pt+Ot*Ot||1)));vt=ot.x+Pt*re,Ct=ot.z+Ot*re}return Math.hypot(Gt-vt,K-Ct)<ot.r+.6});for(let Gt=1;Gt<=10;Gt++){const ct=Gt/10;if(yt(ht+(nt-ht)*ct,W+(J-W)*ct,Mt+(j-Mt)*ct)){const K=Math.max(.05,(Gt-1)/10);nt=ht+(nt-ht)*K,J=W+(J-W)*K,j=Mt+(j-Mt)*K;break}}const zt=Math.min(1,S*9);R.position.x+=(nt-R.position.x)*zt,R.position.y+=(J-R.position.y)*zt,R.position.z+=(j-R.position.z)*zt;const Bt=d.pitch<0?Math.tan(Math.min(1.2,-d.pitch*1.15))*Math.hypot(R.position.x-a.x,R.position.z-a.z):0;R.lookAt(a.x,a.y+1.4*Ri+Bt,a.z)}function _(R,S,M=1){d.yaw-=R*.006*M,d.pitch=Math.min(1.3,Math.max(-1.15,d.pitch+S*.005*M))}function F(R){d.distance=Math.min(24,Math.max(7,d.distance+R*.015))}function T(R,S,M){a.set(R,0,S),u=M,c.set(0,0,0),f=0,o.position.copy(a),o.rotation.y=M}function P(R,S){return R!==void 0&&(d.yaw=R),S!==void 0&&(d.pitch=S),{yaw:d.yaw,pitch:d.pitch,distance:d.distance}}return{hero:o,pos:a,maj:b,camera:E,tourner:_,zoom:F,etat:P,placer:T,changerMonde:p}}const kr=[{id:"avancer",nom:"Avancer"},{id:"gauche",nom:"Aller à gauche"},{id:"reculer",nom:"Reculer"},{id:"droite",nom:"Aller à droite"},{id:"sauter",nom:"Sauter"},{id:"sprinter",nom:"Sprinter"},{id:"agir",nom:"Agir (bouton, porte)"},{id:"corde",nom:"Prendre la corde",bientot:!0}],Mg={avancer:["KeyW","ArrowUp"],gauche:["KeyA","ArrowLeft"],reculer:["KeyS","ArrowDown"],droite:["KeyD","ArrowRight"],sauter:["Space",null],sprinter:["ShiftLeft",null],agir:["KeyE",null],corde:[null,null]};function Jr(){return Object.fromEntries(Object.entries(Mg).map(([i,t])=>[i,[...t]]))}function ou(i){const t=Jr();if(i&&typeof i=="object")for(const e of kr){const n=i[e.id];Array.isArray(n)&&(t[e.id]=[0,1].map(s=>typeof n[s]=="string"&&n[s].length<24?n[s]:null))}return t}let Br=null;typeof navigator<"u"&&navigator.keyboard&&navigator.keyboard.getLayoutMap&&navigator.keyboard.getLayoutMap().then(i=>{Br=i}).catch(()=>{});const ll={Space:"Espace",ShiftLeft:"Maj",ShiftRight:"Maj",ControlLeft:"Ctrl",ControlRight:"Ctrl",AltLeft:"Alt",AltRight:"Alt",Enter:"Entrée",Tab:"Tab",Backspace:"Retour",ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→"};function au(i){return i?ll[i]?ll[i]:Br&&Br.get(i)?Br.get(i).toUpperCase():i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):i.startsWith("Numpad")?"Pavé "+i.slice(6):i:""}function yg(i){const t=new Set,e=new Set,n=new Set,s=new Set;let r=!1;const o=u=>{t.delete(u.code)},a=u=>{r||(t.has(u.code)||e.add(u.code),t.add(u.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(u.code)&&u.preventDefault())},c=()=>{t.clear(),e.clear()};return window.addEventListener("keydown",a),window.addEventListener("keyup",o),window.addEventListener("blur",c),{actif:u=>n.has(u)||(i()[u]||[]).some(h=>h&&t.has(h)),vient(u){const h=i()[u]||[];return s.has(u)||h.some(f=>f&&e.has(f))},finImage(){e.clear(),s.clear()},forcer(u,h){r||(h?n.add(u):n.delete(u))},declencher(u){r||s.add(u)},bloquer(u){r=u,u&&(c(),n.clear(),s.clear())},detruire(){window.removeEventListener("keydown",a),window.removeEventListener("keyup",o),window.removeEventListener("blur",c)}}}function Sg(i,t,e,n){const s=ou(i);for(const r of kr)if(!r.bientot)for(let o=0;o<2;o++)s[r.id][o]===n&&(s[r.id][o]=null);return s[t][e]=n,s}const wg={xMin:-160,xMax:160,zMin:-146,zMax:150},bg=new zi,Eg=new mn,Tg=new L,Ag=new L;function be(i,t,e,n=0,s=0,r=0,o=1,a=o,c=o){return new _e().compose(Tg.set(i,t,e),bg.setFromEuler(Eg.set(n,s,r,"YXZ")),Ag.set(o,a,c))}function Us(i,t,e,n){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new Va(s);return r.colorSpace=xn,n&&(r.wrapS=r.wrapT=Xs,r.repeat.set(n[0],n[1]),r.anisotropy=4),r}const ul=(i,t,e,n)=>{const s=n[0]-e[0],r=n[1]-e[1],o=Math.max(0,Math.min(1,((i-e[0])*s+(t-e[1])*r)/(s*s+r*r||1)));return Math.hypot(i-(e[0]+s*o),t-(e[1]+r*o))};function Rg({leger:i=!1}={}){const t=new ql,e=i?.5:1,n=y=>Math.max(1,Math.round(y*e)),s=Ii(4242),r=(y,C)=>y+s()*(C-y),o=[],a=wg,c=new L(0,0,0),l=[[[0,-30],[-8,-62],[8,-105],[0,-144]],[[-30,5],[-58,12],[-84,2],[-104,-6]],[[30,-4],[55,-10],[78,6],[92,22]],[[4,30],[12,62],[2,100],[0,140]]],u=11,h={x:124,z:34,r:30},f={x:-124,z:-8},d={x:78,z:-92,r:50},g=(y,C)=>{let O=1e9;for(const N of l)for(let G=0;G<N.length-1;G++)O=Math.min(O,ul(y,C,N[G],N[G+1]));return O},v=(y,C,O=0)=>Math.hypot(y,C)<46+O||g(y,C)<u+O||Math.hypot(y-h.x,C-h.z)<h.r+5+O||Math.hypot(y-f.x,C-f.z)<17+O,m=(y,C,O=14)=>y>a.xMin-O&&y<a.xMax+O&&C>a.zMin-O&&C<a.zMax+O;function p(y,C,O,N,G={}){m(y,C)&&o.push({rond:!0,x:y,z:C,r:O,haut:N,...G})}function b(y,C,O,N,G,pt,at={}){(m(y,C)||m(O,N))&&o.push({rond:!0,x:y,z:C,x2:O,z2:N,r:G,haut:pt,...at})}const E=(y,C,O)=>O.x2===void 0?Math.hypot(y-O.x,C-O.z):ul(y,C,[O.x,O.z],[O.x2,O.z2]),_=(y,C,O)=>!o.some(N=>N.rond&&E(y,C,N)<N.r+O+1.2);function F(y,{zone:C=null,essais:O=50,etendue:N=212,solide:G=!0}={}){for(let pt=0;pt<O;pt++){let at,et;if(C){const It=s()*6.283,Tt=Math.sqrt(s())*C.r;at=C.x+Math.cos(It)*Tt,et=C.z+Math.sin(It)*Tt}else at=r(-N,N),et=r(-N,N);if(!(et<-150&&Math.abs(at)<165)&&!v(at,et,y)&&!(G&&!_(at,et,y)))return[at,et]}return null}const T=13496063;t.background=new oe(T),t.fog=new za(T,.0014);const P=Us(8,256,(y,C,O)=>{const N=y.createLinearGradient(0,0,0,O);N.addColorStop(0,"#1668d8"),N.addColorStop(.3,"#3d95ee"),N.addColorStop(.5,"#8fd0fa"),N.addColorStop(.62,"#cdeeff"),N.addColorStop(1,"#cdeeff"),y.fillStyle=N,y.fillRect(0,0,C,O)}),R=new B(new Ce(2400,32,20),new Ae({map:P,side:rn,fog:!1,depthWrite:!1}));R.renderOrder=-10,t.add(R);const S=new L(.5,.7,.5).normalize(),M=Ya();for(const[y,C,O]of[[1100,16773552,.55],[460,16776160,1],[250,16777215,1]]){const N=new Sm(new $l({map:M,color:C,opacity:O,transparent:!0,fog:!1,depthWrite:!1,blending:Nn}));N.scale.setScalar(y),N.position.copy(S).multiplyScalar(2100),N.renderOrder=-9,t.add(N)}const U=[],q=new sn(1,1);for(let y=0;y<20;y++){const C=s()*6.283,O=r(500,1700),N=Math.cos(C)*O,G=Math.sin(C)*O,pt=r(620,900),at=r(.8,1.7);for(let et=0;et<6;et++){const It=q.clone();It.applyMatrix4(be(N+(et-2.5)*46*at+r(-14,14),pt+r(-10,14)+(et===2||et===3?16*at:0),G+r(-26,26),0,s()*6,0,r(46,74)*at,r(22,34)*at,r(38,60)*at)),It.deleteAttribute("uv"),U.push(It)}}const Z=new B(Ws(U,!1),new Ae({color:16777215,fog:!1}));Z.renderOrder=-8,t.add(Z),t.add(new nu(14676479,5929530,1.15));const nt=new su(16774095,1.7);nt.position.copy(S).multiplyScalar(300),t.add(nt);const J=Us(1024,1024,(y,C)=>{const O=Ii(7);y.fillStyle="#5c8a3a",y.fillRect(0,0,C,C);const N=["#4a7630","#6a9a44","#78a04a","#557f34","#86ac4e","#42702c"];for(let G=0;G<700;G++)y.fillStyle=N[G%6],y.globalAlpha=.25+O()*.3,y.beginPath(),y.ellipse(O()*C,O()*C,8+O()*46,5+O()*30,O()*3,0,6.3),y.fill();y.globalAlpha=1;for(let G=0;G<4e3;G++){y.strokeStyle=["#a0b05a","#c0c86a","#3b6226","#8aa048"][G%4],y.lineWidth=1.2,y.globalAlpha=.45;const pt=O()*C,at=O()*C,et=O()*6.3;y.beginPath(),y.moveTo(pt,at),y.lineTo(pt+Math.cos(et)*(5+O()*12),at+Math.sin(et)*(5+O()*12)),y.stroke()}y.globalAlpha=1;for(let G=0;G<70;G++)y.fillStyle=["#ffffff","#ffe27a","#ff9fc4"][G%3],y.beginPath(),y.arc(O()*C,O()*C,2.2,0,6.3),y.fill()},[40,40]),j=new B(new Fe(4e3,4e3),new ee({map:J,roughness:1}));j.rotation.x=-Math.PI/2,t.add(j);const ht=440,W=2048/ht,Mt=Us(2048,2048,y=>{const C=Ii(31),O=pt=>(pt+ht/2)*W,N=pt=>(pt+ht/2)*W;y.lineCap="round",y.lineJoin="round";const G=(pt,at,et,It)=>{for(const[Tt,ne]of[[1.25,.2],[1.1,.3],[1,.45],[.82,.55]])y.globalAlpha=ne,y.fillStyle=It,y.beginPath(),y.arc(O(pt),N(at),et*Tt*W,0,6.3),y.fill()};G(0,0,38,"#b79866"),G(f.x,f.z,20,"#8a6a48"),G(h.x,h.z,h.r+7,"#9a8658");for(const pt of l)for(const[at,et]of[[1.3,.2],[1.12,.3],[1,.45],[.8,.55]]){y.globalAlpha=et,y.strokeStyle="#b79866",y.lineWidth=u*1.7*at*W,y.beginPath(),y.moveTo(O(pt[0][0]*.6),N(pt[0][1]*.6));for(const It of pt)y.lineTo(O(It[0]),N(It[1]));y.stroke()}y.globalAlpha=.5;for(let pt=0;pt<2600;pt++){const at=(C()-.5)*ht,et=(C()-.5)*ht;(Math.hypot(at,et)<38||g(at,et)<u*.8)&&(y.fillStyle=["#8f7448","#d2ba8a","#a58a5c"][pt%3],y.beginPath(),y.ellipse(O(at),N(et),1.5+C()*3.5,1+C()*2.5,C()*3,0,6.3),y.fill())}y.globalAlpha=1}),yt=new B(new Fe(ht,ht),new ee({map:Mt,transparent:!0,roughness:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));yt.rotation.x=-Math.PI/2,yt.position.y=.02,t.add(yt);const zt=Us(256,512,(y,C,O)=>{const N=Ii(11);y.fillStyle="#5d4531",y.fillRect(0,0,C,O);for(let G=0;G<160;G++){y.strokeStyle=N()>.5?"rgba(30,18,10,.5)":"rgba(150,115,80,.35)",y.lineWidth=2+N()*5;const pt=N()*C;y.beginPath(),y.moveTo(pt,0),y.bezierCurveTo(pt+(N()-.5)*30,O*.3,pt+(N()-.5)*30,O*.6,pt+(N()-.5)*20,O),y.stroke()}for(let G=0;G<70;G++)y.fillStyle=`rgba(${70+N()*40},${120+N()*50},50,${.25+N()*.3})`,y.beginPath(),y.ellipse(N()*C,O*(.45+N()*.55),6+N()*26,10+N()*40,0,0,6.3),y.fill()},[3,2]),Bt=new ee({map:zt,roughness:1}),Gt=[],ct=[];function K(y,C,O,N=.05,G=Gt){const pt=y.index?y.toNonIndexed():y.clone();pt.applyMatrix4(O),pt.deleteAttribute("uv");const at=pt.attributes.position.count,et=new Float32Array(at*3),It=new oe(C);It.offsetHSL((s()-.5)*N,(s()-.5)*N,(s()-.5)*N);for(let Tt=0;Tt<at;Tt++)et.set([It.r,It.g,It.b],Tt*3);pt.setAttribute("color",new $e(et,3)),G.push(pt)}const ot=new Ce(1,7,5),vt=new Wt(1,1,1,8),Ct=new sn(1,1),Pt=new wn(1,12).rotateX(-Math.PI/2),Ot=new Di(cg,5);Ot.rotateX(-Math.PI/2);const re=new Ce(1,14,6,0,6.2832,0,Math.PI*.55),Kt=new wn(1,14).rotateX(Math.PI/2),de=new Wt(1,1,1,4),X=new ue,we=new B(new Xt(330,9,300),new ee({color:13618112,roughness:1,flatShading:!0}));we.position.y=4.5,X.add(we);const ae=new B(new Wt(98,74,84,30),new ee({color:4876938,roughness:.45}));ae.position.y=51,X.add(ae);const le=new B(new De(98,7,8,36),new ee({color:5996451,roughness:.4}));le.rotation.x=Math.PI/2,le.position.y=93,X.add(le);const qt=new B(new wn(94,30),new ee({color:4863268,roughness:1}));qt.rotation.x=-Math.PI/2,qt.position.y=91,X.add(qt);const te=(y,C,O)=>new L(y,C,O),jt=new ee({color:7031343,roughness:1,flatShading:!0});for(const[y,C,O]of[[[te(0,100,0),te(-20,170,6),te(12,250,-8),te(36,320,4),te(24,380,0)],26,9],[[te(-18,168,6),te(-52,196,10),te(-88,214,8)],10,4],[[te(12,250,-8),te(46,268,-16),te(80,286,-20)],9,4],[[te(30,310,4),te(-6,322,-8),te(-30,318,-10)],7,3]])X.add(new B(og(y,C,O,8).geometrie,jt));for(const[y,C,O,N,G,pt,at]of[[-92,226,8,58,22,48,3121228],[84,298,-20,60,23,50,4573013],[24,396,0,76,30,64,3121228],[-34,332,-10,48,19,42,4573013],[10,270,20,40,16,34,4045656]]){const et=new B(new sn(1,2),new ee({color:at,roughness:.9,flatShading:!0}));et.position.set(y,C,O),et.scale.set(N,G,pt),X.add(et);for(let It=0;It<5;It++){const Tt=new B(q,new ee({color:It%2?16747051:16740261})),ne=s()*6.28;Tt.position.set(y+Math.cos(ne)*N*.7,C+G*.55,O+Math.sin(ne)*pt*.7),Tt.scale.setScalar(5),X.add(Tt)}}X.children.forEach(y=>{y!==we&&y!==ae&&y!==le&&y!==qt&&(y.position.y-=13)}),X.position.set(0,0,-300),t.add(X),o.push({min:[-165,0,-450],max:[165,9,-150]});const D=Us(512,512,(y,C)=>{for(let O=0;O<6;O++)y.fillStyle=["#b98a5e","#ad7e52","#c2925f"][O%3],y.fillRect(O*86,0,84,512),y.fillStyle="rgba(0,0,0,0.3)",y.fillRect(O*86+84,0,2,512)},[12,1]);new B(new Fe(2800,520),new Ae({map:D}));const w=new B(new Fe(620,330),new Ae({color:2759956}));w.position.set(0,165,438),w.rotation.y=Math.PI,t.add(w);for(const[y,C,O,N]of[[44,360,-332,180],[44,360,332,180],[708,44,0,352],[2840,40,0,540]]){const G=new B(new Xt(y,C,30),new Ae({color:7031343}));G.position.set(O,N,432),t.add(G)}for(const[y,C,O,N,G]of[[-98,-58,-42,-96,11],[58,72,120,98,9],[-126,72,-66,112,10]]){const pt=Math.hypot(O-y,N-C),at=Math.atan2(N-C,O-y),et=new B(new Wt(G,G*1.08,pt,16),Bt);et.rotation.set(0,-at,Math.PI/2,"YXZ"),et.position.set((y+O)/2,G*.92,(C+N)/2),t.add(et);for(const[It,Tt,ne]of[[y,C,-1],[O,N,1]]){const Me=new B(new wn(G*1.02,16),new ee({color:13213804,roughness:1}));Me.position.set(It+Math.cos(at)*.1*ne,G*.92,Tt+Math.sin(at)*.1*ne),Me.rotation.y=-at+(ne>0?Math.PI/2:-Math.PI/2),t.add(Me)}for(let It=0;It<6;It++){const Tt=s();K(ot,6199868,be(y+(O-y)*Tt,G*1.85,C+(N-C)*Tt,0,0,0,r(4,8),1.4,r(4,8)),.06)}b(y,C,O,N,G,G*1.9,{cam:!0})}function tt(y,C,O,N,G,pt){const at=new sn(1,2),et=at.attributes.position;for(let Tt=0;Tt<et.count;Tt++){const ne=et.getX(Tt),Me=et.getY(Tt),Ie=et.getZ(Tt),hn=.86+.2*Math.sin(ne*4.1+Me*3.3+Ie*5.7+y)*Math.cos(Me*2.9-Ie*3.7+ne*1.3);et.setXYZ(Tt,ne*hn,Math.min(Me*hn,.78),Ie*hn)}at.computeVertexNormals();const It=.5+s()*.18;K(at,new oe(It,It*.99,It*.94),be(y,N*.3,C,0,s()*6,0,O,N,G),.02),pt&&K(ot,6199868,be(y,N*1.02,C,0,0,0,O*.62,N*.12,G*.62),.05),p(y,C,(O+G)*.4,N*1.06,{cam:O>6})}for(let y=0;y<14;y++){const C=r(8,20),O=F(C+2);O&&tt(O[0],O[1],C,r(7,15),C*r(.8,1.2),!0)}for(let y=0;y<n(55);y++){const C=r(3,6.5),O=F(C+1);O&&tt(O[0],O[1],C,r(1.5,3.3),C*r(.8,1.15),y%3===0)}for(let y=0;y<n(80);y++){const C=r(18,58),O=r(.55,1.2),N=s()*3.14,G=F(3);if(!G)continue;const pt=Math.cos(N)*C/2,at=Math.sin(N)*C/2,et=G[0]-pt,It=G[1]-at,Tt=G[0]+pt,ne=G[1]+at;v(et,It,2)||v(Tt,ne,2)||!_(et,It,O)||!_(Tt,ne,O)||!_(G[0]+pt/2,G[1]+at/2,O)||!_(G[0]-pt/2,G[1]-at/2,O)||(K(vt,7031343,be(G[0],O,G[1],Math.PI/2,Math.PI/2-N,0,O,C,O),.04),K(ot,8017462,be(et,O,It,0,0,0,O),.03),K(ot,8017462,be(Tt,O,ne,0,0,0,O),.03),b(et,It,Tt,ne,O,O*1.95))}for(let y=0;y<n(20);y++){const C=r(2.6,4),O=F(C+1);if(!O)continue;const N=s()*6;K(ot,11894842,be(O[0],C*.9,O[1],0,N,1.2,C*1.1,C*.8,C*.8),.03),K(ot,7031338,be(O[0]+Math.cos(N)*C*.55,C*1.05,O[1],0,N,1.2,C*.6,C*.7,C*.7),.03),p(O[0],O[1],C*.9,C*1.7)}const _t=[14038318,16747069,11037242,16748479,15253578];function z(y,C,O,N,G){const pt=r(-.1,.1),at=2.2+N*.12;if(K(vt,16051416,be(y,O/2,C,pt,0,pt,at,O,at),.03),K(re,G,be(y,O-.5,C,pt,0,pt,N,N*.62,N),.04),K(Kt,15259824,be(y,O-.6,C,pt,0,pt,N*.98,1,N*.98),.02),G===14038318||G===16747069)for(let et=0;et<9;et++){const It=s()*6.28,Tt=r(.15,.95);K(ot,16777215,be(y+Math.cos(It)*N*Math.sin(Tt)*.98,O-.5+N*.62*Math.cos(Tt)-.2,C+Math.sin(It)*N*Math.sin(Tt)*.98,0,0,0,N*.13,N*.05,N*.13),.01)}p(y,C,at+.4,O,{cam:!0})}for(let y=0;y<13;y++){const C=.75+y/13*4.783,O=24+y%3*9,N=f.x+Math.cos(C)*O,G=f.z+Math.sin(C)*O;_(N,G,4)&&z(N,G,r(18,40),r(10,20),_t[y%5])}for(let y=0;y<n(24);y++){const C=F(6);if(!C)continue;const O=1+Math.floor(s()*3),N=_t[y%5];for(let G=0;G<O;G++){const pt=C[0]+(G?r(-11,11):0),at=C[1]+(G?r(-11,11):0);G&&(v(pt,at,4)||!_(pt,at,4))||z(pt,at,r(10,30)*(G?.7:1),r(6,15)*(G?.75:1),N)}}const k=[16747051,16740261,16777215,11566335,16765517,16734815];function st(y,C,O){const N=r(35,85),G=r(-.16,.16),pt=s()*6.28;K(vt,4168261,be(y+Math.sin(G)*N*.5*Math.cos(pt),N/2,C+Math.sin(G)*N*.5*Math.sin(pt),0,0,0,.9,N,.9),.05);const at=y+Math.sin(G)*N*Math.cos(pt),et=C+Math.sin(G)*N*Math.sin(pt),It=r(5,9);for(let Tt=0;Tt<9;Tt++){const ne=Tt/9*6.28;K(ot,O,be(at+Math.cos(ne)*It*.95,N+.4,et+Math.sin(ne)*It*.95,0,-ne,.15,It*.62,It*.17,It*.32),.04)}K(ot,16761370,be(at,N+1.2,et,0,0,0,It*.34),.03);for(let Tt=0;Tt<2;Tt++)K(ot,4565068,be(y+(Tt?5:-5),N*(.25+Tt*.2),C,0,0,Tt?-.7:.7,8,.8,2.6),.05);p(y,C,1.1,14)}for(let y=0;y<n(60);y++){const C=F(2.5,{zone:d});C&&st(C[0],C[1],k[y%6])}for(let y=0;y<n(45);y++){const C=F(2.5);C&&st(C[0],C[1],k[y%6])}for(let y=0;y<n(50);y++){const C=F(2);if(!C)continue;const O=r(6,9),N=r(24,36);for(let G=0;G<3;G++){const pt=G/3*6.28+.4;K(ot,5222474,be(C[0]+Math.cos(pt)*O,N+O*.2,C[1]+Math.sin(pt)*O,0,0,0,O*1.2,O*.22,O*1.2),.05)}K(vt,4168261,be(C[0],N/2,C[1],0,0,0,.7,N,.7),.03),p(C[0],C[1],.9,14)}const it=()=>new L(s()-.5,s()-.5,s()-.5).normalize();for(let y=0;y<n(18);y++){const C=F(2);if(!C)continue;const O=r(30,60);K(vt,5417040,be(C[0],O/2,C[1],0,0,0,.7,O,.7),.03);for(let N=0;N<22;N++){const G=it();K(de,16053486,be(C[0]+G.x*6,O+G.y*6,C[1]+G.z*6,G.z*1.4,0,-G.x*1.4,.18,6,.18),.01)}K(ot,15261888,be(C[0],O,C[1],0,0,0,2.2),.01),p(C[0],C[1],.9,14)}function gt(y,C){const O=new _s,N=14;O.moveTo(0,0);for(let at=1;at<=N;at++){const et=at/N,It=C*Math.sin(Math.PI*Math.pow(et,.7));O.lineTo(et*y-1,It*(at%2?1:.55))}for(let at=N;at>=1;at--){const et=at/N,It=C*Math.sin(Math.PI*Math.pow(et,.7));O.lineTo(et*y-1,-It*(at%2?1:.55))}O.closePath();const G=new Di(O),pt=G.attributes.position;for(let at=0;at<pt.count;at++)pt.setZ(at,-Math.pow(pt.getX(at)/y,2)*y*.38);return G}const Lt=[gt(60,7),gt(80,9),gt(48,6)];for(let y=0;y<n(44);y++){const C=F(16,{solide:!1});if(!C)continue;const O=7+Math.floor(s()*4),N=r(.7,1.1),G=[3116858,4038726,5026389][y%3];for(let pt=0;pt<O;pt++){const at=pt/O*6.28+s()*.4;K(Lt[pt%3],G,new _e().multiplyMatrices(be(C[0],.5,C[1],0,-at,0,N),new _e().makeRotationZ(r(.55,1.15))),.06)}}const ft=[14254635,12735789,15250506,9416252,7049018,11027242],St=(y,C)=>Math.hypot(y-h.x,C-h.z)<h.r+8;for(let y=0;y<n(150);y++){const C=r(-212,212),O=r(-212,212);if(St(C,O))continue;const N=r(3,7);for(let G=0;G<3;G++)K(Pt,[6263872,6987334,5605946][G],be(C+r(-N,N),.035+(y+G)%5*.004,O+r(-N,N),0,s()*6,0,N*r(.6,1.1),1,N*r(.6,1.1)),.04,ct)}for(let y=0;y<n(220);y++){const C=r(-212,212),O=r(-212,212);if(g(C,O)<5||St(C,O))continue;const N=r(10,26);K(Ot,ft[y%6],be(C,.06+y%9*.005,O,0,s()*6.28,0,N,N,N),.06,ct)}for(let y=0;y<n(420);y++){const C=r(-212,212),O=r(-212,212),N=r(.3,.7),G=.5+s()*.25;K(Ct,new oe(G,G*.98,G*.92),be(C,N*.15,O,0,s()*6,0,N*1.3,N*.55,N),.02)}const Dt=new B(new wn(h.r,40),new ee({color:5218264,roughness:.05,metalness:.55,transparent:!0,opacity:.88}));Dt.rotation.x=-Math.PI/2,Dt.position.set(h.x,.12,h.z),t.add(Dt);const Ht=[];for(let y=0;y<3;y++){const C=new B(new Zr(.92,1,40),new Ae({color:16777215,transparent:!0,opacity:.5,side:Oe,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.set(h.x+r(-12,12),.2,h.z+r(-12,12)),t.add(C),Ht.push({o:C,ph:y/3})}for(let y=0;y<7;y++){const C=s()*6.28,O=r(4,h.r-8),N=h.x+Math.cos(C)*O,G=h.z+Math.sin(C)*O,pt=r(4,7);if(K(Pt,4038726,be(N,.3,G,0,0,0,pt,1,pt),.05),y%2===0){for(let at=0;at<6;at++){const et=at/6*6.28;K(ot,16752580,be(N+Math.cos(et)*1.4,1.2,G+Math.sin(et)*1.4,0,-et,.5,1.6,.5,.9),.03)}K(ot,16765517,be(N,1.4,G,0,0,0,.8),.02)}}p(h.x,h.z,h.r-1.5,200,{mur:!0});const bt=new B(Ws(Gt,!1),new ee({vertexColors:!0,roughness:.85,side:Oe}));t.add(bt);const Jt=new B(Ws(ct,!1),new ee({vertexColors:!0,roughness:1,side:Oe,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));t.add(Jt);const Yt={value:0};function Zt(){const C=[],O=[],N=[];for(let pt=0;pt<=6;pt++){const at=pt/6,et=.5*(1-Math.pow(at,1.6))+.02,It=at*at*.35;C.push(-et,at,It,et,at,It);const Tt=new oe().lerpColors(new oe(2910760),new oe(10935390),Math.pow(at,.8));if(O.push(Tt.r,Tt.g,Tt.b,Tt.r,Tt.g,Tt.b),pt<6){const ne=pt*2;N.push(ne,ne+1,ne+2,ne+1,ne+3,ne+2)}}const G=new ze;return G.setAttribute("position",new ve(C,3)),G.setAttribute("color",new ve(O,3)),G.setIndex(N),G.computeVertexNormals(),G}const V=new ee({vertexColors:!0,roughness:.8,side:Oe});V.onBeforeCompile=y=>{y.uniforms.uT=Yt,y.vertexShader=`uniform float uT;
${y.vertexShader}`.replace("#include <begin_vertex>",`vec3 transformed = vec3(position);
      float ph = instanceMatrix[3].x * 0.06 + instanceMatrix[3].z * 0.045;
      float amp = position.y * position.y;
      transformed.x += sin(uT * 1.6 + ph) * 2.4 * amp;
      transformed.z += cos(uT * 1.2 + ph * 1.3) * 1.2 * amp;`)};const At=n(9e3),ut=new Hs(Zt(),V,At),mt=new He;let Et=0;function lt(y,C,O,N,G,pt){for(let at=0;at<O&&Et<At;at++){const et=s()*6.28,It=Math.sqrt(s())*N,Tt=y+Math.cos(et)*It,ne=C+Math.sin(et)*It;v(Tt,ne,1)||(mt.position.set(Tt,0,ne),mt.rotation.set(r(-.3,.3),s()*6.28,r(-.3,.3)),mt.scale.set(r(1.4,2.6),r(G,pt),1),mt.updateMatrix(),ut.setMatrixAt(Et++,mt.matrix))}}for(let y=0;y<26;y++){const C=-.6+y/26*4.6;lt(h.x+Math.cos(C)*(h.r+9),h.z+Math.sin(C)*(h.r+9),n(26),5,34,66)}for(let y=0;y<n(260)&&Et<At;y++){const C=F(4,{solide:!1,etendue:222});C&&lt(C[0],C[1],18+Math.floor(s()*28),r(5,14),14,44)}ut.count=Et,ut.frustumCulled=!1,t.add(ut);const Qt=new Hs(new Ce(1,10,8),new ee({color:14677759,transparent:!0,opacity:.5,roughness:.05,metalness:.4}),n(260));for(let y=0;y<Qt.count;y++){const C=r(-200,200),O=r(-200,200),N=g(C,O)<u||Math.hypot(C,O)<20?0:r(.35,.8);mt.position.set(C,N*.7,O),mt.rotation.set(0,0,0),mt.scale.set(N,N*.8,N),mt.updateMatrix(),Qt.setMatrixAt(y,mt.matrix)}t.add(Qt);const ge=3.6,Le=4.5,pe=6,Ze=20;function Je(y){return y.map((C,O)=>{const N=y[Math.max(0,O-1)],G=y[Math.min(y.length-1,O+1)],pt=G[0]-N[0],at=G[1]-N[1],et=Math.hypot(pt,at)||1;return[C[0]-at/et*Le,C[1]+pt/et*Le]})}const cn=l.map(y=>Je(y)),je=l.map(y=>Je([...y].reverse())),ln=[],un=[];let jn=!1;function An(y,C){const O={rond:!0,x:0,z:0,x2:0,z2:0,r:.75*C,haut:-1,cam:!1,mesh:y,ech:C,cap:0,actif:!1};return o.push(O),ln.push(O),O}function Rn(y,C,O,N,G,pt){y.actif=!0,y.cap=N,y.cx=C,y.cz=O,y.haut=1.9*y.ech;const at=Math.cos(N),et=Math.sin(N);y.x=C-at*1.6*y.ech,y.z=O-et*1.6*y.ech,y.x2=C+at*1*y.ech,y.z2=O+et*1*y.ech,y.mesh.visible=!0,y.mesh.position.set(C,0,O),y.mesh.rotation.y=-N,pt&&y.mesh.userData.pattes&&y.mesh.userData.pattes(G)}function _n(y,C,O,N,G,pt){const at={x:C,z:O,cap:N,chemin:G,etape:"retour",file:[],hist:[[C,O]],corps:An(y,y.scale.x),suiveuses:[],bouge:!1};for(let et=0;et<pt;et++){const It=Aa({grain:et%2===0});It.scale.setScalar(ge),It.visible=!1,t.add(It),at.suiveuses.push(An(It,ge))}return un.push(at),at}function vn(y){y.etape==="aller"?(y.etape="retour",y.file=je[y.chemin].map(C=>[...C])):(y.etape="aller",y.file=cn[y.chemin].map(C=>[...C]))}function pi(y,C,O){y.bouge=!1,y.file.length||vn(y);const N=y.file[0],G=N[0]-y.x,pt=N[1]-y.z;if(Math.hypot(G,pt)<2.5){y.file.shift();return}let et=Math.atan2(pt,G)-y.cap;for(;et>Math.PI;)et-=Math.PI*2;for(;et<-Math.PI;)et+=Math.PI*2;y.cap+=Math.sign(et)*Math.min(Math.abs(et),1.9*C);const It=pe*C*(Math.abs(et)>.9?.25:1),Tt=y.x+Math.cos(y.cap)*It,ne=y.z+Math.sin(y.cap)*It;if(jn&&Math.hypot(Tt,ne)<56&&Math.hypot(Tt,ne)<Math.hypot(y.x,y.z))return;const Me=y.x+Math.cos(y.cap)*8,Ie=y.z+Math.sin(y.cap)*8;let hn=O&&Math.hypot(Me-O.x,Ie-O.z)<6&&O.y<7;if(!hn){for(const Xe of ln)if(!(!Xe.actif||Xe===y.corps||y.suiveuses.includes(Xe))&&Math.hypot(Me-Xe.cx,Ie-Xe.cz)<7.5){hn=!0;break}}if(hn)return;y.x=Tt,y.z=ne,y.bouge=!0;const Se=y.hist[y.hist.length-1];Math.hypot(y.x-Se[0],y.z-Se[1])>=1&&(y.hist.push([y.x,y.z]),y.hist.length>Ze*(y.suiveuses.length+1)+6&&y.hist.shift())}const Kn=i?2:3;for(let y=0;y<Kn;y++){const C=Aa({grain:!0});C.scale.setScalar(ge),t.add(C);const O=je[y][0],N=je[y][1],G=_n(C,O[0],O[1],Math.atan2(N[1]-O[1],N[0]-O[0]),y,2);G.file=je[y].slice(1).map(pt=>[...pt])}let Ke=null;function Qn(){if(!Ke)return;const y=un.indexOf(Ke);y>=0&&un.splice(y,1);for(const C of[o,ln]){const O=C.indexOf(Ke.corps);O>=0&&C.splice(O,1)}t.remove(Ke.corps.mesh),Ke=null}function ws(y){Qn(),t.add(y);const C=Kn%l.length;Ke=_n(y,y.position.x,y.position.z,-y.rotation.y,C,0),Ke.etape="aller";const O=Math.atan2(y.position.z,y.position.x);let N=Math.atan2(cn[C][0][1],cn[C][0][0]);for(;N<O;)N+=Math.PI*2;N-O>Math.PI&&(N-=Math.PI*2);const G=Math.max(2,Math.ceil(Math.abs(N-O)/.3));Ke.file=[];for(let pt=1;pt<=G;pt++){const at=O+(N-O)*pt/G;Ke.file.push([Math.cos(at)*19,Math.sin(at)*19])}Ke.file.push(...cn[C].map(pt=>[...pt]))}const A=[];for(let y=0;y<3;y++){const C=F(13);if(!C)continue;const O=mg();O.scale.setScalar(1.6),t.add(O);const N=An(O,1);N.r=4.4,A.push({co:N,cx:C[0],cz:C[1],ph:s()*6})}const $=[],rt=new _s;rt.moveTo(0,0),rt.bezierCurveTo(8,10,22,12,20,2),rt.bezierCurveTo(22,-10,8,-12,0,0);for(let y=0;y<5;y++){const C=new ue,O=[16747051,16740261,7321599,16765517,11566335][y],N=[];for(const pt of[-1,1]){const at=new ue,et=new B(new Di(rt),new ee({color:O,side:Oe,roughness:.6}));et.rotation.x=-Math.PI/2,et.scale.x=pt,et.rotation.z=pt>0?0:Math.PI,at.add(et),C.add(at),N.push(at)}const G=new B(new Ks(1.4,9,4,8),new ee({color:3811866}));G.rotation.x=Math.PI/2,C.add(G),C.scale.setScalar(1.1),t.add(C),$.push({g:C,ailes:N,cx:r(-90,90),cz:r(-90,90),ph:s()*6,haut:r(46,96)})}const Q=n(420),Y=new Float32Array(Q*3),wt=[];for(let y=0;y<Q;y++)wt.push([r(-170,170),r(4,120),r(-170,170),s()*6.28]);const Ut=new Ha(new ze().setAttribute("position",new $e(Y,3)),new $r({map:M,color:16776160,size:1.8,transparent:!0,opacity:.7,depthWrite:!1}));Ut.frustumCulled=!1,t.add(Ut);let Vt=null;function kt(y,C){const O=Vt===null?0:Math.min(.1,Math.max(0,y-Vt));Vt=y,Yt.value=y,Z.rotation.y=y*.004;for(const N of un)pi(N,O,C),Rn(N.corps,N.x,N.z,N.cap,y,N.bouge),N.suiveuses.forEach((G,pt)=>{const at=N.hist.length-1-(pt+1)*Ze;if(at<1)return;const et=N.hist[at],It=N.hist[at+1];Rn(G,et[0],et[1],Math.atan2(It[1]-et[1],It[0]-et[0]),y+pt*.7,N.bouge)});for(const N of A){const G=y*.12+N.ph;Rn(N.co,N.cx+Math.cos(G)*4,N.cz+Math.sin(G)*4,G+Math.PI/2,y,!1),N.co.haut=5,N.co.x2=N.co.x=N.co.cx,N.co.z2=N.co.z=N.co.cz}for(const N of $){const G=y*.25+N.ph,pt=N.cx+Math.sin(G)*50,at=N.cz+Math.cos(G*.8)*40,et=N.haut+Math.sin(G*2.3)*12;N.g.position.set(pt,et,at),N.g.rotation.y=Math.atan2(Math.cos(G)*50,-Math.sin(G*.8)*32)-Math.PI/2;const It=Math.sin(y*14+N.ph)*.9;N.ailes[0].rotation.z=It,N.ailes[1].rotation.z=-It}for(let N=0;N<Q;N++){const G=wt[N];Y[N*3]=G[0]+Math.sin(y*.2+G[3])*8,Y[N*3+1]=G[1]+Math.sin(y*.3+G[3]*2)*4,Y[N*3+2]=G[2]+Math.cos(y*.25+G[3])*8}Ut.geometry.attributes.position.needsUpdate=!0;for(const N of Ht){const G=(y*.3+N.ph)%1;N.o.scale.setScalar(2+G*16),N.o.material.opacity=.5*(1-G)}}return{nom:"Le jardin géant",scene:t,colliders:o,limites:a,maj:kt,depart:c,limiterCamera:(y,C,O)=>[Math.min(a.xMax+30,Math.max(a.xMin-30,y)),Math.min(220,Math.max(.9,C)),Math.min(a.zMax+30,Math.max(a.zMin-30,O))],adopter:ws,retirerVedette:Qn,calme:y=>{jn=y}}}function cu(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}function Cg({racine:i,clavier:t}){if(!cu())return{actif:!1};i.classList.add("tactile"),i.insertAdjacentHTML("beforeend",`
    <div class="tactile-ui" id="tactile-ui">
      <div class="joystick" id="joy"><div class="pouce" id="pouce"></div></div>
      <div class="boutons-tactiles">
        <button class="bt" id="t-sprint">Sprint</button>
        <button class="bt grand" id="t-saut">Sauter</button>
      </div>
    </div>
    <div class="tourne" id="tourne"><p>Tourne ton téléphone à l’horizontale pour jouer</p></div>`);const e=i.querySelector("#joy"),n=i.querySelector("#pouce"),s=56;let r=null,o={x:0,y:0};const a=(g,v)=>{t.forcer("droite",g>.3),t.forcer("gauche",g<-.3),t.forcer("reculer",v>.3),t.forcer("avancer",v<-.3)},c=g=>{let v=g.clientX-o.x,m=g.clientY-o.y;const p=Math.hypot(v,m);p>s&&(v=v/p*s,m=m/p*s),n.style.transform=`translate(${v}px, ${m}px)`,a(v/s,m/s)};e.addEventListener("pointerdown",g=>{g.preventDefault(),r=g.pointerId;const v=e.getBoundingClientRect();o={x:v.left+v.width/2,y:v.top+v.height/2};try{e.setPointerCapture(r)}catch{}c(g)}),e.addEventListener("pointermove",g=>{g.pointerId===r&&c(g)});const l=g=>{g.pointerId===r&&(r=null,n.style.transform="",a(0,0))};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l);const u=i.querySelector("#t-saut");u.addEventListener("pointerdown",g=>{g.preventDefault(),t.declencher("sauter"),t.forcer("sauter",!0)});const h=()=>t.forcer("sauter",!1);u.addEventListener("pointerup",h),u.addEventListener("pointercancel",h),u.addEventListener("pointerleave",h);const f=i.querySelector("#t-sprint");f.addEventListener("pointerdown",g=>{g.preventDefault(),t.forcer("sprinter",!0),f.classList.add("appuye")});const d=()=>{t.forcer("sprinter",!1),f.classList.remove("appuye")};return f.addEventListener("pointerup",d),f.addEventListener("pointercancel",d),f.addEventListener("pointerleave",d),{actif:!0,montrer(g){i.querySelector("#tactile-ui").style.display=g?"":"none"}}}const Pg=[{id:"p1",qui:"papa",texte:"Regarde, fiston !",ton:"Tout content, il arrive avec une surprise."},{id:"t1",qui:"theo",texte:"Papa ? Qu’est-ce que c’est ?",ton:"Curieux."},{id:"p2",qui:"papa",texte:"J’ai créé une nouvelle machine, pour rétrécir les objets !",ton:"Très fier de lui."},{id:"p3",qui:"papa",texte:"Viens, je vais te la montrer avec cette pomme.",ton:"Pressé de montrer."},{id:"p4",qui:"papa",texte:"Regarde bien !",ton:"Comme un magicien avant son tour."},{id:"p5",qui:"papa",texte:"Et maintenant, le rayon !",ton:"Fort, comme une annonce."},{id:"p6",qui:"papa",texte:"Ça marche ! Elle est toute petite !",ton:"Il n’en revient pas."},{id:"t2",qui:"theo",texte:"Ah… ah…",ton:"Le nez qui chatouille, avant d’éternuer."},{id:"p7",qui:"papa",texte:"Fiston ? Ça va ?",ton:"Un peu inquiet."},{id:"t3",qui:"theo",texte:"Ah… ah… ah…",ton:"Ça monte, ça monte…"},{id:"t4",qui:"theo",texte:"Atchoum !",ton:"Un énorme éternuement."},{id:"p8",qui:"papa",texte:"Oh non ! Théo ! Mon fils ! Il est tout petit !",ton:"Affolé."},{id:"t5",qui:"theo",texte:"Papa ? Qu’est-ce qui m’arrive ?",ton:"Perdu, un peu peur."},{id:"p9",qui:"papa",texte:"La machine surchauffe ! Elle va exploser !",ton:"Il crie, c’est la panique."},{id:"t6",qui:"theo",texte:"Papa ! Aide-moi !",ton:"Il crie au secours."},{id:"t7",qui:"theo",texte:"Aaaaaah !",ton:"Un long cri : il vole dans les airs."},{id:"t8",qui:"theo",texte:"Aïe… Où suis-je ? Tout est tellement grand !",ton:"Sonné, puis émerveillé."},{id:"t9",qui:"theo",texte:"Oh ! Une fourmi géante !",ton:"Surpris, il sursaute."},{id:"t10",qui:"theo",texte:"Elle est plus grande que moi !",ton:"Impressionné."},{id:"t11",qui:"theo",texte:"Bon… Il faut que je retrouve la maison !",ton:"Décidé."}],Ir=Object.fromEntries(Pg.map(i=>[i.id,i.texte])),No=Symbol("annule"),Ge=i=>i<.5?2*i*i:1-(-2*i+2)**2/2,$t=(i,t,e)=>new L(i,t,e);function Lg({scene:i,garage:t,joueur:e,moteur:n,son:s,voix:r,racine:o,clavier:a,surFin:c}){const{maisonApi:l,machineApi:u}=t,h=Ya();let f=!1,d=!1,g=0,v=null,m=null,p=null,b=i,E=0,_=0,F=null,T="foret";const P=()=>(p||(p=Rg({leger:cu()}),n.renderer.compile(p.scene,n.camera)),p),R=new Set,S=new Set,M=[],U={pos:$t(0,0,0),look:$t(0,0,0),posC:$t(0,0,0),lookC:$t(0,0,0)};o.insertAdjacentHTML("beforeend",`
    <div class="cine" id="cine" hidden>
      <div class="bande haut"></div><div class="bande bas"></div>
      <div class="sous-titre" id="st" hidden><b id="st-nom"></b><span id="st-texte"></span></div>
      <button class="bouton secondaire petit" id="cine-passer">Passer l'animation</button>
      <div class="flash" id="cine-flash"></div>
      <div class="noir" id="cine-noir"><p id="cine-carte"></p></div>
    </div>`);const q=z=>o.querySelector(z),Z=q("#cine"),nt=q("#st"),J=q("#cine-flash"),j=q("#cine-noir"),ht=()=>{if(d)throw No};function W(z,k){return new Promise(st=>{if(d){st();return}R.add({t:0,dur:Math.max(.001,z),fn:k,res:st})}).then(ht)}const Mt=z=>W(z),yt=(z,k,st=!1)=>{U.posC.copy(z),U.lookC.copy(k),st&&(U.pos.copy(z),U.look.copy(k))};function zt(z,k){if(f){k!==void 0&&(_=k),g+=z;for(const st of[...R]){st.t+=z;const it=Math.min(1,st.t/st.dur);st.fn&&st.fn(it),it>=1&&(R.delete(st),st.res())}for(const st of[...S])st(z,g)===!1&&S.delete(st);p&&b===p.scene&&p.maj(_,e.hero.position),U.pos.lerp(U.posC,1-Math.exp(-z*2.6)),U.look.lerp(U.lookC,1-Math.exp(-z*3.4)),n.camera.position.copy(U.pos),E>0&&(n.camera.position.x+=(Math.random()-.5)*E*1.2,n.camera.position.y+=(Math.random()-.5)*E*1.2,E=Math.max(0,E-z*1.4)),n.camera.lookAt(U.look)}}const Bt=z=>{z.userData.jambes.forEach(k=>{k.rotation.x=0})};function Gt(z,k,st,it=7,gt=!0){const Lt=z.position,ft=k-Lt.x,St=st-Lt.z,Dt=Math.hypot(ft,St),Ht=Math.atan2(ft,St),bt=Lt.x,Jt=Lt.z,Yt=z.rotation.y;let Zt=Ht-Yt;for(;Zt>Math.PI;)Zt-=Math.PI*2;for(;Zt<-Math.PI;)Zt+=Math.PI*2;const V=Math.max(.05,Dt/it),At=z.userData;return W(V,ut=>{Lt.x=bt+ft*ut,Lt.z=Jt+St*ut,z.rotation.y=Yt+Zt*Math.min(1,ut*V/.35);const mt=g*(it>7?14:10),Et=Math.sin(mt);At.jambes[0].rotation.x=Et*.7,At.jambes[1].rotation.x=-Et*.7,gt&&(At.bras[0].rotation.x=-Et*.55,At.bras[1].rotation.x=Et*.55),Lt.y=Math.abs(Et)*.09}).then(()=>{Bt(z),Lt.y=0})}function ct(z,k,st,it=.5){const gt=z.rotation.y;let Lt=Math.atan2(k-z.position.x,st-z.position.z)-gt;for(;Lt>Math.PI;)Lt-=Math.PI*2;for(;Lt<-Math.PI;)Lt+=Math.PI*2;return W(it,ft=>{z.rotation.y=gt+Lt*Ge(ft)})}function K(z,k,st,it=.5){const gt=z[k];return W(it,Lt=>{z[k]=gt+(st-gt)*Ge(Lt)})}const ot=z=>z.localToWorld($t(0,z.userData.hauteurTete,.2));function vt(z,k){const st=z.userData,it=(gt,Lt)=>{if(!k.v)return st.bouche.visible=!1,st.sourire.visible=!0,!1;const ft=Math.sin(Lt*16)>.1;return st.bouche.visible=ft,st.sourire.visible=!ft,!0};S.add(it)}async function Ct(z,k,st,it){q("#st-nom").textContent=z,q("#st-texte").textContent=st,nt.hidden=!1;const gt={v:!0};vt(k,gt),await r.dire(st,it),gt.v=!1,ht(),nt.hidden=!0,await Mt(.25)}const Pt=z=>Ct("Papa",m,Ir[z],{id:z,pitch:.7,rate:.95}),Ot=(z,k={})=>Ct("Théo",e.hero,Ir[z],{id:z,pitch:1.95,rate:1.1,genre:"femme",...k});function re(z,k=30,{couleur:st=16773792,vitesse:it=4,taille:gt=.4,duree:Lt=1.2,gravite:ft=2}={}){const St=new Float32Array(k*3),Dt=[];for(let Zt=0;Zt<k;Zt++){St.set([z.x,z.y,z.z],Zt*3);const V=$t(Math.random()-.5,Math.random()-.2,Math.random()-.5).normalize().multiplyScalar(it*(.3+Math.random()));Dt.push(V)}const Ht=new ze;Ht.setAttribute("position",new $e(St,3));const bt=new Ha(Ht,new $r({map:h,color:st,size:gt,transparent:!0,opacity:1,blending:Nn,depthWrite:!1}));bt.frustumCulled=!1;const Jt=b;Jt.add(bt),M.push(bt);let Yt=0;S.add(Zt=>{Yt+=Zt;for(let V=0;V<k;V++)Dt[V].y-=ft*Zt,St[V*3]+=Dt[V].x*Zt,St[V*3+1]+=Dt[V].y*Zt,St[V*3+2]+=Dt[V].z*Zt;return Ht.attributes.position.needsUpdate=!0,bt.material.opacity=Math.max(0,1-Yt/Lt),Yt>=Lt?(Jt.remove(bt),Ht.dispose(),bt.material.dispose(),!1):!0})}const Kt=(z,k)=>W(k,st=>{J.style.opacity=String(z*Math.sin(Math.PI*Math.min(1,st)))});function de(z,k){const st=new Set;return z.traverse(it=>{it.isMesh&&!it.material.transparent&&st.add(it.material)}),st.forEach(it=>{it.transparent=!0,it.opacity=0,it.needsUpdate=!0}),W(k,it=>{st.forEach(gt=>{gt.opacity=it})}).then(()=>{st.forEach(it=>{it.transparent=!1,it.opacity=1,it.needsUpdate=!0})})}function X(){const z=new ue,k=new ee({color:14690350,roughness:.45}),st=new B(new Ce(.15,16,12),k);st.scale.set(1,.92,1),z.add(st);const it=new B(new Wt(.008,.01,.07,5),new ee({color:5913894}));it.position.y=.15,z.add(it);const gt=new B(new Ce(.05,8,6),new ee({color:4045656}));return gt.scale.set(1.6,.3,.8),gt.position.set(.05,.17,0),gt.rotation.z=.4,z.add(gt),z}function we(){const z=new ue;z.add(new B(new Xt(.09,.04,.17),new ee({color:2830648,roughness:.5})));const k=new B(new Wt(.018,.018,.02,8),new ee({color:16726843,emissive:16726843,emissiveIntensity:.8}));return k.position.set(0,.03,-.03),z.add(k),z}async function ae(z){e.hero.rotation.order="YXZ",z!=="foret"&&await le(),P(),await qt()}async function le(){const z=e.hero,k=z.userData,st=m.userData,it=u.position;st.bras[0].rotation.x=-.5,st.bras[1].rotation.x=-.25;const gt=X();gt.position.set(0,-.08,.1),st.mains[0].add(gt),M.push(gt);const Lt=we();Lt.position.set(0,-.06,.06),st.mains[1].add(Lt),M.push(Lt),yt($t(-6.5,8,9.5),$t(-15,3.8,1.2)),await Gt(z,-10.5,1.2,9),await ct(z,-19,1.2,.5),m.position.set(-19.3,0,1.2),m.rotation.y=Math.PI/2,s.fx("porte"),await Promise.all([W(1.8,lt=>l.ouvrir(Ge(lt))),Mt(.5).then(()=>(m.visible=!0,de(m,.9)))]),await Gt(m,-14.2,1.2,5,!1),yt($t(-7.5,6.2,6.2),$t(-12.6,4.4,1.2)),await Pt("p1"),await Ot("t1"),await Pt("p2"),await Pt("p3"),yt($t(4.5,7.5,4),$t(-5,3.5,-4)),W(1.4,lt=>l.ouvrir(1-Ge(lt))),await Promise.all([Gt(m,-5.4,-5.6,8,!1),Mt(.7).then(()=>Gt(z,-2.4,-4.6,8))]),await Promise.all([ct(m,it.x,it.z),ct(z,it.x,it.z)]),yt($t(5.2,7,.5),$t(-2.4,3.6,-8)),await Pt("p4"),st.bras[1].rotation.x=-1.4,s.fx("clic"),s.fx("machine"),re($t(it.x,1.2,it.z),20,{couleur:8382463,vitesse:2,duree:2}),await W(2.2,lt=>u.ouvrirVerre(Ge(lt))),await W(.5,lt=>{st.bras[0].rotation.x=-.5-1.1*Ge(lt)}),await W(.25,lt=>{st.bras[0].rotation.x=-1.6-.7*lt}),i.attach(gt);const ft=gt.position.clone(),St=$t(it.x,u.platY+.4,it.z);W(.55,lt=>{st.bras[0].rotation.x=-2.3+1.8*Ge(lt)}),await W(.95,lt=>{gt.position.lerpVectors(ft,St,lt),gt.position.y+=Math.sin(Math.PI*lt)*3.2,gt.rotation.z=lt*5}),gt.position.copy(St),await Pt("p5"),s.fx("clic"),s.fx("rayon"),await W(.6,lt=>u.rayon(Ge(lt)));const Dt=gt.scale.x;re(St,40,{couleur:12580607,vitesse:3.5,duree:1.4}),await W(1.5,lt=>{gt.scale.setScalar(Dt*(1-.7*Ge(lt))),gt.position.y=u.platY+.4-.25*Ge(lt)}),s.fx("ding"),await W(.5,lt=>u.rayon(1-Ge(lt)*.55)),await Pt("p6"),yt($t(1.6,6.2,-.8),$t(-2.4,4.4,-6.5));const Ht=k.tete;re(ot(z),14,{couleur:16773312,vitesse:.8,taille:.3,duree:2.6,gravite:-.2}),s.fx("reniflement"),k.sourire.visible=!1,k.bouche.visible=!0,await Promise.all([K(Ht.rotation,"x",-.5,1.2),K(z.rotation,"x",-.12,1.2),Ot("t2",{rate:.6})]),ct(m,z.position.x,z.position.z,.5),await Pt("p7"),s.fx("reniflement"),await Ot("t3",{rate:.5}),k.sourire.visible=!1,k.bouche.visible=!0,s.fx("atchoum"),r.dire(Ir.t4,{id:"t4",pitch:2,rate:1.3,genre:"femme"}),re(ot(z),50,{couleur:16777215,vitesse:6,taille:.45,duree:1,gravite:4}),yt($t(2.8,5.2,-4.2),$t(-1.6,3,-8.4));const bt=z.position.clone();k.bras[0].rotation.x=-1.3,k.bras[1].rotation.x=-1.3,await W(.45,lt=>{Ht.rotation.x=-.5+1.5*Ge(lt),z.rotation.x=-.12+.55*Ge(lt),z.position.set(bt.x+(-1.6-bt.x)*Ge(lt),0,bt.z+(-8.4-bt.z)*Ge(lt))}),s.fx("rayon");const Jt=z.position.clone(),Yt=$t(it.x,u.platY,it.z-.3);await Promise.all([W(.85,lt=>{z.position.lerpVectors(Jt,Yt,lt),z.position.y=Yt.y*lt+Math.sin(Math.PI*lt)*3.4,z.rotation.x=.43*(1-lt),k.jambes[0].rotation.x=-.5,k.jambes[1].rotation.x=.5}),W(.85,lt=>{u.rayon(.45+lt)}),K(Ht.rotation,"x",0,.85)]),z.rotation.set(0,0,0),Bt(z),k.bras.forEach(lt=>{lt.rotation.x=0}),yt($t(3.4,3.8,-6.2),$t(it.x,2.4,it.z)),s.fx("retrecir"),re($t(it.x,3,it.z),70,{couleur:12580607,vitesse:5,taille:.5,duree:1.6}),Kt(.95,1.1),await W(1.7,lt=>{z.scale.setScalar(3-2.7*Ge(lt)),u.rayon(1.4+Math.sin(lt*20)*.2)}),re($t(it.x,1.6,it.z),40,{couleur:16773792,vitesse:3,duree:1.2}),k.sourire.visible=!0,k.bouche.visible=!1,await W(.7,lt=>u.rayon(1.4*(1-Ge(lt)))),yt($t(-.2,1.7,-8.6),$t(-3.4,5.2,-6.9)),ct(m,it.x,it.z,.3),st.bras[0].rotation.x=-1,st.bras[1].rotation.x=-1,Gt(m,-3.3,-6.7,4,!1),await Pt("p8"),yt($t(it.x+1.4,1.9,it.z+3.2),$t(it.x,1.2,it.z));let Zt=!0;S.add((lt,Qt)=>Zt?(k.bras[1].rotation.z=-2.5+Math.sin(Qt*11)*.35,!0):!1),await Ot("t5",{pitch:2.1}),Zt=!1,k.bras[1].rotation.z=0,P(),yt($t(5.6,7.2,-2.2),$t(it.x,4.2,it.z)),s.fx("alarme");let V=!0;S.add((lt,Qt)=>V?(u.alarme(Math.sin(Qt*14)>0?1:.3),u.secouer(.25+.35*Math.min(1,(g-At)/3)),!0):!1);const At=g;u.rayon(.9),st.bras[0].rotation.x=-1.9,st.bras[1].rotation.x=-1.9,await Pt("p9"),s.fx("alarme"),await Ot("t6",{pitch:2.1}),await Mt(.6),V=!1;const ut=$t(it.x,u.platY+.6,it.z);te(ut),u.exploser(),u.alarme(0),yt($t(7,6.5,1.5),$t(it.x,4,it.z),!0),W(.9,lt=>{m.position.x=-3.3-2.2*Ge(lt),m.position.z=-6.7+2.4*Ge(lt),m.rotation.x=-.3*Math.sin(Math.PI*lt)});const mt=new Wa([$t(it.x,1.2,it.z),$t(-.8,6,-8),$t(-.3,7,0),$t(0,6.6,10),$t(0,6.2,18),$t(.6,13,30),$t(1.6,20,48),$t(2.2,12,64),$t(2.6,3.2,76)]),Et=$t(0,0,0);r.dire(Ir.t7,{id:"t7",pitch:2,rate:1.2,genre:"femme"}),s.fx("chute"),await Mt(.35),await W(3.6,lt=>{mt.getPoint(Math.min(1,lt),Et),z.position.copy(Et),z.rotation.z=lt*14,z.rotation.x=lt*5,yt($t(Et.x-2+(lt>.6?6*(lt-.6):0),Et.y+2.5,Et.z-11),$t(Et.x,Et.y,Et.z))}),z.rotation.set(0,0,0),s.fx("atterrissage"),re($t(z.position.x,.6,z.position.z),40,{couleur:13220234,vitesse:5,taille:1.2,duree:1.2,gravite:5}),await Mt(.5)}async function qt(){const z=e.hero,k=z.userData;Kt(1,.9),await Mt(.35),jt(),yt($t(8,26,30),$t(0,10,0),!0),z.position.set(0,70,0),z.rotation.set(0,0,0),s.fx("chute"),await W(1.1,ft=>{z.position.y=70*(1-ft*ft),z.rotation.x=ft*3}),z.rotation.x=0,s.fx("atterrissage"),re($t(0,1,0),50,{couleur:13220234,vitesse:7,taille:2,duree:1.4,gravite:6}),W(.25,ft=>{z.scale.set(3*(1+.25*Math.sin(Math.PI*ft)),3*(1-.25*Math.sin(Math.PI*ft)),3*(1+.25*Math.sin(Math.PI*ft)))}),yt($t(8,11,24),$t(0,6,0)),await Mt(.8),K(k.tete.rotation,"y",-.9,1).then(()=>K(k.tete.rotation,"y",.9,1.6)),await Ot("t8",{pitch:2.1}),k.tete.rotation.y=0,p.retirerVedette();const st=Aa({grain:!0});st.scale.setScalar(4.2),st.position.set(-40,0,-5),b.add(st),F=st;let it=!0;S.add((ft,St)=>F!==st?!1:(it&&st.userData.pattes(St),!0)),yt($t(-4,8,23),$t(-6,4.5,-3));const gt=W(4.4,ft=>{st.position.x=-40+28*ft});await Mt(1.5),s.fx("reniflement"),await ct(z,-30,-5,.45),W(.4,ft=>{z.position.y=Math.sin(Math.PI*ft)*1.6}),k.bras[0].rotation.x=-2.2,k.bras[1].rotation.x=-2.2,await Ot("t9",{pitch:2.1}),await gt,it=!1,k.bras[0].rotation.x=0,k.bras[1].rotation.x=0,yt($t(-7,6,21),$t(-7,4.6,-3)),W(1.8,ft=>{st.rotation.z=Math.sin(ft*Math.PI*4)*.05}),await ct(z,st.position.x+4,-5,.4),await Ot("t10",{pitch:2.1}),await Mt(.5),it=!0,st.rotation.z=0,yt($t(3,7.5,23),$t(1,4.5,-3));let Lt=!0;S.add(()=>Lt?(z.rotation.y=Math.atan2(st.position.x+4-z.position.x,st.position.z-z.position.z),!0):!1),await W(7,ft=>{st.position.x=-12+46*ft}),Lt=!1,await ct(z,0,30,.5),await Ot("t11",{pitch:2.1}),await Mt(.4)}function te(z){s.fx("explosion"),E=1.2,Kt(1,.8);const k=new B(new Ce(1,18,14),new Ae({color:16756800,transparent:!0,opacity:1,blending:Nn,depthWrite:!1}));k.position.copy(z),i.add(k),M.push(k);const st=new B(new Zr(.9,1.1,40),new Ae({color:16769696,transparent:!0,opacity:.8,side:Oe,depthWrite:!1}));st.rotation.x=-Math.PI/2,st.position.set(z.x,.15,z.z),i.add(st),M.push(st);const it=new Bs(16752704,900,60,1.4);it.position.copy(z),i.add(it),M.push(it);let gt=0;S.add(ft=>{gt+=ft;const St=Math.min(1,gt/.6);return k.scale.setScalar(1+9*Ge(St)),k.material.opacity=Math.max(0,1-gt/.8),st.scale.setScalar(1+gt*28),st.material.opacity=Math.max(0,.8-gt*1.2),it.intensity=Math.max(0,900*(1-gt/1.2)),gt>1.3?(i.remove(k,st,it),!1):!0}),re(z,90,{couleur:16752704,vitesse:22,taille:1.4,duree:1.6,gravite:12}),re(z,50,{couleur:16773824,vitesse:30,taille:.9,duree:1,gravite:6});const Lt=[5531516,7243424,10478574,14035002,2830648];for(let ft=0;ft<34;ft++){const St=ft%3===0?new Wt(.2,.2,.8+Math.random()*1.4,6):new Xt(.4+Math.random()*1.2,.3+Math.random()*.8,.4+Math.random()*1.2),Dt=new B(St,new ee({color:Lt[ft%5],roughness:.6,transparent:ft%5===2,opacity:ft%5===2?.5:1}));Dt.position.set(z.x,z.y+1+Math.random()*4,z.z),i.add(Dt),M.push(Dt);const Ht=Math.random()*6.28,bt=$t(Math.cos(Ht),0,Math.sin(Ht)).multiplyScalar(5+Math.random()*14);bt.y=8+Math.random()*20;const Jt=$t(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(14);let Yt=0;S.add(Zt=>(Yt+=Zt,bt.y-=40*Zt,Dt.position.addScaledVector(bt,Zt),Dt.position.y<.3&&(Dt.position.y=.3,bt.y*=-.35,bt.x*=.6,bt.z*=.6,Jt.multiplyScalar(.6)),Dt.rotation.x+=Jt.x*Zt,Dt.rotation.y+=Jt.y*Zt,Dt.rotation.z+=Jt.z*Zt,Yt>6?(i.remove(Dt),!1):!0))}for(let ft=0;ft<18;ft++){const St=new B(new Ce(1,10,8),new Ae({color:3815994,transparent:!0,opacity:.7,depthWrite:!1}));St.position.set(z.x+(Math.random()-.5)*3,z.y+Math.random()*2,z.z+(Math.random()-.5)*3),i.add(St),M.push(St);const Dt=(Math.random()-.5)*3,Ht=(Math.random()-.5)*3;let bt=Math.random()*-.4;S.add(Jt=>(bt+=Jt,bt<0?!0:(St.position.x+=Dt*Jt,St.position.z+=Ht*Jt,St.position.y+=(3+bt)*Jt,St.scale.setScalar(.8+bt*1.5),St.material.opacity=Math.max(0,.55-bt*.14),bt>4?(i.remove(St),!1):!0)))}}function jt(){b=p.scene,n.voir(p.scene),p.calme(!0),p.maj(_,e.hero.position),e.changerMonde(p,p.depart.x,p.depart.z,0),e.hero.scale.setScalar(3),e.hero.rotation.order="YXZ"}function D(){r.arreter();for(const gt of M)gt.parent&&gt.parent.remove(gt);M.length=0,R.clear(),S.clear(),m&&(i.remove(m),m.visible=!1);const z=e.hero,k=z.userData,it=!!p&&z.parent===p.scene?{x:z.position.x,z:z.position.z,cap:z.rotation.y}:null;z.scale.setScalar(3),z.rotation.order="XYZ",z.rotation.set(0,0,0),k.tete.rotation.set(0,0,0),k.sourire.visible=!0,k.bouche.visible=!1,k.bras.forEach(gt=>gt.rotation.set(0,0,0)),Bt(z),l.ouvrir(0),u.ouvrirVerre(0),u.rayon(0),u.reparer(),b=i,F&&(T==="foret"?(F.rotation.z=0,P().adopter(F)):F.parent&&F.parent.remove(F),F=null),E=0,s.baisser(!1),J.style.opacity="0",j.style.opacity="0",q("#cine-carte").style.opacity="0",nt.hidden=!0,Z.hidden=!0,o.classList.remove("en-cine"),a.bloquer(!1),f=!1,p&&p.calme(!1),c(T,T==="foret"?P():null,it)}const w=z=>{z.reason===No&&z.preventDefault()};async function tt(z){if(f)return;r.eveiller(),window.addEventListener("unhandledrejection",w),f=!0,d=!1,g=0,T="foret",s.baisser(!0),a.bloquer(!0),o.classList.add("en-cine"),Z.hidden=!1,j.style.opacity="0",J.style.opacity="0",q("#cine-carte").style.opacity="0",m||(m=pg({echelle:3})),i.add(m),m.visible=!1,U.pos.copy(n.camera.position),U.look.set(e.pos.x,e.pos.y+4,e.pos.z),U.posC.copy(U.pos),U.lookC.copy(U.look);const k=new Promise(st=>{v=st});try{await Promise.race([r.precharger(),new Promise(st=>setTimeout(st,2500))]),await Promise.race([ae(z).catch(st=>{if(st!==No)throw st}),k])}catch(st){console.error(st)}D(),setTimeout(()=>window.removeEventListener("unhandledrejection",w),500)}function _t(z="foret"){if(f){T=z,d=!0;for(const k of R)k.res();r.arreter(),v&&v()}}return q("#cine-passer").addEventListener("click",()=>_t("foret")),{lancer:tt,annuler:_t,maj:zt,actif:()=>f}}function lu(i,t){const e=typeof window<"u"&&"speechSynthesis"in window&&typeof SpeechSynthesisUtterance<"u";if(e)try{speechSynthesis.getVoices(),speechSynthesis.addEventListener("voiceschanged",()=>speechSynthesis.getVoices())}catch{}const n=u=>{if(!e)return null;const h=speechSynthesis.getVoices().filter(v=>/^fr/i.test(v.lang)),f=h.some(v=>v.localService)?h.filter(v=>v.localService):h;if(!f.length)return null;const d=/thomas|daniel|male|homme|paul|henri/i,g=/amélie|amelie|audrey|aurélie|marie|julie|female|femme|virginie/i;return f.find(v=>(u==="homme"?d:g).test(v.name))||f[0]};let s=!1;function r(){if(!(!e||s))try{const u=new SpeechSynthesisUtterance(" ");u.volume=0,u.lang="fr-FR",speechSynthesis.speak(u),s=!0}catch{}}const o=new Map;let a=null,c=null;async function l(){if(t)try{a||(a=await(await fetch("./voix/liste.json",{cache:"no-store"})).json()),await Promise.all(a.filter(u=>!o.has(u)).map(async u=>{const h=await t.tampon(`./voix/${u}.m4a`);h&&o.set(u,h)}))}catch{a=a||[]}}return{eveiller:r,precharger:l,enregistrees:()=>o.size,disponible:()=>!!n("homme"),nom(u="homme"){const h=n(u);return h?{nom:h.name,langue:h.lang,locale:h.localService}:null},compte(){if(!e)return null;const u=speechSynthesis.getVoices().filter(h=>/^fr/i.test(h.lang));return{total:speechSynthesis.getVoices().length,fr:u.length,frLocales:u.filter(h=>h.localService).length}},pris:()=>e,arreter(){if(c&&(c.stop(),c=null),e)try{speechSynthesis.cancel()}catch{}},dire(u,{id:h=null,pitch:f=1,rate:d=1,genre:g="homme"}={}){if(h&&o.has(h)&&i()>0){const v=t.jouerTampon(o.get(h),i());if(v)return c=v,v.fin.then(()=>new Promise(m=>setTimeout(m,150)))}return new Promise(v=>{const m=1100+u.length*52,p=performance.now();let b=!1;const E=()=>{b||(b=!0,setTimeout(v,Math.max(0,m-(performance.now()-p))))},_=n(g),F=i();if(!e||F<=0){E();return}try{const T=new SpeechSynthesisUtterance(u);_&&(T.voice=_),T.lang=_?_.lang:"fr-FR",T.pitch=Math.min(2,f),T.rate=d,T.volume=F,T.onend=E,T.onerror=E,speechSynthesis.speak(T),setTimeout(E,12e3)}catch{E()}})}}}function Ig({reglages:i,surMenu:t,son:e}){const n=document.createElement("main");n.className="ecran jeu";const s=document.createElement("canvas");s.className="monde3d",n.appendChild(s),n.insertAdjacentHTML("beforeend",`
    <header class="barre-jeu"><span class="lieu">Le grenier du professeur Mousse</span><div class="coin"><button class="bouton secondaire petit" id="btn-menu">Menu</button><button class="bouton secondaire mini" id="btn-reset">Reset</button></div></header>
    <div class="indice" id="indice" hidden><button class="bouton gros moyen" id="btn-anim">Démarrer l'animation</button><span class="touche-agir" id="touche-agir"></span></div>
    <aside class="aide-touches" id="aide-touches"></aside>`);const r=n.querySelector("#indice"),o=sg(s),a=fg(),c=vg({scene:a.scene,colliders:a.colliders,depart:a.depart,limites:a.limites,limiterCamera:a.limiterCamera}),l=yg(()=>i().touches),u=lu(()=>i().voix,e),h=Cg({racine:n,clavier:l});let f="grenier",d=a;function g(T,P,R,S,M){f=T,d=P,o.voir(P.scene),c.changerMonde(P,R,S,M),c.hero.scale.setScalar(3),n.querySelector(".lieu").textContent=P.nom,r.hidden=!0}const v=Lg({scene:a.scene,garage:a,joueur:c,moteur:o,son:e,voix:u,racine:n,clavier:l,surFin(T,P,R){T==="foret"?g("foret",P,R?R.x:P.depart.x,R?R.z:P.depart.z,R?R.cap:Math.PI):(g("grenier",a,a.depart.x,a.depart.z,0),c.etat(0))}});function m(){if(v.actif()){v.annuler("grenier");return}g("grenier",a,a.depart.x,a.depart.z,0),c.etat(0)}const p=()=>.25*16**i().sensibilite;let b=null;s.addEventListener("pointerdown",T=>{b||(b={x:T.clientX,y:T.clientY,id:T.pointerId},s.setPointerCapture(T.pointerId),s.classList.add("glisse"))}),s.addEventListener("pointermove",T=>{!b||T.pointerId!==b.id||(c.tourner(T.clientX-b.x,T.clientY-b.y,p()),b={x:T.clientX,y:T.clientY,id:T.pointerId})});const E=T=>{b&&T&&T.pointerId!==void 0&&T.pointerId!==b.id||(b=null,s.classList.remove("glisse"))};s.addEventListener("pointerup",E),s.addEventListener("pointercancel",E),s.addEventListener("wheel",T=>{T.preventDefault(),c.zoom(T.deltaY)},{passive:!1});const _=T=>{T.code==="Escape"&&!document.getElementById("dlg").open&&(T.preventDefault(),v.actif()?v.annuler("foret"):t())};window.addEventListener("keydown",_);function F(){const T=i().touches,P=R=>au((T[R]||[]).find(Boolean))||"-";n.querySelector("#touche-agir").textContent=P("agir")!=="-"?`ou touche ${P("agir")}`:"",n.querySelector("#aide-touches").innerHTML=`<b>${P("avancer")} ${P("gauche")} ${P("reculer")} ${P("droite")}</b> bouger<span class="sep"></span><b>${P("sauter")}</b> sauter<span class="sep"></span><b>${P("sprinter")}</b> sprinter<span class="sep"></span><b>Souris</b> tourner la caméra`}return F(),n.querySelector("#btn-menu").addEventListener("click",t),n.querySelector("#btn-reset").addEventListener("click",T=>{T.currentTarget.blur(),e.clic(),m()}),o.camera.position.set(1,9,14),n.querySelector("#btn-anim").addEventListener("click",()=>v.lancer()),o.definir(a.scene,(T,P,R)=>{if(v.actif()){a.maj(T),v.maj(R||P,T),l.finImage();return}if(d.maj(T,c.pos),h.actif&&h.montrer(!0),c.maj(P,l,T),c.camera(o.camera,P),f==="grenier"){const S=a.porteMaison,M=Math.hypot(c.pos.x-S.x,c.pos.z-(S.z+2))<8;r.hidden=!M,M&&l.vient("agir")&&v.lancer()}l.finImage()}),{element:n,majAide:F,bloquer:T=>l.bloquer(T),animation:v,lieu:()=>f,monde:()=>d,reset:m,detruire(){v.annuler("grenier"),u.arreter(),l.detruire(),window.removeEventListener("keydown",_)},moteur:o,joueur:c,garage:a}}const hl=i=>440*2**((i-69)/12),fl=[62,64,66,69,71,74,76];function Dg(){let i=null,t,e,n,s,r,o=null,a=0,c=0;const l={musique:.6,ambiance:.6,effets:.8};let u=!1;function h(){if(i)return;i=new(window.AudioContext||window.webkitAudioContext);const _=i.createDynamicsCompressor();_.connect(i.destination),t=i.createGain(),e=i.createGain(),n=i.createGain();for(const W of[t,e,n])W.connect(_);s=i.createGain(),s.gain.value=1.6,s.connect(_),r=i.createBuffer(1,i.sampleRate*3,i.sampleRate);const F=r.getChannelData(0);for(let W=0;W<F.length;W++)F[W]=Math.random()*2-1;const T=v(),P=i.createBiquadFilter();P.type="lowpass",P.frequency.value=520;const R=i.createGain();R.gain.value=.35;const S=i.createOscillator();S.frequency.value=.09;const M=i.createGain();M.gain.value=.22,S.connect(M),M.connect(R.gain),S.start(),T.connect(P),P.connect(R),R.connect(e);const U=v(),q=i.createBiquadFilter();q.type="bandpass",q.frequency.value=2200,q.Q.value=.7;const Z=i.createGain();Z.gain.value=.16;const nt=i.createOscillator();nt.frequency.value=.37;const J=i.createGain();J.gain.value=.05,nt.connect(J),J.connect(Z.gain),nt.start(),U.connect(q),q.connect(Z),Z.connect(e);const j=i.createDelay(1);j.delayTime.value=.42;const ht=i.createGain();ht.gain.value=.38,j.connect(ht),ht.connect(j),j.connect(t),t.echo=j,m()}let f=null;function d(){const F=new ArrayBuffer(6444),T=new DataView(F),P=(R,S)=>{for(let M=0;M<S.length;M++)T.setUint8(R+M,S.charCodeAt(M))};return P(0,"RIFF"),T.setUint32(4,36+3200*2,!0),P(8,"WAVE"),P(12,"fmt "),T.setUint32(16,16,!0),T.setUint16(20,1,!0),T.setUint16(22,1,!0),T.setUint32(24,8e3,!0),T.setUint32(28,16e3,!0),T.setUint16(32,2,!0),T.setUint16(34,16,!0),P(36,"data"),T.setUint32(40,3200*2,!0),URL.createObjectURL(new Blob([F],{type:"audio/wav"}))}function g(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}if(!f){try{f=new Audio(d()),f.loop=!0,f.play().catch(()=>{})}catch{}const _=()=>{i&&i.state!=="running"&&i.resume().catch(()=>{}),f&&f.paused&&f.play().catch(()=>{})};document.addEventListener("pointerdown",_),document.addEventListener("touchend",_),document.addEventListener("visibilitychange",()=>{document.hidden||_()})}}function v(){const _=i.createBufferSource();return _.buffer=r,_.loop=!0,_.start(0,Math.random()*2),_}function m(){if(!i)return;const _=i.currentTime;t.gain.setTargetAtTime(l.musique*.55*(u?.25:1),_,.15),e.gain.setTargetAtTime(l.ambiance*.5*(u?.25:1),_,.15),n.gain.setTargetAtTime(l.effets*1,_,.05)}function p(_,F,T,P,R,S,M=!1){const U=i.createOscillator(),q=i.createGain();U.type=_,U.frequency.setValueAtTime(F,T),q.gain.setValueAtTime(1e-4,T),q.gain.exponentialRampToValueAtTime(R,T+.015),q.gain.exponentialRampToValueAtTime(1e-4,T+P),U.connect(q),q.connect(S),M&&t.echo&&q.connect(t.echo),U.start(T),U.stop(T+P+.05)}function b(_){const F=2300+Math.random()*1500,T=i.createStereoPanner();T.pan.value=Math.random()*1.6-.8,T.connect(e);const P=2+Math.floor(Math.random()*4);for(let R=0;R<P;R++){const S=i.createOscillator(),M=i.createGain();S.type="sine",S.frequency.setValueAtTime(F*(1+R*.07),_+R*.11),S.frequency.exponentialRampToValueAtTime(F*(1.2+R*.07),_+R*.11+.09),M.gain.setValueAtTime(1e-4,_+R*.11),M.gain.exponentialRampToValueAtTime(.1,_+R*.11+.01),M.gain.exponentialRampToValueAtTime(1e-4,_+R*.11+.1),S.connect(M),M.connect(T),S.start(_+R*.11),S.stop(_+R*.11+.12)}}function E(){const _=i.currentTime;for(;a<_+.4;){const F=fl[Math.floor(Math.random()*fl.length)]-(Math.random()<.25?12:0);p("triangle",hl(F),a,1.8,.16,t,!0),p("sine",hl(F+12),a,1.2,.05,t,!0),a+=.55+Math.random()*1.1}_>=c&&(b(_+.05),c=_+3+Math.random()*7)}return{appliquer(_){Object.assign(l,_),m()},baisser(_){u=_,m()},async tampon(_){try{h();const F=await fetch(_);return F.ok?await i.decodeAudioData(await F.arrayBuffer()):null}catch{return null}},jouerTampon(_,F){if(!i)return null;i.state!=="running"&&i.resume().catch(()=>{});const T=i.createBufferSource();T.buffer=_;const P=i.createGain();P.gain.value=F,T.connect(P),P.connect(s);let R;const S=new Promise(M=>{R=M});return T.onended=R,T.start(),setTimeout(R,_.duration*1e3+400),{fin:S,stop(){try{T.stop()}catch{}R()}}},async demarrer(){try{h(),i.state==="suspended"&&await i.resume(),g(),o||(a=i.currentTime+.3,c=i.currentTime+2,o=setInterval(E,80))}catch{}},clic(){i&&i.state==="running"&&(p("sine",660,i.currentTime+.01,.18,.2,n),p("sine",990,i.currentTime+.07,.22,.15,n))},magie(){i&&i.state==="running"&&[523,659,784,1047].forEach((_,F)=>p("triangle",_,i.currentTime+.02+F*.09,.7,.14,n))},fx(_){if(!i)return;i.state!=="running"&&i.resume().catch(()=>{});const F=i.currentTime+.02,T=(S,M,U,q,Z,nt,J)=>p(S,M,U,q,Math.min(1,Z*1.7),nt,J),P=(S,M,U,q,Z=1)=>{const nt=Math.min(1,q*1.7),J=i.createBufferSource();J.buffer=r;const j=i.createBiquadFilter();j.type="bandpass",j.Q.value=Z,j.frequency.setValueAtTime(S,F),j.frequency.exponentialRampToValueAtTime(M,F+U);const ht=i.createGain();ht.gain.setValueAtTime(1e-4,F),ht.gain.exponentialRampToValueAtTime(nt,F+.03),ht.gain.exponentialRampToValueAtTime(1e-4,F+U),J.connect(j),j.connect(ht),ht.connect(n),J.start(F,Math.random()*2),J.stop(F+U+.05)},R=(S,M,U,q,Z)=>{const nt=Math.min(1,Z*1.7),J=i.createOscillator(),j=i.createGain();J.type=S,J.frequency.setValueAtTime(M,F),J.frequency.exponentialRampToValueAtTime(U,F+q),j.gain.setValueAtTime(1e-4,F),j.gain.exponentialRampToValueAtTime(nt,F+.05),j.gain.exponentialRampToValueAtTime(1e-4,F+q),J.connect(j),j.connect(n),J.start(F),J.stop(F+q+.05)};if(_==="porte"&&(R("sawtooth",170,95,1.4,.16),R("square",340,190,1.4,.07),T("square",90,F+1.45,.12,.18,n)),_==="clic"&&(T("square",1400,F,.05,.12,n),T("square",900,F+.06,.07,.1,n)),_==="machine"&&(R("sawtooth",70,220,2.2,.14),R("triangle",140,440,2.2,.1),P(300,1200,2.2,.15,.6)),_==="rayon"&&(R("sawtooth",220,880,.6,.12),P(2e3,5e3,1.2,.12,2),R("sine",880,880,1.6,.06)),_==="ding"&&(T("triangle",1568,F,.9,.2,n,!0),T("triangle",2093,F+.1,.9,.14,n,!0)),_==="reniflement"&&P(900,2600,.35,.22,3),_==="atchoum"&&(P(4500,600,.38,.9,.8),R("sine",160,50,.3,.5)),_==="retrecir"&&(R("sine",1600,140,1.5,.22),R("triangle",2400,300,1.5,.12),P(6e3,800,1.5,.2,1.5)),_==="alarme")for(let S=0;S<6;S++)T("square",S%2?660:880,F+S*.28,.2,.12,n);_==="explosion"&&(P(900,60,1.6,1,.5),P(200,40,2.2,.9,.4),R("sine",110,28,1.4,.9),R("sawtooth",220,40,.8,.25)),_==="chute"&&(R("sine",1800,300,1.4,.18),P(3e3,800,1.4,.1,1.2)),_==="atterrissage"&&(R("sine",150,45,.25,.6),P(1500,300,.25,.3,.8)),_==="pas"&&T("sine",90,F,.1,.15,n)},etat(){return{actif:!!i&&i.state==="running",musique:!!o,contexte:i?i.state:"aucun"}}}}const uu="bonsai-reglages",bi={musique:.6,ambiance:.6,effets:.8,voix:.9,feuilles:!0,sensibilite:.5,qualite:"normale",touches:Jr()},Ns=(i,t,e,n)=>Number.isFinite(i)?Math.min(e,Math.max(t,i)):n;function hu(i){const t=i&&typeof i=="object"?i:{};return{musique:Ns(t.musique,0,1,bi.musique),ambiance:Ns(t.ambiance,0,1,bi.ambiance),effets:Ns(t.effets,0,1,bi.effets),voix:Ns(t.voix,0,1,bi.voix),feuilles:t.feuilles!==!1,sensibilite:Ns(t.sensibilite,0,1,bi.sensibilite),qualite:["basse","normale"].includes(t.qualite)?t.qualite:bi.qualite,touches:ou(t.touches)}}function Ug(){try{return hu(JSON.parse(localStorage.getItem(uu)||"null"))}catch{return{...bi,touches:Jr()}}}function Ng(i){try{localStorage.setItem(uu,JSON.stringify(i))}catch{}}const Oi=Ug(),Fg=document.getElementById("app"),me=document.getElementById("dlg"),an=Dg();an.appliquer(Oi);let Be=null;const Ei=lu(()=>Math.max(.5,Oi.voix));for(const i of["pointerdown","keydown"])document.addEventListener(i,()=>an.demarrer(),{once:!0});const hi=[];window.addEventListener("error",i=>{hi.push(`${i.message} (${(i.filename||"").split("/").pop()}:${i.lineno})`),hi.length>5&&hi.shift()});window.addEventListener("unhandledrejection",i=>{typeof i.reason!="symbol"&&(hi.push(`promesse : ${i.reason&&i.reason.message?i.reason.message:String(i.reason)}`),hi.length>5&&hi.shift())});function Za(i){Fg.replaceChildren(i.element)}const Fs=()=>{Ng(Oi),an.appliquer(Oi)};function fu(i="son"){const t=Oi;let e=null;me.className="large",me.innerHTML=`<h2>Paramètres</h2>
    <div class="onglets"><button data-o="son">Son</button><button data-o="commandes">Commandes</button></div>
    <section id="o-son">
      <label class="ligne"><span>Musique</span><input type="range" id="p-musique" min="0" max="1" step="0.05" value="${t.musique}"></label>
      <label class="ligne"><span>Sons de la nature</span><input type="range" id="p-ambiance" min="0" max="1" step="0.05" value="${t.ambiance}"></label>
      <label class="ligne"><span>Voix des personnages</span><input type="range" id="p-voix" min="0" max="1" step="0.05" value="${t.voix}"></label>
      <label class="ligne"><span>Bruitages</span><input type="range" id="p-effets" min="0" max="1" step="0.05" value="${t.effets}"></label>
      <div class="pied"><button class="bouton secondaire" id="p-test">Tester le son et la voix</button><button class="bouton secondaire" id="p-plein">Plein écran</button></div>
      <pre class="diag" id="p-diag" hidden></pre>
    </section>
    <section id="o-commandes" hidden></section>
    <div class="pied"><button class="bouton gros moyen" id="p-fermer">Fermer</button></div>`,me.open||me.showModal(),Be&&Be.bloquer(!0);const n=c=>{me.querySelectorAll(".onglets button").forEach(l=>l.classList.toggle("actif",l.dataset.o===c)),me.querySelector("#o-son").hidden=c!=="son",me.querySelector("#o-commandes").hidden=c!=="commandes",c==="commandes"&&r()};function s(c){const l=t.touches[c.id],u=[0,1].map(h=>{const f=e&&e.action===c.id&&e.i===h,d=f?"Appuie sur une touche":l[h]?au(l[h]):"";return`<button class="case ${f?"ecoute":""}" data-a="${c.id}" data-i="${h}" ${c.bientot?"disabled":""}>${d}</button>`}).join("");return`<div class="rangee ${c.bientot?"bientot":""}"><span class="nom-action">${c.nom}${c.bientot?"<em>bientôt</em>":""}</span>${u}<button class="croix" data-a="${c.id}" aria-label="Effacer ${c.nom}" ${c.bientot?"disabled":""}>×</button></div>`}function r(){const c=me.querySelector("#o-commandes");c.innerHTML=`<h3 class="section">SOURIS</h3>
      <label class="ligne"><span>Sensibilité de la souris <b id="p-sens-val">${Math.round(t.sensibilite*100)} %</b></span><input type="range" id="p-sens" min="0" max="100" step="1" value="${Math.round(t.sensibilite*100)}"></label>
      <h3 class="section">DÉPLACEMENT</h3>${kr.filter(l=>!l.bientot&&l.id!=="agir").map(s).join("")}
      <h3 class="section">ACTIONS</h3>${kr.filter(l=>l.bientot||l.id==="agir").map(s).join("")}
      <p class="note">Clique sur une case, puis appuie sur la touche que tu veux. Échap pour annuler. La croix rouge efface la case.</p>
      <button class="bouton secondaire" id="p-defaut">Rétablir les touches de départ</button>`,c.querySelector("#p-sens").addEventListener("input",l=>{t.sensibilite=Number(l.target.value)/100,c.querySelector("#p-sens-val").textContent=`${l.target.value} %`,Fs()}),c.querySelectorAll(".case").forEach(l=>l.addEventListener("click",()=>{e={action:l.dataset.a,i:Number(l.dataset.i)},r()})),c.querySelectorAll(".croix").forEach(l=>l.addEventListener("click",()=>{t.touches[l.dataset.a]=[null,null],Fs(),Be&&Be.majAide(),e=null,r()})),c.querySelector("#p-defaut").addEventListener("click",()=>{t.touches=Jr(),Fs(),Be&&Be.majAide(),e=null,r()})}const o=c=>{if(e){if(c.preventDefault(),c.stopPropagation(),c.code==="Escape"){e=null,r();return}t.touches=Sg(t.touches,e.action,e.i,c.code),Fs(),Be&&Be.majAide(),an.clic(),e=null,r()}};window.addEventListener("keydown",o,!0),me.addEventListener("cancel",c=>{e&&c.preventDefault()}),me.addEventListener("close",()=>{window.removeEventListener("keydown",o,!0),Be&&Be.bloquer(!1)},{once:!0}),me.querySelectorAll(".onglets button").forEach(c=>c.addEventListener("click",()=>{e=null,n(c.dataset.o)}));const a=()=>{Object.assign(t,hu({...t,musique:Number(me.querySelector("#p-musique").value),ambiance:Number(me.querySelector("#p-ambiance").value),effets:Number(me.querySelector("#p-effets").value),voix:Number(me.querySelector("#p-voix").value)})),Fs()};me.querySelectorAll("#o-son input").forEach(c=>c.addEventListener("input",a)),me.querySelector("#p-plein").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()}),me.querySelector("#p-test").addEventListener("click",()=>Og(me.querySelector("#p-diag"))),me.querySelector("#p-fermer").addEventListener("click",()=>{an.clic(),me.close()}),n(i)}async function Og(i){i.hidden=!1,i.textContent="Test en cours…",Ei.eveiller(),await an.demarrer(),an.fx("ding");const t=an.etat(),e=(()=>{try{const c=document.createElement("canvas").getContext("webgl"),l=c.getExtension("WEBGL_debug_renderer_info");return{carte:l?c.getParameter(l.UNMASKED_RENDERER_WEBGL):"inconnue",tex:c.getParameter(c.MAX_TEXTURE_SIZE)}}catch{return{carte:"WebGL absent",tex:0}}})(),n=await new Promise(a=>{let c=0;const l=performance.now(),u=()=>{c++,performance.now()-l<1e3?requestAnimationFrame(u):a(c)};requestAnimationFrame(u)}),s=Ei.compte(),r=Ei.nom("homme"),o=[`Son (bruitages, musique) : ${t.contexte==="running"?"réveillé":"ENDORMI ("+t.contexte+")"}`,`Voix : ${Ei.pris()?s&&s.fr?`${s.fr} voix françaises (${s.frLocales} installées), choisie : ${r?r.nom+(r.locale?"":" (en ligne)"):"aucune"}`:"AUCUNE voix française trouvée":"pas de synthèse vocale sur cet appareil"}`,`Vitesse : ${n} images par seconde (écran vide)`,`Écran : ${screen.width}x${screen.height}, tactile : ${matchMedia("(pointer: coarse)").matches?"oui":"non"}, finesse : ${window.devicePixelRatio}`,`Carte graphique : ${e.carte} (textures ${e.tex})`,`Navigateur : ${navigator.userAgent.replace(/\s+/g," ").slice(0,110)}`,`Erreurs du jeu : ${hi.length?hi.join(" | "):"aucune"}`];i.textContent=o.join(`
`)+`

Tu dois entendre un « ding » puis la voix du papa et celle de Théo.`,await Ei.dire("Bonjour, je suis la voix du papa.",{pitch:.7,genre:"homme"}),await Ei.dire("Salut, c’est Théo !",{pitch:2,genre:"femme",rate:1.1})}function zg(){me.open||(me.className="",me.innerHTML='<h2>Pause</h2><div class="menu-pause"><button class="bouton gros moyen" id="m-reprendre">Reprendre</button><button class="bouton secondaire" id="m-param">Paramètres</button><button class="bouton secondaire" id="m-quitter">Retour à la couverture</button></div>',me.showModal(),Be&&Be.bloquer(!0),me.addEventListener("close",()=>{Be&&Be.bloquer(!1)},{once:!0}),me.querySelector("#m-reprendre").addEventListener("click",()=>{an.clic(),me.close()}),me.querySelector("#m-param").addEventListener("click",()=>{an.clic(),me.addEventListener("close",()=>fu("commandes"),{once:!0}),me.close()}),me.querySelector("#m-quitter").addEventListener("click",()=>{an.clic(),me.addEventListener("close",()=>Hg(),{once:!0}),me.close()}))}function Bg(){an.magie(),Be=Ig({reglages:()=>Oi,surMenu:zg,son:an}),Za(Be)}function Hg(){Be&&(Be.detruire(),Be.moteur.arreter(),Be=null),Za(du)}const du=_u({surCommencer:()=>{an.demarrer(),Ei.eveiller(),Bg()},surParametres:()=>{an.demarrer(),fu("son")}});Za(du);window.bonsai={son:an,get reglages(){return Oi},get jeu(){return Be}};
