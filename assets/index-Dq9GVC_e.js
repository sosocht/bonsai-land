(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function br(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const Tf=(i,t="#0a5c3e")=>`<path d="M0,0 C40,-90 150,-150 300,-120 C250,-45 130,-8 0,0Z" fill="${i}"/><path d="M0,0 C100,-48 200,-84 296,-118" stroke="${t}" stroke-width="4" fill="none" opacity=".55"/>`;function Dr(i,t,e,n,s,r){const o=br(r);let a="";for(let c=0;c<6;c++){const l=-80+c*30+o()*10;a+=`<g transform="rotate(${l.toFixed(0)}) scale(${(.8+o()*.45).toFixed(2)})">${Tf(s[c%s.length])}</g>`}return`<g transform="translate(${i},${t}) rotate(${n}) scale(${e})"><g class="balance" style="animation-delay:${(o()*-5).toFixed(1)}s">${a}</g></g>`}function Ur(i,t,e,n,s,r,o=!1){const a=br(r);let c=`<path d="M0,0 C20,-120 90,-210 210,-250" stroke="${s}" stroke-width="7" fill="none" stroke-linecap="round"/>`;for(let l=1;l<18;l++){const u=l/18,f=210*(1-Math.pow(1-u,2))*1.02,h=-250*u-(1-u)*6,d=46*(1-u*.7);for(const x of[-1,1])c+=`<ellipse cx="${(f+4).toFixed(1)}" cy="${h.toFixed(1)}" rx="${d.toFixed(1)}" ry="${(d*.2).toFixed(1)}" fill="${s}" transform="rotate(${(x*(48+a()*14)-18).toFixed(0)} ${f.toFixed(1)} ${h.toFixed(1)})"/>`}return`<g transform="translate(${i},${t}) rotate(${n}) scale(${o?-e:e},${e})"><g class="balance lent" style="animation-delay:${(a()*-6).toFixed(1)}s">${c}</g></g>`}function _s(i,t,e,n){const s=br(n);let r="",o="";for(let a=70+s()*40;a<900;a+=110+s()*50){r+=`<rect x="${i-t/2-3}" y="${a}" width="${t+6}" height="9" rx="4" fill="#2f9d57"/>`;for(const c of[-1,1]){const l=i+c*t*.5;o+=`<path d="M${l},${a} C${l+c*38},${a-24} ${l+c*100},${a-14} ${l+c*138},${a+16} C${l+c*96},${a+4} ${l+c*42},${a+6} ${l},${a}Z" fill="#8be36c"/>`}}return`<g class="balance tige" style="animation-delay:${(s()*-5).toFixed(1)}s" transform="rotate(${e} ${i} 900)"><rect x="${i-t/2}" y="-30" width="${t}" height="950" fill="#7fe07a"/><rect x="${i-t/2}" y="-30" width="${t*.3}" height="950" fill="#c4f59a" opacity=".75"/><rect x="${i+t*.25}" y="-30" width="${t*.25}" height="950" fill="#2f9d57" opacity=".6"/>${r}${o}</g>`}function _u(i,t,e,n,s="#ffd24d"){let r="";for(let o=0;o<5;o++)r+=`<ellipse cx="0" cy="-12" rx="7" ry="13" fill="${n}" transform="rotate(${o*72})"/>`;return`<g transform="translate(${i},${t}) scale(${e})">${r}<circle r="5" fill="${s}"/></g>`}function Af(i,t,e,n){const s=br(n);let r=`<path d="M${i},-20 C${i+e},${t*.35} ${i-e*.6},${t*.7} ${i+e*.4},${t}" fill="none" stroke="#1a8a5c" stroke-width="${3+s()*3}" stroke-linecap="round"/>`;for(let o=1;o<=6;o++){const a=o/7,c=i+e*.4*a*a+(s()-.5)*6;r+=`<ellipse cx="${c.toFixed(1)}" cy="${(t*a).toFixed(1)}" rx="12" ry="6" fill="${["#3fd07a","#7de58a","#22b06a"][o%3]}" transform="rotate(${(s()*100-50).toFixed(0)} ${c.toFixed(1)} ${(t*a).toFixed(1)})"/>`}return s()>.45&&(r+=_u(i+e*.4,t+8,.75,s()>.5?"#ff8a2b":"#ff9fc0")),`<g class="liane" style="animation-delay:${(s()*-5).toFixed(1)}s">${r}</g>`}function Rf(){const i=br(11);let t="";for(let r=0;r<16;r++)t+=`<circle class="bulle" style="animation-delay:${(-i()*12).toFixed(1)}s;animation-duration:${(10+i()*10).toFixed(1)}s" cx="${(i()*1600).toFixed(0)}" cy="${(300+i()*600).toFixed(0)}" r="${(8+i()*26).toFixed(0)}" fill="#fff" opacity=".13"/>`;let e="";for(let r=0;r<12;r++)e+=Af(40+r*140+(i()-.5)*60,90+i()*260,(i()-.5)*80,70+r);let n="";for(let r=0;r<14;r++){const o=i()<.5;n+=_u(o?30+i()*380:1190+i()*380,770+i()*110,.9+i()*.7,i()>.45?"#ff8a2b":"#ff9fc0")}const s=document.createElement("div");return s.className="fond",s.innerHTML=`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="bleu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a3f9a"/><stop offset=".45" stop-color="#1a86d8"/><stop offset=".8" stop-color="#4fcfe6"/><stop offset="1" stop-color="#8fe9e2"/></linearGradient>
      <radialGradient id="lueur" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#dff8ff" stop-opacity=".85"/><stop offset="1" stop-color="#dff8ff" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#bleu)"/>
    <ellipse class="lueur" cx="1130" cy="190" rx="520" ry="360" fill="url(#lueur)"/>
    ${t}
    <g opacity=".5">${Dr(120,760,1.3,8,["#0d6f9a","#117fa3"],3)}${Dr(1490,770,1.3,-10,["#0d6f9a","#117fa3"],4)}</g>
    ${_s(70,28,-2,5)}${_s(150,20,2,6)}${_s(240,16,-1,7)}
    ${_s(1530,28,2,8)}${_s(1450,20,-2,9)}${_s(1360,16,1,10)}
    ${e}
    ${Dr(-30,940,1.7,0,["#14a064","#2fc27a","#0e8456","#4ad98a"],12)}
    ${Dr(1630,940,1.7,0,["#14a064","#2fc27a","#0e8456","#4ad98a"],13)}
    ${Ur(330,930,1.5,-8,"#1fb36e",21)}
    ${Ur(1270,930,1.5,8,"#1fb36e",22,!0)}
    ${Ur(520,940,1.1,-22,"#35cf80",23)}
    ${Ur(1090,940,1.1,22,"#35cf80",24,!0)}
    ${n}
  </svg>`,s}function Cf({surCommencer:i,surParametres:t}){const e=document.createElement("main");return e.className="ecran couverture",e.appendChild(Rf()),e.insertAdjacentHTML("beforeend",`
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
 */const Mc="170",Pf=0,el=1,Lf=2,vu=1,If=2,yi=3,ki=0,Tn=1,Ge=2,Vi=0,Vs=1,Jn=2,nl=3,il=4,Df=5,rs=100,Uf=101,Nf=102,Ff=103,zf=104,Of=200,Bf=201,Vf=202,Hf=203,Aa=204,Ra=205,Gf=206,kf=207,Wf=208,Xf=209,qf=210,$f=211,Yf=212,Zf=213,Jf=214,Ca=0,Pa=1,La=2,ks=3,Ia=4,Da=5,Ua=6,Na=7,Mu=0,jf=1,Kf=2,Ei=0,Qf=1,th=2,eh=3,nh=4,ih=5,sh=6,rh=7,yu=300,Ws=301,Xs=302,Fa=303,za=304,bo=306,vr=1e3,as=1001,Oa=1002,Gn=1003,oh=1004,Nr=1005,ci=1006,ko=1007,cs=1008,Ri=1009,Su=1010,wu=1011,Mr=1012,yc=1013,us=1014,li=1015,Er=1016,Sc=1017,wc=1018,qs=1020,bu=35902,Eu=1021,Tu=1022,jn=1023,Au=1024,Ru=1025,Hs=1026,$s=1027,bc=1028,Ec=1029,Cu=1030,Tc=1031,Ac=1033,fo=33776,ho=33777,po=33778,mo=33779,Ba=35840,Va=35841,Ha=35842,Ga=35843,ka=36196,Wa=37492,Xa=37496,qa=37808,$a=37809,Ya=37810,Za=37811,Ja=37812,ja=37813,Ka=37814,Qa=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,go=36492,oc=36494,ac=36495,Pu=36283,cc=36284,lc=36285,uc=36286,ah=3200,ch=3201,Lu=0,lh=1,Bi="",Fn="srgb",Zs="srgb-linear",Eo="linear",We="srgb",vs=7680,sl=519,uh=512,fh=513,hh=514,Iu=515,dh=516,ph=517,mh=518,gh=519,fc=35044,rl="300 es",wi=2e3,Mo=2001;class Js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wo=Math.PI/180,hc=180/Math.PI;function Ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[e&63|128]+wn[e>>8&255]+"-"+wn[e>>16&255]+wn[e>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function _n(i,t,e){return Math.max(t,Math.min(e,i))}function xh(i,t){return(i%t+t)%t}function Xo(i,t,e){return(1-e)*i+e*t}function ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_n(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Me{constructor(t,e,n,s,r,o,a,c,l){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],x=n[8],M=s[0],p=s[3],g=s[6],T=s[1],E=s[4],v=s[7],L=s[2],C=s[5],D=s[8];return r[0]=o*M+a*T+c*L,r[3]=o*p+a*E+c*C,r[6]=o*g+a*v+c*D,r[1]=l*M+u*T+f*L,r[4]=l*p+u*E+f*C,r[7]=l*g+u*v+f*D,r[2]=h*M+d*T+x*L,r[5]=h*p+d*E+x*C,r[8]=h*g+d*v+x*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,x=e*f+n*h+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return t[0]=f*M,t[1]=(s*l-u*n)*M,t[2]=(a*n-s*o)*M,t[3]=h*M,t[4]=(u*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=d*M,t[7]=(n*c-l*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qo.makeScale(t,e)),this}rotate(t){return this.premultiply(qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qo=new Me;function Du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _h(){const i=yo("canvas");return i.style.display="block",i}const ol={};function dr(i){i in ol||(ol[i]=!0,console.warn(i))}function vh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Mh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ue={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===We&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===We&&(i.r=Gs(i.r),i.g=Gs(i.g),i.b=Gs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bi?Eo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const al=[.64,.33,.3,.6,.15,.06],cl=[.2126,.7152,.0722],ll=[.3127,.329],ul=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fl=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ue.define({[Zs]:{primaries:al,whitePoint:ll,transfer:Eo,toXYZ:ul,fromXYZ:fl,luminanceCoefficients:cl,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:al,whitePoint:ll,transfer:We,toXYZ:ul,fromXYZ:fl,luminanceCoefficients:cl,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}});let Ms;class Sh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=yo("canvas")),Ms.width=t.width,Ms.height=t.height;const n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wh=0;class Uu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($o(s[o].image)):r.push($o(s[o]))}else r=$o(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function $o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bh=0;class An extends Js{constructor(t=An.DEFAULT_IMAGE,e=An.DEFAULT_MAPPING,n=as,s=as,r=ci,o=cs,a=jn,c=Ri,l=An.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Ti(),this.name="",this.source=new Uu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x=t.x-Math.floor(t.x);break;case as:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y=t.y-Math.floor(t.y);break;case as:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=yu;An.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,e=0,n=0,s=1){qe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],x=c[9],M=c[2],p=c[6],g=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(x+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,v=(d+1)/2,L=(g+1)/2,C=(u+h)/4,D=(f+M)/4,z=(x+p)/4;return E>v&&E>L?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=D/n):v>L?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=z/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=D/r,s=z/r),this.set(n,s,r,e),this}let T=Math.sqrt((p-x)*(p-x)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(p-x)/T,this.y=(f-M)/T,this.z=(h-u)/T,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eh extends Js{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new An(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Uu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends Eh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nu extends An{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Th extends An{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],d=r[o+1],x=r[o+2],M=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=x,t[e+3]=M;return}if(f!==M||c!==h||l!==d||u!==x){let p=1-a;const g=c*h+l*d+u*x+f*M,T=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){const L=Math.sqrt(E),C=Math.atan2(L,g*T);p=Math.sin(p*C)/L,a=Math.sin(a*C)/L}const v=a*T;if(c=c*p+h*v,l=l*p+d*v,u=u*p+x*v,f=f*p+M*v,p===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=L,l*=L,u*=L,f*=L}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],x=r[o+3];return t[e]=a*x+u*f+c*d-l*h,t[e+1]=c*x+u*h+l*f-a*d,t[e+2]=l*x+u*d+a*h-c*f,t[e+3]=u*x-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*x,this._y=l*d*f-h*u*x,this._z=l*u*x+h*d*f,this._w=l*u*f-h*d*x;break;case"YXZ":this._x=h*u*f+l*d*x,this._y=l*d*f-h*u*x,this._z=l*u*x-h*d*f,this._w=l*u*f+h*d*x;break;case"ZXY":this._x=h*u*f-l*d*x,this._y=l*d*f+h*u*x,this._z=l*u*x+h*d*f,this._w=l*u*f-h*d*x;break;case"ZYX":this._x=h*u*f-l*d*x,this._y=l*d*f+h*u*x,this._z=l*u*x-h*d*f,this._w=l*u*f+h*d*x;break;case"YZX":this._x=h*u*f+l*d*x,this._y=l*d*f+h*u*x,this._z=l*u*x-h*d*f,this._w=l*u*f-h*d*x;break;case"XZY":this._x=h*u*f-l*d*x,this._y=l*d*f-h*u*x,this._z=l*u*x+h*d*f,this._w=l*u*f+h*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_n(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yo.copy(this).projectOnVector(t),this.sub(Yo)}reflect(t){return this.sub(Yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_n(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new F,hl=new ps;class ms{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),zr.subVectors(this.max,tr),ys.subVectors(t.a,tr),Ss.subVectors(t.b,tr),ws.subVectors(t.c,tr),Li.subVectors(Ss,ys),Ii.subVectors(ws,Ss),Zi.subVectors(ys,ws);let e=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-Zi.z,Zi.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,Zi.z,0,-Zi.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-Zi.y,Zi.x,0];return!Zo(e,ys,Ss,ws,zr)||(e=[1,0,0,0,1,0,0,0,1],!Zo(e,ys,Ss,ws,zr))?!1:(Or.crossVectors(Li,Ii),e=[Or.x,Or.y,Or.z],Zo(e,ys,Ss,ws,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mi=[new F,new F,new F,new F,new F,new F,new F,new F],$n=new F,Fr=new ms,ys=new F,Ss=new F,ws=new F,Li=new F,Ii=new F,Zi=new F,tr=new F,zr=new F,Or=new F,Ji=new F;function Zo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ji.fromArray(i,r);const a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),c=t.dot(Ji),l=e.dot(Ji),u=n.dot(Ji);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ah=new ms,er=new F,Jo=new F;class js{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ah.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);const e=er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(Jo)),this.expandByPoint(er.copy(t.center).sub(Jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new F,jo=new F,Br=new F,Di=new F,Ko=new F,Vr=new F,Qo=new F;class Fu{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jo.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(jo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Br),a=Di.dot(this.direction),c=-Di.dot(Br),l=Di.lengthSq(),u=Math.abs(1-o*o);let f,h,d,x;if(u>0)if(f=o*c-a,h=o*a-c,x=r*u,f>=0)if(h>=-x)if(h<=x){const M=1/u;f*=M,h*=M,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-x?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=x?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(jo).addScaledVector(Br,h),d}intersectSphere(t,e){gi.subVectors(t.center,this.origin);const n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,s,r){Ko.subVectors(e,t),Vr.subVectors(n,t),Qo.crossVectors(Ko,Vr);let o=this.direction.dot(Qo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,t);const c=a*this.direction.dot(Vr.crossVectors(Di,Vr));if(c<0)return null;const l=a*this.direction.dot(Ko.cross(Di));if(l<0||c+l>o)return null;const u=-a*Di.dot(Qo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,x,M,p){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,x,M,p)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,x,M,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=x,g[11]=M,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/bs.setFromMatrixColumn(t,0).length(),r=1/bs.setFromMatrixColumn(t,1).length(),o=1/bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,x=a*u,M=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+x*l,e[5]=h-M*l,e[9]=-a*c,e[2]=M-h*l,e[6]=x+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,x=l*u,M=l*f;e[0]=h+M*a,e[4]=x*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-x,e[6]=M+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,x=l*u,M=l*f;e[0]=h-M*a,e[4]=-o*f,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*u,e[9]=M-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*f,x=a*u,M=a*f;e[0]=c*u,e[4]=x*l-d,e[8]=h*l+M,e[1]=c*f,e[5]=M*l+h,e[9]=d*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,x=a*c,M=a*l;e[0]=c*u,e[4]=M-h*f,e[8]=x*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+x,e[10]=h-M*f}else if(t.order==="XZY"){const h=o*c,d=o*l,x=a*c,M=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+M,e[5]=o*u,e[9]=d*f-x,e[2]=x*f-d,e[6]=a*u,e[10]=M*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rh,t,Ch)}lookAt(t,e,n){const s=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Ui.crossVectors(n,Bn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Ui.crossVectors(n,Bn)),Ui.normalize(),Hr.crossVectors(Bn,Ui),s[0]=Ui.x,s[4]=Hr.x,s[8]=Bn.x,s[1]=Ui.y,s[5]=Hr.y,s[9]=Bn.y,s[2]=Ui.z,s[6]=Hr.z,s[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],x=n[2],M=n[6],p=n[10],g=n[14],T=n[3],E=n[7],v=n[11],L=n[15],C=s[0],D=s[4],z=s[8],w=s[12],S=s[1],N=s[5],tt=s[9],Q=s[13],ut=s[2],W=s[6],$=s[10],Z=s[14],J=s[3],Et=s[7],nt=s[11],yt=s[15];return r[0]=o*C+a*S+c*ut+l*J,r[4]=o*D+a*N+c*W+l*Et,r[8]=o*z+a*tt+c*$+l*nt,r[12]=o*w+a*Q+c*Z+l*yt,r[1]=u*C+f*S+h*ut+d*J,r[5]=u*D+f*N+h*W+d*Et,r[9]=u*z+f*tt+h*$+d*nt,r[13]=u*w+f*Q+h*Z+d*yt,r[2]=x*C+M*S+p*ut+g*J,r[6]=x*D+M*N+p*W+g*Et,r[10]=x*z+M*tt+p*$+g*nt,r[14]=x*w+M*Q+p*Z+g*yt,r[3]=T*C+E*S+v*ut+L*J,r[7]=T*D+E*N+v*W+L*Et,r[11]=T*z+E*tt+v*$+L*nt,r[15]=T*w+E*Q+v*Z+L*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],x=t[3],M=t[7],p=t[11],g=t[15];return x*(+r*c*f-s*l*f-r*a*h+n*l*h+s*a*d-n*c*d)+M*(+e*c*d-e*l*h+r*o*h-s*o*d+s*l*u-r*c*u)+p*(+e*l*f-e*a*d-r*o*f+n*o*d+r*a*u-n*l*u)+g*(-s*a*u-e*c*f+e*a*h+s*o*f-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],x=t[12],M=t[13],p=t[14],g=t[15],T=f*p*l-M*h*l+M*c*d-a*p*d-f*c*g+a*h*g,E=x*h*l-u*p*l-x*c*d+o*p*d+u*c*g-o*h*g,v=u*M*l-x*f*l+x*a*d-o*M*d-u*a*g+o*f*g,L=x*f*c-u*M*c-x*a*h+o*M*h+u*a*p-o*f*p,C=e*T+n*E+s*v+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return t[0]=T*D,t[1]=(M*h*r-f*p*r-M*s*d+n*p*d+f*s*g-n*h*g)*D,t[2]=(a*p*r-M*c*r+M*s*l-n*p*l-a*s*g+n*c*g)*D,t[3]=(f*c*r-a*h*r-f*s*l+n*h*l+a*s*d-n*c*d)*D,t[4]=E*D,t[5]=(u*p*r-x*h*r+x*s*d-e*p*d-u*s*g+e*h*g)*D,t[6]=(x*c*r-o*p*r-x*s*l+e*p*l+o*s*g-e*c*g)*D,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*d+e*c*d)*D,t[8]=v*D,t[9]=(x*f*r-u*M*r-x*n*d+e*M*d+u*n*g-e*f*g)*D,t[10]=(o*M*r-x*a*r+x*n*l-e*M*l-o*n*g+e*a*g)*D,t[11]=(u*a*r-o*f*r-u*n*l+e*f*l+o*n*d-e*a*d)*D,t[12]=L*D,t[13]=(u*M*s-x*f*s+x*n*h-e*M*h-u*n*p+e*f*p)*D,t[14]=(x*a*s-o*M*s-x*n*c+e*M*c+o*n*p-e*a*p)*D,t[15]=(o*f*s-u*a*s+u*n*c-e*f*c-o*n*h+e*a*h)*D,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,x=r*f,M=o*u,p=o*f,g=a*f,T=c*l,E=c*u,v=c*f,L=n.x,C=n.y,D=n.z;return s[0]=(1-(M+g))*L,s[1]=(d+v)*L,s[2]=(x-E)*L,s[3]=0,s[4]=(d-v)*C,s[5]=(1-(h+g))*C,s[6]=(p+T)*C,s[7]=0,s[8]=(x+E)*D,s[9]=(p-T)*D,s[10]=(1-(h+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=bs.set(s[0],s[1],s[2]).length();const o=bs.set(s[4],s[5],s[6]).length(),a=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Yn.copy(this);const l=1/r,u=1/o,f=1/a;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,e.setFromRotationMatrix(Yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=wi){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let d,x;if(a===wi)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Mo)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wi){const c=this.elements,l=1/(e-t),u=1/(n-s),f=1/(o-r),h=(e+t)*l,d=(n+s)*u;let x,M;if(a===wi)x=(o+r)*f,M=-2*f;else if(a===Mo)x=r*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=M,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bs=new F,Yn=new Ne,Rh=new F(0,0,0),Ch=new F(1,1,1),Ui=new F,Hr=new F,Bn=new F,dl=new Ne,pl=new ps;class Nn{constructor(t=0,e=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(_n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_n(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(_n(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class zu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ph=0;const ml=new F,Es=new ps,xi=new Ne,Gr=new F,nr=new F,Lh=new F,Ih=new ps,gl=new F(1,0,0),xl=new F(0,1,0),_l=new F(0,0,1),vl={type:"added"},Dh={type:"removed"},Ts={type:"childadded",child:null},ta={type:"childremoved",child:null};class nn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const t=new F,e=new Nn,n=new ps,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Me}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(xl,t)}rotateZ(t){return this.rotateOnAxis(_l,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(xl,t)}translateZ(t){return this.translateOnAxis(_l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gr.copy(t):Gr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(nr,Gr,this.up):xi.lookAt(Gr,nr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(xi),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vl),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dh),ta.child=t,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vl),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,Lh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Ih,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}nn.DEFAULT_UP=new F(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new F,_i=new F,ea=new F,vi=new F,As=new F,Rs=new F,Ml=new F,na=new F,ia=new F,sa=new F,ra=new qe,oa=new qe,aa=new qe;class Xn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Zn.subVectors(t,e),s.cross(Zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Zn.subVectors(s,e),_i.subVectors(n,e),ea.subVectors(t,e);const o=Zn.dot(Zn),a=Zn.dot(_i),c=Zn.dot(ea),l=_i.dot(_i),u=_i.dot(ea),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,x=(o*u-a*c)*h;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ra.setScalar(0),oa.setScalar(0),aa.setScalar(0),ra.fromBufferAttribute(t,e),oa.fromBufferAttribute(t,n),aa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ra,r.x),o.addScaledVector(oa,r.y),o.addScaledVector(aa,r.z),o}static isFrontFacing(t,e,n,s){return Zn.subVectors(n,e),_i.subVectors(t,e),Zn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Zn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;As.subVectors(s,n),Rs.subVectors(r,n),na.subVectors(t,n);const c=As.dot(na),l=Rs.dot(na);if(c<=0&&l<=0)return e.copy(n);ia.subVectors(t,s);const u=As.dot(ia),f=Rs.dot(ia);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(As,o);sa.subVectors(t,r);const d=As.dot(sa),x=Rs.dot(sa);if(x>=0&&d<=x)return e.copy(r);const M=d*l-c*x;if(M<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(Rs,a);const p=u*x-d*f;if(p<=0&&f-u>=0&&d-x>=0)return Ml.subVectors(r,s),a=(f-u)/(f-u+(d-x)),e.copy(s).addScaledVector(Ml,a);const g=1/(p+M+h);return o=M*g,a=h*g,e.copy(n).addScaledVector(As,o).addScaledVector(Rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},kr={h:0,s:0,l:0};function ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class xe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ue.workingColorSpace){if(t=xh(t,1),e=_n(e,0,1),n=_n(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ca(o,r,t+1/3),this.g=ca(o,r,t),this.b=ca(o,r,t-1/3)}return Ue.toWorkingColorSpace(this,s),this}setStyle(t,e=Fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fn){const n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return Ue.fromWorkingColorSpace(bn.copy(this),t),Math.round(_n(bn.r*255,0,255))*65536+Math.round(_n(bn.g*255,0,255))*256+Math.round(_n(bn.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ue.workingColorSpace){Ue.fromWorkingColorSpace(bn.copy(this),e);const n=bn.r,s=bn.g,r=bn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Fn){Ue.fromWorkingColorSpace(bn.copy(this),t);const e=bn.r,n=bn.g,s=bn.b;return t!==Fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(kr);const n=Xo(Ni.h,kr.h,e),s=Xo(Ni.s,kr.s,e),r=Xo(Ni.l,kr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new xe;xe.NAMES=Ou;let Uh=0;class gs extends Js{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Ti(),this.name="",this.blending=Vs,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ra,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Le extends gs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new F,Wr=new Vt;class pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fc&&(t.usage=this.usage),t}}class Bu extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vu extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Nh=0;const Wn=new Ne,la=new nn,Cs=new F,Vn=new ms,ir=new ms,hn=new F;class Ke extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Du(t)?Vu:Bu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return la.lookAt(t),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Te(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Vn.min,ir.min),Vn.expandByPoint(hn),hn.addVectors(Vn.max,ir.max),Vn.expandByPoint(hn)):(Vn.expandByPoint(ir.min),Vn.expandByPoint(ir.max))}Vn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)hn.fromBufferAttribute(a,l),c&&(Cs.fromBufferAttribute(t,l),hn.add(Cs)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<n.count;z++)a[z]=new F,c[z]=new F;const l=new F,u=new F,f=new F,h=new Vt,d=new Vt,x=new Vt,M=new F,p=new F;function g(z,w,S){l.fromBufferAttribute(n,z),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,S),h.fromBufferAttribute(r,z),d.fromBufferAttribute(r,w),x.fromBufferAttribute(r,S),u.sub(l),f.sub(l),d.sub(h),x.sub(h);const N=1/(d.x*x.y-x.x*d.y);isFinite(N)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(f,-d.y).multiplyScalar(N),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-x.x).multiplyScalar(N),a[z].add(M),a[w].add(M),a[S].add(M),c[z].add(p),c[w].add(p),c[S].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let z=0,w=T.length;z<w;++z){const S=T[z],N=S.start,tt=S.count;for(let Q=N,ut=N+tt;Q<ut;Q+=3)g(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const E=new F,v=new F,L=new F,C=new F;function D(z){L.fromBufferAttribute(s,z),C.copy(L);const w=a[z];E.copy(w),E.sub(L.multiplyScalar(L.dot(w))).normalize(),v.crossVectors(C,w);const N=v.dot(c[z])<0?-1:1;o.setXYZW(z,E.x,E.y,E.z,N)}for(let z=0,w=T.length;z<w;++z){const S=T[z],N=S.start,tt=S.count;for(let Q=N,ut=N+tt;Q<ut;Q+=3)D(t.getX(Q+0)),D(t.getX(Q+1)),D(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new F,r=new F,o=new F,a=new F,c=new F,l=new F,u=new F,f=new F;if(t)for(let h=0,d=t.count;h<d;h+=3){const x=t.getX(h+0),M=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,x=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*u;for(let g=0;g<u;g++)h[x++]=l[d++]}return new pn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new Ne,ji=new Fu,Xr=new js,Sl=new F,qr=new F,$r=new F,Yr=new F,ua=new F,Zr=new F,wl=new F,Jr=new F;class O extends nn{constructor(t=new Ke,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(ua.fromBufferAttribute(f,t),o?Zr.addScaledVector(ua,u):Zr.addScaledVector(ua.sub(e),u))}e.add(Zr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(Xr.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Xr,Sl)===null||ji.origin.distanceToSquared(Sl)>(t.far-t.near)**2))&&(yl.copy(r).invert(),ji.copy(t.ray).applyMatrix4(yl),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,M=h.length;x<M;x++){const p=h[x],g=o[p.materialIndex],T=Math.max(p.start,d.start),E=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=T,L=E;v<L;v+=3){const C=a.getX(v),D=a.getX(v+1),z=a.getX(v+2);s=jr(this,g,t,n,l,u,f,C,D,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const x=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let p=x,g=M;p<g;p+=3){const T=a.getX(p),E=a.getX(p+1),v=a.getX(p+2);s=jr(this,o,t,n,l,u,f,T,E,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,M=h.length;x<M;x++){const p=h[x],g=o[p.materialIndex],T=Math.max(p.start,d.start),E=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let v=T,L=E;v<L;v+=3){const C=v,D=v+1,z=v+2;s=jr(this,g,t,n,l,u,f,C,D,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const x=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let p=x,g=M;p<g;p+=3){const T=p,E=p+1,v=p+2;s=jr(this,o,t,n,l,u,f,T,E,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Fh(i,t,e,n,s,r,o,a){let c;if(t.side===Tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ki,a),c===null)return null;Jr.copy(a),Jr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Jr);return l<e.near||l>e.far?null:{distance:l,point:Jr.clone(),object:i}}function jr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,qr),i.getVertexPosition(c,$r),i.getVertexPosition(l,Yr);const u=Fh(i,t,e,n,qr,$r,Yr,wl);if(u){const f=new F;Xn.getBarycoord(wl,qr,$r,Yr,f),s&&(u.uv=Xn.getInterpolatedAttribute(s,a,c,l,f,new Vt)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,a,c,l,f,new Vt)),o&&(u.normal=Xn.getInterpolatedAttribute(o,a,c,l,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new F,materialIndex:0};Xn.getNormal(qr,$r,Yr,h.normal),u.face=h,u.barycoord=f}return u}class oe extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(f,2));function x(M,p,g,T,E,v,L,C,D,z,w){const S=v/D,N=L/z,tt=v/2,Q=L/2,ut=C/2,W=D+1,$=z+1;let Z=0,J=0;const Et=new F;for(let nt=0;nt<$;nt++){const yt=nt*N-Q;for(let Pt=0;Pt<W;Pt++){const Qt=Pt*S-tt;Et[M]=Qt*T,Et[p]=yt*E,Et[g]=ut,l.push(Et.x,Et.y,Et.z),Et[M]=0,Et[p]=0,Et[g]=C>0?1:-1,u.push(Et.x,Et.y,Et.z),f.push(Pt/D),f.push(1-nt/z),Z+=1}}for(let nt=0;nt<z;nt++)for(let yt=0;yt<D;yt++){const Pt=h+yt+W*nt,Qt=h+yt+W*(nt+1),st=h+(yt+1)+W*(nt+1),ot=h+(yt+1)+W*nt;c.push(Pt,Qt,ot),c.push(Qt,st,ot),J+=6}a.addGroup(d,J,w),d+=J,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ys(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Dn(i){const t={};for(let e=0;e<i.length;e++){const n=Ys(i[e]);for(const s in n)t[s]=n[s]}return t}function zh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const Oh={clone:Ys,merge:Dn};var Bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends gs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bh,this.fragmentShader=Vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=zh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gu extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new F,bl=new Vt,El=new Vt;class Hn extends Gu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hc*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,bl,El),e.subVectors(El,bl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ps=-90,Ls=1;class Hh extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Hn(Ps,Ls,t,e);s.layers=this.layers,this.add(s);const r=new Hn(Ps,Ls,t,e);r.layers=this.layers,this.add(r);const o=new Hn(Ps,Ls,t,e);o.layers=this.layers,this.add(o);const a=new Hn(Ps,Ls,t,e);a.layers=this.layers,this.add(a);const c=new Hn(Ps,Ls,t,e);c.layers=this.layers,this.add(c);const l=new Hn(Ps,Ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ku extends An{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ws,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gh extends fs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ku(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ci}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oe(5,5,5),r=new Wi({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Vi});r.uniforms.tEquirect.value=e;const o=new O(s,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=ci),new Hh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const fa=new F,kh=new F,Wh=new Me;class ns{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fa.subVectors(n,e).cross(kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wh.getNormalMatrix(t),s=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new js,Kr=new F;class Rc{constructor(t=new ns,e=new ns,n=new ns,s=new ns,r=new ns,o=new ns){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],f=s[6],h=s[7],d=s[8],x=s[9],M=s[10],p=s[11],g=s[12],T=s[13],E=s[14],v=s[15];if(n[0].setComponents(c-r,h-l,p-d,v-g).normalize(),n[1].setComponents(c+r,h+l,p+d,v+g).normalize(),n[2].setComponents(c+o,h+u,p+x,v+T).normalize(),n[3].setComponents(c-o,h-u,p-x,v-T).normalize(),n[4].setComponents(c-a,h-f,p-M,v-E).normalize(),e===wi)n[5].setComponents(c+a,h+f,p+M,v+E).normalize();else if(e===Mo)n[5].setComponents(a,f,M,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Kr.x=s.normal.x>0?t.max.x:t.min.x,Kr.y=s.normal.y>0?t.max.y:t.min.y,Kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xh(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,x)=>d.start-x.start);let h=0;for(let d=1;d<f.length;d++){const x=f[h],M=f[d];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,x=f.length;d<x;d++){const M=f[d];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class je extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],x=[],M=[],p=[];for(let g=0;g<u;g++){const T=g*h-o;for(let E=0;E<l;E++){const v=E*f-r;x.push(v,-T,0),M.push(0,0,1),p.push(E/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let T=0;T<a;T++){const E=T+l*g,v=T+l*(g+1),L=T+1+l*(g+1),C=T+1+l*g;d.push(E,v,C),d.push(v,L,C)}this.setIndex(d),this.setAttribute("position",new Te(x,3)),this.setAttribute("normal",new Te(M,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.width,t.height,t.widthSegments,t.heightSegments)}}var qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$h=`#ifdef USE_ALPHAHASH
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
#endif`,Yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kh=`#ifdef USE_AOMAP
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
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,td=`#ifdef USE_BATCHING
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
#endif`,ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rd=`#ifdef USE_IRIDESCENCE
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
#endif`,od=`#ifdef USE_BUMPMAP
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,md=`#define PI 3.141592653589793
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
} // validated`,gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xd=`vec3 transformedNormal = objectNormal;
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
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dd=`#ifdef USE_GRADIENTMAP
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
}`,Ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zd=`uniform bool receiveShadow;
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
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kd=`PhysicalMaterial material;
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
#endif`,Wd=`struct PhysicalMaterial {
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
}`,Xd=`
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
#endif`,qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
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
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pp=`float getShadowMask() {
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
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
}`,Kp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,o0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,c0=`#define LAMBERT
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
}`,l0=`#define MATCAP
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
}`,u0=`#define MATCAP
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
}`,f0=`#define NORMAL
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
}`,h0=`#define NORMAL
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
}`,d0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,x0=`#define TOON
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
}`,_0=`#define TOON
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
}`,v0=`uniform float size;
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
}`,M0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,S0=`uniform vec3 color;
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
}`,w0=`uniform float rotation;
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
}`,b0=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:qh,alphahash_pars_fragment:$h,alphamap_fragment:Yh,alphamap_pars_fragment:Zh,alphatest_fragment:Jh,alphatest_pars_fragment:jh,aomap_fragment:Kh,aomap_pars_fragment:Qh,batching_pars_vertex:td,batching_vertex:ed,begin_vertex:nd,beginnormal_vertex:id,bsdfs:sd,iridescence_fragment:rd,bumpmap_pars_fragment:od,clipping_planes_fragment:ad,clipping_planes_pars_fragment:cd,clipping_planes_pars_vertex:ld,clipping_planes_vertex:ud,color_fragment:fd,color_pars_fragment:hd,color_pars_vertex:dd,color_vertex:pd,common:md,cube_uv_reflection_fragment:gd,defaultnormal_vertex:xd,displacementmap_pars_vertex:_d,displacementmap_vertex:vd,emissivemap_fragment:Md,emissivemap_pars_fragment:yd,colorspace_fragment:Sd,colorspace_pars_fragment:wd,envmap_fragment:bd,envmap_common_pars_fragment:Ed,envmap_pars_fragment:Td,envmap_pars_vertex:Ad,envmap_physical_pars_fragment:Od,envmap_vertex:Rd,fog_vertex:Cd,fog_pars_vertex:Pd,fog_fragment:Ld,fog_pars_fragment:Id,gradientmap_pars_fragment:Dd,lightmap_pars_fragment:Ud,lights_lambert_fragment:Nd,lights_lambert_pars_fragment:Fd,lights_pars_begin:zd,lights_toon_fragment:Bd,lights_toon_pars_fragment:Vd,lights_phong_fragment:Hd,lights_phong_pars_fragment:Gd,lights_physical_fragment:kd,lights_physical_pars_fragment:Wd,lights_fragment_begin:Xd,lights_fragment_maps:qd,lights_fragment_end:$d,logdepthbuf_fragment:Yd,logdepthbuf_pars_fragment:Zd,logdepthbuf_pars_vertex:Jd,logdepthbuf_vertex:jd,map_fragment:Kd,map_pars_fragment:Qd,map_particle_fragment:tp,map_particle_pars_fragment:ep,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphinstance_vertex:sp,morphcolor_vertex:rp,morphnormal_vertex:op,morphtarget_pars_vertex:ap,morphtarget_vertex:cp,normal_fragment_begin:lp,normal_fragment_maps:up,normal_pars_fragment:fp,normal_pars_vertex:hp,normal_vertex:dp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:xp,iridescence_pars_fragment:_p,opaque_fragment:vp,packing:Mp,premultiplied_alpha_fragment:yp,project_vertex:Sp,dithering_fragment:wp,dithering_pars_fragment:bp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Rp,shadowmap_vertex:Cp,shadowmask_pars_fragment:Pp,skinbase_vertex:Lp,skinning_pars_vertex:Ip,skinning_vertex:Dp,skinnormal_vertex:Up,specularmap_fragment:Np,specularmap_pars_fragment:Fp,tonemapping_fragment:zp,tonemapping_pars_fragment:Op,transmission_fragment:Bp,transmission_pars_fragment:Vp,uv_pars_fragment:Hp,uv_pars_vertex:Gp,uv_vertex:kp,worldpos_vertex:Wp,background_vert:Xp,background_frag:qp,backgroundCube_vert:$p,backgroundCube_frag:Yp,cube_vert:Zp,cube_frag:Jp,depth_vert:jp,depth_frag:Kp,distanceRGBA_vert:Qp,distanceRGBA_frag:t0,equirect_vert:e0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:o0,meshlambert_vert:a0,meshlambert_frag:c0,meshmatcap_vert:l0,meshmatcap_frag:u0,meshnormal_vert:f0,meshnormal_frag:h0,meshphong_vert:d0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:x0,meshtoon_frag:_0,points_vert:v0,points_frag:M0,shadow_vert:y0,shadow_frag:S0,sprite_vert:w0,sprite_frag:b0},Kt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},oi={basic:{uniforms:Dn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Dn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new xe(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Dn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Dn([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Dn([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new xe(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Dn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Dn([Kt.points,Kt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Dn([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Dn([Kt.common,Kt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Dn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Dn([Kt.sprite,Kt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:Dn([Kt.common,Kt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:Dn([Kt.lights,Kt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};oi.physical={uniforms:Dn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Qr={r:0,b:0,g:0},Qi=new Nn,E0=new Ne;function T0(i,t,e,n,s,r,o){const a=new xe(0);let c=r===!0?0:1,l,u,f=null,h=0,d=null;function x(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function M(T){let E=!1;const v=x(T);v===null?g(a,c):v&&v.isColor&&(g(v,1),E=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,E){const v=x(E);v&&(v.isCubeTexture||v.mapping===bo)?(u===void 0&&(u=new O(new oe(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Ys(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(E.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(E0.makeRotationFromEuler(Qi)),u.material.toneMapped=Ue.getTransfer(v.colorSpace)!==We,(f!==v||h!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new O(new je(2,2),new Wi({name:"BackgroundMaterial",uniforms:Ys(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ue.getTransfer(v.colorSpace)!==We,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,h=v.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function g(T,E){T.getRGB(Qr,Hu(i)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),c=E,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,g(a,c)},render:M,addToRenderList:p}}function A0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(S,N,tt,Q,ut){let W=!1;const $=f(Q,tt,N);r!==$&&(r=$,l(r.object)),W=d(S,Q,tt,ut),W&&x(S,Q,tt,ut),ut!==null&&t.update(ut,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(S,N,tt,Q),ut!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function f(S,N,tt){const Q=tt.wireframe===!0;let ut=n[S.id];ut===void 0&&(ut={},n[S.id]=ut);let W=ut[N.id];W===void 0&&(W={},ut[N.id]=W);let $=W[Q];return $===void 0&&($=h(c()),W[Q]=$),$}function h(S){const N=[],tt=[],Q=[];for(let ut=0;ut<e;ut++)N[ut]=0,tt[ut]=0,Q[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:tt,attributeDivisors:Q,object:S,attributes:{},index:null}}function d(S,N,tt,Q){const ut=r.attributes,W=N.attributes;let $=0;const Z=tt.getAttributes();for(const J in Z)if(Z[J].location>=0){const nt=ut[J];let yt=W[J];if(yt===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),nt===void 0||nt.attribute!==yt||yt&&nt.data!==yt.data)return!0;$++}return r.attributesNum!==$||r.index!==Q}function x(S,N,tt,Q){const ut={},W=N.attributes;let $=0;const Z=tt.getAttributes();for(const J in Z)if(Z[J].location>=0){let nt=W[J];nt===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor));const yt={};yt.attribute=nt,nt&&nt.data&&(yt.data=nt.data),ut[J]=yt,$++}r.attributes=ut,r.attributesNum=$,r.index=Q}function M(){const S=r.newAttributes;for(let N=0,tt=S.length;N<tt;N++)S[N]=0}function p(S){g(S,0)}function g(S,N){const tt=r.newAttributes,Q=r.enabledAttributes,ut=r.attributeDivisors;tt[S]=1,Q[S]===0&&(i.enableVertexAttribArray(S),Q[S]=1),ut[S]!==N&&(i.vertexAttribDivisor(S,N),ut[S]=N)}function T(){const S=r.newAttributes,N=r.enabledAttributes;for(let tt=0,Q=N.length;tt<Q;tt++)N[tt]!==S[tt]&&(i.disableVertexAttribArray(tt),N[tt]=0)}function E(S,N,tt,Q,ut,W,$){$===!0?i.vertexAttribIPointer(S,N,tt,ut,W):i.vertexAttribPointer(S,N,tt,Q,ut,W)}function v(S,N,tt,Q){M();const ut=Q.attributes,W=tt.getAttributes(),$=N.defaultAttributeValues;for(const Z in W){const J=W[Z];if(J.location>=0){let Et=ut[Z];if(Et===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),Et!==void 0){const nt=Et.normalized,yt=Et.itemSize,Pt=t.get(Et);if(Pt===void 0)continue;const Qt=Pt.buffer,st=Pt.type,ot=Pt.bytesPerElement,wt=st===i.INT||st===i.UNSIGNED_INT||Et.gpuType===yc;if(Et.isInterleavedBufferAttribute){const bt=Et.data,Ft=bt.stride,lt=Et.offset;if(bt.isInstancedInterleavedBuffer){for(let gt=0;gt<J.locationSize;gt++)g(J.location+gt,bt.meshPerAttribute);S.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let gt=0;gt<J.locationSize;gt++)p(J.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let gt=0;gt<J.locationSize;gt++)E(J.location+gt,yt/J.locationSize,st,nt,Ft*ot,(lt+yt/J.locationSize*gt)*ot,wt)}else{if(Et.isInstancedBufferAttribute){for(let bt=0;bt<J.locationSize;bt++)g(J.location+bt,Et.meshPerAttribute);S.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let bt=0;bt<J.locationSize;bt++)p(J.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let bt=0;bt<J.locationSize;bt++)E(J.location+bt,yt/J.locationSize,st,nt,yt*ot,yt/J.locationSize*bt*ot,wt)}}else if($!==void 0){const nt=$[Z];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(J.location,nt);break;case 3:i.vertexAttrib3fv(J.location,nt);break;case 4:i.vertexAttrib4fv(J.location,nt);break;default:i.vertexAttrib1fv(J.location,nt)}}}}T()}function L(){z();for(const S in n){const N=n[S];for(const tt in N){const Q=N[tt];for(const ut in Q)u(Q[ut].object),delete Q[ut];delete N[tt]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const N=n[S.id];for(const tt in N){const Q=N[tt];for(const ut in Q)u(Q[ut].object),delete Q[ut];delete N[tt]}delete n[S.id]}function D(S){for(const N in n){const tt=n[N];if(tt[S.id]===void 0)continue;const Q=tt[S.id];for(const ut in Q)u(Q[ut].object),delete Q[ut];delete tt[S.id]}}function z(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:p,disableUnusedAttributes:T}}function R0(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let x=0;x<f;x++)d+=u[x];e.update(d,n,1)}function c(l,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)o(l[x],u[x],h[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let x=0;for(let M=0;M<f;M++)x+=u[M]*h[M];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function C0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==jn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const z=D===Er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Ri&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==li&&!z)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:L,maxSamples:C}}function P0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ns,a=new Me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const x=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!s||x===null||x.length===0||r&&!p)r?u(null):l();else{const T=r?0:n,E=T*4;let v=g.clippingState||null;c.value=v,v=u(x,h,E,d);for(let L=0;L!==E;++L)v[L]=e[L];g.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,x){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=c.value,x!==!0||p===null){const g=d+M*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,v=d;E!==M;++E,v+=4)o.copy(f[E]).applyMatrix4(T,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function L0(i){let t=new WeakMap;function e(o,a){return a===Fa?o.mapping=Ws:a===za&&(o.mapping=Xs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fa||a===za)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Gh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Xu extends Gu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Os=4,Tl=[.125,.215,.35,.446,.526,.582],os=20,ha=new Xu,Al=new xe;let da=null,pa=0,ma=0,ga=!1;const is=(1+Math.sqrt(5))/2,Is=1/is,Rl=[new F(-is,Is,0),new F(is,Is,0),new F(-Is,0,is),new F(Is,0,is),new F(0,is,-Is),new F(0,is,Is),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){da=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(da,pa,ma),this._renderer.xr.enabled=ga,t.scissorTest=!1,to(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ws||t.mapping===Xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),da=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Er,format:jn,colorSpace:Zs,depthBuffer:!1},s=Pl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I0(r)),this._blurMaterial=D0(r,t,e)}return s}_compileMaterial(t){const e=new O(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s){const a=new Hn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Al),u.toneMapping=Ei,u.autoClear=!1;const d=new Le({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),x=new O(new oe,d);let M=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,M=!0):(d.color.copy(Al),M=!0);for(let g=0;g<6;g++){const T=g%3;T===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):T===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const E=this._cubeSize;to(s,T*E,g>2?E:0,E,E),u.setRenderTarget(s),M&&u.render(x,a),u.render(t,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ws||t.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new O(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;to(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ha)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rl[(s-r-1)%Rl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new O(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*os-1),M=r/x,p=isFinite(r)?1+Math.floor(u*M):os;p>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${os}`);const g=[];let T=0;for(let D=0;D<os;++D){const z=D/M,w=Math.exp(-z*z/2);g.push(w),D===0?T+=w:D<p&&(T+=2*w)}for(let D=0;D<g.length;D++)g[D]=g[D]/T;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=x,h.mipInt.value=E-n;const v=this._sizeLods[s],L=3*v*(s>E-Os?s-E+Os:0),C=4*(this._cubeSize-v);to(e,L,C,3*v,2*v),c.setRenderTarget(e),c.render(f,ha)}}function I0(i){const t=[],e=[],n=[];let s=i;const r=i-Os+1+Tl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Os?c=Tl[o-i+Os-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,x=6,M=3,p=2,g=1,T=new Float32Array(M*x*d),E=new Float32Array(p*x*d),v=new Float32Array(g*x*d);for(let C=0;C<d;C++){const D=C%3*2/3-1,z=C>2?0:-1,w=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];T.set(w,M*x*C),E.set(h,p*x*C);const S=[C,C,C,C,C,C];v.set(S,g*x*C)}const L=new Ke;L.setAttribute("position",new pn(T,M)),L.setAttribute("uv",new pn(E,p)),L.setAttribute("faceIndex",new pn(v,g)),t.push(L),s>Os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pl(i,t,e){const n=new fs(i,t,e);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function to(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function D0(i,t,e){const n=new Float32Array(os),s=new F(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Ll(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Il(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Cc(){return`

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
	`}function U0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Fa||c===za,u=c===Ws||c===Xs;if(l||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Cl(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Cl(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function N0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function F0(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const x in h.attributes)t.remove(h.attributes[x]);for(const x in h.morphAttributes){const M=h.morphAttributes[x];for(let p=0,g=M.length;p<g;p++)t.remove(M[p])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const x in h)t.update(h[x],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const x in d){const M=d[x];for(let p=0,g=M.length;p<g;p++)t.update(M[p],i.ARRAY_BUFFER)}}function l(f){const h=[],d=f.index,x=f.attributes.position;let M=0;if(d!==null){const T=d.array;M=d.version;for(let E=0,v=T.length;E<v;E+=3){const L=T[E+0],C=T[E+1],D=T[E+2];h.push(L,C,C,D,D,L)}}else if(x!==void 0){const T=x.array;M=x.version;for(let E=0,v=T.length/3-1;E<v;E+=3){const L=E+0,C=E+1,D=E+2;h.push(L,C,C,D,D,L)}}else return;const p=new(Du(h)?Vu:Bu)(h,1);p.version=M;const g=r.get(f);g&&t.remove(g),r.set(f,p)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function z0(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function l(h,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,h*o,x),e.update(d,n,x))}function u(h,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,x);let p=0;for(let g=0;g<x;g++)p+=d[g];e.update(p,n,1)}function f(h,d,x,M){if(x===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)l(h[g]/o,d[g],M[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,M,0,x);let g=0;for(let T=0;T<x;T++)g+=d[T]*M[T];e.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function O0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function B0(i,t,e){const n=new WeakMap,s=new qe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let S=function(){z.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),p===!0&&(v=3);let L=a.attributes.position.count*v,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const D=new Float32Array(L*C*4*f),z=new Nu(D,L,C,f);z.type=li,z.needsUpdate=!0;const w=v*4;for(let N=0;N<f;N++){const tt=g[N],Q=T[N],ut=E[N],W=L*C*4*N;for(let $=0;$<tt.count;$++){const Z=$*w;x===!0&&(s.fromBufferAttribute(tt,$),D[W+Z+0]=s.x,D[W+Z+1]=s.y,D[W+Z+2]=s.z,D[W+Z+3]=0),M===!0&&(s.fromBufferAttribute(Q,$),D[W+Z+4]=s.x,D[W+Z+5]=s.y,D[W+Z+6]=s.z,D[W+Z+7]=0),p===!0&&(s.fromBufferAttribute(ut,$),D[W+Z+8]=s.x,D[W+Z+9]=s.y,D[W+Z+10]=s.z,D[W+Z+11]=ut.itemSize===4?s.w:1)}}h={count:f,texture:z,size:new Vt(L,C)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let p=0;p<l.length;p++)x+=l[p];const M=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function V0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class qu extends An{constructor(t,e,n,s,r,o,a,c,l,u=Hs){if(u!==Hs&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Hs&&(n=us),n===void 0&&u===$s&&(n=qs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Gn,this.minFilter=c!==void 0?c:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $u=new An,Dl=new qu(1,1),Yu=new Nu,Zu=new Th,Ju=new ku,Ul=[],Nl=[],Fl=new Float32Array(16),zl=new Float32Array(9),Ol=new Float32Array(4);function Ks(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ul[s];if(r===void 0&&(r=new Float32Array(s),Ul[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function cn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function To(i,t){let e=Nl[t];e===void 0&&(e=new Int32Array(t),Nl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function H0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function X0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;Ol.set(n),i.uniformMatrix2fv(this.addr,!1,Ol),ln(e,n)}}function q0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;zl.set(n),i.uniformMatrix3fv(this.addr,!1,zl),ln(e,n)}}function $0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;Fl.set(n),i.uniformMatrix4fv(this.addr,!1,Fl),ln(e,n)}}function Y0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function K0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function nm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dl.compareFunction=Iu,r=Dl):r=$u,e.setTexture2D(t||r,s)}function im(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zu,s)}function sm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ju,s)}function rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yu,s)}function om(i){switch(i){case 5126:return H0;case 35664:return G0;case 35665:return k0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return $0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return j0;case 5125:return K0;case 36294:return Q0;case 36295:return tm;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}function am(i,t){i.uniform1fv(this.addr,t)}function cm(i,t){const e=Ks(t,this.size,2);i.uniform2fv(this.addr,e)}function lm(i,t){const e=Ks(t,this.size,3);i.uniform3fv(this.addr,e)}function um(i,t){const e=Ks(t,this.size,4);i.uniform4fv(this.addr,e)}function fm(i,t){const e=Ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hm(i,t){const e=Ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dm(i,t){const e=Ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pm(i,t){i.uniform1iv(this.addr,t)}function mm(i,t){i.uniform2iv(this.addr,t)}function gm(i,t){i.uniform3iv(this.addr,t)}function xm(i,t){i.uniform4iv(this.addr,t)}function _m(i,t){i.uniform1uiv(this.addr,t)}function vm(i,t){i.uniform2uiv(this.addr,t)}function Mm(i,t){i.uniform3uiv(this.addr,t)}function ym(i,t){i.uniform4uiv(this.addr,t)}function Sm(i,t,e){const n=this.cache,s=t.length,r=To(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||$u,r[o])}function wm(i,t,e){const n=this.cache,s=t.length,r=To(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Zu,r[o])}function bm(i,t,e){const n=this.cache,s=t.length,r=To(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ju,r[o])}function Em(i,t,e){const n=this.cache,s=t.length,r=To(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yu,r[o])}function Tm(i){switch(i){case 5126:return am;case 35664:return cm;case 35665:return lm;case 35666:return um;case 35674:return fm;case 35675:return hm;case 35676:return dm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return xm;case 5125:return _m;case 36294:return vm;case 36295:return Mm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Em}}class Am{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=om(e.type)}}class Rm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tm(e.type)}}class Cm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function Bl(i,t){i.seq.push(t),i.map[t.id]=t}function Pm(i,t,e){const n=i.name,s=n.length;for(xa.lastIndex=0;;){const r=xa.exec(n),o=xa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bl(e,l===void 0?new Am(a,i,t):new Rm(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Cm(a),Bl(e,f)),e=f}}}class xo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Pm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Vl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lm=37297;let Im=0;function Dm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Hl=new Me;function Um(i){Ue._getMatrix(Hl,Ue.workingColorSpace,i);const t=`mat3( ${Hl.elements.map(e=>e.toFixed(4))} )`;switch(Ue.getTransfer(i)){case Eo:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Dm(i.getShaderSource(t),o)}else return s}function Nm(i,t){const e=Um(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fm(i,t){let e;switch(t){case Qf:e="Linear";break;case th:e="Reinhard";break;case eh:e="Cineon";break;case nh:e="ACESFilmic";break;case sh:e="AgX";break;case rh:e="Neutral";break;case ih:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const eo=new F;function zm(){Ue.getLuminanceCoefficients(eo);const i=eo.x.toFixed(4),t=eo.y.toFixed(4),e=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function Bm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function pr(i){return i!==""}function kl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(i){return i.replace(Hm,km)}const Gm=new Map;function km(i,t){let e=Se[t];if(e===void 0){const n=Gm.get(t);if(n!==void 0)e=Se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return dc(e)}const Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(i){return i.replace(Wm,Xm)}function Xm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ql(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function qm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===If?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function $m(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ws:case Xs:t="ENVMAP_TYPE_CUBE";break;case bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ym(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xs:t="ENVMAP_MODE_REFRACTION";break}return t}function Zm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mu:t="ENVMAP_BLENDING_MULTIPLY";break;case jf:t="ENVMAP_BLENDING_MIX";break;case Kf:t="ENVMAP_BLENDING_ADD";break}return t}function Jm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function jm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=qm(e),l=$m(e),u=Ym(e),f=Zm(e),h=Jm(e),d=Om(e),x=Bm(r),M=s.createProgram();let p,g,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(pr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(pr).join(`
`),g.length>0&&(g+=`
`)):(p=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),g=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?Se.tonemapping_pars_fragment:"",e.toneMapping!==Ei?Fm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,Nm("linearToOutputTexel",e.outputColorSpace),zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=dc(o),o=kl(o,e),o=Wl(o,e),a=dc(a),a=kl(a,e),a=Wl(a,e),o=Xl(o),a=Xl(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=T+p+o,v=T+g+a,L=Vl(s,s.VERTEX_SHADER,E),C=Vl(s,s.FRAGMENT_SHADER,v);s.attachShader(M,L),s.attachShader(M,C),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(N){if(i.debug.checkShaderErrors){const tt=s.getProgramInfoLog(M).trim(),Q=s.getShaderInfoLog(L).trim(),ut=s.getShaderInfoLog(C).trim();let W=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,L,C);else{const Z=Gl(s,L,"vertex"),J=Gl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+tt+`
`+Z+`
`+J)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(Q===""||ut==="")&&($=!1);$&&(N.diagnostics={runnable:W,programLog:tt,vertexShader:{log:Q,prefix:p},fragmentShader:{log:ut,prefix:g}})}s.deleteShader(L),s.deleteShader(C),z=new xo(s,M),w=Vm(s,M)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(M,Lm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Im++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=C,this}let Km=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tg(t),e.set(t,n)),n}}class tg{constructor(t){this.id=Km++,this.code=t,this.usedTimes=0}}function eg(i,t,e,n,s,r,o){const a=new zu,c=new Qm,l=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,S,N,tt,Q){const ut=tt.fog,W=Q.geometry,$=w.isMeshStandardMaterial?tt.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||$),J=Z&&Z.mapping===bo?Z.image.height:null,Et=x[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const nt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,yt=nt!==void 0?nt.length:0;let Pt=0;W.morphAttributes.position!==void 0&&(Pt=1),W.morphAttributes.normal!==void 0&&(Pt=2),W.morphAttributes.color!==void 0&&(Pt=3);let Qt,st,ot,wt;if(Et){const ge=oi[Et];Qt=ge.vertexShader,st=ge.fragmentShader}else Qt=w.vertexShader,st=w.fragmentShader,c.update(w),ot=c.getVertexShaderID(w),wt=c.getFragmentShaderID(w);const bt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),lt=Q.isInstancedMesh===!0,gt=Q.isBatchedMesh===!0,kt=!!w.map,_t=!!w.matcap,Mt=!!Z,k=!!w.aoMap,$t=!!w.lightMap,Lt=!!w.bumpMap,Xt=!!w.normalMap,Ut=!!w.displacementMap,se=!!w.emissiveMap,qt=!!w.metalnessMap,I=!!w.roughnessMap,b=w.anisotropy>0,rt=w.clearcoat>0,G=w.dispersion>0,R=w.iridescence>0,H=w.sheen>0,X=w.transmission>0,j=b&&!!w.anisotropyMap,ft=rt&&!!w.clearcoatMap,At=rt&&!!w.clearcoatNormalMap,ht=rt&&!!w.clearcoatRoughnessMap,Rt=R&&!!w.iridescenceMap,Ot=R&&!!w.iridescenceThicknessMap,Bt=H&&!!w.sheenColorMap,Ct=H&&!!w.sheenRoughnessMap,Yt=!!w.specularMap,ee=!!w.specularColorMap,ne=!!w.specularIntensityMap,Y=X&&!!w.transmissionMap,Ht=X&&!!w.thicknessMap,xt=!!w.gradientMap,mt=!!w.alphaMap,Nt=w.alphaTest>0,vt=!!w.alphaHash,he=!!w.extensions;let Ie=Ei;w.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const Fe={shaderID:Et,shaderType:w.type,shaderName:w.name,vertexShader:Qt,fragmentShader:st,defines:w.defines,customVertexShaderID:ot,customFragmentShaderID:wt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:gt,batchingColor:gt&&Q._colorsTexture!==null,instancing:lt,instancingColor:lt&&Q.instanceColor!==null,instancingMorph:lt&&Q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Zs,alphaToCoverage:!!w.alphaToCoverage,map:kt,matcap:_t,envMap:Mt,envMapMode:Mt&&Z.mapping,envMapCubeUVHeight:J,aoMap:k,lightMap:$t,bumpMap:Lt,normalMap:Xt,displacementMap:h&&Ut,emissiveMap:se,normalMapObjectSpace:Xt&&w.normalMapType===lh,normalMapTangentSpace:Xt&&w.normalMapType===Lu,metalnessMap:qt,roughnessMap:I,anisotropy:b,anisotropyMap:j,clearcoat:rt,clearcoatMap:ft,clearcoatNormalMap:At,clearcoatRoughnessMap:ht,dispersion:G,iridescence:R,iridescenceMap:Rt,iridescenceThicknessMap:Ot,sheen:H,sheenColorMap:Bt,sheenRoughnessMap:Ct,specularMap:Yt,specularColorMap:ee,specularIntensityMap:ne,transmission:X,transmissionMap:Y,thicknessMap:Ht,gradientMap:xt,opaque:w.transparent===!1&&w.blending===Vs&&w.alphaToCoverage===!1,alphaMap:mt,alphaTest:Nt,alphaHash:vt,combine:w.combine,mapUv:kt&&M(w.map.channel),aoMapUv:k&&M(w.aoMap.channel),lightMapUv:$t&&M(w.lightMap.channel),bumpMapUv:Lt&&M(w.bumpMap.channel),normalMapUv:Xt&&M(w.normalMap.channel),displacementMapUv:Ut&&M(w.displacementMap.channel),emissiveMapUv:se&&M(w.emissiveMap.channel),metalnessMapUv:qt&&M(w.metalnessMap.channel),roughnessMapUv:I&&M(w.roughnessMap.channel),anisotropyMapUv:j&&M(w.anisotropyMap.channel),clearcoatMapUv:ft&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:At&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&M(w.sheenRoughnessMap.channel),specularMapUv:Yt&&M(w.specularMap.channel),specularColorMapUv:ee&&M(w.specularColorMap.channel),specularIntensityMapUv:ne&&M(w.specularIntensityMap.channel),transmissionMapUv:Y&&M(w.transmissionMap.channel),thicknessMapUv:Ht&&M(w.thicknessMap.channel),alphaMapUv:mt&&M(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Xt||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!W.attributes.uv&&(kt||mt),fog:!!ut,useFog:w.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ft,skinning:Q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Pt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:kt&&w.map.isVideoTexture===!0&&Ue.getTransfer(w.map.colorSpace)===We,decodeVideoTextureEmissive:se&&w.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(w.emissiveMap.colorSpace)===We,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ge,flipSided:w.side===Tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:he&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&w.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function g(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)S.push(N),S.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(T(S,w),E(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function T(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function E(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const S=x[w.type];let N;if(S){const tt=oi[S];N=Oh.clone(tt.uniforms)}else N=w.uniforms;return N}function L(w,S){let N;for(let tt=0,Q=u.length;tt<Q;tt++){const ut=u[tt];if(ut.cacheKey===S){N=ut,++N.usedTimes;break}}return N===void 0&&(N=new jm(i,S,w,r),u.push(N)),N}function C(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function D(w){c.remove(w)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:v,acquireProgram:L,releaseProgram:C,releaseShaderCache:D,programs:u,dispose:z}}function ng(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ig(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $l(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,h,d,x,M,p){let g=i[t];return g===void 0?(g={id:f.id,object:f,geometry:h,material:d,groupOrder:x,renderOrder:f.renderOrder,z:M,group:p},i[t]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=d,g.groupOrder=x,g.renderOrder=f.renderOrder,g.z=M,g.group=p),t++,g}function a(f,h,d,x,M,p){const g=o(f,h,d,x,M,p);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):e.push(g)}function c(f,h,d,x,M,p){const g=o(f,h,d,x,M,p);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function l(f,h){e.length>1&&e.sort(f||ig),n.length>1&&n.sort(h||$l),s.length>1&&s.sort(h||$l)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function sg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Yl,i.set(n,[o])):s>=r.length?(o=new Yl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function rg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new xe};break;case"SpotLight":e={position:new F,direction:new F,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":e={color:new xe,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function og(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ag=0;function cg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lg(i){const t=new rg,e=og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const s=new F,r=new Ne,o=new Ne;function a(l){let u=0,f=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,x=0,M=0,p=0,g=0,T=0,E=0,v=0,L=0,C=0,D=0;l.sort(cg);for(let w=0,S=l.length;w<S;w++){const N=l[w],tt=N.color,Q=N.intensity,ut=N.distance,W=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=tt.r*Q,f+=tt.g*Q,h+=tt.b*Q;else if(N.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(N.sh.coefficients[$],Q);D++}else if(N.isDirectionalLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Z=N.shadow,J=e.get(N);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.directionalShadow[d]=J,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=N.shadow.matrix,T++}n.directional[d]=$,d++}else if(N.isSpotLight){const $=t.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(tt).multiplyScalar(Q),$.distance=ut,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,n.spot[M]=$;const Z=N.shadow;if(N.map&&(n.spotLightMap[L]=N.map,L++,Z.updateMatrices(N),N.castShadow&&C++),n.spotLightMatrix[M]=Z.matrix,N.castShadow){const J=e.get(N);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.spotShadow[M]=J,n.spotShadowMap[M]=W,v++}M++}else if(N.isRectAreaLight){const $=t.get(N);$.color.copy(tt).multiplyScalar(Q),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),n.rectArea[p]=$,p++}else if(N.isPointLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){const Z=N.shadow,J=e.get(N);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,n.pointShadow[x]=J,n.pointShadowMap[x]=W,n.pointShadowMatrix[x]=N.shadow.matrix,E++}n.point[x]=$,x++}else if(N.isHemisphereLight){const $=t.get(N);$.skyColor.copy(N.color).multiplyScalar(Q),$.groundColor.copy(N.groundColor).multiplyScalar(Q),n.hemi[g]=$,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Kt.LTC_FLOAT_1,n.rectAreaLTC2=Kt.LTC_FLOAT_2):(n.rectAreaLTC1=Kt.LTC_HALF_1,n.rectAreaLTC2=Kt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const z=n.hash;(z.directionalLength!==d||z.pointLength!==x||z.spotLength!==M||z.rectAreaLength!==p||z.hemiLength!==g||z.numDirectionalShadows!==T||z.numPointShadows!==E||z.numSpotShadows!==v||z.numSpotMaps!==L||z.numLightProbes!==D)&&(n.directional.length=d,n.spot.length=M,n.rectArea.length=p,n.point.length=x,n.hemi.length=g,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,z.directionalLength=d,z.pointLength=x,z.spotLength=M,z.rectAreaLength=p,z.hemiLength=g,z.numDirectionalShadows=T,z.numPointShadows=E,z.numSpotShadows=v,z.numSpotMaps=L,z.numLightProbes=D,n.version=ag++)}function c(l,u){let f=0,h=0,d=0,x=0,M=0;const p=u.matrixWorldInverse;for(let g=0,T=l.length;g<T;g++){const E=l[g];if(E.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(E.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(E.isRectAreaLight){const v=n.rectArea[x];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),h++}else if(E.isHemisphereLight){const v=n.hemi[M];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(p),M++}}}return{setup:a,setupView:c,state:n}}function Zl(i){const t=new lg(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ug(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Zl(i),t.set(s,[a])):r>=o.length?(a=new Zl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class fg extends gs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hg extends gs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
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
}`;function mg(i,t,e){let n=new Rc;const s=new Vt,r=new Vt,o=new qe,a=new fg({depthPacking:ch}),c=new hg,l={},u=e.maxTextureSize,f={[ki]:Tn,[Tn]:ki,[Ge]:Ge},h=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:dg,fragmentShader:pg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const x=new Ke;x.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new O(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let g=this.type;this.render=function(C,D,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),tt=i.state;tt.setBlending(Vi),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const Q=g!==yi&&this.type===yi,ut=g===yi&&this.type!==yi;for(let W=0,$=C.length;W<$;W++){const Z=C[W],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const Et=J.getFrameExtents();if(s.multiply(Et),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Et.x),s.x=r.x*Et.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Et.y),s.y=r.y*Et.y,J.mapSize.y=r.y)),J.map===null||Q===!0||ut===!0){const yt=this.type!==yi?{minFilter:Gn,magFilter:Gn}:{};J.map!==null&&J.map.dispose(),J.map=new fs(s.x,s.y,yt),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const nt=J.getViewportCount();for(let yt=0;yt<nt;yt++){const Pt=J.getViewport(yt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),tt.viewport(o),J.updateMatrices(Z,yt),n=J.getFrustum(),v(D,z,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===yi&&T(J,z),J.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(w,S,N)};function T(C,D){const z=t.update(M);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new fs(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(D,null,z,h,M,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(D,null,z,d,M,null)}function E(C,D,z,w){let S=null;const N=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)S=N;else if(S=z.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const tt=S.uuid,Q=D.uuid;let ut=l[tt];ut===void 0&&(ut={},l[tt]=ut);let W=ut[Q];W===void 0&&(W=S.clone(),ut[Q]=W,D.addEventListener("dispose",L)),S=W}if(S.visible=D.visible,S.wireframe=D.wireframe,w===yi?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:f[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const tt=i.properties.get(S);tt.light=z}return S}function v(C,D,z,w,S){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===yi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);const Q=t.update(C),ut=C.material;if(Array.isArray(ut)){const W=Q.groups;for(let $=0,Z=W.length;$<Z;$++){const J=W[$],Et=ut[J.materialIndex];if(Et&&Et.visible){const nt=E(C,Et,w,S);C.onBeforeShadow(i,C,D,z,Q,nt,J),i.renderBufferDirect(z,null,Q,nt,C,J),C.onAfterShadow(i,C,D,z,Q,nt,J)}}}else if(ut.visible){const W=E(C,ut,w,S);C.onBeforeShadow(i,C,D,z,Q,W,null),i.renderBufferDirect(z,null,Q,W,C,null),C.onAfterShadow(i,C,D,z,Q,W,null)}}const tt=C.children;for(let Q=0,ut=tt.length;Q<ut;Q++)v(tt[Q],D,z,w,S)}function L(C){C.target.removeEventListener("dispose",L);for(const z in l){const w=l[z],S=C.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const gg={[Ca]:Pa,[La]:Ua,[Ia]:Na,[ks]:Da,[Pa]:Ca,[Ua]:La,[Na]:Ia,[Da]:ks};function xg(i,t){function e(){let Y=!1;const Ht=new qe;let xt=null;const mt=new qe(0,0,0,0);return{setMask:function(Nt){xt!==Nt&&!Y&&(i.colorMask(Nt,Nt,Nt,Nt),xt=Nt)},setLocked:function(Nt){Y=Nt},setClear:function(Nt,vt,he,Ie,Fe){Fe===!0&&(Nt*=Ie,vt*=Ie,he*=Ie),Ht.set(Nt,vt,he,Ie),mt.equals(Ht)===!1&&(i.clearColor(Nt,vt,he,Ie),mt.copy(Ht))},reset:function(){Y=!1,xt=null,mt.set(-1,0,0,0)}}}function n(){let Y=!1,Ht=!1,xt=null,mt=null,Nt=null;return{setReversed:function(vt){if(Ht!==vt){const he=t.get("EXT_clip_control");Ht?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT);const Ie=Nt;Nt=null,this.setClear(Ie)}Ht=vt},getReversed:function(){return Ht},setTest:function(vt){vt?bt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(vt){xt!==vt&&!Y&&(i.depthMask(vt),xt=vt)},setFunc:function(vt){if(Ht&&(vt=gg[vt]),mt!==vt){switch(vt){case Ca:i.depthFunc(i.NEVER);break;case Pa:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Da:i.depthFunc(i.GEQUAL);break;case Ua:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=vt}},setLocked:function(vt){Y=vt},setClear:function(vt){Nt!==vt&&(Ht&&(vt=1-vt),i.clearDepth(vt),Nt=vt)},reset:function(){Y=!1,xt=null,mt=null,Nt=null,Ht=!1}}}function s(){let Y=!1,Ht=null,xt=null,mt=null,Nt=null,vt=null,he=null,Ie=null,Fe=null;return{setTest:function(ge){Y||(ge?bt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(ge){Ht!==ge&&!Y&&(i.stencilMask(ge),Ht=ge)},setFunc:function(ge,$e,mn){(xt!==ge||mt!==$e||Nt!==mn)&&(i.stencilFunc(ge,$e,mn),xt=ge,mt=$e,Nt=mn)},setOp:function(ge,$e,mn){(vt!==ge||he!==$e||Ie!==mn)&&(i.stencilOp(ge,$e,mn),vt=ge,he=$e,Ie=mn)},setLocked:function(ge){Y=ge},setClear:function(ge){Fe!==ge&&(i.clearStencil(ge),Fe=ge)},reset:function(){Y=!1,Ht=null,xt=null,mt=null,Nt=null,vt=null,he=null,Ie=null,Fe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],x=null,M=!1,p=null,g=null,T=null,E=null,v=null,L=null,C=null,D=new xe(0,0,0),z=0,w=!1,S=null,N=null,tt=null,Q=null,ut=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Z=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=Z>=2);let Et=null,nt={};const yt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Qt=new qe().fromArray(yt),st=new qe().fromArray(Pt);function ot(Y,Ht,xt,mt){const Nt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(Y,vt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<xt;he++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Ht,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(Ht+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return vt}const wt={};wt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),bt(i.DEPTH_TEST),o.setFunc(ks),Lt(!1),Xt(el),bt(i.CULL_FACE),k(Vi);function bt(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function Ft(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function lt(Y,Ht){return f[Y]!==Ht?(i.bindFramebuffer(Y,Ht),f[Y]=Ht,Y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ht),Y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ht),!0):!1}function gt(Y,Ht){let xt=d,mt=!1;if(Y){xt=h.get(Ht),xt===void 0&&(xt=[],h.set(Ht,xt));const Nt=Y.textures;if(xt.length!==Nt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,he=Nt.length;vt<he;vt++)xt[vt]=i.COLOR_ATTACHMENT0+vt;xt.length=Nt.length,mt=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,mt=!0);mt&&i.drawBuffers(xt)}function kt(Y){return x!==Y?(i.useProgram(Y),x=Y,!0):!1}const _t={[rs]:i.FUNC_ADD,[Uf]:i.FUNC_SUBTRACT,[Nf]:i.FUNC_REVERSE_SUBTRACT};_t[Ff]=i.MIN,_t[zf]=i.MAX;const Mt={[Of]:i.ZERO,[Bf]:i.ONE,[Vf]:i.SRC_COLOR,[Aa]:i.SRC_ALPHA,[qf]:i.SRC_ALPHA_SATURATE,[Wf]:i.DST_COLOR,[Gf]:i.DST_ALPHA,[Hf]:i.ONE_MINUS_SRC_COLOR,[Ra]:i.ONE_MINUS_SRC_ALPHA,[Xf]:i.ONE_MINUS_DST_COLOR,[kf]:i.ONE_MINUS_DST_ALPHA,[$f]:i.CONSTANT_COLOR,[Yf]:i.ONE_MINUS_CONSTANT_COLOR,[Zf]:i.CONSTANT_ALPHA,[Jf]:i.ONE_MINUS_CONSTANT_ALPHA};function k(Y,Ht,xt,mt,Nt,vt,he,Ie,Fe,ge){if(Y===Vi){M===!0&&(Ft(i.BLEND),M=!1);return}if(M===!1&&(bt(i.BLEND),M=!0),Y!==Df){if(Y!==p||ge!==w){if((g!==rs||v!==rs)&&(i.blendEquation(i.FUNC_ADD),g=rs,v=rs),ge)switch(Y){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFunc(i.ONE,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}T=null,E=null,L=null,C=null,D.set(0,0,0),z=0,p=Y,w=ge}return}Nt=Nt||Ht,vt=vt||xt,he=he||mt,(Ht!==g||Nt!==v)&&(i.blendEquationSeparate(_t[Ht],_t[Nt]),g=Ht,v=Nt),(xt!==T||mt!==E||vt!==L||he!==C)&&(i.blendFuncSeparate(Mt[xt],Mt[mt],Mt[vt],Mt[he]),T=xt,E=mt,L=vt,C=he),(Ie.equals(D)===!1||Fe!==z)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Fe),D.copy(Ie),z=Fe),p=Y,w=!1}function $t(Y,Ht){Y.side===Ge?Ft(i.CULL_FACE):bt(i.CULL_FACE);let xt=Y.side===Tn;Ht&&(xt=!xt),Lt(xt),Y.blending===Vs&&Y.transparent===!1?k(Vi):k(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const mt=Y.stencilWrite;a.setTest(mt),mt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),se(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(Y){S!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),S=Y)}function Xt(Y){Y!==Pf?(bt(i.CULL_FACE),Y!==N&&(Y===el?i.cullFace(i.BACK):Y===Lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),N=Y}function Ut(Y){Y!==tt&&($&&i.lineWidth(Y),tt=Y)}function se(Y,Ht,xt){Y?(bt(i.POLYGON_OFFSET_FILL),(Q!==Ht||ut!==xt)&&(i.polygonOffset(Ht,xt),Q=Ht,ut=xt)):Ft(i.POLYGON_OFFSET_FILL)}function qt(Y){Y?bt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function I(Y){Y===void 0&&(Y=i.TEXTURE0+W-1),Et!==Y&&(i.activeTexture(Y),Et=Y)}function b(Y,Ht,xt){xt===void 0&&(Et===null?xt=i.TEXTURE0+W-1:xt=Et);let mt=nt[xt];mt===void 0&&(mt={type:void 0,texture:void 0},nt[xt]=mt),(mt.type!==Y||mt.texture!==Ht)&&(Et!==xt&&(i.activeTexture(xt),Et=xt),i.bindTexture(Y,Ht||wt[Y]),mt.type=Y,mt.texture=Ht)}function rt(){const Y=nt[Et];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function G(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function R(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function H(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function X(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function j(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Bt(Y){Qt.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Qt.copy(Y))}function Ct(Y){st.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),st.copy(Y))}function Yt(Y,Ht){let xt=l.get(Ht);xt===void 0&&(xt=new WeakMap,l.set(Ht,xt));let mt=xt.get(Y);mt===void 0&&(mt=i.getUniformBlockIndex(Ht,Y.name),xt.set(Y,mt))}function ee(Y,Ht){const mt=l.get(Ht).get(Y);c.get(Ht)!==mt&&(i.uniformBlockBinding(Ht,mt,Y.__bindingPointIndex),c.set(Ht,mt))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Et=null,nt={},f={},h=new WeakMap,d=[],x=null,M=!1,p=null,g=null,T=null,E=null,v=null,L=null,C=null,D=new xe(0,0,0),z=0,w=!1,S=null,N=null,tt=null,Q=null,ut=null,Qt.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:bt,disable:Ft,bindFramebuffer:lt,drawBuffers:gt,useProgram:kt,setBlending:k,setMaterial:$t,setFlipSided:Lt,setCullFace:Xt,setLineWidth:Ut,setPolygonOffset:se,setScissorTest:qt,activeTexture:I,bindTexture:b,unbindTexture:rt,compressedTexImage2D:G,compressedTexImage3D:R,texImage2D:Rt,texImage3D:Ot,updateUBOMapping:Yt,uniformBlockBinding:ee,texStorage2D:At,texStorage3D:ht,texSubImage2D:H,texSubImage3D:X,compressedTexSubImage2D:j,compressedTexSubImage3D:ft,scissor:Bt,viewport:Ct,reset:ne}}function Jl(i,t,e,n){const s=_g(n);switch(e){case Eu:return i*t;case Au:return i*t;case Ru:return i*t*2;case bc:return i*t/s.components*s.byteLength;case Ec:return i*t/s.components*s.byteLength;case Cu:return i*t*2/s.components*s.byteLength;case Tc:return i*t*2/s.components*s.byteLength;case Tu:return i*t*3/s.components*s.byteLength;case jn:return i*t*4/s.components*s.byteLength;case Ac:return i*t*4/s.components*s.byteLength;case fo:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:case Ga:return Math.max(i,16)*Math.max(t,8)/4;case Ba:case Ha:return Math.max(i,8)*Math.max(t,8)/2;case ka:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case go:case oc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pu:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case lc:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _g(i){switch(i){case Ri:case Su:return{byteLength:1,components:1};case Mr:case wu:case Er:return{byteLength:2,components:1};case Sc:case wc:return{byteLength:2,components:4};case us:case yc:case li:return{byteLength:4,components:1};case bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Vt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,b){return d?new OffscreenCanvas(I,b):yo("canvas")}function M(I,b,rt){let G=1;const R=qt(I);if((R.width>rt||R.height>rt)&&(G=rt/Math.max(R.width,R.height)),G<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const H=Math.floor(G*R.width),X=Math.floor(G*R.height);f===void 0&&(f=x(H,X));const j=b?x(H,X):f;return j.width=H,j.height=X,j.getContext("2d").drawImage(I,0,0,H,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+H+"x"+X+")."),j}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),I;return I}function p(I){return I.generateMipmaps}function g(I){i.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(I,b,rt,G,R=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let H=b;if(b===i.RED&&(rt===i.FLOAT&&(H=i.R32F),rt===i.HALF_FLOAT&&(H=i.R16F),rt===i.UNSIGNED_BYTE&&(H=i.R8)),b===i.RED_INTEGER&&(rt===i.UNSIGNED_BYTE&&(H=i.R8UI),rt===i.UNSIGNED_SHORT&&(H=i.R16UI),rt===i.UNSIGNED_INT&&(H=i.R32UI),rt===i.BYTE&&(H=i.R8I),rt===i.SHORT&&(H=i.R16I),rt===i.INT&&(H=i.R32I)),b===i.RG&&(rt===i.FLOAT&&(H=i.RG32F),rt===i.HALF_FLOAT&&(H=i.RG16F),rt===i.UNSIGNED_BYTE&&(H=i.RG8)),b===i.RG_INTEGER&&(rt===i.UNSIGNED_BYTE&&(H=i.RG8UI),rt===i.UNSIGNED_SHORT&&(H=i.RG16UI),rt===i.UNSIGNED_INT&&(H=i.RG32UI),rt===i.BYTE&&(H=i.RG8I),rt===i.SHORT&&(H=i.RG16I),rt===i.INT&&(H=i.RG32I)),b===i.RGB_INTEGER&&(rt===i.UNSIGNED_BYTE&&(H=i.RGB8UI),rt===i.UNSIGNED_SHORT&&(H=i.RGB16UI),rt===i.UNSIGNED_INT&&(H=i.RGB32UI),rt===i.BYTE&&(H=i.RGB8I),rt===i.SHORT&&(H=i.RGB16I),rt===i.INT&&(H=i.RGB32I)),b===i.RGBA_INTEGER&&(rt===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),rt===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),rt===i.UNSIGNED_INT&&(H=i.RGBA32UI),rt===i.BYTE&&(H=i.RGBA8I),rt===i.SHORT&&(H=i.RGBA16I),rt===i.INT&&(H=i.RGBA32I)),b===i.RGB&&rt===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),b===i.RGBA){const X=R?Eo:Ue.getTransfer(G);rt===i.FLOAT&&(H=i.RGBA32F),rt===i.HALF_FLOAT&&(H=i.RGBA16F),rt===i.UNSIGNED_BYTE&&(H=X===We?i.SRGB8_ALPHA8:i.RGBA8),rt===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),rt===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function v(I,b){let rt;return I?b===null||b===us||b===qs?rt=i.DEPTH24_STENCIL8:b===li?rt=i.DEPTH32F_STENCIL8:b===Mr&&(rt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===us||b===qs?rt=i.DEPTH_COMPONENT24:b===li?rt=i.DEPTH_COMPONENT32F:b===Mr&&(rt=i.DEPTH_COMPONENT16),rt}function L(I,b){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Gn&&I.minFilter!==ci?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function C(I){const b=I.target;b.removeEventListener("dispose",C),z(b),b.isVideoTexture&&u.delete(b)}function D(I){const b=I.target;b.removeEventListener("dispose",D),S(b)}function z(I){const b=n.get(I);if(b.__webglInit===void 0)return;const rt=I.source,G=h.get(rt);if(G){const R=G[b.__cacheKey];R.usedTimes--,R.usedTimes===0&&w(I),Object.keys(G).length===0&&h.delete(rt)}n.remove(I)}function w(I){const b=n.get(I);i.deleteTexture(b.__webglTexture);const rt=I.source,G=h.get(rt);delete G[b.__cacheKey],o.memory.textures--}function S(I){const b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(b.__webglFramebuffer[G]))for(let R=0;R<b.__webglFramebuffer[G].length;R++)i.deleteFramebuffer(b.__webglFramebuffer[G][R]);else i.deleteFramebuffer(b.__webglFramebuffer[G]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[G])}else{if(Array.isArray(b.__webglFramebuffer))for(let G=0;G<b.__webglFramebuffer.length;G++)i.deleteFramebuffer(b.__webglFramebuffer[G]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let G=0;G<b.__webglColorRenderbuffer.length;G++)b.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[G]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const rt=I.textures;for(let G=0,R=rt.length;G<R;G++){const H=n.get(rt[G]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(rt[G])}n.remove(I)}let N=0;function tt(){N=0}function Q(){const I=N;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),N+=1,I}function ut(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function W(I,b){const rt=n.get(I);if(I.isVideoTexture&&Ut(I),I.isRenderTargetTexture===!1&&I.version>0&&rt.__version!==I.version){const G=I.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(rt,I,b);return}}e.bindTexture(i.TEXTURE_2D,rt.__webglTexture,i.TEXTURE0+b)}function $(I,b){const rt=n.get(I);if(I.version>0&&rt.__version!==I.version){st(rt,I,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,rt.__webglTexture,i.TEXTURE0+b)}function Z(I,b){const rt=n.get(I);if(I.version>0&&rt.__version!==I.version){st(rt,I,b);return}e.bindTexture(i.TEXTURE_3D,rt.__webglTexture,i.TEXTURE0+b)}function J(I,b){const rt=n.get(I);if(I.version>0&&rt.__version!==I.version){ot(rt,I,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture,i.TEXTURE0+b)}const Et={[vr]:i.REPEAT,[as]:i.CLAMP_TO_EDGE,[Oa]:i.MIRRORED_REPEAT},nt={[Gn]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[ci]:i.LINEAR,[ko]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},yt={[uh]:i.NEVER,[gh]:i.ALWAYS,[fh]:i.LESS,[Iu]:i.LEQUAL,[hh]:i.EQUAL,[mh]:i.GEQUAL,[dh]:i.GREATER,[ph]:i.NOTEQUAL};function Pt(I,b){if(b.type===li&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ci||b.magFilter===ko||b.magFilter===Nr||b.magFilter===cs||b.minFilter===ci||b.minFilter===ko||b.minFilter===Nr||b.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Et[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Et[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Et[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,nt[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,nt[b.minFilter]),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,yt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Gn||b.minFilter!==Nr&&b.minFilter!==cs||b.type===li&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const rt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Qt(I,b){let rt=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",C));const G=b.source;let R=h.get(G);R===void 0&&(R={},h.set(G,R));const H=ut(b);if(H!==I.__cacheKey){R[H]===void 0&&(R[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,rt=!0),R[H].usedTimes++;const X=R[I.__cacheKey];X!==void 0&&(R[I.__cacheKey].usedTimes--,X.usedTimes===0&&w(b)),I.__cacheKey=H,I.__webglTexture=R[H].texture}return rt}function st(I,b,rt){let G=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(G=i.TEXTURE_3D);const R=Qt(I,b),H=b.source;e.bindTexture(G,I.__webglTexture,i.TEXTURE0+rt);const X=n.get(H);if(H.version!==X.__version||R===!0){e.activeTexture(i.TEXTURE0+rt);const j=Ue.getPrimaries(Ue.workingColorSpace),ft=b.colorSpace===Bi?null:Ue.getPrimaries(b.colorSpace),At=b.colorSpace===Bi||j===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let ht=M(b.image,!1,s.maxTextureSize);ht=se(b,ht);const Rt=r.convert(b.format,b.colorSpace),Ot=r.convert(b.type);let Bt=E(b.internalFormat,Rt,Ot,b.colorSpace,b.isVideoTexture);Pt(G,b);let Ct;const Yt=b.mipmaps,ee=b.isVideoTexture!==!0,ne=X.__version===void 0||R===!0,Y=H.dataReady,Ht=L(b,ht);if(b.isDepthTexture)Bt=v(b.format===$s,b.type),ne&&(ee?e.texStorage2D(i.TEXTURE_2D,1,Bt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Bt,ht.width,ht.height,0,Rt,Ot,null));else if(b.isDataTexture)if(Yt.length>0){ee&&ne&&e.texStorage2D(i.TEXTURE_2D,Ht,Bt,Yt[0].width,Yt[0].height);for(let xt=0,mt=Yt.length;xt<mt;xt++)Ct=Yt[xt],ee?Y&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,Rt,Ot,Ct.data):e.texImage2D(i.TEXTURE_2D,xt,Bt,Ct.width,Ct.height,0,Rt,Ot,Ct.data);b.generateMipmaps=!1}else ee?(ne&&e.texStorage2D(i.TEXTURE_2D,Ht,Bt,ht.width,ht.height),Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,Rt,Ot,ht.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,ht.width,ht.height,0,Rt,Ot,ht.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ee&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,Bt,Yt[0].width,Yt[0].height,ht.depth);for(let xt=0,mt=Yt.length;xt<mt;xt++)if(Ct=Yt[xt],b.format!==jn)if(Rt!==null)if(ee){if(Y)if(b.layerUpdates.size>0){const Nt=Jl(Ct.width,Ct.height,b.format,b.type);for(const vt of b.layerUpdates){const he=Ct.data.subarray(vt*Nt/Ct.data.BYTES_PER_ELEMENT,(vt+1)*Nt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,vt,Ct.width,Ct.height,1,Rt,he)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Ct.width,Ct.height,ht.depth,Rt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,Bt,Ct.width,Ct.height,ht.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Ct.width,Ct.height,ht.depth,Rt,Ot,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,Bt,Ct.width,Ct.height,ht.depth,0,Rt,Ot,Ct.data)}else{ee&&ne&&e.texStorage2D(i.TEXTURE_2D,Ht,Bt,Yt[0].width,Yt[0].height);for(let xt=0,mt=Yt.length;xt<mt;xt++)Ct=Yt[xt],b.format!==jn?Rt!==null?ee?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,Bt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?Y&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,Rt,Ot,Ct.data):e.texImage2D(i.TEXTURE_2D,xt,Bt,Ct.width,Ct.height,0,Rt,Ot,Ct.data)}else if(b.isDataArrayTexture)if(ee){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,Bt,ht.width,ht.height,ht.depth),Y)if(b.layerUpdates.size>0){const xt=Jl(ht.width,ht.height,b.format,b.type);for(const mt of b.layerUpdates){const Nt=ht.data.subarray(mt*xt/ht.data.BYTES_PER_ELEMENT,(mt+1)*xt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,ht.width,ht.height,1,Rt,Ot,Nt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Ot,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,ht.width,ht.height,ht.depth,0,Rt,Ot,ht.data);else if(b.isData3DTexture)ee?(ne&&e.texStorage3D(i.TEXTURE_3D,Ht,Bt,ht.width,ht.height,ht.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Ot,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,ht.width,ht.height,ht.depth,0,Rt,Ot,ht.data);else if(b.isFramebufferTexture){if(ne)if(ee)e.texStorage2D(i.TEXTURE_2D,Ht,Bt,ht.width,ht.height);else{let xt=ht.width,mt=ht.height;for(let Nt=0;Nt<Ht;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,Bt,xt,mt,0,Rt,Ot,null),xt>>=1,mt>>=1}}else if(Yt.length>0){if(ee&&ne){const xt=qt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Ht,Bt,xt.width,xt.height)}for(let xt=0,mt=Yt.length;xt<mt;xt++)Ct=Yt[xt],ee?Y&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Rt,Ot,Ct):e.texImage2D(i.TEXTURE_2D,xt,Bt,Rt,Ot,Ct);b.generateMipmaps=!1}else if(ee){if(ne){const xt=qt(ht);e.texStorage2D(i.TEXTURE_2D,Ht,Bt,xt.width,xt.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Ot,ht)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Rt,Ot,ht);p(b)&&g(G),X.__version=H.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ot(I,b,rt){if(b.image.length!==6)return;const G=Qt(I,b),R=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+rt);const H=n.get(R);if(R.version!==H.__version||G===!0){e.activeTexture(i.TEXTURE0+rt);const X=Ue.getPrimaries(Ue.workingColorSpace),j=b.colorSpace===Bi?null:Ue.getPrimaries(b.colorSpace),ft=b.colorSpace===Bi||X===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const At=b.isCompressedTexture||b.image[0].isCompressedTexture,ht=b.image[0]&&b.image[0].isDataTexture,Rt=[];for(let mt=0;mt<6;mt++)!At&&!ht?Rt[mt]=M(b.image[mt],!0,s.maxCubemapSize):Rt[mt]=ht?b.image[mt].image:b.image[mt],Rt[mt]=se(b,Rt[mt]);const Ot=Rt[0],Bt=r.convert(b.format,b.colorSpace),Ct=r.convert(b.type),Yt=E(b.internalFormat,Bt,Ct,b.colorSpace),ee=b.isVideoTexture!==!0,ne=H.__version===void 0||G===!0,Y=R.dataReady;let Ht=L(b,Ot);Pt(i.TEXTURE_CUBE_MAP,b);let xt;if(At){ee&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,Yt,Ot.width,Ot.height);for(let mt=0;mt<6;mt++){xt=Rt[mt].mipmaps;for(let Nt=0;Nt<xt.length;Nt++){const vt=xt[Nt];b.format!==jn?Bt!==null?ee?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt,0,0,vt.width,vt.height,Bt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt,Yt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt,0,0,vt.width,vt.height,Bt,Ct,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt,Yt,vt.width,vt.height,0,Bt,Ct,vt.data)}}}else{if(xt=b.mipmaps,ee&&ne){xt.length>0&&Ht++;const mt=qt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,Yt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(ht){ee?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Rt[mt].width,Rt[mt].height,Bt,Ct,Rt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Yt,Rt[mt].width,Rt[mt].height,0,Bt,Ct,Rt[mt].data);for(let Nt=0;Nt<xt.length;Nt++){const he=xt[Nt].image[mt].image;ee?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt+1,0,0,he.width,he.height,Bt,Ct,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt+1,Yt,he.width,he.height,0,Bt,Ct,he.data)}}else{ee?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Bt,Ct,Rt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Yt,Bt,Ct,Rt[mt]);for(let Nt=0;Nt<xt.length;Nt++){const vt=xt[Nt];ee?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt+1,0,0,Bt,Ct,vt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt+1,Yt,Bt,Ct,vt.image[mt])}}}p(b)&&g(i.TEXTURE_CUBE_MAP),H.__version=R.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function wt(I,b,rt,G,R,H){const X=r.convert(rt.format,rt.colorSpace),j=r.convert(rt.type),ft=E(rt.internalFormat,X,j,rt.colorSpace),At=n.get(b),ht=n.get(rt);if(ht.__renderTarget=b,!At.__hasExternalTextures){const Rt=Math.max(1,b.width>>H),Ot=Math.max(1,b.height>>H);R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?e.texImage3D(R,H,ft,Rt,Ot,b.depth,0,X,j,null):e.texImage2D(R,H,ft,Rt,Ot,0,X,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Xt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,R,ht.__webglTexture,0,Lt(b)):(R===i.TEXTURE_2D||R>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,R,ht.__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(I,b,rt){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer){const G=b.depthTexture,R=G&&G.isDepthTexture?G.type:null,H=v(b.stencilBuffer,R),X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=Lt(b);Xt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,H,b.width,b.height):rt?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,H,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,H,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,I)}else{const G=b.textures;for(let R=0;R<G.length;R++){const H=G[R],X=r.convert(H.format,H.colorSpace),j=r.convert(H.type),ft=E(H.internalFormat,X,j,H.colorSpace),At=Lt(b);rt&&Xt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ft,b.width,b.height):Xt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,ft,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ft,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(b.depthTexture);G.__renderTarget=b,(!G.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);const R=G.__webglTexture,H=Lt(b);if(b.depthTexture.format===Hs)Xt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,R,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,R,0);else if(b.depthTexture.format===$s)Xt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,R,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,R,0);else throw new Error("Unknown depthTexture format")}function lt(I){const b=n.get(I),rt=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const G=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),G){const R=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,G.removeEventListener("dispose",R)};G.addEventListener("dispose",R),b.__depthDisposeCallback=R}b.__boundDepthTexture=G}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");Ft(b.__webglFramebuffer,I)}else if(rt){b.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[G]),b.__webglDepthbuffer[G]===void 0)b.__webglDepthbuffer[G]=i.createRenderbuffer(),bt(b.__webglDepthbuffer[G],I,!1);else{const R=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=b.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,H)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),bt(b.__webglDepthbuffer,I,!1);else{const G=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,R=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,R),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,R)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(I,b,rt){const G=n.get(I);b!==void 0&&wt(G.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),rt!==void 0&&lt(I)}function kt(I){const b=I.texture,rt=n.get(I),G=n.get(b);I.addEventListener("dispose",D);const R=I.textures,H=I.isWebGLCubeRenderTarget===!0,X=R.length>1;if(X||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=b.version,o.memory.textures++),H){rt.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0){rt.__webglFramebuffer[j]=[];for(let ft=0;ft<b.mipmaps.length;ft++)rt.__webglFramebuffer[j][ft]=i.createFramebuffer()}else rt.__webglFramebuffer[j]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){rt.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)rt.__webglFramebuffer[j]=i.createFramebuffer()}else rt.__webglFramebuffer=i.createFramebuffer();if(X)for(let j=0,ft=R.length;j<ft;j++){const At=n.get(R[j]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Xt(I)===!1){rt.__webglMultisampledFramebuffer=i.createFramebuffer(),rt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let j=0;j<R.length;j++){const ft=R[j];rt.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,rt.__webglColorRenderbuffer[j]);const At=r.convert(ft.format,ft.colorSpace),ht=r.convert(ft.type),Rt=E(ft.internalFormat,At,ht,ft.colorSpace,I.isXRRenderTarget===!0),Ot=Lt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Rt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,rt.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(rt.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(rt.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)wt(rt.__webglFramebuffer[j][ft],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft);else wt(rt.__webglFramebuffer[j],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(b)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(X){for(let j=0,ft=R.length;j<ft;j++){const At=R[j],ht=n.get(At);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),Pt(i.TEXTURE_2D,At),wt(rt.__webglFramebuffer,I,At,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,0),p(At)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(j=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,G.__webglTexture),Pt(j,b),b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)wt(rt.__webglFramebuffer[ft],I,b,i.COLOR_ATTACHMENT0,j,ft);else wt(rt.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,j,0);p(b)&&g(j),e.unbindTexture()}I.depthBuffer&&lt(I)}function _t(I){const b=I.textures;for(let rt=0,G=b.length;rt<G;rt++){const R=b[rt];if(p(R)){const H=T(I),X=n.get(R).__webglTexture;e.bindTexture(H,X),g(H),e.unbindTexture()}}}const Mt=[],k=[];function $t(I){if(I.samples>0){if(Xt(I)===!1){const b=I.textures,rt=I.width,G=I.height;let R=i.COLOR_BUFFER_BIT;const H=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=n.get(I),j=b.length>1;if(j)for(let ft=0;ft<b.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,X.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let ft=0;ft<b.length;ft++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(R|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(R|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);const At=n.get(b[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,rt,G,0,0,rt,G,R,i.NEAREST),c===!0&&(Mt.length=0,k.length=0,Mt.push(i.COLOR_ATTACHMENT0+ft),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Mt.push(H),k.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ft=0;ft<b.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);const At=n.get(b[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,At,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const b=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Lt(I){return Math.min(s.maxSamples,I.samples)}function Xt(I){const b=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ut(I){const b=o.render.frame;u.get(I)!==b&&(u.set(I,b),I.update())}function se(I,b){const rt=I.colorSpace,G=I.format,R=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||rt!==Zs&&rt!==Bi&&(Ue.getTransfer(rt)===We?(G!==jn||R!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),b}function qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=tt,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=Z,this.setTextureCube=J,this.rebindTextures=gt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Xt}function Mg(i,t){function e(n,s=Bi){let r;const o=Ue.getTransfer(s);if(n===Ri)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return i.BYTE;if(n===wu)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===us)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===Er)return i.HALF_FLOAT;if(n===Eu)return i.ALPHA;if(n===Tu)return i.RGB;if(n===jn)return i.RGBA;if(n===Au)return i.LUMINANCE;if(n===Ru)return i.LUMINANCE_ALPHA;if(n===Hs)return i.DEPTH_COMPONENT;if(n===$s)return i.DEPTH_STENCIL;if(n===bc)return i.RED;if(n===Ec)return i.RED_INTEGER;if(n===Cu)return i.RG;if(n===Tc)return i.RG_INTEGER;if(n===Ac)return i.RGBA_INTEGER;if(n===fo||n===ho||n===po||n===mo)if(o===We)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ba||n===Va||n===Ha||n===Ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Wa)return o===We?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qa||n===$a||n===Ya||n===Za||n===Ja||n===ja||n===Ka||n===Qa||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return o===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===oc||n===ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===go)return o===We?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pu||n===cc||n===lc||n===uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class yg extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ae extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sg={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),g=this._getHandJoint(l,M);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,x=.005;l.inputState.pinching&&h>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
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

}`;class Eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new An,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wi({vertexShader:wg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new O(new je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tg extends Js{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,x=null;const M=new Eg,p=e.getContextAttributes();let g=null,T=null;const E=[],v=[],L=new Vt;let C=null;const D=new Hn;D.viewport=new qe;const z=new Hn;z.viewport=new qe;const w=[D,z],S=new yg;let N=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ot=E[st];return ot===void 0&&(ot=new _a,E[st]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(st){let ot=E[st];return ot===void 0&&(ot=new _a,E[st]=ot),ot.getGripSpace()},this.getHand=function(st){let ot=E[st];return ot===void 0&&(ot=new _a,E[st]=ot),ot.getHandSpace()};function Q(st){const ot=v.indexOf(st.inputSource);if(ot===-1)return;const wt=E[ot];wt!==void 0&&(wt.update(st.inputSource,st.frame,l||o),wt.dispatchEvent({type:st.type,data:st.inputSource}))}function ut(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",ut),s.removeEventListener("inputsourceschange",W);for(let st=0;st<E.length;st++){const ot=v[st];ot!==null&&(v[st]=null,E[st].disconnect(ot))}N=null,tt=null,M.reset(),t.setRenderTarget(g),d=null,h=null,f=null,s=null,T=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(st){l=st},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",ut),s.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const ot={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new fs(d.framebufferWidth,d.framebufferHeight,{format:jn,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ot=null,wt=null,bt=null;p.depth&&(bt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=p.stencil?$s:Hs,wt=p.stencil?qs:us);const Ft={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(Ft),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new fs(h.textureWidth,h.textureHeight,{format:jn,type:Ri,depthTexture:new qu(h.textureWidth,h.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function W(st){for(let ot=0;ot<st.removed.length;ot++){const wt=st.removed[ot],bt=v.indexOf(wt);bt>=0&&(v[bt]=null,E[bt].disconnect(wt))}for(let ot=0;ot<st.added.length;ot++){const wt=st.added[ot];let bt=v.indexOf(wt);if(bt===-1){for(let lt=0;lt<E.length;lt++)if(lt>=v.length){v.push(wt),bt=lt;break}else if(v[lt]===null){v[lt]=wt,bt=lt;break}if(bt===-1)break}const Ft=E[bt];Ft&&Ft.connect(wt)}}const $=new F,Z=new F;function J(st,ot,wt){$.setFromMatrixPosition(ot.matrixWorld),Z.setFromMatrixPosition(wt.matrixWorld);const bt=$.distanceTo(Z),Ft=ot.projectionMatrix.elements,lt=wt.projectionMatrix.elements,gt=Ft[14]/(Ft[10]-1),kt=Ft[14]/(Ft[10]+1),_t=(Ft[9]+1)/Ft[5],Mt=(Ft[9]-1)/Ft[5],k=(Ft[8]-1)/Ft[0],$t=(lt[8]+1)/lt[0],Lt=gt*k,Xt=gt*$t,Ut=bt/(-k+$t),se=Ut*-k;if(ot.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(se),st.translateZ(Ut),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Ft[10]===-1)st.projectionMatrix.copy(ot.projectionMatrix),st.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const qt=gt+Ut,I=kt+Ut,b=Lt-se,rt=Xt+(bt-se),G=_t*kt/I*qt,R=Mt*kt/I*qt;st.projectionMatrix.makePerspective(b,rt,G,R,qt,I),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function Et(st,ot){ot===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ot.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let ot=st.near,wt=st.far;M.texture!==null&&(M.depthNear>0&&(ot=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),S.near=z.near=D.near=ot,S.far=z.far=D.far=wt,(N!==S.near||tt!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,tt=S.far),D.layers.mask=st.layers.mask|2,z.layers.mask=st.layers.mask|4,S.layers.mask=D.layers.mask|z.layers.mask;const bt=st.parent,Ft=S.cameras;Et(S,bt);for(let lt=0;lt<Ft.length;lt++)Et(Ft[lt],bt);Ft.length===2?J(S,D,z):S.projectionMatrix.copy(D.projectionMatrix),nt(st,S,bt)};function nt(st,ot,wt){wt===null?st.matrix.copy(ot.matrixWorld):(st.matrix.copy(wt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ot.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ot.projectionMatrix),st.projectionMatrixInverse.copy(ot.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=hc*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(st){c=st,h!==null&&(h.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let yt=null;function Pt(st,ot){if(u=ot.getViewerPose(l||o),x=ot,u!==null){const wt=u.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let bt=!1;wt.length!==S.cameras.length&&(S.cameras.length=0,bt=!0);for(let lt=0;lt<wt.length;lt++){const gt=wt[lt];let kt=null;if(d!==null)kt=d.getViewport(gt);else{const Mt=f.getViewSubImage(h,gt);kt=Mt.viewport,lt===0&&(t.setRenderTargetTextures(T,Mt.colorTexture,h.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(T))}let _t=w[lt];_t===void 0&&(_t=new Hn,_t.layers.enable(lt),_t.viewport=new qe,w[lt]=_t),_t.matrix.fromArray(gt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(gt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(kt.x,kt.y,kt.width,kt.height),lt===0&&(S.matrix.copy(_t.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),bt===!0&&S.cameras.push(_t)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const lt=f.getDepthInformation(wt[0]);lt&&lt.isValid&&lt.texture&&M.init(t,lt,s.renderState)}}for(let wt=0;wt<E.length;wt++){const bt=v[wt],Ft=E[wt];bt!==null&&Ft!==void 0&&Ft.update(bt,ot,l||o)}yt&&yt(st,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),x=null}const Qt=new Wu;Qt.setAnimationLoop(Pt),this.setAnimationLoop=function(st){yt=st},this.dispose=function(){}}}const ts=new Nn,Ag=new Ne;function Rg(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Hu(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,T,E,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),h(p,g),g.isMeshPhysicalMaterial&&d(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),x(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),M(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,T,E):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Tn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Tn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const T=t.get(g),E=T.envMap,v=T.envMapRotation;E&&(p.envMap.value=E,ts.copy(v),ts.x*=-1,ts.y*=-1,ts.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),p.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(ts)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,T,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*T,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,T){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Tn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,g){g.matcap&&(p.matcap.value=g.matcap)}function M(p,g){const T=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){const v=E.program;n.uniformBlockBinding(T,v)}function l(T,E){let v=s[T.id];v===void 0&&(x(T),v=u(T),s[T.id]=v,T.addEventListener("dispose",p));const L=E.program;n.updateUBOMapping(T,L);const C=t.render.frame;r[T.id]!==C&&(h(T),r[T.id]=C)}function u(T){const E=f();T.__bindingPointIndex=E;const v=i.createBuffer(),L=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const E=s[T.id],v=T.uniforms,L=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,D=v.length;C<D;C++){const z=Array.isArray(v[C])?v[C]:[v[C]];for(let w=0,S=z.length;w<S;w++){const N=z[w];if(d(N,C,w,L)===!0){const tt=N.__offset,Q=Array.isArray(N.value)?N.value:[N.value];let ut=0;for(let W=0;W<Q.length;W++){const $=Q[W],Z=M($);typeof $=="number"||typeof $=="boolean"?(N.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,tt+ut,N.__data)):$.isMatrix3?(N.__data[0]=$.elements[0],N.__data[1]=$.elements[1],N.__data[2]=$.elements[2],N.__data[3]=0,N.__data[4]=$.elements[3],N.__data[5]=$.elements[4],N.__data[6]=$.elements[5],N.__data[7]=0,N.__data[8]=$.elements[6],N.__data[9]=$.elements[7],N.__data[10]=$.elements[8],N.__data[11]=0):($.toArray(N.__data,ut),ut+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,tt,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,E,v,L){const C=T.value,D=E+"_"+v;if(L[D]===void 0)return typeof C=="number"||typeof C=="boolean"?L[D]=C:L[D]=C.clone(),!0;{const z=L[D];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return L[D]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function x(T){const E=T.uniforms;let v=0;const L=16;for(let D=0,z=E.length;D<z;D++){const w=Array.isArray(E[D])?E[D]:[E[D]];for(let S=0,N=w.length;S<N;S++){const tt=w[S],Q=Array.isArray(tt.value)?tt.value:[tt.value];for(let ut=0,W=Q.length;ut<W;ut++){const $=Q[ut],Z=M($),J=v%L,Et=J%Z.boundary,nt=J+Et;v+=Et,nt!==0&&L-nt<Z.storage&&(v+=L-nt),tt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=v,v+=Z.storage}}}const C=v%L;return C>0&&(v+=L-C),T.__size=v,T.__cache={},this}function M(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function p(T){const E=T.target;E.removeEventListener("dispose",p);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}class Pg{constructor(t={}){const{canvas:e=_h(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const x=new Uint32Array(4),M=new Int32Array(4);let p=null,g=null;const T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=Ei,this.toneMappingExposure=1;const v=this;let L=!1,C=0,D=0,z=null,w=-1,S=null;const N=new qe,tt=new qe;let Q=null;const ut=new xe(0);let W=0,$=e.width,Z=e.height,J=1,Et=null,nt=null;const yt=new qe(0,0,$,Z),Pt=new qe(0,0,$,Z);let Qt=!1;const st=new Rc;let ot=!1,wt=!1;const bt=new Ne,Ft=new Ne,lt=new F,gt=new qe,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Mt(){return z===null?J:1}let k=n;function $t(P,K){return e.getContext(P,K)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mc}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),k===null){const K="webgl2";if(k=$t(K,P),k===null)throw $t(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Lt,Xt,Ut,se,qt,I,b,rt,G,R,H,X,j,ft,At,ht,Rt,Ot,Bt,Ct,Yt,ee,ne,Y;function Ht(){Lt=new N0(k),Lt.init(),ee=new Mg(k,Lt),Xt=new C0(k,Lt,t,ee),Ut=new xg(k,Lt),Xt.reverseDepthBuffer&&h&&Ut.buffers.depth.setReversed(!0),se=new O0(k),qt=new ng,I=new vg(k,Lt,Ut,qt,Xt,ee,se),b=new L0(v),rt=new U0(v),G=new Xh(k),ne=new A0(k,G),R=new F0(k,G,se,ne),H=new V0(k,R,G,se),Bt=new B0(k,Xt,I),ht=new P0(qt),X=new eg(v,b,rt,Lt,Xt,ne,ht),j=new Rg(v,qt),ft=new sg,At=new ug(Lt),Ot=new T0(v,b,rt,Ut,H,d,c),Rt=new mg(v,H,Xt),Y=new Cg(k,se,Xt,Ut),Ct=new R0(k,Lt,se),Yt=new z0(k,Lt,se),se.programs=X.programs,v.capabilities=Xt,v.extensions=Lt,v.properties=qt,v.renderLists=ft,v.shadowMap=Rt,v.state=Ut,v.info=se}Ht();const xt=new Tg(v,k);this.xr=xt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const P=Lt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Lt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(P){P!==void 0&&(J=P,this.setSize($,Z,!1))},this.getSize=function(P){return P.set($,Z)},this.setSize=function(P,K,dt=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=P,Z=K,e.width=Math.floor(P*J),e.height=Math.floor(K*J),dt===!0&&(e.style.width=P+"px",e.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set($*J,Z*J).floor()},this.setDrawingBufferSize=function(P,K,dt){$=P,Z=K,J=dt,e.width=Math.floor(P*dt),e.height=Math.floor(K*dt),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(N)},this.getViewport=function(P){return P.copy(yt)},this.setViewport=function(P,K,dt,ct){P.isVector4?yt.set(P.x,P.y,P.z,P.w):yt.set(P,K,dt,ct),Ut.viewport(N.copy(yt).multiplyScalar(J).round())},this.getScissor=function(P){return P.copy(Pt)},this.setScissor=function(P,K,dt,ct){P.isVector4?Pt.set(P.x,P.y,P.z,P.w):Pt.set(P,K,dt,ct),Ut.scissor(tt.copy(Pt).multiplyScalar(J).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(P){Ut.setScissorTest(Qt=P)},this.setOpaqueSort=function(P){Et=P},this.setTransparentSort=function(P){nt=P},this.getClearColor=function(P){return P.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(P=!0,K=!0,dt=!0){let ct=0;if(P){let it=!1;if(z!==null){const zt=z.texture.format;it=zt===Ac||zt===Tc||zt===Ec}if(it){const zt=z.texture.type,jt=zt===Ri||zt===us||zt===Mr||zt===qs||zt===Sc||zt===wc,re=Ot.getClearColor(),te=Ot.getClearAlpha(),de=re.r,pe=re.g,ie=re.b;jt?(x[0]=de,x[1]=pe,x[2]=ie,x[3]=te,k.clearBufferuiv(k.COLOR,0,x)):(M[0]=de,M[1]=pe,M[2]=ie,M[3]=te,k.clearBufferiv(k.COLOR,0,M))}else ct|=k.COLOR_BUFFER_BIT}K&&(ct|=k.DEPTH_BUFFER_BIT),dt&&(ct|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),ft.dispose(),At.dispose(),qt.dispose(),b.dispose(),rt.dispose(),H.dispose(),ne.dispose(),Y.dispose(),X.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Mn),xt.removeEventListener("sessionend",fe),yn.stop()};function mt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const P=se.autoReset,K=Rt.enabled,dt=Rt.autoUpdate,ct=Rt.needsUpdate,it=Rt.type;Ht(),se.autoReset=P,Rt.enabled=K,Rt.autoUpdate=dt,Rt.needsUpdate=ct,Rt.type=it}function vt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function he(P){const K=P.target;K.removeEventListener("dispose",he),Ie(K)}function Ie(P){Fe(P),qt.remove(P)}function Fe(P){const K=qt.get(P).programs;K!==void 0&&(K.forEach(function(dt){X.releaseProgram(dt)}),P.isShaderMaterial&&X.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,dt,ct,it,zt){K===null&&(K=kt);const jt=it.isMesh&&it.matrixWorld.determinant()<0,re=Ci(P,K,dt,ct,it);Ut.setMaterial(ct,jt);let te=dt.index,de=1;if(ct.wireframe===!0){if(te=R.getWireframeAttribute(dt),te===void 0)return;de=2}const pe=dt.drawRange,ie=dt.attributes.position;let ye=pe.start*de,we=(pe.start+pe.count)*de;zt!==null&&(ye=Math.max(ye,zt.start*de),we=Math.min(we,(zt.start+zt.count)*de)),te!==null?(ye=Math.max(ye,0),we=Math.min(we,te.count)):ie!=null&&(ye=Math.max(ye,0),we=Math.min(we,ie.count));const ze=we-ye;if(ze<0||ze===1/0)return;ne.setup(it,ct,re,dt,te);let an,Ae=Ct;if(te!==null&&(an=G.get(te),Ae=Yt,Ae.setIndex(an)),it.isMesh)ct.wireframe===!0?(Ut.setLineWidth(ct.wireframeLinewidth*Mt()),Ae.setMode(k.LINES)):Ae.setMode(k.TRIANGLES);else if(it.isLine){let le=ct.linewidth;le===void 0&&(le=1),Ut.setLineWidth(le*Mt()),it.isLineSegments?Ae.setMode(k.LINES):it.isLineLoop?Ae.setMode(k.LINE_LOOP):Ae.setMode(k.LINE_STRIP)}else it.isPoints?Ae.setMode(k.POINTS):it.isSprite&&Ae.setMode(k.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)Ae.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const le=it._multiDrawStarts,gn=it._multiDrawCounts,Re=it._multiDrawCount,Qe=te?G.get(te).bytesPerElement:1,Be=qt.get(ct).currentProgram.getUniforms();for(let ke=0;ke<Re;ke++)Be.setValue(k,"_gl_DrawID",ke),Ae.render(le[ke]/Qe,gn[ke])}else if(it.isInstancedMesh)Ae.renderInstances(ye,ze,it.count);else if(dt.isInstancedBufferGeometry){const le=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,gn=Math.min(dt.instanceCount,le);Ae.renderInstances(ye,ze,gn)}else Ae.render(ye,ze)};function ge(P,K,dt){P.transparent===!0&&P.side===Ge&&P.forceSinglePass===!1?(P.side=Tn,P.needsUpdate=!0,Pn(P,K,dt),P.side=ki,P.needsUpdate=!0,Pn(P,K,dt),P.side=Ge):Pn(P,K,dt)}this.compile=function(P,K,dt=null){dt===null&&(dt=P),g=At.get(dt),g.init(K),E.push(g),dt.traverseVisible(function(it){it.isLight&&it.layers.test(K.layers)&&(g.pushLight(it),it.castShadow&&g.pushShadow(it))}),P!==dt&&P.traverseVisible(function(it){it.isLight&&it.layers.test(K.layers)&&(g.pushLight(it),it.castShadow&&g.pushShadow(it))}),g.setupLights();const ct=new Set;return P.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const zt=it.material;if(zt)if(Array.isArray(zt))for(let jt=0;jt<zt.length;jt++){const re=zt[jt];ge(re,dt,it),ct.add(re)}else ge(zt,dt,it),ct.add(zt)}),E.pop(),g=null,ct},this.compileAsync=function(P,K,dt=null){const ct=this.compile(P,K,dt);return new Promise(it=>{function zt(){if(ct.forEach(function(jt){qt.get(jt).currentProgram.isReady()&&ct.delete(jt)}),ct.size===0){it(P);return}setTimeout(zt,10)}Lt.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let $e=null;function mn(P){$e&&$e(P)}function Mn(){yn.stop()}function fe(){yn.start()}const yn=new Wu;yn.setAnimationLoop(mn),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(P){$e=P,xt.setAnimationLoop(P),P===null?yn.stop():yn.start()},xt.addEventListener("sessionstart",Mn),xt.addEventListener("sessionend",fe),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(K),K=xt.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,K,z),g=At.get(P,E.length),g.init(K),E.push(g),Ft.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),st.setFromProjectionMatrix(Ft),wt=this.localClippingEnabled,ot=ht.init(this.clippingPlanes,wt),p=ft.get(P,T.length),p.init(),T.push(p),xt.enabled===!0&&xt.isPresenting===!0){const zt=v.xr.getDepthSensingMesh();zt!==null&&Rn(zt,K,-1/0,v.sortObjects)}Rn(P,K,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(Et,nt),_t=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,_t&&Ot.addToRenderList(p,P),this.info.render.frame++,ot===!0&&ht.beginShadows();const dt=g.state.shadowsArray;Rt.render(dt,P,K),ot===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=p.opaque,it=p.transmissive;if(g.setupLights(),K.isArrayCamera){const zt=K.cameras;if(it.length>0)for(let jt=0,re=zt.length;jt<re;jt++){const te=zt[jt];Kn(ct,it,P,te)}_t&&Ot.render(P);for(let jt=0,re=zt.length;jt<re;jt++){const te=zt[jt];di(p,P,te,te.viewport)}}else it.length>0&&Kn(ct,it,P,K),_t&&Ot.render(P),di(p,P,K);z!==null&&(I.updateMultisampleRenderTarget(z),I.updateRenderTargetMipmap(z)),P.isScene===!0&&P.onAfterRender(v,P,K),ne.resetDefaultState(),w=-1,S=null,E.pop(),E.length>0?(g=E[E.length-1],ot===!0&&ht.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Rn(P,K,dt,ct){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)dt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||st.intersectsSprite(P)){ct&&gt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ft);const jt=H.update(P),re=P.material;re.visible&&p.push(P,jt,re,dt,gt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||st.intersectsObject(P))){const jt=H.update(P),re=P.material;if(ct&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),gt.copy(P.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),gt.copy(jt.boundingSphere.center)),gt.applyMatrix4(P.matrixWorld).applyMatrix4(Ft)),Array.isArray(re)){const te=jt.groups;for(let de=0,pe=te.length;de<pe;de++){const ie=te[de],ye=re[ie.materialIndex];ye&&ye.visible&&p.push(P,jt,ye,dt,gt.z,ie)}}else re.visible&&p.push(P,jt,re,dt,gt.z,null)}}const zt=P.children;for(let jt=0,re=zt.length;jt<re;jt++)Rn(zt[jt],K,dt,ct)}function di(P,K,dt,ct){const it=P.opaque,zt=P.transmissive,jt=P.transparent;g.setupLightsView(dt),ot===!0&&ht.setGlobalState(v.clippingPlanes,dt),ct&&Ut.viewport(N.copy(ct)),it.length>0&&pi(it,K,dt),zt.length>0&&pi(zt,K,dt),jt.length>0&&pi(jt,K,dt),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Kn(P,K,dt,ct){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ct.id]===void 0&&(g.state.transmissionRenderTarget[ct.id]=new fs(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Er:Ri,minFilter:cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const zt=g.state.transmissionRenderTarget[ct.id],jt=ct.viewport||N;zt.setSize(jt.z,jt.w);const re=v.getRenderTarget();v.setRenderTarget(zt),v.getClearColor(ut),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),_t&&Ot.render(dt);const te=v.toneMapping;v.toneMapping=Ei;const de=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),g.setupLightsView(ct),ot===!0&&ht.setGlobalState(v.clippingPlanes,ct),pi(P,dt,ct),I.updateMultisampleRenderTarget(zt),I.updateRenderTargetMipmap(zt),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let ie=0,ye=K.length;ie<ye;ie++){const we=K[ie],ze=we.object,an=we.geometry,Ae=we.material,le=we.group;if(Ae.side===Ge&&ze.layers.test(ct.layers)){const gn=Ae.side;Ae.side=Tn,Ae.needsUpdate=!0,Cn(ze,dt,ct,an,Ae,le),Ae.side=gn,Ae.needsUpdate=!0,pe=!0}}pe===!0&&(I.updateMultisampleRenderTarget(zt),I.updateRenderTargetMipmap(zt))}v.setRenderTarget(re),v.setClearColor(ut,W),de!==void 0&&(ct.viewport=de),v.toneMapping=te}function pi(P,K,dt){const ct=K.isScene===!0?K.overrideMaterial:null;for(let it=0,zt=P.length;it<zt;it++){const jt=P[it],re=jt.object,te=jt.geometry,de=ct===null?jt.material:ct,pe=jt.group;re.layers.test(dt.layers)&&Cn(re,K,dt,te,de,pe)}}function Cn(P,K,dt,ct,it,zt){P.onBeforeRender(v,K,dt,ct,it,zt),P.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),it.onBeforeRender(v,K,dt,ct,P,zt),it.transparent===!0&&it.side===Ge&&it.forceSinglePass===!1?(it.side=Tn,it.needsUpdate=!0,v.renderBufferDirect(dt,K,ct,it,P,zt),it.side=ki,it.needsUpdate=!0,v.renderBufferDirect(dt,K,ct,it,P,zt),it.side=Ge):v.renderBufferDirect(dt,K,ct,it,P,zt),P.onAfterRender(v,K,dt,ct,it,zt)}function Pn(P,K,dt){K.isScene!==!0&&(K=kt);const ct=qt.get(P),it=g.state.lights,zt=g.state.shadowsArray,jt=it.state.version,re=X.getParameters(P,it.state,zt,K,dt),te=X.getProgramCacheKey(re);let de=ct.programs;ct.environment=P.isMeshStandardMaterial?K.environment:null,ct.fog=K.fog,ct.envMap=(P.isMeshStandardMaterial?rt:b).get(P.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,de===void 0&&(P.addEventListener("dispose",he),de=new Map,ct.programs=de);let pe=de.get(te);if(pe!==void 0){if(ct.currentProgram===pe&&ct.lightsStateVersion===jt)return qi(P,re),pe}else re.uniforms=X.getUniforms(P),P.onBeforeCompile(re,v),pe=X.acquireProgram(re,te),de.set(te,pe),ct.uniforms=re.uniforms;const ie=ct.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ie.clippingPlanes=ht.uniform),qi(P,re),ct.needsLights=Pi(P),ct.lightsStateVersion=jt,ct.needsLights&&(ie.ambientLightColor.value=it.state.ambient,ie.lightProbe.value=it.state.probe,ie.directionalLights.value=it.state.directional,ie.directionalLightShadows.value=it.state.directionalShadow,ie.spotLights.value=it.state.spot,ie.spotLightShadows.value=it.state.spotShadow,ie.rectAreaLights.value=it.state.rectArea,ie.ltc_1.value=it.state.rectAreaLTC1,ie.ltc_2.value=it.state.rectAreaLTC2,ie.pointLights.value=it.state.point,ie.pointLightShadows.value=it.state.pointShadow,ie.hemisphereLights.value=it.state.hemi,ie.directionalShadowMap.value=it.state.directionalShadowMap,ie.directionalShadowMatrix.value=it.state.directionalShadowMatrix,ie.spotShadowMap.value=it.state.spotShadowMap,ie.spotLightMatrix.value=it.state.spotLightMatrix,ie.spotLightMap.value=it.state.spotLightMap,ie.pointShadowMap.value=it.state.pointShadowMap,ie.pointShadowMatrix.value=it.state.pointShadowMatrix),ct.currentProgram=pe,ct.uniformsList=null,pe}function Xi(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=xo.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function qi(P,K){const dt=qt.get(P);dt.outputColorSpace=K.outputColorSpace,dt.batching=K.batching,dt.batchingColor=K.batchingColor,dt.instancing=K.instancing,dt.instancingColor=K.instancingColor,dt.instancingMorph=K.instancingMorph,dt.skinning=K.skinning,dt.morphTargets=K.morphTargets,dt.morphNormals=K.morphNormals,dt.morphColors=K.morphColors,dt.morphTargetsCount=K.morphTargetsCount,dt.numClippingPlanes=K.numClippingPlanes,dt.numIntersection=K.numClipIntersection,dt.vertexAlphas=K.vertexAlphas,dt.vertexTangents=K.vertexTangents,dt.toneMapping=K.toneMapping}function Ci(P,K,dt,ct,it){K.isScene!==!0&&(K=kt),I.resetTextureUnits();const zt=K.fog,jt=ct.isMeshStandardMaterial?K.environment:null,re=z===null?v.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Zs,te=(ct.isMeshStandardMaterial?rt:b).get(ct.envMap||jt),de=ct.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pe=!!dt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),ie=!!dt.morphAttributes.position,ye=!!dt.morphAttributes.normal,we=!!dt.morphAttributes.color;let ze=Ei;ct.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ze=v.toneMapping);const an=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Ae=an!==void 0?an.length:0,le=qt.get(ct),gn=g.state.lights;if(ot===!0&&(wt===!0||P!==S)){const un=P===S&&ct.id===w;ht.setState(ct,P,un)}let Re=!1;ct.version===le.__version?(le.needsLights&&le.lightsStateVersion!==gn.state.version||le.outputColorSpace!==re||it.isBatchedMesh&&le.batching===!1||!it.isBatchedMesh&&le.batching===!0||it.isBatchedMesh&&le.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&le.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&le.instancing===!1||!it.isInstancedMesh&&le.instancing===!0||it.isSkinnedMesh&&le.skinning===!1||!it.isSkinnedMesh&&le.skinning===!0||it.isInstancedMesh&&le.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&le.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&le.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&le.instancingMorph===!1&&it.morphTexture!==null||le.envMap!==te||ct.fog===!0&&le.fog!==zt||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==ht.numPlanes||le.numIntersection!==ht.numIntersection)||le.vertexAlphas!==de||le.vertexTangents!==pe||le.morphTargets!==ie||le.morphNormals!==ye||le.morphColors!==we||le.toneMapping!==ze||le.morphTargetsCount!==Ae)&&(Re=!0):(Re=!0,le.__version=ct.version);let Qe=le.currentProgram;Re===!0&&(Qe=Pn(ct,K,it));let Be=!1,ke=!1,ti=!1;const De=Qe.getUniforms(),be=le.uniforms;if(Ut.useProgram(Qe.program)&&(Be=!0,ke=!0,ti=!0),ct.id!==w&&(w=ct.id,ke=!0),Be||S!==P){Ut.buffers.depth.getReversed()?(bt.copy(P.projectionMatrix),Mh(bt),yh(bt),De.setValue(k,"projectionMatrix",bt)):De.setValue(k,"projectionMatrix",P.projectionMatrix),De.setValue(k,"viewMatrix",P.matrixWorldInverse);const On=De.map.cameraPosition;On!==void 0&&On.setValue(k,lt.setFromMatrixPosition(P.matrixWorld)),Xt.logarithmicDepthBuffer&&De.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&De.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,ke=!0,ti=!0)}if(it.isSkinnedMesh){De.setOptional(k,it,"bindMatrix"),De.setOptional(k,it,"bindMatrixInverse");const un=it.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),De.setValue(k,"boneTexture",un.boneTexture,I))}it.isBatchedMesh&&(De.setOptional(k,it,"batchingTexture"),De.setValue(k,"batchingTexture",it._matricesTexture,I),De.setOptional(k,it,"batchingIdTexture"),De.setValue(k,"batchingIdTexture",it._indirectTexture,I),De.setOptional(k,it,"batchingColorTexture"),it._colorsTexture!==null&&De.setValue(k,"batchingColorTexture",it._colorsTexture,I));const ei=dt.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&Bt.update(it,dt,Qe),(ke||le.receiveShadow!==it.receiveShadow)&&(le.receiveShadow=it.receiveShadow,De.setValue(k,"receiveShadow",it.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(be.envMap.value=te,be.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&K.environment!==null&&(be.envMapIntensity.value=K.environmentIntensity),ke&&(De.setValue(k,"toneMappingExposure",v.toneMappingExposure),le.needsLights&&Qn(be,ti),zt&&ct.fog===!0&&j.refreshFogUniforms(be,zt),j.refreshMaterialUniforms(be,ct,J,Z,g.state.transmissionRenderTarget[P.id]),xo.upload(k,Xi(le),be,I)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(xo.upload(k,Xi(le),be,I),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&De.setValue(k,"center",it.center),De.setValue(k,"modelViewMatrix",it.modelViewMatrix),De.setValue(k,"normalMatrix",it.normalMatrix),De.setValue(k,"modelMatrix",it.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const un=ct.uniformsGroups;for(let On=0,_=un.length;On<_;On++){const V=un[On];Y.update(V,Qe),Y.bind(V,Qe)}}return Qe}function Qn(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function Pi(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(P,K,dt){qt.get(P.texture).__webglTexture=K,qt.get(P.depthTexture).__webglTexture=dt;const ct=qt.get(P);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=dt===void 0,ct.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,K){const dt=qt.get(P);dt.__webglFramebuffer=K,dt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,dt=0){z=P,C=K,D=dt;let ct=!0,it=null,zt=!1,jt=!1;if(P){const te=qt.get(P);if(te.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(k.FRAMEBUFFER,null),ct=!1;else if(te.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(te.__hasExternalTextures)I.rebindTextures(P,qt.get(P.texture).__webglTexture,qt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ie=P.depthTexture;if(te.__boundDepthTexture!==ie){if(ie!==null&&qt.has(ie)&&(P.width!==ie.image.width||P.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}const de=P.texture;(de.isData3DTexture||de.isDataArrayTexture||de.isCompressedArrayTexture)&&(jt=!0);const pe=qt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(pe[K])?it=pe[K][dt]:it=pe[K],zt=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?it=qt.get(P).__webglMultisampledFramebuffer:Array.isArray(pe)?it=pe[dt]:it=pe,N.copy(P.viewport),tt.copy(P.scissor),Q=P.scissorTest}else N.copy(yt).multiplyScalar(J).floor(),tt.copy(Pt).multiplyScalar(J).floor(),Q=Qt;if(Ut.bindFramebuffer(k.FRAMEBUFFER,it)&&ct&&Ut.drawBuffers(P,it),Ut.viewport(N),Ut.scissor(tt),Ut.setScissorTest(Q),zt){const te=qt.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+K,te.__webglTexture,dt)}else if(jt){const te=qt.get(P.texture),de=K||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,te.__webglTexture,dt||0,de)}w=-1},this.readRenderTargetPixels=function(P,K,dt,ct,it,zt,jt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let re=qt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&jt!==void 0&&(re=re[jt]),re){Ut.bindFramebuffer(k.FRAMEBUFFER,re);try{const te=P.texture,de=te.format,pe=te.type;if(!Xt.textureFormatReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-ct&&dt>=0&&dt<=P.height-it&&k.readPixels(K,dt,ct,it,ee.convert(de),ee.convert(pe),zt)}finally{const te=z!==null?qt.get(z).__webglFramebuffer:null;Ut.bindFramebuffer(k.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(P,K,dt,ct,it,zt,jt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let re=qt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&jt!==void 0&&(re=re[jt]),re){const te=P.texture,de=te.format,pe=te.type;if(!Xt.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=P.width-ct&&dt>=0&&dt<=P.height-it){Ut.bindFramebuffer(k.FRAMEBUFFER,re);const ie=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ie),k.bufferData(k.PIXEL_PACK_BUFFER,zt.byteLength,k.STREAM_READ),k.readPixels(K,dt,ct,it,ee.convert(de),ee.convert(pe),0);const ye=z!==null?qt.get(z).__webglFramebuffer:null;Ut.bindFramebuffer(k.FRAMEBUFFER,ye);const we=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await vh(k,we,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ie),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,zt),k.deleteBuffer(ie),k.deleteSync(we),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,K=null,dt=0){P.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,P=arguments[1]);const ct=Math.pow(2,-dt),it=Math.floor(P.image.width*ct),zt=Math.floor(P.image.height*ct),jt=K!==null?K.x:0,re=K!==null?K.y:0;I.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,dt,0,0,jt,re,it,zt),Ut.unbindTexture()},this.copyTextureToTexture=function(P,K,dt=null,ct=null,it=0){P.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,P=arguments[1],K=arguments[2],it=arguments[3]||0,dt=null);let zt,jt,re,te,de,pe,ie,ye,we;const ze=P.isCompressedTexture?P.mipmaps[it]:P.image;dt!==null?(zt=dt.max.x-dt.min.x,jt=dt.max.y-dt.min.y,re=dt.isBox3?dt.max.z-dt.min.z:1,te=dt.min.x,de=dt.min.y,pe=dt.isBox3?dt.min.z:0):(zt=ze.width,jt=ze.height,re=ze.depth||1,te=0,de=0,pe=0),ct!==null?(ie=ct.x,ye=ct.y,we=ct.z):(ie=0,ye=0,we=0);const an=ee.convert(K.format),Ae=ee.convert(K.type);let le;K.isData3DTexture?(I.setTexture3D(K,0),le=k.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(I.setTexture2DArray(K,0),le=k.TEXTURE_2D_ARRAY):(I.setTexture2D(K,0),le=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const gn=k.getParameter(k.UNPACK_ROW_LENGTH),Re=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Qe=k.getParameter(k.UNPACK_SKIP_PIXELS),Be=k.getParameter(k.UNPACK_SKIP_ROWS),ke=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ze.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ze.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,te),k.pixelStorei(k.UNPACK_SKIP_ROWS,de),k.pixelStorei(k.UNPACK_SKIP_IMAGES,pe);const ti=P.isDataArrayTexture||P.isData3DTexture,De=K.isDataArrayTexture||K.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const be=qt.get(P),ei=qt.get(K),un=qt.get(be.__renderTarget),On=qt.get(ei.__renderTarget);Ut.bindFramebuffer(k.READ_FRAMEBUFFER,un.__webglFramebuffer),Ut.bindFramebuffer(k.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let _=0;_<re;_++)ti&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qt.get(P).__webglTexture,it,pe+_),P.isDepthTexture?(De&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qt.get(K).__webglTexture,it,we+_),k.blitFramebuffer(te,de,zt,jt,ie,ye,zt,jt,k.DEPTH_BUFFER_BIT,k.NEAREST)):De?k.copyTexSubImage3D(le,it,ie,ye,we+_,te,de,zt,jt):k.copyTexSubImage2D(le,it,ie,ye,we+_,te,de,zt,jt);Ut.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else De?P.isDataTexture||P.isData3DTexture?k.texSubImage3D(le,it,ie,ye,we,zt,jt,re,an,Ae,ze.data):K.isCompressedArrayTexture?k.compressedTexSubImage3D(le,it,ie,ye,we,zt,jt,re,an,ze.data):k.texSubImage3D(le,it,ie,ye,we,zt,jt,re,an,Ae,ze):P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,it,ie,ye,zt,jt,an,Ae,ze.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,it,ie,ye,ze.width,ze.height,an,ze.data):k.texSubImage2D(k.TEXTURE_2D,it,ie,ye,zt,jt,an,Ae,ze);k.pixelStorei(k.UNPACK_ROW_LENGTH,gn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Re),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Qe),k.pixelStorei(k.UNPACK_SKIP_ROWS,Be),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ke),it===0&&K.generateMipmaps&&k.generateMipmap(le),Ut.unbindTexture()},this.copyTextureToTexture3D=function(P,K,dt=null,ct=null,it=0){return P.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),dt=arguments[0]||null,ct=arguments[1]||null,P=arguments[2],K=arguments[3],it=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,K,dt,ct,it)},this.initRenderTarget=function(P){qt.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),Ut.unbindTexture()},this.resetState=function(){C=0,D=0,z=null,Ut.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ue._getUnpackColorSpace()}}class Pc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(t),this.density=e}clone(){return new Pc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(t),this.near=e,this.far=n}clone(){return new Lc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ju extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Lg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new F;class So{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ln.fromBufferAttribute(this,e),Ln.applyMatrix4(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ln.fromBufferAttribute(this,e),Ln.applyNormalMatrix(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ln.fromBufferAttribute(this,e),Ln.transformDirection(t),this.setXYZ(e,Ln.x,Ln.y,Ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new So(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ku extends gs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ds;const sr=new F,Us=new F,Ns=new F,Fs=new Vt,rr=new Vt,Qu=new Ne,no=new F,or=new F,io=new F,jl=new Vt,va=new Vt,Kl=new Vt;class Ig extends nn{constructor(t=new Ku){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new Ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lg(e,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new So(n,3,0,!1)),Ds.setAttribute("uv",new So(n,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new Vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),Qu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ns.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;so(no.set(-.5,-.5,0),Ns,o,Us,s,r),so(or.set(.5,-.5,0),Ns,o,Us,s,r),so(io.set(.5,.5,0),Ns,o,Us,s,r),jl.set(0,0),va.set(1,0),Kl.set(1,1);let a=t.ray.intersectTriangle(no,or,io,!1,sr);if(a===null&&(so(or.set(-.5,.5,0),Ns,o,Us,s,r),va.set(0,1),a=t.ray.intersectTriangle(no,io,or,!1,sr),a===null))return;const c=t.ray.origin.distanceTo(sr);c<t.near||c>t.far||e.push({distance:c,point:sr.clone(),uv:Xn.getInterpolation(sr,no,or,io,jl,va,Kl,new Vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function so(i,t,e,n,s,r){Fs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(rr.x=r*Fs.x-s*Fs.y,rr.y=s*Fs.x+r*Fs.y):rr.copy(Fs),i.copy(t),i.x+=rr.x,i.y+=rr.y,i.applyMatrix4(Qu)}class Dg extends An{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Gn,u=Gn,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ql extends pn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zs=new Ne,tu=new Ne,ro=[],eu=new ms,Ug=new Ne,ar=new O,cr=new js;class Si extends O{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ql(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ug)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ms),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),eu.copy(t.boundingBox).applyMatrix4(zs),this.boundingBox.union(eu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new js),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),cr.copy(t.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),t.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),tu.multiplyMatrices(n,zs),ar.matrixWorld=tu,ar.raycast(t,ro);for(let o=0,a=ro.length;o<a;o++){const c=ro[o];c.instanceId=r,c.object=this,e.push(c)}ro.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dg(new Float32Array(s*this.count),s,this.count,bc,li));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ao extends gs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nu=new Ne,pc=new Fu,oo=new js,ao=new F;class Ic extends nn{constructor(t=new Ke,e=new Ao){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,t.ray.intersectsSphere(oo)===!1)return;nu.copy(s).invert(),pc.copy(t.ray).applyMatrix4(nu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=h,M=d;x<M;x++){const p=l.getX(x);ao.fromBufferAttribute(f,p),iu(ao,p,c,s,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let x=h,M=d;x<M;x++)ao.fromBufferAttribute(f,x),iu(ao,x,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function iu(i,t,e,n,s,r,o){const a=pc.distanceSqToPoint(i);if(a<e){const c=new F;pc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Dc extends An{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Vt:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,s=[],r=[],o=[],a=new F,c=new Ne;for(let d=0;d<=t;d++){const x=d/t;s[d]=this.getTangentAt(x,new F)}r[0]=new F,o[0]=new F;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(_n(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(_n(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Uc extends hi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Vt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ng extends Uc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const co=new F,Ma=new Nc,ya=new Nc,Sa=new Nc;class Ro extends hi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(co.subVectors(s[0],s[1]).add(s[0]),l=co);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(co.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=co),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);M<1e-4&&(M=1),x<1e-4&&(x=M),p<1e-4&&(p=M),Ma.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,x,M,p),ya.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,x,M,p),Sa.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,x,M,p)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),ya.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Sa.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Ma.calc(c),ya.calc(c),Sa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function su(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Fg(i,t){const e=1-i;return e*e*t}function zg(i,t){return 2*(1-i)*i*t}function Og(i,t){return i*i*t}function gr(i,t,e,n){return Fg(i,t)+zg(i,e)+Og(i,n)}function Bg(i,t){const e=1-i;return e*e*e*t}function Vg(i,t){const e=1-i;return 3*e*e*i*t}function Hg(i,t){return 3*(1-i)*i*i*t}function Gg(i,t){return i*i*i*t}function xr(i,t,e,n,s){return Bg(i,t)+Vg(i,e)+Hg(i,n)+Gg(i,s)}class tf extends hi{constructor(t=new Vt,e=new Vt,n=new Vt,s=new Vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Vt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kg extends hi{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y),xr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ef extends hi{constructor(t=new Vt,e=new Vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wg extends hi{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nf extends hi{constructor(t=new Vt,e=new Vt,n=new Vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Vt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(t,s.x,r.x,o.x),gr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xg extends hi{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(t,s.x,r.x,o.x),gr(t,s.y,r.y,o.y),gr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sf extends hi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Vt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(su(a,c.x,l.x,u.x,f.x),su(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Vt().fromArray(s))}return this}}var mc=Object.freeze({__proto__:null,ArcCurve:Ng,CatmullRomCurve3:Ro,CubicBezierCurve:tf,CubicBezierCurve3:kg,EllipseCurve:Uc,LineCurve:ef,LineCurve3:Wg,QuadraticBezierCurve:nf,QuadraticBezierCurve3:Xg,SplineCurve:sf});class qg extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new mc[s.type]().fromJSON(s))}return this}}class gc extends qg{constructor(t){super(),this.type="Path",this.currentPoint=new Vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ef(this.currentPoint.clone(),new Vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new nf(this.currentPoint.clone(),new Vt(t,e),new Vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new tf(this.currentPoint.clone(),new Vt(t,e),new Vt(n,s),new Vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new sf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Uc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Fc extends Ke{constructor(t=[new Vt(0,-.5),new Vt(.5,0),new Vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=_n(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,f=new F,h=new Vt,d=new F,x=new F,M=new F;let p=0,g=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:p=t[T+1].x-t[T].x,g=t[T+1].y-t[T].y,d.x=g*1,d.y=-p,d.z=g*0,M.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(M.x,M.y,M.z);break;default:p=t[T+1].x-t[T].x,g=t[T+1].y-t[T].y,d.x=g*1,d.y=-p,d.z=g*0,x.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),c.push(d.x,d.y,d.z),M.copy(x)}for(let T=0;T<=e;T++){const E=n+T*u*s,v=Math.sin(E),L=Math.cos(E);for(let C=0;C<=t.length-1;C++){f.x=t[C].x*v,f.y=t[C].y,f.z=t[C].x*L,o.push(f.x,f.y,f.z),h.x=T/e,h.y=C/(t.length-1),a.push(h.x,h.y);const D=c[3*C+0]*v,z=c[3*C+1],w=c[3*C+0]*L;l.push(D,z,w)}}for(let T=0;T<e;T++)for(let E=0;E<t.length-1;E++){const v=E+T*t.length,L=v,C=v+t.length,D=v+t.length+1,z=v+1;r.push(L,C,z),r.push(D,z,C)}this.setIndex(r),this.setAttribute("position",new Te(o,3)),this.setAttribute("uv",new Te(a,2)),this.setAttribute("normal",new Te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fc(t.points,t.segments,t.phiStart,t.phiLength)}}class xs extends Fc{constructor(t=1,e=1,n=4,s=8){const r=new gc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new xs(t.radius,t.length,t.capSegments,t.radialSegments)}}class dn extends Ke{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new F,u=new Vt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(a,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wt extends Ke{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let x=0;const M=[],p=n/2;let g=0;T(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Te(f,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2));function T(){const v=new F,L=new F;let C=0;const D=(e-t)/n;for(let z=0;z<=r;z++){const w=[],S=z/r,N=S*(e-t)+t;for(let tt=0;tt<=s;tt++){const Q=tt/s,ut=Q*c+a,W=Math.sin(ut),$=Math.cos(ut);L.x=N*W,L.y=-S*n+p,L.z=N*$,f.push(L.x,L.y,L.z),v.set(W,D,$).normalize(),h.push(v.x,v.y,v.z),d.push(Q,1-S),w.push(x++)}M.push(w)}for(let z=0;z<s;z++)for(let w=0;w<r;w++){const S=M[w][z],N=M[w+1][z],tt=M[w+1][z+1],Q=M[w][z+1];(t>0||w!==0)&&(u.push(S,N,Q),C+=3),(e>0||w!==r-1)&&(u.push(N,tt,Q),C+=3)}l.addGroup(g,C,0),g+=C}function E(v){const L=x,C=new Vt,D=new F;let z=0;const w=v===!0?t:e,S=v===!0?1:-1;for(let tt=1;tt<=s;tt++)f.push(0,p*S,0),h.push(0,S,0),d.push(.5,.5),x++;const N=x;for(let tt=0;tt<=s;tt++){const ut=tt/s*c+a,W=Math.cos(ut),$=Math.sin(ut);D.x=w*$,D.y=p*S,D.z=w*W,f.push(D.x,D.y,D.z),h.push(0,S,0),C.x=W*.5+.5,C.y=$*.5*S+.5,d.push(C.x,C.y),x++}for(let tt=0;tt<s;tt++){const Q=L+tt,ut=N+tt;v===!0?u.push(ut,ut+1,Q):u.push(ut+1,ut,Q),z+=3}l.addGroup(g,z,v===!0?1:2),g+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Un extends Wt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Un(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zc extends Ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const E=new F,v=new F,L=new F;for(let C=0;C<e.length;C+=3)d(e[C+0],E),d(e[C+1],v),d(e[C+2],L),c(E,v,L,T)}function c(T,E,v,L){const C=L+1,D=[];for(let z=0;z<=C;z++){D[z]=[];const w=T.clone().lerp(v,z/C),S=E.clone().lerp(v,z/C),N=C-z;for(let tt=0;tt<=N;tt++)tt===0&&z===C?D[z][tt]=w:D[z][tt]=w.clone().lerp(S,tt/N)}for(let z=0;z<C;z++)for(let w=0;w<2*(C-z)-1;w++){const S=Math.floor(w/2);w%2===0?(h(D[z][S+1]),h(D[z+1][S]),h(D[z][S])):(h(D[z][S+1]),h(D[z+1][S+1]),h(D[z+1][S]))}}function l(T){const E=new F;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(T),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function u(){const T=new F;for(let E=0;E<r.length;E+=3){T.x=r[E+0],T.y=r[E+1],T.z=r[E+2];const v=p(T)/2/Math.PI+.5,L=g(T)/Math.PI+.5;o.push(v,1-L)}x(),f()}function f(){for(let T=0;T<o.length;T+=6){const E=o[T+0],v=o[T+2],L=o[T+4],C=Math.max(E,v,L),D=Math.min(E,v,L);C>.9&&D<.1&&(E<.2&&(o[T+0]+=1),v<.2&&(o[T+2]+=1),L<.2&&(o[T+4]+=1))}}function h(T){r.push(T.x,T.y,T.z)}function d(T,E){const v=T*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function x(){const T=new F,E=new F,v=new F,L=new F,C=new Vt,D=new Vt,z=new Vt;for(let w=0,S=0;w<r.length;w+=9,S+=6){T.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),C.set(o[S+0],o[S+1]),D.set(o[S+2],o[S+3]),z.set(o[S+4],o[S+5]),L.copy(T).add(E).add(v).divideScalar(3);const N=p(L);M(C,S+0,T,N),M(D,S+2,E,N),M(z,S+4,v,N)}}function M(T,E,v,L){L<0&&T.x===1&&(o[E]=T.x-1),v.x===0&&v.z===0&&(o[E]=L/2/Math.PI+.5)}function p(T){return Math.atan2(T.z,-T.x)}function g(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zc(t.vertices,t.indices,t.radius,t.details)}}class ui extends gc{constructor(t){super(t),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new gc().fromJSON(s))}return this}}const $g={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=rf(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,f,h,d;if(n&&(r=Kg(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let x=e;x<s;x+=e)f=i[x],h=i[x+1],f<a&&(a=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return yr(r,o,e,a,c,d,0),o}};function rf(i,t,e,n,s){let r,o;if(s===lx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=ru(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=ru(r,i[r],i[r+1],o);return o&&Co(o,o.next)&&(wr(o),o=o.next),o}function hs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Co(e,e.next)||en(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ix(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Zg(i,n,s,r):Yg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),wr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Jg(hs(i),t,e),yr(i,t,e,n,s,r,2)):o===2&&jg(i,t,e,n,s,r):yr(hs(i),t,e,n,s,r,1);break}}}function Yg(i){const t=i.prev,e=i,n=i.next;if(en(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,h=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=h&&x.y>=f&&x.y<=d&&Bs(s,a,r,c,o,l,x.x,x.y)&&en(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Zg(i,t,e,n){const s=i.prev,r=i,o=i.next;if(en(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=a<c?a<l?a:l:c<l?c:l,x=u<f?u<h?u:h:f<h?f:h,M=a>c?a>l?a:l:c>l?c:l,p=u>f?u>h?u:h:f>h?f:h,g=xc(d,x,t,e,n),T=xc(M,p,t,e,n);let E=i.prevZ,v=i.nextZ;for(;E&&E.z>=g&&v&&v.z<=T;){if(E.x>=d&&E.x<=M&&E.y>=x&&E.y<=p&&E!==s&&E!==o&&Bs(a,u,c,f,l,h,E.x,E.y)&&en(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=d&&v.x<=M&&v.y>=x&&v.y<=p&&v!==s&&v!==o&&Bs(a,u,c,f,l,h,v.x,v.y)&&en(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=g;){if(E.x>=d&&E.x<=M&&E.y>=x&&E.y<=p&&E!==s&&E!==o&&Bs(a,u,c,f,l,h,E.x,E.y)&&en(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=T;){if(v.x>=d&&v.x<=M&&v.y>=x&&v.y<=p&&v!==s&&v!==o&&Bs(a,u,c,f,l,h,v.x,v.y)&&en(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Jg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Co(s,r)&&of(s,n,n.next,r)&&Sr(s,r)&&Sr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),wr(n),wr(n.next),n=i=r),n=n.next}while(n!==i);return hs(n)}function jg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ox(o,a)){let c=af(o,a);o=hs(o,o.next),c=hs(c,c.next),yr(o,t,e,n,s,r,0),yr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Kg(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=rf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(rx(l));for(s.sort(Qg),r=0;r<s.length;r++)e=tx(s[r],e);return e}function Qg(i,t){return i.x-t.x}function tx(i,t){const e=ex(i,t);if(!e)return t;const n=af(e,i);return hs(n,n.next),hs(e,e.next)}function ex(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Bs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),Sr(e,i)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&nx(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function nx(i,t){return en(i.prev,i,t.prev)<0&&en(t.next,i,i.next)<0}function ix(i,t,e,n){let s=i;do s.z===0&&(s.z=xc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sx(s)}function sx(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function xc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function rx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Bs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ox(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ax(i,t)&&(Sr(i,t)&&Sr(t,i)&&cx(i,t)&&(en(i.prev,i,t.prev)||en(i,t.prev,t))||Co(i,t)&&en(i.prev,i,i.next)>0&&en(t.prev,t,t.next)>0)}function en(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Co(i,t){return i.x===t.x&&i.y===t.y}function of(i,t,e,n){const s=uo(en(i,t,e)),r=uo(en(i,t,n)),o=uo(en(e,n,i)),a=uo(en(e,n,t));return!!(s!==r&&o!==a||s===0&&lo(i,e,t)||r===0&&lo(i,n,t)||o===0&&lo(e,i,n)||a===0&&lo(e,t,n))}function lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function uo(i){return i>0?1:i<0?-1:0}function ax(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&of(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Sr(i,t){return en(i.prev,i,i.next)<0?en(i,t,i.next)>=0&&en(i,i.prev,t)>=0:en(i,t,i.prev)<0||en(i,i.next,t)<0}function cx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function af(i,t){const e=new _c(i.i,i.x,i.y),n=new _c(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ru(i,t,e,n){const s=new _c(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _c(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function lx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Hi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Hi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ou(t),au(n,t);let o=t.length;e.forEach(ou);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,au(n,e[c]);const a=$g.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function ou(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function au(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Oc extends Ke{constructor(t=new ui([new Vt(.5,.5),new Vt(-.5,.5),new Vt(-.5,-.5),new Vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Te(s,3)),this.setAttribute("uv",new Te(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:ux;let E,v=!1,L,C,D,z;g&&(E=g.getSpacedPoints(u),v=!0,h=!1,L=g.computeFrenetFrames(u,!1),C=new F,D=new F,z=new F),h||(p=0,d=0,x=0,M=0);const w=a.extractPoints(l);let S=w.shape;const N=w.holes;if(!Hi.isClockWise(S)){S=S.reverse();for(let _t=0,Mt=N.length;_t<Mt;_t++){const k=N[_t];Hi.isClockWise(k)&&(N[_t]=k.reverse())}}const Q=Hi.triangulateShape(S,N),ut=S;for(let _t=0,Mt=N.length;_t<Mt;_t++){const k=N[_t];S=S.concat(k)}function W(_t,Mt,k){return Mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),_t.clone().addScaledVector(Mt,k)}const $=S.length,Z=Q.length;function J(_t,Mt,k){let $t,Lt,Xt;const Ut=_t.x-Mt.x,se=_t.y-Mt.y,qt=k.x-_t.x,I=k.y-_t.y,b=Ut*Ut+se*se,rt=Ut*I-se*qt;if(Math.abs(rt)>Number.EPSILON){const G=Math.sqrt(b),R=Math.sqrt(qt*qt+I*I),H=Mt.x-se/G,X=Mt.y+Ut/G,j=k.x-I/R,ft=k.y+qt/R,At=((j-H)*I-(ft-X)*qt)/(Ut*I-se*qt);$t=H+Ut*At-_t.x,Lt=X+se*At-_t.y;const ht=$t*$t+Lt*Lt;if(ht<=2)return new Vt($t,Lt);Xt=Math.sqrt(ht/2)}else{let G=!1;Ut>Number.EPSILON?qt>Number.EPSILON&&(G=!0):Ut<-Number.EPSILON?qt<-Number.EPSILON&&(G=!0):Math.sign(se)===Math.sign(I)&&(G=!0),G?($t=-se,Lt=Ut,Xt=Math.sqrt(b)):($t=Ut,Lt=se,Xt=Math.sqrt(b/2))}return new Vt($t/Xt,Lt/Xt)}const Et=[];for(let _t=0,Mt=ut.length,k=Mt-1,$t=_t+1;_t<Mt;_t++,k++,$t++)k===Mt&&(k=0),$t===Mt&&($t=0),Et[_t]=J(ut[_t],ut[k],ut[$t]);const nt=[];let yt,Pt=Et.concat();for(let _t=0,Mt=N.length;_t<Mt;_t++){const k=N[_t];yt=[];for(let $t=0,Lt=k.length,Xt=Lt-1,Ut=$t+1;$t<Lt;$t++,Xt++,Ut++)Xt===Lt&&(Xt=0),Ut===Lt&&(Ut=0),yt[$t]=J(k[$t],k[Xt],k[Ut]);nt.push(yt),Pt=Pt.concat(yt)}for(let _t=0;_t<p;_t++){const Mt=_t/p,k=d*Math.cos(Mt*Math.PI/2),$t=x*Math.sin(Mt*Math.PI/2)+M;for(let Lt=0,Xt=ut.length;Lt<Xt;Lt++){const Ut=W(ut[Lt],Et[Lt],$t);bt(Ut.x,Ut.y,-k)}for(let Lt=0,Xt=N.length;Lt<Xt;Lt++){const Ut=N[Lt];yt=nt[Lt];for(let se=0,qt=Ut.length;se<qt;se++){const I=W(Ut[se],yt[se],$t);bt(I.x,I.y,-k)}}}const Qt=x+M;for(let _t=0;_t<$;_t++){const Mt=h?W(S[_t],Pt[_t],Qt):S[_t];v?(D.copy(L.normals[0]).multiplyScalar(Mt.x),C.copy(L.binormals[0]).multiplyScalar(Mt.y),z.copy(E[0]).add(D).add(C),bt(z.x,z.y,z.z)):bt(Mt.x,Mt.y,0)}for(let _t=1;_t<=u;_t++)for(let Mt=0;Mt<$;Mt++){const k=h?W(S[Mt],Pt[Mt],Qt):S[Mt];v?(D.copy(L.normals[_t]).multiplyScalar(k.x),C.copy(L.binormals[_t]).multiplyScalar(k.y),z.copy(E[_t]).add(D).add(C),bt(z.x,z.y,z.z)):bt(k.x,k.y,f/u*_t)}for(let _t=p-1;_t>=0;_t--){const Mt=_t/p,k=d*Math.cos(Mt*Math.PI/2),$t=x*Math.sin(Mt*Math.PI/2)+M;for(let Lt=0,Xt=ut.length;Lt<Xt;Lt++){const Ut=W(ut[Lt],Et[Lt],$t);bt(Ut.x,Ut.y,f+k)}for(let Lt=0,Xt=N.length;Lt<Xt;Lt++){const Ut=N[Lt];yt=nt[Lt];for(let se=0,qt=Ut.length;se<qt;se++){const I=W(Ut[se],yt[se],$t);v?bt(I.x,I.y+E[u-1].y,E[u-1].x+k):bt(I.x,I.y,f+k)}}}st(),ot();function st(){const _t=s.length/3;if(h){let Mt=0,k=$*Mt;for(let $t=0;$t<Z;$t++){const Lt=Q[$t];Ft(Lt[2]+k,Lt[1]+k,Lt[0]+k)}Mt=u+p*2,k=$*Mt;for(let $t=0;$t<Z;$t++){const Lt=Q[$t];Ft(Lt[0]+k,Lt[1]+k,Lt[2]+k)}}else{for(let Mt=0;Mt<Z;Mt++){const k=Q[Mt];Ft(k[2],k[1],k[0])}for(let Mt=0;Mt<Z;Mt++){const k=Q[Mt];Ft(k[0]+$*u,k[1]+$*u,k[2]+$*u)}}n.addGroup(_t,s.length/3-_t,0)}function ot(){const _t=s.length/3;let Mt=0;wt(ut,Mt),Mt+=ut.length;for(let k=0,$t=N.length;k<$t;k++){const Lt=N[k];wt(Lt,Mt),Mt+=Lt.length}n.addGroup(_t,s.length/3-_t,1)}function wt(_t,Mt){let k=_t.length;for(;--k>=0;){const $t=k;let Lt=k-1;Lt<0&&(Lt=_t.length-1);for(let Xt=0,Ut=u+p*2;Xt<Ut;Xt++){const se=$*Xt,qt=$*(Xt+1),I=Mt+$t+se,b=Mt+Lt+se,rt=Mt+Lt+qt,G=Mt+$t+qt;lt(I,b,rt,G)}}}function bt(_t,Mt,k){c.push(_t),c.push(Mt),c.push(k)}function Ft(_t,Mt,k){gt(_t),gt(Mt),gt(k);const $t=s.length/3,Lt=T.generateTopUV(n,s,$t-3,$t-2,$t-1);kt(Lt[0]),kt(Lt[1]),kt(Lt[2])}function lt(_t,Mt,k,$t){gt(_t),gt(Mt),gt($t),gt(Mt),gt(k),gt($t);const Lt=s.length/3,Xt=T.generateSideWallUV(n,s,Lt-6,Lt-3,Lt-2,Lt-1);kt(Xt[0]),kt(Xt[1]),kt(Xt[3]),kt(Xt[1]),kt(Xt[2]),kt(Xt[3])}function gt(_t){s.push(c[_t*3+0]),s.push(c[_t*3+1]),s.push(c[_t*3+2])}function kt(_t){r.push(_t.x),r.push(_t.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return fx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new mc[s.type]().fromJSON(s)),new Oc(n,t.options)}}const ux={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new Vt(r,o),new Vt(a,c),new Vt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],x=t[s*3+2],M=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Vt(o,1-c),new Vt(l,1-f),new Vt(h,1-x),new Vt(M,1-g)]:[new Vt(a,1-c),new Vt(u,1-f),new Vt(d,1-x),new Vt(p,1-g)]}};function fx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class xn extends zc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xn(t.radius,t.detail)}}class Po extends Ke{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let f=t;const h=(e-t)/s,d=new F,x=new Vt;for(let M=0;M<=s;M++){for(let p=0;p<=n;p++){const g=r+p/n*o;d.x=f*Math.cos(g),d.y=f*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),x.x=(d.x/e+1)/2,x.y=(d.y/e+1)/2,u.push(x.x,x.y)}f+=h}for(let M=0;M<s;M++){const p=M*(n+1);for(let g=0;g<n;g++){const T=g+p,E=T,v=T+n+1,L=T+n+2,C=T+1;a.push(E,v,C),a.push(v,L,C)}}this.setIndex(a),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Po(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fi extends Ke{constructor(t=new ui([new Vt(0,.5),new Vt(-.5,-.5),new Vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(r,3)),this.setAttribute("uv",new Te(o,2));function l(u){const f=s.length/3,h=u.extractPoints(e);let d=h.shape;const x=h.holes;Hi.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=x.length;p<g;p++){const T=x[p];Hi.isClockWise(T)===!0&&(x[p]=T.reverse())}const M=Hi.triangulateShape(d,x);for(let p=0,g=x.length;p<g;p++){const T=x[p];d=d.concat(T)}for(let p=0,g=d.length;p<g;p++){const T=d[p];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let p=0,g=M.length;p<g;p++){const T=M[p],E=T[0]+f,v=T[1]+f,L=T[2]+f;n.push(E,v,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return hx(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new fi(n,t.curveSegments)}}function hx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ee extends Ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new F,h=new F,d=[],x=[],M=[],p=[];for(let g=0;g<=n;g++){const T=[],E=g/n;let v=0;g===0&&o===0?v=.5/e:g===n&&c===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){const C=L/e;f.x=-t*Math.cos(s+C*r)*Math.sin(o+E*a),f.y=t*Math.cos(o+E*a),f.z=t*Math.sin(s+C*r)*Math.sin(o+E*a),x.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),p.push(C+v,1-E),T.push(l++)}u.push(T)}for(let g=0;g<n;g++)for(let T=0;T<e;T++){const E=u[g][T+1],v=u[g][T],L=u[g+1][T],C=u[g+1][T+1];(g!==0||o>0)&&d.push(E,v,C),(g!==n-1||c<Math.PI)&&d.push(v,L,C)}this.setIndex(d),this.setAttribute("position",new Te(x,3)),this.setAttribute("normal",new Te(M,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class He extends Ke{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new F,f=new F,h=new F;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){const M=x/s*r,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(x/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){const M=(s+1)*d+x-1,p=(s+1)*(d-1)+x-1,g=(s+1)*(d-1)+x,T=(s+1)*d+x;o.push(M,p,T),o.push(p,g,T)}this.setIndex(o),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Jt extends gs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bc extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class cf extends Bc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wa=new Ne,cu=new F,lu=new F;class lf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(cu),lu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lu),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const uu=new Ne,lr=new F,ba=new F;class dx extends lf{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vt(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lr.setFromMatrixPosition(t.matrixWorld),n.position.copy(lr),ba.copy(n.position),ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ba),n.updateMatrixWorld(),s.makeTranslation(-lr.x,-lr.y,-lr.z),uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu)}}class mr extends Bc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class px extends lf{constructor(){super(new Xu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uf extends Bc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new px}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class mx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=fu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function fu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);function gx(i){const t=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,e=new Pg({canvas:i,antialias:!t,powerPreference:"high-performance"});let s=Math.min(t?1.5:2,window.devicePixelRatio||1);e.setPixelRatio(s);let r=0,o=0;e.toneMapping=Ei;const a=new Hn(52,1,.4,16e3);let c=null,l=()=>{};const u=new mx;let f=0,h=!0;function d(){const M=i.clientWidth||window.innerWidth,p=i.clientHeight||window.innerHeight;e.setSize(M,p,!1),a.aspect=M/p,a.updateProjectionMatrix()}new ResizeObserver(d).observe(i),d();function x(){if(!h)return;const M=u.getDelta(),p=Math.min(.1,M);f+=p,r++,o+=M,o>1.5&&(r/o<28&&s>.75&&(s=Math.max(.75,s*.8),e.setPixelRatio(s),d()),r=0,o=0),l(f,p,Math.min(.33,M)),c&&e.render(c,a),requestAnimationFrame(x)}return x(),{renderer:e,camera:a,voir(M){c=M},definir(M,p){c=M,l=p||(()=>{})},temps:()=>f,arreter(){h=!1,e.dispose()}}}function _r(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ke;let l=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let x=0;x<d.count;++x)f.push(d.getX(x)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(const u in r){const f=hu(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let M=0;M<o[u].length;++M)d.push(o[u][M][h]);const x=hu(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(x)}}return c}function hu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new pn(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const f=c/e;for(let h=0,d=u.count;h<d;h++)for(let x=0;x<e;x++){const M=u.getComponent(h,x);a.setComponent(h+f,x,M)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function ls(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const Tt=(i,t={})=>new Jt({color:i,roughness:.85,metalness:0,flatShading:!0,...t});function xx(i,t,e,n,s=8){const r=new F().subVectors(t,i),o=r.length(),a=new Wt(n,e,o,s,1),c=new ps().setFromUnitVectors(new F(0,1,0),r.clone().normalize());return a.applyMatrix4(new Ne().compose(new F().addVectors(i,t).multiplyScalar(.5),c,new F(1,1,1))),a}function _x(i,t,e,n=8){const s=new Ro(i),r=Math.max(6,Math.floor(s.getLength()/3)),o=[];let a=s.getPoint(0);for(let c=1;c<=r;c++){const l=c/r,u=s.getPoint(l),f=t+(e-t)*((c-1)/r),h=t+(e-t)*l;o.push(xx(a,u,f,h,n));const d=new Ee(h,n,6);d.translate(u.x,u.y,u.z),o.push(d),a=u}return{geometrie:vx(o),courbe:s}}function vx(i){const t=i.map(e=>{const n=e.index?e.toNonIndexed():e;return n.deleteAttribute("uv"),n});return _r(t,!1)}const Mx=(()=>{const i=new ui;return i.moveTo(0,0),i.bezierCurveTo(.5,.4,.5,1.1,0,1.6),i.bezierCurveTo(-.5,1.1,-.5,.4,0,0),i})();function Vc(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Dc(i)}function yx(i,t=[]){i.updateMatrixWorld(!0);const e=new Set(t),n=new Map,s=o=>{if(!e.has(o)){if(o.isMesh&&!o.isInstancedMesh){const a=o.material;if(a&&a.isMeshStandardMaterial&&!a.map&&!a.transparent&&!a.polygonOffset&&a.emissive.getHex()===0&&o.visible&&!o.userData.garder){const c=`${a.flatShading}|${a.roughness}|${a.metalness}|${a.side}`;n.has(c)||n.set(c,{m:a,liste:[]}),n.get(c).liste.push(o);return}}for(const a of[...o.children])s(a)}};s(i);let r=0;for(const{m:o,liste:a}of n.values()){const c=a.map(u=>{const f=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();f.applyMatrix4(u.matrixWorld),f.deleteAttribute("uv");const h=f.attributes.position.count,d=new Float32Array(h*3),x=u.material.color;for(let M=0;M<h;M++)d.set([x.r,x.g,x.b],M*3);return f.setAttribute("color",new pn(d,3)),f}),l=new O(_r(c,!1),new Jt({vertexColors:!0,roughness:o.roughness,metalness:o.metalness,flatShading:o.flatShading,side:o.side}));for(const u of a)u.parent&&u.parent.remove(u),u.geometry.dispose();i.add(l),r+=a.length}return r}const Sx=(i,t,e)=>[Math.min(19.4,Math.max(-19.4,i)),Math.min(9.4,11.5+8*(1-Math.abs(i)/20),Math.max(.9,t)),Math.min(14.4,Math.max(-14.5,e))],wx={xMin:-18.6,xMax:18.6,zMin:-13.6,zMax:13.6};function _e(i,t){for(const[e,n]of Object.entries(t))n&&n.isVector3?i[e].copy(n):n&&n.isEuler?i.rotation.copy(n):i[e]=n;return i}function In(i,t,e,n=null){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new Dc(s);return r.colorSpace=Fn,n&&(r.wrapS=r.wrapT=vr,r.repeat.set(n[0],n[1])),r}function bx(){const i=new ju,t=ls(77),e=[];function n(_,V,q,St,Gt,me,Je,{solide:Sn=!1,rot:qn=0,mate:Qs={}}={}){const $i=new O(new oe(_,V,q),Tt(Je,Qs));return $i.position.set(St,Gt,me),$i.rotation.y=qn,i.add($i),Sn&&e.push({min:[St-_/2,Gt-V/2,me-q/2],max:[St+_/2,Gt+V/2,me+q/2]}),$i}function s(_,V,q,St,Gt,me,Je,Sn=12){const qn=new O(new Wt(_,V,q,Sn),Tt(Je));return qn.position.set(St,Gt,me),i.add(qn),qn}i.add(new cf(16773336,8016948,.55));const r=new uf(16773839,.9);r.position.set(16,20,-6),i.add(r);const o=new mr(16767392,420,60,1.6);o.position.set(0,14,0),i.add(o);const a=new mr(16769192,150,24,1.8);a.position.set(-12,8,-10),i.add(a);const c=In(512,512,(_,V,q)=>{const St=ls(5);for(let Gt=0;Gt<8;Gt++){_.fillStyle=["#b98a58","#a97b4b","#c29463","#b08050"][Gt%4],_.fillRect(0,Gt*64,V,62),_.fillStyle="rgba(0,0,0,0.22)",_.fillRect(0,Gt*64+62,V,2),_.fillStyle="rgba(0,0,0,0.12)";for(let me=0;me<14;me++)_.fillRect(St()*V,Gt*64+6+St()*50,30+St()*80,1.4);_.fillStyle="rgba(0,0,0,0.25)",_.fillRect(Gt*173%400+30,Gt*64,2,62)}},[6,5]),l=new O(new je(40,30),new Jt({map:c,roughness:.9}));l.rotation.x=-Math.PI/2,i.add(l);const u=In(512,512,(_,V)=>{for(let q=0;q<6;q++)_.fillStyle=["#8a5e3c","#7e5535","#935f3b"][q%3],_.fillRect(q*86,0,84,512),_.fillStyle="rgba(0,0,0,0.3)",_.fillRect(q*86+84,0,2,512)},[4,1]),f=new Jt({map:u,roughness:.95}),h=(_,V,q,St,Gt,me=0)=>{const Je=new O(new je(_,V),f);return Je.position.set(q,St,Gt),Je.rotation.y=me,i.add(Je),Je};h(40,12,0,6,-15,0),h(30,12,-20,6,0,Math.PI/2),h(30,12,20,6,0,-Math.PI/2);const d=(_,V,q,St)=>{const Gt=f.clone();Gt.map=u.clone(),Gt.map.repeat.set(_/10,V/12),Gt.map.needsUpdate=!0;const me=new O(new je(_,V),Gt);me.position.set(q,St,15),me.rotation.y=Math.PI,i.add(me)};d(12,12,-14,6),d(12,12,14,6),d(16,2,0,11);const x=new O(new fi((()=>{const _=new ui;return _.moveTo(-20,12),_.lineTo(20,12),_.lineTo(0,21),_.closePath(),_})()),f);x.position.set(0,0,-15),i.add(x);const M=x.clone();M.position.set(0,0,15),M.rotation.y=Math.PI,i.add(M);const p=Math.atan2(9,20),g=Math.hypot(20,9);for(const _ of[-1,1]){const V=new O(new oe(g+1,.5,31),Tt(5913894));V.position.set(_*10,16.55,0),V.rotation.z=-_*p,i.add(V)}for(let _=-13;_<=13;_+=6.5){n(40,.9,.9,0,12.1,_,3810837);for(const V of[-1,1]){const q=new O(new oe(g,.8,.8),Tt(3810837));q.position.set(V*10,16.1,_),q.rotation.z=-V*p,i.add(q)}n(.8,4.4,.8,0,14.4,_,3810837)}n(.9,.9,30,0,20.4,0,3810837);const T=In(512,512,(_,V,q)=>{const St=_.createLinearGradient(0,0,0,q);St.addColorStop(0,"#1f8fe6"),St.addColorStop(.55,"#7fe3dc"),St.addColorStop(1,"#fff3c0"),_.fillStyle=St,_.fillRect(0,0,V,q),_.fillStyle="#5fb7b8",_.beginPath(),_.ellipse(120,360,220,90,0,0,6.3),_.fill(),_.fillStyle="#4fb45a",_.fillRect(0,380,V,140),_.fillStyle="#7b4f2e",_.fillRect(256,190,34,200);for(const[Gt,me,Je,Sn]of[[240,170,90,"#23a04c"],[330,190,70,"#45c755"],[200,220,60,"#45c755"],[270,120,70,"#8fe55f"]])_.fillStyle=Sn,_.beginPath(),_.arc(Gt,me,Je,0,6.3),_.fill();_.fillStyle="#ff8a2b";for(const[Gt,me]of[[230,140],[320,170],[190,215]])_.beginPath(),_.arc(Gt,me,7,0,6.3),_.fill();_.fillStyle="#fffbe0",_.beginPath(),_.arc(420,90,36,0,6.3),_.fill()}),E=new O(new dn(4.2,40),new Le({map:T}));E.position.set(9,9,-14.85),i.add(E);const v=new O(new He(4.3,.34,8,40),Tt(3810837));v.position.set(9,9,-14.7),i.add(v),n(8.6,.24,.3,9,9,-14.7,3810837),n(.24,8.6,.3,9,9,-14.7,3810837);const L=new O(new je(9,34),new Le({color:16773824,transparent:!0,opacity:.1,blending:Jn,depthWrite:!1,side:Ge,fog:!1}));L.position.set(11.5,5,-7.5),L.rotation.set(-.95,-.3,.12),i.add(L),n(10.4,.45,3.6,-12,3.2,-12.6,11565637,{solide:!0});for(const[_,V]of[[-16.8,-14.1],[-7.2,-14.1],[-16.8,-11.1],[-7.2,-11.1]])n(.5,3.2,.5,_,1.6,V,8015920);n(9.6,.25,3,-12,1.2,-12.6,9264952),e.push({min:[-17.2,0,-14.4],max:[-6.8,3.5,-10.8]}),n(1.2,1.1,1.4,-17,3.95,-12.6,4871528),n(.35,.9,1.5,-16.2,4.05,-12.6,8095636);const C=In(256,128,(_,V,q)=>{_.fillStyle="#d9b27a",_.fillRect(0,0,V,q),_.fillStyle="rgba(80,50,20,0.45)";for(let St=6;St<V;St+=12)for(let Gt=6;Gt<q;Gt+=12)_.beginPath(),_.arc(St,Gt,1.5,0,6.3),_.fill()}),D=new O(new je(12,6),new Jt({map:C,roughness:.9}));D.position.set(-12,8.6,-14.88),i.add(D);const z=[[12.6,.3,0,3.1],[12.6,.3,0,-3.1],[.3,6.4,6.2,0],[.3,6.4,-6.2,0]];for(const[_,V,q,St]of z)n(_,V,.3,-12+q,8.6+St,-14.75,7031343);const w=10134704,S=new ae;S.add(_e(new O(new Wt(.1,.12,2.6,8),Tt(12159576)),{position:new F(0,0,0)})),S.add(_e(new O(new oe(1.3,.6,.5),Tt(7239554)),{position:new F(0,1.4,0)})),S.position.set(-16,8.8,-14.6),i.add(S);const N=new ae;N.add(new O(new Wt(.14,.14,2.8,8),Tt(w)));const tt=new O(new He(.42,.14,6,10,Math.PI*1.6),Tt(w));tt.position.y=1.5,N.add(tt),N.position.set(-14.4,8.7,-14.6),N.rotation.z=.2,i.add(N);const Q=new ui;Q.moveTo(0,0),Q.lineTo(3.4,.9),Q.lineTo(3.4,-.9),Q.closePath();const ut=new O(new fi(Q),new Jt({color:13160664,side:Ge,flatShading:!0}));ut.position.set(-12.3,9.6,-14.6),ut.rotation.z=-.5,i.add(ut),n(.7,.4,.5,-12.1,9.9,-14.6,12600623);for(const[_,V]of[[-10.2,14035002],[-9.6,16756768],[-9,4165606]])s(.17,.17,.9,_,7.6,-14.6,V,8),s(.05,.05,1.4,_,6.55,-14.6,w,6);for(const[_,V,q]of[[-15.2,6.9,.2],[-13.4,6.6,-.15]]){const St=new ae;for(const Gt of[-1,1]){const me=new O(new oe(.28,2.4,.2),Tt(w));me.rotation.z=Gt*.14,St.add(me);const Je=new O(new oe(.34,1.2,.26),Tt(14035002));Je.position.set(Gt*.34,-.95,0),Je.rotation.z=Gt*.14,St.add(Je)}St.position.set(_,V,-14.6),St.rotation.z=q,i.add(St)}for(const[_,V,q]of[[-8.4,8,16765517],[-7.7,6.9,16742981]]){const St=new O(new He(.55,.22,8,16),Tt(q));St.position.set(_,V,-14.6),i.add(St)}const W=new ae;W.add(_e(new O(new Wt(.1,.1,2.2,8),Tt(12159576)),{rotation:new Nn(0,0,Math.PI/2)})),W.add(_e(new O(new oe(.5,.9,.5),Tt(7239554)),{position:new F(-1.1,.1,0)})),W.position.set(-14.5,3.62,-12),W.rotation.y=.6,i.add(W);for(const[_,V,q]of[[-9.4,-13.2,14035002],[-8.6,-12.4,4165606],[-10.2,-11.8,4052640]])s(.42,.42,.7,_,3.78,V,q,10),s(.3,.3,.12,_,4.2,V,14541802,10);const $=new O(new Wt(.5,.5,1.1,10),new Jt({color:13625583,transparent:!0,opacity:.45}));$.position.set(-15.6,3.98,-13.4),i.add($);for(let _=0;_<12;_++){const V=new O(new oe(.1,.45,.1),Tt(11581632));V.position.set(-15.6+(t()-.5)*.6,3.7+t()*.5,-13.4+(t()-.5)*.6),V.rotation.set(t(),t(),t()),i.add(V)}s(.5,.5,.2,-10.5,3.52,-13.6,3817286);const Z=new O(new Wt(.08,.08,4,6),Tt(3817286));Z.position.set(-10.5,5.5,-13.6),i.add(Z);const J=new O(new Un(.9,.9,12,1,!0),new Jt({color:16756768,side:Ge,emissive:16756768,emissiveIntensity:.4}));J.position.set(-10.5,7.5,-13.2),J.rotation.x=Math.PI,i.add(J);function Et(_,V,q,St=0,Gt=0){const me=new ae;me.add(new O(new oe(3*q,3*q,3*q),Tt(12159576)));for(const Je of[-1.35,1.35]){const Sn=new O(new oe(3.1*q,.3*q,3.1*q),Tt(8015920));Sn.position.y=Je*q,me.add(Sn)}for(const[Je,Sn]of[[-1.35,-1.35],[1.35,-1.35],[-1.35,1.35],[1.35,1.35]]){const qn=new O(new oe(.3*q,3.1*q,.3*q),Tt(8015920));qn.position.set(Je*q,0,Sn*q),me.add(qn)}me.position.set(_,St+1.5*q,V),me.rotation.y=Gt,i.add(me),e.push({min:[_-1.5*q,St,V-1.5*q],max:[_+1.5*q,St+3*q,V+1.5*q]})}Et(13.5,-11.2,1,0,.1),Et(16.8,-11.8,1,0,-.08),Et(15.2,-11.4,1,3,.2),Et(16.2,-7.4,.8,0,.3);function nt(_,V,q){const St=new ae;St.add(new O(new Wt(1.3,1.3,3.2,14),Tt(q)));for(const Gt of[-1.1,1.1]){const me=new O(new He(1.32,.09,6,16),Tt(2830648));me.rotation.x=Math.PI/2,me.position.y=Gt,St.add(me)}St.position.set(_,1.6,V),i.add(St),e.push({min:[_-1.3,0,V-1.3],max:[_+1.3,3.2,V+1.3]})}nt(-18.2,6.2,4160176),nt(-16.4,8.4,11553338),n(3.4,1.6,1.7,-3.4,.8,-8.4,14035002,{solide:!0}),n(3.5,.2,1.8,-3.4,1.45,-8.4,15223378);const yt=new O(new He(.7,.07,6,12,Math.PI),Tt(2830648));yt.position.set(-3.4,1.7,-8.4),i.add(yt);const Pt=new ae;Pt.add(_e(new O(new Wt(2.4,2.4,.4,20),Tt(11041354)),{position:new F(0,.2,0)})),Pt.add(_e(new O(new Wt(2.4,2.4,.4,20),Tt(11041354)),{position:new F(0,2.6,0)})),Pt.add(_e(new O(new Wt(1.2,1.2,2.4,14),Tt(9264952)),{position:new F(0,1.4,0)})),Pt.position.set(5,0,-6.4),i.add(Pt),e.push({min:[2.6,0,-8.8],max:[7.4,2.8,-4]}),s(.5,.5,.7,5.6,3.15,-6.2,14035002,10),n(1,.7,1.4,4.4,3.2,-6.8,16765517),n(.4,11,7,19.6,5.5,4.5,7031343),n(.4,11,7,17.6,5.5,4.5,7031343);const Qt=[16742981,6013163,10216314,13081599,16765517,16734815];for(const _ of[1.2,4.2,7.2,10.2]){n(2.6,.3,7,18.6,_,4.5,9264952);for(let V=0;V<6;V++){const q=Qt[(V+Math.floor(_))%6];V%2?s(.45,.45,.9+V%3*.3,18.6,_+.65+V%3*.1,1.9+V*.95,q,10):n(1.1,.9+V%2*.3,.8,18.6,_+.65,1.9+V*.95,q)}}e.push({min:[17.4,0,.9],max:[19.9,11,8.1]});for(const _ of[-.9,.9]){const V=new O(new oe(.28,12.5,.28),Tt(12159576));V.position.set(-18.6,5.9,-4+_),V.rotation.z=-.13,i.add(V)}for(let _=0;_<9;_++){const V=new O(new oe(.2,.2,2),Tt(11041354));V.position.set(-19+_*.12,1.2+_*1.3,-4),i.add(V)}const st=new ae;for(let _=0;_<6;_++){const V=new O(new He(.8-_*.02,.16,6,16),Tt(14137466));V.position.z=_*.28,st.add(V)}st.position.set(-19.5,7,-10),st.rotation.y=Math.PI/2,i.add(st),s(.1,.1,.8,-19.7,8.1,-10,2830648,6).rotation.z=Math.PI/2;const ot=new ae,wt=new O(new Wt(3,3.4,.8,20),Tt(5531516));wt.position.y=.4,ot.add(wt);const bt=new O(new Wt(2.4,2.4,6.4,24,1,!0),new Jt({color:10478574,transparent:!0,opacity:.28,side:Ge,roughness:.05}));bt.position.y=4,ot.add(bt);const Ft=new O(new Wt(2.3,2.3,.2,20),new Jt({color:10478574,emissive:6013163,emissiveIntensity:.9}));Ft.position.y=.9,ot.add(Ft);const lt=new O(new Wt(2.7,2.2,1,20),Tt(7243424));lt.position.y=7.5,ot.add(lt);const gt=new O(new Ee(.4,12,12),new Jt({color:16734815,emissive:16734815,emissiveIntensity:1}));gt.position.y=9.2,ot.add(gt);const kt=new O(new Wt(.1,.1,1.8,6),Tt(7243424));kt.position.y=8.4,ot.add(kt);const _t=new mr(8382463,60,14);_t.position.y=3,ot.add(_t);const Mt=new O(new Wt(.5,2.1,6.4,24,1,!0),new Le({color:8382463,transparent:!0,opacity:0,blending:Jn,depthWrite:!1,side:Ge}));Mt.position.y=4.1,Mt.visible=!1,ot.add(Mt);const k={position:new F(-1,0,-11),platY:1,ouvrirVerre(_){bt.position.y=4+_*5.6},alarme(_){gt.material.color.setHex(_>0?16719390:16734815),gt.material.emissive.setHex(_>0?16719390:16734815),_t.color.setHex(_>0?16726570:8382463),_t.intensity=60+_*340},secouer(_){ot.position.set(-1+(Math.random()-.5)*_,0,-11+(Math.random()-.5)*_)},exploser(){ot.visible=!1,$t.visible=!0,Mt.visible=!1},reparer(){ot.visible=!0,$t.visible=!1,ot.position.set(-1,0,-11),bt.position.y=4,Mt.visible=!1,gt.material.color.setHex(16734815),gt.material.emissive.setHex(16734815),_t.color.setHex(8382463),_t.intensity=60,Ft.material.emissiveIntensity=.9},rayon(_){Mt.visible=_>.01,Mt.material.opacity=.34*Math.min(1.4,_),_t.intensity=60+_*260,Ft.material.emissiveIntensity=.9+_*1.6}},$t=new ae;$t.add(_e(new O(new Wt(3,3.4,.8,20),Tt(2830134)),{position:new F(0,.4,0)})),$t.add(_e(new O(new Wt(2.3,2.3,.2,16),Tt(1316378)),{position:new F(0,.9,0)}));for(let _=0;_<6;_++){const V=_/6*6.28,q=new O(new Wt(.13,.17,1.6+t()*2.4,6),Tt(4869976));q.position.set(Math.cos(V)*2.2,1.6,Math.sin(V)*2.2),q.rotation.set((t()-.5)*.9,0,(t()-.5)*.9),$t.add(q)}const Lt=new O(new dn(6,28),new Le({color:328965,transparent:!0,opacity:.55,depthWrite:!1}));Lt.rotation.x=-Math.PI/2,Lt.position.y=.05,$t.add(Lt),$t.position.set(-1,0,-11),$t.visible=!1,i.add($t),ot.position.set(-1,0,-11),i.add(ot),e.push({min:[-4.4,0,-14.4],max:[2.4,9,-7.6]});const Xt=In(256,256,(_,V)=>{_.fillStyle="#b8453a",_.fillRect(0,0,V,V);for(const[q,St]of[[118,"#e8c9a0"],[96,"#2f6f8a"],[70,"#e8c9a0"],[46,"#b8453a"],[22,"#ffd24d"]])_.fillStyle=St,_.beginPath(),_.arc(128,128,q,0,6.3),_.fill()}),Ut=new O(new dn(6,40),new Jt({map:Xt,roughness:1}));Ut.rotation.x=-Math.PI/2,Ut.position.set(1,.03,4),i.add(Ut);for(const[_,V,q,St]of[[-17,10.8,1.2,.3],[-14.2,11.4,.9,-.2],[-16.4,11,.8,.1]]){const Gt=new O(new oe(2.4*q,1.8*q,2*q),Tt(13148268));Gt.position.set(_,V===11?1.7:.9*q,V),Gt.rotation.y=St,i.add(Gt),e.push({min:[_-1.2*q,0,V-q],max:[_+1.2*q,1.8*q,V+q]})}for(let _=0;_<5;_++){const V=new O(new Wt(.28,.28,3.4,8),Tt(15327952));V.position.set(11+_*.6,1.5,11.5),V.rotation.set(.1,0,Math.PI/2-.5+_*.1),i.add(V)}const se=new ae;se.add(_e(new O(new Wt(.06,.06,6,6),Tt(2830648)),{position:new F(0,3,0)})),se.add(new O(new Un(2.1,1.6,16,1,!0),new Jt({color:4165482,side:Ge,emissive:1923648,emissiveIntensity:.4}))),se.add(_e(new O(new Ee(.6,12,12),new Le({color:16773832})),{position:new F(0,-.3,0)})),se.position.set(0,14.4,0),i.add(se);const qt=In(512,128,(_,V,q)=>{_.fillStyle="#cfc8b4",_.fillRect(0,0,V,q);for(let St=0;St<4;St++){const Gt=St*128+10;_.fillStyle="rgba(0,0,0,0.22)",_.fillRect(Gt,14,108,100),_.fillStyle="#e4dcc6",_.fillRect(Gt+4,18,100,92),_.fillStyle="rgba(255,255,255,0.4)",_.fillRect(Gt+4,18,100,3)}_.fillStyle="rgba(0,0,0,0.4)",_.fillRect(0,0,V,4),_.fillRect(0,q-4,V,4)}),I=new Jt({map:qt,roughness:.55,metalness:.15});for(let _=0;_<5;_++){const V=new O(new oe(16,.3,1.9),I);V.position.set(0,11,13.4-_*1.95),i.add(V)}n(.8,10.3,.5,-8.4,5.15,14.7,5913894),n(.8,10.3,.5,8.4,5.15,14.7,5913894),n(17.6,.8,.5,0,10,14.7,5913894);const b=9081241;for(const _ of[-1,1])n(.25,9.8,.3,_*8,4.9,14.2,b),n(.25,.25,9.6,_*8,10.7,9.6,b);const rt=new O(new Wt(.2,.2,14.4,10),Tt(b));rt.rotation.z=Math.PI/2,rt.position.set(0,10.8,14.1),i.add(rt);for(let _=-6;_<=6;_++){const V=new O(new He(.34,.07,6,12),Tt(5989488));V.rotation.y=Math.PI/2,V.position.set(_*.5-2.4,10.8,14.1),i.add(V)}n(2.2,1.3,1.2,5.8,12,14.3,4872810);const G=new O(new Ee(.16,8,8),new Jt({color:4052602,emissive:4052602,emissiveIntensity:1}));G.position.set(5.8,12,13.62),i.add(G),n(1,1.7,.16,10.2,4.2,14.9,15327952),s(.26,.26,.14,10.2,4.65,14.8,14035002,12).rotation.x=Math.PI/2,s(.26,.26,.14,10.2,3.8,14.8,4052602,12).rotation.x=Math.PI/2;const R=new O(new je(15.6,9),new Le({color:16774864,transparent:!0,opacity:.2,blending:Jn,depthWrite:!1}));R.rotation.x=-Math.PI/2,R.position.set(0,.05,10.4),i.add(R),i.background=new xe(9425906),i.fog=new Lc(13495024,90,230);const H=In(16,256,(_,V,q)=>{const St=_.createLinearGradient(0,0,0,q);St.addColorStop(0,"#2f8fe0"),St.addColorStop(.55,"#8fd9f2"),St.addColorStop(.75,"#e6f6ee"),St.addColorStop(1,"#e6f6ee"),_.fillStyle=St,_.fillRect(0,0,V,q)}),X=new O(new Ee(300,24,16),new Le({map:H,side:Tn,fog:!1}));X.position.set(0,-20,60),i.add(X);const j=In(256,256,(_,V,q)=>{const St=ls(21);_.fillStyle="#58b84a",_.fillRect(0,0,V,q);for(let Gt=0;Gt<900;Gt++)_.fillStyle=["#4aa83f","#66c455","#52b146"][Gt%3],_.fillRect(St()*V,St()*q,2,5+St()*5);for(let Gt=0;Gt<26;Gt++)_.fillStyle=["#ffffff","#ffd24d","#ff8fbf"][Gt%3],_.beginPath(),_.arc(St()*V,St()*q,2.2,0,6.3),_.fill()},[40,28]),ft=new O(new je(320,200),new Jt({map:j,roughness:1}));ft.rotation.x=-Math.PI/2,ft.position.set(0,-.03,114),i.add(ft),n(16,.3,1.2,0,0,15.6,10261640);for(let _=0;_<7;_++)n(4.4,.12,3.2,Math.sin(_*.9)*2.6,.04,20+_*5.2,12104356);for(let _=-60;_<=60;_+=3)n(.6,3.2,.3,_,1.6,52,15854034),n(3,.3,.2,_+1.5,2.2,52,15854034);const At=new ae,ht=new O(new Ee(1.5,16,12),Tt(16734815,{flatShading:!1}));ht.position.set(-9,1.5,26),At.add(ht);for(const _ of[0,1]){const V=new O(new He(1.5,.12,6,20),Tt(16777215));V.position.set(-9,1.5,26),V.rotation.set(_?Math.PI/2:0,_?0:.3,0),At.add(V)}[[8,24,16742981,0],[10,24.6,6013163,.3],[9,24.2,16765517,-.2]].forEach(([_,V,q,St],Gt)=>{const me=new O(new oe(1.8,1.8,1.8),Tt(q));me.position.set(_,.9+(Gt===2?1.8:0),V),me.rotation.y=St,At.add(me)});const Rt=new ae;Rt.add(_e(new O(new oe(4.2,1.4,2),Tt(16756768)),{position:new F(0,1.3,0)})),Rt.add(_e(new O(new oe(1.5,1.4,2),Tt(14035002)),{position:new F(2.4,1.6,0)}));for(const[_,V]of[[-1.3,-1],[-1.3,1],[1.8,-1],[1.8,1]]){const q=new O(new Wt(.5,.5,.3,12),Tt(2303531));q.rotation.x=Math.PI/2,q.position.set(_,.5,V),Rt.add(q)}Rt.position.set(-1,0,33),Rt.rotation.y=.6,At.add(Rt);const Ot=new O(new Wt(3.2,3.2,.6,20),Tt(4165606));Ot.position.set(14,.3,36),At.add(Ot);const Bt=new O(new Wt(2.9,2.9,.65,20),Tt(15784352));Bt.position.set(14,.32,36),At.add(Bt);const Ct=new O(new Wt(.9,.7,1.2,10),Tt(16748479));Ct.position.set(15.2,1.2,36.6),At.add(Ct);const Yt=new O(new oe(.2,.15,1.8),Tt(6013163));Yt.position.set(13,.8,35),Yt.rotation.y=.5,At.add(Yt);const ee=new O(new Wt(1.1,1.1,.14,16),Tt(10216314));ee.position.set(-15,.1,40),At.add(ee);for(const _ of[-1,1]){const V=new O(new Wt(.12,.12,8,6),Tt(11553338));V.position.set(24+_*3.2,4,30),V.rotation.z=-_*.18,At.add(V);const q=V.clone();q.position.z=33,At.add(q)}const ne=new O(new Wt(.12,.12,7.6,6),Tt(11553338));ne.rotation.z=Math.PI/2,ne.position.set(24,7.7,31.5),At.add(ne);for(const _ of[-1.2,1.2]){const V=new O(new Wt(.03,.03,6,4),Tt(5592405));V.position.set(24+_,4.7,31.5),At.add(V)}const Y=new O(new oe(2.6,.2,1),Tt(16765517));Y.position.set(24,1.7,31.5),At.add(Y),i.add(At);for(let _=0;_<26;_++){const V=(t()-.5)*110,q=22+t()*26;if(Math.abs(V)<6&&q<50)continue;const St=new O(new xn(1.2+t()*1.2,0),Tt([4045656,3121228,5031520][_%3]));if(St.position.set(V,.8,q),i.add(St),_%2){const Gt=new O(new xn(.4,0),Tt([16742981,16748479,16765517][_%3]));Gt.position.set(V+.4,1.9+t()*.8,q+.5),i.add(Gt)}}const Ht=150,xt=new Si(new Wt(.7,1,9,6),Tt(7031343),Ht),mt=new Si(new xn(1,0),Tt(2789194),Ht),Nt=new Si(new xn(1,0),Tt(4045656),Ht),vt=new nn;for(let _=0;_<Ht;_++){let V=(t()-.5)*220;const q=62+t()*70,St=.9+t()*.9;Math.abs(V-2)<17&&q<102&&(V+=V>2?22:-22),vt.rotation.set(0,t()*6,0),vt.position.set(V,4.5*St,q),vt.scale.set(St,St,St),vt.updateMatrix(),xt.setMatrixAt(_,vt.matrix),vt.position.set(V,11*St,q),vt.scale.set(5.5*St,6.5*St,5.5*St),vt.updateMatrix(),mt.setMatrixAt(_,vt.matrix),vt.position.set(V+1.2*St,15*St,q-.8),vt.scale.set(3.6*St,4.2*St,3.6*St),vt.updateMatrix(),Nt.setMatrixAt(_,vt.matrix)}i.add(xt,mt,Nt);const he=In(128,128,_=>{_.fillStyle="#fff6df",_.beginPath(),_.arc(64,64,62,0,6.3),_.fill(),_.fillStyle="#2b3138";for(let V=0;V<12;V++){const q=V/12*6.283;_.beginPath(),_.arc(64+Math.sin(q)*52,64-Math.cos(q)*52,V%3?2.5:4.5,0,6.3),_.fill()}}),Ie=new ae;Ie.add(new O(new He(1.7,.2,8,30),Tt(7031343))),Ie.add(new O(new dn(1.7,30),new Le({map:he})));const Fe=new ae;Fe.add(_e(new O(new oe(.12,1,.05),Tt(2830648)),{position:new F(0,.5,.05)}));const ge=new ae;ge.add(_e(new O(new oe(.08,1.4,.05),Tt(14035002)),{position:new F(0,.7,.1)})),Ie.add(Fe,ge),Ie.position.set(-19.9,10,5),Ie.rotation.y=Math.PI/2,i.add(Ie);const $e=In(512,256,(_,V,q)=>{_.fillStyle="#2c4a3e",_.fillRect(0,0,V,q),_.strokeStyle="rgba(255,255,255,.9)",_.fillStyle="rgba(255,255,255,.9)",_.lineWidth=4,_.lineCap="round",_.font="bold 34px sans-serif",_.fillText("PLAN SECRET",30,50),_.beginPath(),_.arc(110,110,22,0,6.3),_.stroke(),_.beginPath(),_.moveTo(110,132),_.lineTo(110,200),_.moveTo(110,150),_.lineTo(70,175),_.moveTo(110,150),_.lineTo(150,175),_.moveTo(110,200),_.lineTo(85,240),_.moveTo(110,200),_.lineTo(135,240),_.stroke(),_.beginPath(),_.moveTo(190,175),_.lineTo(330,175),_.lineTo(310,155),_.moveTo(330,175),_.lineTo(310,195),_.stroke(),_.beginPath(),_.arc(400,195,7,0,6.3),_.stroke(),_.beginPath(),_.moveTo(400,202),_.lineTo(400,222),_.moveTo(400,208),_.lineTo(390,216),_.moveTo(400,208),_.lineTo(410,216),_.stroke(),_.font="bold 22px sans-serif",_.fillText("ça rétrécit !",310,140)});n(.4,5.6,8.6,19.8,6.5,-4,7031343);const mn=new O(new je(8,5),new Jt({map:$e,roughness:.95}));mn.position.set(19.55,6.5,-4),mn.rotation.y=-Math.PI/2,i.add(mn);const Mn=new ae;Mn.add(_e(new O(new Wt(1.5,1.5,.25,18),Tt(11041354)),{position:new F(0,3,0)})),Mn.add(_e(new O(new Wt(.22,.4,3,8),Tt(8015920)),{position:new F(0,1.5,0)})),Mn.add(_e(new O(new Wt(1,.8,.55,12),Tt(4876938)),{position:new F(0,3.4,0)})),Mn.add(_e(new O(new Wt(.1,.18,1.5,6),Tt(7031343)),{position:new F(0,4.35,0)}));for(const[_,V,q,St,Gt]of[[0,5.5,0,.9,3121228],[-.7,5,.2,.6,4573013],[.7,5.1,-.2,.55,4573013]])Mn.add(_e(new O(new xn(St,0),Tt(Gt)),{position:new F(_,V,q)}));Mn.position.set(13.5,0,-2.5),i.add(Mn),e.push({min:[12,0,-4],max:[15,3.2,-1]});const fe=new ae;fe.add(_e(new O(new oe(3,1.1,2),Tt(4160176)),{position:new F(0,1.6,0)}));const yn=new O(new Wt(.75,.75,.35,14),Tt(2830648));yn.rotation.x=Math.PI/2,yn.position.set(1.8,.75,0),fe.add(yn);for(const _ of[-.7,.7])fe.add(_e(new O(new oe(2.6,.16,.16),Tt(12159576)),{position:new F(-2.2,1.2,_)}));for(const _ of[-.7,.7])fe.add(_e(new O(new oe(.16,1.2,.16),Tt(8015920)),{position:new F(-.7,.6,_)}));for(const[_,V]of[[-.4,.3],[.3,-.4],[.5,.4]])fe.add(_e(new O(new xn(.45,0),Tt(16742981)),{position:new F(_,2.35,V)}));fe.position.set(-12.5,0,11.5),fe.rotation.y=.5,i.add(fe),e.push({min:[-15,0,9.5],max:[-10,2.4,13.5]});for(const[_,V,q]of[[-6.4,12.4,16742981],[-5.2,12.8,16748479],[6.6,12.5,16756768],[7.9,12.2,16748479]]){const St=new O(new Wt(.7,.5,1,10),Tt(12740924));St.position.set(_,.5,V),i.add(St),s(.04,.04,1.4,_,1.6,V,3116876,5);const Gt=new O(new xn(.55,0),Tt(q));Gt.position.set(_,2.45,V),i.add(Gt);const me=new O(new xn(.6,0),Tt(4045656));me.position.set(_,1.3,V),i.add(me)}const Rn=new ae;Rn.add(_e(new O(new Wt(.8,.9,1.5,12),Tt(4045722)),{position:new F(0,.75,0)})),Rn.add(_e(new O(new Wt(.14,.2,1.8,8),Tt(4045722)),{position:new F(1.2,1.5,0),rotation:new Nn(0,0,-.9)}));const di=new O(new He(.6,.08,6,12,Math.PI),Tt(3119742));di.position.set(-.1,1.5,0),Rn.add(di),Rn.position.set(-3.4,0,11.6),Rn.rotation.y=-.4,i.add(Rn),e.push({min:[-4.8,0,10.6],max:[-2,1.6,12.6]});for(const[_,V,q,St]of[[12.2,12,.4,14035002],[12.2,12,1.2,4165606],[13.6,12.2,.4,16765517]])s(.6,.6,.8,_,q,V,St,12),s(.5,.5,.1,_,q+.45,V,14541802,12);e.push({min:[11.5,0,11.3],max:[14.3,1.6,12.9]});const Kn=new O(new He(1,.45,8,18),Tt(2303531));Kn.rotation.x=Math.PI/2,Kn.position.set(16.2,.46,11),i.add(Kn);const pi=Kn.clone();pi.position.y=1.36,i.add(pi),e.push({min:[14.7,0,9.5],max:[17.7,1.8,12.5]});const Cn=new ae;for(const _ of[-2.1,2.1]){const V=new O(new He(1.1,.09,6,22),Tt(2303531));V.rotation.y=Math.PI/2,V.position.set(0,1.1,_),Cn.add(V)}const Pn=(_,V,q)=>{const St=new F().subVectors(V,_),Gt=new O(new Wt(.07,.07,St.length(),6),Tt(q));Gt.position.copy(_).addScaledVector(St,.5),Gt.quaternion.setFromUnitVectors(new F(0,1,0),St.normalize()),Cn.add(Gt)},Xi=new F(0,1.1,-2.1),qi=new F(0,1.1,2.1),Ci=new F(0,2.6,-.7),Qn=new F(0,1.2,.2),Pi=new F(0,2.7,1.8);Pn(Xi,Ci,14035002),Pn(Xi,Qn,14035002),Pn(Ci,Qn,14035002),Pn(Ci,new F(0,2.7,1.5),14035002),Pn(qi,Pi,14035002),Pn(Qn,qi,14035002),Cn.add(_e(new O(new oe(.25,.1,.9),Tt(2303531)),{position:new F(0,2.75,-.8)})),Cn.add(_e(new O(new oe(1.4,.1,.1),Tt(2303531)),{position:new F(0,3,1.85)})),Cn.position.set(18.7,0,7),Cn.rotation.z=-.12,i.add(Cn);const P=[16765517,16742981,6013163,16748479,10216314];for(const _ of[-6.5,6.5])for(let V=0;V<=28;V++){const q=V/28,St=-18.5+q*37,Gt=11.2-Math.sin(q*Math.PI)*1.5,me=new O(new Ee(.13,8,6),new Le({color:P[V%5]}));me.position.set(St,Gt,_),i.add(me)}const K={z:1.2},dt=In(256,512,(_,V,q)=>{_.fillStyle="#2f78a8",_.fillRect(0,0,V,q),_.fillStyle="rgba(0,0,0,0.28)";for(const[Gt,me,Je,Sn]of[[26,250,90,110],[140,250,90,110],[26,380,90,110],[140,380,90,110]])_.fillRect(Gt,me,Je,Sn);_.fillStyle="#3d8dc2";for(const[Gt,me,Je,Sn]of[[32,256,78,98],[146,256,78,98],[32,386,78,98],[146,386,78,98]])_.fillRect(Gt,me,Je,Sn);_.fillStyle="#f5e9c8",_.beginPath(),_.arc(128,130,78,0,6.3),_.fill();const St=_.createRadialGradient(128,130,4,128,130,70);St.addColorStop(0,"#fff3b0"),St.addColorStop(1,"#ffc65a"),_.fillStyle=St,_.beginPath(),_.arc(128,130,68,0,6.3),_.fill(),_.strokeStyle="#f5e9c8",_.lineWidth=6,_.beginPath(),_.moveTo(128,62),_.lineTo(128,198),_.moveTo(60,130),_.lineTo(196,130),_.stroke()}),ct=new ae;ct.add(_e(new O(new oe(5.8,8.6,.5),Tt(5913894)),{position:new F(0,4.3,.25)}));const it=In(64,128,(_,V,q)=>{const St=_.createLinearGradient(0,0,0,q);St.addColorStop(0,"#fff4c8"),St.addColorStop(.6,"#ffd890"),St.addColorStop(1,"#e8a860"),_.fillStyle=St,_.fillRect(0,0,V,q),_.fillStyle="rgba(120,70,30,.35)",_.fillRect(0,q-14,V,14)});ct.add(_e(new O(new je(4.6,7.7),new Le({map:it})),{position:new F(0,3.95,.08)}));const zt=new ae;zt.position.set(-2.3,0,.45),zt.add(_e(new O(new oe(4.6,7.7,.3),new Jt({map:dt,roughness:.6})),{position:new F(2.3,3.95,0)}));const jt=new O(new Ee(.22,10,8),Tt(14725184,{flatShading:!1}));jt.position.set(3.9,3.7,.3),zt.add(jt);const re=new O(new Wt(.14,.14,.12,10),Tt(14725184));re.rotation.x=Math.PI/2,re.position.set(3.9,3.2,.17),zt.add(re);for(const _ of[1.2,6.6])zt.add(_e(new O(new oe(.14,.7,.1),Tt(2830648)),{position:new F(.15,_,.19)}));ct.add(zt);const te=new O(new je(4.6,6),new Le({color:16769696,transparent:!0,opacity:0,blending:Jn,depthWrite:!1}));te.rotation.x=-Math.PI/2,te.position.set(0,.07,3.2),ct.add(te);const de=In(128,96,(_,V,q)=>{_.fillStyle="#f0dca8",_.fillRect(0,0,V,q),_.strokeStyle="#6b4a2f",_.lineWidth=5,_.strokeRect(3,3,V-6,q-6),_.fillStyle="#3a2615",_.font="bold 17px sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText("DÉMARRER",V/2,20),_.fillText("L'ANIMATION",V/2,76)});ct.add(_e(new O(new oe(2,2.9,.25),Tt(5913894)),{position:new F(-3.95,5.2,.13)})),ct.add(_e(new O(new je(1.7,1.28),new Jt({map:de,roughness:.9})),{position:new F(-3.95,5.75,.27)}));const pe=new Jt({color:14035002,emissive:14035002,emissiveIntensity:.6,roughness:.4}),ie=new O(new Wt(.42,.46,.22,20),pe);ie.rotation.x=Math.PI/2,ie.position.set(-3.95,4.45,.38),ct.add(ie),ct.add(_e(new O(new He(.5,.06,8,20),Tt(14725184)),{position:new F(-3.95,4.45,.27)}));const ye=In(256,80,(_,V,q)=>{_.fillStyle="#c9a06c",_.fillRect(0,0,V,q),_.strokeStyle="#6b4a2f",_.lineWidth=6,_.strokeRect(3,3,V-6,q-6),_.fillStyle="#3a2615",_.font="bold 46px sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText("MAISON",V/2,q/2+2)});ct.add(_e(new O(new je(3.2,1),new Jt({map:ye,roughness:.9})),{position:new F(0,9.4,.12)}));const we=new ae;we.add(_e(new O(new Wt(.4,.4,.9,8),new Jt({color:16769162,emissive:16760906,emissiveIntensity:.9})),{position:new F(0,0,0)})),we.add(_e(new O(new Un(.6,.4,8),Tt(2830648)),{position:new F(0,.65,0)})),we.add(_e(new O(new oe(.15,.15,.5),Tt(2830648)),{position:new F(0,0,-.35)})),we.position.set(3.7,6.2,.7);const ze=new mr(16767392,40,16,1.8);ze.position.copy(we.position),ze.position.z+=.8,ct.add(ze),ct.add(we);const an=In(256,128,(_,V,q)=>{_.fillStyle="#7a5030",_.fillRect(0,0,V,q),_.strokeStyle="#d7b87a",_.lineWidth=5,_.strokeRect(8,8,V-16,q-16),_.fillStyle="#f0dca8",_.font="bold 30px sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText("BIENVENUE",V/2,q/2+2)}),Ae=new O(new je(4.4,2.2),new Jt({map:an,roughness:1}));Ae.rotation.x=-Math.PI/2,Ae.position.set(0,.05,1.7),ct.add(Ae);const le=new O(new Wt(.8,.6,1.2,10),Tt(12740924));le.position.set(-3.9,.6,1),ct.add(le);for(const[_,V,q,St,Gt]of[[-3.9,2,1,.85,4045656],[-4.3,2.7,.8,.5,16742981],[-3.5,2.8,1.2,.5,16748479]])ct.add(_e(new O(new xn(St,0),Tt(Gt)),{position:new F(_,V,q)}));ct.position.set(-20,0,K.z),ct.rotation.y=Math.PI/2,i.add(ct);const gn={ouvrir(_){zt.rotation.y=-_*1.75,te.material.opacity=.5*_},position:new F(-19.4,0,K.z)},Re=(_,V)=>_<-12&&V>-3.2&&V<5.8,Qe=(_,V,q=.8)=>!Re(_,V)&&!e.some(St=>_>St.min[0]-q&&_<St.max[0]+q&&V>St.min[2]-q&&V<St.max[2]+q),Be=(_=30)=>{for(let V=0;V<_;V++){const q=(t()-.5)*35,St=-12.5+t()*24;if(Qe(q,St))return[q,St]}return null},ke=[12159576,11041354,13213804,9264952];for(let _=0;_<9;_++){const V=Be();if(!V)continue;const q=4+t()*4,St=new O(new oe(q,.26,.8+t()*.5),Tt(ke[_%4]));if(St.position.set(V[0],.14,V[1]),St.rotation.y=t()*3.14,i.add(St),_%3===0){const Gt=new O(new oe(q*.8,.26,.8),Tt(ke[(_+1)%4]));Gt.position.set(V[0]+.4,.41,V[1]+.3),Gt.rotation.y=t()*3.14,i.add(Gt)}}for(let _=0;_<16;_++){const V=Be();if(!V)continue;const q=new O(new xn(.35+t()*.25,0),Tt(16052192));q.position.set(V[0],.4,V[1]),q.rotation.set(t()*6,t()*6,t()*6),i.add(q)}for(let _=0;_<9;_++){const V=Be();if(!V)continue;const q=new O(new je(1.6,2.1),new Jt({color:_%3?16183778:12573938,roughness:1,side:Ge}));q.rotation.set(-Math.PI/2,0,t()*6),q.position.set(V[0],.05+_*.004,V[1]),i.add(q)}const ti=[14035002,4165606,16765517,4045656,2830648];for(let _=0;_<9;_++){const V=Be();if(!V)continue;const q=new O(new dn(.7+t()*1,14),new Jt({color:ti[_%5],roughness:.4,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));q.rotation.x=-Math.PI/2,q.scale.set(1+t()*.8,1,1),q.rotation.z=t()*3,q.position.set(V[0],.06,V[1]),i.add(q)}{const _=Be();if(_){const V=new O(new Wt(.7,.7,1.2,12),Tt(4165606));V.rotation.z=Math.PI/2,V.position.set(_[0],.7,_[1]),V.rotation.y=.8,i.add(V);const q=new O(new dn(1.6,16),new Jt({color:4165606,roughness:.3,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));q.rotation.x=-Math.PI/2,q.scale.set(1.5,1,.9),q.position.set(_[0]+.8,.07,_[1]+.5),i.add(q)}}for(let _=0;_<40;_++){const V=Be();if(!V)continue;const q=new O(new Wt(.06,.06,.6+t()*.5,5),Tt(_%3?11581632:13149002));if(q.rotation.set(Math.PI/2,0,t()*6),q.position.set(V[0],.08,V[1]),i.add(q),_%4===0){const St=new O(new Wt(.2,.2,.16,6),Tt(9081241));St.position.set(V[0]+.5,.1,V[1]-.3),i.add(St)}}for(let _=0;_<4;_++){const V=Be();if(!V)continue;const q=new ae;q.add(_e(new O(new Wt(.11,.11,2.4,8),Tt(12159576)),{rotation:new Nn(0,0,Math.PI/2),position:new F(0,.12,0)})),q.add(_e(new O(new oe(.5,.5,.9),Tt(_%2?14035002:7239554)),{position:new F(-1.2,.25,0)})),q.position.set(V[0],0,V[1]),q.rotation.y=t()*6,i.add(q)}for(let _=0;_<2;_++){const V=Be();if(!V)continue;for(let St=0;St<3;St++){const Gt=new O(new He(.9-St*.2,.1,6,18),Tt(_?16756768:2830648));Gt.rotation.x=Math.PI/2,Gt.position.set(V[0],.1+St*.18,V[1]),i.add(Gt)}const q=new O(new He(2.2,.1,6,16,1.6),Tt(_?16756768:2830648));q.rotation.x=Math.PI/2,q.position.set(V[0]+1.6,.1,V[1]+.4),q.rotation.z=t()*6,i.add(q)}for(let _=0;_<3;_++){const V=Be();if(!V)continue;const q=new O(new He(.42,.18,8,14),Tt([16765517,16742981,6013163][_]));q.rotation.x=Math.PI/2,q.position.set(V[0],.2,V[1]),i.add(q)}for(let _=0;_<4;_++){const V=Be();if(!V)continue;const q=new O(new Un(1.4+t()*.8,.7,9),Tt(14729871));q.position.set(V[0],.3,V[1]),i.add(q);for(let St=0;St<5;St++){const Gt=new O(new He(.28,.05,5,10,4.5),Tt(15718312));Gt.rotation.set(t()*3,t()*3,t()*3),Gt.position.set(V[0]+(t()-.5)*3,.15,V[1]+(t()-.5)*3),i.add(Gt)}}for(let _=0;_<3;_++){const V=Be();if(!V)continue;const q=new ae;q.add(_e(new O(new oe(2.4,1.6,2),Tt(13148268)),{position:new F(0,.8,0)}));for(const St of[-1,1])q.add(_e(new O(new oe(2.4,.08,1),Tt(11569752)),{position:new F(0,1.9,St*1.3),rotation:new Nn(St*.9,0,0)}));q.position.set(V[0],0,V[1]),q.rotation.set(0,t()*6,(t()-.5)*.2),i.add(q)}for(let _=0;_<5;_++){const V=Be();if(!V)continue;const q=new O(new oe(1.3,.6,.65),Tt(11883834));q.position.set(V[0],.3+(_===4?.6:0),V[1]),q.rotation.y=t()*6,i.add(q)}{const _=Be();if(_){const V=new O(new Ee(.5,12,10),Tt(14217290,{flatShading:!1}));V.position.set(_[0],.5,_[1]),i.add(V)}}for(let _=0;_<7;_++){const V=Be();if(!V)continue;const q=new O(new oe(.7,.7,.7),Tt([16742981,6013163,10216314,16765517][_%4]));q.position.set(V[0],.35,V[1]),q.rotation.y=t()*6,i.add(q)}for(let _=0;_<4;_++){const V=new O(new oe(.9,7-_*.5,.25),Tt(ke[_]));V.position.set(-.8+_*1,3.4,-14.5+_*.05),V.rotation.z=.12+_*.03,V.rotation.x=-.12,i.add(V)}const De=140,be=new Float32Array(De*3),ei=[];for(let _=0;_<De;_++)ei.push([(t()-.5)*36,1+t()*14,(t()-.5)*26,t()*6.28]);const un=new Ic(new Ke().setAttribute("position",new pn(be,3)),new Ao({map:Vc(),color:16773312,size:.5,transparent:!0,opacity:.7,blending:Jn,depthWrite:!1}));un.frustumCulled=!1,i.add(un),yx(i,[ot,$t,zt,Fe,ge,se]);function On(_){const V=un.geometry.attributes.position;ei.forEach((q,St)=>V.setXYZ(St,q[0]+Math.sin(_*.2+q[3])*1.4,q[1]+Math.sin(_*.3+q[3])*.8,q[2]+Math.cos(_*.25+q[3])*1.2)),V.needsUpdate=!0,se.rotation.z=Math.sin(_*.6)*.012,gt.material.emissiveIntensity=.4+Math.abs(Math.sin(_*2.2))*.9,L.material.opacity=.08+Math.sin(_*.4)*.025,pe.emissiveIntensity=.45+Math.abs(Math.sin(_*3))*.9,Mt.visible&&Mt.scale.set(1+Math.sin(_*9)*.03,1,1+Math.sin(_*9)*.03),ge.rotation.z=-_*.6,Fe.rotation.z=-_*.05+1}return{scene:i,colliders:e,maj:On,depart:new F(1,0,3),porteMaison:{x:-18.6,z:K.z},maisonApi:gn,machineApi:k,limites:wx,limiterCamera:Sx,nom:"Le grenier du professeur Mousse"}}const En=(i,t={})=>Tt(i,{flatShading:!1,roughness:.72,...t}),Ye=(i,t,e=16,n=12)=>new O(new Ee(i,e,n),t),zi=(i,t,e,n=6,s=12)=>new O(new xs(i,t,n,s),e);function Oe(i,t,e,n,s=1,r=1,o=1){return i.position.set(t,e,n),i.scale.set(s,r,o),i}function ff(i){const{jambe:t,torse:e,large:n,teteR:s,peau:r,cheveux:o,haut:a,bas:c,chaussure:l,enfant:u,lunettes:f=!1,moustache:h=!1,sac:d=!1,barbe:x=!1}=i,M=new ae,p=En(r),g=En(a),T=En(c),E=En(o,{roughness:.9}),v=En(l),L=En(16777215,{roughness:.5}),C=En(new xe(r).multiplyScalar(.82).getHex()),D=t,z=t+e,w=zi(n*.86,e*.5,g);Oe(w,0,D+e*.5,0,1,1,.8),M.add(w);const S=Ye(n*.8,g);Oe(S,0,D+e*.2,n*.12,1,.8,.85),M.add(S);const N=new O(new Wt(n*.78,n*.82,.1,18),T);N.scale.z=.82,N.position.set(0,D+.03,0),M.add(N);const tt=new O(new oe(.1,.07,.03),En(14725184,{metalness:.5}));tt.position.set(0,D+.03,n*.66),M.add(tt);const Q=new O(new He(s*.42,.045,8,18),g);Q.rotation.x=Math.PI/2,Q.position.set(0,z+.01,0),M.add(Q);const ut=new O(new Wt(s*.24,s*.28,.14,12),p);ut.position.set(0,z+.04,0),M.add(ut);const W=new ae;W.position.set(0,z+.05,0),M.add(W);const $=s*.95;W.add(Oe(Ye(s,p,28,20),0,$,0,1,.97,.96)),W.add(Oe(Ye(s*.7,p,20,14),0,$-s*.4,s*.2,1,.78,.88));for(const ot of[-1,1]){W.add(Oe(Ye(s*.28,p),ot*s*.5,$-s*.27,s*.6,1,.9,.7)),W.add(Oe(Ye(s*.19,p),ot*s*.98,$-.01,0,.45,1,.8)),W.add(Oe(Ye(s*.11,C),ot*s*.99,$-.01,.01,.35,.8,.6));const wt=u?1.18:.9,bt=ot*s*.37,Ft=$+s*.05,lt=s*.84;W.add(Oe(Ye(s*.21*wt,L),bt,Ft,lt,1,1.12,.55)),W.add(Oe(Ye(s*.125*wt,En(4861724)),bt+ot*.004,Ft-.005,lt+s*.08*wt,1,1,.5)),W.add(Oe(Ye(s*.07*wt,new Le({color:1182213})),bt+ot*.004,Ft-.005,lt+s*.105*wt,1,1,.5)),W.add(Oe(Ye(s*.035*wt,new Le({color:16777215})),bt+.025,Ft+.035,lt+s*.13*wt)),W.add(Oe(Ye(s*.22*wt,C),bt,Ft+s*.1*wt,lt-.012,1,.38,.55));const gt=zi(s*.035,s*.24,E,4,8);gt.rotation.z=Math.PI/2+ot*(u?-.12:.05),gt.position.set(bt,Ft+s*.3,lt-.005),W.add(gt),u&&W.add(Oe(Ye(s*.09,new Le({color:16748442,transparent:!0,opacity:.55})),ot*s*.55,$-s*.2,s*.8,1.3,.8,.3))}W.add(Oe(Ye(s*.13,p),0,$-s*.14,s*.95,1,.9,.9)),W.add(Oe(Ye(s*.075,C),-s*.1,$-s*.18,s*.9)),W.add(Oe(Ye(s*.075,C),s*.1,$-s*.18,s*.9));const Z=new O(new He(s*.2,.014,6,16,Math.PI),new Le({color:9059115}));Z.rotation.z=Math.PI,Z.position.set(0,$-s*.36,s*.92),W.add(Z);const J=Oe(Ye(s*.15,new Le({color:4854800})),0,$-s*.47,s*.9,1,1.15,.4);if(J.visible=!1,W.add(J),h)for(const ot of[-1,1]){const wt=zi(s*.05,s*.26,E,4,8);wt.rotation.z=Math.PI/2+ot*.18,wt.position.set(ot*s*.15,$-s*.27,s*.95),W.add(wt)}if(x&&W.add(Oe(Ye(s*.72,new Le({color:3877406,transparent:!0,opacity:.35}),20,14),0,$-s*.4,s*.2,1.01,.8,.9)),f){for(const wt of[-1,1]){const bt=new O(new He(s*.24,.018,6,20),En(2830648,{metalness:.4}));bt.position.set(wt*s*.37,$+s*.05,s*.93),W.add(bt)}const ot=new O(new oe(s*.2,.02,.02),En(2830648));ot.position.set(0,$+s*.08,s*.95),W.add(ot)}const Et=new O(new Ee(s*1.04,22,14,0,Math.PI*2,0,Math.PI*(u?.56:.5)),E);Et.position.set(0,$+.01,-.03),Et.rotation.x=-.3,W.add(Et);const nt=u?[[0,.98,.1],[-.35,.92,.1],[.35,.92,.1],[-.7,.7,.05],[.7,.7,.05],[-.2,.85,-.3],[.25,.85,-.3],[0,.8,-.55]]:[[0,.95,.05],[-.4,.85,.05],[.4,.85,.05],[0,.8,-.4]];for(const[ot,wt,bt]of nt){const Ft=new O(new Un(s*(u?.17:.13),s*(u?.55:.28),8),E);Ft.position.set(ot*s,$+wt*s,bt*s),Ft.rotation.set(.35+bt*.8,0,-ot*1.2),W.add(Ft)}for(const ot of[-.6,-.3,0,.3,.6])W.add(Oe(Ye(s*.17,E,10,8),ot*s,$+s*.78,s*(.58-Math.abs(ot)*.25),1,.7,.8));for(const ot of[-1,1])W.add(Oe(new O(new oe(.05,s*.34,.07),E),ot*s*.9,$-s*.02,s*.25));const yt=e*.92,Pt=n*.27,Qt=[-1,1].map(ot=>{const wt=new ae;wt.add(Oe(Ye(Pt*1.25,g),0,0,0)),wt.add(Oe(zi(Pt,yt*.34,g),0,-yt*.26,0));const bt=new ae;bt.position.set(0,-yt*.47,0),bt.rotation.x=-.12,wt.add(bt),bt.add(Oe(zi(Pt*.8,yt*.3,p),0,-yt*.2,0));const Ft=new ae;Ft.position.set(0,-yt*.53,.01),bt.add(Ft),Ft.add(Oe(Ye(Pt*.95,p),0,-.05,0,.9,1.1,.85)),Ft.add(Oe(Ye(Pt*.4,p),ot*Pt*.8,-0,Pt*.3));for(let lt=0;lt<4;lt++)Ft.add(Oe(zi(Pt*.17,Pt*.5,p,3,6),(lt-1.5)*Pt*.4,-Pt*1.2,Pt*.1));return wt.position.set(ot*(n+Pt*.9),z-.07,0),wt.userData.main=Ft,M.add(wt),wt}),st=[-1,1].map(ot=>{const wt=new ae;wt.add(Oe(zi(n*.4,t*.3,T),0,-t*.26,0)),wt.add(Oe(Ye(n*.38,T),0,-t*.5,.02)),wt.add(Oe(zi(n*.33,t*.26,T),0,-t*.7,0));const bt=Oe(Ye(n*.45,v),0,-t+.1,.07,1,.62,1.7);wt.add(bt),wt.add(Oe(Ye(n*.3,L),0,-t+.09,n*.58,1,.65,.9));const Ft=new O(new oe(n*.88,.05,n*1.55),L);Ft.position.set(0,-t+.03,.09),wt.add(Ft);for(let lt=0;lt<3;lt++){const gt=new O(new oe(n*.5,.025,.035),L);gt.position.set(0,-t+.17+lt*.012,n*(.18+lt*.1)),gt.rotation.x=-.4,wt.add(gt)}return wt.position.set(ot*n*.46,D,0),M.add(wt),wt});if(d){const ot=En(3123310),wt=En(2062928),bt=new O(new oe(n*1.5,e*.9,.3),ot);bt.position.set(0,D+e*.55,-n*.8),M.add(bt),M.add(Oe(Ye(n*.75,ot),0,D+e*1,-n*.8,1,.45,.35));const Ft=new O(new oe(n*1,e*.35,.12),wt);Ft.position.set(0,D+e*.35,-n*.8-.2),M.add(Ft);const lt=new O(new oe(n*1,.02,.02),En(16765517));lt.position.set(0,D+e*.5,-n*.8-.26),M.add(lt);const gt=new O(new He(.12,.025,6,12,Math.PI),wt);gt.position.set(0,D+e*1.1,-n*.8),M.add(gt);for(const kt of[-1,1]){const _t=new O(new oe(.09,e*.9,.05),wt);_t.position.set(kt*n*.52,D+e*.6,n*.1),_t.rotation.x=0,M.add(_t);const Mt=new O(new oe(.09,.05,n*1.7),wt);Mt.position.set(kt*n*.52,z-.02,-n*.3),M.add(Mt)}}return M.userData={jambes:st,bras:Qt,tete:W,bouche:J,sourire:Z,mains:Qt.map(ot=>ot.userData.main),hauteurTete:z+.05+$},M}function Ex({echelle:i=1}={}){const t=ff({jambe:.58,torse:.52,large:.3,teteR:.4,peau:15316362,cheveux:4861724,haut:16747069,bas:3895221,chaussure:14035002,enfant:!0,sac:!0});return t.scale.setScalar(i),t}function Tx({echelle:i=1}={}){const t=ff({jambe:.86,torse:.78,large:.36,teteR:.3,peau:14986626,cheveux:3877406,haut:4039245,bas:7035464,chaussure:5913894,enfant:!1,lunettes:!0,moustache:!0,barbe:!0}),e=new O(new oe(.2,.2,.04),En(11569744));e.position.set(.2,1.35,.3),t.add(e);const n=new O(new Wt(.013,.013,.16,6),En(14035002));return n.position.set(.22,1.47,.3),t.add(n),t.scale.setScalar(i),t}function vc({grain:i=!1}={}){const t=new ae,e=Tt(1907224,{flatShading:!1}),n=new O(new Ee(.9,10,8),e);n.scale.set(1.5,1,1),n.position.set(-1.5,1.1,0);const s=new O(new Ee(.62,10,8),e);s.position.set(0,1.2,0);const r=new O(new Ee(.58,10,8),e);r.position.set(1,1.25,0),t.add(n,s,r);const o=[];for(let a=0;a<3;a++)for(const c of[-1,1]){const l=new O(new Wt(.06,.05,1.5,4),e);l.position.set(-.9+a*.9,.6,c*.5),l.rotation.x=c*.6,t.add(l),o.push({p:l,c,i:a})}for(const a of[-1,1]){const c=new O(new Wt(.04,.04,1.1,4),e);c.position.set(1.5,1.8,a*.3),c.rotation.set(a*.4,0,-.7),t.add(c)}if(i){const a=new O(new xs(.34,1.3,4,8),Tt(16776688,{flatShading:!1}));a.rotation.z=Math.PI/2,a.position.set(.3,2.35,0),t.add(a)}return t.userData.pattes=a=>{for(const{p:c,c:l,i:u}of o)c.rotation.z=Math.sin(a*9+u*2.1+(l>0?0:Math.PI))*.35},t}function Ax(){const i=new ae,t=new O(new Ee(2.6,16,12,0,Math.PI*2,0,Math.PI/2),Tt(14035002,{flatShading:!1}));t.scale.set(1.25,1,1),t.position.y=.6,i.add(t);const e=Tt(1907224,{flatShading:!1}),n=new O(new Ee(1,10,8),e);n.position.set(3.4,1,0),i.add(n);const s=new O(new oe(.1,.1,5),e);s.position.set(0,3.2,0),s.rotation.y=Math.PI/2,s.visible=!1,i.add(s);for(const[r,o]of[[-1.4,1.2],[-1.4,-1.2],[.4,1.5],[.4,-1.5],[1.7,.8],[1.7,-.8]]){const a=new O(new Ee(.46,8,6),e);a.position.set(r,Math.sqrt(Math.max(.1,6.76-(r/1.25)**2-o*o))+.35,o),i.add(a)}for(const r of[-1,1])for(let o=0;o<3;o++){const a=new O(new Wt(.1,.08,2.2,4),e);a.position.set(-1.2+o*1.5,.5,r*2.4),a.rotation.x=r*.9,i.add(a)}return i}const Oi=3,es=.42*Oi,ur=1.8*Oi,Rx=62,Cx=22,Px=1.3;function Lx({scene:i,colliders:t,depart:e,limites:n,limiterCamera:s}){let r={scene:i,colliders:t,limites:n,limiterCamera:s,cordes:[]};const o=Ex({echelle:Oi});o.position.copy(e),i.add(o);const a=e.clone(),c=new F;let l=!0,u=0,f=0,h=2.6,d=null,x=0,M=null;const p={yaw:0,pitch:.42,distance:17};function g(W){return a.x+es>W.min[0]&&a.x-es<W.max[0]&&a.y+ur>W.min[1]&&a.y<W.max[1]&&a.z+es>W.min[2]&&a.z-es<W.max[2]}function T(W,$){if($){a[W]+=$;for(const Z of r.colliders){if(Z.rond||!g(Z))continue;const J=W==="x"?0:W==="y"?1:2;W==="y"?($<0?(a.y=Z.max[1],l=!0,x=0):a.y=Z.min[1]-ur,c.y=0):$>0?a[W]=Z.min[J]-es-.001:a[W]=Z.max[J]+es+.001}}}function E(W,$){for(const Z of r.colliders){if(!Z.rond||a.y>=Z.haut||a.y+ur<=(Z.bas||0))continue;let J=Z.x,Et=Z.z;if(Z.x2!==void 0){const st=Z.x2-Z.x,ot=Z.z2-Z.z,wt=st*st+ot*ot||1,bt=Math.max(0,Math.min(1,((a.x-Z.x)*st+(a.z-Z.z)*ot)/wt));J=Z.x+st*bt,Et=Z.z+ot*bt}let nt=a.x-J,yt=a.z-Et;const Pt=Math.hypot(nt,yt),Qt=Z.r+es;if(!(Pt>=Qt)){if(!Z.mur){const st=()=>{a.y=Z.haut,c.y=0,l=!0,d=Z,Z.rebond||(x=0)};if(W>=Z.haut-.02&&c.y<=0){st();continue}if($&&Z.haut-a.y<=(Z.marche||Px)){st();continue}if(Z.accroche&&!$&&Z.haut-a.y<=Z.accroche&&c.y<=8){st();continue}}Pt<1e-4?(nt=1,yt=0):(nt/=Pt,yt/=Pt),a.x=J+nt*Qt,a.z=Et+yt*Qt}}}function v(W,$,Z,J=0,Et=0){o.parent&&o.parent.remove(o),r={scene:W.scene,colliders:W.colliders,limites:W.limites,limiterCamera:W.limiterCamera,cordes:W.cordes||[]},r.scene.add(o),M=null,a.set($,Et,Z),u=J,c.set(0,0,0),h=0,l=!0,x=0,o.position.copy(a),o.rotation.set(0,J,0)}function L(){if(M)return null;for(const W of r.cordes||[])if(Math.hypot(a.x-W.x,a.z-W.z)<5&&a.y<W.haut-3)return W;return null}function C(){const W=L();return W&&(M={corde:W,phase:"monte",t:0},c.set(0,0,0)),!!W}function D(W,$){const Z=M.corde,J=o.userData;if(M.phase==="monte"){a.x+=(Z.x-Z.fx*1.1-a.x)*Math.min(1,W*10),a.z+=(Z.z-Z.fz*1.1-a.z)*Math.min(1,W*10),u=Math.atan2(Z.fx,Z.fz),a.y=Math.min(Z.haut-ur*.75,a.y+9*W),M.t+=W*9;const Et=Math.sin(M.t);J.bras[0].rotation.set(-2.7+Et*.45,0,0),J.bras[1].rotation.set(-2.7-Et*.45,0,0),J.jambes[0].rotation.x=-.7-Et*.5,J.jambes[1].rotation.x=-.7+Et*.5,a.y>=Z.haut-ur*.75-.01?(M.phase="sort",M.t=0,M.de=a.clone()):$.vient("sauter")&&(M=null,l=!1)}else{M.t=Math.min(1,M.t+W/.55);const Et=M.t;a.set(M.de.x+(Z.sortie[0]-M.de.x)*Et,M.de.y+(Z.sortie[1]-M.de.y)*Et+Math.sin(Math.PI*Et)*2.4,M.de.z+(Z.sortie[2]-M.de.z)*Et),J.bras[0].rotation.set(-2.2*(1-Et),0,0),J.bras[1].rotation.set(-2.2*(1-Et),0,0),J.jambes[0].rotation.x=0,J.jambes[1].rotation.x=0,Et>=1&&(a.set(Z.sortie[0],Z.sortie[1],Z.sortie[2]),M=null,c.set(0,0,0),l=!0)}o.position.copy(a),o.rotation.y=u}function z(W,$,Z){if(!M&&$.vient("corde")&&C(),M)return D(W,$),{bouge:!0,auSol:!1,sprint:!1};const J=$.actif("sprinter"),Et=($.actif("avancer")?1:0)-($.actif("reculer")?1:0),nt=($.actif("droite")?1:0)-($.actif("gauche")?1:0),yt=J?24:14,Pt=-Math.sin(p.yaw),Qt=-Math.cos(p.yaw),st=Pt*Et+Math.cos(p.yaw)*nt,ot=Qt*Et-Math.sin(p.yaw)*nt,wt=Math.hypot(st,ot),bt=wt>.01;if(bt){c.x=st/wt*yt,c.z=ot/wt*yt;let Mt=Math.atan2(st/wt,ot/wt)-u;for(;Mt>Math.PI;)Mt-=Math.PI*2;for(;Mt<-Math.PI;)Mt+=Math.PI*2;u+=Mt*Math.min(1,W*12)}else c.x=0,c.z=0;l&&$.vient("sauter")&&(d&&d.rebond?(x=Math.min(x+1,d.rebond.length),c.y=d.rebond[x-1],d.surRebond&&d.surRebond(x)):c.y=Cx,l=!1),c.y-=Rx*W;const Ft=a.y,lt=l;l=!1,d=null,T("x",c.x*W),T("z",c.z*W),T("y",c.y*W),E(Ft,lt),a.y<=0&&(a.y=0,c.y=0,l=!0,x=0),a.x=Math.min(r.limites.xMax,Math.max(r.limites.xMin,a.x)),a.z=Math.min(r.limites.zMax,Math.max(r.limites.zMin,a.z)),o.position.copy(a),o.rotation.y=u;const gt=o.userData;bt&&l&&(f+=W*(J?15:10));const kt=bt&&l?Math.sin(f)*(J?.9:.6):0;return gt.jambes[0].rotation.x=kt,gt.jambes[1].rotation.x=-kt,gt.bras[0].rotation.x=-kt*.9,gt.bras[1].rotation.x=kt*.9,h>0&&!bt?(h-=W,gt.bras[1].rotation.z=-2.5+Math.sin(Z*11)*.35,gt.bras[1].rotation.x=0,gt.tete.rotation.z=Math.sin(Z*3)*.08):(h=Math.min(h,0),gt.bras[1].rotation.z=0,gt.tete.rotation.z=0),l||(gt.bras[0].rotation.x=-2.4,gt.bras[1].rotation.x=-2.4,gt.jambes[0].rotation.x=.4,gt.jambes[1].rotation.x=-.3),o.position.y+=bt&&l?Math.abs(Math.sin(f))*.06*Oi:0,{bouge:bt,auSol:l,sprint:J}}function w(W,$){if(o.visible=!p.premiere,p.premiere){const gt=Math.max(-1.2,Math.min(1.35,.42-p.pitch)),kt=Math.cos(gt),_t=-Math.sin(p.yaw),Mt=-Math.cos(p.yaw),k=a.y+1.62*Oi;W.position.set(a.x+_t*.5,k,a.z+Mt*.5),W.lookAt(W.position.x+_t*kt*50,k+Math.sin(gt)*50,W.position.z+Mt*kt*50);return}const Z=p.distance,J=Math.sin(p.pitch),Et=a.y+1.5*Oi,nt=Math.max(.45,Math.cos(p.pitch));let yt=a.x+Math.sin(p.yaw)*nt*Z,Pt=Math.max(a.y+1.2,Et+J*Z),Qt=a.z+Math.cos(p.yaw)*nt*Z;[yt,Pt,Qt]=r.limiterCamera(yt,Pt,Qt);const st=a.x,ot=a.y+1.4*Oi,wt=a.z,bt=(gt,kt,_t)=>r.colliders.some(Mt=>{if(!Mt.rond)return gt>Mt.min[0]-.6&&gt<Mt.max[0]+.6&&kt>Mt.min[1]-.6&&kt<Mt.max[1]+.6&&_t>Mt.min[2]-.6&&_t<Mt.max[2]+.6;if(!Mt.cam||kt>Mt.haut+.6)return!1;let k=Mt.x,$t=Mt.z;if(Mt.x2!==void 0){const Lt=Mt.x2-Mt.x,Xt=Mt.z2-Mt.z,Ut=Math.max(0,Math.min(1,((gt-Mt.x)*Lt+(_t-Mt.z)*Xt)/(Lt*Lt+Xt*Xt||1)));k=Mt.x+Lt*Ut,$t=Mt.z+Xt*Ut}return Math.hypot(gt-k,_t-$t)<Mt.r+.6});for(let gt=1;gt<=10;gt++){const kt=gt/10;if(bt(st+(yt-st)*kt,ot+(Pt-ot)*kt,wt+(Qt-wt)*kt)){const _t=Math.max(.05,(gt-1)/10);yt=st+(yt-st)*_t,Pt=ot+(Pt-ot)*_t,Qt=wt+(Qt-wt)*_t;break}}const Ft=Math.min(1,$*9);W.position.x+=(yt-W.position.x)*Ft,W.position.y+=(Pt-W.position.y)*Ft,W.position.z+=(Qt-W.position.z)*Ft;const lt=p.pitch<0?Math.tan(Math.min(1.2,-p.pitch*1.15))*Math.hypot(W.position.x-a.x,W.position.z-a.z):0;W.lookAt(a.x,a.y+1.4*Oi+lt,a.z)}function S(W,$,Z=1){p.yaw-=W*.006*Z,p.pitch=Math.min(1.3,Math.max(-1.15,p.pitch+$*.005*Z))}function N(W){p.distance=Math.min(24,Math.max(7,p.distance+W*.015))}function tt(W,$,Z){a.set(W,0,$),u=Z,c.set(0,0,0),h=0,o.position.copy(a),o.rotation.y=Z}function Q(W){return W!==void 0&&(p.premiere=!!W),!!p.premiere}function ut(W,$){return W!==void 0&&(p.yaw=W),$!==void 0&&(p.pitch=$),{yaw:p.yaw,pitch:p.pitch,distance:p.distance}}return{hero:o,pos:a,maj:z,camera:w,tourner:S,zoom:N,etat:ut,vue:Q,placer:tt,changerMonde:v,appui:()=>({support:d,combo:x,auSol:l}),cordeProche:L,prendreCorde:C,grimpe:()=>!!M}}const wo=[{id:"avancer",nom:"Avancer"},{id:"gauche",nom:"Aller à gauche"},{id:"reculer",nom:"Reculer"},{id:"droite",nom:"Aller à droite"},{id:"sauter",nom:"Sauter"},{id:"sprinter",nom:"Sprinter"},{id:"agir",nom:"Agir (bouton, porte)"},{id:"corde",nom:"Prendre la corde"}],Ix={avancer:["KeyW","ArrowUp"],gauche:["KeyA","ArrowLeft"],reculer:["KeyS","ArrowDown"],droite:["KeyD","ArrowRight"],sauter:["Space",null],sprinter:["ShiftLeft",null],agir:["KeyE",null],corde:["KeyF",null]};function Lo(){return Object.fromEntries(Object.entries(Ix).map(([i,t])=>[i,[...t]]))}function hf(i){const t=Lo();if(i&&typeof i=="object")for(const e of wo){const n=i[e.id];Array.isArray(n)&&(t[e.id]=[0,1].map(s=>typeof n[s]=="string"&&n[s].length<24?n[s]:null))}return t}let _o=null;typeof navigator<"u"&&navigator.keyboard&&navigator.keyboard.getLayoutMap&&navigator.keyboard.getLayoutMap().then(i=>{_o=i}).catch(()=>{});const du={Space:"Espace",ShiftLeft:"Maj",ShiftRight:"Maj",ControlLeft:"Ctrl",ControlRight:"Ctrl",AltLeft:"Alt",AltRight:"Alt",Enter:"Entrée",Tab:"Tab",Backspace:"Retour",ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→"};function vo(i){return i?du[i]?du[i]:_o&&_o.get(i)?_o.get(i).toUpperCase():i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):i.startsWith("Numpad")?"Pavé "+i.slice(6):i:""}function Dx(i){const t=new Set,e=new Set,n=new Set,s=new Set;let r=!1;const o=u=>{t.delete(u.code)},a=u=>{r||(t.has(u.code)||e.add(u.code),t.add(u.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(u.code)&&u.preventDefault())},c=()=>{t.clear(),e.clear()};return window.addEventListener("keydown",a),window.addEventListener("keyup",o),window.addEventListener("blur",c),{actif:u=>n.has(u)||(i()[u]||[]).some(f=>f&&t.has(f)),vient(u){const f=i()[u]||[];return s.has(u)||f.some(h=>h&&e.has(h))},finImage(){e.clear(),s.clear()},forcer(u,f){r||(f?n.add(u):n.delete(u))},declencher(u){r||s.add(u)},bloquer(u){r=u,u&&(c(),n.clear(),s.clear())},detruire(){window.removeEventListener("keydown",a),window.removeEventListener("keyup",o),window.removeEventListener("blur",c)}}}function Ux(i,t,e,n){const s=hf(i);for(const r of wo)if(!r.bientot)for(let o=0;o<2;o++)s[r.id][o]===n&&(s[r.id][o]=null);return s[t][e]=n,s}const Ze=(i,t={})=>Tt(i,{flatShading:!1,roughness:.7,...t}),ve=(i,t,e,n,s,r=s,o=s,a=14)=>{const c=new O(new Ee(1,a,Math.max(6,Math.round(a*.7))),i);return c.position.set(t,e,n),c.scale.set(s,r,o),c},zn=i=>new Le({color:i});function Nx(){const i=new ae,t=Ze(2761504),e=Ze(5914672);i.add(ve(e,-6,6.4,0,6.2,5,5.4,18)),i.add(ve(Ze(15260072),-6,9.6,0,3.4,1.6,.9)),i.add(ve(Ze(15260072),-6,9.6,0,.9,1.6,3.2)),i.add(ve(t,1.4,5.4,0,3.6,3,3.2,16));for(const s of[-1,1]){i.add(ve(zn(16777215),4.1,6.3,s*1.25,1)),i.add(ve(zn(1182213),4.9,6.3,s*1.3,.55)),i.add(ve(zn(14035002),3.9,7.5,s*.6,.4)),i.add(ve(zn(14035002),3.5,7,s*2.3,.4));const r=new O(new Un(.45,1.8,6),Ze(16051416));r.position.set(4.6,3.6,s*.8),r.rotation.z=Math.PI,i.add(r)}const n=[];for(let s=0;s<4;s++)for(const r of[-1,1]){const o=new ae;o.position.set(2.4-s*1.5,5.2,r*2.2),o.rotation.y=r*(-.9+s*.6);const a=new O(new Wt(.42,.55,8,6),t);a.position.set(0,2.6,r*3),a.rotation.x=r*.86,o.add(a);const c=ve(t,0,5.2,r*6,.62,.62,.62,8);o.add(c);const l=new O(new Wt(.22,.4,11.4,6),t);l.position.set(0,0,r*8.4),l.rotation.x=r*-.42,o.add(l),i.add(o),n.push({racine:o,base:o.rotation.y,c:r,i:s})}return i.userData.pattes=s=>{for(const r of n)r.racine.rotation.y=r.base+Math.sin(s*9+r.i*1.7+(r.c>0?0:Math.PI))*.22},i}function Fx(){const i=new ae,t=Ze(16175676),e=Ze(4884168),n=Ze(16777215),s=Ze(1975856);i.add(ve(t,0,26,0,34,25,24,22)),i.add(ve(e,-4,31,0,32,21,25.5,22)),i.add(ve(Ze(8367706),2,40,0,22,9,18));const r=new ae;r.position.set(27,44,0),i.add(r),r.add(ve(n,0,0,0,16.5,15.5,16,20)),r.add(ve(e,-1,7.5,0,14.5,9.5,14.5)),r.add(ve(s,3,-9,0,11,6,10));for(const f of[-1,1])r.add(ve(s,5,1.6,f*13,13,1.7,3.5)),r.add(ve(zn(723723),9.5,2.2,f*12.6,2.6)),r.add(ve(zn(16777215),10.5,3.2,f*13.6,.8));const o=new O(new Un(4.2,12,8),Ze(3817286));o.rotation.z=-Math.PI/2,o.position.set(20.5,-.4,0),o.scale.set(1,1,.8),r.add(o);const a=new ae;a.position.set(15.5,-2.6,0),r.add(a);const c=new O(new Un(3.4,10,8),Ze(2830390));c.rotation.z=-Math.PI/2,c.position.set(5,0,0),c.scale.set(1,.6,.8),a.add(c);const l=[];for(const f of[-1,1]){const h=new ae;h.position.set(-2,36,f*20),i.add(h),h.add(ve(e,-8,0,f*16,28,3.2,18,16)),h.add(ve(n,-4,.6,f*14,14,3.4,4)),h.add(ve(Ze(3497878),-20,0,f*26,20,2.6,12)),l.push({piv:h,c:f})}const u=new O(new oe(34,2.4,13),e);u.position.set(-44,28,0),u.rotation.z=.2,i.add(u);for(const f of[-1,1]){const h=new O(new Wt(1.1,1.1,16,6),Ze(6122362));h.position.set(2,6,f*8),i.add(h);for(const d of[-.5,0,.5]){const x=new O(new Wt(.7,.9,9,5),Ze(6122362));x.rotation.set(0,d,Math.PI/2-.15),x.position.set(6,.8,f*8+d*5),i.add(x)}}return i.userData={tete:r,becBas:a,vol(f,h=1){for(const d of l)d.piv.rotation.x=d.c*(-.25+Math.sin(f*16)*.95*h)},repos(){for(const f of l)f.piv.rotation.x=f.c*1.25},bec(f){a.rotation.z=-f*.7}},i}function pu(){const i=new ae,t=Ze(3811866),e=new O(new xs(1.8,12,6,12),t);e.rotation.z=Math.PI/2,e.position.y=0,i.add(e);for(let f=0;f<4;f++)i.add(ve(Ze(16756768),-5+f*2.6,.5,0,.5,1.75,1.75,10));const n=new ae;n.position.set(9,.6,0),i.add(n),n.add(ve(t,0,0,0,2.7,2.6,2.6,16));for(const f of[-1,1]){n.add(ve(zn(16777215),1.7,.7,f*1.25,1.15)),n.add(ve(zn(1182213),2.55,.7,f*1.3,.6)),n.add(ve(zn(16777215),2.95,1.05,f*1.45,.2));const h=new O(new Wt(.12,.12,6,5),t);h.position.set(1.6,4.4,f*1.4),h.rotation.set(f*.35,0,-.5),n.add(h),n.add(ve(Ze(16756768),3,7,f*2.4,.5))}const s=new O(new He(.9,.12,5,12,Math.PI),zn(16765088));s.rotation.set(0,Math.PI/2,Math.PI),s.position.set(2.5,-.7,0),n.add(s);const r=f=>{const h=new ui;h.moveTo(0,0);for(const d of f)h.bezierCurveTo(...d);return h},o=r([[6,6,20,10,22,22],[16,26,4,22,0,4]]),a=r([[-4,6,-14,12,-16,18],[-10,20,-2,14,0,4]]),c=new Jt({color:16747051,emissive:16742938,emissiveIntensity:.55,side:Ge,roughness:.6}),l=new Jt({color:2365970,side:Ge,roughness:.8}),u=[];for(const f of[-1,1]){const h=new ae;h.position.set(0,1.2,f*1.2),i.add(h);for(const[d,x,M]of[[o,1,1],[a,.95,-1]]){const p=new O(new fi(d,10),l);p.rotation.x=f*Math.PI/2,p.scale.setScalar(x*1.08),p.position.set(M,-.05,0),h.add(p);for(const g of[.12,-.22]){const T=new O(new fi(d,10),c);T.rotation.x=f*Math.PI/2,T.scale.setScalar(x*.9),T.position.set(M+(M>0?.6:-.6),g,f*.9),h.add(T)}}for(const[d,x,M]of[[16,17,1.3],[12,20,1],[19,13,.9],[-11,14,1.1]]){const p=ve(Ze(16777215),d,0,f*x,M,.5,M,8);h.add(p)}u.push({piv:h,c:f})}return i.userData={tete:n,ailes(f,h=14,d=.9){for(const x of u)x.piv.rotation.x=-x.c*(.35+Math.sin(f*h)*d)},montrerAiles(f){for(const h of u)h.piv.visible=f}},i}function zx(){const i=new ae,t=Ze(14263361),e=Ze(15781770),n=Ze(11039786);i.add(ve(t,0,95,0,95,105,85,20)),i.add(ve(e,38,100,0,60,78,58)),i.add(ve(t,-40,50,0,85,55,90));for(const l of[-1,1]){const u=new O(new Wt(20,24,120,10),t);u.position.set(62,60,l*38),i.add(u),i.add(ve(e,74,10,l*38,34,14,26)),i.add(ve(t,-10,16,l*78,52,18,30))}const s=new ae;s.position.set(58,215,0),i.add(s),s.add(ve(t,0,0,0,62,58,58,20)),s.add(ve(e,52,-16,0,40,28,34)),s.add(ve(zn(1709072),88,-8,0,13,10,13));for(const l of[-1,1]){s.add(ve(zn(16777215),44,14,l*26,11)),s.add(ve(zn(2759184),52,14,l*27,6.5)),s.add(ve(zn(16777215),56,18,l*29,2));const u=new ae;u.position.set(-8,30,l*50),s.add(u),u.add(ve(n,0,-34,l*8,20,44,9)),u.rotation.x=l*.2}const r=ve(Ze(16743050),66,-36,0,13,5,10);s.add(r);const o=new O(new He(50,7,8,20),Ze(14035002));o.rotation.x=Math.PI/2,o.position.set(40,165,0),i.add(o),i.add(ve(Ze(16765517),86,150,0,9));const a=new ae;a.position.set(-105,40,0),i.add(a);const c=new O(new xs(13,90,4,10),t);return c.position.set(-30,40,0),c.rotation.z=.7,a.add(c),i.userData={maj(l){a.rotation.y=Math.sin(l*7)*.7,s.rotation.z=Math.sin(l*.7)*.06,s.rotation.y=Math.sin(l*.33)*.25,r.position.y=-36+Math.sin(l*5)*2}},i}const Ox={xMin:-160,xMax:160,zMin:-146,zMax:150},Bx=new ps,Vx=new Nn,Hx=new F,Gx=new F;function Zt(i,t,e,n=0,s=0,r=0,o=1,a=o,c=o){return new Ne().compose(Hx.set(i,t,e),Bx.setFromEuler(Vx.set(n,s,r,"YXZ")),Gx.set(o,a,c))}function si(i,t,e,n){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new Dc(s);return r.colorSpace=Fn,n&&(r.wrapS=r.wrapT=vr,r.repeat.set(n[0],n[1]),r.anisotropy=4),r}const Ea=(i,t,e,n)=>{const s=n[0]-e[0],r=n[1]-e[1],o=Math.max(0,Math.min(1,((i-e[0])*s+(t-e[1])*r)/(s*s+r*r||1)));return Math.hypot(i-(e[0]+s*o),t-(e[1]+r*o))};function kx({leger:i=!1,son:t=null}={}){const e=new ju,n=i?.5:1,s=m=>Math.max(1,Math.round(m*n)),r=ls(4242),o=(m,y)=>m+r()*(y-m),a=[],c=Ox,l=new F(0,0,0),u=[[[0,-30],[-8,-62],[8,-105],[0,-144]],[[-30,5],[-58,12],[-84,2],[-104,-6]],[[30,-4],[55,-10],[78,6],[92,22]],[[4,30],[12,62],[2,100],[0,140]]],f=11,h={x:124,z:34,r:30},d={x:-124,z:-8},x={x:78,z:-92,r:50},M=(m,y)=>{let A=1e9;for(const U of u)for(let B=0;B<U.length-1;B++)A=Math.min(A,Ea(m,y,U[B],U[B+1]));return A},p=(m,y)=>Math.hypot(m-94.5,y-75.6)<62,g={x:86,z:54,r:27},T=[[-26,-72,17],[38,34,9],[-40,46,9]],E=(m,y,A=0)=>T.some(U=>Math.hypot(m-U[0],y-U[1])<U[2]+A)||Math.hypot(m-g.x,y-g.z)<g.r+A||Ea(m,y,[90,21],[80,36])<9+A||Math.hypot(m,y)<46+A||M(m,y)<f+A||Math.hypot(m-h.x,y-h.z)<h.r+5+A||Math.hypot(m-d.x,y-d.z)<17+A,v=(m,y,A=14)=>m>c.xMin-A&&m<c.xMax+A&&y>c.zMin-A&&y<c.zMax+A;function L(m,y,A,U,B={}){v(m,y)&&a.push({rond:!0,x:m,z:y,r:A,haut:U,...B})}function C(m,y,A,U,B,et,at={}){(v(m,y)||v(A,U))&&a.push({rond:!0,x:m,z:y,x2:A,z2:U,r:B,haut:et,...at})}const D=(m,y,A)=>A.x2===void 0?Math.hypot(m-A.x,y-A.z):Ea(m,y,[A.x,A.z],[A.x2,A.z2]),z=(m,y,A)=>!a.some(U=>U.rond&&D(m,y,U)<U.r+A+1.2);function w(m,{zone:y=null,essais:A=50,etendue:U=212,solide:B=!0}={}){for(let et=0;et<A;et++){let at,pt;if(y){const It=r()*6.283,Dt=Math.sqrt(r())*y.r;at=y.x+Math.cos(It)*Dt,pt=y.z+Math.sin(It)*Dt}else at=o(-U,U),pt=o(-U,U);if(!(pt<-150&&Math.abs(at)<165)&&!E(at,pt,m)&&!(B&&!z(at,pt,m)))return[at,pt]}return null}const S=13496063;e.background=new xe(S),e.fog=new Pc(S,42e-5);const N=si(8,256,(m,y,A)=>{const U=m.createLinearGradient(0,0,0,A);U.addColorStop(0,"#1668d8"),U.addColorStop(.3,"#3d95ee"),U.addColorStop(.5,"#8fd0fa"),U.addColorStop(.62,"#cdeeff"),U.addColorStop(1,"#cdeeff"),m.fillStyle=U,m.fillRect(0,0,y,A)}),tt=new O(new Ee(7e3,32,20),new Le({map:N,side:Tn,fog:!1,depthWrite:!1}));tt.renderOrder=-10,e.add(tt);const Q=new F(.5,.7,.5).normalize(),ut=Vc();for(const[m,y,A]of[[3200,16773552,.55],[1350,16776160,1],[740,16777215,1]]){const U=new Ig(new Ku({map:ut,color:y,opacity:A,transparent:!0,fog:!1,depthWrite:!1,blending:Jn}));U.scale.setScalar(m),U.position.copy(Q).multiplyScalar(6200),U.renderOrder=-9,e.add(U)}const W=[],$=new xn(1,1);for(let m=0;m<20;m++){const y=r()*6.283,A=o(1500,5200),U=Math.cos(y)*A,B=Math.sin(y)*A,et=o(1900,2700),at=o(2.6,5);for(let pt=0;pt<6;pt++){const It=$.clone();It.applyMatrix4(Zt(U+(pt-2.5)*46*at+o(-14,14),et+o(-10,14)+(pt===2||pt===3?16*at:0),B+o(-26,26),0,r()*6,0,o(46,74)*at,o(22,34)*at,o(38,60)*at)),It.deleteAttribute("uv"),W.push(It)}}const Z=new O(_r(W,!1),new Le({color:16777215,fog:!1}));Z.renderOrder=-8,e.add(Z),e.add(new cf(14676479,5929530,1.15));const J=new uf(16774095,1.7);J.position.copy(Q).multiplyScalar(300),e.add(J);const Et=si(1024,1024,(m,y)=>{const A=ls(7);m.fillStyle="#5c8a3a",m.fillRect(0,0,y,y);const U=["#4a7630","#6a9a44","#78a04a","#557f34","#86ac4e","#42702c"];for(let B=0;B<700;B++)m.fillStyle=U[B%6],m.globalAlpha=.25+A()*.3,m.beginPath(),m.ellipse(A()*y,A()*y,8+A()*46,5+A()*30,A()*3,0,6.3),m.fill();m.globalAlpha=1;for(let B=0;B<4e3;B++){m.strokeStyle=["#a0b05a","#c0c86a","#3b6226","#8aa048"][B%4],m.lineWidth=1.2,m.globalAlpha=.45;const et=A()*y,at=A()*y,pt=A()*6.3;m.beginPath(),m.moveTo(et,at),m.lineTo(et+Math.cos(pt)*(5+A()*12),at+Math.sin(pt)*(5+A()*12)),m.stroke()}m.globalAlpha=1;for(let B=0;B<70;B++)m.fillStyle=["#ffffff","#ffe27a","#ff9fc4"][B%3],m.beginPath(),m.arc(A()*y,A()*y,2.2,0,6.3),m.fill()},[160,160]),nt=new O(new je(16e3,16e3),new Jt({map:Et,roughness:1}));nt.rotation.x=-Math.PI/2,e.add(nt);const yt=440,Pt=2048/yt,Qt=si(2048,2048,m=>{const y=ls(31),A=et=>(et+yt/2)*Pt,U=et=>(et+yt/2)*Pt;m.lineCap="round",m.lineJoin="round";const B=(et,at,pt,It)=>{for(const[Dt,ce]of[[1.25,.2],[1.1,.3],[1,.45],[.82,.55]])m.globalAlpha=ce,m.fillStyle=It,m.beginPath(),m.arc(A(et),U(at),pt*Dt*Pt,0,6.3),m.fill()};B(0,0,38,"#b79866"),B(d.x,d.z,20,"#8a6a48"),B(h.x,h.z,h.r+7,"#9a8658");for(const et of u)for(const[at,pt]of[[1.3,.2],[1.12,.3],[1,.45],[.8,.55]]){m.globalAlpha=pt,m.strokeStyle="#b79866",m.lineWidth=f*1.7*at*Pt,m.beginPath(),m.moveTo(A(et[0][0]*.6),U(et[0][1]*.6));for(const It of et)m.lineTo(A(It[0]),U(It[1]));m.stroke()}m.globalAlpha=.5;for(let et=0;et<2600;et++){const at=(y()-.5)*yt,pt=(y()-.5)*yt;(Math.hypot(at,pt)<38||M(at,pt)<f*.8)&&(m.fillStyle=["#8f7448","#d2ba8a","#a58a5c"][et%3],m.beginPath(),m.ellipse(A(at),U(pt),1.5+y()*3.5,1+y()*2.5,y()*3,0,6.3),m.fill())}m.globalAlpha=1}),st=new O(new je(yt,yt),new Jt({map:Qt,transparent:!0,roughness:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));st.rotation.x=-Math.PI/2,st.position.y=.02,e.add(st);const ot=si(256,512,(m,y,A)=>{const U=ls(11);m.fillStyle="#5d4531",m.fillRect(0,0,y,A);for(let B=0;B<160;B++){m.strokeStyle=U()>.5?"rgba(30,18,10,.5)":"rgba(150,115,80,.35)",m.lineWidth=2+U()*5;const et=U()*y;m.beginPath(),m.moveTo(et,0),m.bezierCurveTo(et+(U()-.5)*30,A*.3,et+(U()-.5)*30,A*.6,et+(U()-.5)*20,A),m.stroke()}for(let B=0;B<70;B++)m.fillStyle=`rgba(${70+U()*40},${120+U()*50},50,${.25+U()*.3})`,m.beginPath(),m.ellipse(U()*y,A*(.45+U()*.55),6+U()*26,10+U()*40,0,0,6.3),m.fill()},[3,2]),wt=new Jt({map:ot,roughness:1}),bt=[],Ft=[];function lt(m,y,A,U=.05,B=bt){const et=m.index?m.toNonIndexed():m.clone();et.applyMatrix4(A),et.deleteAttribute("uv");const at=et.attributes.position.count,pt=new Float32Array(at*3),It=new xe(y);It.offsetHSL((r()-.5)*U,(r()-.5)*U,(r()-.5)*U);for(let Dt=0;Dt<at;Dt++)pt.set([It.r,It.g,It.b],Dt*3);et.setAttribute("color",new pn(pt,3)),B.push(et)}const gt=new Ee(1,7,5),kt=new Wt(1,1,1,8),_t=new xn(1,1),Mt=new dn(1,12).rotateX(-Math.PI/2),k=new fi(Mx,5);k.rotateX(-Math.PI/2);const $t=new Ee(1,14,6,0,6.2832,0,Math.PI*.55),Lt=new dn(1,14).rotateX(Math.PI/2),Xt=new Wt(1,1,1,4),Ut=new ae,se=new O(new oe(330,9,300),new Jt({color:13618112,roughness:1,flatShading:!0}));se.position.y=4.5,Ut.add(se);const qt=new O(new Wt(98,74,84,30),new Jt({color:4876938,roughness:.45}));qt.position.y=51,Ut.add(qt);const I=new O(new He(98,7,8,36),new Jt({color:5996451,roughness:.4}));I.rotation.x=Math.PI/2,I.position.y=93,Ut.add(I);const b=new O(new dn(94,30),new Jt({color:4863268,roughness:1}));b.rotation.x=-Math.PI/2,b.position.y=91,Ut.add(b);const rt=(m,y,A)=>new F(m,y,A),G=new Jt({color:7031343,roughness:1,flatShading:!0});for(const[m,y,A]of[[[rt(0,100,0),rt(-20,170,6),rt(12,250,-8),rt(36,320,4),rt(24,380,0)],26,9],[[rt(-18,168,6),rt(-52,196,10),rt(-88,214,8)],10,4],[[rt(12,250,-8),rt(46,268,-16),rt(80,286,-20)],9,4],[[rt(30,310,4),rt(-6,322,-8),rt(-30,318,-10)],7,3]])Ut.add(new O(_x(m,y,A,8).geometrie,G));for(const[m,y,A,U,B,et,at]of[[-92,226,8,58,22,48,3121228],[84,298,-20,60,23,50,4573013],[24,396,0,76,30,64,3121228],[-22,378,-2,40,14,34,4573013],[10,270,20,40,16,34,4045656]]){const pt=new O(new xn(1,2),new Jt({color:at,roughness:.9,flatShading:!0}));pt.position.set(m,y,A),pt.scale.set(U,B,et),Ut.add(pt);for(let It=0;It<5;It++){const Dt=new O($,new Jt({color:It%2?16747051:16740261})),ce=r()*6.28;Dt.position.set(m+Math.cos(ce)*U*.7,y+B*.55,A+Math.sin(ce)*et*.7),Dt.scale.setScalar(5),Ut.add(Dt)}}Ut.children.forEach(m=>{m!==se&&m!==qt&&m!==I&&m!==b&&(m.position.y-=13)}),Ut.position.set(0,0,-300),e.add(Ut),a.push({min:[-165,0,-450],max:[165,9,-150]});const R={x1:-28,x2:-82,z:-312,haut:307};{const m=new O(new Wt(8.6,8.6,R.x1-R.x2,14),G);m.rotation.z=Math.PI/2,m.scale.set(1,1,1),m.position.set((R.x1+R.x2)/2,R.haut-3.6,R.z);const y=new ae;y.add(m),y.scale.y=.42,y.position.y=(R.haut-3.6)*(1-.42),e.add(y);for(const U of[R.x1,R.x2]){const B=new O(new Ee(8.6,12,8),G);B.scale.y=.42,B.position.set(U,R.haut-3.6,R.z),e.add(B)}const A=new O(new Wt(4,5,16,8),G);A.rotation.x=Math.PI/2,A.position.set(-30,303.5,-311),e.add(A);for(let U=0;U<14;U++){const B=R.x1-4-U%7*7.4,et=U<7?1:-1,at=R.z+et*(8.2+U%3*.8),pt=R.haut-2.5+U%2*1.6,It=[16748479,16777215,16756768][U%3];for(let Dt=0;Dt<5;Dt++){const ce=Dt/5*6.283;lt(gt,It,Zt(B+Math.cos(ce)*1.5,pt+.3,at+Math.sin(ce)*1.5,0,-ce,.2,1.4,.35,.8),.03)}lt(gt,16765517,Zt(B,pt+.6,at,0,0,0,.7),.02),lt(gt,4045656,Zt(B+3.2,pt-.8,at+et*1.5,0,U,.3,3,.4,1.6),.05)}for(const[U,B,et]of[[-92,-316,20],[-70,-330,16],[-44,-296,14]]){const at=new O(new xn(1,2),new Jt({color:4573013,roughness:.9,flatShading:!0}));at.position.set(U,294,B),at.scale.set(et,et*.4,et*.85),e.add(at)}a.push({rond:!0,x:R.x1,z:R.z,x2:R.x2,z2:R.z,r:8.6,haut:R.haut,bas:299,accroche:2})}const H=new oe(1,1,1),X=m=>new Le({color:m}),j=(m,y,A,U,B,et,at)=>{const pt=new O(new je(y,A),at);return pt.position.set(U,B,et),pt.rotation.y=Math.PI,m.add(pt),pt},ft=si(256,256,m=>{m.fillStyle="#f3e7c4",m.fillRect(0,0,256,256);for(let y=0;y<256;y+=21)m.fillStyle="rgba(120,95,50,.28)",m.fillRect(0,y,256,3),m.fillStyle="rgba(255,255,255,.35)",m.fillRect(0,y+3,256,2)},[8,5]),At=new Le({map:ft}),ht=si(256,256,m=>{m.fillStyle="#4a4f58",m.fillRect(0,0,256,256);for(let y=0;y<256;y+=26){m.fillStyle="rgba(0,0,0,.35)",m.fillRect(0,y,256,4);for(let A=y/26%2?0:20;A<256;A+=40)m.fillRect(A,y,3,26)}},[14,4]),Rt=new Le({map:ht,side:Ge}),Ot=1500,Bt=new ae;j(Bt,1800,400,0,200,0,At);const Ct=new ui;Ct.moveTo(-470,0),Ct.lineTo(470,0),Ct.lineTo(0,260),Ct.closePath();const Yt=si(256,256,m=>{m.fillStyle="#f3e7c4",m.fillRect(0,0,256,256);for(let y=0;y<256;y+=21)m.fillStyle="rgba(120,95,50,.28)",m.fillRect(0,y,256,3)},[.008,.02]),ee=new O(new fi(Ct),new Le({map:Yt}));ee.position.set(0,400,-2),ee.rotation.y=Math.PI,Bt.add(ee);for(const m of[-1,1]){const y=new O(new oe(560,26,30),X(16777215));y.position.set(m*240,532,-8),y.rotation.z=m*.505,Bt.add(y)}const ne=new O(new dn(60,28),X(3108766));ne.position.set(0,490,-6),ne.rotation.y=Math.PI,Bt.add(ne);const Y=new O(new He(62,8,8,28),X(16777215));Y.position.set(0,490,-8),Bt.add(Y);for(const[m,y]of[[124,9],[9,124]])j(Bt,m,y,0,490,-9,X(16777215));const Ht=new O(new je(1900,330),Rt);Ht.position.set(0,520,105),Ht.rotation.set(-.94,Math.PI,0,"YXZ"),Bt.add(Ht);const xt=new O(new oe(100,190,90),X(11031866));xt.position.set(620,640,150),Bt.add(xt);const mt=si(512,256,(m,y,A)=>{const U=m.createLinearGradient(0,0,0,A);U.addColorStop(0,"#3a2a1c"),U.addColorStop(1,"#7a5636"),m.fillStyle=U,m.fillRect(0,0,y,A);for(let et=0;et<y;et+=42)m.fillStyle="rgba(0,0,0,.22)",m.fillRect(et,0,3,A);const B=m.createRadialGradient(256,70,6,256,70,190);B.addColorStop(0,"rgba(255,224,150,.75)"),B.addColorStop(1,"rgba(255,224,150,0)"),m.fillStyle=B,m.fillRect(0,0,y,A),m.fillStyle="#b98a58",m.fillRect(40,150,90,80),m.fillRect(110,120,70,60),m.fillStyle="#8d5f38",m.fillRect(330,170,150,14),m.fillRect(340,184,12,60),m.fillRect(458,184,12,60),m.fillStyle="#d6283a",m.fillRect(370,150,44,20),m.fillStyle="#9fe3ee",m.beginPath(),m.ellipse(250,190,26,46,0,0,6.3),m.fill()});j(Bt,600,300,0,150,-3,new Le({map:mt})),j(Bt,560,40,0,281,-5,X(13617332));for(const[m,y,A,U]of[[34,320,-317,160],[34,320,317,160],[668,34,0,317]])j(Bt,m,y,A,U,-6,X(16777215));for(const m of[-600,600]){j(Bt,210,180,m,230,-3,X(10474222)),j(Bt,226,14,m,230,-5,X(16777215)),j(Bt,14,190,m,230,-5,X(16777215));for(const y of[-1,1])j(Bt,48,190,m+y*134,230,-4,X(3111509));j(Bt,240,16,m,132,-6,X(16777215))}j(Bt,120,240,-820,120,-3,X(12728884)),j(Bt,150,14,-820,246,-5,X(16777215));for(const m of[-1,1])j(Bt,14,252,-820+m*68,126,-5,X(16777215));j(Bt,1800,26,0,13,-4,X(14209730)),Bt.scale.setScalar(2.3),Bt.position.set(1300,0,Ot),e.add(Bt);const Nt=new ae;j(Nt,2700,900,0,450,0,At);const vt=si(256,256,m=>{m.fillStyle="#f4f1ea",m.fillRect(0,0,256,256);for(let y=0;y<256;y+=64){m.fillStyle="rgba(0,0,0,.18)",m.fillRect(0,y,256,5);for(let A=12;A<256;A+=62)m.strokeStyle="rgba(0,0,0,.14)",m.lineWidth=3,m.strokeRect(A,y+14,44,38)}});j(Nt,1700,700,0,350,-4,new Le({map:vt}));for(const[m,y,A,U]of[[70,760,-885,380],[70,760,885,380],[1840,70,0,735]])j(Nt,m,y,A,U,-7,X(16777215));j(Nt,2700,60,0,930,-6,X(16777215));const he=new O(new je(2860,560),Rt);he.position.set(0,1110,250),he.rotation.set(-1.02,Math.PI,0,"YXZ"),Nt.add(he);for(const m of[-1,1]){const y=new O(new Ee(34,10,8),X(16773792));y.position.set(m*1040,640,-30),Nt.add(y)}Nt.position.set(-2200,0,Ot),e.add(Nt);const Ie=new O(new je(2e3,1500),new Jt({color:9211016,roughness:1}));Ie.rotation.x=-Math.PI/2,Ie.position.set(-2200,.06,Ot-750),e.add(Ie);{const m=new ae,y=new Jt({color:14035002,roughness:.45}),A=new Jt({color:12568012,roughness:.5}),U=new Jt({color:2303531,roughness:.9}),B=(et,at,pt,It,Dt,ce,Ve)=>{const tn=new O(H,Ve);return tn.scale.set(et,at,pt),tn.position.set(It,Dt,ce),m.add(tn),tn};B(300,58,130,0,62,0,y),B(168,50,118,-14,112,0,y),B(156,38,122,-14,114,0,new Jt({color:10474222,roughness:.2})),B(12,46,124,-14,114,0,y),B(10,16,134,152,44,0,A),B(10,16,134,-152,44,0,A);for(const et of[-1,1]){const at=new O(gt,X(16773792));at.scale.set(5,9,12),at.position.set(151,66,et*46),m.add(at);const pt=new O(gt,X(16726843));pt.scale.set(4,8,11),pt.position.set(-151,66,et*46),m.add(pt)}for(const et of[-96,96])for(const at of[-1,1]){const pt=new O(new Wt(34,34,22,18),U);pt.rotation.x=Math.PI/2,pt.position.set(et,34,at*62),m.add(pt);const It=new O(new Wt(16,16,24,12),A);It.rotation.x=Math.PI/2,It.position.set(et,34,at*62),m.add(It)}m.scale.setScalar(3.4),m.rotation.y=-Math.PI/2,m.position.set(-2200,0,Ot-760),e.add(m)}const Fe=-3900,ge=3300,$e=-3400,mn=(m,y,A)=>{lt(H,16777215,Zt(m,150,y,0,A?Math.PI/2:0,0,70,300,14),.01),lt(new Un(1,1,4),16777215,Zt(m,330,y,0,(A?Math.PI/2:0)+Math.PI/4,0,50,64,10),.01)};for(let m=$e;m<=Ot;m+=120)mn(ge,m,!0),mn(Fe,m,!0);for(let m=Fe+120;m<ge;m+=120)mn(m,$e,!1);for(const m of[100,235]){for(const y of[Fe,ge])lt(H,16053488,Zt(y,m,($e+Ot)/2,0,0,0,12,26,Ot-$e),.01);lt(H,16053488,Zt((Fe+ge)/2,m,$e,0,0,0,ge-Fe,26,12),.01)}const Mn=zx();Mn.scale.setScalar(.85),Mn.position.set(560,0,520),Mn.rotation.y=-Math.atan2(-520,-560),e.add(Mn),lt(H,11883834,Zt(900,150,760,0,.4,0,340,300,380),.01),lt(new Un(1,1,4),4869976,Zt(900,380,760,0,.4+Math.PI/4,0,300,160,330),.01),lt(gt,2759956,Zt(820,110,600,0,.4,0,90,110,20),.01);for(const m of[-1,1])for(const y of[-1,1])lt(kt,11553338,Zt(-900+m*330+y*90,400,-1500,0,0,y*.22,22,820,22),.01);lt(kt,11553338,Zt(-900,800,-1500,0,0,Math.PI/2,22,700,22),.01);for(const m of[-150,150]){for(const y of[-1,1])lt(kt,5592405,Zt(-900+m+y*60,480,-1500,0,0,0,5,640,5),.01);lt(H,16765517,Zt(-900+m,160,-1500,0,0,0,150,18,60),.01)}lt(H,12159576,Zt(2400,250,300,0,.3,0,700,30,340),.01);for(const m of[-1,1])for(const y of[-1,1])lt(H,9264952,Zt(2400+m*290*Math.cos(.3)+y*130*Math.sin(.3),125,300-m*290*Math.sin(.3)+y*130*Math.cos(.3),0,.3,0,36,250,36),.01);for(const[m,y,A]of[[-2600,-1900,520],[2500,-2400,600],[-3100,300,480],[2950,900,520],[300,-2700,560],[-1400,-2900,500]]){lt(kt,7031343,Zt(m,A*1.1,y,0,0,0,A*.2,A*2.2,A*.2),.02);for(let U=0;U<4;U++)lt(_t,[2789194,4045656,4573013][U%3],Zt(m+o(-A*.5,A*.5),A*2.5+o(-A*.3,A*.5),y+o(-A*.5,A*.5),0,r()*6,0,A*o(.8,1.1),A*.8,A*o(.8,1.1)),.03)}lt(H,9264952,Zt(ge-260,150,-600,0,0,0,30,300,30),.02),lt(H,4876938,Zt(ge-260,330,-600,0,0,0,100,76,170),.01),lt(kt,4876938,Zt(ge-260,368,-600,Math.PI/2,0,0,50,170,50),.01),lt(H,14035002,Zt(ge-316,372,-560,0,0,0,8,76,26),.01);for(const[m,y,A,U]of[[Fe-1500,-600,12572906,7031354],[ge+1500,-300,13625028,4869976],[600,$e-1500,15785152,11031866],[-2200,$e-1400,15911360,4869976]])lt(H,A,Zt(m,500,y,0,0,0,1900,1e3,1500),.01),lt(new Un(1,1,4),U,Zt(m,1300,y,0,Math.PI/4,0,1450,640,1250),.01);const fe={x:1200,z:-1700,rx:1e3,rz:650},yn=new O(new dn(1,48),new Jt({color:4169679,roughness:.08,metalness:.4,transparent:!0,opacity:.72}));yn.rotation.x=-Math.PI/2,yn.scale.set(fe.rx,fe.rz,1),yn.position.set(fe.x,9,fe.z),e.add(yn);const Rn=new O(new dn(1,48),new Jt({color:2779770,roughness:1}));Rn.rotation.x=-Math.PI/2,Rn.scale.set(fe.rx,fe.rz,1),Rn.position.set(fe.x,.4,fe.z),e.add(Rn);for(let m=0;m<46;m++){const y=m/46*6.283,A=.55+r()*.2;lt(_t,new xe(A,A*.98,A*.93),Zt(fe.x+Math.cos(y)*(fe.rx+30),18,fe.z+Math.sin(y)*(fe.rz+30),0,r()*6,0,o(70,110),o(34,52),o(60,90)),.02)}for(let m=0;m<9;m++){const y=r()*6.283,A=Math.sqrt(r())*.8,U=fe.x+Math.cos(y)*fe.rx*A,B=fe.z+Math.sin(y)*fe.rz*A,et=o(80,130);if(lt(Mt,4038726,Zt(U,11,B,0,0,0,et,1,et),.05),m%2===0){for(let at=0;at<7;at++){const pt=at/7*6.283;lt(gt,16752580,Zt(U+Math.cos(pt)*26,24,B+Math.sin(pt)*26,0,-pt,.5,30,9,16),.03)}lt(gt,16765517,Zt(U,30,B,0,0,0,14),.02)}}for(let m=0;m<26;m++){const y=2.2+r()*1.4,A=fe.x+Math.cos(y)*(fe.rx+o(-60,60)),U=fe.z+Math.sin(y)*(fe.rz+o(-50,50)),B=o(260,420);lt(kt,5216837,Zt(A,B/2,U,o(-.08,.08),0,o(-.08,.08),6,B,6),.04),lt(kt,7031343,Zt(A,B+20,U,0,0,0,12,70,12),.03)}const di=[];function Kn(m,y,A){const U=new ae,B=It=>new Jt({color:It,roughness:.5}),et=new O(new Ee(1,14,10),B(y[0]));et.scale.set(m*.5,m*.15,m*.19),U.add(et);for(let It=0;It<A;It++){const Dt=new O(gt,B(y[1+It%(y.length-1)]));Dt.scale.set(m*o(.1,.17),m*.06,m*o(.08,.14)),Dt.position.set(m*o(-.3,.3),m*.11,m*o(-.08,.08)),U.add(Dt)}const at=new ae;at.position.x=-m*.45,U.add(at);const pt=new O(gt,B(y[0]));pt.scale.set(m*.2,m*.16,m*.03),pt.position.x=-m*.16,at.add(pt);for(const It of[-1,1]){const Dt=new O(gt,B(y[0]));Dt.scale.set(m*.1,m*.02,m*.1),Dt.position.set(m*.12,-m*.05,It*m*.2),U.add(Dt);const ce=new O(gt,X(1182213));ce.scale.setScalar(m*.022),ce.position.set(m*.4,m*.05,It*m*.1),U.add(ce)}return e.add(U),{g:U,queue:at}}const pi=[[16742938,16777215,1973790],[16777215,16734746,14035002],[16756768,16777215],[16053488,1973790,16742938]];for(let m=0;m<s(8);m++)di.push({...Kn(o(170,240),pi[m%4],4),rx:fe.rx*o(.3,.8),rz:fe.rz*o(.3,.8),ph:r()*6.283,vit:o(.08,.14)*(m%2?1:-1),y:o(-6,3)});for(let m=0;m<s(10);m++)di.push({...Kn(o(60,90),[16730650,16747051],1),rx:fe.rx*o(.2,.85),rz:fe.rz*o(.2,.85),ph:r()*6.283,vit:o(.16,.26)*(m%2?1:-1),y:o(-4,4)});const Cn=new Si(new Ee(1,8,6),new Jt({color:16752704,roughness:.5}),s(90)),Pn=[];for(let m=0;m<Cn.count;m++)Pn.push({banc:m%3,a:r()*6.283,r:o(20,110),v:o(.5,1.1),y:o(2,7)});e.add(Cn);const Xi=[[fe.x-fe.rx*.75,fe.z+fe.rz*.3],[fe.x-fe.rx*.5,fe.z+fe.rz*.62],[fe.x-fe.rx*.2,fe.z+fe.rz*.78]];for(const[m,y,A,U]of[[-700,-700,420,260],[900,-500,380,240],[-1700,600,460,280],[2300,-400,420,260],[-2800,-1100,480,300],[200,-2700,520,260],[-600,900,360,220]]){lt(Mt,7031343,Zt(m,.5,y,0,0,0,A,1,U),.03,Ft);for(let B=0;B<s(30);B++){const et=r()*6.283,at=Math.sqrt(r())*.9,pt=m+Math.cos(et)*A*at,It=y+Math.sin(et)*U*at,Dt=o(110,230),ce=[16747051,16740261,16777215,11566335,16765517,16734815][Math.floor(r()*6)];lt(Xt,4168261,Zt(pt,Dt/2,It,0,0,0,7,Dt,7),.04),lt(gt,ce,Zt(pt,Dt,It,0,0,0,o(26,42),18,o(26,42)),.05),lt(gt,16761370,Zt(pt,Dt+12,It,0,0,0,12),.02),lt(gt,4565068,Zt(pt+22,Dt*.4,It,0,et,.5,34,6,14),.05)}}for(let m=0;m<26;m++){const y=m%3,A=y===0?o(Fe+300,ge-300):y===1?Fe+240:ge-240,U=y===0?$e+240:o($e+300,Ot-500),B=o(170,280);if(lt(_t,[2789194,3120728,4045656][m%3],Zt(A,B*.7,U,0,r()*6,0,B*1.2,B,B*1.1),.04),m%2)for(let et=0;et<7;et++){const at=qi();lt(gt,[16740261,16777215,16765517][m%3],Zt(A+at.x*B*1.1,B*.7+Math.abs(at.y)*B*.9,U+at.z*B,0,0,0,26),.03)}}function qi(){return new F(r()-.5,r()-.5,r()-.5).normalize()}for(let m=0;m<16;m++){const y=m/15;lt(kt,12104356,Zt(1300-600*y-Math.sin(y*3)*260,3,1250-2500*y,0,r()*6,0,120,6,96),.03)}lt(new Ee(1,18,12),16734815,Zt(-1300,190,-500,0,0,0,190),.01),lt(new He(1,.07,6,24),16777215,Zt(-1300,190,-500,Math.PI/2,0,0,191),.01),lt(kt,4045722,Zt(2e3,150,500,0,0,0,150,300,150),.02),lt(kt,4045722,Zt(2230,270,500,0,0,-.9,26,340,26),.02),lt(new He(1,.12,6,14,Math.PI),3119742,Zt(1990,300,500,0,0,0,120),.02);for(const[m,y,A]of[[fe.x-fe.rx-220,fe.z+380,14035002],[-420,-1150,4165606]])lt(kt,4157365,Zt(m,80,y,0,0,0,62,160,62),.02),lt(gt,15911328,Zt(m,200,y,0,0,0,56),.01),lt(gt,16777215,Zt(m+20,170,y+30,0,0,0,44,50,30),.01),lt(new Un(1,1,12),A,Zt(m,300,y,0,0,0,60,150,60),.02);const Ci=(m,y)=>Math.abs(m)<240&&Math.abs(y)<240||((m-fe.x)/(fe.rx+80))**2+((y-fe.z)/(fe.rz+80))**2<1||m<-1100&&m>-3300&&y>-40||y>Ot-260,Qn=s(12e3),Pi=new Si(P(),new Jt({vertexColors:!0,roughness:.85,side:Ge}),Qn);function P(){const m=new Ke,y=new xe(3108650),A=new xe(10147930);return m.setAttribute("position",new Te([-.5,0,0,.5,0,0,0,1,.25],3)),m.setAttribute("color",new Te([y.r,y.g,y.b,y.r,y.g,y.b,A.r,A.g,A.b],3)),m.computeVertexNormals(),m}const K=new nn;let dt=0;for(let m=0;m<Qn/8&&dt<Qn;m++){const y=o(Fe+150,ge-150),A=o($e+150,Ot-150);if(!Ci(y,A))for(let U=0;U<8&&dt<Qn;U++)K.position.set(y+o(-70,70),0,A+o(-70,70)),K.rotation.set(o(-.25,.25),r()*6.283,o(-.25,.25)),K.scale.set(o(16,30),o(60,150),1),K.updateMatrix(),Pi.setMatrixAt(dt++,K.matrix)}Pi.count=dt,Pi.frustumCulled=!1,e.add(Pi);const ct=new Si(new Ee(1,6,3),new Jt({color:16777215,roughness:.7}),s(1400)),it=new Si(new Ee(1,5,3),new Jt({color:16761370,roughness:.7}),ct.count);for(let m=0;m<ct.count;m++){let y=o(Fe+150,ge-150),A=o($e+150,Ot-150);const B=!Ci(y,A)?o(22,38):0;K.rotation.set(0,0,0),K.position.set(y,26,A),K.scale.set(B,B*.22,B),K.updateMatrix(),ct.setMatrixAt(m,K.matrix),K.position.y=32,K.scale.setScalar(B*.34),K.updateMatrix(),it.setMatrixAt(m,K.matrix)}ct.frustumCulled=!1,it.frustumCulled=!1,e.add(ct,it);function zt(m){for(const y of di){const A=m*y.vit+y.ph,U=fe.x+Math.cos(A)*y.rx,B=fe.z+Math.sin(A)*y.rz,et=-Math.sin(A)*y.rx*Math.sign(y.vit),at=Math.cos(A)*y.rz*Math.sign(y.vit);y.g.position.set(U,y.y+Math.sin(m*.7+y.ph)*2,B),y.g.rotation.y=-Math.atan2(at,et),y.queue.rotation.y=Math.sin(m*6+y.ph)*.5}for(let y=0;y<Pn.length;y++){const A=Pn[y],U=Xi[A.banc],B=A.a+m*A.v*.6;K.position.set(U[0]+Math.cos(B)*A.r,A.y,U[1]+Math.sin(B)*A.r*.7),K.rotation.set(0,-B-Math.PI/2,0),K.scale.set(9,3,3.6),K.updateMatrix(),Cn.setMatrixAt(y,K.matrix)}Cn.instanceMatrix.needsUpdate=!0}for(const[m,y,A,U,B]of[[-98,-58,-42,-96,11],[58,72,120,98,9],[-126,72,-66,112,10]]){const et=Math.hypot(A-m,U-y),at=Math.atan2(U-y,A-m),pt=new O(new Wt(B,B*1.08,et,16),wt);pt.rotation.set(0,-at,Math.PI/2,"YXZ"),pt.position.set((m+A)/2,B*.92,(y+U)/2),e.add(pt);for(const[It,Dt,ce]of[[m,y,-1],[A,U,1]]){const Ve=new O(new dn(B*1.02,16),new Jt({color:13213804,roughness:1}));Ve.position.set(It+Math.cos(at)*.1*ce,B*.92,Dt+Math.sin(at)*.1*ce),Ve.rotation.y=-at+(ce>0?Math.PI/2:-Math.PI/2),e.add(Ve)}for(let It=0;It<6;It++){const Dt=r();lt(gt,6199868,Zt(m+(A-m)*Dt,B*1.85,y+(U-y)*Dt,0,0,0,o(4,8),1.4,o(4,8)),.06)}C(m,y,A,U,B,B*1.9,{cam:!0})}const jt=si(128,128,m=>{m.fillStyle="#d9b680",m.fillRect(0,0,128,128),m.strokeStyle="rgba(120,80,40,.55)",m.lineWidth=2;for(let y=8;y<64;y+=9)m.beginPath(),m.arc(64,64,y,0,6.3),m.stroke();m.strokeStyle="rgba(90,60,30,.5)",m.beginPath(),m.moveTo(64,64),m.lineTo(110,40),m.stroke()}),re=new Jt({map:jt,roughness:1}),te=[];for(const[m,y,A]of[[68.2,41.2,2.6],[73.6,43.8,5.6],[79.2,46.1,8.4]]){const U=new O(new Wt(3.2,3.4,A,16),wt);U.position.set(m,A/2,y),U.userData.garder=!0,e.add(U);const B=new O(new dn(3.2,16),re);B.rotation.x=-Math.PI/2,B.position.set(m,A+.02,y),e.add(B);const et={rond:!0,x:m,z:y,r:3.2,haut:A,accroche:1.2,rondin:te.length+1};a.push(et),te.push(et)}function de(m,y,A,U,B,et,at){const pt=A-U*.3,It=new O(new Wt(B*.85,B,pt,14),new Jt({color:16051416,roughness:.9}));It.position.set(m,pt/2,y),e.add(It);const Dt=new ae;Dt.position.set(m,pt,y),e.add(Dt);const ce=new O(new Ee(1,24,8,0,6.2832,0,Math.PI/2),new Jt({color:et,roughness:.6}));ce.scale.set(U,U*.3,U),Dt.add(ce);const Ve=new O(new dn(U*.99,24),new Jt({color:15259824,roughness:1,side:Ge}));Ve.rotation.x=Math.PI/2,Dt.add(Ve);for(let fn=0;fn<at;fn++){const Yi=fn/at*6.283+.3,kn=U*(fn%2?.72:.42),Go=new O(gt,new Jt({color:16777215,roughness:.7}));Go.scale.set(U*.1,U*.03,U*.1),Go.position.set(Math.cos(Yi)*kn,U*.3*Math.sqrt(Math.max(0,1-(kn/U)**2)),Math.sin(Yi)*kn),Dt.add(Go)}a.push({rond:!0,x:m,z:y,r:B+.3,haut:pt-.5,cam:!0});const tn={x:m,z:y,sommet:A,rc:U,groupe:Dt,anneaux:[],haut:pt+U*.286};for(const[fn,Yi]of[[.98,.131],[.8,.22],[.55,.286]]){const kn={rond:!0,x:m,z:y,r:U*fn,haut:pt+U*Yi,bas:pt-.4,accroche:2.4,marche:3.4,de:tn};a.push(kn),tn.anneaux.push(kn)}return tn}const pe=de(90,50,11.4,9,2.6,14038318,8),ie=de(94.5,75.6,44,18,5.5,15245882,12);let ye=0;for(const m of pe.anneaux)m.rebond=[38,68],m.surRebond=()=>{ye=1,t&&t.fx("boing")};const we=[],ze=new Jt({color:12159566,roughness:1});function an(m,y,A,U){const B=Math.hypot(A,U),et=A/B,at=U/B,pt=m.x+et*(y+.4),It=m.z+at*(y+.4),Dt=m.sommet-y*.3,ce=new O(new Wt(.34,.34,Dt-.6,7),ze);ce.position.set(pt,Dt/2+.3,It),e.add(ce);for(let tn=2.5;tn<Dt-1;tn+=3.2){const fn=new O(gt,ze);fn.scale.setScalar(.62),fn.position.set(pt,tn,It),e.add(fn)}const Ve=new O(new Wt(.3,.3,2.2,6),new Jt({color:7031343}));Ve.rotation.z=Math.PI/2,Ve.rotation.y=-Math.atan2(at,et),Ve.position.set(pt-et*.9,Dt+.1,It-at*.9),e.add(Ve),we.push({x:pt,z:It,haut:Dt,fx:-et,fz:-at,sortie:[m.x+et*y*.4,m.haut,m.z+at*y*.4]})}const Ae=de(-26,-72,27,12,3.6,11883834,8);an(Ae,12,.94,.35);const le=de(d.x,d.z,38,15,5,14038318,12);an(le,15,1,.1);for(const[m,y,A,U]of[[38,34,30,.6],[-40,46,34,2.4]]){const B=new O(new Wt(.55,.85,A,7),new Jt({color:4168261,roughness:.8}));B.position.set(m,A/2,y),e.add(B);for(let Ve=5;Ve<A-3;Ve+=6){const tn=new O(gt,new Jt({color:3116858}));tn.scale.set(1,.45,1),tn.position.set(m,Ve,y),e.add(tn)}const et=Math.cos(U),at=Math.sin(U),pt=m+et*6,It=y+at*6,Dt=new O(new Ee(1,14,8),new Jt({color:5421134,roughness:.8}));Dt.scale.set(10,.5,6.5),Dt.rotation.y=-U,Dt.position.set(pt,A-.1,It),e.add(Dt);const ce=new O(gt,new Jt({color:4565068,roughness:.8}));ce.scale.set(5,.4,3),ce.rotation.set(0,-U+Math.PI,.5),ce.position.set(m-et*3.5,A*.6,y-at*3.5),e.add(ce),a.push({rond:!0,x:m,z:y,r:.9,haut:A-1.2}),a.push({rond:!0,x:pt-et*4.2,z:It-at*4.2,x2:pt+et*4.2,z2:It+at*4.2,r:5.6,haut:A+.36,bas:A-.6,accroche:1.8}),we.push({x:m,z:y,haut:A+.36,fx:et,fz:at,sortie:[pt,A+.36,It]})}const gn=[[30,-4],[55,-10],[78,6],[90,21],[80,34],[66,38]],Re=new Le({color:16766046,side:Ge}),Qe=new ui;Qe.moveTo(0,2.6),Qe.lineTo(1.9,.4),Qe.lineTo(.75,.4),Qe.lineTo(.75,-2.2),Qe.lineTo(-.75,-2.2),Qe.lineTo(-.75,.4),Qe.lineTo(-1.9,.4),Qe.closePath();const Be=new O(new Oc(Qe,{depth:.35,bevelEnabled:!1}).rotateX(-Math.PI/2),Re);Be.visible=!1,e.add(Be);const ke=new ae;ke.visible=!1,e.add(ke);const ti=new O(new Wt(2.2,2.2,160,14,1,!0),new Le({color:16769658,transparent:!0,opacity:.22,blending:Jn,depthWrite:!1,side:Ge,fog:!1}));ti.position.y=80,ke.add(ti);const De=new O(new Un(2.6,5,4),Re);De.rotation.x=Math.PI,ke.add(De);const be={phase:null,etape:0,i:0,combo:0,bravo:0};function ei(){be.phase!=="fini"&&(be.phase="aller",be.etape=0,be.i=0,be.bravo=0)}function un(m,y,A,U){if(ye=Math.max(0,ye-y*2.4),pe.groupe.scale.y=1-.45*Math.sin(ye*Math.PI)*ye,!be.phase||!A||!U){Be.visible=!1,ke.visible=!1;return}if(be.phase==="fini"){Be.visible=!1,ke.visible=!1,be.bravo=Math.max(0,be.bravo-y);return}const B=U.support;if(B&&B.de===ie){be.phase="fini",be.bravo=9,t&&t.fx("bravo");return}const et=Math.hypot(A.x-80,A.z-50)<30;if(be.phase==="aller"&&et&&(be.phase="tuto"),be.phase==="tuto"&&!et&&Math.hypot(A.x-80,A.z-50)>44&&(be.phase="aller"),be.combo=U.combo,be.phase==="aller"){for(let Ve=gn.length-1;Ve>=be.i;Ve--)if(Math.hypot(A.x-gn[Ve][0],A.z-gn[Ve][1])<12){be.i=Math.min(gn.length-1,Ve+1);break}const pt=gn[be.i],It=pt[0]-A.x,Dt=pt[1]-A.z,ce=Math.hypot(It,Dt)||1;Be.visible=!0,Be.position.set(A.x+It/ce*(8+Math.sin(m*4)*1.2),.5,A.z+Dt/ce*(8+Math.sin(m*4)*1.2)),Be.rotation.y=Math.atan2(It,Dt)+Math.PI,ke.visible=!0,ke.position.set(te[0].x,0,te[0].z),De.position.y=16+Math.sin(m*3)*2;return}Be.visible=!1,ke.visible=!0,be.etape=B&&B.de===pe?3:B&&B.rondin===3?2:1;const at=be.etape===3?[ie.x,ie.sommet,ie.z]:be.etape===2?[pe.x,pe.sommet,pe.z]:[te[B&&B.rondin?B.rondin:0].x,te[B&&B.rondin?B.rondin:0].haut,te[B&&B.rondin?B.rondin:0].z];ke.position.set(at[0],0,at[2]),De.position.y=at[1]+9+Math.sin(m*3)*1.6}function On(m,y,A,U,B,et){const at=new xn(1,2),pt=at.attributes.position;for(let Dt=0;Dt<pt.count;Dt++){const ce=pt.getX(Dt),Ve=pt.getY(Dt),tn=pt.getZ(Dt),fn=.86+.2*Math.sin(ce*4.1+Ve*3.3+tn*5.7+m)*Math.cos(Ve*2.9-tn*3.7+ce*1.3);pt.setXYZ(Dt,ce*fn,Math.min(Ve*fn,.78),tn*fn)}at.computeVertexNormals();const It=.5+r()*.18;lt(at,new xe(It,It*.99,It*.94),Zt(m,U*.3,y,0,r()*6,0,A,U,B),.02),et&&lt(gt,6199868,Zt(m,U*1.02,y,0,0,0,A*.62,U*.12,B*.62),.05),L(m,y,(A+B)*.4,U*1.06,{cam:A>6})}for(let m=0;m<14;m++){const y=o(8,20),A=w(y+2);A&&On(A[0],A[1],y,o(7,15),y*o(.8,1.2),!0)}for(let m=0;m<s(55);m++){const y=o(3,6.5),A=w(y+1);A&&On(A[0],A[1],y,o(1.5,3.3),y*o(.8,1.15),m%3===0)}for(let m=0;m<s(80);m++){const y=o(18,58),A=o(.55,1.2),U=r()*3.14,B=w(3);if(!B)continue;const et=Math.cos(U)*y/2,at=Math.sin(U)*y/2,pt=B[0]-et,It=B[1]-at,Dt=B[0]+et,ce=B[1]+at;E(pt,It,2)||E(Dt,ce,2)||!z(pt,It,A)||!z(Dt,ce,A)||!z(B[0]+et/2,B[1]+at/2,A)||!z(B[0]-et/2,B[1]-at/2,A)||(lt(kt,7031343,Zt(B[0],A,B[1],Math.PI/2,Math.PI/2-U,0,A,y,A),.04),lt(gt,8017462,Zt(pt,A,It,0,0,0,A),.03),lt(gt,8017462,Zt(Dt,A,ce,0,0,0,A),.03),C(pt,It,Dt,ce,A,A*1.95))}for(let m=0;m<s(20);m++){const y=o(2.6,4),A=w(y+1);if(!A)continue;const U=r()*6;lt(gt,11894842,Zt(A[0],y*.9,A[1],0,U,1.2,y*1.1,y*.8,y*.8),.03),lt(gt,7031338,Zt(A[0]+Math.cos(U)*y*.55,y*1.05,A[1],0,U,1.2,y*.6,y*.7,y*.7),.03),L(A[0],A[1],y*.9,y*1.7)}const _=[14038318,16747069,11037242,16748479,15253578];function V(m,y,A,U,B){const et=o(-.1,.1),at=2.2+U*.12;if(lt(kt,16051416,Zt(m,A/2,y,et,0,et,at,A,at),.03),lt($t,B,Zt(m,A-.5,y,et,0,et,U,U*.62,U),.04),lt(Lt,15259824,Zt(m,A-.6,y,et,0,et,U*.98,1,U*.98),.02),B===14038318||B===16747069)for(let pt=0;pt<9;pt++){const It=r()*6.28,Dt=o(.15,.95);lt(gt,16777215,Zt(m+Math.cos(It)*U*Math.sin(Dt)*.98,A-.5+U*.62*Math.cos(Dt)-.2,y+Math.sin(It)*U*Math.sin(Dt)*.98,0,0,0,U*.13,U*.05,U*.13),.01)}L(m,y,at+.4,A,{cam:!0})}for(let m=0;m<13;m++){const y=.75+m/13*4.783,A=24+m%3*9,U=d.x+Math.cos(y)*A,B=d.z+Math.sin(y)*A;z(U,B,4)&&V(U,B,o(18,40),o(10,20),_[m%5])}for(let m=0;m<s(24);m++){const y=w(6);if(!y||p(y[0],y[1]))continue;const A=1+Math.floor(r()*3),U=_[m%5];for(let B=0;B<A;B++){const et=y[0]+(B?o(-11,11):0),at=y[1]+(B?o(-11,11):0);B&&(E(et,at,4)||!z(et,at,4))||V(et,at,o(10,30)*(B?.7:1),o(6,15)*(B?.75:1),U)}}const q=[16747051,16740261,16777215,11566335,16765517,16734815];function St(m,y,A){const U=o(35,85),B=o(-.16,.16),et=r()*6.28;lt(kt,4168261,Zt(m+Math.sin(B)*U*.5*Math.cos(et),U/2,y+Math.sin(B)*U*.5*Math.sin(et),0,0,0,.9,U,.9),.05);const at=m+Math.sin(B)*U*Math.cos(et),pt=y+Math.sin(B)*U*Math.sin(et),It=o(5,9);for(let Dt=0;Dt<9;Dt++){const ce=Dt/9*6.28;lt(gt,A,Zt(at+Math.cos(ce)*It*.95,U+.4,pt+Math.sin(ce)*It*.95,0,-ce,.15,It*.62,It*.17,It*.32),.04)}lt(gt,16761370,Zt(at,U+1.2,pt,0,0,0,It*.34),.03);for(let Dt=0;Dt<2;Dt++)lt(gt,4565068,Zt(m+(Dt?5:-5),U*(.25+Dt*.2),y,0,0,Dt?-.7:.7,8,.8,2.6),.05);L(m,y,1.1,14)}for(let m=0;m<s(60);m++){const y=w(2.5,{zone:x});y&&St(y[0],y[1],q[m%6])}for(let m=0;m<s(45);m++){const y=w(2.5);y&&!p(y[0],y[1])&&St(y[0],y[1],q[m%6])}for(let m=0;m<s(50);m++){const y=w(2);if(!y||p(y[0],y[1]))continue;const A=o(6,9),U=o(24,36);for(let B=0;B<3;B++){const et=B/3*6.28+.4;lt(gt,5222474,Zt(y[0]+Math.cos(et)*A,U+A*.2,y[1]+Math.sin(et)*A,0,0,0,A*1.2,A*.22,A*1.2),.05)}lt(kt,4168261,Zt(y[0],U/2,y[1],0,0,0,.7,U,.7),.03),L(y[0],y[1],.9,14)}const Gt=()=>new F(r()-.5,r()-.5,r()-.5).normalize();for(let m=0;m<s(18);m++){const y=w(2);if(!y||p(y[0],y[1]))continue;const A=o(30,60);lt(kt,5417040,Zt(y[0],A/2,y[1],0,0,0,.7,A,.7),.03);for(let U=0;U<22;U++){const B=Gt();lt(Xt,16053486,Zt(y[0]+B.x*6,A+B.y*6,y[1]+B.z*6,B.z*1.4,0,-B.x*1.4,.18,6,.18),.01)}lt(gt,15261888,Zt(y[0],A,y[1],0,0,0,2.2),.01),L(y[0],y[1],.9,14)}function me(m,y){const A=new ui,U=14;A.moveTo(0,0);for(let at=1;at<=U;at++){const pt=at/U,It=y*Math.sin(Math.PI*Math.pow(pt,.7));A.lineTo(pt*m-1,It*(at%2?1:.55))}for(let at=U;at>=1;at--){const pt=at/U,It=y*Math.sin(Math.PI*Math.pow(pt,.7));A.lineTo(pt*m-1,-It*(at%2?1:.55))}A.closePath();const B=new fi(A),et=B.attributes.position;for(let at=0;at<et.count;at++)et.setZ(at,-Math.pow(et.getX(at)/m,2)*m*.38);return B}const Je=[me(60,7),me(80,9),me(48,6)];for(let m=0;m<s(44);m++){const y=w(16,{solide:!1});if(!y||p(y[0],y[1]))continue;const A=7+Math.floor(r()*4),U=o(.7,1.1),B=[3116858,4038726,5026389][m%3];for(let et=0;et<A;et++){const at=et/A*6.28+r()*.4;lt(Je[et%3],B,new Ne().multiplyMatrices(Zt(y[0],.5,y[1],0,-at,0,U),new Ne().makeRotationZ(o(.55,1.15))),.06)}}const Sn=[14254635,12735789,15250506,9416252,7049018,11027242],qn=(m,y)=>Math.hypot(m-h.x,y-h.z)<h.r+8;for(let m=0;m<s(150);m++){const y=o(-212,212),A=o(-212,212);if(qn(y,A))continue;const U=o(3,7);for(let B=0;B<3;B++)lt(Mt,[6263872,6987334,5605946][B],Zt(y+o(-U,U),.035+(m+B)%5*.004,A+o(-U,U),0,r()*6,0,U*o(.6,1.1),1,U*o(.6,1.1)),.04,Ft)}for(let m=0;m<s(220);m++){const y=o(-212,212),A=o(-212,212);if(M(y,A)<5||qn(y,A))continue;const U=o(10,26);lt(k,Sn[m%6],Zt(y,.06+m%9*.005,A,0,r()*6.28,0,U,U,U),.06,Ft)}for(let m=0;m<s(420);m++){const y=o(-212,212),A=o(-212,212),U=o(.3,.7),B=.5+r()*.25;lt(_t,new xe(B,B*.98,B*.92),Zt(y,U*.15,A,0,r()*6,0,U*1.3,U*.55,U),.02)}const Qs=new O(new dn(h.r,40),new Jt({color:5218264,roughness:.05,metalness:.55,transparent:!0,opacity:.88}));Qs.rotation.x=-Math.PI/2,Qs.position.set(h.x,.12,h.z),e.add(Qs);const $i=[];for(let m=0;m<3;m++){const y=new O(new Po(.92,1,40),new Le({color:16777215,transparent:!0,opacity:.5,side:Ge,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.set(h.x+o(-12,12),.2,h.z+o(-12,12)),e.add(y),$i.push({o:y,ph:m/3})}for(let m=0;m<7;m++){const y=r()*6.28,A=o(4,h.r-8),U=h.x+Math.cos(y)*A,B=h.z+Math.sin(y)*A,et=o(4,7);if(lt(Mt,4038726,Zt(U,.3,B,0,0,0,et,1,et),.05),m%2===0){for(let at=0;at<6;at++){const pt=at/6*6.28;lt(gt,16752580,Zt(U+Math.cos(pt)*1.4,1.2,B+Math.sin(pt)*1.4,0,-pt,.5,1.6,.5,.9),.03)}lt(gt,16765517,Zt(U,1.4,B,0,0,0,.8),.02)}}L(h.x,h.z,h.r-1.5,200,{mur:!0});const vf=new O(_r(bt,!1),new Jt({vertexColors:!0,roughness:.85,side:Ge}));e.add(vf);const Mf=new O(_r(Ft,!1),new Jt({vertexColors:!0,roughness:1,side:Ge,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));e.add(Mf);const Gc={value:0};function yf(){const y=[],A=[],U=[];for(let et=0;et<=6;et++){const at=et/6,pt=.5*(1-Math.pow(at,1.6))+.02,It=at*at*.35;y.push(-pt,at,It,pt,at,It);const Dt=new xe().lerpColors(new xe(2910760),new xe(10935390),Math.pow(at,.8));if(A.push(Dt.r,Dt.g,Dt.b,Dt.r,Dt.g,Dt.b),et<6){const ce=et*2;U.push(ce,ce+1,ce+2,ce+1,ce+3,ce+2)}}const B=new Ke;return B.setAttribute("position",new Te(y,3)),B.setAttribute("color",new Te(A,3)),B.setIndex(U),B.computeVertexNormals(),B}const kc=new Jt({vertexColors:!0,roughness:.8,side:Ge});kc.onBeforeCompile=m=>{m.uniforms.uT=Gc,m.vertexShader=`uniform float uT;
${m.vertexShader}`.replace("#include <begin_vertex>",`vec3 transformed = vec3(position);
      float ph = instanceMatrix[3].x * 0.06 + instanceMatrix[3].z * 0.045;
      float amp = position.y * position.y;
      transformed.x += sin(uT * 1.6 + ph) * 2.4 * amp;
      transformed.z += cos(uT * 1.2 + ph * 1.3) * 1.2 * amp;`)};const Io=s(9e3),Tr=new Si(yf(),kc,Io),ni=new nn;let Ar=0;function Wc(m,y,A,U,B,et){for(let at=0;at<A&&Ar<Io;at++){const pt=r()*6.28,It=Math.sqrt(r())*U,Dt=m+Math.cos(pt)*It,ce=y+Math.sin(pt)*It;E(Dt,ce,1)||p(Dt,ce)||(ni.position.set(Dt,0,ce),ni.rotation.set(o(-.3,.3),r()*6.28,o(-.3,.3)),ni.scale.set(o(1.4,2.6),o(B,et),1),ni.updateMatrix(),Tr.setMatrixAt(Ar++,ni.matrix))}}for(let m=0;m<26;m++){const y=-.6+m/26*4.6;Wc(h.x+Math.cos(y)*(h.r+9),h.z+Math.sin(y)*(h.r+9),s(26),5,34,66)}for(let m=0;m<s(260)&&Ar<Io;m++){const y=w(4,{solide:!1,etendue:222});y&&Wc(y[0],y[1],18+Math.floor(r()*28),o(5,14),14,44)}Tr.count=Ar,Tr.frustumCulled=!1,e.add(Tr);const Do=new Si(new Ee(1,10,8),new Jt({color:14677759,transparent:!0,opacity:.5,roughness:.05,metalness:.4}),s(260));for(let m=0;m<Do.count;m++){const y=o(-200,200),A=o(-200,200),U=M(y,A)<f||Math.hypot(y,A)<20?0:o(.35,.8);ni.position.set(y,U*.7,A),ni.rotation.set(0,0,0),ni.scale.set(U,U*.8,U),ni.updateMatrix(),Do.setMatrixAt(m,ni.matrix)}e.add(Do);const Uo=3.6,Xc=4.5,Sf=6,qc=20;function $c(m){return m.map((y,A)=>{const U=m[Math.max(0,A-1)],B=m[Math.min(m.length-1,A+1)],et=B[0]-U[0],at=B[1]-U[1],pt=Math.hypot(et,at)||1;return[y[0]-at/pt*Xc,y[1]+et/pt*Xc]})}const Rr=u.map(m=>$c(m)),Cr=u.map(m=>$c([...m].reverse())),No=[],Pr=[];let Yc=!1;function Fo(m,y){const A={rond:!0,x:0,z:0,x2:0,z2:0,r:.75*y,haut:-1,cam:!1,mesh:m,ech:y,cap:0,actif:!1};return a.push(A),No.push(A),A}function zo(m,y,A,U,B,et){m.actif=!0,m.cap=U,m.cx=y,m.cz=A,m.haut=1.9*m.ech;const at=Math.cos(U),pt=Math.sin(U);m.x=y-at*1.6*m.ech,m.z=A-pt*1.6*m.ech,m.x2=y+at*1*m.ech,m.z2=A+pt*1*m.ech,m.mesh.visible=!0,m.mesh.position.set(y,0,A),m.mesh.rotation.y=-U,et&&m.mesh.userData.pattes&&m.mesh.userData.pattes(B)}function Zc(m,y,A,U,B,et){const at={x:y,z:A,cap:U,chemin:B,etape:"retour",file:[],hist:[[y,A]],corps:Fo(m,m.scale.x),suiveuses:[],bouge:!1};for(let pt=0;pt<et;pt++){const It=vc({grain:pt%2===0});It.scale.setScalar(Uo),It.visible=!1,e.add(It),at.suiveuses.push(Fo(It,Uo))}return Pr.push(at),at}function wf(m){m.etape==="aller"?(m.etape="retour",m.file=Cr[m.chemin].map(y=>[...y])):(m.etape="aller",m.file=Rr[m.chemin].map(y=>[...y]))}function bf(m,y,A){m.bouge=!1,m.file.length||wf(m);const U=m.file[0],B=U[0]-m.x,et=U[1]-m.z;if(Math.hypot(B,et)<2.5){m.file.shift();return}let pt=Math.atan2(et,B)-m.cap;for(;pt>Math.PI;)pt-=Math.PI*2;for(;pt<-Math.PI;)pt+=Math.PI*2;m.cap+=Math.sign(pt)*Math.min(Math.abs(pt),1.9*y);const It=Sf*y*(Math.abs(pt)>.9?.25:1),Dt=m.x+Math.cos(m.cap)*It,ce=m.z+Math.sin(m.cap)*It;if(Yc&&Math.hypot(Dt,ce)<56&&Math.hypot(Dt,ce)<Math.hypot(m.x,m.z))return;const Ve=m.x+Math.cos(m.cap)*8,tn=m.z+Math.sin(m.cap)*8;let fn=A&&Math.hypot(Ve-A.x,tn-A.z)<6&&A.y<7;if(!fn){for(const kn of No)if(!(!kn.actif||kn===m.corps||m.suiveuses.includes(kn))&&Math.hypot(Ve-kn.cx,tn-kn.cz)<7.5){fn=!0;break}}if(fn)return;m.x=Dt,m.z=ce,m.bouge=!0;const Yi=m.hist[m.hist.length-1];Math.hypot(m.x-Yi[0],m.z-Yi[1])>=1&&(m.hist.push([m.x,m.z]),m.hist.length>qc*(m.suiveuses.length+1)+6&&m.hist.shift())}const Jc=i?2:3;for(let m=0;m<Jc;m++){const y=vc({grain:!0});y.scale.setScalar(Uo),e.add(y);const A=Cr[m][0],U=Cr[m][1],B=Zc(y,A[0],A[1],Math.atan2(U[1]-A[1],U[0]-A[0]),m,2);B.file=Cr[m].slice(1).map(et=>[...et])}let ii=null;function jc(){if(!ii)return;const m=Pr.indexOf(ii);m>=0&&Pr.splice(m,1);for(const y of[a,No]){const A=y.indexOf(ii.corps);A>=0&&y.splice(A,1)}e.remove(ii.corps.mesh),ii=null}function Ef(m){jc(),e.add(m);const y=Jc%u.length;ii=Zc(m,m.position.x,m.position.z,-m.rotation.y,y,0),ii.etape="aller";const A=Math.atan2(m.position.z,m.position.x);let U=Math.atan2(Rr[y][0][1],Rr[y][0][0]);for(;U<A;)U+=Math.PI*2;U-A>Math.PI&&(U-=Math.PI*2);const B=Math.max(2,Math.ceil(Math.abs(U-A)/.3));ii.file=[];for(let et=1;et<=B;et++){const at=A+(U-A)*et/B;ii.file.push([Math.cos(at)*19,Math.sin(at)*19])}ii.file.push(...Rr[y].map(et=>[...et]))}const Oo=[];for(let m=0;m<3;m++){let y=null;for(let B=0;B<30&&!y;B++){const et=w(13,{etendue:140});et&&!Oo.some(at=>Math.hypot(at.cx-et[0],at.cz-et[1])<30)&&(y=et)}if(!y)continue;const A=Ax();A.scale.setScalar(1.6),e.add(A);const U=Fo(A,1);U.r=4.4,Oo.push({co:U,cx:y[0],cz:y[1],ph:r()*6})}const Kc=[],Lr=new ui;Lr.moveTo(0,0),Lr.bezierCurveTo(8,10,22,12,20,2),Lr.bezierCurveTo(22,-10,8,-12,0,0);for(let m=0;m<5;m++){const y=new ae,A=[16747051,16740261,7321599,16765517,11566335][m],U=[];for(const et of[-1,1]){const at=new ae,pt=new O(new fi(Lr),new Jt({color:A,side:Ge,roughness:.6}));pt.rotation.x=-Math.PI/2,pt.scale.x=et,pt.rotation.z=et>0?0:Math.PI,at.add(pt),y.add(at),U.push(at)}const B=new O(new xs(1.4,9,4,8),new Jt({color:3811866}));B.rotation.x=Math.PI/2,y.add(B),y.scale.setScalar(1.1),e.add(y),Kc.push({g:y,ailes:U,cx:o(-90,90),cz:o(-90,90),ph:r()*6,haut:o(46,96)})}const Bo=s(420),Ir=new Float32Array(Bo*3),Qc=[];for(let m=0;m<Bo;m++)Qc.push([o(-170,170),o(4,120),o(-170,170),r()*6.28]);const Vo=new Ic(new Ke().setAttribute("position",new pn(Ir,3)),new Ao({map:ut,color:16776160,size:1.8,transparent:!0,opacity:.7,depthWrite:!1}));Vo.frustumCulled=!1,e.add(Vo);let Ho=null;function tl(m,y,A){const U=Ho===null?0:Math.min(.1,Math.max(0,m-Ho));Ho=m,un(m,U,y,A),Mn.userData.maj(m),zt(m),Gc.value=m,Z.rotation.y=m*.004;for(const B of Pr)bf(B,U,y),zo(B.corps,B.x,B.z,B.cap,m,B.bouge),B.suiveuses.forEach((et,at)=>{const pt=B.hist.length-1-(at+1)*qc;if(pt<1)return;const It=B.hist[pt],Dt=B.hist[pt+1];zo(et,It[0],It[1],Math.atan2(Dt[1]-It[1],Dt[0]-It[0]),m+at*.7,B.bouge)});for(const B of Oo){const et=m*.12+B.ph;zo(B.co,B.cx+Math.cos(et)*4,B.cz+Math.sin(et)*4,et+Math.PI/2,m,!1),B.co.haut=5,B.co.x2=B.co.x=B.co.cx,B.co.z2=B.co.z=B.co.cz}for(const B of Kc){const et=m*.25+B.ph,at=B.cx+Math.sin(et)*50,pt=B.cz+Math.cos(et*.8)*40,It=B.haut+Math.sin(et*2.3)*12;B.g.position.set(at,It,pt),B.g.rotation.y=Math.atan2(Math.cos(et)*50,-Math.sin(et*.8)*32)-Math.PI/2;const Dt=Math.sin(m*14+B.ph)*.9;B.ailes[0].rotation.z=Dt,B.ailes[1].rotation.z=-Dt}for(let B=0;B<Bo;B++){const et=Qc[B];Ir[B*3]=et[0]+Math.sin(m*.2+et[3])*8,Ir[B*3+1]=et[1]+Math.sin(m*.3+et[3]*2)*4,Ir[B*3+2]=et[2]+Math.cos(m*.25+et[3])*8}Vo.geometry.attributes.position.needsUpdate=!0;for(const B of $i){const et=(m*.3+B.ph)%1;B.o.scale.setScalar(2+et*16),B.o.material.opacity=.5*(1-et)}}return{nom:"Le jardin géant",scene:e,colliders:a,limites:c,maj:tl,depart:l,limiterCamera:(m,y,A)=>[Math.min(c.xMax+30,Math.max(c.xMin-30,m)),Math.min(220,Math.max(.9,y)),Math.min(c.zMax+30,Math.max(c.zMin-30,A))],adopter:Ef,retirerVedette:jc,calme:m=>{Yc=m},demarrerGuide:ei,guide:()=>be,cordes:we,vue:ie,branche:R,bonsai:{nom:"Le bonsaï",scene:e,colliders:a,maj:tl,cordes:[],limites:{xMin:-78,xMax:-32,zMin:-319,zMax:-305},depart:new F(-55,R.haut,R.z),limiterCamera:(m,y,A)=>[Math.min(140,Math.max(-230,m)),Math.min(430,Math.max(262,y)),Math.min(-190,Math.max(-430,A))]}}}function df(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}function Wx({racine:i,clavier:t}){if(!df())return{actif:!1};i.classList.add("tactile"),i.insertAdjacentHTML("beforeend",`
    <div class="tactile-ui" id="tactile-ui">
      <div class="joystick" id="joy"><div class="pouce" id="pouce"></div></div>
      <div class="boutons-tactiles">
        <button class="bt" id="t-sprint">Sprint</button>
        <button class="bt grand" id="t-saut">Sauter</button>
      </div>
    </div>
    <div class="tourne" id="tourne"><p>Tourne ton téléphone à l’horizontale pour jouer</p></div>`);const e=i.querySelector("#joy"),n=i.querySelector("#pouce"),s=56;let r=null,o={x:0,y:0};const a=(x,M)=>{t.forcer("droite",x>.3),t.forcer("gauche",x<-.3),t.forcer("reculer",M>.3),t.forcer("avancer",M<-.3)},c=x=>{let M=x.clientX-o.x,p=x.clientY-o.y;const g=Math.hypot(M,p);g>s&&(M=M/g*s,p=p/g*s),n.style.transform=`translate(${M}px, ${p}px)`,a(M/s,p/s)};e.addEventListener("pointerdown",x=>{x.preventDefault(),r=x.pointerId;const M=e.getBoundingClientRect();o={x:M.left+M.width/2,y:M.top+M.height/2};try{e.setPointerCapture(r)}catch{}c(x)}),e.addEventListener("pointermove",x=>{x.pointerId===r&&c(x)});const l=x=>{x.pointerId===r&&(r=null,n.style.transform="",a(0,0))};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l);const u=i.querySelector("#t-saut");u.addEventListener("pointerdown",x=>{x.preventDefault(),t.declencher("sauter"),t.forcer("sauter",!0)});const f=()=>t.forcer("sauter",!1);u.addEventListener("pointerup",f),u.addEventListener("pointercancel",f),u.addEventListener("pointerleave",f);const h=i.querySelector("#t-sprint");h.addEventListener("pointerdown",x=>{x.preventDefault(),t.forcer("sprinter",!0),h.classList.add("appuye")});const d=()=>{t.forcer("sprinter",!1),h.classList.remove("appuye")};return h.addEventListener("pointerup",d),h.addEventListener("pointercancel",d),h.addEventListener("pointerleave",d),{actif:!0,montrer(x){i.querySelector("#tactile-ui").style.display=x?"":"none"}}}const Xx=[{id:"p1",qui:"papa",texte:"Regarde, fiston !",ton:"Tout content, il arrive avec une surprise."},{id:"t1",qui:"theo",texte:"Papa ? Qu’est-ce que c’est ?",ton:"Curieux."},{id:"p2",qui:"papa",texte:"J’ai créé une nouvelle machine, pour rétrécir les objets !",ton:"Très fier de lui."},{id:"p3",qui:"papa",texte:"Viens, je vais te la montrer avec cette pomme.",ton:"Pressé de montrer."},{id:"p4",qui:"papa",texte:"Regarde bien !",ton:"Comme un magicien avant son tour."},{id:"p5",qui:"papa",texte:"Et maintenant, le rayon !",ton:"Fort, comme une annonce."},{id:"p6",qui:"papa",texte:"Ça marche ! Elle est toute petite !",ton:"Il n’en revient pas."},{id:"t2",qui:"theo",texte:"Ah… ah…",ton:"Le nez qui chatouille, avant d’éternuer."},{id:"p7",qui:"papa",texte:"Fiston ? Ça va ?",ton:"Un peu inquiet."},{id:"t3",qui:"theo",texte:"Ah… ah… ah…",ton:"Ça monte, ça monte…"},{id:"t4",qui:"theo",texte:"Atchoum !",ton:"Un énorme éternuement."},{id:"p8",qui:"papa",texte:"Oh non ! Théo ! Mon fils ! Il est tout petit !",ton:"Affolé."},{id:"t5",qui:"theo",texte:"Papa ? Qu’est-ce qui m’arrive ?",ton:"Perdu, un peu peur."},{id:"p9",qui:"papa",texte:"La machine surchauffe ! Elle va exploser !",ton:"Il crie, c’est la panique."},{id:"t6",qui:"theo",texte:"Papa ! Aide-moi !",ton:"Il crie au secours."},{id:"t7",qui:"theo",texte:"Aaaaaah !",ton:"Un long cri : il vole dans les airs."},{id:"t8",qui:"theo",texte:"Aïe… Où suis-je ? Tout est tellement grand !",ton:"Sonné, puis émerveillé."},{id:"t9",qui:"theo",texte:"Oh ! Une fourmi géante !",ton:"Surpris, il sursaute."},{id:"t10",qui:"theo",texte:"Elle est plus grande que moi !",ton:"Impressionné."},{id:"t11",qui:"theo",texte:"Bon… Il faut que je retrouve la maison !",ton:"Décidé."},{id:"t12",anim:2,qui:"theo",texte:"Oh non ! Une araignée… et un oiseau !",ton:"Il a peur, il regarde des deux côtés."},{id:"a1",anim:2,qui:"araignee",texte:"Hé hé hé… Viens par ici, mon petit !",ton:"Voix grave et qui fait peur, elle ricane."},{id:"a2",anim:2,qui:"araignee",texte:"Nooon ! Lâche-moi, l’oiseau !",ton:"Elle crie, elle est attrapée."},{id:"b1",anim:2,qui:"papillon",texte:"Allez, monte ! Je vais te sauver !",ton:"Pressé et gentil."},{id:"b2",anim:2,qui:"papillon",texte:"Accroche-toi bien, on s’envole !",ton:"Joyeux, en plein vol."},{id:"t13",anim:2,qui:"theo",texte:"Waouh ! On vole !",ton:"Émerveillé, il crie de joie."},{id:"b3",anim:2,qui:"papillon",texte:"Te voilà en sécurité sur le bonsaï. Si tu veux voler, remonte sur mon dos !",ton:"Doux et fier."},{id:"t14",anim:2,qui:"theo",texte:"Merci, papillon !",ton:"Soulagé et content."}],bi=Object.fromEntries(Xx.map(i=>[i.id,i.texte])),Ta=Symbol("annule"),on=i=>i<.5?2*i*i:1-(-2*i+2)**2/2,ue=(i,t,e)=>new F(i,t,e);function qx({scene:i,garage:t,joueur:e,moteur:n,son:s,voix:r,racine:o,clavier:a,surFin:c}){const{maisonApi:l,machineApi:u}=t,f=Vc();let h=!1,d=!1,x=0,M=null,p=null,g=null,T=i,E=0,v=0,L=null,C="foret";const D=()=>(g||(g=kx({leger:df(),son:s}),n.renderer.compile(g.scene,n.camera)),g),z=new Set,w=new Set,S=[],N={pos:ue(0,0,0),look:ue(0,0,0),posC:ue(0,0,0),lookC:ue(0,0,0)};o.insertAdjacentHTML("beforeend",`
    <div class="cine" id="cine" hidden>
      <div class="bande haut"></div><div class="bande bas"></div>
      <div class="sous-titre" id="st" hidden><b id="st-nom"></b><span id="st-texte"></span></div>
      <button class="bouton secondaire petit" id="cine-passer">Passer l'animation</button>
      <div class="flash" id="cine-flash"></div>
      <div class="noir" id="cine-noir"><p id="cine-carte"></p></div>
    </div>`);const tt=R=>o.querySelector(R),Q=tt("#cine"),ut=tt("#st"),W=tt("#cine-flash"),$=tt("#cine-noir"),Z=()=>{if(d)throw Ta};function J(R,H){return new Promise(X=>{if(d){X();return}z.add({t:0,dur:Math.max(.001,R),fn:H,res:X})}).then(Z)}const Et=R=>J(R),nt=(R,H,X=!1)=>{N.posC.copy(R),N.lookC.copy(H),X&&(N.pos.copy(R),N.look.copy(H))};function yt(R,H){if(h){H!==void 0&&(v=H),x+=R;for(const X of[...z]){X.t+=R;const j=Math.min(1,X.t/X.dur);X.fn&&X.fn(j),j>=1&&(z.delete(X),X.res())}for(const X of[...w])X(R,x)===!1&&w.delete(X);g&&T===g.scene&&g.maj(v,e.hero.position),N.pos.lerp(N.posC,1-Math.exp(-R*2.6)),N.look.lerp(N.lookC,1-Math.exp(-R*3.4)),n.camera.position.copy(N.pos),E>0&&(n.camera.position.x+=(Math.random()-.5)*E*1.2,n.camera.position.y+=(Math.random()-.5)*E*1.2,E=Math.max(0,E-R*1.4)),n.camera.lookAt(N.look)}}const Pt=R=>{R.userData.jambes.forEach(H=>{H.rotation.x=0})};function Qt(R,H,X,j=7,ft=!0){const At=R.position,ht=H-At.x,Rt=X-At.z,Ot=Math.hypot(ht,Rt),Bt=Math.atan2(ht,Rt),Ct=At.x,Yt=At.z,ee=R.rotation.y;let ne=Bt-ee;for(;ne>Math.PI;)ne-=Math.PI*2;for(;ne<-Math.PI;)ne+=Math.PI*2;const Y=Math.max(.05,Ot/j),Ht=R.userData;return J(Y,xt=>{At.x=Ct+ht*xt,At.z=Yt+Rt*xt,R.rotation.y=ee+ne*Math.min(1,xt*Y/.35);const mt=x*(j>7?14:10),Nt=Math.sin(mt);Ht.jambes[0].rotation.x=Nt*.7,Ht.jambes[1].rotation.x=-Nt*.7,ft&&(Ht.bras[0].rotation.x=-Nt*.55,Ht.bras[1].rotation.x=Nt*.55),At.y=Math.abs(Nt)*.09}).then(()=>{Pt(R),At.y=0})}function st(R,H,X,j=.5){const ft=R.rotation.y;let At=Math.atan2(H-R.position.x,X-R.position.z)-ft;for(;At>Math.PI;)At-=Math.PI*2;for(;At<-Math.PI;)At+=Math.PI*2;return J(j,ht=>{R.rotation.y=ft+At*on(ht)})}function ot(R,H,X,j=.5){const ft=R[H];return J(j,At=>{R[H]=ft+(X-ft)*on(At)})}const wt=R=>R.localToWorld(ue(0,R.userData.hauteurTete,.2));function bt(R,H){const X=R.userData,j=(ft,At)=>{if(!H.v)return X.bouche.visible=!1,X.sourire.visible=!0,!1;const ht=Math.sin(At*16)>.1;return X.bouche.visible=ht,X.sourire.visible=!ht,!0};w.add(j)}async function Ft(R,H,X,j){tt("#st-nom").textContent=R,tt("#st-texte").textContent=X,ut.hidden=!1;const ft={v:!0};bt(H,ft),await r.dire(X,j),ft.v=!1,Z(),ut.hidden=!0,await Et(.25)}const lt=R=>Ft("Papa",p,bi[R],{id:R,pitch:.7,rate:.95}),gt=(R,H={})=>Ft("Théo",e.hero,bi[R],{id:R,pitch:1.95,rate:1.1,genre:"femme",...H});function kt(R,H=30,{couleur:X=16773792,vitesse:j=4,taille:ft=.4,duree:At=1.2,gravite:ht=2}={}){const Rt=new Float32Array(H*3),Ot=[];for(let ne=0;ne<H;ne++){Rt.set([R.x,R.y,R.z],ne*3);const Y=ue(Math.random()-.5,Math.random()-.2,Math.random()-.5).normalize().multiplyScalar(j*(.3+Math.random()));Ot.push(Y)}const Bt=new Ke;Bt.setAttribute("position",new pn(Rt,3));const Ct=new Ic(Bt,new Ao({map:f,color:X,size:ft,transparent:!0,opacity:1,blending:Jn,depthWrite:!1}));Ct.frustumCulled=!1;const Yt=T;Yt.add(Ct),S.push(Ct);let ee=0;w.add(ne=>{ee+=ne;for(let Y=0;Y<H;Y++)Ot[Y].y-=ht*ne,Rt[Y*3]+=Ot[Y].x*ne,Rt[Y*3+1]+=Ot[Y].y*ne,Rt[Y*3+2]+=Ot[Y].z*ne;return Bt.attributes.position.needsUpdate=!0,Ct.material.opacity=Math.max(0,1-ee/At),ee>=At?(Yt.remove(Ct),Bt.dispose(),Ct.material.dispose(),!1):!0})}const _t=(R,H)=>J(H,X=>{W.style.opacity=String(R*Math.sin(Math.PI*Math.min(1,X)))});function Mt(R,H){const X=new Set;return R.traverse(j=>{j.isMesh&&!j.material.transparent&&X.add(j.material)}),X.forEach(j=>{j.transparent=!0,j.opacity=0,j.needsUpdate=!0}),J(H,j=>{X.forEach(ft=>{ft.opacity=j})}).then(()=>{X.forEach(j=>{j.transparent=!1,j.opacity=1,j.needsUpdate=!0})})}function k(){const R=new ae,H=new Jt({color:14690350,roughness:.45}),X=new O(new Ee(.15,16,12),H);X.scale.set(1,.92,1),R.add(X);const j=new O(new Wt(.008,.01,.07,5),new Jt({color:5913894}));j.position.y=.15,R.add(j);const ft=new O(new Ee(.05,8,6),new Jt({color:4045656}));return ft.scale.set(1.6,.3,.8),ft.position.set(.05,.17,0),ft.rotation.z=.4,R.add(ft),R}function $t(){const R=new ae;R.add(new O(new oe(.09,.04,.17),new Jt({color:2830648,roughness:.5})));const H=new O(new Wt(.018,.018,.02,8),new Jt({color:16726843,emissive:16726843,emissiveIntensity:.8}));return H.position.set(0,.03,-.03),R.add(H),R}async function Lt(R){e.hero.rotation.order="YXZ",R!=="foret"&&await Xt(),D(),await Ut()}async function Xt(){const R=e.hero,H=R.userData,X=p.userData,j=u.position;X.bras[0].rotation.x=-.5,X.bras[1].rotation.x=-.25;const ft=k();ft.position.set(0,-.08,.1),X.mains[0].add(ft),S.push(ft);const At=$t();At.position.set(0,-.06,.06),X.mains[1].add(At),S.push(At),nt(ue(-6.5,8,9.5),ue(-15,3.8,1.2)),await Qt(R,-10.5,1.2,9),await st(R,-19,1.2,.5),p.position.set(-19.3,0,1.2),p.rotation.y=Math.PI/2,s.fx("porte"),await Promise.all([J(1.8,vt=>l.ouvrir(on(vt))),Et(.5).then(()=>(p.visible=!0,Mt(p,.9)))]),await Qt(p,-14.2,1.2,5,!1),nt(ue(-7.5,6.2,6.2),ue(-12.6,4.4,1.2)),await lt("p1"),await gt("t1"),await lt("p2"),await lt("p3"),nt(ue(4.5,7.5,4),ue(-5,3.5,-4)),J(1.4,vt=>l.ouvrir(1-on(vt))),await Promise.all([Qt(p,-5.4,-5.6,8,!1),Et(.7).then(()=>Qt(R,-2.4,-4.6,8))]),await Promise.all([st(p,j.x,j.z),st(R,j.x,j.z)]),nt(ue(5.2,7,.5),ue(-2.4,3.6,-8)),await lt("p4"),X.bras[1].rotation.x=-1.4,s.fx("clic"),s.fx("machine"),kt(ue(j.x,1.2,j.z),20,{couleur:8382463,vitesse:2,duree:2}),await J(2.2,vt=>u.ouvrirVerre(on(vt))),await J(.5,vt=>{X.bras[0].rotation.x=-.5-1.1*on(vt)}),await J(.25,vt=>{X.bras[0].rotation.x=-1.6-.7*vt}),i.attach(ft);const ht=ft.position.clone(),Rt=ue(j.x,u.platY+.4,j.z);J(.55,vt=>{X.bras[0].rotation.x=-2.3+1.8*on(vt)}),await J(.95,vt=>{ft.position.lerpVectors(ht,Rt,vt),ft.position.y+=Math.sin(Math.PI*vt)*3.2,ft.rotation.z=vt*5}),ft.position.copy(Rt),await lt("p5"),s.fx("clic"),s.fx("rayon"),await J(.6,vt=>u.rayon(on(vt)));const Ot=ft.scale.x;kt(Rt,40,{couleur:12580607,vitesse:3.5,duree:1.4}),await J(1.5,vt=>{ft.scale.setScalar(Ot*(1-.7*on(vt))),ft.position.y=u.platY+.4-.25*on(vt)}),s.fx("ding"),await J(.5,vt=>u.rayon(1-on(vt)*.55)),await lt("p6"),nt(ue(1.6,6.2,-.8),ue(-2.4,4.4,-6.5));const Bt=H.tete;kt(wt(R),14,{couleur:16773312,vitesse:.8,taille:.3,duree:2.6,gravite:-.2}),s.fx("reniflement"),H.sourire.visible=!1,H.bouche.visible=!0,await Promise.all([ot(Bt.rotation,"x",-.5,1.2),ot(R.rotation,"x",-.12,1.2),gt("t2",{rate:.6})]),st(p,R.position.x,R.position.z,.5),await lt("p7"),s.fx("reniflement"),await gt("t3",{rate:.5}),H.sourire.visible=!1,H.bouche.visible=!0,s.fx("atchoum"),r.dire(bi.t4,{id:"t4",pitch:2,rate:1.3,genre:"femme"}),kt(wt(R),50,{couleur:16777215,vitesse:6,taille:.45,duree:1,gravite:4}),nt(ue(2.8,5.2,-4.2),ue(-1.6,3,-8.4));const Ct=R.position.clone();H.bras[0].rotation.x=-1.3,H.bras[1].rotation.x=-1.3,await J(.45,vt=>{Bt.rotation.x=-.5+1.5*on(vt),R.rotation.x=-.12+.55*on(vt),R.position.set(Ct.x+(-1.6-Ct.x)*on(vt),0,Ct.z+(-8.4-Ct.z)*on(vt))}),s.fx("rayon");const Yt=R.position.clone(),ee=ue(j.x,u.platY,j.z-.3);await Promise.all([J(.85,vt=>{R.position.lerpVectors(Yt,ee,vt),R.position.y=ee.y*vt+Math.sin(Math.PI*vt)*3.4,R.rotation.x=.43*(1-vt),H.jambes[0].rotation.x=-.5,H.jambes[1].rotation.x=.5}),J(.85,vt=>{u.rayon(.45+vt)}),ot(Bt.rotation,"x",0,.85)]),R.rotation.set(0,0,0),Pt(R),H.bras.forEach(vt=>{vt.rotation.x=0}),nt(ue(3.4,3.8,-6.2),ue(j.x,2.4,j.z)),s.fx("retrecir"),kt(ue(j.x,3,j.z),70,{couleur:12580607,vitesse:5,taille:.5,duree:1.6}),_t(.95,1.1),await J(1.7,vt=>{R.scale.setScalar(3-2.7*on(vt)),u.rayon(1.4+Math.sin(vt*20)*.2)}),kt(ue(j.x,1.6,j.z),40,{couleur:16773792,vitesse:3,duree:1.2}),H.sourire.visible=!0,H.bouche.visible=!1,await J(.7,vt=>u.rayon(1.4*(1-on(vt)))),nt(ue(-.2,1.7,-8.6),ue(-3.4,5.2,-6.9)),st(p,j.x,j.z,.3),X.bras[0].rotation.x=-1,X.bras[1].rotation.x=-1,Qt(p,-3.3,-6.7,4,!1),await lt("p8"),nt(ue(j.x+1.4,1.9,j.z+3.2),ue(j.x,1.2,j.z));let ne=!0;w.add((vt,he)=>ne?(H.bras[1].rotation.z=-2.5+Math.sin(he*11)*.35,!0):!1),await gt("t5",{pitch:2.1}),ne=!1,H.bras[1].rotation.z=0,D(),nt(ue(5.6,7.2,-2.2),ue(j.x,4.2,j.z)),s.fx("alarme");let Y=!0;w.add((vt,he)=>Y?(u.alarme(Math.sin(he*14)>0?1:.3),u.secouer(.25+.35*Math.min(1,(x-Ht)/3)),!0):!1);const Ht=x;u.rayon(.9),X.bras[0].rotation.x=-1.9,X.bras[1].rotation.x=-1.9,await lt("p9"),s.fx("alarme"),await gt("t6",{pitch:2.1}),await Et(.6),Y=!1;const xt=ue(j.x,u.platY+.6,j.z);se(xt),u.exploser(),u.alarme(0),nt(ue(7,6.5,1.5),ue(j.x,4,j.z),!0),J(.9,vt=>{p.position.x=-3.3-2.2*on(vt),p.position.z=-6.7+2.4*on(vt),p.rotation.x=-.3*Math.sin(Math.PI*vt)});const mt=new Ro([ue(j.x,1.2,j.z),ue(-.8,6,-8),ue(-.3,7,0),ue(0,6.6,10),ue(0,6.2,18),ue(.6,13,30),ue(1.6,20,48),ue(2.2,12,64),ue(2.6,3.2,76)]),Nt=ue(0,0,0);r.dire(bi.t7,{id:"t7",pitch:2,rate:1.2,genre:"femme"}),s.fx("chute"),await Et(.35),await J(3.6,vt=>{mt.getPoint(Math.min(1,vt),Nt),R.position.copy(Nt),R.rotation.z=vt*14,R.rotation.x=vt*5,nt(ue(Nt.x-2+(vt>.6?6*(vt-.6):0),Nt.y+2.5,Nt.z-11),ue(Nt.x,Nt.y,Nt.z))}),R.rotation.set(0,0,0),s.fx("atterrissage"),kt(ue(R.position.x,.6,R.position.z),40,{couleur:13220234,vitesse:5,taille:1.2,duree:1.2,gravite:5}),await Et(.5)}async function Ut(){const R=e.hero,H=R.userData;_t(1,.9),await Et(.35),qt(),nt(ue(8,26,30),ue(0,10,0),!0),R.position.set(0,70,0),R.rotation.set(0,0,0),s.fx("chute"),await J(1.1,ht=>{R.position.y=70*(1-ht*ht),R.rotation.x=ht*3}),R.rotation.x=0,s.fx("atterrissage"),kt(ue(0,1,0),50,{couleur:13220234,vitesse:7,taille:2,duree:1.4,gravite:6}),J(.25,ht=>{R.scale.set(3*(1+.25*Math.sin(Math.PI*ht)),3*(1-.25*Math.sin(Math.PI*ht)),3*(1+.25*Math.sin(Math.PI*ht)))}),nt(ue(8,11,24),ue(0,6,0)),await Et(.8),ot(H.tete.rotation,"y",-.9,1).then(()=>ot(H.tete.rotation,"y",.9,1.6)),await gt("t8",{pitch:2.1}),H.tete.rotation.y=0,g.retirerVedette();const X=vc({grain:!0});X.scale.setScalar(4.2),X.position.set(-40,0,-5),T.add(X),L=X;let j=!0;w.add((ht,Rt)=>L!==X?!1:(j&&X.userData.pattes(Rt),!0)),nt(ue(-4,8,23),ue(-6,4.5,-3));const ft=J(4.4,ht=>{X.position.x=-40+28*ht});await Et(1.5),s.fx("reniflement"),await st(R,-30,-5,.45),J(.4,ht=>{R.position.y=Math.sin(Math.PI*ht)*1.6}),H.bras[0].rotation.x=-2.2,H.bras[1].rotation.x=-2.2,await gt("t9",{pitch:2.1}),await ft,j=!1,H.bras[0].rotation.x=0,H.bras[1].rotation.x=0,nt(ue(-7,6,21),ue(-7,4.6,-3)),J(1.8,ht=>{X.rotation.z=Math.sin(ht*Math.PI*4)*.05}),await st(R,X.position.x+4,-5,.4),await gt("t10",{pitch:2.1}),await Et(.5),j=!0,X.rotation.z=0,nt(ue(3,7.5,23),ue(1,4.5,-3));let At=!0;w.add(()=>At?(R.rotation.y=Math.atan2(X.position.x+4-R.position.x,X.position.z-R.position.z),!0):!1),await J(7,ht=>{X.position.x=-12+46*ht}),At=!1,await st(R,0,30,.5),await gt("t11",{pitch:2.1}),await Et(.4)}function se(R){s.fx("explosion"),E=1.2,_t(1,.8);const H=new O(new Ee(1,18,14),new Le({color:16756800,transparent:!0,opacity:1,blending:Jn,depthWrite:!1}));H.position.copy(R),i.add(H),S.push(H);const X=new O(new Po(.9,1.1,40),new Le({color:16769696,transparent:!0,opacity:.8,side:Ge,depthWrite:!1}));X.rotation.x=-Math.PI/2,X.position.set(R.x,.15,R.z),i.add(X),S.push(X);const j=new mr(16752704,900,60,1.4);j.position.copy(R),i.add(j),S.push(j);let ft=0;w.add(ht=>{ft+=ht;const Rt=Math.min(1,ft/.6);return H.scale.setScalar(1+9*on(Rt)),H.material.opacity=Math.max(0,1-ft/.8),X.scale.setScalar(1+ft*28),X.material.opacity=Math.max(0,.8-ft*1.2),j.intensity=Math.max(0,900*(1-ft/1.2)),ft>1.3?(i.remove(H,X,j),!1):!0}),kt(R,90,{couleur:16752704,vitesse:22,taille:1.4,duree:1.6,gravite:12}),kt(R,50,{couleur:16773824,vitesse:30,taille:.9,duree:1,gravite:6});const At=[5531516,7243424,10478574,14035002,2830648];for(let ht=0;ht<34;ht++){const Rt=ht%3===0?new Wt(.2,.2,.8+Math.random()*1.4,6):new oe(.4+Math.random()*1.2,.3+Math.random()*.8,.4+Math.random()*1.2),Ot=new O(Rt,new Jt({color:At[ht%5],roughness:.6,transparent:ht%5===2,opacity:ht%5===2?.5:1}));Ot.position.set(R.x,R.y+1+Math.random()*4,R.z),i.add(Ot),S.push(Ot);const Bt=Math.random()*6.28,Ct=ue(Math.cos(Bt),0,Math.sin(Bt)).multiplyScalar(5+Math.random()*14);Ct.y=8+Math.random()*20;const Yt=ue(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(14);let ee=0;w.add(ne=>(ee+=ne,Ct.y-=40*ne,Ot.position.addScaledVector(Ct,ne),Ot.position.y<.3&&(Ot.position.y=.3,Ct.y*=-.35,Ct.x*=.6,Ct.z*=.6,Yt.multiplyScalar(.6)),Ot.rotation.x+=Yt.x*ne,Ot.rotation.y+=Yt.y*ne,Ot.rotation.z+=Yt.z*ne,ee>6?(i.remove(Ot),!1):!0))}for(let ht=0;ht<18;ht++){const Rt=new O(new Ee(1,10,8),new Le({color:3815994,transparent:!0,opacity:.7,depthWrite:!1}));Rt.position.set(R.x+(Math.random()-.5)*3,R.y+Math.random()*2,R.z+(Math.random()-.5)*3),i.add(Rt),S.push(Rt);const Ot=(Math.random()-.5)*3,Bt=(Math.random()-.5)*3;let Ct=Math.random()*-.4;w.add(Yt=>(Ct+=Yt,Ct<0?!0:(Rt.position.x+=Ot*Yt,Rt.position.z+=Bt*Yt,Rt.position.y+=(3+Ct)*Yt,Rt.scale.setScalar(.8+Ct*1.5),Rt.material.opacity=Math.max(0,.55-Ct*.14),Ct>4?(i.remove(Rt),!1):!0)))}}function qt(){T=g.scene,n.voir(g.scene),g.calme(!0),g.maj(v,e.hero.position),e.changerMonde(g,g.depart.x,g.depart.z,0),e.hero.scale.setScalar(3),e.hero.rotation.order="YXZ"}function I(){r.arreter();for(const ft of S)ft.parent&&ft.parent.remove(ft);S.length=0,z.clear(),w.clear(),p&&(i.remove(p),p.visible=!1);const R=e.hero,H=R.userData,j=!!g&&R.parent===g.scene?{x:R.position.x,z:R.position.z,cap:R.rotation.y}:null;R.scale.setScalar(3),R.rotation.order="XYZ",R.rotation.set(0,0,0),H.tete.rotation.set(0,0,0),H.sourire.visible=!0,H.bouche.visible=!1,H.bras.forEach(ft=>ft.rotation.set(0,0,0)),Pt(R),l.ouvrir(0),u.ouvrirVerre(0),u.rayon(0),u.reparer(),T=i,L&&(C==="foret"?(L.rotation.z=0,D().adopter(L)):L.parent&&L.parent.remove(L),L=null),E=0,s.baisser(!1),W.style.opacity="0",$.style.opacity="0",tt("#cine-carte").style.opacity="0",ut.hidden=!0,Q.hidden=!0,o.classList.remove("en-cine"),a.bloquer(!1),h=!1,g&&g.calme(!1),c(C,C==="foret"?D():null,j)}const b=R=>{R.reason===Ta&&R.preventDefault()};async function rt(R){if(h)return;r.eveiller(),window.addEventListener("unhandledrejection",b),h=!0,d=!1,x=0,C="foret",s.baisser(!0),a.bloquer(!0),o.classList.add("en-cine"),Q.hidden=!1,$.style.opacity="0",W.style.opacity="0",tt("#cine-carte").style.opacity="0",p||(p=Tx({echelle:3})),i.add(p),p.visible=!1,N.pos.copy(n.camera.position),N.look.set(e.pos.x,e.pos.y+4,e.pos.z),N.posC.copy(N.pos),N.lookC.copy(N.look);const H=new Promise(X=>{M=X});try{await Promise.race([r.precharger(),new Promise(X=>setTimeout(X,2500))]),await Promise.race([Lt(R).catch(X=>{if(X!==Ta)throw X}),H])}catch(X){console.error(X)}I(),setTimeout(()=>window.removeEventListener("unhandledrejection",b),500)}function G(R="foret"){if(h){C=R,d=!0;for(const H of z)H.res();r.arreter(),M&&M()}}return tt("#cine-passer").addEventListener("click",()=>G("foret")),{lancer:rt,annuler:G,maj:yt,actif:()=>h,jardin:D}}function pf(i,t){const e=typeof window<"u"&&"speechSynthesis"in window&&typeof SpeechSynthesisUtterance<"u";if(e)try{speechSynthesis.getVoices(),speechSynthesis.addEventListener("voiceschanged",()=>speechSynthesis.getVoices())}catch{}const n=u=>{if(!e)return null;const f=speechSynthesis.getVoices().filter(M=>/^fr/i.test(M.lang)),h=f.some(M=>M.localService)?f.filter(M=>M.localService):f;if(!h.length)return null;const d=/thomas|daniel|male|homme|paul|henri/i,x=/amélie|amelie|audrey|aurélie|marie|julie|female|femme|virginie/i;return h.find(M=>(u==="homme"?d:x).test(M.name))||h[0]};let s=!1;function r(){if(!(!e||s))try{const u=new SpeechSynthesisUtterance(" ");u.volume=0,u.lang="fr-FR",speechSynthesis.speak(u),s=!0}catch{}}const o=new Map;let a=null,c=null;async function l(){if(t)try{a||(a=await(await fetch("./voix/liste.json",{cache:"no-store"})).json()),await Promise.all(a.filter(u=>!o.has(u)).map(async u=>{const f=await t.tampon(`./voix/${u}.mp3`);f&&o.set(u,f)}))}catch{a=a||[]}}return{eveiller:r,precharger:l,enregistrees:()=>o.size,disponible:()=>!!n("homme"),nom(u="homme"){const f=n(u);return f?{nom:f.name,langue:f.lang,locale:f.localService}:null},compte(){if(!e)return null;const u=speechSynthesis.getVoices().filter(f=>/^fr/i.test(f.lang));return{total:speechSynthesis.getVoices().length,fr:u.length,frLocales:u.filter(f=>f.localService).length}},pris:()=>e,arreter(){if(c&&(c.stop(),c=null),e)try{speechSynthesis.cancel()}catch{}},dire(u,{id:f=null,pitch:h=1,rate:d=1,genre:x="homme"}={}){if(f&&o.has(f)&&i()>0){const M=t.jouerTampon(o.get(f),i());if(M)return c=M,M.fin.then(()=>new Promise(p=>setTimeout(p,150)))}return new Promise(M=>{const p=1100+u.length*52,g=performance.now();let T=!1;const E=()=>{T||(T=!0,setTimeout(M,Math.max(0,p-(performance.now()-g))))},v=n(x),L=i();if(!e||L<=0){E();return}try{const C=new SpeechSynthesisUtterance(u);v&&(C.voice=v),C.lang=v?v.lang:"fr-FR",C.pitch=Math.min(2,h),C.rate=d,C.volume=L,C.onend=E,C.onerror=E,speechSynthesis.speak(C),setTimeout(E,12e3)}catch{E()}})}}}const mu=Symbol("annule"),Mi=i=>i<.5?2*i*i:1-(-2*i+2)**2/2,Ce=(i,t,e)=>new F(i,t,e);function $x({jardin:i,joueur:t,moteur:e,son:n,voix:s,racine:r,clavier:o,surArrivee:a,surPose:c}){let l="attente",u=null,f=null,h=null,d=null,x=!1,M=null,p=0,g=0;const T=new Set,E=new Set,v={pos:Ce(0,0,0),look:Ce(0,0,0),posC:Ce(0,0,0),lookC:Ce(0,0,0)},L={capA:0,capP:0,angleM:0,mesangeLibre:!0,araigneeLibre:!0,papillonLibre:!0};r.insertAdjacentHTML("beforeend",`
    <div class="guide alerte" id="alerte" hidden><p class="guide-titre" id="alerte-texte"></p></div>
    <div class="aide-corde" id="aide-papillon" hidden><button class="bouton gros moyen" id="btn-papillon">Monter sur le papillon</button><span class="touche-agir" id="touche-papillon"></span></div>`);const C=G=>r.querySelector(G),D=G=>{C("#alerte").hidden=!G,C("#alerte-texte").textContent=G||""},z=()=>{if(x)throw mu},w=(G,R)=>new Promise(H=>{if(x){H();return}T.add({t:0,dur:Math.max(.001,G),fn:R,res:H})}).then(z),S=G=>w(G),N=(G,R,H=!1)=>{v.posC.copy(G),v.lookC.copy(R),H&&(v.pos.copy(G),v.look.copy(R))};function tt(G){r.classList.toggle("en-cine",G),C("#cine").hidden=!G,o.bloquer(G),n.baisser(G),G?(v.pos.copy(e.camera.position),v.look.set(t.pos.x,t.pos.y+4,t.pos.z),v.posC.copy(v.pos),v.lookC.copy(v.look)):C("#st").hidden=!0}async function Q(G,R,H){C("#st-nom").textContent=G,C("#st-texte").textContent=R,C("#st").hidden=!1,await s.dire(R,H),z(),C("#st").hidden=!0,await S(.2)}const ut=G=>Q("Théo",bi[G],{id:G,pitch:2,rate:1.1,genre:"femme"}),W=G=>Q("Le papillon",bi[G],{id:G,pitch:2,rate:1.2,genre:"femme"}),$=G=>Q("L’araignée",bi[G],{id:G,pitch:.3,rate:.85,genre:"homme"}),Z=(G,R)=>{G.rotation.y=-R};function J(G){const R=t.hero,H=L.capP;R.position.set(G.position.x-Math.cos(H)*1.2,G.position.y+1.4,G.position.z-Math.sin(H)*1.2),R.rotation.set(0,Math.PI/2-H,0);const X=R.userData;X.jambes[0].rotation.x=-1.35,X.jambes[1].rotation.x=-1.35,X.bras[0].rotation.set(-1,0,0),X.bras[1].rotation.set(-1,0,0)}function Et(){const G=u.vue,R=G.haut;f=Nx(),f.scale.setScalar(1.1),f.position.set(G.x-27,R-22,G.z+4),f.rotation.z=1.2,u.scene.add(f),h=Fx(),h.position.set(G.x+260,R+150,G.z+40),u.scene.add(h),d=pu(),d.scale.setScalar(1.2),d.position.set(G.x+10,R+70,G.z-110),u.scene.add(d),L.angleM=0,L.mesangeLibre=!0,L.araigneeLibre=!1,L.papillonLibre=!1}function nt(){for(const G of[f,h,d])G&&G.parent&&G.parent.remove(G);f=h=d=null}function yt(G,R){if(!u||!f)return;const H=u.vue,X=t.pos;if(h&&L.mesangeLibre){L.angleM+=G*.5;const j=L.angleM,ft=95;h.position.set(H.x+Math.cos(j)*ft,H.haut+95+Math.sin(R*.8)*8,H.z+Math.sin(j)*ft),Z(h,j+Math.PI/2),h.userData.vol(R)}if(f&&L.araigneeLibre){const j=X.x-f.position.x,ft=X.z-f.position.z,At=Math.hypot(j,ft)||1;if(L.capA=Math.atan2(ft,j),Z(f,L.capA),At>15){let ht=f.position.x+j/At*2.4*G,Rt=f.position.z+ft/At*2.4*G;const Ot=Math.hypot(ht-H.x,Rt-H.z);Ot>13&&(ht=H.x+(ht-H.x)/Ot*13,Rt=H.z+(Rt-H.z)/Ot*13),f.position.x=ht,f.position.z=Rt,f.userData.pattes(R)}f.position.y=H.haut+Math.abs(Math.sin(R*3))*.3}if(d&&L.papillonLibre){const j=Ce(X.x+7,X.y+2.2,X.z-6);d.position.lerp(j,Math.min(1,G*2.5)),L.capP=Math.atan2(X.z-d.position.z,X.x-d.position.x)+Math.PI,Z(d,L.capP),d.userData.ailes(R,5,.35)}}async function Pt(){const G=u.vue,R=G.haut,H=t.hero;u.guide().bravo=0,tt(!0),Et(),n.fx("araignee"),N(Ce(G.x+6,R+9,G.z+24),Ce(G.x-12,R+2,G.z+3)),w(2.4,ft=>{f.position.set(G.x-27+14*Mi(ft),R-22+22*Mi(ft),G.z+4-2*ft),f.rotation.z=1.2*(1-Mi(ft)),f.userData.pattes(p)}),H.rotation.y=Math.atan2(-1,.1),await S(1.6),await $("a1"),L.capA=0,n.fx("oiseau"),w(3.2,ft=>{h.position.set(G.x+260-165*Mi(ft),R+150-55*Mi(ft),G.z+40-40*ft),Z(h,Math.PI),h.userData.vol(p)}),await S(.9),N(Ce(G.x-24,R+12,G.z+20),Ce(G.x+70,R+70,G.z+10)),await ut("t12"),L.araigneeLibre=!0,n.fx("ailes"),N(Ce(G.x+4,R+10,G.z+26),Ce(t.pos.x+4,R+4,t.pos.z-4));const X=d.position.clone(),j=Ce(t.pos.x+7,t.pos.y+2.2,t.pos.z-6);L.capP=Math.PI*.75,await w(2.4,ft=>{d.position.lerpVectors(X,j,Mi(ft)),d.position.y+=Math.sin(Math.PI*ft)*10,Z(d,L.capP),d.userData.ailes(p,16,.9)}),L.papillonLibre=!0,await W("b1"),tt(!1),l="menace"}async function Qt(){const G=u.vue,R=G.haut,H=t.hero,X=u.branche;l="vol",D(""),C("#aide-papillon").hidden=!0,tt(!0),L.papillonLibre=!1,L.araigneeLibre=!1,L.mesangeLibre=!1;const j=H.position.clone();N(Ce(d.position.x+14,R+12,d.position.z+22),Ce(d.position.x,R+4,d.position.z)),await w(.55,mt=>{H.position.lerpVectors(j,Ce(d.position.x,d.position.y+1.4,d.position.z),mt),H.position.y+=Math.sin(Math.PI*mt)*3,d.userData.ailes(p,10,.5)}),E.add(()=>l!=="vol"||!d?!1:(J(d),!0)),n.fx("oiseau");const ft=h.position.clone(),At=Ce(f.position.x+58,R-30,f.position.z);N(Ce(G.x-6,R+16,G.z+42),Ce(G.x,R+8,G.z));const ht=w(1.5,mt=>{h.position.lerpVectors(ft,At,Mi(mt)),Z(h,Math.PI),h.userData.vol(p)}),Rt=f.position.clone();w(1.2,mt=>{f.position.x=Rt.x+(d.position.x-Rt.x)*.45*mt,f.position.z=Rt.z+(d.position.z-Rt.z)*.45*mt,f.userData.pattes(p*2)}),await S(.95),n.fx("ailes");const Ot=d.position.clone(),Bt=new Ro([Ot.clone(),Ce(G.x-10,R+32,G.z-44),Ce(38,112,-18),Ce(0,190,-132),Ce(-30,282,-240),Ce(-46,320,-300),Ce(-50,X.haut+2.2,X.z)]),Ct=Ce(0,0,0),Yt=Ce(0,0,0),ee=mt=>{Bt.getPoint(mt,Ct),Bt.getTangent(mt,Yt),d.position.copy(Ct),L.capP=Math.atan2(Yt.z,Yt.x),Z(d,L.capP),d.rotation.z=Math.max(-.5,Math.min(.5,Yt.y*.8))},ne=w(1.6,mt=>{ee(mt*.07),d.userData.ailes(p,22,1)});await ht,n.fx("croc"),g=.9,h.userData.tete.attach(f),$("a2").catch(()=>{}),w(.5,mt=>{h.position.y=At.y+14*Mi(mt),h.userData.vol(p),h.userData.bec(Math.sin(mt*Math.PI))}),await ne,w(1.8,mt=>{h.userData.tete.rotation.z=.5*Math.sin(Math.PI*Math.min(1,mt*1.2)),h.userData.bec(Math.abs(Math.sin(mt*14))*.8),f.scale.setScalar(Math.max(.001,1.1*(1-mt))),h.userData.vol(p,.7)}),await S(1.3),(async()=>{await S(1.2),await W("b2"),await S(1.4),await ut("t13")})().catch(()=>{}),w(6,mt=>{h.position.x+=26*(1/60)*(1+mt*3),h.position.y+=10*(1/60),Z(h,0),h.userData.vol(p)}),await w(11.5,mt=>{const Nt=.07+.93*Mi(mt);ee(Nt),d.userData.ailes(p,20,.95),N(Ce(Ct.x-Yt.x*36,Ct.y+13-Yt.y*10,Ct.z-Yt.z*36),Ce(Ct.x+Yt.x*12,Ct.y+2,Ct.z+Yt.z*12))}),d.rotation.z=0,L.capP=Math.PI,Z(d,L.capP),n.fx("atterrissage"),N(Ce(-40,X.haut+9,X.z+26),Ce(-56,X.haut+3,X.z)),l="pose";const Y=H.position.clone(),Ht=Ce(-64,X.haut,X.z);await w(.6,mt=>{H.position.lerpVectors(Y,Ht,mt),H.position.y+=Math.sin(Math.PI*mt)*3,d.userData.ailes(p,6,.4)});const xt=H.userData;xt.jambes.forEach(mt=>{mt.rotation.x=0}),xt.bras.forEach(mt=>mt.rotation.set(0,0,0)),H.rotation.set(0,Math.PI/2,0),E.add(()=>!d||l!=="pose"?!1:(d.userData.ailes(p,6,.4),!0)),await W("b3"),await ut("t14"),l="depart"}const st={xMin:-3700,xMax:3100,zMin:-3200,zMax:1150},ot=Ce(0,0,0);let wt=null,bt=0;const Ft=()=>({scene:u.scene,colliders:[],cordes:[],limites:st,limiterCamera:(G,R,H)=>[G,Math.max(1.5,R),H]});function lt(G,R,H,X){wt={x:G,y:R,z:H,monde:X},d.userData.montrerAiles(!0),t.hero.visible=!0,d.position.set(G,R,H),d.rotation.z=0,ot.set(0,0,0)}function gt(){l="pilote",C("#aide-papillon").hidden=!0,d.userData.montrerAiles(!1),t.hero.visible=!1,t.changerMonde(Ft(),d.position.x,d.position.z,0,d.position.y),n.fx("ailes")}function kt(G,R){const H=t.etat(),X=H.yaw,j=-Math.sin(X),ft=-Math.cos(X),At=Math.max(-.9,Math.min(1,(.35-H.pitch)*.9)),ht=Math.cos(At),Rt=(o.actif("avancer")?1:0)-(o.actif("reculer")?1:0),Ot=(o.actif("droite")?1:0)-(o.actif("gauche")?1:0),Bt=(o.actif("sauter")?1:0)-(o.actif("sprinter")?1:0),Ct=Ce((j*ht*Rt+Math.cos(X)*Ot)*130,Math.sin(At)*Rt*130+Bt*85,(ft*ht*Rt-Math.sin(X)*Ot)*130);ot.lerp(Ct,1-Math.exp(-G*2.2));const Yt=d.position;Yt.addScaledVector(ot,G),Yt.x=Math.min(st.xMax,Math.max(st.xMin,Yt.x)),Yt.z=Math.min(st.zMax,Math.max(st.zMin,Yt.z)),Yt.y=Math.min(1300,Math.max(3,Yt.y));let ee=Math.atan2(ft,j)-L.capP;for(;ee>Math.PI;)ee-=Math.PI*2;for(;ee<-Math.PI;)ee+=Math.PI*2;L.capP+=ee*Math.min(1,G*9),Z(d,L.capP),d.rotation.z=At*.5,d.userData.ailes(R,12+Math.hypot(ot.x,ot.z)*.08,.85),J(d),t.hero.visible=!1,t.pos.copy(Yt);const ne=e.camera;d.updateMatrixWorld(!0),ne.position.copy(d.localToWorld(Ce(9.3,5.6,0))),ne.lookAt(ne.position.x+j*ht*100,ne.position.y+Math.sin(At)*100,ne.position.z+ft*ht*100)}function _t(){const G=d.position,R=u.branche,X=t.hero.userData,j=()=>{X.jambes.forEach(ft=>{ft.rotation.x=0}),X.bras.forEach(ft=>ft.rotation.set(0,0,0))};if(Math.hypot(G.x+55,G.z-R.z)<70&&G.y>R.haut-20&&G.y<R.haut+90){lt(-50,R.haut+2.2,R.z,"bonsai"),L.capP=Math.PI,Z(d,Math.PI),j(),l="ami",D(""),n.fx("atterrissage"),c("bonsai",-64,R.z,Math.PI/2,R.haut);return}if(Math.abs(G.x)<150&&G.z>-140&&G.z<145&&G.y<90){lt(G.x,2.2,G.z,"foret"),j(),l="ami",D(""),n.fx("atterrissage"),c("foret",G.x-7,G.z+6,0,0);return}bt=3.5}function Mt(){if(l==="pilote"){const G=u.branche;lt(-50,G.haut+2.2,G.z,"bonsai"),L.capP=Math.PI,Z(d,Math.PI);const R=t.hero.userData;R.jambes.forEach(H=>{H.rotation.x=0}),R.bras.forEach(H=>H.rotation.set(0,0,0)),l="ami",D(""),C("#aide-papillon").hidden=!0}else l!=="ami"&&se()}function k(G){s.arreter(),T.clear(),E.clear();const H=t.hero.userData;if(H.jambes.forEach(X=>{X.rotation.x=0}),H.bras.forEach(X=>X.rotation.set(0,0,0)),H.tete.rotation.set(0,0,0),D(""),C("#aide-papillon").hidden=!0,g=0,tt(!1),G&&u){for(const j of[f,h])j&&j.parent&&j.parent.remove(j);f=h=null,d||(d=pu(),d.scale.setScalar(1.2),u.scene.add(d));const X=u.branche;lt(-50,X.haut+2.2,X.z,"bonsai"),L.capP=Math.PI,Z(d,Math.PI),l="ami",a()}else nt(),wt=null,l="attente",t.hero.visible=!0}function $t(){T.clear(),E.clear(),s.arreter();const G=u.vue;f||Et(),f.rotation.z=0,f.position.set(G.x-13,G.haut,G.z+2),d.position.set(t.pos.x+7,t.pos.y+2.2,t.pos.z-6),L.araigneeLibre=!0,L.papillonLibre=!0,L.mesangeLibre=!0,tt(!1),l="menace"}async function Lt(G,R){x=!1,p=0;const H=new Promise(j=>{M=j});let X=!1;try{await Promise.race([G().catch(j=>{if(j!==mu)throw j}),H.then(()=>{X=!0})])}catch(j){console.error(j)}X?Ut?R():k(!1):l==="depart"&&k(!0),Ut=!0}function Xt(){if(l==="intro"||l==="vol"||l==="pose"||l==="depart"){x=!0;for(const G of T)G.res();s.arreter(),M&&M()}}let Ut=!0;function se(){if(l!=="attente"){if(l==="menace"||l==="ami"||l==="pilote"){k(!1);return}Ut=!1,x=!0;for(const G of T)G.res();s.arreter(),M&&M()}}const qt=()=>d&&Math.hypot(t.pos.x-d.position.x,t.pos.z-d.position.z)<16&&Math.abs(t.pos.y-d.position.y)<12;let I=!1;const b=()=>{l==="attente"&&I?(l="intro",C("#aide-papillon").hidden=!0,Lt(Pt,$t)):l==="menace"&&qt()?Lt(Qt,()=>k(!0)):l==="ami"&&qt()?gt():l==="pilote"&&_t()};C("#btn-papillon").addEventListener("click",G=>{G.currentTarget.blur(),b()}),C("#alerte").classList.remove("calme"),C("#cine-passer").addEventListener("click",Xt);function rt(G,R,H,X,j){const ft=(At,ht)=>{C("#aide-papillon").hidden=!ht,ht&&(C("#btn-papillon").textContent=At,C("#touche-papillon").textContent=X?`ou touche ${X}`:"")};if(l==="attente")return u=i(),I=j==="foret"&&!!(H&&H.support&&H.support.de===u.vue&&u.guide().phase==="fini"),ft("Démarrer l’animation",I),I&&o.vient("agir")&&b(),!1;if(l==="menace"){yt(G,R),D("Vite ! Monte sur le papillon !");const At=qt();return ft("Monter sur le papillon",At),At&&o.vient("agir")&&b(),Math.random()<G*.25&&n.fx("oiseau"),!1}if(l==="ami"){d.userData.ailes(R,3,.25);const At=wt&&wt.monde===j&&qt();return ft("Monter sur le papillon",At),At&&o.vient("agir")&&b(),!1}if(l==="pilote")return kt(G,R),bt=Math.max(0,bt-G),C("#alerte").classList.toggle("calme",bt<=0),D(bt>0?"Ici, on ne peut pas encore se poser : reviens au petit jardin ou sur le bonsaï.":"Tu pilotes le papillon ! Regarde où tu veux aller, et avance."),ft("Se poser",!0),o.vient("agir")&&b(),!0;p+=G;for(const At of[...T]){At.t+=G;const ht=Math.min(1,At.t/At.dur);At.fn&&At.fn(ht),ht>=1&&(T.delete(At),At.res())}for(const At of[...E])At(G,p)===!1&&E.delete(At);return l==="intro"&&yt(G,R),v.pos.lerp(v.posC,1-Math.exp(-G*3)),v.look.lerp(v.lookC,1-Math.exp(-G*3.6)),e.camera.position.copy(v.pos),g>0&&(e.camera.position.x+=(Math.random()-.5)*g*2,e.camera.position.y+=(Math.random()-.5)*g*2,g=Math.max(0,g-G*1.4)),e.camera.lookAt(v.look),!0}return{maj:rt,annuler:se,passer:Xt,quitter:Mt,enFilm:()=>["intro","vol","pose","depart"].includes(l),etat:()=>l,monter:b}}function Yx({reglages:i,surMenu:t,son:e}){const n=document.createElement("main");n.className="ecran jeu";const s=document.createElement("canvas");s.className="monde3d",n.appendChild(s),n.insertAdjacentHTML("beforeend",`
    <header class="barre-jeu"><nav class="mondes" id="mondes"></nav><div class="coin"><button class="bouton secondaire petit" id="btn-menu">Menu</button><button class="bouton secondaire mini" id="btn-reset">Reset</button><button class="bouton secondaire mini" id="btn-vue">Vue : normale</button></div></header>
    <div class="indice" id="indice" hidden><button class="bouton gros moyen" id="btn-anim">Démarrer l'animation</button><span class="touche-agir" id="touche-agir"></span></div>
    <div class="guide" id="guide" hidden></div>
    <div class="aide-corde" id="aide-corde" hidden><button class="bouton gros moyen" id="btn-corde">Prendre la corde</button><span class="touche-agir" id="touche-corde"></span></div>
    <aside class="aide-touches" id="aide-touches"></aside>`);const r=n.querySelector("#indice"),o=gx(s),a=bx(),c=Lx({scene:a.scene,colliders:a.colliders,depart:a.depart,limites:a.limites,limiterCamera:a.limiterCamera}),l=Dx(()=>i().touches),u=pf(()=>i().voix,e),f=Wx({racine:n,clavier:l});let h="grenier",d=a;const x=[{id:"grenier",nom:"Le grenier"},{id:"foret",nom:"Le jardin géant"},{id:"bonsai",nom:"Le bonsaï"}],M="bonsai-mondes",p=new Set(["grenier"]);try{for(const nt of JSON.parse(localStorage.getItem(M)||"[]"))x.some(yt=>yt.id===nt)&&p.add(nt)}catch{}const g={},T=n.querySelector("#mondes");function E(){T.innerHTML=x.filter(nt=>p.has(nt.id)).map(nt=>`<button class="monde ${nt.id===h?"actif":""}" data-monde="${nt.id}">${nt.nom}</button>`).join("")}function v(nt,yt,Pt,Qt,st,ot=0){if(nt!==h&&(g[h]={x:c.pos.x,z:c.pos.z,cap:c.hero.rotation.y,y:h==="bonsai"?c.pos.y:0}),h=nt,d=yt,!p.has(nt)){p.add(nt);try{localStorage.setItem(M,JSON.stringify([...p]))}catch{}}o.voir(yt.scene),c.changerMonde(yt,Pt,Qt,st,ot),c.hero.scale.setScalar(3),E(),r.hidden=!0,yt.demarrerGuide&&yt.demarrerGuide(),w()}const L=qx({scene:a.scene,garage:a,joueur:c,moteur:o,son:e,voix:u,racine:n,clavier:l,surFin(nt,yt,Pt){nt==="foret"?v("foret",yt,Pt?Pt.x:yt.depart.x,Pt?Pt.z:yt.depart.z,Pt?Pt.cap:Math.PI):(v("grenier",a,a.depart.x,a.depart.z,0),c.etat(0))}}),C=n.querySelector("#guide");let D="";const z=['<svg viewBox="0 0 72 48"><rect x="6" y="34" width="16" height="10" rx="3" fill="#8d5f38"/><rect x="26" y="24" width="16" height="20" rx="3" fill="#8d5f38"/><rect x="46" y="14" width="16" height="30" rx="3" fill="#8d5f38"/><path d="M10 28 q10 -16 22 -8 q8 -14 22 -10" fill="none" stroke="#ffd45e" stroke-width="3" stroke-dasharray="4 4" stroke-linecap="round"/></svg>','<svg viewBox="0 0 72 48"><rect x="8" y="20" width="14" height="24" rx="3" fill="#8d5f38"/><rect x="44" y="24" width="8" height="20" rx="3" fill="#f4ecd8"/><path d="M28 26 a20 9 0 0 1 40 0 z" fill="#d6352e"/><circle cx="40" cy="20" r="2" fill="#fff"/><circle cx="54" cy="19" r="2" fill="#fff"/><path d="M15 16 q14 -18 30 0" fill="none" stroke="#ffd45e" stroke-width="3" stroke-dasharray="4 4" stroke-linecap="round"/></svg>','<svg viewBox="0 0 72 48"><rect x="12" y="32" width="6" height="12" rx="2" fill="#f4ecd8"/><path d="M2 34 a13 6 0 0 1 26 0 z" fill="#d6352e"/><rect x="50" y="14" width="8" height="30" rx="3" fill="#f4ecd8"/><path d="M36 16 a18 8 0 0 1 36 0 z" fill="#e8a23a"/><path d="M15 28 v-10 M15 28 q4 -34 36 -22" fill="none" stroke="#ffd45e" stroke-width="3" stroke-dasharray="4 4" stroke-linecap="round"/><text x="20" y="14" font-size="12" font-weight="800" fill="#ffd45e">x2</text></svg>'];function w(){const nt=h==="foret"&&d.guide?d.guide():null,yt=nt&&nt.phase?`${nt.phase}|${nt.etape}|${nt.combo}|${nt.bravo>0}`:"";if(yt===D)return;if(D=yt,!nt||!nt.phase||nt.phase==="fini"&&nt.bravo<=0){C.hidden=!0;return}const Pt=i().touches,Qt=f.actif?"Sauter":vo((Pt.sauter||[]).find(Boolean))||"Espace";if(C.hidden=!1,nt.phase==="aller")C.innerHTML='<p class="guide-titre">Suis la flèche jaune jusqu’à l’étang</p>';else if(nt.phase==="fini")C.innerHTML='<p class="guide-titre">Bravo ! D’ici, tu vois tout le jardin.</p>';else{const st=["Monte les rondins","Saute sur le petit champignon",nt.combo>=1?"Encore un saut, tu vas plus haut !":"Saute 2 fois dessus : ça rebondit"];C.innerHTML=`<div class="guide-etapes">${st.map((ot,wt)=>`<div class="guide-etape ${wt+1===nt.etape?"actif":""} ${wt+1<nt.etape?"fait":""}">${z[wt]}<p><b>${wt+1}</b>${ot}</p></div>`).join("")}</div><p class="guide-touche">Pour sauter : <b>${Qt}</b></p>`}}T.addEventListener("click",nt=>{const yt=nt.target.closest(".monde");if(!yt||L.actif()||yt.dataset.monde===h)return;yt.blur(),e.clic(),S.quitter();const Pt=yt.dataset.monde,Qt=Pt==="foret"?L.jardin():Pt==="bonsai"?L.jardin().bonsai:a,st=g[Pt];v(Pt,Qt,st?st.x:Qt.depart.x,st?st.z:Qt.depart.z,st?st.cap:0,st?st.y:Qt.depart.y)});const S=$x({jardin:()=>L.jardin(),joueur:c,moteur:o,son:e,voix:u,racine:n,clavier:l,surArrivee(){const nt=L.jardin();v("bonsai",nt.bonsai,-64,nt.branche.z,Math.PI/2,nt.branche.haut)},surPose(nt,yt,Pt,Qt,st){const ot=L.jardin();h="",v(nt,nt==="bonsai"?ot.bonsai:ot,yt,Pt,Qt,st)}});function N(){if(S.annuler(),L.actif()){L.annuler("grenier");return}v("grenier",a,a.depart.x,a.depart.z,0),c.etat(0)}const tt=()=>.25*16**i().sensibilite;let Q=null;s.addEventListener("pointerdown",nt=>{Q||(Q={x:nt.clientX,y:nt.clientY,id:nt.pointerId},s.setPointerCapture(nt.pointerId),s.classList.add("glisse"))}),s.addEventListener("pointermove",nt=>{!Q||nt.pointerId!==Q.id||(c.tourner(nt.clientX-Q.x,nt.clientY-Q.y,tt()),Q={x:nt.clientX,y:nt.clientY,id:nt.pointerId})});const ut=nt=>{Q&&nt&&nt.pointerId!==void 0&&nt.pointerId!==Q.id||(Q=null,s.classList.remove("glisse"))};s.addEventListener("pointerup",ut),s.addEventListener("pointercancel",ut),s.addEventListener("wheel",nt=>{nt.preventDefault(),c.zoom(nt.deltaY)},{passive:!1});const W=nt=>{nt.code==="Escape"&&!document.getElementById("dlg").open&&(nt.preventDefault(),L.actif()?L.annuler("foret"):S.enFilm()?S.passer():t())};window.addEventListener("keydown",W);function $(){const nt=i().touches,yt=Pt=>vo((nt[Pt]||[]).find(Boolean))||"-";n.querySelector("#touche-corde").textContent=yt("corde")!=="-"?`ou touche ${yt("corde")}`:"",n.querySelector("#touche-agir").textContent=yt("agir")!=="-"?`ou touche ${yt("agir")}`:"",n.querySelector("#aide-touches").innerHTML=`<b>${yt("avancer")} ${yt("gauche")} ${yt("reculer")} ${yt("droite")}</b> bouger<span class="sep"></span><b>${yt("sauter")}</b> sauter<span class="sep"></span><b>${yt("sprinter")}</b> sprinter<span class="sep"></span><b>Souris</b> tourner la caméra`}$(),n.querySelector("#btn-menu").addEventListener("click",t);const Z=n.querySelector("#aide-corde");n.querySelector("#btn-corde").addEventListener("click",nt=>{nt.currentTarget.blur(),c.prendreCorde()});const J=n.querySelector("#btn-vue"),Et=()=>{J.textContent=c.vue()?"Vue : 1re personne":"Vue : normale",J.classList.toggle("choisi",c.vue())};try{c.vue(localStorage.getItem("bonsai-vue")==="1")}catch{}return Et(),J.addEventListener("click",nt=>{nt.currentTarget.blur(),e.clic(),c.vue(!c.vue());try{localStorage.setItem("bonsai-vue",c.vue()?"1":"0")}catch{}Et()}),n.querySelector("#btn-reset").addEventListener("click",nt=>{nt.currentTarget.blur(),e.clic(),N()}),E(),o.camera.position.set(1,9,14),n.querySelector("#btn-anim").addEventListener("click",()=>L.lancer()),o.definir(a.scene,(nt,yt,Pt)=>{if(L.actif()){c.hero.visible=!0,a.maj(nt),L.maj(Pt||yt,nt),Z.hidden=!0,l.finImage();return}if(h==="foret"||h==="bonsai"){const Qt=i().touches,st=vo((Qt.agir||[]).find(Boolean));if(S.maj(Pt||yt,nt,c.appui(),f.actif?"":st,h)){S.etat()!=="pilote"&&(c.hero.visible=!0),d.maj(nt,c.pos,null),w(),Z.hidden=!0,l.finImage();return}}if(d.maj(nt,c.pos,c.appui()),w(),Z.hidden=!c.cordeProche(),f.actif&&f.montrer(!0),c.maj(yt,l,nt),c.camera(o.camera,yt),h==="grenier"){const Qt=a.porteMaison,st=Math.hypot(c.pos.x-Qt.x,c.pos.z-(Qt.z+2))<8;r.hidden=!st,st&&l.vient("agir")&&L.lancer()}l.finImage()}),{element:n,majAide:$,bloquer:nt=>l.bloquer(nt),animation:L,lieu:()=>h,monde:()=>d,reset:N,voix:u,aller:v,histoire:S,detruire(){S.annuler(),L.annuler("grenier"),u.arreter(),l.detruire(),window.removeEventListener("keydown",W)},moteur:o,joueur:c,garage:a}}const gu=i=>440*2**((i-69)/12),xu=[62,64,66,69,71,74,76];function Zx(){let i=null,t,e,n,s,r,o=null,a=0,c=0;const l={musique:.6,ambiance:.6,effets:.8};let u=!1;function f(){if(i)return;i=new(window.AudioContext||window.webkitAudioContext);const v=i.createDynamicsCompressor();v.connect(i.destination),t=i.createGain(),e=i.createGain(),n=i.createGain();for(const J of[t,e,n])J.connect(v);s=i.createGain(),s.gain.value=1.6,s.connect(v),r=i.createBuffer(1,i.sampleRate*3,i.sampleRate);const L=r.getChannelData(0);for(let J=0;J<L.length;J++)L[J]=Math.random()*2-1;const C=M(),D=i.createBiquadFilter();D.type="lowpass",D.frequency.value=520;const z=i.createGain();z.gain.value=.35;const w=i.createOscillator();w.frequency.value=.09;const S=i.createGain();S.gain.value=.22,w.connect(S),S.connect(z.gain),w.start(),C.connect(D),D.connect(z),z.connect(e);const N=M(),tt=i.createBiquadFilter();tt.type="bandpass",tt.frequency.value=2200,tt.Q.value=.7;const Q=i.createGain();Q.gain.value=.16;const ut=i.createOscillator();ut.frequency.value=.37;const W=i.createGain();W.gain.value=.05,ut.connect(W),W.connect(Q.gain),ut.start(),N.connect(tt),tt.connect(Q),Q.connect(e);const $=i.createDelay(1);$.delayTime.value=.42;const Z=i.createGain();Z.gain.value=.38,$.connect(Z),Z.connect($),$.connect(t),t.echo=$,p()}let h=null;function d(){const L=new ArrayBuffer(6444),C=new DataView(L),D=(z,w)=>{for(let S=0;S<w.length;S++)C.setUint8(z+S,w.charCodeAt(S))};return D(0,"RIFF"),C.setUint32(4,36+3200*2,!0),D(8,"WAVE"),D(12,"fmt "),C.setUint32(16,16,!0),C.setUint16(20,1,!0),C.setUint16(22,1,!0),C.setUint32(24,8e3,!0),C.setUint32(28,16e3,!0),C.setUint16(32,2,!0),C.setUint16(34,16,!0),D(36,"data"),C.setUint32(40,3200*2,!0),URL.createObjectURL(new Blob([L],{type:"audio/wav"}))}function x(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}if(!h){try{h=new Audio(d()),h.loop=!0,h.play().catch(()=>{})}catch{}const v=()=>{i&&i.state!=="running"&&i.resume().catch(()=>{}),h&&h.paused&&h.play().catch(()=>{})};document.addEventListener("pointerdown",v),document.addEventListener("touchend",v),document.addEventListener("visibilitychange",()=>{document.hidden||v()})}}function M(){const v=i.createBufferSource();return v.buffer=r,v.loop=!0,v.start(0,Math.random()*2),v}function p(){if(!i)return;const v=i.currentTime;t.gain.setTargetAtTime(l.musique*.55*(u?.25:1),v,.15),e.gain.setTargetAtTime(l.ambiance*.5*(u?.25:1),v,.15),n.gain.setTargetAtTime(l.effets*1,v,.05)}function g(v,L,C,D,z,w,S=!1){const N=i.createOscillator(),tt=i.createGain();N.type=v,N.frequency.setValueAtTime(L,C),tt.gain.setValueAtTime(1e-4,C),tt.gain.exponentialRampToValueAtTime(z,C+.015),tt.gain.exponentialRampToValueAtTime(1e-4,C+D),N.connect(tt),tt.connect(w),S&&t.echo&&tt.connect(t.echo),N.start(C),N.stop(C+D+.05)}function T(v){const L=2300+Math.random()*1500,C=i.createStereoPanner();C.pan.value=Math.random()*1.6-.8,C.connect(e);const D=2+Math.floor(Math.random()*4);for(let z=0;z<D;z++){const w=i.createOscillator(),S=i.createGain();w.type="sine",w.frequency.setValueAtTime(L*(1+z*.07),v+z*.11),w.frequency.exponentialRampToValueAtTime(L*(1.2+z*.07),v+z*.11+.09),S.gain.setValueAtTime(1e-4,v+z*.11),S.gain.exponentialRampToValueAtTime(.1,v+z*.11+.01),S.gain.exponentialRampToValueAtTime(1e-4,v+z*.11+.1),w.connect(S),S.connect(C),w.start(v+z*.11),w.stop(v+z*.11+.12)}}function E(){const v=i.currentTime;for(;a<v+.4;){const L=xu[Math.floor(Math.random()*xu.length)]-(Math.random()<.25?12:0);g("triangle",gu(L),a,1.8,.16,t,!0),g("sine",gu(L+12),a,1.2,.05,t,!0),a+=.55+Math.random()*1.1}v>=c&&(T(v+.05),c=v+3+Math.random()*7)}return{appliquer(v){Object.assign(l,v),p()},baisser(v){u=v,p()},async tampon(v){try{f();const L=await fetch(v);return L.ok?await i.decodeAudioData(await L.arrayBuffer()):null}catch{return null}},jouerTampon(v,L){if(!i)return null;i.state!=="running"&&i.resume().catch(()=>{});const C=i.createBufferSource();C.buffer=v;const D=i.createGain();D.gain.value=L,C.connect(D),D.connect(s);let z;const w=new Promise(S=>{z=S});return C.onended=z,C.start(),setTimeout(z,v.duration*1e3+400),{fin:w,stop(){try{C.stop()}catch{}z()}}},async demarrer(){try{f(),i.state==="suspended"&&await i.resume(),x(),o||(a=i.currentTime+.3,c=i.currentTime+2,o=setInterval(E,80))}catch{}},clic(){i&&i.state==="running"&&(g("sine",660,i.currentTime+.01,.18,.2,n),g("sine",990,i.currentTime+.07,.22,.15,n))},magie(){i&&i.state==="running"&&[523,659,784,1047].forEach((v,L)=>g("triangle",v,i.currentTime+.02+L*.09,.7,.14,n))},fx(v){if(!i)return;i.state!=="running"&&i.resume().catch(()=>{});const L=i.currentTime+.02,C=(w,S,N,tt,Q,ut,W)=>g(w,S,N,tt,Math.min(1,Q*1.7),ut,W),D=(w,S,N,tt,Q=1)=>{const ut=Math.min(1,tt*1.7),W=i.createBufferSource();W.buffer=r;const $=i.createBiquadFilter();$.type="bandpass",$.Q.value=Q,$.frequency.setValueAtTime(w,L),$.frequency.exponentialRampToValueAtTime(S,L+N);const Z=i.createGain();Z.gain.setValueAtTime(1e-4,L),Z.gain.exponentialRampToValueAtTime(ut,L+.03),Z.gain.exponentialRampToValueAtTime(1e-4,L+N),W.connect($),$.connect(Z),Z.connect(n),W.start(L,Math.random()*2),W.stop(L+N+.05)},z=(w,S,N,tt,Q)=>{const ut=Math.min(1,Q*1.7),W=i.createOscillator(),$=i.createGain();W.type=w,W.frequency.setValueAtTime(S,L),W.frequency.exponentialRampToValueAtTime(N,L+tt),$.gain.setValueAtTime(1e-4,L),$.gain.exponentialRampToValueAtTime(ut,L+.05),$.gain.exponentialRampToValueAtTime(1e-4,L+tt),W.connect($),$.connect(n),W.start(L),W.stop(L+tt+.05)};if(v==="porte"&&(z("sawtooth",170,95,1.4,.16),z("square",340,190,1.4,.07),C("square",90,L+1.45,.12,.18,n)),v==="clic"&&(C("square",1400,L,.05,.12,n),C("square",900,L+.06,.07,.1,n)),v==="machine"&&(z("sawtooth",70,220,2.2,.14),z("triangle",140,440,2.2,.1),D(300,1200,2.2,.15,.6)),v==="rayon"&&(z("sawtooth",220,880,.6,.12),D(2e3,5e3,1.2,.12,2),z("sine",880,880,1.6,.06)),v==="ding"&&(C("triangle",1568,L,.9,.2,n,!0),C("triangle",2093,L+.1,.9,.14,n,!0)),v==="reniflement"&&D(900,2600,.35,.22,3),v==="atchoum"&&(D(4500,600,.38,.9,.8),z("sine",160,50,.3,.5)),v==="retrecir"&&(z("sine",1600,140,1.5,.22),z("triangle",2400,300,1.5,.12),D(6e3,800,1.5,.2,1.5)),v==="alarme")for(let w=0;w<6;w++)C("square",w%2?660:880,L+w*.28,.2,.12,n);if(v==="explosion"&&(D(900,60,1.6,1,.5),D(200,40,2.2,.9,.4),z("sine",110,28,1.4,.9),z("sawtooth",220,40,.8,.25)),v==="chute"&&(z("sine",1800,300,1.4,.18),D(3e3,800,1.4,.1,1.2)),v==="atterrissage"&&(z("sine",150,45,.25,.6),D(1500,300,.25,.3,.8)),v==="oiseau"&&[3100,3900,3300,4200,3600].forEach((w,S)=>C("sine",w,L+S*.09,.08,.14,n)),v==="araignee")for(let w=0;w<7;w++)C("square",140+w%3*30,L+w*.07,.03,.1,n);if(v==="croc"&&(D(2500,400,.12,.7,1.2),C("square",220,L,.06,.25,n)),v==="ailes")for(let w=0;w<6;w++){const S=i.createBufferSource();S.buffer=r;const N=i.createBiquadFilter();N.type="bandpass",N.frequency.value=900;const tt=i.createGain(),Q=L+w*.11;tt.gain.setValueAtTime(1e-4,Q),tt.gain.exponentialRampToValueAtTime(.28,Q+.02),tt.gain.exponentialRampToValueAtTime(1e-4,Q+.09),S.connect(N),N.connect(tt),tt.connect(n),S.start(Q,Math.random()*2),S.stop(Q+.12)}v==="boing"&&(z("sine",180,560,.28,.35),z("triangle",360,1120,.22,.12)),v==="bravo"&&[523,659,784,1047,1319].forEach((w,S)=>C("triangle",w,L+S*.1,.6,.16,n,!0)),v==="pas"&&C("sine",90,L,.1,.15,n)},etat(){return{actif:!!i&&i.state==="running",musique:!!o,contexte:i?i.state:"aucun"}}}}const mf="bonsai-reglages",ss={musique:.6,ambiance:.6,effets:.8,voix:.9,feuilles:!0,sensibilite:.5,qualite:"normale",touches:Lo()},fr=(i,t,e,n)=>Number.isFinite(i)?Math.min(e,Math.max(t,i)):n;function gf(i){const t=i&&typeof i=="object"?i:{};return{musique:fr(t.musique,0,1,ss.musique),ambiance:fr(t.ambiance,0,1,ss.ambiance),effets:fr(t.effets,0,1,ss.effets),voix:fr(t.voix,0,1,ss.voix),feuilles:t.feuilles!==!1,sensibilite:fr(t.sensibilite,0,1,ss.sensibilite),qualite:["basse","normale"].includes(t.qualite)?t.qualite:ss.qualite,touches:(()=>{const e=hf(t.touches);return t.v>=2||(e.corde=["KeyF",null]),e})(),v:2}}function Jx(){try{return gf(JSON.parse(localStorage.getItem(mf)||"null"))}catch{return{...ss,touches:Lo()}}}function jx(i){try{localStorage.setItem(mf,JSON.stringify(i))}catch{}}const ds=Jx(),Kx=document.getElementById("app"),Pe=document.getElementById("dlg"),vn=Zx();vn.appliquer(ds);let sn=null;const ri=pf(()=>Math.max(.5,ds.voix),vn);for(const i of["pointerdown","keydown"])document.addEventListener(i,()=>vn.demarrer(),{once:!0});const Gi=[];window.addEventListener("error",i=>{Gi.push(`${i.message} (${(i.filename||"").split("/").pop()}:${i.lineno})`),Gi.length>5&&Gi.shift()});window.addEventListener("unhandledrejection",i=>{typeof i.reason!="symbol"&&(Gi.push(`promesse : ${i.reason&&i.reason.message?i.reason.message:String(i.reason)}`),Gi.length>5&&Gi.shift())});function Hc(i){Kx.replaceChildren(i.element)}const hr=()=>{jx(ds),vn.appliquer(ds)};function xf(i="son"){const t=ds;let e=null;Pe.className="large",Pe.innerHTML=`<h2>Paramètres</h2>
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
    <div class="pied"><button class="bouton gros moyen" id="p-fermer">Fermer</button></div>`,Pe.open||Pe.showModal(),sn&&sn.bloquer(!0);const n=c=>{Pe.querySelectorAll(".onglets button").forEach(l=>l.classList.toggle("actif",l.dataset.o===c)),Pe.querySelector("#o-son").hidden=c!=="son",Pe.querySelector("#o-commandes").hidden=c!=="commandes",c==="commandes"&&r()};function s(c){const l=t.touches[c.id],u=[0,1].map(f=>{const h=e&&e.action===c.id&&e.i===f,d=h?"Appuie sur une touche":l[f]?vo(l[f]):"";return`<button class="case ${h?"ecoute":""}" data-a="${c.id}" data-i="${f}" ${c.bientot?"disabled":""}>${d}</button>`}).join("");return`<div class="rangee ${c.bientot?"bientot":""}"><span class="nom-action">${c.nom}${c.bientot?"<em>bientôt</em>":""}</span>${u}<button class="croix" data-a="${c.id}" aria-label="Effacer ${c.nom}" ${c.bientot?"disabled":""}>×</button></div>`}function r(){const c=Pe.querySelector("#o-commandes");c.innerHTML=`<h3 class="section">SOURIS</h3>
      <label class="ligne"><span>Sensibilité de la souris <b id="p-sens-val">${Math.round(t.sensibilite*100)} %</b></span><input type="range" id="p-sens" min="0" max="100" step="1" value="${Math.round(t.sensibilite*100)}"></label>
      <h3 class="section">DÉPLACEMENT</h3>${wo.filter(l=>!["agir","corde"].includes(l.id)).map(s).join("")}
      <h3 class="section">ACTIONS</h3>${wo.filter(l=>["agir","corde"].includes(l.id)).map(s).join("")}
      <p class="note">Clique sur une case, puis appuie sur la touche que tu veux. Échap pour annuler. La croix rouge efface la case.</p>
      <button class="bouton secondaire" id="p-defaut">Rétablir les touches de départ</button>`,c.querySelector("#p-sens").addEventListener("input",l=>{t.sensibilite=Number(l.target.value)/100,c.querySelector("#p-sens-val").textContent=`${l.target.value} %`,hr()}),c.querySelectorAll(".case").forEach(l=>l.addEventListener("click",()=>{e={action:l.dataset.a,i:Number(l.dataset.i)},r()})),c.querySelectorAll(".croix").forEach(l=>l.addEventListener("click",()=>{t.touches[l.dataset.a]=[null,null],hr(),sn&&sn.majAide(),e=null,r()})),c.querySelector("#p-defaut").addEventListener("click",()=>{t.touches=Lo(),hr(),sn&&sn.majAide(),e=null,r()})}const o=c=>{if(e){if(c.preventDefault(),c.stopPropagation(),c.code==="Escape"){e=null,r();return}t.touches=Ux(t.touches,e.action,e.i,c.code),hr(),sn&&sn.majAide(),vn.clic(),e=null,r()}};window.addEventListener("keydown",o,!0),Pe.addEventListener("cancel",c=>{e&&c.preventDefault()}),Pe.addEventListener("close",()=>{window.removeEventListener("keydown",o,!0),sn&&sn.bloquer(!1)},{once:!0}),Pe.querySelectorAll(".onglets button").forEach(c=>c.addEventListener("click",()=>{e=null,n(c.dataset.o)}));const a=()=>{Object.assign(t,gf({...t,musique:Number(Pe.querySelector("#p-musique").value),ambiance:Number(Pe.querySelector("#p-ambiance").value),effets:Number(Pe.querySelector("#p-effets").value),voix:Number(Pe.querySelector("#p-voix").value)})),hr()};Pe.querySelectorAll("#o-son input").forEach(c=>c.addEventListener("input",a)),Pe.querySelector("#p-plein").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()}),Pe.querySelector("#p-test").addEventListener("click",()=>Qx(Pe.querySelector("#p-diag"))),Pe.querySelector("#p-fermer").addEventListener("click",()=>{vn.clic(),Pe.close()}),n(i)}async function Qx(i){i.hidden=!1,i.textContent="Test en cours…",ri.eveiller(),await vn.demarrer(),await ri.precharger(),vn.fx("ding");const t=vn.etat(),e=(()=>{try{const c=document.createElement("canvas").getContext("webgl"),l=c.getExtension("WEBGL_debug_renderer_info");return{carte:l?c.getParameter(l.UNMASKED_RENDERER_WEBGL):"inconnue",tex:c.getParameter(c.MAX_TEXTURE_SIZE)}}catch{return{carte:"WebGL absent",tex:0}}})(),n=await new Promise(a=>{let c=0;const l=performance.now(),u=()=>{c++,performance.now()-l<1e3?requestAnimationFrame(u):a(c)};requestAnimationFrame(u)}),s=ri.compte(),r=ri.nom("homme"),o=[`Son (bruitages, musique) : ${t.contexte==="running"?"réveillé":"ENDORMI ("+t.contexte+")"}`,`Voix : ${ri.pris()?s&&s.fr?`${s.fr} voix françaises (${s.frLocales} installées), choisie : ${r?r.nom+(r.locale?"":" (en ligne)"):"aucune"}`:"AUCUNE voix française trouvée":"pas de synthèse vocale sur cet appareil"}`,`Vraies voix enregistrées : ${ri.enregistrees()} sur 20${ri.enregistrees()?" (le jeu les joue à la place de la voix de l’appareil)":""}`,`Vitesse : ${n} images par seconde (écran vide)`,`Écran : ${screen.width}x${screen.height}, tactile : ${matchMedia("(pointer: coarse)").matches?"oui":"non"}, finesse : ${window.devicePixelRatio}`,`Carte graphique : ${e.carte} (textures ${e.tex})`,`Navigateur : ${navigator.userAgent.replace(/\s+/g," ").slice(0,110)}`,`Erreurs du jeu : ${Gi.length?Gi.join(" | "):"aucune"}`];i.textContent=o.join(`
`)+`

Tu dois entendre un « ding », puis le papa (« Regarde, fiston ! ») et Théo.`,await ri.dire(bi.p1,{id:"p1",pitch:.7,genre:"homme"}),await ri.dire(bi.t1,{id:"t1",pitch:2,genre:"femme",rate:1.1})}function t1(){Pe.open||(Pe.className="",Pe.innerHTML=`<h2>Pause</h2><div class="menu-pause"><button class="bouton gros moyen" id="m-reprendre">Reprendre</button><button class="bouton secondaire" id="m-param">Paramètres</button><button class="bouton secondaire" id="m-quitter">Retour à la couverture</button></div>
    <h3 class="section">L’HISTOIRE EN 3 CHAPITRES</h3>
    <div class="chapitres">
      <div class="chapitre actif"><b>1</b><p>La découverte du jardin<small>En cours</small></p></div>
      <div class="chapitre"><b>2</b><p>La découverte de la maison et des parents<small>Bientôt</small></p></div>
      <div class="chapitre"><b>3</b><p>La reconstruction de la machine, pour redevenir grand<small>Bientôt</small></p></div>
    </div>`,Pe.showModal(),sn&&sn.bloquer(!0),Pe.addEventListener("close",()=>{sn&&sn.bloquer(!1)},{once:!0}),Pe.querySelector("#m-reprendre").addEventListener("click",()=>{vn.clic(),Pe.close()}),Pe.querySelector("#m-param").addEventListener("click",()=>{vn.clic(),Pe.addEventListener("close",()=>xf("commandes"),{once:!0}),Pe.close()}),Pe.querySelector("#m-quitter").addEventListener("click",()=>{vn.clic(),Pe.addEventListener("close",()=>n1(),{once:!0}),Pe.close()}))}function e1(){vn.magie(),sn=Yx({reglages:()=>ds,surMenu:t1,son:vn}),Hc(sn)}function n1(){sn&&(sn.detruire(),sn.moteur.arreter(),sn=null),Hc(_f)}const _f=Cf({surCommencer:()=>{vn.demarrer(),ri.eveiller(),e1()},surParametres:()=>{vn.demarrer(),xf("son")}});Hc(_f);window.bonsai={son:vn,get reglages(){return ds},get jeu(){return sn}};
