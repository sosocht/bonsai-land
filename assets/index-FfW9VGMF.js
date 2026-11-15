(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function fr(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const Cu=(i,t="#0a5c3e")=>`<path d="M0,0 C40,-90 150,-150 300,-120 C250,-45 130,-8 0,0Z" fill="${i}"/><path d="M0,0 C100,-48 200,-84 296,-118" stroke="${t}" stroke-width="4" fill="none" opacity=".55"/>`;function mr(i,t,e,n,s,r){const o=fr(r);let a="";for(let c=0;c<6;c++){const l=-80+c*30+o()*10;a+=`<g transform="rotate(${l.toFixed(0)}) scale(${(.8+o()*.45).toFixed(2)})">${Cu(s[c%s.length])}</g>`}return`<g transform="translate(${i},${t}) rotate(${n}) scale(${e})"><g class="balance" style="animation-delay:${(o()*-5).toFixed(1)}s">${a}</g></g>`}function gr(i,t,e,n,s,r,o=!1){const a=fr(r);let c=`<path d="M0,0 C20,-120 90,-210 210,-250" stroke="${s}" stroke-width="7" fill="none" stroke-linecap="round"/>`;for(let l=1;l<18;l++){const u=l/18,f=210*(1-Math.pow(1-u,2))*1.02,h=-250*u-(1-u)*6,d=46*(1-u*.7);for(const g of[-1,1])c+=`<ellipse cx="${(f+4).toFixed(1)}" cy="${h.toFixed(1)}" rx="${d.toFixed(1)}" ry="${(d*.2).toFixed(1)}" fill="${s}" transform="rotate(${(g*(48+a()*14)-18).toFixed(0)} ${f.toFixed(1)} ${h.toFixed(1)})"/>`}return`<g transform="translate(${i},${t}) rotate(${n}) scale(${o?-e:e},${e})"><g class="balance lent" style="animation-delay:${(a()*-6).toFixed(1)}s">${c}</g></g>`}function ns(i,t,e,n){const s=fr(n);let r="",o="";for(let a=70+s()*40;a<900;a+=110+s()*50){r+=`<rect x="${i-t/2-3}" y="${a}" width="${t+6}" height="9" rx="4" fill="#2f9d57"/>`;for(const c of[-1,1]){const l=i+c*t*.5;o+=`<path d="M${l},${a} C${l+c*38},${a-24} ${l+c*100},${a-14} ${l+c*138},${a+16} C${l+c*96},${a+4} ${l+c*42},${a+6} ${l},${a}Z" fill="#8be36c"/>`}}return`<g class="balance tige" style="animation-delay:${(s()*-5).toFixed(1)}s" transform="rotate(${e} ${i} 900)"><rect x="${i-t/2}" y="-30" width="${t}" height="950" fill="#7fe07a"/><rect x="${i-t/2}" y="-30" width="${t*.3}" height="950" fill="#c4f59a" opacity=".75"/><rect x="${i+t*.25}" y="-30" width="${t*.25}" height="950" fill="#2f9d57" opacity=".6"/>${r}${o}</g>`}function Cl(i,t,e,n,s="#ffd24d"){let r="";for(let o=0;o<5;o++)r+=`<ellipse cx="0" cy="-12" rx="7" ry="13" fill="${n}" transform="rotate(${o*72})"/>`;return`<g transform="translate(${i},${t}) scale(${e})">${r}<circle r="5" fill="${s}"/></g>`}function Pu(i,t,e,n){const s=fr(n);let r=`<path d="M${i},-20 C${i+e},${t*.35} ${i-e*.6},${t*.7} ${i+e*.4},${t}" fill="none" stroke="#1a8a5c" stroke-width="${3+s()*3}" stroke-linecap="round"/>`;for(let o=1;o<=6;o++){const a=o/7,c=i+e*.4*a*a+(s()-.5)*6;r+=`<ellipse cx="${c.toFixed(1)}" cy="${(t*a).toFixed(1)}" rx="12" ry="6" fill="${["#3fd07a","#7de58a","#22b06a"][o%3]}" transform="rotate(${(s()*100-50).toFixed(0)} ${c.toFixed(1)} ${(t*a).toFixed(1)})"/>`}return s()>.45&&(r+=Cl(i+e*.4,t+8,.75,s()>.5?"#ff8a2b":"#ff9fc0")),`<g class="liane" style="animation-delay:${(s()*-5).toFixed(1)}s">${r}</g>`}function Lu(){const i=fr(11);let t="";for(let r=0;r<16;r++)t+=`<circle class="bulle" style="animation-delay:${(-i()*12).toFixed(1)}s;animation-duration:${(10+i()*10).toFixed(1)}s" cx="${(i()*1600).toFixed(0)}" cy="${(300+i()*600).toFixed(0)}" r="${(8+i()*26).toFixed(0)}" fill="#fff" opacity=".13"/>`;let e="";for(let r=0;r<12;r++)e+=Pu(40+r*140+(i()-.5)*60,90+i()*260,(i()-.5)*80,70+r);let n="";for(let r=0;r<14;r++){const o=i()<.5;n+=Cl(o?30+i()*380:1190+i()*380,770+i()*110,.9+i()*.7,i()>.45?"#ff8a2b":"#ff9fc0")}const s=document.createElement("div");return s.className="fond",s.innerHTML=`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="bleu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a3f9a"/><stop offset=".45" stop-color="#1a86d8"/><stop offset=".8" stop-color="#4fcfe6"/><stop offset="1" stop-color="#8fe9e2"/></linearGradient>
      <radialGradient id="lueur" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#dff8ff" stop-opacity=".85"/><stop offset="1" stop-color="#dff8ff" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#bleu)"/>
    <ellipse class="lueur" cx="1130" cy="190" rx="520" ry="360" fill="url(#lueur)"/>
    ${t}
    <g opacity=".5">${mr(120,760,1.3,8,["#0d6f9a","#117fa3"],3)}${mr(1490,770,1.3,-10,["#0d6f9a","#117fa3"],4)}</g>
    ${ns(70,28,-2,5)}${ns(150,20,2,6)}${ns(240,16,-1,7)}
    ${ns(1530,28,2,8)}${ns(1450,20,-2,9)}${ns(1360,16,1,10)}
    ${e}
    ${mr(-30,940,1.7,0,["#14a064","#2fc27a","#0e8456","#4ad98a"],12)}
    ${mr(1630,940,1.7,0,["#14a064","#2fc27a","#0e8456","#4ad98a"],13)}
    ${gr(330,930,1.5,-8,"#1fb36e",21)}
    ${gr(1270,930,1.5,8,"#1fb36e",22,!0)}
    ${gr(520,940,1.1,-22,"#35cf80",23)}
    ${gr(1090,940,1.1,22,"#35cf80",24,!0)}
    ${n}
  </svg>`,s}function Iu({surCommencer:i,surParametres:t}){const e=document.createElement("main");return e.className="ecran couverture",e.appendChild(Lu()),e.insertAdjacentHTML("beforeend",`
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
 */const Xa="170",Du=0,pc=1,Uu=2,Pl=1,Nu=2,ai=3,Ri=0,gn=1,Be=2,bi=0,Ts=1,Wn=2,mc=3,gc=4,Fu=5,Gi=100,Ou=101,zu=102,Bu=103,Vu=104,Hu=200,Gu=201,ku=202,Wu=203,jo=204,Ko=205,Xu=206,qu=207,$u=208,Yu=209,Zu=210,Ju=211,ju=212,Ku=213,Qu=214,Qo=0,ta=1,ea=2,Cs=3,na=4,ia=5,sa=6,ra=7,Ll=0,th=1,eh=2,li=0,nh=1,ih=2,sh=3,rh=4,oh=5,ah=6,ch=7,Il=300,Ps=301,Ls=302,oa=303,aa=304,so=306,ar=1e3,Xi=1001,ca=1002,Fn=1003,lh=1004,xr=1005,Zn=1006,fo=1007,qi=1008,fi=1009,Dl=1010,Ul=1011,cr=1012,qa=1013,Zi=1014,Jn=1015,dr=1016,$a=1017,Ya=1018,Is=1020,Nl=35902,Fl=1021,Ol=1022,Xn=1023,zl=1024,Bl=1025,As=1026,Ds=1027,Za=1028,Ja=1029,Vl=1030,ja=1031,Ka=1033,$r=33776,Yr=33777,Zr=33778,Jr=33779,la=35840,ua=35841,ha=35842,fa=35843,da=36196,pa=37492,ma=37496,ga=37808,xa=37809,_a=37810,va=37811,Ma=37812,ya=37813,Sa=37814,wa=37815,ba=37816,Ea=37817,Ta=37818,Aa=37819,Ra=37820,Ca=37821,jr=36492,Pa=36494,La=36495,Hl=36283,Ia=36284,Da=36285,Ua=36286,uh=3200,hh=3201,Gl=0,fh=1,Si="",Pn="srgb",Ns="srgb-linear",ro="linear",Ue="srgb",is=7680,xc=519,dh=512,ph=513,mh=514,kl=515,gh=516,xh=517,_h=518,vh=519,Na=35044,_c="300 es",ci=2e3,to=2001;class Fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],po=Math.PI/180,Fa=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function an(i,t,e){return Math.max(t,Math.min(e,i))}function Mh(i,t){return(i%t+t)%t}function mo(i,t,e){return(1-e)*i+e*t}function Yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xe{constructor(t,e,n,s,r,o,a,c,l){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],E=s[1],b=s[4],v=s[7],U=s[2],A=s[5],P=s[8];return r[0]=o*_+a*E+c*U,r[3]=o*m+a*b+c*A,r[6]=o*p+a*v+c*P,r[1]=l*_+u*E+f*U,r[4]=l*m+u*b+f*A,r[7]=l*p+u*v+f*P,r[2]=h*_+d*E+g*U,r[5]=h*m+d*b+g*A,r[8]=h*p+d*v+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=h*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(go.makeScale(t,e)),this}rotate(t){return this.premultiply(go.makeRotation(-t)),this}translate(t,e){return this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const go=new xe;function Wl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yh(){const i=eo("canvas");return i.style.display="block",i}const vc={};function tr(i){i in vc||(vc[i]=!0,console.warn(i))}function Sh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function wh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ae={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ue&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ue&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?ro:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Mc=[.64,.33,.3,.6,.15,.06],yc=[.2126,.7152,.0722],Sc=[.3127,.329],wc=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ae.define({[Ns]:{primaries:Mc,whitePoint:Sc,transfer:ro,toXYZ:wc,fromXYZ:bc,luminanceCoefficients:yc,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:Mc,whitePoint:Sc,transfer:Ue,toXYZ:wc,fromXYZ:bc,luminanceCoefficients:yc,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}});let ss;class Eh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=eo("canvas")),ss.width=t.width,ss.height=t.height;const n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=eo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Th=0;class Xl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xo(s[o].image)):r.push(xo(s[o]))}else r=xo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ah=0;class xn extends Fs{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,n=Xi,s=Xi,r=Zn,o=qi,a=Xn,c=fi,l=xn.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=ui(),this.name="",this.source=new Xl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ar:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ar:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Il;xn.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,n=0,s=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,v=(d+1)/2,U=(p+1)/2,A=(u+h)/4,P=(f+_)/4,I=(g+m)/4;return b>v&&b>U?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=P/n):v>U?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=I/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=P/r,s=I/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(h-u)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rh extends Fs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new xn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends Rh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ql extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ch extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==h||l!==d||u!==g){let m=1-a;const p=c*h+l*d+u*g+f*_,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const U=Math.sqrt(b),A=Math.atan2(U,p*E);m=Math.sin(m*A)/U,a=Math.sin(a*A)/U}const v=a*E;if(c=c*m+h*v,l=l*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const U=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=U,l*=U,u*=U,f*=U}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-a*d,t[e+2]=l*g+u*d+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new L,Ec=new Qi;class ts{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),vr.subVectors(this.max,Hs),rs.subVectors(t.a,Hs),os.subVectors(t.b,Hs),as.subVectors(t.c,Hs),mi.subVectors(os,rs),gi.subVectors(as,os),Ii.subVectors(rs,as);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ii.z,Ii.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ii.z,0,-Ii.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ii.y,Ii.x,0];return!vo(e,rs,os,as,vr)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,rs,os,as,vr))?!1:(Mr.crossVectors(mi,gi),e=[Mr.x,Mr.y,Mr.z],vo(e,rs,os,as,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new L,new L,new L,new L,new L,new L,new L,new L],Hn=new L,_r=new ts,rs=new L,os=new L,as=new L,mi=new L,gi=new L,Ii=new L,Hs=new L,vr=new L,Mr=new L,Di=new L;function vo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Di.fromArray(i,r);const a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=t.dot(Di),l=e.dot(Di),u=n.dot(Di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ph=new ts,Gs=new L,Mo=new L;class Os{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ph.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const e=Gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(Mo)),this.expandByPoint(Gs.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new L,yo=new L,yr=new L,xi=new L,So=new L,Sr=new L,wo=new L;class $l{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yo.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),xi.copy(this.origin).sub(yo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(yr),a=xi.dot(this.direction),c=-xi.dot(yr),l=xi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yo).addScaledVector(yr,h),d}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){So.subVectors(e,t),Sr.subVectors(n,t),wo.crossVectors(So,Sr);let o=this.direction.dot(wo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,t);const c=a*this.direction.dot(Sr.crossVectors(xi,Sr));if(c<0)return null;const l=a*this.direction.dot(So.cross(xi));if(l<0||c+l>o)return null;const u=-a*xi.dot(wo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,g,_,m){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,g=l*u,_=l*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,g=l*u,_=l*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+_,e[1]=c*f,e[5]=_*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lh,t,Ih)}lookAt(t,e,n){const s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),_i.crossVectors(n,Dn),_i.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),_i.crossVectors(n,Dn)),_i.normalize(),wr.crossVectors(Dn,_i),s[0]=_i.x,s[4]=wr.x,s[8]=Dn.x,s[1]=_i.y,s[5]=wr.y,s[9]=Dn.y,s[2]=_i.z,s[6]=wr.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],b=n[7],v=n[11],U=n[15],A=s[0],P=s[4],I=s[8],S=s[12],y=s[1],N=s[5],J=s[9],Q=s[13],W=s[2],Y=s[6],B=s[10],k=s[14],H=s[3],dt=s[7],yt=s[11],bt=s[15];return r[0]=o*A+a*y+c*W+l*H,r[4]=o*P+a*N+c*Y+l*dt,r[8]=o*I+a*J+c*B+l*yt,r[12]=o*S+a*Q+c*k+l*bt,r[1]=u*A+f*y+h*W+d*H,r[5]=u*P+f*N+h*Y+d*dt,r[9]=u*I+f*J+h*B+d*yt,r[13]=u*S+f*Q+h*k+d*bt,r[2]=g*A+_*y+m*W+p*H,r[6]=g*P+_*N+m*Y+p*dt,r[10]=g*I+_*J+m*B+p*yt,r[14]=g*S+_*Q+m*k+p*bt,r[3]=E*A+b*y+v*W+U*H,r[7]=E*P+b*N+v*Y+U*dt,r[11]=E*I+b*J+v*B+U*yt,r[15]=E*S+b*Q+v*k+U*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*f-s*l*f-r*a*h+n*l*h+s*a*d-n*c*d)+_*(+e*c*d-e*l*h+r*o*h-s*o*d+s*l*u-r*c*u)+m*(+e*l*f-e*a*d-r*o*f+n*o*d+r*a*u-n*l*u)+p*(-s*a*u-e*c*f+e*a*h+s*o*f-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=f*m*l-_*h*l+_*c*d-a*m*d-f*c*p+a*h*p,b=g*h*l-u*m*l-g*c*d+o*m*d+u*c*p-o*h*p,v=u*_*l-g*f*l+g*a*d-o*_*d-u*a*p+o*f*p,U=g*f*c-u*_*c-g*a*h+o*_*h+u*a*m-o*f*m,A=e*E+n*b+s*v+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=E*P,t[1]=(_*h*r-f*m*r-_*s*d+n*m*d+f*s*p-n*h*p)*P,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*P,t[3]=(f*c*r-a*h*r-f*s*l+n*h*l+a*s*d-n*c*d)*P,t[4]=b*P,t[5]=(u*m*r-g*h*r+g*s*d-e*m*d-u*s*p+e*h*p)*P,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*P,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*d+e*c*d)*P,t[8]=v*P,t[9]=(g*f*r-u*_*r-g*n*d+e*_*d+u*n*p-e*f*p)*P,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*P,t[11]=(u*a*r-o*f*r-u*n*l+e*f*l+o*n*d-e*a*d)*P,t[12]=U*P,t[13]=(u*_*s-g*f*s+g*n*h-e*_*h-u*n*m+e*f*m)*P,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*P,t[15]=(o*f*s-u*a*s+u*n*c-e*f*c-o*n*h+e*a*h)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,_=o*u,m=o*f,p=a*f,E=c*l,b=c*u,v=c*f,U=n.x,A=n.y,P=n.z;return s[0]=(1-(_+p))*U,s[1]=(d+v)*U,s[2]=(g-b)*U,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(h+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+b)*P,s[9]=(m-E)*P,s[10]=(1-(h+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);const l=1/r,u=1/o,f=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,e.setFromRotationMatrix(Gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ci){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let d,g;if(a===ci)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===to)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ci){const c=this.elements,l=1/(e-t),u=1/(n-s),f=1/(o-r),h=(e+t)*l,d=(n+s)*u;let g,_;if(a===ci)g=(o+r)*f,_=-2*f;else if(a===to)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cs=new L,Gn=new Re,Lh=new L(0,0,0),Ih=new L(1,1,1),_i=new L,wr=new L,Dn=new L,Tc=new Re,Ac=new Qi;class Tn{constructor(t=0,e=0,n=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-an(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Yl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dh=0;const Rc=new L,ls=new Qi,si=new Re,br=new L,ks=new L,Uh=new L,Nh=new Qi,Cc=new L(1,0,0),Pc=new L(0,1,0),Lc=new L(0,0,1),Ic={type:"added"},Fh={type:"removed"},us={type:"childadded",child:null},bo={type:"childremoved",child:null};class Ze extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const t=new L,e=new Tn,n=new Qi,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new xe}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Cc,t)}rotateY(t){return this.rotateOnAxis(Pc,t)}rotateZ(t){return this.rotateOnAxis(Lc,t)}translateOnAxis(t,e){return Rc.copy(t).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cc,t)}translateY(t){return this.translateOnAxis(Pc,t)}translateZ(t){return this.translateOnAxis(Lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?br.copy(t):br.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ks,br,this.up):si.lookAt(br,ks,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(si),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ic),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fh),bo.child=t,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ic),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,Uh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ze.DEFAULT_UP=new L(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new L,ri=new L,Eo=new L,oi=new L,hs=new L,fs=new L,Dc=new L,To=new L,Ao=new L,Ro=new L,Co=new Oe,Po=new Oe,Lo=new Oe;class Bn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),kn.subVectors(t,e),s.cross(kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){kn.subVectors(s,e),ri.subVectors(n,e),Eo.subVectors(t,e);const o=kn.dot(kn),a=kn.dot(ri),c=kn.dot(Eo),l=ri.dot(ri),u=ri.dot(Eo),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(o,oi.y),c.addScaledVector(a,oi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Co.setScalar(0),Po.setScalar(0),Lo.setScalar(0),Co.fromBufferAttribute(t,e),Po.fromBufferAttribute(t,n),Lo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Co,r.x),o.addScaledVector(Po,r.y),o.addScaledVector(Lo,r.z),o}static isFrontFacing(t,e,n,s){return kn.subVectors(n,e),ri.subVectors(t,e),kn.cross(ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),kn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Bn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;hs.subVectors(s,n),fs.subVectors(r,n),To.subVectors(t,n);const c=hs.dot(To),l=fs.dot(To);if(c<=0&&l<=0)return e.copy(n);Ao.subVectors(t,s);const u=hs.dot(Ao),f=fs.dot(Ao);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(hs,o);Ro.subVectors(t,r);const d=hs.dot(Ro),g=fs.dot(Ro);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(fs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Dc.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Dc,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(hs,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Io(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class pe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ae.workingColorSpace){if(t=Mh(t,1),e=an(e,0,1),n=an(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Io(o,r,t+1/3),this.g=Io(o,r,t),this.b=Io(o,r,t-1/3)}return Ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){const n=Zl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return Ae.fromWorkingColorSpace(dn.copy(this),t),Math.round(an(dn.r*255,0,255))*65536+Math.round(an(dn.g*255,0,255))*256+Math.round(an(dn.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,s=dn.g,r=dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=Pn){Ae.fromWorkingColorSpace(dn.copy(this),t);const e=dn.r,n=dn.g,s=dn.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Er);const n=mo(vi.h,Er.h,e),s=mo(vi.s,Er.s,e),r=mo(vi.l,Er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new pe;pe.NAMES=Zl;let Oh=0;class es extends Fs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=ui(),this.name="",this.blending=Ts,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Ko,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Le extends es{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const je=new L,Tr=new Ut;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Na&&(t.usage=this.usage),t}}class Jl extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jl extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class be extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zh=0;const zn=new Re,Do=new Ze,ds=new L,Un=new ts,Ws=new ts,sn=new L;class Xe extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wl(t)?jl:Jl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Un.min,Ws.min),Un.expandByPoint(sn),sn.addVectors(Un.max,Ws.max),Un.expandByPoint(sn)):(Un.expandByPoint(Ws.min),Un.expandByPoint(Ws.max))}Un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)sn.fromBufferAttribute(a,l),c&&(ds.fromBufferAttribute(t,l),sn.add(ds)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new L,c[I]=new L;const l=new L,u=new L,f=new L,h=new Ut,d=new Ut,g=new Ut,_=new L,m=new L;function p(I,S,y){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,y),h.fromBufferAttribute(r,I),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(l),f.sub(l),d.sub(h),g.sub(h);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),a[I].add(_),a[S].add(_),a[y].add(_),c[I].add(m),c[S].add(m),c[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,S=E.length;I<S;++I){const y=E[I],N=y.start,J=y.count;for(let Q=N,W=N+J;Q<W;Q+=3)p(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const b=new L,v=new L,U=new L,A=new L;function P(I){U.fromBufferAttribute(s,I),A.copy(U);const S=a[I];b.copy(S),b.sub(U.multiplyScalar(U.dot(S))).normalize(),v.crossVectors(A,S);const N=v.dot(c[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,N)}for(let I=0,S=E.length;I<S;++I){const y=E[I],N=y.start,J=y.count;for(let Q=N,W=N+J;Q<W;Q+=3)P(t.getX(Q+0)),P(t.getX(Q+1)),P(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,f=new L;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new Re,Ui=new $l,Ar=new Os,Nc=new L,Rr=new L,Cr=new L,Pr=new L,Uo=new L,Lr=new L,Fc=new L,Ir=new L;class V extends Ze{constructor(t=new Xe,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(Uo.fromBufferAttribute(f,t),o?Lr.addScaledVector(Uo,u):Lr.addScaledVector(Uo.sub(e),u))}e.add(Lr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(Ar.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Ar,Nc)===null||Ui.origin.distanceToSquared(Nc)>(t.far-t.near)**2))&&(Uc.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,U=b;v<U;v+=3){const A=a.getX(v),P=a.getX(v+1),I=a.getX(v+2);s=Dr(this,p,t,n,l,u,f,A,P,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);s=Dr(this,o,t,n,l,u,f,E,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),b=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,U=b;v<U;v+=3){const A=v,P=v+1,I=v+2;s=Dr(this,p,t,n,l,u,f,A,P,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,b=m+1,v=m+2;s=Dr(this,o,t,n,l,u,f,E,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Bh(i,t,e,n,s,r,o,a){let c;if(t.side===gn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ri,a),c===null)return null;Ir.copy(a),Ir.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ir);return l<e.near||l>e.far?null:{distance:l,point:Ir.clone(),object:i}}function Dr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Rr),i.getVertexPosition(c,Cr),i.getVertexPosition(l,Pr);const u=Bh(i,t,e,n,Rr,Cr,Pr,Fc);if(u){const f=new L;Bn.getBarycoord(Fc,Rr,Cr,Pr,f),s&&(u.uv=Bn.getInterpolatedAttribute(s,a,c,l,f,new Ut)),r&&(u.uv1=Bn.getInterpolatedAttribute(r,a,c,l,f,new Ut)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,c,l,f,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new L,materialIndex:0};Bn.getNormal(Rr,Cr,Pr,h.normal),u.face=h,u.barycoord=f}return u}class ne extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(f,2));function g(_,m,p,E,b,v,U,A,P,I,S){const y=v/P,N=U/I,J=v/2,Q=U/2,W=A/2,Y=P+1,B=I+1;let k=0,H=0;const dt=new L;for(let yt=0;yt<B;yt++){const bt=yt*N-Q;for(let Ot=0;Ot<Y;Ot++){const Zt=Ot*y-J;dt[_]=Zt*E,dt[m]=bt*b,dt[p]=W,l.push(dt.x,dt.y,dt.z),dt[_]=0,dt[m]=0,dt[p]=A>0?1:-1,u.push(dt.x,dt.y,dt.z),f.push(Ot/P),f.push(1-yt/I),k+=1}}for(let yt=0;yt<I;yt++)for(let bt=0;bt<P;bt++){const Ot=h+bt+Y*yt,Zt=h+bt+Y*(yt+1),at=h+(bt+1)+Y*(yt+1),nt=h+(bt+1)+Y*yt;c.push(Ot,Zt,nt),c.push(Zt,at,nt),H+=6}a.addGroup(d,H,S),d+=H,h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function bn(i){const t={};for(let e=0;e<i.length;e++){const n=Us(i[e]);for(const s in n)t[s]=n[s]}return t}function Vh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const Hh={clone:Us,merge:bn};var Gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends es{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gh,this.fragmentShader=kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Vh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ql extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new L,Oc=new Ut,zc=new Ut;class Nn extends Ql{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,zc),e.subVectors(zc,Oc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(po*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class Wh extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nn(ps,ms,t,e);s.layers=this.layers,this.add(s);const r=new Nn(ps,ms,t,e);r.layers=this.layers,this.add(r);const o=new Nn(ps,ms,t,e);o.layers=this.layers,this.add(o);const a=new Nn(ps,ms,t,e);a.layers=this.layers,this.add(a);const c=new Nn(ps,ms,t,e);c.layers=this.layers,this.add(c);const l=new Nn(ps,ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tu extends xn{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ps,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xh extends Ji{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ne(5,5,5),r=new Ci({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:bi});r.uniforms.tEquirect.value=e;const o=new V(s,r),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=Zn),new Wh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const No=new L,qh=new L,$h=new xe;class Bi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=No.subVectors(n,e).cross(qh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(No),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$h.getNormalMatrix(t),s=this.coplanarPoint(No).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Os,Ur=new L;class Qa{constructor(t=new Bi,e=new Bi,n=new Bi,s=new Bi,r=new Bi,o=new Bi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],b=s[14],v=s[15];if(n[0].setComponents(c-r,h-l,m-d,v-p).normalize(),n[1].setComponents(c+r,h+l,m+d,v+p).normalize(),n[2].setComponents(c+o,h+u,m+g,v+E).normalize(),n[3].setComponents(c-o,h-u,m-g,v-E).normalize(),n[4].setComponents(c-a,h-f,m-_,v-b).normalize(),e===ci)n[5].setComponents(c+a,h+f,m+_,v+b).normalize();else if(e===to)n[5].setComponents(a,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ur.x=s.normal.x>0?t.max.x:t.min.x,Ur.y=s.normal.y>0?t.max.y:t.min.y,Ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yh(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class qe extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*h-o;for(let b=0;b<l;b++){const v=b*f-r;g.push(v,-E,0),_.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const b=E+l*p,v=E+l*(p+1),U=E+1+l*(p+1),A=E+1+l*p;d.push(b,v,A),d.push(v,U,A)}this.setIndex(d),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jh=`#ifdef USE_ALPHAHASH
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
#endif`,jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ef=`#ifdef USE_AOMAP
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
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
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
#endif`,rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lf=`#ifdef USE_IRIDESCENCE
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
#endif`,uf=`#ifdef USE_BUMPMAP
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vf=`#define PI 3.141592653589793
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
} // validated`,Mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yf=`vec3 transformedNormal = objectNormal;
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
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
}`,zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hf=`uniform bool receiveShadow;
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
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$f=`PhysicalMaterial material;
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
#endif`,Yf=`struct PhysicalMaterial {
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
}`,Zf=`
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,td=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rd=`#if defined( USE_POINTS_UV )
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
#endif`,od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ld=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_d=`#ifdef USE_NORMALMAP
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
#endif`,vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ud=`float getShadowMask() {
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
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,Bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
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
#endif`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jd=`uniform sampler2D t2D;
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`#include <common>
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
}`,np=`#if DEPTH_PACKING == 3200
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
}`,ip=`#define DISTANCE
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
}`,sp=`#define DISTANCE
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`uniform float scale;
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
}`,cp=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,up=`uniform vec3 diffuse;
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
}`,hp=`#define LAMBERT
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
}`,fp=`#define LAMBERT
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
}`,dp=`#define MATCAP
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
}`,pp=`#define MATCAP
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
}`,mp=`#define NORMAL
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
}`,gp=`#define NORMAL
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
}`,xp=`#define PHONG
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
}`,_p=`#define PHONG
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
}`,vp=`#define STANDARD
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
}`,Mp=`#define STANDARD
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
}`,yp=`#define TOON
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
}`,Sp=`#define TOON
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
}`,wp=`uniform float size;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Ep=`#include <common>
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
}`,Tp=`uniform vec3 color;
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
}`,Ap=`uniform float rotation;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:Zh,alphahash_pars_fragment:Jh,alphamap_fragment:jh,alphamap_pars_fragment:Kh,alphatest_fragment:Qh,alphatest_pars_fragment:tf,aomap_fragment:ef,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:rf,begin_vertex:of,beginnormal_vertex:af,bsdfs:cf,iridescence_fragment:lf,bumpmap_pars_fragment:uf,clipping_planes_fragment:hf,clipping_planes_pars_fragment:ff,clipping_planes_pars_vertex:df,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:xf,color_vertex:_f,common:vf,cube_uv_reflection_fragment:Mf,defaultnormal_vertex:yf,displacementmap_pars_vertex:Sf,displacementmap_vertex:wf,emissivemap_fragment:bf,emissivemap_pars_fragment:Ef,colorspace_fragment:Tf,colorspace_pars_fragment:Af,envmap_fragment:Rf,envmap_common_pars_fragment:Cf,envmap_pars_fragment:Pf,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Gf,envmap_vertex:If,fog_vertex:Df,fog_pars_vertex:Uf,fog_fragment:Nf,fog_pars_fragment:Ff,gradientmap_pars_fragment:Of,lightmap_pars_fragment:zf,lights_lambert_fragment:Bf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Hf,lights_toon_fragment:kf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:qf,lights_physical_fragment:$f,lights_physical_pars_fragment:Yf,lights_fragment_begin:Zf,lights_fragment_maps:Jf,lights_fragment_end:jf,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:td,logdepthbuf_vertex:ed,map_fragment:nd,map_pars_fragment:id,map_particle_fragment:sd,map_particle_pars_fragment:rd,metalnessmap_fragment:od,metalnessmap_pars_fragment:ad,morphinstance_vertex:cd,morphcolor_vertex:ld,morphnormal_vertex:ud,morphtarget_pars_vertex:hd,morphtarget_vertex:fd,normal_fragment_begin:dd,normal_fragment_maps:pd,normal_pars_fragment:md,normal_pars_vertex:gd,normal_vertex:xd,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:vd,clearcoat_normal_fragment_maps:Md,clearcoat_pars_fragment:yd,iridescence_pars_fragment:Sd,opaque_fragment:wd,packing:bd,premultiplied_alpha_fragment:Ed,project_vertex:Td,dithering_fragment:Ad,dithering_pars_fragment:Rd,roughnessmap_fragment:Cd,roughnessmap_pars_fragment:Pd,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Id,shadowmap_vertex:Dd,shadowmask_pars_fragment:Ud,skinbase_vertex:Nd,skinning_pars_vertex:Fd,skinning_vertex:Od,skinnormal_vertex:zd,specularmap_fragment:Bd,specularmap_pars_fragment:Vd,tonemapping_fragment:Hd,tonemapping_pars_fragment:Gd,transmission_fragment:kd,transmission_pars_fragment:Wd,uv_pars_fragment:Xd,uv_pars_vertex:qd,uv_vertex:$d,worldpos_vertex:Yd,background_vert:Zd,background_frag:Jd,backgroundCube_vert:jd,backgroundCube_frag:Kd,cube_vert:Qd,cube_frag:tp,depth_vert:ep,depth_frag:np,distanceRGBA_vert:ip,distanceRGBA_frag:sp,equirect_vert:rp,equirect_frag:op,linedashed_vert:ap,linedashed_frag:cp,meshbasic_vert:lp,meshbasic_frag:up,meshlambert_vert:hp,meshlambert_frag:fp,meshmatcap_vert:dp,meshmatcap_frag:pp,meshnormal_vert:mp,meshnormal_frag:gp,meshphong_vert:xp,meshphong_frag:_p,meshphysical_vert:vp,meshphysical_frag:Mp,meshtoon_vert:yp,meshtoon_frag:Sp,points_vert:wp,points_frag:bp,shadow_vert:Ep,shadow_frag:Tp,sprite_vert:Ap,sprite_frag:Rp},Wt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},$n={basic:{uniforms:bn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:bn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new pe(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:bn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:bn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:bn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new pe(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:bn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:bn([Wt.points,Wt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:bn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:bn([Wt.common,Wt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:bn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:bn([Wt.sprite,Wt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:bn([Wt.common,Wt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:bn([Wt.lights,Wt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};$n.physical={uniforms:bn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Nr={r:0,b:0,g:0},Fi=new Tn,Cp=new Re;function Pp(i,t,e,n,s,r,o){const a=new pe(0);let c=r===!0?0:1,l,u,f=null,h=0,d=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function _(E){let b=!1;const v=g(E);v===null?p(a,c):v&&v.isColor&&(p(v,1),b=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===so)?(u===void 0&&(u=new V(new ne(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Us($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Fi.copy(b.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(Fi)),u.material.toneMapped=Ae.getTransfer(v.colorSpace)!==Ue,(f!==v||h!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new V(new qe(2,2),new Ci({name:"BackgroundMaterial",uniforms:Us($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ae.getTransfer(v.colorSpace)!==Ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,h=v.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,b){E.getRGB(Nr,Kl(i)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:_,addToRenderList:m}}function Lp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(y,N,J,Q,W){let Y=!1;const B=f(Q,J,N);r!==B&&(r=B,l(r.object)),Y=d(y,Q,J,W),Y&&g(y,Q,J,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(y,N,J,Q),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,N,J){const Q=J.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let Y=W[N.id];Y===void 0&&(Y={},W[N.id]=Y);let B=Y[Q];return B===void 0&&(B=h(c()),Y[Q]=B),B}function h(y){const N=[],J=[],Q=[];for(let W=0;W<e;W++)N[W]=0,J[W]=0,Q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:J,attributeDivisors:Q,object:y,attributes:{},index:null}}function d(y,N,J,Q){const W=r.attributes,Y=N.attributes;let B=0;const k=J.getAttributes();for(const H in k)if(k[H].location>=0){const yt=W[H];let bt=Y[H];if(bt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(bt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(bt=y.instanceColor)),yt===void 0||yt.attribute!==bt||bt&&yt.data!==bt.data)return!0;B++}return r.attributesNum!==B||r.index!==Q}function g(y,N,J,Q){const W={},Y=N.attributes;let B=0;const k=J.getAttributes();for(const H in k)if(k[H].location>=0){let yt=Y[H];yt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor));const bt={};bt.attribute=yt,yt&&yt.data&&(bt.data=yt.data),W[H]=bt,B++}r.attributes=W,r.attributesNum=B,r.index=Q}function _(){const y=r.newAttributes;for(let N=0,J=y.length;N<J;N++)y[N]=0}function m(y){p(y,0)}function p(y,N){const J=r.newAttributes,Q=r.enabledAttributes,W=r.attributeDivisors;J[y]=1,Q[y]===0&&(i.enableVertexAttribArray(y),Q[y]=1),W[y]!==N&&(i.vertexAttribDivisor(y,N),W[y]=N)}function E(){const y=r.newAttributes,N=r.enabledAttributes;for(let J=0,Q=N.length;J<Q;J++)N[J]!==y[J]&&(i.disableVertexAttribArray(J),N[J]=0)}function b(y,N,J,Q,W,Y,B){B===!0?i.vertexAttribIPointer(y,N,J,W,Y):i.vertexAttribPointer(y,N,J,Q,W,Y)}function v(y,N,J,Q){_();const W=Q.attributes,Y=J.getAttributes(),B=N.defaultAttributeValues;for(const k in Y){const H=Y[k];if(H.location>=0){let dt=W[k];if(dt===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor)),dt!==void 0){const yt=dt.normalized,bt=dt.itemSize,Ot=t.get(dt);if(Ot===void 0)continue;const Zt=Ot.buffer,at=Ot.type,nt=Ot.bytesPerElement,_t=at===i.INT||at===i.UNSIGNED_INT||dt.gpuType===qa;if(dt.isInterleavedBufferAttribute){const Mt=dt.data,Dt=Mt.stride,pt=dt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Et=0;Et<H.locationSize;Et++)p(H.location+Et,Mt.meshPerAttribute);y.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Et=0;Et<H.locationSize;Et++)m(H.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Et=0;Et<H.locationSize;Et++)b(H.location+Et,bt/H.locationSize,at,yt,Dt*nt,(pt+bt/H.locationSize*Et)*nt,_t)}else{if(dt.isInstancedBufferAttribute){for(let Mt=0;Mt<H.locationSize;Mt++)p(H.location+Mt,dt.meshPerAttribute);y.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Mt=0;Mt<H.locationSize;Mt++)m(H.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Mt=0;Mt<H.locationSize;Mt++)b(H.location+Mt,bt/H.locationSize,at,yt,bt*nt,bt/H.locationSize*Mt*nt,_t)}}else if(B!==void 0){const yt=B[k];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(H.location,yt);break;case 3:i.vertexAttrib3fv(H.location,yt);break;case 4:i.vertexAttrib4fv(H.location,yt);break;default:i.vertexAttrib1fv(H.location,yt)}}}}E()}function U(){I();for(const y in n){const N=n[y];for(const J in N){const Q=N[J];for(const W in Q)u(Q[W].object),delete Q[W];delete N[J]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const N=n[y.id];for(const J in N){const Q=N[J];for(const W in Q)u(Q[W].object),delete Q[W];delete N[J]}delete n[y.id]}function P(y){for(const N in n){const J=n[N];if(J[y.id]===void 0)continue;const Q=J[y.id];for(const W in Q)u(Q[W].object),delete Q[W];delete J[y.id]}}function I(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Ip(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function c(l,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Dp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Xn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==fi&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Jn&&!I)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:U,maxSamples:A}}function Up(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Bi,a=new xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const E=r?0:n,b=E*4;let v=p.clippingState||null;c.value=v,v=u(g,h,b,d);for(let U=0;U!==b;++U)v[U]=e[U];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=d;b!==_;++b,v+=4)o.copy(f[b]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Np(i){let t=new WeakMap;function e(o,a){return a===oa?o.mapping=Ps:a===aa&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===oa||a===aa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Xh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class nu extends Ql{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ws=4,Bc=[.125,.215,.35,.446,.526,.582],ki=20,Fo=new nu,Vc=new pe;let Oo=null,zo=0,Bo=0,Vo=!1;const Vi=(1+Math.sqrt(5))/2,gs=1/Vi,Hc=[new L(-Vi,gs,0),new L(Vi,gs,0),new L(-gs,0,Vi),new L(gs,0,Vi),new L(0,Vi,-gs),new L(0,Vi,gs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Gc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Oo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oo,zo,Bo),this._renderer.xr.enabled=Vo,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:dr,format:Xn,colorSpace:Ns,depthBuffer:!1},s=kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fp(r)),this._blurMaterial=Op(r,t,e)}return s}_compileMaterial(t){const e=new V(this._lodPlanes[0],t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,n,s){const a=new Nn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Vc),u.toneMapping=li,u.autoClear=!1;const d=new Le({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new V(new ne,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Vc),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):E===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const b=this._cubeSize;Fr(s,E*b,p>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ps||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new V(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Fr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Fo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hc[(s-r-1)%Hc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new V(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ki-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let E=0;for(let P=0;P<ki;++P){const I=P/_,S=Math.exp(-I*I/2);p.push(S),P===0?E+=S:P<m&&(E+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/E;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const v=this._sizeLods[s],U=3*v*(s>b-ws?s-b+ws:0),A=4*(this._cubeSize-v);Fr(e,U,A,3*v,2*v),c.setRenderTarget(e),c.render(f,Fo)}}function Fp(i){const t=[],e=[],n=[];let s=i;const r=i-ws+1+Bc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ws?c=Bc[o-i+ws-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),b=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let A=0;A<d;A++){const P=A%3*2/3-1,I=A>2?0:-1,S=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];E.set(S,_*g*A),b.set(h,m*g*A);const y=[A,A,A,A,A,A];v.set(y,p*g*A)}const U=new Xe;U.setAttribute("position",new rn(E,_)),U.setAttribute("uv",new rn(b,m)),U.setAttribute("faceIndex",new rn(v,p)),t.push(U),s>ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kc(i,t,e){const n=new Ji(i,t,e);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Op(i,t,e){const n=new Float32Array(ki),s=new L(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Wc(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Xc(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function tc(){return`

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
	`}function zp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===oa||c===aa,u=c===Ps||c===Ls;if(l||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Gc(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Gc(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Bp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&tr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vp(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let b=0,v=E.length;b<v;b+=3){const U=E[b+0],A=E[b+1],P=E[b+2];h.push(U,A,A,P,P,U)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,v=E.length/3-1;b<v;b+=3){const U=b+0,A=b+1,P=b+2;h.push(U,A,A,P,P,U)}}else return;const m=new(Wl(h)?jl:Jl)(h,1);m.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Hp(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function l(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Gp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function kp(i,t,e){const n=new WeakMap,s=new Oe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let y=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let U=a.attributes.position.count*v,A=1;U>t.maxTextureSize&&(A=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const P=new Float32Array(U*A*4*f),I=new ql(P,U,A,f);I.type=Jn,I.needsUpdate=!0;const S=v*4;for(let N=0;N<f;N++){const J=p[N],Q=E[N],W=b[N],Y=U*A*4*N;for(let B=0;B<J.count;B++){const k=B*S;g===!0&&(s.fromBufferAttribute(J,B),P[Y+k+0]=s.x,P[Y+k+1]=s.y,P[Y+k+2]=s.z,P[Y+k+3]=0),_===!0&&(s.fromBufferAttribute(Q,B),P[Y+k+4]=s.x,P[Y+k+5]=s.y,P[Y+k+6]=s.z,P[Y+k+7]=0),m===!0&&(s.fromBufferAttribute(W,B),P[Y+k+8]=s.x,P[Y+k+9]=s.y,P[Y+k+10]=s.z,P[Y+k+11]=W.itemSize===4?s.w:1)}}h={count:f,texture:I,size:new Ut(U,A)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Wp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class iu extends xn{constructor(t,e,n,s,r,o,a,c,l,u=As){if(u!==As&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===As&&(n=Zi),n===void 0&&u===Ds&&(n=Is),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fn,this.minFilter=c!==void 0?c:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const su=new xn,qc=new iu(1,1),ru=new ql,ou=new Ch,au=new tu,$c=[],Yc=[],Zc=new Float32Array(16),Jc=new Float32Array(9),jc=new Float32Array(4);function zs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=$c[s];if(r===void 0&&(r=new Float32Array(s),$c[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oo(i,t){let e=Yc[t];e===void 0&&(e=new Int32Array(t),Yc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function $p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function Zp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;jc.set(n),i.uniformMatrix2fv(this.addr,!1,jc),en(e,n)}}function Jp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Jc.set(n),i.uniformMatrix3fv(this.addr,!1,Jc),en(e,n)}}function jp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Zc.set(n),i.uniformMatrix4fv(this.addr,!1,Zc),en(e,n)}}function Kp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function n0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function o0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qc.compareFunction=kl,r=qc):r=su,e.setTexture2D(t||r,s)}function a0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ou,s)}function c0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||au,s)}function l0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ru,s)}function u0(i){switch(i){case 5126:return Xp;case 35664:return qp;case 35665:return $p;case 35666:return Yp;case 35674:return Zp;case 35675:return Jp;case 35676:return jp;case 5124:case 35670:return Kp;case 35667:case 35671:return Qp;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return l0}}function h0(i,t){i.uniform1fv(this.addr,t)}function f0(i,t){const e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function d0(i,t){const e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function p0(i,t){const e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function m0(i,t){const e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function g0(i,t){const e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function x0(i,t){const e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _0(i,t){i.uniform1iv(this.addr,t)}function v0(i,t){i.uniform2iv(this.addr,t)}function M0(i,t){i.uniform3iv(this.addr,t)}function y0(i,t){i.uniform4iv(this.addr,t)}function S0(i,t){i.uniform1uiv(this.addr,t)}function w0(i,t){i.uniform2uiv(this.addr,t)}function b0(i,t){i.uniform3uiv(this.addr,t)}function E0(i,t){i.uniform4uiv(this.addr,t)}function T0(i,t,e){const n=this.cache,s=t.length,r=oo(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||su,r[o])}function A0(i,t,e){const n=this.cache,s=t.length,r=oo(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ou,r[o])}function R0(i,t,e){const n=this.cache,s=t.length,r=oo(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||au,r[o])}function C0(i,t,e){const n=this.cache,s=t.length,r=oo(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ru,r[o])}function P0(i){switch(i){case 5126:return h0;case 35664:return f0;case 35665:return d0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return x0;case 5124:case 35670:return _0;case 35667:case 35671:return v0;case 35668:case 35672:return M0;case 35669:case 35673:return y0;case 5125:return S0;case 36294:return w0;case 36295:return b0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}class L0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=u0(e.type)}}class I0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P0(e.type)}}class D0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function Kc(i,t){i.seq.push(t),i.map[t.id]=t}function U0(i,t,e){const n=i.name,s=n.length;for(Ho.lastIndex=0;;){const r=Ho.exec(n),o=Ho.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Kc(e,l===void 0?new L0(a,i,t):new I0(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new D0(a),Kc(e,f)),e=f}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);U0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Qc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const N0=37297;let F0=0;function O0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const tl=new xe;function z0(i){Ae._getMatrix(tl,Ae.workingColorSpace,i);const t=`mat3( ${tl.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(i)){case ro:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function el(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+O0(i.getShaderSource(t),o)}else return s}function B0(i,t){const e=z0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function V0(i,t){let e;switch(t){case nh:e="Linear";break;case ih:e="Reinhard";break;case sh:e="Cineon";break;case rh:e="ACESFilmic";break;case ah:e="AgX";break;case ch:e="Neutral";break;case oh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Or=new L;function H0(){Ae.getLuminanceCoefficients(Or);const i=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function k0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function er(i){return i!==""}function nl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function il(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(i){return i.replace(X0,$0)}const q0=new Map;function $0(i,t){let e=_e[t];if(e===void 0){const n=q0.get(t);if(n!==void 0)e=_e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oa(e)}const Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(i){return i.replace(Y0,Z0)}function Z0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function J0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function j0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ps:case Ls:t="ENVMAP_TYPE_CUBE";break;case so:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function Q0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ll:t="ENVMAP_BLENDING_MULTIPLY";break;case th:t="ENVMAP_BLENDING_MIX";break;case eh:t="ENVMAP_BLENDING_ADD";break}return t}function tm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function em(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=J0(e),l=j0(e),u=K0(e),f=Q0(e),h=tm(e),d=G0(e),g=k0(r),_=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),p.length>0&&(p+=`
`)):(m=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?_e.tonemapping_pars_fragment:"",e.toneMapping!==li?V0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,B0("linearToOutputTexel",e.outputColorSpace),H0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),o=Oa(o),o=nl(o,e),o=il(o,e),a=Oa(a),a=nl(a,e),a=il(a,e),o=sl(o),a=sl(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+o,v=E+p+a,U=Qc(s,s.VERTEX_SHADER,b),A=Qc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,U),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(N){if(i.debug.checkShaderErrors){const J=s.getProgramInfoLog(_).trim(),Q=s.getShaderInfoLog(U).trim(),W=s.getShaderInfoLog(A).trim();let Y=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,U,A);else{const k=el(s,U,"vertex"),H=el(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+J+`
`+k+`
`+H)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Q===""||W==="")&&(B=!1);B&&(N.diagnostics={runnable:Y,programLog:J,vertexShader:{log:Q,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(U),s.deleteShader(A),I=new Kr(s,_),S=W0(s,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,N0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=A,this}let nm=0;class im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sm(t),e.set(t,n)),n}}class sm{constructor(t){this.id=nm++,this.code=t,this.usedTimes=0}}function rm(i,t,e,n,s,r,o){const a=new Yl,c=new im,l=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,N,J,Q){const W=J.fog,Y=Q.geometry,B=S.isMeshStandardMaterial?J.environment:null,k=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),H=k&&k.mapping===so?k.image.height:null,dt=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,bt=yt!==void 0?yt.length:0;let Ot=0;Y.morphAttributes.position!==void 0&&(Ot=1),Y.morphAttributes.normal!==void 0&&(Ot=2),Y.morphAttributes.color!==void 0&&(Ot=3);let Zt,at,nt,_t;if(dt){const Se=$n[dt];Zt=Se.vertexShader,at=Se.fragmentShader}else Zt=S.vertexShader,at=S.fragmentShader,c.update(S),nt=c.getVertexShaderID(S),_t=c.getFragmentShaderID(S);const Mt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),pt=Q.isInstancedMesh===!0,Et=Q.isBatchedMesh===!0,Jt=!!S.map,rt=!!S.matcap,Tt=!!k,O=!!S.aoMap,Gt=!!S.lightMap,At=!!S.bumpMap,Xt=!!S.normalMap,It=!!S.displacementMap,ee=!!S.emissiveMap,qt=!!S.metalnessMap,C=!!S.roughnessMap,w=S.anisotropy>0,tt=S.clearcoat>0,xt=S.dispersion>0,z=S.iridescence>0,Z=S.sheen>0,st=S.transmission>0,it=w&&!!S.anisotropyMap,mt=tt&&!!S.clearcoatMap,Ft=tt&&!!S.clearcoatNormalMap,ut=tt&&!!S.clearcoatRoughnessMap,Rt=z&&!!S.iridescenceMap,Ht=z&&!!S.iridescenceThicknessMap,Yt=Z&&!!S.sheenColorMap,Pt=Z&&!!S.sheenRoughnessMap,re=!!S.specularMap,oe=!!S.specularColorMap,ae=!!S.specularIntensityMap,$=st&&!!S.transmissionMap,zt=st&&!!S.thicknessMap,lt=!!S.gradientMap,vt=!!S.alphaMap,Ct=S.alphaTest>0,ht=!!S.alphaHash,le=!!S.extensions;let ce=li;S.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(ce=i.toneMapping);const He={shaderID:dt,shaderType:S.type,shaderName:S.name,vertexShader:Zt,fragmentShader:at,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Et,batchingColor:Et&&Q._colorsTexture!==null,instancing:pt,instancingColor:pt&&Q.instanceColor!==null,instancingMorph:pt&&Q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Mt===null?i.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ns,alphaToCoverage:!!S.alphaToCoverage,map:Jt,matcap:rt,envMap:Tt,envMapMode:Tt&&k.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:Gt,bumpMap:At,normalMap:Xt,displacementMap:h&&It,emissiveMap:ee,normalMapObjectSpace:Xt&&S.normalMapType===fh,normalMapTangentSpace:Xt&&S.normalMapType===Gl,metalnessMap:qt,roughnessMap:C,anisotropy:w,anisotropyMap:it,clearcoat:tt,clearcoatMap:mt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:ut,dispersion:xt,iridescence:z,iridescenceMap:Rt,iridescenceThicknessMap:Ht,sheen:Z,sheenColorMap:Yt,sheenRoughnessMap:Pt,specularMap:re,specularColorMap:oe,specularIntensityMap:ae,transmission:st,transmissionMap:$,thicknessMap:zt,gradientMap:lt,opaque:S.transparent===!1&&S.blending===Ts&&S.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ct,alphaHash:ht,combine:S.combine,mapUv:Jt&&_(S.map.channel),aoMapUv:O&&_(S.aoMap.channel),lightMapUv:Gt&&_(S.lightMap.channel),bumpMapUv:At&&_(S.bumpMap.channel),normalMapUv:Xt&&_(S.normalMap.channel),displacementMapUv:It&&_(S.displacementMap.channel),emissiveMapUv:ee&&_(S.emissiveMap.channel),metalnessMapUv:qt&&_(S.metalnessMap.channel),roughnessMapUv:C&&_(S.roughnessMap.channel),anisotropyMapUv:it&&_(S.anisotropyMap.channel),clearcoatMapUv:mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(S.sheenRoughnessMap.channel),specularMapUv:re&&_(S.specularMap.channel),specularColorMapUv:oe&&_(S.specularColorMap.channel),specularIntensityMapUv:ae&&_(S.specularIntensityMap.channel),transmissionMapUv:$&&_(S.transmissionMap.channel),thicknessMapUv:zt&&_(S.thicknessMap.channel),alphaMapUv:vt&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Xt||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!Y.attributes.uv&&(Jt||vt),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Dt,skinning:Q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ot,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:Jt&&S.map.isVideoTexture===!0&&Ae.getTransfer(S.map.colorSpace)===Ue,decodeVideoTextureEmissive:ee&&S.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(S.emissiveMap.colorSpace)===Ue,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Be,flipSided:S.side===gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:le&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&S.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)y.push(N),y.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(E(y,S),b(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const y=g[S.type];let N;if(y){const J=$n[y];N=Hh.clone(J.uniforms)}else N=S.uniforms;return N}function U(S,y){let N;for(let J=0,Q=u.length;J<Q;J++){const W=u[J];if(W.cacheKey===y){N=W,++N.usedTimes;break}}return N===void 0&&(N=new em(i,y,S,r),u.push(N)),N}function A(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function P(S){c.remove(S)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:U,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:I}}function om(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function am(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ol(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function al(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,h,d,g,_,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,h){e.length>1&&e.sort(f||am),n.length>1&&n.sort(h||ol),s.length>1&&s.sort(h||ol)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function cm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new al,i.set(n,[o])):s>=r.length?(o=new al,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function lm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new pe};break;case"SpotLight":e={position:new L,direction:new L,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function um(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let hm=0;function fm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dm(i){const t=new lm,e=um(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new Re,o=new Re;function a(l){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,b=0,v=0,U=0,A=0,P=0;l.sort(fm);for(let S=0,y=l.length;S<y;S++){const N=l[S],J=N.color,Q=N.intensity,W=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=J.r*Q,f+=J.g*Q,h+=J.b*Q;else if(N.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(N.sh.coefficients[B],Q);P++}else if(N.isDirectionalLight){const B=t.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const k=N.shadow,H=e.get(N);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=N.shadow.matrix,E++}n.directional[d]=B,d++}else if(N.isSpotLight){const B=t.get(N);B.position.setFromMatrixPosition(N.matrixWorld),B.color.copy(J).multiplyScalar(Q),B.distance=W,B.coneCos=Math.cos(N.angle),B.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),B.decay=N.decay,n.spot[_]=B;const k=N.shadow;if(N.map&&(n.spotLightMap[U]=N.map,U++,k.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[_]=k.matrix,N.castShadow){const H=e.get(N);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=Y,v++}_++}else if(N.isRectAreaLight){const B=t.get(N);B.color.copy(J).multiplyScalar(Q),B.halfWidth.set(N.width*.5,0,0),B.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=B,m++}else if(N.isPointLight){const B=t.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),B.distance=N.distance,B.decay=N.decay,N.castShadow){const k=N.shadow,H=e.get(N);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=N.shadow.matrix,b++}n.point[g]=B,g++}else if(N.isHemisphereLight){const B=t.get(N);B.skyColor.copy(N.color).multiplyScalar(Q),B.groundColor.copy(N.groundColor).multiplyScalar(Q),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==v||I.numSpotMaps!==U||I.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=v,I.numSpotMaps=U,I.numLightProbes=P,n.version=hm++)}function c(l,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const b=l[p];if(b.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(b.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function cl(i){const t=new dm(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function pm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new cl(i),t.set(s,[a])):r>=o.length?(a=new cl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class mm extends es{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gm extends es{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_m=`uniform sampler2D shadow_pass;
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
}`;function vm(i,t,e){let n=new Qa;const s=new Ut,r=new Ut,o=new Oe,a=new mm({depthPacking:hh}),c=new gm,l={},u=e.maxTextureSize,f={[Ri]:gn,[gn]:Ri,[Be]:Be},h=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:xm,fragmentShader:_m}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Xe;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new V(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let p=this.type;this.render=function(A,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),J=i.state;J.setBlending(bi),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Q=p!==ai&&this.type===ai,W=p===ai&&this.type!==ai;for(let Y=0,B=A.length;Y<B;Y++){const k=A[Y],H=k.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const dt=H.getFrameExtents();if(s.multiply(dt),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/dt.x),s.x=r.x*dt.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/dt.y),s.y=r.y*dt.y,H.mapSize.y=r.y)),H.map===null||Q===!0||W===!0){const bt=this.type!==ai?{minFilter:Fn,magFilter:Fn}:{};H.map!==null&&H.map.dispose(),H.map=new Ji(s.x,s.y,bt),H.map.texture.name=k.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const yt=H.getViewportCount();for(let bt=0;bt<yt;bt++){const Ot=H.getViewport(bt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),J.viewport(o),H.updateMatrices(k,bt),n=H.getFrustum(),v(P,I,H.camera,k,this.type)}H.isPointLightShadow!==!0&&this.type===ai&&E(H,I),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,N)};function E(A,P){const I=t.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ji(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,I,h,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,I,d,_,null)}function b(A,P,I,S){let y=null;const N=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)y=N;else if(y=I.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const J=y.uuid,Q=P.uuid;let W=l[J];W===void 0&&(W={},l[J]=W);let Y=W[Q];Y===void 0&&(Y=y.clone(),W[Q]=Y,P.addEventListener("dispose",U)),y=Y}if(y.visible=P.visible,y.wireframe=P.wireframe,S===ai?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const J=i.properties.get(y);J.light=I}return y}function v(A,P,I,S,y){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===ai)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const Q=t.update(A),W=A.material;if(Array.isArray(W)){const Y=Q.groups;for(let B=0,k=Y.length;B<k;B++){const H=Y[B],dt=W[H.materialIndex];if(dt&&dt.visible){const yt=b(A,dt,S,y);A.onBeforeShadow(i,A,P,I,Q,yt,H),i.renderBufferDirect(I,null,Q,yt,A,H),A.onAfterShadow(i,A,P,I,Q,yt,H)}}}else if(W.visible){const Y=b(A,W,S,y);A.onBeforeShadow(i,A,P,I,Q,Y,null),i.renderBufferDirect(I,null,Q,Y,A,null),A.onAfterShadow(i,A,P,I,Q,Y,null)}}const J=A.children;for(let Q=0,W=J.length;Q<W;Q++)v(J[Q],P,I,S,y)}function U(A){A.target.removeEventListener("dispose",U);for(const I in l){const S=l[I],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Mm={[Qo]:ta,[ea]:sa,[na]:ra,[Cs]:ia,[ta]:Qo,[sa]:ea,[ra]:na,[ia]:Cs};function ym(i,t){function e(){let $=!1;const zt=new Oe;let lt=null;const vt=new Oe(0,0,0,0);return{setMask:function(Ct){lt!==Ct&&!$&&(i.colorMask(Ct,Ct,Ct,Ct),lt=Ct)},setLocked:function(Ct){$=Ct},setClear:function(Ct,ht,le,ce,He){He===!0&&(Ct*=ce,ht*=ce,le*=ce),zt.set(Ct,ht,le,ce),vt.equals(zt)===!1&&(i.clearColor(Ct,ht,le,ce),vt.copy(zt))},reset:function(){$=!1,lt=null,vt.set(-1,0,0,0)}}}function n(){let $=!1,zt=!1,lt=null,vt=null,Ct=null;return{setReversed:function(ht){if(zt!==ht){const le=t.get("EXT_clip_control");zt?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT);const ce=Ct;Ct=null,this.setClear(ce)}zt=ht},getReversed:function(){return zt},setTest:function(ht){ht?Mt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(ht){lt!==ht&&!$&&(i.depthMask(ht),lt=ht)},setFunc:function(ht){if(zt&&(ht=Mm[ht]),vt!==ht){switch(ht){case Qo:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case na:i.depthFunc(i.EQUAL);break;case ia:i.depthFunc(i.GEQUAL);break;case sa:i.depthFunc(i.GREATER);break;case ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=ht}},setLocked:function(ht){$=ht},setClear:function(ht){Ct!==ht&&(zt&&(ht=1-ht),i.clearDepth(ht),Ct=ht)},reset:function(){$=!1,lt=null,vt=null,Ct=null,zt=!1}}}function s(){let $=!1,zt=null,lt=null,vt=null,Ct=null,ht=null,le=null,ce=null,He=null;return{setTest:function(Se){$||(Se?Mt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(Se){zt!==Se&&!$&&(i.stencilMask(Se),zt=Se)},setFunc:function(Se,ln,un){(lt!==Se||vt!==ln||Ct!==un)&&(i.stencilFunc(Se,ln,un),lt=Se,vt=ln,Ct=un)},setOp:function(Se,ln,un){(ht!==Se||le!==ln||ce!==un)&&(i.stencilOp(Se,ln,un),ht=Se,le=ln,ce=un)},setLocked:function(Se){$=Se},setClear:function(Se){He!==Se&&(i.clearStencil(Se),He=Se)},reset:function(){$=!1,zt=null,lt=null,vt=null,Ct=null,ht=null,le=null,ce=null,He=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,b=null,v=null,U=null,A=null,P=new pe(0,0,0),I=0,S=!1,y=null,N=null,J=null,Q=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=k>=2);let dt=null,yt={};const bt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Zt=new Oe().fromArray(bt),at=new Oe().fromArray(Ot);function nt($,zt,lt,vt){const Ct=new Uint8Array(4),ht=i.createTexture();i.bindTexture($,ht),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<lt;le++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(zt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(zt+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return ht}const _t={};_t[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(i.DEPTH_TEST),o.setFunc(Cs),At(!1),Xt(pc),Mt(i.CULL_FACE),O(bi);function Mt($){u[$]!==!0&&(i.enable($),u[$]=!0)}function Dt($){u[$]!==!1&&(i.disable($),u[$]=!1)}function pt($,zt){return f[$]!==zt?(i.bindFramebuffer($,zt),f[$]=zt,$===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=zt),$===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=zt),!0):!1}function Et($,zt){let lt=d,vt=!1;if($){lt=h.get(zt),lt===void 0&&(lt=[],h.set(zt,lt));const Ct=$.textures;if(lt.length!==Ct.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,le=Ct.length;ht<le;ht++)lt[ht]=i.COLOR_ATTACHMENT0+ht;lt.length=Ct.length,vt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(lt)}function Jt($){return g!==$?(i.useProgram($),g=$,!0):!1}const rt={[Gi]:i.FUNC_ADD,[Ou]:i.FUNC_SUBTRACT,[zu]:i.FUNC_REVERSE_SUBTRACT};rt[Bu]=i.MIN,rt[Vu]=i.MAX;const Tt={[Hu]:i.ZERO,[Gu]:i.ONE,[ku]:i.SRC_COLOR,[jo]:i.SRC_ALPHA,[Zu]:i.SRC_ALPHA_SATURATE,[$u]:i.DST_COLOR,[Xu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[Ko]:i.ONE_MINUS_SRC_ALPHA,[Yu]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[Ju]:i.CONSTANT_COLOR,[ju]:i.ONE_MINUS_CONSTANT_COLOR,[Ku]:i.CONSTANT_ALPHA,[Qu]:i.ONE_MINUS_CONSTANT_ALPHA};function O($,zt,lt,vt,Ct,ht,le,ce,He,Se){if($===bi){_===!0&&(Dt(i.BLEND),_=!1);return}if(_===!1&&(Mt(i.BLEND),_=!0),$!==Fu){if($!==m||Se!==S){if((p!==Gi||v!==Gi)&&(i.blendEquation(i.FUNC_ADD),p=Gi,v=Gi),Se)switch($){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wn:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}E=null,b=null,U=null,A=null,P.set(0,0,0),I=0,m=$,S=Se}return}Ct=Ct||zt,ht=ht||lt,le=le||vt,(zt!==p||Ct!==v)&&(i.blendEquationSeparate(rt[zt],rt[Ct]),p=zt,v=Ct),(lt!==E||vt!==b||ht!==U||le!==A)&&(i.blendFuncSeparate(Tt[lt],Tt[vt],Tt[ht],Tt[le]),E=lt,b=vt,U=ht,A=le),(ce.equals(P)===!1||He!==I)&&(i.blendColor(ce.r,ce.g,ce.b,He),P.copy(ce),I=He),m=$,S=!1}function Gt($,zt){$.side===Be?Dt(i.CULL_FACE):Mt(i.CULL_FACE);let lt=$.side===gn;zt&&(lt=!lt),At(lt),$.blending===Ts&&$.transparent===!1?O(bi):O($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);const vt=$.stencilWrite;a.setTest(vt),vt&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ee($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function At($){y!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),y=$)}function Xt($){$!==Du?(Mt(i.CULL_FACE),$!==N&&($===pc?i.cullFace(i.BACK):$===Uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),N=$}function It($){$!==J&&(B&&i.lineWidth($),J=$)}function ee($,zt,lt){$?(Mt(i.POLYGON_OFFSET_FILL),(Q!==zt||W!==lt)&&(i.polygonOffset(zt,lt),Q=zt,W=lt)):Dt(i.POLYGON_OFFSET_FILL)}function qt($){$?Mt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function C($){$===void 0&&($=i.TEXTURE0+Y-1),dt!==$&&(i.activeTexture($),dt=$)}function w($,zt,lt){lt===void 0&&(dt===null?lt=i.TEXTURE0+Y-1:lt=dt);let vt=yt[lt];vt===void 0&&(vt={type:void 0,texture:void 0},yt[lt]=vt),(vt.type!==$||vt.texture!==zt)&&(dt!==lt&&(i.activeTexture(lt),dt=lt),i.bindTexture($,zt||_t[$]),vt.type=$,vt.texture=zt)}function tt(){const $=yt[dt];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function xt(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function z(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function st(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function it(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ft(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Yt($){Zt.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),Zt.copy($))}function Pt($){at.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),at.copy($))}function re($,zt){let lt=l.get(zt);lt===void 0&&(lt=new WeakMap,l.set(zt,lt));let vt=lt.get($);vt===void 0&&(vt=i.getUniformBlockIndex(zt,$.name),lt.set($,vt))}function oe($,zt){const vt=l.get(zt).get($);c.get(zt)!==vt&&(i.uniformBlockBinding(zt,vt,$.__bindingPointIndex),c.set(zt,vt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},dt=null,yt={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,b=null,v=null,U=null,A=null,P=new pe(0,0,0),I=0,S=!1,y=null,N=null,J=null,Q=null,W=null,Zt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Mt,disable:Dt,bindFramebuffer:pt,drawBuffers:Et,useProgram:Jt,setBlending:O,setMaterial:Gt,setFlipSided:At,setCullFace:Xt,setLineWidth:It,setPolygonOffset:ee,setScissorTest:qt,activeTexture:C,bindTexture:w,unbindTexture:tt,compressedTexImage2D:xt,compressedTexImage3D:z,texImage2D:Rt,texImage3D:Ht,updateUBOMapping:re,uniformBlockBinding:oe,texStorage2D:Ft,texStorage3D:ut,texSubImage2D:Z,texSubImage3D:st,compressedTexSubImage2D:it,compressedTexSubImage3D:mt,scissor:Yt,viewport:Pt,reset:ae}}function ll(i,t,e,n){const s=Sm(n);switch(e){case Fl:return i*t;case zl:return i*t;case Bl:return i*t*2;case Za:return i*t/s.components*s.byteLength;case Ja:return i*t/s.components*s.byteLength;case Vl:return i*t*2/s.components*s.byteLength;case ja:return i*t*2/s.components*s.byteLength;case Ol:return i*t*3/s.components*s.byteLength;case Xn:return i*t*4/s.components*s.byteLength;case Ka:return i*t*4/s.components*s.byteLength;case $r:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:case fa:return Math.max(i,16)*Math.max(t,8)/4;case la:case ha:return Math.max(i,8)*Math.max(t,8)/2;case da:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jr:case Pa:case La:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Hl:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Da:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sm(i){switch(i){case fi:case Dl:return{byteLength:1,components:1};case cr:case Ul:case dr:return{byteLength:2,components:1};case $a:case Ya:return{byteLength:2,components:4};case Zi:case qa:case Jn:return{byteLength:4,components:1};case Nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function wm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return d?new OffscreenCanvas(C,w):eo("canvas")}function _(C,w,tt){let xt=1;const z=qt(C);if((z.width>tt||z.height>tt)&&(xt=tt/Math.max(z.width,z.height)),xt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(xt*z.width),st=Math.floor(xt*z.height);f===void 0&&(f=g(Z,st));const it=w?g(Z,st):f;return it.width=Z,it.height=st,it.getContext("2d").drawImage(C,0,0,Z,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+Z+"x"+st+")."),it}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(C,w,tt,xt,z=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=w;if(w===i.RED&&(tt===i.FLOAT&&(Z=i.R32F),tt===i.HALF_FLOAT&&(Z=i.R16F),tt===i.UNSIGNED_BYTE&&(Z=i.R8)),w===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(Z=i.R8UI),tt===i.UNSIGNED_SHORT&&(Z=i.R16UI),tt===i.UNSIGNED_INT&&(Z=i.R32UI),tt===i.BYTE&&(Z=i.R8I),tt===i.SHORT&&(Z=i.R16I),tt===i.INT&&(Z=i.R32I)),w===i.RG&&(tt===i.FLOAT&&(Z=i.RG32F),tt===i.HALF_FLOAT&&(Z=i.RG16F),tt===i.UNSIGNED_BYTE&&(Z=i.RG8)),w===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(Z=i.RG8UI),tt===i.UNSIGNED_SHORT&&(Z=i.RG16UI),tt===i.UNSIGNED_INT&&(Z=i.RG32UI),tt===i.BYTE&&(Z=i.RG8I),tt===i.SHORT&&(Z=i.RG16I),tt===i.INT&&(Z=i.RG32I)),w===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),tt===i.UNSIGNED_INT&&(Z=i.RGB32UI),tt===i.BYTE&&(Z=i.RGB8I),tt===i.SHORT&&(Z=i.RGB16I),tt===i.INT&&(Z=i.RGB32I)),w===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),tt===i.UNSIGNED_INT&&(Z=i.RGBA32UI),tt===i.BYTE&&(Z=i.RGBA8I),tt===i.SHORT&&(Z=i.RGBA16I),tt===i.INT&&(Z=i.RGBA32I)),w===i.RGB&&tt===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),w===i.RGBA){const st=z?ro:Ae.getTransfer(xt);tt===i.FLOAT&&(Z=i.RGBA32F),tt===i.HALF_FLOAT&&(Z=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(Z=st===Ue?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(C,w){let tt;return C?w===null||w===Zi||w===Is?tt=i.DEPTH24_STENCIL8:w===Jn?tt=i.DEPTH32F_STENCIL8:w===cr&&(tt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zi||w===Is?tt=i.DEPTH_COMPONENT24:w===Jn?tt=i.DEPTH_COMPONENT32F:w===cr&&(tt=i.DEPTH_COMPONENT16),tt}function U(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fn&&C.minFilter!==Zn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function A(C){const w=C.target;w.removeEventListener("dispose",A),I(w),w.isVideoTexture&&u.delete(w)}function P(C){const w=C.target;w.removeEventListener("dispose",P),y(w)}function I(C){const w=n.get(C);if(w.__webglInit===void 0)return;const tt=C.source,xt=h.get(tt);if(xt){const z=xt[w.__cacheKey];z.usedTimes--,z.usedTimes===0&&S(C),Object.keys(xt).length===0&&h.delete(tt)}n.remove(C)}function S(C){const w=n.get(C);i.deleteTexture(w.__webglTexture);const tt=C.source,xt=h.get(tt);delete xt[w.__cacheKey],o.memory.textures--}function y(C){const w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(w.__webglFramebuffer[xt]))for(let z=0;z<w.__webglFramebuffer[xt].length;z++)i.deleteFramebuffer(w.__webglFramebuffer[xt][z]);else i.deleteFramebuffer(w.__webglFramebuffer[xt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[xt])}else{if(Array.isArray(w.__webglFramebuffer))for(let xt=0;xt<w.__webglFramebuffer.length;xt++)i.deleteFramebuffer(w.__webglFramebuffer[xt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let xt=0;xt<w.__webglColorRenderbuffer.length;xt++)w.__webglColorRenderbuffer[xt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[xt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const tt=C.textures;for(let xt=0,z=tt.length;xt<z;xt++){const Z=n.get(tt[xt]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(tt[xt])}n.remove(C)}let N=0;function J(){N=0}function Q(){const C=N;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function W(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function Y(C,w){const tt=n.get(C);if(C.isVideoTexture&&It(C),C.isRenderTargetTexture===!1&&C.version>0&&tt.__version!==C.version){const xt=C.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(tt,C,w);return}}e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+w)}function B(C,w){const tt=n.get(C);if(C.version>0&&tt.__version!==C.version){at(tt,C,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+w)}function k(C,w){const tt=n.get(C);if(C.version>0&&tt.__version!==C.version){at(tt,C,w);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+w)}function H(C,w){const tt=n.get(C);if(C.version>0&&tt.__version!==C.version){nt(tt,C,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+w)}const dt={[ar]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[ca]:i.MIRRORED_REPEAT},yt={[Fn]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[fo]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},bt={[dh]:i.NEVER,[vh]:i.ALWAYS,[ph]:i.LESS,[kl]:i.LEQUAL,[mh]:i.EQUAL,[_h]:i.GEQUAL,[gh]:i.GREATER,[xh]:i.NOTEQUAL};function Ot(C,w){if(w.type===Jn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Zn||w.magFilter===fo||w.magFilter===xr||w.magFilter===qi||w.minFilter===Zn||w.minFilter===fo||w.minFilter===xr||w.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,dt[w.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,dt[w.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,dt[w.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,yt[w.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,yt[w.minFilter]),w.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,bt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Fn||w.minFilter!==xr&&w.minFilter!==qi||w.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Zt(C,w){let tt=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",A));const xt=w.source;let z=h.get(xt);z===void 0&&(z={},h.set(xt,z));const Z=W(w);if(Z!==C.__cacheKey){z[Z]===void 0&&(z[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),z[Z].usedTimes++;const st=z[C.__cacheKey];st!==void 0&&(z[C.__cacheKey].usedTimes--,st.usedTimes===0&&S(w)),C.__cacheKey=Z,C.__webglTexture=z[Z].texture}return tt}function at(C,w,tt){let xt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(xt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(xt=i.TEXTURE_3D);const z=Zt(C,w),Z=w.source;e.bindTexture(xt,C.__webglTexture,i.TEXTURE0+tt);const st=n.get(Z);if(Z.version!==st.__version||z===!0){e.activeTexture(i.TEXTURE0+tt);const it=Ae.getPrimaries(Ae.workingColorSpace),mt=w.colorSpace===Si?null:Ae.getPrimaries(w.colorSpace),Ft=w.colorSpace===Si||it===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let ut=_(w.image,!1,s.maxTextureSize);ut=ee(w,ut);const Rt=r.convert(w.format,w.colorSpace),Ht=r.convert(w.type);let Yt=b(w.internalFormat,Rt,Ht,w.colorSpace,w.isVideoTexture);Ot(xt,w);let Pt;const re=w.mipmaps,oe=w.isVideoTexture!==!0,ae=st.__version===void 0||z===!0,$=Z.dataReady,zt=U(w,ut);if(w.isDepthTexture)Yt=v(w.format===Ds,w.type),ae&&(oe?e.texStorage2D(i.TEXTURE_2D,1,Yt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Yt,ut.width,ut.height,0,Rt,Ht,null));else if(w.isDataTexture)if(re.length>0){oe&&ae&&e.texStorage2D(i.TEXTURE_2D,zt,Yt,re[0].width,re[0].height);for(let lt=0,vt=re.length;lt<vt;lt++)Pt=re[lt],oe?$&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Pt.width,Pt.height,Rt,Ht,Pt.data):e.texImage2D(i.TEXTURE_2D,lt,Yt,Pt.width,Pt.height,0,Rt,Ht,Pt.data);w.generateMipmaps=!1}else oe?(ae&&e.texStorage2D(i.TEXTURE_2D,zt,Yt,ut.width,ut.height),$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,Rt,Ht,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Yt,ut.width,ut.height,0,Rt,Ht,ut.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){oe&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,Yt,re[0].width,re[0].height,ut.depth);for(let lt=0,vt=re.length;lt<vt;lt++)if(Pt=re[lt],w.format!==Xn)if(Rt!==null)if(oe){if($)if(w.layerUpdates.size>0){const Ct=ll(Pt.width,Pt.height,w.format,w.type);for(const ht of w.layerUpdates){const le=Pt.data.subarray(ht*Ct/Pt.data.BYTES_PER_ELEMENT,(ht+1)*Ct/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,ht,Pt.width,Pt.height,1,Rt,le)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Pt.width,Pt.height,ut.depth,Rt,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Yt,Pt.width,Pt.height,ut.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?$&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Pt.width,Pt.height,ut.depth,Rt,Ht,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Yt,Pt.width,Pt.height,ut.depth,0,Rt,Ht,Pt.data)}else{oe&&ae&&e.texStorage2D(i.TEXTURE_2D,zt,Yt,re[0].width,re[0].height);for(let lt=0,vt=re.length;lt<vt;lt++)Pt=re[lt],w.format!==Xn?Rt!==null?oe?$&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,Pt.width,Pt.height,Rt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Yt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?$&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Pt.width,Pt.height,Rt,Ht,Pt.data):e.texImage2D(i.TEXTURE_2D,lt,Yt,Pt.width,Pt.height,0,Rt,Ht,Pt.data)}else if(w.isDataArrayTexture)if(oe){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,Yt,ut.width,ut.height,ut.depth),$)if(w.layerUpdates.size>0){const lt=ll(ut.width,ut.height,w.format,w.type);for(const vt of w.layerUpdates){const Ct=ut.data.subarray(vt*lt/ut.data.BYTES_PER_ELEMENT,(vt+1)*lt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,ut.width,ut.height,1,Rt,Ht,Ct)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Rt,Ht,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,ut.width,ut.height,ut.depth,0,Rt,Ht,ut.data);else if(w.isData3DTexture)oe?(ae&&e.texStorage3D(i.TEXTURE_3D,zt,Yt,ut.width,ut.height,ut.depth),$&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Rt,Ht,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,ut.width,ut.height,ut.depth,0,Rt,Ht,ut.data);else if(w.isFramebufferTexture){if(ae)if(oe)e.texStorage2D(i.TEXTURE_2D,zt,Yt,ut.width,ut.height);else{let lt=ut.width,vt=ut.height;for(let Ct=0;Ct<zt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Yt,lt,vt,0,Rt,Ht,null),lt>>=1,vt>>=1}}else if(re.length>0){if(oe&&ae){const lt=qt(re[0]);e.texStorage2D(i.TEXTURE_2D,zt,Yt,lt.width,lt.height)}for(let lt=0,vt=re.length;lt<vt;lt++)Pt=re[lt],oe?$&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Rt,Ht,Pt):e.texImage2D(i.TEXTURE_2D,lt,Yt,Rt,Ht,Pt);w.generateMipmaps=!1}else if(oe){if(ae){const lt=qt(ut);e.texStorage2D(i.TEXTURE_2D,zt,Yt,lt.width,lt.height)}$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Ht,ut)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Rt,Ht,ut);m(w)&&p(xt),st.__version=Z.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function nt(C,w,tt){if(w.image.length!==6)return;const xt=Zt(C,w),z=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+tt);const Z=n.get(z);if(z.version!==Z.__version||xt===!0){e.activeTexture(i.TEXTURE0+tt);const st=Ae.getPrimaries(Ae.workingColorSpace),it=w.colorSpace===Si?null:Ae.getPrimaries(w.colorSpace),mt=w.colorSpace===Si||st===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Ft=w.isCompressedTexture||w.image[0].isCompressedTexture,ut=w.image[0]&&w.image[0].isDataTexture,Rt=[];for(let vt=0;vt<6;vt++)!Ft&&!ut?Rt[vt]=_(w.image[vt],!0,s.maxCubemapSize):Rt[vt]=ut?w.image[vt].image:w.image[vt],Rt[vt]=ee(w,Rt[vt]);const Ht=Rt[0],Yt=r.convert(w.format,w.colorSpace),Pt=r.convert(w.type),re=b(w.internalFormat,Yt,Pt,w.colorSpace),oe=w.isVideoTexture!==!0,ae=Z.__version===void 0||xt===!0,$=z.dataReady;let zt=U(w,Ht);Ot(i.TEXTURE_CUBE_MAP,w);let lt;if(Ft){oe&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,re,Ht.width,Ht.height);for(let vt=0;vt<6;vt++){lt=Rt[vt].mipmaps;for(let Ct=0;Ct<lt.length;Ct++){const ht=lt[Ct];w.format!==Xn?Yt!==null?oe?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,ht.width,ht.height,Yt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,re,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,ht.width,ht.height,Yt,Pt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,re,ht.width,ht.height,0,Yt,Pt,ht.data)}}}else{if(lt=w.mipmaps,oe&&ae){lt.length>0&&zt++;const vt=qt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,re,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(ut){oe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Rt[vt].width,Rt[vt].height,Yt,Pt,Rt[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,re,Rt[vt].width,Rt[vt].height,0,Yt,Pt,Rt[vt].data);for(let Ct=0;Ct<lt.length;Ct++){const le=lt[Ct].image[vt].image;oe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,le.width,le.height,Yt,Pt,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,re,le.width,le.height,0,Yt,Pt,le.data)}}else{oe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Yt,Pt,Rt[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,re,Yt,Pt,Rt[vt]);for(let Ct=0;Ct<lt.length;Ct++){const ht=lt[Ct];oe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,Yt,Pt,ht.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,re,Yt,Pt,ht.image[vt])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),Z.__version=z.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function _t(C,w,tt,xt,z,Z){const st=r.convert(tt.format,tt.colorSpace),it=r.convert(tt.type),mt=b(tt.internalFormat,st,it,tt.colorSpace),Ft=n.get(w),ut=n.get(tt);if(ut.__renderTarget=w,!Ft.__hasExternalTextures){const Rt=Math.max(1,w.width>>Z),Ht=Math.max(1,w.height>>Z);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?e.texImage3D(z,Z,mt,Rt,Ht,w.depth,0,st,it,null):e.texImage2D(z,Z,mt,Rt,Ht,0,st,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Xt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,z,ut.__webglTexture,0,At(w)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xt,z,ut.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(C,w,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,C),w.depthBuffer){const xt=w.depthTexture,z=xt&&xt.isDepthTexture?xt.type:null,Z=v(w.stencilBuffer,z),st=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=At(w);Xt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Z,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Z,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,C)}else{const xt=w.textures;for(let z=0;z<xt.length;z++){const Z=xt[z],st=r.convert(Z.format,Z.colorSpace),it=r.convert(Z.type),mt=b(Z.internalFormat,st,it,Z.colorSpace),Ft=At(w);tt&&Xt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,mt,w.width,w.height):Xt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,mt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,mt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=n.get(w.depthTexture);xt.__renderTarget=w,(!xt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);const z=xt.__webglTexture,Z=At(w);if(w.depthTexture.format===As)Xt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(w.depthTexture.format===Ds)Xt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function pt(C){const w=n.get(C),tt=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const xt=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),xt){const z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,xt.removeEventListener("dispose",z)};xt.addEventListener("dispose",z),w.__depthDisposeCallback=z}w.__boundDepthTexture=xt}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Dt(w.__webglFramebuffer,C)}else if(tt){w.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[xt]),w.__webglDepthbuffer[xt]===void 0)w.__webglDepthbuffer[xt]=i.createRenderbuffer(),Mt(w.__webglDepthbuffer[xt],C,!1);else{const z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[xt];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Mt(w.__webglDepthbuffer,C,!1);else{const xt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(C,w,tt){const xt=n.get(C);w!==void 0&&_t(xt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&pt(C)}function Jt(C){const w=C.texture,tt=n.get(C),xt=n.get(w);C.addEventListener("dispose",P);const z=C.textures,Z=C.isWebGLCubeRenderTarget===!0,st=z.length>1;if(st||(xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture()),xt.__version=w.version,o.memory.textures++),Z){tt.__webglFramebuffer=[];for(let it=0;it<6;it++)if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer[it]=[];for(let mt=0;mt<w.mipmaps.length;mt++)tt.__webglFramebuffer[it][mt]=i.createFramebuffer()}else tt.__webglFramebuffer[it]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer=[];for(let it=0;it<w.mipmaps.length;it++)tt.__webglFramebuffer[it]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(st)for(let it=0,mt=z.length;it<mt;it++){const Ft=n.get(z[it]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Xt(C)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let it=0;it<z.length;it++){const mt=z[it];tt.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[it]);const Ft=r.convert(mt.format,mt.colorSpace),ut=r.convert(mt.type),Rt=b(mt.internalFormat,Ft,ut,mt.colorSpace,C.isXRRenderTarget===!0),Ht=At(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Rt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,tt.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(tt.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,xt.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,w);for(let it=0;it<6;it++)if(w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)_t(tt.__webglFramebuffer[it][mt],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,mt);else _t(tt.__webglFramebuffer[it],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let it=0,mt=z.length;it<mt;it++){const Ft=z[it],ut=n.get(Ft);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),Ot(i.TEXTURE_2D,Ft),_t(tt.__webglFramebuffer,C,Ft,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,0),m(Ft)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,xt.__webglTexture),Ot(it,w),w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)_t(tt.__webglFramebuffer[mt],C,w,i.COLOR_ATTACHMENT0,it,mt);else _t(tt.__webglFramebuffer,C,w,i.COLOR_ATTACHMENT0,it,0);m(w)&&p(it),e.unbindTexture()}C.depthBuffer&&pt(C)}function rt(C){const w=C.textures;for(let tt=0,xt=w.length;tt<xt;tt++){const z=w[tt];if(m(z)){const Z=E(C),st=n.get(z).__webglTexture;e.bindTexture(Z,st),p(Z),e.unbindTexture()}}}const Tt=[],O=[];function Gt(C){if(C.samples>0){if(Xt(C)===!1){const w=C.textures,tt=C.width,xt=C.height;let z=i.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(C),it=w.length>1;if(it)for(let mt=0;mt<w.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let mt=0;mt<w.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(z|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[mt]);const Ft=n.get(w[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,tt,xt,0,0,tt,xt,z,i.NEAREST),c===!0&&(Tt.length=0,O.length=0,Tt.push(i.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Tt.push(Z),O.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let mt=0;mt<w.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,st.__webglColorRenderbuffer[mt]);const Ft=n.get(w[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const w=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function At(C){return Math.min(s.maxSamples,C.samples)}function Xt(C){const w=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(C){const w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function ee(C,w){const tt=C.colorSpace,xt=C.format,z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||tt!==Ns&&tt!==Si&&(Ae.getTransfer(tt)===Ue?(xt!==Xn||z!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),w}function qt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=J,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=Et,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Xt}function bm(i,t){function e(n,s=Si){let r;const o=Ae.getTransfer(s);if(n===fi)return i.UNSIGNED_BYTE;if(n===$a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return i.BYTE;if(n===Ul)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===dr)return i.HALF_FLOAT;if(n===Fl)return i.ALPHA;if(n===Ol)return i.RGB;if(n===Xn)return i.RGBA;if(n===zl)return i.LUMINANCE;if(n===Bl)return i.LUMINANCE_ALPHA;if(n===As)return i.DEPTH_COMPONENT;if(n===Ds)return i.DEPTH_STENCIL;if(n===Za)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===Vl)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===Ka)return i.RGBA_INTEGER;if(n===$r||n===Yr||n===Zr||n===Jr)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===la||n===ua||n===ha||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===la)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===da||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===da||n===pa)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ma)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ga||n===xa||n===_a||n===va||n===Ma||n===ya||n===Sa||n===wa||n===ba||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ga)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ma)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jr||n===Pa||n===La)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jr)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hl||n===Ia||n===Da||n===Ua)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Em extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ge extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tm={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Am=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rm=`
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

}`;class Cm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new xn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ci({vertexShader:Am,fragmentShader:Rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new V(new qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pm extends Fs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null;const _=new Cm,m=e.getContextAttributes();let p=null,E=null;const b=[],v=[],U=new Ut;let A=null;const P=new Nn;P.viewport=new Oe;const I=new Nn;I.viewport=new Oe;const S=[P,I],y=new Em;let N=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let nt=b[at];return nt===void 0&&(nt=new Go,b[at]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(at){let nt=b[at];return nt===void 0&&(nt=new Go,b[at]=nt),nt.getGripSpace()},this.getHand=function(at){let nt=b[at];return nt===void 0&&(nt=new Go,b[at]=nt),nt.getHandSpace()};function Q(at){const nt=v.indexOf(at.inputSource);if(nt===-1)return;const _t=b[nt];_t!==void 0&&(_t.update(at.inputSource,at.frame,l||o),_t.dispatchEvent({type:at.type,data:at.inputSource}))}function W(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Y);for(let at=0;at<b.length;at++){const nt=v[at];nt!==null&&(v[at]=null,b[at].disconnect(nt))}N=null,J=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,s=null,E=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(at){l=at},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Ji(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,_t=null,Mt=null;m.depth&&(Mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Ds:As,_t=m.stencil?Is:Zi);const Dt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(Dt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new Ji(h.textureWidth,h.textureHeight,{format:Xn,type:fi,depthTexture:new iu(h.textureWidth,h.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(at){for(let nt=0;nt<at.removed.length;nt++){const _t=at.removed[nt],Mt=v.indexOf(_t);Mt>=0&&(v[Mt]=null,b[Mt].disconnect(_t))}for(let nt=0;nt<at.added.length;nt++){const _t=at.added[nt];let Mt=v.indexOf(_t);if(Mt===-1){for(let pt=0;pt<b.length;pt++)if(pt>=v.length){v.push(_t),Mt=pt;break}else if(v[pt]===null){v[pt]=_t,Mt=pt;break}if(Mt===-1)break}const Dt=b[Mt];Dt&&Dt.connect(_t)}}const B=new L,k=new L;function H(at,nt,_t){B.setFromMatrixPosition(nt.matrixWorld),k.setFromMatrixPosition(_t.matrixWorld);const Mt=B.distanceTo(k),Dt=nt.projectionMatrix.elements,pt=_t.projectionMatrix.elements,Et=Dt[14]/(Dt[10]-1),Jt=Dt[14]/(Dt[10]+1),rt=(Dt[9]+1)/Dt[5],Tt=(Dt[9]-1)/Dt[5],O=(Dt[8]-1)/Dt[0],Gt=(pt[8]+1)/pt[0],At=Et*O,Xt=Et*Gt,It=Mt/(-O+Gt),ee=It*-O;if(nt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(ee),at.translateZ(It),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Dt[10]===-1)at.projectionMatrix.copy(nt.projectionMatrix),at.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const qt=Et+It,C=Jt+It,w=At-ee,tt=Xt+(Mt-ee),xt=rt*Jt/C*qt,z=Tt*Jt/C*qt;at.projectionMatrix.makePerspective(w,tt,xt,z,qt,C),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function dt(at,nt){nt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(nt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let nt=at.near,_t=at.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),y.near=I.near=P.near=nt,y.far=I.far=P.far=_t,(N!==y.near||J!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,J=y.far),P.layers.mask=at.layers.mask|2,I.layers.mask=at.layers.mask|4,y.layers.mask=P.layers.mask|I.layers.mask;const Mt=at.parent,Dt=y.cameras;dt(y,Mt);for(let pt=0;pt<Dt.length;pt++)dt(Dt[pt],Mt);Dt.length===2?H(y,P,I):y.projectionMatrix.copy(P.projectionMatrix),yt(at,y,Mt)};function yt(at,nt,_t){_t===null?at.matrix.copy(nt.matrixWorld):(at.matrix.copy(_t.matrixWorld),at.matrix.invert(),at.matrix.multiply(nt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(nt.projectionMatrix),at.projectionMatrixInverse.copy(nt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Fa*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(at){c=at,h!==null&&(h.fixedFoveation=at),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=at)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let bt=null;function Ot(at,nt){if(u=nt.getViewerPose(l||o),g=nt,u!==null){const _t=u.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let Mt=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,Mt=!0);for(let pt=0;pt<_t.length;pt++){const Et=_t[pt];let Jt=null;if(d!==null)Jt=d.getViewport(Et);else{const Tt=f.getViewSubImage(h,Et);Jt=Tt.viewport,pt===0&&(t.setRenderTargetTextures(E,Tt.colorTexture,h.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(E))}let rt=S[pt];rt===void 0&&(rt=new Nn,rt.layers.enable(pt),rt.viewport=new Oe,S[pt]=rt),rt.matrix.fromArray(Et.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Et.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),pt===0&&(y.matrix.copy(rt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Mt===!0&&y.cameras.push(rt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const pt=f.getDepthInformation(_t[0]);pt&&pt.isValid&&pt.texture&&_.init(t,pt,s.renderState)}}for(let _t=0;_t<b.length;_t++){const Mt=v[_t],Dt=b[_t];Mt!==null&&Dt!==void 0&&Dt.update(Mt,nt,l||o)}bt&&bt(at,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Zt=new eu;Zt.setAnimationLoop(Ot),this.setAnimationLoop=function(at){bt=at},this.dispose=function(){}}}const Oi=new Tn,Lm=new Re;function Im(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),b=E.envMap,v=E.envMapRotation;b&&(m.envMap.value=b,Oi.copy(v),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(Oi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const v=b.program;n.uniformBlockBinding(E,v)}function l(E,b){let v=s[E.id];v===void 0&&(g(E),v=u(E),s[E.id]=v,E.addEventListener("dispose",m));const U=b.program;n.updateUBOMapping(E,U);const A=t.render.frame;r[E.id]!==A&&(h(E),r[E.id]=A)}function u(E){const b=f();E.__bindingPointIndex=b;const v=i.createBuffer(),U=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const b=s[E.id],v=E.uniforms,U=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,P=v.length;A<P;A++){const I=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,y=I.length;S<y;S++){const N=I[S];if(d(N,A,S,U)===!0){const J=N.__offset,Q=Array.isArray(N.value)?N.value:[N.value];let W=0;for(let Y=0;Y<Q.length;Y++){const B=Q[Y],k=_(B);typeof B=="number"||typeof B=="boolean"?(N.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,J+W,N.__data)):B.isMatrix3?(N.__data[0]=B.elements[0],N.__data[1]=B.elements[1],N.__data[2]=B.elements[2],N.__data[3]=0,N.__data[4]=B.elements[3],N.__data[5]=B.elements[4],N.__data[6]=B.elements[5],N.__data[7]=0,N.__data[8]=B.elements[6],N.__data[9]=B.elements[7],N.__data[10]=B.elements[8],N.__data[11]=0):(B.toArray(N.__data,W),W+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,b,v,U){const A=E.value,P=b+"_"+v;if(U[P]===void 0)return typeof A=="number"||typeof A=="boolean"?U[P]=A:U[P]=A.clone(),!0;{const I=U[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return U[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(E){const b=E.uniforms;let v=0;const U=16;for(let P=0,I=b.length;P<I;P++){const S=Array.isArray(b[P])?b[P]:[b[P]];for(let y=0,N=S.length;y<N;y++){const J=S[y],Q=Array.isArray(J.value)?J.value:[J.value];for(let W=0,Y=Q.length;W<Y;W++){const B=Q[W],k=_(B),H=v%U,dt=H%k.boundary,yt=H+dt;v+=dt,yt!==0&&U-yt<k.storage&&(v+=U-yt),J.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=v,v+=k.storage}}}const A=v%U;return A>0&&(v+=U-A),E.__size=v,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Um{constructor(t={}){const{canvas:e=yh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=li,this.toneMappingExposure=1;const v=this;let U=!1,A=0,P=0,I=null,S=-1,y=null;const N=new Oe,J=new Oe;let Q=null;const W=new pe(0);let Y=0,B=e.width,k=e.height,H=1,dt=null,yt=null;const bt=new Oe(0,0,B,k),Ot=new Oe(0,0,B,k);let Zt=!1;const at=new Qa;let nt=!1,_t=!1;const Mt=new Re,Dt=new Re,pt=new L,Et=new Oe,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Tt(){return I===null?H:1}let O=n;function Gt(T,j){return e.getContext(T,j)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xa}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",ht,!1),O===null){const j="webgl2";if(O=Gt(j,T),O===null)throw Gt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let At,Xt,It,ee,qt,C,w,tt,xt,z,Z,st,it,mt,Ft,ut,Rt,Ht,Yt,Pt,re,oe,ae,$;function zt(){At=new Bp(O),At.init(),oe=new bm(O,At),Xt=new Dp(O,At,t,oe),It=new ym(O,At),Xt.reverseDepthBuffer&&h&&It.buffers.depth.setReversed(!0),ee=new Gp(O),qt=new om,C=new wm(O,At,It,qt,Xt,oe,ee),w=new Np(v),tt=new zp(v),xt=new Yh(O),ae=new Lp(O,xt),z=new Vp(O,xt,ee,ae),Z=new Wp(O,z,xt,ee),Yt=new kp(O,Xt,C),ut=new Up(qt),st=new rm(v,w,tt,At,Xt,ae,ut),it=new Im(v,qt),mt=new cm,Ft=new pm(At),Ht=new Pp(v,w,tt,It,Z,d,c),Rt=new vm(v,Z,Xt),$=new Dm(O,ee,Xt,It),Pt=new Ip(O,At,ee),re=new Hp(O,At,ee),ee.programs=st.programs,v.capabilities=Xt,v.extensions=At,v.properties=qt,v.renderLists=mt,v.shadowMap=Rt,v.state=It,v.info=ee}zt();const lt=new Pm(v,O);this.xr=lt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=At.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=At.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(B,k,!1))},this.getSize=function(T){return T.set(B,k)},this.setSize=function(T,j,ot=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,k=j,e.width=Math.floor(T*H),e.height=Math.floor(j*H),ot===!0&&(e.style.width=T+"px",e.style.height=j+"px"),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(B*H,k*H).floor()},this.setDrawingBufferSize=function(T,j,ot){B=T,k=j,H=ot,e.width=Math.floor(T*ot),e.height=Math.floor(j*ot),this.setViewport(0,0,T,j)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(bt)},this.setViewport=function(T,j,ot,et){T.isVector4?bt.set(T.x,T.y,T.z,T.w):bt.set(T,j,ot,et),It.viewport(N.copy(bt).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Ot)},this.setScissor=function(T,j,ot,et){T.isVector4?Ot.set(T.x,T.y,T.z,T.w):Ot.set(T,j,ot,et),It.scissor(J.copy(Ot).multiplyScalar(H).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(T){It.setScissorTest(Zt=T)},this.setOpaqueSort=function(T){dt=T},this.setTransparentSort=function(T){yt=T},this.getClearColor=function(T){return T.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(T=!0,j=!0,ot=!0){let et=0;if(T){let K=!1;if(I!==null){const Lt=I.texture.format;K=Lt===Ka||Lt===ja||Lt===Ja}if(K){const Lt=I.texture.type,kt=Lt===fi||Lt===Zi||Lt===cr||Lt===Is||Lt===$a||Lt===Ya,jt=Ht.getClearColor(),Kt=Ht.getClearAlpha(),he=jt.r,de=jt.g,Qt=jt.b;kt?(g[0]=he,g[1]=de,g[2]=Qt,g[3]=Kt,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=he,_[1]=de,_[2]=Qt,_[3]=Kt,O.clearBufferiv(O.COLOR,0,_))}else et|=O.COLOR_BUFFER_BIT}j&&(et|=O.DEPTH_BUFFER_BIT),ot&&(et|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),mt.dispose(),Ft.dispose(),qt.dispose(),w.dispose(),tt.dispose(),Z.dispose(),ae.dispose(),$.dispose(),st.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Ln),lt.removeEventListener("sessionend",An),Rn.stop()};function vt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const T=ee.autoReset,j=Rt.enabled,ot=Rt.autoUpdate,et=Rt.needsUpdate,K=Rt.type;zt(),ee.autoReset=T,Rt.enabled=j,Rt.autoUpdate=ot,Rt.needsUpdate=et,Rt.type=K}function ht(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){const j=T.target;j.removeEventListener("dispose",le),ce(j)}function ce(T){He(T),qt.remove(T)}function He(T){const j=qt.get(T).programs;j!==void 0&&(j.forEach(function(ot){st.releaseProgram(ot)}),T.isShaderMaterial&&st.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,ot,et,K,Lt){j===null&&(j=Jt);const kt=K.isMesh&&K.matrixWorld.determinant()<0,jt=Li(T,j,ot,et,K);It.setMaterial(et,kt);let Kt=ot.index,he=1;if(et.wireframe===!0){if(Kt=z.getWireframeAttribute(ot),Kt===void 0)return;he=2}const de=ot.drawRange,Qt=ot.attributes.position;let ve=de.start*he,Me=(de.start+de.count)*he;Lt!==null&&(ve=Math.max(ve,Lt.start*he),Me=Math.min(Me,(Lt.start+Lt.count)*he)),Kt!==null?(ve=Math.max(ve,0),Me=Math.min(Me,Kt.count)):Qt!=null&&(ve=Math.max(ve,0),Me=Math.min(Me,Qt.count));const Te=Me-ve;if(Te<0||Te===1/0)return;ae.setup(K,et,jt,ot,Kt);let $e,ye=Pt;if(Kt!==null&&($e=xt.get(Kt),ye=re,ye.setIndex($e)),K.isMesh)et.wireframe===!0?(It.setLineWidth(et.wireframeLinewidth*Tt()),ye.setMode(O.LINES)):ye.setMode(O.TRIANGLES);else if(K.isLine){let te=et.linewidth;te===void 0&&(te=1),It.setLineWidth(te*Tt()),K.isLineSegments?ye.setMode(O.LINES):K.isLineLoop?ye.setMode(O.LINE_LOOP):ye.setMode(O.LINE_STRIP)}else K.isPoints?ye.setMode(O.POINTS):K.isSprite&&ye.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ye.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))ye.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const te=K._multiDrawStarts,vn=K._multiDrawCounts,we=K._multiDrawCount,Mn=Kt?xt.get(Kt).bytesPerElement:1,Ge=qt.get(et).currentProgram.getUniforms();for(let Je=0;Je<we;Je++)Ge.setValue(O,"_gl_DrawID",Je),ye.render(te[Je]/Mn,vn[Je])}else if(K.isInstancedMesh)ye.renderInstances(ve,Te,K.count);else if(ot.isInstancedBufferGeometry){const te=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,vn=Math.min(ot.instanceCount,te);ye.renderInstances(ve,Te,vn)}else ye.render(ve,Te)};function Se(T,j,ot){T.transparent===!0&&T.side===Be&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,_n(T,j,ot),T.side=Ri,T.needsUpdate=!0,_n(T,j,ot),T.side=Be):_n(T,j,ot)}this.compile=function(T,j,ot=null){ot===null&&(ot=T),p=Ft.get(ot),p.init(j),b.push(p),ot.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),T!==ot&&T.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();const et=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Lt=K.material;if(Lt)if(Array.isArray(Lt))for(let kt=0;kt<Lt.length;kt++){const jt=Lt[kt];Se(jt,ot,K),et.add(jt)}else Se(Lt,ot,K),et.add(Lt)}),b.pop(),p=null,et},this.compileAsync=function(T,j,ot=null){const et=this.compile(T,j,ot);return new Promise(K=>{function Lt(){if(et.forEach(function(kt){qt.get(kt).currentProgram.isReady()&&et.delete(kt)}),et.size===0){K(T);return}setTimeout(Lt,10)}At.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let ln=null;function un(T){ln&&ln(T)}function Ln(){Rn.stop()}function An(){Rn.start()}const Rn=new eu;Rn.setAnimationLoop(un),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(T){ln=T,lt.setAnimationLoop(T),T===null?Rn.stop():Rn.start()},lt.addEventListener("sessionstart",Ln),lt.addEventListener("sessionend",An),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(j),j=lt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,j,I),p=Ft.get(T,b.length),p.init(j),b.push(p),Dt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),at.setFromProjectionMatrix(Dt),_t=this.localClippingEnabled,nt=ut.init(this.clippingPlanes,_t),m=mt.get(T,E.length),m.init(),E.push(m),lt.enabled===!0&&lt.isPresenting===!0){const Lt=v.xr.getDepthSensingMesh();Lt!==null&&On(Lt,j,-1/0,v.sortObjects)}On(T,j,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(dt,yt),rt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,rt&&Ht.addToRenderList(m,T),this.info.render.frame++,nt===!0&&ut.beginShadows();const ot=p.state.shadowsArray;Rt.render(ot,T,j),nt===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=m.opaque,K=m.transmissive;if(p.setupLights(),j.isArrayCamera){const Lt=j.cameras;if(K.length>0)for(let kt=0,jt=Lt.length;kt<jt;kt++){const Kt=Lt[kt];Qn(et,K,T,Kt)}rt&&Ht.render(T);for(let kt=0,jt=Lt.length;kt<jt;kt++){const Kt=Lt[kt];Kn(m,T,Kt,Kt.viewport)}}else K.length>0&&Qn(et,K,T,j),rt&&Ht.render(T),Kn(m,T,j);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(v,T,j),ae.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],nt===!0&&ut.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function On(T,j,ot,et){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)ot=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||at.intersectsSprite(T)){et&&Et.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Dt);const kt=Z.update(T),jt=T.material;jt.visible&&m.push(T,kt,jt,ot,Et.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||at.intersectsObject(T))){const kt=Z.update(T),jt=T.material;if(et&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Et.copy(T.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),Et.copy(kt.boundingSphere.center)),Et.applyMatrix4(T.matrixWorld).applyMatrix4(Dt)),Array.isArray(jt)){const Kt=kt.groups;for(let he=0,de=Kt.length;he<de;he++){const Qt=Kt[he],ve=jt[Qt.materialIndex];ve&&ve.visible&&m.push(T,kt,ve,ot,Et.z,Qt)}}else jt.visible&&m.push(T,kt,jt,ot,Et.z,null)}}const Lt=T.children;for(let kt=0,jt=Lt.length;kt<jt;kt++)On(Lt[kt],j,ot,et)}function Kn(T,j,ot,et){const K=T.opaque,Lt=T.transmissive,kt=T.transparent;p.setupLightsView(ot),nt===!0&&ut.setGlobalState(v.clippingPlanes,ot),et&&It.viewport(N.copy(et)),K.length>0&&ti(K,j,ot),Lt.length>0&&ti(Lt,j,ot),kt.length>0&&ti(kt,j,ot),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Qn(T,j,ot,et){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new Ji(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?dr:fi,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Lt=p.state.transmissionRenderTarget[et.id],kt=et.viewport||N;Lt.setSize(kt.z,kt.w);const jt=v.getRenderTarget();v.setRenderTarget(Lt),v.getClearColor(W),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),rt&&Ht.render(ot);const Kt=v.toneMapping;v.toneMapping=li;const he=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),nt===!0&&ut.setGlobalState(v.clippingPlanes,et),ti(T,ot,et),C.updateMultisampleRenderTarget(Lt),C.updateRenderTargetMipmap(Lt),At.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Qt=0,ve=j.length;Qt<ve;Qt++){const Me=j[Qt],Te=Me.object,$e=Me.geometry,ye=Me.material,te=Me.group;if(ye.side===Be&&Te.layers.test(et.layers)){const vn=ye.side;ye.side=gn,ye.needsUpdate=!0,In(Te,ot,et,$e,ye,te),ye.side=vn,ye.needsUpdate=!0,de=!0}}de===!0&&(C.updateMultisampleRenderTarget(Lt),C.updateRenderTargetMipmap(Lt))}v.setRenderTarget(jt),v.setClearColor(W,Y),he!==void 0&&(et.viewport=he),v.toneMapping=Kt}function ti(T,j,ot){const et=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Lt=T.length;K<Lt;K++){const kt=T[K],jt=kt.object,Kt=kt.geometry,he=et===null?kt.material:et,de=kt.group;jt.layers.test(ot.layers)&&In(jt,j,ot,Kt,he,de)}}function In(T,j,ot,et,K,Lt){T.onBeforeRender(v,j,ot,et,K,Lt),T.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(v,j,ot,et,T,Lt),K.transparent===!0&&K.side===Be&&K.forceSinglePass===!1?(K.side=gn,K.needsUpdate=!0,v.renderBufferDirect(ot,j,et,K,T,Lt),K.side=Ri,K.needsUpdate=!0,v.renderBufferDirect(ot,j,et,K,T,Lt),K.side=Be):v.renderBufferDirect(ot,j,et,K,T,Lt),T.onAfterRender(v,j,ot,et,K,Lt)}function _n(T,j,ot){j.isScene!==!0&&(j=Jt);const et=qt.get(T),K=p.state.lights,Lt=p.state.shadowsArray,kt=K.state.version,jt=st.getParameters(T,K.state,Lt,j,ot),Kt=st.getProgramCacheKey(jt);let he=et.programs;et.environment=T.isMeshStandardMaterial?j.environment:null,et.fog=j.fog,et.envMap=(T.isMeshStandardMaterial?tt:w).get(T.envMap||et.environment),et.envMapRotation=et.environment!==null&&T.envMap===null?j.environmentRotation:T.envMapRotation,he===void 0&&(T.addEventListener("dispose",le),he=new Map,et.programs=he);let de=he.get(Kt);if(de!==void 0){if(et.currentProgram===de&&et.lightsStateVersion===kt)return Pi(T,jt),de}else jt.uniforms=st.getUniforms(T),T.onBeforeCompile(jt,v),de=st.acquireProgram(jt,Kt),he.set(Kt,de),et.uniforms=jt.uniforms;const Qt=et.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Qt.clippingPlanes=ut.uniform),Pi(T,jt),et.needsLights=Bs(T),et.lightsStateVersion=kt,et.needsLights&&(Qt.ambientLightColor.value=K.state.ambient,Qt.lightProbe.value=K.state.probe,Qt.directionalLights.value=K.state.directional,Qt.directionalLightShadows.value=K.state.directionalShadow,Qt.spotLights.value=K.state.spot,Qt.spotLightShadows.value=K.state.spotShadow,Qt.rectAreaLights.value=K.state.rectArea,Qt.ltc_1.value=K.state.rectAreaLTC1,Qt.ltc_2.value=K.state.rectAreaLTC2,Qt.pointLights.value=K.state.point,Qt.pointLightShadows.value=K.state.pointShadow,Qt.hemisphereLights.value=K.state.hemi,Qt.directionalShadowMap.value=K.state.directionalShadowMap,Qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Qt.spotShadowMap.value=K.state.spotShadowMap,Qt.spotLightMatrix.value=K.state.spotLightMatrix,Qt.spotLightMap.value=K.state.spotLightMap,Qt.pointShadowMap.value=K.state.pointShadowMap,Qt.pointShadowMatrix.value=K.state.pointShadowMatrix),et.currentProgram=de,et.uniformsList=null,de}function di(T){if(T.uniformsList===null){const j=T.currentProgram.getUniforms();T.uniformsList=Kr.seqWithValue(j.seq,T.uniforms)}return T.uniformsList}function Pi(T,j){const ot=qt.get(T);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function Li(T,j,ot,et,K){j.isScene!==!0&&(j=Jt),C.resetTextureUnits();const Lt=j.fog,kt=et.isMeshStandardMaterial?j.environment:null,jt=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ns,Kt=(et.isMeshStandardMaterial?tt:w).get(et.envMap||kt),he=et.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,de=!!ot.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Qt=!!ot.morphAttributes.position,ve=!!ot.morphAttributes.normal,Me=!!ot.morphAttributes.color;let Te=li;et.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Te=v.toneMapping);const $e=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ye=$e!==void 0?$e.length:0,te=qt.get(et),vn=p.state.lights;if(nt===!0&&(_t===!0||T!==y)){const Qe=T===y&&et.id===S;ut.setState(et,T,Qe)}let we=!1;et.version===te.__version?(te.needsLights&&te.lightsStateVersion!==vn.state.version||te.outputColorSpace!==jt||K.isBatchedMesh&&te.batching===!1||!K.isBatchedMesh&&te.batching===!0||K.isBatchedMesh&&te.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&te.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&te.instancing===!1||!K.isInstancedMesh&&te.instancing===!0||K.isSkinnedMesh&&te.skinning===!1||!K.isSkinnedMesh&&te.skinning===!0||K.isInstancedMesh&&te.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&te.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&te.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&te.instancingMorph===!1&&K.morphTexture!==null||te.envMap!==Kt||et.fog===!0&&te.fog!==Lt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==ut.numPlanes||te.numIntersection!==ut.numIntersection)||te.vertexAlphas!==he||te.vertexTangents!==de||te.morphTargets!==Qt||te.morphNormals!==ve||te.morphColors!==Me||te.toneMapping!==Te||te.morphTargetsCount!==ye)&&(we=!0):(we=!0,te.__version=et.version);let Mn=te.currentProgram;we===!0&&(Mn=_n(et,j,K));let Ge=!1,Je=!1,nn=!1;const Pe=Mn.getUniforms(),Cn=te.uniforms;if(It.useProgram(Mn.program)&&(Ge=!0,Je=!0,nn=!0),et.id!==S&&(S=et.id,Je=!0),Ge||y!==T){It.buffers.depth.getReversed()?(Mt.copy(T.projectionMatrix),wh(Mt),bh(Mt),Pe.setValue(O,"projectionMatrix",Mt)):Pe.setValue(O,"projectionMatrix",T.projectionMatrix),Pe.setValue(O,"viewMatrix",T.matrixWorldInverse);const yn=Pe.map.cameraPosition;yn!==void 0&&yn.setValue(O,pt.setFromMatrixPosition(T.matrixWorld)),Xt.logarithmicDepthBuffer&&Pe.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Pe.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Je=!0,nn=!0)}if(K.isSkinnedMesh){Pe.setOptional(O,K,"bindMatrix"),Pe.setOptional(O,K,"bindMatrixInverse");const Qe=K.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Pe.setValue(O,"boneTexture",Qe.boneTexture,C))}K.isBatchedMesh&&(Pe.setOptional(O,K,"batchingTexture"),Pe.setValue(O,"batchingTexture",K._matricesTexture,C),Pe.setOptional(O,K,"batchingIdTexture"),Pe.setValue(O,"batchingIdTexture",K._indirectTexture,C),Pe.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&Pe.setValue(O,"batchingColorTexture",K._colorsTexture,C));const Vn=ot.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&Yt.update(K,ot,Mn),(Je||te.receiveShadow!==K.receiveShadow)&&(te.receiveShadow=K.receiveShadow,Pe.setValue(O,"receiveShadow",K.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Cn.envMap.value=Kt,Cn.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&j.environment!==null&&(Cn.envMapIntensity.value=j.environmentIntensity),Je&&(Pe.setValue(O,"toneMappingExposure",v.toneMappingExposure),te.needsLights&&pi(Cn,nn),Lt&&et.fog===!0&&it.refreshFogUniforms(Cn,Lt),it.refreshMaterialUniforms(Cn,et,H,k,p.state.transmissionRenderTarget[T.id]),Kr.upload(O,di(te),Cn,C)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Kr.upload(O,di(te),Cn,C),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Pe.setValue(O,"center",K.center),Pe.setValue(O,"modelViewMatrix",K.modelViewMatrix),Pe.setValue(O,"normalMatrix",K.normalMatrix),Pe.setValue(O,"modelMatrix",K.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Qe=et.uniformsGroups;for(let yn=0,x=Qe.length;yn<x;yn++){const D=Qe[yn];$.update(D,Mn),$.bind(D,Mn)}}return Mn}function pi(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function Bs(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,j,ot){qt.get(T.texture).__webglTexture=j,qt.get(T.depthTexture).__webglTexture=ot;const et=qt.get(T);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=ot===void 0,et.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,j){const ot=qt.get(T);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(T,j=0,ot=0){I=T,A=j,P=ot;let et=!0,K=null,Lt=!1,kt=!1;if(T){const Kt=qt.get(T);if(Kt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(O.FRAMEBUFFER,null),et=!1;else if(Kt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Kt.__hasExternalTextures)C.rebindTextures(T,qt.get(T.texture).__webglTexture,qt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Qt=T.depthTexture;if(Kt.__boundDepthTexture!==Qt){if(Qt!==null&&qt.has(Qt)&&(T.width!==Qt.image.width||T.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const he=T.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(kt=!0);const de=qt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(de[j])?K=de[j][ot]:K=de[j],Lt=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?K=qt.get(T).__webglMultisampledFramebuffer:Array.isArray(de)?K=de[ot]:K=de,N.copy(T.viewport),J.copy(T.scissor),Q=T.scissorTest}else N.copy(bt).multiplyScalar(H).floor(),J.copy(Ot).multiplyScalar(H).floor(),Q=Zt;if(It.bindFramebuffer(O.FRAMEBUFFER,K)&&et&&It.drawBuffers(T,K),It.viewport(N),It.scissor(J),It.setScissorTest(Q),Lt){const Kt=qt.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+j,Kt.__webglTexture,ot)}else if(kt){const Kt=qt.get(T.texture),he=j||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Kt.__webglTexture,ot||0,he)}S=-1},this.readRenderTargetPixels=function(T,j,ot,et,K,Lt,kt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=qt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&kt!==void 0&&(jt=jt[kt]),jt){It.bindFramebuffer(O.FRAMEBUFFER,jt);try{const Kt=T.texture,he=Kt.format,de=Kt.type;if(!Xt.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-et&&ot>=0&&ot<=T.height-K&&O.readPixels(j,ot,et,K,oe.convert(he),oe.convert(de),Lt)}finally{const Kt=I!==null?qt.get(I).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(T,j,ot,et,K,Lt,kt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=qt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&kt!==void 0&&(jt=jt[kt]),jt){const Kt=T.texture,he=Kt.format,de=Kt.type;if(!Xt.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=T.width-et&&ot>=0&&ot<=T.height-K){It.bindFramebuffer(O.FRAMEBUFFER,jt);const Qt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Qt),O.bufferData(O.PIXEL_PACK_BUFFER,Lt.byteLength,O.STREAM_READ),O.readPixels(j,ot,et,K,oe.convert(he),oe.convert(de),0);const ve=I!==null?qt.get(I).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,ve);const Me=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Sh(O,Me,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Qt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Lt),O.deleteBuffer(Qt),O.deleteSync(Me),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,j=null,ot=0){T.isTexture!==!0&&(tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1]);const et=Math.pow(2,-ot),K=Math.floor(T.image.width*et),Lt=Math.floor(T.image.height*et),kt=j!==null?j.x:0,jt=j!==null?j.y:0;C.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,ot,0,0,kt,jt,K,Lt),It.unbindTexture()},this.copyTextureToTexture=function(T,j,ot=null,et=null,K=0){T.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,T=arguments[1],j=arguments[2],K=arguments[3]||0,ot=null);let Lt,kt,jt,Kt,he,de,Qt,ve,Me;const Te=T.isCompressedTexture?T.mipmaps[K]:T.image;ot!==null?(Lt=ot.max.x-ot.min.x,kt=ot.max.y-ot.min.y,jt=ot.isBox3?ot.max.z-ot.min.z:1,Kt=ot.min.x,he=ot.min.y,de=ot.isBox3?ot.min.z:0):(Lt=Te.width,kt=Te.height,jt=Te.depth||1,Kt=0,he=0,de=0),et!==null?(Qt=et.x,ve=et.y,Me=et.z):(Qt=0,ve=0,Me=0);const $e=oe.convert(j.format),ye=oe.convert(j.type);let te;j.isData3DTexture?(C.setTexture3D(j,0),te=O.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(C.setTexture2DArray(j,0),te=O.TEXTURE_2D_ARRAY):(C.setTexture2D(j,0),te=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const vn=O.getParameter(O.UNPACK_ROW_LENGTH),we=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Mn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ge=O.getParameter(O.UNPACK_SKIP_ROWS),Je=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Te.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Te.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Kt),O.pixelStorei(O.UNPACK_SKIP_ROWS,he),O.pixelStorei(O.UNPACK_SKIP_IMAGES,de);const nn=T.isDataArrayTexture||T.isData3DTexture,Pe=j.isDataArrayTexture||j.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Cn=qt.get(T),Vn=qt.get(j),Qe=qt.get(Cn.__renderTarget),yn=qt.get(Vn.__renderTarget);It.bindFramebuffer(O.READ_FRAMEBUFFER,Qe.__webglFramebuffer),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let x=0;x<jt;x++)nn&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qt.get(T).__webglTexture,K,de+x),T.isDepthTexture?(Pe&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qt.get(j).__webglTexture,K,Me+x),O.blitFramebuffer(Kt,he,Lt,kt,Qt,ve,Lt,kt,O.DEPTH_BUFFER_BIT,O.NEAREST)):Pe?O.copyTexSubImage3D(te,K,Qt,ve,Me+x,Kt,he,Lt,kt):O.copyTexSubImage2D(te,K,Qt,ve,Me+x,Kt,he,Lt,kt);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Pe?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(te,K,Qt,ve,Me,Lt,kt,jt,$e,ye,Te.data):j.isCompressedArrayTexture?O.compressedTexSubImage3D(te,K,Qt,ve,Me,Lt,kt,jt,$e,Te.data):O.texSubImage3D(te,K,Qt,ve,Me,Lt,kt,jt,$e,ye,Te):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,K,Qt,ve,Lt,kt,$e,ye,Te.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,K,Qt,ve,Te.width,Te.height,$e,Te.data):O.texSubImage2D(O.TEXTURE_2D,K,Qt,ve,Lt,kt,$e,ye,Te);O.pixelStorei(O.UNPACK_ROW_LENGTH,vn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,we),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Mn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Je),K===0&&j.generateMipmaps&&O.generateMipmap(te),It.unbindTexture()},this.copyTextureToTexture3D=function(T,j,ot=null,et=null,K=0){return T.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,et=arguments[1]||null,T=arguments[2],j=arguments[3],K=arguments[4]||0),tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,j,ot,et,K)},this.initRenderTarget=function(T){qt.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),It.unbindTexture()},this.resetState=function(){A=0,P=0,I=null,It.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}}class ec{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(t),this.density=e}clone(){return new ec(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(t),this.near=e,this.far=n}clone(){return new nc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cu extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Na,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Sn=new L;class no{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new no(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class lu extends es{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xs;const Xs=new L,_s=new L,vs=new L,Ms=new Ut,qs=new Ut,uu=new Re,zr=new L,$s=new L,Br=new L,ul=new Ut,ko=new Ut,hl=new Ut;class Fm extends Ze{constructor(t=new lu){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nm(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new no(n,3,0,!1)),xs.setAttribute("uv",new no(n,2,3,!1))}this.geometry=xs,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-vs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Vr(zr.set(-.5,-.5,0),vs,o,_s,s,r),Vr($s.set(.5,-.5,0),vs,o,_s,s,r),Vr(Br.set(.5,.5,0),vs,o,_s,s,r),ul.set(0,0),ko.set(1,0),hl.set(1,1);let a=t.ray.intersectTriangle(zr,$s,Br,!1,Xs);if(a===null&&(Vr($s.set(-.5,.5,0),vs,o,_s,s,r),ko.set(0,1),a=t.ray.intersectTriangle(zr,Br,$s,!1,Xs),a===null))return;const c=t.ray.origin.distanceTo(Xs);c<t.near||c>t.far||e.push({distance:c,point:Xs.clone(),uv:Bn.getInterpolation(Xs,zr,$s,Br,ul,ko,hl,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vr(i,t,e,n,s,r){Ms.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(qs.x=r*Ms.x-s*Ms.y,qs.y=s*Ms.x+r*Ms.y):qs.copy(Ms),i.copy(t),i.x+=qs.x,i.y+=qs.y,i.applyMatrix4(uu)}class Om extends xn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Fn,u=Fn,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl extends rn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ys=new Re,dl=new Re,Hr=[],pl=new ts,zm=new Re,Ys=new V,Zs=new Os;class ir extends V{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ts),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),pl.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(pl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),Zs.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(Zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(n),t.ray.intersectsSphere(Zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),dl.multiplyMatrices(n,ys),Ys.matrixWorld=dl,Ys.raycast(t,Hr);for(let o=0,a=Hr.length;o<a;o++){const c=Hr[o];c.instanceId=r,c.object=this,e.push(c)}Hr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Om(new Float32Array(s*this.count),s,this.count,Za,Jn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ao extends es{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ml=new Re,za=new $l,Gr=new Os,kr=new L;class ic extends Ze{constructor(t=new Xe,e=new ao){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;ml.copy(s).invert(),za.copy(t.ray).applyMatrix4(ml);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=l.getX(g);kr.fromBufferAttribute(f,m),gl(kr,m,c,s,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)kr.fromBufferAttribute(f,g),gl(kr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gl(i,t,e,n,s,r,o){const a=za.distanceSqToPoint(i);if(a<e){const c=new L;za.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class sc extends xn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Ut:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],o=[],a=new L,c=new Re;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(an(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(an(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class rc extends jn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bm extends rc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function oc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Wr=new L,Wo=new oc,Xo=new oc,qo=new oc;class ac extends jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Wr.subVectors(s[0],s[1]).add(s[0]),l=Wr);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Wr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Wo.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,_,m),Xo.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,_,m),qo.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Wo.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Xo.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),qo.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Wo.calc(c),Xo.calc(c),qo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Vm(i,t){const e=1-i;return e*e*t}function Hm(i,t){return 2*(1-i)*i*t}function Gm(i,t){return i*i*t}function sr(i,t,e,n){return Vm(i,t)+Hm(i,e)+Gm(i,n)}function km(i,t){const e=1-i;return e*e*e*t}function Wm(i,t){const e=1-i;return 3*e*e*i*t}function Xm(i,t){return 3*(1-i)*i*i*t}function qm(i,t){return i*i*i*t}function rr(i,t,e,n,s){return km(i,t)+Wm(i,e)+Xm(i,n)+qm(i,s)}class hu extends jn{constructor(t=new Ut,e=new Ut,n=new Ut,s=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ut){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(t,s.x,r.x,o.x,a.x),rr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $m extends jn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(t,s.x,r.x,o.x,a.x),rr(t,s.y,r.y,o.y,a.y),rr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fu extends jn{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ym extends jn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class du extends jn{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(sr(t,s.x,r.x,o.x),sr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zm extends jn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(sr(t,s.x,r.x,o.x),sr(t,s.y,r.y,o.y),sr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pu extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(xl(a,c.x,l.x,u.x,f.x),xl(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Ut().fromArray(s))}return this}}var Ba=Object.freeze({__proto__:null,ArcCurve:Bm,CatmullRomCurve3:ac,CubicBezierCurve:hu,CubicBezierCurve3:$m,EllipseCurve:rc,LineCurve:fu,LineCurve3:Ym,QuadraticBezierCurve:du,QuadraticBezierCurve3:Zm,SplineCurve:pu});class Jm extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ba[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ba[s.type]().fromJSON(s))}return this}}class Va extends Jm{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new fu(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new du(this.currentPoint.clone(),new Ut(t,e),new Ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new hu(this.currentPoint.clone(),new Ut(t,e),new Ut(n,s),new Ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new pu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new rc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cc extends Xe{constructor(t=[new Ut(0,-.5),new Ut(.5,0),new Ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=an(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,f=new L,h=new Ut,d=new L,g=new L,_=new L;let m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let E=0;E<=e;E++){const b=n+E*u*s,v=Math.sin(b),U=Math.cos(b);for(let A=0;A<=t.length-1;A++){f.x=t[A].x*v,f.y=t[A].y,f.z=t[A].x*U,o.push(f.x,f.y,f.z),h.x=E/e,h.y=A/(t.length-1),a.push(h.x,h.y);const P=c[3*A+0]*v,I=c[3*A+1],S=c[3*A+0]*U;l.push(P,I,S)}}for(let E=0;E<e;E++)for(let b=0;b<t.length-1;b++){const v=b+E*t.length,U=v,A=v+t.length,P=v+t.length+1,I=v+1;r.push(U,A,I),r.push(P,I,A)}this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("uv",new be(a,2)),this.setAttribute("normal",new be(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.points,t.segments,t.phiStart,t.phiLength)}}class pr extends cc{constructor(t=1,e=1,n=4,s=8){const r=new Va;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new pr(t.radius,t.length,t.capSegments,t.radialSegments)}}class En extends Xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new L,u=new Ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(a,3)),this.setAttribute("uv",new be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class $t extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const _=[],m=n/2;let p=0;E(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2));function E(){const v=new L,U=new L;let A=0;const P=(e-t)/n;for(let I=0;I<=r;I++){const S=[],y=I/r,N=y*(e-t)+t;for(let J=0;J<=s;J++){const Q=J/s,W=Q*c+a,Y=Math.sin(W),B=Math.cos(W);U.x=N*Y,U.y=-y*n+m,U.z=N*B,f.push(U.x,U.y,U.z),v.set(Y,P,B).normalize(),h.push(v.x,v.y,v.z),d.push(Q,1-y),S.push(g++)}_.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const y=_[S][I],N=_[S+1][I],J=_[S+1][I+1],Q=_[S][I+1];(t>0||S!==0)&&(u.push(y,N,Q),A+=3),(e>0||S!==r-1)&&(u.push(N,J,Q),A+=3)}l.addGroup(p,A,0),p+=A}function b(v){const U=g,A=new Ut,P=new L;let I=0;const S=v===!0?t:e,y=v===!0?1:-1;for(let J=1;J<=s;J++)f.push(0,m*y,0),h.push(0,y,0),d.push(.5,.5),g++;const N=g;for(let J=0;J<=s;J++){const W=J/s*c+a,Y=Math.cos(W),B=Math.sin(W);P.x=S*B,P.y=m*y,P.z=S*Y,f.push(P.x,P.y,P.z),h.push(0,y,0),A.x=Y*.5+.5,A.y=B*.5*y+.5,d.push(A.x,A.y),g++}for(let J=0;J<s;J++){const Q=U+J,W=N+J;v===!0?u.push(W,W+1,Q):u.push(W+1,W,Q),I+=3}l.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wi extends $t{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new wi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lc extends Xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(r.slice(),3)),this.setAttribute("uv",new be(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const b=new L,v=new L,U=new L;for(let A=0;A<e.length;A+=3)d(e[A+0],b),d(e[A+1],v),d(e[A+2],U),c(b,v,U,E)}function c(E,b,v,U){const A=U+1,P=[];for(let I=0;I<=A;I++){P[I]=[];const S=E.clone().lerp(v,I/A),y=b.clone().lerp(v,I/A),N=A-I;for(let J=0;J<=N;J++)J===0&&I===A?P[I][J]=S:P[I][J]=S.clone().lerp(y,J/N)}for(let I=0;I<A;I++)for(let S=0;S<2*(A-I)-1;S++){const y=Math.floor(S/2);S%2===0?(h(P[I][y+1]),h(P[I+1][y]),h(P[I][y])):(h(P[I][y+1]),h(P[I+1][y+1]),h(P[I+1][y]))}}function l(E){const b=new L;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(E),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function u(){const E=new L;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];const v=m(E)/2/Math.PI+.5,U=p(E)/Math.PI+.5;o.push(v,1-U)}g(),f()}function f(){for(let E=0;E<o.length;E+=6){const b=o[E+0],v=o[E+2],U=o[E+4],A=Math.max(b,v,U),P=Math.min(b,v,U);A>.9&&P<.1&&(b<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),U<.2&&(o[E+4]+=1))}}function h(E){r.push(E.x,E.y,E.z)}function d(E,b){const v=E*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function g(){const E=new L,b=new L,v=new L,U=new L,A=new Ut,P=new Ut,I=new Ut;for(let S=0,y=0;S<r.length;S+=9,y+=6){E.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),A.set(o[y+0],o[y+1]),P.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),U.copy(E).add(b).add(v).divideScalar(3);const N=m(U);_(A,y+0,E,N),_(P,y+2,b,N),_(I,y+4,v,N)}}function _(E,b,v,U){U<0&&E.x===1&&(o[b]=E.x-1),v.x===0&&v.z===0&&(o[b]=U/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.vertices,t.indices,t.radius,t.details)}}class Ei extends Va{constructor(t){super(t),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Va().fromJSON(s))}return this}}const jm={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=mu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,f,h,d;if(n&&(r=ng(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)f=i[g],h=i[g+1],f<a&&(a=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return lr(r,o,e,a,c,d,0),o}};function mu(i,t,e,n,s){let r,o;if(s===dg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=_l(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=_l(r,i[r],i[r+1],o);return o&&co(o,o.next)&&(hr(o),o=o.next),o}function ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(co(e,e.next)||We(e.prev,e,e.next)===0)){if(hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function lr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ag(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Qm(i,n,s,r):Km(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),hr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=tg(ji(i),t,e),lr(i,t,e,n,s,r,2)):o===2&&eg(i,t,e,n,s,r):lr(ji(i),t,e,n,s,r,1);break}}}function Km(i){const t=i.prev,e=i,n=i.next;if(We(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,h=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&bs(s,a,r,c,o,l,g.x,g.y)&&We(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(We(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<f?u<h?u:h:f<h?f:h,_=a>c?a>l?a:l:c>l?c:l,m=u>f?u>h?u:h:f>h?f:h,p=Ha(d,g,t,e,n),E=Ha(_,m,t,e,n);let b=i.prevZ,v=i.nextZ;for(;b&&b.z>=p&&v&&v.z<=E;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&bs(a,u,c,f,l,h,b.x,b.y)&&We(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&bs(a,u,c,f,l,h,v.x,v.y)&&We(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&bs(a,u,c,f,l,h,b.x,b.y)&&We(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=E;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&bs(a,u,c,f,l,h,v.x,v.y)&&We(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function tg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!co(s,r)&&gu(s,n,n.next,r)&&ur(s,r)&&ur(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),hr(n),hr(n.next),n=i=r),n=n.next}while(n!==i);return ji(n)}function eg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ug(o,a)){let c=xu(o,a);o=ji(o,o.next),c=ji(c,c.next),lr(o,t,e,n,s,r,0),lr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ng(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=mu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(lg(l));for(s.sort(ig),r=0;r<s.length;r++)e=sg(s[r],e);return e}function ig(i,t){return i.x-t.x}function sg(i,t){const e=rg(i,t);if(!e)return t;const n=xu(e,i);return ji(n,n.next),ji(e,e.next)}function rg(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&bs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),ur(e,i)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&og(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function og(i,t){return We(i.prev,i,t.prev)<0&&We(t.next,i,i.next)<0}function ag(i,t,e,n){let s=i;do s.z===0&&(s.z=Ha(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cg(s)}function cg(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ha(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ug(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!hg(i,t)&&(ur(i,t)&&ur(t,i)&&fg(i,t)&&(We(i.prev,i,t.prev)||We(i,t.prev,t))||co(i,t)&&We(i.prev,i,i.next)>0&&We(t.prev,t,t.next)>0)}function We(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function co(i,t){return i.x===t.x&&i.y===t.y}function gu(i,t,e,n){const s=qr(We(i,t,e)),r=qr(We(i,t,n)),o=qr(We(e,n,i)),a=qr(We(e,n,t));return!!(s!==r&&o!==a||s===0&&Xr(i,e,t)||r===0&&Xr(i,n,t)||o===0&&Xr(e,i,n)||a===0&&Xr(e,t,n))}function Xr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qr(i){return i>0?1:i<0?-1:0}function hg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ur(i,t){return We(i.prev,i,i.next)<0?We(i,t,i.next)>=0&&We(i,i.prev,t)>=0:We(i,t,i.prev)<0||We(i,i.next,t)<0}function fg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xu(i,t){const e=new Ga(i.i,i.x,i.y),n=new Ga(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _l(i,t,e,n){const s=new Ga(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ga(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ti{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ti.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];vl(t),Ml(n,t);let o=t.length;e.forEach(vl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ml(n,e[c]);const a=jm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function vl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ml(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class uc extends Xe{constructor(t=new Ei([new Ut(.5,.5),new Ut(-.5,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new be(s,3)),this.setAttribute("uv",new be(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:pg;let b,v=!1,U,A,P,I;p&&(b=p.getSpacedPoints(u),v=!0,h=!1,U=p.computeFrenetFrames(u,!1),A=new L,P=new L,I=new L),h||(m=0,d=0,g=0,_=0);const S=a.extractPoints(l);let y=S.shape;const N=S.holes;if(!Ti.isClockWise(y)){y=y.reverse();for(let rt=0,Tt=N.length;rt<Tt;rt++){const O=N[rt];Ti.isClockWise(O)&&(N[rt]=O.reverse())}}const Q=Ti.triangulateShape(y,N),W=y;for(let rt=0,Tt=N.length;rt<Tt;rt++){const O=N[rt];y=y.concat(O)}function Y(rt,Tt,O){return Tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(Tt,O)}const B=y.length,k=Q.length;function H(rt,Tt,O){let Gt,At,Xt;const It=rt.x-Tt.x,ee=rt.y-Tt.y,qt=O.x-rt.x,C=O.y-rt.y,w=It*It+ee*ee,tt=It*C-ee*qt;if(Math.abs(tt)>Number.EPSILON){const xt=Math.sqrt(w),z=Math.sqrt(qt*qt+C*C),Z=Tt.x-ee/xt,st=Tt.y+It/xt,it=O.x-C/z,mt=O.y+qt/z,Ft=((it-Z)*C-(mt-st)*qt)/(It*C-ee*qt);Gt=Z+It*Ft-rt.x,At=st+ee*Ft-rt.y;const ut=Gt*Gt+At*At;if(ut<=2)return new Ut(Gt,At);Xt=Math.sqrt(ut/2)}else{let xt=!1;It>Number.EPSILON?qt>Number.EPSILON&&(xt=!0):It<-Number.EPSILON?qt<-Number.EPSILON&&(xt=!0):Math.sign(ee)===Math.sign(C)&&(xt=!0),xt?(Gt=-ee,At=It,Xt=Math.sqrt(w)):(Gt=It,At=ee,Xt=Math.sqrt(w/2))}return new Ut(Gt/Xt,At/Xt)}const dt=[];for(let rt=0,Tt=W.length,O=Tt-1,Gt=rt+1;rt<Tt;rt++,O++,Gt++)O===Tt&&(O=0),Gt===Tt&&(Gt=0),dt[rt]=H(W[rt],W[O],W[Gt]);const yt=[];let bt,Ot=dt.concat();for(let rt=0,Tt=N.length;rt<Tt;rt++){const O=N[rt];bt=[];for(let Gt=0,At=O.length,Xt=At-1,It=Gt+1;Gt<At;Gt++,Xt++,It++)Xt===At&&(Xt=0),It===At&&(It=0),bt[Gt]=H(O[Gt],O[Xt],O[It]);yt.push(bt),Ot=Ot.concat(bt)}for(let rt=0;rt<m;rt++){const Tt=rt/m,O=d*Math.cos(Tt*Math.PI/2),Gt=g*Math.sin(Tt*Math.PI/2)+_;for(let At=0,Xt=W.length;At<Xt;At++){const It=Y(W[At],dt[At],Gt);Mt(It.x,It.y,-O)}for(let At=0,Xt=N.length;At<Xt;At++){const It=N[At];bt=yt[At];for(let ee=0,qt=It.length;ee<qt;ee++){const C=Y(It[ee],bt[ee],Gt);Mt(C.x,C.y,-O)}}}const Zt=g+_;for(let rt=0;rt<B;rt++){const Tt=h?Y(y[rt],Ot[rt],Zt):y[rt];v?(P.copy(U.normals[0]).multiplyScalar(Tt.x),A.copy(U.binormals[0]).multiplyScalar(Tt.y),I.copy(b[0]).add(P).add(A),Mt(I.x,I.y,I.z)):Mt(Tt.x,Tt.y,0)}for(let rt=1;rt<=u;rt++)for(let Tt=0;Tt<B;Tt++){const O=h?Y(y[Tt],Ot[Tt],Zt):y[Tt];v?(P.copy(U.normals[rt]).multiplyScalar(O.x),A.copy(U.binormals[rt]).multiplyScalar(O.y),I.copy(b[rt]).add(P).add(A),Mt(I.x,I.y,I.z)):Mt(O.x,O.y,f/u*rt)}for(let rt=m-1;rt>=0;rt--){const Tt=rt/m,O=d*Math.cos(Tt*Math.PI/2),Gt=g*Math.sin(Tt*Math.PI/2)+_;for(let At=0,Xt=W.length;At<Xt;At++){const It=Y(W[At],dt[At],Gt);Mt(It.x,It.y,f+O)}for(let At=0,Xt=N.length;At<Xt;At++){const It=N[At];bt=yt[At];for(let ee=0,qt=It.length;ee<qt;ee++){const C=Y(It[ee],bt[ee],Gt);v?Mt(C.x,C.y+b[u-1].y,b[u-1].x+O):Mt(C.x,C.y,f+O)}}}at(),nt();function at(){const rt=s.length/3;if(h){let Tt=0,O=B*Tt;for(let Gt=0;Gt<k;Gt++){const At=Q[Gt];Dt(At[2]+O,At[1]+O,At[0]+O)}Tt=u+m*2,O=B*Tt;for(let Gt=0;Gt<k;Gt++){const At=Q[Gt];Dt(At[0]+O,At[1]+O,At[2]+O)}}else{for(let Tt=0;Tt<k;Tt++){const O=Q[Tt];Dt(O[2],O[1],O[0])}for(let Tt=0;Tt<k;Tt++){const O=Q[Tt];Dt(O[0]+B*u,O[1]+B*u,O[2]+B*u)}}n.addGroup(rt,s.length/3-rt,0)}function nt(){const rt=s.length/3;let Tt=0;_t(W,Tt),Tt+=W.length;for(let O=0,Gt=N.length;O<Gt;O++){const At=N[O];_t(At,Tt),Tt+=At.length}n.addGroup(rt,s.length/3-rt,1)}function _t(rt,Tt){let O=rt.length;for(;--O>=0;){const Gt=O;let At=O-1;At<0&&(At=rt.length-1);for(let Xt=0,It=u+m*2;Xt<It;Xt++){const ee=B*Xt,qt=B*(Xt+1),C=Tt+Gt+ee,w=Tt+At+ee,tt=Tt+At+qt,xt=Tt+Gt+qt;pt(C,w,tt,xt)}}}function Mt(rt,Tt,O){c.push(rt),c.push(Tt),c.push(O)}function Dt(rt,Tt,O){Et(rt),Et(Tt),Et(O);const Gt=s.length/3,At=E.generateTopUV(n,s,Gt-3,Gt-2,Gt-1);Jt(At[0]),Jt(At[1]),Jt(At[2])}function pt(rt,Tt,O,Gt){Et(rt),Et(Tt),Et(Gt),Et(Tt),Et(O),Et(Gt);const At=s.length/3,Xt=E.generateSideWallUV(n,s,At-6,At-3,At-2,At-1);Jt(Xt[0]),Jt(Xt[1]),Jt(Xt[3]),Jt(Xt[1]),Jt(Xt[2]),Jt(Xt[3])}function Et(rt){s.push(c[rt*3+0]),s.push(c[rt*3+1]),s.push(c[rt*3+2])}function Jt(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ba[s.type]().fromJSON(s)),new uc(n,t.options)}}const pg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new Ut(r,o),new Ut(a,c),new Ut(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Ut(o,1-c),new Ut(l,1-f),new Ut(h,1-g),new Ut(_,1-p)]:[new Ut(a,1-c),new Ut(u,1-f),new Ut(d,1-g),new Ut(m,1-p)]}};function mg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class mn extends lc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new mn(t.radius,t.detail)}}class lo extends Xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let f=t;const h=(e-t)/s,d=new L,g=new Ut;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const E=p+m,b=E,v=E+n+1,U=E+n+2,A=E+1;a.push(b,v,A),a.push(v,U,A)}}this.setIndex(a),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Yi extends Xe{constructor(t=new Ei([new Ut(0,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new be(s,3)),this.setAttribute("normal",new be(r,3)),this.setAttribute("uv",new be(o,2));function l(u){const f=s.length/3,h=u.extractPoints(e);let d=h.shape;const g=h.holes;Ti.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const E=g[m];Ti.isClockWise(E)===!0&&(g[m]=E.reverse())}const _=Ti.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const E=g[m];d=d.concat(E)}for(let m=0,p=d.length;m<p;m++){const E=d[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,p=_.length;m<p;m++){const E=_[m],b=E[0]+f,v=E[1]+f,U=E[2]+f;n.push(b,v,U),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return gg(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Yi(n,t.curveSegments)}}function gg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Fe extends Xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new L,h=new L,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],b=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){const A=U/e;f.x=-t*Math.cos(s+A*r)*Math.sin(o+b*a),f.y=t*Math.cos(o+b*a),f.z=t*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(A+v,1-b),E.push(l++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const b=u[p][E+1],v=u[p][E],U=u[p+1][E],A=u[p+1][E+1];(p!==0||o>0)&&d.push(b,v,A),(p!==n-1||c<Math.PI)&&d.push(v,U,A)}this.setIndex(d),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ve extends Xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new L,f=new L,h=new L;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,E=(s+1)*d+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ie extends es{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hc extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _u extends hc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $o=new Re,yl=new L,Sl=new L;class vu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(yl),Sl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sl),e.updateMatrixWorld(),$o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wl=new Re,Js=new L,Yo=new L;class xg extends vu{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),Yo.copy(n.position),Yo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Yo),n.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),wl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl)}}class nr extends hc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _g extends vu{constructor(){super(new nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mu extends hc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new _g}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=bl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function bl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);function Mg(i){const t=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,e=new Um({canvas:i,antialias:!t,powerPreference:"high-performance"});let s=Math.min(t?1.5:2,window.devicePixelRatio||1);e.setPixelRatio(s);let r=0,o=0;e.toneMapping=li;const a=new Nn(52,1,.4,5e3);let c=null,l=()=>{};const u=new vg;let f=0,h=!0;function d(){const _=i.clientWidth||window.innerWidth,m=i.clientHeight||window.innerHeight;e.setSize(_,m,!1),a.aspect=_/m,a.updateProjectionMatrix()}new ResizeObserver(d).observe(i),d();function g(){if(!h)return;const _=u.getDelta(),m=Math.min(.1,_);f+=m,r++,o+=_,o>1.5&&(r/o<28&&s>.75&&(s=Math.max(.75,s*.8),e.setPixelRatio(s),d()),r=0,o=0),l(f,m,Math.min(.33,_)),c&&e.render(c,a),requestAnimationFrame(g)}return g(),{renderer:e,camera:a,voir(_){c=_},definir(_,m){c=_,l=m||(()=>{})},temps:()=>f,arreter(){h=!1,e.dispose()}}}function or(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Xe;let l=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(const u in r){const f=El(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][h]);const g=El(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function El(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new rn(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const f=c/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){const _=u.getComponent(h,g);a.setComponent(h+f,g,_)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function $i(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const St=(i,t={})=>new ie({color:i,roughness:.85,metalness:0,flatShading:!0,...t});function yg(i,t,e,n,s=8){const r=new L().subVectors(t,i),o=r.length(),a=new $t(n,e,o,s,1),c=new Qi().setFromUnitVectors(new L(0,1,0),r.clone().normalize());return a.applyMatrix4(new Re().compose(new L().addVectors(i,t).multiplyScalar(.5),c,new L(1,1,1))),a}function Sg(i,t,e,n=8){const s=new ac(i),r=Math.max(6,Math.floor(s.getLength()/3)),o=[];let a=s.getPoint(0);for(let c=1;c<=r;c++){const l=c/r,u=s.getPoint(l),f=t+(e-t)*((c-1)/r),h=t+(e-t)*l;o.push(yg(a,u,f,h,n));const d=new Fe(h,n,6);d.translate(u.x,u.y,u.z),o.push(d),a=u}return{geometrie:wg(o),courbe:s}}function wg(i){const t=i.map(e=>{const n=e.index?e.toNonIndexed():e;return n.deleteAttribute("uv"),n});return or(t,!1)}const bg=(()=>{const i=new Ei;return i.moveTo(0,0),i.bezierCurveTo(.5,.4,.5,1.1,0,1.6),i.bezierCurveTo(-.5,1.1,-.5,.4,0,0),i})();function fc(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new sc(i)}function Eg(i,t=[]){i.updateMatrixWorld(!0);const e=new Set(t),n=new Map,s=o=>{if(!e.has(o)){if(o.isMesh&&!o.isInstancedMesh){const a=o.material;if(a&&a.isMeshStandardMaterial&&!a.map&&!a.transparent&&!a.polygonOffset&&a.emissive.getHex()===0&&o.visible&&!o.userData.garder){const c=`${a.flatShading}|${a.roughness}|${a.metalness}|${a.side}`;n.has(c)||n.set(c,{m:a,liste:[]}),n.get(c).liste.push(o);return}}for(const a of[...o.children])s(a)}};s(i);let r=0;for(const{m:o,liste:a}of n.values()){const c=a.map(u=>{const f=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();f.applyMatrix4(u.matrixWorld),f.deleteAttribute("uv");const h=f.attributes.position.count,d=new Float32Array(h*3),g=u.material.color;for(let _=0;_<h;_++)d.set([g.r,g.g,g.b],_*3);return f.setAttribute("color",new rn(d,3)),f}),l=new V(or(c,!1),new ie({vertexColors:!0,roughness:o.roughness,metalness:o.metalness,flatShading:o.flatShading,side:o.side}));for(const u of a)u.parent&&u.parent.remove(u),u.geometry.dispose();i.add(l),r+=a.length}return r}const Tg=(i,t,e)=>[Math.min(19.4,Math.max(-19.4,i)),Math.min(9.4,11.5+8*(1-Math.abs(i)/20),Math.max(.9,t)),Math.min(14.4,Math.max(-14.5,e))],Ag={xMin:-18.6,xMax:18.6,zMin:-13.6,zMax:13.6};function me(i,t){for(const[e,n]of Object.entries(t))n&&n.isVector3?i[e].copy(n):n&&n.isEuler?i.rotation.copy(n):i[e]=n;return i}function wn(i,t,e,n=null){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new sc(s);return r.colorSpace=Pn,n&&(r.wrapS=r.wrapT=ar,r.repeat.set(n[0],n[1])),r}function Rg(){const i=new cu,t=$i(77),e=[];function n(x,D,X,ft,Nt,fe,ke,{solide:M=!1,rot:R=0,mate:F={}}={}){const G=new V(new ne(x,D,X),St(ke,F));return G.position.set(ft,Nt,fe),G.rotation.y=R,i.add(G),M&&e.push({min:[ft-x/2,Nt-D/2,fe-X/2],max:[ft+x/2,Nt+D/2,fe+X/2]}),G}function s(x,D,X,ft,Nt,fe,ke,M=12){const R=new V(new $t(x,D,X,M),St(ke));return R.position.set(ft,Nt,fe),i.add(R),R}i.add(new _u(16773336,8016948,.55));const r=new Mu(16773839,.9);r.position.set(16,20,-6),i.add(r);const o=new nr(16767392,420,60,1.6);o.position.set(0,14,0),i.add(o);const a=new nr(16769192,150,24,1.8);a.position.set(-12,8,-10),i.add(a);const c=wn(512,512,(x,D,X)=>{const ft=$i(5);for(let Nt=0;Nt<8;Nt++){x.fillStyle=["#b98a58","#a97b4b","#c29463","#b08050"][Nt%4],x.fillRect(0,Nt*64,D,62),x.fillStyle="rgba(0,0,0,0.22)",x.fillRect(0,Nt*64+62,D,2),x.fillStyle="rgba(0,0,0,0.12)";for(let fe=0;fe<14;fe++)x.fillRect(ft()*D,Nt*64+6+ft()*50,30+ft()*80,1.4);x.fillStyle="rgba(0,0,0,0.25)",x.fillRect(Nt*173%400+30,Nt*64,2,62)}},[6,5]),l=new V(new qe(40,30),new ie({map:c,roughness:.9}));l.rotation.x=-Math.PI/2,i.add(l);const u=wn(512,512,(x,D)=>{for(let X=0;X<6;X++)x.fillStyle=["#8a5e3c","#7e5535","#935f3b"][X%3],x.fillRect(X*86,0,84,512),x.fillStyle="rgba(0,0,0,0.3)",x.fillRect(X*86+84,0,2,512)},[4,1]),f=new ie({map:u,roughness:.95}),h=(x,D,X,ft,Nt,fe=0)=>{const ke=new V(new qe(x,D),f);return ke.position.set(X,ft,Nt),ke.rotation.y=fe,i.add(ke),ke};h(40,12,0,6,-15,0),h(30,12,-20,6,0,Math.PI/2),h(30,12,20,6,0,-Math.PI/2);const d=(x,D,X,ft)=>{const Nt=f.clone();Nt.map=u.clone(),Nt.map.repeat.set(x/10,D/12),Nt.map.needsUpdate=!0;const fe=new V(new qe(x,D),Nt);fe.position.set(X,ft,15),fe.rotation.y=Math.PI,i.add(fe)};d(12,12,-14,6),d(12,12,14,6),d(16,2,0,11);const g=new V(new Yi((()=>{const x=new Ei;return x.moveTo(-20,12),x.lineTo(20,12),x.lineTo(0,21),x.closePath(),x})()),f);g.position.set(0,0,-15),i.add(g);const _=g.clone();_.position.set(0,0,15),_.rotation.y=Math.PI,i.add(_);const m=Math.atan2(9,20),p=Math.hypot(20,9);for(const x of[-1,1]){const D=new V(new ne(p+1,.5,31),St(5913894));D.position.set(x*10,16.55,0),D.rotation.z=-x*m,i.add(D)}for(let x=-13;x<=13;x+=6.5){n(40,.9,.9,0,12.1,x,3810837);for(const D of[-1,1]){const X=new V(new ne(p,.8,.8),St(3810837));X.position.set(D*10,16.1,x),X.rotation.z=-D*m,i.add(X)}n(.8,4.4,.8,0,14.4,x,3810837)}n(.9,.9,30,0,20.4,0,3810837);const E=wn(512,512,(x,D,X)=>{const ft=x.createLinearGradient(0,0,0,X);ft.addColorStop(0,"#1f8fe6"),ft.addColorStop(.55,"#7fe3dc"),ft.addColorStop(1,"#fff3c0"),x.fillStyle=ft,x.fillRect(0,0,D,X),x.fillStyle="#5fb7b8",x.beginPath(),x.ellipse(120,360,220,90,0,0,6.3),x.fill(),x.fillStyle="#4fb45a",x.fillRect(0,380,D,140),x.fillStyle="#7b4f2e",x.fillRect(256,190,34,200);for(const[Nt,fe,ke,M]of[[240,170,90,"#23a04c"],[330,190,70,"#45c755"],[200,220,60,"#45c755"],[270,120,70,"#8fe55f"]])x.fillStyle=M,x.beginPath(),x.arc(Nt,fe,ke,0,6.3),x.fill();x.fillStyle="#ff8a2b";for(const[Nt,fe]of[[230,140],[320,170],[190,215]])x.beginPath(),x.arc(Nt,fe,7,0,6.3),x.fill();x.fillStyle="#fffbe0",x.beginPath(),x.arc(420,90,36,0,6.3),x.fill()}),b=new V(new En(4.2,40),new Le({map:E}));b.position.set(9,9,-14.85),i.add(b);const v=new V(new Ve(4.3,.34,8,40),St(3810837));v.position.set(9,9,-14.7),i.add(v),n(8.6,.24,.3,9,9,-14.7,3810837),n(.24,8.6,.3,9,9,-14.7,3810837);const U=new V(new qe(9,34),new Le({color:16773824,transparent:!0,opacity:.1,blending:Wn,depthWrite:!1,side:Be,fog:!1}));U.position.set(11.5,5,-7.5),U.rotation.set(-.95,-.3,.12),i.add(U),n(10.4,.45,3.6,-12,3.2,-12.6,11565637,{solide:!0});for(const[x,D]of[[-16.8,-14.1],[-7.2,-14.1],[-16.8,-11.1],[-7.2,-11.1]])n(.5,3.2,.5,x,1.6,D,8015920);n(9.6,.25,3,-12,1.2,-12.6,9264952),e.push({min:[-17.2,0,-14.4],max:[-6.8,3.5,-10.8]}),n(1.2,1.1,1.4,-17,3.95,-12.6,4871528),n(.35,.9,1.5,-16.2,4.05,-12.6,8095636);const A=wn(256,128,(x,D,X)=>{x.fillStyle="#d9b27a",x.fillRect(0,0,D,X),x.fillStyle="rgba(80,50,20,0.45)";for(let ft=6;ft<D;ft+=12)for(let Nt=6;Nt<X;Nt+=12)x.beginPath(),x.arc(ft,Nt,1.5,0,6.3),x.fill()}),P=new V(new qe(12,6),new ie({map:A,roughness:.9}));P.position.set(-12,8.6,-14.88),i.add(P);const I=[[12.6,.3,0,3.1],[12.6,.3,0,-3.1],[.3,6.4,6.2,0],[.3,6.4,-6.2,0]];for(const[x,D,X,ft]of I)n(x,D,.3,-12+X,8.6+ft,-14.75,7031343);const S=10134704,y=new ge;y.add(me(new V(new $t(.1,.12,2.6,8),St(12159576)),{position:new L(0,0,0)})),y.add(me(new V(new ne(1.3,.6,.5),St(7239554)),{position:new L(0,1.4,0)})),y.position.set(-16,8.8,-14.6),i.add(y);const N=new ge;N.add(new V(new $t(.14,.14,2.8,8),St(S)));const J=new V(new Ve(.42,.14,6,10,Math.PI*1.6),St(S));J.position.y=1.5,N.add(J),N.position.set(-14.4,8.7,-14.6),N.rotation.z=.2,i.add(N);const Q=new Ei;Q.moveTo(0,0),Q.lineTo(3.4,.9),Q.lineTo(3.4,-.9),Q.closePath();const W=new V(new Yi(Q),new ie({color:13160664,side:Be,flatShading:!0}));W.position.set(-12.3,9.6,-14.6),W.rotation.z=-.5,i.add(W),n(.7,.4,.5,-12.1,9.9,-14.6,12600623);for(const[x,D]of[[-10.2,14035002],[-9.6,16756768],[-9,4165606]])s(.17,.17,.9,x,7.6,-14.6,D,8),s(.05,.05,1.4,x,6.55,-14.6,S,6);for(const[x,D,X]of[[-15.2,6.9,.2],[-13.4,6.6,-.15]]){const ft=new ge;for(const Nt of[-1,1]){const fe=new V(new ne(.28,2.4,.2),St(S));fe.rotation.z=Nt*.14,ft.add(fe);const ke=new V(new ne(.34,1.2,.26),St(14035002));ke.position.set(Nt*.34,-.95,0),ke.rotation.z=Nt*.14,ft.add(ke)}ft.position.set(x,D,-14.6),ft.rotation.z=X,i.add(ft)}for(const[x,D,X]of[[-8.4,8,16765517],[-7.7,6.9,16742981]]){const ft=new V(new Ve(.55,.22,8,16),St(X));ft.position.set(x,D,-14.6),i.add(ft)}const Y=new ge;Y.add(me(new V(new $t(.1,.1,2.2,8),St(12159576)),{rotation:new Tn(0,0,Math.PI/2)})),Y.add(me(new V(new ne(.5,.9,.5),St(7239554)),{position:new L(-1.1,.1,0)})),Y.position.set(-14.5,3.62,-12),Y.rotation.y=.6,i.add(Y);for(const[x,D,X]of[[-9.4,-13.2,14035002],[-8.6,-12.4,4165606],[-10.2,-11.8,4052640]])s(.42,.42,.7,x,3.78,D,X,10),s(.3,.3,.12,x,4.2,D,14541802,10);const B=new V(new $t(.5,.5,1.1,10),new ie({color:13625583,transparent:!0,opacity:.45}));B.position.set(-15.6,3.98,-13.4),i.add(B);for(let x=0;x<12;x++){const D=new V(new ne(.1,.45,.1),St(11581632));D.position.set(-15.6+(t()-.5)*.6,3.7+t()*.5,-13.4+(t()-.5)*.6),D.rotation.set(t(),t(),t()),i.add(D)}s(.5,.5,.2,-10.5,3.52,-13.6,3817286);const k=new V(new $t(.08,.08,4,6),St(3817286));k.position.set(-10.5,5.5,-13.6),i.add(k);const H=new V(new wi(.9,.9,12,1,!0),new ie({color:16756768,side:Be,emissive:16756768,emissiveIntensity:.4}));H.position.set(-10.5,7.5,-13.2),H.rotation.x=Math.PI,i.add(H);function dt(x,D,X,ft=0,Nt=0){const fe=new ge;fe.add(new V(new ne(3*X,3*X,3*X),St(12159576)));for(const ke of[-1.35,1.35]){const M=new V(new ne(3.1*X,.3*X,3.1*X),St(8015920));M.position.y=ke*X,fe.add(M)}for(const[ke,M]of[[-1.35,-1.35],[1.35,-1.35],[-1.35,1.35],[1.35,1.35]]){const R=new V(new ne(.3*X,3.1*X,.3*X),St(8015920));R.position.set(ke*X,0,M*X),fe.add(R)}fe.position.set(x,ft+1.5*X,D),fe.rotation.y=Nt,i.add(fe),e.push({min:[x-1.5*X,ft,D-1.5*X],max:[x+1.5*X,ft+3*X,D+1.5*X]})}dt(13.5,-11.2,1,0,.1),dt(16.8,-11.8,1,0,-.08),dt(15.2,-11.4,1,3,.2),dt(16.2,-7.4,.8,0,.3);function yt(x,D,X){const ft=new ge;ft.add(new V(new $t(1.3,1.3,3.2,14),St(X)));for(const Nt of[-1.1,1.1]){const fe=new V(new Ve(1.32,.09,6,16),St(2830648));fe.rotation.x=Math.PI/2,fe.position.y=Nt,ft.add(fe)}ft.position.set(x,1.6,D),i.add(ft),e.push({min:[x-1.3,0,D-1.3],max:[x+1.3,3.2,D+1.3]})}yt(-18.2,6.2,4160176),yt(-16.4,8.4,11553338),n(3.4,1.6,1.7,-3.4,.8,-8.4,14035002,{solide:!0}),n(3.5,.2,1.8,-3.4,1.45,-8.4,15223378);const bt=new V(new Ve(.7,.07,6,12,Math.PI),St(2830648));bt.position.set(-3.4,1.7,-8.4),i.add(bt);const Ot=new ge;Ot.add(me(new V(new $t(2.4,2.4,.4,20),St(11041354)),{position:new L(0,.2,0)})),Ot.add(me(new V(new $t(2.4,2.4,.4,20),St(11041354)),{position:new L(0,2.6,0)})),Ot.add(me(new V(new $t(1.2,1.2,2.4,14),St(9264952)),{position:new L(0,1.4,0)})),Ot.position.set(5,0,-6.4),i.add(Ot),e.push({min:[2.6,0,-8.8],max:[7.4,2.8,-4]}),s(.5,.5,.7,5.6,3.15,-6.2,14035002,10),n(1,.7,1.4,4.4,3.2,-6.8,16765517),n(.4,11,7,19.6,5.5,4.5,7031343),n(.4,11,7,17.6,5.5,4.5,7031343);const Zt=[16742981,6013163,10216314,13081599,16765517,16734815];for(const x of[1.2,4.2,7.2,10.2]){n(2.6,.3,7,18.6,x,4.5,9264952);for(let D=0;D<6;D++){const X=Zt[(D+Math.floor(x))%6];D%2?s(.45,.45,.9+D%3*.3,18.6,x+.65+D%3*.1,1.9+D*.95,X,10):n(1.1,.9+D%2*.3,.8,18.6,x+.65,1.9+D*.95,X)}}e.push({min:[17.4,0,.9],max:[19.9,11,8.1]});for(const x of[-.9,.9]){const D=new V(new ne(.28,12.5,.28),St(12159576));D.position.set(-18.6,5.9,-4+x),D.rotation.z=-.13,i.add(D)}for(let x=0;x<9;x++){const D=new V(new ne(.2,.2,2),St(11041354));D.position.set(-19+x*.12,1.2+x*1.3,-4),i.add(D)}const at=new ge;for(let x=0;x<6;x++){const D=new V(new Ve(.8-x*.02,.16,6,16),St(14137466));D.position.z=x*.28,at.add(D)}at.position.set(-19.5,7,-10),at.rotation.y=Math.PI/2,i.add(at),s(.1,.1,.8,-19.7,8.1,-10,2830648,6).rotation.z=Math.PI/2;const nt=new ge,_t=new V(new $t(3,3.4,.8,20),St(5531516));_t.position.y=.4,nt.add(_t);const Mt=new V(new $t(2.4,2.4,6.4,24,1,!0),new ie({color:10478574,transparent:!0,opacity:.28,side:Be,roughness:.05}));Mt.position.y=4,nt.add(Mt);const Dt=new V(new $t(2.3,2.3,.2,20),new ie({color:10478574,emissive:6013163,emissiveIntensity:.9}));Dt.position.y=.9,nt.add(Dt);const pt=new V(new $t(2.7,2.2,1,20),St(7243424));pt.position.y=7.5,nt.add(pt);const Et=new V(new Fe(.4,12,12),new ie({color:16734815,emissive:16734815,emissiveIntensity:1}));Et.position.y=9.2,nt.add(Et);const Jt=new V(new $t(.1,.1,1.8,6),St(7243424));Jt.position.y=8.4,nt.add(Jt);const rt=new nr(8382463,60,14);rt.position.y=3,nt.add(rt);const Tt=new V(new $t(.5,2.1,6.4,24,1,!0),new Le({color:8382463,transparent:!0,opacity:0,blending:Wn,depthWrite:!1,side:Be}));Tt.position.y=4.1,Tt.visible=!1,nt.add(Tt);const O={position:new L(-1,0,-11),platY:1,ouvrirVerre(x){Mt.position.y=4+x*5.6},alarme(x){Et.material.color.setHex(x>0?16719390:16734815),Et.material.emissive.setHex(x>0?16719390:16734815),rt.color.setHex(x>0?16726570:8382463),rt.intensity=60+x*340},secouer(x){nt.position.set(-1+(Math.random()-.5)*x,0,-11+(Math.random()-.5)*x)},exploser(){nt.visible=!1,Gt.visible=!0,Tt.visible=!1},reparer(){nt.visible=!0,Gt.visible=!1,nt.position.set(-1,0,-11),Mt.position.y=4,Tt.visible=!1,Et.material.color.setHex(16734815),Et.material.emissive.setHex(16734815),rt.color.setHex(8382463),rt.intensity=60,Dt.material.emissiveIntensity=.9},rayon(x){Tt.visible=x>.01,Tt.material.opacity=.34*Math.min(1.4,x),rt.intensity=60+x*260,Dt.material.emissiveIntensity=.9+x*1.6}},Gt=new ge;Gt.add(me(new V(new $t(3,3.4,.8,20),St(2830134)),{position:new L(0,.4,0)})),Gt.add(me(new V(new $t(2.3,2.3,.2,16),St(1316378)),{position:new L(0,.9,0)}));for(let x=0;x<6;x++){const D=x/6*6.28,X=new V(new $t(.13,.17,1.6+t()*2.4,6),St(4869976));X.position.set(Math.cos(D)*2.2,1.6,Math.sin(D)*2.2),X.rotation.set((t()-.5)*.9,0,(t()-.5)*.9),Gt.add(X)}const At=new V(new En(6,28),new Le({color:328965,transparent:!0,opacity:.55,depthWrite:!1}));At.rotation.x=-Math.PI/2,At.position.y=.05,Gt.add(At),Gt.position.set(-1,0,-11),Gt.visible=!1,i.add(Gt),nt.position.set(-1,0,-11),i.add(nt),e.push({min:[-4.4,0,-14.4],max:[2.4,9,-7.6]});const Xt=wn(256,256,(x,D)=>{x.fillStyle="#b8453a",x.fillRect(0,0,D,D);for(const[X,ft]of[[118,"#e8c9a0"],[96,"#2f6f8a"],[70,"#e8c9a0"],[46,"#b8453a"],[22,"#ffd24d"]])x.fillStyle=ft,x.beginPath(),x.arc(128,128,X,0,6.3),x.fill()}),It=new V(new En(6,40),new ie({map:Xt,roughness:1}));It.rotation.x=-Math.PI/2,It.position.set(1,.03,4),i.add(It);for(const[x,D,X,ft]of[[-17,10.8,1.2,.3],[-14.2,11.4,.9,-.2],[-16.4,11,.8,.1]]){const Nt=new V(new ne(2.4*X,1.8*X,2*X),St(13148268));Nt.position.set(x,D===11?1.7:.9*X,D),Nt.rotation.y=ft,i.add(Nt),e.push({min:[x-1.2*X,0,D-X],max:[x+1.2*X,1.8*X,D+X]})}for(let x=0;x<5;x++){const D=new V(new $t(.28,.28,3.4,8),St(15327952));D.position.set(11+x*.6,1.5,11.5),D.rotation.set(.1,0,Math.PI/2-.5+x*.1),i.add(D)}const ee=new ge;ee.add(me(new V(new $t(.06,.06,6,6),St(2830648)),{position:new L(0,3,0)})),ee.add(new V(new wi(2.1,1.6,16,1,!0),new ie({color:4165482,side:Be,emissive:1923648,emissiveIntensity:.4}))),ee.add(me(new V(new Fe(.6,12,12),new Le({color:16773832})),{position:new L(0,-.3,0)})),ee.position.set(0,14.4,0),i.add(ee);const qt=wn(512,128,(x,D,X)=>{x.fillStyle="#cfc8b4",x.fillRect(0,0,D,X);for(let ft=0;ft<4;ft++){const Nt=ft*128+10;x.fillStyle="rgba(0,0,0,0.22)",x.fillRect(Nt,14,108,100),x.fillStyle="#e4dcc6",x.fillRect(Nt+4,18,100,92),x.fillStyle="rgba(255,255,255,0.4)",x.fillRect(Nt+4,18,100,3)}x.fillStyle="rgba(0,0,0,0.4)",x.fillRect(0,0,D,4),x.fillRect(0,X-4,D,4)}),C=new ie({map:qt,roughness:.55,metalness:.15});for(let x=0;x<5;x++){const D=new V(new ne(16,.3,1.9),C);D.position.set(0,11,13.4-x*1.95),i.add(D)}n(.8,10.3,.5,-8.4,5.15,14.7,5913894),n(.8,10.3,.5,8.4,5.15,14.7,5913894),n(17.6,.8,.5,0,10,14.7,5913894);const w=9081241;for(const x of[-1,1])n(.25,9.8,.3,x*8,4.9,14.2,w),n(.25,.25,9.6,x*8,10.7,9.6,w);const tt=new V(new $t(.2,.2,14.4,10),St(w));tt.rotation.z=Math.PI/2,tt.position.set(0,10.8,14.1),i.add(tt);for(let x=-6;x<=6;x++){const D=new V(new Ve(.34,.07,6,12),St(5989488));D.rotation.y=Math.PI/2,D.position.set(x*.5-2.4,10.8,14.1),i.add(D)}n(2.2,1.3,1.2,5.8,12,14.3,4872810);const xt=new V(new Fe(.16,8,8),new ie({color:4052602,emissive:4052602,emissiveIntensity:1}));xt.position.set(5.8,12,13.62),i.add(xt),n(1,1.7,.16,10.2,4.2,14.9,15327952),s(.26,.26,.14,10.2,4.65,14.8,14035002,12).rotation.x=Math.PI/2,s(.26,.26,.14,10.2,3.8,14.8,4052602,12).rotation.x=Math.PI/2;const z=new V(new qe(15.6,9),new Le({color:16774864,transparent:!0,opacity:.2,blending:Wn,depthWrite:!1}));z.rotation.x=-Math.PI/2,z.position.set(0,.05,10.4),i.add(z),i.background=new pe(9425906),i.fog=new nc(13495024,90,230);const Z=wn(16,256,(x,D,X)=>{const ft=x.createLinearGradient(0,0,0,X);ft.addColorStop(0,"#2f8fe0"),ft.addColorStop(.55,"#8fd9f2"),ft.addColorStop(.75,"#e6f6ee"),ft.addColorStop(1,"#e6f6ee"),x.fillStyle=ft,x.fillRect(0,0,D,X)}),st=new V(new Fe(300,24,16),new Le({map:Z,side:gn,fog:!1}));st.position.set(0,-20,60),i.add(st);const it=wn(256,256,(x,D,X)=>{const ft=$i(21);x.fillStyle="#58b84a",x.fillRect(0,0,D,X);for(let Nt=0;Nt<900;Nt++)x.fillStyle=["#4aa83f","#66c455","#52b146"][Nt%3],x.fillRect(ft()*D,ft()*X,2,5+ft()*5);for(let Nt=0;Nt<26;Nt++)x.fillStyle=["#ffffff","#ffd24d","#ff8fbf"][Nt%3],x.beginPath(),x.arc(ft()*D,ft()*X,2.2,0,6.3),x.fill()},[40,28]),mt=new V(new qe(320,200),new ie({map:it,roughness:1}));mt.rotation.x=-Math.PI/2,mt.position.set(0,-.03,114),i.add(mt),n(16,.3,1.2,0,0,15.6,10261640);for(let x=0;x<7;x++)n(4.4,.12,3.2,Math.sin(x*.9)*2.6,.04,20+x*5.2,12104356);for(let x=-60;x<=60;x+=3)n(.6,3.2,.3,x,1.6,52,15854034),n(3,.3,.2,x+1.5,2.2,52,15854034);const Ft=new ge,ut=new V(new Fe(1.5,16,12),St(16734815,{flatShading:!1}));ut.position.set(-9,1.5,26),Ft.add(ut);for(const x of[0,1]){const D=new V(new Ve(1.5,.12,6,20),St(16777215));D.position.set(-9,1.5,26),D.rotation.set(x?Math.PI/2:0,x?0:.3,0),Ft.add(D)}[[8,24,16742981,0],[10,24.6,6013163,.3],[9,24.2,16765517,-.2]].forEach(([x,D,X,ft],Nt)=>{const fe=new V(new ne(1.8,1.8,1.8),St(X));fe.position.set(x,.9+(Nt===2?1.8:0),D),fe.rotation.y=ft,Ft.add(fe)});const Rt=new ge;Rt.add(me(new V(new ne(4.2,1.4,2),St(16756768)),{position:new L(0,1.3,0)})),Rt.add(me(new V(new ne(1.5,1.4,2),St(14035002)),{position:new L(2.4,1.6,0)}));for(const[x,D]of[[-1.3,-1],[-1.3,1],[1.8,-1],[1.8,1]]){const X=new V(new $t(.5,.5,.3,12),St(2303531));X.rotation.x=Math.PI/2,X.position.set(x,.5,D),Rt.add(X)}Rt.position.set(-1,0,33),Rt.rotation.y=.6,Ft.add(Rt);const Ht=new V(new $t(3.2,3.2,.6,20),St(4165606));Ht.position.set(14,.3,36),Ft.add(Ht);const Yt=new V(new $t(2.9,2.9,.65,20),St(15784352));Yt.position.set(14,.32,36),Ft.add(Yt);const Pt=new V(new $t(.9,.7,1.2,10),St(16748479));Pt.position.set(15.2,1.2,36.6),Ft.add(Pt);const re=new V(new ne(.2,.15,1.8),St(6013163));re.position.set(13,.8,35),re.rotation.y=.5,Ft.add(re);const oe=new V(new $t(1.1,1.1,.14,16),St(10216314));oe.position.set(-15,.1,40),Ft.add(oe);for(const x of[-1,1]){const D=new V(new $t(.12,.12,8,6),St(11553338));D.position.set(24+x*3.2,4,30),D.rotation.z=-x*.18,Ft.add(D);const X=D.clone();X.position.z=33,Ft.add(X)}const ae=new V(new $t(.12,.12,7.6,6),St(11553338));ae.rotation.z=Math.PI/2,ae.position.set(24,7.7,31.5),Ft.add(ae);for(const x of[-1.2,1.2]){const D=new V(new $t(.03,.03,6,4),St(5592405));D.position.set(24+x,4.7,31.5),Ft.add(D)}const $=new V(new ne(2.6,.2,1),St(16765517));$.position.set(24,1.7,31.5),Ft.add($),i.add(Ft);for(let x=0;x<26;x++){const D=(t()-.5)*110,X=22+t()*26;if(Math.abs(D)<6&&X<50)continue;const ft=new V(new mn(1.2+t()*1.2,0),St([4045656,3121228,5031520][x%3]));if(ft.position.set(D,.8,X),i.add(ft),x%2){const Nt=new V(new mn(.4,0),St([16742981,16748479,16765517][x%3]));Nt.position.set(D+.4,1.9+t()*.8,X+.5),i.add(Nt)}}const zt=150,lt=new ir(new $t(.7,1,9,6),St(7031343),zt),vt=new ir(new mn(1,0),St(2789194),zt),Ct=new ir(new mn(1,0),St(4045656),zt),ht=new Ze;for(let x=0;x<zt;x++){let D=(t()-.5)*220;const X=62+t()*70,ft=.9+t()*.9;Math.abs(D-2)<17&&X<102&&(D+=D>2?22:-22),ht.rotation.set(0,t()*6,0),ht.position.set(D,4.5*ft,X),ht.scale.set(ft,ft,ft),ht.updateMatrix(),lt.setMatrixAt(x,ht.matrix),ht.position.set(D,11*ft,X),ht.scale.set(5.5*ft,6.5*ft,5.5*ft),ht.updateMatrix(),vt.setMatrixAt(x,ht.matrix),ht.position.set(D+1.2*ft,15*ft,X-.8),ht.scale.set(3.6*ft,4.2*ft,3.6*ft),ht.updateMatrix(),Ct.setMatrixAt(x,ht.matrix)}i.add(lt,vt,Ct);const le=wn(128,128,x=>{x.fillStyle="#fff6df",x.beginPath(),x.arc(64,64,62,0,6.3),x.fill(),x.fillStyle="#2b3138";for(let D=0;D<12;D++){const X=D/12*6.283;x.beginPath(),x.arc(64+Math.sin(X)*52,64-Math.cos(X)*52,D%3?2.5:4.5,0,6.3),x.fill()}}),ce=new ge;ce.add(new V(new Ve(1.7,.2,8,30),St(7031343))),ce.add(new V(new En(1.7,30),new Le({map:le})));const He=new ge;He.add(me(new V(new ne(.12,1,.05),St(2830648)),{position:new L(0,.5,.05)}));const Se=new ge;Se.add(me(new V(new ne(.08,1.4,.05),St(14035002)),{position:new L(0,.7,.1)})),ce.add(He,Se),ce.position.set(-19.9,10,5),ce.rotation.y=Math.PI/2,i.add(ce);const ln=wn(512,256,(x,D,X)=>{x.fillStyle="#2c4a3e",x.fillRect(0,0,D,X),x.strokeStyle="rgba(255,255,255,.9)",x.fillStyle="rgba(255,255,255,.9)",x.lineWidth=4,x.lineCap="round",x.font="bold 34px sans-serif",x.fillText("PLAN SECRET",30,50),x.beginPath(),x.arc(110,110,22,0,6.3),x.stroke(),x.beginPath(),x.moveTo(110,132),x.lineTo(110,200),x.moveTo(110,150),x.lineTo(70,175),x.moveTo(110,150),x.lineTo(150,175),x.moveTo(110,200),x.lineTo(85,240),x.moveTo(110,200),x.lineTo(135,240),x.stroke(),x.beginPath(),x.moveTo(190,175),x.lineTo(330,175),x.lineTo(310,155),x.moveTo(330,175),x.lineTo(310,195),x.stroke(),x.beginPath(),x.arc(400,195,7,0,6.3),x.stroke(),x.beginPath(),x.moveTo(400,202),x.lineTo(400,222),x.moveTo(400,208),x.lineTo(390,216),x.moveTo(400,208),x.lineTo(410,216),x.stroke(),x.font="bold 22px sans-serif",x.fillText("ça rétrécit !",310,140)});n(.4,5.6,8.6,19.8,6.5,-4,7031343);const un=new V(new qe(8,5),new ie({map:ln,roughness:.95}));un.position.set(19.55,6.5,-4),un.rotation.y=-Math.PI/2,i.add(un);const Ln=new ge;Ln.add(me(new V(new $t(1.5,1.5,.25,18),St(11041354)),{position:new L(0,3,0)})),Ln.add(me(new V(new $t(.22,.4,3,8),St(8015920)),{position:new L(0,1.5,0)})),Ln.add(me(new V(new $t(1,.8,.55,12),St(4876938)),{position:new L(0,3.4,0)})),Ln.add(me(new V(new $t(.1,.18,1.5,6),St(7031343)),{position:new L(0,4.35,0)}));for(const[x,D,X,ft,Nt]of[[0,5.5,0,.9,3121228],[-.7,5,.2,.6,4573013],[.7,5.1,-.2,.55,4573013]])Ln.add(me(new V(new mn(ft,0),St(Nt)),{position:new L(x,D,X)}));Ln.position.set(13.5,0,-2.5),i.add(Ln),e.push({min:[12,0,-4],max:[15,3.2,-1]});const An=new ge;An.add(me(new V(new ne(3,1.1,2),St(4160176)),{position:new L(0,1.6,0)}));const Rn=new V(new $t(.75,.75,.35,14),St(2830648));Rn.rotation.x=Math.PI/2,Rn.position.set(1.8,.75,0),An.add(Rn);for(const x of[-.7,.7])An.add(me(new V(new ne(2.6,.16,.16),St(12159576)),{position:new L(-2.2,1.2,x)}));for(const x of[-.7,.7])An.add(me(new V(new ne(.16,1.2,.16),St(8015920)),{position:new L(-.7,.6,x)}));for(const[x,D]of[[-.4,.3],[.3,-.4],[.5,.4]])An.add(me(new V(new mn(.45,0),St(16742981)),{position:new L(x,2.35,D)}));An.position.set(-12.5,0,11.5),An.rotation.y=.5,i.add(An),e.push({min:[-15,0,9.5],max:[-10,2.4,13.5]});for(const[x,D,X]of[[-6.4,12.4,16742981],[-5.2,12.8,16748479],[6.6,12.5,16756768],[7.9,12.2,16748479]]){const ft=new V(new $t(.7,.5,1,10),St(12740924));ft.position.set(x,.5,D),i.add(ft),s(.04,.04,1.4,x,1.6,D,3116876,5);const Nt=new V(new mn(.55,0),St(X));Nt.position.set(x,2.45,D),i.add(Nt);const fe=new V(new mn(.6,0),St(4045656));fe.position.set(x,1.3,D),i.add(fe)}const On=new ge;On.add(me(new V(new $t(.8,.9,1.5,12),St(4045722)),{position:new L(0,.75,0)})),On.add(me(new V(new $t(.14,.2,1.8,8),St(4045722)),{position:new L(1.2,1.5,0),rotation:new Tn(0,0,-.9)}));const Kn=new V(new Ve(.6,.08,6,12,Math.PI),St(3119742));Kn.position.set(-.1,1.5,0),On.add(Kn),On.position.set(-3.4,0,11.6),On.rotation.y=-.4,i.add(On),e.push({min:[-4.8,0,10.6],max:[-2,1.6,12.6]});for(const[x,D,X,ft]of[[12.2,12,.4,14035002],[12.2,12,1.2,4165606],[13.6,12.2,.4,16765517]])s(.6,.6,.8,x,X,D,ft,12),s(.5,.5,.1,x,X+.45,D,14541802,12);e.push({min:[11.5,0,11.3],max:[14.3,1.6,12.9]});const Qn=new V(new Ve(1,.45,8,18),St(2303531));Qn.rotation.x=Math.PI/2,Qn.position.set(16.2,.46,11),i.add(Qn);const ti=Qn.clone();ti.position.y=1.36,i.add(ti),e.push({min:[14.7,0,9.5],max:[17.7,1.8,12.5]});const In=new ge;for(const x of[-2.1,2.1]){const D=new V(new Ve(1.1,.09,6,22),St(2303531));D.rotation.y=Math.PI/2,D.position.set(0,1.1,x),In.add(D)}const _n=(x,D,X)=>{const ft=new L().subVectors(D,x),Nt=new V(new $t(.07,.07,ft.length(),6),St(X));Nt.position.copy(x).addScaledVector(ft,.5),Nt.quaternion.setFromUnitVectors(new L(0,1,0),ft.normalize()),In.add(Nt)},di=new L(0,1.1,-2.1),Pi=new L(0,1.1,2.1),Li=new L(0,2.6,-.7),pi=new L(0,1.2,.2),Bs=new L(0,2.7,1.8);_n(di,Li,14035002),_n(di,pi,14035002),_n(Li,pi,14035002),_n(Li,new L(0,2.7,1.5),14035002),_n(Pi,Bs,14035002),_n(pi,Pi,14035002),In.add(me(new V(new ne(.25,.1,.9),St(2303531)),{position:new L(0,2.75,-.8)})),In.add(me(new V(new ne(1.4,.1,.1),St(2303531)),{position:new L(0,3,1.85)})),In.position.set(18.7,0,7),In.rotation.z=-.12,i.add(In);const T=[16765517,16742981,6013163,16748479,10216314];for(const x of[-6.5,6.5])for(let D=0;D<=28;D++){const X=D/28,ft=-18.5+X*37,Nt=11.2-Math.sin(X*Math.PI)*1.5,fe=new V(new Fe(.13,8,6),new Le({color:T[D%5]}));fe.position.set(ft,Nt,x),i.add(fe)}const j={z:1.2},ot=wn(256,512,(x,D,X)=>{x.fillStyle="#2f78a8",x.fillRect(0,0,D,X),x.fillStyle="rgba(0,0,0,0.28)";for(const[Nt,fe,ke,M]of[[26,250,90,110],[140,250,90,110],[26,380,90,110],[140,380,90,110]])x.fillRect(Nt,fe,ke,M);x.fillStyle="#3d8dc2";for(const[Nt,fe,ke,M]of[[32,256,78,98],[146,256,78,98],[32,386,78,98],[146,386,78,98]])x.fillRect(Nt,fe,ke,M);x.fillStyle="#f5e9c8",x.beginPath(),x.arc(128,130,78,0,6.3),x.fill();const ft=x.createRadialGradient(128,130,4,128,130,70);ft.addColorStop(0,"#fff3b0"),ft.addColorStop(1,"#ffc65a"),x.fillStyle=ft,x.beginPath(),x.arc(128,130,68,0,6.3),x.fill(),x.strokeStyle="#f5e9c8",x.lineWidth=6,x.beginPath(),x.moveTo(128,62),x.lineTo(128,198),x.moveTo(60,130),x.lineTo(196,130),x.stroke()}),et=new ge;et.add(me(new V(new ne(5.8,8.6,.5),St(5913894)),{position:new L(0,4.3,.25)}));const K=wn(64,128,(x,D,X)=>{const ft=x.createLinearGradient(0,0,0,X);ft.addColorStop(0,"#fff4c8"),ft.addColorStop(.6,"#ffd890"),ft.addColorStop(1,"#e8a860"),x.fillStyle=ft,x.fillRect(0,0,D,X),x.fillStyle="rgba(120,70,30,.35)",x.fillRect(0,X-14,D,14)});et.add(me(new V(new qe(4.6,7.7),new Le({map:K})),{position:new L(0,3.95,.08)}));const Lt=new ge;Lt.position.set(-2.3,0,.45),Lt.add(me(new V(new ne(4.6,7.7,.3),new ie({map:ot,roughness:.6})),{position:new L(2.3,3.95,0)}));const kt=new V(new Fe(.22,10,8),St(14725184,{flatShading:!1}));kt.position.set(3.9,3.7,.3),Lt.add(kt);const jt=new V(new $t(.14,.14,.12,10),St(14725184));jt.rotation.x=Math.PI/2,jt.position.set(3.9,3.2,.17),Lt.add(jt);for(const x of[1.2,6.6])Lt.add(me(new V(new ne(.14,.7,.1),St(2830648)),{position:new L(.15,x,.19)}));et.add(Lt);const Kt=new V(new qe(4.6,6),new Le({color:16769696,transparent:!0,opacity:0,blending:Wn,depthWrite:!1}));Kt.rotation.x=-Math.PI/2,Kt.position.set(0,.07,3.2),et.add(Kt);const he=wn(128,96,(x,D,X)=>{x.fillStyle="#f0dca8",x.fillRect(0,0,D,X),x.strokeStyle="#6b4a2f",x.lineWidth=5,x.strokeRect(3,3,D-6,X-6),x.fillStyle="#3a2615",x.font="bold 17px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("DÉMARRER",D/2,20),x.fillText("L'ANIMATION",D/2,76)});et.add(me(new V(new ne(2,2.9,.25),St(5913894)),{position:new L(-3.95,5.2,.13)})),et.add(me(new V(new qe(1.7,1.28),new ie({map:he,roughness:.9})),{position:new L(-3.95,5.75,.27)}));const de=new ie({color:14035002,emissive:14035002,emissiveIntensity:.6,roughness:.4}),Qt=new V(new $t(.42,.46,.22,20),de);Qt.rotation.x=Math.PI/2,Qt.position.set(-3.95,4.45,.38),et.add(Qt),et.add(me(new V(new Ve(.5,.06,8,20),St(14725184)),{position:new L(-3.95,4.45,.27)}));const ve=wn(256,80,(x,D,X)=>{x.fillStyle="#c9a06c",x.fillRect(0,0,D,X),x.strokeStyle="#6b4a2f",x.lineWidth=6,x.strokeRect(3,3,D-6,X-6),x.fillStyle="#3a2615",x.font="bold 46px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("MAISON",D/2,X/2+2)});et.add(me(new V(new qe(3.2,1),new ie({map:ve,roughness:.9})),{position:new L(0,9.4,.12)}));const Me=new ge;Me.add(me(new V(new $t(.4,.4,.9,8),new ie({color:16769162,emissive:16760906,emissiveIntensity:.9})),{position:new L(0,0,0)})),Me.add(me(new V(new wi(.6,.4,8),St(2830648)),{position:new L(0,.65,0)})),Me.add(me(new V(new ne(.15,.15,.5),St(2830648)),{position:new L(0,0,-.35)})),Me.position.set(3.7,6.2,.7);const Te=new nr(16767392,40,16,1.8);Te.position.copy(Me.position),Te.position.z+=.8,et.add(Te),et.add(Me);const $e=wn(256,128,(x,D,X)=>{x.fillStyle="#7a5030",x.fillRect(0,0,D,X),x.strokeStyle="#d7b87a",x.lineWidth=5,x.strokeRect(8,8,D-16,X-16),x.fillStyle="#f0dca8",x.font="bold 30px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("BIENVENUE",D/2,X/2+2)}),ye=new V(new qe(4.4,2.2),new ie({map:$e,roughness:1}));ye.rotation.x=-Math.PI/2,ye.position.set(0,.05,1.7),et.add(ye);const te=new V(new $t(.8,.6,1.2,10),St(12740924));te.position.set(-3.9,.6,1),et.add(te);for(const[x,D,X,ft,Nt]of[[-3.9,2,1,.85,4045656],[-4.3,2.7,.8,.5,16742981],[-3.5,2.8,1.2,.5,16748479]])et.add(me(new V(new mn(ft,0),St(Nt)),{position:new L(x,D,X)}));et.position.set(-20,0,j.z),et.rotation.y=Math.PI/2,i.add(et);const vn={ouvrir(x){Lt.rotation.y=-x*1.75,Kt.material.opacity=.5*x},position:new L(-19.4,0,j.z)},we=(x,D)=>x<-12&&D>-3.2&&D<5.8,Mn=(x,D,X=.8)=>!we(x,D)&&!e.some(ft=>x>ft.min[0]-X&&x<ft.max[0]+X&&D>ft.min[2]-X&&D<ft.max[2]+X),Ge=(x=30)=>{for(let D=0;D<x;D++){const X=(t()-.5)*35,ft=-12.5+t()*24;if(Mn(X,ft))return[X,ft]}return null},Je=[12159576,11041354,13213804,9264952];for(let x=0;x<9;x++){const D=Ge();if(!D)continue;const X=4+t()*4,ft=new V(new ne(X,.26,.8+t()*.5),St(Je[x%4]));if(ft.position.set(D[0],.14,D[1]),ft.rotation.y=t()*3.14,i.add(ft),x%3===0){const Nt=new V(new ne(X*.8,.26,.8),St(Je[(x+1)%4]));Nt.position.set(D[0]+.4,.41,D[1]+.3),Nt.rotation.y=t()*3.14,i.add(Nt)}}for(let x=0;x<16;x++){const D=Ge();if(!D)continue;const X=new V(new mn(.35+t()*.25,0),St(16052192));X.position.set(D[0],.4,D[1]),X.rotation.set(t()*6,t()*6,t()*6),i.add(X)}for(let x=0;x<9;x++){const D=Ge();if(!D)continue;const X=new V(new qe(1.6,2.1),new ie({color:x%3?16183778:12573938,roughness:1,side:Be}));X.rotation.set(-Math.PI/2,0,t()*6),X.position.set(D[0],.05+x*.004,D[1]),i.add(X)}const nn=[14035002,4165606,16765517,4045656,2830648];for(let x=0;x<9;x++){const D=Ge();if(!D)continue;const X=new V(new En(.7+t()*1,14),new ie({color:nn[x%5],roughness:.4,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));X.rotation.x=-Math.PI/2,X.scale.set(1+t()*.8,1,1),X.rotation.z=t()*3,X.position.set(D[0],.06,D[1]),i.add(X)}{const x=Ge();if(x){const D=new V(new $t(.7,.7,1.2,12),St(4165606));D.rotation.z=Math.PI/2,D.position.set(x[0],.7,x[1]),D.rotation.y=.8,i.add(D);const X=new V(new En(1.6,16),new ie({color:4165606,roughness:.3,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));X.rotation.x=-Math.PI/2,X.scale.set(1.5,1,.9),X.position.set(x[0]+.8,.07,x[1]+.5),i.add(X)}}for(let x=0;x<40;x++){const D=Ge();if(!D)continue;const X=new V(new $t(.06,.06,.6+t()*.5,5),St(x%3?11581632:13149002));if(X.rotation.set(Math.PI/2,0,t()*6),X.position.set(D[0],.08,D[1]),i.add(X),x%4===0){const ft=new V(new $t(.2,.2,.16,6),St(9081241));ft.position.set(D[0]+.5,.1,D[1]-.3),i.add(ft)}}for(let x=0;x<4;x++){const D=Ge();if(!D)continue;const X=new ge;X.add(me(new V(new $t(.11,.11,2.4,8),St(12159576)),{rotation:new Tn(0,0,Math.PI/2),position:new L(0,.12,0)})),X.add(me(new V(new ne(.5,.5,.9),St(x%2?14035002:7239554)),{position:new L(-1.2,.25,0)})),X.position.set(D[0],0,D[1]),X.rotation.y=t()*6,i.add(X)}for(let x=0;x<2;x++){const D=Ge();if(!D)continue;for(let ft=0;ft<3;ft++){const Nt=new V(new Ve(.9-ft*.2,.1,6,18),St(x?16756768:2830648));Nt.rotation.x=Math.PI/2,Nt.position.set(D[0],.1+ft*.18,D[1]),i.add(Nt)}const X=new V(new Ve(2.2,.1,6,16,1.6),St(x?16756768:2830648));X.rotation.x=Math.PI/2,X.position.set(D[0]+1.6,.1,D[1]+.4),X.rotation.z=t()*6,i.add(X)}for(let x=0;x<3;x++){const D=Ge();if(!D)continue;const X=new V(new Ve(.42,.18,8,14),St([16765517,16742981,6013163][x]));X.rotation.x=Math.PI/2,X.position.set(D[0],.2,D[1]),i.add(X)}for(let x=0;x<4;x++){const D=Ge();if(!D)continue;const X=new V(new wi(1.4+t()*.8,.7,9),St(14729871));X.position.set(D[0],.3,D[1]),i.add(X);for(let ft=0;ft<5;ft++){const Nt=new V(new Ve(.28,.05,5,10,4.5),St(15718312));Nt.rotation.set(t()*3,t()*3,t()*3),Nt.position.set(D[0]+(t()-.5)*3,.15,D[1]+(t()-.5)*3),i.add(Nt)}}for(let x=0;x<3;x++){const D=Ge();if(!D)continue;const X=new ge;X.add(me(new V(new ne(2.4,1.6,2),St(13148268)),{position:new L(0,.8,0)}));for(const ft of[-1,1])X.add(me(new V(new ne(2.4,.08,1),St(11569752)),{position:new L(0,1.9,ft*1.3),rotation:new Tn(ft*.9,0,0)}));X.position.set(D[0],0,D[1]),X.rotation.set(0,t()*6,(t()-.5)*.2),i.add(X)}for(let x=0;x<5;x++){const D=Ge();if(!D)continue;const X=new V(new ne(1.3,.6,.65),St(11883834));X.position.set(D[0],.3+(x===4?.6:0),D[1]),X.rotation.y=t()*6,i.add(X)}{const x=Ge();if(x){const D=new V(new Fe(.5,12,10),St(14217290,{flatShading:!1}));D.position.set(x[0],.5,x[1]),i.add(D)}}for(let x=0;x<7;x++){const D=Ge();if(!D)continue;const X=new V(new ne(.7,.7,.7),St([16742981,6013163,10216314,16765517][x%4]));X.position.set(D[0],.35,D[1]),X.rotation.y=t()*6,i.add(X)}for(let x=0;x<4;x++){const D=new V(new ne(.9,7-x*.5,.25),St(Je[x]));D.position.set(-.8+x*1,3.4,-14.5+x*.05),D.rotation.z=.12+x*.03,D.rotation.x=-.12,i.add(D)}const Pe=140,Cn=new Float32Array(Pe*3),Vn=[];for(let x=0;x<Pe;x++)Vn.push([(t()-.5)*36,1+t()*14,(t()-.5)*26,t()*6.28]);const Qe=new ic(new Xe().setAttribute("position",new rn(Cn,3)),new ao({map:fc(),color:16773312,size:.5,transparent:!0,opacity:.7,blending:Wn,depthWrite:!1}));Qe.frustumCulled=!1,i.add(Qe),Eg(i,[nt,Gt,Lt,He,Se,ee]);function yn(x){const D=Qe.geometry.attributes.position;Vn.forEach((X,ft)=>D.setXYZ(ft,X[0]+Math.sin(x*.2+X[3])*1.4,X[1]+Math.sin(x*.3+X[3])*.8,X[2]+Math.cos(x*.25+X[3])*1.2)),D.needsUpdate=!0,ee.rotation.z=Math.sin(x*.6)*.012,Et.material.emissiveIntensity=.4+Math.abs(Math.sin(x*2.2))*.9,U.material.opacity=.08+Math.sin(x*.4)*.025,de.emissiveIntensity=.45+Math.abs(Math.sin(x*3))*.9,Tt.visible&&Tt.scale.set(1+Math.sin(x*9)*.03,1,1+Math.sin(x*9)*.03),Se.rotation.z=-x*.6,He.rotation.z=-x*.05+1}return{scene:i,colliders:e,maj:yn,depart:new L(1,0,3),porteMaison:{x:-18.6,z:j.z},maisonApi:vn,machineApi:O,limites:Ag,limiterCamera:Tg,nom:"Le grenier du professeur Mousse"}}const pn=(i,t={})=>St(i,{flatShading:!1,roughness:.72,...t}),ze=(i,t,e=16,n=12)=>new V(new Fe(i,e,n),t),yi=(i,t,e,n=6,s=12)=>new V(new pr(i,t,n,s),e);function Ce(i,t,e,n,s=1,r=1,o=1){return i.position.set(t,e,n),i.scale.set(s,r,o),i}function yu(i){const{jambe:t,torse:e,large:n,teteR:s,peau:r,cheveux:o,haut:a,bas:c,chaussure:l,enfant:u,lunettes:f=!1,moustache:h=!1,sac:d=!1,barbe:g=!1}=i,_=new ge,m=pn(r),p=pn(a),E=pn(c),b=pn(o,{roughness:.9}),v=pn(l),U=pn(16777215,{roughness:.5}),A=pn(new pe(r).multiplyScalar(.82).getHex()),P=t,I=t+e,S=yi(n*.86,e*.5,p);Ce(S,0,P+e*.5,0,1,1,.8),_.add(S);const y=ze(n*.8,p);Ce(y,0,P+e*.2,n*.12,1,.8,.85),_.add(y);const N=new V(new $t(n*.78,n*.82,.1,18),E);N.scale.z=.82,N.position.set(0,P+.03,0),_.add(N);const J=new V(new ne(.1,.07,.03),pn(14725184,{metalness:.5}));J.position.set(0,P+.03,n*.66),_.add(J);const Q=new V(new Ve(s*.42,.045,8,18),p);Q.rotation.x=Math.PI/2,Q.position.set(0,I+.01,0),_.add(Q);const W=new V(new $t(s*.24,s*.28,.14,12),m);W.position.set(0,I+.04,0),_.add(W);const Y=new ge;Y.position.set(0,I+.05,0),_.add(Y);const B=s*.95;Y.add(Ce(ze(s,m,28,20),0,B,0,1,.97,.96)),Y.add(Ce(ze(s*.7,m,20,14),0,B-s*.4,s*.2,1,.78,.88));for(const nt of[-1,1]){Y.add(Ce(ze(s*.28,m),nt*s*.5,B-s*.27,s*.6,1,.9,.7)),Y.add(Ce(ze(s*.19,m),nt*s*.98,B-.01,0,.45,1,.8)),Y.add(Ce(ze(s*.11,A),nt*s*.99,B-.01,.01,.35,.8,.6));const _t=u?1.18:.9,Mt=nt*s*.37,Dt=B+s*.05,pt=s*.84;Y.add(Ce(ze(s*.21*_t,U),Mt,Dt,pt,1,1.12,.55)),Y.add(Ce(ze(s*.125*_t,pn(4861724)),Mt+nt*.004,Dt-.005,pt+s*.08*_t,1,1,.5)),Y.add(Ce(ze(s*.07*_t,new Le({color:1182213})),Mt+nt*.004,Dt-.005,pt+s*.105*_t,1,1,.5)),Y.add(Ce(ze(s*.035*_t,new Le({color:16777215})),Mt+.025,Dt+.035,pt+s*.13*_t)),Y.add(Ce(ze(s*.22*_t,A),Mt,Dt+s*.1*_t,pt-.012,1,.38,.55));const Et=yi(s*.035,s*.24,b,4,8);Et.rotation.z=Math.PI/2+nt*(u?-.12:.05),Et.position.set(Mt,Dt+s*.3,pt-.005),Y.add(Et),u&&Y.add(Ce(ze(s*.09,new Le({color:16748442,transparent:!0,opacity:.55})),nt*s*.55,B-s*.2,s*.8,1.3,.8,.3))}Y.add(Ce(ze(s*.13,m),0,B-s*.14,s*.95,1,.9,.9)),Y.add(Ce(ze(s*.075,A),-s*.1,B-s*.18,s*.9)),Y.add(Ce(ze(s*.075,A),s*.1,B-s*.18,s*.9));const k=new V(new Ve(s*.2,.014,6,16,Math.PI),new Le({color:9059115}));k.rotation.z=Math.PI,k.position.set(0,B-s*.36,s*.92),Y.add(k);const H=Ce(ze(s*.15,new Le({color:4854800})),0,B-s*.47,s*.9,1,1.15,.4);if(H.visible=!1,Y.add(H),h)for(const nt of[-1,1]){const _t=yi(s*.05,s*.26,b,4,8);_t.rotation.z=Math.PI/2+nt*.18,_t.position.set(nt*s*.15,B-s*.27,s*.95),Y.add(_t)}if(g&&Y.add(Ce(ze(s*.72,new Le({color:3877406,transparent:!0,opacity:.35}),20,14),0,B-s*.4,s*.2,1.01,.8,.9)),f){for(const _t of[-1,1]){const Mt=new V(new Ve(s*.24,.018,6,20),pn(2830648,{metalness:.4}));Mt.position.set(_t*s*.37,B+s*.05,s*.93),Y.add(Mt)}const nt=new V(new ne(s*.2,.02,.02),pn(2830648));nt.position.set(0,B+s*.08,s*.95),Y.add(nt)}const dt=new V(new Fe(s*1.04,22,14,0,Math.PI*2,0,Math.PI*(u?.56:.5)),b);dt.position.set(0,B+.01,-.03),dt.rotation.x=-.3,Y.add(dt);const yt=u?[[0,.98,.1],[-.35,.92,.1],[.35,.92,.1],[-.7,.7,.05],[.7,.7,.05],[-.2,.85,-.3],[.25,.85,-.3],[0,.8,-.55]]:[[0,.95,.05],[-.4,.85,.05],[.4,.85,.05],[0,.8,-.4]];for(const[nt,_t,Mt]of yt){const Dt=new V(new wi(s*(u?.17:.13),s*(u?.55:.28),8),b);Dt.position.set(nt*s,B+_t*s,Mt*s),Dt.rotation.set(.35+Mt*.8,0,-nt*1.2),Y.add(Dt)}for(const nt of[-.6,-.3,0,.3,.6])Y.add(Ce(ze(s*.17,b,10,8),nt*s,B+s*.78,s*(.58-Math.abs(nt)*.25),1,.7,.8));for(const nt of[-1,1])Y.add(Ce(new V(new ne(.05,s*.34,.07),b),nt*s*.9,B-s*.02,s*.25));const bt=e*.92,Ot=n*.27,Zt=[-1,1].map(nt=>{const _t=new ge;_t.add(Ce(ze(Ot*1.25,p),0,0,0)),_t.add(Ce(yi(Ot,bt*.34,p),0,-bt*.26,0));const Mt=new ge;Mt.position.set(0,-bt*.47,0),Mt.rotation.x=-.12,_t.add(Mt),Mt.add(Ce(yi(Ot*.8,bt*.3,m),0,-bt*.2,0));const Dt=new ge;Dt.position.set(0,-bt*.53,.01),Mt.add(Dt),Dt.add(Ce(ze(Ot*.95,m),0,-.05,0,.9,1.1,.85)),Dt.add(Ce(ze(Ot*.4,m),nt*Ot*.8,-0,Ot*.3));for(let pt=0;pt<4;pt++)Dt.add(Ce(yi(Ot*.17,Ot*.5,m,3,6),(pt-1.5)*Ot*.4,-Ot*1.2,Ot*.1));return _t.position.set(nt*(n+Ot*.9),I-.07,0),_t.userData.main=Dt,_.add(_t),_t}),at=[-1,1].map(nt=>{const _t=new ge;_t.add(Ce(yi(n*.4,t*.3,E),0,-t*.26,0)),_t.add(Ce(ze(n*.38,E),0,-t*.5,.02)),_t.add(Ce(yi(n*.33,t*.26,E),0,-t*.7,0));const Mt=Ce(ze(n*.45,v),0,-t+.1,.07,1,.62,1.7);_t.add(Mt),_t.add(Ce(ze(n*.3,U),0,-t+.09,n*.58,1,.65,.9));const Dt=new V(new ne(n*.88,.05,n*1.55),U);Dt.position.set(0,-t+.03,.09),_t.add(Dt);for(let pt=0;pt<3;pt++){const Et=new V(new ne(n*.5,.025,.035),U);Et.position.set(0,-t+.17+pt*.012,n*(.18+pt*.1)),Et.rotation.x=-.4,_t.add(Et)}return _t.position.set(nt*n*.46,P,0),_.add(_t),_t});if(d){const nt=pn(3123310),_t=pn(2062928),Mt=new V(new ne(n*1.5,e*.9,.3),nt);Mt.position.set(0,P+e*.55,-n*.8),_.add(Mt),_.add(Ce(ze(n*.75,nt),0,P+e*1,-n*.8,1,.45,.35));const Dt=new V(new ne(n*1,e*.35,.12),_t);Dt.position.set(0,P+e*.35,-n*.8-.2),_.add(Dt);const pt=new V(new ne(n*1,.02,.02),pn(16765517));pt.position.set(0,P+e*.5,-n*.8-.26),_.add(pt);const Et=new V(new Ve(.12,.025,6,12,Math.PI),_t);Et.position.set(0,P+e*1.1,-n*.8),_.add(Et);for(const Jt of[-1,1]){const rt=new V(new ne(.09,e*.9,.05),_t);rt.position.set(Jt*n*.52,P+e*.6,n*.1),rt.rotation.x=0,_.add(rt);const Tt=new V(new ne(.09,.05,n*1.7),_t);Tt.position.set(Jt*n*.52,I-.02,-n*.3),_.add(Tt)}}return _.userData={jambes:at,bras:Zt,tete:Y,bouche:H,sourire:k,mains:Zt.map(nt=>nt.userData.main),hauteurTete:I+.05+B},_}function Cg({echelle:i=1}={}){const t=yu({jambe:.58,torse:.52,large:.3,teteR:.4,peau:15316362,cheveux:4861724,haut:16747069,bas:3895221,chaussure:14035002,enfant:!0,sac:!0});return t.scale.setScalar(i),t}function Pg({echelle:i=1}={}){const t=yu({jambe:.86,torse:.78,large:.36,teteR:.3,peau:14986626,cheveux:3877406,haut:4039245,bas:7035464,chaussure:5913894,enfant:!1,lunettes:!0,moustache:!0,barbe:!0}),e=new V(new ne(.2,.2,.04),pn(11569744));e.position.set(.2,1.35,.3),t.add(e);const n=new V(new $t(.013,.013,.16,6),pn(14035002));return n.position.set(.22,1.47,.3),t.add(n),t.scale.setScalar(i),t}function ka({grain:i=!1}={}){const t=new ge,e=St(1907224,{flatShading:!1}),n=new V(new Fe(.9,10,8),e);n.scale.set(1.5,1,1),n.position.set(-1.5,1.1,0);const s=new V(new Fe(.62,10,8),e);s.position.set(0,1.2,0);const r=new V(new Fe(.58,10,8),e);r.position.set(1,1.25,0),t.add(n,s,r);const o=[];for(let a=0;a<3;a++)for(const c of[-1,1]){const l=new V(new $t(.06,.05,1.5,4),e);l.position.set(-.9+a*.9,.6,c*.5),l.rotation.x=c*.6,t.add(l),o.push({p:l,c,i:a})}for(const a of[-1,1]){const c=new V(new $t(.04,.04,1.1,4),e);c.position.set(1.5,1.8,a*.3),c.rotation.set(a*.4,0,-.7),t.add(c)}if(i){const a=new V(new pr(.34,1.3,4,8),St(16776688,{flatShading:!1}));a.rotation.z=Math.PI/2,a.position.set(.3,2.35,0),t.add(a)}return t.userData.pattes=a=>{for(const{p:c,c:l,i:u}of o)c.rotation.z=Math.sin(a*9+u*2.1+(l>0?0:Math.PI))*.35},t}function Lg(){const i=new ge,t=new V(new Fe(2.6,16,12,0,Math.PI*2,0,Math.PI/2),St(14035002,{flatShading:!1}));t.scale.set(1.25,1,1),t.position.y=.6,i.add(t);const e=St(1907224,{flatShading:!1}),n=new V(new Fe(1,10,8),e);n.position.set(3.4,1,0),i.add(n);const s=new V(new ne(.1,.1,5),e);s.position.set(0,3.2,0),s.rotation.y=Math.PI/2,s.visible=!1,i.add(s);for(const[r,o]of[[-1.4,1.2],[-1.4,-1.2],[.4,1.5],[.4,-1.5],[1.7,.8],[1.7,-.8]]){const a=new V(new Fe(.46,8,6),e);a.position.set(r,Math.sqrt(Math.max(.1,6.76-(r/1.25)**2-o*o))+.35,o),i.add(a)}for(const r of[-1,1])for(let o=0;o<3;o++){const a=new V(new $t(.1,.08,2.2,4),e);a.position.set(-1.2+o*1.5,.5,r*2.4),a.rotation.x=r*.9,i.add(a)}return i}const Wi=3,zi=.42*Wi,js=1.8*Wi,Ig=62,Dg=22,Ug=1.3;function Ng({scene:i,colliders:t,depart:e,limites:n,limiterCamera:s}){let r={scene:i,colliders:t,limites:n,limiterCamera:s,cordes:[]};const o=Cg({echelle:Wi});o.position.copy(e),i.add(o);const a=e.clone(),c=new L;let l=!0,u=0,f=0,h=2.6,d=null,g=0,_=null;const m={yaw:0,pitch:.42,distance:17};function p(W){return a.x+zi>W.min[0]&&a.x-zi<W.max[0]&&a.y+js>W.min[1]&&a.y<W.max[1]&&a.z+zi>W.min[2]&&a.z-zi<W.max[2]}function E(W,Y){if(Y){a[W]+=Y;for(const B of r.colliders){if(B.rond||!p(B))continue;const k=W==="x"?0:W==="y"?1:2;W==="y"?(Y<0?(a.y=B.max[1],l=!0,g=0):a.y=B.min[1]-js,c.y=0):Y>0?a[W]=B.min[k]-zi-.001:a[W]=B.max[k]+zi+.001}}}function b(W,Y){for(const B of r.colliders){if(!B.rond||a.y>=B.haut||a.y+js<=(B.bas||0))continue;let k=B.x,H=B.z;if(B.x2!==void 0){const Zt=B.x2-B.x,at=B.z2-B.z,nt=Zt*Zt+at*at||1,_t=Math.max(0,Math.min(1,((a.x-B.x)*Zt+(a.z-B.z)*at)/nt));k=B.x+Zt*_t,H=B.z+at*_t}let dt=a.x-k,yt=a.z-H;const bt=Math.hypot(dt,yt),Ot=B.r+zi;if(!(bt>=Ot)){if(!B.mur){const Zt=()=>{a.y=B.haut,c.y=0,l=!0,d=B,B.rebond||(g=0)};if(W>=B.haut-.02&&c.y<=0){Zt();continue}if(Y&&B.haut-a.y<=Ug){Zt();continue}if(B.accroche&&!Y&&B.haut-a.y<=B.accroche&&c.y<=8){Zt();continue}}bt<1e-4?(dt=1,yt=0):(dt/=bt,yt/=bt),a.x=k+dt*Ot,a.z=H+yt*Ot}}}function v(W,Y,B,k=0){o.parent&&o.parent.remove(o),r={scene:W.scene,colliders:W.colliders,limites:W.limites,limiterCamera:W.limiterCamera,cordes:W.cordes||[]},r.scene.add(o),_=null,a.set(Y,0,B),u=k,c.set(0,0,0),h=0,l=!0,o.position.copy(a),o.rotation.set(0,k,0)}function U(){if(_)return null;for(const W of r.cordes||[])if(Math.hypot(a.x-W.x,a.z-W.z)<5&&a.y<W.haut-3)return W;return null}function A(){const W=U();return W&&(_={corde:W,phase:"monte",t:0},c.set(0,0,0)),!!W}function P(W,Y){const B=_.corde,k=o.userData;if(_.phase==="monte"){a.x+=(B.x-B.fx*1.1-a.x)*Math.min(1,W*10),a.z+=(B.z-B.fz*1.1-a.z)*Math.min(1,W*10),u=Math.atan2(B.fx,B.fz),a.y=Math.min(B.haut-js*.75,a.y+9*W),_.t+=W*9;const H=Math.sin(_.t);k.bras[0].rotation.set(-2.7+H*.45,0,0),k.bras[1].rotation.set(-2.7-H*.45,0,0),k.jambes[0].rotation.x=-.7-H*.5,k.jambes[1].rotation.x=-.7+H*.5,a.y>=B.haut-js*.75-.01?(_.phase="sort",_.t=0,_.de=a.clone()):Y.vient("sauter")&&(_=null,l=!1)}else{_.t=Math.min(1,_.t+W/.55);const H=_.t;a.set(_.de.x+(B.sortie[0]-_.de.x)*H,_.de.y+(B.sortie[1]-_.de.y)*H+Math.sin(Math.PI*H)*2.4,_.de.z+(B.sortie[2]-_.de.z)*H),k.bras[0].rotation.set(-2.2*(1-H),0,0),k.bras[1].rotation.set(-2.2*(1-H),0,0),k.jambes[0].rotation.x=0,k.jambes[1].rotation.x=0,H>=1&&(a.set(B.sortie[0],B.sortie[1],B.sortie[2]),_=null,c.set(0,0,0),l=!0)}o.position.copy(a),o.rotation.y=u}function I(W,Y,B){if(!_&&Y.vient("corde")&&A(),_)return P(W,Y),{bouge:!0,auSol:!1,sprint:!1};const k=Y.actif("sprinter"),H=(Y.actif("avancer")?1:0)-(Y.actif("reculer")?1:0),dt=(Y.actif("droite")?1:0)-(Y.actif("gauche")?1:0),yt=k?24:14,bt=-Math.sin(m.yaw),Ot=-Math.cos(m.yaw),Zt=bt*H+Math.cos(m.yaw)*dt,at=Ot*H-Math.sin(m.yaw)*dt,nt=Math.hypot(Zt,at),_t=nt>.01;if(_t){c.x=Zt/nt*yt,c.z=at/nt*yt;let rt=Math.atan2(Zt/nt,at/nt)-u;for(;rt>Math.PI;)rt-=Math.PI*2;for(;rt<-Math.PI;)rt+=Math.PI*2;u+=rt*Math.min(1,W*12)}else c.x=0,c.z=0;l&&Y.vient("sauter")&&(d&&d.rebond?(g=Math.min(g+1,d.rebond.length),c.y=d.rebond[g-1],d.surRebond&&d.surRebond(g)):c.y=Dg,l=!1),c.y-=Ig*W;const Mt=a.y,Dt=l;l=!1,d=null,E("x",c.x*W),E("z",c.z*W),E("y",c.y*W),b(Mt,Dt),a.y<=0&&(a.y=0,c.y=0,l=!0,g=0),a.x=Math.min(r.limites.xMax,Math.max(r.limites.xMin,a.x)),a.z=Math.min(r.limites.zMax,Math.max(r.limites.zMin,a.z)),o.position.copy(a),o.rotation.y=u;const pt=o.userData;_t&&l&&(f+=W*(k?15:10));const Et=_t&&l?Math.sin(f)*(k?.9:.6):0;return pt.jambes[0].rotation.x=Et,pt.jambes[1].rotation.x=-Et,pt.bras[0].rotation.x=-Et*.9,pt.bras[1].rotation.x=Et*.9,h>0&&!_t?(h-=W,pt.bras[1].rotation.z=-2.5+Math.sin(B*11)*.35,pt.bras[1].rotation.x=0,pt.tete.rotation.z=Math.sin(B*3)*.08):(h=Math.min(h,0),pt.bras[1].rotation.z=0,pt.tete.rotation.z=0),l||(pt.bras[0].rotation.x=-2.4,pt.bras[1].rotation.x=-2.4,pt.jambes[0].rotation.x=.4,pt.jambes[1].rotation.x=-.3),o.position.y+=_t&&l?Math.abs(Math.sin(f))*.06*Wi:0,{bouge:_t,auSol:l,sprint:k}}function S(W,Y){const B=m.distance,k=Math.sin(m.pitch),H=a.y+1.5*Wi,dt=Math.max(.45,Math.cos(m.pitch));let yt=a.x+Math.sin(m.yaw)*dt*B,bt=Math.max(a.y+1.2,H+k*B),Ot=a.z+Math.cos(m.yaw)*dt*B;[yt,bt,Ot]=r.limiterCamera(yt,bt,Ot);const Zt=a.x,at=a.y+1.4*Wi,nt=a.z,_t=(pt,Et,Jt)=>r.colliders.some(rt=>{if(!rt.rond)return pt>rt.min[0]-.6&&pt<rt.max[0]+.6&&Et>rt.min[1]-.6&&Et<rt.max[1]+.6&&Jt>rt.min[2]-.6&&Jt<rt.max[2]+.6;if(!rt.cam||Et>rt.haut+.6)return!1;let Tt=rt.x,O=rt.z;if(rt.x2!==void 0){const Gt=rt.x2-rt.x,At=rt.z2-rt.z,Xt=Math.max(0,Math.min(1,((pt-rt.x)*Gt+(Jt-rt.z)*At)/(Gt*Gt+At*At||1)));Tt=rt.x+Gt*Xt,O=rt.z+At*Xt}return Math.hypot(pt-Tt,Jt-O)<rt.r+.6});for(let pt=1;pt<=10;pt++){const Et=pt/10;if(_t(Zt+(yt-Zt)*Et,at+(bt-at)*Et,nt+(Ot-nt)*Et)){const Jt=Math.max(.05,(pt-1)/10);yt=Zt+(yt-Zt)*Jt,bt=at+(bt-at)*Jt,Ot=nt+(Ot-nt)*Jt;break}}const Mt=Math.min(1,Y*9);W.position.x+=(yt-W.position.x)*Mt,W.position.y+=(bt-W.position.y)*Mt,W.position.z+=(Ot-W.position.z)*Mt;const Dt=m.pitch<0?Math.tan(Math.min(1.2,-m.pitch*1.15))*Math.hypot(W.position.x-a.x,W.position.z-a.z):0;W.lookAt(a.x,a.y+1.4*Wi+Dt,a.z)}function y(W,Y,B=1){m.yaw-=W*.006*B,m.pitch=Math.min(1.3,Math.max(-1.15,m.pitch+Y*.005*B))}function N(W){m.distance=Math.min(24,Math.max(7,m.distance+W*.015))}function J(W,Y,B){a.set(W,0,Y),u=B,c.set(0,0,0),h=0,o.position.copy(a),o.rotation.y=B}function Q(W,Y){return W!==void 0&&(m.yaw=W),Y!==void 0&&(m.pitch=Y),{yaw:m.yaw,pitch:m.pitch,distance:m.distance}}return{hero:o,pos:a,maj:I,camera:S,tourner:y,zoom:N,etat:Q,placer:J,changerMonde:v,appui:()=>({support:d,combo:g,auSol:l}),cordeProche:U,prendreCorde:A,grimpe:()=>!!_}}const io=[{id:"avancer",nom:"Avancer"},{id:"gauche",nom:"Aller à gauche"},{id:"reculer",nom:"Reculer"},{id:"droite",nom:"Aller à droite"},{id:"sauter",nom:"Sauter"},{id:"sprinter",nom:"Sprinter"},{id:"agir",nom:"Agir (bouton, porte)"},{id:"corde",nom:"Prendre la corde"}],Fg={avancer:["KeyW","ArrowUp"],gauche:["KeyA","ArrowLeft"],reculer:["KeyS","ArrowDown"],droite:["KeyD","ArrowRight"],sauter:["Space",null],sprinter:["ShiftLeft",null],agir:["KeyE",null],corde:["KeyF",null]};function uo(){return Object.fromEntries(Object.entries(Fg).map(([i,t])=>[i,[...t]]))}function Su(i){const t=uo();if(i&&typeof i=="object")for(const e of io){const n=i[e.id];Array.isArray(n)&&(t[e.id]=[0,1].map(s=>typeof n[s]=="string"&&n[s].length<24?n[s]:null))}return t}let Qr=null;typeof navigator<"u"&&navigator.keyboard&&navigator.keyboard.getLayoutMap&&navigator.keyboard.getLayoutMap().then(i=>{Qr=i}).catch(()=>{});const Tl={Space:"Espace",ShiftLeft:"Maj",ShiftRight:"Maj",ControlLeft:"Ctrl",ControlRight:"Ctrl",AltLeft:"Alt",AltRight:"Alt",Enter:"Entrée",Tab:"Tab",Backspace:"Retour",ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→"};function Wa(i){return i?Tl[i]?Tl[i]:Qr&&Qr.get(i)?Qr.get(i).toUpperCase():i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):i.startsWith("Numpad")?"Pavé "+i.slice(6):i:""}function Og(i){const t=new Set,e=new Set,n=new Set,s=new Set;let r=!1;const o=u=>{t.delete(u.code)},a=u=>{r||(t.has(u.code)||e.add(u.code),t.add(u.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(u.code)&&u.preventDefault())},c=()=>{t.clear(),e.clear()};return window.addEventListener("keydown",a),window.addEventListener("keyup",o),window.addEventListener("blur",c),{actif:u=>n.has(u)||(i()[u]||[]).some(f=>f&&t.has(f)),vient(u){const f=i()[u]||[];return s.has(u)||f.some(h=>h&&e.has(h))},finImage(){e.clear(),s.clear()},forcer(u,f){r||(f?n.add(u):n.delete(u))},declencher(u){r||s.add(u)},bloquer(u){r=u,u&&(c(),n.clear(),s.clear())},detruire(){window.removeEventListener("keydown",a),window.removeEventListener("keyup",o),window.removeEventListener("blur",c)}}}function zg(i,t,e,n){const s=Su(i);for(const r of io)if(!r.bientot)for(let o=0;o<2;o++)s[r.id][o]===n&&(s[r.id][o]=null);return s[t][e]=n,s}const Bg={xMin:-160,xMax:160,zMin:-146,zMax:150},Vg=new Qi,Hg=new Tn,Gg=new L,kg=new L;function Ie(i,t,e,n=0,s=0,r=0,o=1,a=o,c=o){return new Re().compose(Gg.set(i,t,e),Vg.setFromEuler(Hg.set(n,s,r,"YXZ")),kg.set(o,a,c))}function Ss(i,t,e,n){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new sc(s);return r.colorSpace=Pn,n&&(r.wrapS=r.wrapT=ar,r.repeat.set(n[0],n[1]),r.anisotropy=4),r}const Zo=(i,t,e,n)=>{const s=n[0]-e[0],r=n[1]-e[1],o=Math.max(0,Math.min(1,((i-e[0])*s+(t-e[1])*r)/(s*s+r*r||1)));return Math.hypot(i-(e[0]+s*o),t-(e[1]+r*o))};function Wg({leger:i=!1,son:t=null}={}){const e=new cu,n=i?.5:1,s=M=>Math.max(1,Math.round(M*n)),r=$i(4242),o=(M,R)=>M+r()*(R-M),a=[],c=Bg,l=new L(0,0,0),u=[[[0,-30],[-8,-62],[8,-105],[0,-144]],[[-30,5],[-58,12],[-84,2],[-104,-6]],[[30,-4],[55,-10],[78,6],[92,22]],[[4,30],[12,62],[2,100],[0,140]]],f=11,h={x:124,z:34,r:30},d={x:-124,z:-8},g={x:78,z:-92,r:50},_=(M,R)=>{let F=1e9;for(const G of u)for(let q=0;q<G.length-1;q++)F=Math.min(F,Zo(M,R,G[q],G[q+1]));return F},m=(M,R)=>Math.hypot(M-94.5,R-75.6)<62,p={x:86,z:54,r:27},E=[[-26,-72,17],[38,34,9],[-40,46,9]],b=(M,R,F=0)=>E.some(G=>Math.hypot(M-G[0],R-G[1])<G[2]+F)||Math.hypot(M-p.x,R-p.z)<p.r+F||Zo(M,R,[90,21],[80,36])<9+F||Math.hypot(M,R)<46+F||_(M,R)<f+F||Math.hypot(M-h.x,R-h.z)<h.r+5+F||Math.hypot(M-d.x,R-d.z)<17+F,v=(M,R,F=14)=>M>c.xMin-F&&M<c.xMax+F&&R>c.zMin-F&&R<c.zMax+F;function U(M,R,F,G,q={}){v(M,R)&&a.push({rond:!0,x:M,z:R,r:F,haut:G,...q})}function A(M,R,F,G,q,ct,gt={}){(v(M,R)||v(F,G))&&a.push({rond:!0,x:M,z:R,x2:F,z2:G,r:q,haut:ct,...gt})}const P=(M,R,F)=>F.x2===void 0?Math.hypot(M-F.x,R-F.z):Zo(M,R,[F.x,F.z],[F.x2,F.z2]),I=(M,R,F)=>!a.some(G=>G.rond&&P(M,R,G)<G.r+F+1.2);function S(M,{zone:R=null,essais:F=50,etendue:G=212,solide:q=!0}={}){for(let ct=0;ct<F;ct++){let gt,wt;if(R){const Vt=r()*6.283,Bt=Math.sqrt(r())*R.r;gt=R.x+Math.cos(Vt)*Bt,wt=R.z+Math.sin(Vt)*Bt}else gt=o(-G,G),wt=o(-G,G);if(!(wt<-150&&Math.abs(gt)<165)&&!b(gt,wt,M)&&!(q&&!I(gt,wt,M)))return[gt,wt]}return null}const y=13496063;e.background=new pe(y),e.fog=new ec(y,.0014);const N=Ss(8,256,(M,R,F)=>{const G=M.createLinearGradient(0,0,0,F);G.addColorStop(0,"#1668d8"),G.addColorStop(.3,"#3d95ee"),G.addColorStop(.5,"#8fd0fa"),G.addColorStop(.62,"#cdeeff"),G.addColorStop(1,"#cdeeff"),M.fillStyle=G,M.fillRect(0,0,R,F)}),J=new V(new Fe(2400,32,20),new Le({map:N,side:gn,fog:!1,depthWrite:!1}));J.renderOrder=-10,e.add(J);const Q=new L(.5,.7,.5).normalize(),W=fc();for(const[M,R,F]of[[1100,16773552,.55],[460,16776160,1],[250,16777215,1]]){const G=new Fm(new lu({map:W,color:R,opacity:F,transparent:!0,fog:!1,depthWrite:!1,blending:Wn}));G.scale.setScalar(M),G.position.copy(Q).multiplyScalar(2100),G.renderOrder=-9,e.add(G)}const Y=[],B=new mn(1,1);for(let M=0;M<20;M++){const R=r()*6.283,F=o(500,1700),G=Math.cos(R)*F,q=Math.sin(R)*F,ct=o(620,900),gt=o(.8,1.7);for(let wt=0;wt<6;wt++){const Vt=B.clone();Vt.applyMatrix4(Ie(G+(wt-2.5)*46*gt+o(-14,14),ct+o(-10,14)+(wt===2||wt===3?16*gt:0),q+o(-26,26),0,r()*6,0,o(46,74)*gt,o(22,34)*gt,o(38,60)*gt)),Vt.deleteAttribute("uv"),Y.push(Vt)}}const k=new V(or(Y,!1),new Le({color:16777215,fog:!1}));k.renderOrder=-8,e.add(k),e.add(new _u(14676479,5929530,1.15));const H=new Mu(16774095,1.7);H.position.copy(Q).multiplyScalar(300),e.add(H);const dt=Ss(1024,1024,(M,R)=>{const F=$i(7);M.fillStyle="#5c8a3a",M.fillRect(0,0,R,R);const G=["#4a7630","#6a9a44","#78a04a","#557f34","#86ac4e","#42702c"];for(let q=0;q<700;q++)M.fillStyle=G[q%6],M.globalAlpha=.25+F()*.3,M.beginPath(),M.ellipse(F()*R,F()*R,8+F()*46,5+F()*30,F()*3,0,6.3),M.fill();M.globalAlpha=1;for(let q=0;q<4e3;q++){M.strokeStyle=["#a0b05a","#c0c86a","#3b6226","#8aa048"][q%4],M.lineWidth=1.2,M.globalAlpha=.45;const ct=F()*R,gt=F()*R,wt=F()*6.3;M.beginPath(),M.moveTo(ct,gt),M.lineTo(ct+Math.cos(wt)*(5+F()*12),gt+Math.sin(wt)*(5+F()*12)),M.stroke()}M.globalAlpha=1;for(let q=0;q<70;q++)M.fillStyle=["#ffffff","#ffe27a","#ff9fc4"][q%3],M.beginPath(),M.arc(F()*R,F()*R,2.2,0,6.3),M.fill()},[40,40]),yt=new V(new qe(4e3,4e3),new ie({map:dt,roughness:1}));yt.rotation.x=-Math.PI/2,e.add(yt);const bt=440,Ot=2048/bt,Zt=Ss(2048,2048,M=>{const R=$i(31),F=ct=>(ct+bt/2)*Ot,G=ct=>(ct+bt/2)*Ot;M.lineCap="round",M.lineJoin="round";const q=(ct,gt,wt,Vt)=>{for(const[Bt,ue]of[[1.25,.2],[1.1,.3],[1,.45],[.82,.55]])M.globalAlpha=ue,M.fillStyle=Vt,M.beginPath(),M.arc(F(ct),G(gt),wt*Bt*Ot,0,6.3),M.fill()};q(0,0,38,"#b79866"),q(d.x,d.z,20,"#8a6a48"),q(h.x,h.z,h.r+7,"#9a8658");for(const ct of u)for(const[gt,wt]of[[1.3,.2],[1.12,.3],[1,.45],[.8,.55]]){M.globalAlpha=wt,M.strokeStyle="#b79866",M.lineWidth=f*1.7*gt*Ot,M.beginPath(),M.moveTo(F(ct[0][0]*.6),G(ct[0][1]*.6));for(const Vt of ct)M.lineTo(F(Vt[0]),G(Vt[1]));M.stroke()}M.globalAlpha=.5;for(let ct=0;ct<2600;ct++){const gt=(R()-.5)*bt,wt=(R()-.5)*bt;(Math.hypot(gt,wt)<38||_(gt,wt)<f*.8)&&(M.fillStyle=["#8f7448","#d2ba8a","#a58a5c"][ct%3],M.beginPath(),M.ellipse(F(gt),G(wt),1.5+R()*3.5,1+R()*2.5,R()*3,0,6.3),M.fill())}M.globalAlpha=1}),at=new V(new qe(bt,bt),new ie({map:Zt,transparent:!0,roughness:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));at.rotation.x=-Math.PI/2,at.position.y=.02,e.add(at);const nt=Ss(256,512,(M,R,F)=>{const G=$i(11);M.fillStyle="#5d4531",M.fillRect(0,0,R,F);for(let q=0;q<160;q++){M.strokeStyle=G()>.5?"rgba(30,18,10,.5)":"rgba(150,115,80,.35)",M.lineWidth=2+G()*5;const ct=G()*R;M.beginPath(),M.moveTo(ct,0),M.bezierCurveTo(ct+(G()-.5)*30,F*.3,ct+(G()-.5)*30,F*.6,ct+(G()-.5)*20,F),M.stroke()}for(let q=0;q<70;q++)M.fillStyle=`rgba(${70+G()*40},${120+G()*50},50,${.25+G()*.3})`,M.beginPath(),M.ellipse(G()*R,F*(.45+G()*.55),6+G()*26,10+G()*40,0,0,6.3),M.fill()},[3,2]),_t=new ie({map:nt,roughness:1}),Mt=[],Dt=[];function pt(M,R,F,G=.05,q=Mt){const ct=M.index?M.toNonIndexed():M.clone();ct.applyMatrix4(F),ct.deleteAttribute("uv");const gt=ct.attributes.position.count,wt=new Float32Array(gt*3),Vt=new pe(R);Vt.offsetHSL((r()-.5)*G,(r()-.5)*G,(r()-.5)*G);for(let Bt=0;Bt<gt;Bt++)wt.set([Vt.r,Vt.g,Vt.b],Bt*3);ct.setAttribute("color",new rn(wt,3)),q.push(ct)}const Et=new Fe(1,7,5),Jt=new $t(1,1,1,8),rt=new mn(1,1),Tt=new En(1,12).rotateX(-Math.PI/2),O=new Yi(bg,5);O.rotateX(-Math.PI/2);const Gt=new Fe(1,14,6,0,6.2832,0,Math.PI*.55),At=new En(1,14).rotateX(Math.PI/2),Xt=new $t(1,1,1,4),It=new ge,ee=new V(new ne(330,9,300),new ie({color:13618112,roughness:1,flatShading:!0}));ee.position.y=4.5,It.add(ee);const qt=new V(new $t(98,74,84,30),new ie({color:4876938,roughness:.45}));qt.position.y=51,It.add(qt);const C=new V(new Ve(98,7,8,36),new ie({color:5996451,roughness:.4}));C.rotation.x=Math.PI/2,C.position.y=93,It.add(C);const w=new V(new En(94,30),new ie({color:4863268,roughness:1}));w.rotation.x=-Math.PI/2,w.position.y=91,It.add(w);const tt=(M,R,F)=>new L(M,R,F),xt=new ie({color:7031343,roughness:1,flatShading:!0});for(const[M,R,F]of[[[tt(0,100,0),tt(-20,170,6),tt(12,250,-8),tt(36,320,4),tt(24,380,0)],26,9],[[tt(-18,168,6),tt(-52,196,10),tt(-88,214,8)],10,4],[[tt(12,250,-8),tt(46,268,-16),tt(80,286,-20)],9,4],[[tt(30,310,4),tt(-6,322,-8),tt(-30,318,-10)],7,3]])It.add(new V(Sg(M,R,F,8).geometrie,xt));for(const[M,R,F,G,q,ct,gt]of[[-92,226,8,58,22,48,3121228],[84,298,-20,60,23,50,4573013],[24,396,0,76,30,64,3121228],[-34,332,-10,48,19,42,4573013],[10,270,20,40,16,34,4045656]]){const wt=new V(new mn(1,2),new ie({color:gt,roughness:.9,flatShading:!0}));wt.position.set(M,R,F),wt.scale.set(G,q,ct),It.add(wt);for(let Vt=0;Vt<5;Vt++){const Bt=new V(B,new ie({color:Vt%2?16747051:16740261})),ue=r()*6.28;Bt.position.set(M+Math.cos(ue)*G*.7,R+q*.55,F+Math.sin(ue)*ct*.7),Bt.scale.setScalar(5),It.add(Bt)}}It.children.forEach(M=>{M!==ee&&M!==qt&&M!==C&&M!==w&&(M.position.y-=13)}),It.position.set(0,0,-300),e.add(It),a.push({min:[-165,0,-450],max:[165,9,-150]});const z=Ss(512,512,(M,R)=>{for(let F=0;F<6;F++)M.fillStyle=["#b98a5e","#ad7e52","#c2925f"][F%3],M.fillRect(F*86,0,84,512),M.fillStyle="rgba(0,0,0,0.3)",M.fillRect(F*86+84,0,2,512)},[12,1]);new V(new qe(2800,520),new Le({map:z}));const Z=new V(new qe(620,330),new Le({color:2759956}));Z.position.set(0,165,438),Z.rotation.y=Math.PI,e.add(Z);for(const[M,R,F,G]of[[44,360,-332,180],[44,360,332,180],[708,44,0,352],[2840,40,0,540]]){const q=new V(new ne(M,R,30),new Le({color:7031343}));q.position.set(F,G,432),e.add(q)}for(const[M,R,F,G,q]of[[-98,-58,-42,-96,11],[58,72,120,98,9],[-126,72,-66,112,10]]){const ct=Math.hypot(F-M,G-R),gt=Math.atan2(G-R,F-M),wt=new V(new $t(q,q*1.08,ct,16),_t);wt.rotation.set(0,-gt,Math.PI/2,"YXZ"),wt.position.set((M+F)/2,q*.92,(R+G)/2),e.add(wt);for(const[Vt,Bt,ue]of[[M,R,-1],[F,G,1]]){const De=new V(new En(q*1.02,16),new ie({color:13213804,roughness:1}));De.position.set(Vt+Math.cos(gt)*.1*ue,q*.92,Bt+Math.sin(gt)*.1*ue),De.rotation.y=-gt+(ue>0?Math.PI/2:-Math.PI/2),e.add(De)}for(let Vt=0;Vt<6;Vt++){const Bt=r();pt(Et,6199868,Ie(M+(F-M)*Bt,q*1.85,R+(G-R)*Bt,0,0,0,o(4,8),1.4,o(4,8)),.06)}A(M,R,F,G,q,q*1.9,{cam:!0})}const st=Ss(128,128,M=>{M.fillStyle="#d9b680",M.fillRect(0,0,128,128),M.strokeStyle="rgba(120,80,40,.55)",M.lineWidth=2;for(let R=8;R<64;R+=9)M.beginPath(),M.arc(64,64,R,0,6.3),M.stroke();M.strokeStyle="rgba(90,60,30,.5)",M.beginPath(),M.moveTo(64,64),M.lineTo(110,40),M.stroke()}),it=new ie({map:st,roughness:1}),mt=[];for(const[M,R,F]of[[68.2,41.2,2.6],[73.6,43.8,5.6],[79.2,46.1,8.4]]){const G=new V(new $t(3.2,3.4,F,16),_t);G.position.set(M,F/2,R),G.userData.garder=!0,e.add(G);const q=new V(new En(3.2,16),it);q.rotation.x=-Math.PI/2,q.position.set(M,F+.02,R),e.add(q);const ct={rond:!0,x:M,z:R,r:3.2,haut:F,accroche:1.2,rondin:mt.length+1};a.push(ct),mt.push(ct)}function Ft(M,R,F,G,q,ct,gt){const wt=F-G*.3,Vt=new V(new $t(q*.85,q,wt,14),new ie({color:16051416,roughness:.9}));Vt.position.set(M,wt/2,R),e.add(Vt);const Bt=new ge;Bt.position.set(M,wt,R),e.add(Bt);const ue=new V(new Fe(1,24,8,0,6.2832,0,Math.PI/2),new ie({color:ct,roughness:.6}));ue.scale.set(G,G*.3,G),Bt.add(ue);const De=new V(new En(G*.99,24),new ie({color:15259824,roughness:1,side:Be}));De.rotation.x=Math.PI/2,Bt.add(De);for(let hn=0;hn<gt;hn++){const Vs=hn/gt*6.283+.3,ei=G*(hn%2?.72:.42),ho=new V(Et,new ie({color:16777215,roughness:.7}));ho.scale.set(G*.1,G*.03,G*.1),ho.position.set(Math.cos(Vs)*ei,G*.3*Math.sqrt(Math.max(0,1-(ei/G)**2)),Math.sin(Vs)*ei),Bt.add(ho)}a.push({rond:!0,x:M,z:R,r:q+.3,haut:wt-.5,cam:!0});const on={rond:!0,x:M,z:R,r:G*.72,haut:F-G*.03,bas:wt-.4,accroche:2.4};return a.push(on),{chapeau:on,groupe:Bt,sommet:F}}const ut=Ft(90,50,11.4,9,2.6,14038318,8),Rt=Ft(94.5,75.6,44,18,5.5,15245882,12);let Ht=0;ut.chapeau.rebond=[38,68],ut.chapeau.surRebond=()=>{Ht=1,t&&t.fx("boing")};const Yt=[],Pt=new ie({color:12159566,roughness:1});function re(M,R,F,G){const q=Math.hypot(F,G),ct=F/q,gt=G/q,wt=M.chapeau.x+ct*(R+.4),Vt=M.chapeau.z+gt*(R+.4),Bt=M.sommet-R*.3,ue=new V(new $t(.34,.34,Bt-.6,7),Pt);ue.position.set(wt,Bt/2+.3,Vt),e.add(ue);for(let on=2.5;on<Bt-1;on+=3.2){const hn=new V(Et,Pt);hn.scale.setScalar(.62),hn.position.set(wt,on,Vt),e.add(hn)}const De=new V(new $t(.3,.3,2.2,6),new ie({color:7031343}));De.rotation.z=Math.PI/2,De.rotation.y=-Math.atan2(gt,ct),De.position.set(wt-ct*.9,Bt+.1,Vt-gt*.9),e.add(De),Yt.push({x:wt,z:Vt,haut:Bt,fx:-ct,fz:-gt,sortie:[M.chapeau.x+ct*R*.45,M.chapeau.haut,M.chapeau.z+gt*R*.45]})}const oe=Ft(-26,-72,27,12,3.6,11883834,8);re(oe,12,.94,.35);const ae=Ft(d.x,d.z,38,15,5,14038318,12);re(ae,15,1,.1);for(const[M,R,F,G]of[[38,34,30,.6],[-40,46,34,2.4]]){const q=new V(new $t(.55,.85,F,7),new ie({color:4168261,roughness:.8}));q.position.set(M,F/2,R),e.add(q);for(let De=5;De<F-3;De+=6){const on=new V(Et,new ie({color:3116858}));on.scale.set(1,.45,1),on.position.set(M,De,R),e.add(on)}const ct=Math.cos(G),gt=Math.sin(G),wt=M+ct*4.5,Vt=R+gt*4.5,Bt=new V(Et,new ie({color:5421134,roughness:.8}));Bt.scale.set(7.5,.5,5),Bt.rotation.y=-G,Bt.position.set(wt,F-.1,Vt),e.add(Bt);const ue=new V(Et,new ie({color:4565068,roughness:.8}));ue.scale.set(5,.4,3),ue.rotation.set(0,-G+Math.PI,.5),ue.position.set(M-ct*3.5,F*.6,R-gt*3.5),e.add(ue),a.push({rond:!0,x:M,z:R,r:.9,haut:F-1.2}),a.push({rond:!0,x:wt,z:Vt,r:4.6,haut:F+.36,bas:F-.6,accroche:1.5}),Yt.push({x:M,z:R,haut:F+.36,fx:ct,fz:gt,sortie:[wt,F+.36,Vt]})}const $=[[30,-4],[55,-10],[78,6],[90,21],[80,34],[66,38]],zt=new Le({color:16766046,side:Be}),lt=new Ei;lt.moveTo(0,2.6),lt.lineTo(1.9,.4),lt.lineTo(.75,.4),lt.lineTo(.75,-2.2),lt.lineTo(-.75,-2.2),lt.lineTo(-.75,.4),lt.lineTo(-1.9,.4),lt.closePath();const vt=new V(new uc(lt,{depth:.35,bevelEnabled:!1}).rotateX(-Math.PI/2),zt);vt.visible=!1,e.add(vt);const Ct=new ge;Ct.visible=!1,e.add(Ct);const ht=new V(new $t(2.2,2.2,160,14,1,!0),new Le({color:16769658,transparent:!0,opacity:.22,blending:Wn,depthWrite:!1,side:Be,fog:!1}));ht.position.y=80,Ct.add(ht);const le=new V(new wi(2.6,5,4),zt);le.rotation.x=Math.PI,Ct.add(le);const ce={phase:null,etape:0,i:0,combo:0,bravo:0};function He(){ce.phase!=="fini"&&(ce.phase="aller",ce.etape=0,ce.i=0,ce.bravo=0)}function Se(M,R,F,G){if(Ht=Math.max(0,Ht-R*2.4),ut.groupe.scale.y=1-.45*Math.sin(Ht*Math.PI)*Ht,!ce.phase||!F||!G){vt.visible=!1,Ct.visible=!1;return}if(ce.phase==="fini"){vt.visible=!1,Ct.visible=!1,ce.bravo=Math.max(0,ce.bravo-R);return}const q=G.support;if(q===Rt.chapeau){ce.phase="fini",ce.bravo=9,t&&t.fx("bravo");return}const ct=Math.hypot(F.x-80,F.z-50)<30;if(ce.phase==="aller"&&ct&&(ce.phase="tuto"),ce.phase==="tuto"&&!ct&&Math.hypot(F.x-80,F.z-50)>44&&(ce.phase="aller"),ce.combo=G.combo,ce.phase==="aller"){for(let De=$.length-1;De>=ce.i;De--)if(Math.hypot(F.x-$[De][0],F.z-$[De][1])<12){ce.i=Math.min($.length-1,De+1);break}const wt=$[ce.i],Vt=wt[0]-F.x,Bt=wt[1]-F.z,ue=Math.hypot(Vt,Bt)||1;vt.visible=!0,vt.position.set(F.x+Vt/ue*(8+Math.sin(M*4)*1.2),.5,F.z+Bt/ue*(8+Math.sin(M*4)*1.2)),vt.rotation.y=Math.atan2(Vt,Bt)+Math.PI,Ct.visible=!0,Ct.position.set(mt[0].x,0,mt[0].z),le.position.y=16+Math.sin(M*3)*2;return}vt.visible=!1,Ct.visible=!0,ce.etape=q===ut.chapeau?3:q&&q.rondin===3?2:1;const gt=ce.etape===3?[Rt.chapeau.x,Rt.sommet,Rt.chapeau.z]:ce.etape===2?[ut.chapeau.x,ut.sommet,ut.chapeau.z]:[mt[q&&q.rondin?q.rondin:0].x,mt[q&&q.rondin?q.rondin:0].haut,mt[q&&q.rondin?q.rondin:0].z];Ct.position.set(gt[0],0,gt[2]),le.position.y=gt[1]+9+Math.sin(M*3)*1.6}function ln(M,R,F,G,q,ct){const gt=new mn(1,2),wt=gt.attributes.position;for(let Bt=0;Bt<wt.count;Bt++){const ue=wt.getX(Bt),De=wt.getY(Bt),on=wt.getZ(Bt),hn=.86+.2*Math.sin(ue*4.1+De*3.3+on*5.7+M)*Math.cos(De*2.9-on*3.7+ue*1.3);wt.setXYZ(Bt,ue*hn,Math.min(De*hn,.78),on*hn)}gt.computeVertexNormals();const Vt=.5+r()*.18;pt(gt,new pe(Vt,Vt*.99,Vt*.94),Ie(M,G*.3,R,0,r()*6,0,F,G,q),.02),ct&&pt(Et,6199868,Ie(M,G*1.02,R,0,0,0,F*.62,G*.12,q*.62),.05),U(M,R,(F+q)*.4,G*1.06,{cam:F>6})}for(let M=0;M<14;M++){const R=o(8,20),F=S(R+2);F&&ln(F[0],F[1],R,o(7,15),R*o(.8,1.2),!0)}for(let M=0;M<s(55);M++){const R=o(3,6.5),F=S(R+1);F&&ln(F[0],F[1],R,o(1.5,3.3),R*o(.8,1.15),M%3===0)}for(let M=0;M<s(80);M++){const R=o(18,58),F=o(.55,1.2),G=r()*3.14,q=S(3);if(!q)continue;const ct=Math.cos(G)*R/2,gt=Math.sin(G)*R/2,wt=q[0]-ct,Vt=q[1]-gt,Bt=q[0]+ct,ue=q[1]+gt;b(wt,Vt,2)||b(Bt,ue,2)||!I(wt,Vt,F)||!I(Bt,ue,F)||!I(q[0]+ct/2,q[1]+gt/2,F)||!I(q[0]-ct/2,q[1]-gt/2,F)||(pt(Jt,7031343,Ie(q[0],F,q[1],Math.PI/2,Math.PI/2-G,0,F,R,F),.04),pt(Et,8017462,Ie(wt,F,Vt,0,0,0,F),.03),pt(Et,8017462,Ie(Bt,F,ue,0,0,0,F),.03),A(wt,Vt,Bt,ue,F,F*1.95))}for(let M=0;M<s(20);M++){const R=o(2.6,4),F=S(R+1);if(!F)continue;const G=r()*6;pt(Et,11894842,Ie(F[0],R*.9,F[1],0,G,1.2,R*1.1,R*.8,R*.8),.03),pt(Et,7031338,Ie(F[0]+Math.cos(G)*R*.55,R*1.05,F[1],0,G,1.2,R*.6,R*.7,R*.7),.03),U(F[0],F[1],R*.9,R*1.7)}const un=[14038318,16747069,11037242,16748479,15253578];function Ln(M,R,F,G,q){const ct=o(-.1,.1),gt=2.2+G*.12;if(pt(Jt,16051416,Ie(M,F/2,R,ct,0,ct,gt,F,gt),.03),pt(Gt,q,Ie(M,F-.5,R,ct,0,ct,G,G*.62,G),.04),pt(At,15259824,Ie(M,F-.6,R,ct,0,ct,G*.98,1,G*.98),.02),q===14038318||q===16747069)for(let wt=0;wt<9;wt++){const Vt=r()*6.28,Bt=o(.15,.95);pt(Et,16777215,Ie(M+Math.cos(Vt)*G*Math.sin(Bt)*.98,F-.5+G*.62*Math.cos(Bt)-.2,R+Math.sin(Vt)*G*Math.sin(Bt)*.98,0,0,0,G*.13,G*.05,G*.13),.01)}U(M,R,gt+.4,F,{cam:!0})}for(let M=0;M<13;M++){const R=.75+M/13*4.783,F=24+M%3*9,G=d.x+Math.cos(R)*F,q=d.z+Math.sin(R)*F;I(G,q,4)&&Ln(G,q,o(18,40),o(10,20),un[M%5])}for(let M=0;M<s(24);M++){const R=S(6);if(!R||m(R[0],R[1]))continue;const F=1+Math.floor(r()*3),G=un[M%5];for(let q=0;q<F;q++){const ct=R[0]+(q?o(-11,11):0),gt=R[1]+(q?o(-11,11):0);q&&(b(ct,gt,4)||!I(ct,gt,4))||Ln(ct,gt,o(10,30)*(q?.7:1),o(6,15)*(q?.75:1),G)}}const An=[16747051,16740261,16777215,11566335,16765517,16734815];function Rn(M,R,F){const G=o(35,85),q=o(-.16,.16),ct=r()*6.28;pt(Jt,4168261,Ie(M+Math.sin(q)*G*.5*Math.cos(ct),G/2,R+Math.sin(q)*G*.5*Math.sin(ct),0,0,0,.9,G,.9),.05);const gt=M+Math.sin(q)*G*Math.cos(ct),wt=R+Math.sin(q)*G*Math.sin(ct),Vt=o(5,9);for(let Bt=0;Bt<9;Bt++){const ue=Bt/9*6.28;pt(Et,F,Ie(gt+Math.cos(ue)*Vt*.95,G+.4,wt+Math.sin(ue)*Vt*.95,0,-ue,.15,Vt*.62,Vt*.17,Vt*.32),.04)}pt(Et,16761370,Ie(gt,G+1.2,wt,0,0,0,Vt*.34),.03);for(let Bt=0;Bt<2;Bt++)pt(Et,4565068,Ie(M+(Bt?5:-5),G*(.25+Bt*.2),R,0,0,Bt?-.7:.7,8,.8,2.6),.05);U(M,R,1.1,14)}for(let M=0;M<s(60);M++){const R=S(2.5,{zone:g});R&&Rn(R[0],R[1],An[M%6])}for(let M=0;M<s(45);M++){const R=S(2.5);R&&!m(R[0],R[1])&&Rn(R[0],R[1],An[M%6])}for(let M=0;M<s(50);M++){const R=S(2);if(!R||m(R[0],R[1]))continue;const F=o(6,9),G=o(24,36);for(let q=0;q<3;q++){const ct=q/3*6.28+.4;pt(Et,5222474,Ie(R[0]+Math.cos(ct)*F,G+F*.2,R[1]+Math.sin(ct)*F,0,0,0,F*1.2,F*.22,F*1.2),.05)}pt(Jt,4168261,Ie(R[0],G/2,R[1],0,0,0,.7,G,.7),.03),U(R[0],R[1],.9,14)}const On=()=>new L(r()-.5,r()-.5,r()-.5).normalize();for(let M=0;M<s(18);M++){const R=S(2);if(!R||m(R[0],R[1]))continue;const F=o(30,60);pt(Jt,5417040,Ie(R[0],F/2,R[1],0,0,0,.7,F,.7),.03);for(let G=0;G<22;G++){const q=On();pt(Xt,16053486,Ie(R[0]+q.x*6,F+q.y*6,R[1]+q.z*6,q.z*1.4,0,-q.x*1.4,.18,6,.18),.01)}pt(Et,15261888,Ie(R[0],F,R[1],0,0,0,2.2),.01),U(R[0],R[1],.9,14)}function Kn(M,R){const F=new Ei,G=14;F.moveTo(0,0);for(let gt=1;gt<=G;gt++){const wt=gt/G,Vt=R*Math.sin(Math.PI*Math.pow(wt,.7));F.lineTo(wt*M-1,Vt*(gt%2?1:.55))}for(let gt=G;gt>=1;gt--){const wt=gt/G,Vt=R*Math.sin(Math.PI*Math.pow(wt,.7));F.lineTo(wt*M-1,-Vt*(gt%2?1:.55))}F.closePath();const q=new Yi(F),ct=q.attributes.position;for(let gt=0;gt<ct.count;gt++)ct.setZ(gt,-Math.pow(ct.getX(gt)/M,2)*M*.38);return q}const Qn=[Kn(60,7),Kn(80,9),Kn(48,6)];for(let M=0;M<s(44);M++){const R=S(16,{solide:!1});if(!R||m(R[0],R[1]))continue;const F=7+Math.floor(r()*4),G=o(.7,1.1),q=[3116858,4038726,5026389][M%3];for(let ct=0;ct<F;ct++){const gt=ct/F*6.28+r()*.4;pt(Qn[ct%3],q,new Re().multiplyMatrices(Ie(R[0],.5,R[1],0,-gt,0,G),new Re().makeRotationZ(o(.55,1.15))),.06)}}const ti=[14254635,12735789,15250506,9416252,7049018,11027242],In=(M,R)=>Math.hypot(M-h.x,R-h.z)<h.r+8;for(let M=0;M<s(150);M++){const R=o(-212,212),F=o(-212,212);if(In(R,F))continue;const G=o(3,7);for(let q=0;q<3;q++)pt(Tt,[6263872,6987334,5605946][q],Ie(R+o(-G,G),.035+(M+q)%5*.004,F+o(-G,G),0,r()*6,0,G*o(.6,1.1),1,G*o(.6,1.1)),.04,Dt)}for(let M=0;M<s(220);M++){const R=o(-212,212),F=o(-212,212);if(_(R,F)<5||In(R,F))continue;const G=o(10,26);pt(O,ti[M%6],Ie(R,.06+M%9*.005,F,0,r()*6.28,0,G,G,G),.06,Dt)}for(let M=0;M<s(420);M++){const R=o(-212,212),F=o(-212,212),G=o(.3,.7),q=.5+r()*.25;pt(rt,new pe(q,q*.98,q*.92),Ie(R,G*.15,F,0,r()*6,0,G*1.3,G*.55,G),.02)}const _n=new V(new En(h.r,40),new ie({color:5218264,roughness:.05,metalness:.55,transparent:!0,opacity:.88}));_n.rotation.x=-Math.PI/2,_n.position.set(h.x,.12,h.z),e.add(_n);const di=[];for(let M=0;M<3;M++){const R=new V(new lo(.92,1,40),new Le({color:16777215,transparent:!0,opacity:.5,side:Be,depthWrite:!1}));R.rotation.x=-Math.PI/2,R.position.set(h.x+o(-12,12),.2,h.z+o(-12,12)),e.add(R),di.push({o:R,ph:M/3})}for(let M=0;M<7;M++){const R=r()*6.28,F=o(4,h.r-8),G=h.x+Math.cos(R)*F,q=h.z+Math.sin(R)*F,ct=o(4,7);if(pt(Tt,4038726,Ie(G,.3,q,0,0,0,ct,1,ct),.05),M%2===0){for(let gt=0;gt<6;gt++){const wt=gt/6*6.28;pt(Et,16752580,Ie(G+Math.cos(wt)*1.4,1.2,q+Math.sin(wt)*1.4,0,-wt,.5,1.6,.5,.9),.03)}pt(Et,16765517,Ie(G,1.4,q,0,0,0,.8),.02)}}U(h.x,h.z,h.r-1.5,200,{mur:!0});const Pi=new V(or(Mt,!1),new ie({vertexColors:!0,roughness:.85,side:Be}));e.add(Pi);const Li=new V(or(Dt,!1),new ie({vertexColors:!0,roughness:1,side:Be,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));e.add(Li);const pi={value:0};function Bs(){const R=[],F=[],G=[];for(let ct=0;ct<=6;ct++){const gt=ct/6,wt=.5*(1-Math.pow(gt,1.6))+.02,Vt=gt*gt*.35;R.push(-wt,gt,Vt,wt,gt,Vt);const Bt=new pe().lerpColors(new pe(2910760),new pe(10935390),Math.pow(gt,.8));if(F.push(Bt.r,Bt.g,Bt.b,Bt.r,Bt.g,Bt.b),ct<6){const ue=ct*2;G.push(ue,ue+1,ue+2,ue+1,ue+3,ue+2)}}const q=new Xe;return q.setAttribute("position",new be(R,3)),q.setAttribute("color",new be(F,3)),q.setIndex(G),q.computeVertexNormals(),q}const T=new ie({vertexColors:!0,roughness:.8,side:Be});T.onBeforeCompile=M=>{M.uniforms.uT=pi,M.vertexShader=`uniform float uT;
${M.vertexShader}`.replace("#include <begin_vertex>",`vec3 transformed = vec3(position);
      float ph = instanceMatrix[3].x * 0.06 + instanceMatrix[3].z * 0.045;
      float amp = position.y * position.y;
      transformed.x += sin(uT * 1.6 + ph) * 2.4 * amp;
      transformed.z += cos(uT * 1.2 + ph * 1.3) * 1.2 * amp;`)};const j=s(9e3),ot=new ir(Bs(),T,j),et=new Ze;let K=0;function Lt(M,R,F,G,q,ct){for(let gt=0;gt<F&&K<j;gt++){const wt=r()*6.28,Vt=Math.sqrt(r())*G,Bt=M+Math.cos(wt)*Vt,ue=R+Math.sin(wt)*Vt;b(Bt,ue,1)||m(Bt,ue)||(et.position.set(Bt,0,ue),et.rotation.set(o(-.3,.3),r()*6.28,o(-.3,.3)),et.scale.set(o(1.4,2.6),o(q,ct),1),et.updateMatrix(),ot.setMatrixAt(K++,et.matrix))}}for(let M=0;M<26;M++){const R=-.6+M/26*4.6;Lt(h.x+Math.cos(R)*(h.r+9),h.z+Math.sin(R)*(h.r+9),s(26),5,34,66)}for(let M=0;M<s(260)&&K<j;M++){const R=S(4,{solide:!1,etendue:222});R&&Lt(R[0],R[1],18+Math.floor(r()*28),o(5,14),14,44)}ot.count=K,ot.frustumCulled=!1,e.add(ot);const kt=new ir(new Fe(1,10,8),new ie({color:14677759,transparent:!0,opacity:.5,roughness:.05,metalness:.4}),s(260));for(let M=0;M<kt.count;M++){const R=o(-200,200),F=o(-200,200),G=_(R,F)<f||Math.hypot(R,F)<20?0:o(.35,.8);et.position.set(R,G*.7,F),et.rotation.set(0,0,0),et.scale.set(G,G*.8,G),et.updateMatrix(),kt.setMatrixAt(M,et.matrix)}e.add(kt);const jt=3.6,Kt=4.5,he=6,de=20;function Qt(M){return M.map((R,F)=>{const G=M[Math.max(0,F-1)],q=M[Math.min(M.length-1,F+1)],ct=q[0]-G[0],gt=q[1]-G[1],wt=Math.hypot(ct,gt)||1;return[R[0]-gt/wt*Kt,R[1]+ct/wt*Kt]})}const ve=u.map(M=>Qt(M)),Me=u.map(M=>Qt([...M].reverse())),Te=[],$e=[];let ye=!1;function te(M,R){const F={rond:!0,x:0,z:0,x2:0,z2:0,r:.75*R,haut:-1,cam:!1,mesh:M,ech:R,cap:0,actif:!1};return a.push(F),Te.push(F),F}function vn(M,R,F,G,q,ct){M.actif=!0,M.cap=G,M.cx=R,M.cz=F,M.haut=1.9*M.ech;const gt=Math.cos(G),wt=Math.sin(G);M.x=R-gt*1.6*M.ech,M.z=F-wt*1.6*M.ech,M.x2=R+gt*1*M.ech,M.z2=F+wt*1*M.ech,M.mesh.visible=!0,M.mesh.position.set(R,0,F),M.mesh.rotation.y=-G,ct&&M.mesh.userData.pattes&&M.mesh.userData.pattes(q)}function we(M,R,F,G,q,ct){const gt={x:R,z:F,cap:G,chemin:q,etape:"retour",file:[],hist:[[R,F]],corps:te(M,M.scale.x),suiveuses:[],bouge:!1};for(let wt=0;wt<ct;wt++){const Vt=ka({grain:wt%2===0});Vt.scale.setScalar(jt),Vt.visible=!1,e.add(Vt),gt.suiveuses.push(te(Vt,jt))}return $e.push(gt),gt}function Mn(M){M.etape==="aller"?(M.etape="retour",M.file=Me[M.chemin].map(R=>[...R])):(M.etape="aller",M.file=ve[M.chemin].map(R=>[...R]))}function Ge(M,R,F){M.bouge=!1,M.file.length||Mn(M);const G=M.file[0],q=G[0]-M.x,ct=G[1]-M.z;if(Math.hypot(q,ct)<2.5){M.file.shift();return}let wt=Math.atan2(ct,q)-M.cap;for(;wt>Math.PI;)wt-=Math.PI*2;for(;wt<-Math.PI;)wt+=Math.PI*2;M.cap+=Math.sign(wt)*Math.min(Math.abs(wt),1.9*R);const Vt=he*R*(Math.abs(wt)>.9?.25:1),Bt=M.x+Math.cos(M.cap)*Vt,ue=M.z+Math.sin(M.cap)*Vt;if(ye&&Math.hypot(Bt,ue)<56&&Math.hypot(Bt,ue)<Math.hypot(M.x,M.z))return;const De=M.x+Math.cos(M.cap)*8,on=M.z+Math.sin(M.cap)*8;let hn=F&&Math.hypot(De-F.x,on-F.z)<6&&F.y<7;if(!hn){for(const ei of Te)if(!(!ei.actif||ei===M.corps||M.suiveuses.includes(ei))&&Math.hypot(De-ei.cx,on-ei.cz)<7.5){hn=!0;break}}if(hn)return;M.x=Bt,M.z=ue,M.bouge=!0;const Vs=M.hist[M.hist.length-1];Math.hypot(M.x-Vs[0],M.z-Vs[1])>=1&&(M.hist.push([M.x,M.z]),M.hist.length>de*(M.suiveuses.length+1)+6&&M.hist.shift())}const Je=i?2:3;for(let M=0;M<Je;M++){const R=ka({grain:!0});R.scale.setScalar(jt),e.add(R);const F=Me[M][0],G=Me[M][1],q=we(R,F[0],F[1],Math.atan2(G[1]-F[1],G[0]-F[0]),M,2);q.file=Me[M].slice(1).map(ct=>[...ct])}let nn=null;function Pe(){if(!nn)return;const M=$e.indexOf(nn);M>=0&&$e.splice(M,1);for(const R of[a,Te]){const F=R.indexOf(nn.corps);F>=0&&R.splice(F,1)}e.remove(nn.corps.mesh),nn=null}function Cn(M){Pe(),e.add(M);const R=Je%u.length;nn=we(M,M.position.x,M.position.z,-M.rotation.y,R,0),nn.etape="aller";const F=Math.atan2(M.position.z,M.position.x);let G=Math.atan2(ve[R][0][1],ve[R][0][0]);for(;G<F;)G+=Math.PI*2;G-F>Math.PI&&(G-=Math.PI*2);const q=Math.max(2,Math.ceil(Math.abs(G-F)/.3));nn.file=[];for(let ct=1;ct<=q;ct++){const gt=F+(G-F)*ct/q;nn.file.push([Math.cos(gt)*19,Math.sin(gt)*19])}nn.file.push(...ve[R].map(ct=>[...ct]))}const Vn=[];for(let M=0;M<3;M++){const R=S(13);if(!R)continue;const F=Lg();F.scale.setScalar(1.6),e.add(F);const G=te(F,1);G.r=4.4,Vn.push({co:G,cx:R[0],cz:R[1],ph:r()*6})}const Qe=[],yn=new Ei;yn.moveTo(0,0),yn.bezierCurveTo(8,10,22,12,20,2),yn.bezierCurveTo(22,-10,8,-12,0,0);for(let M=0;M<5;M++){const R=new ge,F=[16747051,16740261,7321599,16765517,11566335][M],G=[];for(const ct of[-1,1]){const gt=new ge,wt=new V(new Yi(yn),new ie({color:F,side:Be,roughness:.6}));wt.rotation.x=-Math.PI/2,wt.scale.x=ct,wt.rotation.z=ct>0?0:Math.PI,gt.add(wt),R.add(gt),G.push(gt)}const q=new V(new pr(1.4,9,4,8),new ie({color:3811866}));q.rotation.x=Math.PI/2,R.add(q),R.scale.setScalar(1.1),e.add(R),Qe.push({g:R,ailes:G,cx:o(-90,90),cz:o(-90,90),ph:r()*6,haut:o(46,96)})}const x=s(420),D=new Float32Array(x*3),X=[];for(let M=0;M<x;M++)X.push([o(-170,170),o(4,120),o(-170,170),r()*6.28]);const ft=new ic(new Xe().setAttribute("position",new rn(D,3)),new ao({map:W,color:16776160,size:1.8,transparent:!0,opacity:.7,depthWrite:!1}));ft.frustumCulled=!1,e.add(ft);let Nt=null;function fe(M,R,F){const G=Nt===null?0:Math.min(.1,Math.max(0,M-Nt));Nt=M,Se(M,G,R,F),pi.value=M,k.rotation.y=M*.004;for(const q of $e)Ge(q,G,R),vn(q.corps,q.x,q.z,q.cap,M,q.bouge),q.suiveuses.forEach((ct,gt)=>{const wt=q.hist.length-1-(gt+1)*de;if(wt<1)return;const Vt=q.hist[wt],Bt=q.hist[wt+1];vn(ct,Vt[0],Vt[1],Math.atan2(Bt[1]-Vt[1],Bt[0]-Vt[0]),M+gt*.7,q.bouge)});for(const q of Vn){const ct=M*.12+q.ph;vn(q.co,q.cx+Math.cos(ct)*4,q.cz+Math.sin(ct)*4,ct+Math.PI/2,M,!1),q.co.haut=5,q.co.x2=q.co.x=q.co.cx,q.co.z2=q.co.z=q.co.cz}for(const q of Qe){const ct=M*.25+q.ph,gt=q.cx+Math.sin(ct)*50,wt=q.cz+Math.cos(ct*.8)*40,Vt=q.haut+Math.sin(ct*2.3)*12;q.g.position.set(gt,Vt,wt),q.g.rotation.y=Math.atan2(Math.cos(ct)*50,-Math.sin(ct*.8)*32)-Math.PI/2;const Bt=Math.sin(M*14+q.ph)*.9;q.ailes[0].rotation.z=Bt,q.ailes[1].rotation.z=-Bt}for(let q=0;q<x;q++){const ct=X[q];D[q*3]=ct[0]+Math.sin(M*.2+ct[3])*8,D[q*3+1]=ct[1]+Math.sin(M*.3+ct[3]*2)*4,D[q*3+2]=ct[2]+Math.cos(M*.25+ct[3])*8}ft.geometry.attributes.position.needsUpdate=!0;for(const q of di){const ct=(M*.3+q.ph)%1;q.o.scale.setScalar(2+ct*16),q.o.material.opacity=.5*(1-ct)}}return{nom:"Le jardin géant",scene:e,colliders:a,limites:c,maj:fe,depart:l,limiterCamera:(M,R,F)=>[Math.min(c.xMax+30,Math.max(c.xMin-30,M)),Math.min(220,Math.max(.9,R)),Math.min(c.zMax+30,Math.max(c.zMin-30,F))],adopter:Cn,retirerVedette:Pe,calme:M=>{ye=M},demarrerGuide:He,guide:()=>ce,cordes:Yt}}function wu(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}function Xg({racine:i,clavier:t}){if(!wu())return{actif:!1};i.classList.add("tactile"),i.insertAdjacentHTML("beforeend",`
    <div class="tactile-ui" id="tactile-ui">
      <div class="joystick" id="joy"><div class="pouce" id="pouce"></div></div>
      <div class="boutons-tactiles">
        <button class="bt" id="t-sprint">Sprint</button>
        <button class="bt grand" id="t-saut">Sauter</button>
      </div>
    </div>
    <div class="tourne" id="tourne"><p>Tourne ton téléphone à l’horizontale pour jouer</p></div>`);const e=i.querySelector("#joy"),n=i.querySelector("#pouce"),s=56;let r=null,o={x:0,y:0};const a=(g,_)=>{t.forcer("droite",g>.3),t.forcer("gauche",g<-.3),t.forcer("reculer",_>.3),t.forcer("avancer",_<-.3)},c=g=>{let _=g.clientX-o.x,m=g.clientY-o.y;const p=Math.hypot(_,m);p>s&&(_=_/p*s,m=m/p*s),n.style.transform=`translate(${_}px, ${m}px)`,a(_/s,m/s)};e.addEventListener("pointerdown",g=>{g.preventDefault(),r=g.pointerId;const _=e.getBoundingClientRect();o={x:_.left+_.width/2,y:_.top+_.height/2};try{e.setPointerCapture(r)}catch{}c(g)}),e.addEventListener("pointermove",g=>{g.pointerId===r&&c(g)});const l=g=>{g.pointerId===r&&(r=null,n.style.transform="",a(0,0))};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l);const u=i.querySelector("#t-saut");u.addEventListener("pointerdown",g=>{g.preventDefault(),t.declencher("sauter"),t.forcer("sauter",!0)});const f=()=>t.forcer("sauter",!1);u.addEventListener("pointerup",f),u.addEventListener("pointercancel",f),u.addEventListener("pointerleave",f);const h=i.querySelector("#t-sprint");h.addEventListener("pointerdown",g=>{g.preventDefault(),t.forcer("sprinter",!0),h.classList.add("appuye")});const d=()=>{t.forcer("sprinter",!1),h.classList.remove("appuye")};return h.addEventListener("pointerup",d),h.addEventListener("pointercancel",d),h.addEventListener("pointerleave",d),{actif:!0,montrer(g){i.querySelector("#tactile-ui").style.display=g?"":"none"}}}const qg=[{id:"p1",qui:"papa",texte:"Regarde, fiston !",ton:"Tout content, il arrive avec une surprise."},{id:"t1",qui:"theo",texte:"Papa ? Qu’est-ce que c’est ?",ton:"Curieux."},{id:"p2",qui:"papa",texte:"J’ai créé une nouvelle machine, pour rétrécir les objets !",ton:"Très fier de lui."},{id:"p3",qui:"papa",texte:"Viens, je vais te la montrer avec cette pomme.",ton:"Pressé de montrer."},{id:"p4",qui:"papa",texte:"Regarde bien !",ton:"Comme un magicien avant son tour."},{id:"p5",qui:"papa",texte:"Et maintenant, le rayon !",ton:"Fort, comme une annonce."},{id:"p6",qui:"papa",texte:"Ça marche ! Elle est toute petite !",ton:"Il n’en revient pas."},{id:"t2",qui:"theo",texte:"Ah… ah…",ton:"Le nez qui chatouille, avant d’éternuer."},{id:"p7",qui:"papa",texte:"Fiston ? Ça va ?",ton:"Un peu inquiet."},{id:"t3",qui:"theo",texte:"Ah… ah… ah…",ton:"Ça monte, ça monte…"},{id:"t4",qui:"theo",texte:"Atchoum !",ton:"Un énorme éternuement."},{id:"p8",qui:"papa",texte:"Oh non ! Théo ! Mon fils ! Il est tout petit !",ton:"Affolé."},{id:"t5",qui:"theo",texte:"Papa ? Qu’est-ce qui m’arrive ?",ton:"Perdu, un peu peur."},{id:"p9",qui:"papa",texte:"La machine surchauffe ! Elle va exploser !",ton:"Il crie, c’est la panique."},{id:"t6",qui:"theo",texte:"Papa ! Aide-moi !",ton:"Il crie au secours."},{id:"t7",qui:"theo",texte:"Aaaaaah !",ton:"Un long cri : il vole dans les airs."},{id:"t8",qui:"theo",texte:"Aïe… Où suis-je ? Tout est tellement grand !",ton:"Sonné, puis émerveillé."},{id:"t9",qui:"theo",texte:"Oh ! Une fourmi géante !",ton:"Surpris, il sursaute."},{id:"t10",qui:"theo",texte:"Elle est plus grande que moi !",ton:"Impressionné."},{id:"t11",qui:"theo",texte:"Bon… Il faut que je retrouve la maison !",ton:"Décidé."}],Es=Object.fromEntries(qg.map(i=>[i.id,i.texte])),Jo=Symbol("annule"),Ke=i=>i<.5?2*i*i:1-(-2*i+2)**2/2,se=(i,t,e)=>new L(i,t,e);function $g({scene:i,garage:t,joueur:e,moteur:n,son:s,voix:r,racine:o,clavier:a,surFin:c}){const{maisonApi:l,machineApi:u}=t,f=fc();let h=!1,d=!1,g=0,_=null,m=null,p=null,E=i,b=0,v=0,U=null,A="foret";const P=()=>(p||(p=Wg({leger:wu(),son:s}),n.renderer.compile(p.scene,n.camera)),p),I=new Set,S=new Set,y=[],N={pos:se(0,0,0),look:se(0,0,0),posC:se(0,0,0),lookC:se(0,0,0)};o.insertAdjacentHTML("beforeend",`
    <div class="cine" id="cine" hidden>
      <div class="bande haut"></div><div class="bande bas"></div>
      <div class="sous-titre" id="st" hidden><b id="st-nom"></b><span id="st-texte"></span></div>
      <button class="bouton secondaire petit" id="cine-passer">Passer l'animation</button>
      <div class="flash" id="cine-flash"></div>
      <div class="noir" id="cine-noir"><p id="cine-carte"></p></div>
    </div>`);const J=z=>o.querySelector(z),Q=J("#cine"),W=J("#st"),Y=J("#cine-flash"),B=J("#cine-noir"),k=()=>{if(d)throw Jo};function H(z,Z){return new Promise(st=>{if(d){st();return}I.add({t:0,dur:Math.max(.001,z),fn:Z,res:st})}).then(k)}const dt=z=>H(z),yt=(z,Z,st=!1)=>{N.posC.copy(z),N.lookC.copy(Z),st&&(N.pos.copy(z),N.look.copy(Z))};function bt(z,Z){if(h){Z!==void 0&&(v=Z),g+=z;for(const st of[...I]){st.t+=z;const it=Math.min(1,st.t/st.dur);st.fn&&st.fn(it),it>=1&&(I.delete(st),st.res())}for(const st of[...S])st(z,g)===!1&&S.delete(st);p&&E===p.scene&&p.maj(v,e.hero.position),N.pos.lerp(N.posC,1-Math.exp(-z*2.6)),N.look.lerp(N.lookC,1-Math.exp(-z*3.4)),n.camera.position.copy(N.pos),b>0&&(n.camera.position.x+=(Math.random()-.5)*b*1.2,n.camera.position.y+=(Math.random()-.5)*b*1.2,b=Math.max(0,b-z*1.4)),n.camera.lookAt(N.look)}}const Ot=z=>{z.userData.jambes.forEach(Z=>{Z.rotation.x=0})};function Zt(z,Z,st,it=7,mt=!0){const Ft=z.position,ut=Z-Ft.x,Rt=st-Ft.z,Ht=Math.hypot(ut,Rt),Yt=Math.atan2(ut,Rt),Pt=Ft.x,re=Ft.z,oe=z.rotation.y;let ae=Yt-oe;for(;ae>Math.PI;)ae-=Math.PI*2;for(;ae<-Math.PI;)ae+=Math.PI*2;const $=Math.max(.05,Ht/it),zt=z.userData;return H($,lt=>{Ft.x=Pt+ut*lt,Ft.z=re+Rt*lt,z.rotation.y=oe+ae*Math.min(1,lt*$/.35);const vt=g*(it>7?14:10),Ct=Math.sin(vt);zt.jambes[0].rotation.x=Ct*.7,zt.jambes[1].rotation.x=-Ct*.7,mt&&(zt.bras[0].rotation.x=-Ct*.55,zt.bras[1].rotation.x=Ct*.55),Ft.y=Math.abs(Ct)*.09}).then(()=>{Ot(z),Ft.y=0})}function at(z,Z,st,it=.5){const mt=z.rotation.y;let Ft=Math.atan2(Z-z.position.x,st-z.position.z)-mt;for(;Ft>Math.PI;)Ft-=Math.PI*2;for(;Ft<-Math.PI;)Ft+=Math.PI*2;return H(it,ut=>{z.rotation.y=mt+Ft*Ke(ut)})}function nt(z,Z,st,it=.5){const mt=z[Z];return H(it,Ft=>{z[Z]=mt+(st-mt)*Ke(Ft)})}const _t=z=>z.localToWorld(se(0,z.userData.hauteurTete,.2));function Mt(z,Z){const st=z.userData,it=(mt,Ft)=>{if(!Z.v)return st.bouche.visible=!1,st.sourire.visible=!0,!1;const ut=Math.sin(Ft*16)>.1;return st.bouche.visible=ut,st.sourire.visible=!ut,!0};S.add(it)}async function Dt(z,Z,st,it){J("#st-nom").textContent=z,J("#st-texte").textContent=st,W.hidden=!1;const mt={v:!0};Mt(Z,mt),await r.dire(st,it),mt.v=!1,k(),W.hidden=!0,await dt(.25)}const pt=z=>Dt("Papa",m,Es[z],{id:z,pitch:.7,rate:.95}),Et=(z,Z={})=>Dt("Théo",e.hero,Es[z],{id:z,pitch:1.95,rate:1.1,genre:"femme",...Z});function Jt(z,Z=30,{couleur:st=16773792,vitesse:it=4,taille:mt=.4,duree:Ft=1.2,gravite:ut=2}={}){const Rt=new Float32Array(Z*3),Ht=[];for(let ae=0;ae<Z;ae++){Rt.set([z.x,z.y,z.z],ae*3);const $=se(Math.random()-.5,Math.random()-.2,Math.random()-.5).normalize().multiplyScalar(it*(.3+Math.random()));Ht.push($)}const Yt=new Xe;Yt.setAttribute("position",new rn(Rt,3));const Pt=new ic(Yt,new ao({map:f,color:st,size:mt,transparent:!0,opacity:1,blending:Wn,depthWrite:!1}));Pt.frustumCulled=!1;const re=E;re.add(Pt),y.push(Pt);let oe=0;S.add(ae=>{oe+=ae;for(let $=0;$<Z;$++)Ht[$].y-=ut*ae,Rt[$*3]+=Ht[$].x*ae,Rt[$*3+1]+=Ht[$].y*ae,Rt[$*3+2]+=Ht[$].z*ae;return Yt.attributes.position.needsUpdate=!0,Pt.material.opacity=Math.max(0,1-oe/Ft),oe>=Ft?(re.remove(Pt),Yt.dispose(),Pt.material.dispose(),!1):!0})}const rt=(z,Z)=>H(Z,st=>{Y.style.opacity=String(z*Math.sin(Math.PI*Math.min(1,st)))});function Tt(z,Z){const st=new Set;return z.traverse(it=>{it.isMesh&&!it.material.transparent&&st.add(it.material)}),st.forEach(it=>{it.transparent=!0,it.opacity=0,it.needsUpdate=!0}),H(Z,it=>{st.forEach(mt=>{mt.opacity=it})}).then(()=>{st.forEach(it=>{it.transparent=!1,it.opacity=1,it.needsUpdate=!0})})}function O(){const z=new ge,Z=new ie({color:14690350,roughness:.45}),st=new V(new Fe(.15,16,12),Z);st.scale.set(1,.92,1),z.add(st);const it=new V(new $t(.008,.01,.07,5),new ie({color:5913894}));it.position.y=.15,z.add(it);const mt=new V(new Fe(.05,8,6),new ie({color:4045656}));return mt.scale.set(1.6,.3,.8),mt.position.set(.05,.17,0),mt.rotation.z=.4,z.add(mt),z}function Gt(){const z=new ge;z.add(new V(new ne(.09,.04,.17),new ie({color:2830648,roughness:.5})));const Z=new V(new $t(.018,.018,.02,8),new ie({color:16726843,emissive:16726843,emissiveIntensity:.8}));return Z.position.set(0,.03,-.03),z.add(Z),z}async function At(z){e.hero.rotation.order="YXZ",z!=="foret"&&await Xt(),P(),await It()}async function Xt(){const z=e.hero,Z=z.userData,st=m.userData,it=u.position;st.bras[0].rotation.x=-.5,st.bras[1].rotation.x=-.25;const mt=O();mt.position.set(0,-.08,.1),st.mains[0].add(mt),y.push(mt);const Ft=Gt();Ft.position.set(0,-.06,.06),st.mains[1].add(Ft),y.push(Ft),yt(se(-6.5,8,9.5),se(-15,3.8,1.2)),await Zt(z,-10.5,1.2,9),await at(z,-19,1.2,.5),m.position.set(-19.3,0,1.2),m.rotation.y=Math.PI/2,s.fx("porte"),await Promise.all([H(1.8,ht=>l.ouvrir(Ke(ht))),dt(.5).then(()=>(m.visible=!0,Tt(m,.9)))]),await Zt(m,-14.2,1.2,5,!1),yt(se(-7.5,6.2,6.2),se(-12.6,4.4,1.2)),await pt("p1"),await Et("t1"),await pt("p2"),await pt("p3"),yt(se(4.5,7.5,4),se(-5,3.5,-4)),H(1.4,ht=>l.ouvrir(1-Ke(ht))),await Promise.all([Zt(m,-5.4,-5.6,8,!1),dt(.7).then(()=>Zt(z,-2.4,-4.6,8))]),await Promise.all([at(m,it.x,it.z),at(z,it.x,it.z)]),yt(se(5.2,7,.5),se(-2.4,3.6,-8)),await pt("p4"),st.bras[1].rotation.x=-1.4,s.fx("clic"),s.fx("machine"),Jt(se(it.x,1.2,it.z),20,{couleur:8382463,vitesse:2,duree:2}),await H(2.2,ht=>u.ouvrirVerre(Ke(ht))),await H(.5,ht=>{st.bras[0].rotation.x=-.5-1.1*Ke(ht)}),await H(.25,ht=>{st.bras[0].rotation.x=-1.6-.7*ht}),i.attach(mt);const ut=mt.position.clone(),Rt=se(it.x,u.platY+.4,it.z);H(.55,ht=>{st.bras[0].rotation.x=-2.3+1.8*Ke(ht)}),await H(.95,ht=>{mt.position.lerpVectors(ut,Rt,ht),mt.position.y+=Math.sin(Math.PI*ht)*3.2,mt.rotation.z=ht*5}),mt.position.copy(Rt),await pt("p5"),s.fx("clic"),s.fx("rayon"),await H(.6,ht=>u.rayon(Ke(ht)));const Ht=mt.scale.x;Jt(Rt,40,{couleur:12580607,vitesse:3.5,duree:1.4}),await H(1.5,ht=>{mt.scale.setScalar(Ht*(1-.7*Ke(ht))),mt.position.y=u.platY+.4-.25*Ke(ht)}),s.fx("ding"),await H(.5,ht=>u.rayon(1-Ke(ht)*.55)),await pt("p6"),yt(se(1.6,6.2,-.8),se(-2.4,4.4,-6.5));const Yt=Z.tete;Jt(_t(z),14,{couleur:16773312,vitesse:.8,taille:.3,duree:2.6,gravite:-.2}),s.fx("reniflement"),Z.sourire.visible=!1,Z.bouche.visible=!0,await Promise.all([nt(Yt.rotation,"x",-.5,1.2),nt(z.rotation,"x",-.12,1.2),Et("t2",{rate:.6})]),at(m,z.position.x,z.position.z,.5),await pt("p7"),s.fx("reniflement"),await Et("t3",{rate:.5}),Z.sourire.visible=!1,Z.bouche.visible=!0,s.fx("atchoum"),r.dire(Es.t4,{id:"t4",pitch:2,rate:1.3,genre:"femme"}),Jt(_t(z),50,{couleur:16777215,vitesse:6,taille:.45,duree:1,gravite:4}),yt(se(2.8,5.2,-4.2),se(-1.6,3,-8.4));const Pt=z.position.clone();Z.bras[0].rotation.x=-1.3,Z.bras[1].rotation.x=-1.3,await H(.45,ht=>{Yt.rotation.x=-.5+1.5*Ke(ht),z.rotation.x=-.12+.55*Ke(ht),z.position.set(Pt.x+(-1.6-Pt.x)*Ke(ht),0,Pt.z+(-8.4-Pt.z)*Ke(ht))}),s.fx("rayon");const re=z.position.clone(),oe=se(it.x,u.platY,it.z-.3);await Promise.all([H(.85,ht=>{z.position.lerpVectors(re,oe,ht),z.position.y=oe.y*ht+Math.sin(Math.PI*ht)*3.4,z.rotation.x=.43*(1-ht),Z.jambes[0].rotation.x=-.5,Z.jambes[1].rotation.x=.5}),H(.85,ht=>{u.rayon(.45+ht)}),nt(Yt.rotation,"x",0,.85)]),z.rotation.set(0,0,0),Ot(z),Z.bras.forEach(ht=>{ht.rotation.x=0}),yt(se(3.4,3.8,-6.2),se(it.x,2.4,it.z)),s.fx("retrecir"),Jt(se(it.x,3,it.z),70,{couleur:12580607,vitesse:5,taille:.5,duree:1.6}),rt(.95,1.1),await H(1.7,ht=>{z.scale.setScalar(3-2.7*Ke(ht)),u.rayon(1.4+Math.sin(ht*20)*.2)}),Jt(se(it.x,1.6,it.z),40,{couleur:16773792,vitesse:3,duree:1.2}),Z.sourire.visible=!0,Z.bouche.visible=!1,await H(.7,ht=>u.rayon(1.4*(1-Ke(ht)))),yt(se(-.2,1.7,-8.6),se(-3.4,5.2,-6.9)),at(m,it.x,it.z,.3),st.bras[0].rotation.x=-1,st.bras[1].rotation.x=-1,Zt(m,-3.3,-6.7,4,!1),await pt("p8"),yt(se(it.x+1.4,1.9,it.z+3.2),se(it.x,1.2,it.z));let ae=!0;S.add((ht,le)=>ae?(Z.bras[1].rotation.z=-2.5+Math.sin(le*11)*.35,!0):!1),await Et("t5",{pitch:2.1}),ae=!1,Z.bras[1].rotation.z=0,P(),yt(se(5.6,7.2,-2.2),se(it.x,4.2,it.z)),s.fx("alarme");let $=!0;S.add((ht,le)=>$?(u.alarme(Math.sin(le*14)>0?1:.3),u.secouer(.25+.35*Math.min(1,(g-zt)/3)),!0):!1);const zt=g;u.rayon(.9),st.bras[0].rotation.x=-1.9,st.bras[1].rotation.x=-1.9,await pt("p9"),s.fx("alarme"),await Et("t6",{pitch:2.1}),await dt(.6),$=!1;const lt=se(it.x,u.platY+.6,it.z);ee(lt),u.exploser(),u.alarme(0),yt(se(7,6.5,1.5),se(it.x,4,it.z),!0),H(.9,ht=>{m.position.x=-3.3-2.2*Ke(ht),m.position.z=-6.7+2.4*Ke(ht),m.rotation.x=-.3*Math.sin(Math.PI*ht)});const vt=new ac([se(it.x,1.2,it.z),se(-.8,6,-8),se(-.3,7,0),se(0,6.6,10),se(0,6.2,18),se(.6,13,30),se(1.6,20,48),se(2.2,12,64),se(2.6,3.2,76)]),Ct=se(0,0,0);r.dire(Es.t7,{id:"t7",pitch:2,rate:1.2,genre:"femme"}),s.fx("chute"),await dt(.35),await H(3.6,ht=>{vt.getPoint(Math.min(1,ht),Ct),z.position.copy(Ct),z.rotation.z=ht*14,z.rotation.x=ht*5,yt(se(Ct.x-2+(ht>.6?6*(ht-.6):0),Ct.y+2.5,Ct.z-11),se(Ct.x,Ct.y,Ct.z))}),z.rotation.set(0,0,0),s.fx("atterrissage"),Jt(se(z.position.x,.6,z.position.z),40,{couleur:13220234,vitesse:5,taille:1.2,duree:1.2,gravite:5}),await dt(.5)}async function It(){const z=e.hero,Z=z.userData;rt(1,.9),await dt(.35),qt(),yt(se(8,26,30),se(0,10,0),!0),z.position.set(0,70,0),z.rotation.set(0,0,0),s.fx("chute"),await H(1.1,ut=>{z.position.y=70*(1-ut*ut),z.rotation.x=ut*3}),z.rotation.x=0,s.fx("atterrissage"),Jt(se(0,1,0),50,{couleur:13220234,vitesse:7,taille:2,duree:1.4,gravite:6}),H(.25,ut=>{z.scale.set(3*(1+.25*Math.sin(Math.PI*ut)),3*(1-.25*Math.sin(Math.PI*ut)),3*(1+.25*Math.sin(Math.PI*ut)))}),yt(se(8,11,24),se(0,6,0)),await dt(.8),nt(Z.tete.rotation,"y",-.9,1).then(()=>nt(Z.tete.rotation,"y",.9,1.6)),await Et("t8",{pitch:2.1}),Z.tete.rotation.y=0,p.retirerVedette();const st=ka({grain:!0});st.scale.setScalar(4.2),st.position.set(-40,0,-5),E.add(st),U=st;let it=!0;S.add((ut,Rt)=>U!==st?!1:(it&&st.userData.pattes(Rt),!0)),yt(se(-4,8,23),se(-6,4.5,-3));const mt=H(4.4,ut=>{st.position.x=-40+28*ut});await dt(1.5),s.fx("reniflement"),await at(z,-30,-5,.45),H(.4,ut=>{z.position.y=Math.sin(Math.PI*ut)*1.6}),Z.bras[0].rotation.x=-2.2,Z.bras[1].rotation.x=-2.2,await Et("t9",{pitch:2.1}),await mt,it=!1,Z.bras[0].rotation.x=0,Z.bras[1].rotation.x=0,yt(se(-7,6,21),se(-7,4.6,-3)),H(1.8,ut=>{st.rotation.z=Math.sin(ut*Math.PI*4)*.05}),await at(z,st.position.x+4,-5,.4),await Et("t10",{pitch:2.1}),await dt(.5),it=!0,st.rotation.z=0,yt(se(3,7.5,23),se(1,4.5,-3));let Ft=!0;S.add(()=>Ft?(z.rotation.y=Math.atan2(st.position.x+4-z.position.x,st.position.z-z.position.z),!0):!1),await H(7,ut=>{st.position.x=-12+46*ut}),Ft=!1,await at(z,0,30,.5),await Et("t11",{pitch:2.1}),await dt(.4)}function ee(z){s.fx("explosion"),b=1.2,rt(1,.8);const Z=new V(new Fe(1,18,14),new Le({color:16756800,transparent:!0,opacity:1,blending:Wn,depthWrite:!1}));Z.position.copy(z),i.add(Z),y.push(Z);const st=new V(new lo(.9,1.1,40),new Le({color:16769696,transparent:!0,opacity:.8,side:Be,depthWrite:!1}));st.rotation.x=-Math.PI/2,st.position.set(z.x,.15,z.z),i.add(st),y.push(st);const it=new nr(16752704,900,60,1.4);it.position.copy(z),i.add(it),y.push(it);let mt=0;S.add(ut=>{mt+=ut;const Rt=Math.min(1,mt/.6);return Z.scale.setScalar(1+9*Ke(Rt)),Z.material.opacity=Math.max(0,1-mt/.8),st.scale.setScalar(1+mt*28),st.material.opacity=Math.max(0,.8-mt*1.2),it.intensity=Math.max(0,900*(1-mt/1.2)),mt>1.3?(i.remove(Z,st,it),!1):!0}),Jt(z,90,{couleur:16752704,vitesse:22,taille:1.4,duree:1.6,gravite:12}),Jt(z,50,{couleur:16773824,vitesse:30,taille:.9,duree:1,gravite:6});const Ft=[5531516,7243424,10478574,14035002,2830648];for(let ut=0;ut<34;ut++){const Rt=ut%3===0?new $t(.2,.2,.8+Math.random()*1.4,6):new ne(.4+Math.random()*1.2,.3+Math.random()*.8,.4+Math.random()*1.2),Ht=new V(Rt,new ie({color:Ft[ut%5],roughness:.6,transparent:ut%5===2,opacity:ut%5===2?.5:1}));Ht.position.set(z.x,z.y+1+Math.random()*4,z.z),i.add(Ht),y.push(Ht);const Yt=Math.random()*6.28,Pt=se(Math.cos(Yt),0,Math.sin(Yt)).multiplyScalar(5+Math.random()*14);Pt.y=8+Math.random()*20;const re=se(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(14);let oe=0;S.add(ae=>(oe+=ae,Pt.y-=40*ae,Ht.position.addScaledVector(Pt,ae),Ht.position.y<.3&&(Ht.position.y=.3,Pt.y*=-.35,Pt.x*=.6,Pt.z*=.6,re.multiplyScalar(.6)),Ht.rotation.x+=re.x*ae,Ht.rotation.y+=re.y*ae,Ht.rotation.z+=re.z*ae,oe>6?(i.remove(Ht),!1):!0))}for(let ut=0;ut<18;ut++){const Rt=new V(new Fe(1,10,8),new Le({color:3815994,transparent:!0,opacity:.7,depthWrite:!1}));Rt.position.set(z.x+(Math.random()-.5)*3,z.y+Math.random()*2,z.z+(Math.random()-.5)*3),i.add(Rt),y.push(Rt);const Ht=(Math.random()-.5)*3,Yt=(Math.random()-.5)*3;let Pt=Math.random()*-.4;S.add(re=>(Pt+=re,Pt<0?!0:(Rt.position.x+=Ht*re,Rt.position.z+=Yt*re,Rt.position.y+=(3+Pt)*re,Rt.scale.setScalar(.8+Pt*1.5),Rt.material.opacity=Math.max(0,.55-Pt*.14),Pt>4?(i.remove(Rt),!1):!0)))}}function qt(){E=p.scene,n.voir(p.scene),p.calme(!0),p.maj(v,e.hero.position),e.changerMonde(p,p.depart.x,p.depart.z,0),e.hero.scale.setScalar(3),e.hero.rotation.order="YXZ"}function C(){r.arreter();for(const mt of y)mt.parent&&mt.parent.remove(mt);y.length=0,I.clear(),S.clear(),m&&(i.remove(m),m.visible=!1);const z=e.hero,Z=z.userData,it=!!p&&z.parent===p.scene?{x:z.position.x,z:z.position.z,cap:z.rotation.y}:null;z.scale.setScalar(3),z.rotation.order="XYZ",z.rotation.set(0,0,0),Z.tete.rotation.set(0,0,0),Z.sourire.visible=!0,Z.bouche.visible=!1,Z.bras.forEach(mt=>mt.rotation.set(0,0,0)),Ot(z),l.ouvrir(0),u.ouvrirVerre(0),u.rayon(0),u.reparer(),E=i,U&&(A==="foret"?(U.rotation.z=0,P().adopter(U)):U.parent&&U.parent.remove(U),U=null),b=0,s.baisser(!1),Y.style.opacity="0",B.style.opacity="0",J("#cine-carte").style.opacity="0",W.hidden=!0,Q.hidden=!0,o.classList.remove("en-cine"),a.bloquer(!1),h=!1,p&&p.calme(!1),c(A,A==="foret"?P():null,it)}const w=z=>{z.reason===Jo&&z.preventDefault()};async function tt(z){if(h)return;r.eveiller(),window.addEventListener("unhandledrejection",w),h=!0,d=!1,g=0,A="foret",s.baisser(!0),a.bloquer(!0),o.classList.add("en-cine"),Q.hidden=!1,B.style.opacity="0",Y.style.opacity="0",J("#cine-carte").style.opacity="0",m||(m=Pg({echelle:3})),i.add(m),m.visible=!1,N.pos.copy(n.camera.position),N.look.set(e.pos.x,e.pos.y+4,e.pos.z),N.posC.copy(N.pos),N.lookC.copy(N.look);const Z=new Promise(st=>{_=st});try{await Promise.race([r.precharger(),new Promise(st=>setTimeout(st,2500))]),await Promise.race([At(z).catch(st=>{if(st!==Jo)throw st}),Z])}catch(st){console.error(st)}C(),setTimeout(()=>window.removeEventListener("unhandledrejection",w),500)}function xt(z="foret"){if(h){A=z,d=!0;for(const Z of I)Z.res();r.arreter(),_&&_()}}return J("#cine-passer").addEventListener("click",()=>xt("foret")),{lancer:tt,annuler:xt,maj:bt,actif:()=>h,jardin:P}}function bu(i,t){const e=typeof window<"u"&&"speechSynthesis"in window&&typeof SpeechSynthesisUtterance<"u";if(e)try{speechSynthesis.getVoices(),speechSynthesis.addEventListener("voiceschanged",()=>speechSynthesis.getVoices())}catch{}const n=u=>{if(!e)return null;const f=speechSynthesis.getVoices().filter(_=>/^fr/i.test(_.lang)),h=f.some(_=>_.localService)?f.filter(_=>_.localService):f;if(!h.length)return null;const d=/thomas|daniel|male|homme|paul|henri/i,g=/amélie|amelie|audrey|aurélie|marie|julie|female|femme|virginie/i;return h.find(_=>(u==="homme"?d:g).test(_.name))||h[0]};let s=!1;function r(){if(!(!e||s))try{const u=new SpeechSynthesisUtterance(" ");u.volume=0,u.lang="fr-FR",speechSynthesis.speak(u),s=!0}catch{}}const o=new Map;let a=null,c=null;async function l(){if(t)try{a||(a=await(await fetch("./voix/liste.json",{cache:"no-store"})).json()),await Promise.all(a.filter(u=>!o.has(u)).map(async u=>{const f=await t.tampon(`./voix/${u}.mp3`);f&&o.set(u,f)}))}catch{a=a||[]}}return{eveiller:r,precharger:l,enregistrees:()=>o.size,disponible:()=>!!n("homme"),nom(u="homme"){const f=n(u);return f?{nom:f.name,langue:f.lang,locale:f.localService}:null},compte(){if(!e)return null;const u=speechSynthesis.getVoices().filter(f=>/^fr/i.test(f.lang));return{total:speechSynthesis.getVoices().length,fr:u.length,frLocales:u.filter(f=>f.localService).length}},pris:()=>e,arreter(){if(c&&(c.stop(),c=null),e)try{speechSynthesis.cancel()}catch{}},dire(u,{id:f=null,pitch:h=1,rate:d=1,genre:g="homme"}={}){if(f&&o.has(f)&&i()>0){const _=t.jouerTampon(o.get(f),i());if(_)return c=_,_.fin.then(()=>new Promise(m=>setTimeout(m,150)))}return new Promise(_=>{const m=1100+u.length*52,p=performance.now();let E=!1;const b=()=>{E||(E=!0,setTimeout(_,Math.max(0,m-(performance.now()-p))))},v=n(g),U=i();if(!e||U<=0){b();return}try{const A=new SpeechSynthesisUtterance(u);v&&(A.voice=v),A.lang=v?v.lang:"fr-FR",A.pitch=Math.min(2,h),A.rate=d,A.volume=U,A.onend=b,A.onerror=b,speechSynthesis.speak(A),setTimeout(b,12e3)}catch{b()}})}}}function Yg({reglages:i,surMenu:t,son:e}){const n=document.createElement("main");n.className="ecran jeu";const s=document.createElement("canvas");s.className="monde3d",n.appendChild(s),n.insertAdjacentHTML("beforeend",`
    <header class="barre-jeu"><nav class="mondes" id="mondes"></nav><div class="coin"><button class="bouton secondaire petit" id="btn-menu">Menu</button><button class="bouton secondaire mini" id="btn-reset">Reset</button></div></header>
    <div class="indice" id="indice" hidden><button class="bouton gros moyen" id="btn-anim">Démarrer l'animation</button><span class="touche-agir" id="touche-agir"></span></div>
    <div class="guide" id="guide" hidden></div>
    <div class="aide-corde" id="aide-corde" hidden><button class="bouton gros moyen" id="btn-corde">Prendre la corde</button><span class="touche-agir" id="touche-corde"></span></div>
    <aside class="aide-touches" id="aide-touches"></aside>`);const r=n.querySelector("#indice"),o=Mg(s),a=Rg(),c=Ng({scene:a.scene,colliders:a.colliders,depart:a.depart,limites:a.limites,limiterCamera:a.limiterCamera}),l=Og(()=>i().touches),u=bu(()=>i().voix,e),f=Xg({racine:n,clavier:l});let h="grenier",d=a;const g=[{id:"grenier",nom:"Le grenier"},{id:"foret",nom:"Le jardin géant"}],_="bonsai-mondes",m=new Set(["grenier"]);try{for(const k of JSON.parse(localStorage.getItem(_)||"[]"))g.some(H=>H.id===k)&&m.add(k)}catch{}const p={},E=n.querySelector("#mondes");function b(){E.innerHTML=g.filter(k=>m.has(k.id)).map(k=>`<button class="monde ${k.id===h?"actif":""}" data-monde="${k.id}">${k.nom}</button>`).join("")}function v(k,H,dt,yt,bt){if(k!==h&&(p[h]={x:c.pos.x,z:c.pos.z,cap:c.hero.rotation.y}),h=k,d=H,!m.has(k)){m.add(k);try{localStorage.setItem(_,JSON.stringify([...m]))}catch{}}o.voir(H.scene),c.changerMonde(H,dt,yt,bt),c.hero.scale.setScalar(3),b(),r.hidden=!0,H.demarrerGuide&&H.demarrerGuide(),S()}const U=$g({scene:a.scene,garage:a,joueur:c,moteur:o,son:e,voix:u,racine:n,clavier:l,surFin(k,H,dt){k==="foret"?v("foret",H,dt?dt.x:H.depart.x,dt?dt.z:H.depart.z,dt?dt.cap:Math.PI):(v("grenier",a,a.depart.x,a.depart.z,0),c.etat(0))}}),A=n.querySelector("#guide");let P="";const I=['<svg viewBox="0 0 72 48"><rect x="6" y="34" width="16" height="10" rx="3" fill="#8d5f38"/><rect x="26" y="24" width="16" height="20" rx="3" fill="#8d5f38"/><rect x="46" y="14" width="16" height="30" rx="3" fill="#8d5f38"/><path d="M10 28 q10 -16 22 -8 q8 -14 22 -10" fill="none" stroke="#ffd45e" stroke-width="3" stroke-dasharray="4 4" stroke-linecap="round"/></svg>','<svg viewBox="0 0 72 48"><rect x="8" y="20" width="14" height="24" rx="3" fill="#8d5f38"/><rect x="44" y="24" width="8" height="20" rx="3" fill="#f4ecd8"/><path d="M28 26 a20 9 0 0 1 40 0 z" fill="#d6352e"/><circle cx="40" cy="20" r="2" fill="#fff"/><circle cx="54" cy="19" r="2" fill="#fff"/><path d="M15 16 q14 -18 30 0" fill="none" stroke="#ffd45e" stroke-width="3" stroke-dasharray="4 4" stroke-linecap="round"/></svg>','<svg viewBox="0 0 72 48"><rect x="12" y="32" width="6" height="12" rx="2" fill="#f4ecd8"/><path d="M2 34 a13 6 0 0 1 26 0 z" fill="#d6352e"/><rect x="50" y="14" width="8" height="30" rx="3" fill="#f4ecd8"/><path d="M36 16 a18 8 0 0 1 36 0 z" fill="#e8a23a"/><path d="M15 28 v-10 M15 28 q4 -34 36 -22" fill="none" stroke="#ffd45e" stroke-width="3" stroke-dasharray="4 4" stroke-linecap="round"/><text x="20" y="14" font-size="12" font-weight="800" fill="#ffd45e">x2</text></svg>'];function S(){const k=h==="foret"&&d.guide?d.guide():null,H=k&&k.phase?`${k.phase}|${k.etape}|${k.combo}|${k.bravo>0}`:"";if(H===P)return;if(P=H,!k||!k.phase||k.phase==="fini"&&k.bravo<=0){A.hidden=!0;return}const dt=i().touches,yt=f.actif?"Sauter":Wa((dt.sauter||[]).find(Boolean))||"Espace";if(A.hidden=!1,k.phase==="aller")A.innerHTML='<p class="guide-titre">Suis la flèche jaune jusqu’à l’étang</p>';else if(k.phase==="fini")A.innerHTML='<p class="guide-titre">Bravo ! D’ici, tu vois tout le jardin.</p>';else{const bt=["Monte les rondins","Saute sur le petit champignon",k.combo>=1?"Encore un saut, tu vas plus haut !":"Saute 2 fois dessus : ça rebondit"];A.innerHTML=`<div class="guide-etapes">${bt.map((Ot,Zt)=>`<div class="guide-etape ${Zt+1===k.etape?"actif":""} ${Zt+1<k.etape?"fait":""}">${I[Zt]}<p><b>${Zt+1}</b>${Ot}</p></div>`).join("")}</div><p class="guide-touche">Pour sauter : <b>${yt}</b></p>`}}E.addEventListener("click",k=>{const H=k.target.closest(".monde");if(!H||U.actif()||H.dataset.monde===h)return;H.blur(),e.clic();const dt=H.dataset.monde,yt=dt==="foret"?U.jardin():a,bt=p[dt];v(dt,yt,bt?bt.x:yt.depart.x,bt?bt.z:yt.depart.z,bt?bt.cap:0)});function y(){if(U.actif()){U.annuler("grenier");return}v("grenier",a,a.depart.x,a.depart.z,0),c.etat(0)}const N=()=>.25*16**i().sensibilite;let J=null;s.addEventListener("pointerdown",k=>{J||(J={x:k.clientX,y:k.clientY,id:k.pointerId},s.setPointerCapture(k.pointerId),s.classList.add("glisse"))}),s.addEventListener("pointermove",k=>{!J||k.pointerId!==J.id||(c.tourner(k.clientX-J.x,k.clientY-J.y,N()),J={x:k.clientX,y:k.clientY,id:k.pointerId})});const Q=k=>{J&&k&&k.pointerId!==void 0&&k.pointerId!==J.id||(J=null,s.classList.remove("glisse"))};s.addEventListener("pointerup",Q),s.addEventListener("pointercancel",Q),s.addEventListener("wheel",k=>{k.preventDefault(),c.zoom(k.deltaY)},{passive:!1});const W=k=>{k.code==="Escape"&&!document.getElementById("dlg").open&&(k.preventDefault(),U.actif()?U.annuler("foret"):t())};window.addEventListener("keydown",W);function Y(){const k=i().touches,H=dt=>Wa((k[dt]||[]).find(Boolean))||"-";n.querySelector("#touche-corde").textContent=H("corde")!=="-"?`ou touche ${H("corde")}`:"",n.querySelector("#touche-agir").textContent=H("agir")!=="-"?`ou touche ${H("agir")}`:"",n.querySelector("#aide-touches").innerHTML=`<b>${H("avancer")} ${H("gauche")} ${H("reculer")} ${H("droite")}</b> bouger<span class="sep"></span><b>${H("sauter")}</b> sauter<span class="sep"></span><b>${H("sprinter")}</b> sprinter<span class="sep"></span><b>Souris</b> tourner la caméra`}Y(),n.querySelector("#btn-menu").addEventListener("click",t);const B=n.querySelector("#aide-corde");return n.querySelector("#btn-corde").addEventListener("click",k=>{k.currentTarget.blur(),c.prendreCorde()}),n.querySelector("#btn-reset").addEventListener("click",k=>{k.currentTarget.blur(),e.clic(),y()}),b(),o.camera.position.set(1,9,14),n.querySelector("#btn-anim").addEventListener("click",()=>U.lancer()),o.definir(a.scene,(k,H,dt)=>{if(U.actif()){a.maj(k),U.maj(dt||H,k),B.hidden=!0,l.finImage();return}if(d.maj(k,c.pos,c.appui()),S(),B.hidden=!c.cordeProche(),f.actif&&f.montrer(!0),c.maj(H,l,k),c.camera(o.camera,H),h==="grenier"){const yt=a.porteMaison,bt=Math.hypot(c.pos.x-yt.x,c.pos.z-(yt.z+2))<8;r.hidden=!bt,bt&&l.vient("agir")&&U.lancer()}l.finImage()}),{element:n,majAide:Y,bloquer:k=>l.bloquer(k),animation:U,lieu:()=>h,monde:()=>d,reset:y,voix:u,detruire(){U.annuler("grenier"),u.arreter(),l.detruire(),window.removeEventListener("keydown",W)},moteur:o,joueur:c,garage:a}}const Al=i=>440*2**((i-69)/12),Rl=[62,64,66,69,71,74,76];function Zg(){let i=null,t,e,n,s,r,o=null,a=0,c=0;const l={musique:.6,ambiance:.6,effets:.8};let u=!1;function f(){if(i)return;i=new(window.AudioContext||window.webkitAudioContext);const v=i.createDynamicsCompressor();v.connect(i.destination),t=i.createGain(),e=i.createGain(),n=i.createGain();for(const H of[t,e,n])H.connect(v);s=i.createGain(),s.gain.value=1.6,s.connect(v),r=i.createBuffer(1,i.sampleRate*3,i.sampleRate);const U=r.getChannelData(0);for(let H=0;H<U.length;H++)U[H]=Math.random()*2-1;const A=_(),P=i.createBiquadFilter();P.type="lowpass",P.frequency.value=520;const I=i.createGain();I.gain.value=.35;const S=i.createOscillator();S.frequency.value=.09;const y=i.createGain();y.gain.value=.22,S.connect(y),y.connect(I.gain),S.start(),A.connect(P),P.connect(I),I.connect(e);const N=_(),J=i.createBiquadFilter();J.type="bandpass",J.frequency.value=2200,J.Q.value=.7;const Q=i.createGain();Q.gain.value=.16;const W=i.createOscillator();W.frequency.value=.37;const Y=i.createGain();Y.gain.value=.05,W.connect(Y),Y.connect(Q.gain),W.start(),N.connect(J),J.connect(Q),Q.connect(e);const B=i.createDelay(1);B.delayTime.value=.42;const k=i.createGain();k.gain.value=.38,B.connect(k),k.connect(B),B.connect(t),t.echo=B,m()}let h=null;function d(){const U=new ArrayBuffer(6444),A=new DataView(U),P=(I,S)=>{for(let y=0;y<S.length;y++)A.setUint8(I+y,S.charCodeAt(y))};return P(0,"RIFF"),A.setUint32(4,36+3200*2,!0),P(8,"WAVE"),P(12,"fmt "),A.setUint32(16,16,!0),A.setUint16(20,1,!0),A.setUint16(22,1,!0),A.setUint32(24,8e3,!0),A.setUint32(28,16e3,!0),A.setUint16(32,2,!0),A.setUint16(34,16,!0),P(36,"data"),A.setUint32(40,3200*2,!0),URL.createObjectURL(new Blob([U],{type:"audio/wav"}))}function g(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}if(!h){try{h=new Audio(d()),h.loop=!0,h.play().catch(()=>{})}catch{}const v=()=>{i&&i.state!=="running"&&i.resume().catch(()=>{}),h&&h.paused&&h.play().catch(()=>{})};document.addEventListener("pointerdown",v),document.addEventListener("touchend",v),document.addEventListener("visibilitychange",()=>{document.hidden||v()})}}function _(){const v=i.createBufferSource();return v.buffer=r,v.loop=!0,v.start(0,Math.random()*2),v}function m(){if(!i)return;const v=i.currentTime;t.gain.setTargetAtTime(l.musique*.55*(u?.25:1),v,.15),e.gain.setTargetAtTime(l.ambiance*.5*(u?.25:1),v,.15),n.gain.setTargetAtTime(l.effets*1,v,.05)}function p(v,U,A,P,I,S,y=!1){const N=i.createOscillator(),J=i.createGain();N.type=v,N.frequency.setValueAtTime(U,A),J.gain.setValueAtTime(1e-4,A),J.gain.exponentialRampToValueAtTime(I,A+.015),J.gain.exponentialRampToValueAtTime(1e-4,A+P),N.connect(J),J.connect(S),y&&t.echo&&J.connect(t.echo),N.start(A),N.stop(A+P+.05)}function E(v){const U=2300+Math.random()*1500,A=i.createStereoPanner();A.pan.value=Math.random()*1.6-.8,A.connect(e);const P=2+Math.floor(Math.random()*4);for(let I=0;I<P;I++){const S=i.createOscillator(),y=i.createGain();S.type="sine",S.frequency.setValueAtTime(U*(1+I*.07),v+I*.11),S.frequency.exponentialRampToValueAtTime(U*(1.2+I*.07),v+I*.11+.09),y.gain.setValueAtTime(1e-4,v+I*.11),y.gain.exponentialRampToValueAtTime(.1,v+I*.11+.01),y.gain.exponentialRampToValueAtTime(1e-4,v+I*.11+.1),S.connect(y),y.connect(A),S.start(v+I*.11),S.stop(v+I*.11+.12)}}function b(){const v=i.currentTime;for(;a<v+.4;){const U=Rl[Math.floor(Math.random()*Rl.length)]-(Math.random()<.25?12:0);p("triangle",Al(U),a,1.8,.16,t,!0),p("sine",Al(U+12),a,1.2,.05,t,!0),a+=.55+Math.random()*1.1}v>=c&&(E(v+.05),c=v+3+Math.random()*7)}return{appliquer(v){Object.assign(l,v),m()},baisser(v){u=v,m()},async tampon(v){try{f();const U=await fetch(v);return U.ok?await i.decodeAudioData(await U.arrayBuffer()):null}catch{return null}},jouerTampon(v,U){if(!i)return null;i.state!=="running"&&i.resume().catch(()=>{});const A=i.createBufferSource();A.buffer=v;const P=i.createGain();P.gain.value=U,A.connect(P),P.connect(s);let I;const S=new Promise(y=>{I=y});return A.onended=I,A.start(),setTimeout(I,v.duration*1e3+400),{fin:S,stop(){try{A.stop()}catch{}I()}}},async demarrer(){try{f(),i.state==="suspended"&&await i.resume(),g(),o||(a=i.currentTime+.3,c=i.currentTime+2,o=setInterval(b,80))}catch{}},clic(){i&&i.state==="running"&&(p("sine",660,i.currentTime+.01,.18,.2,n),p("sine",990,i.currentTime+.07,.22,.15,n))},magie(){i&&i.state==="running"&&[523,659,784,1047].forEach((v,U)=>p("triangle",v,i.currentTime+.02+U*.09,.7,.14,n))},fx(v){if(!i)return;i.state!=="running"&&i.resume().catch(()=>{});const U=i.currentTime+.02,A=(S,y,N,J,Q,W,Y)=>p(S,y,N,J,Math.min(1,Q*1.7),W,Y),P=(S,y,N,J,Q=1)=>{const W=Math.min(1,J*1.7),Y=i.createBufferSource();Y.buffer=r;const B=i.createBiquadFilter();B.type="bandpass",B.Q.value=Q,B.frequency.setValueAtTime(S,U),B.frequency.exponentialRampToValueAtTime(y,U+N);const k=i.createGain();k.gain.setValueAtTime(1e-4,U),k.gain.exponentialRampToValueAtTime(W,U+.03),k.gain.exponentialRampToValueAtTime(1e-4,U+N),Y.connect(B),B.connect(k),k.connect(n),Y.start(U,Math.random()*2),Y.stop(U+N+.05)},I=(S,y,N,J,Q)=>{const W=Math.min(1,Q*1.7),Y=i.createOscillator(),B=i.createGain();Y.type=S,Y.frequency.setValueAtTime(y,U),Y.frequency.exponentialRampToValueAtTime(N,U+J),B.gain.setValueAtTime(1e-4,U),B.gain.exponentialRampToValueAtTime(W,U+.05),B.gain.exponentialRampToValueAtTime(1e-4,U+J),Y.connect(B),B.connect(n),Y.start(U),Y.stop(U+J+.05)};if(v==="porte"&&(I("sawtooth",170,95,1.4,.16),I("square",340,190,1.4,.07),A("square",90,U+1.45,.12,.18,n)),v==="clic"&&(A("square",1400,U,.05,.12,n),A("square",900,U+.06,.07,.1,n)),v==="machine"&&(I("sawtooth",70,220,2.2,.14),I("triangle",140,440,2.2,.1),P(300,1200,2.2,.15,.6)),v==="rayon"&&(I("sawtooth",220,880,.6,.12),P(2e3,5e3,1.2,.12,2),I("sine",880,880,1.6,.06)),v==="ding"&&(A("triangle",1568,U,.9,.2,n,!0),A("triangle",2093,U+.1,.9,.14,n,!0)),v==="reniflement"&&P(900,2600,.35,.22,3),v==="atchoum"&&(P(4500,600,.38,.9,.8),I("sine",160,50,.3,.5)),v==="retrecir"&&(I("sine",1600,140,1.5,.22),I("triangle",2400,300,1.5,.12),P(6e3,800,1.5,.2,1.5)),v==="alarme")for(let S=0;S<6;S++)A("square",S%2?660:880,U+S*.28,.2,.12,n);v==="explosion"&&(P(900,60,1.6,1,.5),P(200,40,2.2,.9,.4),I("sine",110,28,1.4,.9),I("sawtooth",220,40,.8,.25)),v==="chute"&&(I("sine",1800,300,1.4,.18),P(3e3,800,1.4,.1,1.2)),v==="atterrissage"&&(I("sine",150,45,.25,.6),P(1500,300,.25,.3,.8)),v==="boing"&&(I("sine",180,560,.28,.35),I("triangle",360,1120,.22,.12)),v==="bravo"&&[523,659,784,1047,1319].forEach((S,y)=>A("triangle",S,U+y*.1,.6,.16,n,!0)),v==="pas"&&A("sine",90,U,.1,.15,n)},etat(){return{actif:!!i&&i.state==="running",musique:!!o,contexte:i?i.state:"aucun"}}}}const Eu="bonsai-reglages",Hi={musique:.6,ambiance:.6,effets:.8,voix:.9,feuilles:!0,sensibilite:.5,qualite:"normale",touches:uo()},Ks=(i,t,e,n)=>Number.isFinite(i)?Math.min(e,Math.max(t,i)):n;function Tu(i){const t=i&&typeof i=="object"?i:{};return{musique:Ks(t.musique,0,1,Hi.musique),ambiance:Ks(t.ambiance,0,1,Hi.ambiance),effets:Ks(t.effets,0,1,Hi.effets),voix:Ks(t.voix,0,1,Hi.voix),feuilles:t.feuilles!==!1,sensibilite:Ks(t.sensibilite,0,1,Hi.sensibilite),qualite:["basse","normale"].includes(t.qualite)?t.qualite:Hi.qualite,touches:(()=>{const e=Su(t.touches);return t.v>=2||(e.corde=["KeyF",null]),e})(),v:2}}function Jg(){try{return Tu(JSON.parse(localStorage.getItem(Eu)||"null"))}catch{return{...Hi,touches:uo()}}}function jg(i){try{localStorage.setItem(Eu,JSON.stringify(i))}catch{}}const Ki=Jg(),Kg=document.getElementById("app"),Ee=document.getElementById("dlg"),cn=Zg();cn.appliquer(Ki);let Ye=null;const qn=bu(()=>Math.max(.5,Ki.voix),cn);for(const i of["pointerdown","keydown"])document.addEventListener(i,()=>cn.demarrer(),{once:!0});const Ai=[];window.addEventListener("error",i=>{Ai.push(`${i.message} (${(i.filename||"").split("/").pop()}:${i.lineno})`),Ai.length>5&&Ai.shift()});window.addEventListener("unhandledrejection",i=>{typeof i.reason!="symbol"&&(Ai.push(`promesse : ${i.reason&&i.reason.message?i.reason.message:String(i.reason)}`),Ai.length>5&&Ai.shift())});function dc(i){Kg.replaceChildren(i.element)}const Qs=()=>{jg(Ki),cn.appliquer(Ki)};function Au(i="son"){const t=Ki;let e=null;Ee.className="large",Ee.innerHTML=`<h2>Paramètres</h2>
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
    <div class="pied"><button class="bouton gros moyen" id="p-fermer">Fermer</button></div>`,Ee.open||Ee.showModal(),Ye&&Ye.bloquer(!0);const n=c=>{Ee.querySelectorAll(".onglets button").forEach(l=>l.classList.toggle("actif",l.dataset.o===c)),Ee.querySelector("#o-son").hidden=c!=="son",Ee.querySelector("#o-commandes").hidden=c!=="commandes",c==="commandes"&&r()};function s(c){const l=t.touches[c.id],u=[0,1].map(f=>{const h=e&&e.action===c.id&&e.i===f,d=h?"Appuie sur une touche":l[f]?Wa(l[f]):"";return`<button class="case ${h?"ecoute":""}" data-a="${c.id}" data-i="${f}" ${c.bientot?"disabled":""}>${d}</button>`}).join("");return`<div class="rangee ${c.bientot?"bientot":""}"><span class="nom-action">${c.nom}${c.bientot?"<em>bientôt</em>":""}</span>${u}<button class="croix" data-a="${c.id}" aria-label="Effacer ${c.nom}" ${c.bientot?"disabled":""}>×</button></div>`}function r(){const c=Ee.querySelector("#o-commandes");c.innerHTML=`<h3 class="section">SOURIS</h3>
      <label class="ligne"><span>Sensibilité de la souris <b id="p-sens-val">${Math.round(t.sensibilite*100)} %</b></span><input type="range" id="p-sens" min="0" max="100" step="1" value="${Math.round(t.sensibilite*100)}"></label>
      <h3 class="section">DÉPLACEMENT</h3>${io.filter(l=>!["agir","corde"].includes(l.id)).map(s).join("")}
      <h3 class="section">ACTIONS</h3>${io.filter(l=>["agir","corde"].includes(l.id)).map(s).join("")}
      <p class="note">Clique sur une case, puis appuie sur la touche que tu veux. Échap pour annuler. La croix rouge efface la case.</p>
      <button class="bouton secondaire" id="p-defaut">Rétablir les touches de départ</button>`,c.querySelector("#p-sens").addEventListener("input",l=>{t.sensibilite=Number(l.target.value)/100,c.querySelector("#p-sens-val").textContent=`${l.target.value} %`,Qs()}),c.querySelectorAll(".case").forEach(l=>l.addEventListener("click",()=>{e={action:l.dataset.a,i:Number(l.dataset.i)},r()})),c.querySelectorAll(".croix").forEach(l=>l.addEventListener("click",()=>{t.touches[l.dataset.a]=[null,null],Qs(),Ye&&Ye.majAide(),e=null,r()})),c.querySelector("#p-defaut").addEventListener("click",()=>{t.touches=uo(),Qs(),Ye&&Ye.majAide(),e=null,r()})}const o=c=>{if(e){if(c.preventDefault(),c.stopPropagation(),c.code==="Escape"){e=null,r();return}t.touches=zg(t.touches,e.action,e.i,c.code),Qs(),Ye&&Ye.majAide(),cn.clic(),e=null,r()}};window.addEventListener("keydown",o,!0),Ee.addEventListener("cancel",c=>{e&&c.preventDefault()}),Ee.addEventListener("close",()=>{window.removeEventListener("keydown",o,!0),Ye&&Ye.bloquer(!1)},{once:!0}),Ee.querySelectorAll(".onglets button").forEach(c=>c.addEventListener("click",()=>{e=null,n(c.dataset.o)}));const a=()=>{Object.assign(t,Tu({...t,musique:Number(Ee.querySelector("#p-musique").value),ambiance:Number(Ee.querySelector("#p-ambiance").value),effets:Number(Ee.querySelector("#p-effets").value),voix:Number(Ee.querySelector("#p-voix").value)})),Qs()};Ee.querySelectorAll("#o-son input").forEach(c=>c.addEventListener("input",a)),Ee.querySelector("#p-plein").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()}),Ee.querySelector("#p-test").addEventListener("click",()=>Qg(Ee.querySelector("#p-diag"))),Ee.querySelector("#p-fermer").addEventListener("click",()=>{cn.clic(),Ee.close()}),n(i)}async function Qg(i){i.hidden=!1,i.textContent="Test en cours…",qn.eveiller(),await cn.demarrer(),await qn.precharger(),cn.fx("ding");const t=cn.etat(),e=(()=>{try{const c=document.createElement("canvas").getContext("webgl"),l=c.getExtension("WEBGL_debug_renderer_info");return{carte:l?c.getParameter(l.UNMASKED_RENDERER_WEBGL):"inconnue",tex:c.getParameter(c.MAX_TEXTURE_SIZE)}}catch{return{carte:"WebGL absent",tex:0}}})(),n=await new Promise(a=>{let c=0;const l=performance.now(),u=()=>{c++,performance.now()-l<1e3?requestAnimationFrame(u):a(c)};requestAnimationFrame(u)}),s=qn.compte(),r=qn.nom("homme"),o=[`Son (bruitages, musique) : ${t.contexte==="running"?"réveillé":"ENDORMI ("+t.contexte+")"}`,`Voix : ${qn.pris()?s&&s.fr?`${s.fr} voix françaises (${s.frLocales} installées), choisie : ${r?r.nom+(r.locale?"":" (en ligne)"):"aucune"}`:"AUCUNE voix française trouvée":"pas de synthèse vocale sur cet appareil"}`,`Vraies voix enregistrées : ${qn.enregistrees()} sur 20${qn.enregistrees()?" (le jeu les joue à la place de la voix de l’appareil)":""}`,`Vitesse : ${n} images par seconde (écran vide)`,`Écran : ${screen.width}x${screen.height}, tactile : ${matchMedia("(pointer: coarse)").matches?"oui":"non"}, finesse : ${window.devicePixelRatio}`,`Carte graphique : ${e.carte} (textures ${e.tex})`,`Navigateur : ${navigator.userAgent.replace(/\s+/g," ").slice(0,110)}`,`Erreurs du jeu : ${Ai.length?Ai.join(" | "):"aucune"}`];i.textContent=o.join(`
`)+`

Tu dois entendre un « ding », puis le papa (« Regarde, fiston ! ») et Théo.`,await qn.dire(Es.p1,{id:"p1",pitch:.7,genre:"homme"}),await qn.dire(Es.t1,{id:"t1",pitch:2,genre:"femme",rate:1.1})}function tx(){Ee.open||(Ee.className="",Ee.innerHTML='<h2>Pause</h2><div class="menu-pause"><button class="bouton gros moyen" id="m-reprendre">Reprendre</button><button class="bouton secondaire" id="m-param">Paramètres</button><button class="bouton secondaire" id="m-quitter">Retour à la couverture</button></div>',Ee.showModal(),Ye&&Ye.bloquer(!0),Ee.addEventListener("close",()=>{Ye&&Ye.bloquer(!1)},{once:!0}),Ee.querySelector("#m-reprendre").addEventListener("click",()=>{cn.clic(),Ee.close()}),Ee.querySelector("#m-param").addEventListener("click",()=>{cn.clic(),Ee.addEventListener("close",()=>Au("commandes"),{once:!0}),Ee.close()}),Ee.querySelector("#m-quitter").addEventListener("click",()=>{cn.clic(),Ee.addEventListener("close",()=>nx(),{once:!0}),Ee.close()}))}function ex(){cn.magie(),Ye=Yg({reglages:()=>Ki,surMenu:tx,son:cn}),dc(Ye)}function nx(){Ye&&(Ye.detruire(),Ye.moteur.arreter(),Ye=null),dc(Ru)}const Ru=Iu({surCommencer:()=>{cn.demarrer(),qn.eveiller(),ex()},surParametres:()=>{cn.demarrer(),Au("son")}});dc(Ru);window.bonsai={son:cn,get reglages(){return Ki},get jeu(){return Ye}};
