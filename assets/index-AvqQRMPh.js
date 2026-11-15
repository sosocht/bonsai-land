(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Js(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const pu=(i,t="#0a5c3e")=>`<path d="M0,0 C40,-90 150,-150 300,-120 C250,-45 130,-8 0,0Z" fill="${i}"/><path d="M0,0 C100,-48 200,-84 296,-118" stroke="${t}" stroke-width="4" fill="none" opacity=".55"/>`;function tr(i,t,e,n,s,r){const o=Js(r);let a="";for(let c=0;c<6;c++){const l=-80+c*30+o()*10;a+=`<g transform="rotate(${l.toFixed(0)}) scale(${(.8+o()*.45).toFixed(2)})">${pu(s[c%s.length])}</g>`}return`<g transform="translate(${i},${t}) rotate(${n}) scale(${e})"><g class="balance" style="animation-delay:${(o()*-5).toFixed(1)}s">${a}</g></g>`}function er(i,t,e,n,s,r,o=!1){const a=Js(r);let c=`<path d="M0,0 C20,-120 90,-210 210,-250" stroke="${s}" stroke-width="7" fill="none" stroke-linecap="round"/>`;for(let l=1;l<18;l++){const u=l/18,h=210*(1-Math.pow(1-u,2))*1.02,d=-250*u-(1-u)*6,f=46*(1-u*.7);for(const g of[-1,1])c+=`<ellipse cx="${(h+4).toFixed(1)}" cy="${d.toFixed(1)}" rx="${f.toFixed(1)}" ry="${(f*.2).toFixed(1)}" fill="${s}" transform="rotate(${(g*(48+a()*14)-18).toFixed(0)} ${h.toFixed(1)} ${d.toFixed(1)})"/>`}return`<g transform="translate(${i},${t}) rotate(${n}) scale(${o?-e:e},${e})"><g class="balance lent" style="animation-delay:${(a()*-6).toFixed(1)}s">${c}</g></g>`}function Hi(i,t,e,n){const s=Js(n);let r="",o="";for(let a=70+s()*40;a<900;a+=110+s()*50){r+=`<rect x="${i-t/2-3}" y="${a}" width="${t+6}" height="9" rx="4" fill="#2f9d57"/>`;for(const c of[-1,1]){const l=i+c*t*.5;o+=`<path d="M${l},${a} C${l+c*38},${a-24} ${l+c*100},${a-14} ${l+c*138},${a+16} C${l+c*96},${a+4} ${l+c*42},${a+6} ${l},${a}Z" fill="#8be36c"/>`}}return`<g class="balance tige" style="animation-delay:${(s()*-5).toFixed(1)}s" transform="rotate(${e} ${i} 900)"><rect x="${i-t/2}" y="-30" width="${t}" height="950" fill="#7fe07a"/><rect x="${i-t/2}" y="-30" width="${t*.3}" height="950" fill="#c4f59a" opacity=".75"/><rect x="${i+t*.25}" y="-30" width="${t*.25}" height="950" fill="#2f9d57" opacity=".6"/>${r}${o}</g>`}function fl(i,t,e,n,s="#ffd24d"){let r="";for(let o=0;o<5;o++)r+=`<ellipse cx="0" cy="-12" rx="7" ry="13" fill="${n}" transform="rotate(${o*72})"/>`;return`<g transform="translate(${i},${t}) scale(${e})">${r}<circle r="5" fill="${s}"/></g>`}function mu(i,t,e,n){const s=Js(n);let r=`<path d="M${i},-20 C${i+e},${t*.35} ${i-e*.6},${t*.7} ${i+e*.4},${t}" fill="none" stroke="#1a8a5c" stroke-width="${3+s()*3}" stroke-linecap="round"/>`;for(let o=1;o<=6;o++){const a=o/7,c=i+e*.4*a*a+(s()-.5)*6;r+=`<ellipse cx="${c.toFixed(1)}" cy="${(t*a).toFixed(1)}" rx="12" ry="6" fill="${["#3fd07a","#7de58a","#22b06a"][o%3]}" transform="rotate(${(s()*100-50).toFixed(0)} ${c.toFixed(1)} ${(t*a).toFixed(1)})"/>`}return s()>.45&&(r+=fl(i+e*.4,t+8,.75,s()>.5?"#ff8a2b":"#ff9fc0")),`<g class="liane" style="animation-delay:${(s()*-5).toFixed(1)}s">${r}</g>`}function gu(){const i=Js(11);let t="";for(let r=0;r<16;r++)t+=`<circle class="bulle" style="animation-delay:${(-i()*12).toFixed(1)}s;animation-duration:${(10+i()*10).toFixed(1)}s" cx="${(i()*1600).toFixed(0)}" cy="${(300+i()*600).toFixed(0)}" r="${(8+i()*26).toFixed(0)}" fill="#fff" opacity=".13"/>`;let e="";for(let r=0;r<12;r++)e+=mu(40+r*140+(i()-.5)*60,90+i()*260,(i()-.5)*80,70+r);let n="";for(let r=0;r<14;r++){const o=i()<.5;n+=fl(o?30+i()*380:1190+i()*380,770+i()*110,.9+i()*.7,i()>.45?"#ff8a2b":"#ff9fc0")}const s=document.createElement("div");return s.className="fond",s.innerHTML=`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="bleu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a3f9a"/><stop offset=".45" stop-color="#1a86d8"/><stop offset=".8" stop-color="#4fcfe6"/><stop offset="1" stop-color="#8fe9e2"/></linearGradient>
      <radialGradient id="lueur" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#dff8ff" stop-opacity=".85"/><stop offset="1" stop-color="#dff8ff" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#bleu)"/>
    <ellipse class="lueur" cx="1130" cy="190" rx="520" ry="360" fill="url(#lueur)"/>
    ${t}
    <g opacity=".5">${tr(120,760,1.3,8,["#0d6f9a","#117fa3"],3)}${tr(1490,770,1.3,-10,["#0d6f9a","#117fa3"],4)}</g>
    ${Hi(70,28,-2,5)}${Hi(150,20,2,6)}${Hi(240,16,-1,7)}
    ${Hi(1530,28,2,8)}${Hi(1450,20,-2,9)}${Hi(1360,16,1,10)}
    ${e}
    ${tr(-30,940,1.7,0,["#14a064","#2fc27a","#0e8456","#4ad98a"],12)}
    ${tr(1630,940,1.7,0,["#14a064","#2fc27a","#0e8456","#4ad98a"],13)}
    ${er(330,930,1.5,-8,"#1fb36e",21)}
    ${er(1270,930,1.5,8,"#1fb36e",22,!0)}
    ${er(520,940,1.1,-22,"#35cf80",23)}
    ${er(1090,940,1.1,22,"#35cf80",24,!0)}
    ${n}
  </svg>`,s}function xu({surCommencer:i,surParametres:t}){const e=document.createElement("main");return e.className="ecran couverture",e.appendChild(gu()),e.insertAdjacentHTML("beforeend",`
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
 */const Aa="170",_u=0,Za=1,vu=2,dl=1,Mu=2,Xn=3,fi=0,rn=1,Oe=2,ui=0,ls=1,Nn=2,Ja=3,ja=4,yu=5,Ti=100,Su=101,wu=102,bu=103,Eu=104,Tu=200,Au=201,Ru=202,Cu=203,No=204,Fo=205,Pu=206,Lu=207,Iu=208,Du=209,Uu=210,Nu=211,Fu=212,Ou=213,zu=214,Oo=0,zo=1,Bo=2,fs=3,Vo=4,Ho=5,Go=6,ko=7,pl=0,Bu=1,Vu=2,$n=0,Hu=1,Gu=2,ku=3,Wu=4,Xu=5,qu=6,$u=7,ml=300,ds=301,ps=302,Wo=303,Xo=304,kr=306,Xs=1e3,Ci=1001,qo=1002,bn=1003,Yu=1004,nr=1005,On=1006,Jr=1007,Pi=1008,Jn=1009,gl=1010,xl=1011,qs=1012,Ra=1013,Ui=1014,zn=1015,js=1016,Ca=1017,Pa=1018,ms=1020,_l=35902,vl=1021,Ml=1022,In=1023,yl=1024,Sl=1025,us=1026,gs=1027,La=1028,Ia=1029,wl=1030,Da=1031,Ua=1033,Ir=33776,Dr=33777,Ur=33778,Nr=33779,$o=35840,Yo=35841,Zo=35842,Jo=35843,jo=36196,Ko=37492,Qo=37496,ta=37808,ea=37809,na=37810,ia=37811,sa=37812,ra=37813,oa=37814,aa=37815,ca=37816,la=37817,ua=37818,ha=37819,fa=37820,da=37821,Fr=36492,pa=36494,ma=36495,bl=36283,ga=36284,xa=36285,_a=36286,Zu=3200,Ju=3201,El=0,ju=1,li="",xn="srgb",vs="srgb-linear",Wr="linear",Ee="srgb",Gi=7680,Ka=519,Ku=512,Qu=513,th=514,Tl=515,eh=516,nh=517,ih=518,sh=519,va=35044,Qa="300 es",qn=2e3,Br=2001;class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jr=Math.PI/180,Ma=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function rh(i,t){return(i%t+t)%t}function Kr(i,t,e){return(1-e)*i+e*t}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,n,s,r,o,a,c,l){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],E=s[1],S=s[4],v=s[7],O=s[2],A=s[5],C=s[8];return r[0]=o*_+a*E+c*O,r[3]=o*m+a*S+c*A,r[6]=o*p+a*v+c*C,r[1]=l*_+u*E+h*O,r[4]=l*m+u*S+h*A,r[7]=l*p+u*v+h*C,r[2]=d*_+f*E+g*O,r[5]=d*m+f*S+g*A,r[8]=d*p+f*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qr.makeScale(t,e)),this}rotate(t){return this.premultiply(Qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new he;function Al(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function oh(){const i=Vr("canvas");return i.style.display="block",i}const tc={};function Os(i){i in tc||(tc[i]=!0,console.warn(i))}function ah(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ch(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xe={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ee&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ee&&(i.r=hs(i.r),i.g=hs(i.g),i.b=hs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?Wr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ec=[.64,.33,.3,.6,.15,.06],nc=[.2126,.7152,.0722],ic=[.3127,.329],sc=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xe.define({[vs]:{primaries:ec,whitePoint:ic,transfer:Wr,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:ec,whitePoint:ic,transfer:Ee,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}});let ki;class uh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=Vr("canvas")),ki.width=t.width,ki.height=t.height;const n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hh=0;class Rl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(to(s[o].image)):r.push(to(s[o]))}else r=to(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function to(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fh=0;class on extends Ms{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=Ci,s=Ci,r=On,o=Pi,a=In,c=Jn,l=on.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Yn(),this.name="",this.source=new Rl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xs:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xs:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=ml;on.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,s=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,v=(f+1)/2,O=(p+1)/2,A=(u+d)/4,C=(h+_)/4,R=(g+m)/4;return S>v&&S>O?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=C/n):v>O?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=R/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=C/r,s=R/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dh extends Ms{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends dh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cl extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ph extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const O=Math.sqrt(S),A=Math.atan2(O,p*E);m=Math.sin(m*A)/O,a=Math.sin(a*A)/O}const v=a*E;if(c=c*m+d*v,l=l*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const O=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=O,l*=O,u*=O,h*=O}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return eo.copy(this).projectOnVector(t),this.sub(eo)}reflect(t){return this.sub(eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new L,oc=new zi;class Bi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(t.matrixWorld),this.union(ir)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),sr.subVectors(this.max,bs),Wi.subVectors(t.a,bs),Xi.subVectors(t.b,bs),qi.subVectors(t.c,bs),ni.subVectors(Xi,Wi),ii.subVectors(qi,Xi),mi.subVectors(Wi,qi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-mi.z,mi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,mi.z,0,-mi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-mi.y,mi.x,0];return!no(e,Wi,Xi,qi,sr)||(e=[1,0,0,0,1,0,0,0,1],!no(e,Wi,Xi,qi,sr))?!1:(rr.crossVectors(ni,ii),e=[rr.x,rr.y,rr.z],no(e,Wi,Xi,qi,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new L,new L,new L,new L,new L,new L,new L,new L],Cn=new L,ir=new Bi,Wi=new L,Xi=new L,qi=new L,ni=new L,ii=new L,mi=new L,bs=new L,sr=new L,rr=new L,gi=new L;function no(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const mh=new Bi,Es=new L,io=new L;class ys{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(io)),this.expandByPoint(Es.copy(t.center).sub(io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new L,so=new L,or=new L,si=new L,ro=new L,ar=new L,oo=new L;class Pl{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){so.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),si.copy(this.origin).sub(so);const r=t.distanceTo(e)*.5,o=-this.direction.dot(or),a=si.dot(this.direction),c=-si.dot(or),l=si.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(so).addScaledVector(or,d),f}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){ro.subVectors(e,t),ar.subVectors(n,t),oo.crossVectors(ro,ar);let o=this.direction.dot(oo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);const c=a*this.direction.dot(ar.crossVectors(si,ar));if(c<0)return null;const l=a*this.direction.dot(ro.cross(si));if(l<0||c+l>o)return null;const u=-a*si.dot(oo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,o,a,c,l,u,h,d,f,g,_,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gh,t,xh)}lookAt(t,e,n){const s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),ri.crossVectors(n,Mn),ri.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),ri.crossVectors(n,Mn)),ri.normalize(),cr.crossVectors(Mn,ri),s[0]=ri.x,s[4]=cr.x,s[8]=Mn.x,s[1]=ri.y,s[5]=cr.y,s[9]=Mn.y,s[2]=ri.z,s[6]=cr.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],S=n[7],v=n[11],O=n[15],A=s[0],C=s[4],R=s[8],w=s[12],M=s[1],I=s[5],j=s[9],Z=s[13],tt=s[2],Y=s[6],K=s[10],ht=s[14],$=s[3],Mt=s[7],yt=s[11],zt=s[15];return r[0]=o*A+a*M+c*tt+l*$,r[4]=o*C+a*I+c*Y+l*Mt,r[8]=o*R+a*j+c*K+l*yt,r[12]=o*w+a*Z+c*ht+l*zt,r[1]=u*A+h*M+d*tt+f*$,r[5]=u*C+h*I+d*Y+f*Mt,r[9]=u*R+h*j+d*K+f*yt,r[13]=u*w+h*Z+d*ht+f*zt,r[2]=g*A+_*M+m*tt+p*$,r[6]=g*C+_*I+m*Y+p*Mt,r[10]=g*R+_*j+m*K+p*yt,r[14]=g*w+_*Z+m*ht+p*zt,r[3]=E*A+S*M+v*tt+O*$,r[7]=E*C+S*I+v*Y+O*Mt,r[11]=E*R+S*j+v*K+O*yt,r[15]=E*w+S*Z+v*ht+O*zt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,S=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,v=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,O=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,A=e*E+n*S+s*v+r*O;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=E*C,t[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*C,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*C,t[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*C,t[4]=S*C,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*C,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*C,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*f+e*c*f)*C,t[8]=v*C,t[9]=(g*h*r-u*_*r-g*n*f+e*_*f+u*n*p-e*h*p)*C,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*C,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*f-e*a*f)*C,t[12]=O*C,t[13]=(u*_*s-g*h*s+g*n*d-e*_*d-u*n*m+e*h*m)*C,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*C,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,E=c*l,S=c*u,v=c*h,O=n.x,A=n.y,C=n.z;return s[0]=(1-(_+p))*O,s[1]=(f+v)*O,s[2]=(g-S)*O,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(d+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+S)*C,s[9]=(m-E)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const l=1/r,u=1/o,h=1/a;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,e.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=qn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===qn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Br)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=qn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*l,f=(n+s)*u;let g,_;if(a===qn)g=(o+r)*h,_=-2*h;else if(a===Br)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $i=new L,Pn=new _e,gh=new L(0,0,0),xh=new L(1,1,1),ri=new L,cr=new L,Mn=new L,ac=new _e,cc=new zi;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Ll{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _h=0;const lc=new L,Yi=new zi,Gn=new _e,lr=new L,Ts=new L,vh=new L,Mh=new zi,uc=new L(1,0,0),hc=new L(0,1,0),fc=new L(0,0,1),dc={type:"added"},yh={type:"removed"},Zi={type:"childadded",child:null},ao={type:"childremoved",child:null};class Ve extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new L,e=new mn,n=new zi,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new he}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(uc,t)}rotateY(t){return this.rotateOnAxis(hc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return lc.copy(t).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uc,t)}translateY(t){return this.translateOnAxis(hc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ts,lr,this.up):Gn.lookAt(lr,Ts,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yh),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Mh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new L(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new L,kn=new L,co=new L,Wn=new L,Ji=new L,ji=new L,pc=new L,lo=new L,uo=new L,ho=new L,fo=new Re,po=new Re,mo=new Re;class Tn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),kn.subVectors(n,e),co.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(kn),c=Ln.dot(co),l=kn.dot(kn),u=kn.dot(co),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,n),mo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fo,r.x),o.addScaledVector(po,r.y),o.addScaledVector(mo,r.z),o}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),kn.subVectors(t,e),Ln.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),Ln.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ji.subVectors(s,n),ji.subVectors(r,n),lo.subVectors(t,n);const c=Ji.dot(lo),l=ji.dot(lo);if(c<=0&&l<=0)return e.copy(n);uo.subVectors(t,s);const u=Ji.dot(uo),h=ji.dot(uo);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ji,o);ho.subVectors(t,r);const f=Ji.dot(ho),g=ji.dot(ho);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ji,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return pc.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(pc,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Ji,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},ur={h:0,s:0,l:0};function go(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class oe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=rh(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=go(o,r,t+1/3),this.g=go(o,r,t),this.b=go(o,r,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const n=Il[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return xe.fromWorkingColorSpace(en.copy(this),t),Math.round(Ye(en.r*255,0,255))*65536+Math.round(Ye(en.g*255,0,255))*256+Math.round(Ye(en.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(en.copy(this),e);const n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=xn){xe.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,s=en.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(ur);const n=Kr(oi.h,ur.h,e),s=Kr(oi.s,ur.s,e),r=Kr(oi.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new oe;oe.NAMES=Il;let Sh=0;class Vi extends Ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Yn(),this.name="",this.blending=ls,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Fo,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==No&&(n.blendSrc=this.blendSrc),this.blendDst!==Fo&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ae extends Vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const He=new L,hr=new Ft;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=va,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==va&&(t.usage=this.usage),t}}class Dl extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ul extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wh=0;const En=new _e,xo=new Ve,Ki=new L,yn=new Bi,As=new Bi,qe=new L;class ze extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Al(t)?Ul:Dl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ve(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];As.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(yn.min,As.min),yn.expandByPoint(qe),qe.addVectors(yn.max,As.max),yn.expandByPoint(qe)):(yn.expandByPoint(As.min),yn.expandByPoint(As.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)qe.fromBufferAttribute(a,l),c&&(Ki.fromBufferAttribute(t,l),qe.add(Ki)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new L,c[R]=new L;const l=new L,u=new L,h=new L,d=new Ft,f=new Ft,g=new Ft,_=new L,m=new L;function p(R,w,M){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),a[R].add(_),a[w].add(_),a[M].add(_),c[R].add(m),c[w].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,w=E.length;R<w;++R){const M=E[R],I=M.start,j=M.count;for(let Z=I,tt=I+j;Z<tt;Z+=3)p(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const S=new L,v=new L,O=new L,A=new L;function C(R){O.fromBufferAttribute(s,R),A.copy(O);const w=a[R];S.copy(w),S.sub(O.multiplyScalar(O.dot(w))).normalize(),v.crossVectors(A,w);const I=v.dot(c[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,I)}for(let R=0,w=E.length;R<w;++R){const M=E[R],I=M.start,j=M.count;for(let Z=I,tt=I+j;Z<tt;Z+=3)C(t.getX(Z+0)),C(t.getX(Z+1)),C(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new $e(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new _e,xi=new Pl,fr=new ys,gc=new L,dr=new L,pr=new L,mr=new L,_o=new L,gr=new L,xc=new L,xr=new L;class B extends Ve{constructor(t=new ze,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(_o.fromBufferAttribute(h,t),o?gr.addScaledVector(_o,u):gr.addScaledVector(_o.sub(e),u))}e.add(gr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(fr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(fr,gc)===null||xi.origin.distanceToSquared(gc)>(t.far-t.near)**2))&&(mc.copy(r).invert(),xi.copy(t.ray).applyMatrix4(mc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,O=S;v<O;v+=3){const A=a.getX(v),C=a.getX(v+1),R=a.getX(v+2);s=_r(this,p,t,n,l,u,h,A,C,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=_r(this,o,t,n,l,u,h,E,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,O=S;v<O;v+=3){const A=v,C=v+1,R=v+2;s=_r(this,p,t,n,l,u,h,A,C,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,S=m+1,v=m+2;s=_r(this,o,t,n,l,u,h,E,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function bh(i,t,e,n,s,r,o,a){let c;if(t.side===rn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===fi,a),c===null)return null;xr.copy(a),xr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(xr);return l<e.near||l>e.far?null:{distance:l,point:xr.clone(),object:i}}function _r(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,dr),i.getVertexPosition(c,pr),i.getVertexPosition(l,mr);const u=bh(i,t,e,n,dr,pr,mr,xc);if(u){const h=new L;Tn.getBarycoord(xc,dr,pr,mr,h),s&&(u.uv=Tn.getInterpolatedAttribute(s,a,c,l,h,new Ft)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,a,c,l,h,new Ft)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};Tn.getNormal(dr,pr,mr,d.normal),u.face=d,u.barycoord=h}return u}class Xt extends ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(h,2));function g(_,m,p,E,S,v,O,A,C,R,w){const M=v/C,I=O/R,j=v/2,Z=O/2,tt=A/2,Y=C+1,K=R+1;let ht=0,$=0;const Mt=new L;for(let yt=0;yt<K;yt++){const zt=yt*I-Z;for(let Bt=0;Bt<Y;Bt++){const Gt=Bt*M-j;Mt[_]=Gt*E,Mt[m]=zt*S,Mt[p]=tt,l.push(Mt.x,Mt.y,Mt.z),Mt[_]=0,Mt[m]=0,Mt[p]=A>0?1:-1,u.push(Mt.x,Mt.y,Mt.z),h.push(Bt/C),h.push(1-yt/R),ht+=1}}for(let yt=0;yt<R;yt++)for(let zt=0;zt<C;zt++){const Bt=d+zt+Y*yt,Gt=d+zt+Y*(yt+1),ct=d+(zt+1)+Y*(yt+1),J=d+(zt+1)+Y*yt;c.push(Bt,Gt,J),c.push(Gt,ct,J),$+=6}a.addGroup(f,$,w),f+=$,d+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function pn(i){const t={};for(let e=0;e<i.length;e++){const n=xs(i[e]);for(const s in n)t[s]=n[s]}return t}function Eh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const Th={clone:xs,merge:pn};var Ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ah,this.fragmentShader=Rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Eh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fl extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new L,_c=new Ft,vc=new Ft;class Sn extends Fl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,_c,vc),e.subVectors(vc,_c)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(jr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qi=-90,ts=1;class Ch extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(Qi,ts,t,e);s.layers=this.layers,this.add(s);const r=new Sn(Qi,ts,t,e);r.layers=this.layers,this.add(r);const o=new Sn(Qi,ts,t,e);o.layers=this.layers,this.add(o);const a=new Sn(Qi,ts,t,e);a.layers=this.layers,this.add(a);const c=new Sn(Qi,ts,t,e);c.layers=this.layers,this.add(c);const l=new Sn(Qi,ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ol extends on{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ph extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ol(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:On}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xt(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ui});r.uniforms.tEquirect.value=e;const o=new B(s,r),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=On),new Ch(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const vo=new L,Lh=new L,Ih=new he;class Si{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=vo.subVectors(n,e).cross(Lh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ih.getNormalMatrix(t),s=this.coplanarPoint(vo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new ys,vr=new L;class Na{constructor(t=new Si,e=new Si,n=new Si,s=new Si,r=new Si,o=new Si){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],S=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+o,d+u,m+g,v+E).normalize(),n[3].setComponents(c-o,d-u,m-g,v-E).normalize(),n[4].setComponents(c-a,d-h,m-_,v-S).normalize(),e===qn)n[5].setComponents(c+a,d+h,m+_,v+S).normalize();else if(e===Br)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(vr.x=s.normal.x>0?t.max.x:t.min.x,vr.y=s.normal.y>0?t.max.y:t.min.y,vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dh(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Fe extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*d-o;for(let S=0;S<l;S++){const v=S*h-r;g.push(v,-E,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const S=E+l*p,v=E+l*(p+1),O=E+1+l*(p+1),A=E+1+l*p;f.push(S,v,A),f.push(v,O,A)}this.setIndex(f),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nh=`#ifdef USE_ALPHAHASH
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
#endif`,Fh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bh=`#ifdef USE_ALPHATEST
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
#endif`,Hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gh=`#ifdef USE_BATCHING
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
#endif`,kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$h=`#ifdef USE_IRIDESCENCE
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
#endif`,Yh=`#ifdef USE_BUMPMAP
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
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sf=`#define PI 3.141592653589793
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
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,of=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tf=`uniform bool receiveShadow;
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
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,If=`PhysicalMaterial material;
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
#endif`,Df=`struct PhysicalMaterial {
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
}`,Uf=`
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wf=`#if defined( USE_POINTS_UV )
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
#endif`,Xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`#ifdef USE_MORPHTARGETS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,id=`#ifdef USE_NORMALMAP
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
#endif`,sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vd=`float getShadowMask() {
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
}`,Md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yd=`#ifdef USE_SKINNING
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
#endif`,Sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
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
#endif`,bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rd=`#ifdef USE_TRANSMISSION
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
#endif`,Cd=`#ifdef USE_TRANSMISSION
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
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nd=`uniform sampler2D t2D;
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`uniform samplerCube tCube;
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
}`,Hd=`#if DEPTH_PACKING == 3200
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
}`,Gd=`#define DISTANCE
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
}`,kd=`#define DISTANCE
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`uniform float scale;
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
}`,$d=`uniform vec3 diffuse;
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
}`,Yd=`#include <common>
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
}`,Zd=`uniform vec3 diffuse;
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
}`,Jd=`#define LAMBERT
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
}`,jd=`#define LAMBERT
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
}`,Kd=`#define MATCAP
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
}`,Qd=`#define MATCAP
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
}`,tp=`#define NORMAL
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
}`,ep=`#define NORMAL
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
}`,np=`#define PHONG
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
}`,ip=`#define PHONG
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
}`,sp=`#define STANDARD
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
}`,rp=`#define STANDARD
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
}`,op=`#define TOON
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
}`,ap=`#define TOON
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
}`,cp=`uniform float size;
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
}`,lp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,hp=`uniform vec3 color;
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
}`,fp=`uniform float rotation;
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
}`,dp=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Uh,alphahash_pars_fragment:Nh,alphamap_fragment:Fh,alphamap_pars_fragment:Oh,alphatest_fragment:zh,alphatest_pars_fragment:Bh,aomap_fragment:Vh,aomap_pars_fragment:Hh,batching_pars_vertex:Gh,batching_vertex:kh,begin_vertex:Wh,beginnormal_vertex:Xh,bsdfs:qh,iridescence_fragment:$h,bumpmap_pars_fragment:Yh,clipping_planes_fragment:Zh,clipping_planes_pars_fragment:Jh,clipping_planes_pars_vertex:jh,clipping_planes_vertex:Kh,color_fragment:Qh,color_pars_fragment:tf,color_pars_vertex:ef,color_vertex:nf,common:sf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:of,displacementmap_pars_vertex:af,displacementmap_vertex:cf,emissivemap_fragment:lf,emissivemap_pars_fragment:uf,colorspace_fragment:hf,colorspace_pars_fragment:ff,envmap_fragment:df,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Af,envmap_vertex:xf,fog_vertex:_f,fog_pars_vertex:vf,fog_fragment:Mf,fog_pars_fragment:yf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:wf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Ef,lights_pars_begin:Tf,lights_toon_fragment:Rf,lights_toon_pars_fragment:Cf,lights_phong_fragment:Pf,lights_phong_pars_fragment:Lf,lights_physical_fragment:If,lights_physical_pars_fragment:Df,lights_fragment_begin:Uf,lights_fragment_maps:Nf,lights_fragment_end:Ff,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:zf,logdepthbuf_pars_vertex:Bf,logdepthbuf_vertex:Vf,map_fragment:Hf,map_pars_fragment:Gf,map_particle_fragment:kf,map_particle_pars_fragment:Wf,metalnessmap_fragment:Xf,metalnessmap_pars_fragment:qf,morphinstance_vertex:$f,morphcolor_vertex:Yf,morphnormal_vertex:Zf,morphtarget_pars_vertex:Jf,morphtarget_vertex:jf,normal_fragment_begin:Kf,normal_fragment_maps:Qf,normal_pars_fragment:td,normal_pars_vertex:ed,normal_vertex:nd,normalmap_pars_fragment:id,clearcoat_normal_fragment_begin:sd,clearcoat_normal_fragment_maps:rd,clearcoat_pars_fragment:od,iridescence_pars_fragment:ad,opaque_fragment:cd,packing:ld,premultiplied_alpha_fragment:ud,project_vertex:hd,dithering_fragment:fd,dithering_pars_fragment:dd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:gd,shadowmap_pars_vertex:xd,shadowmap_vertex:_d,shadowmask_pars_fragment:vd,skinbase_vertex:Md,skinning_pars_vertex:yd,skinning_vertex:Sd,skinnormal_vertex:wd,specularmap_fragment:bd,specularmap_pars_fragment:Ed,tonemapping_fragment:Td,tonemapping_pars_fragment:Ad,transmission_fragment:Rd,transmission_pars_fragment:Cd,uv_pars_fragment:Pd,uv_pars_vertex:Ld,uv_vertex:Id,worldpos_vertex:Dd,background_vert:Ud,background_frag:Nd,backgroundCube_vert:Fd,backgroundCube_frag:Od,cube_vert:zd,cube_frag:Bd,depth_vert:Vd,depth_frag:Hd,distanceRGBA_vert:Gd,distanceRGBA_frag:kd,equirect_vert:Wd,equirect_frag:Xd,linedashed_vert:qd,linedashed_frag:$d,meshbasic_vert:Yd,meshbasic_frag:Zd,meshlambert_vert:Jd,meshlambert_frag:jd,meshmatcap_vert:Kd,meshmatcap_frag:Qd,meshnormal_vert:tp,meshnormal_frag:ep,meshphong_vert:np,meshphong_frag:ip,meshphysical_vert:sp,meshphysical_frag:rp,meshtoon_vert:op,meshtoon_frag:ap,points_vert:cp,points_frag:lp,shadow_vert:up,shadow_frag:hp,sprite_vert:fp,sprite_frag:dp},Nt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Un={basic:{uniforms:pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new oe(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:pn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:pn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new oe(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:pn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:pn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:pn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:pn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:pn([Nt.common,Nt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:pn([Nt.lights,Nt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Un.physical={uniforms:pn([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Mr={r:0,b:0,g:0},vi=new mn,pp=new _e;function mp(i,t,e,n,s,r,o){const a=new oe(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function _(E){let S=!1;const v=g(E);v===null?p(a,c):v&&v.isColor&&(p(v,1),S=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===kr)?(u===void 0&&(u=new B(new Xt(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:xs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vi.copy(S.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pp.makeRotationFromEuler(vi)),u.material.toneMapped=xe.getTransfer(v.colorSpace)!==Ee,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new B(new Fe(2,2),new di({name:"BackgroundMaterial",uniforms:xs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=xe.getTransfer(v.colorSpace)!==Ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,S){E.getRGB(Mr,Nl(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:_,addToRenderList:m}}function gp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,I,j,Z,tt){let Y=!1;const K=h(Z,j,I);r!==K&&(r=K,l(r.object)),Y=f(M,Z,j,tt),Y&&g(M,Z,j,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(M,I,j,Z),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,I,j){const Z=j.wireframe===!0;let tt=n[M.id];tt===void 0&&(tt={},n[M.id]=tt);let Y=tt[I.id];Y===void 0&&(Y={},tt[I.id]=Y);let K=Y[Z];return K===void 0&&(K=d(c()),Y[Z]=K),K}function d(M){const I=[],j=[],Z=[];for(let tt=0;tt<e;tt++)I[tt]=0,j[tt]=0,Z[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:j,attributeDivisors:Z,object:M,attributes:{},index:null}}function f(M,I,j,Z){const tt=r.attributes,Y=I.attributes;let K=0;const ht=j.getAttributes();for(const $ in ht)if(ht[$].location>=0){const yt=tt[$];let zt=Y[$];if(zt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(zt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(zt=M.instanceColor)),yt===void 0||yt.attribute!==zt||zt&&yt.data!==zt.data)return!0;K++}return r.attributesNum!==K||r.index!==Z}function g(M,I,j,Z){const tt={},Y=I.attributes;let K=0;const ht=j.getAttributes();for(const $ in ht)if(ht[$].location>=0){let yt=Y[$];yt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor));const zt={};zt.attribute=yt,yt&&yt.data&&(zt.data=yt.data),tt[$]=zt,K++}r.attributes=tt,r.attributesNum=K,r.index=Z}function _(){const M=r.newAttributes;for(let I=0,j=M.length;I<j;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){const j=r.newAttributes,Z=r.enabledAttributes,tt=r.attributeDivisors;j[M]=1,Z[M]===0&&(i.enableVertexAttribArray(M),Z[M]=1),tt[M]!==I&&(i.vertexAttribDivisor(M,I),tt[M]=I)}function E(){const M=r.newAttributes,I=r.enabledAttributes;for(let j=0,Z=I.length;j<Z;j++)I[j]!==M[j]&&(i.disableVertexAttribArray(j),I[j]=0)}function S(M,I,j,Z,tt,Y,K){K===!0?i.vertexAttribIPointer(M,I,j,tt,Y):i.vertexAttribPointer(M,I,j,Z,tt,Y)}function v(M,I,j,Z){_();const tt=Z.attributes,Y=j.getAttributes(),K=I.defaultAttributeValues;for(const ht in Y){const $=Y[ht];if($.location>=0){let Mt=tt[ht];if(Mt===void 0&&(ht==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),ht==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),Mt!==void 0){const yt=Mt.normalized,zt=Mt.itemSize,Bt=t.get(Mt);if(Bt===void 0)continue;const Gt=Bt.buffer,ct=Bt.type,J=Bt.bytesPerElement,rt=ct===i.INT||ct===i.UNSIGNED_INT||Mt.gpuType===Ra;if(Mt.isInterleavedBufferAttribute){const vt=Mt.data,Ct=vt.stride,Pt=Mt.offset;if(vt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<$.locationSize;Ot++)p($.location+Ot,vt.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Ot=0;Ot<$.locationSize;Ot++)m($.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let Ot=0;Ot<$.locationSize;Ot++)S($.location+Ot,zt/$.locationSize,ct,yt,Ct*J,(Pt+zt/$.locationSize*Ot)*J,rt)}else{if(Mt.isInstancedBufferAttribute){for(let vt=0;vt<$.locationSize;vt++)p($.location+vt,Mt.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let vt=0;vt<$.locationSize;vt++)m($.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let vt=0;vt<$.locationSize;vt++)S($.location+vt,zt/$.locationSize,ct,yt,zt*J,zt/$.locationSize*vt*J,rt)}}else if(K!==void 0){const yt=K[ht];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv($.location,yt);break;case 3:i.vertexAttrib3fv($.location,yt);break;case 4:i.vertexAttrib4fv($.location,yt);break;default:i.vertexAttrib1fv($.location,yt)}}}}E()}function O(){R();for(const M in n){const I=n[M];for(const j in I){const Z=I[j];for(const tt in Z)u(Z[tt].object),delete Z[tt];delete I[j]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const j in I){const Z=I[j];for(const tt in Z)u(Z[tt].object),delete Z[tt];delete I[j]}delete n[M.id]}function C(M){for(const I in n){const j=n[I];if(j[M.id]===void 0)continue;const Z=j[M.id];for(const tt in Z)u(Z[tt].object),delete Z[tt];delete j[M.id]}}function R(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:O,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function xp(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function _p(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==In&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const R=C===js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Jn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zn&&!R)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:O,maxSamples:A}}function vp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Si,a=new he,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const E=r?0:n,S=E*4;let v=p.clippingState||null;c.value=v,v=u(g,d,S,f);for(let O=0;O!==S;++O)v[O]=e[O];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(h[S]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Mp(i){let t=new WeakMap;function e(o,a){return a===Wo?o.mapping=ds:a===Xo&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wo||a===Xo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ph(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Bl extends Fl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const as=4,Mc=[.125,.215,.35,.446,.526,.582],Ai=20,Mo=new Bl,yc=new oe;let yo=null,So=0,wo=0,bo=!1;const wi=(1+Math.sqrt(5))/2,es=1/wi,Sc=[new L(-wi,es,0),new L(wi,es,0),new L(-es,0,wi),new L(es,0,wi),new L(0,wi,-es),new L(0,wi,es),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){yo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yo,So,wo),this._renderer.xr.enabled=bo,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:js,format:In,colorSpace:vs,depthBuffer:!1},s=bc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yp(r)),this._blurMaterial=Sp(r,t,e)}return s}_compileMaterial(t){const e=new B(this._lodPlanes[0],t);this._renderer.compile(e,Mo)}_sceneToCubeUV(t,e,n,s){const a=new Sn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(yc),u.toneMapping=$n,u.autoClear=!1;const f=new Ae({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new B(new Xt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(yc),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):E===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;yr(s,E*S,p>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ds||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;yr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Mo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sc[(s-r-1)%Sc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new B(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ai-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const p=[];let E=0;for(let C=0;C<Ai;++C){const R=C/_,w=Math.exp(-R*R/2);p.push(w),C===0?E+=w:C<m&&(E+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const v=this._sizeLods[s],O=3*v*(s>S-as?s-S+as:0),A=4*(this._cubeSize-v);yr(e,O,A,3*v,2*v),c.setRenderTarget(e),c.render(h,Mo)}}function yp(i){const t=[],e=[],n=[];let s=i;const r=i-as+1+Mc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-as?c=Mc[o-i+as-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),S=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,R=A>2?0:-1,w=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];E.set(w,_*g*A),S.set(d,m*g*A);const M=[A,A,A,A,A,A];v.set(M,p*g*A)}const O=new ze;O.setAttribute("position",new $e(E,_)),O.setAttribute("uv",new $e(S,m)),O.setAttribute("faceIndex",new $e(v,p)),t.push(O),s>as&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bc(i,t,e){const n=new Ni(i,t,e);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sp(i,t,e){const n=new Float32Array(Ai),s=new L(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ec(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Tc(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Fa(){return`

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
	`}function wp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Wo||c===Xo,u=c===ds||c===ps;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new wc(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new wc(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Os("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ep(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let S=0,v=E.length;S<v;S+=3){const O=E[S+0],A=E[S+1],C=E[S+2];d.push(O,A,A,C,C,O)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,v=E.length/3-1;S<v;S+=3){const O=S+0,A=S+1,C=S+2;d.push(O,A,A,C,C,O)}}else return;const m=new(Al(d)?Ul:Dl)(d,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Tp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ap(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rp(i,t,e){const n=new WeakMap,s=new Re;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let O=a.attributes.position.count*v,A=1;O>t.maxTextureSize&&(A=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const C=new Float32Array(O*A*4*h),R=new Cl(C,O,A,h);R.type=zn,R.needsUpdate=!0;const w=v*4;for(let I=0;I<h;I++){const j=p[I],Z=E[I],tt=S[I],Y=O*A*4*I;for(let K=0;K<j.count;K++){const ht=K*w;g===!0&&(s.fromBufferAttribute(j,K),C[Y+ht+0]=s.x,C[Y+ht+1]=s.y,C[Y+ht+2]=s.z,C[Y+ht+3]=0),_===!0&&(s.fromBufferAttribute(Z,K),C[Y+ht+4]=s.x,C[Y+ht+5]=s.y,C[Y+ht+6]=s.z,C[Y+ht+7]=0),m===!0&&(s.fromBufferAttribute(tt,K),C[Y+ht+8]=s.x,C[Y+ht+9]=s.y,C[Y+ht+10]=s.z,C[Y+ht+11]=tt.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new Ft(O,A)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Cp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Vl extends on{constructor(t,e,n,s,r,o,a,c,l,u=us){if(u!==us&&u!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===us&&(n=Ui),n===void 0&&u===gs&&(n=ms),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=c!==void 0?c:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Hl=new on,Ac=new Vl(1,1),Gl=new Cl,kl=new ph,Wl=new Ol,Rc=[],Cc=[],Pc=new Float32Array(16),Lc=new Float32Array(9),Ic=new Float32Array(4);function Ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Rc[s];if(r===void 0&&(r=new Float32Array(s),Rc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xr(i,t){let e=Cc[t];e===void 0&&(e=new Int32Array(t),Cc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function Up(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(ke(e,n))return;Ic.set(n),i.uniformMatrix2fv(this.addr,!1,Ic),We(e,n)}}function Np(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(ke(e,n))return;Lc.set(n),i.uniformMatrix3fv(this.addr,!1,Lc),We(e,n)}}function Fp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(ke(e,n))return;Pc.set(n),i.uniformMatrix4fv(this.addr,!1,Pc),We(e,n)}}function Op(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function Vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function Hp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function Wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function Xp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ac.compareFunction=Tl,r=Ac):r=Hl,e.setTexture2D(t||r,s)}function qp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kl,s)}function $p(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wl,s)}function Yp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gl,s)}function Zp(i){switch(i){case 5126:return Pp;case 35664:return Lp;case 35665:return Ip;case 35666:return Dp;case 35674:return Up;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return zp;case 35668:case 35672:return Bp;case 35669:case 35673:return Vp;case 5125:return Hp;case 36294:return Gp;case 36295:return kp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Yp}}function Jp(i,t){i.uniform1fv(this.addr,t)}function jp(i,t){const e=Ss(t,this.size,2);i.uniform2fv(this.addr,e)}function Kp(i,t){const e=Ss(t,this.size,3);i.uniform3fv(this.addr,e)}function Qp(i,t){const e=Ss(t,this.size,4);i.uniform4fv(this.addr,e)}function t0(i,t){const e=Ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function e0(i,t){const e=Ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function n0(i,t){const e=Ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function i0(i,t){i.uniform1iv(this.addr,t)}function s0(i,t){i.uniform2iv(this.addr,t)}function r0(i,t){i.uniform3iv(this.addr,t)}function o0(i,t){i.uniform4iv(this.addr,t)}function a0(i,t){i.uniform1uiv(this.addr,t)}function c0(i,t){i.uniform2uiv(this.addr,t)}function l0(i,t){i.uniform3uiv(this.addr,t)}function u0(i,t){i.uniform4uiv(this.addr,t)}function h0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Hl,r[o])}function f0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kl,r[o])}function d0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Wl,r[o])}function p0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gl,r[o])}function m0(i){switch(i){case 5126:return Jp;case 35664:return jp;case 35665:return Kp;case 35666:return Qp;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return c0;case 36295:return l0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return p0}}class g0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zp(e.type)}}class x0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m0(e.type)}}class _0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function Dc(i,t){i.seq.push(t),i.map[t.id]=t}function v0(i,t,e){const n=i.name,s=n.length;for(Eo.lastIndex=0;;){const r=Eo.exec(n),o=Eo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Dc(e,l===void 0?new g0(a,i,t):new x0(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new _0(a),Dc(e,h)),e=h}}}class Or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);v0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Uc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const M0=37297;let y0=0;function S0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Nc=new he;function w0(i){xe._getMatrix(Nc,xe.workingColorSpace,i);const t=`mat3( ${Nc.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case Wr:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+S0(i.getShaderSource(t),o)}else return s}function b0(i,t){const e=w0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function E0(i,t){let e;switch(t){case Hu:e="Linear";break;case Gu:e="Reinhard";break;case ku:e="Cineon";break;case Wu:e="ACESFilmic";break;case qu:e="AgX";break;case $u:e="Neutral";break;case Xu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sr=new L;function T0(){xe.getLuminanceCoefficients(Sr);const i=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function R0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zs(i){return i!==""}function Oc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(i){return i.replace(P0,I0)}const L0=new Map;function I0(i,t){let e=fe[t];if(e===void 0){const n=L0.get(t);if(n!==void 0)e=fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ya(e)}const D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(i){return i.replace(D0,U0)}function U0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function N0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function F0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case ps:t="ENVMAP_TYPE_CUBE";break;case kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function O0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:t="ENVMAP_MODE_REFRACTION";break}return t}function z0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pl:t="ENVMAP_BLENDING_MULTIPLY";break;case Bu:t="ENVMAP_BLENDING_MIX";break;case Vu:t="ENVMAP_BLENDING_ADD";break}return t}function B0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function V0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=N0(e),l=F0(e),u=O0(e),h=z0(e),d=B0(e),f=A0(e),g=R0(r),_=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(m=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?fe.tonemapping_pars_fragment:"",e.toneMapping!==$n?E0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,b0("linearToOutputTexel",e.outputColorSpace),T0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),o=ya(o),o=Oc(o,e),o=zc(o,e),a=ya(a),a=Oc(a,e),a=zc(a,e),o=Bc(o),a=Bc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+m+o,v=E+p+a,O=Uc(s,s.VERTEX_SHADER,S),A=Uc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,O),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(I){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(_).trim(),Z=s.getShaderInfoLog(O).trim(),tt=s.getShaderInfoLog(A).trim();let Y=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,O,A);else{const ht=Fc(s,O,"vertex"),$=Fc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+ht+`
`+$)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(Z===""||tt==="")&&(K=!1);K&&(I.diagnostics={runnable:Y,programLog:j,vertexShader:{log:Z,prefix:m},fragmentShader:{log:tt,prefix:p}})}s.deleteShader(O),s.deleteShader(A),R=new Or(s,_),w=C0(s,_)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,M0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=A,this}let H0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new k0(t),e.set(t,n)),n}}class k0{constructor(t){this.id=H0++,this.code=t,this.usedTimes=0}}function W0(i,t,e,n,s,r,o){const a=new Ll,c=new G0,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,I,j,Z){const tt=j.fog,Y=Z.geometry,K=w.isMeshStandardMaterial?j.environment:null,ht=(w.isMeshStandardMaterial?e:t).get(w.envMap||K),$=ht&&ht.mapping===kr?ht.image.height:null,Mt=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,zt=yt!==void 0?yt.length:0;let Bt=0;Y.morphAttributes.position!==void 0&&(Bt=1),Y.morphAttributes.normal!==void 0&&(Bt=2),Y.morphAttributes.color!==void 0&&(Bt=3);let Gt,ct,J,rt;if(Mt){const pe=Un[Mt];Gt=pe.vertexShader,ct=pe.fragmentShader}else Gt=w.vertexShader,ct=w.fragmentShader,c.update(w),J=c.getVertexShaderID(w),rt=c.getFragmentShaderID(w);const vt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Pt=Z.isInstancedMesh===!0,Ot=Z.isBatchedMesh===!0,re=!!w.map,Kt=!!w.matcap,de=!!ht,W=!!w.aoMap,we=!!w.lightMap,ae=!!w.bumpMap,le=!!w.normalMap,qt=!!w.displacementMap,te=!!w.emissiveMap,jt=!!w.metalnessMap,U=!!w.roughnessMap,b=w.anisotropy>0,et=w.clearcoat>0,_t=w.dispersion>0,z=w.iridescence>0,k=w.sheen>0,ot=w.transmission>0,it=b&&!!w.anisotropyMap,gt=et&&!!w.clearcoatMap,Lt=et&&!!w.clearcoatNormalMap,ft=et&&!!w.clearcoatRoughnessMap,St=z&&!!w.iridescenceMap,Dt=z&&!!w.iridescenceThicknessMap,Vt=k&&!!w.sheenColorMap,bt=k&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,Yt=!!w.specularColorMap,Zt=!!w.specularIntensityMap,H=ot&&!!w.transmissionMap,At=ot&&!!w.thicknessMap,ut=!!w.gradientMap,mt=!!w.alphaMap,Et=w.alphaTest>0,lt=!!w.alphaHash,Qt=!!w.extensions;let ge=$n;w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Le={shaderID:Mt,shaderType:w.type,shaderName:w.name,vertexShader:Gt,fragmentShader:ct,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:rt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&Z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&Z.instanceColor!==null,instancingMorph:Pt&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:vs,alphaToCoverage:!!w.alphaToCoverage,map:re,matcap:Kt,envMap:de,envMapMode:de&&ht.mapping,envMapCubeUVHeight:$,aoMap:W,lightMap:we,bumpMap:ae,normalMap:le,displacementMap:d&&qt,emissiveMap:te,normalMapObjectSpace:le&&w.normalMapType===ju,normalMapTangentSpace:le&&w.normalMapType===El,metalnessMap:jt,roughnessMap:U,anisotropy:b,anisotropyMap:it,clearcoat:et,clearcoatMap:gt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:ft,dispersion:_t,iridescence:z,iridescenceMap:St,iridescenceThicknessMap:Dt,sheen:k,sheenColorMap:Vt,sheenRoughnessMap:bt,specularMap:Jt,specularColorMap:Yt,specularIntensityMap:Zt,transmission:ot,transmissionMap:H,thicknessMap:At,gradientMap:ut,opaque:w.transparent===!1&&w.blending===ls&&w.alphaToCoverage===!1,alphaMap:mt,alphaTest:Et,alphaHash:lt,combine:w.combine,mapUv:re&&_(w.map.channel),aoMapUv:W&&_(w.aoMap.channel),lightMapUv:we&&_(w.lightMap.channel),bumpMapUv:ae&&_(w.bumpMap.channel),normalMapUv:le&&_(w.normalMap.channel),displacementMapUv:qt&&_(w.displacementMap.channel),emissiveMapUv:te&&_(w.emissiveMap.channel),metalnessMapUv:jt&&_(w.metalnessMap.channel),roughnessMapUv:U&&_(w.roughnessMap.channel),anisotropyMapUv:it&&_(w.anisotropyMap.channel),clearcoatMapUv:gt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(w.sheenRoughnessMap.channel),specularMapUv:Jt&&_(w.specularMap.channel),specularColorMapUv:Yt&&_(w.specularColorMap.channel),specularIntensityMapUv:Zt&&_(w.specularIntensityMap.channel),transmissionMapUv:H&&_(w.transmissionMap.channel),thicknessMapUv:At&&_(w.thicknessMap.channel),alphaMapUv:mt&&_(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(le||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Y.attributes.uv&&(re||mt),fog:!!tt,useFog:w.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ct,skinning:Z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:re&&w.map.isVideoTexture===!0&&xe.getTransfer(w.map.colorSpace)===Ee,decodeVideoTextureEmissive:te&&w.emissiveMap.isVideoTexture===!0&&xe.getTransfer(w.emissiveMap.colorSpace)===Ee,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Oe,flipSided:w.side===rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Qt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&w.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)M.push(I),M.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(E(M,w),S(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function E(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const M=g[w.type];let I;if(M){const j=Un[M];I=Th.clone(j.uniforms)}else I=w.uniforms;return I}function O(w,M){let I;for(let j=0,Z=u.length;j<Z;j++){const tt=u[j];if(tt.cacheKey===M){I=tt,++I.usedTimes;break}}return I===void 0&&(I=new V0(i,M,w,r),u.push(I)),I}function A(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function C(w){c.remove(w)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:O,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:R}}function X0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function q0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||q0),n.length>1&&n.sort(d||Hc),s.length>1&&s.sort(d||Hc)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function $0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Gc,i.set(n,[o])):s>=r.length?(o=new Gc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Y0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new oe};break;case"SpotLight":e={position:new L,direction:new L,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Z0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let J0=0;function j0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function K0(i){const t=new Y0,e=Z0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new _e,o=new _e;function a(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,S=0,v=0,O=0,A=0,C=0;l.sort(j0);for(let w=0,M=l.length;w<M;w++){const I=l[w],j=I.color,Z=I.intensity,tt=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=j.r*Z,h+=j.g*Z,d+=j.b*Z;else if(I.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(I.sh.coefficients[K],Z);C++}else if(I.isDirectionalLight){const K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ht=I.shadow,$=e.get(I);$.shadowIntensity=ht.intensity,$.shadowBias=ht.bias,$.shadowNormalBias=ht.normalBias,$.shadowRadius=ht.radius,$.shadowMapSize=ht.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=I.shadow.matrix,E++}n.directional[f]=K,f++}else if(I.isSpotLight){const K=t.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(j).multiplyScalar(Z),K.distance=tt,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,n.spot[_]=K;const ht=I.shadow;if(I.map&&(n.spotLightMap[O]=I.map,O++,ht.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[_]=ht.matrix,I.castShadow){const $=e.get(I);$.shadowIntensity=ht.intensity,$.shadowBias=ht.bias,$.shadowNormalBias=ht.normalBias,$.shadowRadius=ht.radius,$.shadowMapSize=ht.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=Y,v++}_++}else if(I.isRectAreaLight){const K=t.get(I);K.color.copy(j).multiplyScalar(Z),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=K,m++}else if(I.isPointLight){const K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const ht=I.shadow,$=e.get(I);$.shadowIntensity=ht.intensity,$.shadowBias=ht.bias,$.shadowNormalBias=ht.normalBias,$.shadowRadius=ht.radius,$.shadowMapSize=ht.mapSize,$.shadowCameraNear=ht.camera.near,$.shadowCameraFar=ht.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=K,g++}else if(I.isHemisphereLight){const K=t.get(I);K.skyColor.copy(I.color).multiplyScalar(Z),K.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[p]=K,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==E||R.numPointShadows!==S||R.numSpotShadows!==v||R.numSpotMaps!==O||R.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+O-A,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=E,R.numPointShadows=S,R.numSpotShadows=v,R.numSpotMaps=O,R.numLightProbes=C,n.version=J0++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const S=l[p];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function kc(i){const t=new K0(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Q0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new kc(i),t.set(s,[a])):r>=o.length?(a=new kc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class tm extends Vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class em extends Vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,im=`uniform sampler2D shadow_pass;
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
}`;function sm(i,t,e){let n=new Na;const s=new Ft,r=new Ft,o=new Re,a=new tm({depthPacking:Ju}),c=new em,l={},u=e.maxTextureSize,h={[fi]:rn,[rn]:fi,[Oe]:Oe},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:nm,fragmentShader:im}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new B(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let p=this.type;this.render=function(A,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),j=i.state;j.setBlending(ui),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Z=p!==Xn&&this.type===Xn,tt=p===Xn&&this.type!==Xn;for(let Y=0,K=A.length;Y<K;Y++){const ht=A[Y],$=ht.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const Mt=$.getFrameExtents();if(s.multiply(Mt),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Mt.x),s.x=r.x*Mt.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Mt.y),s.y=r.y*Mt.y,$.mapSize.y=r.y)),$.map===null||Z===!0||tt===!0){const zt=this.type!==Xn?{minFilter:bn,magFilter:bn}:{};$.map!==null&&$.map.dispose(),$.map=new Ni(s.x,s.y,zt),$.map.texture.name=ht.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const yt=$.getViewportCount();for(let zt=0;zt<yt;zt++){const Bt=$.getViewport(zt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),j.viewport(o),$.updateMatrices(ht,zt),n=$.getFrustum(),v(C,R,$.camera,ht,this.type)}$.isPointLightShadow!==!0&&this.type===Xn&&E($,R),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,I)};function E(A,C){const R=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ni(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,R,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,R,f,_,null)}function S(A,C,R,w){let M=null;const I=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)M=I;else if(M=R.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const j=M.uuid,Z=C.uuid;let tt=l[j];tt===void 0&&(tt={},l[j]=tt);let Y=tt[Z];Y===void 0&&(Y=M.clone(),tt[Z]=Y,C.addEventListener("dispose",O)),M=Y}if(M.visible=C.visible,M.wireframe=C.wireframe,w===Xn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const j=i.properties.get(M);j.light=R}return M}function v(A,C,R,w,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Xn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const Z=t.update(A),tt=A.material;if(Array.isArray(tt)){const Y=Z.groups;for(let K=0,ht=Y.length;K<ht;K++){const $=Y[K],Mt=tt[$.materialIndex];if(Mt&&Mt.visible){const yt=S(A,Mt,w,M);A.onBeforeShadow(i,A,C,R,Z,yt,$),i.renderBufferDirect(R,null,Z,yt,A,$),A.onAfterShadow(i,A,C,R,Z,yt,$)}}}else if(tt.visible){const Y=S(A,tt,w,M);A.onBeforeShadow(i,A,C,R,Z,Y,null),i.renderBufferDirect(R,null,Z,Y,A,null),A.onAfterShadow(i,A,C,R,Z,Y,null)}}const j=A.children;for(let Z=0,tt=j.length;Z<tt;Z++)v(j[Z],C,R,w,M)}function O(A){A.target.removeEventListener("dispose",O);for(const R in l){const w=l[R],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const rm={[Oo]:zo,[Bo]:Go,[Vo]:ko,[fs]:Ho,[zo]:Oo,[Go]:Bo,[ko]:Vo,[Ho]:fs};function om(i,t){function e(){let H=!1;const At=new Re;let ut=null;const mt=new Re(0,0,0,0);return{setMask:function(Et){ut!==Et&&!H&&(i.colorMask(Et,Et,Et,Et),ut=Et)},setLocked:function(Et){H=Et},setClear:function(Et,lt,Qt,ge,Le){Le===!0&&(Et*=ge,lt*=ge,Qt*=ge),At.set(Et,lt,Qt,ge),mt.equals(At)===!1&&(i.clearColor(Et,lt,Qt,ge),mt.copy(At))},reset:function(){H=!1,ut=null,mt.set(-1,0,0,0)}}}function n(){let H=!1,At=!1,ut=null,mt=null,Et=null;return{setReversed:function(lt){if(At!==lt){const Qt=t.get("EXT_clip_control");At?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT);const ge=Et;Et=null,this.setClear(ge)}At=lt},getReversed:function(){return At},setTest:function(lt){lt?vt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(lt){ut!==lt&&!H&&(i.depthMask(lt),ut=lt)},setFunc:function(lt){if(At&&(lt=rm[lt]),mt!==lt){switch(lt){case Oo:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Ho:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=lt}},setLocked:function(lt){H=lt},setClear:function(lt){Et!==lt&&(At&&(lt=1-lt),i.clearDepth(lt),Et=lt)},reset:function(){H=!1,ut=null,mt=null,Et=null,At=!1}}}function s(){let H=!1,At=null,ut=null,mt=null,Et=null,lt=null,Qt=null,ge=null,Le=null;return{setTest:function(pe){H||(pe?vt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(pe){At!==pe&&!H&&(i.stencilMask(pe),At=pe)},setFunc:function(pe,Ze,Je){(ut!==pe||mt!==Ze||Et!==Je)&&(i.stencilFunc(pe,Ze,Je),ut=pe,mt=Ze,Et=Je)},setOp:function(pe,Ze,Je){(lt!==pe||Qt!==Ze||ge!==Je)&&(i.stencilOp(pe,Ze,Je),lt=pe,Qt=Ze,ge=Je)},setLocked:function(pe){H=pe},setClear:function(pe){Le!==pe&&(i.clearStencil(pe),Le=pe)},reset:function(){H=!1,At=null,ut=null,mt=null,Et=null,lt=null,Qt=null,ge=null,Le=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,S=null,v=null,O=null,A=null,C=new oe(0,0,0),R=0,w=!1,M=null,I=null,j=null,Z=null,tt=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ht=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec($)[1]),K=ht>=1):$.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=ht>=2);let Mt=null,yt={};const zt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Gt=new Re().fromArray(zt),ct=new Re().fromArray(Bt);function J(H,At,ut,mt){const Et=new Uint8Array(4),lt=i.createTexture();i.bindTexture(H,lt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<ut;Qt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(At+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return lt}const rt={};rt[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),vt(i.DEPTH_TEST),o.setFunc(fs),ae(!1),le(Za),vt(i.CULL_FACE),W(ui);function vt(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function Ct(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function Pt(H,At){return h[H]!==At?(i.bindFramebuffer(H,At),h[H]=At,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=At),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=At),!0):!1}function Ot(H,At){let ut=f,mt=!1;if(H){ut=d.get(At),ut===void 0&&(ut=[],d.set(At,ut));const Et=H.textures;if(ut.length!==Et.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Qt=Et.length;lt<Qt;lt++)ut[lt]=i.COLOR_ATTACHMENT0+lt;ut.length=Et.length,mt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,mt=!0);mt&&i.drawBuffers(ut)}function re(H){return g!==H?(i.useProgram(H),g=H,!0):!1}const Kt={[Ti]:i.FUNC_ADD,[Su]:i.FUNC_SUBTRACT,[wu]:i.FUNC_REVERSE_SUBTRACT};Kt[bu]=i.MIN,Kt[Eu]=i.MAX;const de={[Tu]:i.ZERO,[Au]:i.ONE,[Ru]:i.SRC_COLOR,[No]:i.SRC_ALPHA,[Uu]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Pu]:i.DST_ALPHA,[Cu]:i.ONE_MINUS_SRC_COLOR,[Fo]:i.ONE_MINUS_SRC_ALPHA,[Du]:i.ONE_MINUS_DST_COLOR,[Lu]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Fu]:i.ONE_MINUS_CONSTANT_COLOR,[Ou]:i.CONSTANT_ALPHA,[zu]:i.ONE_MINUS_CONSTANT_ALPHA};function W(H,At,ut,mt,Et,lt,Qt,ge,Le,pe){if(H===ui){_===!0&&(Ct(i.BLEND),_=!1);return}if(_===!1&&(vt(i.BLEND),_=!0),H!==yu){if(H!==m||pe!==w){if((p!==Ti||v!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,v=Ti),pe)switch(H){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nn:i.blendFunc(i.ONE,i.ONE);break;case Ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}E=null,S=null,O=null,A=null,C.set(0,0,0),R=0,m=H,w=pe}return}Et=Et||At,lt=lt||ut,Qt=Qt||mt,(At!==p||Et!==v)&&(i.blendEquationSeparate(Kt[At],Kt[Et]),p=At,v=Et),(ut!==E||mt!==S||lt!==O||Qt!==A)&&(i.blendFuncSeparate(de[ut],de[mt],de[lt],de[Qt]),E=ut,S=mt,O=lt,A=Qt),(ge.equals(C)===!1||Le!==R)&&(i.blendColor(ge.r,ge.g,ge.b,Le),C.copy(ge),R=Le),m=H,w=!1}function we(H,At){H.side===Oe?Ct(i.CULL_FACE):vt(i.CULL_FACE);let ut=H.side===rn;At&&(ut=!ut),ae(ut),H.blending===ls&&H.transparent===!1?W(ui):W(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const mt=H.stencilWrite;a.setTest(mt),mt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),te(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(H){M!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),M=H)}function le(H){H!==_u?(vt(i.CULL_FACE),H!==I&&(H===Za?i.cullFace(i.BACK):H===vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),I=H}function qt(H){H!==j&&(K&&i.lineWidth(H),j=H)}function te(H,At,ut){H?(vt(i.POLYGON_OFFSET_FILL),(Z!==At||tt!==ut)&&(i.polygonOffset(At,ut),Z=At,tt=ut)):Ct(i.POLYGON_OFFSET_FILL)}function jt(H){H?vt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function U(H){H===void 0&&(H=i.TEXTURE0+Y-1),Mt!==H&&(i.activeTexture(H),Mt=H)}function b(H,At,ut){ut===void 0&&(Mt===null?ut=i.TEXTURE0+Y-1:ut=Mt);let mt=yt[ut];mt===void 0&&(mt={type:void 0,texture:void 0},yt[ut]=mt),(mt.type!==H||mt.texture!==At)&&(Mt!==ut&&(i.activeTexture(ut),Mt=ut),i.bindTexture(H,At||rt[H]),mt.type=H,mt.texture=At)}function et(){const H=yt[Mt];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function _t(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function k(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function it(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Vt(H){Gt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Gt.copy(H))}function bt(H){ct.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),ct.copy(H))}function Jt(H,At){let ut=l.get(At);ut===void 0&&(ut=new WeakMap,l.set(At,ut));let mt=ut.get(H);mt===void 0&&(mt=i.getUniformBlockIndex(At,H.name),ut.set(H,mt))}function Yt(H,At){const mt=l.get(At).get(H);c.get(At)!==mt&&(i.uniformBlockBinding(At,mt,H.__bindingPointIndex),c.set(At,mt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Mt=null,yt={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,S=null,v=null,O=null,A=null,C=new oe(0,0,0),R=0,w=!1,M=null,I=null,j=null,Z=null,tt=null,Gt.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:vt,disable:Ct,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:re,setBlending:W,setMaterial:we,setFlipSided:ae,setCullFace:le,setLineWidth:qt,setPolygonOffset:te,setScissorTest:jt,activeTexture:U,bindTexture:b,unbindTexture:et,compressedTexImage2D:_t,compressedTexImage3D:z,texImage2D:St,texImage3D:Dt,updateUBOMapping:Jt,uniformBlockBinding:Yt,texStorage2D:Lt,texStorage3D:ft,texSubImage2D:k,texSubImage3D:ot,compressedTexSubImage2D:it,compressedTexSubImage3D:gt,scissor:Vt,viewport:bt,reset:Zt}}function Wc(i,t,e,n){const s=am(n);switch(e){case vl:return i*t;case yl:return i*t;case Sl:return i*t*2;case La:return i*t/s.components*s.byteLength;case Ia:return i*t/s.components*s.byteLength;case wl:return i*t*2/s.components*s.byteLength;case Da:return i*t*2/s.components*s.byteLength;case Ml:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case Ua:return i*t*4/s.components*s.byteLength;case Ir:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yo:case Jo:return Math.max(i,16)*Math.max(t,8)/4;case $o:case Zo:return Math.max(i,8)*Math.max(t,8)/2;case jo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fr:case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bl:case ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xa:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function am(i){switch(i){case Jn:case gl:return{byteLength:1,components:1};case qs:case xl:case js:return{byteLength:2,components:1};case Ca:case Pa:return{byteLength:2,components:4};case Ui:case Ra:case zn:return{byteLength:4,components:1};case _l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function cm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,b){return f?new OffscreenCanvas(U,b):Vr("canvas")}function _(U,b,et){let _t=1;const z=jt(U);if((z.width>et||z.height>et)&&(_t=et/Math.max(z.width,z.height)),_t<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const k=Math.floor(_t*z.width),ot=Math.floor(_t*z.height);h===void 0&&(h=g(k,ot));const it=b?g(k,ot):h;return it.width=k,it.height=ot,it.getContext("2d").drawImage(U,0,0,k,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+k+"x"+ot+")."),it}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function E(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(U,b,et,_t,z=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let k=b;if(b===i.RED&&(et===i.FLOAT&&(k=i.R32F),et===i.HALF_FLOAT&&(k=i.R16F),et===i.UNSIGNED_BYTE&&(k=i.R8)),b===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(k=i.R8UI),et===i.UNSIGNED_SHORT&&(k=i.R16UI),et===i.UNSIGNED_INT&&(k=i.R32UI),et===i.BYTE&&(k=i.R8I),et===i.SHORT&&(k=i.R16I),et===i.INT&&(k=i.R32I)),b===i.RG&&(et===i.FLOAT&&(k=i.RG32F),et===i.HALF_FLOAT&&(k=i.RG16F),et===i.UNSIGNED_BYTE&&(k=i.RG8)),b===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(k=i.RG8UI),et===i.UNSIGNED_SHORT&&(k=i.RG16UI),et===i.UNSIGNED_INT&&(k=i.RG32UI),et===i.BYTE&&(k=i.RG8I),et===i.SHORT&&(k=i.RG16I),et===i.INT&&(k=i.RG32I)),b===i.RGB_INTEGER&&(et===i.UNSIGNED_BYTE&&(k=i.RGB8UI),et===i.UNSIGNED_SHORT&&(k=i.RGB16UI),et===i.UNSIGNED_INT&&(k=i.RGB32UI),et===i.BYTE&&(k=i.RGB8I),et===i.SHORT&&(k=i.RGB16I),et===i.INT&&(k=i.RGB32I)),b===i.RGBA_INTEGER&&(et===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),et===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),et===i.UNSIGNED_INT&&(k=i.RGBA32UI),et===i.BYTE&&(k=i.RGBA8I),et===i.SHORT&&(k=i.RGBA16I),et===i.INT&&(k=i.RGBA32I)),b===i.RGB&&et===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),b===i.RGBA){const ot=z?Wr:xe.getTransfer(_t);et===i.FLOAT&&(k=i.RGBA32F),et===i.HALF_FLOAT&&(k=i.RGBA16F),et===i.UNSIGNED_BYTE&&(k=ot===Ee?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function v(U,b){let et;return U?b===null||b===Ui||b===ms?et=i.DEPTH24_STENCIL8:b===zn?et=i.DEPTH32F_STENCIL8:b===qs&&(et=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ui||b===ms?et=i.DEPTH_COMPONENT24:b===zn?et=i.DEPTH_COMPONENT32F:b===qs&&(et=i.DEPTH_COMPONENT16),et}function O(U,b){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==bn&&U.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function A(U){const b=U.target;b.removeEventListener("dispose",A),R(b),b.isVideoTexture&&u.delete(b)}function C(U){const b=U.target;b.removeEventListener("dispose",C),M(b)}function R(U){const b=n.get(U);if(b.__webglInit===void 0)return;const et=U.source,_t=d.get(et);if(_t){const z=_t[b.__cacheKey];z.usedTimes--,z.usedTimes===0&&w(U),Object.keys(_t).length===0&&d.delete(et)}n.remove(U)}function w(U){const b=n.get(U);i.deleteTexture(b.__webglTexture);const et=U.source,_t=d.get(et);delete _t[b.__cacheKey],o.memory.textures--}function M(U){const b=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(b.__webglFramebuffer[_t]))for(let z=0;z<b.__webglFramebuffer[_t].length;z++)i.deleteFramebuffer(b.__webglFramebuffer[_t][z]);else i.deleteFramebuffer(b.__webglFramebuffer[_t]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[_t])}else{if(Array.isArray(b.__webglFramebuffer))for(let _t=0;_t<b.__webglFramebuffer.length;_t++)i.deleteFramebuffer(b.__webglFramebuffer[_t]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _t=0;_t<b.__webglColorRenderbuffer.length;_t++)b.__webglColorRenderbuffer[_t]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[_t]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=U.textures;for(let _t=0,z=et.length;_t<z;_t++){const k=n.get(et[_t]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(et[_t])}n.remove(U)}let I=0;function j(){I=0}function Z(){const U=I;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),I+=1,U}function tt(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function Y(U,b){const et=n.get(U);if(U.isVideoTexture&&qt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const _t=U.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(et,U,b);return}}e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+b)}function K(U,b){const et=n.get(U);if(U.version>0&&et.__version!==U.version){ct(et,U,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+b)}function ht(U,b){const et=n.get(U);if(U.version>0&&et.__version!==U.version){ct(et,U,b);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+b)}function $(U,b){const et=n.get(U);if(U.version>0&&et.__version!==U.version){J(et,U,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+b)}const Mt={[Xs]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},yt={[bn]:i.NEAREST,[Yu]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},zt={[Ku]:i.NEVER,[sh]:i.ALWAYS,[Qu]:i.LESS,[Tl]:i.LEQUAL,[th]:i.EQUAL,[ih]:i.GEQUAL,[eh]:i.GREATER,[nh]:i.NOTEQUAL};function Bt(U,b){if(b.type===zn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===Jr||b.magFilter===nr||b.magFilter===Pi||b.minFilter===On||b.minFilter===Jr||b.minFilter===nr||b.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Mt[b.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Mt[b.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Mt[b.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,yt[b.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,zt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bn||b.minFilter!==nr&&b.minFilter!==Pi||b.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Gt(U,b){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",A));const _t=b.source;let z=d.get(_t);z===void 0&&(z={},d.set(_t,z));const k=tt(b);if(k!==U.__cacheKey){z[k]===void 0&&(z[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,et=!0),z[k].usedTimes++;const ot=z[U.__cacheKey];ot!==void 0&&(z[U.__cacheKey].usedTimes--,ot.usedTimes===0&&w(b)),U.__cacheKey=k,U.__webglTexture=z[k].texture}return et}function ct(U,b,et){let _t=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=i.TEXTURE_3D);const z=Gt(U,b),k=b.source;e.bindTexture(_t,U.__webglTexture,i.TEXTURE0+et);const ot=n.get(k);if(k.version!==ot.__version||z===!0){e.activeTexture(i.TEXTURE0+et);const it=xe.getPrimaries(xe.workingColorSpace),gt=b.colorSpace===li?null:xe.getPrimaries(b.colorSpace),Lt=b.colorSpace===li||it===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ft=_(b.image,!1,s.maxTextureSize);ft=te(b,ft);const St=r.convert(b.format,b.colorSpace),Dt=r.convert(b.type);let Vt=S(b.internalFormat,St,Dt,b.colorSpace,b.isVideoTexture);Bt(_t,b);let bt;const Jt=b.mipmaps,Yt=b.isVideoTexture!==!0,Zt=ot.__version===void 0||z===!0,H=k.dataReady,At=O(b,ft);if(b.isDepthTexture)Vt=v(b.format===gs,b.type),Zt&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Vt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Vt,ft.width,ft.height,0,St,Dt,null));else if(b.isDataTexture)if(Jt.length>0){Yt&&Zt&&e.texStorage2D(i.TEXTURE_2D,At,Vt,Jt[0].width,Jt[0].height);for(let ut=0,mt=Jt.length;ut<mt;ut++)bt=Jt[ut],Yt?H&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,bt.width,bt.height,St,Dt,bt.data):e.texImage2D(i.TEXTURE_2D,ut,Vt,bt.width,bt.height,0,St,Dt,bt.data);b.generateMipmaps=!1}else Yt?(Zt&&e.texStorage2D(i.TEXTURE_2D,At,Vt,ft.width,ft.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,St,Dt,ft.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,ft.width,ft.height,0,St,Dt,ft.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Yt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Vt,Jt[0].width,Jt[0].height,ft.depth);for(let ut=0,mt=Jt.length;ut<mt;ut++)if(bt=Jt[ut],b.format!==In)if(St!==null)if(Yt){if(H)if(b.layerUpdates.size>0){const Et=Wc(bt.width,bt.height,b.format,b.type);for(const lt of b.layerUpdates){const Qt=bt.data.subarray(lt*Et/bt.data.BYTES_PER_ELEMENT,(lt+1)*Et/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,lt,bt.width,bt.height,1,St,Qt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,bt.width,bt.height,ft.depth,St,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Vt,bt.width,bt.height,ft.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,bt.width,bt.height,ft.depth,St,Dt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Vt,bt.width,bt.height,ft.depth,0,St,Dt,bt.data)}else{Yt&&Zt&&e.texStorage2D(i.TEXTURE_2D,At,Vt,Jt[0].width,Jt[0].height);for(let ut=0,mt=Jt.length;ut<mt;ut++)bt=Jt[ut],b.format!==In?St!==null?Yt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Vt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?H&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,bt.width,bt.height,St,Dt,bt.data):e.texImage2D(i.TEXTURE_2D,ut,Vt,bt.width,bt.height,0,St,Dt,bt.data)}else if(b.isDataArrayTexture)if(Yt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Vt,ft.width,ft.height,ft.depth),H)if(b.layerUpdates.size>0){const ut=Wc(ft.width,ft.height,b.format,b.type);for(const mt of b.layerUpdates){const Et=ft.data.subarray(mt*ut/ft.data.BYTES_PER_ELEMENT,(mt+1)*ut/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,ft.width,ft.height,1,St,Dt,Et)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,St,Dt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,ft.width,ft.height,ft.depth,0,St,Dt,ft.data);else if(b.isData3DTexture)Yt?(Zt&&e.texStorage3D(i.TEXTURE_3D,At,Vt,ft.width,ft.height,ft.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,St,Dt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,ft.width,ft.height,ft.depth,0,St,Dt,ft.data);else if(b.isFramebufferTexture){if(Zt)if(Yt)e.texStorage2D(i.TEXTURE_2D,At,Vt,ft.width,ft.height);else{let ut=ft.width,mt=ft.height;for(let Et=0;Et<At;Et++)e.texImage2D(i.TEXTURE_2D,Et,Vt,ut,mt,0,St,Dt,null),ut>>=1,mt>>=1}}else if(Jt.length>0){if(Yt&&Zt){const ut=jt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,At,Vt,ut.width,ut.height)}for(let ut=0,mt=Jt.length;ut<mt;ut++)bt=Jt[ut],Yt?H&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,St,Dt,bt):e.texImage2D(i.TEXTURE_2D,ut,Vt,St,Dt,bt);b.generateMipmaps=!1}else if(Yt){if(Zt){const ut=jt(ft);e.texStorage2D(i.TEXTURE_2D,At,Vt,ut.width,ut.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Dt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Vt,St,Dt,ft);m(b)&&p(_t),ot.__version=k.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function J(U,b,et){if(b.image.length!==6)return;const _t=Gt(U,b),z=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+et);const k=n.get(z);if(z.version!==k.__version||_t===!0){e.activeTexture(i.TEXTURE0+et);const ot=xe.getPrimaries(xe.workingColorSpace),it=b.colorSpace===li?null:xe.getPrimaries(b.colorSpace),gt=b.colorSpace===li||ot===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Lt=b.isCompressedTexture||b.image[0].isCompressedTexture,ft=b.image[0]&&b.image[0].isDataTexture,St=[];for(let mt=0;mt<6;mt++)!Lt&&!ft?St[mt]=_(b.image[mt],!0,s.maxCubemapSize):St[mt]=ft?b.image[mt].image:b.image[mt],St[mt]=te(b,St[mt]);const Dt=St[0],Vt=r.convert(b.format,b.colorSpace),bt=r.convert(b.type),Jt=S(b.internalFormat,Vt,bt,b.colorSpace),Yt=b.isVideoTexture!==!0,Zt=k.__version===void 0||_t===!0,H=z.dataReady;let At=O(b,Dt);Bt(i.TEXTURE_CUBE_MAP,b);let ut;if(Lt){Yt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Jt,Dt.width,Dt.height);for(let mt=0;mt<6;mt++){ut=St[mt].mipmaps;for(let Et=0;Et<ut.length;Et++){const lt=ut[Et];b.format!==In?Vt!==null?Yt?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et,0,0,lt.width,lt.height,Vt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et,Jt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et,0,0,lt.width,lt.height,Vt,bt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et,Jt,lt.width,lt.height,0,Vt,bt,lt.data)}}}else{if(ut=b.mipmaps,Yt&&Zt){ut.length>0&&At++;const mt=jt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Jt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(ft){Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,St[mt].width,St[mt].height,Vt,bt,St[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Jt,St[mt].width,St[mt].height,0,Vt,bt,St[mt].data);for(let Et=0;Et<ut.length;Et++){const Qt=ut[Et].image[mt].image;Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et+1,0,0,Qt.width,Qt.height,Vt,bt,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et+1,Jt,Qt.width,Qt.height,0,Vt,bt,Qt.data)}}else{Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Vt,bt,St[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Jt,Vt,bt,St[mt]);for(let Et=0;Et<ut.length;Et++){const lt=ut[Et];Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et+1,0,0,Vt,bt,lt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et+1,Jt,Vt,bt,lt.image[mt])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),k.__version=z.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function rt(U,b,et,_t,z,k){const ot=r.convert(et.format,et.colorSpace),it=r.convert(et.type),gt=S(et.internalFormat,ot,it,et.colorSpace),Lt=n.get(b),ft=n.get(et);if(ft.__renderTarget=b,!Lt.__hasExternalTextures){const St=Math.max(1,b.width>>k),Dt=Math.max(1,b.height>>k);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?e.texImage3D(z,k,gt,St,Dt,b.depth,0,ot,it,null):e.texImage2D(z,k,gt,St,Dt,0,ot,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),le(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,z,ft.__webglTexture,0,ae(b)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_t,z,ft.__webglTexture,k),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(U,b,et){if(i.bindRenderbuffer(i.RENDERBUFFER,U),b.depthBuffer){const _t=b.depthTexture,z=_t&&_t.isDepthTexture?_t.type:null,k=v(b.stencilBuffer,z),ot=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=ae(b);le(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,k,b.width,b.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,k,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,k,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,U)}else{const _t=b.textures;for(let z=0;z<_t.length;z++){const k=_t[z],ot=r.convert(k.format,k.colorSpace),it=r.convert(k.type),gt=S(k.internalFormat,ot,it,k.colorSpace),Lt=ae(b);et&&le(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,gt,b.width,b.height):le(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,gt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,gt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=n.get(b.depthTexture);_t.__renderTarget=b,(!_t.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const z=_t.__webglTexture,k=ae(b);if(b.depthTexture.format===us)le(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(b.depthTexture.format===gs)le(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Pt(U){const b=n.get(U),et=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const _t=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_t){const z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_t.removeEventListener("dispose",z)};_t.addEventListener("dispose",z),b.__depthDisposeCallback=z}b.__boundDepthTexture=_t}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Ct(b.__webglFramebuffer,U)}else if(et){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]===void 0)b.__webglDepthbuffer[_t]=i.createRenderbuffer(),vt(b.__webglDepthbuffer[_t],U,!1);else{const z=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=b.__webglDepthbuffer[_t];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,k)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),vt(b.__webglDepthbuffer,U,!1);else{const _t=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(U,b,et){const _t=n.get(U);b!==void 0&&rt(_t.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&Pt(U)}function re(U){const b=U.texture,et=n.get(U),_t=n.get(b);U.addEventListener("dispose",C);const z=U.textures,k=U.isWebGLCubeRenderTarget===!0,ot=z.length>1;if(ot||(_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture()),_t.__version=b.version,o.memory.textures++),k){et.__webglFramebuffer=[];for(let it=0;it<6;it++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[it]=[];for(let gt=0;gt<b.mipmaps.length;gt++)et.__webglFramebuffer[it][gt]=i.createFramebuffer()}else et.__webglFramebuffer[it]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let it=0;it<b.mipmaps.length;it++)et.__webglFramebuffer[it]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(ot)for(let it=0,gt=z.length;it<gt;it++){const Lt=n.get(z[it]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&le(U)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let it=0;it<z.length;it++){const gt=z[it];et.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[it]);const Lt=r.convert(gt.format,gt.colorSpace),ft=r.convert(gt.type),St=S(gt.internalFormat,Lt,ft,gt.colorSpace,U.isXRRenderTarget===!0),Dt=ae(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,St,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,et.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(et.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,b);for(let it=0;it<6;it++)if(b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)rt(et.__webglFramebuffer[it][gt],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,gt);else rt(et.__webglFramebuffer[it],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let it=0,gt=z.length;it<gt;it++){const Lt=z[it],ft=n.get(Lt);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),Bt(i.TEXTURE_2D,Lt),rt(et.__webglFramebuffer,U,Lt,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,0),m(Lt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(it=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,_t.__webglTexture),Bt(it,b),b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)rt(et.__webglFramebuffer[gt],U,b,i.COLOR_ATTACHMENT0,it,gt);else rt(et.__webglFramebuffer,U,b,i.COLOR_ATTACHMENT0,it,0);m(b)&&p(it),e.unbindTexture()}U.depthBuffer&&Pt(U)}function Kt(U){const b=U.textures;for(let et=0,_t=b.length;et<_t;et++){const z=b[et];if(m(z)){const k=E(U),ot=n.get(z).__webglTexture;e.bindTexture(k,ot),p(k),e.unbindTexture()}}}const de=[],W=[];function we(U){if(U.samples>0){if(le(U)===!1){const b=U.textures,et=U.width,_t=U.height;let z=i.COLOR_BUFFER_BIT;const k=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(U),it=b.length>1;if(it)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(z|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[gt]);const Lt=n.get(b[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,et,_t,0,0,et,_t,z,i.NEAREST),c===!0&&(de.length=0,W.length=0,de.push(i.COLOR_ATTACHMENT0+gt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(de.push(k),W.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[gt]);const Lt=n.get(b[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const b=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ae(U){return Math.min(s.maxSamples,U.samples)}function le(U){const b=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function qt(U){const b=o.render.frame;u.get(U)!==b&&(u.set(U,b),U.update())}function te(U,b){const et=U.colorSpace,_t=U.format,z=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==vs&&et!==li&&(xe.getTransfer(et)===Ee?(_t!==In||z!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function jt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=j,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=ht,this.setTextureCube=$,this.rebindTextures=Ot,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=le}function lm(i,t){function e(n,s=li){let r;const o=xe.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_l)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gl)return i.BYTE;if(n===xl)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===js)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===Ml)return i.RGB;if(n===In)return i.RGBA;if(n===yl)return i.LUMINANCE;if(n===Sl)return i.LUMINANCE_ALPHA;if(n===us)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===La)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===wl)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Ua)return i.RGBA_INTEGER;if(n===Ir||n===Dr||n===Ur||n===Nr)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Yo||n===Zo||n===Jo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Ko||n===Qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jo||n===Ko)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qo)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ua||n===ha||n===fa||n===da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ta)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ea)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ia)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===aa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===la)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ha)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===da)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fr||n===pa||n===ma)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fr)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bl||n===ga||n===xa||n===_a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class um extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ue extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hm={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dm=`
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

}`;class pm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new on,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new di({vertexShader:fm,fragmentShader:dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new B(new Fe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mm extends Ms{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new pm,m=e.getContextAttributes();let p=null,E=null;const S=[],v=[],O=new Ft;let A=null;const C=new Sn;C.viewport=new Re;const R=new Sn;R.viewport=new Re;const w=[C,R],M=new um;let I=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let J=S[ct];return J===void 0&&(J=new To,S[ct]=J),J.getTargetRaySpace()},this.getControllerGrip=function(ct){let J=S[ct];return J===void 0&&(J=new To,S[ct]=J),J.getGripSpace()},this.getHand=function(ct){let J=S[ct];return J===void 0&&(J=new To,S[ct]=J),J.getHandSpace()};function Z(ct){const J=v.indexOf(ct.inputSource);if(J===-1)return;const rt=S[J];rt!==void 0&&(rt.update(ct.inputSource,ct.frame,l||o),rt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function tt(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",Y);for(let ct=0;ct<S.length;ct++){const J=v[ct];J!==null&&(v[ct]=null,S[ct].disconnect(J))}I=null,j=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,E=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){r=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){a=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ct){l=ct},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ct){if(s=ct,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Ni(f.framebufferWidth,f.framebufferHeight,{format:In,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,rt=null,vt=null;m.depth&&(vt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?gs:us,rt=m.stencil?ms:Ui);const Ct={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Ni(d.textureWidth,d.textureHeight,{format:In,type:Jn,depthTexture:new Vl(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(ct){for(let J=0;J<ct.removed.length;J++){const rt=ct.removed[J],vt=v.indexOf(rt);vt>=0&&(v[vt]=null,S[vt].disconnect(rt))}for(let J=0;J<ct.added.length;J++){const rt=ct.added[J];let vt=v.indexOf(rt);if(vt===-1){for(let Pt=0;Pt<S.length;Pt++)if(Pt>=v.length){v.push(rt),vt=Pt;break}else if(v[Pt]===null){v[Pt]=rt,vt=Pt;break}if(vt===-1)break}const Ct=S[vt];Ct&&Ct.connect(rt)}}const K=new L,ht=new L;function $(ct,J,rt){K.setFromMatrixPosition(J.matrixWorld),ht.setFromMatrixPosition(rt.matrixWorld);const vt=K.distanceTo(ht),Ct=J.projectionMatrix.elements,Pt=rt.projectionMatrix.elements,Ot=Ct[14]/(Ct[10]-1),re=Ct[14]/(Ct[10]+1),Kt=(Ct[9]+1)/Ct[5],de=(Ct[9]-1)/Ct[5],W=(Ct[8]-1)/Ct[0],we=(Pt[8]+1)/Pt[0],ae=Ot*W,le=Ot*we,qt=vt/(-W+we),te=qt*-W;if(J.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(te),ct.translateZ(qt),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Ct[10]===-1)ct.projectionMatrix.copy(J.projectionMatrix),ct.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const jt=Ot+qt,U=re+qt,b=ae-te,et=le+(vt-te),_t=Kt*re/U*jt,z=de*re/U*jt;ct.projectionMatrix.makePerspective(b,et,_t,z,jt,U),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function Mt(ct,J){J===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(J.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(s===null)return;let J=ct.near,rt=ct.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(rt=_.depthFar)),M.near=R.near=C.near=J,M.far=R.far=C.far=rt,(I!==M.near||j!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,j=M.far),C.layers.mask=ct.layers.mask|2,R.layers.mask=ct.layers.mask|4,M.layers.mask=C.layers.mask|R.layers.mask;const vt=ct.parent,Ct=M.cameras;Mt(M,vt);for(let Pt=0;Pt<Ct.length;Pt++)Mt(Ct[Pt],vt);Ct.length===2?$(M,C,R):M.projectionMatrix.copy(C.projectionMatrix),yt(ct,M,vt)};function yt(ct,J,rt){rt===null?ct.matrix.copy(J.matrixWorld):(ct.matrix.copy(rt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(J.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(J.projectionMatrix),ct.projectionMatrixInverse.copy(J.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=Ma*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ct){c=ct,d!==null&&(d.fixedFoveation=ct),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ct)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let zt=null;function Bt(ct,J){if(u=J.getViewerPose(l||o),g=J,u!==null){const rt=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let vt=!1;rt.length!==M.cameras.length&&(M.cameras.length=0,vt=!0);for(let Pt=0;Pt<rt.length;Pt++){const Ot=rt[Pt];let re=null;if(f!==null)re=f.getViewport(Ot);else{const de=h.getViewSubImage(d,Ot);re=de.viewport,Pt===0&&(t.setRenderTargetTextures(E,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(E))}let Kt=w[Pt];Kt===void 0&&(Kt=new Sn,Kt.layers.enable(Pt),Kt.viewport=new Re,w[Pt]=Kt),Kt.matrix.fromArray(Ot.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Ot.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(re.x,re.y,re.width,re.height),Pt===0&&(M.matrix.copy(Kt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),vt===!0&&M.cameras.push(Kt)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Pt=h.getDepthInformation(rt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let rt=0;rt<S.length;rt++){const vt=v[rt],Ct=S[rt];vt!==null&&Ct!==void 0&&Ct.update(vt,J,l||o)}zt&&zt(ct,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Gt=new zl;Gt.setAnimationLoop(Bt),this.setAnimationLoop=function(ct){zt=ct},this.dispose=function(){}}}const Mi=new mn,gm=new _e;function xm(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),S=E.envMap,v=E.envMapRotation;S&&(m.envMap.value=S,Mi.copy(v),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(gm.makeRotationFromEuler(Mi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _m(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){const v=S.program;n.uniformBlockBinding(E,v)}function l(E,S){let v=s[E.id];v===void 0&&(g(E),v=u(E),s[E.id]=v,E.addEventListener("dispose",m));const O=S.program;n.updateUBOMapping(E,O);const A=t.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function u(E){const S=h();E.__bindingPointIndex=S;const v=i.createBuffer(),O=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,O,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=s[E.id],v=E.uniforms,O=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,C=v.length;A<C;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,M=R.length;w<M;w++){const I=R[w];if(f(I,A,w,O)===!0){const j=I.__offset,Z=Array.isArray(I.value)?I.value:[I.value];let tt=0;for(let Y=0;Y<Z.length;Y++){const K=Z[Y],ht=_(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,j+tt,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,tt),tt+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,S,v,O){const A=E.value,C=S+"_"+v;if(O[C]===void 0)return typeof A=="number"||typeof A=="boolean"?O[C]=A:O[C]=A.clone(),!0;{const R=O[C];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return O[C]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(E){const S=E.uniforms;let v=0;const O=16;for(let C=0,R=S.length;C<R;C++){const w=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,I=w.length;M<I;M++){const j=w[M],Z=Array.isArray(j.value)?j.value:[j.value];for(let tt=0,Y=Z.length;tt<Y;tt++){const K=Z[tt],ht=_(K),$=v%O,Mt=$%ht.boundary,yt=$+Mt;v+=Mt,yt!==0&&O-yt<ht.storage&&(v+=O-yt),j.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=v,v+=ht.storage}}}const A=v%O;return A>0&&(v+=O-A),E.__size=v,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class vm{constructor(t={}){const{canvas:e=oh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=$n,this.toneMappingExposure=1;const v=this;let O=!1,A=0,C=0,R=null,w=-1,M=null;const I=new Re,j=new Re;let Z=null;const tt=new oe(0);let Y=0,K=e.width,ht=e.height,$=1,Mt=null,yt=null;const zt=new Re(0,0,K,ht),Bt=new Re(0,0,K,ht);let Gt=!1;const ct=new Na;let J=!1,rt=!1;const vt=new _e,Ct=new _e,Pt=new L,Ot=new Re,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function de(){return R===null?$:1}let W=n;function we(T,X){return e.getContext(T,X)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Aa}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",lt,!1),W===null){const X="webgl2";if(W=we(X,T),W===null)throw we(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ae,le,qt,te,jt,U,b,et,_t,z,k,ot,it,gt,Lt,ft,St,Dt,Vt,bt,Jt,Yt,Zt,H;function At(){ae=new bp(W),ae.init(),Yt=new lm(W,ae),le=new _p(W,ae,t,Yt),qt=new om(W,ae),le.reverseDepthBuffer&&d&&qt.buffers.depth.setReversed(!0),te=new Ap(W),jt=new X0,U=new cm(W,ae,qt,jt,le,Yt,te),b=new Mp(v),et=new wp(v),_t=new Dh(W),Zt=new gp(W,_t),z=new Ep(W,_t,te,Zt),k=new Cp(W,z,_t,te),Vt=new Rp(W,le,U),ft=new vp(jt),ot=new W0(v,b,et,ae,le,Zt,ft),it=new xm(v,jt),gt=new $0,Lt=new Q0(ae),Dt=new mp(v,b,et,qt,k,f,c),St=new sm(v,k,le),H=new _m(W,te,le,qt),bt=new xp(W,ae,te),Jt=new Tp(W,ae,te),te.programs=ot.programs,v.capabilities=le,v.extensions=ae,v.properties=jt,v.renderLists=gt,v.shadowMap=St,v.state=qt,v.info=te}At();const ut=new mm(v,W);this.xr=ut,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(K,ht,!1))},this.getSize=function(T){return T.set(K,ht)},this.setSize=function(T,X,st=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,ht=X,e.width=Math.floor(T*$),e.height=Math.floor(X*$),st===!0&&(e.style.width=T+"px",e.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(K*$,ht*$).floor()},this.setDrawingBufferSize=function(T,X,st){K=T,ht=X,$=st,e.width=Math.floor(T*st),e.height=Math.floor(X*st),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(zt)},this.setViewport=function(T,X,st,Q){T.isVector4?zt.set(T.x,T.y,T.z,T.w):zt.set(T,X,st,Q),qt.viewport(I.copy(zt).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(Bt)},this.setScissor=function(T,X,st,Q){T.isVector4?Bt.set(T.x,T.y,T.z,T.w):Bt.set(T,X,st,Q),qt.scissor(j.copy(Bt).multiplyScalar($).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(T){qt.setScissorTest(Gt=T)},this.setOpaqueSort=function(T){Mt=T},this.setTransparentSort=function(T){yt=T},this.getClearColor=function(T){return T.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(T=!0,X=!0,st=!0){let Q=0;if(T){let q=!1;if(R!==null){const wt=R.texture.format;q=wt===Ua||wt===Da||wt===Ia}if(q){const wt=R.texture.type,Ut=wt===Jn||wt===Ui||wt===qs||wt===ms||wt===Ca||wt===Pa,Ht=Dt.getClearColor(),kt=Dt.getClearAlpha(),ie=Ht.r,y=Ht.g,P=Ht.b;Ut?(g[0]=ie,g[1]=y,g[2]=P,g[3]=kt,W.clearBufferuiv(W.COLOR,0,g)):(_[0]=ie,_[1]=y,_[2]=P,_[3]=kt,W.clearBufferiv(W.COLOR,0,_))}else Q|=W.COLOR_BUFFER_BIT}X&&(Q|=W.DEPTH_BUFFER_BIT),st&&(Q|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),gt.dispose(),Lt.dispose(),jt.dispose(),b.dispose(),et.dispose(),k.dispose(),Zt.dispose(),H.dispose(),ot.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",cn),ut.removeEventListener("sessionend",je),ln.stop()};function mt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const T=te.autoReset,X=St.enabled,st=St.autoUpdate,Q=St.needsUpdate,q=St.type;At(),te.autoReset=T,St.enabled=X,St.autoUpdate=st,St.needsUpdate=Q,St.type=q}function lt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Qt(T){const X=T.target;X.removeEventListener("dispose",Qt),ge(X)}function ge(T){Le(T),jt.remove(T)}function Le(T){const X=jt.get(T).programs;X!==void 0&&(X.forEach(function(st){ot.releaseProgram(st)}),T.isShaderMaterial&&ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,st,Q,q,wt){X===null&&(X=re);const Ut=q.isMesh&&q.matrixWorld.determinant()<0,Ht=Ke(T,X,st,Q,q);qt.setMaterial(Q,Ut);let kt=st.index,ie=1;if(Q.wireframe===!0){if(kt=z.getWireframeAttribute(st),kt===void 0)return;ie=2}const y=st.drawRange,P=st.attributes.position;let F=y.start*ie,N=(y.start+y.count)*ie;wt!==null&&(F=Math.max(F,wt.start*ie),N=Math.min(N,(wt.start+wt.count)*ie)),kt!==null?(F=Math.max(F,0),N=Math.min(N,kt.count)):P!=null&&(F=Math.max(F,0),N=Math.min(N,P.count));const G=N-F;if(G<0||G===1/0)return;Zt.setup(q,Q,Ht,st,kt);let pt,at=bt;if(kt!==null&&(pt=_t.get(kt),at=Jt,at.setIndex(pt)),q.isMesh)Q.wireframe===!0?(qt.setLineWidth(Q.wireframeLinewidth*de()),at.setMode(W.LINES)):at.setMode(W.TRIANGLES);else if(q.isLine){let nt=Q.linewidth;nt===void 0&&(nt=1),qt.setLineWidth(nt*de()),q.isLineSegments?at.setMode(W.LINES):q.isLineLoop?at.setMode(W.LINE_LOOP):at.setMode(W.LINE_STRIP)}else q.isPoints?at.setMode(W.POINTS):q.isSprite&&at.setMode(W.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)at.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))at.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const nt=q._multiDrawStarts,It=q._multiDrawCounts,Tt=q._multiDrawCount,ne=kt?_t.get(kt).bytesPerElement:1,Me=jt.get(Q).currentProgram.getUniforms();for(let Ie=0;Ie<Tt;Ie++)Me.setValue(W,"_gl_DrawID",Ie),at.render(nt[Ie]/ne,It[Ie])}else if(q.isInstancedMesh)at.renderInstances(F,G,q.count);else if(st.isInstancedBufferGeometry){const nt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,It=Math.min(st.instanceCount,nt);at.renderInstances(F,G,It)}else at.render(F,G)};function pe(T,X,st){T.transparent===!0&&T.side===Oe&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,vn(T,X,st),T.side=fi,T.needsUpdate=!0,vn(T,X,st),T.side=Oe):vn(T,X,st)}this.compile=function(T,X,st=null){st===null&&(st=T),p=Lt.get(st),p.init(X),S.push(p),st.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),T!==st&&T.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const Q=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const wt=q.material;if(wt)if(Array.isArray(wt))for(let Ut=0;Ut<wt.length;Ut++){const Ht=wt[Ut];pe(Ht,st,q),Q.add(Ht)}else pe(wt,st,q),Q.add(wt)}),S.pop(),p=null,Q},this.compileAsync=function(T,X,st=null){const Q=this.compile(T,X,st);return new Promise(q=>{function wt(){if(Q.forEach(function(Ut){jt.get(Ut).currentProgram.isReady()&&Q.delete(Ut)}),Q.size===0){q(T);return}setTimeout(wt,10)}ae.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ze=null;function Je(T){Ze&&Ze(T)}function cn(){ln.stop()}function je(){ln.start()}const ln=new zl;ln.setAnimationLoop(Je),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(T){Ze=T,ut.setAnimationLoop(T),T===null?ln.stop():ln.start()},ut.addEventListener("sessionstart",cn),ut.addEventListener("sessionend",je),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(X),X=ut.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,X,R),p=Lt.get(T,S.length),p.init(X),S.push(p),Ct.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ct.setFromProjectionMatrix(Ct),rt=this.localClippingEnabled,J=ft.init(this.clippingPlanes,rt),m=gt.get(T,E.length),m.init(),E.push(m),ut.enabled===!0&&ut.isPresenting===!0){const wt=v.xr.getDepthSensingMesh();wt!==null&&un(wt,X,-1/0,v.sortObjects)}un(T,X,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Mt,yt),Kt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Kt&&Dt.addToRenderList(m,T),this.info.render.frame++,J===!0&&ft.beginShadows();const st=p.state.shadowsArray;St.render(st,T,X),J===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,q=m.transmissive;if(p.setupLights(),X.isArrayCamera){const wt=X.cameras;if(q.length>0)for(let Ut=0,Ht=wt.length;Ut<Ht;Ut++){const kt=wt[Ut];An(Q,q,T,kt)}Kt&&Dt.render(T);for(let Ut=0,Ht=wt.length;Ut<Ht;Ut++){const kt=wt[Ut];jn(m,T,kt,kt.viewport)}}else q.length>0&&An(Q,q,T,X),Kt&&Dt.render(T),jn(m,T,X);R!==null&&(U.updateMultisampleRenderTarget(R),U.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(v,T,X),Zt.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],J===!0&&ft.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function un(T,X,st,Q){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)st=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ct.intersectsSprite(T)){Q&&Ot.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ct);const Ut=k.update(T),Ht=T.material;Ht.visible&&m.push(T,Ut,Ht,st,Ot.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ct.intersectsObject(T))){const Ut=k.update(T),Ht=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ot.copy(T.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Ot.copy(Ut.boundingSphere.center)),Ot.applyMatrix4(T.matrixWorld).applyMatrix4(Ct)),Array.isArray(Ht)){const kt=Ut.groups;for(let ie=0,y=kt.length;ie<y;ie++){const P=kt[ie],F=Ht[P.materialIndex];F&&F.visible&&m.push(T,Ut,F,st,Ot.z,P)}}else Ht.visible&&m.push(T,Ut,Ht,st,Ot.z,null)}}const wt=T.children;for(let Ut=0,Ht=wt.length;Ut<Ht;Ut++)un(wt[Ut],X,st,Q)}function jn(T,X,st,Q){const q=T.opaque,wt=T.transmissive,Ut=T.transparent;p.setupLightsView(st),J===!0&&ft.setGlobalState(v.clippingPlanes,st),Q&&qt.viewport(I.copy(Q)),q.length>0&&Rn(q,X,st),wt.length>0&&Rn(wt,X,st),Ut.length>0&&Rn(Ut,X,st),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function An(T,X,st,Q){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Ni(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?js:Jn,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));const wt=p.state.transmissionRenderTarget[Q.id],Ut=Q.viewport||I;wt.setSize(Ut.z,Ut.w);const Ht=v.getRenderTarget();v.setRenderTarget(wt),v.getClearColor(tt),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Kt&&Dt.render(st);const kt=v.toneMapping;v.toneMapping=$n;const ie=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),J===!0&&ft.setGlobalState(v.clippingPlanes,Q),Rn(T,st,Q),U.updateMultisampleRenderTarget(wt),U.updateRenderTargetMipmap(wt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let y=!1;for(let P=0,F=X.length;P<F;P++){const N=X[P],G=N.object,pt=N.geometry,at=N.material,nt=N.group;if(at.side===Oe&&G.layers.test(Q.layers)){const It=at.side;at.side=rn,at.needsUpdate=!0,_n(G,st,Q,pt,at,nt),at.side=It,at.needsUpdate=!0,y=!0}}y===!0&&(U.updateMultisampleRenderTarget(wt),U.updateRenderTargetMipmap(wt))}v.setRenderTarget(Ht),v.setClearColor(tt,Y),ie!==void 0&&(Q.viewport=ie),v.toneMapping=kt}function Rn(T,X,st){const Q=X.isScene===!0?X.overrideMaterial:null;for(let q=0,wt=T.length;q<wt;q++){const Ut=T[q],Ht=Ut.object,kt=Ut.geometry,ie=Q===null?Ut.material:Q,y=Ut.group;Ht.layers.test(st.layers)&&_n(Ht,X,st,kt,ie,y)}}function _n(T,X,st,Q,q,wt){T.onBeforeRender(v,X,st,Q,q,wt),T.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(v,X,st,Q,T,wt),q.transparent===!0&&q.side===Oe&&q.forceSinglePass===!1?(q.side=rn,q.needsUpdate=!0,v.renderBufferDirect(st,X,Q,q,T,wt),q.side=fi,q.needsUpdate=!0,v.renderBufferDirect(st,X,Q,q,T,wt),q.side=Oe):v.renderBufferDirect(st,X,Q,q,T,wt),T.onAfterRender(v,X,st,Q,q,wt)}function vn(T,X,st){X.isScene!==!0&&(X=re);const Q=jt.get(T),q=p.state.lights,wt=p.state.shadowsArray,Ut=q.state.version,Ht=ot.getParameters(T,q.state,wt,X,st),kt=ot.getProgramCacheKey(Ht);let ie=Q.programs;Q.environment=T.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(T.isMeshStandardMaterial?et:b).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,ie===void 0&&(T.addEventListener("dispose",Qt),ie=new Map,Q.programs=ie);let y=ie.get(kt);if(y!==void 0){if(Q.currentProgram===y&&Q.lightsStateVersion===Ut)return Kn(T,Ht),y}else Ht.uniforms=ot.getUniforms(T),T.onBeforeCompile(Ht,v),y=ot.acquireProgram(Ht,kt),ie.set(kt,y),Q.uniforms=Ht.uniforms;const P=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(P.clippingPlanes=ft.uniform),Kn(T,Ht),Q.needsLights=ws(T),Q.lightsStateVersion=Ut,Q.needsLights&&(P.ambientLightColor.value=q.state.ambient,P.lightProbe.value=q.state.probe,P.directionalLights.value=q.state.directional,P.directionalLightShadows.value=q.state.directionalShadow,P.spotLights.value=q.state.spot,P.spotLightShadows.value=q.state.spotShadow,P.rectAreaLights.value=q.state.rectArea,P.ltc_1.value=q.state.rectAreaLTC1,P.ltc_2.value=q.state.rectAreaLTC2,P.pointLights.value=q.state.point,P.pointLightShadows.value=q.state.pointShadow,P.hemisphereLights.value=q.state.hemi,P.directionalShadowMap.value=q.state.directionalShadowMap,P.directionalShadowMatrix.value=q.state.directionalShadowMatrix,P.spotShadowMap.value=q.state.spotShadowMap,P.spotLightMatrix.value=q.state.spotLightMatrix,P.spotLightMap.value=q.state.spotLightMap,P.pointShadowMap.value=q.state.pointShadowMap,P.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=y,Q.uniformsList=null,y}function pi(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Or.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Kn(T,X){const st=jt.get(T);st.outputColorSpace=X.outputColorSpace,st.batching=X.batching,st.batchingColor=X.batchingColor,st.instancing=X.instancing,st.instancingColor=X.instancingColor,st.instancingMorph=X.instancingMorph,st.skinning=X.skinning,st.morphTargets=X.morphTargets,st.morphNormals=X.morphNormals,st.morphColors=X.morphColors,st.morphTargetsCount=X.morphTargetsCount,st.numClippingPlanes=X.numClippingPlanes,st.numIntersection=X.numClipIntersection,st.vertexAlphas=X.vertexAlphas,st.vertexTangents=X.vertexTangents,st.toneMapping=X.toneMapping}function Ke(T,X,st,Q,q){X.isScene!==!0&&(X=re),U.resetTextureUnits();const wt=X.fog,Ut=Q.isMeshStandardMaterial?X.environment:null,Ht=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:vs,kt=(Q.isMeshStandardMaterial?et:b).get(Q.envMap||Ut),ie=Q.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,y=!!st.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),P=!!st.morphAttributes.position,F=!!st.morphAttributes.normal,N=!!st.morphAttributes.color;let G=$n;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(G=v.toneMapping);const pt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,at=pt!==void 0?pt.length:0,nt=jt.get(Q),It=p.state.lights;if(J===!0&&(rt===!0||T!==M)){const Qe=T===M&&Q.id===w;ft.setState(Q,T,Qe)}let Tt=!1;Q.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==It.state.version||nt.outputColorSpace!==Ht||q.isBatchedMesh&&nt.batching===!1||!q.isBatchedMesh&&nt.batching===!0||q.isBatchedMesh&&nt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&nt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&nt.instancing===!1||!q.isInstancedMesh&&nt.instancing===!0||q.isSkinnedMesh&&nt.skinning===!1||!q.isSkinnedMesh&&nt.skinning===!0||q.isInstancedMesh&&nt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&nt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&nt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&nt.instancingMorph===!1&&q.morphTexture!==null||nt.envMap!==kt||Q.fog===!0&&nt.fog!==wt||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==ft.numPlanes||nt.numIntersection!==ft.numIntersection)||nt.vertexAlphas!==ie||nt.vertexTangents!==y||nt.morphTargets!==P||nt.morphNormals!==F||nt.morphColors!==N||nt.toneMapping!==G||nt.morphTargetsCount!==at)&&(Tt=!0):(Tt=!0,nt.__version=Q.version);let ne=nt.currentProgram;Tt===!0&&(ne=vn(Q,X,q));let Me=!1,Ie=!1,hn=!1;const Se=ne.getUniforms(),Xe=nt.uniforms;if(qt.useProgram(ne.program)&&(Me=!0,Ie=!0,hn=!0),Q.id!==w&&(w=Q.id,Ie=!0),Me||M!==T){qt.buffers.depth.getReversed()?(vt.copy(T.projectionMatrix),ch(vt),lh(vt),Se.setValue(W,"projectionMatrix",vt)):Se.setValue(W,"projectionMatrix",T.projectionMatrix),Se.setValue(W,"viewMatrix",T.matrixWorldInverse);const Dn=Se.map.cameraPosition;Dn!==void 0&&Dn.setValue(W,Pt.setFromMatrixPosition(T.matrixWorld)),le.logarithmicDepthBuffer&&Se.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Se.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Ie=!0,hn=!0)}if(q.isSkinnedMesh){Se.setOptional(W,q,"bindMatrix"),Se.setOptional(W,q,"bindMatrixInverse");const Qe=q.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Se.setValue(W,"boneTexture",Qe.boneTexture,U))}q.isBatchedMesh&&(Se.setOptional(W,q,"batchingTexture"),Se.setValue(W,"batchingTexture",q._matricesTexture,U),Se.setOptional(W,q,"batchingIdTexture"),Se.setValue(W,"batchingIdTexture",q._indirectTexture,U),Se.setOptional(W,q,"batchingColorTexture"),q._colorsTexture!==null&&Se.setValue(W,"batchingColorTexture",q._colorsTexture,U));const ti=st.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&Vt.update(q,st,ne),(Ie||nt.receiveShadow!==q.receiveShadow)&&(nt.receiveShadow=q.receiveShadow,Se.setValue(W,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Xe.envMap.value=kt,Xe.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Xe.envMapIntensity.value=X.environmentIntensity),Ie&&(Se.setValue(W,"toneMappingExposure",v.toneMappingExposure),nt.needsLights&&Qn(Xe,hn),wt&&Q.fog===!0&&it.refreshFogUniforms(Xe,wt),it.refreshMaterialUniforms(Xe,Q,$,ht,p.state.transmissionRenderTarget[T.id]),Or.upload(W,pi(nt),Xe,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Or.upload(W,pi(nt),Xe,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Se.setValue(W,"center",q.center),Se.setValue(W,"modelViewMatrix",q.modelViewMatrix),Se.setValue(W,"normalMatrix",q.normalMatrix),Se.setValue(W,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Qe=Q.uniformsGroups;for(let Dn=0,x=Qe.length;Dn<x;Dn++){const D=Qe[Dn];H.update(D,ne),H.bind(D,ne)}}return ne}function Qn(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function ws(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,X,st){jt.get(T.texture).__webglTexture=X,jt.get(T.depthTexture).__webglTexture=st;const Q=jt.get(T);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=st===void 0,Q.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,X){const st=jt.get(T);st.__webglFramebuffer=X,st.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(T,X=0,st=0){R=T,A=X,C=st;let Q=!0,q=null,wt=!1,Ut=!1;if(T){const kt=jt.get(T);if(kt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(W.FRAMEBUFFER,null),Q=!1;else if(kt.__webglFramebuffer===void 0)U.setupRenderTarget(T);else if(kt.__hasExternalTextures)U.rebindTextures(T,jt.get(T.texture).__webglTexture,jt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const P=T.depthTexture;if(kt.__boundDepthTexture!==P){if(P!==null&&jt.has(P)&&(T.width!==P.image.width||T.height!==P.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(T)}}const ie=T.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ut=!0);const y=jt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(y[X])?q=y[X][st]:q=y[X],wt=!0):T.samples>0&&U.useMultisampledRTT(T)===!1?q=jt.get(T).__webglMultisampledFramebuffer:Array.isArray(y)?q=y[st]:q=y,I.copy(T.viewport),j.copy(T.scissor),Z=T.scissorTest}else I.copy(zt).multiplyScalar($).floor(),j.copy(Bt).multiplyScalar($).floor(),Z=Gt;if(qt.bindFramebuffer(W.FRAMEBUFFER,q)&&Q&&qt.drawBuffers(T,q),qt.viewport(I),qt.scissor(j),qt.setScissorTest(Z),wt){const kt=jt.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,kt.__webglTexture,st)}else if(Ut){const kt=jt.get(T.texture),ie=X||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,kt.__webglTexture,st||0,ie)}w=-1},this.readRenderTargetPixels=function(T,X,st,Q,q,wt,Ut){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=jt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ht=Ht[Ut]),Ht){qt.bindFramebuffer(W.FRAMEBUFFER,Ht);try{const kt=T.texture,ie=kt.format,y=kt.type;if(!le.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(y)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-Q&&st>=0&&st<=T.height-q&&W.readPixels(X,st,Q,q,Yt.convert(ie),Yt.convert(y),wt)}finally{const kt=R!==null?jt.get(R).__webglFramebuffer:null;qt.bindFramebuffer(W.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,X,st,Q,q,wt,Ut){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=jt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ht=Ht[Ut]),Ht){const kt=T.texture,ie=kt.format,y=kt.type;if(!le.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(y))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=T.width-Q&&st>=0&&st<=T.height-q){qt.bindFramebuffer(W.FRAMEBUFFER,Ht);const P=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,P),W.bufferData(W.PIXEL_PACK_BUFFER,wt.byteLength,W.STREAM_READ),W.readPixels(X,st,Q,q,Yt.convert(ie),Yt.convert(y),0);const F=R!==null?jt.get(R).__webglFramebuffer:null;qt.bindFramebuffer(W.FRAMEBUFFER,F);const N=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await ah(W,N,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,P),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,wt),W.deleteBuffer(P),W.deleteSync(N),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,X=null,st=0){T.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1]);const Q=Math.pow(2,-st),q=Math.floor(T.image.width*Q),wt=Math.floor(T.image.height*Q),Ut=X!==null?X.x:0,Ht=X!==null?X.y:0;U.setTexture2D(T,0),W.copyTexSubImage2D(W.TEXTURE_2D,st,0,0,Ut,Ht,q,wt),qt.unbindTexture()},this.copyTextureToTexture=function(T,X,st=null,Q=null,q=0){T.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,T=arguments[1],X=arguments[2],q=arguments[3]||0,st=null);let wt,Ut,Ht,kt,ie,y,P,F,N;const G=T.isCompressedTexture?T.mipmaps[q]:T.image;st!==null?(wt=st.max.x-st.min.x,Ut=st.max.y-st.min.y,Ht=st.isBox3?st.max.z-st.min.z:1,kt=st.min.x,ie=st.min.y,y=st.isBox3?st.min.z:0):(wt=G.width,Ut=G.height,Ht=G.depth||1,kt=0,ie=0,y=0),Q!==null?(P=Q.x,F=Q.y,N=Q.z):(P=0,F=0,N=0);const pt=Yt.convert(X.format),at=Yt.convert(X.type);let nt;X.isData3DTexture?(U.setTexture3D(X,0),nt=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(U.setTexture2DArray(X,0),nt=W.TEXTURE_2D_ARRAY):(U.setTexture2D(X,0),nt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const It=W.getParameter(W.UNPACK_ROW_LENGTH),Tt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ne=W.getParameter(W.UNPACK_SKIP_PIXELS),Me=W.getParameter(W.UNPACK_SKIP_ROWS),Ie=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,G.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,G.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,kt),W.pixelStorei(W.UNPACK_SKIP_ROWS,ie),W.pixelStorei(W.UNPACK_SKIP_IMAGES,y);const hn=T.isDataArrayTexture||T.isData3DTexture,Se=X.isDataArrayTexture||X.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Xe=jt.get(T),ti=jt.get(X),Qe=jt.get(Xe.__renderTarget),Dn=jt.get(ti.__renderTarget);qt.bindFramebuffer(W.READ_FRAMEBUFFER,Qe.__webglFramebuffer),qt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let x=0;x<Ht;x++)hn&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,jt.get(T).__webglTexture,q,y+x),T.isDepthTexture?(Se&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,jt.get(X).__webglTexture,q,N+x),W.blitFramebuffer(kt,ie,wt,Ut,P,F,wt,Ut,W.DEPTH_BUFFER_BIT,W.NEAREST)):Se?W.copyTexSubImage3D(nt,q,P,F,N+x,kt,ie,wt,Ut):W.copyTexSubImage2D(nt,q,P,F,N+x,kt,ie,wt,Ut);qt.bindFramebuffer(W.READ_FRAMEBUFFER,null),qt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Se?T.isDataTexture||T.isData3DTexture?W.texSubImage3D(nt,q,P,F,N,wt,Ut,Ht,pt,at,G.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(nt,q,P,F,N,wt,Ut,Ht,pt,G.data):W.texSubImage3D(nt,q,P,F,N,wt,Ut,Ht,pt,at,G):T.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,q,P,F,wt,Ut,pt,at,G.data):T.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,q,P,F,G.width,G.height,pt,G.data):W.texSubImage2D(W.TEXTURE_2D,q,P,F,wt,Ut,pt,at,G);W.pixelStorei(W.UNPACK_ROW_LENGTH,It),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Tt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ne),W.pixelStorei(W.UNPACK_SKIP_ROWS,Me),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ie),q===0&&X.generateMipmaps&&W.generateMipmap(nt),qt.unbindTexture()},this.copyTextureToTexture3D=function(T,X,st=null,Q=null,q=0){return T.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,Q=arguments[1]||null,T=arguments[2],X=arguments[3],q=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,X,st,Q,q)},this.initRenderTarget=function(T){jt.get(T).__webglFramebuffer===void 0&&U.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?U.setTextureCube(T,0):T.isData3DTexture?U.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?U.setTexture2DArray(T,0):U.setTexture2D(T,0),qt.unbindTexture()},this.resetState=function(){A=0,C=0,R=null,qt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}class Oa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new oe(t),this.density=e}clone(){return new Oa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class za{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new oe(t),this.near=e,this.far=n}clone(){return new za(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xl extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=va,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new L;class Hr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Hr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ql extends Vi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ns;const Rs=new L,is=new L,ss=new L,rs=new Ft,Cs=new Ft,$l=new _e,wr=new L,Ps=new L,br=new L,Xc=new Ft,Ao=new Ft,qc=new Ft;class ym extends Ve{constructor(t=new ql){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mm(e,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new Hr(n,3,0,!1)),ns.setAttribute("uv",new Hr(n,2,3,!1))}this.geometry=ns,this.material=t,this.center=new Ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),$l.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Er(wr.set(-.5,-.5,0),ss,o,is,s,r),Er(Ps.set(.5,-.5,0),ss,o,is,s,r),Er(br.set(.5,.5,0),ss,o,is,s,r),Xc.set(0,0),Ao.set(1,0),qc.set(1,1);let a=t.ray.intersectTriangle(wr,Ps,br,!1,Rs);if(a===null&&(Er(Ps.set(-.5,.5,0),ss,o,is,s,r),Ao.set(0,1),a=t.ray.intersectTriangle(wr,br,Ps,!1,Rs),a===null))return;const c=t.ray.origin.distanceTo(Rs);c<t.near||c>t.far||e.push({distance:c,point:Rs.clone(),uv:Tn.getInterpolation(Rs,wr,Ps,br,Xc,Ao,qc,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Er(i,t,e,n,s,r){rs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Cs.x=r*rs.x-s*rs.y,Cs.y=s*rs.x+r*rs.y):Cs.copy(rs),i.copy(t),i.x+=Cs.x,i.y+=Cs.y,i.applyMatrix4($l)}class Sm extends on{constructor(t=null,e=1,n=1,s,r,o,a,c,l=bn,u=bn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $c extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const os=new _e,Yc=new _e,Tr=[],Zc=new Bi,wm=new _e,Ls=new B,Is=new ys;class Vs extends B{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Zc.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(Zc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Is.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),Yc.multiplyMatrices(n,os),Ls.matrixWorld=Yc,Ls.raycast(t,Tr);for(let o=0,a=Tr.length;o<a;o++){const c=Tr[o];c.instanceId=r,c.object=this,e.push(c)}Tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sm(new Float32Array(s*this.count),s,this.count,La,zn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qr extends Vi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jc=new _e,Sa=new Pl,Ar=new ys,Rr=new L;class Ba extends Ve{constructor(t=new ze,e=new qr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=r,t.ray.intersectsSphere(Ar)===!1)return;Jc.copy(s).invert(),Sa.copy(t.ray).applyMatrix4(Jc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Rr.fromBufferAttribute(h,m),jc(Rr,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Rr.fromBufferAttribute(h,g),jc(Rr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jc(i,t,e,n,s,r,o){const a=Sa.distanceSqToPoint(i);if(a<e){const c=new L;Sa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Va extends on{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Ft:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],o=[],a=new L,c=new _e;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ye(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ha extends Bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ft){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bm extends Ha{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ga(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Cr=new L,Ro=new Ga,Co=new Ga,Po=new Ga;class ka extends Bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Cr.subVectors(s[0],s[1]).add(s[0]),l=Cr);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ro.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),Co.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),Po.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Co.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Po.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Ro.calc(c),Co.calc(c),Po.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Kc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Em(i,t){const e=1-i;return e*e*t}function Tm(i,t){return 2*(1-i)*i*t}function Am(i,t){return i*i*t}function Hs(i,t,e,n){return Em(i,t)+Tm(i,e)+Am(i,n)}function Rm(i,t){const e=1-i;return e*e*e*t}function Cm(i,t){const e=1-i;return 3*e*e*i*t}function Pm(i,t){return 3*(1-i)*i*i*t}function Lm(i,t){return i*i*i*t}function Gs(i,t,e,n,s){return Rm(i,t)+Cm(i,e)+Pm(i,n)+Lm(i,s)}class Yl extends Bn{constructor(t=new Ft,e=new Ft,n=new Ft,s=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ft){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Im extends Bn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y),Gs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zl extends Bn{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dm extends Bn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jl extends Bn{constructor(t=new Ft,e=new Ft,n=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ft){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hs(t,s.x,r.x,o.x),Hs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Um extends Bn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hs(t,s.x,r.x,o.x),Hs(t,s.y,r.y,o.y),Hs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jl extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Kc(a,c.x,l.x,u.x,h.x),Kc(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Ft().fromArray(s))}return this}}var Qc=Object.freeze({__proto__:null,ArcCurve:bm,CatmullRomCurve3:ka,CubicBezierCurve:Yl,CubicBezierCurve3:Im,EllipseCurve:Ha,LineCurve:Zl,LineCurve3:Dm,QuadraticBezierCurve:Jl,QuadraticBezierCurve3:Um,SplineCurve:jl});class Nm extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Qc[s.type]().fromJSON(s))}return this}}class wa extends Nm{constructor(t){super(),this.type="Path",this.currentPoint=new Ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Zl(this.currentPoint.clone(),new Ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Jl(this.currentPoint.clone(),new Ft(t,e),new Ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Yl(this.currentPoint.clone(),new Ft(t,e),new Ft(n,s),new Ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new jl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ha(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Wa extends ze{constructor(t=[new Ft(0,-.5),new Ft(.5,0),new Ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ye(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new L,d=new Ft,f=new L,g=new L,_=new L;let m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let E=0;E<=e;E++){const S=n+E*u*s,v=Math.sin(S),O=Math.cos(S);for(let A=0;A<=t.length-1;A++){h.x=t[A].x*v,h.y=t[A].y,h.z=t[A].x*O,o.push(h.x,h.y,h.z),d.x=E/e,d.y=A/(t.length-1),a.push(d.x,d.y);const C=c[3*A+0]*v,R=c[3*A+1],w=c[3*A+0]*O;l.push(C,R,w)}}for(let E=0;E<e;E++)for(let S=0;S<t.length-1;S++){const v=S+E*t.length,O=v,A=v+t.length,C=v+t.length+1,R=v+1;r.push(O,A,R),r.push(C,R,A)}this.setIndex(r),this.setAttribute("position",new ve(o,3)),this.setAttribute("uv",new ve(a,2)),this.setAttribute("normal",new ve(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.points,t.segments,t.phiStart,t.phiLength)}}class Ks extends Wa{constructor(t=1,e=1,n=4,s=8){const r=new wa;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Ks(t.radius,t.length,t.capSegments,t.radialSegments)}}class wn extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new L,u=new Ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(a,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wt extends ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;E(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(f,2));function E(){const v=new L,O=new L;let A=0;const C=(e-t)/n;for(let R=0;R<=r;R++){const w=[],M=R/r,I=M*(e-t)+t;for(let j=0;j<=s;j++){const Z=j/s,tt=Z*c+a,Y=Math.sin(tt),K=Math.cos(tt);O.x=I*Y,O.y=-M*n+m,O.z=I*K,h.push(O.x,O.y,O.z),v.set(Y,C,K).normalize(),d.push(v.x,v.y,v.z),f.push(Z,1-M),w.push(g++)}_.push(w)}for(let R=0;R<s;R++)for(let w=0;w<r;w++){const M=_[w][R],I=_[w+1][R],j=_[w+1][R+1],Z=_[w][R+1];(t>0||w!==0)&&(u.push(M,I,Z),A+=3),(e>0||w!==r-1)&&(u.push(I,j,Z),A+=3)}l.addGroup(p,A,0),p+=A}function S(v){const O=g,A=new Ft,C=new L;let R=0;const w=v===!0?t:e,M=v===!0?1:-1;for(let j=1;j<=s;j++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const I=g;for(let j=0;j<=s;j++){const tt=j/s*c+a,Y=Math.cos(tt),K=Math.sin(tt);C.x=w*K,C.y=m*M,C.z=w*Y,h.push(C.x,C.y,C.z),d.push(0,M,0),A.x=Y*.5+.5,A.y=K*.5*M+.5,f.push(A.x,A.y),g++}for(let j=0;j<s;j++){const Z=O+j,tt=I+j;v===!0?u.push(tt,tt+1,Z):u.push(tt+1,tt,Z),R+=3}l.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Li extends Wt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Li(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xa extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(r.slice(),3)),this.setAttribute("uv",new ve(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const S=new L,v=new L,O=new L;for(let A=0;A<e.length;A+=3)f(e[A+0],S),f(e[A+1],v),f(e[A+2],O),c(S,v,O,E)}function c(E,S,v,O){const A=O+1,C=[];for(let R=0;R<=A;R++){C[R]=[];const w=E.clone().lerp(v,R/A),M=S.clone().lerp(v,R/A),I=A-R;for(let j=0;j<=I;j++)j===0&&R===A?C[R][j]=w:C[R][j]=w.clone().lerp(M,j/I)}for(let R=0;R<A;R++)for(let w=0;w<2*(A-R)-1;w++){const M=Math.floor(w/2);w%2===0?(d(C[R][M+1]),d(C[R+1][M]),d(C[R][M])):(d(C[R][M+1]),d(C[R+1][M+1]),d(C[R+1][M]))}}function l(E){const S=new L;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(E),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function u(){const E=new L;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];const v=m(E)/2/Math.PI+.5,O=p(E)/Math.PI+.5;o.push(v,1-O)}g(),h()}function h(){for(let E=0;E<o.length;E+=6){const S=o[E+0],v=o[E+2],O=o[E+4],A=Math.max(S,v,O),C=Math.min(S,v,O);A>.9&&C<.1&&(S<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),O<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function f(E,S){const v=E*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function g(){const E=new L,S=new L,v=new L,O=new L,A=new Ft,C=new Ft,R=new Ft;for(let w=0,M=0;w<r.length;w+=9,M+=6){E.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),A.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),O.copy(E).add(S).add(v).divideScalar(3);const I=m(O);_(A,M+0,E,I),_(C,M+2,S,I),_(R,M+4,v,I)}}function _(E,S,v,O){O<0&&E.x===1&&(o[S]=E.x-1),v.x===0&&v.z===0&&(o[S]=O/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.vertices,t.indices,t.radius,t.details)}}class _s extends wa{constructor(t){super(t),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new wa().fromJSON(s))}return this}}const Fm={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Kl(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=Hm(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return $s(r,o,e,a,c,f,0),o}};function Kl(i,t,e,n,s){let r,o;if(s===Km(i,t,e,n)>0)for(r=t;r<e;r+=n)o=tl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=tl(r,i[r],i[r+1],o);return o&&$r(o,o.next)&&(Zs(o),o=o.next),o}function Fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($r(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $s(i,t,e,n,s,r,o){if(!i)return;!o&&r&&qm(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?zm(i,n,s,r):Om(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Zs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Bm(Fi(i),t,e),$s(i,t,e,n,s,r,2)):o===2&&Vm(i,t,e,n,s,r):$s(Fi(i),t,e,n,s,r,1);break}}}function Om(i){const t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&cs(s,a,r,c,o,l,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ue(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=ba(f,g,t,e,n),E=ba(_,m,t,e,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=p&&v&&v.z<=E;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&cs(a,u,c,h,l,d,S.x,S.y)&&Ue(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&cs(a,u,c,h,l,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&cs(a,u,c,h,l,d,S.x,S.y)&&Ue(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&cs(a,u,c,h,l,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Bm(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!$r(s,r)&&Ql(s,n,n.next,r)&&Ys(s,r)&&Ys(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Zs(n),Zs(n.next),n=i=r),n=n.next}while(n!==i);return Fi(n)}function Vm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zm(o,a)){let c=tu(o,a);o=Fi(o,o.next),c=Fi(c,c.next),$s(o,t,e,n,s,r,0),$s(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Hm(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Kl(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Ym(l));for(s.sort(Gm),r=0;r<s.length;r++)e=km(s[r],e);return e}function Gm(i,t){return i.x-t.x}function km(i,t){const e=Wm(i,t);if(!e)return t;const n=tu(e,i);return Fi(n,n.next),Fi(e,e.next)}function Wm(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&cs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Ys(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Xm(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function Xm(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function qm(i,t,e,n){let s=i;do s.z===0&&(s.z=ba(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$m(s)}function $m(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ba(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ym(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Zm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jm(i,t)&&(Ys(i,t)&&Ys(t,i)&&jm(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||$r(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $r(i,t){return i.x===t.x&&i.y===t.y}function Ql(i,t,e,n){const s=Lr(Ue(i,t,e)),r=Lr(Ue(i,t,n)),o=Lr(Ue(e,n,i)),a=Lr(Ue(e,n,t));return!!(s!==r&&o!==a||s===0&&Pr(i,e,t)||r===0&&Pr(i,n,t)||o===0&&Pr(e,i,n)||a===0&&Pr(e,t,n))}function Pr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Lr(i){return i>0?1:i<0?-1:0}function Jm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ql(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ys(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function jm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function tu(i,t){const e=new Ea(i.i,i.x,i.y),n=new Ea(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function tl(i,t,e,n){const s=new Ea(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ea(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Km(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ks{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ks.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];el(t),nl(n,t);let o=t.length;e.forEach(el);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,nl(n,e[c]);const a=Fm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function el(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function nl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class sn extends Xa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sn(t.radius,t.detail)}}class Yr extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,f=new L,g=new Ft;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const E=p+m,S=E,v=E+n+1,O=E+n+2,A=E+1;a.push(S,v,A),a.push(v,O,A)}}this.setIndex(a),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(l,3)),this.setAttribute("uv",new ve(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Di extends ze{constructor(t=new _s([new Ft(0,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(r,3)),this.setAttribute("uv",new ve(o,2));function l(u){const h=s.length/3,d=u.extractPoints(e);let f=d.shape;const g=d.holes;ks.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const E=g[m];ks.isClockWise(E)===!0&&(g[m]=E.reverse())}const _=ks.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const E=g[m];f=f.concat(E)}for(let m=0,p=f.length;m<p;m++){const E=f[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,p=_.length;m<p;m++){const E=_[m],S=E[0]+h,v=E[1]+h,O=E[2]+h;n.push(S,v,O),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Qm(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Di(n,t.curveSegments)}}function Qm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ce extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],S=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let O=0;O<=e;O++){const A=O/e;h.x=-t*Math.cos(s+A*r)*Math.sin(o+S*a),h.y=t*Math.cos(o+S*a),h.z=t*Math.sin(s+A*r)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+v,1-S),E.push(l++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const S=u[p][E+1],v=u[p][E],O=u[p+1][E],A=u[p+1][E+1];(p!==0||o>0)&&f.push(S,v,A),(p!==n-1||c<Math.PI)&&f.push(v,O,A)}this.setIndex(f),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class De extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new L,h=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ee extends Vi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qa extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class eu extends qa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Lo=new _e,il=new L,sl=new L;class nu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;il.setFromMatrixPosition(t.matrixWorld),e.position.copy(il),sl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sl),e.updateMatrixWorld(),Lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const rl=new _e,Ds=new L,Io=new L;class tg extends nu{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new Re(2,1,1,1),new Re(0,1,1,1),new Re(3,1,1,1),new Re(1,1,1,1),new Re(3,0,1,1),new Re(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ds.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ds),Io.copy(n.position),Io.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Io),n.updateMatrixWorld(),s.makeTranslation(-Ds.x,-Ds.y,-Ds.z),rl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl)}}class Bs extends qa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class eg extends nu{constructor(){super(new Bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iu extends qa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new eg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ng{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ol();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ol(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);function ig(i){const t=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,e=new vm({canvas:i,antialias:!t,powerPreference:"high-performance"});let s=Math.min(t?1.5:2,window.devicePixelRatio||1);e.setPixelRatio(s);let r=0,o=0;e.toneMapping=$n;const a=new Sn(52,1,.4,5e3);let c=null,l=()=>{};const u=new ng;let h=0,d=!0;function f(){const _=i.clientWidth||window.innerWidth,m=i.clientHeight||window.innerHeight;e.setSize(_,m,!1),a.aspect=_/m,a.updateProjectionMatrix()}new ResizeObserver(f).observe(i),f();function g(){if(!d)return;const _=u.getDelta(),m=Math.min(.1,_);h+=m,r++,o+=_,o>1.5&&(r/o<28&&s>.75&&(s=Math.max(.75,s*.8),e.setPixelRatio(s),f()),r=0,o=0),l(h,m,Math.min(.33,_)),c&&e.render(c,a),requestAnimationFrame(g)}return g(),{renderer:e,camera:a,voir(_){c=_},definir(_,m){c=_,l=m||(()=>{})},temps:()=>h,arreter(){d=!1,e.dispose()}}}function Ws(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ze;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=al(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=al(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function al(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new $e(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function Ii(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const xt=(i,t={})=>new ee({color:i,roughness:.85,metalness:0,flatShading:!0,...t});function sg(i,t,e,n,s=8){const r=new L().subVectors(t,i),o=r.length(),a=new Wt(n,e,o,s,1),c=new zi().setFromUnitVectors(new L(0,1,0),r.clone().normalize());return a.applyMatrix4(new _e().compose(new L().addVectors(i,t).multiplyScalar(.5),c,new L(1,1,1))),a}function rg(i,t,e,n=8){const s=new ka(i),r=Math.max(6,Math.floor(s.getLength()/3)),o=[];let a=s.getPoint(0);for(let c=1;c<=r;c++){const l=c/r,u=s.getPoint(l),h=t+(e-t)*((c-1)/r),d=t+(e-t)*l;o.push(sg(a,u,h,d,n));const f=new Ce(d,n,6);f.translate(u.x,u.y,u.z),o.push(f),a=u}return{geometrie:og(o),courbe:s}}function og(i){const t=i.map(e=>{const n=e.index?e.toNonIndexed():e;return n.deleteAttribute("uv"),n});return Ws(t,!1)}const ag=(()=>{const i=new _s;return i.moveTo(0,0),i.bezierCurveTo(.5,.4,.5,1.1,0,1.6),i.bezierCurveTo(-.5,1.1,-.5,.4,0,0),i})();function $a(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Va(i)}function cg(i,t=[]){i.updateMatrixWorld(!0);const e=new Set(t),n=new Map,s=o=>{if(!e.has(o)){if(o.isMesh&&!o.isInstancedMesh){const a=o.material;if(a&&a.isMeshStandardMaterial&&!a.map&&!a.transparent&&!a.polygonOffset&&a.emissive.getHex()===0&&o.visible&&!o.userData.garder){const c=`${a.flatShading}|${a.roughness}|${a.metalness}|${a.side}`;n.has(c)||n.set(c,{m:a,liste:[]}),n.get(c).liste.push(o);return}}for(const a of[...o.children])s(a)}};s(i);let r=0;for(const{m:o,liste:a}of n.values()){const c=a.map(u=>{const h=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();h.applyMatrix4(u.matrixWorld),h.deleteAttribute("uv");const d=h.attributes.position.count,f=new Float32Array(d*3),g=u.material.color;for(let _=0;_<d;_++)f.set([g.r,g.g,g.b],_*3);return h.setAttribute("color",new $e(f,3)),h}),l=new B(Ws(c,!1),new ee({vertexColors:!0,roughness:o.roughness,metalness:o.metalness,flatShading:o.flatShading,side:o.side}));for(const u of a)u.parent&&u.parent.remove(u),u.geometry.dispose();i.add(l),r+=a.length}return r}const lg=(i,t,e)=>[Math.min(19.4,Math.max(-19.4,i)),Math.min(9.4,11.5+8*(1-Math.abs(i)/20),Math.max(.9,t)),Math.min(14.4,Math.max(-14.5,e))],ug={xMin:-18.6,xMax:18.6,zMin:-13.6,zMax:13.6};function ce(i,t){for(const[e,n]of Object.entries(t))n&&n.isVector3?i[e].copy(n):n&&n.isEuler?i.rotation.copy(n):i[e]=n;return i}function dn(i,t,e,n=null){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new Va(s);return r.colorSpace=xn,n&&(r.wrapS=r.wrapT=Xs,r.repeat.set(n[0],n[1])),r}function hg(){const i=new Xl,t=Ii(77),e=[];function n(x,D,V,dt,Rt,se,Ne,{solide:gn=!1,rot:ei=0,mate:du={}}={}){const Qs=new B(new Xt(x,D,V),xt(Ne,du));return Qs.position.set(dt,Rt,se),Qs.rotation.y=ei,i.add(Qs),gn&&e.push({min:[dt-x/2,Rt-D/2,se-V/2],max:[dt+x/2,Rt+D/2,se+V/2]}),Qs}function s(x,D,V,dt,Rt,se,Ne,gn=12){const ei=new B(new Wt(x,D,V,gn),xt(Ne));return ei.position.set(dt,Rt,se),i.add(ei),ei}i.add(new eu(16773336,8016948,.55));const r=new iu(16773839,.9);r.position.set(16,20,-6),i.add(r);const o=new Bs(16767392,420,60,1.6);o.position.set(0,14,0),i.add(o);const a=new Bs(16769192,150,24,1.8);a.position.set(-12,8,-10),i.add(a);const c=dn(512,512,(x,D,V)=>{const dt=Ii(5);for(let Rt=0;Rt<8;Rt++){x.fillStyle=["#b98a58","#a97b4b","#c29463","#b08050"][Rt%4],x.fillRect(0,Rt*64,D,62),x.fillStyle="rgba(0,0,0,0.22)",x.fillRect(0,Rt*64+62,D,2),x.fillStyle="rgba(0,0,0,0.12)";for(let se=0;se<14;se++)x.fillRect(dt()*D,Rt*64+6+dt()*50,30+dt()*80,1.4);x.fillStyle="rgba(0,0,0,0.25)",x.fillRect(Rt*173%400+30,Rt*64,2,62)}},[6,5]),l=new B(new Fe(40,30),new ee({map:c,roughness:.9}));l.rotation.x=-Math.PI/2,i.add(l);const u=dn(512,512,(x,D)=>{for(let V=0;V<6;V++)x.fillStyle=["#8a5e3c","#7e5535","#935f3b"][V%3],x.fillRect(V*86,0,84,512),x.fillStyle="rgba(0,0,0,0.3)",x.fillRect(V*86+84,0,2,512)},[4,1]),h=new ee({map:u,roughness:.95}),d=(x,D,V,dt,Rt,se=0)=>{const Ne=new B(new Fe(x,D),h);return Ne.position.set(V,dt,Rt),Ne.rotation.y=se,i.add(Ne),Ne};d(40,12,0,6,-15,0),d(30,12,-20,6,0,Math.PI/2),d(30,12,20,6,0,-Math.PI/2);const f=(x,D,V,dt)=>{const Rt=h.clone();Rt.map=u.clone(),Rt.map.repeat.set(x/10,D/12),Rt.map.needsUpdate=!0;const se=new B(new Fe(x,D),Rt);se.position.set(V,dt,15),se.rotation.y=Math.PI,i.add(se)};f(12,12,-14,6),f(12,12,14,6),f(16,2,0,11);const g=new B(new Di((()=>{const x=new _s;return x.moveTo(-20,12),x.lineTo(20,12),x.lineTo(0,21),x.closePath(),x})()),h);g.position.set(0,0,-15),i.add(g);const _=g.clone();_.position.set(0,0,15),_.rotation.y=Math.PI,i.add(_);const m=Math.atan2(9,20),p=Math.hypot(20,9);for(const x of[-1,1]){const D=new B(new Xt(p+1,.5,31),xt(5913894));D.position.set(x*10,16.55,0),D.rotation.z=-x*m,i.add(D)}for(let x=-13;x<=13;x+=6.5){n(40,.9,.9,0,12.1,x,3810837);for(const D of[-1,1]){const V=new B(new Xt(p,.8,.8),xt(3810837));V.position.set(D*10,16.1,x),V.rotation.z=-D*m,i.add(V)}n(.8,4.4,.8,0,14.4,x,3810837)}n(.9,.9,30,0,20.4,0,3810837);const E=dn(512,512,(x,D,V)=>{const dt=x.createLinearGradient(0,0,0,V);dt.addColorStop(0,"#1f8fe6"),dt.addColorStop(.55,"#7fe3dc"),dt.addColorStop(1,"#fff3c0"),x.fillStyle=dt,x.fillRect(0,0,D,V),x.fillStyle="#5fb7b8",x.beginPath(),x.ellipse(120,360,220,90,0,0,6.3),x.fill(),x.fillStyle="#4fb45a",x.fillRect(0,380,D,140),x.fillStyle="#7b4f2e",x.fillRect(256,190,34,200);for(const[Rt,se,Ne,gn]of[[240,170,90,"#23a04c"],[330,190,70,"#45c755"],[200,220,60,"#45c755"],[270,120,70,"#8fe55f"]])x.fillStyle=gn,x.beginPath(),x.arc(Rt,se,Ne,0,6.3),x.fill();x.fillStyle="#ff8a2b";for(const[Rt,se]of[[230,140],[320,170],[190,215]])x.beginPath(),x.arc(Rt,se,7,0,6.3),x.fill();x.fillStyle="#fffbe0",x.beginPath(),x.arc(420,90,36,0,6.3),x.fill()}),S=new B(new wn(4.2,40),new Ae({map:E}));S.position.set(9,9,-14.85),i.add(S);const v=new B(new De(4.3,.34,8,40),xt(3810837));v.position.set(9,9,-14.7),i.add(v),n(8.6,.24,.3,9,9,-14.7,3810837),n(.24,8.6,.3,9,9,-14.7,3810837);const O=new B(new Fe(9,34),new Ae({color:16773824,transparent:!0,opacity:.1,blending:Nn,depthWrite:!1,side:Oe,fog:!1}));O.position.set(11.5,5,-7.5),O.rotation.set(-.95,-.3,.12),i.add(O),n(10.4,.45,3.6,-12,3.2,-12.6,11565637,{solide:!0});for(const[x,D]of[[-16.8,-14.1],[-7.2,-14.1],[-16.8,-11.1],[-7.2,-11.1]])n(.5,3.2,.5,x,1.6,D,8015920);n(9.6,.25,3,-12,1.2,-12.6,9264952),e.push({min:[-17.2,0,-14.4],max:[-6.8,3.5,-10.8]}),n(1.2,1.1,1.4,-17,3.95,-12.6,4871528),n(.35,.9,1.5,-16.2,4.05,-12.6,8095636);const A=dn(256,128,(x,D,V)=>{x.fillStyle="#d9b27a",x.fillRect(0,0,D,V),x.fillStyle="rgba(80,50,20,0.45)";for(let dt=6;dt<D;dt+=12)for(let Rt=6;Rt<V;Rt+=12)x.beginPath(),x.arc(dt,Rt,1.5,0,6.3),x.fill()}),C=new B(new Fe(12,6),new ee({map:A,roughness:.9}));C.position.set(-12,8.6,-14.88),i.add(C);const R=[[12.6,.3,0,3.1],[12.6,.3,0,-3.1],[.3,6.4,6.2,0],[.3,6.4,-6.2,0]];for(const[x,D,V,dt]of R)n(x,D,.3,-12+V,8.6+dt,-14.75,7031343);const w=10134704,M=new ue;M.add(ce(new B(new Wt(.1,.12,2.6,8),xt(12159576)),{position:new L(0,0,0)})),M.add(ce(new B(new Xt(1.3,.6,.5),xt(7239554)),{position:new L(0,1.4,0)})),M.position.set(-16,8.8,-14.6),i.add(M);const I=new ue;I.add(new B(new Wt(.14,.14,2.8,8),xt(w)));const j=new B(new De(.42,.14,6,10,Math.PI*1.6),xt(w));j.position.y=1.5,I.add(j),I.position.set(-14.4,8.7,-14.6),I.rotation.z=.2,i.add(I);const Z=new _s;Z.moveTo(0,0),Z.lineTo(3.4,.9),Z.lineTo(3.4,-.9),Z.closePath();const tt=new B(new Di(Z),new ee({color:13160664,side:Oe,flatShading:!0}));tt.position.set(-12.3,9.6,-14.6),tt.rotation.z=-.5,i.add(tt),n(.7,.4,.5,-12.1,9.9,-14.6,12600623);for(const[x,D]of[[-10.2,14035002],[-9.6,16756768],[-9,4165606]])s(.17,.17,.9,x,7.6,-14.6,D,8),s(.05,.05,1.4,x,6.55,-14.6,w,6);for(const[x,D,V]of[[-15.2,6.9,.2],[-13.4,6.6,-.15]]){const dt=new ue;for(const Rt of[-1,1]){const se=new B(new Xt(.28,2.4,.2),xt(w));se.rotation.z=Rt*.14,dt.add(se);const Ne=new B(new Xt(.34,1.2,.26),xt(14035002));Ne.position.set(Rt*.34,-.95,0),Ne.rotation.z=Rt*.14,dt.add(Ne)}dt.position.set(x,D,-14.6),dt.rotation.z=V,i.add(dt)}for(const[x,D,V]of[[-8.4,8,16765517],[-7.7,6.9,16742981]]){const dt=new B(new De(.55,.22,8,16),xt(V));dt.position.set(x,D,-14.6),i.add(dt)}const Y=new ue;Y.add(ce(new B(new Wt(.1,.1,2.2,8),xt(12159576)),{rotation:new mn(0,0,Math.PI/2)})),Y.add(ce(new B(new Xt(.5,.9,.5),xt(7239554)),{position:new L(-1.1,.1,0)})),Y.position.set(-14.5,3.62,-12),Y.rotation.y=.6,i.add(Y);for(const[x,D,V]of[[-9.4,-13.2,14035002],[-8.6,-12.4,4165606],[-10.2,-11.8,4052640]])s(.42,.42,.7,x,3.78,D,V,10),s(.3,.3,.12,x,4.2,D,14541802,10);const K=new B(new Wt(.5,.5,1.1,10),new ee({color:13625583,transparent:!0,opacity:.45}));K.position.set(-15.6,3.98,-13.4),i.add(K);for(let x=0;x<12;x++){const D=new B(new Xt(.1,.45,.1),xt(11581632));D.position.set(-15.6+(t()-.5)*.6,3.7+t()*.5,-13.4+(t()-.5)*.6),D.rotation.set(t(),t(),t()),i.add(D)}s(.5,.5,.2,-10.5,3.52,-13.6,3817286);const ht=new B(new Wt(.08,.08,4,6),xt(3817286));ht.position.set(-10.5,5.5,-13.6),i.add(ht);const $=new B(new Li(.9,.9,12,1,!0),new ee({color:16756768,side:Oe,emissive:16756768,emissiveIntensity:.4}));$.position.set(-10.5,7.5,-13.2),$.rotation.x=Math.PI,i.add($);function Mt(x,D,V,dt=0,Rt=0){const se=new ue;se.add(new B(new Xt(3*V,3*V,3*V),xt(12159576)));for(const Ne of[-1.35,1.35]){const gn=new B(new Xt(3.1*V,.3*V,3.1*V),xt(8015920));gn.position.y=Ne*V,se.add(gn)}for(const[Ne,gn]of[[-1.35,-1.35],[1.35,-1.35],[-1.35,1.35],[1.35,1.35]]){const ei=new B(new Xt(.3*V,3.1*V,.3*V),xt(8015920));ei.position.set(Ne*V,0,gn*V),se.add(ei)}se.position.set(x,dt+1.5*V,D),se.rotation.y=Rt,i.add(se),e.push({min:[x-1.5*V,dt,D-1.5*V],max:[x+1.5*V,dt+3*V,D+1.5*V]})}Mt(13.5,-11.2,1,0,.1),Mt(16.8,-11.8,1,0,-.08),Mt(15.2,-11.4,1,3,.2),Mt(16.2,-7.4,.8,0,.3);function yt(x,D,V){const dt=new ue;dt.add(new B(new Wt(1.3,1.3,3.2,14),xt(V)));for(const Rt of[-1.1,1.1]){const se=new B(new De(1.32,.09,6,16),xt(2830648));se.rotation.x=Math.PI/2,se.position.y=Rt,dt.add(se)}dt.position.set(x,1.6,D),i.add(dt),e.push({min:[x-1.3,0,D-1.3],max:[x+1.3,3.2,D+1.3]})}yt(-18.2,6.2,4160176),yt(-16.4,8.4,11553338),n(3.4,1.6,1.7,-3.4,.8,-8.4,14035002,{solide:!0}),n(3.5,.2,1.8,-3.4,1.45,-8.4,15223378);const zt=new B(new De(.7,.07,6,12,Math.PI),xt(2830648));zt.position.set(-3.4,1.7,-8.4),i.add(zt);const Bt=new ue;Bt.add(ce(new B(new Wt(2.4,2.4,.4,20),xt(11041354)),{position:new L(0,.2,0)})),Bt.add(ce(new B(new Wt(2.4,2.4,.4,20),xt(11041354)),{position:new L(0,2.6,0)})),Bt.add(ce(new B(new Wt(1.2,1.2,2.4,14),xt(9264952)),{position:new L(0,1.4,0)})),Bt.position.set(5,0,-6.4),i.add(Bt),e.push({min:[2.6,0,-8.8],max:[7.4,2.8,-4]}),s(.5,.5,.7,5.6,3.15,-6.2,14035002,10),n(1,.7,1.4,4.4,3.2,-6.8,16765517),n(.4,11,7,19.6,5.5,4.5,7031343),n(.4,11,7,17.6,5.5,4.5,7031343);const Gt=[16742981,6013163,10216314,13081599,16765517,16734815];for(const x of[1.2,4.2,7.2,10.2]){n(2.6,.3,7,18.6,x,4.5,9264952);for(let D=0;D<6;D++){const V=Gt[(D+Math.floor(x))%6];D%2?s(.45,.45,.9+D%3*.3,18.6,x+.65+D%3*.1,1.9+D*.95,V,10):n(1.1,.9+D%2*.3,.8,18.6,x+.65,1.9+D*.95,V)}}e.push({min:[17.4,0,.9],max:[19.9,11,8.1]});for(const x of[-.9,.9]){const D=new B(new Xt(.28,12.5,.28),xt(12159576));D.position.set(-18.6,5.9,-4+x),D.rotation.z=-.13,i.add(D)}for(let x=0;x<9;x++){const D=new B(new Xt(.2,.2,2),xt(11041354));D.position.set(-19+x*.12,1.2+x*1.3,-4),i.add(D)}const ct=new ue;for(let x=0;x<6;x++){const D=new B(new De(.8-x*.02,.16,6,16),xt(14137466));D.position.z=x*.28,ct.add(D)}ct.position.set(-19.5,7,-10),ct.rotation.y=Math.PI/2,i.add(ct),s(.1,.1,.8,-19.7,8.1,-10,2830648,6).rotation.z=Math.PI/2;const J=new ue,rt=new B(new Wt(3,3.4,.8,20),xt(5531516));rt.position.y=.4,J.add(rt);const vt=new B(new Wt(2.4,2.4,6.4,24,1,!0),new ee({color:10478574,transparent:!0,opacity:.28,side:Oe,roughness:.05}));vt.position.y=4,J.add(vt);const Ct=new B(new Wt(2.3,2.3,.2,20),new ee({color:10478574,emissive:6013163,emissiveIntensity:.9}));Ct.position.y=.9,J.add(Ct);const Pt=new B(new Wt(2.7,2.2,1,20),xt(7243424));Pt.position.y=7.5,J.add(Pt);const Ot=new B(new Ce(.4,12,12),new ee({color:16734815,emissive:16734815,emissiveIntensity:1}));Ot.position.y=9.2,J.add(Ot);const re=new B(new Wt(.1,.1,1.8,6),xt(7243424));re.position.y=8.4,J.add(re);const Kt=new Bs(8382463,60,14);Kt.position.y=3,J.add(Kt);const de=new B(new Wt(.5,2.1,6.4,24,1,!0),new Ae({color:8382463,transparent:!0,opacity:0,blending:Nn,depthWrite:!1,side:Oe}));de.position.y=4.1,de.visible=!1,J.add(de);const W={position:new L(-1,0,-11),platY:1,ouvrirVerre(x){vt.position.y=4+x*5.6},alarme(x){Ot.material.color.setHex(x>0?16719390:16734815),Ot.material.emissive.setHex(x>0?16719390:16734815),Kt.color.setHex(x>0?16726570:8382463),Kt.intensity=60+x*340},secouer(x){J.position.set(-1+(Math.random()-.5)*x,0,-11+(Math.random()-.5)*x)},exploser(){J.visible=!1,we.visible=!0,de.visible=!1},reparer(){J.visible=!0,we.visible=!1,J.position.set(-1,0,-11),vt.position.y=4,de.visible=!1,Ot.material.color.setHex(16734815),Ot.material.emissive.setHex(16734815),Kt.color.setHex(8382463),Kt.intensity=60,Ct.material.emissiveIntensity=.9},rayon(x){de.visible=x>.01,de.material.opacity=.34*Math.min(1.4,x),Kt.intensity=60+x*260,Ct.material.emissiveIntensity=.9+x*1.6}},we=new ue;we.add(ce(new B(new Wt(3,3.4,.8,20),xt(2830134)),{position:new L(0,.4,0)})),we.add(ce(new B(new Wt(2.3,2.3,.2,16),xt(1316378)),{position:new L(0,.9,0)}));for(let x=0;x<6;x++){const D=x/6*6.28,V=new B(new Wt(.13,.17,1.6+t()*2.4,6),xt(4869976));V.position.set(Math.cos(D)*2.2,1.6,Math.sin(D)*2.2),V.rotation.set((t()-.5)*.9,0,(t()-.5)*.9),we.add(V)}const ae=new B(new wn(6,28),new Ae({color:328965,transparent:!0,opacity:.55,depthWrite:!1}));ae.rotation.x=-Math.PI/2,ae.position.y=.05,we.add(ae),we.position.set(-1,0,-11),we.visible=!1,i.add(we),J.position.set(-1,0,-11),i.add(J),e.push({min:[-4.4,0,-14.4],max:[2.4,9,-7.6]});const le=dn(256,256,(x,D)=>{x.fillStyle="#b8453a",x.fillRect(0,0,D,D);for(const[V,dt]of[[118,"#e8c9a0"],[96,"#2f6f8a"],[70,"#e8c9a0"],[46,"#b8453a"],[22,"#ffd24d"]])x.fillStyle=dt,x.beginPath(),x.arc(128,128,V,0,6.3),x.fill()}),qt=new B(new wn(6,40),new ee({map:le,roughness:1}));qt.rotation.x=-Math.PI/2,qt.position.set(1,.03,4),i.add(qt);for(const[x,D,V,dt]of[[-17,10.8,1.2,.3],[-14.2,11.4,.9,-.2],[-16.4,11,.8,.1]]){const Rt=new B(new Xt(2.4*V,1.8*V,2*V),xt(13148268));Rt.position.set(x,D===11?1.7:.9*V,D),Rt.rotation.y=dt,i.add(Rt),e.push({min:[x-1.2*V,0,D-V],max:[x+1.2*V,1.8*V,D+V]})}for(let x=0;x<5;x++){const D=new B(new Wt(.28,.28,3.4,8),xt(15327952));D.position.set(11+x*.6,1.5,11.5),D.rotation.set(.1,0,Math.PI/2-.5+x*.1),i.add(D)}const te=new ue;te.add(ce(new B(new Wt(.06,.06,6,6),xt(2830648)),{position:new L(0,3,0)})),te.add(new B(new Li(2.1,1.6,16,1,!0),new ee({color:4165482,side:Oe,emissive:1923648,emissiveIntensity:.4}))),te.add(ce(new B(new Ce(.6,12,12),new Ae({color:16773832})),{position:new L(0,-.3,0)})),te.position.set(0,14.4,0),i.add(te);const jt=dn(512,128,(x,D,V)=>{x.fillStyle="#cfc8b4",x.fillRect(0,0,D,V);for(let dt=0;dt<4;dt++){const Rt=dt*128+10;x.fillStyle="rgba(0,0,0,0.22)",x.fillRect(Rt,14,108,100),x.fillStyle="#e4dcc6",x.fillRect(Rt+4,18,100,92),x.fillStyle="rgba(255,255,255,0.4)",x.fillRect(Rt+4,18,100,3)}x.fillStyle="rgba(0,0,0,0.4)",x.fillRect(0,0,D,4),x.fillRect(0,V-4,D,4)}),U=new ee({map:jt,roughness:.55,metalness:.15});for(let x=0;x<5;x++){const D=new B(new Xt(16,.3,1.9),U);D.position.set(0,11,13.4-x*1.95),i.add(D)}n(.8,10.3,.5,-8.4,5.15,14.7,5913894),n(.8,10.3,.5,8.4,5.15,14.7,5913894),n(17.6,.8,.5,0,10,14.7,5913894);const b=9081241;for(const x of[-1,1])n(.25,9.8,.3,x*8,4.9,14.2,b),n(.25,.25,9.6,x*8,10.7,9.6,b);const et=new B(new Wt(.2,.2,14.4,10),xt(b));et.rotation.z=Math.PI/2,et.position.set(0,10.8,14.1),i.add(et);for(let x=-6;x<=6;x++){const D=new B(new De(.34,.07,6,12),xt(5989488));D.rotation.y=Math.PI/2,D.position.set(x*.5-2.4,10.8,14.1),i.add(D)}n(2.2,1.3,1.2,5.8,12,14.3,4872810);const _t=new B(new Ce(.16,8,8),new ee({color:4052602,emissive:4052602,emissiveIntensity:1}));_t.position.set(5.8,12,13.62),i.add(_t),n(1,1.7,.16,10.2,4.2,14.9,15327952),s(.26,.26,.14,10.2,4.65,14.8,14035002,12).rotation.x=Math.PI/2,s(.26,.26,.14,10.2,3.8,14.8,4052602,12).rotation.x=Math.PI/2;const z=new B(new Fe(15.6,9),new Ae({color:16774864,transparent:!0,opacity:.2,blending:Nn,depthWrite:!1}));z.rotation.x=-Math.PI/2,z.position.set(0,.05,10.4),i.add(z),i.background=new oe(9425906),i.fog=new za(13495024,90,230);const k=dn(16,256,(x,D,V)=>{const dt=x.createLinearGradient(0,0,0,V);dt.addColorStop(0,"#2f8fe0"),dt.addColorStop(.55,"#8fd9f2"),dt.addColorStop(.75,"#e6f6ee"),dt.addColorStop(1,"#e6f6ee"),x.fillStyle=dt,x.fillRect(0,0,D,V)}),ot=new B(new Ce(300,24,16),new Ae({map:k,side:rn,fog:!1}));ot.position.set(0,-20,60),i.add(ot);const it=dn(256,256,(x,D,V)=>{const dt=Ii(21);x.fillStyle="#58b84a",x.fillRect(0,0,D,V);for(let Rt=0;Rt<900;Rt++)x.fillStyle=["#4aa83f","#66c455","#52b146"][Rt%3],x.fillRect(dt()*D,dt()*V,2,5+dt()*5);for(let Rt=0;Rt<26;Rt++)x.fillStyle=["#ffffff","#ffd24d","#ff8fbf"][Rt%3],x.beginPath(),x.arc(dt()*D,dt()*V,2.2,0,6.3),x.fill()},[40,28]),gt=new B(new Fe(320,200),new ee({map:it,roughness:1}));gt.rotation.x=-Math.PI/2,gt.position.set(0,-.03,114),i.add(gt),n(16,.3,1.2,0,0,15.6,10261640);for(let x=0;x<7;x++)n(4.4,.12,3.2,Math.sin(x*.9)*2.6,.04,20+x*5.2,12104356);for(let x=-60;x<=60;x+=3)n(.6,3.2,.3,x,1.6,52,15854034),n(3,.3,.2,x+1.5,2.2,52,15854034);const Lt=new ue,ft=new B(new Ce(1.5,16,12),xt(16734815,{flatShading:!1}));ft.position.set(-9,1.5,26),Lt.add(ft);for(const x of[0,1]){const D=new B(new De(1.5,.12,6,20),xt(16777215));D.position.set(-9,1.5,26),D.rotation.set(x?Math.PI/2:0,x?0:.3,0),Lt.add(D)}[[8,24,16742981,0],[10,24.6,6013163,.3],[9,24.2,16765517,-.2]].forEach(([x,D,V,dt],Rt)=>{const se=new B(new Xt(1.8,1.8,1.8),xt(V));se.position.set(x,.9+(Rt===2?1.8:0),D),se.rotation.y=dt,Lt.add(se)});const St=new ue;St.add(ce(new B(new Xt(4.2,1.4,2),xt(16756768)),{position:new L(0,1.3,0)})),St.add(ce(new B(new Xt(1.5,1.4,2),xt(14035002)),{position:new L(2.4,1.6,0)}));for(const[x,D]of[[-1.3,-1],[-1.3,1],[1.8,-1],[1.8,1]]){const V=new B(new Wt(.5,.5,.3,12),xt(2303531));V.rotation.x=Math.PI/2,V.position.set(x,.5,D),St.add(V)}St.position.set(-1,0,33),St.rotation.y=.6,Lt.add(St);const Dt=new B(new Wt(3.2,3.2,.6,20),xt(4165606));Dt.position.set(14,.3,36),Lt.add(Dt);const Vt=new B(new Wt(2.9,2.9,.65,20),xt(15784352));Vt.position.set(14,.32,36),Lt.add(Vt);const bt=new B(new Wt(.9,.7,1.2,10),xt(16748479));bt.position.set(15.2,1.2,36.6),Lt.add(bt);const Jt=new B(new Xt(.2,.15,1.8),xt(6013163));Jt.position.set(13,.8,35),Jt.rotation.y=.5,Lt.add(Jt);const Yt=new B(new Wt(1.1,1.1,.14,16),xt(10216314));Yt.position.set(-15,.1,40),Lt.add(Yt);for(const x of[-1,1]){const D=new B(new Wt(.12,.12,8,6),xt(11553338));D.position.set(24+x*3.2,4,30),D.rotation.z=-x*.18,Lt.add(D);const V=D.clone();V.position.z=33,Lt.add(V)}const Zt=new B(new Wt(.12,.12,7.6,6),xt(11553338));Zt.rotation.z=Math.PI/2,Zt.position.set(24,7.7,31.5),Lt.add(Zt);for(const x of[-1.2,1.2]){const D=new B(new Wt(.03,.03,6,4),xt(5592405));D.position.set(24+x,4.7,31.5),Lt.add(D)}const H=new B(new Xt(2.6,.2,1),xt(16765517));H.position.set(24,1.7,31.5),Lt.add(H),i.add(Lt);for(let x=0;x<26;x++){const D=(t()-.5)*110,V=22+t()*26;if(Math.abs(D)<6&&V<50)continue;const dt=new B(new sn(1.2+t()*1.2,0),xt([4045656,3121228,5031520][x%3]));if(dt.position.set(D,.8,V),i.add(dt),x%2){const Rt=new B(new sn(.4,0),xt([16742981,16748479,16765517][x%3]));Rt.position.set(D+.4,1.9+t()*.8,V+.5),i.add(Rt)}}const At=150,ut=new Vs(new Wt(.7,1,9,6),xt(7031343),At),mt=new Vs(new sn(1,0),xt(2789194),At),Et=new Vs(new sn(1,0),xt(4045656),At),lt=new Ve;for(let x=0;x<At;x++){let D=(t()-.5)*220;const V=62+t()*70,dt=.9+t()*.9;Math.abs(D-2)<17&&V<102&&(D+=D>2?22:-22),lt.rotation.set(0,t()*6,0),lt.position.set(D,4.5*dt,V),lt.scale.set(dt,dt,dt),lt.updateMatrix(),ut.setMatrixAt(x,lt.matrix),lt.position.set(D,11*dt,V),lt.scale.set(5.5*dt,6.5*dt,5.5*dt),lt.updateMatrix(),mt.setMatrixAt(x,lt.matrix),lt.position.set(D+1.2*dt,15*dt,V-.8),lt.scale.set(3.6*dt,4.2*dt,3.6*dt),lt.updateMatrix(),Et.setMatrixAt(x,lt.matrix)}i.add(ut,mt,Et);const Qt=dn(128,128,x=>{x.fillStyle="#fff6df",x.beginPath(),x.arc(64,64,62,0,6.3),x.fill(),x.fillStyle="#2b3138";for(let D=0;D<12;D++){const V=D/12*6.283;x.beginPath(),x.arc(64+Math.sin(V)*52,64-Math.cos(V)*52,D%3?2.5:4.5,0,6.3),x.fill()}}),ge=new ue;ge.add(new B(new De(1.7,.2,8,30),xt(7031343))),ge.add(new B(new wn(1.7,30),new Ae({map:Qt})));const Le=new ue;Le.add(ce(new B(new Xt(.12,1,.05),xt(2830648)),{position:new L(0,.5,.05)}));const pe=new ue;pe.add(ce(new B(new Xt(.08,1.4,.05),xt(14035002)),{position:new L(0,.7,.1)})),ge.add(Le,pe),ge.position.set(-19.9,10,5),ge.rotation.y=Math.PI/2,i.add(ge);const Ze=dn(512,256,(x,D,V)=>{x.fillStyle="#2c4a3e",x.fillRect(0,0,D,V),x.strokeStyle="rgba(255,255,255,.9)",x.fillStyle="rgba(255,255,255,.9)",x.lineWidth=4,x.lineCap="round",x.font="bold 34px sans-serif",x.fillText("PLAN SECRET",30,50),x.beginPath(),x.arc(110,110,22,0,6.3),x.stroke(),x.beginPath(),x.moveTo(110,132),x.lineTo(110,200),x.moveTo(110,150),x.lineTo(70,175),x.moveTo(110,150),x.lineTo(150,175),x.moveTo(110,200),x.lineTo(85,240),x.moveTo(110,200),x.lineTo(135,240),x.stroke(),x.beginPath(),x.moveTo(190,175),x.lineTo(330,175),x.lineTo(310,155),x.moveTo(330,175),x.lineTo(310,195),x.stroke(),x.beginPath(),x.arc(400,195,7,0,6.3),x.stroke(),x.beginPath(),x.moveTo(400,202),x.lineTo(400,222),x.moveTo(400,208),x.lineTo(390,216),x.moveTo(400,208),x.lineTo(410,216),x.stroke(),x.font="bold 22px sans-serif",x.fillText("ça rétrécit !",310,140)});n(.4,5.6,8.6,19.8,6.5,-4,7031343);const Je=new B(new Fe(8,5),new ee({map:Ze,roughness:.95}));Je.position.set(19.55,6.5,-4),Je.rotation.y=-Math.PI/2,i.add(Je);const cn=new ue;cn.add(ce(new B(new Wt(1.5,1.5,.25,18),xt(11041354)),{position:new L(0,3,0)})),cn.add(ce(new B(new Wt(.22,.4,3,8),xt(8015920)),{position:new L(0,1.5,0)})),cn.add(ce(new B(new Wt(1,.8,.55,12),xt(4876938)),{position:new L(0,3.4,0)})),cn.add(ce(new B(new Wt(.1,.18,1.5,6),xt(7031343)),{position:new L(0,4.35,0)}));for(const[x,D,V,dt,Rt]of[[0,5.5,0,.9,3121228],[-.7,5,.2,.6,4573013],[.7,5.1,-.2,.55,4573013]])cn.add(ce(new B(new sn(dt,0),xt(Rt)),{position:new L(x,D,V)}));cn.position.set(13.5,0,-2.5),i.add(cn),e.push({min:[12,0,-4],max:[15,3.2,-1]});const je=new ue;je.add(ce(new B(new Xt(3,1.1,2),xt(4160176)),{position:new L(0,1.6,0)}));const ln=new B(new Wt(.75,.75,.35,14),xt(2830648));ln.rotation.x=Math.PI/2,ln.position.set(1.8,.75,0),je.add(ln);for(const x of[-.7,.7])je.add(ce(new B(new Xt(2.6,.16,.16),xt(12159576)),{position:new L(-2.2,1.2,x)}));for(const x of[-.7,.7])je.add(ce(new B(new Xt(.16,1.2,.16),xt(8015920)),{position:new L(-.7,.6,x)}));for(const[x,D]of[[-.4,.3],[.3,-.4],[.5,.4]])je.add(ce(new B(new sn(.45,0),xt(16742981)),{position:new L(x,2.35,D)}));je.position.set(-12.5,0,11.5),je.rotation.y=.5,i.add(je),e.push({min:[-15,0,9.5],max:[-10,2.4,13.5]});for(const[x,D,V]of[[-6.4,12.4,16742981],[-5.2,12.8,16748479],[6.6,12.5,16756768],[7.9,12.2,16748479]]){const dt=new B(new Wt(.7,.5,1,10),xt(12740924));dt.position.set(x,.5,D),i.add(dt),s(.04,.04,1.4,x,1.6,D,3116876,5);const Rt=new B(new sn(.55,0),xt(V));Rt.position.set(x,2.45,D),i.add(Rt);const se=new B(new sn(.6,0),xt(4045656));se.position.set(x,1.3,D),i.add(se)}const un=new ue;un.add(ce(new B(new Wt(.8,.9,1.5,12),xt(4045722)),{position:new L(0,.75,0)})),un.add(ce(new B(new Wt(.14,.2,1.8,8),xt(4045722)),{position:new L(1.2,1.5,0),rotation:new mn(0,0,-.9)}));const jn=new B(new De(.6,.08,6,12,Math.PI),xt(3119742));jn.position.set(-.1,1.5,0),un.add(jn),un.position.set(-3.4,0,11.6),un.rotation.y=-.4,i.add(un),e.push({min:[-4.8,0,10.6],max:[-2,1.6,12.6]});for(const[x,D,V,dt]of[[12.2,12,.4,14035002],[12.2,12,1.2,4165606],[13.6,12.2,.4,16765517]])s(.6,.6,.8,x,V,D,dt,12),s(.5,.5,.1,x,V+.45,D,14541802,12);e.push({min:[11.5,0,11.3],max:[14.3,1.6,12.9]});const An=new B(new De(1,.45,8,18),xt(2303531));An.rotation.x=Math.PI/2,An.position.set(16.2,.46,11),i.add(An);const Rn=An.clone();Rn.position.y=1.36,i.add(Rn),e.push({min:[14.7,0,9.5],max:[17.7,1.8,12.5]});const _n=new ue;for(const x of[-2.1,2.1]){const D=new B(new De(1.1,.09,6,22),xt(2303531));D.rotation.y=Math.PI/2,D.position.set(0,1.1,x),_n.add(D)}const vn=(x,D,V)=>{const dt=new L().subVectors(D,x),Rt=new B(new Wt(.07,.07,dt.length(),6),xt(V));Rt.position.copy(x).addScaledVector(dt,.5),Rt.quaternion.setFromUnitVectors(new L(0,1,0),dt.normalize()),_n.add(Rt)},pi=new L(0,1.1,-2.1),Kn=new L(0,1.1,2.1),Ke=new L(0,2.6,-.7),Qn=new L(0,1.2,.2),ws=new L(0,2.7,1.8);vn(pi,Ke,14035002),vn(pi,Qn,14035002),vn(Ke,Qn,14035002),vn(Ke,new L(0,2.7,1.5),14035002),vn(Kn,ws,14035002),vn(Qn,Kn,14035002),_n.add(ce(new B(new Xt(.25,.1,.9),xt(2303531)),{position:new L(0,2.75,-.8)})),_n.add(ce(new B(new Xt(1.4,.1,.1),xt(2303531)),{position:new L(0,3,1.85)})),_n.position.set(18.7,0,7),_n.rotation.z=-.12,i.add(_n);const T=[16765517,16742981,6013163,16748479,10216314];for(const x of[-6.5,6.5])for(let D=0;D<=28;D++){const V=D/28,dt=-18.5+V*37,Rt=11.2-Math.sin(V*Math.PI)*1.5,se=new B(new Ce(.13,8,6),new Ae({color:T[D%5]}));se.position.set(dt,Rt,x),i.add(se)}const X={z:1.2},st=dn(256,512,(x,D,V)=>{x.fillStyle="#2f78a8",x.fillRect(0,0,D,V),x.fillStyle="rgba(0,0,0,0.28)";for(const[Rt,se,Ne,gn]of[[26,250,90,110],[140,250,90,110],[26,380,90,110],[140,380,90,110]])x.fillRect(Rt,se,Ne,gn);x.fillStyle="#3d8dc2";for(const[Rt,se,Ne,gn]of[[32,256,78,98],[146,256,78,98],[32,386,78,98],[146,386,78,98]])x.fillRect(Rt,se,Ne,gn);x.fillStyle="#f5e9c8",x.beginPath(),x.arc(128,130,78,0,6.3),x.fill();const dt=x.createRadialGradient(128,130,4,128,130,70);dt.addColorStop(0,"#fff3b0"),dt.addColorStop(1,"#ffc65a"),x.fillStyle=dt,x.beginPath(),x.arc(128,130,68,0,6.3),x.fill(),x.strokeStyle="#f5e9c8",x.lineWidth=6,x.beginPath(),x.moveTo(128,62),x.lineTo(128,198),x.moveTo(60,130),x.lineTo(196,130),x.stroke()}),Q=new ue;Q.add(ce(new B(new Xt(5.8,8.6,.5),xt(5913894)),{position:new L(0,4.3,.25)}));const q=dn(64,128,(x,D,V)=>{const dt=x.createLinearGradient(0,0,0,V);dt.addColorStop(0,"#fff4c8"),dt.addColorStop(.6,"#ffd890"),dt.addColorStop(1,"#e8a860"),x.fillStyle=dt,x.fillRect(0,0,D,V),x.fillStyle="rgba(120,70,30,.35)",x.fillRect(0,V-14,D,14)});Q.add(ce(new B(new Fe(4.6,7.7),new Ae({map:q})),{position:new L(0,3.95,.08)}));const wt=new ue;wt.position.set(-2.3,0,.45),wt.add(ce(new B(new Xt(4.6,7.7,.3),new ee({map:st,roughness:.6})),{position:new L(2.3,3.95,0)}));const Ut=new B(new Ce(.22,10,8),xt(14725184,{flatShading:!1}));Ut.position.set(3.9,3.7,.3),wt.add(Ut);const Ht=new B(new Wt(.14,.14,.12,10),xt(14725184));Ht.rotation.x=Math.PI/2,Ht.position.set(3.9,3.2,.17),wt.add(Ht);for(const x of[1.2,6.6])wt.add(ce(new B(new Xt(.14,.7,.1),xt(2830648)),{position:new L(.15,x,.19)}));Q.add(wt);const kt=new B(new Fe(4.6,6),new Ae({color:16769696,transparent:!0,opacity:0,blending:Nn,depthWrite:!1}));kt.rotation.x=-Math.PI/2,kt.position.set(0,.07,3.2),Q.add(kt);const ie=dn(128,96,(x,D,V)=>{x.fillStyle="#f0dca8",x.fillRect(0,0,D,V),x.strokeStyle="#6b4a2f",x.lineWidth=5,x.strokeRect(3,3,D-6,V-6),x.fillStyle="#3a2615",x.font="bold 17px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("DÉMARRER",D/2,20),x.fillText("L'ANIMATION",D/2,76)});Q.add(ce(new B(new Xt(2,2.9,.25),xt(5913894)),{position:new L(-3.95,5.2,.13)})),Q.add(ce(new B(new Fe(1.7,1.28),new ee({map:ie,roughness:.9})),{position:new L(-3.95,5.75,.27)}));const y=new ee({color:14035002,emissive:14035002,emissiveIntensity:.6,roughness:.4}),P=new B(new Wt(.42,.46,.22,20),y);P.rotation.x=Math.PI/2,P.position.set(-3.95,4.45,.38),Q.add(P),Q.add(ce(new B(new De(.5,.06,8,20),xt(14725184)),{position:new L(-3.95,4.45,.27)}));const F=dn(256,80,(x,D,V)=>{x.fillStyle="#c9a06c",x.fillRect(0,0,D,V),x.strokeStyle="#6b4a2f",x.lineWidth=6,x.strokeRect(3,3,D-6,V-6),x.fillStyle="#3a2615",x.font="bold 46px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("MAISON",D/2,V/2+2)});Q.add(ce(new B(new Fe(3.2,1),new ee({map:F,roughness:.9})),{position:new L(0,9.4,.12)}));const N=new ue;N.add(ce(new B(new Wt(.4,.4,.9,8),new ee({color:16769162,emissive:16760906,emissiveIntensity:.9})),{position:new L(0,0,0)})),N.add(ce(new B(new Li(.6,.4,8),xt(2830648)),{position:new L(0,.65,0)})),N.add(ce(new B(new Xt(.15,.15,.5),xt(2830648)),{position:new L(0,0,-.35)})),N.position.set(3.7,6.2,.7);const G=new Bs(16767392,40,16,1.8);G.position.copy(N.position),G.position.z+=.8,Q.add(G),Q.add(N);const pt=dn(256,128,(x,D,V)=>{x.fillStyle="#7a5030",x.fillRect(0,0,D,V),x.strokeStyle="#d7b87a",x.lineWidth=5,x.strokeRect(8,8,D-16,V-16),x.fillStyle="#f0dca8",x.font="bold 30px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("BIENVENUE",D/2,V/2+2)}),at=new B(new Fe(4.4,2.2),new ee({map:pt,roughness:1}));at.rotation.x=-Math.PI/2,at.position.set(0,.05,1.7),Q.add(at);const nt=new B(new Wt(.8,.6,1.2,10),xt(12740924));nt.position.set(-3.9,.6,1),Q.add(nt);for(const[x,D,V,dt,Rt]of[[-3.9,2,1,.85,4045656],[-4.3,2.7,.8,.5,16742981],[-3.5,2.8,1.2,.5,16748479]])Q.add(ce(new B(new sn(dt,0),xt(Rt)),{position:new L(x,D,V)}));Q.position.set(-20,0,X.z),Q.rotation.y=Math.PI/2,i.add(Q);const It={ouvrir(x){wt.rotation.y=-x*1.75,kt.material.opacity=.5*x},position:new L(-19.4,0,X.z)},Tt=(x,D)=>x<-12&&D>-3.2&&D<5.8,ne=(x,D,V=.8)=>!Tt(x,D)&&!e.some(dt=>x>dt.min[0]-V&&x<dt.max[0]+V&&D>dt.min[2]-V&&D<dt.max[2]+V),Me=(x=30)=>{for(let D=0;D<x;D++){const V=(t()-.5)*35,dt=-12.5+t()*24;if(ne(V,dt))return[V,dt]}return null},Ie=[12159576,11041354,13213804,9264952];for(let x=0;x<9;x++){const D=Me();if(!D)continue;const V=4+t()*4,dt=new B(new Xt(V,.26,.8+t()*.5),xt(Ie[x%4]));if(dt.position.set(D[0],.14,D[1]),dt.rotation.y=t()*3.14,i.add(dt),x%3===0){const Rt=new B(new Xt(V*.8,.26,.8),xt(Ie[(x+1)%4]));Rt.position.set(D[0]+.4,.41,D[1]+.3),Rt.rotation.y=t()*3.14,i.add(Rt)}}for(let x=0;x<16;x++){const D=Me();if(!D)continue;const V=new B(new sn(.35+t()*.25,0),xt(16052192));V.position.set(D[0],.4,D[1]),V.rotation.set(t()*6,t()*6,t()*6),i.add(V)}for(let x=0;x<9;x++){const D=Me();if(!D)continue;const V=new B(new Fe(1.6,2.1),new ee({color:x%3?16183778:12573938,roughness:1,side:Oe}));V.rotation.set(-Math.PI/2,0,t()*6),V.position.set(D[0],.05+x*.004,D[1]),i.add(V)}const hn=[14035002,4165606,16765517,4045656,2830648];for(let x=0;x<9;x++){const D=Me();if(!D)continue;const V=new B(new wn(.7+t()*1,14),new ee({color:hn[x%5],roughness:.4,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));V.rotation.x=-Math.PI/2,V.scale.set(1+t()*.8,1,1),V.rotation.z=t()*3,V.position.set(D[0],.06,D[1]),i.add(V)}{const x=Me();if(x){const D=new B(new Wt(.7,.7,1.2,12),xt(4165606));D.rotation.z=Math.PI/2,D.position.set(x[0],.7,x[1]),D.rotation.y=.8,i.add(D);const V=new B(new wn(1.6,16),new ee({color:4165606,roughness:.3,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));V.rotation.x=-Math.PI/2,V.scale.set(1.5,1,.9),V.position.set(x[0]+.8,.07,x[1]+.5),i.add(V)}}for(let x=0;x<40;x++){const D=Me();if(!D)continue;const V=new B(new Wt(.06,.06,.6+t()*.5,5),xt(x%3?11581632:13149002));if(V.rotation.set(Math.PI/2,0,t()*6),V.position.set(D[0],.08,D[1]),i.add(V),x%4===0){const dt=new B(new Wt(.2,.2,.16,6),xt(9081241));dt.position.set(D[0]+.5,.1,D[1]-.3),i.add(dt)}}for(let x=0;x<4;x++){const D=Me();if(!D)continue;const V=new ue;V.add(ce(new B(new Wt(.11,.11,2.4,8),xt(12159576)),{rotation:new mn(0,0,Math.PI/2),position:new L(0,.12,0)})),V.add(ce(new B(new Xt(.5,.5,.9),xt(x%2?14035002:7239554)),{position:new L(-1.2,.25,0)})),V.position.set(D[0],0,D[1]),V.rotation.y=t()*6,i.add(V)}for(let x=0;x<2;x++){const D=Me();if(!D)continue;for(let dt=0;dt<3;dt++){const Rt=new B(new De(.9-dt*.2,.1,6,18),xt(x?16756768:2830648));Rt.rotation.x=Math.PI/2,Rt.position.set(D[0],.1+dt*.18,D[1]),i.add(Rt)}const V=new B(new De(2.2,.1,6,16,1.6),xt(x?16756768:2830648));V.rotation.x=Math.PI/2,V.position.set(D[0]+1.6,.1,D[1]+.4),V.rotation.z=t()*6,i.add(V)}for(let x=0;x<3;x++){const D=Me();if(!D)continue;const V=new B(new De(.42,.18,8,14),xt([16765517,16742981,6013163][x]));V.rotation.x=Math.PI/2,V.position.set(D[0],.2,D[1]),i.add(V)}for(let x=0;x<4;x++){const D=Me();if(!D)continue;const V=new B(new Li(1.4+t()*.8,.7,9),xt(14729871));V.position.set(D[0],.3,D[1]),i.add(V);for(let dt=0;dt<5;dt++){const Rt=new B(new De(.28,.05,5,10,4.5),xt(15718312));Rt.rotation.set(t()*3,t()*3,t()*3),Rt.position.set(D[0]+(t()-.5)*3,.15,D[1]+(t()-.5)*3),i.add(Rt)}}for(let x=0;x<3;x++){const D=Me();if(!D)continue;const V=new ue;V.add(ce(new B(new Xt(2.4,1.6,2),xt(13148268)),{position:new L(0,.8,0)}));for(const dt of[-1,1])V.add(ce(new B(new Xt(2.4,.08,1),xt(11569752)),{position:new L(0,1.9,dt*1.3),rotation:new mn(dt*.9,0,0)}));V.position.set(D[0],0,D[1]),V.rotation.set(0,t()*6,(t()-.5)*.2),i.add(V)}for(let x=0;x<5;x++){const D=Me();if(!D)continue;const V=new B(new Xt(1.3,.6,.65),xt(11883834));V.position.set(D[0],.3+(x===4?.6:0),D[1]),V.rotation.y=t()*6,i.add(V)}{const x=Me();if(x){const D=new B(new Ce(.5,12,10),xt(14217290,{flatShading:!1}));D.position.set(x[0],.5,x[1]),i.add(D)}}for(let x=0;x<7;x++){const D=Me();if(!D)continue;const V=new B(new Xt(.7,.7,.7),xt([16742981,6013163,10216314,16765517][x%4]));V.position.set(D[0],.35,D[1]),V.rotation.y=t()*6,i.add(V)}for(let x=0;x<4;x++){const D=new B(new Xt(.9,7-x*.5,.25),xt(Ie[x]));D.position.set(-.8+x*1,3.4,-14.5+x*.05),D.rotation.z=.12+x*.03,D.rotation.x=-.12,i.add(D)}const Se=140,Xe=new Float32Array(Se*3),ti=[];for(let x=0;x<Se;x++)ti.push([(t()-.5)*36,1+t()*14,(t()-.5)*26,t()*6.28]);const Qe=new Ba(new ze().setAttribute("position",new $e(Xe,3)),new qr({map:$a(),color:16773312,size:.5,transparent:!0,opacity:.7,blending:Nn,depthWrite:!1}));Qe.frustumCulled=!1,i.add(Qe),cg(i,[J,we,wt,Le,pe,te]);function Dn(x){const D=Qe.geometry.attributes.position;ti.forEach((V,dt)=>D.setXYZ(dt,V[0]+Math.sin(x*.2+V[3])*1.4,V[1]+Math.sin(x*.3+V[3])*.8,V[2]+Math.cos(x*.25+V[3])*1.2)),D.needsUpdate=!0,te.rotation.z=Math.sin(x*.6)*.012,Ot.material.emissiveIntensity=.4+Math.abs(Math.sin(x*2.2))*.9,O.material.opacity=.08+Math.sin(x*.4)*.025,y.emissiveIntensity=.45+Math.abs(Math.sin(x*3))*.9,de.visible&&de.scale.set(1+Math.sin(x*9)*.03,1,1+Math.sin(x*9)*.03),pe.rotation.z=-x*.6,Le.rotation.z=-x*.05+1}return{scene:i,colliders:e,maj:Dn,depart:new L(1,0,3),porteMaison:{x:-18.6,z:X.z},maisonApi:It,machineApi:W,limites:ug,limiterCamera:lg,nom:"Le grenier du professeur Mousse"}}const nn=(i,t={})=>xt(i,{flatShading:!1,roughness:.72,...t}),Pe=(i,t,e=16,n=12)=>new B(new Ce(i,e,n),t),ci=(i,t,e,n=6,s=12)=>new B(new Ks(i,t,n,s),e);function ye(i,t,e,n,s=1,r=1,o=1){return i.position.set(t,e,n),i.scale.set(s,r,o),i}function su(i){const{jambe:t,torse:e,large:n,teteR:s,peau:r,cheveux:o,haut:a,bas:c,chaussure:l,enfant:u,lunettes:h=!1,moustache:d=!1,sac:f=!1,barbe:g=!1}=i,_=new ue,m=nn(r),p=nn(a),E=nn(c),S=nn(o,{roughness:.9}),v=nn(l),O=nn(16777215,{roughness:.5}),A=nn(new oe(r).multiplyScalar(.82).getHex()),C=t,R=t+e,w=ci(n*.86,e*.5,p);ye(w,0,C+e*.5,0,1,1,.8),_.add(w);const M=Pe(n*.8,p);ye(M,0,C+e*.2,n*.12,1,.8,.85),_.add(M);const I=new B(new Wt(n*.78,n*.82,.1,18),E);I.scale.z=.82,I.position.set(0,C+.03,0),_.add(I);const j=new B(new Xt(.1,.07,.03),nn(14725184,{metalness:.5}));j.position.set(0,C+.03,n*.66),_.add(j);const Z=new B(new De(s*.42,.045,8,18),p);Z.rotation.x=Math.PI/2,Z.position.set(0,R+.01,0),_.add(Z);const tt=new B(new Wt(s*.24,s*.28,.14,12),m);tt.position.set(0,R+.04,0),_.add(tt);const Y=new ue;Y.position.set(0,R+.05,0),_.add(Y);const K=s*.95;Y.add(ye(Pe(s,m,28,20),0,K,0,1,.97,.96)),Y.add(ye(Pe(s*.7,m,20,14),0,K-s*.4,s*.2,1,.78,.88));for(const J of[-1,1]){Y.add(ye(Pe(s*.28,m),J*s*.5,K-s*.27,s*.6,1,.9,.7)),Y.add(ye(Pe(s*.19,m),J*s*.98,K-.01,0,.45,1,.8)),Y.add(ye(Pe(s*.11,A),J*s*.99,K-.01,.01,.35,.8,.6));const rt=u?1.18:.9,vt=J*s*.37,Ct=K+s*.05,Pt=s*.84;Y.add(ye(Pe(s*.21*rt,O),vt,Ct,Pt,1,1.12,.55)),Y.add(ye(Pe(s*.125*rt,nn(4861724)),vt+J*.004,Ct-.005,Pt+s*.08*rt,1,1,.5)),Y.add(ye(Pe(s*.07*rt,new Ae({color:1182213})),vt+J*.004,Ct-.005,Pt+s*.105*rt,1,1,.5)),Y.add(ye(Pe(s*.035*rt,new Ae({color:16777215})),vt+.025,Ct+.035,Pt+s*.13*rt)),Y.add(ye(Pe(s*.22*rt,A),vt,Ct+s*.1*rt,Pt-.012,1,.38,.55));const Ot=ci(s*.035,s*.24,S,4,8);Ot.rotation.z=Math.PI/2+J*(u?-.12:.05),Ot.position.set(vt,Ct+s*.3,Pt-.005),Y.add(Ot),u&&Y.add(ye(Pe(s*.09,new Ae({color:16748442,transparent:!0,opacity:.55})),J*s*.55,K-s*.2,s*.8,1.3,.8,.3))}Y.add(ye(Pe(s*.13,m),0,K-s*.14,s*.95,1,.9,.9)),Y.add(ye(Pe(s*.075,A),-s*.1,K-s*.18,s*.9)),Y.add(ye(Pe(s*.075,A),s*.1,K-s*.18,s*.9));const ht=new B(new De(s*.2,.014,6,16,Math.PI),new Ae({color:9059115}));ht.rotation.z=Math.PI,ht.position.set(0,K-s*.36,s*.92),Y.add(ht);const $=ye(Pe(s*.15,new Ae({color:4854800})),0,K-s*.47,s*.9,1,1.15,.4);if($.visible=!1,Y.add($),d)for(const J of[-1,1]){const rt=ci(s*.05,s*.26,S,4,8);rt.rotation.z=Math.PI/2+J*.18,rt.position.set(J*s*.15,K-s*.27,s*.95),Y.add(rt)}if(g&&Y.add(ye(Pe(s*.72,new Ae({color:3877406,transparent:!0,opacity:.35}),20,14),0,K-s*.4,s*.2,1.01,.8,.9)),h){for(const rt of[-1,1]){const vt=new B(new De(s*.24,.018,6,20),nn(2830648,{metalness:.4}));vt.position.set(rt*s*.37,K+s*.05,s*.93),Y.add(vt)}const J=new B(new Xt(s*.2,.02,.02),nn(2830648));J.position.set(0,K+s*.08,s*.95),Y.add(J)}const Mt=new B(new Ce(s*1.04,22,14,0,Math.PI*2,0,Math.PI*(u?.56:.5)),S);Mt.position.set(0,K+.01,-.03),Mt.rotation.x=-.3,Y.add(Mt);const yt=u?[[0,.98,.1],[-.35,.92,.1],[.35,.92,.1],[-.7,.7,.05],[.7,.7,.05],[-.2,.85,-.3],[.25,.85,-.3],[0,.8,-.55]]:[[0,.95,.05],[-.4,.85,.05],[.4,.85,.05],[0,.8,-.4]];for(const[J,rt,vt]of yt){const Ct=new B(new Li(s*(u?.17:.13),s*(u?.55:.28),8),S);Ct.position.set(J*s,K+rt*s,vt*s),Ct.rotation.set(.35+vt*.8,0,-J*1.2),Y.add(Ct)}for(const J of[-.6,-.3,0,.3,.6])Y.add(ye(Pe(s*.17,S,10,8),J*s,K+s*.78,s*(.58-Math.abs(J)*.25),1,.7,.8));for(const J of[-1,1])Y.add(ye(new B(new Xt(.05,s*.34,.07),S),J*s*.9,K-s*.02,s*.25));const zt=e*.92,Bt=n*.27,Gt=[-1,1].map(J=>{const rt=new ue;rt.add(ye(Pe(Bt*1.25,p),0,0,0)),rt.add(ye(ci(Bt,zt*.34,p),0,-zt*.26,0));const vt=new ue;vt.position.set(0,-zt*.47,0),vt.rotation.x=-.12,rt.add(vt),vt.add(ye(ci(Bt*.8,zt*.3,m),0,-zt*.2,0));const Ct=new ue;Ct.position.set(0,-zt*.53,.01),vt.add(Ct),Ct.add(ye(Pe(Bt*.95,m),0,-.05,0,.9,1.1,.85)),Ct.add(ye(Pe(Bt*.4,m),J*Bt*.8,-0,Bt*.3));for(let Pt=0;Pt<4;Pt++)Ct.add(ye(ci(Bt*.17,Bt*.5,m,3,6),(Pt-1.5)*Bt*.4,-Bt*1.2,Bt*.1));return rt.position.set(J*(n+Bt*.9),R-.07,0),rt.userData.main=Ct,_.add(rt),rt}),ct=[-1,1].map(J=>{const rt=new ue;rt.add(ye(ci(n*.4,t*.3,E),0,-t*.26,0)),rt.add(ye(Pe(n*.38,E),0,-t*.5,.02)),rt.add(ye(ci(n*.33,t*.26,E),0,-t*.7,0));const vt=ye(Pe(n*.45,v),0,-t+.1,.07,1,.62,1.7);rt.add(vt),rt.add(ye(Pe(n*.3,O),0,-t+.09,n*.58,1,.65,.9));const Ct=new B(new Xt(n*.88,.05,n*1.55),O);Ct.position.set(0,-t+.03,.09),rt.add(Ct);for(let Pt=0;Pt<3;Pt++){const Ot=new B(new Xt(n*.5,.025,.035),O);Ot.position.set(0,-t+.17+Pt*.012,n*(.18+Pt*.1)),Ot.rotation.x=-.4,rt.add(Ot)}return rt.position.set(J*n*.46,C,0),_.add(rt),rt});if(f){const J=nn(3123310),rt=nn(2062928),vt=new B(new Xt(n*1.5,e*.9,.3),J);vt.position.set(0,C+e*.55,-n*.8),_.add(vt),_.add(ye(Pe(n*.75,J),0,C+e*1,-n*.8,1,.45,.35));const Ct=new B(new Xt(n*1,e*.35,.12),rt);Ct.position.set(0,C+e*.35,-n*.8-.2),_.add(Ct);const Pt=new B(new Xt(n*1,.02,.02),nn(16765517));Pt.position.set(0,C+e*.5,-n*.8-.26),_.add(Pt);const Ot=new B(new De(.12,.025,6,12,Math.PI),rt);Ot.position.set(0,C+e*1.1,-n*.8),_.add(Ot);for(const re of[-1,1]){const Kt=new B(new Xt(.09,e*.9,.05),rt);Kt.position.set(re*n*.52,C+e*.6,n*.1),Kt.rotation.x=0,_.add(Kt);const de=new B(new Xt(.09,.05,n*1.7),rt);de.position.set(re*n*.52,R-.02,-n*.3),_.add(de)}}return _.userData={jambes:ct,bras:Gt,tete:Y,bouche:$,sourire:ht,mains:Gt.map(J=>J.userData.main),hauteurTete:R+.05+K},_}function fg({echelle:i=1}={}){const t=su({jambe:.58,torse:.52,large:.3,teteR:.4,peau:15316362,cheveux:4861724,haut:16747069,bas:3895221,chaussure:14035002,enfant:!0,sac:!0});return t.scale.setScalar(i),t}function dg({echelle:i=1}={}){const t=su({jambe:.86,torse:.78,large:.36,teteR:.3,peau:14986626,cheveux:3877406,haut:4039245,bas:7035464,chaussure:5913894,enfant:!1,lunettes:!0,moustache:!0,barbe:!0}),e=new B(new Xt(.2,.2,.04),nn(11569744));e.position.set(.2,1.35,.3),t.add(e);const n=new B(new Wt(.013,.013,.16,6),nn(14035002));return n.position.set(.22,1.47,.3),t.add(n),t.scale.setScalar(i),t}function Ta({grain:i=!1}={}){const t=new ue,e=xt(1907224,{flatShading:!1}),n=new B(new Ce(.9,10,8),e);n.scale.set(1.5,1,1),n.position.set(-1.5,1.1,0);const s=new B(new Ce(.62,10,8),e);s.position.set(0,1.2,0);const r=new B(new Ce(.58,10,8),e);r.position.set(1,1.25,0),t.add(n,s,r);const o=[];for(let a=0;a<3;a++)for(const c of[-1,1]){const l=new B(new Wt(.06,.05,1.5,4),e);l.position.set(-.9+a*.9,.6,c*.5),l.rotation.x=c*.6,t.add(l),o.push({p:l,c,i:a})}for(const a of[-1,1]){const c=new B(new Wt(.04,.04,1.1,4),e);c.position.set(1.5,1.8,a*.3),c.rotation.set(a*.4,0,-.7),t.add(c)}if(i){const a=new B(new Ks(.34,1.3,4,8),xt(16776688,{flatShading:!1}));a.rotation.z=Math.PI/2,a.position.set(.3,2.35,0),t.add(a)}return t.userData.pattes=a=>{for(const{p:c,c:l,i:u}of o)c.rotation.z=Math.sin(a*9+u*2.1+(l>0?0:Math.PI))*.35},t}function pg(){const i=new ue,t=new B(new Ce(2.6,16,12,0,Math.PI*2,0,Math.PI/2),xt(14035002,{flatShading:!1}));t.scale.set(1.25,1,1),t.position.y=.6,i.add(t);const e=xt(1907224,{flatShading:!1}),n=new B(new Ce(1,10,8),e);n.position.set(3.4,1,0),i.add(n);const s=new B(new Xt(.1,.1,5),e);s.position.set(0,3.2,0),s.rotation.y=Math.PI/2,s.visible=!1,i.add(s);for(const[r,o]of[[-1.4,1.2],[-1.4,-1.2],[.4,1.5],[.4,-1.5],[1.7,.8],[1.7,-.8]]){const a=new B(new Ce(.46,8,6),e);a.position.set(r,Math.sqrt(Math.max(.1,6.76-(r/1.25)**2-o*o))+.35,o),i.add(a)}for(const r of[-1,1])for(let o=0;o<3;o++){const a=new B(new Wt(.1,.08,2.2,4),e);a.position.set(-1.2+o*1.5,.5,r*2.4),a.rotation.x=r*.9,i.add(a)}return i}const Ri=3,yi=.42*Ri,Do=1.8*Ri,mg=62,gg=22,xg=1.3;function _g({scene:i,colliders:t,depart:e,limites:n,limiterCamera:s}){let r={scene:i,colliders:t,limites:n,limiterCamera:s};const o=fg({echelle:Ri});o.position.copy(e),i.add(o);const a=e.clone(),c=new L;let l=!0,u=0,h=0,d=2.6;const f={yaw:0,pitch:.42,distance:17};function g(R){return a.x+yi>R.min[0]&&a.x-yi<R.max[0]&&a.y+Do>R.min[1]&&a.y<R.max[1]&&a.z+yi>R.min[2]&&a.z-yi<R.max[2]}function _(R,w){if(w){a[R]+=w;for(const M of r.colliders){if(M.rond||!g(M))continue;const I=R==="x"?0:R==="y"?1:2;R==="y"?(w<0?(a.y=M.max[1],l=!0):a.y=M.min[1]-Do,c.y=0):w>0?a[R]=M.min[I]-yi-.001:a[R]=M.max[I]+yi+.001}}}function m(R,w){for(const M of r.colliders){if(!M.rond||a.y>=M.haut||a.y+Do<=(M.bas||0))continue;let I=M.x,j=M.z;if(M.x2!==void 0){const ht=M.x2-M.x,$=M.z2-M.z,Mt=ht*ht+$*$||1,yt=Math.max(0,Math.min(1,((a.x-M.x)*ht+(a.z-M.z)*$)/Mt));I=M.x+ht*yt,j=M.z+$*yt}let Z=a.x-I,tt=a.z-j;const Y=Math.hypot(Z,tt),K=M.r+yi;if(!(Y>=K)){if(!M.mur){if(R>=M.haut-.02&&c.y<=0){a.y=M.haut,c.y=0,l=!0;continue}if(w&&M.haut-a.y<=xg){a.y=M.haut,c.y=0,l=!0;continue}}Y<1e-4?(Z=1,tt=0):(Z/=Y,tt/=Y),a.x=I+Z*K,a.z=j+tt*K}}}function p(R,w,M,I=0){o.parent&&o.parent.remove(o),r={scene:R.scene,colliders:R.colliders,limites:R.limites,limiterCamera:R.limiterCamera},r.scene.add(o),a.set(w,0,M),u=I,c.set(0,0,0),d=0,l=!0,o.position.copy(a),o.rotation.set(0,I,0)}function E(R,w,M){const I=w.actif("sprinter"),j=(w.actif("avancer")?1:0)-(w.actif("reculer")?1:0),Z=(w.actif("droite")?1:0)-(w.actif("gauche")?1:0),tt=I?24:14,Y=-Math.sin(f.yaw),K=-Math.cos(f.yaw),ht=Y*j+Math.cos(f.yaw)*Z,$=K*j-Math.sin(f.yaw)*Z,Mt=Math.hypot(ht,$),yt=Mt>.01;if(yt){c.x=ht/Mt*tt,c.z=$/Mt*tt;let rt=Math.atan2(ht/Mt,$/Mt)-u;for(;rt>Math.PI;)rt-=Math.PI*2;for(;rt<-Math.PI;)rt+=Math.PI*2;u+=rt*Math.min(1,R*12)}else c.x=0,c.z=0;l&&w.vient("sauter")&&(c.y=gg,l=!1),c.y-=mg*R;const zt=a.y,Bt=l;l=!1,_("x",c.x*R),_("z",c.z*R),_("y",c.y*R),m(zt,Bt),a.y<=0&&(a.y=0,c.y=0,l=!0),a.x=Math.min(r.limites.xMax,Math.max(r.limites.xMin,a.x)),a.z=Math.min(r.limites.zMax,Math.max(r.limites.zMin,a.z)),o.position.copy(a),o.rotation.y=u;const Gt=o.userData;yt&&l&&(h+=R*(I?15:10));const ct=yt&&l?Math.sin(h)*(I?.9:.6):0;return Gt.jambes[0].rotation.x=ct,Gt.jambes[1].rotation.x=-ct,Gt.bras[0].rotation.x=-ct*.9,Gt.bras[1].rotation.x=ct*.9,d>0&&!yt?(d-=R,Gt.bras[1].rotation.z=-2.5+Math.sin(M*11)*.35,Gt.bras[1].rotation.x=0,Gt.tete.rotation.z=Math.sin(M*3)*.08):(d=Math.min(d,0),Gt.bras[1].rotation.z=0,Gt.tete.rotation.z=0),l||(Gt.bras[0].rotation.x=-2.4,Gt.bras[1].rotation.x=-2.4,Gt.jambes[0].rotation.x=.4,Gt.jambes[1].rotation.x=-.3),o.position.y+=yt&&l?Math.abs(Math.sin(h))*.06*Ri:0,{bouge:yt,auSol:l,sprint:I}}function S(R,w){const M=f.distance,I=Math.sin(f.pitch),j=a.y+1.5*Ri,Z=Math.max(.45,Math.cos(f.pitch));let tt=a.x+Math.sin(f.yaw)*Z*M,Y=Math.max(a.y+1.2,j+I*M),K=a.z+Math.cos(f.yaw)*Z*M;[tt,Y,K]=r.limiterCamera(tt,Y,K);const ht=a.x,$=a.y+1.4*Ri,Mt=a.z,yt=(Gt,ct,J)=>r.colliders.some(rt=>{if(!rt.rond)return Gt>rt.min[0]-.6&&Gt<rt.max[0]+.6&&ct>rt.min[1]-.6&&ct<rt.max[1]+.6&&J>rt.min[2]-.6&&J<rt.max[2]+.6;if(!rt.cam||ct>rt.haut+.6)return!1;let vt=rt.x,Ct=rt.z;if(rt.x2!==void 0){const Pt=rt.x2-rt.x,Ot=rt.z2-rt.z,re=Math.max(0,Math.min(1,((Gt-rt.x)*Pt+(J-rt.z)*Ot)/(Pt*Pt+Ot*Ot||1)));vt=rt.x+Pt*re,Ct=rt.z+Ot*re}return Math.hypot(Gt-vt,J-Ct)<rt.r+.6});for(let Gt=1;Gt<=10;Gt++){const ct=Gt/10;if(yt(ht+(tt-ht)*ct,$+(Y-$)*ct,Mt+(K-Mt)*ct)){const J=Math.max(.05,(Gt-1)/10);tt=ht+(tt-ht)*J,Y=$+(Y-$)*J,K=Mt+(K-Mt)*J;break}}const zt=Math.min(1,w*9);R.position.x+=(tt-R.position.x)*zt,R.position.y+=(Y-R.position.y)*zt,R.position.z+=(K-R.position.z)*zt;const Bt=f.pitch<0?Math.tan(Math.min(1.2,-f.pitch*1.15))*Math.hypot(R.position.x-a.x,R.position.z-a.z):0;R.lookAt(a.x,a.y+1.4*Ri+Bt,a.z)}function v(R,w,M=1){f.yaw-=R*.006*M,f.pitch=Math.min(1.3,Math.max(-1.15,f.pitch+w*.005*M))}function O(R){f.distance=Math.min(24,Math.max(7,f.distance+R*.015))}function A(R,w,M){a.set(R,0,w),u=M,c.set(0,0,0),d=0,o.position.copy(a),o.rotation.y=M}function C(R,w){return R!==void 0&&(f.yaw=R),w!==void 0&&(f.pitch=w),{yaw:f.yaw,pitch:f.pitch,distance:f.distance}}return{hero:o,pos:a,maj:E,camera:S,tourner:v,zoom:O,etat:C,placer:A,changerMonde:p}}const Gr=[{id:"avancer",nom:"Avancer"},{id:"gauche",nom:"Aller à gauche"},{id:"reculer",nom:"Reculer"},{id:"droite",nom:"Aller à droite"},{id:"sauter",nom:"Sauter"},{id:"sprinter",nom:"Sprinter"},{id:"agir",nom:"Agir (bouton, porte)"},{id:"corde",nom:"Prendre la corde",bientot:!0}],vg={avancer:["KeyW","ArrowUp"],gauche:["KeyA","ArrowLeft"],reculer:["KeyS","ArrowDown"],droite:["KeyD","ArrowRight"],sauter:["Space",null],sprinter:["ShiftLeft",null],agir:["KeyE",null],corde:[null,null]};function Zr(){return Object.fromEntries(Object.entries(vg).map(([i,t])=>[i,[...t]]))}function ru(i){const t=Zr();if(i&&typeof i=="object")for(const e of Gr){const n=i[e.id];Array.isArray(n)&&(t[e.id]=[0,1].map(s=>typeof n[s]=="string"&&n[s].length<24?n[s]:null))}return t}let zr=null;typeof navigator<"u"&&navigator.keyboard&&navigator.keyboard.getLayoutMap&&navigator.keyboard.getLayoutMap().then(i=>{zr=i}).catch(()=>{});const cl={Space:"Espace",ShiftLeft:"Maj",ShiftRight:"Maj",ControlLeft:"Ctrl",ControlRight:"Ctrl",AltLeft:"Alt",AltRight:"Alt",Enter:"Entrée",Tab:"Tab",Backspace:"Retour",ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→"};function ou(i){return i?cl[i]?cl[i]:zr&&zr.get(i)?zr.get(i).toUpperCase():i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):i.startsWith("Numpad")?"Pavé "+i.slice(6):i:""}function Mg(i){const t=new Set,e=new Set,n=new Set,s=new Set;let r=!1;const o=u=>{t.delete(u.code)},a=u=>{r||(t.has(u.code)||e.add(u.code),t.add(u.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(u.code)&&u.preventDefault())},c=()=>{t.clear(),e.clear()};return window.addEventListener("keydown",a),window.addEventListener("keyup",o),window.addEventListener("blur",c),{actif:u=>n.has(u)||(i()[u]||[]).some(h=>h&&t.has(h)),vient(u){const h=i()[u]||[];return s.has(u)||h.some(d=>d&&e.has(d))},finImage(){e.clear(),s.clear()},forcer(u,h){r||(h?n.add(u):n.delete(u))},declencher(u){r||s.add(u)},bloquer(u){r=u,u&&(c(),n.clear(),s.clear())},detruire(){window.removeEventListener("keydown",a),window.removeEventListener("keyup",o),window.removeEventListener("blur",c)}}}function yg(i,t,e,n){const s=ru(i);for(const r of Gr)if(!r.bientot)for(let o=0;o<2;o++)s[r.id][o]===n&&(s[r.id][o]=null);return s[t][e]=n,s}const Sg={xMin:-160,xMax:160,zMin:-146,zMax:150},wg=new zi,bg=new mn,Eg=new L,Tg=new L;function be(i,t,e,n=0,s=0,r=0,o=1,a=o,c=o){return new _e().compose(Eg.set(i,t,e),wg.setFromEuler(bg.set(n,s,r,"YXZ")),Tg.set(o,a,c))}function Us(i,t,e,n){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new Va(s);return r.colorSpace=xn,n&&(r.wrapS=r.wrapT=Xs,r.repeat.set(n[0],n[1]),r.anisotropy=4),r}const ll=(i,t,e,n)=>{const s=n[0]-e[0],r=n[1]-e[1],o=Math.max(0,Math.min(1,((i-e[0])*s+(t-e[1])*r)/(s*s+r*r||1)));return Math.hypot(i-(e[0]+s*o),t-(e[1]+r*o))};function Ag({leger:i=!1}={}){const t=new Xl,e=i?.5:1,n=y=>Math.max(1,Math.round(y*e)),s=Ii(4242),r=(y,P)=>y+s()*(P-y),o=[],a=Sg,c=new L(0,0,0),l=[[[0,-30],[-8,-62],[8,-105],[0,-144]],[[-30,5],[-58,12],[-84,2],[-104,-6]],[[30,-4],[55,-10],[78,6],[92,22]],[[4,30],[12,62],[2,100],[0,140]]],u=11,h={x:124,z:34,r:30},d={x:-124,z:-8},f={x:78,z:-92,r:50},g=(y,P)=>{let F=1e9;for(const N of l)for(let G=0;G<N.length-1;G++)F=Math.min(F,ll(y,P,N[G],N[G+1]));return F},_=(y,P,F=0)=>Math.hypot(y,P)<46+F||g(y,P)<u+F||Math.hypot(y-h.x,P-h.z)<h.r+5+F||Math.hypot(y-d.x,P-d.z)<17+F,m=(y,P,F=14)=>y>a.xMin-F&&y<a.xMax+F&&P>a.zMin-F&&P<a.zMax+F;function p(y,P,F,N,G={}){m(y,P)&&o.push({rond:!0,x:y,z:P,r:F,haut:N,...G})}function E(y,P,F,N,G,pt,at={}){(m(y,P)||m(F,N))&&o.push({rond:!0,x:y,z:P,x2:F,z2:N,r:G,haut:pt,...at})}const S=(y,P,F)=>F.x2===void 0?Math.hypot(y-F.x,P-F.z):ll(y,P,[F.x,F.z],[F.x2,F.z2]),v=(y,P,F)=>!o.some(N=>N.rond&&S(y,P,N)<N.r+F+1.2);function O(y,{zone:P=null,essais:F=50,etendue:N=212,solide:G=!0}={}){for(let pt=0;pt<F;pt++){let at,nt;if(P){const It=s()*6.283,Tt=Math.sqrt(s())*P.r;at=P.x+Math.cos(It)*Tt,nt=P.z+Math.sin(It)*Tt}else at=r(-N,N),nt=r(-N,N);if(!(nt<-150&&Math.abs(at)<165)&&!_(at,nt,y)&&!(G&&!v(at,nt,y)))return[at,nt]}return null}const A=13496063;t.background=new oe(A),t.fog=new Oa(A,.0014);const C=Us(8,256,(y,P,F)=>{const N=y.createLinearGradient(0,0,0,F);N.addColorStop(0,"#1668d8"),N.addColorStop(.3,"#3d95ee"),N.addColorStop(.5,"#8fd0fa"),N.addColorStop(.62,"#cdeeff"),N.addColorStop(1,"#cdeeff"),y.fillStyle=N,y.fillRect(0,0,P,F)}),R=new B(new Ce(2400,32,20),new Ae({map:C,side:rn,fog:!1,depthWrite:!1}));R.renderOrder=-10,t.add(R);const w=new L(.5,.7,.5).normalize(),M=$a();for(const[y,P,F]of[[1100,16773552,.55],[460,16776160,1],[250,16777215,1]]){const N=new ym(new ql({map:M,color:P,opacity:F,transparent:!0,fog:!1,depthWrite:!1,blending:Nn}));N.scale.setScalar(y),N.position.copy(w).multiplyScalar(2100),N.renderOrder=-9,t.add(N)}const I=[],j=new sn(1,1);for(let y=0;y<20;y++){const P=s()*6.283,F=r(500,1700),N=Math.cos(P)*F,G=Math.sin(P)*F,pt=r(620,900),at=r(.8,1.7);for(let nt=0;nt<6;nt++){const It=j.clone();It.applyMatrix4(be(N+(nt-2.5)*46*at+r(-14,14),pt+r(-10,14)+(nt===2||nt===3?16*at:0),G+r(-26,26),0,s()*6,0,r(46,74)*at,r(22,34)*at,r(38,60)*at)),It.deleteAttribute("uv"),I.push(It)}}const Z=new B(Ws(I,!1),new Ae({color:16777215,fog:!1}));Z.renderOrder=-8,t.add(Z),t.add(new eu(14676479,5929530,1.15));const tt=new iu(16774095,1.7);tt.position.copy(w).multiplyScalar(300),t.add(tt);const Y=Us(1024,1024,(y,P)=>{const F=Ii(7);y.fillStyle="#5c8a3a",y.fillRect(0,0,P,P);const N=["#4a7630","#6a9a44","#78a04a","#557f34","#86ac4e","#42702c"];for(let G=0;G<700;G++)y.fillStyle=N[G%6],y.globalAlpha=.25+F()*.3,y.beginPath(),y.ellipse(F()*P,F()*P,8+F()*46,5+F()*30,F()*3,0,6.3),y.fill();y.globalAlpha=1;for(let G=0;G<4e3;G++){y.strokeStyle=["#a0b05a","#c0c86a","#3b6226","#8aa048"][G%4],y.lineWidth=1.2,y.globalAlpha=.45;const pt=F()*P,at=F()*P,nt=F()*6.3;y.beginPath(),y.moveTo(pt,at),y.lineTo(pt+Math.cos(nt)*(5+F()*12),at+Math.sin(nt)*(5+F()*12)),y.stroke()}y.globalAlpha=1;for(let G=0;G<70;G++)y.fillStyle=["#ffffff","#ffe27a","#ff9fc4"][G%3],y.beginPath(),y.arc(F()*P,F()*P,2.2,0,6.3),y.fill()},[40,40]),K=new B(new Fe(4e3,4e3),new ee({map:Y,roughness:1}));K.rotation.x=-Math.PI/2,t.add(K);const ht=440,$=2048/ht,Mt=Us(2048,2048,y=>{const P=Ii(31),F=pt=>(pt+ht/2)*$,N=pt=>(pt+ht/2)*$;y.lineCap="round",y.lineJoin="round";const G=(pt,at,nt,It)=>{for(const[Tt,ne]of[[1.25,.2],[1.1,.3],[1,.45],[.82,.55]])y.globalAlpha=ne,y.fillStyle=It,y.beginPath(),y.arc(F(pt),N(at),nt*Tt*$,0,6.3),y.fill()};G(0,0,38,"#b79866"),G(d.x,d.z,20,"#8a6a48"),G(h.x,h.z,h.r+7,"#9a8658");for(const pt of l)for(const[at,nt]of[[1.3,.2],[1.12,.3],[1,.45],[.8,.55]]){y.globalAlpha=nt,y.strokeStyle="#b79866",y.lineWidth=u*1.7*at*$,y.beginPath(),y.moveTo(F(pt[0][0]*.6),N(pt[0][1]*.6));for(const It of pt)y.lineTo(F(It[0]),N(It[1]));y.stroke()}y.globalAlpha=.5;for(let pt=0;pt<2600;pt++){const at=(P()-.5)*ht,nt=(P()-.5)*ht;(Math.hypot(at,nt)<38||g(at,nt)<u*.8)&&(y.fillStyle=["#8f7448","#d2ba8a","#a58a5c"][pt%3],y.beginPath(),y.ellipse(F(at),N(nt),1.5+P()*3.5,1+P()*2.5,P()*3,0,6.3),y.fill())}y.globalAlpha=1}),yt=new B(new Fe(ht,ht),new ee({map:Mt,transparent:!0,roughness:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));yt.rotation.x=-Math.PI/2,yt.position.y=.02,t.add(yt);const zt=Us(256,512,(y,P,F)=>{const N=Ii(11);y.fillStyle="#5d4531",y.fillRect(0,0,P,F);for(let G=0;G<160;G++){y.strokeStyle=N()>.5?"rgba(30,18,10,.5)":"rgba(150,115,80,.35)",y.lineWidth=2+N()*5;const pt=N()*P;y.beginPath(),y.moveTo(pt,0),y.bezierCurveTo(pt+(N()-.5)*30,F*.3,pt+(N()-.5)*30,F*.6,pt+(N()-.5)*20,F),y.stroke()}for(let G=0;G<70;G++)y.fillStyle=`rgba(${70+N()*40},${120+N()*50},50,${.25+N()*.3})`,y.beginPath(),y.ellipse(N()*P,F*(.45+N()*.55),6+N()*26,10+N()*40,0,0,6.3),y.fill()},[3,2]),Bt=new ee({map:zt,roughness:1}),Gt=[],ct=[];function J(y,P,F,N=.05,G=Gt){const pt=y.index?y.toNonIndexed():y.clone();pt.applyMatrix4(F),pt.deleteAttribute("uv");const at=pt.attributes.position.count,nt=new Float32Array(at*3),It=new oe(P);It.offsetHSL((s()-.5)*N,(s()-.5)*N,(s()-.5)*N);for(let Tt=0;Tt<at;Tt++)nt.set([It.r,It.g,It.b],Tt*3);pt.setAttribute("color",new $e(nt,3)),G.push(pt)}const rt=new Ce(1,7,5),vt=new Wt(1,1,1,8),Ct=new sn(1,1),Pt=new wn(1,12).rotateX(-Math.PI/2),Ot=new Di(ag,5);Ot.rotateX(-Math.PI/2);const re=new Ce(1,14,6,0,6.2832,0,Math.PI*.55),Kt=new wn(1,14).rotateX(Math.PI/2),de=new Wt(1,1,1,4),W=new ue,we=new B(new Xt(330,9,300),new ee({color:13618112,roughness:1,flatShading:!0}));we.position.y=4.5,W.add(we);const ae=new B(new Wt(98,74,84,30),new ee({color:4876938,roughness:.45}));ae.position.y=51,W.add(ae);const le=new B(new De(98,7,8,36),new ee({color:5996451,roughness:.4}));le.rotation.x=Math.PI/2,le.position.y=93,W.add(le);const qt=new B(new wn(94,30),new ee({color:4863268,roughness:1}));qt.rotation.x=-Math.PI/2,qt.position.y=91,W.add(qt);const te=(y,P,F)=>new L(y,P,F),jt=new ee({color:7031343,roughness:1,flatShading:!0});for(const[y,P,F]of[[[te(0,100,0),te(-20,170,6),te(12,250,-8),te(36,320,4),te(24,380,0)],26,9],[[te(-18,168,6),te(-52,196,10),te(-88,214,8)],10,4],[[te(12,250,-8),te(46,268,-16),te(80,286,-20)],9,4],[[te(30,310,4),te(-6,322,-8),te(-30,318,-10)],7,3]])W.add(new B(rg(y,P,F,8).geometrie,jt));for(const[y,P,F,N,G,pt,at]of[[-92,226,8,58,22,48,3121228],[84,298,-20,60,23,50,4573013],[24,396,0,76,30,64,3121228],[-34,332,-10,48,19,42,4573013],[10,270,20,40,16,34,4045656]]){const nt=new B(new sn(1,2),new ee({color:at,roughness:.9,flatShading:!0}));nt.position.set(y,P,F),nt.scale.set(N,G,pt),W.add(nt);for(let It=0;It<5;It++){const Tt=new B(j,new ee({color:It%2?16747051:16740261})),ne=s()*6.28;Tt.position.set(y+Math.cos(ne)*N*.7,P+G*.55,F+Math.sin(ne)*pt*.7),Tt.scale.setScalar(5),W.add(Tt)}}W.children.forEach(y=>{y!==we&&y!==ae&&y!==le&&y!==qt&&(y.position.y-=13)}),W.position.set(0,0,-300),t.add(W),o.push({min:[-165,0,-450],max:[165,9,-150]});const U=Us(512,512,(y,P)=>{for(let F=0;F<6;F++)y.fillStyle=["#b98a5e","#ad7e52","#c2925f"][F%3],y.fillRect(F*86,0,84,512),y.fillStyle="rgba(0,0,0,0.3)",y.fillRect(F*86+84,0,2,512)},[12,1]);new B(new Fe(2800,520),new Ae({map:U}));const b=new B(new Fe(620,330),new Ae({color:2759956}));b.position.set(0,165,438),b.rotation.y=Math.PI,t.add(b);for(const[y,P,F,N]of[[44,360,-332,180],[44,360,332,180],[708,44,0,352],[2840,40,0,540]]){const G=new B(new Xt(y,P,30),new Ae({color:7031343}));G.position.set(F,N,432),t.add(G)}for(const[y,P,F,N,G]of[[-98,-58,-42,-96,11],[58,72,120,98,9],[-126,72,-66,112,10]]){const pt=Math.hypot(F-y,N-P),at=Math.atan2(N-P,F-y),nt=new B(new Wt(G,G*1.08,pt,16),Bt);nt.rotation.set(0,-at,Math.PI/2,"YXZ"),nt.position.set((y+F)/2,G*.92,(P+N)/2),t.add(nt);for(const[It,Tt,ne]of[[y,P,-1],[F,N,1]]){const Me=new B(new wn(G*1.02,16),new ee({color:13213804,roughness:1}));Me.position.set(It+Math.cos(at)*.1*ne,G*.92,Tt+Math.sin(at)*.1*ne),Me.rotation.y=-at+(ne>0?Math.PI/2:-Math.PI/2),t.add(Me)}for(let It=0;It<6;It++){const Tt=s();J(rt,6199868,be(y+(F-y)*Tt,G*1.85,P+(N-P)*Tt,0,0,0,r(4,8),1.4,r(4,8)),.06)}E(y,P,F,N,G,G*1.9,{cam:!0})}function et(y,P,F,N,G,pt){const at=new sn(1,2),nt=at.attributes.position;for(let Tt=0;Tt<nt.count;Tt++){const ne=nt.getX(Tt),Me=nt.getY(Tt),Ie=nt.getZ(Tt),hn=.86+.2*Math.sin(ne*4.1+Me*3.3+Ie*5.7+y)*Math.cos(Me*2.9-Ie*3.7+ne*1.3);nt.setXYZ(Tt,ne*hn,Math.min(Me*hn,.78),Ie*hn)}at.computeVertexNormals();const It=.5+s()*.18;J(at,new oe(It,It*.99,It*.94),be(y,N*.3,P,0,s()*6,0,F,N,G),.02),pt&&J(rt,6199868,be(y,N*1.02,P,0,0,0,F*.62,N*.12,G*.62),.05),p(y,P,(F+G)*.4,N*1.06,{cam:F>6})}for(let y=0;y<14;y++){const P=r(8,20),F=O(P+2);F&&et(F[0],F[1],P,r(7,15),P*r(.8,1.2),!0)}for(let y=0;y<n(55);y++){const P=r(3,6.5),F=O(P+1);F&&et(F[0],F[1],P,r(1.5,3.3),P*r(.8,1.15),y%3===0)}for(let y=0;y<n(80);y++){const P=r(18,58),F=r(.55,1.2),N=s()*3.14,G=O(3);if(!G)continue;const pt=Math.cos(N)*P/2,at=Math.sin(N)*P/2,nt=G[0]-pt,It=G[1]-at,Tt=G[0]+pt,ne=G[1]+at;_(nt,It,2)||_(Tt,ne,2)||!v(nt,It,F)||!v(Tt,ne,F)||!v(G[0]+pt/2,G[1]+at/2,F)||!v(G[0]-pt/2,G[1]-at/2,F)||(J(vt,7031343,be(G[0],F,G[1],Math.PI/2,Math.PI/2-N,0,F,P,F),.04),J(rt,8017462,be(nt,F,It,0,0,0,F),.03),J(rt,8017462,be(Tt,F,ne,0,0,0,F),.03),E(nt,It,Tt,ne,F,F*1.95))}for(let y=0;y<n(20);y++){const P=r(2.6,4),F=O(P+1);if(!F)continue;const N=s()*6;J(rt,11894842,be(F[0],P*.9,F[1],0,N,1.2,P*1.1,P*.8,P*.8),.03),J(rt,7031338,be(F[0]+Math.cos(N)*P*.55,P*1.05,F[1],0,N,1.2,P*.6,P*.7,P*.7),.03),p(F[0],F[1],P*.9,P*1.7)}const _t=[14038318,16747069,11037242,16748479,15253578];function z(y,P,F,N,G){const pt=r(-.1,.1),at=2.2+N*.12;if(J(vt,16051416,be(y,F/2,P,pt,0,pt,at,F,at),.03),J(re,G,be(y,F-.5,P,pt,0,pt,N,N*.62,N),.04),J(Kt,15259824,be(y,F-.6,P,pt,0,pt,N*.98,1,N*.98),.02),G===14038318||G===16747069)for(let nt=0;nt<9;nt++){const It=s()*6.28,Tt=r(.15,.95);J(rt,16777215,be(y+Math.cos(It)*N*Math.sin(Tt)*.98,F-.5+N*.62*Math.cos(Tt)-.2,P+Math.sin(It)*N*Math.sin(Tt)*.98,0,0,0,N*.13,N*.05,N*.13),.01)}p(y,P,at+.4,F,{cam:!0})}for(let y=0;y<13;y++){const P=.75+y/13*4.783,F=24+y%3*9,N=d.x+Math.cos(P)*F,G=d.z+Math.sin(P)*F;v(N,G,4)&&z(N,G,r(18,40),r(10,20),_t[y%5])}for(let y=0;y<n(24);y++){const P=O(6);if(!P)continue;const F=1+Math.floor(s()*3),N=_t[y%5];for(let G=0;G<F;G++){const pt=P[0]+(G?r(-11,11):0),at=P[1]+(G?r(-11,11):0);G&&(_(pt,at,4)||!v(pt,at,4))||z(pt,at,r(10,30)*(G?.7:1),r(6,15)*(G?.75:1),N)}}const k=[16747051,16740261,16777215,11566335,16765517,16734815];function ot(y,P,F){const N=r(35,85),G=r(-.16,.16),pt=s()*6.28;J(vt,4168261,be(y+Math.sin(G)*N*.5*Math.cos(pt),N/2,P+Math.sin(G)*N*.5*Math.sin(pt),0,0,0,.9,N,.9),.05);const at=y+Math.sin(G)*N*Math.cos(pt),nt=P+Math.sin(G)*N*Math.sin(pt),It=r(5,9);for(let Tt=0;Tt<9;Tt++){const ne=Tt/9*6.28;J(rt,F,be(at+Math.cos(ne)*It*.95,N+.4,nt+Math.sin(ne)*It*.95,0,-ne,.15,It*.62,It*.17,It*.32),.04)}J(rt,16761370,be(at,N+1.2,nt,0,0,0,It*.34),.03);for(let Tt=0;Tt<2;Tt++)J(rt,4565068,be(y+(Tt?5:-5),N*(.25+Tt*.2),P,0,0,Tt?-.7:.7,8,.8,2.6),.05);p(y,P,1.1,14)}for(let y=0;y<n(60);y++){const P=O(2.5,{zone:f});P&&ot(P[0],P[1],k[y%6])}for(let y=0;y<n(45);y++){const P=O(2.5);P&&ot(P[0],P[1],k[y%6])}for(let y=0;y<n(50);y++){const P=O(2);if(!P)continue;const F=r(6,9),N=r(24,36);for(let G=0;G<3;G++){const pt=G/3*6.28+.4;J(rt,5222474,be(P[0]+Math.cos(pt)*F,N+F*.2,P[1]+Math.sin(pt)*F,0,0,0,F*1.2,F*.22,F*1.2),.05)}J(vt,4168261,be(P[0],N/2,P[1],0,0,0,.7,N,.7),.03),p(P[0],P[1],.9,14)}const it=()=>new L(s()-.5,s()-.5,s()-.5).normalize();for(let y=0;y<n(18);y++){const P=O(2);if(!P)continue;const F=r(30,60);J(vt,5417040,be(P[0],F/2,P[1],0,0,0,.7,F,.7),.03);for(let N=0;N<22;N++){const G=it();J(de,16053486,be(P[0]+G.x*6,F+G.y*6,P[1]+G.z*6,G.z*1.4,0,-G.x*1.4,.18,6,.18),.01)}J(rt,15261888,be(P[0],F,P[1],0,0,0,2.2),.01),p(P[0],P[1],.9,14)}function gt(y,P){const F=new _s,N=14;F.moveTo(0,0);for(let at=1;at<=N;at++){const nt=at/N,It=P*Math.sin(Math.PI*Math.pow(nt,.7));F.lineTo(nt*y-1,It*(at%2?1:.55))}for(let at=N;at>=1;at--){const nt=at/N,It=P*Math.sin(Math.PI*Math.pow(nt,.7));F.lineTo(nt*y-1,-It*(at%2?1:.55))}F.closePath();const G=new Di(F),pt=G.attributes.position;for(let at=0;at<pt.count;at++)pt.setZ(at,-Math.pow(pt.getX(at)/y,2)*y*.38);return G}const Lt=[gt(60,7),gt(80,9),gt(48,6)];for(let y=0;y<n(44);y++){const P=O(16,{solide:!1});if(!P)continue;const F=7+Math.floor(s()*4),N=r(.7,1.1),G=[3116858,4038726,5026389][y%3];for(let pt=0;pt<F;pt++){const at=pt/F*6.28+s()*.4;J(Lt[pt%3],G,new _e().multiplyMatrices(be(P[0],.5,P[1],0,-at,0,N),new _e().makeRotationZ(r(.55,1.15))),.06)}}const ft=[14254635,12735789,15250506,9416252,7049018,11027242],St=(y,P)=>Math.hypot(y-h.x,P-h.z)<h.r+8;for(let y=0;y<n(150);y++){const P=r(-212,212),F=r(-212,212);if(St(P,F))continue;const N=r(3,7);for(let G=0;G<3;G++)J(Pt,[6263872,6987334,5605946][G],be(P+r(-N,N),.035+(y+G)%5*.004,F+r(-N,N),0,s()*6,0,N*r(.6,1.1),1,N*r(.6,1.1)),.04,ct)}for(let y=0;y<n(220);y++){const P=r(-212,212),F=r(-212,212);if(g(P,F)<5||St(P,F))continue;const N=r(10,26);J(Ot,ft[y%6],be(P,.06+y%9*.005,F,0,s()*6.28,0,N,N,N),.06,ct)}for(let y=0;y<n(420);y++){const P=r(-212,212),F=r(-212,212),N=r(.3,.7),G=.5+s()*.25;J(Ct,new oe(G,G*.98,G*.92),be(P,N*.15,F,0,s()*6,0,N*1.3,N*.55,N),.02)}const Dt=new B(new wn(h.r,40),new ee({color:5218264,roughness:.05,metalness:.55,transparent:!0,opacity:.88}));Dt.rotation.x=-Math.PI/2,Dt.position.set(h.x,.12,h.z),t.add(Dt);const Vt=[];for(let y=0;y<3;y++){const P=new B(new Yr(.92,1,40),new Ae({color:16777215,transparent:!0,opacity:.5,side:Oe,depthWrite:!1}));P.rotation.x=-Math.PI/2,P.position.set(h.x+r(-12,12),.2,h.z+r(-12,12)),t.add(P),Vt.push({o:P,ph:y/3})}for(let y=0;y<7;y++){const P=s()*6.28,F=r(4,h.r-8),N=h.x+Math.cos(P)*F,G=h.z+Math.sin(P)*F,pt=r(4,7);if(J(Pt,4038726,be(N,.3,G,0,0,0,pt,1,pt),.05),y%2===0){for(let at=0;at<6;at++){const nt=at/6*6.28;J(rt,16752580,be(N+Math.cos(nt)*1.4,1.2,G+Math.sin(nt)*1.4,0,-nt,.5,1.6,.5,.9),.03)}J(rt,16765517,be(N,1.4,G,0,0,0,.8),.02)}}p(h.x,h.z,h.r-1.5,200,{mur:!0});const bt=new B(Ws(Gt,!1),new ee({vertexColors:!0,roughness:.85,side:Oe}));t.add(bt);const Jt=new B(Ws(ct,!1),new ee({vertexColors:!0,roughness:1,side:Oe,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));t.add(Jt);const Yt={value:0};function Zt(){const P=[],F=[],N=[];for(let pt=0;pt<=6;pt++){const at=pt/6,nt=.5*(1-Math.pow(at,1.6))+.02,It=at*at*.35;P.push(-nt,at,It,nt,at,It);const Tt=new oe().lerpColors(new oe(2910760),new oe(10935390),Math.pow(at,.8));if(F.push(Tt.r,Tt.g,Tt.b,Tt.r,Tt.g,Tt.b),pt<6){const ne=pt*2;N.push(ne,ne+1,ne+2,ne+1,ne+3,ne+2)}}const G=new ze;return G.setAttribute("position",new ve(P,3)),G.setAttribute("color",new ve(F,3)),G.setIndex(N),G.computeVertexNormals(),G}const H=new ee({vertexColors:!0,roughness:.8,side:Oe});H.onBeforeCompile=y=>{y.uniforms.uT=Yt,y.vertexShader=`uniform float uT;
${y.vertexShader}`.replace("#include <begin_vertex>",`vec3 transformed = vec3(position);
      float ph = instanceMatrix[3].x * 0.06 + instanceMatrix[3].z * 0.045;
      float amp = position.y * position.y;
      transformed.x += sin(uT * 1.6 + ph) * 2.4 * amp;
      transformed.z += cos(uT * 1.2 + ph * 1.3) * 1.2 * amp;`)};const At=n(9e3),ut=new Vs(Zt(),H,At),mt=new Ve;let Et=0;function lt(y,P,F,N,G,pt){for(let at=0;at<F&&Et<At;at++){const nt=s()*6.28,It=Math.sqrt(s())*N,Tt=y+Math.cos(nt)*It,ne=P+Math.sin(nt)*It;_(Tt,ne,1)||(mt.position.set(Tt,0,ne),mt.rotation.set(r(-.3,.3),s()*6.28,r(-.3,.3)),mt.scale.set(r(1.4,2.6),r(G,pt),1),mt.updateMatrix(),ut.setMatrixAt(Et++,mt.matrix))}}for(let y=0;y<26;y++){const P=-.6+y/26*4.6;lt(h.x+Math.cos(P)*(h.r+9),h.z+Math.sin(P)*(h.r+9),n(26),5,34,66)}for(let y=0;y<n(260)&&Et<At;y++){const P=O(4,{solide:!1,etendue:222});P&&lt(P[0],P[1],18+Math.floor(s()*28),r(5,14),14,44)}ut.count=Et,ut.frustumCulled=!1,t.add(ut);const Qt=new Vs(new Ce(1,10,8),new ee({color:14677759,transparent:!0,opacity:.5,roughness:.05,metalness:.4}),n(260));for(let y=0;y<Qt.count;y++){const P=r(-200,200),F=r(-200,200),N=g(P,F)<u||Math.hypot(P,F)<20?0:r(.35,.8);mt.position.set(P,N*.7,F),mt.rotation.set(0,0,0),mt.scale.set(N,N*.8,N),mt.updateMatrix(),Qt.setMatrixAt(y,mt.matrix)}t.add(Qt);const ge=3.6,Le=4.5,pe=6,Ze=20;function Je(y){return y.map((P,F)=>{const N=y[Math.max(0,F-1)],G=y[Math.min(y.length-1,F+1)],pt=G[0]-N[0],at=G[1]-N[1],nt=Math.hypot(pt,at)||1;return[P[0]-at/nt*Le,P[1]+pt/nt*Le]})}const cn=l.map(y=>Je(y)),je=l.map(y=>Je([...y].reverse())),ln=[],un=[];let jn=!1;function An(y,P){const F={rond:!0,x:0,z:0,x2:0,z2:0,r:.75*P,haut:-1,cam:!1,mesh:y,ech:P,cap:0,actif:!1};return o.push(F),ln.push(F),F}function Rn(y,P,F,N,G,pt){y.actif=!0,y.cap=N,y.cx=P,y.cz=F,y.haut=1.9*y.ech;const at=Math.cos(N),nt=Math.sin(N);y.x=P-at*1.6*y.ech,y.z=F-nt*1.6*y.ech,y.x2=P+at*1*y.ech,y.z2=F+nt*1*y.ech,y.mesh.visible=!0,y.mesh.position.set(P,0,F),y.mesh.rotation.y=-N,pt&&y.mesh.userData.pattes&&y.mesh.userData.pattes(G)}function _n(y,P,F,N,G,pt){const at={x:P,z:F,cap:N,chemin:G,etape:"retour",file:[],hist:[[P,F]],corps:An(y,y.scale.x),suiveuses:[],bouge:!1};for(let nt=0;nt<pt;nt++){const It=Ta({grain:nt%2===0});It.scale.setScalar(ge),It.visible=!1,t.add(It),at.suiveuses.push(An(It,ge))}return un.push(at),at}function vn(y){y.etape==="aller"?(y.etape="retour",y.file=je[y.chemin].map(P=>[...P])):(y.etape="aller",y.file=cn[y.chemin].map(P=>[...P]))}function pi(y,P,F){y.bouge=!1,y.file.length||vn(y);const N=y.file[0],G=N[0]-y.x,pt=N[1]-y.z;if(Math.hypot(G,pt)<2.5){y.file.shift();return}let nt=Math.atan2(pt,G)-y.cap;for(;nt>Math.PI;)nt-=Math.PI*2;for(;nt<-Math.PI;)nt+=Math.PI*2;y.cap+=Math.sign(nt)*Math.min(Math.abs(nt),1.9*P);const It=pe*P*(Math.abs(nt)>.9?.25:1),Tt=y.x+Math.cos(y.cap)*It,ne=y.z+Math.sin(y.cap)*It;if(jn&&Math.hypot(Tt,ne)<56&&Math.hypot(Tt,ne)<Math.hypot(y.x,y.z))return;const Me=y.x+Math.cos(y.cap)*8,Ie=y.z+Math.sin(y.cap)*8;let hn=F&&Math.hypot(Me-F.x,Ie-F.z)<6&&F.y<7;if(!hn){for(const Xe of ln)if(!(!Xe.actif||Xe===y.corps||y.suiveuses.includes(Xe))&&Math.hypot(Me-Xe.cx,Ie-Xe.cz)<7.5){hn=!0;break}}if(hn)return;y.x=Tt,y.z=ne,y.bouge=!0;const Se=y.hist[y.hist.length-1];Math.hypot(y.x-Se[0],y.z-Se[1])>=1&&(y.hist.push([y.x,y.z]),y.hist.length>Ze*(y.suiveuses.length+1)+6&&y.hist.shift())}const Kn=i?2:3;for(let y=0;y<Kn;y++){const P=Ta({grain:!0});P.scale.setScalar(ge),t.add(P);const F=je[y][0],N=je[y][1],G=_n(P,F[0],F[1],Math.atan2(N[1]-F[1],N[0]-F[0]),y,2);G.file=je[y].slice(1).map(pt=>[...pt])}let Ke=null;function Qn(){if(!Ke)return;const y=un.indexOf(Ke);y>=0&&un.splice(y,1);for(const P of[o,ln]){const F=P.indexOf(Ke.corps);F>=0&&P.splice(F,1)}t.remove(Ke.corps.mesh),Ke=null}function ws(y){Qn(),t.add(y);const P=Kn%l.length;Ke=_n(y,y.position.x,y.position.z,-y.rotation.y,P,0),Ke.etape="aller";const F=Math.atan2(y.position.z,y.position.x);let N=Math.atan2(cn[P][0][1],cn[P][0][0]);for(;N<F;)N+=Math.PI*2;N-F>Math.PI&&(N-=Math.PI*2);const G=Math.max(2,Math.ceil(Math.abs(N-F)/.3));Ke.file=[];for(let pt=1;pt<=G;pt++){const at=F+(N-F)*pt/G;Ke.file.push([Math.cos(at)*19,Math.sin(at)*19])}Ke.file.push(...cn[P].map(pt=>[...pt]))}const T=[];for(let y=0;y<3;y++){const P=O(13);if(!P)continue;const F=pg();F.scale.setScalar(1.6),t.add(F);const N=An(F,1);N.r=4.4,T.push({co:N,cx:P[0],cz:P[1],ph:s()*6})}const X=[],st=new _s;st.moveTo(0,0),st.bezierCurveTo(8,10,22,12,20,2),st.bezierCurveTo(22,-10,8,-12,0,0);for(let y=0;y<5;y++){const P=new ue,F=[16747051,16740261,7321599,16765517,11566335][y],N=[];for(const pt of[-1,1]){const at=new ue,nt=new B(new Di(st),new ee({color:F,side:Oe,roughness:.6}));nt.rotation.x=-Math.PI/2,nt.scale.x=pt,nt.rotation.z=pt>0?0:Math.PI,at.add(nt),P.add(at),N.push(at)}const G=new B(new Ks(1.4,9,4,8),new ee({color:3811866}));G.rotation.x=Math.PI/2,P.add(G),P.scale.setScalar(1.1),t.add(P),X.push({g:P,ailes:N,cx:r(-90,90),cz:r(-90,90),ph:s()*6,haut:r(46,96)})}const Q=n(420),q=new Float32Array(Q*3),wt=[];for(let y=0;y<Q;y++)wt.push([r(-170,170),r(4,120),r(-170,170),s()*6.28]);const Ut=new Ba(new ze().setAttribute("position",new $e(q,3)),new qr({map:M,color:16776160,size:1.8,transparent:!0,opacity:.7,depthWrite:!1}));Ut.frustumCulled=!1,t.add(Ut);let Ht=null;function kt(y,P){const F=Ht===null?0:Math.min(.1,Math.max(0,y-Ht));Ht=y,Yt.value=y,Z.rotation.y=y*.004;for(const N of un)pi(N,F,P),Rn(N.corps,N.x,N.z,N.cap,y,N.bouge),N.suiveuses.forEach((G,pt)=>{const at=N.hist.length-1-(pt+1)*Ze;if(at<1)return;const nt=N.hist[at],It=N.hist[at+1];Rn(G,nt[0],nt[1],Math.atan2(It[1]-nt[1],It[0]-nt[0]),y+pt*.7,N.bouge)});for(const N of T){const G=y*.12+N.ph;Rn(N.co,N.cx+Math.cos(G)*4,N.cz+Math.sin(G)*4,G+Math.PI/2,y,!1),N.co.haut=5,N.co.x2=N.co.x=N.co.cx,N.co.z2=N.co.z=N.co.cz}for(const N of X){const G=y*.25+N.ph,pt=N.cx+Math.sin(G)*50,at=N.cz+Math.cos(G*.8)*40,nt=N.haut+Math.sin(G*2.3)*12;N.g.position.set(pt,nt,at),N.g.rotation.y=Math.atan2(Math.cos(G)*50,-Math.sin(G*.8)*32)-Math.PI/2;const It=Math.sin(y*14+N.ph)*.9;N.ailes[0].rotation.z=It,N.ailes[1].rotation.z=-It}for(let N=0;N<Q;N++){const G=wt[N];q[N*3]=G[0]+Math.sin(y*.2+G[3])*8,q[N*3+1]=G[1]+Math.sin(y*.3+G[3]*2)*4,q[N*3+2]=G[2]+Math.cos(y*.25+G[3])*8}Ut.geometry.attributes.position.needsUpdate=!0;for(const N of Vt){const G=(y*.3+N.ph)%1;N.o.scale.setScalar(2+G*16),N.o.material.opacity=.5*(1-G)}}return{nom:"Le jardin géant",scene:t,colliders:o,limites:a,maj:kt,depart:c,limiterCamera:(y,P,F)=>[Math.min(a.xMax+30,Math.max(a.xMin-30,y)),Math.min(220,Math.max(.9,P)),Math.min(a.zMax+30,Math.max(a.zMin-30,F))],adopter:ws,retirerVedette:Qn,calme:y=>{jn=y}}}function au(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}function Rg({racine:i,clavier:t}){if(!au())return{actif:!1};i.classList.add("tactile"),i.insertAdjacentHTML("beforeend",`
    <div class="tactile-ui" id="tactile-ui">
      <div class="joystick" id="joy"><div class="pouce" id="pouce"></div></div>
      <div class="boutons-tactiles">
        <button class="bt" id="t-sprint">Sprint</button>
        <button class="bt grand" id="t-saut">Sauter</button>
      </div>
    </div>
    <div class="tourne" id="tourne"><p>Tourne ton téléphone à l’horizontale pour jouer</p></div>`);const e=i.querySelector("#joy"),n=i.querySelector("#pouce"),s=56;let r=null,o={x:0,y:0};const a=(g,_)=>{t.forcer("droite",g>.3),t.forcer("gauche",g<-.3),t.forcer("reculer",_>.3),t.forcer("avancer",_<-.3)},c=g=>{let _=g.clientX-o.x,m=g.clientY-o.y;const p=Math.hypot(_,m);p>s&&(_=_/p*s,m=m/p*s),n.style.transform=`translate(${_}px, ${m}px)`,a(_/s,m/s)};e.addEventListener("pointerdown",g=>{g.preventDefault(),r=g.pointerId;const _=e.getBoundingClientRect();o={x:_.left+_.width/2,y:_.top+_.height/2};try{e.setPointerCapture(r)}catch{}c(g)}),e.addEventListener("pointermove",g=>{g.pointerId===r&&c(g)});const l=g=>{g.pointerId===r&&(r=null,n.style.transform="",a(0,0))};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l);const u=i.querySelector("#t-saut");u.addEventListener("pointerdown",g=>{g.preventDefault(),t.declencher("sauter"),t.forcer("sauter",!0)});const h=()=>t.forcer("sauter",!1);u.addEventListener("pointerup",h),u.addEventListener("pointercancel",h),u.addEventListener("pointerleave",h);const d=i.querySelector("#t-sprint");d.addEventListener("pointerdown",g=>{g.preventDefault(),t.forcer("sprinter",!0),d.classList.add("appuye")});const f=()=>{t.forcer("sprinter",!1),d.classList.remove("appuye")};return d.addEventListener("pointerup",f),d.addEventListener("pointercancel",f),d.addEventListener("pointerleave",f),{actif:!0,montrer(g){i.querySelector("#tactile-ui").style.display=g?"":"none"}}}const Uo=Symbol("annule"),Ge=i=>i<.5?2*i*i:1-(-2*i+2)**2/2,$t=(i,t,e)=>new L(i,t,e);function Cg({scene:i,garage:t,joueur:e,moteur:n,son:s,voix:r,racine:o,clavier:a,surFin:c}){const{maisonApi:l,machineApi:u}=t,h=$a();let d=!1,f=!1,g=0,_=null,m=null,p=null,E=i,S=0,v=0,O=null,A="foret";const C=()=>(p||(p=Ag({leger:au()}),n.renderer.compile(p.scene,n.camera)),p),R=new Set,w=new Set,M=[],I={pos:$t(0,0,0),look:$t(0,0,0),posC:$t(0,0,0),lookC:$t(0,0,0)};o.insertAdjacentHTML("beforeend",`
    <div class="cine" id="cine" hidden>
      <div class="bande haut"></div><div class="bande bas"></div>
      <div class="sous-titre" id="st" hidden><b id="st-nom"></b><span id="st-texte"></span></div>
      <button class="bouton secondaire petit" id="cine-passer">Passer l'animation</button>
      <div class="flash" id="cine-flash"></div>
      <div class="noir" id="cine-noir"><p id="cine-carte"></p></div>
    </div>`);const j=z=>o.querySelector(z),Z=j("#cine"),tt=j("#st"),Y=j("#cine-flash"),K=j("#cine-noir"),ht=()=>{if(f)throw Uo};function $(z,k){return new Promise(ot=>{if(f){ot();return}R.add({t:0,dur:Math.max(.001,z),fn:k,res:ot})}).then(ht)}const Mt=z=>$(z),yt=(z,k,ot=!1)=>{I.posC.copy(z),I.lookC.copy(k),ot&&(I.pos.copy(z),I.look.copy(k))};function zt(z,k){if(d){k!==void 0&&(v=k),g+=z;for(const ot of[...R]){ot.t+=z;const it=Math.min(1,ot.t/ot.dur);ot.fn&&ot.fn(it),it>=1&&(R.delete(ot),ot.res())}for(const ot of[...w])ot(z,g)===!1&&w.delete(ot);p&&E===p.scene&&p.maj(v,e.hero.position),I.pos.lerp(I.posC,1-Math.exp(-z*2.6)),I.look.lerp(I.lookC,1-Math.exp(-z*3.4)),n.camera.position.copy(I.pos),S>0&&(n.camera.position.x+=(Math.random()-.5)*S*1.2,n.camera.position.y+=(Math.random()-.5)*S*1.2,S=Math.max(0,S-z*1.4)),n.camera.lookAt(I.look)}}const Bt=z=>{z.userData.jambes.forEach(k=>{k.rotation.x=0})};function Gt(z,k,ot,it=7,gt=!0){const Lt=z.position,ft=k-Lt.x,St=ot-Lt.z,Dt=Math.hypot(ft,St),Vt=Math.atan2(ft,St),bt=Lt.x,Jt=Lt.z,Yt=z.rotation.y;let Zt=Vt-Yt;for(;Zt>Math.PI;)Zt-=Math.PI*2;for(;Zt<-Math.PI;)Zt+=Math.PI*2;const H=Math.max(.05,Dt/it),At=z.userData;return $(H,ut=>{Lt.x=bt+ft*ut,Lt.z=Jt+St*ut,z.rotation.y=Yt+Zt*Math.min(1,ut*H/.35);const mt=g*(it>7?14:10),Et=Math.sin(mt);At.jambes[0].rotation.x=Et*.7,At.jambes[1].rotation.x=-Et*.7,gt&&(At.bras[0].rotation.x=-Et*.55,At.bras[1].rotation.x=Et*.55),Lt.y=Math.abs(Et)*.09}).then(()=>{Bt(z),Lt.y=0})}function ct(z,k,ot,it=.5){const gt=z.rotation.y;let Lt=Math.atan2(k-z.position.x,ot-z.position.z)-gt;for(;Lt>Math.PI;)Lt-=Math.PI*2;for(;Lt<-Math.PI;)Lt+=Math.PI*2;return $(it,ft=>{z.rotation.y=gt+Lt*Ge(ft)})}function J(z,k,ot,it=.5){const gt=z[k];return $(it,Lt=>{z[k]=gt+(ot-gt)*Ge(Lt)})}const rt=z=>z.localToWorld($t(0,z.userData.hauteurTete,.2));function vt(z,k){const ot=z.userData,it=(gt,Lt)=>{if(!k.v)return ot.bouche.visible=!1,ot.sourire.visible=!0,!1;const ft=Math.sin(Lt*16)>.1;return ot.bouche.visible=ft,ot.sourire.visible=!ft,!0};w.add(it)}async function Ct(z,k,ot,it){j("#st-nom").textContent=z,j("#st-texte").textContent=ot,tt.hidden=!1;const gt={v:!0};vt(k,gt),await r.dire(ot,it),gt.v=!1,ht(),tt.hidden=!0,await Mt(.25)}const Pt=z=>Ct("Papa",m,z,{pitch:.7,rate:.95}),Ot=(z,k={})=>Ct("Théo",e.hero,z,{pitch:1.95,rate:1.1,genre:"femme",...k});function re(z,k=30,{couleur:ot=16773792,vitesse:it=4,taille:gt=.4,duree:Lt=1.2,gravite:ft=2}={}){const St=new Float32Array(k*3),Dt=[];for(let Zt=0;Zt<k;Zt++){St.set([z.x,z.y,z.z],Zt*3);const H=$t(Math.random()-.5,Math.random()-.2,Math.random()-.5).normalize().multiplyScalar(it*(.3+Math.random()));Dt.push(H)}const Vt=new ze;Vt.setAttribute("position",new $e(St,3));const bt=new Ba(Vt,new qr({map:h,color:ot,size:gt,transparent:!0,opacity:1,blending:Nn,depthWrite:!1}));bt.frustumCulled=!1;const Jt=E;Jt.add(bt),M.push(bt);let Yt=0;w.add(Zt=>{Yt+=Zt;for(let H=0;H<k;H++)Dt[H].y-=ft*Zt,St[H*3]+=Dt[H].x*Zt,St[H*3+1]+=Dt[H].y*Zt,St[H*3+2]+=Dt[H].z*Zt;return Vt.attributes.position.needsUpdate=!0,bt.material.opacity=Math.max(0,1-Yt/Lt),Yt>=Lt?(Jt.remove(bt),Vt.dispose(),bt.material.dispose(),!1):!0})}const Kt=(z,k)=>$(k,ot=>{Y.style.opacity=String(z*Math.sin(Math.PI*Math.min(1,ot)))});function de(z,k){const ot=new Set;return z.traverse(it=>{it.isMesh&&!it.material.transparent&&ot.add(it.material)}),ot.forEach(it=>{it.transparent=!0,it.opacity=0,it.needsUpdate=!0}),$(k,it=>{ot.forEach(gt=>{gt.opacity=it})}).then(()=>{ot.forEach(it=>{it.transparent=!1,it.opacity=1,it.needsUpdate=!0})})}function W(){const z=new ue,k=new ee({color:14690350,roughness:.45}),ot=new B(new Ce(.15,16,12),k);ot.scale.set(1,.92,1),z.add(ot);const it=new B(new Wt(.008,.01,.07,5),new ee({color:5913894}));it.position.y=.15,z.add(it);const gt=new B(new Ce(.05,8,6),new ee({color:4045656}));return gt.scale.set(1.6,.3,.8),gt.position.set(.05,.17,0),gt.rotation.z=.4,z.add(gt),z}function we(){const z=new ue;z.add(new B(new Xt(.09,.04,.17),new ee({color:2830648,roughness:.5})));const k=new B(new Wt(.018,.018,.02,8),new ee({color:16726843,emissive:16726843,emissiveIntensity:.8}));return k.position.set(0,.03,-.03),z.add(k),z}async function ae(z){e.hero.rotation.order="YXZ",z!=="foret"&&await le(),C(),await qt()}async function le(){const z=e.hero,k=z.userData,ot=m.userData,it=u.position;ot.bras[0].rotation.x=-.5,ot.bras[1].rotation.x=-.25;const gt=W();gt.position.set(0,-.08,.1),ot.mains[0].add(gt),M.push(gt);const Lt=we();Lt.position.set(0,-.06,.06),ot.mains[1].add(Lt),M.push(Lt),yt($t(-6.5,8,9.5),$t(-15,3.8,1.2)),await Gt(z,-10.5,1.2,9),await ct(z,-19,1.2,.5),m.position.set(-19.3,0,1.2),m.rotation.y=Math.PI/2,s.fx("porte"),await Promise.all([$(1.8,lt=>l.ouvrir(Ge(lt))),Mt(.5).then(()=>(m.visible=!0,de(m,.9)))]),await Gt(m,-14.2,1.2,5,!1),yt($t(-7.5,6.2,6.2),$t(-12.6,4.4,1.2)),await Pt("Regarde, fiston !"),await Ot("Papa ? Qu’est-ce que c’est ?"),await Pt("J’ai créé une nouvelle machine, pour rétrécir les objets !"),await Pt("Viens, je vais te la montrer avec cette pomme."),yt($t(4.5,7.5,4),$t(-5,3.5,-4)),$(1.4,lt=>l.ouvrir(1-Ge(lt))),await Promise.all([Gt(m,-5.4,-5.6,8,!1),Mt(.7).then(()=>Gt(z,-2.4,-4.6,8))]),await Promise.all([ct(m,it.x,it.z),ct(z,it.x,it.z)]),yt($t(5.2,7,.5),$t(-2.4,3.6,-8)),await Pt("Regarde bien !"),ot.bras[1].rotation.x=-1.4,s.fx("clic"),s.fx("machine"),re($t(it.x,1.2,it.z),20,{couleur:8382463,vitesse:2,duree:2}),await $(2.2,lt=>u.ouvrirVerre(Ge(lt))),await $(.5,lt=>{ot.bras[0].rotation.x=-.5-1.1*Ge(lt)}),await $(.25,lt=>{ot.bras[0].rotation.x=-1.6-.7*lt}),i.attach(gt);const ft=gt.position.clone(),St=$t(it.x,u.platY+.4,it.z);$(.55,lt=>{ot.bras[0].rotation.x=-2.3+1.8*Ge(lt)}),await $(.95,lt=>{gt.position.lerpVectors(ft,St,lt),gt.position.y+=Math.sin(Math.PI*lt)*3.2,gt.rotation.z=lt*5}),gt.position.copy(St),await Pt("Et maintenant, le rayon !"),s.fx("clic"),s.fx("rayon"),await $(.6,lt=>u.rayon(Ge(lt)));const Dt=gt.scale.x;re(St,40,{couleur:12580607,vitesse:3.5,duree:1.4}),await $(1.5,lt=>{gt.scale.setScalar(Dt*(1-.7*Ge(lt))),gt.position.y=u.platY+.4-.25*Ge(lt)}),s.fx("ding"),await $(.5,lt=>u.rayon(1-Ge(lt)*.55)),await Pt("Ça marche ! Elle est toute petite !"),yt($t(1.6,6.2,-.8),$t(-2.4,4.4,-6.5));const Vt=k.tete;re(rt(z),14,{couleur:16773312,vitesse:.8,taille:.3,duree:2.6,gravite:-.2}),s.fx("reniflement"),k.sourire.visible=!1,k.bouche.visible=!0,await Promise.all([J(Vt.rotation,"x",-.5,1.2),J(z.rotation,"x",-.12,1.2),Ot("Ah… ah…",{rate:.6})]),ct(m,z.position.x,z.position.z,.5),await Pt("Fiston ? Ça va ?"),s.fx("reniflement"),await Ot("Ah… ah… ah…",{rate:.5}),k.sourire.visible=!1,k.bouche.visible=!0,s.fx("atchoum"),r.dire("Atchoum !",{pitch:2,rate:1.3,genre:"femme"}),re(rt(z),50,{couleur:16777215,vitesse:6,taille:.45,duree:1,gravite:4}),yt($t(2.8,5.2,-4.2),$t(-1.6,3,-8.4));const bt=z.position.clone();k.bras[0].rotation.x=-1.3,k.bras[1].rotation.x=-1.3,await $(.45,lt=>{Vt.rotation.x=-.5+1.5*Ge(lt),z.rotation.x=-.12+.55*Ge(lt),z.position.set(bt.x+(-1.6-bt.x)*Ge(lt),0,bt.z+(-8.4-bt.z)*Ge(lt))}),s.fx("rayon");const Jt=z.position.clone(),Yt=$t(it.x,u.platY,it.z-.3);await Promise.all([$(.85,lt=>{z.position.lerpVectors(Jt,Yt,lt),z.position.y=Yt.y*lt+Math.sin(Math.PI*lt)*3.4,z.rotation.x=.43*(1-lt),k.jambes[0].rotation.x=-.5,k.jambes[1].rotation.x=.5}),$(.85,lt=>{u.rayon(.45+lt)}),J(Vt.rotation,"x",0,.85)]),z.rotation.set(0,0,0),Bt(z),k.bras.forEach(lt=>{lt.rotation.x=0}),yt($t(3.4,3.8,-6.2),$t(it.x,2.4,it.z)),s.fx("retrecir"),re($t(it.x,3,it.z),70,{couleur:12580607,vitesse:5,taille:.5,duree:1.6}),Kt(.95,1.1),await $(1.7,lt=>{z.scale.setScalar(3-2.7*Ge(lt)),u.rayon(1.4+Math.sin(lt*20)*.2)}),re($t(it.x,1.6,it.z),40,{couleur:16773792,vitesse:3,duree:1.2}),k.sourire.visible=!0,k.bouche.visible=!1,await $(.7,lt=>u.rayon(1.4*(1-Ge(lt)))),yt($t(-.2,1.7,-8.6),$t(-3.4,5.2,-6.9)),ct(m,it.x,it.z,.3),ot.bras[0].rotation.x=-1,ot.bras[1].rotation.x=-1,Gt(m,-3.3,-6.7,4,!1),await Pt("Oh non ! Théo ! Mon fils ! Il est tout petit !"),yt($t(it.x+1.4,1.9,it.z+3.2),$t(it.x,1.2,it.z));let Zt=!0;w.add((lt,Qt)=>Zt?(k.bras[1].rotation.z=-2.5+Math.sin(Qt*11)*.35,!0):!1),await Ot("Papa ? Qu’est-ce qui m’arrive ?",{pitch:2.1}),Zt=!1,k.bras[1].rotation.z=0,C(),yt($t(5.6,7.2,-2.2),$t(it.x,4.2,it.z)),s.fx("alarme");let H=!0;w.add((lt,Qt)=>H?(u.alarme(Math.sin(Qt*14)>0?1:.3),u.secouer(.25+.35*Math.min(1,(g-At)/3)),!0):!1);const At=g;u.rayon(.9),ot.bras[0].rotation.x=-1.9,ot.bras[1].rotation.x=-1.9,await Pt("La machine surchauffe ! Elle va exploser !"),s.fx("alarme"),await Ot("Papa ! Aide-moi !",{pitch:2.1}),await Mt(.6),H=!1;const ut=$t(it.x,u.platY+.6,it.z);te(ut),u.exploser(),u.alarme(0),yt($t(7,6.5,1.5),$t(it.x,4,it.z),!0),$(.9,lt=>{m.position.x=-3.3-2.2*Ge(lt),m.position.z=-6.7+2.4*Ge(lt),m.rotation.x=-.3*Math.sin(Math.PI*lt)});const mt=new ka([$t(it.x,1.2,it.z),$t(-.8,6,-8),$t(-.3,7,0),$t(0,6.6,10),$t(0,6.2,18),$t(.6,13,30),$t(1.6,20,48),$t(2.2,12,64),$t(2.6,3.2,76)]),Et=$t(0,0,0);r.dire("Aaaaaah !",{pitch:2,rate:1.2,genre:"femme"}),s.fx("chute"),await Mt(.35),await $(3.6,lt=>{mt.getPoint(Math.min(1,lt),Et),z.position.copy(Et),z.rotation.z=lt*14,z.rotation.x=lt*5,yt($t(Et.x-2+(lt>.6?6*(lt-.6):0),Et.y+2.5,Et.z-11),$t(Et.x,Et.y,Et.z))}),z.rotation.set(0,0,0),s.fx("atterrissage"),re($t(z.position.x,.6,z.position.z),40,{couleur:13220234,vitesse:5,taille:1.2,duree:1.2,gravite:5}),await Mt(.5)}async function qt(){const z=e.hero,k=z.userData;Kt(1,.9),await Mt(.35),jt(),yt($t(8,26,30),$t(0,10,0),!0),z.position.set(0,70,0),z.rotation.set(0,0,0),s.fx("chute"),await $(1.1,ft=>{z.position.y=70*(1-ft*ft),z.rotation.x=ft*3}),z.rotation.x=0,s.fx("atterrissage"),re($t(0,1,0),50,{couleur:13220234,vitesse:7,taille:2,duree:1.4,gravite:6}),$(.25,ft=>{z.scale.set(3*(1+.25*Math.sin(Math.PI*ft)),3*(1-.25*Math.sin(Math.PI*ft)),3*(1+.25*Math.sin(Math.PI*ft)))}),yt($t(8,11,24),$t(0,6,0)),await Mt(.8),J(k.tete.rotation,"y",-.9,1).then(()=>J(k.tete.rotation,"y",.9,1.6)),await Ot("Aïe… Où suis-je ? Tout est tellement grand !",{pitch:2.1}),k.tete.rotation.y=0,p.retirerVedette();const ot=Ta({grain:!0});ot.scale.setScalar(4.2),ot.position.set(-40,0,-5),E.add(ot),O=ot;let it=!0;w.add((ft,St)=>O!==ot?!1:(it&&ot.userData.pattes(St),!0)),yt($t(-4,8,23),$t(-6,4.5,-3));const gt=$(4.4,ft=>{ot.position.x=-40+28*ft});await Mt(1.5),s.fx("reniflement"),await ct(z,-30,-5,.45),$(.4,ft=>{z.position.y=Math.sin(Math.PI*ft)*1.6}),k.bras[0].rotation.x=-2.2,k.bras[1].rotation.x=-2.2,await Ot("Oh ! Une fourmi géante !",{pitch:2.1}),await gt,it=!1,k.bras[0].rotation.x=0,k.bras[1].rotation.x=0,yt($t(-7,6,21),$t(-7,4.6,-3)),$(1.8,ft=>{ot.rotation.z=Math.sin(ft*Math.PI*4)*.05}),await ct(z,ot.position.x+4,-5,.4),await Ot("Elle est plus grande que moi !",{pitch:2.1}),await Mt(.5),it=!0,ot.rotation.z=0,yt($t(3,7.5,23),$t(1,4.5,-3));let Lt=!0;w.add(()=>Lt?(z.rotation.y=Math.atan2(ot.position.x+4-z.position.x,ot.position.z-z.position.z),!0):!1),await $(7,ft=>{ot.position.x=-12+46*ft}),Lt=!1,await ct(z,0,30,.5),await Ot("Bon… Il faut que je retrouve la maison !",{pitch:2.1}),await Mt(.4)}function te(z){s.fx("explosion"),S=1.2,Kt(1,.8);const k=new B(new Ce(1,18,14),new Ae({color:16756800,transparent:!0,opacity:1,blending:Nn,depthWrite:!1}));k.position.copy(z),i.add(k),M.push(k);const ot=new B(new Yr(.9,1.1,40),new Ae({color:16769696,transparent:!0,opacity:.8,side:Oe,depthWrite:!1}));ot.rotation.x=-Math.PI/2,ot.position.set(z.x,.15,z.z),i.add(ot),M.push(ot);const it=new Bs(16752704,900,60,1.4);it.position.copy(z),i.add(it),M.push(it);let gt=0;w.add(ft=>{gt+=ft;const St=Math.min(1,gt/.6);return k.scale.setScalar(1+9*Ge(St)),k.material.opacity=Math.max(0,1-gt/.8),ot.scale.setScalar(1+gt*28),ot.material.opacity=Math.max(0,.8-gt*1.2),it.intensity=Math.max(0,900*(1-gt/1.2)),gt>1.3?(i.remove(k,ot,it),!1):!0}),re(z,90,{couleur:16752704,vitesse:22,taille:1.4,duree:1.6,gravite:12}),re(z,50,{couleur:16773824,vitesse:30,taille:.9,duree:1,gravite:6});const Lt=[5531516,7243424,10478574,14035002,2830648];for(let ft=0;ft<34;ft++){const St=ft%3===0?new Wt(.2,.2,.8+Math.random()*1.4,6):new Xt(.4+Math.random()*1.2,.3+Math.random()*.8,.4+Math.random()*1.2),Dt=new B(St,new ee({color:Lt[ft%5],roughness:.6,transparent:ft%5===2,opacity:ft%5===2?.5:1}));Dt.position.set(z.x,z.y+1+Math.random()*4,z.z),i.add(Dt),M.push(Dt);const Vt=Math.random()*6.28,bt=$t(Math.cos(Vt),0,Math.sin(Vt)).multiplyScalar(5+Math.random()*14);bt.y=8+Math.random()*20;const Jt=$t(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(14);let Yt=0;w.add(Zt=>(Yt+=Zt,bt.y-=40*Zt,Dt.position.addScaledVector(bt,Zt),Dt.position.y<.3&&(Dt.position.y=.3,bt.y*=-.35,bt.x*=.6,bt.z*=.6,Jt.multiplyScalar(.6)),Dt.rotation.x+=Jt.x*Zt,Dt.rotation.y+=Jt.y*Zt,Dt.rotation.z+=Jt.z*Zt,Yt>6?(i.remove(Dt),!1):!0))}for(let ft=0;ft<18;ft++){const St=new B(new Ce(1,10,8),new Ae({color:3815994,transparent:!0,opacity:.7,depthWrite:!1}));St.position.set(z.x+(Math.random()-.5)*3,z.y+Math.random()*2,z.z+(Math.random()-.5)*3),i.add(St),M.push(St);const Dt=(Math.random()-.5)*3,Vt=(Math.random()-.5)*3;let bt=Math.random()*-.4;w.add(Jt=>(bt+=Jt,bt<0?!0:(St.position.x+=Dt*Jt,St.position.z+=Vt*Jt,St.position.y+=(3+bt)*Jt,St.scale.setScalar(.8+bt*1.5),St.material.opacity=Math.max(0,.55-bt*.14),bt>4?(i.remove(St),!1):!0)))}}function jt(){E=p.scene,n.voir(p.scene),p.calme(!0),p.maj(v,e.hero.position),e.changerMonde(p,p.depart.x,p.depart.z,0),e.hero.scale.setScalar(3),e.hero.rotation.order="YXZ"}function U(){r.arreter();for(const gt of M)gt.parent&&gt.parent.remove(gt);M.length=0,R.clear(),w.clear(),m&&(i.remove(m),m.visible=!1);const z=e.hero,k=z.userData,it=!!p&&z.parent===p.scene?{x:z.position.x,z:z.position.z,cap:z.rotation.y}:null;z.scale.setScalar(3),z.rotation.order="XYZ",z.rotation.set(0,0,0),k.tete.rotation.set(0,0,0),k.sourire.visible=!0,k.bouche.visible=!1,k.bras.forEach(gt=>gt.rotation.set(0,0,0)),Bt(z),l.ouvrir(0),u.ouvrirVerre(0),u.rayon(0),u.reparer(),E=i,O&&(A==="foret"?(O.rotation.z=0,C().adopter(O)):O.parent&&O.parent.remove(O),O=null),S=0,s.baisser(!1),Y.style.opacity="0",K.style.opacity="0",j("#cine-carte").style.opacity="0",tt.hidden=!0,Z.hidden=!0,o.classList.remove("en-cine"),a.bloquer(!1),d=!1,p&&p.calme(!1),c(A,A==="foret"?C():null,it)}const b=z=>{z.reason===Uo&&z.preventDefault()};async function et(z){if(d)return;r.eveiller(),window.addEventListener("unhandledrejection",b),d=!0,f=!1,g=0,A="foret",s.baisser(!0),a.bloquer(!0),o.classList.add("en-cine"),Z.hidden=!1,K.style.opacity="0",Y.style.opacity="0",j("#cine-carte").style.opacity="0",m||(m=dg({echelle:3})),i.add(m),m.visible=!1,I.pos.copy(n.camera.position),I.look.set(e.pos.x,e.pos.y+4,e.pos.z),I.posC.copy(I.pos),I.lookC.copy(I.look);const k=new Promise(ot=>{_=ot});try{await Promise.race([ae(z).catch(ot=>{if(ot!==Uo)throw ot}),k])}catch(ot){console.error(ot)}U(),setTimeout(()=>window.removeEventListener("unhandledrejection",b),500)}function _t(z="foret"){if(d){A=z,f=!0;for(const k of R)k.res();r.arreter(),_&&_()}}return j("#cine-passer").addEventListener("click",()=>_t("foret")),{lancer:et,annuler:_t,maj:zt,actif:()=>d}}function cu(i){const t=typeof window<"u"&&"speechSynthesis"in window&&typeof SpeechSynthesisUtterance<"u";if(t)try{speechSynthesis.getVoices(),speechSynthesis.addEventListener("voiceschanged",()=>speechSynthesis.getVoices())}catch{}const e=r=>{if(!t)return null;const o=speechSynthesis.getVoices().filter(u=>/^fr/i.test(u.lang)),a=o.some(u=>u.localService)?o.filter(u=>u.localService):o;if(!a.length)return null;const c=/thomas|daniel|male|homme|paul|henri/i,l=/amélie|amelie|audrey|aurélie|marie|julie|female|femme|virginie/i;return a.find(u=>(r==="homme"?c:l).test(u.name))||a[0]};let n=!1;function s(){if(!(!t||n))try{const r=new SpeechSynthesisUtterance(" ");r.volume=0,r.lang="fr-FR",speechSynthesis.speak(r),n=!0}catch{}}return{eveiller:s,disponible:()=>!!e("homme"),nom(r="homme"){const o=e(r);return o?{nom:o.name,langue:o.lang,locale:o.localService}:null},compte(){if(!t)return null;const r=speechSynthesis.getVoices().filter(o=>/^fr/i.test(o.lang));return{total:speechSynthesis.getVoices().length,fr:r.length,frLocales:r.filter(o=>o.localService).length}},pris:()=>t,arreter(){if(t)try{speechSynthesis.cancel()}catch{}},dire(r,{pitch:o=1,rate:a=1,genre:c="homme"}={}){return new Promise(l=>{const u=1100+r.length*52,h=performance.now();let d=!1;const f=()=>{d||(d=!0,setTimeout(l,Math.max(0,u-(performance.now()-h))))},g=e(c),_=i();if(!t||_<=0){f();return}try{const m=new SpeechSynthesisUtterance(r);g&&(m.voice=g),m.lang=g?g.lang:"fr-FR",m.pitch=Math.min(2,o),m.rate=a,m.volume=_,m.onend=f,m.onerror=f,speechSynthesis.speak(m),setTimeout(f,12e3)}catch{f()}})}}}function Pg({reglages:i,surMenu:t,son:e}){const n=document.createElement("main");n.className="ecran jeu";const s=document.createElement("canvas");s.className="monde3d",n.appendChild(s),n.insertAdjacentHTML("beforeend",`
    <header class="barre-jeu"><span class="lieu">Le grenier du professeur Mousse</span><div class="coin"><button class="bouton secondaire petit" id="btn-menu">Menu</button><button class="bouton secondaire mini" id="btn-reset">Reset</button></div></header>
    <div class="indice" id="indice" hidden><button class="bouton gros moyen" id="btn-anim">Démarrer l'animation</button><span class="touche-agir" id="touche-agir"></span></div>
    <aside class="aide-touches" id="aide-touches"></aside>`);const r=n.querySelector("#indice"),o=ig(s),a=hg(),c=_g({scene:a.scene,colliders:a.colliders,depart:a.depart,limites:a.limites,limiterCamera:a.limiterCamera}),l=Mg(()=>i().touches),u=cu(()=>i().voix),h=Rg({racine:n,clavier:l});let d="grenier",f=a;function g(A,C,R,w,M){d=A,f=C,o.voir(C.scene),c.changerMonde(C,R,w,M),c.hero.scale.setScalar(3),n.querySelector(".lieu").textContent=C.nom,r.hidden=!0}const _=Cg({scene:a.scene,garage:a,joueur:c,moteur:o,son:e,voix:u,racine:n,clavier:l,surFin(A,C,R){A==="foret"?g("foret",C,R?R.x:C.depart.x,R?R.z:C.depart.z,R?R.cap:Math.PI):(g("grenier",a,a.depart.x,a.depart.z,0),c.etat(0))}});function m(){if(_.actif()){_.annuler("grenier");return}g("grenier",a,a.depart.x,a.depart.z,0),c.etat(0)}const p=()=>.25*16**i().sensibilite;let E=null;s.addEventListener("pointerdown",A=>{E||(E={x:A.clientX,y:A.clientY,id:A.pointerId},s.setPointerCapture(A.pointerId),s.classList.add("glisse"))}),s.addEventListener("pointermove",A=>{!E||A.pointerId!==E.id||(c.tourner(A.clientX-E.x,A.clientY-E.y,p()),E={x:A.clientX,y:A.clientY,id:A.pointerId})});const S=A=>{E&&A&&A.pointerId!==void 0&&A.pointerId!==E.id||(E=null,s.classList.remove("glisse"))};s.addEventListener("pointerup",S),s.addEventListener("pointercancel",S),s.addEventListener("wheel",A=>{A.preventDefault(),c.zoom(A.deltaY)},{passive:!1});const v=A=>{A.code==="Escape"&&!document.getElementById("dlg").open&&(A.preventDefault(),_.actif()?_.annuler("foret"):t())};window.addEventListener("keydown",v);function O(){const A=i().touches,C=R=>ou((A[R]||[]).find(Boolean))||"-";n.querySelector("#touche-agir").textContent=C("agir")!=="-"?`ou touche ${C("agir")}`:"",n.querySelector("#aide-touches").innerHTML=`<b>${C("avancer")} ${C("gauche")} ${C("reculer")} ${C("droite")}</b> bouger<span class="sep"></span><b>${C("sauter")}</b> sauter<span class="sep"></span><b>${C("sprinter")}</b> sprinter<span class="sep"></span><b>Souris</b> tourner la caméra`}return O(),n.querySelector("#btn-menu").addEventListener("click",t),n.querySelector("#btn-reset").addEventListener("click",A=>{A.currentTarget.blur(),e.clic(),m()}),o.camera.position.set(1,9,14),n.querySelector("#btn-anim").addEventListener("click",()=>_.lancer()),o.definir(a.scene,(A,C,R)=>{if(_.actif()){a.maj(A),_.maj(R||C,A),l.finImage();return}if(f.maj(A,c.pos),h.actif&&h.montrer(!0),c.maj(C,l,A),c.camera(o.camera,C),d==="grenier"){const w=a.porteMaison,M=Math.hypot(c.pos.x-w.x,c.pos.z-(w.z+2))<8;r.hidden=!M,M&&l.vient("agir")&&_.lancer()}l.finImage()}),{element:n,majAide:O,bloquer:A=>l.bloquer(A),animation:_,lieu:()=>d,monde:()=>f,reset:m,detruire(){_.annuler("grenier"),u.arreter(),l.detruire(),window.removeEventListener("keydown",v)},moteur:o,joueur:c,garage:a}}const ul=i=>440*2**((i-69)/12),hl=[62,64,66,69,71,74,76];function Lg(){let i=null,t,e,n,s,r=null,o=0,a=0;const c={musique:.6,ambiance:.6,effets:.8};let l=!1;function u(){if(i)return;i=new(window.AudioContext||window.webkitAudioContext);const S=i.createDynamicsCompressor();S.connect(i.destination),t=i.createGain(),e=i.createGain(),n=i.createGain();for(const ht of[t,e,n])ht.connect(S);s=i.createBuffer(1,i.sampleRate*3,i.sampleRate);const v=s.getChannelData(0);for(let ht=0;ht<v.length;ht++)v[ht]=Math.random()*2-1;const O=g(),A=i.createBiquadFilter();A.type="lowpass",A.frequency.value=520;const C=i.createGain();C.gain.value=.35;const R=i.createOscillator();R.frequency.value=.09;const w=i.createGain();w.gain.value=.22,R.connect(w),w.connect(C.gain),R.start(),O.connect(A),A.connect(C),C.connect(e);const M=g(),I=i.createBiquadFilter();I.type="bandpass",I.frequency.value=2200,I.Q.value=.7;const j=i.createGain();j.gain.value=.16;const Z=i.createOscillator();Z.frequency.value=.37;const tt=i.createGain();tt.gain.value=.05,Z.connect(tt),tt.connect(j.gain),Z.start(),M.connect(I),I.connect(j),j.connect(e);const Y=i.createDelay(1);Y.delayTime.value=.42;const K=i.createGain();K.gain.value=.38,Y.connect(K),K.connect(Y),Y.connect(t),t.echo=Y,_()}let h=null;function d(){const v=new ArrayBuffer(6444),O=new DataView(v),A=(C,R)=>{for(let w=0;w<R.length;w++)O.setUint8(C+w,R.charCodeAt(w))};return A(0,"RIFF"),O.setUint32(4,36+3200*2,!0),A(8,"WAVE"),A(12,"fmt "),O.setUint32(16,16,!0),O.setUint16(20,1,!0),O.setUint16(22,1,!0),O.setUint32(24,8e3,!0),O.setUint32(28,16e3,!0),O.setUint16(32,2,!0),O.setUint16(34,16,!0),A(36,"data"),O.setUint32(40,3200*2,!0),URL.createObjectURL(new Blob([v],{type:"audio/wav"}))}function f(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}if(!h){try{h=new Audio(d()),h.loop=!0,h.play().catch(()=>{})}catch{}const S=()=>{i&&i.state!=="running"&&i.resume().catch(()=>{}),h&&h.paused&&h.play().catch(()=>{})};document.addEventListener("pointerdown",S),document.addEventListener("touchend",S),document.addEventListener("visibilitychange",()=>{document.hidden||S()})}}function g(){const S=i.createBufferSource();return S.buffer=s,S.loop=!0,S.start(0,Math.random()*2),S}function _(){if(!i)return;const S=i.currentTime;t.gain.setTargetAtTime(c.musique*.55*(l?.25:1),S,.15),e.gain.setTargetAtTime(c.ambiance*.5*(l?.25:1),S,.15),n.gain.setTargetAtTime(c.effets*1,S,.05)}function m(S,v,O,A,C,R,w=!1){const M=i.createOscillator(),I=i.createGain();M.type=S,M.frequency.setValueAtTime(v,O),I.gain.setValueAtTime(1e-4,O),I.gain.exponentialRampToValueAtTime(C,O+.015),I.gain.exponentialRampToValueAtTime(1e-4,O+A),M.connect(I),I.connect(R),w&&t.echo&&I.connect(t.echo),M.start(O),M.stop(O+A+.05)}function p(S){const v=2300+Math.random()*1500,O=i.createStereoPanner();O.pan.value=Math.random()*1.6-.8,O.connect(e);const A=2+Math.floor(Math.random()*4);for(let C=0;C<A;C++){const R=i.createOscillator(),w=i.createGain();R.type="sine",R.frequency.setValueAtTime(v*(1+C*.07),S+C*.11),R.frequency.exponentialRampToValueAtTime(v*(1.2+C*.07),S+C*.11+.09),w.gain.setValueAtTime(1e-4,S+C*.11),w.gain.exponentialRampToValueAtTime(.1,S+C*.11+.01),w.gain.exponentialRampToValueAtTime(1e-4,S+C*.11+.1),R.connect(w),w.connect(O),R.start(S+C*.11),R.stop(S+C*.11+.12)}}function E(){const S=i.currentTime;for(;o<S+.4;){const v=hl[Math.floor(Math.random()*hl.length)]-(Math.random()<.25?12:0);m("triangle",ul(v),o,1.8,.16,t,!0),m("sine",ul(v+12),o,1.2,.05,t,!0),o+=.55+Math.random()*1.1}S>=a&&(p(S+.05),a=S+3+Math.random()*7)}return{appliquer(S){Object.assign(c,S),_()},baisser(S){l=S,_()},async demarrer(){try{u(),i.state==="suspended"&&await i.resume(),f(),r||(o=i.currentTime+.3,a=i.currentTime+2,r=setInterval(E,80))}catch{}},clic(){i&&i.state==="running"&&(m("sine",660,i.currentTime+.01,.18,.2,n),m("sine",990,i.currentTime+.07,.22,.15,n))},magie(){i&&i.state==="running"&&[523,659,784,1047].forEach((S,v)=>m("triangle",S,i.currentTime+.02+v*.09,.7,.14,n))},fx(S){if(!i)return;i.state!=="running"&&i.resume().catch(()=>{});const v=i.currentTime+.02,O=(R,w,M,I,j,Z,tt)=>m(R,w,M,I,Math.min(1,j*1.7),Z,tt),A=(R,w,M,I,j=1)=>{const Z=Math.min(1,I*1.7),tt=i.createBufferSource();tt.buffer=s;const Y=i.createBiquadFilter();Y.type="bandpass",Y.Q.value=j,Y.frequency.setValueAtTime(R,v),Y.frequency.exponentialRampToValueAtTime(w,v+M);const K=i.createGain();K.gain.setValueAtTime(1e-4,v),K.gain.exponentialRampToValueAtTime(Z,v+.03),K.gain.exponentialRampToValueAtTime(1e-4,v+M),tt.connect(Y),Y.connect(K),K.connect(n),tt.start(v,Math.random()*2),tt.stop(v+M+.05)},C=(R,w,M,I,j)=>{const Z=Math.min(1,j*1.7),tt=i.createOscillator(),Y=i.createGain();tt.type=R,tt.frequency.setValueAtTime(w,v),tt.frequency.exponentialRampToValueAtTime(M,v+I),Y.gain.setValueAtTime(1e-4,v),Y.gain.exponentialRampToValueAtTime(Z,v+.05),Y.gain.exponentialRampToValueAtTime(1e-4,v+I),tt.connect(Y),Y.connect(n),tt.start(v),tt.stop(v+I+.05)};if(S==="porte"&&(C("sawtooth",170,95,1.4,.16),C("square",340,190,1.4,.07),O("square",90,v+1.45,.12,.18,n)),S==="clic"&&(O("square",1400,v,.05,.12,n),O("square",900,v+.06,.07,.1,n)),S==="machine"&&(C("sawtooth",70,220,2.2,.14),C("triangle",140,440,2.2,.1),A(300,1200,2.2,.15,.6)),S==="rayon"&&(C("sawtooth",220,880,.6,.12),A(2e3,5e3,1.2,.12,2),C("sine",880,880,1.6,.06)),S==="ding"&&(O("triangle",1568,v,.9,.2,n,!0),O("triangle",2093,v+.1,.9,.14,n,!0)),S==="reniflement"&&A(900,2600,.35,.22,3),S==="atchoum"&&(A(4500,600,.38,.9,.8),C("sine",160,50,.3,.5)),S==="retrecir"&&(C("sine",1600,140,1.5,.22),C("triangle",2400,300,1.5,.12),A(6e3,800,1.5,.2,1.5)),S==="alarme")for(let R=0;R<6;R++)O("square",R%2?660:880,v+R*.28,.2,.12,n);S==="explosion"&&(A(900,60,1.6,1,.5),A(200,40,2.2,.9,.4),C("sine",110,28,1.4,.9),C("sawtooth",220,40,.8,.25)),S==="chute"&&(C("sine",1800,300,1.4,.18),A(3e3,800,1.4,.1,1.2)),S==="atterrissage"&&(C("sine",150,45,.25,.6),A(1500,300,.25,.3,.8)),S==="pas"&&O("sine",90,v,.1,.15,n)},etat(){return{actif:!!i&&i.state==="running",musique:!!r,contexte:i?i.state:"aucun"}}}}const lu="bonsai-reglages",bi={musique:.6,ambiance:.6,effets:.8,voix:.9,feuilles:!0,sensibilite:.5,qualite:"normale",touches:Zr()},Ns=(i,t,e,n)=>Number.isFinite(i)?Math.min(e,Math.max(t,i)):n;function uu(i){const t=i&&typeof i=="object"?i:{};return{musique:Ns(t.musique,0,1,bi.musique),ambiance:Ns(t.ambiance,0,1,bi.ambiance),effets:Ns(t.effets,0,1,bi.effets),voix:Ns(t.voix,0,1,bi.voix),feuilles:t.feuilles!==!1,sensibilite:Ns(t.sensibilite,0,1,bi.sensibilite),qualite:["basse","normale"].includes(t.qualite)?t.qualite:bi.qualite,touches:ru(t.touches)}}function Ig(){try{return uu(JSON.parse(localStorage.getItem(lu)||"null"))}catch{return{...bi,touches:Zr()}}}function Dg(i){try{localStorage.setItem(lu,JSON.stringify(i))}catch{}}const Oi=Ig(),Ug=document.getElementById("app"),me=document.getElementById("dlg"),an=Lg();an.appliquer(Oi);let Be=null;const Ei=cu(()=>Math.max(.5,Oi.voix));for(const i of["pointerdown","keydown"])document.addEventListener(i,()=>an.demarrer(),{once:!0});const hi=[];window.addEventListener("error",i=>{hi.push(`${i.message} (${(i.filename||"").split("/").pop()}:${i.lineno})`),hi.length>5&&hi.shift()});window.addEventListener("unhandledrejection",i=>{typeof i.reason!="symbol"&&(hi.push(`promesse : ${i.reason&&i.reason.message?i.reason.message:String(i.reason)}`),hi.length>5&&hi.shift())});function Ya(i){Ug.replaceChildren(i.element)}const Fs=()=>{Dg(Oi),an.appliquer(Oi)};function hu(i="son"){const t=Oi;let e=null;me.className="large",me.innerHTML=`<h2>Paramètres</h2>
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
    <div class="pied"><button class="bouton gros moyen" id="p-fermer">Fermer</button></div>`,me.open||me.showModal(),Be&&Be.bloquer(!0);const n=c=>{me.querySelectorAll(".onglets button").forEach(l=>l.classList.toggle("actif",l.dataset.o===c)),me.querySelector("#o-son").hidden=c!=="son",me.querySelector("#o-commandes").hidden=c!=="commandes",c==="commandes"&&r()};function s(c){const l=t.touches[c.id],u=[0,1].map(h=>{const d=e&&e.action===c.id&&e.i===h,f=d?"Appuie sur une touche":l[h]?ou(l[h]):"";return`<button class="case ${d?"ecoute":""}" data-a="${c.id}" data-i="${h}" ${c.bientot?"disabled":""}>${f}</button>`}).join("");return`<div class="rangee ${c.bientot?"bientot":""}"><span class="nom-action">${c.nom}${c.bientot?"<em>bientôt</em>":""}</span>${u}<button class="croix" data-a="${c.id}" aria-label="Effacer ${c.nom}" ${c.bientot?"disabled":""}>×</button></div>`}function r(){const c=me.querySelector("#o-commandes");c.innerHTML=`<h3 class="section">SOURIS</h3>
      <label class="ligne"><span>Sensibilité de la souris <b id="p-sens-val">${Math.round(t.sensibilite*100)} %</b></span><input type="range" id="p-sens" min="0" max="100" step="1" value="${Math.round(t.sensibilite*100)}"></label>
      <h3 class="section">DÉPLACEMENT</h3>${Gr.filter(l=>!l.bientot&&l.id!=="agir").map(s).join("")}
      <h3 class="section">ACTIONS</h3>${Gr.filter(l=>l.bientot||l.id==="agir").map(s).join("")}
      <p class="note">Clique sur une case, puis appuie sur la touche que tu veux. Échap pour annuler. La croix rouge efface la case.</p>
      <button class="bouton secondaire" id="p-defaut">Rétablir les touches de départ</button>`,c.querySelector("#p-sens").addEventListener("input",l=>{t.sensibilite=Number(l.target.value)/100,c.querySelector("#p-sens-val").textContent=`${l.target.value} %`,Fs()}),c.querySelectorAll(".case").forEach(l=>l.addEventListener("click",()=>{e={action:l.dataset.a,i:Number(l.dataset.i)},r()})),c.querySelectorAll(".croix").forEach(l=>l.addEventListener("click",()=>{t.touches[l.dataset.a]=[null,null],Fs(),Be&&Be.majAide(),e=null,r()})),c.querySelector("#p-defaut").addEventListener("click",()=>{t.touches=Zr(),Fs(),Be&&Be.majAide(),e=null,r()})}const o=c=>{if(e){if(c.preventDefault(),c.stopPropagation(),c.code==="Escape"){e=null,r();return}t.touches=yg(t.touches,e.action,e.i,c.code),Fs(),Be&&Be.majAide(),an.clic(),e=null,r()}};window.addEventListener("keydown",o,!0),me.addEventListener("cancel",c=>{e&&c.preventDefault()}),me.addEventListener("close",()=>{window.removeEventListener("keydown",o,!0),Be&&Be.bloquer(!1)},{once:!0}),me.querySelectorAll(".onglets button").forEach(c=>c.addEventListener("click",()=>{e=null,n(c.dataset.o)}));const a=()=>{Object.assign(t,uu({...t,musique:Number(me.querySelector("#p-musique").value),ambiance:Number(me.querySelector("#p-ambiance").value),effets:Number(me.querySelector("#p-effets").value),voix:Number(me.querySelector("#p-voix").value)})),Fs()};me.querySelectorAll("#o-son input").forEach(c=>c.addEventListener("input",a)),me.querySelector("#p-plein").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()}),me.querySelector("#p-test").addEventListener("click",()=>Ng(me.querySelector("#p-diag"))),me.querySelector("#p-fermer").addEventListener("click",()=>{an.clic(),me.close()}),n(i)}async function Ng(i){i.hidden=!1,i.textContent="Test en cours…",Ei.eveiller(),await an.demarrer(),an.fx("ding");const t=an.etat(),e=(()=>{try{const c=document.createElement("canvas").getContext("webgl"),l=c.getExtension("WEBGL_debug_renderer_info");return{carte:l?c.getParameter(l.UNMASKED_RENDERER_WEBGL):"inconnue",tex:c.getParameter(c.MAX_TEXTURE_SIZE)}}catch{return{carte:"WebGL absent",tex:0}}})(),n=await new Promise(a=>{let c=0;const l=performance.now(),u=()=>{c++,performance.now()-l<1e3?requestAnimationFrame(u):a(c)};requestAnimationFrame(u)}),s=Ei.compte(),r=Ei.nom("homme"),o=[`Son (bruitages, musique) : ${t.contexte==="running"?"réveillé":"ENDORMI ("+t.contexte+")"}`,`Voix : ${Ei.pris()?s&&s.fr?`${s.fr} voix françaises (${s.frLocales} installées), choisie : ${r?r.nom+(r.locale?"":" (en ligne)"):"aucune"}`:"AUCUNE voix française trouvée":"pas de synthèse vocale sur cet appareil"}`,`Vitesse : ${n} images par seconde (écran vide)`,`Écran : ${screen.width}x${screen.height}, tactile : ${matchMedia("(pointer: coarse)").matches?"oui":"non"}, finesse : ${window.devicePixelRatio}`,`Carte graphique : ${e.carte} (textures ${e.tex})`,`Navigateur : ${navigator.userAgent.replace(/\s+/g," ").slice(0,110)}`,`Erreurs du jeu : ${hi.length?hi.join(" | "):"aucune"}`];i.textContent=o.join(`
`)+`

Tu dois entendre un « ding » puis la voix du papa et celle de Théo.`,await Ei.dire("Bonjour, je suis la voix du papa.",{pitch:.7,genre:"homme"}),await Ei.dire("Salut, c’est Théo !",{pitch:2,genre:"femme",rate:1.1})}function Fg(){me.open||(me.className="",me.innerHTML='<h2>Pause</h2><div class="menu-pause"><button class="bouton gros moyen" id="m-reprendre">Reprendre</button><button class="bouton secondaire" id="m-param">Paramètres</button><button class="bouton secondaire" id="m-quitter">Retour à la couverture</button></div>',me.showModal(),Be&&Be.bloquer(!0),me.addEventListener("close",()=>{Be&&Be.bloquer(!1)},{once:!0}),me.querySelector("#m-reprendre").addEventListener("click",()=>{an.clic(),me.close()}),me.querySelector("#m-param").addEventListener("click",()=>{an.clic(),me.addEventListener("close",()=>hu("commandes"),{once:!0}),me.close()}),me.querySelector("#m-quitter").addEventListener("click",()=>{an.clic(),me.addEventListener("close",()=>zg(),{once:!0}),me.close()}))}function Og(){an.magie(),Be=Pg({reglages:()=>Oi,surMenu:Fg,son:an}),Ya(Be)}function zg(){Be&&(Be.detruire(),Be.moteur.arreter(),Be=null),Ya(fu)}const fu=xu({surCommencer:()=>{an.demarrer(),Ei.eveiller(),Og()},surParametres:()=>{an.demarrer(),hu("son")}});Ya(fu);window.bonsai={son:an,get reglages(){return Oi},get jeu(){return Be}};
