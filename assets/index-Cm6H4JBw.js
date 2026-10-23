(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Hs(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const Xl=(i,t="#0a5c3e")=>`<path d="M0,0 C40,-90 150,-150 300,-120 C250,-45 130,-8 0,0Z" fill="${i}"/><path d="M0,0 C100,-48 200,-84 296,-118" stroke="${t}" stroke-width="4" fill="none" opacity=".55"/>`;function ks(i,t,e,n,s,r){const o=Hs(r);let a="";for(let c=0;c<6;c++){const l=-80+c*30+o()*10;a+=`<g transform="rotate(${l.toFixed(0)}) scale(${(.8+o()*.45).toFixed(2)})">${Xl(s[c%s.length])}</g>`}return`<g transform="translate(${i},${t}) rotate(${n}) scale(${e})"><g class="balance" style="animation-delay:${(o()*-5).toFixed(1)}s">${a}</g></g>`}function Ws(i,t,e,n,s,r,o=!1){const a=Hs(r);let c=`<path d="M0,0 C20,-120 90,-210 210,-250" stroke="${s}" stroke-width="7" fill="none" stroke-linecap="round"/>`;for(let l=1;l<18;l++){const u=l/18,h=210*(1-Math.pow(1-u,2))*1.02,f=-250*u-(1-u)*6,d=46*(1-u*.7);for(const g of[-1,1])c+=`<ellipse cx="${(h+4).toFixed(1)}" cy="${f.toFixed(1)}" rx="${d.toFixed(1)}" ry="${(d*.2).toFixed(1)}" fill="${s}" transform="rotate(${(g*(48+a()*14)-18).toFixed(0)} ${h.toFixed(1)} ${f.toFixed(1)})"/>`}return`<g transform="translate(${i},${t}) rotate(${n}) scale(${o?-e:e},${e})"><g class="balance lent" style="animation-delay:${(a()*-6).toFixed(1)}s">${c}</g></g>`}function Ti(i,t,e,n){const s=Hs(n);let r="",o="";for(let a=70+s()*40;a<900;a+=110+s()*50){r+=`<rect x="${i-t/2-3}" y="${a}" width="${t+6}" height="9" rx="4" fill="#2f9d57"/>`;for(const c of[-1,1]){const l=i+c*t*.5;o+=`<path d="M${l},${a} C${l+c*38},${a-24} ${l+c*100},${a-14} ${l+c*138},${a+16} C${l+c*96},${a+4} ${l+c*42},${a+6} ${l},${a}Z" fill="#8be36c"/>`}}return`<g class="balance tige" style="animation-delay:${(s()*-5).toFixed(1)}s" transform="rotate(${e} ${i} 900)"><rect x="${i-t/2}" y="-30" width="${t}" height="950" fill="#7fe07a"/><rect x="${i-t/2}" y="-30" width="${t*.3}" height="950" fill="#c4f59a" opacity=".75"/><rect x="${i+t*.25}" y="-30" width="${t*.25}" height="950" fill="#2f9d57" opacity=".6"/>${r}${o}</g>`}function qc(i,t,e,n,s="#ffd24d"){let r="";for(let o=0;o<5;o++)r+=`<ellipse cx="0" cy="-12" rx="7" ry="13" fill="${n}" transform="rotate(${o*72})"/>`;return`<g transform="translate(${i},${t}) scale(${e})">${r}<circle r="5" fill="${s}"/></g>`}function ql(i,t,e,n){const s=Hs(n);let r=`<path d="M${i},-20 C${i+e},${t*.35} ${i-e*.6},${t*.7} ${i+e*.4},${t}" fill="none" stroke="#1a8a5c" stroke-width="${3+s()*3}" stroke-linecap="round"/>`;for(let o=1;o<=6;o++){const a=o/7,c=i+e*.4*a*a+(s()-.5)*6;r+=`<ellipse cx="${c.toFixed(1)}" cy="${(t*a).toFixed(1)}" rx="12" ry="6" fill="${["#3fd07a","#7de58a","#22b06a"][o%3]}" transform="rotate(${(s()*100-50).toFixed(0)} ${c.toFixed(1)} ${(t*a).toFixed(1)})"/>`}return s()>.45&&(r+=qc(i+e*.4,t+8,.75,s()>.5?"#ff8a2b":"#ff9fc0")),`<g class="liane" style="animation-delay:${(s()*-5).toFixed(1)}s">${r}</g>`}function Yl(){const i=Hs(11);let t="";for(let r=0;r<16;r++)t+=`<circle class="bulle" style="animation-delay:${(-i()*12).toFixed(1)}s;animation-duration:${(10+i()*10).toFixed(1)}s" cx="${(i()*1600).toFixed(0)}" cy="${(300+i()*600).toFixed(0)}" r="${(8+i()*26).toFixed(0)}" fill="#fff" opacity=".13"/>`;let e="";for(let r=0;r<12;r++)e+=ql(40+r*140+(i()-.5)*60,90+i()*260,(i()-.5)*80,70+r);let n="";for(let r=0;r<14;r++){const o=i()<.5;n+=qc(o?30+i()*380:1190+i()*380,770+i()*110,.9+i()*.7,i()>.45?"#ff8a2b":"#ff9fc0")}const s=document.createElement("div");return s.className="fond",s.innerHTML=`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="bleu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a3f9a"/><stop offset=".45" stop-color="#1a86d8"/><stop offset=".8" stop-color="#4fcfe6"/><stop offset="1" stop-color="#8fe9e2"/></linearGradient>
      <radialGradient id="lueur" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#dff8ff" stop-opacity=".85"/><stop offset="1" stop-color="#dff8ff" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#bleu)"/>
    <ellipse class="lueur" cx="1130" cy="190" rx="520" ry="360" fill="url(#lueur)"/>
    ${t}
    <g opacity=".5">${ks(120,760,1.3,8,["#0d6f9a","#117fa3"],3)}${ks(1490,770,1.3,-10,["#0d6f9a","#117fa3"],4)}</g>
    ${Ti(70,28,-2,5)}${Ti(150,20,2,6)}${Ti(240,16,-1,7)}
    ${Ti(1530,28,2,8)}${Ti(1450,20,-2,9)}${Ti(1360,16,1,10)}
    ${e}
    ${ks(-30,940,1.7,0,["#14a064","#2fc27a","#0e8456","#4ad98a"],12)}
    ${ks(1630,940,1.7,0,["#14a064","#2fc27a","#0e8456","#4ad98a"],13)}
    ${Ws(330,930,1.5,-8,"#1fb36e",21)}
    ${Ws(1270,930,1.5,8,"#1fb36e",22,!0)}
    ${Ws(520,940,1.1,-22,"#35cf80",23)}
    ${Ws(1090,940,1.1,22,"#35cf80",24,!0)}
    ${n}
  </svg>`,s}function $l({surCommencer:i,surParametres:t}){const e=document.createElement("main");return e.className="ecran couverture",e.appendChild(Yl()),e.insertAdjacentHTML("beforeend",`
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
 */const la="170",Zl=0,Ca=1,Jl=2,Yc=1,jl=2,zn=3,ei=0,Qe=1,Te=2,ti=0,Xi=1,mn=2,Pa=3,La=4,Kl=5,mi=100,Ql=101,tu=102,eu=103,nu=104,iu=200,su=201,ru=202,ou=203,vo=204,Mo=205,au=206,cu=207,lu=208,uu=209,hu=210,fu=211,du=212,pu=213,mu=214,yo=0,So=1,wo=2,Zi=3,Eo=4,bo=5,To=6,Ao=7,$c=0,gu=1,xu=2,Vn=0,_u=1,vu=2,Mu=3,yu=4,Su=5,wu=6,Eu=7,Zc=300,Ji=301,ji=302,Ro=303,Co=304,Cr=306,Ds=1e3,_i=1001,Po=1002,hn=1003,bu=1004,Xs=1005,Ln=1006,Nr=1007,vi=1008,kn=1009,Jc=1010,jc=1011,Us=1012,ua=1013,Si=1014,In=1015,Vs=1016,ha=1017,fa=1018,Ki=1020,Kc=35902,Qc=1021,tl=1022,bn=1023,el=1024,nl=1025,qi=1026,Qi=1027,da=1028,pa=1029,il=1030,ma=1031,ga=1033,_r=33776,vr=33777,Mr=33778,yr=33779,Lo=35840,Io=35841,Do=35842,Uo=35843,No=36196,Fo=37492,Oo=37496,Bo=37808,zo=37809,Ho=37810,Vo=37811,Go=37812,ko=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,$o=37818,Zo=37819,Jo=37820,jo=37821,Sr=36492,Ko=36494,Qo=36495,sl=36283,ta=36284,ea=36285,na=36286,Tu=3200,Au=3201,rl=0,Ru=1,Qn="",sn="srgb",ss="srgb-linear",Pr="linear",Me="srgb",Ai=7680,Ia=519,Cu=512,Pu=513,Lu=514,ol=515,Iu=516,Du=517,Uu=518,Nu=519,Da=35044,Ua="300 es",Hn=2e3,br=2001;class rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fr=Math.PI/180,ia=180/Math.PI;function os(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function Fu(i,t){return(i%t+t)%t}function Or(i,t,e){return(1-e)*i+e*t}function gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,n,s,r,o,a,c,l){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],S=s[4],y=s[7],O=s[2],L=s[5],P=s[8];return r[0]=o*_+a*M+c*O,r[3]=o*m+a*S+c*L,r[6]=o*p+a*y+c*P,r[1]=l*_+u*M+h*O,r[4]=l*m+u*S+h*L,r[7]=l*p+u*y+h*P,r[2]=f*_+d*M+g*O,r[5]=f*m+d*S+g*L,r[8]=f*p+d*y+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Br.makeScale(t,e)),this}rotate(t){return this.premultiply(Br.makeRotation(-t)),this}translate(t,e){return this.premultiply(Br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Br=new ie;function al(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ou(){const i=Tr("canvas");return i.style.display="block",i}const Na={};function Ts(i){i in Na||(Na[i]=!0,console.warn(i))}function Bu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ue={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Me&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Me&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?Pr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Fa=[.64,.33,.3,.6,.15,.06],Oa=[.2126,.7152,.0722],Ba=[.3127,.329],za=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ha=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ue.define({[ss]:{primaries:Fa,whitePoint:Ba,transfer:Pr,toXYZ:za,fromXYZ:Ha,luminanceCoefficients:Oa,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:Fa,whitePoint:Ba,transfer:Me,toXYZ:za,fromXYZ:Ha,luminanceCoefficients:Oa,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}});let Ri;class Vu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=Tr("canvas")),Ri.width=t.width,Ri.height=t.height;const n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gu=0;class cl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zr(s[o].image)):r.push(zr(s[o]))}else r=zr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ku=0;class Ze extends rs{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=_i,s=_i,r=Ln,o=vi,a=bn,c=kn,l=Ze.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=os(),this.name="",this.source=new cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ds:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ds:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Zc;Ze.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,y=(d+1)/2,O=(p+1)/2,L=(u+f)/4,P=(h+_)/4,N=(g+m)/4;return S>y&&S>O?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=L/n,r=P/n):y>O?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=L/s,r=N/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=P/r,s=N/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wu extends rs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Wu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ll extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xu extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const O=Math.sqrt(S),L=Math.atan2(O,p*M);m=Math.sin(m*L)/O,a=Math.sin(a*L)/O}const y=a*M;if(c=c*m+f*y,l=l*m+d*y,u=u*m+g*y,h=h*m+_*y,m===1-a){const O=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=O,l*=O,u*=O,h*=O}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Va.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Va.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new D,Va=new as;class bi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),Ys.subVectors(this.max,xs),Ci.subVectors(t.a,xs),Pi.subVectors(t.b,xs),Li.subVectors(t.c,xs),qn.subVectors(Pi,Ci),Yn.subVectors(Li,Pi),oi.subVectors(Ci,Li);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-oi.z,oi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,oi.z,0,-oi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-oi.y,oi.x,0];return!Vr(e,Ci,Pi,Li,Ys)||(e=[1,0,0,0,1,0,0,0,1],!Vr(e,Ci,Pi,Li,Ys))?!1:($s.crossVectors(qn,Yn),e=[$s.x,$s.y,$s.z],Vr(e,Ci,Pi,Li,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new D,new D,new D,new D,new D,new D,new D,new D],Mn=new D,qs=new bi,Ci=new D,Pi=new D,Li=new D,qn=new D,Yn=new D,oi=new D,xs=new D,Ys=new D,$s=new D,ai=new D;function Vr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ai.fromArray(i,r);const a=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),c=t.dot(ai),l=e.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const qu=new bi,_s=new D,Gr=new D;class cs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Gr)),this.expandByPoint(_s.copy(t.center).sub(Gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new D,kr=new D,Zs=new D,$n=new D,Wr=new D,Js=new D,Xr=new D;class ul{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){kr.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(kr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Zs),a=$n.dot(this.direction),c=-$n.dot(Zs),l=$n.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(kr).addScaledVector(Zs,f),d}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){Wr.subVectors(e,t),Js.subVectors(n,t),Xr.crossVectors(Wr,Js);let o=this.direction.dot(Xr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);const c=a*this.direction.dot(Js.crossVectors($n,Js));if(c<0)return null;const l=a*this.direction.dot(Wr.cross($n));if(l<0||c+l>o)return null;const u=-a*$n.dot(Xr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yu,t,$u)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Zn.crossVectors(n,cn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Zn.crossVectors(n,cn)),Zn.normalize(),js.crossVectors(cn,Zn),s[0]=Zn.x,s[4]=js.x,s[8]=cn.x,s[1]=Zn.y,s[5]=js.y,s[9]=cn.y,s[2]=Zn.z,s[6]=js.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],y=n[11],O=n[15],L=s[0],P=s[4],N=s[8],T=s[12],E=s[1],F=s[5],Y=s[9],H=s[13],K=s[2],q=s[6],Q=s[10],ut=s[14],tt=s[3],gt=s[7],dt=s[11],St=s[15];return r[0]=o*L+a*E+c*K+l*tt,r[4]=o*P+a*F+c*q+l*gt,r[8]=o*N+a*Y+c*Q+l*dt,r[12]=o*T+a*H+c*ut+l*St,r[1]=u*L+h*E+f*K+d*tt,r[5]=u*P+h*F+f*q+d*gt,r[9]=u*N+h*Y+f*Q+d*dt,r[13]=u*T+h*H+f*ut+d*St,r[2]=g*L+_*E+m*K+p*tt,r[6]=g*P+_*F+m*q+p*gt,r[10]=g*N+_*Y+m*Q+p*dt,r[14]=g*T+_*H+m*ut+p*St,r[3]=M*L+S*E+y*K+O*tt,r[7]=M*P+S*F+y*q+O*gt,r[11]=M*N+S*Y+y*Q+O*dt,r[15]=M*T+S*H+y*ut+O*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+e*l*h-e*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*f+s*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=h*m*l-_*f*l+_*c*d-a*m*d-h*c*p+a*f*p,S=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,y=u*_*l-g*h*l+g*a*d-o*_*d-u*a*p+o*h*p,O=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,L=e*M+n*S+s*y+r*O;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=M*P,t[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*P,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*P,t[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*d-n*c*d)*P,t[4]=S*P,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*P,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*P,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*d+e*c*d)*P,t[8]=y*P,t[9]=(g*h*r-u*_*r-g*n*d+e*_*d+u*n*p-e*h*p)*P,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*P,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*d-e*a*d)*P,t[12]=O*P,t[13]=(u*_*s-g*h*s+g*n*f-e*_*f-u*n*m+e*h*m)*P,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*P,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*f+e*a*f)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,M=c*l,S=c*u,y=c*h,O=n.x,L=n.y,P=n.z;return s[0]=(1-(_+p))*O,s[1]=(d+y)*O,s[2]=(g-S)*O,s[3]=0,s[4]=(d-y)*L,s[5]=(1-(f+p))*L,s[6]=(m+M)*L,s[7]=0,s[8]=(g+S)*P,s[9]=(m-M)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ii.set(s[0],s[1],s[2]).length();const o=Ii.set(s[4],s[5],s[6]).length(),a=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const l=1/r,u=1/o,h=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Hn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===Hn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===br)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Hn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*l,d=(n+s)*u;let g,_;if(a===Hn)g=(o+r)*h,_=-2*h;else if(a===br)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ii=new D,yn=new me,Yu=new D(0,0,0),$u=new D(1,1,1),Zn=new D,js=new D,cn=new D,Ga=new me,ka=new as;class Ke{constructor(t=0,e=0,n=0,s=Ke.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ga.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ga,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ka.setFromEuler(this),this.setFromQuaternion(ka,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ke.DEFAULT_ORDER="XYZ";class hl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zu=0;const Wa=new D,Di=new as,Fn=new me,Ks=new D,vs=new D,Ju=new D,ju=new as,Xa=new D(1,0,0),qa=new D(0,1,0),Ya=new D(0,0,1),$a={type:"added"},Ku={type:"removed"},Ui={type:"childadded",child:null},qr={type:"childremoved",child:null};class Oe extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new D,e=new Ke,n=new as,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new ie}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(Xa,t)}rotateY(t){return this.rotateOnAxis(qa,t)}rotateZ(t){return this.rotateOnAxis(Ya,t)}translateOnAxis(t,e){return Wa.copy(t).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xa,t)}translateY(t){return this.translateOnAxis(qa,t)}translateZ(t){return this.translateOnAxis(Ya,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ks.copy(t):Ks.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(vs,Ks,this.up):Fn.lookAt(Ks,vs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Fn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($a),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ku),qr.child=t,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($a),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,Ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,ju,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Oe.DEFAULT_UP=new D(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new D,On=new D,Yr=new D,Bn=new D,Ni=new D,Fi=new D,Za=new D,$r=new D,Zr=new D,Jr=new D,jr=new ye,Kr=new ye,Qr=new ye;class En{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),On.subVectors(n,e),Yr.subVectors(t,e);const o=Sn.dot(Sn),a=Sn.dot(On),c=Sn.dot(Yr),l=On.dot(On),u=On.dot(Yr),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return jr.setScalar(0),Kr.setScalar(0),Qr.setScalar(0),jr.fromBufferAttribute(t,e),Kr.fromBufferAttribute(t,n),Qr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(jr,r.x),o.addScaledVector(Kr,r.y),o.addScaledVector(Qr,r.z),o}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),On.subVectors(t,e),Sn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),Sn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ni.subVectors(s,n),Fi.subVectors(r,n),$r.subVectors(t,n);const c=Ni.dot($r),l=Fi.dot($r);if(c<=0&&l<=0)return e.copy(n);Zr.subVectors(t,s);const u=Ni.dot(Zr),h=Fi.dot(Zr);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ni,o);Jr.subVectors(t,r);const d=Ni.dot(Jr),g=Fi.dot(Jr);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Fi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Za.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Za,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Ni,o).addScaledVector(Fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function to(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=Fu(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=to(o,r,t+1/3),this.g=to(o,r,t),this.b=to(o,r,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const n=fl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return ue.fromWorkingColorSpace(Ye.copy(this),t),Math.round(Ge(Ye.r*255,0,255))*65536+Math.round(Ge(Ye.g*255,0,255))*256+Math.round(Ge(Ye.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=sn){ue.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(Qs);const n=Or(Jn.h,Qs.h,e),s=Or(Jn.s,Qs.s,e),r=Or(Jn.l,Qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new te;te.NAMES=fl;let Qu=0;class ls extends rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=os(),this.name="",this.blending=Xi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=Mo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ia,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Mo&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ia&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ee extends ls{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new D,tr=new It;class ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Da,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Da&&(t.usage=this.usage),t}}class dl extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pl extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let th=0;const pn=new me,eo=new Oe,Oi=new D,ln=new bi,Ms=new bi,He=new D;class Ce extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(al(t)?pl:dl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return eo.lookAt(t),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(ln.min,Ms.min),ln.expandByPoint(He),He.addVectors(ln.max,Ms.max),ln.expandByPoint(He)):(ln.expandByPoint(Ms.min),ln.expandByPoint(Ms.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)He.fromBufferAttribute(a,l),c&&(Oi.fromBufferAttribute(t,l),He.add(Oi)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new D,c[N]=new D;const l=new D,u=new D,h=new D,f=new It,d=new It,g=new It,_=new D,m=new D;function p(N,T,E){l.fromBufferAttribute(n,N),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,E),f.fromBufferAttribute(r,N),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,E),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(F),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(F),a[N].add(_),a[T].add(_),a[E].add(_),c[N].add(m),c[T].add(m),c[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let N=0,T=M.length;N<T;++N){const E=M[N],F=E.start,Y=E.count;for(let H=F,K=F+Y;H<K;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const S=new D,y=new D,O=new D,L=new D;function P(N){O.fromBufferAttribute(s,N),L.copy(O);const T=a[N];S.copy(T),S.sub(O.multiplyScalar(O.dot(T))).normalize(),y.crossVectors(L,T);const F=y.dot(c[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,F)}for(let N=0,T=M.length;N<T;++N){const E=M[N],F=E.start,Y=E.count;for(let H=F,K=F+Y;H<K;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new ke(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ja=new me,ci=new ul,er=new cs,ja=new D,nr=new D,ir=new D,sr=new D,no=new D,rr=new D,Ka=new D,or=new D;class B extends Oe{constructor(t=new Ce,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(no.fromBufferAttribute(h,t),o?rr.addScaledVector(no,u):rr.addScaledVector(no.sub(e),u))}e.add(rr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(er.containsPoint(ci.origin)===!1&&(ci.intersectSphere(er,ja)===null||ci.origin.distanceToSquared(ja)>(t.far-t.near)**2))&&(Ja.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Ja),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,O=S;y<O;y+=3){const L=a.getX(y),P=a.getX(y+1),N=a.getX(y+2);s=ar(this,p,t,n,l,u,h,L,P,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);s=ar(this,o,t,n,l,u,h,M,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,O=S;y<O;y+=3){const L=y,P=y+1,N=y+2;s=ar(this,p,t,n,l,u,h,L,P,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,y=m+2;s=ar(this,o,t,n,l,u,h,M,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function eh(i,t,e,n,s,r,o,a){let c;if(t.side===Qe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ei,a),c===null)return null;or.copy(a),or.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(or);return l<e.near||l>e.far?null:{distance:l,point:or.clone(),object:i}}function ar(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,nr),i.getVertexPosition(c,ir),i.getVertexPosition(l,sr);const u=eh(i,t,e,n,nr,ir,sr,Ka);if(u){const h=new D;En.getBarycoord(Ka,nr,ir,sr,h),s&&(u.uv=En.getInterpolatedAttribute(s,a,c,l,h,new It)),r&&(u.uv1=En.getInterpolatedAttribute(r,a,c,l,h,new It)),o&&(u.normal=En.getInterpolatedAttribute(o,a,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new D,materialIndex:0};En.getNormal(nr,ir,sr,f.normal),u.face=f,u.barycoord=h}return u}class Ht extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(h,2));function g(_,m,p,M,S,y,O,L,P,N,T){const E=y/P,F=O/N,Y=y/2,H=O/2,K=L/2,q=P+1,Q=N+1;let ut=0,tt=0;const gt=new D;for(let dt=0;dt<Q;dt++){const St=dt*F-H;for(let Pt=0;Pt<q;Pt++){const Yt=Pt*E-Y;gt[_]=Yt*M,gt[m]=St*S,gt[p]=K,l.push(gt.x,gt.y,gt.z),gt[_]=0,gt[m]=0,gt[p]=L>0?1:-1,u.push(gt.x,gt.y,gt.z),h.push(Pt/P),h.push(1-dt/N),ut+=1}}for(let dt=0;dt<N;dt++)for(let St=0;St<P;St++){const Pt=f+St+q*dt,Yt=f+St+q*(dt+1),ot=f+(St+1)+q*(dt+1),it=f+(St+1)+q*dt;c.push(Pt,Yt,it),c.push(Yt,ot,it),tt+=6}a.addGroup(d,tt,T),d+=tt,f+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){const t={};for(let e=0;e<i.length;e++){const n=ts(i[e]);for(const s in n)t[s]=n[s]}return t}function nh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ml(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const ih={clone:ts,merge:je};var sh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends ls{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sh,this.fragmentShader=rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=nh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gl extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new D,Qa=new It,tc=new It;class un extends gl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Qa,tc),e.subVectors(tc,Qa)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class oh extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Bi,zi,t,e);s.layers=this.layers,this.add(s);const r=new un(Bi,zi,t,e);r.layers=this.layers,this.add(r);const o=new un(Bi,zi,t,e);o.layers=this.layers,this.add(o);const a=new un(Bi,zi,t,e);a.layers=this.layers,this.add(a);const c=new un(Bi,zi,t,e);c.layers=this.layers,this.add(c);const l=new un(Bi,zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xl extends Ze{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ji,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ah extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:ti});r.uniforms.tEquirect.value=e;const o=new B(s,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=Ln),new oh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const io=new D,ch=new D,lh=new ie;class fi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=io.subVectors(n,e).cross(ch.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(io),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||lh.getNormalMatrix(t),s=this.coplanarPoint(io).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new cs,cr=new D;class xa{constructor(t=new fi,e=new fi,n=new fi,s=new fi,r=new fi,o=new fi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],S=s[14],y=s[15];if(n[0].setComponents(c-r,f-l,m-d,y-p).normalize(),n[1].setComponents(c+r,f+l,m+d,y+p).normalize(),n[2].setComponents(c+o,f+u,m+g,y+M).normalize(),n[3].setComponents(c-o,f-u,m-g,y-M).normalize(),n[4].setComponents(c-a,f-h,m-_,y-S).normalize(),e===Hn)n[5].setComponents(c+a,f+h,m+_,y+S).normalize();else if(e===br)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _l(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function uh(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ie extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-o;for(let S=0;S<l;S++){const y=S*h-r;g.push(y,-M,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const S=M+l*p,y=M+l*(p+1),O=M+1+l*(p+1),L=M+1+l*p;d.push(S,y,L),d.push(y,O,L)}this.setIndex(d),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.width,t.height,t.widthSegments,t.heightSegments)}}var hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fh=`#ifdef USE_ALPHAHASH
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
#endif`,dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
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
#endif`,_h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vh=`#ifdef USE_BATCHING
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
#endif`,Mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eh=`#ifdef USE_IRIDESCENCE
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
#endif`,bh=`#ifdef USE_BUMPMAP
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
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uh=`#define PI 3.141592653589793
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
} // validated`,Nh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fh=`vec3 transformedNormal = objectNormal;
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
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,$h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kh=`#ifdef USE_GRADIENTMAP
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
}`,Qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
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
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lf=`PhysicalMaterial material;
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
#endif`,uf=`struct PhysicalMaterial {
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
}`,hf=`
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
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
#endif`,df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yf=`#if defined( USE_POINTS_UV )
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
#endif`,Sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ef=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
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
#endif`,Rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uf=`#ifdef USE_NORMALMAP
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
#endif`,Nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jf=`float getShadowMask() {
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
}`,jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kf=`#ifdef USE_SKINNING
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
#endif`,Qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,td=`#ifdef USE_SKINNING
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
#endif`,ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rd=`#ifdef USE_TRANSMISSION
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
#endif`,od=`#ifdef USE_TRANSMISSION
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
#endif`,ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fd=`uniform sampler2D t2D;
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
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`#include <common>
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
}`,_d=`#if DEPTH_PACKING == 3200
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
}`,vd=`#define DISTANCE
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
}`,Md=`#define DISTANCE
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
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`uniform float scale;
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
}`,Ed=`uniform vec3 diffuse;
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
}`,bd=`#include <common>
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
}`,Td=`uniform vec3 diffuse;
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
}`,Ad=`#define LAMBERT
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
}`,Rd=`#define LAMBERT
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
}`,Cd=`#define MATCAP
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
}`,Pd=`#define MATCAP
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
}`,Ld=`#define NORMAL
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
}`,Id=`#define NORMAL
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
}`,Dd=`#define PHONG
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
}`,Ud=`#define PHONG
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
}`,Nd=`#define STANDARD
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
}`,Fd=`#define STANDARD
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
}`,Od=`#define TOON
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
}`,Bd=`#define TOON
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
}`,zd=`uniform float size;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,Vd=`#include <common>
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
}`,Gd=`uniform vec3 color;
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
}`,kd=`uniform float rotation;
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
}`,Wd=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:hh,alphahash_pars_fragment:fh,alphamap_fragment:dh,alphamap_pars_fragment:ph,alphatest_fragment:mh,alphatest_pars_fragment:gh,aomap_fragment:xh,aomap_pars_fragment:_h,batching_pars_vertex:vh,batching_vertex:Mh,begin_vertex:yh,beginnormal_vertex:Sh,bsdfs:wh,iridescence_fragment:Eh,bumpmap_pars_fragment:bh,clipping_planes_fragment:Th,clipping_planes_pars_fragment:Ah,clipping_planes_pars_vertex:Rh,clipping_planes_vertex:Ch,color_fragment:Ph,color_pars_fragment:Lh,color_pars_vertex:Ih,color_vertex:Dh,common:Uh,cube_uv_reflection_fragment:Nh,defaultnormal_vertex:Fh,displacementmap_pars_vertex:Oh,displacementmap_vertex:Bh,emissivemap_fragment:zh,emissivemap_pars_fragment:Hh,colorspace_fragment:Vh,colorspace_pars_fragment:Gh,envmap_fragment:kh,envmap_common_pars_fragment:Wh,envmap_pars_fragment:Xh,envmap_pars_vertex:qh,envmap_physical_pars_fragment:sf,envmap_vertex:Yh,fog_vertex:$h,fog_pars_vertex:Zh,fog_fragment:Jh,fog_pars_fragment:jh,gradientmap_pars_fragment:Kh,lightmap_pars_fragment:Qh,lights_lambert_fragment:tf,lights_lambert_pars_fragment:ef,lights_pars_begin:nf,lights_toon_fragment:rf,lights_toon_pars_fragment:of,lights_phong_fragment:af,lights_phong_pars_fragment:cf,lights_physical_fragment:lf,lights_physical_pars_fragment:uf,lights_fragment_begin:hf,lights_fragment_maps:ff,lights_fragment_end:df,logdepthbuf_fragment:pf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:xf,map_fragment:_f,map_pars_fragment:vf,map_particle_fragment:Mf,map_particle_pars_fragment:yf,metalnessmap_fragment:Sf,metalnessmap_pars_fragment:wf,morphinstance_vertex:Ef,morphcolor_vertex:bf,morphnormal_vertex:Tf,morphtarget_pars_vertex:Af,morphtarget_vertex:Rf,normal_fragment_begin:Cf,normal_fragment_maps:Pf,normal_pars_fragment:Lf,normal_pars_vertex:If,normal_vertex:Df,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Nf,clearcoat_normal_fragment_maps:Ff,clearcoat_pars_fragment:Of,iridescence_pars_fragment:Bf,opaque_fragment:zf,packing:Hf,premultiplied_alpha_fragment:Vf,project_vertex:Gf,dithering_fragment:kf,dithering_pars_fragment:Wf,roughnessmap_fragment:Xf,roughnessmap_pars_fragment:qf,shadowmap_pars_fragment:Yf,shadowmap_pars_vertex:$f,shadowmap_vertex:Zf,shadowmask_pars_fragment:Jf,skinbase_vertex:jf,skinning_pars_vertex:Kf,skinning_vertex:Qf,skinnormal_vertex:td,specularmap_fragment:ed,specularmap_pars_fragment:nd,tonemapping_fragment:id,tonemapping_pars_fragment:sd,transmission_fragment:rd,transmission_pars_fragment:od,uv_pars_fragment:ad,uv_pars_vertex:cd,uv_vertex:ld,worldpos_vertex:ud,background_vert:hd,background_frag:fd,backgroundCube_vert:dd,backgroundCube_frag:pd,cube_vert:md,cube_frag:gd,depth_vert:xd,depth_frag:_d,distanceRGBA_vert:vd,distanceRGBA_frag:Md,equirect_vert:yd,equirect_frag:Sd,linedashed_vert:wd,linedashed_frag:Ed,meshbasic_vert:bd,meshbasic_frag:Td,meshlambert_vert:Ad,meshlambert_frag:Rd,meshmatcap_vert:Cd,meshmatcap_frag:Pd,meshnormal_vert:Ld,meshnormal_frag:Id,meshphong_vert:Dd,meshphong_frag:Ud,meshphysical_vert:Nd,meshphysical_frag:Fd,meshtoon_vert:Od,meshtoon_frag:Bd,points_vert:zd,points_frag:Hd,shadow_vert:Vd,shadow_frag:Gd,sprite_vert:kd,sprite_frag:Wd},Tt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Pn={basic:{uniforms:je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:je([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:je([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:je([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:je([Tt.points,Tt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:je([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:je([Tt.common,Tt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:je([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:je([Tt.sprite,Tt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:je([Tt.common,Tt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:je([Tt.lights,Tt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Pn.physical={uniforms:je([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const lr={r:0,b:0,g:0},ui=new Ke,Xd=new me;function qd(i,t,e,n,s,r,o){const a=new te(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function _(M){let S=!1;const y=g(M);y===null?p(a,c):y&&y.isColor&&(p(y,1),S=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,S){const y=g(S);y&&(y.isCubeTexture||y.mapping===Cr)?(u===void 0&&(u=new B(new Ht(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ts(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ui.copy(S.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xd.makeRotationFromEuler(ui)),u.material.toneMapped=ue.getTransfer(y.colorSpace)!==Me,(h!==y||f!==y.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new B(new Ie(2,2),new ni({name:"BackgroundMaterial",uniforms:ts(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ue.getTransfer(y.colorSpace)!==Me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,S){M.getRGB(lr,ml(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m}}function Yd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(E,F,Y,H,K){let q=!1;const Q=h(H,Y,F);r!==Q&&(r=Q,l(r.object)),q=d(E,H,Y,K),q&&g(E,H,Y,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(E,F,Y,H),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,F,Y){const H=Y.wireframe===!0;let K=n[E.id];K===void 0&&(K={},n[E.id]=K);let q=K[F.id];q===void 0&&(q={},K[F.id]=q);let Q=q[H];return Q===void 0&&(Q=f(c()),q[H]=Q),Q}function f(E){const F=[],Y=[],H=[];for(let K=0;K<e;K++)F[K]=0,Y[K]=0,H[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:H,object:E,attributes:{},index:null}}function d(E,F,Y,H){const K=r.attributes,q=F.attributes;let Q=0;const ut=Y.getAttributes();for(const tt in ut)if(ut[tt].location>=0){const dt=K[tt];let St=q[tt];if(St===void 0&&(tt==="instanceMatrix"&&E.instanceMatrix&&(St=E.instanceMatrix),tt==="instanceColor"&&E.instanceColor&&(St=E.instanceColor)),dt===void 0||dt.attribute!==St||St&&dt.data!==St.data)return!0;Q++}return r.attributesNum!==Q||r.index!==H}function g(E,F,Y,H){const K={},q=F.attributes;let Q=0;const ut=Y.getAttributes();for(const tt in ut)if(ut[tt].location>=0){let dt=q[tt];dt===void 0&&(tt==="instanceMatrix"&&E.instanceMatrix&&(dt=E.instanceMatrix),tt==="instanceColor"&&E.instanceColor&&(dt=E.instanceColor));const St={};St.attribute=dt,dt&&dt.data&&(St.data=dt.data),K[tt]=St,Q++}r.attributes=K,r.attributesNum=Q,r.index=H}function _(){const E=r.newAttributes;for(let F=0,Y=E.length;F<Y;F++)E[F]=0}function m(E){p(E,0)}function p(E,F){const Y=r.newAttributes,H=r.enabledAttributes,K=r.attributeDivisors;Y[E]=1,H[E]===0&&(i.enableVertexAttribArray(E),H[E]=1),K[E]!==F&&(i.vertexAttribDivisor(E,F),K[E]=F)}function M(){const E=r.newAttributes,F=r.enabledAttributes;for(let Y=0,H=F.length;Y<H;Y++)F[Y]!==E[Y]&&(i.disableVertexAttribArray(Y),F[Y]=0)}function S(E,F,Y,H,K,q,Q){Q===!0?i.vertexAttribIPointer(E,F,Y,K,q):i.vertexAttribPointer(E,F,Y,H,K,q)}function y(E,F,Y,H){_();const K=H.attributes,q=Y.getAttributes(),Q=F.defaultAttributeValues;for(const ut in q){const tt=q[ut];if(tt.location>=0){let gt=K[ut];if(gt===void 0&&(ut==="instanceMatrix"&&E.instanceMatrix&&(gt=E.instanceMatrix),ut==="instanceColor"&&E.instanceColor&&(gt=E.instanceColor)),gt!==void 0){const dt=gt.normalized,St=gt.itemSize,Pt=t.get(gt);if(Pt===void 0)continue;const Yt=Pt.buffer,ot=Pt.type,it=Pt.bytesPerElement,ht=ot===i.INT||ot===i.UNSIGNED_INT||gt.gpuType===ua;if(gt.isInterleavedBufferAttribute){const mt=gt.data,Et=mt.stride,Lt=gt.offset;if(mt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<tt.locationSize;Ut++)p(tt.location+Ut,mt.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Ut=0;Ut<tt.locationSize;Ut++)m(tt.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Ut=0;Ut<tt.locationSize;Ut++)S(tt.location+Ut,St/tt.locationSize,ot,dt,Et*it,(Lt+St/tt.locationSize*Ut)*it,ht)}else{if(gt.isInstancedBufferAttribute){for(let mt=0;mt<tt.locationSize;mt++)p(tt.location+mt,gt.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let mt=0;mt<tt.locationSize;mt++)m(tt.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let mt=0;mt<tt.locationSize;mt++)S(tt.location+mt,St/tt.locationSize,ot,dt,St*it,St/tt.locationSize*mt*it,ht)}}else if(Q!==void 0){const dt=Q[ut];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(tt.location,dt);break;case 3:i.vertexAttrib3fv(tt.location,dt);break;case 4:i.vertexAttrib4fv(tt.location,dt);break;default:i.vertexAttrib1fv(tt.location,dt)}}}}M()}function O(){N();for(const E in n){const F=n[E];for(const Y in F){const H=F[Y];for(const K in H)u(H[K].object),delete H[K];delete F[Y]}delete n[E]}}function L(E){if(n[E.id]===void 0)return;const F=n[E.id];for(const Y in F){const H=F[Y];for(const K in H)u(H[K].object),delete H[K];delete F[Y]}delete n[E.id]}function P(E){for(const F in n){const Y=n[F];if(Y[E.id]===void 0)continue;const H=Y[E.id];for(const K in H)u(H[K].object),delete H[K];delete Y[E.id]}}function N(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:T,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function $d(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Zd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==bn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const N=P===Vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==kn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==In&&!N)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:O,maxSamples:L}}function Jd(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new fi,a=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const M=r?0:n,S=M*4;let y=p.clippingState||null;c.value=y,y=u(g,f,S,d);for(let O=0;O!==S;++O)y[O]=e[O];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=d;S!==_;++S,y+=4)o.copy(h[S]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function jd(i){let t=new WeakMap;function e(o,a){return a===Ro?o.mapping=Ji:a===Co&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ro||a===Co)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ah(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class vl extends gl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,ec=[.125,.215,.35,.446,.526,.582],gi=20,so=new vl,nc=new te;let ro=null,oo=0,ao=0,co=!1;const di=(1+Math.sqrt(5))/2,Hi=1/di,ic=[new D(-di,Hi,0),new D(di,Hi,0),new D(-Hi,0,di),new D(Hi,0,di),new D(0,di,-Hi),new D(0,di,Hi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ro=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ro,oo,ao),this._renderer.xr.enabled=co,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ro=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Vs,format:bn,colorSpace:ss,depthBuffer:!1},s=rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kd(r)),this._blurMaterial=Qd(r,t,e)}return s}_compileMaterial(t){const e=new B(this._lodPlanes[0],t);this._renderer.compile(e,so)}_sceneToCubeUV(t,e,n,s){const a=new un(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(nc),u.toneMapping=Vn,u.autoClear=!1;const d=new Ee({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new B(new Ht,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(nc),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;ur(s,M*S,p>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ji||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ur(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,so)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ic[(s-r-1)%ic.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new B(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*gi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):gi;m>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const p=[];let M=0;for(let P=0;P<gi;++P){const N=P/_,T=Math.exp(-N*N/2);p.push(T),P===0?M+=T:P<m&&(M+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const y=this._sizeLods[s],O=3*y*(s>S-ki?s-S+ki:0),L=4*(this._cubeSize-y);ur(e,O,L,3*y,2*y),c.setRenderTarget(e),c.render(h,so)}}function Kd(i){const t=[],e=[],n=[];let s=i;const r=i-ki+1+ec.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ki?c=ec[o-i+ki-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),S=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let L=0;L<d;L++){const P=L%3*2/3-1,N=L>2?0:-1,T=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];M.set(T,_*g*L),S.set(f,m*g*L);const E=[L,L,L,L,L,L];y.set(E,p*g*L)}const O=new Ce;O.setAttribute("position",new ke(M,_)),O.setAttribute("uv",new ke(S,m)),O.setAttribute("faceIndex",new ke(y,p)),t.push(O),s>ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rc(i,t,e){const n=new wi(i,t,e);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qd(i,t,e){const n=new Float32Array(gi),s=new D(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_a(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function oc(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ac(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function _a(){return`

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
	`}function tp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ro||c===Co,u=c===Ji||c===ji;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new sc(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new sc(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ep(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function np(i,t,e,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let S=0,y=M.length;S<y;S+=3){const O=M[S+0],L=M[S+1],P=M[S+2];f.push(O,L,L,P,P,O)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,y=M.length/3-1;S<y;S+=3){const O=S+0,L=S+1,P=S+2;f.push(O,L,L,P,P,O)}}else return;const m=new(al(f)?pl:dl)(f,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ip(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function sp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rp(i,t,e){const n=new WeakMap,s=new ye;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let E=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var d=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let O=a.attributes.position.count*y,L=1;O>t.maxTextureSize&&(L=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const P=new Float32Array(O*L*4*h),N=new ll(P,O,L,h);N.type=In,N.needsUpdate=!0;const T=y*4;for(let F=0;F<h;F++){const Y=p[F],H=M[F],K=S[F],q=O*L*4*F;for(let Q=0;Q<Y.count;Q++){const ut=Q*T;g===!0&&(s.fromBufferAttribute(Y,Q),P[q+ut+0]=s.x,P[q+ut+1]=s.y,P[q+ut+2]=s.z,P[q+ut+3]=0),_===!0&&(s.fromBufferAttribute(H,Q),P[q+ut+4]=s.x,P[q+ut+5]=s.y,P[q+ut+6]=s.z,P[q+ut+7]=0),m===!0&&(s.fromBufferAttribute(K,Q),P[q+ut+8]=s.x,P[q+ut+9]=s.y,P[q+ut+10]=s.z,P[q+ut+11]=K.itemSize===4?s.w:1)}}f={count:h,texture:N,size:new It(O,L)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function op(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Ml extends Ze{constructor(t,e,n,s,r,o,a,c,l,u=qi){if(u!==qi&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qi&&(n=Si),n===void 0&&u===Qi&&(n=Ki),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yl=new Ze,cc=new Ml(1,1),Sl=new ll,wl=new Xu,El=new xl,lc=[],uc=[],hc=new Float32Array(16),fc=new Float32Array(9),dc=new Float32Array(4);function us(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=lc[s];if(r===void 0&&(r=new Float32Array(s),lc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Lr(i,t){let e=uc[t];e===void 0&&(e=new Int32Array(t),uc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ap(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function hp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),ze(e,n)}}function fp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;fc.set(n),i.uniformMatrix3fv(this.addr,!1,fc),ze(e,n)}}function dp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),ze(e,n)}}function pp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function _p(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function Sp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cc.compareFunction=ol,r=cc):r=yl,e.setTexture2D(t||r,s)}function wp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wl,s)}function Ep(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||El,s)}function bp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sl,s)}function Tp(i){switch(i){case 5126:return ap;case 35664:return cp;case 35665:return lp;case 35666:return up;case 35674:return hp;case 35675:return fp;case 35676:return dp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return xp;case 5125:return _p;case 36294:return vp;case 36295:return Mp;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return bp}}function Ap(i,t){i.uniform1fv(this.addr,t)}function Rp(i,t){const e=us(t,this.size,2);i.uniform2fv(this.addr,e)}function Cp(i,t){const e=us(t,this.size,3);i.uniform3fv(this.addr,e)}function Pp(i,t){const e=us(t,this.size,4);i.uniform4fv(this.addr,e)}function Lp(i,t){const e=us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ip(i,t){const e=us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Dp(i,t){const e=us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Up(i,t){i.uniform1iv(this.addr,t)}function Np(i,t){i.uniform2iv(this.addr,t)}function Fp(i,t){i.uniform3iv(this.addr,t)}function Op(i,t){i.uniform4iv(this.addr,t)}function Bp(i,t){i.uniform1uiv(this.addr,t)}function zp(i,t){i.uniform2uiv(this.addr,t)}function Hp(i,t){i.uniform3uiv(this.addr,t)}function Vp(i,t){i.uniform4uiv(this.addr,t)}function Gp(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yl,r[o])}function kp(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wl,r[o])}function Wp(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||El,r[o])}function Xp(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Sl,r[o])}function qp(i){switch(i){case 5126:return Ap;case 35664:return Rp;case 35665:return Cp;case 35666:return Pp;case 35674:return Lp;case 35675:return Ip;case 35676:return Dp;case 5124:case 35670:return Up;case 35667:case 35671:return Np;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return Bp;case 36294:return zp;case 36295:return Hp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}class Yp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tp(e.type)}}class $p{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qp(e.type)}}class Zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function pc(i,t){i.seq.push(t),i.map[t.id]=t}function Jp(i,t,e){const n=i.name,s=n.length;for(lo.lastIndex=0;;){const r=lo.exec(n),o=lo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){pc(e,l===void 0?new Yp(a,i,t):new $p(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Zp(a),pc(e,h)),e=h}}}class wr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Jp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function mc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const jp=37297;let Kp=0;function Qp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const gc=new ie;function t0(i){ue._getMatrix(gc,ue.workingColorSpace,i);const t=`mat3( ${gc.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case Pr:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Qp(i.getShaderSource(t),o)}else return s}function e0(i,t){const e=t0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function n0(i,t){let e;switch(t){case _u:e="Linear";break;case vu:e="Reinhard";break;case Mu:e="Cineon";break;case yu:e="ACESFilmic";break;case wu:e="AgX";break;case Eu:e="Neutral";break;case Su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new D;function i0(){ue.getLuminanceCoefficients(hr);const i=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function r0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function As(i){return i!==""}function _c(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const a0=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(i){return i.replace(a0,l0)}const c0=new Map;function l0(i,t){let e=se[t];if(e===void 0){const n=c0.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sa(e)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(i){return i.replace(u0,h0)}function h0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function f0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===jl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function d0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case ji:t="ENVMAP_TYPE_CUBE";break;case Cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function p0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function m0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $c:t="ENVMAP_BLENDING_MULTIPLY";break;case gu:t="ENVMAP_BLENDING_MIX";break;case xu:t="ENVMAP_BLENDING_ADD";break}return t}function g0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function x0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=f0(e),l=d0(e),u=p0(e),h=m0(e),f=g0(e),d=s0(e),g=r0(r),_=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),p.length>0&&(p+=`
`)):(m=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),p=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?se.tonemapping_pars_fragment:"",e.toneMapping!==Vn?n0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,e0("linearToOutputTexel",e.outputColorSpace),i0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),o=sa(o),o=_c(o,e),o=vc(o,e),a=sa(a),a=_c(a,e),a=vc(a,e),o=Mc(o),a=Mc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,y=M+p+a,O=mc(s,s.VERTEX_SHADER,S),L=mc(s,s.FRAGMENT_SHADER,y);s.attachShader(_,O),s.attachShader(_,L),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(F){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(O).trim(),K=s.getShaderInfoLog(L).trim();let q=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,O,L);else{const ut=xc(s,O,"vertex"),tt=xc(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Y+`
`+ut+`
`+tt)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(H===""||K==="")&&(Q=!1);Q&&(F.diagnostics={runnable:q,programLog:Y,vertexShader:{log:H,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(O),s.deleteShader(L),N=new wr(s,_),T=o0(s,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,jp)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=L,this}let _0=0;class v0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new M0(t),e.set(t,n)),n}}class M0{constructor(t){this.id=_0++,this.code=t,this.usedTimes=0}}function y0(i,t,e,n,s,r,o){const a=new hl,c=new v0,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,E,F,Y,H){const K=Y.fog,q=H.geometry,Q=T.isMeshStandardMaterial?Y.environment:null,ut=(T.isMeshStandardMaterial?e:t).get(T.envMap||Q),tt=ut&&ut.mapping===Cr?ut.image.height:null,gt=g[T.type];T.precision!==null&&(d=s.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,St=dt!==void 0?dt.length:0;let Pt=0;q.morphAttributes.position!==void 0&&(Pt=1),q.morphAttributes.normal!==void 0&&(Pt=2),q.morphAttributes.color!==void 0&&(Pt=3);let Yt,ot,it,ht;if(gt){const ce=Pn[gt];Yt=ce.vertexShader,ot=ce.fragmentShader}else Yt=T.vertexShader,ot=T.fragmentShader,c.update(T),it=c.getVertexShaderID(T),ht=c.getFragmentShaderID(T);const mt=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Lt=H.isInstancedMesh===!0,Ut=H.isBatchedMesh===!0,re=!!T.map,kt=!!T.matcap,ne=!!ut,W=!!T.aoMap,_e=!!T.lightMap,$t=!!T.bumpMap,Kt=!!T.normalMap,Bt=!!T.displacementMap,J=!!T.emissiveMap,st=!!T.metalnessMap,A=!!T.roughnessMap,v=T.anisotropy>0,w=T.clearcoat>0,b=T.dispersion>0,C=T.iridescence>0,U=T.sheen>0,V=T.transmission>0,Z=v&&!!T.anisotropyMap,$=w&&!!T.clearcoatMap,lt=w&&!!T.clearcoatNormalMap,nt=w&&!!T.clearcoatRoughnessMap,ct=C&&!!T.iridescenceMap,vt=C&&!!T.iridescenceThicknessMap,Rt=U&&!!T.sheenColorMap,wt=U&&!!T.sheenRoughnessMap,Wt=!!T.specularMap,Vt=!!T.specularColorMap,_t=!!T.specularIntensityMap,G=V&&!!T.transmissionMap,bt=V&&!!T.thicknessMap,at=!!T.gradientMap,pt=!!T.alphaMap,Ct=T.alphaTest>0,yt=!!T.alphaHash,Qt=!!T.extensions;let ge=Vn;T.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Ue={shaderID:gt,shaderType:T.type,shaderName:T.name,vertexShader:Yt,fragmentShader:ot,defines:T.defines,customVertexShaderID:it,customFragmentShaderID:ht,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&H._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&H.instanceColor!==null,instancingMorph:Lt&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ss,alphaToCoverage:!!T.alphaToCoverage,map:re,matcap:kt,envMap:ne,envMapMode:ne&&ut.mapping,envMapCubeUVHeight:tt,aoMap:W,lightMap:_e,bumpMap:$t,normalMap:Kt,displacementMap:f&&Bt,emissiveMap:J,normalMapObjectSpace:Kt&&T.normalMapType===Ru,normalMapTangentSpace:Kt&&T.normalMapType===rl,metalnessMap:st,roughnessMap:A,anisotropy:v,anisotropyMap:Z,clearcoat:w,clearcoatMap:$,clearcoatNormalMap:lt,clearcoatRoughnessMap:nt,dispersion:b,iridescence:C,iridescenceMap:ct,iridescenceThicknessMap:vt,sheen:U,sheenColorMap:Rt,sheenRoughnessMap:wt,specularMap:Wt,specularColorMap:Vt,specularIntensityMap:_t,transmission:V,transmissionMap:G,thicknessMap:bt,gradientMap:at,opaque:T.transparent===!1&&T.blending===Xi&&T.alphaToCoverage===!1,alphaMap:pt,alphaTest:Ct,alphaHash:yt,combine:T.combine,mapUv:re&&_(T.map.channel),aoMapUv:W&&_(T.aoMap.channel),lightMapUv:_e&&_(T.lightMap.channel),bumpMapUv:$t&&_(T.bumpMap.channel),normalMapUv:Kt&&_(T.normalMap.channel),displacementMapUv:Bt&&_(T.displacementMap.channel),emissiveMapUv:J&&_(T.emissiveMap.channel),metalnessMapUv:st&&_(T.metalnessMap.channel),roughnessMapUv:A&&_(T.roughnessMap.channel),anisotropyMapUv:Z&&_(T.anisotropyMap.channel),clearcoatMapUv:$&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:wt&&_(T.sheenRoughnessMap.channel),specularMapUv:Wt&&_(T.specularMap.channel),specularColorMapUv:Vt&&_(T.specularColorMap.channel),specularIntensityMapUv:_t&&_(T.specularIntensityMap.channel),transmissionMapUv:G&&_(T.transmissionMap.channel),thicknessMapUv:bt&&_(T.thicknessMap.channel),alphaMapUv:pt&&_(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Kt||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(re||pt),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Et,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Pt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:re&&T.map.isVideoTexture===!0&&ue.getTransfer(T.map.colorSpace)===Me,decodeVideoTextureEmissive:J&&T.emissiveMap.isVideoTexture===!0&&ue.getTransfer(T.emissiveMap.colorSpace)===Me,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Te,flipSided:T.side===Qe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Qt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&T.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function p(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const F in T.defines)E.push(F),E.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(M(E,T),S(E,T),E.push(i.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function M(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function S(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const E=g[T.type];let F;if(E){const Y=Pn[E];F=ih.clone(Y.uniforms)}else F=T.uniforms;return F}function O(T,E){let F;for(let Y=0,H=u.length;Y<H;Y++){const K=u[Y];if(K.cacheKey===E){F=K,++F.usedTimes;break}}return F===void 0&&(F=new x0(i,E,T,r),u.push(F)),F}function L(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function P(T){c.remove(T)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:O,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:N}}function S0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function w0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Sc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||w0),n.length>1&&n.sort(f||Sc),s.length>1&&s.sort(f||Sc)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function E0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new wc,i.set(n,[o])):s>=r.length?(o=new wc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function b0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new te};break;case"SpotLight":e={position:new D,direction:new D,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function T0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let A0=0;function R0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function C0(i){const t=new b0,e=T0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new me,o=new me;function a(l){let u=0,h=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,S=0,y=0,O=0,L=0,P=0;l.sort(R0);for(let T=0,E=l.length;T<E;T++){const F=l[T],Y=F.color,H=F.intensity,K=F.distance,q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=Y.r*H,h+=Y.g*H,f+=Y.b*H;else if(F.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(F.sh.coefficients[Q],H);P++}else if(F.isDirectionalLight){const Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ut=F.shadow,tt=e.get(F);tt.shadowIntensity=ut.intensity,tt.shadowBias=ut.bias,tt.shadowNormalBias=ut.normalBias,tt.shadowRadius=ut.radius,tt.shadowMapSize=ut.mapSize,n.directionalShadow[d]=tt,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=F.shadow.matrix,M++}n.directional[d]=Q,d++}else if(F.isSpotLight){const Q=t.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy(Y).multiplyScalar(H),Q.distance=K,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,n.spot[_]=Q;const ut=F.shadow;if(F.map&&(n.spotLightMap[O]=F.map,O++,ut.updateMatrices(F),F.castShadow&&L++),n.spotLightMatrix[_]=ut.matrix,F.castShadow){const tt=e.get(F);tt.shadowIntensity=ut.intensity,tt.shadowBias=ut.bias,tt.shadowNormalBias=ut.normalBias,tt.shadowRadius=ut.radius,tt.shadowMapSize=ut.mapSize,n.spotShadow[_]=tt,n.spotShadowMap[_]=q,y++}_++}else if(F.isRectAreaLight){const Q=t.get(F);Q.color.copy(Y).multiplyScalar(H),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=Q,m++}else if(F.isPointLight){const Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){const ut=F.shadow,tt=e.get(F);tt.shadowIntensity=ut.intensity,tt.shadowBias=ut.bias,tt.shadowNormalBias=ut.normalBias,tt.shadowRadius=ut.radius,tt.shadowMapSize=ut.mapSize,tt.shadowCameraNear=ut.camera.near,tt.shadowCameraFar=ut.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=F.shadow.matrix,S++}n.point[g]=Q,g++}else if(F.isHemisphereLight){const Q=t.get(F);Q.skyColor.copy(F.color).multiplyScalar(H),Q.groundColor.copy(F.groundColor).multiplyScalar(H),n.hemi[p]=Q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const N=n.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==M||N.numPointShadows!==S||N.numSpotShadows!==y||N.numSpotMaps!==O||N.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+O-L,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,N.directionalLength=d,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=M,N.numPointShadows=S,N.numSpotShadows=y,N.numSpotMaps=O,N.numLightProbes=P,n.version=A0++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const S=l[p];if(S.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(S.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Ec(i){const t=new C0(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function P0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ec(i),t.set(s,[a])):r>=o.length?(a=new Ec(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class L0 extends ls{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class I0 extends ls{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U0=`uniform sampler2D shadow_pass;
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
}`;function N0(i,t,e){let n=new xa;const s=new It,r=new It,o=new ye,a=new L0({depthPacking:Au}),c=new I0,l={},u=e.maxTextureSize,h={[ei]:Qe,[Qe]:ei,[Te]:Te},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:D0,fragmentShader:U0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new B(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let p=this.type;this.render=function(L,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const T=i.getRenderTarget(),E=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(ti),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const H=p!==zn&&this.type===zn,K=p===zn&&this.type!==zn;for(let q=0,Q=L.length;q<Q;q++){const ut=L[q],tt=ut.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);const gt=tt.getFrameExtents();if(s.multiply(gt),r.copy(tt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/gt.x),s.x=r.x*gt.x,tt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/gt.y),s.y=r.y*gt.y,tt.mapSize.y=r.y)),tt.map===null||H===!0||K===!0){const St=this.type!==zn?{minFilter:hn,magFilter:hn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new wi(s.x,s.y,St),tt.map.texture.name=ut.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();const dt=tt.getViewportCount();for(let St=0;St<dt;St++){const Pt=tt.getViewport(St);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),Y.viewport(o),tt.updateMatrices(ut,St),n=tt.getFrustum(),y(P,N,tt.camera,ut,this.type)}tt.isPointLightShadow!==!0&&this.type===zn&&M(tt,N),tt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,E,F)};function M(L,P){const N=t.update(_);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new wi(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(P,null,N,f,_,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(P,null,N,d,_,null)}function S(L,P,N,T){let E=null;const F=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)E=F;else if(E=N.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Y=E.uuid,H=P.uuid;let K=l[Y];K===void 0&&(K={},l[Y]=K);let q=K[H];q===void 0&&(q=E.clone(),K[H]=q,P.addEventListener("dispose",O)),E=q}if(E.visible=P.visible,E.wireframe=P.wireframe,T===zn?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:h[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=i.properties.get(E);Y.light=N}return E}function y(L,P,N,T,E){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===zn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const H=t.update(L),K=L.material;if(Array.isArray(K)){const q=H.groups;for(let Q=0,ut=q.length;Q<ut;Q++){const tt=q[Q],gt=K[tt.materialIndex];if(gt&&gt.visible){const dt=S(L,gt,T,E);L.onBeforeShadow(i,L,P,N,H,dt,tt),i.renderBufferDirect(N,null,H,dt,L,tt),L.onAfterShadow(i,L,P,N,H,dt,tt)}}}else if(K.visible){const q=S(L,K,T,E);L.onBeforeShadow(i,L,P,N,H,q,null),i.renderBufferDirect(N,null,H,q,L,null),L.onAfterShadow(i,L,P,N,H,q,null)}}const Y=L.children;for(let H=0,K=Y.length;H<K;H++)y(Y[H],P,N,T,E)}function O(L){L.target.removeEventListener("dispose",O);for(const N in l){const T=l[N],E=L.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const F0={[yo]:So,[wo]:To,[Eo]:Ao,[Zi]:bo,[So]:yo,[To]:wo,[Ao]:Eo,[bo]:Zi};function O0(i,t){function e(){let G=!1;const bt=new ye;let at=null;const pt=new ye(0,0,0,0);return{setMask:function(Ct){at!==Ct&&!G&&(i.colorMask(Ct,Ct,Ct,Ct),at=Ct)},setLocked:function(Ct){G=Ct},setClear:function(Ct,yt,Qt,ge,Ue){Ue===!0&&(Ct*=ge,yt*=ge,Qt*=ge),bt.set(Ct,yt,Qt,ge),pt.equals(bt)===!1&&(i.clearColor(Ct,yt,Qt,ge),pt.copy(bt))},reset:function(){G=!1,at=null,pt.set(-1,0,0,0)}}}function n(){let G=!1,bt=!1,at=null,pt=null,Ct=null;return{setReversed:function(yt){if(bt!==yt){const Qt=t.get("EXT_clip_control");bt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT);const ge=Ct;Ct=null,this.setClear(ge)}bt=yt},getReversed:function(){return bt},setTest:function(yt){yt?mt(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(yt){at!==yt&&!G&&(i.depthMask(yt),at=yt)},setFunc:function(yt){if(bt&&(yt=F0[yt]),pt!==yt){switch(yt){case yo:i.depthFunc(i.NEVER);break;case So:i.depthFunc(i.ALWAYS);break;case wo:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case Eo:i.depthFunc(i.EQUAL);break;case bo:i.depthFunc(i.GEQUAL);break;case To:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=yt}},setLocked:function(yt){G=yt},setClear:function(yt){Ct!==yt&&(bt&&(yt=1-yt),i.clearDepth(yt),Ct=yt)},reset:function(){G=!1,at=null,pt=null,Ct=null,bt=!1}}}function s(){let G=!1,bt=null,at=null,pt=null,Ct=null,yt=null,Qt=null,ge=null,Ue=null;return{setTest:function(ce){G||(ce?mt(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(ce){bt!==ce&&!G&&(i.stencilMask(ce),bt=ce)},setFunc:function(ce,rn,on){(at!==ce||pt!==rn||Ct!==on)&&(i.stencilFunc(ce,rn,on),at=ce,pt=rn,Ct=on)},setOp:function(ce,rn,on){(yt!==ce||Qt!==rn||ge!==on)&&(i.stencilOp(ce,rn,on),yt=ce,Qt=rn,ge=on)},setLocked:function(ce){G=ce},setClear:function(ce){Ue!==ce&&(i.clearStencil(ce),Ue=ce)},reset:function(){G=!1,bt=null,at=null,pt=null,Ct=null,yt=null,Qt=null,ge=null,Ue=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,y=null,O=null,L=null,P=new te(0,0,0),N=0,T=!1,E=null,F=null,Y=null,H=null,K=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ut=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(tt)[1]),Q=ut>=1):tt.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),Q=ut>=2);let gt=null,dt={};const St=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Yt=new ye().fromArray(St),ot=new ye().fromArray(Pt);function it(G,bt,at,pt){const Ct=new Uint8Array(4),yt=i.createTexture();i.bindTexture(G,yt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<at;Qt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(bt+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return yt}const ht={};ht[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),o.setFunc(Zi),$t(!1),Kt(Ca),mt(i.CULL_FACE),W(ti);function mt(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function Et(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Lt(G,bt){return h[G]!==bt?(i.bindFramebuffer(G,bt),h[G]=bt,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=bt),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Ut(G,bt){let at=d,pt=!1;if(G){at=f.get(bt),at===void 0&&(at=[],f.set(bt,at));const Ct=G.textures;if(at.length!==Ct.length||at[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Qt=Ct.length;yt<Qt;yt++)at[yt]=i.COLOR_ATTACHMENT0+yt;at.length=Ct.length,pt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,pt=!0);pt&&i.drawBuffers(at)}function re(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const kt={[mi]:i.FUNC_ADD,[Ql]:i.FUNC_SUBTRACT,[tu]:i.FUNC_REVERSE_SUBTRACT};kt[eu]=i.MIN,kt[nu]=i.MAX;const ne={[iu]:i.ZERO,[su]:i.ONE,[ru]:i.SRC_COLOR,[vo]:i.SRC_ALPHA,[hu]:i.SRC_ALPHA_SATURATE,[lu]:i.DST_COLOR,[au]:i.DST_ALPHA,[ou]:i.ONE_MINUS_SRC_COLOR,[Mo]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[cu]:i.ONE_MINUS_DST_ALPHA,[fu]:i.CONSTANT_COLOR,[du]:i.ONE_MINUS_CONSTANT_COLOR,[pu]:i.CONSTANT_ALPHA,[mu]:i.ONE_MINUS_CONSTANT_ALPHA};function W(G,bt,at,pt,Ct,yt,Qt,ge,Ue,ce){if(G===ti){_===!0&&(Et(i.BLEND),_=!1);return}if(_===!1&&(mt(i.BLEND),_=!0),G!==Kl){if(G!==m||ce!==T){if((p!==mi||y!==mi)&&(i.blendEquation(i.FUNC_ADD),p=mi,y=mi),ce)switch(G){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mn:i.blendFunc(i.ONE,i.ONE);break;case Pa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case La:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Pa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case La:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,S=null,O=null,L=null,P.set(0,0,0),N=0,m=G,T=ce}return}Ct=Ct||bt,yt=yt||at,Qt=Qt||pt,(bt!==p||Ct!==y)&&(i.blendEquationSeparate(kt[bt],kt[Ct]),p=bt,y=Ct),(at!==M||pt!==S||yt!==O||Qt!==L)&&(i.blendFuncSeparate(ne[at],ne[pt],ne[yt],ne[Qt]),M=at,S=pt,O=yt,L=Qt),(ge.equals(P)===!1||Ue!==N)&&(i.blendColor(ge.r,ge.g,ge.b,Ue),P.copy(ge),N=Ue),m=G,T=!1}function _e(G,bt){G.side===Te?Et(i.CULL_FACE):mt(i.CULL_FACE);let at=G.side===Qe;bt&&(at=!at),$t(at),G.blending===Xi&&G.transparent===!1?W(ti):W(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const pt=G.stencilWrite;a.setTest(pt),pt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),J(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(G){E!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),E=G)}function Kt(G){G!==Zl?(mt(i.CULL_FACE),G!==F&&(G===Ca?i.cullFace(i.BACK):G===Jl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),F=G}function Bt(G){G!==Y&&(Q&&i.lineWidth(G),Y=G)}function J(G,bt,at){G?(mt(i.POLYGON_OFFSET_FILL),(H!==bt||K!==at)&&(i.polygonOffset(bt,at),H=bt,K=at)):Et(i.POLYGON_OFFSET_FILL)}function st(G){G?mt(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function A(G){G===void 0&&(G=i.TEXTURE0+q-1),gt!==G&&(i.activeTexture(G),gt=G)}function v(G,bt,at){at===void 0&&(gt===null?at=i.TEXTURE0+q-1:at=gt);let pt=dt[at];pt===void 0&&(pt={type:void 0,texture:void 0},dt[at]=pt),(pt.type!==G||pt.texture!==bt)&&(gt!==at&&(i.activeTexture(at),gt=at),i.bindTexture(G,bt||ht[G]),pt.type=G,pt.texture=bt)}function w(){const G=dt[gt];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function b(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function C(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function U(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function V(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(G){Yt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Yt.copy(G))}function wt(G){ot.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ot.copy(G))}function Wt(G,bt){let at=l.get(bt);at===void 0&&(at=new WeakMap,l.set(bt,at));let pt=at.get(G);pt===void 0&&(pt=i.getUniformBlockIndex(bt,G.name),at.set(G,pt))}function Vt(G,bt){const pt=l.get(bt).get(G);c.get(bt)!==pt&&(i.uniformBlockBinding(bt,pt,G.__bindingPointIndex),c.set(bt,pt))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},gt=null,dt={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,y=null,O=null,L=null,P=new te(0,0,0),N=0,T=!1,E=null,F=null,Y=null,H=null,K=null,Yt.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:Et,bindFramebuffer:Lt,drawBuffers:Ut,useProgram:re,setBlending:W,setMaterial:_e,setFlipSided:$t,setCullFace:Kt,setLineWidth:Bt,setPolygonOffset:J,setScissorTest:st,activeTexture:A,bindTexture:v,unbindTexture:w,compressedTexImage2D:b,compressedTexImage3D:C,texImage2D:ct,texImage3D:vt,updateUBOMapping:Wt,uniformBlockBinding:Vt,texStorage2D:lt,texStorage3D:nt,texSubImage2D:U,texSubImage3D:V,compressedTexSubImage2D:Z,compressedTexSubImage3D:$,scissor:Rt,viewport:wt,reset:_t}}function bc(i,t,e,n){const s=B0(n);switch(e){case Qc:return i*t;case el:return i*t;case nl:return i*t*2;case da:return i*t/s.components*s.byteLength;case pa:return i*t/s.components*s.byteLength;case il:return i*t*2/s.components*s.byteLength;case ma:return i*t*2/s.components*s.byteLength;case tl:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case ga:return i*t*4/s.components*s.byteLength;case _r:case vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Io:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Lo:case Do:return Math.max(i,8)*Math.max(t,8)/2;case No:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sr:case Ko:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sl:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B0(i){switch(i){case kn:case Jc:return{byteLength:1,components:1};case Us:case jc:case Vs:return{byteLength:2,components:1};case ha:case fa:return{byteLength:2,components:4};case Si:case ua:case In:return{byteLength:4,components:1};case Kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function z0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new It,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return d?new OffscreenCanvas(A,v):Tr("canvas")}function _(A,v,w){let b=1;const C=st(A);if((C.width>w||C.height>w)&&(b=w/Math.max(C.width,C.height)),b<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const U=Math.floor(b*C.width),V=Math.floor(b*C.height);h===void 0&&(h=g(U,V));const Z=v?g(U,V):h;return Z.width=U,Z.height=V,Z.getContext("2d").drawImage(A,0,0,U,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+U+"x"+V+")."),Z}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,v,w,b,C=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let U=v;if(v===i.RED&&(w===i.FLOAT&&(U=i.R32F),w===i.HALF_FLOAT&&(U=i.R16F),w===i.UNSIGNED_BYTE&&(U=i.R8)),v===i.RED_INTEGER&&(w===i.UNSIGNED_BYTE&&(U=i.R8UI),w===i.UNSIGNED_SHORT&&(U=i.R16UI),w===i.UNSIGNED_INT&&(U=i.R32UI),w===i.BYTE&&(U=i.R8I),w===i.SHORT&&(U=i.R16I),w===i.INT&&(U=i.R32I)),v===i.RG&&(w===i.FLOAT&&(U=i.RG32F),w===i.HALF_FLOAT&&(U=i.RG16F),w===i.UNSIGNED_BYTE&&(U=i.RG8)),v===i.RG_INTEGER&&(w===i.UNSIGNED_BYTE&&(U=i.RG8UI),w===i.UNSIGNED_SHORT&&(U=i.RG16UI),w===i.UNSIGNED_INT&&(U=i.RG32UI),w===i.BYTE&&(U=i.RG8I),w===i.SHORT&&(U=i.RG16I),w===i.INT&&(U=i.RG32I)),v===i.RGB_INTEGER&&(w===i.UNSIGNED_BYTE&&(U=i.RGB8UI),w===i.UNSIGNED_SHORT&&(U=i.RGB16UI),w===i.UNSIGNED_INT&&(U=i.RGB32UI),w===i.BYTE&&(U=i.RGB8I),w===i.SHORT&&(U=i.RGB16I),w===i.INT&&(U=i.RGB32I)),v===i.RGBA_INTEGER&&(w===i.UNSIGNED_BYTE&&(U=i.RGBA8UI),w===i.UNSIGNED_SHORT&&(U=i.RGBA16UI),w===i.UNSIGNED_INT&&(U=i.RGBA32UI),w===i.BYTE&&(U=i.RGBA8I),w===i.SHORT&&(U=i.RGBA16I),w===i.INT&&(U=i.RGBA32I)),v===i.RGB&&w===i.UNSIGNED_INT_5_9_9_9_REV&&(U=i.RGB9_E5),v===i.RGBA){const V=C?Pr:ue.getTransfer(b);w===i.FLOAT&&(U=i.RGBA32F),w===i.HALF_FLOAT&&(U=i.RGBA16F),w===i.UNSIGNED_BYTE&&(U=V===Me?i.SRGB8_ALPHA8:i.RGBA8),w===i.UNSIGNED_SHORT_4_4_4_4&&(U=i.RGBA4),w===i.UNSIGNED_SHORT_5_5_5_1&&(U=i.RGB5_A1)}return(U===i.R16F||U===i.R32F||U===i.RG16F||U===i.RG32F||U===i.RGBA16F||U===i.RGBA32F)&&t.get("EXT_color_buffer_float"),U}function y(A,v){let w;return A?v===null||v===Si||v===Ki?w=i.DEPTH24_STENCIL8:v===In?w=i.DEPTH32F_STENCIL8:v===Us&&(w=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Si||v===Ki?w=i.DEPTH_COMPONENT24:v===In?w=i.DEPTH_COMPONENT32F:v===Us&&(w=i.DEPTH_COMPONENT16),w}function O(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==hn&&A.minFilter!==Ln?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function L(A){const v=A.target;v.removeEventListener("dispose",L),N(v),v.isVideoTexture&&u.delete(v)}function P(A){const v=A.target;v.removeEventListener("dispose",P),E(v)}function N(A){const v=n.get(A);if(v.__webglInit===void 0)return;const w=A.source,b=f.get(w);if(b){const C=b[v.__cacheKey];C.usedTimes--,C.usedTimes===0&&T(A),Object.keys(b).length===0&&f.delete(w)}n.remove(A)}function T(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const w=A.source,b=f.get(w);delete b[v.__cacheKey],o.memory.textures--}function E(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let b=0;b<6;b++){if(Array.isArray(v.__webglFramebuffer[b]))for(let C=0;C<v.__webglFramebuffer[b].length;C++)i.deleteFramebuffer(v.__webglFramebuffer[b][C]);else i.deleteFramebuffer(v.__webglFramebuffer[b]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[b])}else{if(Array.isArray(v.__webglFramebuffer))for(let b=0;b<v.__webglFramebuffer.length;b++)i.deleteFramebuffer(v.__webglFramebuffer[b]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let b=0;b<v.__webglColorRenderbuffer.length;b++)v.__webglColorRenderbuffer[b]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[b]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const w=A.textures;for(let b=0,C=w.length;b<C;b++){const U=n.get(w[b]);U.__webglTexture&&(i.deleteTexture(U.__webglTexture),o.memory.textures--),n.remove(w[b])}n.remove(A)}let F=0;function Y(){F=0}function H(){const A=F;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function K(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function q(A,v){const w=n.get(A);if(A.isVideoTexture&&Bt(A),A.isRenderTargetTexture===!1&&A.version>0&&w.__version!==A.version){const b=A.image;if(b===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(b.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(w,A,v);return}}e.bindTexture(i.TEXTURE_2D,w.__webglTexture,i.TEXTURE0+v)}function Q(A,v){const w=n.get(A);if(A.version>0&&w.__version!==A.version){ot(w,A,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,w.__webglTexture,i.TEXTURE0+v)}function ut(A,v){const w=n.get(A);if(A.version>0&&w.__version!==A.version){ot(w,A,v);return}e.bindTexture(i.TEXTURE_3D,w.__webglTexture,i.TEXTURE0+v)}function tt(A,v){const w=n.get(A);if(A.version>0&&w.__version!==A.version){it(w,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+v)}const gt={[Ds]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},dt={[hn]:i.NEAREST,[bu]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},St={[Cu]:i.NEVER,[Nu]:i.ALWAYS,[Pu]:i.LESS,[ol]:i.LEQUAL,[Lu]:i.EQUAL,[Uu]:i.GEQUAL,[Iu]:i.GREATER,[Du]:i.NOTEQUAL};function Pt(A,v){if(v.type===In&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ln||v.magFilter===Nr||v.magFilter===Xs||v.magFilter===vi||v.minFilter===Ln||v.minFilter===Nr||v.minFilter===Xs||v.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,gt[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,gt[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,gt[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hn||v.minFilter!==Xs&&v.minFilter!==vi||v.type===In&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const w=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Yt(A,v){let w=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",L));const b=v.source;let C=f.get(b);C===void 0&&(C={},f.set(b,C));const U=K(v);if(U!==A.__cacheKey){C[U]===void 0&&(C[U]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,w=!0),C[U].usedTimes++;const V=C[A.__cacheKey];V!==void 0&&(C[A.__cacheKey].usedTimes--,V.usedTimes===0&&T(v)),A.__cacheKey=U,A.__webglTexture=C[U].texture}return w}function ot(A,v,w){let b=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(b=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(b=i.TEXTURE_3D);const C=Yt(A,v),U=v.source;e.bindTexture(b,A.__webglTexture,i.TEXTURE0+w);const V=n.get(U);if(U.version!==V.__version||C===!0){e.activeTexture(i.TEXTURE0+w);const Z=ue.getPrimaries(ue.workingColorSpace),$=v.colorSpace===Qn?null:ue.getPrimaries(v.colorSpace),lt=v.colorSpace===Qn||Z===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let nt=_(v.image,!1,s.maxTextureSize);nt=J(v,nt);const ct=r.convert(v.format,v.colorSpace),vt=r.convert(v.type);let Rt=S(v.internalFormat,ct,vt,v.colorSpace,v.isVideoTexture);Pt(b,v);let wt;const Wt=v.mipmaps,Vt=v.isVideoTexture!==!0,_t=V.__version===void 0||C===!0,G=U.dataReady,bt=O(v,nt);if(v.isDepthTexture)Rt=y(v.format===Qi,v.type),_t&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Rt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,nt.width,nt.height,0,ct,vt,null));else if(v.isDataTexture)if(Wt.length>0){Vt&&_t&&e.texStorage2D(i.TEXTURE_2D,bt,Rt,Wt[0].width,Wt[0].height);for(let at=0,pt=Wt.length;at<pt;at++)wt=Wt[at],Vt?G&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,wt.width,wt.height,ct,vt,wt.data):e.texImage2D(i.TEXTURE_2D,at,Rt,wt.width,wt.height,0,ct,vt,wt.data);v.generateMipmaps=!1}else Vt?(_t&&e.texStorage2D(i.TEXTURE_2D,bt,Rt,nt.width,nt.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,ct,vt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,nt.width,nt.height,0,ct,vt,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Vt&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Rt,Wt[0].width,Wt[0].height,nt.depth);for(let at=0,pt=Wt.length;at<pt;at++)if(wt=Wt[at],v.format!==bn)if(ct!==null)if(Vt){if(G)if(v.layerUpdates.size>0){const Ct=bc(wt.width,wt.height,v.format,v.type);for(const yt of v.layerUpdates){const Qt=wt.data.subarray(yt*Ct/wt.data.BYTES_PER_ELEMENT,(yt+1)*Ct/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,yt,wt.width,wt.height,1,ct,Qt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,wt.width,wt.height,nt.depth,ct,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Rt,wt.width,wt.height,nt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,wt.width,wt.height,nt.depth,ct,vt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Rt,wt.width,wt.height,nt.depth,0,ct,vt,wt.data)}else{Vt&&_t&&e.texStorage2D(i.TEXTURE_2D,bt,Rt,Wt[0].width,Wt[0].height);for(let at=0,pt=Wt.length;at<pt;at++)wt=Wt[at],v.format!==bn?ct!==null?Vt?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,wt.width,wt.height,ct,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Rt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?G&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,wt.width,wt.height,ct,vt,wt.data):e.texImage2D(i.TEXTURE_2D,at,Rt,wt.width,wt.height,0,ct,vt,wt.data)}else if(v.isDataArrayTexture)if(Vt){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Rt,nt.width,nt.height,nt.depth),G)if(v.layerUpdates.size>0){const at=bc(nt.width,nt.height,v.format,v.type);for(const pt of v.layerUpdates){const Ct=nt.data.subarray(pt*at/nt.data.BYTES_PER_ELEMENT,(pt+1)*at/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,nt.width,nt.height,1,ct,vt,Ct)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ct,vt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,nt.width,nt.height,nt.depth,0,ct,vt,nt.data);else if(v.isData3DTexture)Vt?(_t&&e.texStorage3D(i.TEXTURE_3D,bt,Rt,nt.width,nt.height,nt.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ct,vt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,nt.width,nt.height,nt.depth,0,ct,vt,nt.data);else if(v.isFramebufferTexture){if(_t)if(Vt)e.texStorage2D(i.TEXTURE_2D,bt,Rt,nt.width,nt.height);else{let at=nt.width,pt=nt.height;for(let Ct=0;Ct<bt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Rt,at,pt,0,ct,vt,null),at>>=1,pt>>=1}}else if(Wt.length>0){if(Vt&&_t){const at=st(Wt[0]);e.texStorage2D(i.TEXTURE_2D,bt,Rt,at.width,at.height)}for(let at=0,pt=Wt.length;at<pt;at++)wt=Wt[at],Vt?G&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,ct,vt,wt):e.texImage2D(i.TEXTURE_2D,at,Rt,ct,vt,wt);v.generateMipmaps=!1}else if(Vt){if(_t){const at=st(nt);e.texStorage2D(i.TEXTURE_2D,bt,Rt,at.width,at.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,vt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ct,vt,nt);m(v)&&p(b),V.__version=U.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function it(A,v,w){if(v.image.length!==6)return;const b=Yt(A,v),C=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+w);const U=n.get(C);if(C.version!==U.__version||b===!0){e.activeTexture(i.TEXTURE0+w);const V=ue.getPrimaries(ue.workingColorSpace),Z=v.colorSpace===Qn?null:ue.getPrimaries(v.colorSpace),$=v.colorSpace===Qn||V===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const lt=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,ct=[];for(let pt=0;pt<6;pt++)!lt&&!nt?ct[pt]=_(v.image[pt],!0,s.maxCubemapSize):ct[pt]=nt?v.image[pt].image:v.image[pt],ct[pt]=J(v,ct[pt]);const vt=ct[0],Rt=r.convert(v.format,v.colorSpace),wt=r.convert(v.type),Wt=S(v.internalFormat,Rt,wt,v.colorSpace),Vt=v.isVideoTexture!==!0,_t=U.__version===void 0||b===!0,G=C.dataReady;let bt=O(v,vt);Pt(i.TEXTURE_CUBE_MAP,v);let at;if(lt){Vt&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Wt,vt.width,vt.height);for(let pt=0;pt<6;pt++){at=ct[pt].mipmaps;for(let Ct=0;Ct<at.length;Ct++){const yt=at[Ct];v.format!==bn?Rt!==null?Vt?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ct,0,0,yt.width,yt.height,Rt,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ct,Wt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ct,0,0,yt.width,yt.height,Rt,wt,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ct,Wt,yt.width,yt.height,0,Rt,wt,yt.data)}}}else{if(at=v.mipmaps,Vt&&_t){at.length>0&&bt++;const pt=st(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Wt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(nt){Vt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ct[pt].width,ct[pt].height,Rt,wt,ct[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Wt,ct[pt].width,ct[pt].height,0,Rt,wt,ct[pt].data);for(let Ct=0;Ct<at.length;Ct++){const Qt=at[Ct].image[pt].image;Vt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ct+1,0,0,Qt.width,Qt.height,Rt,wt,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ct+1,Wt,Qt.width,Qt.height,0,Rt,wt,Qt.data)}}else{Vt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Rt,wt,ct[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Wt,Rt,wt,ct[pt]);for(let Ct=0;Ct<at.length;Ct++){const yt=at[Ct];Vt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ct+1,0,0,Rt,wt,yt.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ct+1,Wt,Rt,wt,yt.image[pt])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),U.__version=C.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ht(A,v,w,b,C,U){const V=r.convert(w.format,w.colorSpace),Z=r.convert(w.type),$=S(w.internalFormat,V,Z,w.colorSpace),lt=n.get(v),nt=n.get(w);if(nt.__renderTarget=v,!lt.__hasExternalTextures){const ct=Math.max(1,v.width>>U),vt=Math.max(1,v.height>>U);C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?e.texImage3D(C,U,$,ct,vt,v.depth,0,V,Z,null):e.texImage2D(C,U,$,ct,vt,0,V,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Kt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,b,C,nt.__webglTexture,0,$t(v)):(C===i.TEXTURE_2D||C>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&C<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,b,C,nt.__webglTexture,U),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(A,v,w){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const b=v.depthTexture,C=b&&b.isDepthTexture?b.type:null,U=y(v.stencilBuffer,C),V=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=$t(v);Kt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,U,v.width,v.height):w?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,U,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,U,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,A)}else{const b=v.textures;for(let C=0;C<b.length;C++){const U=b[C],V=r.convert(U.format,U.colorSpace),Z=r.convert(U.type),$=S(U.internalFormat,V,Z,U.colorSpace),lt=$t(v);w&&Kt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,$,v.width,v.height):Kt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const b=n.get(v.depthTexture);b.__renderTarget=v,(!b.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const C=b.__webglTexture,U=$t(v);if(v.depthTexture.format===qi)Kt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,C,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,C,0);else if(v.depthTexture.format===Qi)Kt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,C,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,C,0);else throw new Error("Unknown depthTexture format")}function Lt(A){const v=n.get(A),w=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const b=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),b){const C=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,b.removeEventListener("dispose",C)};b.addEventListener("dispose",C),v.__depthDisposeCallback=C}v.__boundDepthTexture=b}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");Et(v.__webglFramebuffer,A)}else if(w){v.__webglDepthbuffer=[];for(let b=0;b<6;b++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[b]),v.__webglDepthbuffer[b]===void 0)v.__webglDepthbuffer[b]=i.createRenderbuffer(),mt(v.__webglDepthbuffer[b],A,!1);else{const C=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=v.__webglDepthbuffer[b];i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,U)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),mt(v.__webglDepthbuffer,A,!1);else{const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,C)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(A,v,w){const b=n.get(A);v!==void 0&&ht(b.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),w!==void 0&&Lt(A)}function re(A){const v=A.texture,w=n.get(A),b=n.get(v);A.addEventListener("dispose",P);const C=A.textures,U=A.isWebGLCubeRenderTarget===!0,V=C.length>1;if(V||(b.__webglTexture===void 0&&(b.__webglTexture=i.createTexture()),b.__version=v.version,o.memory.textures++),U){w.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){w.__webglFramebuffer[Z]=[];for(let $=0;$<v.mipmaps.length;$++)w.__webglFramebuffer[Z][$]=i.createFramebuffer()}else w.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){w.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)w.__webglFramebuffer[Z]=i.createFramebuffer()}else w.__webglFramebuffer=i.createFramebuffer();if(V)for(let Z=0,$=C.length;Z<$;Z++){const lt=n.get(C[Z]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Kt(A)===!1){w.__webglMultisampledFramebuffer=i.createFramebuffer(),w.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let Z=0;Z<C.length;Z++){const $=C[Z];w.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,w.__webglColorRenderbuffer[Z]);const lt=r.convert($.format,$.colorSpace),nt=r.convert($.type),ct=S($.internalFormat,lt,nt,$.colorSpace,A.isXRRenderTarget===!0),vt=$t(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,ct,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,w.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(w.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(w.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(U){e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)ht(w.__webglFramebuffer[Z][$],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,$);else ht(w.__webglFramebuffer[Z],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(V){for(let Z=0,$=C.length;Z<$;Z++){const lt=C[Z],nt=n.get(lt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Pt(i.TEXTURE_2D,lt),ht(w.__webglFramebuffer,A,lt,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,0),m(lt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,b.__webglTexture),Pt(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)ht(w.__webglFramebuffer[$],A,v,i.COLOR_ATTACHMENT0,Z,$);else ht(w.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,Z,0);m(v)&&p(Z),e.unbindTexture()}A.depthBuffer&&Lt(A)}function kt(A){const v=A.textures;for(let w=0,b=v.length;w<b;w++){const C=v[w];if(m(C)){const U=M(A),V=n.get(C).__webglTexture;e.bindTexture(U,V),p(U),e.unbindTexture()}}}const ne=[],W=[];function _e(A){if(A.samples>0){if(Kt(A)===!1){const v=A.textures,w=A.width,b=A.height;let C=i.COLOR_BUFFER_BIT;const U=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=n.get(A),Z=v.length>1;if(Z)for(let $=0;$<v.length;$++)e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,V.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,V.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,V.__webglFramebuffer);for(let $=0;$<v.length;$++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(C|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(C|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,V.__webglColorRenderbuffer[$]);const lt=n.get(v[$]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,w,b,0,0,w,b,C,i.NEAREST),c===!0&&(ne.length=0,W.length=0,ne.push(i.COLOR_ATTACHMENT0+$),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ne.push(U),W.push(U),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let $=0;$<v.length;$++){e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,V.__webglColorRenderbuffer[$]);const lt=n.get(v[$]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,V.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,V.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function $t(A){return Math.min(s.maxSamples,A.samples)}function Kt(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Bt(A){const v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function J(A,v){const w=A.colorSpace,b=A.format,C=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||w!==ss&&w!==Qn&&(ue.getTransfer(w)===Me?(b!==bn||C!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),v}function st(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=Y,this.setTexture2D=q,this.setTexture2DArray=Q,this.setTexture3D=ut,this.setTextureCube=tt,this.rebindTextures=Ut,this.setupRenderTarget=re,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Kt}function H0(i,t){function e(n,s=Qn){let r;const o=ue.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jc)return i.BYTE;if(n===jc)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===ua)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Vs)return i.HALF_FLOAT;if(n===Qc)return i.ALPHA;if(n===tl)return i.RGB;if(n===bn)return i.RGBA;if(n===el)return i.LUMINANCE;if(n===nl)return i.LUMINANCE_ALPHA;if(n===qi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===da)return i.RED;if(n===pa)return i.RED_INTEGER;if(n===il)return i.RG;if(n===ma)return i.RG_INTEGER;if(n===ga)return i.RGBA_INTEGER;if(n===_r||n===vr||n===Mr||n===yr)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Io||n===Do||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Fo||n===Oo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Fo)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bo||n===zo||n===Ho||n===Vo||n===Go||n===ko||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Zo||n===Jo||n===jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ho)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ko)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sr||n===Ko||n===Qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sr)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===ta||n===ea||n===na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class V0 extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ee extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G0={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const k0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
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

}`;class X0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ni({vertexShader:k0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new B(new Ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q0 extends rs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=new X0,m=e.getContextAttributes();let p=null,M=null;const S=[],y=[],O=new It;let L=null;const P=new un;P.viewport=new ye;const N=new un;N.viewport=new ye;const T=[P,N],E=new V0;let F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let it=S[ot];return it===void 0&&(it=new uo,S[ot]=it),it.getTargetRaySpace()},this.getControllerGrip=function(ot){let it=S[ot];return it===void 0&&(it=new uo,S[ot]=it),it.getGripSpace()},this.getHand=function(ot){let it=S[ot];return it===void 0&&(it=new uo,S[ot]=it),it.getHandSpace()};function H(ot){const it=y.indexOf(ot.inputSource);if(it===-1)return;const ht=S[it];ht!==void 0&&(ht.update(ot.inputSource,ot.frame,l||o),ht.dispatchEvent({type:ot.type,data:ot.inputSource}))}function K(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",q);for(let ot=0;ot<S.length;ot++){const it=y[ot];it!==null&&(y[ot]=null,S[ot].disconnect(it))}F=null,Y=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,M=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ot){l=ot},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",K),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new wi(d.framebufferWidth,d.framebufferHeight,{format:bn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,ht=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Qi:qi,ht=m.stencil?Ki:Si);const Et={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new wi(f.textureWidth,f.textureHeight,{format:bn,type:kn,depthTexture:new Ml(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(ot){for(let it=0;it<ot.removed.length;it++){const ht=ot.removed[it],mt=y.indexOf(ht);mt>=0&&(y[mt]=null,S[mt].disconnect(ht))}for(let it=0;it<ot.added.length;it++){const ht=ot.added[it];let mt=y.indexOf(ht);if(mt===-1){for(let Lt=0;Lt<S.length;Lt++)if(Lt>=y.length){y.push(ht),mt=Lt;break}else if(y[Lt]===null){y[Lt]=ht,mt=Lt;break}if(mt===-1)break}const Et=S[mt];Et&&Et.connect(ht)}}const Q=new D,ut=new D;function tt(ot,it,ht){Q.setFromMatrixPosition(it.matrixWorld),ut.setFromMatrixPosition(ht.matrixWorld);const mt=Q.distanceTo(ut),Et=it.projectionMatrix.elements,Lt=ht.projectionMatrix.elements,Ut=Et[14]/(Et[10]-1),re=Et[14]/(Et[10]+1),kt=(Et[9]+1)/Et[5],ne=(Et[9]-1)/Et[5],W=(Et[8]-1)/Et[0],_e=(Lt[8]+1)/Lt[0],$t=Ut*W,Kt=Ut*_e,Bt=mt/(-W+_e),J=Bt*-W;if(it.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(J),ot.translateZ(Bt),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),Et[10]===-1)ot.projectionMatrix.copy(it.projectionMatrix),ot.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const st=Ut+Bt,A=re+Bt,v=$t-J,w=Kt+(mt-J),b=kt*re/A*st,C=ne*re/A*st;ot.projectionMatrix.makePerspective(v,w,b,C,st,A),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function gt(ot,it){it===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(it.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let it=ot.near,ht=ot.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(ht=_.depthFar)),E.near=N.near=P.near=it,E.far=N.far=P.far=ht,(F!==E.near||Y!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),F=E.near,Y=E.far),P.layers.mask=ot.layers.mask|2,N.layers.mask=ot.layers.mask|4,E.layers.mask=P.layers.mask|N.layers.mask;const mt=ot.parent,Et=E.cameras;gt(E,mt);for(let Lt=0;Lt<Et.length;Lt++)gt(Et[Lt],mt);Et.length===2?tt(E,P,N):E.projectionMatrix.copy(P.projectionMatrix),dt(ot,E,mt)};function dt(ot,it,ht){ht===null?ot.matrix.copy(it.matrixWorld):(ot.matrix.copy(ht.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(it.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(it.projectionMatrix),ot.projectionMatrixInverse.copy(it.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=ia*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ot){c=ot,f!==null&&(f.fixedFoveation=ot),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ot)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let St=null;function Pt(ot,it){if(u=it.getViewerPose(l||o),g=it,u!==null){const ht=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let mt=!1;ht.length!==E.cameras.length&&(E.cameras.length=0,mt=!0);for(let Lt=0;Lt<ht.length;Lt++){const Ut=ht[Lt];let re=null;if(d!==null)re=d.getViewport(Ut);else{const ne=h.getViewSubImage(f,Ut);re=ne.viewport,Lt===0&&(t.setRenderTargetTextures(M,ne.colorTexture,f.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(M))}let kt=T[Lt];kt===void 0&&(kt=new un,kt.layers.enable(Lt),kt.viewport=new ye,T[Lt]=kt),kt.matrix.fromArray(Ut.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ut.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(re.x,re.y,re.width,re.height),Lt===0&&(E.matrix.copy(kt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),mt===!0&&E.cameras.push(kt)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Lt=h.getDepthInformation(ht[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,s.renderState)}}for(let ht=0;ht<S.length;ht++){const mt=y[ht],Et=S[ht];mt!==null&&Et!==void 0&&Et.update(mt,it,l||o)}St&&St(ot,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const Yt=new _l;Yt.setAnimationLoop(Pt),this.setAnimationLoop=function(ot){St=ot},this.dispose=function(){}}}const hi=new Ke,Y0=new me;function $0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ml(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),S=M.envMap,y=M.envMapRotation;S&&(m.envMap.value=S,hi.copy(y),hi.x*=-1,hi.y*=-1,hi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(hi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Z0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,S){const y=S.program;n.uniformBlockBinding(M,y)}function l(M,S){let y=s[M.id];y===void 0&&(g(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",m));const O=S.program;n.updateUBOMapping(M,O);const L=t.render.frame;r[M.id]!==L&&(f(M),r[M.id]=L)}function u(M){const S=h();M.__bindingPointIndex=S;const y=i.createBuffer(),O=M.__size,L=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,O,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const S=s[M.id],y=M.uniforms,O=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let L=0,P=y.length;L<P;L++){const N=Array.isArray(y[L])?y[L]:[y[L]];for(let T=0,E=N.length;T<E;T++){const F=N[T];if(d(F,L,T,O)===!0){const Y=F.__offset,H=Array.isArray(F.value)?F.value:[F.value];let K=0;for(let q=0;q<H.length;q++){const Q=H[q],ut=_(Q);typeof Q=="number"||typeof Q=="boolean"?(F.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,Y+K,F.__data)):Q.isMatrix3?(F.__data[0]=Q.elements[0],F.__data[1]=Q.elements[1],F.__data[2]=Q.elements[2],F.__data[3]=0,F.__data[4]=Q.elements[3],F.__data[5]=Q.elements[4],F.__data[6]=Q.elements[5],F.__data[7]=0,F.__data[8]=Q.elements[6],F.__data[9]=Q.elements[7],F.__data[10]=Q.elements[8],F.__data[11]=0):(Q.toArray(F.__data,K),K+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,S,y,O){const L=M.value,P=S+"_"+y;if(O[P]===void 0)return typeof L=="number"||typeof L=="boolean"?O[P]=L:O[P]=L.clone(),!0;{const N=O[P];if(typeof L=="number"||typeof L=="boolean"){if(N!==L)return O[P]=L,!0}else if(N.equals(L)===!1)return N.copy(L),!0}return!1}function g(M){const S=M.uniforms;let y=0;const O=16;for(let P=0,N=S.length;P<N;P++){const T=Array.isArray(S[P])?S[P]:[S[P]];for(let E=0,F=T.length;E<F;E++){const Y=T[E],H=Array.isArray(Y.value)?Y.value:[Y.value];for(let K=0,q=H.length;K<q;K++){const Q=H[K],ut=_(Q),tt=y%O,gt=tt%ut.boundary,dt=tt+gt;y+=gt,dt!==0&&O-dt<ut.storage&&(y+=O-dt),Y.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=ut.storage}}}const L=y%O;return L>0&&(y+=O-L),M.__size=y,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class J0{constructor(t={}){const{canvas:e=Ou(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=Vn,this.toneMappingExposure=1;const y=this;let O=!1,L=0,P=0,N=null,T=-1,E=null;const F=new ye,Y=new ye;let H=null;const K=new te(0);let q=0,Q=e.width,ut=e.height,tt=1,gt=null,dt=null;const St=new ye(0,0,Q,ut),Pt=new ye(0,0,Q,ut);let Yt=!1;const ot=new xa;let it=!1,ht=!1;const mt=new me,Et=new me,Lt=new D,Ut=new ye,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function ne(){return N===null?tt:1}let W=n;function _e(R,k){return e.getContext(R,k)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${la}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",yt,!1),W===null){const k="webgl2";if(W=_e(k,R),W===null)throw _e(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $t,Kt,Bt,J,st,A,v,w,b,C,U,V,Z,$,lt,nt,ct,vt,Rt,wt,Wt,Vt,_t,G;function bt(){$t=new ep(W),$t.init(),Vt=new H0(W,$t),Kt=new Zd(W,$t,t,Vt),Bt=new O0(W,$t),Kt.reverseDepthBuffer&&f&&Bt.buffers.depth.setReversed(!0),J=new sp(W),st=new S0,A=new z0(W,$t,Bt,st,Kt,Vt,J),v=new jd(y),w=new tp(y),b=new uh(W),_t=new Yd(W,b),C=new np(W,b,J,_t),U=new op(W,C,b,J),Rt=new rp(W,Kt,A),nt=new Jd(st),V=new y0(y,v,w,$t,Kt,_t,nt),Z=new $0(y,st),$=new E0,lt=new P0($t),vt=new qd(y,v,w,Bt,U,d,c),ct=new N0(y,U,Kt),G=new Z0(W,J,Kt,Bt),wt=new $d(W,$t,J),Wt=new ip(W,$t,J),J.programs=V.programs,y.capabilities=Kt,y.extensions=$t,y.properties=st,y.renderLists=$,y.shadowMap=ct,y.state=Bt,y.info=J}bt();const at=new q0(y,W);this.xr=at,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(R){R!==void 0&&(tt=R,this.setSize(Q,ut,!1))},this.getSize=function(R){return R.set(Q,ut)},this.setSize=function(R,k,et=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=R,ut=k,e.width=Math.floor(R*tt),e.height=Math.floor(k*tt),et===!0&&(e.style.width=R+"px",e.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(Q*tt,ut*tt).floor()},this.setDrawingBufferSize=function(R,k,et){Q=R,ut=k,tt=et,e.width=Math.floor(R*et),e.height=Math.floor(k*et),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(St)},this.setViewport=function(R,k,et,j){R.isVector4?St.set(R.x,R.y,R.z,R.w):St.set(R,k,et,j),Bt.viewport(F.copy(St).multiplyScalar(tt).round())},this.getScissor=function(R){return R.copy(Pt)},this.setScissor=function(R,k,et,j){R.isVector4?Pt.set(R.x,R.y,R.z,R.w):Pt.set(R,k,et,j),Bt.scissor(Y.copy(Pt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(R){Bt.setScissorTest(Yt=R)},this.setOpaqueSort=function(R){gt=R},this.setTransparentSort=function(R){dt=R},this.getClearColor=function(R){return R.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(R=!0,k=!0,et=!0){let j=0;if(R){let X=!1;if(N!==null){const xt=N.texture.format;X=xt===ga||xt===ma||xt===pa}if(X){const xt=N.texture.type,At=xt===kn||xt===Si||xt===Us||xt===Ki||xt===ha||xt===fa,Ft=vt.getClearColor(),Nt=vt.getClearAlpha(),Xt=Ft.r,Zt=Ft.g,Ot=Ft.b;At?(g[0]=Xt,g[1]=Zt,g[2]=Ot,g[3]=Nt,W.clearBufferuiv(W.COLOR,0,g)):(_[0]=Xt,_[1]=Zt,_[2]=Ot,_[3]=Nt,W.clearBufferiv(W.COLOR,0,_))}else j|=W.COLOR_BUFFER_BIT}k&&(j|=W.DEPTH_BUFFER_BIT),et&&(j|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),$.dispose(),lt.dispose(),st.dispose(),v.dispose(),w.dispose(),U.dispose(),_t.dispose(),G.dispose(),V.dispose(),at.dispose(),at.removeEventListener("sessionstart",Tn),at.removeEventListener("sessionend",gn),xn.stop()};function pt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const R=J.autoReset,k=ct.enabled,et=ct.autoUpdate,j=ct.needsUpdate,X=ct.type;bt(),J.autoReset=R,ct.enabled=k,ct.autoUpdate=et,ct.needsUpdate=j,ct.type=X}function yt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Qt(R){const k=R.target;k.removeEventListener("dispose",Qt),ge(k)}function ge(R){Ue(R),st.remove(R)}function Ue(R){const k=st.get(R).programs;k!==void 0&&(k.forEach(function(et){V.releaseProgram(et)}),R.isShaderMaterial&&V.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,et,j,X,xt){k===null&&(k=re);const At=X.isMesh&&X.matrixWorld.determinant()<0,Ft=ps(R,k,et,j,X);Bt.setMaterial(j,At);let Nt=et.index,Xt=1;if(j.wireframe===!0){if(Nt=C.getWireframeAttribute(et),Nt===void 0)return;Xt=2}const Zt=et.drawRange,Ot=et.attributes.position;let oe=Zt.start*Xt,le=(Zt.start+Zt.count)*Xt;xt!==null&&(oe=Math.max(oe,xt.start*Xt),le=Math.min(le,(xt.start+xt.count)*Xt)),Nt!==null?(oe=Math.max(oe,0),le=Math.min(le,Nt.count)):Ot!=null&&(oe=Math.max(oe,0),le=Math.min(le,Ot.count));const xe=le-oe;if(xe<0||xe===1/0)return;_t.setup(X,j,Ft,et,Nt);let We,ae=wt;if(Nt!==null&&(We=b.get(Nt),ae=Wt,ae.setIndex(We)),X.isMesh)j.wireframe===!0?(Bt.setLineWidth(j.wireframeLinewidth*ne()),ae.setMode(W.LINES)):ae.setMode(W.TRIANGLES);else if(X.isLine){let zt=j.linewidth;zt===void 0&&(zt=1),Bt.setLineWidth(zt*ne()),X.isLineSegments?ae.setMode(W.LINES):X.isLineLoop?ae.setMode(W.LINE_LOOP):ae.setMode(W.LINE_STRIP)}else X.isPoints?ae.setMode(W.POINTS):X.isSprite&&ae.setMode(W.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ae.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ae.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const zt=X._multiDrawStarts,vn=X._multiDrawCounts,fe=X._multiDrawCount,an=Nt?b.get(Nt).bytesPerElement:1,Pe=st.get(j).currentProgram.getUniforms();for(let Ve=0;Ve<fe;Ve++)Pe.setValue(W,"_gl_DrawID",Ve),ae.render(zt[Ve]/an,vn[Ve])}else if(X.isInstancedMesh)ae.renderInstances(oe,xe,X.count);else if(et.isInstancedBufferGeometry){const zt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,vn=Math.min(et.instanceCount,zt);ae.renderInstances(oe,xe,vn)}else ae.render(oe,xe)};function ce(R,k,et){R.transparent===!0&&R.side===Te&&R.forceSinglePass===!1?(R.side=Qe,R.needsUpdate=!0,_n(R,k,et),R.side=ei,R.needsUpdate=!0,_n(R,k,et),R.side=Te):_n(R,k,et)}this.compile=function(R,k,et=null){et===null&&(et=R),p=lt.get(et),p.init(k),S.push(p),et.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==et&&R.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const j=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xt=X.material;if(xt)if(Array.isArray(xt))for(let At=0;At<xt.length;At++){const Ft=xt[At];ce(Ft,et,X),j.add(Ft)}else ce(xt,et,X),j.add(xt)}),S.pop(),p=null,j},this.compileAsync=function(R,k,et=null){const j=this.compile(R,k,et);return new Promise(X=>{function xt(){if(j.forEach(function(At){st.get(At).currentProgram.isReady()&&j.delete(At)}),j.size===0){X(R);return}setTimeout(xt,10)}$t.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let rn=null;function on(R){rn&&rn(R)}function Tn(){xn.stop()}function gn(){xn.start()}const xn=new _l;xn.setAnimationLoop(on),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(R){rn=R,at.setAnimationLoop(R),R===null?xn.stop():xn.start()},at.addEventListener("sessionstart",Tn),at.addEventListener("sessionend",gn),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(k),k=at.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,k,N),p=lt.get(R,S.length),p.init(k),S.push(p),Et.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ot.setFromProjectionMatrix(Et),ht=this.localClippingEnabled,it=nt.init(this.clippingPlanes,ht),m=$.get(R,M.length),m.init(),M.push(m),at.enabled===!0&&at.isPresenting===!0){const xt=y.xr.getDepthSensingMesh();xt!==null&&An(xt,k,-1/0,y.sortObjects)}An(R,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(gt,dt),kt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,kt&&vt.addToRenderList(m,R),this.info.render.frame++,it===!0&&nt.beginShadows();const et=p.state.shadowsArray;ct.render(et,R,k),it===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,X=m.transmissive;if(p.setupLights(),k.isArrayCamera){const xt=k.cameras;if(X.length>0)for(let At=0,Ft=xt.length;At<Ft;At++){const Nt=xt[At];ii(j,X,R,Nt)}kt&&vt.render(R);for(let At=0,Ft=xt.length;At<Ft;At++){const Nt=xt[At];hs(m,R,Nt,Nt.viewport)}}else X.length>0&&ii(j,X,R,k),kt&&vt.render(R),hs(m,R,k);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),R.isScene===!0&&R.onAfterRender(y,R,k),_t.resetDefaultState(),T=-1,E=null,S.pop(),S.length>0?(p=S[S.length-1],it===!0&&nt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function An(R,k,et,j){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ot.intersectsSprite(R)){j&&Ut.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Et);const At=U.update(R),Ft=R.material;Ft.visible&&m.push(R,At,Ft,et,Ut.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ot.intersectsObject(R))){const At=U.update(R),Ft=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ut.copy(R.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ut.copy(At.boundingSphere.center)),Ut.applyMatrix4(R.matrixWorld).applyMatrix4(Et)),Array.isArray(Ft)){const Nt=At.groups;for(let Xt=0,Zt=Nt.length;Xt<Zt;Xt++){const Ot=Nt[Xt],oe=Ft[Ot.materialIndex];oe&&oe.visible&&m.push(R,At,oe,et,Ut.z,Ot)}}else Ft.visible&&m.push(R,At,Ft,et,Ut.z,null)}}const xt=R.children;for(let At=0,Ft=xt.length;At<Ft;At++)An(xt[At],k,et,j)}function hs(R,k,et,j){const X=R.opaque,xt=R.transmissive,At=R.transparent;p.setupLightsView(et),it===!0&&nt.setGlobalState(y.clippingPlanes,et),j&&Bt.viewport(F.copy(j)),X.length>0&&si(X,k,et),xt.length>0&&si(xt,k,et),At.length>0&&si(At,k,et),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function ii(R,k,et,j){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new wi(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?Vs:kn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const xt=p.state.transmissionRenderTarget[j.id],At=j.viewport||F;xt.setSize(At.z,At.w);const Ft=y.getRenderTarget();y.setRenderTarget(xt),y.getClearColor(K),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),kt&&vt.render(et);const Nt=y.toneMapping;y.toneMapping=Vn;const Xt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),it===!0&&nt.setGlobalState(y.clippingPlanes,j),si(R,et,j),A.updateMultisampleRenderTarget(xt),A.updateRenderTargetMipmap(xt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ot=0,oe=k.length;Ot<oe;Ot++){const le=k[Ot],xe=le.object,We=le.geometry,ae=le.material,zt=le.group;if(ae.side===Te&&xe.layers.test(j.layers)){const vn=ae.side;ae.side=Qe,ae.needsUpdate=!0,Rn(xe,et,j,We,ae,zt),ae.side=vn,ae.needsUpdate=!0,Zt=!0}}Zt===!0&&(A.updateMultisampleRenderTarget(xt),A.updateRenderTargetMipmap(xt))}y.setRenderTarget(Ft),y.setClearColor(K,q),Xt!==void 0&&(j.viewport=Xt),y.toneMapping=Nt}function si(R,k,et){const j=k.isScene===!0?k.overrideMaterial:null;for(let X=0,xt=R.length;X<xt;X++){const At=R[X],Ft=At.object,Nt=At.geometry,Xt=j===null?At.material:j,Zt=At.group;Ft.layers.test(et.layers)&&Rn(Ft,k,et,Nt,Xt,Zt)}}function Rn(R,k,et,j,X,xt){R.onBeforeRender(y,k,et,j,X,xt),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(y,k,et,j,R,xt),X.transparent===!0&&X.side===Te&&X.forceSinglePass===!1?(X.side=Qe,X.needsUpdate=!0,y.renderBufferDirect(et,k,j,X,R,xt),X.side=ei,X.needsUpdate=!0,y.renderBufferDirect(et,k,j,X,R,xt),X.side=Te):y.renderBufferDirect(et,k,j,X,R,xt),R.onAfterRender(y,k,et,j,X,xt)}function _n(R,k,et){k.isScene!==!0&&(k=re);const j=st.get(R),X=p.state.lights,xt=p.state.shadowsArray,At=X.state.version,Ft=V.getParameters(R,X.state,xt,k,et),Nt=V.getProgramCacheKey(Ft);let Xt=j.programs;j.environment=R.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(R.isMeshStandardMaterial?w:v).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",Qt),Xt=new Map,j.programs=Xt);let Zt=Xt.get(Nt);if(Zt!==void 0){if(j.currentProgram===Zt&&j.lightsStateVersion===At)return ds(R,Ft),Zt}else Ft.uniforms=V.getUniforms(R),R.onBeforeCompile(Ft,y),Zt=V.acquireProgram(Ft,Nt),Xt.set(Nt,Zt),j.uniforms=Ft.uniforms;const Ot=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ot.clippingPlanes=nt.uniform),ds(R,Ft),j.needsLights=Ur(R),j.lightsStateVersion=At,j.needsLights&&(Ot.ambientLightColor.value=X.state.ambient,Ot.lightProbe.value=X.state.probe,Ot.directionalLights.value=X.state.directional,Ot.directionalLightShadows.value=X.state.directionalShadow,Ot.spotLights.value=X.state.spot,Ot.spotLightShadows.value=X.state.spotShadow,Ot.rectAreaLights.value=X.state.rectArea,Ot.ltc_1.value=X.state.rectAreaLTC1,Ot.ltc_2.value=X.state.rectAreaLTC2,Ot.pointLights.value=X.state.point,Ot.pointLightShadows.value=X.state.pointShadow,Ot.hemisphereLights.value=X.state.hemi,Ot.directionalShadowMap.value=X.state.directionalShadowMap,Ot.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ot.spotShadowMap.value=X.state.spotShadowMap,Ot.spotLightMatrix.value=X.state.spotLightMatrix,Ot.spotLightMap.value=X.state.spotLightMap,Ot.pointShadowMap.value=X.state.pointShadowMap,Ot.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Zt,j.uniformsList=null,Zt}function fs(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=wr.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function ds(R,k){const et=st.get(R);et.outputColorSpace=k.outputColorSpace,et.batching=k.batching,et.batchingColor=k.batchingColor,et.instancing=k.instancing,et.instancingColor=k.instancingColor,et.instancingMorph=k.instancingMorph,et.skinning=k.skinning,et.morphTargets=k.morphTargets,et.morphNormals=k.morphNormals,et.morphColors=k.morphColors,et.morphTargetsCount=k.morphTargetsCount,et.numClippingPlanes=k.numClippingPlanes,et.numIntersection=k.numClipIntersection,et.vertexAlphas=k.vertexAlphas,et.vertexTangents=k.vertexTangents,et.toneMapping=k.toneMapping}function ps(R,k,et,j,X){k.isScene!==!0&&(k=re),A.resetTextureUnits();const xt=k.fog,At=j.isMeshStandardMaterial?k.environment:null,Ft=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ss,Nt=(j.isMeshStandardMaterial?w:v).get(j.envMap||At),Xt=j.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Zt=!!et.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ot=!!et.morphAttributes.position,oe=!!et.morphAttributes.normal,le=!!et.morphAttributes.color;let xe=Vn;j.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(xe=y.toneMapping);const We=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ae=We!==void 0?We.length:0,zt=st.get(j),vn=p.state.lights;if(it===!0&&(ht===!0||R!==E)){const Xe=R===E&&j.id===T;nt.setState(j,R,Xe)}let fe=!1;j.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==vn.state.version||zt.outputColorSpace!==Ft||X.isBatchedMesh&&zt.batching===!1||!X.isBatchedMesh&&zt.batching===!0||X.isBatchedMesh&&zt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&zt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&zt.instancing===!1||!X.isInstancedMesh&&zt.instancing===!0||X.isSkinnedMesh&&zt.skinning===!1||!X.isSkinnedMesh&&zt.skinning===!0||X.isInstancedMesh&&zt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&zt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&zt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&zt.instancingMorph===!1&&X.morphTexture!==null||zt.envMap!==Nt||j.fog===!0&&zt.fog!==xt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==nt.numPlanes||zt.numIntersection!==nt.numIntersection)||zt.vertexAlphas!==Xt||zt.vertexTangents!==Zt||zt.morphTargets!==Ot||zt.morphNormals!==oe||zt.morphColors!==le||zt.toneMapping!==xe||zt.morphTargetsCount!==ae)&&(fe=!0):(fe=!0,zt.__version=j.version);let an=zt.currentProgram;fe===!0&&(an=_n(j,k,X));let Pe=!1,Ve=!1,ri=!1;const ve=an.getUniforms(),dn=zt.uniforms;if(Bt.useProgram(an.program)&&(Pe=!0,Ve=!0,ri=!0),j.id!==T&&(T=j.id,Ve=!0),Pe||E!==R){Bt.buffers.depth.getReversed()?(mt.copy(R.projectionMatrix),zu(mt),Hu(mt),ve.setValue(W,"projectionMatrix",mt)):ve.setValue(W,"projectionMatrix",R.projectionMatrix),ve.setValue(W,"viewMatrix",R.matrixWorldInverse);const Cn=ve.map.cameraPosition;Cn!==void 0&&Cn.setValue(W,Lt.setFromMatrixPosition(R.matrixWorld)),Kt.logarithmicDepthBuffer&&ve.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ve.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,Ve=!0,ri=!0)}if(X.isSkinnedMesh){ve.setOptional(W,X,"bindMatrix"),ve.setOptional(W,X,"bindMatrixInverse");const Xe=X.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),ve.setValue(W,"boneTexture",Xe.boneTexture,A))}X.isBatchedMesh&&(ve.setOptional(W,X,"batchingTexture"),ve.setValue(W,"batchingTexture",X._matricesTexture,A),ve.setOptional(W,X,"batchingIdTexture"),ve.setValue(W,"batchingIdTexture",X._indirectTexture,A),ve.setOptional(W,X,"batchingColorTexture"),X._colorsTexture!==null&&ve.setValue(W,"batchingColorTexture",X._colorsTexture,A));const Wn=et.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&Rt.update(X,et,an),(Ve||zt.receiveShadow!==X.receiveShadow)&&(zt.receiveShadow=X.receiveShadow,ve.setValue(W,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(dn.envMap.value=Nt,dn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(dn.envMapIntensity.value=k.environmentIntensity),Ve&&(ve.setValue(W,"toneMappingExposure",y.toneMappingExposure),zt.needsLights&&ms(dn,ri),xt&&j.fog===!0&&Z.refreshFogUniforms(dn,xt),Z.refreshMaterialUniforms(dn,j,tt,ut,p.state.transmissionRenderTarget[R.id]),wr.upload(W,fs(zt),dn,A)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(wr.upload(W,fs(zt),dn,A),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ve.setValue(W,"center",X.center),ve.setValue(W,"modelViewMatrix",X.modelViewMatrix),ve.setValue(W,"normalMatrix",X.normalMatrix),ve.setValue(W,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Xe=j.uniformsGroups;for(let Cn=0,x=Xe.length;Cn<x;Cn++){const I=Xe[Cn];G.update(I,an),G.bind(I,an)}}return an}function ms(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Ur(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(R,k,et){st.get(R.texture).__webglTexture=k,st.get(R.depthTexture).__webglTexture=et;const j=st.get(R);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=et===void 0,j.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const et=st.get(R);et.__webglFramebuffer=k,et.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,et=0){N=R,L=k,P=et;let j=!0,X=null,xt=!1,At=!1;if(R){const Nt=st.get(R);if(Nt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(W.FRAMEBUFFER,null),j=!1;else if(Nt.__webglFramebuffer===void 0)A.setupRenderTarget(R);else if(Nt.__hasExternalTextures)A.rebindTextures(R,st.get(R.texture).__webglTexture,st.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ot=R.depthTexture;if(Nt.__boundDepthTexture!==Ot){if(Ot!==null&&st.has(Ot)&&(R.width!==Ot.image.width||R.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(At=!0);const Zt=st.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Zt[k])?X=Zt[k][et]:X=Zt[k],xt=!0):R.samples>0&&A.useMultisampledRTT(R)===!1?X=st.get(R).__webglMultisampledFramebuffer:Array.isArray(Zt)?X=Zt[et]:X=Zt,F.copy(R.viewport),Y.copy(R.scissor),H=R.scissorTest}else F.copy(St).multiplyScalar(tt).floor(),Y.copy(Pt).multiplyScalar(tt).floor(),H=Yt;if(Bt.bindFramebuffer(W.FRAMEBUFFER,X)&&j&&Bt.drawBuffers(R,X),Bt.viewport(F),Bt.scissor(Y),Bt.setScissorTest(H),xt){const Nt=st.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,Nt.__webglTexture,et)}else if(At){const Nt=st.get(R.texture),Xt=k||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Nt.__webglTexture,et||0,Xt)}T=-1},this.readRenderTargetPixels=function(R,k,et,j,X,xt,At){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Ft=Ft[At]),Ft){Bt.bindFramebuffer(W.FRAMEBUFFER,Ft);try{const Nt=R.texture,Xt=Nt.format,Zt=Nt.type;if(!Kt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-j&&et>=0&&et<=R.height-X&&W.readPixels(k,et,j,X,Vt.convert(Xt),Vt.convert(Zt),xt)}finally{const Nt=N!==null?st.get(N).__webglFramebuffer:null;Bt.bindFramebuffer(W.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(R,k,et,j,X,xt,At){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Ft=Ft[At]),Ft){const Nt=R.texture,Xt=Nt.format,Zt=Nt.type;if(!Kt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-j&&et>=0&&et<=R.height-X){Bt.bindFramebuffer(W.FRAMEBUFFER,Ft);const Ot=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ot),W.bufferData(W.PIXEL_PACK_BUFFER,xt.byteLength,W.STREAM_READ),W.readPixels(k,et,j,X,Vt.convert(Xt),Vt.convert(Zt),0);const oe=N!==null?st.get(N).__webglFramebuffer:null;Bt.bindFramebuffer(W.FRAMEBUFFER,oe);const le=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Bu(W,le,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ot),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,xt),W.deleteBuffer(Ot),W.deleteSync(le),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,et=0){R.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);const j=Math.pow(2,-et),X=Math.floor(R.image.width*j),xt=Math.floor(R.image.height*j),At=k!==null?k.x:0,Ft=k!==null?k.y:0;A.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,et,0,0,At,Ft,X,xt),Bt.unbindTexture()},this.copyTextureToTexture=function(R,k,et=null,j=null,X=0){R.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1],k=arguments[2],X=arguments[3]||0,et=null);let xt,At,Ft,Nt,Xt,Zt,Ot,oe,le;const xe=R.isCompressedTexture?R.mipmaps[X]:R.image;et!==null?(xt=et.max.x-et.min.x,At=et.max.y-et.min.y,Ft=et.isBox3?et.max.z-et.min.z:1,Nt=et.min.x,Xt=et.min.y,Zt=et.isBox3?et.min.z:0):(xt=xe.width,At=xe.height,Ft=xe.depth||1,Nt=0,Xt=0,Zt=0),j!==null?(Ot=j.x,oe=j.y,le=j.z):(Ot=0,oe=0,le=0);const We=Vt.convert(k.format),ae=Vt.convert(k.type);let zt;k.isData3DTexture?(A.setTexture3D(k,0),zt=W.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),zt=W.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),zt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,k.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,k.unpackAlignment);const vn=W.getParameter(W.UNPACK_ROW_LENGTH),fe=W.getParameter(W.UNPACK_IMAGE_HEIGHT),an=W.getParameter(W.UNPACK_SKIP_PIXELS),Pe=W.getParameter(W.UNPACK_SKIP_ROWS),Ve=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,xe.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,xe.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Nt),W.pixelStorei(W.UNPACK_SKIP_ROWS,Xt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Zt);const ri=R.isDataArrayTexture||R.isData3DTexture,ve=k.isDataArrayTexture||k.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const dn=st.get(R),Wn=st.get(k),Xe=st.get(dn.__renderTarget),Cn=st.get(Wn.__renderTarget);Bt.bindFramebuffer(W.READ_FRAMEBUFFER,Xe.__webglFramebuffer),Bt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let x=0;x<Ft;x++)ri&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(R).__webglTexture,X,Zt+x),R.isDepthTexture?(ve&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(k).__webglTexture,X,le+x),W.blitFramebuffer(Nt,Xt,xt,At,Ot,oe,xt,At,W.DEPTH_BUFFER_BIT,W.NEAREST)):ve?W.copyTexSubImage3D(zt,X,Ot,oe,le+x,Nt,Xt,xt,At):W.copyTexSubImage2D(zt,X,Ot,oe,le+x,Nt,Xt,xt,At);Bt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ve?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(zt,X,Ot,oe,le,xt,At,Ft,We,ae,xe.data):k.isCompressedArrayTexture?W.compressedTexSubImage3D(zt,X,Ot,oe,le,xt,At,Ft,We,xe.data):W.texSubImage3D(zt,X,Ot,oe,le,xt,At,Ft,We,ae,xe):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,X,Ot,oe,xt,At,We,ae,xe.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,X,Ot,oe,xe.width,xe.height,We,xe.data):W.texSubImage2D(W.TEXTURE_2D,X,Ot,oe,xt,At,We,ae,xe);W.pixelStorei(W.UNPACK_ROW_LENGTH,vn),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,fe),W.pixelStorei(W.UNPACK_SKIP_PIXELS,an),W.pixelStorei(W.UNPACK_SKIP_ROWS,Pe),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ve),X===0&&k.generateMipmaps&&W.generateMipmap(zt),Bt.unbindTexture()},this.copyTextureToTexture3D=function(R,k,et=null,j=null,X=0){return R.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,j=arguments[1]||null,R=arguments[2],k=arguments[3],X=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,k,et,j,X)},this.initRenderTarget=function(R){st.get(R).__webglFramebuffer===void 0&&A.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),Bt.unbindTexture()},this.resetState=function(){L=0,P=0,N=null,Bt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}class va{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(t),this.density=e}clone(){return new va(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ma{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new te(t),this.near=e,this.far=n}clone(){return new Ma(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bl extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class j0 extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=hn,u=hn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tc extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vi=new me,Ac=new me,fr=[],Rc=new bi,K0=new me,ys=new B,Ss=new cs;class Cs extends B{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,K0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),Rc.copy(t.boundingBox).applyMatrix4(Vi),this.boundingBox.union(Rc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),Ss.copy(t.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(Ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),t.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),Ac.multiplyMatrices(n,Vi),ys.matrixWorld=Ac,ys.raycast(t,fr);for(let o=0,a=fr.length;o<a;o++){const c=fr[o];c.instanceId=r,c.object=this,e.push(c)}fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Tc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new j0(new Float32Array(s*this.count),s,this.count,da,In));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ns extends ls{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cc=new me,ra=new ul,dr=new cs,pr=new D;class Ar extends Oe{constructor(t=new Ce,e=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(s),dr.radius+=r,t.ray.intersectsSphere(dr)===!1)return;Cc.copy(s).invert(),ra.copy(t.ray).applyMatrix4(Cc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);pr.fromBufferAttribute(h,m),Pc(pr,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)pr.fromBufferAttribute(h,g),Pc(pr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pc(i,t,e,n,s,r,o){const a=ra.distanceSqToPoint(i);if(a<e){const c=new D;ra.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ya extends Ze{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new It:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],o=[],a=new D,c=new me;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ge(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ge(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Sa extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new It){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Q0 extends Sa{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wa(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const mr=new D,ho=new wa,fo=new wa,po=new wa;class Tl extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(mr.subVectors(s[0],s[1]).add(s[0]),l=mr);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(mr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=mr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ho.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),fo.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),po.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ho.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),fo.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),po.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(ho.calc(c),fo.calc(c),po.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function tm(i,t){const e=1-i;return e*e*t}function em(i,t){return 2*(1-i)*i*t}function nm(i,t){return i*i*t}function Ps(i,t,e,n){return tm(i,t)+em(i,e)+nm(i,n)}function im(i,t){const e=1-i;return e*e*e*t}function sm(i,t){const e=1-i;return 3*e*e*i*t}function rm(i,t){return 3*(1-i)*i*i*t}function om(i,t){return i*i*i*t}function Ls(i,t,e,n,s){return im(i,t)+sm(i,e)+rm(i,n)+om(i,s)}class Al extends Dn{constructor(t=new It,e=new It,n=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new It){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ls(t,s.x,r.x,o.x,a.x),Ls(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class am extends Dn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ls(t,s.x,r.x,o.x,a.x),Ls(t,s.y,r.y,o.y,a.y),Ls(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rl extends Dn{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cm extends Dn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cl extends Dn{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ps(t,s.x,r.x,o.x),Ps(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lm extends Dn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ps(t,s.x,r.x,o.x),Ps(t,s.y,r.y,o.y),Ps(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pl extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Lc(a,c.x,l.x,u.x,h.x),Lc(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new It().fromArray(s))}return this}}var Ic=Object.freeze({__proto__:null,ArcCurve:Q0,CatmullRomCurve3:Tl,CubicBezierCurve:Al,CubicBezierCurve3:am,EllipseCurve:Sa,LineCurve:Rl,LineCurve3:cm,QuadraticBezierCurve:Cl,QuadraticBezierCurve3:lm,SplineCurve:Pl});class um extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ic[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ic[s.type]().fromJSON(s))}return this}}class oa extends um{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Rl(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Cl(this.currentPoint.clone(),new It(t,e),new It(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Al(this.currentPoint.clone(),new It(t,e),new It(n,s),new It(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Pl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Sa(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ea extends Ce{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ge(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new D,f=new It,d=new D,g=new D,_=new D;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let M=0;M<=e;M++){const S=n+M*u*s,y=Math.sin(S),O=Math.cos(S);for(let L=0;L<=t.length-1;L++){h.x=t[L].x*y,h.y=t[L].y,h.z=t[L].x*O,o.push(h.x,h.y,h.z),f.x=M/e,f.y=L/(t.length-1),a.push(f.x,f.y);const P=c[3*L+0]*y,N=c[3*L+1],T=c[3*L+0]*O;l.push(P,N,T)}}for(let M=0;M<e;M++)for(let S=0;S<t.length-1;S++){const y=S+M*t.length,O=y,L=y+t.length,P=y+t.length+1,N=y+1;r.push(O,L,N),r.push(P,N,L)}this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("uv",new he(a,2)),this.setAttribute("normal",new he(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.points,t.segments,t.phiStart,t.phiLength)}}class es extends Ea{constructor(t=1,e=1,n=4,s=8){const r=new oa;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new es(t.radius,t.length,t.capSegments,t.radialSegments)}}class wn extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new D,u=new It;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Dt extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(d,2));function M(){const y=new D,O=new D;let L=0;const P=(e-t)/n;for(let N=0;N<=r;N++){const T=[],E=N/r,F=E*(e-t)+t;for(let Y=0;Y<=s;Y++){const H=Y/s,K=H*c+a,q=Math.sin(K),Q=Math.cos(K);O.x=F*q,O.y=-E*n+m,O.z=F*Q,h.push(O.x,O.y,O.z),y.set(q,P,Q).normalize(),f.push(y.x,y.y,y.z),d.push(H,1-E),T.push(g++)}_.push(T)}for(let N=0;N<s;N++)for(let T=0;T<r;T++){const E=_[T][N],F=_[T+1][N],Y=_[T+1][N+1],H=_[T][N+1];(t>0||T!==0)&&(u.push(E,F,H),L+=3),(e>0||T!==r-1)&&(u.push(F,Y,H),L+=3)}l.addGroup(p,L,0),p+=L}function S(y){const O=g,L=new It,P=new D;let N=0;const T=y===!0?t:e,E=y===!0?1:-1;for(let Y=1;Y<=s;Y++)h.push(0,m*E,0),f.push(0,E,0),d.push(.5,.5),g++;const F=g;for(let Y=0;Y<=s;Y++){const K=Y/s*c+a,q=Math.cos(K),Q=Math.sin(K);P.x=T*Q,P.y=m*E,P.z=T*q,h.push(P.x,P.y,P.z),f.push(0,E,0),L.x=q*.5+.5,L.y=Q*.5*E+.5,d.push(L.x,L.y),g++}for(let Y=0;Y<s;Y++){const H=O+Y,K=F+Y;y===!0?u.push(K,K+1,H):u.push(K+1,K,H),N+=3}l.addGroup(p,N,y===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mi extends Dt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Mi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ba extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const S=new D,y=new D,O=new D;for(let L=0;L<e.length;L+=3)d(e[L+0],S),d(e[L+1],y),d(e[L+2],O),c(S,y,O,M)}function c(M,S,y,O){const L=O+1,P=[];for(let N=0;N<=L;N++){P[N]=[];const T=M.clone().lerp(y,N/L),E=S.clone().lerp(y,N/L),F=L-N;for(let Y=0;Y<=F;Y++)Y===0&&N===L?P[N][Y]=T:P[N][Y]=T.clone().lerp(E,Y/F)}for(let N=0;N<L;N++)for(let T=0;T<2*(L-N)-1;T++){const E=Math.floor(T/2);T%2===0?(f(P[N][E+1]),f(P[N+1][E]),f(P[N][E])):(f(P[N][E+1]),f(P[N+1][E+1]),f(P[N+1][E]))}}function l(M){const S=new D;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(M),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function u(){const M=new D;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];const y=m(M)/2/Math.PI+.5,O=p(M)/Math.PI+.5;o.push(y,1-O)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const S=o[M+0],y=o[M+2],O=o[M+4],L=Math.max(S,y,O),P=Math.min(S,y,O);L>.9&&P<.1&&(S<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),O<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,S){const y=M*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function g(){const M=new D,S=new D,y=new D,O=new D,L=new It,P=new It,N=new It;for(let T=0,E=0;T<r.length;T+=9,E+=6){M.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),L.set(o[E+0],o[E+1]),P.set(o[E+2],o[E+3]),N.set(o[E+4],o[E+5]),O.copy(M).add(S).add(y).divideScalar(3);const F=m(O);_(L,E+0,M,F),_(P,E+2,S,F),_(N,E+4,y,F)}}function _(M,S,y,O){O<0&&M.x===1&&(o[S]=M.x-1),y.x===0&&y.z===0&&(o[S]=O/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.vertices,t.indices,t.radius,t.details)}}class ns extends oa{constructor(t){super(t),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new oa().fromJSON(s))}return this}}const hm={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ll(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=gm(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Fs(r,o,e,a,c,d,0),o}};function Ll(i,t,e,n,s){let r,o;if(s===Am(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Dc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Dc(r,i[r],i[r+1],o);return o&&Ir(o,o.next)&&(Bs(o),o=o.next),o}function Ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ir(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ym(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?dm(i,n,s,r):fm(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Bs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=pm(Ei(i),t,e),Fs(i,t,e,n,s,r,2)):o===2&&mm(i,t,e,n,s,r):Fs(Ei(i),t,e,n,s,r,1);break}}}function fm(i){const t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Wi(s,a,r,c,o,l,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ae(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=aa(d,g,t,e,n),M=aa(_,m,t,e,n);let S=i.prevZ,y=i.nextZ;for(;S&&S.z>=p&&y&&y.z<=M;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Wi(a,u,c,h,l,f,S.x,S.y)&&Ae(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Wi(a,u,c,h,l,f,y.x,y.y)&&Ae(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Wi(a,u,c,h,l,f,S.x,S.y)&&Ae(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Wi(a,u,c,h,l,f,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function pm(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Ir(s,r)&&Il(s,n,n.next,r)&&Os(s,r)&&Os(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Bs(n),Bs(n.next),n=i=r),n=n.next}while(n!==i);return Ei(n)}function mm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Em(o,a)){let c=Dl(o,a);o=Ei(o,o.next),c=Ei(c,c.next),Fs(o,t,e,n,s,r,0),Fs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function gm(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Ll(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(wm(l));for(s.sort(xm),r=0;r<s.length;r++)e=_m(s[r],e);return e}function xm(i,t){return i.x-t.x}function _m(i,t){const e=vm(i,t);if(!e)return t;const n=Dl(e,i);return Ei(n,n.next),Ei(e,e.next)}function vm(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Wi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Os(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Mm(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function Mm(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function ym(i,t,e,n){let s=i;do s.z===0&&(s.z=aa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sm(s)}function Sm(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function aa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Em(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!bm(i,t)&&(Os(i,t)&&Os(t,i)&&Tm(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||Ir(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ir(i,t){return i.x===t.x&&i.y===t.y}function Il(i,t,e,n){const s=xr(Ae(i,t,e)),r=xr(Ae(i,t,n)),o=xr(Ae(e,n,i)),a=xr(Ae(e,n,t));return!!(s!==r&&o!==a||s===0&&gr(i,e,t)||r===0&&gr(i,n,t)||o===0&&gr(e,i,n)||a===0&&gr(e,t,n))}function gr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function xr(i){return i>0?1:i<0?-1:0}function bm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Il(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Os(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function Tm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Dl(i,t){const e=new ca(i.i,i.x,i.y),n=new ca(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Dc(i,t,e,n){const s=new ca(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ca(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Am(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Is{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Is.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Uc(t),Nc(n,t);let o=t.length;e.forEach(Uc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Nc(n,e[c]);const a=hm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Uc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class nn extends ba{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nn(t.radius,t.detail)}}class zs extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const f=(e-t)/s,d=new D,g=new It;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,S=M,y=M+n+1,O=M+n+2,L=M+1;a.push(S,y,L),a.push(y,O,L)}}this.setIndex(a),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class yi extends Ce{constructor(t=new ns([new It(0,.5),new It(-.5,-.5),new It(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new he(s,3)),this.setAttribute("normal",new he(r,3)),this.setAttribute("uv",new he(o,2));function l(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;Is.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];Is.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=Is.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){const M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){const M=_[m],S=M[0]+h,y=M[1]+h,O=M[2]+h;n.push(S,y,O),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Rm(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new yi(n,t.curveSegments)}}function Rm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Se extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new D,f=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let O=0;O<=e;O++){const L=O/e;h.x=-t*Math.cos(s+L*r)*Math.sin(o+S*a),h.y=t*Math.cos(o+S*a),h.z=t*Math.sin(s+L*r)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(L+y,1-S),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const S=u[p][M+1],y=u[p][M],O=u[p+1][M],L=u[p+1][M+1];(p!==0||o>0)&&d.push(S,y,L),(p!==n-1||c<Math.PI)&&d.push(y,O,L)}this.setIndex(d),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class be extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new D,h=new D,f=new D;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class jt extends ls{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ta extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ul extends Ta{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const mo=new me,Fc=new D,Oc=new D;class Nl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fc),Oc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oc),e.updateMatrixWorld(),mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Bc=new me,ws=new D,go=new D;class Cm extends Nl{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(ws),go.copy(n.position),go.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(go),n.updateMatrixWorld(),s.makeTranslation(-ws.x,-ws.y,-ws.z),Bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc)}}class Rs extends Ta{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Pm extends Nl{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fl extends Ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Pm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Lm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=zc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function zc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);function Im(i){const t=new J0({canvas:i,antialias:!0});t.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),t.toneMapping=Vn;const e=new un(52,1,.1,4e3);let n=null,s=()=>{};const r=new Lm;let o=0,a=!0;function c(){const u=i.clientWidth||window.innerWidth,h=i.clientHeight||window.innerHeight;t.setSize(u,h,!1),e.aspect=u/h,e.updateProjectionMatrix()}new ResizeObserver(c).observe(i),c();function l(){if(!a)return;const u=Math.min(.1,r.getDelta());o+=u,s(o,u),n&&t.render(n,e),requestAnimationFrame(l)}return l(),{renderer:t,camera:e,voir(u){n=u},definir(u,h){n=u,s=h||(()=>{})},temps:()=>o,arreter(){a=!1,t.dispose()}}}function Dm(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ce;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Hc(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);const g=Hc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Hc(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new ke(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){const _=u.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function $i(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const ft=(i,t={})=>new jt({color:i,roughness:.85,metalness:0,flatShading:!0,...t}),Um=(()=>{const i=new ns;return i.moveTo(0,0),i.bezierCurveTo(.5,.4,.5,1.1,0,1.6),i.bezierCurveTo(-.5,1.1,-.5,.4,0,0),i})();function Aa(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new ya(i)}const Nm=(i,t,e)=>[Math.min(19.4,Math.max(-19.4,i)),Math.min(9.4,11.5+8*(1-Math.abs(i)/20),Math.max(.9,t)),Math.min(14.4,Math.max(-14.5,e))],Fm={xMin:-18.6,xMax:18.6,zMin:-13.6,zMax:13.6};function Jt(i,t){for(const[e,n]of Object.entries(t))n&&n.isVector3?i[e].copy(n):n&&n.isEuler?i.rotation.copy(n):i[e]=n;return i}function Je(i,t,e,n=null){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new ya(s);return r.colorSpace=sn,n&&(r.wrapS=r.wrapT=Ds,r.repeat.set(n[0],n[1])),r}function Om(){const i=new bl,t=$i(77),e=[];function n(x,I,z,rt,Mt,qt,Re,{solide:tn=!1,rot:Xn=0,mate:Wl={}}={}){const Gs=new B(new Ht(x,I,z),ft(Re,Wl));return Gs.position.set(rt,Mt,qt),Gs.rotation.y=Xn,i.add(Gs),tn&&e.push({min:[rt-x/2,Mt-I/2,qt-z/2],max:[rt+x/2,Mt+I/2,qt+z/2]}),Gs}function s(x,I,z,rt,Mt,qt,Re,tn=12){const Xn=new B(new Dt(x,I,z,tn),ft(Re));return Xn.position.set(rt,Mt,qt),i.add(Xn),Xn}i.add(new Ul(16773336,8016948,.55));const r=new Fl(16773839,.9);r.position.set(16,20,-6),i.add(r);const o=new Rs(16767392,420,60,1.6);o.position.set(0,14,0),i.add(o);const a=new Rs(16769192,150,24,1.8);a.position.set(-12,8,-10),i.add(a);const c=Je(512,512,(x,I,z)=>{const rt=$i(5);for(let Mt=0;Mt<8;Mt++){x.fillStyle=["#b98a58","#a97b4b","#c29463","#b08050"][Mt%4],x.fillRect(0,Mt*64,I,62),x.fillStyle="rgba(0,0,0,0.22)",x.fillRect(0,Mt*64+62,I,2),x.fillStyle="rgba(0,0,0,0.12)";for(let qt=0;qt<14;qt++)x.fillRect(rt()*I,Mt*64+6+rt()*50,30+rt()*80,1.4);x.fillStyle="rgba(0,0,0,0.25)",x.fillRect(Mt*173%400+30,Mt*64,2,62)}},[6,5]),l=new B(new Ie(40,30),new jt({map:c,roughness:.9}));l.rotation.x=-Math.PI/2,i.add(l);const u=Je(512,512,(x,I)=>{for(let z=0;z<6;z++)x.fillStyle=["#8a5e3c","#7e5535","#935f3b"][z%3],x.fillRect(z*86,0,84,512),x.fillStyle="rgba(0,0,0,0.3)",x.fillRect(z*86+84,0,2,512)},[4,1]),h=new jt({map:u,roughness:.95}),f=(x,I,z,rt,Mt,qt=0)=>{const Re=new B(new Ie(x,I),h);return Re.position.set(z,rt,Mt),Re.rotation.y=qt,i.add(Re),Re};f(40,12,0,6,-15,0),f(30,12,-20,6,0,Math.PI/2),f(30,12,20,6,0,-Math.PI/2);const d=(x,I,z,rt)=>{const Mt=h.clone();Mt.map=u.clone(),Mt.map.repeat.set(x/10,I/12),Mt.map.needsUpdate=!0;const qt=new B(new Ie(x,I),Mt);qt.position.set(z,rt,15),qt.rotation.y=Math.PI,i.add(qt)};d(12,12,-14,6),d(12,12,14,6),d(16,2,0,11);const g=new B(new yi((()=>{const x=new ns;return x.moveTo(-20,12),x.lineTo(20,12),x.lineTo(0,21),x.closePath(),x})()),h);g.position.set(0,0,-15),i.add(g);const _=g.clone();_.position.set(0,0,15),_.rotation.y=Math.PI,i.add(_);const m=Math.atan2(9,20),p=Math.hypot(20,9);for(const x of[-1,1]){const I=new B(new Ht(p+1,.5,31),ft(5913894));I.position.set(x*10,16.55,0),I.rotation.z=-x*m,i.add(I)}for(let x=-13;x<=13;x+=6.5){n(40,.9,.9,0,12.1,x,3810837);for(const I of[-1,1]){const z=new B(new Ht(p,.8,.8),ft(3810837));z.position.set(I*10,16.1,x),z.rotation.z=-I*m,i.add(z)}n(.8,4.4,.8,0,14.4,x,3810837)}n(.9,.9,30,0,20.4,0,3810837);const M=Je(512,512,(x,I,z)=>{const rt=x.createLinearGradient(0,0,0,z);rt.addColorStop(0,"#1f8fe6"),rt.addColorStop(.55,"#7fe3dc"),rt.addColorStop(1,"#fff3c0"),x.fillStyle=rt,x.fillRect(0,0,I,z),x.fillStyle="#5fb7b8",x.beginPath(),x.ellipse(120,360,220,90,0,0,6.3),x.fill(),x.fillStyle="#4fb45a",x.fillRect(0,380,I,140),x.fillStyle="#7b4f2e",x.fillRect(256,190,34,200);for(const[Mt,qt,Re,tn]of[[240,170,90,"#23a04c"],[330,190,70,"#45c755"],[200,220,60,"#45c755"],[270,120,70,"#8fe55f"]])x.fillStyle=tn,x.beginPath(),x.arc(Mt,qt,Re,0,6.3),x.fill();x.fillStyle="#ff8a2b";for(const[Mt,qt]of[[230,140],[320,170],[190,215]])x.beginPath(),x.arc(Mt,qt,7,0,6.3),x.fill();x.fillStyle="#fffbe0",x.beginPath(),x.arc(420,90,36,0,6.3),x.fill()}),S=new B(new wn(4.2,40),new Ee({map:M}));S.position.set(9,9,-14.85),i.add(S);const y=new B(new be(4.3,.34,8,40),ft(3810837));y.position.set(9,9,-14.7),i.add(y),n(8.6,.24,.3,9,9,-14.7,3810837),n(.24,8.6,.3,9,9,-14.7,3810837);const O=new B(new Ie(9,34),new Ee({color:16773824,transparent:!0,opacity:.1,blending:mn,depthWrite:!1,side:Te,fog:!1}));O.position.set(11.5,5,-7.5),O.rotation.set(-.95,-.3,.12),i.add(O),n(10.4,.45,3.6,-12,3.2,-12.6,11565637,{solide:!0});for(const[x,I]of[[-16.8,-14.1],[-7.2,-14.1],[-16.8,-11.1],[-7.2,-11.1]])n(.5,3.2,.5,x,1.6,I,8015920);n(9.6,.25,3,-12,1.2,-12.6,9264952),e.push({min:[-17.2,0,-14.4],max:[-6.8,3.5,-10.8]}),n(1.2,1.1,1.4,-17,3.95,-12.6,4871528),n(.35,.9,1.5,-16.2,4.05,-12.6,8095636);const L=Je(256,128,(x,I,z)=>{x.fillStyle="#d9b27a",x.fillRect(0,0,I,z),x.fillStyle="rgba(80,50,20,0.45)";for(let rt=6;rt<I;rt+=12)for(let Mt=6;Mt<z;Mt+=12)x.beginPath(),x.arc(rt,Mt,1.5,0,6.3),x.fill()}),P=new B(new Ie(12,6),new jt({map:L,roughness:.9}));P.position.set(-12,8.6,-14.88),i.add(P);const N=[[12.6,.3,0,3.1],[12.6,.3,0,-3.1],[.3,6.4,6.2,0],[.3,6.4,-6.2,0]];for(const[x,I,z,rt]of N)n(x,I,.3,-12+z,8.6+rt,-14.75,7031343);const T=10134704,E=new ee;E.add(Jt(new B(new Dt(.1,.12,2.6,8),ft(12159576)),{position:new D(0,0,0)})),E.add(Jt(new B(new Ht(1.3,.6,.5),ft(7239554)),{position:new D(0,1.4,0)})),E.position.set(-16,8.8,-14.6),i.add(E);const F=new ee;F.add(new B(new Dt(.14,.14,2.8,8),ft(T)));const Y=new B(new be(.42,.14,6,10,Math.PI*1.6),ft(T));Y.position.y=1.5,F.add(Y),F.position.set(-14.4,8.7,-14.6),F.rotation.z=.2,i.add(F);const H=new ns;H.moveTo(0,0),H.lineTo(3.4,.9),H.lineTo(3.4,-.9),H.closePath();const K=new B(new yi(H),new jt({color:13160664,side:Te,flatShading:!0}));K.position.set(-12.3,9.6,-14.6),K.rotation.z=-.5,i.add(K),n(.7,.4,.5,-12.1,9.9,-14.6,12600623);for(const[x,I]of[[-10.2,14035002],[-9.6,16756768],[-9,4165606]])s(.17,.17,.9,x,7.6,-14.6,I,8),s(.05,.05,1.4,x,6.55,-14.6,T,6);for(const[x,I,z]of[[-15.2,6.9,.2],[-13.4,6.6,-.15]]){const rt=new ee;for(const Mt of[-1,1]){const qt=new B(new Ht(.28,2.4,.2),ft(T));qt.rotation.z=Mt*.14,rt.add(qt);const Re=new B(new Ht(.34,1.2,.26),ft(14035002));Re.position.set(Mt*.34,-.95,0),Re.rotation.z=Mt*.14,rt.add(Re)}rt.position.set(x,I,-14.6),rt.rotation.z=z,i.add(rt)}for(const[x,I,z]of[[-8.4,8,16765517],[-7.7,6.9,16742981]]){const rt=new B(new be(.55,.22,8,16),ft(z));rt.position.set(x,I,-14.6),i.add(rt)}const q=new ee;q.add(Jt(new B(new Dt(.1,.1,2.2,8),ft(12159576)),{rotation:new Ke(0,0,Math.PI/2)})),q.add(Jt(new B(new Ht(.5,.9,.5),ft(7239554)),{position:new D(-1.1,.1,0)})),q.position.set(-14.5,3.62,-12),q.rotation.y=.6,i.add(q);for(const[x,I,z]of[[-9.4,-13.2,14035002],[-8.6,-12.4,4165606],[-10.2,-11.8,4052640]])s(.42,.42,.7,x,3.78,I,z,10),s(.3,.3,.12,x,4.2,I,14541802,10);const Q=new B(new Dt(.5,.5,1.1,10),new jt({color:13625583,transparent:!0,opacity:.45}));Q.position.set(-15.6,3.98,-13.4),i.add(Q);for(let x=0;x<12;x++){const I=new B(new Ht(.1,.45,.1),ft(11581632));I.position.set(-15.6+(t()-.5)*.6,3.7+t()*.5,-13.4+(t()-.5)*.6),I.rotation.set(t(),t(),t()),i.add(I)}s(.5,.5,.2,-10.5,3.52,-13.6,3817286);const ut=new B(new Dt(.08,.08,4,6),ft(3817286));ut.position.set(-10.5,5.5,-13.6),i.add(ut);const tt=new B(new Mi(.9,.9,12,1,!0),new jt({color:16756768,side:Te,emissive:16756768,emissiveIntensity:.4}));tt.position.set(-10.5,7.5,-13.2),tt.rotation.x=Math.PI,i.add(tt);function gt(x,I,z,rt=0,Mt=0){const qt=new ee;qt.add(new B(new Ht(3*z,3*z,3*z),ft(12159576)));for(const Re of[-1.35,1.35]){const tn=new B(new Ht(3.1*z,.3*z,3.1*z),ft(8015920));tn.position.y=Re*z,qt.add(tn)}for(const[Re,tn]of[[-1.35,-1.35],[1.35,-1.35],[-1.35,1.35],[1.35,1.35]]){const Xn=new B(new Ht(.3*z,3.1*z,.3*z),ft(8015920));Xn.position.set(Re*z,0,tn*z),qt.add(Xn)}qt.position.set(x,rt+1.5*z,I),qt.rotation.y=Mt,i.add(qt),e.push({min:[x-1.5*z,rt,I-1.5*z],max:[x+1.5*z,rt+3*z,I+1.5*z]})}gt(13.5,-11.2,1,0,.1),gt(16.8,-11.8,1,0,-.08),gt(15.2,-11.4,1,3,.2),gt(16.2,-7.4,.8,0,.3);function dt(x,I,z){const rt=new ee;rt.add(new B(new Dt(1.3,1.3,3.2,14),ft(z)));for(const Mt of[-1.1,1.1]){const qt=new B(new be(1.32,.09,6,16),ft(2830648));qt.rotation.x=Math.PI/2,qt.position.y=Mt,rt.add(qt)}rt.position.set(x,1.6,I),i.add(rt),e.push({min:[x-1.3,0,I-1.3],max:[x+1.3,3.2,I+1.3]})}dt(-18.2,6.2,4160176),dt(-16.4,8.4,11553338),n(3.4,1.6,1.7,-3.4,.8,-8.4,14035002,{solide:!0}),n(3.5,.2,1.8,-3.4,1.45,-8.4,15223378);const St=new B(new be(.7,.07,6,12,Math.PI),ft(2830648));St.position.set(-3.4,1.7,-8.4),i.add(St);const Pt=new ee;Pt.add(Jt(new B(new Dt(2.4,2.4,.4,20),ft(11041354)),{position:new D(0,.2,0)})),Pt.add(Jt(new B(new Dt(2.4,2.4,.4,20),ft(11041354)),{position:new D(0,2.6,0)})),Pt.add(Jt(new B(new Dt(1.2,1.2,2.4,14),ft(9264952)),{position:new D(0,1.4,0)})),Pt.position.set(5,0,-6.4),i.add(Pt),e.push({min:[2.6,0,-8.8],max:[7.4,2.8,-4]}),s(.5,.5,.7,5.6,3.15,-6.2,14035002,10),n(1,.7,1.4,4.4,3.2,-6.8,16765517),n(.4,11,7,19.6,5.5,4.5,7031343),n(.4,11,7,17.6,5.5,4.5,7031343);const Yt=[16742981,6013163,10216314,13081599,16765517,16734815];for(const x of[1.2,4.2,7.2,10.2]){n(2.6,.3,7,18.6,x,4.5,9264952);for(let I=0;I<6;I++){const z=Yt[(I+Math.floor(x))%6];I%2?s(.45,.45,.9+I%3*.3,18.6,x+.65+I%3*.1,1.9+I*.95,z,10):n(1.1,.9+I%2*.3,.8,18.6,x+.65,1.9+I*.95,z)}}e.push({min:[17.4,0,.9],max:[19.9,11,8.1]});for(const x of[-.9,.9]){const I=new B(new Ht(.28,12.5,.28),ft(12159576));I.position.set(-18.6,5.9,-4+x),I.rotation.z=-.13,i.add(I)}for(let x=0;x<9;x++){const I=new B(new Ht(.2,.2,2),ft(11041354));I.position.set(-19+x*.12,1.2+x*1.3,-4),i.add(I)}const ot=new ee;for(let x=0;x<6;x++){const I=new B(new be(.8-x*.02,.16,6,16),ft(14137466));I.position.z=x*.28,ot.add(I)}ot.position.set(-19.5,7,-10),ot.rotation.y=Math.PI/2,i.add(ot),s(.1,.1,.8,-19.7,8.1,-10,2830648,6).rotation.z=Math.PI/2;const it=new ee,ht=new B(new Dt(3,3.4,.8,20),ft(5531516));ht.position.y=.4,it.add(ht);const mt=new B(new Dt(2.4,2.4,6.4,24,1,!0),new jt({color:10478574,transparent:!0,opacity:.28,side:Te,roughness:.05}));mt.position.y=4,it.add(mt);const Et=new B(new Dt(2.3,2.3,.2,20),new jt({color:10478574,emissive:6013163,emissiveIntensity:.9}));Et.position.y=.9,it.add(Et);const Lt=new B(new Dt(2.7,2.2,1,20),ft(7243424));Lt.position.y=7.5,it.add(Lt);const Ut=new B(new Se(.4,12,12),new jt({color:16734815,emissive:16734815,emissiveIntensity:1}));Ut.position.y=9.2,it.add(Ut);const re=new B(new Dt(.1,.1,1.8,6),ft(7243424));re.position.y=8.4,it.add(re);const kt=new Rs(8382463,60,14);kt.position.y=3,it.add(kt);const ne=new B(new Dt(.5,2.1,6.4,24,1,!0),new Ee({color:8382463,transparent:!0,opacity:0,blending:mn,depthWrite:!1,side:Te}));ne.position.y=4.1,ne.visible=!1,it.add(ne);const W={position:new D(-1,0,-11),platY:1,ouvrirVerre(x){mt.position.y=4+x*5.6},alarme(x){Ut.material.color.setHex(x>0?16719390:16734815),Ut.material.emissive.setHex(x>0?16719390:16734815),kt.color.setHex(x>0?16726570:8382463),kt.intensity=60+x*340},secouer(x){it.position.set(-1+(Math.random()-.5)*x,0,-11+(Math.random()-.5)*x)},exploser(){it.visible=!1,_e.visible=!0,ne.visible=!1},reparer(){it.visible=!0,_e.visible=!1,it.position.set(-1,0,-11),mt.position.y=4,ne.visible=!1,Ut.material.color.setHex(16734815),Ut.material.emissive.setHex(16734815),kt.color.setHex(8382463),kt.intensity=60,Et.material.emissiveIntensity=.9},rayon(x){ne.visible=x>.01,ne.material.opacity=.34*Math.min(1.4,x),kt.intensity=60+x*260,Et.material.emissiveIntensity=.9+x*1.6}},_e=new ee;_e.add(Jt(new B(new Dt(3,3.4,.8,20),ft(2830134)),{position:new D(0,.4,0)})),_e.add(Jt(new B(new Dt(2.3,2.3,.2,16),ft(1316378)),{position:new D(0,.9,0)}));for(let x=0;x<6;x++){const I=x/6*6.28,z=new B(new Dt(.13,.17,1.6+t()*2.4,6),ft(4869976));z.position.set(Math.cos(I)*2.2,1.6,Math.sin(I)*2.2),z.rotation.set((t()-.5)*.9,0,(t()-.5)*.9),_e.add(z)}const $t=new B(new wn(6,28),new Ee({color:328965,transparent:!0,opacity:.55,depthWrite:!1}));$t.rotation.x=-Math.PI/2,$t.position.y=.05,_e.add($t),_e.position.set(-1,0,-11),_e.visible=!1,i.add(_e),it.position.set(-1,0,-11),i.add(it),e.push({min:[-4.4,0,-14.4],max:[2.4,9,-7.6]});const Kt=Je(256,256,(x,I)=>{x.fillStyle="#b8453a",x.fillRect(0,0,I,I);for(const[z,rt]of[[118,"#e8c9a0"],[96,"#2f6f8a"],[70,"#e8c9a0"],[46,"#b8453a"],[22,"#ffd24d"]])x.fillStyle=rt,x.beginPath(),x.arc(128,128,z,0,6.3),x.fill()}),Bt=new B(new wn(6,40),new jt({map:Kt,roughness:1}));Bt.rotation.x=-Math.PI/2,Bt.position.set(1,.03,4),i.add(Bt);for(const[x,I,z,rt]of[[-17,10.8,1.2,.3],[-14.2,11.4,.9,-.2],[-16.4,11,.8,.1]]){const Mt=new B(new Ht(2.4*z,1.8*z,2*z),ft(13148268));Mt.position.set(x,I===11?1.7:.9*z,I),Mt.rotation.y=rt,i.add(Mt),e.push({min:[x-1.2*z,0,I-z],max:[x+1.2*z,1.8*z,I+z]})}for(let x=0;x<5;x++){const I=new B(new Dt(.28,.28,3.4,8),ft(15327952));I.position.set(11+x*.6,1.5,11.5),I.rotation.set(.1,0,Math.PI/2-.5+x*.1),i.add(I)}const J=new ee;J.add(Jt(new B(new Dt(.06,.06,6,6),ft(2830648)),{position:new D(0,3,0)})),J.add(new B(new Mi(2.1,1.6,16,1,!0),new jt({color:4165482,side:Te,emissive:1923648,emissiveIntensity:.4}))),J.add(Jt(new B(new Se(.6,12,12),new Ee({color:16773832})),{position:new D(0,-.3,0)})),J.position.set(0,14.4,0),i.add(J);const st=Je(512,128,(x,I,z)=>{x.fillStyle="#cfc8b4",x.fillRect(0,0,I,z);for(let rt=0;rt<4;rt++){const Mt=rt*128+10;x.fillStyle="rgba(0,0,0,0.22)",x.fillRect(Mt,14,108,100),x.fillStyle="#e4dcc6",x.fillRect(Mt+4,18,100,92),x.fillStyle="rgba(255,255,255,0.4)",x.fillRect(Mt+4,18,100,3)}x.fillStyle="rgba(0,0,0,0.4)",x.fillRect(0,0,I,4),x.fillRect(0,z-4,I,4)}),A=new jt({map:st,roughness:.55,metalness:.15});for(let x=0;x<5;x++){const I=new B(new Ht(16,.3,1.9),A);I.position.set(0,11,13.4-x*1.95),i.add(I)}n(.8,10.3,.5,-8.4,5.15,14.7,5913894),n(.8,10.3,.5,8.4,5.15,14.7,5913894),n(17.6,.8,.5,0,10,14.7,5913894);const v=9081241;for(const x of[-1,1])n(.25,9.8,.3,x*8,4.9,14.2,v),n(.25,.25,9.6,x*8,10.7,9.6,v);const w=new B(new Dt(.2,.2,14.4,10),ft(v));w.rotation.z=Math.PI/2,w.position.set(0,10.8,14.1),i.add(w);for(let x=-6;x<=6;x++){const I=new B(new be(.34,.07,6,12),ft(5989488));I.rotation.y=Math.PI/2,I.position.set(x*.5-2.4,10.8,14.1),i.add(I)}n(2.2,1.3,1.2,5.8,12,14.3,4872810);const b=new B(new Se(.16,8,8),new jt({color:4052602,emissive:4052602,emissiveIntensity:1}));b.position.set(5.8,12,13.62),i.add(b),n(1,1.7,.16,10.2,4.2,14.9,15327952),s(.26,.26,.14,10.2,4.65,14.8,14035002,12).rotation.x=Math.PI/2,s(.26,.26,.14,10.2,3.8,14.8,4052602,12).rotation.x=Math.PI/2;const C=new B(new Ie(15.6,9),new Ee({color:16774864,transparent:!0,opacity:.2,blending:mn,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.set(0,.05,10.4),i.add(C),i.background=new te(9425906),i.fog=new Ma(13495024,90,230);const U=Je(16,256,(x,I,z)=>{const rt=x.createLinearGradient(0,0,0,z);rt.addColorStop(0,"#2f8fe0"),rt.addColorStop(.55,"#8fd9f2"),rt.addColorStop(.75,"#e6f6ee"),rt.addColorStop(1,"#e6f6ee"),x.fillStyle=rt,x.fillRect(0,0,I,z)}),V=new B(new Se(300,24,16),new Ee({map:U,side:Qe,fog:!1}));V.position.set(0,-20,60),i.add(V);const Z=Je(256,256,(x,I,z)=>{const rt=$i(21);x.fillStyle="#58b84a",x.fillRect(0,0,I,z);for(let Mt=0;Mt<900;Mt++)x.fillStyle=["#4aa83f","#66c455","#52b146"][Mt%3],x.fillRect(rt()*I,rt()*z,2,5+rt()*5);for(let Mt=0;Mt<26;Mt++)x.fillStyle=["#ffffff","#ffd24d","#ff8fbf"][Mt%3],x.beginPath(),x.arc(rt()*I,rt()*z,2.2,0,6.3),x.fill()},[40,28]),$=new B(new Ie(320,200),new jt({map:Z,roughness:1}));$.rotation.x=-Math.PI/2,$.position.set(0,-.03,114),i.add($),n(16,.3,1.2,0,0,15.6,10261640);for(let x=0;x<7;x++)n(4.4,.12,3.2,Math.sin(x*.9)*2.6,.04,20+x*5.2,12104356);for(let x=-60;x<=60;x+=3)n(.6,3.2,.3,x,1.6,52,15854034),n(3,.3,.2,x+1.5,2.2,52,15854034);const lt=new ee,nt=new B(new Se(1.5,16,12),ft(16734815,{flatShading:!1}));nt.position.set(-9,1.5,26),lt.add(nt);for(const x of[0,1]){const I=new B(new be(1.5,.12,6,20),ft(16777215));I.position.set(-9,1.5,26),I.rotation.set(x?Math.PI/2:0,x?0:.3,0),lt.add(I)}[[8,24,16742981,0],[10,24.6,6013163,.3],[9,24.2,16765517,-.2]].forEach(([x,I,z,rt],Mt)=>{const qt=new B(new Ht(1.8,1.8,1.8),ft(z));qt.position.set(x,.9+(Mt===2?1.8:0),I),qt.rotation.y=rt,lt.add(qt)});const ct=new ee;ct.add(Jt(new B(new Ht(4.2,1.4,2),ft(16756768)),{position:new D(0,1.3,0)})),ct.add(Jt(new B(new Ht(1.5,1.4,2),ft(14035002)),{position:new D(2.4,1.6,0)}));for(const[x,I]of[[-1.3,-1],[-1.3,1],[1.8,-1],[1.8,1]]){const z=new B(new Dt(.5,.5,.3,12),ft(2303531));z.rotation.x=Math.PI/2,z.position.set(x,.5,I),ct.add(z)}ct.position.set(-1,0,33),ct.rotation.y=.6,lt.add(ct);const vt=new B(new Dt(3.2,3.2,.6,20),ft(4165606));vt.position.set(14,.3,36),lt.add(vt);const Rt=new B(new Dt(2.9,2.9,.65,20),ft(15784352));Rt.position.set(14,.32,36),lt.add(Rt);const wt=new B(new Dt(.9,.7,1.2,10),ft(16748479));wt.position.set(15.2,1.2,36.6),lt.add(wt);const Wt=new B(new Ht(.2,.15,1.8),ft(6013163));Wt.position.set(13,.8,35),Wt.rotation.y=.5,lt.add(Wt);const Vt=new B(new Dt(1.1,1.1,.14,16),ft(10216314));Vt.position.set(-15,.1,40),lt.add(Vt);for(const x of[-1,1]){const I=new B(new Dt(.12,.12,8,6),ft(11553338));I.position.set(24+x*3.2,4,30),I.rotation.z=-x*.18,lt.add(I);const z=I.clone();z.position.z=33,lt.add(z)}const _t=new B(new Dt(.12,.12,7.6,6),ft(11553338));_t.rotation.z=Math.PI/2,_t.position.set(24,7.7,31.5),lt.add(_t);for(const x of[-1.2,1.2]){const I=new B(new Dt(.03,.03,6,4),ft(5592405));I.position.set(24+x,4.7,31.5),lt.add(I)}const G=new B(new Ht(2.6,.2,1),ft(16765517));G.position.set(24,1.7,31.5),lt.add(G),i.add(lt);for(let x=0;x<26;x++){const I=(t()-.5)*110,z=22+t()*26;if(Math.abs(I)<6&&z<50)continue;const rt=new B(new nn(1.2+t()*1.2,0),ft([4045656,3121228,5031520][x%3]));if(rt.position.set(I,.8,z),i.add(rt),x%2){const Mt=new B(new nn(.4,0),ft([16742981,16748479,16765517][x%3]));Mt.position.set(I+.4,1.9+t()*.8,z+.5),i.add(Mt)}}const bt=150,at=new Cs(new Dt(.7,1,9,6),ft(7031343),bt),pt=new Cs(new nn(1,0),ft(2789194),bt),Ct=new Cs(new nn(1,0),ft(4045656),bt),yt=new Oe;for(let x=0;x<bt;x++){let I=(t()-.5)*220;const z=62+t()*70,rt=.9+t()*.9;Math.abs(I-2)<17&&z<102&&(I+=I>2?22:-22),yt.rotation.set(0,t()*6,0),yt.position.set(I,4.5*rt,z),yt.scale.set(rt,rt,rt),yt.updateMatrix(),at.setMatrixAt(x,yt.matrix),yt.position.set(I,11*rt,z),yt.scale.set(5.5*rt,6.5*rt,5.5*rt),yt.updateMatrix(),pt.setMatrixAt(x,yt.matrix),yt.position.set(I+1.2*rt,15*rt,z-.8),yt.scale.set(3.6*rt,4.2*rt,3.6*rt),yt.updateMatrix(),Ct.setMatrixAt(x,yt.matrix)}i.add(at,pt,Ct);const Qt=Je(128,128,x=>{x.fillStyle="#fff6df",x.beginPath(),x.arc(64,64,62,0,6.3),x.fill(),x.fillStyle="#2b3138";for(let I=0;I<12;I++){const z=I/12*6.283;x.beginPath(),x.arc(64+Math.sin(z)*52,64-Math.cos(z)*52,I%3?2.5:4.5,0,6.3),x.fill()}}),ge=new ee;ge.add(new B(new be(1.7,.2,8,30),ft(7031343))),ge.add(new B(new wn(1.7,30),new Ee({map:Qt})));const Ue=new ee;Ue.add(Jt(new B(new Ht(.12,1,.05),ft(2830648)),{position:new D(0,.5,.05)}));const ce=new ee;ce.add(Jt(new B(new Ht(.08,1.4,.05),ft(14035002)),{position:new D(0,.7,.1)})),ge.add(Ue,ce),ge.position.set(-19.9,10,5),ge.rotation.y=Math.PI/2,i.add(ge);const rn=Je(512,256,(x,I,z)=>{x.fillStyle="#2c4a3e",x.fillRect(0,0,I,z),x.strokeStyle="rgba(255,255,255,.9)",x.fillStyle="rgba(255,255,255,.9)",x.lineWidth=4,x.lineCap="round",x.font="bold 34px sans-serif",x.fillText("PLAN SECRET",30,50),x.beginPath(),x.arc(110,110,22,0,6.3),x.stroke(),x.beginPath(),x.moveTo(110,132),x.lineTo(110,200),x.moveTo(110,150),x.lineTo(70,175),x.moveTo(110,150),x.lineTo(150,175),x.moveTo(110,200),x.lineTo(85,240),x.moveTo(110,200),x.lineTo(135,240),x.stroke(),x.beginPath(),x.moveTo(190,175),x.lineTo(330,175),x.lineTo(310,155),x.moveTo(330,175),x.lineTo(310,195),x.stroke(),x.beginPath(),x.arc(400,195,7,0,6.3),x.stroke(),x.beginPath(),x.moveTo(400,202),x.lineTo(400,222),x.moveTo(400,208),x.lineTo(390,216),x.moveTo(400,208),x.lineTo(410,216),x.stroke(),x.font="bold 22px sans-serif",x.fillText("ça rétrécit !",310,140)});n(.4,5.6,8.6,19.8,6.5,-4,7031343);const on=new B(new Ie(8,5),new jt({map:rn,roughness:.95}));on.position.set(19.55,6.5,-4),on.rotation.y=-Math.PI/2,i.add(on);const Tn=new ee;Tn.add(Jt(new B(new Dt(1.5,1.5,.25,18),ft(11041354)),{position:new D(0,3,0)})),Tn.add(Jt(new B(new Dt(.22,.4,3,8),ft(8015920)),{position:new D(0,1.5,0)})),Tn.add(Jt(new B(new Dt(1,.8,.55,12),ft(4876938)),{position:new D(0,3.4,0)})),Tn.add(Jt(new B(new Dt(.1,.18,1.5,6),ft(7031343)),{position:new D(0,4.35,0)}));for(const[x,I,z,rt,Mt]of[[0,5.5,0,.9,3121228],[-.7,5,.2,.6,4573013],[.7,5.1,-.2,.55,4573013]])Tn.add(Jt(new B(new nn(rt,0),ft(Mt)),{position:new D(x,I,z)}));Tn.position.set(13.5,0,-2.5),i.add(Tn),e.push({min:[12,0,-4],max:[15,3.2,-1]});const gn=new ee;gn.add(Jt(new B(new Ht(3,1.1,2),ft(4160176)),{position:new D(0,1.6,0)}));const xn=new B(new Dt(.75,.75,.35,14),ft(2830648));xn.rotation.x=Math.PI/2,xn.position.set(1.8,.75,0),gn.add(xn);for(const x of[-.7,.7])gn.add(Jt(new B(new Ht(2.6,.16,.16),ft(12159576)),{position:new D(-2.2,1.2,x)}));for(const x of[-.7,.7])gn.add(Jt(new B(new Ht(.16,1.2,.16),ft(8015920)),{position:new D(-.7,.6,x)}));for(const[x,I]of[[-.4,.3],[.3,-.4],[.5,.4]])gn.add(Jt(new B(new nn(.45,0),ft(16742981)),{position:new D(x,2.35,I)}));gn.position.set(-12.5,0,11.5),gn.rotation.y=.5,i.add(gn),e.push({min:[-15,0,9.5],max:[-10,2.4,13.5]});for(const[x,I,z]of[[-6.4,12.4,16742981],[-5.2,12.8,16748479],[6.6,12.5,16756768],[7.9,12.2,16748479]]){const rt=new B(new Dt(.7,.5,1,10),ft(12740924));rt.position.set(x,.5,I),i.add(rt),s(.04,.04,1.4,x,1.6,I,3116876,5);const Mt=new B(new nn(.55,0),ft(z));Mt.position.set(x,2.45,I),i.add(Mt);const qt=new B(new nn(.6,0),ft(4045656));qt.position.set(x,1.3,I),i.add(qt)}const An=new ee;An.add(Jt(new B(new Dt(.8,.9,1.5,12),ft(4045722)),{position:new D(0,.75,0)})),An.add(Jt(new B(new Dt(.14,.2,1.8,8),ft(4045722)),{position:new D(1.2,1.5,0),rotation:new Ke(0,0,-.9)}));const hs=new B(new be(.6,.08,6,12,Math.PI),ft(3119742));hs.position.set(-.1,1.5,0),An.add(hs),An.position.set(-3.4,0,11.6),An.rotation.y=-.4,i.add(An),e.push({min:[-4.8,0,10.6],max:[-2,1.6,12.6]});for(const[x,I,z,rt]of[[12.2,12,.4,14035002],[12.2,12,1.2,4165606],[13.6,12.2,.4,16765517]])s(.6,.6,.8,x,z,I,rt,12),s(.5,.5,.1,x,z+.45,I,14541802,12);e.push({min:[11.5,0,11.3],max:[14.3,1.6,12.9]});const ii=new B(new be(1,.45,8,18),ft(2303531));ii.rotation.x=Math.PI/2,ii.position.set(16.2,.46,11),i.add(ii);const si=ii.clone();si.position.y=1.36,i.add(si),e.push({min:[14.7,0,9.5],max:[17.7,1.8,12.5]});const Rn=new ee;for(const x of[-2.1,2.1]){const I=new B(new be(1.1,.09,6,22),ft(2303531));I.rotation.y=Math.PI/2,I.position.set(0,1.1,x),Rn.add(I)}const _n=(x,I,z)=>{const rt=new D().subVectors(I,x),Mt=new B(new Dt(.07,.07,rt.length(),6),ft(z));Mt.position.copy(x).addScaledVector(rt,.5),Mt.quaternion.setFromUnitVectors(new D(0,1,0),rt.normalize()),Rn.add(Mt)},fs=new D(0,1.1,-2.1),ds=new D(0,1.1,2.1),ps=new D(0,2.6,-.7),ms=new D(0,1.2,.2),Ur=new D(0,2.7,1.8);_n(fs,ps,14035002),_n(fs,ms,14035002),_n(ps,ms,14035002),_n(ps,new D(0,2.7,1.5),14035002),_n(ds,Ur,14035002),_n(ms,ds,14035002),Rn.add(Jt(new B(new Ht(.25,.1,.9),ft(2303531)),{position:new D(0,2.75,-.8)})),Rn.add(Jt(new B(new Ht(1.4,.1,.1),ft(2303531)),{position:new D(0,3,1.85)})),Rn.position.set(18.7,0,7),Rn.rotation.z=-.12,i.add(Rn);const R=[16765517,16742981,6013163,16748479,10216314];for(const x of[-6.5,6.5])for(let I=0;I<=28;I++){const z=I/28,rt=-18.5+z*37,Mt=11.2-Math.sin(z*Math.PI)*1.5,qt=new B(new Se(.13,8,6),new Ee({color:R[I%5]}));qt.position.set(rt,Mt,x),i.add(qt)}const k={z:1.2},et=Je(256,512,(x,I,z)=>{x.fillStyle="#2f78a8",x.fillRect(0,0,I,z),x.fillStyle="rgba(0,0,0,0.28)";for(const[Mt,qt,Re,tn]of[[26,250,90,110],[140,250,90,110],[26,380,90,110],[140,380,90,110]])x.fillRect(Mt,qt,Re,tn);x.fillStyle="#3d8dc2";for(const[Mt,qt,Re,tn]of[[32,256,78,98],[146,256,78,98],[32,386,78,98],[146,386,78,98]])x.fillRect(Mt,qt,Re,tn);x.fillStyle="#f5e9c8",x.beginPath(),x.arc(128,130,78,0,6.3),x.fill();const rt=x.createRadialGradient(128,130,4,128,130,70);rt.addColorStop(0,"#fff3b0"),rt.addColorStop(1,"#ffc65a"),x.fillStyle=rt,x.beginPath(),x.arc(128,130,68,0,6.3),x.fill(),x.strokeStyle="#f5e9c8",x.lineWidth=6,x.beginPath(),x.moveTo(128,62),x.lineTo(128,198),x.moveTo(60,130),x.lineTo(196,130),x.stroke()}),j=new ee;j.add(Jt(new B(new Ht(5.8,8.6,.5),ft(5913894)),{position:new D(0,4.3,.25)}));const X=Je(64,128,(x,I,z)=>{const rt=x.createLinearGradient(0,0,0,z);rt.addColorStop(0,"#fff4c8"),rt.addColorStop(.6,"#ffd890"),rt.addColorStop(1,"#e8a860"),x.fillStyle=rt,x.fillRect(0,0,I,z),x.fillStyle="rgba(120,70,30,.35)",x.fillRect(0,z-14,I,14)});j.add(Jt(new B(new Ie(4.6,7.7),new Ee({map:X})),{position:new D(0,3.95,.08)}));const xt=new ee;xt.position.set(-2.3,0,.45),xt.add(Jt(new B(new Ht(4.6,7.7,.3),new jt({map:et,roughness:.6})),{position:new D(2.3,3.95,0)}));const At=new B(new Se(.22,10,8),ft(14725184,{flatShading:!1}));At.position.set(3.9,3.7,.3),xt.add(At);const Ft=new B(new Dt(.14,.14,.12,10),ft(14725184));Ft.rotation.x=Math.PI/2,Ft.position.set(3.9,3.2,.17),xt.add(Ft);for(const x of[1.2,6.6])xt.add(Jt(new B(new Ht(.14,.7,.1),ft(2830648)),{position:new D(.15,x,.19)}));j.add(xt);const Nt=new B(new Ie(4.6,6),new Ee({color:16769696,transparent:!0,opacity:0,blending:mn,depthWrite:!1}));Nt.rotation.x=-Math.PI/2,Nt.position.set(0,.07,3.2),j.add(Nt);const Xt=Je(128,96,(x,I,z)=>{x.fillStyle="#f0dca8",x.fillRect(0,0,I,z),x.strokeStyle="#6b4a2f",x.lineWidth=5,x.strokeRect(3,3,I-6,z-6),x.fillStyle="#3a2615",x.font="bold 17px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("DÉMARRER",I/2,20),x.fillText("L'ANIMATION",I/2,76)});j.add(Jt(new B(new Ht(2,2.9,.25),ft(5913894)),{position:new D(-3.95,5.2,.13)})),j.add(Jt(new B(new Ie(1.7,1.28),new jt({map:Xt,roughness:.9})),{position:new D(-3.95,5.75,.27)}));const Zt=new jt({color:14035002,emissive:14035002,emissiveIntensity:.6,roughness:.4}),Ot=new B(new Dt(.42,.46,.22,20),Zt);Ot.rotation.x=Math.PI/2,Ot.position.set(-3.95,4.45,.38),j.add(Ot),j.add(Jt(new B(new be(.5,.06,8,20),ft(14725184)),{position:new D(-3.95,4.45,.27)}));const oe=Je(256,80,(x,I,z)=>{x.fillStyle="#c9a06c",x.fillRect(0,0,I,z),x.strokeStyle="#6b4a2f",x.lineWidth=6,x.strokeRect(3,3,I-6,z-6),x.fillStyle="#3a2615",x.font="bold 46px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("MAISON",I/2,z/2+2)});j.add(Jt(new B(new Ie(3.2,1),new jt({map:oe,roughness:.9})),{position:new D(0,9.4,.12)}));const le=new ee;le.add(Jt(new B(new Dt(.4,.4,.9,8),new jt({color:16769162,emissive:16760906,emissiveIntensity:.9})),{position:new D(0,0,0)})),le.add(Jt(new B(new Mi(.6,.4,8),ft(2830648)),{position:new D(0,.65,0)})),le.add(Jt(new B(new Ht(.15,.15,.5),ft(2830648)),{position:new D(0,0,-.35)})),le.position.set(3.7,6.2,.7);const xe=new Rs(16767392,40,16,1.8);xe.position.copy(le.position),xe.position.z+=.8,j.add(xe),j.add(le);const We=Je(256,128,(x,I,z)=>{x.fillStyle="#7a5030",x.fillRect(0,0,I,z),x.strokeStyle="#d7b87a",x.lineWidth=5,x.strokeRect(8,8,I-16,z-16),x.fillStyle="#f0dca8",x.font="bold 30px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("BIENVENUE",I/2,z/2+2)}),ae=new B(new Ie(4.4,2.2),new jt({map:We,roughness:1}));ae.rotation.x=-Math.PI/2,ae.position.set(0,.05,1.7),j.add(ae);const zt=new B(new Dt(.8,.6,1.2,10),ft(12740924));zt.position.set(-3.9,.6,1),j.add(zt);for(const[x,I,z,rt,Mt]of[[-3.9,2,1,.85,4045656],[-4.3,2.7,.8,.5,16742981],[-3.5,2.8,1.2,.5,16748479]])j.add(Jt(new B(new nn(rt,0),ft(Mt)),{position:new D(x,I,z)}));j.position.set(-20,0,k.z),j.rotation.y=Math.PI/2,i.add(j);const vn={ouvrir(x){xt.rotation.y=-x*1.75,Nt.material.opacity=.5*x},position:new D(-19.4,0,k.z)},fe=(x,I)=>x<-12&&I>-3.2&&I<5.8,an=(x,I,z=.8)=>!fe(x,I)&&!e.some(rt=>x>rt.min[0]-z&&x<rt.max[0]+z&&I>rt.min[2]-z&&I<rt.max[2]+z),Pe=(x=30)=>{for(let I=0;I<x;I++){const z=(t()-.5)*35,rt=-12.5+t()*24;if(an(z,rt))return[z,rt]}return null},Ve=[12159576,11041354,13213804,9264952];for(let x=0;x<9;x++){const I=Pe();if(!I)continue;const z=4+t()*4,rt=new B(new Ht(z,.26,.8+t()*.5),ft(Ve[x%4]));if(rt.position.set(I[0],.14,I[1]),rt.rotation.y=t()*3.14,i.add(rt),x%3===0){const Mt=new B(new Ht(z*.8,.26,.8),ft(Ve[(x+1)%4]));Mt.position.set(I[0]+.4,.41,I[1]+.3),Mt.rotation.y=t()*3.14,i.add(Mt)}}for(let x=0;x<16;x++){const I=Pe();if(!I)continue;const z=new B(new nn(.35+t()*.25,0),ft(16052192));z.position.set(I[0],.4,I[1]),z.rotation.set(t()*6,t()*6,t()*6),i.add(z)}for(let x=0;x<9;x++){const I=Pe();if(!I)continue;const z=new B(new Ie(1.6,2.1),new jt({color:x%3?16183778:12573938,roughness:1,side:Te}));z.rotation.set(-Math.PI/2,0,t()*6),z.position.set(I[0],.05+x*.004,I[1]),i.add(z)}const ri=[14035002,4165606,16765517,4045656,2830648];for(let x=0;x<9;x++){const I=Pe();if(!I)continue;const z=new B(new wn(.7+t()*1,14),new jt({color:ri[x%5],roughness:.4,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));z.rotation.x=-Math.PI/2,z.scale.set(1+t()*.8,1,1),z.rotation.z=t()*3,z.position.set(I[0],.06,I[1]),i.add(z)}{const x=Pe();if(x){const I=new B(new Dt(.7,.7,1.2,12),ft(4165606));I.rotation.z=Math.PI/2,I.position.set(x[0],.7,x[1]),I.rotation.y=.8,i.add(I);const z=new B(new wn(1.6,16),new jt({color:4165606,roughness:.3,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));z.rotation.x=-Math.PI/2,z.scale.set(1.5,1,.9),z.position.set(x[0]+.8,.07,x[1]+.5),i.add(z)}}for(let x=0;x<40;x++){const I=Pe();if(!I)continue;const z=new B(new Dt(.06,.06,.6+t()*.5,5),ft(x%3?11581632:13149002));if(z.rotation.set(Math.PI/2,0,t()*6),z.position.set(I[0],.08,I[1]),i.add(z),x%4===0){const rt=new B(new Dt(.2,.2,.16,6),ft(9081241));rt.position.set(I[0]+.5,.1,I[1]-.3),i.add(rt)}}for(let x=0;x<4;x++){const I=Pe();if(!I)continue;const z=new ee;z.add(Jt(new B(new Dt(.11,.11,2.4,8),ft(12159576)),{rotation:new Ke(0,0,Math.PI/2),position:new D(0,.12,0)})),z.add(Jt(new B(new Ht(.5,.5,.9),ft(x%2?14035002:7239554)),{position:new D(-1.2,.25,0)})),z.position.set(I[0],0,I[1]),z.rotation.y=t()*6,i.add(z)}for(let x=0;x<2;x++){const I=Pe();if(!I)continue;for(let rt=0;rt<3;rt++){const Mt=new B(new be(.9-rt*.2,.1,6,18),ft(x?16756768:2830648));Mt.rotation.x=Math.PI/2,Mt.position.set(I[0],.1+rt*.18,I[1]),i.add(Mt)}const z=new B(new be(2.2,.1,6,16,1.6),ft(x?16756768:2830648));z.rotation.x=Math.PI/2,z.position.set(I[0]+1.6,.1,I[1]+.4),z.rotation.z=t()*6,i.add(z)}for(let x=0;x<3;x++){const I=Pe();if(!I)continue;const z=new B(new be(.42,.18,8,14),ft([16765517,16742981,6013163][x]));z.rotation.x=Math.PI/2,z.position.set(I[0],.2,I[1]),i.add(z)}for(let x=0;x<4;x++){const I=Pe();if(!I)continue;const z=new B(new Mi(1.4+t()*.8,.7,9),ft(14729871));z.position.set(I[0],.3,I[1]),i.add(z);for(let rt=0;rt<5;rt++){const Mt=new B(new be(.28,.05,5,10,4.5),ft(15718312));Mt.rotation.set(t()*3,t()*3,t()*3),Mt.position.set(I[0]+(t()-.5)*3,.15,I[1]+(t()-.5)*3),i.add(Mt)}}for(let x=0;x<3;x++){const I=Pe();if(!I)continue;const z=new ee;z.add(Jt(new B(new Ht(2.4,1.6,2),ft(13148268)),{position:new D(0,.8,0)}));for(const rt of[-1,1])z.add(Jt(new B(new Ht(2.4,.08,1),ft(11569752)),{position:new D(0,1.9,rt*1.3),rotation:new Ke(rt*.9,0,0)}));z.position.set(I[0],0,I[1]),z.rotation.set(0,t()*6,(t()-.5)*.2),i.add(z)}for(let x=0;x<5;x++){const I=Pe();if(!I)continue;const z=new B(new Ht(1.3,.6,.65),ft(11883834));z.position.set(I[0],.3+(x===4?.6:0),I[1]),z.rotation.y=t()*6,i.add(z)}{const x=Pe();if(x){const I=new B(new Se(.5,12,10),ft(14217290,{flatShading:!1}));I.position.set(x[0],.5,x[1]),i.add(I)}}for(let x=0;x<7;x++){const I=Pe();if(!I)continue;const z=new B(new Ht(.7,.7,.7),ft([16742981,6013163,10216314,16765517][x%4]));z.position.set(I[0],.35,I[1]),z.rotation.y=t()*6,i.add(z)}for(let x=0;x<4;x++){const I=new B(new Ht(.9,7-x*.5,.25),ft(Ve[x]));I.position.set(-.8+x*1,3.4,-14.5+x*.05),I.rotation.z=.12+x*.03,I.rotation.x=-.12,i.add(I)}const ve=140,dn=new Float32Array(ve*3),Wn=[];for(let x=0;x<ve;x++)Wn.push([(t()-.5)*36,1+t()*14,(t()-.5)*26,t()*6.28]);const Xe=new Ar(new Ce().setAttribute("position",new ke(dn,3)),new Ns({map:Aa(),color:16773312,size:.5,transparent:!0,opacity:.7,blending:mn,depthWrite:!1}));Xe.frustumCulled=!1,i.add(Xe);function Cn(x){const I=Xe.geometry.attributes.position;Wn.forEach((z,rt)=>I.setXYZ(rt,z[0]+Math.sin(x*.2+z[3])*1.4,z[1]+Math.sin(x*.3+z[3])*.8,z[2]+Math.cos(x*.25+z[3])*1.2)),I.needsUpdate=!0,J.rotation.z=Math.sin(x*.6)*.012,Ut.material.emissiveIntensity=.4+Math.abs(Math.sin(x*2.2))*.9,O.material.opacity=.08+Math.sin(x*.4)*.025,Zt.emissiveIntensity=.45+Math.abs(Math.sin(x*3))*.9,ne.visible&&ne.scale.set(1+Math.sin(x*9)*.03,1,1+Math.sin(x*9)*.03),ce.rotation.z=-x*.6,Ue.rotation.z=-x*.05+1}return{scene:i,colliders:e,maj:Cn,depart:new D(1,0,3),porteMaison:{x:-18.6,z:k.z},maisonApi:vn,machineApi:W,limites:Fm,limiterCamera:Nm,nom:"Le grenier du professeur Mousse"}}const $e=(i,t={})=>ft(i,{flatShading:!1,roughness:.72,...t}),we=(i,t,e=16,n=12)=>new B(new Se(i,e,n),t),Kn=(i,t,e,n=6,s=12)=>new B(new es(i,t,n,s),e);function de(i,t,e,n,s=1,r=1,o=1){return i.position.set(t,e,n),i.scale.set(s,r,o),i}function Ol(i){const{jambe:t,torse:e,large:n,teteR:s,peau:r,cheveux:o,haut:a,bas:c,chaussure:l,enfant:u,lunettes:h=!1,moustache:f=!1,sac:d=!1,barbe:g=!1}=i,_=new ee,m=$e(r),p=$e(a),M=$e(c),S=$e(o,{roughness:.9}),y=$e(l),O=$e(16777215,{roughness:.5}),L=$e(new te(r).multiplyScalar(.82).getHex()),P=t,N=t+e,T=Kn(n*.86,e*.5,p);de(T,0,P+e*.5,0,1,1,.8),_.add(T);const E=we(n*.8,p);de(E,0,P+e*.2,n*.12,1,.8,.85),_.add(E);const F=new B(new Dt(n*.78,n*.82,.1,18),M);F.scale.z=.82,F.position.set(0,P+.03,0),_.add(F);const Y=new B(new Ht(.1,.07,.03),$e(14725184,{metalness:.5}));Y.position.set(0,P+.03,n*.66),_.add(Y);const H=new B(new be(s*.42,.045,8,18),p);H.rotation.x=Math.PI/2,H.position.set(0,N+.01,0),_.add(H);const K=new B(new Dt(s*.24,s*.28,.14,12),m);K.position.set(0,N+.04,0),_.add(K);const q=new ee;q.position.set(0,N+.05,0),_.add(q);const Q=s*.95;q.add(de(we(s,m,28,20),0,Q,0,1,.97,.96)),q.add(de(we(s*.7,m,20,14),0,Q-s*.4,s*.2,1,.78,.88));for(const it of[-1,1]){q.add(de(we(s*.28,m),it*s*.5,Q-s*.27,s*.6,1,.9,.7)),q.add(de(we(s*.19,m),it*s*.98,Q-.01,0,.45,1,.8)),q.add(de(we(s*.11,L),it*s*.99,Q-.01,.01,.35,.8,.6));const ht=u?1.18:.9,mt=it*s*.37,Et=Q+s*.05,Lt=s*.84;q.add(de(we(s*.21*ht,O),mt,Et,Lt,1,1.12,.55)),q.add(de(we(s*.125*ht,$e(4861724)),mt+it*.004,Et-.005,Lt+s*.08*ht,1,1,.5)),q.add(de(we(s*.07*ht,new Ee({color:1182213})),mt+it*.004,Et-.005,Lt+s*.105*ht,1,1,.5)),q.add(de(we(s*.035*ht,new Ee({color:16777215})),mt+.025,Et+.035,Lt+s*.13*ht)),q.add(de(we(s*.22*ht,L),mt,Et+s*.1*ht,Lt-.012,1,.38,.55));const Ut=Kn(s*.035,s*.24,S,4,8);Ut.rotation.z=Math.PI/2+it*(u?-.12:.05),Ut.position.set(mt,Et+s*.3,Lt-.005),q.add(Ut),u&&q.add(de(we(s*.09,new Ee({color:16748442,transparent:!0,opacity:.55})),it*s*.55,Q-s*.2,s*.8,1.3,.8,.3))}q.add(de(we(s*.13,m),0,Q-s*.14,s*.95,1,.9,.9)),q.add(de(we(s*.075,L),-s*.1,Q-s*.18,s*.9)),q.add(de(we(s*.075,L),s*.1,Q-s*.18,s*.9));const ut=new B(new be(s*.2,.014,6,16,Math.PI),new Ee({color:9059115}));ut.rotation.z=Math.PI,ut.position.set(0,Q-s*.36,s*.92),q.add(ut);const tt=de(we(s*.15,new Ee({color:4854800})),0,Q-s*.47,s*.9,1,1.15,.4);if(tt.visible=!1,q.add(tt),f)for(const it of[-1,1]){const ht=Kn(s*.05,s*.26,S,4,8);ht.rotation.z=Math.PI/2+it*.18,ht.position.set(it*s*.15,Q-s*.27,s*.95),q.add(ht)}if(g&&q.add(de(we(s*.72,new Ee({color:3877406,transparent:!0,opacity:.35}),20,14),0,Q-s*.4,s*.2,1.01,.8,.9)),h){for(const ht of[-1,1]){const mt=new B(new be(s*.24,.018,6,20),$e(2830648,{metalness:.4}));mt.position.set(ht*s*.37,Q+s*.05,s*.93),q.add(mt)}const it=new B(new Ht(s*.2,.02,.02),$e(2830648));it.position.set(0,Q+s*.08,s*.95),q.add(it)}const gt=new B(new Se(s*1.04,22,14,0,Math.PI*2,0,Math.PI*(u?.56:.5)),S);gt.position.set(0,Q+.01,-.03),gt.rotation.x=-.3,q.add(gt);const dt=u?[[0,.98,.1],[-.35,.92,.1],[.35,.92,.1],[-.7,.7,.05],[.7,.7,.05],[-.2,.85,-.3],[.25,.85,-.3],[0,.8,-.55]]:[[0,.95,.05],[-.4,.85,.05],[.4,.85,.05],[0,.8,-.4]];for(const[it,ht,mt]of dt){const Et=new B(new Mi(s*(u?.17:.13),s*(u?.55:.28),8),S);Et.position.set(it*s,Q+ht*s,mt*s),Et.rotation.set(.35+mt*.8,0,-it*1.2),q.add(Et)}for(const it of[-.6,-.3,0,.3,.6])q.add(de(we(s*.17,S,10,8),it*s,Q+s*.78,s*(.58-Math.abs(it)*.25),1,.7,.8));for(const it of[-1,1])q.add(de(new B(new Ht(.05,s*.34,.07),S),it*s*.9,Q-s*.02,s*.25));const St=e*.92,Pt=n*.27,Yt=[-1,1].map(it=>{const ht=new ee;ht.add(de(we(Pt*1.25,p),0,0,0)),ht.add(de(Kn(Pt,St*.34,p),0,-St*.26,0));const mt=new ee;mt.position.set(0,-St*.47,0),mt.rotation.x=-.12,ht.add(mt),mt.add(de(Kn(Pt*.8,St*.3,m),0,-St*.2,0));const Et=new ee;Et.position.set(0,-St*.53,.01),mt.add(Et),Et.add(de(we(Pt*.95,m),0,-.05,0,.9,1.1,.85)),Et.add(de(we(Pt*.4,m),it*Pt*.8,-0,Pt*.3));for(let Lt=0;Lt<4;Lt++)Et.add(de(Kn(Pt*.17,Pt*.5,m,3,6),(Lt-1.5)*Pt*.4,-Pt*1.2,Pt*.1));return ht.position.set(it*(n+Pt*.9),N-.07,0),ht.userData.main=Et,_.add(ht),ht}),ot=[-1,1].map(it=>{const ht=new ee;ht.add(de(Kn(n*.4,t*.3,M),0,-t*.26,0)),ht.add(de(we(n*.38,M),0,-t*.5,.02)),ht.add(de(Kn(n*.33,t*.26,M),0,-t*.7,0));const mt=de(we(n*.45,y),0,-t+.1,.07,1,.62,1.7);ht.add(mt),ht.add(de(we(n*.3,O),0,-t+.09,n*.58,1,.65,.9));const Et=new B(new Ht(n*.88,.05,n*1.55),O);Et.position.set(0,-t+.03,.09),ht.add(Et);for(let Lt=0;Lt<3;Lt++){const Ut=new B(new Ht(n*.5,.025,.035),O);Ut.position.set(0,-t+.17+Lt*.012,n*(.18+Lt*.1)),Ut.rotation.x=-.4,ht.add(Ut)}return ht.position.set(it*n*.46,P,0),_.add(ht),ht});if(d){const it=$e(3123310),ht=$e(2062928),mt=new B(new Ht(n*1.5,e*.9,.3),it);mt.position.set(0,P+e*.55,-n*.8),_.add(mt),_.add(de(we(n*.75,it),0,P+e*1,-n*.8,1,.45,.35));const Et=new B(new Ht(n*1,e*.35,.12),ht);Et.position.set(0,P+e*.35,-n*.8-.2),_.add(Et);const Lt=new B(new Ht(n*1,.02,.02),$e(16765517));Lt.position.set(0,P+e*.5,-n*.8-.26),_.add(Lt);const Ut=new B(new be(.12,.025,6,12,Math.PI),ht);Ut.position.set(0,P+e*1.1,-n*.8),_.add(Ut);for(const re of[-1,1]){const kt=new B(new Ht(.09,e*.9,.05),ht);kt.position.set(re*n*.52,P+e*.6,n*.1),kt.rotation.x=0,_.add(kt);const ne=new B(new Ht(.09,.05,n*1.7),ht);ne.position.set(re*n*.52,N-.02,-n*.3),_.add(ne)}}return _.userData={jambes:ot,bras:Yt,tete:q,bouche:tt,sourire:ut,mains:Yt.map(it=>it.userData.main),hauteurTete:N+.05+Q},_}function Bm({echelle:i=1}={}){const t=Ol({jambe:.58,torse:.52,large:.3,teteR:.4,peau:15316362,cheveux:4861724,haut:16747069,bas:3895221,chaussure:14035002,enfant:!0,sac:!0});return t.scale.setScalar(i),t}function zm({echelle:i=1}={}){const t=Ol({jambe:.86,torse:.78,large:.36,teteR:.3,peau:14986626,cheveux:3877406,haut:4039245,bas:7035464,chaussure:5913894,enfant:!1,lunettes:!0,moustache:!0,barbe:!0}),e=new B(new Ht(.2,.2,.04),$e(11569744));e.position.set(.2,1.35,.3),t.add(e);const n=new B(new Dt(.013,.013,.16,6),$e(14035002));return n.position.set(.22,1.47,.3),t.add(n),t.scale.setScalar(i),t}function Vc({grain:i=!1}={}){const t=new ee,e=ft(1907224,{flatShading:!1}),n=new B(new Se(.9,10,8),e);n.scale.set(1.5,1,1),n.position.set(-1.5,1.1,0);const s=new B(new Se(.62,10,8),e);s.position.set(0,1.2,0);const r=new B(new Se(.58,10,8),e);r.position.set(1,1.25,0),t.add(n,s,r);const o=[];for(let a=0;a<3;a++)for(const c of[-1,1]){const l=new B(new Dt(.06,.05,1.5,4),e);l.position.set(-.9+a*.9,.6,c*.5),l.rotation.x=c*.6,t.add(l),o.push({p:l,c,i:a})}for(const a of[-1,1]){const c=new B(new Dt(.04,.04,1.1,4),e);c.position.set(1.5,1.8,a*.3),c.rotation.set(a*.4,0,-.7),t.add(c)}if(i){const a=new B(new es(.34,1.3,4,8),ft(16776688,{flatShading:!1}));a.rotation.z=Math.PI/2,a.position.set(.3,2.35,0),t.add(a)}return t.userData.pattes=a=>{for(const{p:c,c:l,i:u}of o)c.rotation.z=Math.sin(a*9+u*2.1+(l>0?0:Math.PI))*.35},t}function Hm(){const i=new ee,t=new B(new Se(2.6,16,12,0,Math.PI*2,0,Math.PI/2),ft(14035002,{flatShading:!1}));t.scale.set(1.25,1,1),t.position.y=.6,i.add(t);const e=ft(1907224,{flatShading:!1}),n=new B(new Se(1,10,8),e);n.position.set(3.4,1,0),i.add(n);const s=new B(new Ht(.1,.1,5),e);s.position.set(0,3.2,0),s.rotation.y=Math.PI/2,s.visible=!1,i.add(s);for(const[r,o]of[[-1.4,1.2],[-1.4,-1.2],[.4,1.5],[.4,-1.5],[1.7,.8],[1.7,-.8]]){const a=new B(new Se(.46,8,6),e);a.position.set(r,Math.sqrt(Math.max(.1,6.76-(r/1.25)**2-o*o))+.35,o),i.add(a)}for(const r of[-1,1])for(let o=0;o<3;o++){const a=new B(new Dt(.1,.08,2.2,4),e);a.position.set(-1.2+o*1.5,.5,r*2.4),a.rotation.x=r*.9,i.add(a)}return i}const xi=3,Gi=.42*xi,Gc=1.8*xi,Vm=62,Gm=22;function km({scene:i,colliders:t,depart:e,limites:n,limiterCamera:s}){let r={scene:i,colliders:t,limites:n,limiterCamera:s};const o=Bm({echelle:xi});o.position.copy(e),i.add(o);const a=e.clone(),c=new D;let l=!0,u=0,h=0,f=2.6;const d={yaw:0,pitch:.42,distance:17};function g(P){return a.x+Gi>P.min[0]&&a.x-Gi<P.max[0]&&a.y+Gc>P.min[1]&&a.y<P.max[1]&&a.z+Gi>P.min[2]&&a.z-Gi<P.max[2]}function _(P,N){if(N){a[P]+=N;for(const T of r.colliders){if(!g(T))continue;const E=P==="x"?0:P==="y"?1:2;P==="y"?(N<0?(a.y=T.max[1],l=!0):a.y=T.min[1]-Gc,c.y=0):N>0?a[P]=T.min[E]-Gi-.001:a[P]=T.max[E]+Gi+.001}}}function m(P,N,T,E=0){o.parent&&o.parent.remove(o),r={scene:P.scene,colliders:P.colliders,limites:P.limites,limiterCamera:P.limiterCamera},r.scene.add(o),a.set(N,0,T),u=E,c.set(0,0,0),f=0,l=!0,o.position.copy(a),o.rotation.set(0,E,0)}function p(P,N,T){const E=N.actif("sprinter"),F=(N.actif("avancer")?1:0)-(N.actif("reculer")?1:0),Y=(N.actif("droite")?1:0)-(N.actif("gauche")?1:0),H=E?24:14,K=-Math.sin(d.yaw),q=-Math.cos(d.yaw),Q=K*F+Math.cos(d.yaw)*Y,ut=q*F-Math.sin(d.yaw)*Y,tt=Math.hypot(Q,ut),gt=tt>.01;if(gt){c.x=Q/tt*H,c.z=ut/tt*H;let Yt=Math.atan2(Q/tt,ut/tt)-u;for(;Yt>Math.PI;)Yt-=Math.PI*2;for(;Yt<-Math.PI;)Yt+=Math.PI*2;u+=Yt*Math.min(1,P*12)}else c.x=0,c.z=0;l&&N.vient("sauter")&&(c.y=Gm,l=!1),c.y-=Vm*P,l=!1,_("x",c.x*P),_("z",c.z*P),_("y",c.y*P),a.y<=0&&(a.y=0,c.y=0,l=!0),a.x=Math.min(r.limites.xMax,Math.max(r.limites.xMin,a.x)),a.z=Math.min(r.limites.zMax,Math.max(r.limites.zMin,a.z)),o.position.copy(a),o.rotation.y=u;const dt=o.userData;gt&&l&&(h+=P*(E?15:10));const St=gt&&l?Math.sin(h)*(E?.9:.6):0;return dt.jambes[0].rotation.x=St,dt.jambes[1].rotation.x=-St,dt.bras[0].rotation.x=-St*.9,dt.bras[1].rotation.x=St*.9,f>0&&!gt?(f-=P,dt.bras[1].rotation.z=-2.5+Math.sin(T*11)*.35,dt.bras[1].rotation.x=0,dt.tete.rotation.z=Math.sin(T*3)*.08):(f=Math.min(f,0),dt.bras[1].rotation.z=0,dt.tete.rotation.z=0),l||(dt.bras[0].rotation.x=-2.4,dt.bras[1].rotation.x=-2.4,dt.jambes[0].rotation.x=.4,dt.jambes[1].rotation.x=-.3),o.position.y+=gt&&l?Math.abs(Math.sin(h))*.06*xi:0,{bouge:gt,auSol:l,sprint:E}}function M(P,N){const T=d.distance,E=Math.cos(d.pitch);let F=a.x+Math.sin(d.yaw)*E*T,Y=a.y+1.5*xi+Math.sin(d.pitch)*T,H=a.z+Math.cos(d.yaw)*E*T;[F,Y,H]=r.limiterCamera(F,Y,H);const K=a.x,q=a.y+1.4*xi,Q=a.z,ut=(gt,dt,St)=>r.colliders.some(Pt=>gt>Pt.min[0]-.6&&gt<Pt.max[0]+.6&&dt>Pt.min[1]-.6&&dt<Pt.max[1]+.6&&St>Pt.min[2]-.6&&St<Pt.max[2]+.6);for(let gt=1;gt<=10;gt++){const dt=gt/10;if(ut(K+(F-K)*dt,q+(Y-q)*dt,Q+(H-Q)*dt)){const St=Math.max(.05,(gt-1)/10);F=K+(F-K)*St,Y=q+(Y-q)*St,H=Q+(H-Q)*St;break}}const tt=Math.min(1,N*9);P.position.x+=(F-P.position.x)*tt,P.position.y+=(Y-P.position.y)*tt,P.position.z+=(H-P.position.z)*tt,P.lookAt(a.x,a.y+1.4*xi,a.z)}function S(P,N,T=1){d.yaw-=P*.006*T,d.pitch=Math.min(1.25,Math.max(.08,d.pitch+N*.005*T))}function y(P){d.distance=Math.min(24,Math.max(7,d.distance+P*.015))}function O(P,N,T){a.set(P,0,N),u=T,c.set(0,0,0),f=0,o.position.copy(a),o.rotation.y=T}function L(P){return P!==void 0&&(d.yaw=P),{yaw:d.yaw,pitch:d.pitch,distance:d.distance}}return{hero:o,pos:a,maj:p,camera:M,tourner:S,zoom:y,etat:L,placer:O,changerMonde:m}}const Rr=[{id:"avancer",nom:"Avancer"},{id:"gauche",nom:"Aller à gauche"},{id:"reculer",nom:"Reculer"},{id:"droite",nom:"Aller à droite"},{id:"sauter",nom:"Sauter"},{id:"sprinter",nom:"Sprinter"},{id:"agir",nom:"Agir (bouton, porte)"},{id:"corde",nom:"Prendre la corde",bientot:!0}],Wm={avancer:["KeyW","ArrowUp"],gauche:["KeyA","ArrowLeft"],reculer:["KeyS","ArrowDown"],droite:["KeyD","ArrowRight"],sauter:["Space",null],sprinter:["ShiftLeft",null],agir:["KeyE",null],corde:[null,null]};function Dr(){return Object.fromEntries(Object.entries(Wm).map(([i,t])=>[i,[...t]]))}function Bl(i){const t=Dr();if(i&&typeof i=="object")for(const e of Rr){const n=i[e.id];Array.isArray(n)&&(t[e.id]=[0,1].map(s=>typeof n[s]=="string"&&n[s].length<24?n[s]:null))}return t}let Er=null;typeof navigator<"u"&&navigator.keyboard&&navigator.keyboard.getLayoutMap&&navigator.keyboard.getLayoutMap().then(i=>{Er=i}).catch(()=>{});const kc={Space:"Espace",ShiftLeft:"Maj",ShiftRight:"Maj",ControlLeft:"Ctrl",ControlRight:"Ctrl",AltLeft:"Alt",AltRight:"Alt",Enter:"Entrée",Tab:"Tab",Backspace:"Retour",ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→"};function zl(i){return i?kc[i]?kc[i]:Er&&Er.get(i)?Er.get(i).toUpperCase():i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):i.startsWith("Numpad")?"Pavé "+i.slice(6):i:""}function Xm(i){const t=new Set,e=new Set,n=new Set,s=new Set;let r=!1;const o=u=>{t.delete(u.code)},a=u=>{r||(t.has(u.code)||e.add(u.code),t.add(u.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(u.code)&&u.preventDefault())},c=()=>{t.clear(),e.clear()};return window.addEventListener("keydown",a),window.addEventListener("keyup",o),window.addEventListener("blur",c),{actif:u=>n.has(u)||(i()[u]||[]).some(h=>h&&t.has(h)),vient(u){const h=i()[u]||[];return s.has(u)||h.some(f=>f&&e.has(f))},finImage(){e.clear(),s.clear()},forcer(u,h){r||(h?n.add(u):n.delete(u))},declencher(u){r||s.add(u)},bloquer(u){r=u,u&&(c(),n.clear(),s.clear())},detruire(){window.removeEventListener("keydown",a),window.removeEventListener("keyup",o),window.removeEventListener("blur",c)}}}function qm(i,t,e,n){const s=Bl(i);for(const r of Rr)if(!r.bientot)for(let o=0;o<2;o++)s[r.id][o]===n&&(s[r.id][o]=null);return s[t][e]=n,s}const Ym={xMin:-118,xMax:118,zMin:-118,zMax:118},$m=new as,Zm=new Ke,Jm=new D,jm=new D;function Le(i,t,e,n=0,s=0,r=0,o=1,a=o,c=o){return new me().compose(Jm.set(i,t,e),$m.setFromEuler(Zm.set(n,s,r,"YXZ")),jm.set(o,a,c))}function xo(i,t,e,n){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new ya(s);return r.colorSpace=sn,n&&(r.wrapS=r.wrapT=Ds,r.repeat.set(n[0],n[1]),r.anisotropy=4),r}function Km(){const i=new bl,t=$i(4242),e=(w,b)=>w+t()*(b-w),n=[],s=10933934;i.background=new te(s),i.fog=new va(s,.0036),i.add(new Ul(15137500,4876858,1.05));const r=new Fl(16773312,1.5);r.position.set(90,220,60),i.add(r);const o=new D(0,0,0),a=(w,b,C=2,U=12)=>Math.hypot(w-o.x,b-o.z)>U&&!n.some(V=>w>V.min[0]-C&&w<V.max[0]+C&&b>V.min[2]-C&&b<V.max[2]+C),c=(w=40,b=112,C=36,U=2)=>{for(let V=0;V<w;V++){const Z=e(-b,b),$=e(-b,b);if(a(Z,$,U,C))return[Z,$]}return null},l=xo(1024,1024,(w,b)=>{const C=$i(7);w.fillStyle="#5a7f38",w.fillRect(0,0,b,b);const U=["#4a7030","#6a9444","#7a6a3e","#5f4a2e","#86a64a","#3f6a2c"];for(let V=0;V<700;V++)w.fillStyle=U[V%6],w.globalAlpha=.25+C()*.3,w.beginPath(),w.ellipse(C()*b,C()*b,8+C()*46,5+C()*30,C()*3,0,6.3),w.fill();w.globalAlpha=1;for(let V=0;V<4500;V++){w.strokeStyle=["#a08a4a","#c0a85a","#3b5a26","#8a7038"][V%4],w.lineWidth=1.2,w.globalAlpha=.5;const Z=C()*b,$=C()*b,lt=C()*6.3;w.beginPath(),w.moveTo(Z,$),w.lineTo(Z+Math.cos(lt)*(5+C()*12),$+Math.sin(lt)*(5+C()*12)),w.stroke()}w.globalAlpha=1;for(let V=0;V<260;V++)w.fillStyle=["#8e8c86","#a5a29a","#75736d"][V%3],w.beginPath(),w.ellipse(C()*b,C()*b,2+C()*5,1.5+C()*3.5,C()*3,0,6.3),w.fill();for(let V=0;V<80;V++)w.fillStyle=["#ffffff","#ffe27a","#ff9fc4"][V%3],w.beginPath(),w.arc(C()*b,C()*b,2.2,0,6.3),w.fill()},[14,14]),u=new B(new Ie(1400,1400),new jt({map:l,roughness:1}));u.rotation.x=-Math.PI/2,i.add(u);const h=xo(256,512,(w,b,C)=>{const U=$i(11);w.fillStyle="#5d4531",w.fillRect(0,0,b,C);for(let V=0;V<160;V++){w.strokeStyle=U()>.5?"rgba(30,18,10,.5)":"rgba(150,115,80,.35)",w.lineWidth=2+U()*5;const Z=U()*b;w.beginPath(),w.moveTo(Z,0),w.bezierCurveTo(Z+(U()-.5)*30,C*.3,Z+(U()-.5)*30,C*.6,Z+(U()-.5)*20,C),w.stroke()}for(let V=0;V<70;V++)w.fillStyle=`rgba(${70+U()*40},${120+U()*50},50,${.25+U()*.3})`,w.beginPath(),w.ellipse(U()*b,C*(.45+U()*.55),6+U()*26,10+U()*40,0,0,6.3),w.fill()},[3,6]),f=new jt({map:h,roughness:1});function d(w,b,C,U=!0){const V=new ee,Z=new B(new Dt(C*.82,C,700,18,1),f);Z.position.y=350,V.add(Z);const $=new B(new Dt(C,C*1.35,22,18,1),f);$.position.y=11,V.add($);for(let lt=0;lt<6;lt++){const nt=lt/6*6.28+t(),ct=new B(new es(C*.26,C*1.5,4,8),f);ct.position.set(Math.cos(nt)*C*1.35,3,Math.sin(nt)*C*1.35),ct.rotation.set(0,-nt,Math.PI/2-.2,"YXZ"),V.add(ct)}if(V.position.set(w,0,b),i.add(V),U){const lt=C*1.25;n.push({min:[w-lt,0,b-lt],max:[w+lt,700,b+lt]})}}for(let w=0;w<30;w++){const b=w/30*6.28+e(-.2,.2),C=e(64,110),U=Math.cos(b)*C,V=Math.sin(b)*C;Math.hypot(U-o.x,V-o.z)<58||d(U,V,e(16,30))}for(let w=0;w<40;w++){const b=t()*6.28,C=e(128,330);d(Math.cos(b)*C,Math.sin(b)*C,e(22,40),!1)}const g=new jt({color:9145734,roughness:1,flatShading:!0}),_=new jt({color:6199868,roughness:1,flatShading:!0});function m(w,b,C,U,V){const Z=new nn(1,2),$=Z.attributes.position;for(let ct=0;ct<$.count;ct++){const vt=$.getX(ct),Rt=$.getY(ct),wt=$.getZ(ct),Wt=.86+.2*Math.sin(vt*4.1+Rt*3.3+wt*5.7)*Math.cos(Rt*2.9-wt*3.7+vt*1.3);$.setXYZ(ct,vt*Wt,Rt*Wt,wt*Wt)}Z.computeVertexNormals();const lt=new B(Z,g);lt.scale.set(C,U,V),lt.position.set(w,U*.45,b),lt.rotation.y=t()*6,i.add(lt);const nt=new B(new Se(1,10,6,0,6.28,0,1),_);nt.scale.set(C*.9,U*.5,V*.9),nt.position.set(w,U*.75,b),nt.rotation.y=t()*6,i.add(nt),n.push({min:[w-C*.7,0,b-V*.7],max:[w+C*.7,U*1.2,b+V*.7]})}for(let w=0;w<26;w++){const b=c(60,112,48,12);b&&m(b[0],b[1],e(7,22),e(5,16),e(7,22))}for(let w=0;w<14;w++){const b=c(60,112,28,8);b&&m(b[0],b[1],e(3,5.5),e(2,3.2),e(3,5.5))}const p=new jt({map:h,roughness:1});for(let w=0;w<7;w++){const b=c(80,112,80,14);if(!b)continue;const C=e(50,90),U=e(6,11),V=w%2,Z=new B(new Dt(U,U*1.1,C,14),p);Z.rotation.z=V?0:Math.PI/2,Z.rotation.x=V?Math.PI/2:0,Z.position.set(b[0],U*.9,b[1]),i.add(Z);const $=new B(new wn(U*.98,14),new jt({color:13213804,roughness:1})),lt=C/2;$.position.set(b[0]+(V?0:lt+.05),U*.9,b[1]+(V?lt+.05:0)),$.rotation.y=V?0:Math.PI/2,i.add($);const nt=V?U:lt,ct=V?lt:U;n.push({min:[b[0]-nt,0,b[1]-ct],max:[b[0]+nt,U*1.8,b[1]+ct]})}const M=[];function S(w,b,C,U=.05){const V=w.index?w.toNonIndexed():w.clone();V.applyMatrix4(C),V.deleteAttribute("uv");const Z=V.attributes.position.count,$=new Float32Array(Z*3),lt=new te(b);lt.offsetHSL((t()-.5)*U,(t()-.5)*U,(t()-.5)*U);for(let nt=0;nt<Z;nt++)$.set([lt.r,lt.g,lt.b],nt*3);V.setAttribute("color",new ke($,3)),M.push(V)}const y=new Se(1,10,7),O=new Dt(1,1,1,8),L=new nn(1,1),P=new yi(Um,6);P.rotateX(-Math.PI/2);const N=[14038318,16747069,11037242,16748479,15253578];for(let w=0;w<26;w++){const b=c();if(!b)continue;const C=1+Math.floor(t()*4),U=N[w%5];for(let V=0;V<C;V++){const Z=b[0]+e(-9,9),$=b[1]+e(-9,9),lt=e(10,30)*(V?.7:1),nt=e(6,16)*(V?.75:1),ct=e(-.15,.15);S(O,16051416,Le(Z,lt/2,$,ct,0,ct,2.2+nt*.12,lt,2.2+nt*.12),.03);const vt=new Se(1,18,10,0,6.2832,0,Math.PI*.55);if(S(vt,U,Le(Z,lt-.5,$,ct,0,ct,nt,nt*.62,nt),.04),S(new wn(1,16).rotateX(Math.PI/2),15259824,Le(Z,lt-.6,$,ct,0,ct,nt*.98,1,nt*.98),.02),U===14038318||U===16747069)for(let Rt=0;Rt<9;Rt++){const wt=t()*6.28,Wt=e(.15,.95);S(y,16777215,Le(Z+Math.cos(wt)*nt*Math.sin(Wt)*.98,lt-.5+nt*.62*Math.cos(Wt)-.2,$+Math.sin(wt)*nt*Math.sin(Wt)*.98,0,0,0,nt*.13,nt*.05,nt*.13),.01)}}}const T=[16747051,16740261,16777215,11566335,16765517,16734815];for(let w=0;w<70;w++){const b=c();if(!b)continue;const C=b[0],U=b[1],V=e(35,85),Z=e(-.18,.18),$=t()*6.28,lt=T[w%6];S(O,4168261,Le(C+Math.sin(Z)*V*.5*Math.cos($),V/2,U+Math.sin(Z)*V*.5*Math.sin($),0,0,0,.9,V,.9),.05);const nt=C+Math.sin(Z)*V*Math.cos($),ct=U+Math.sin(Z)*V*Math.sin($),vt=e(5,9);for(let Rt=0;Rt<9;Rt++){const wt=Rt/9*6.28;S(y,lt,Le(nt+Math.cos(wt)*vt*.95,V+.4,ct+Math.sin(wt)*vt*.95,0,-wt,.15,vt*.62,vt*.17,vt*.32),.04)}S(y,16761370,Le(nt,V+1.2,ct,0,0,0,vt*.34),.03);for(let Rt=0;Rt<2;Rt++)S(y,4565068,Le(C+(Rt?5:-5),V*(.25+Rt*.2),U,0,0,Rt?-.7:.7,8,.8,2.6),.05)}for(let w=0;w<380;w++){const b=c(30,118,8);if(!b)continue;const C=e(.8,3.6),U=.45+t()*.25;S(L,new te(U,U*.98,U*.92),Le(b[0],C*.3,b[1],0,t()*6,0,C*1.2,C*.6,C),.02)}for(let w=0;w<120;w++){const b=c(30,118,8);if(!b)continue;const C=e(18,70),U=t()*6.28,V=e(.5,1.1);S(O,7031343,Le(b[0],V,b[1],Math.PI/2,U,0,V,C,V),.04),w%3===0&&S(O,7031343,Le(b[0]+Math.cos(U)*C*.2,V*1.3,b[1]-Math.sin(U)*C*.2,Math.PI/2,U+.6,0,V*.7,C*.4,V*.7),.04)}const E=[14254635,12735789,15250506,9416252,7049018,11027242];for(let w=0;w<220;w++){const b=c(30,118,8);if(!b)continue;const C=e(12,30);S(P,E[w%6],Le(b[0],.2+t()*.9,b[1],e(-.12,.12),t()*6.28,e(-.12,.12),C,C,C),.06)}for(let w=0;w<30;w++){const b=c(30,118,8);if(!b)continue;const C=e(2.5,4),U=t()*6;S(y,11894842,Le(b[0],C*.9,b[1],0,U,1.2,C*1.1,C*.8,C*.8),.03),S(y,7031338,Le(b[0]+Math.cos(U)*C*.55,C*1.05,b[1],0,U,1.2,C*.6,C*.7,C*.7),.03)}for(let w=0;w<60;w++){const b=c(30,118,24);if(!b)continue;const C=e(3.5,6);for(let U=0;U<3;U++){const V=U/3*6.28+.4;S(y,5222474,Le(b[0]+Math.cos(V)*C,6+C*.2,b[1]+Math.sin(V)*C,0,0,0,C*1.2,C*.25,C*1.2),.05)}S(O,4168261,Le(b[0],3,b[1],0,0,0,.5,6,.5),.03)}for(let w=0;w<140;w++){const b=c(30,118,8);if(!b)continue;const C=e(3,10);for(let U=0;U<4;U++)S(y,7319098,Le(b[0]+e(-C,C),C*.12,b[1]+e(-C,C),0,0,0,C*e(.5,1),C*.3,C*e(.5,1)),.08)}for(let w=0;w<18;w++){const b=c();if(!b)continue;const C=e(30,60);S(O,5417040,Le(b[0],C/2,b[1],0,0,0,.7,C,.7),.03);for(let U=0;U<34;U++){const V=F();S(O,16053486,Le(b[0]+V.x*6,C+V.y*6,b[1]+V.z*6,V.z*1.4,0,-V.x*1.4,.18,6,.18),.01)}S(y,15261888,Le(b[0],C,b[1],0,0,0,2.2),.01)}function F(){return new D(t()-.5,t()-.5,t()-.5).normalize()}function Y(w,b){const C=new ns,U=14;C.moveTo(0,0);for(let $=1;$<=U;$++){const lt=$/U,nt=b*Math.sin(Math.PI*Math.pow(lt,.7));C.lineTo(lt*w-1,nt*($%2?1:.55))}for(let $=U;$>=1;$--){const lt=$/U,nt=b*Math.sin(Math.PI*Math.pow(lt,.7));C.lineTo(lt*w-1,-nt*($%2?1:.55))}C.closePath();const V=new yi(C),Z=V.attributes.position;for(let $=0;$<Z.count;$++)Z.setZ($,-Math.pow(Z.getX($)/w,2)*w*.38);return V}const H=[Y(60,7),Y(80,9),Y(48,6)];for(let w=0;w<46;w++){const b=c(40,112,55);if(!b)continue;const C=7+Math.floor(t()*4),U=e(.7,1.1),V=[3116858,4038726,5026389][w%3];for(let Z=0;Z<C;Z++){const $=Z/C*6.28+t()*.4;S(H[Z%3],V,new me().multiplyMatrices(Le(b[0],.5,b[1],0,-$,0,U),new me().makeRotationZ(e(.55,1.15))),.06)}}const K=new B(Dm(M,!1),new jt({vertexColors:!0,roughness:.85,side:Te}));i.add(K);const q={value:0};function Q(){const b=[],C=[],U=[];for(let Z=0;Z<=6;Z++){const $=Z/6,lt=.5*(1-Math.pow($,1.6))+.02,nt=$*$*.35;b.push(-lt,$,nt,lt,$,nt);const ct=new te().lerpColors(new te(2910760),new te(10935390),Math.pow($,.8));if(C.push(ct.r,ct.g,ct.b,ct.r,ct.g,ct.b),Z<6){const vt=Z*2;U.push(vt,vt+1,vt+2,vt+1,vt+3,vt+2)}}const V=new Ce;return V.setAttribute("position",new he(b,3)),V.setAttribute("color",new he(C,3)),V.setIndex(U),V.computeVertexNormals(),V}const ut=new jt({vertexColors:!0,roughness:.8,side:Te});ut.onBeforeCompile=w=>{w.uniforms.uT=q,w.vertexShader=`uniform float uT;
${w.vertexShader}`.replace("#include <begin_vertex>",`vec3 transformed = vec3(position);
      float ph = instanceMatrix[3].x * 0.06 + instanceMatrix[3].z * 0.045;
      float amp = position.y * position.y;
      transformed.x += sin(uT * 1.6 + ph) * 2.4 * amp;
      transformed.z += cos(uT * 1.2 + ph * 1.3) * 1.2 * amp;`)};const tt=9e3,gt=new Cs(Q(),ut,tt),dt=new Oe;let St=0;const Pt=200;for(let w=0;w<Pt&&St<tt;w++){const b=c(40,112,52);if(!b)continue;const C=18+Math.floor(t()*30),U=e(5,14);for(let V=0;V<C&&St<tt;V++){const Z=t()*6.28,$=Math.sqrt(t())*U;dt.position.set(b[0]+Math.cos(Z)*$,0,b[1]+Math.sin(Z)*$),dt.rotation.set(e(-.3,.3),t()*6.28,e(-.3,.3));const lt=e(14,46);dt.scale.set(e(1.4,2.6),lt,1),dt.updateMatrix(),gt.setMatrixAt(St++,dt.matrix)}}gt.count=St,gt.frustumCulled=!1,i.add(gt);const Yt=new Cs(new Se(1,10,8),new jt({color:14677759,transparent:!0,opacity:.5,roughness:.05,metalness:.4}),400);for(let w=0;w<400;w++){const b=c(30,118,8);if(!b){dt.scale.setScalar(0),dt.updateMatrix(),Yt.setMatrixAt(w,dt.matrix);continue}const C=e(.8,2.2);dt.position.set(b[0],C*.7,b[1]),dt.rotation.set(0,0,0),dt.scale.set(C,C*.8,C),dt.updateMatrix(),Yt.setMatrixAt(w,dt.matrix)}i.add(Yt);const ot=[];for(let w=0;w<3;w++){const b=c(60,100,45);if(!b)continue;const C=e(18,34),U=new B(new wn(C,36),new jt({color:6269144,roughness:.05,metalness:.6,transparent:!0,opacity:.85}));U.rotation.x=-Math.PI/2,U.position.set(b[0],.25,b[1]),i.add(U);const V=new B(new zs(C,C+3.5,36),new jt({color:6969912,roughness:1}));V.rotation.x=-Math.PI/2,V.position.set(b[0],.2,b[1]),i.add(V);const Z=new B(new zs(.9,1,36),new Ee({color:16777215,transparent:!0,opacity:.5,side:Te}));Z.rotation.x=-Math.PI/2,Z.position.set(b[0],.32,b[1]),i.add(Z),ot.push({onde:Z,r:C,ph:t()*5})}const it=xo(256,256,(w,b)=>{w.strokeStyle="rgba(255,255,255,.85)",w.lineWidth=1.4;for(let C=0;C<14;C++){const U=C/14*6.28;w.beginPath(),w.moveTo(128,128),w.lineTo(128+Math.cos(U)*124,128+Math.sin(U)*124),w.stroke()}for(let C=14;C<124;C+=12){w.beginPath();for(let U=0;U<=14;U++){const V=U/14*6.28,Z=C+U%2*2,$=128+Math.cos(V)*Z,lt=128+Math.sin(V)*Z;U?w.lineTo($,lt):w.moveTo($,lt)}w.stroke()}for(let C=0;C<40;C++)w.fillStyle="rgba(220,245,255,.9)",w.beginPath(),w.arc(128+(Math.random()-.5)*220,128+(Math.random()-.5)*220,1.8,0,6.3),w.fill()});for(let w=0;w<4;w++){const b=c();if(!b)continue;const C=new B(new Ie(46,46),new Ee({map:it,transparent:!0,side:Te,depthWrite:!1}));C.position.set(b[0],30,b[1]),C.rotation.y=t()*3,i.add(C)}const ht=[],mt=3.6;for(let w=0;w<4;w++){const b=c(60,100,62);if(!b)continue;const C=e(14,28),U=w%2?1:-1;for(let V=0;V<6;V++){const Z=Vc({grain:V%2===0});Z.scale.setScalar(mt),i.add(Z),ht.push({f:Z,cx:b[0],cz:b[1],rayon:C,ph:V*.42,sens:U,vit:.07})}}for(let w=0;w<2;w++){const b=Vc({grain:w===0});b.scale.setScalar(mt),i.add(b),ht.push({f:b,cx:14,cz:-28,rayon:14,ph:w*1.1,sens:-1,vit:.09})}const Et=[];for(let w=0;w<3;w++){const b=c(60,100);if(!b)continue;const C=Hm();C.scale.setScalar(1.6),C.position.set(b[0],0,b[1]),i.add(C),Et.push({c:C,cx:b[0],cz:b[1],r:e(14,26),ph:t()*6})}const Lt=[],Ut=new ns;Ut.moveTo(0,0),Ut.bezierCurveTo(8,10,22,12,20,2),Ut.bezierCurveTo(22,-10,8,-12,0,0);for(let w=0;w<5;w++){const b=new ee,C=[16747051,16740261,7321599,16765517,11566335][w],U=[];for(const Z of[-1,1]){const $=new ee,lt=new B(new yi(Ut),new jt({color:C,side:Te,roughness:.6}));lt.rotation.x=-Math.PI/2,lt.scale.x=Z,lt.rotation.z=Z>0?0:Math.PI,$.add(lt),b.add($),U.push($),$.userData.c=Z}const V=new B(new es(1.4,9,4,8),new jt({color:3811866}));V.rotation.x=Math.PI/2,b.add(V),b.scale.setScalar(1.1),i.add(b),Lt.push({g:b,ailes:U,cx:e(-70,70),cz:e(-70,70),ph:t()*6,haut:e(40,90)})}const re=Aa(),kt=700,ne=new Float32Array(kt*3),W=[];for(let w=0;w<kt;w++)W.push([e(-120,120),e(4,160),e(-120,120),t()*6.28]);const _e=new Ar(new Ce().setAttribute("position",new ke(ne,3)),new Ns({map:re,color:16774856,size:2.2,transparent:!0,opacity:.8,blending:mn,depthWrite:!1}));_e.frustumCulled=!1,i.add(_e);const $t=60,Kt=new Float32Array($t*3),Bt=[];for(let w=0;w<$t;w++)Bt.push([e(-110,110),e(8,70),e(-110,110),t()*6.28]);const J=new Ar(new Ce().setAttribute("position",new ke(Kt,3)),new Ns({map:re,color:14221178,size:7,transparent:!0,opacity:.9,blending:mn,depthWrite:!1}));J.frustumCulled=!1,i.add(J);const st=[];for(let w=0;w<9;w++){const b=new B(new Ie(e(14,30),520),new Ee({color:16774336,transparent:!0,opacity:.07,blending:mn,depthWrite:!1,side:Te,fog:!1}));b.position.set(e(-90,90),240,e(-90,90)),b.rotation.set(0,t()*3,-.35),i.add(b),st.push({r:b,ph:t()*6})}function A(w){q.value=w;for(const b of ht){const C=(w*b.vit+b.ph)*b.sens,U=b.cx+Math.cos(C)*b.rayon,V=b.cz+Math.sin(C*1.3)*b.rayon*.7,Z=-Math.sin(C)*b.rayon*b.sens,$=Math.cos(C*1.3)*1.3*b.rayon*.7*b.sens;b.f.position.set(U,0,V),b.f.rotation.y=Math.atan2(-$,Z),b.f.userData.pattes(w+b.ph*7)}for(const b of Et){const C=w*.06+b.ph;b.c.position.set(b.cx+Math.cos(C)*b.r,0,b.cz+Math.sin(C)*b.r),b.c.rotation.y=-C-Math.PI/2+Math.PI}for(const b of Lt){const C=w*.25+b.ph,U=b.cx+Math.sin(C)*50,V=b.cz+Math.cos(C*.8)*40,Z=b.haut+Math.sin(C*2.3)*12;b.g.position.set(U,Z,V),b.g.rotation.y=Math.atan2(Math.cos(C)*50,-Math.sin(C*.8)*32)-Math.PI/2;const $=Math.sin(w*14+b.ph)*.9;b.ailes[0].rotation.z=$,b.ailes[1].rotation.z=-$}for(let b=0;b<kt;b++){const C=W[b];ne[b*3]=C[0]+Math.sin(w*.2+C[3])*8,ne[b*3+1]=C[1]+Math.sin(w*.3+C[3]*2)*4,ne[b*3+2]=C[2]+Math.cos(w*.25+C[3])*8}_e.geometry.attributes.position.needsUpdate=!0;for(let b=0;b<$t;b++){const C=Bt[b];Kt[b*3]=C[0]+Math.sin(w*.4+C[3])*14,Kt[b*3+1]=C[1]+Math.sin(w*.7+C[3]*3)*6,Kt[b*3+2]=C[2]+Math.cos(w*.35+C[3])*14}J.geometry.attributes.position.needsUpdate=!0,J.material.opacity=.65+Math.sin(w*3)*.25;for(const b of st)b.r.material.opacity=.05+Math.sin(w*.5+b.ph)*.025;for(const b of ot){const C=(w*.35+b.ph)%1;b.onde.scale.setScalar(2+C*b.r*.9),b.onde.material.opacity=.5*(1-C)}}return{nom:"La forêt, vue d’une fourmi (et même plus petit)",scene:i,colliders:n,limites:Ym,maj:A,depart:o,limiterCamera:(w,b,C)=>[Math.min(150,Math.max(-150,w)),Math.min(150,Math.max(1.2,b)),Math.min(150,Math.max(-150,C))]}}const _o=Symbol("annule"),Fe=i=>i<.5?2*i*i:1-(-2*i+2)**2/2,Gt=(i,t,e)=>new D(i,t,e);function Qm({scene:i,garage:t,joueur:e,moteur:n,son:s,voix:r,racine:o,clavier:a}){const{maisonApi:c,machineApi:l}=t,u=Aa();let h=!1,f=!1,d=0,g=null,_=null,m=null,p=i,M=0;const S=new Set,y=new Set,O=[],L={pos:Gt(0,0,0),look:Gt(0,0,0),posC:Gt(0,0,0),lookC:Gt(0,0,0)};o.insertAdjacentHTML("beforeend",`
    <div class="cine" id="cine" hidden>
      <div class="bande haut"></div><div class="bande bas"></div>
      <div class="sous-titre" id="st" hidden><b id="st-nom"></b><span id="st-texte"></span></div>
      <button class="bouton secondaire petit" id="cine-passer">Passer l'animation</button>
      <div class="flash" id="cine-flash"></div>
      <div class="noir" id="cine-noir"><p id="cine-carte"></p></div>
    </div>`);const P=J=>o.querySelector(J),N=P("#cine"),T=P("#st"),E=P("#cine-flash"),F=P("#cine-noir"),Y=()=>{if(f)throw _o};function H(J,st){return new Promise(A=>{if(f){A();return}S.add({t:0,dur:Math.max(.001,J),fn:st,res:A})}).then(Y)}const K=J=>H(J),q=(J,st,A=!1)=>{L.posC.copy(J),L.lookC.copy(st),A&&(L.pos.copy(J),L.look.copy(st))};function Q(J){if(h){d+=J;for(const st of[...S]){st.t+=J;const A=Math.min(1,st.t/st.dur);st.fn&&st.fn(A),A>=1&&(S.delete(st),st.res())}for(const st of[...y])st(J,d)===!1&&y.delete(st);m&&p===m.scene&&m.maj(d),L.pos.lerp(L.posC,1-Math.exp(-J*2.6)),L.look.lerp(L.lookC,1-Math.exp(-J*3.4)),n.camera.position.copy(L.pos),M>0&&(n.camera.position.x+=(Math.random()-.5)*M*1.2,n.camera.position.y+=(Math.random()-.5)*M*1.2,M=Math.max(0,M-J*1.4)),n.camera.lookAt(L.look)}}const ut=J=>{J.userData.jambes.forEach(st=>{st.rotation.x=0})};function tt(J,st,A,v=7,w=!0){const b=J.position,C=st-b.x,U=A-b.z,V=Math.hypot(C,U),Z=Math.atan2(C,U),$=b.x,lt=b.z,nt=J.rotation.y;let ct=Z-nt;for(;ct>Math.PI;)ct-=Math.PI*2;for(;ct<-Math.PI;)ct+=Math.PI*2;const vt=Math.max(.05,V/v),Rt=J.userData;return H(vt,wt=>{b.x=$+C*wt,b.z=lt+U*wt,J.rotation.y=nt+ct*Math.min(1,wt*vt/.35);const Wt=d*(v>7?14:10),Vt=Math.sin(Wt);Rt.jambes[0].rotation.x=Vt*.7,Rt.jambes[1].rotation.x=-Vt*.7,w&&(Rt.bras[0].rotation.x=-Vt*.55,Rt.bras[1].rotation.x=Vt*.55),b.y=Math.abs(Vt)*.09}).then(()=>{ut(J),b.y=0})}function gt(J,st,A,v=.5){const w=J.rotation.y;let b=Math.atan2(st-J.position.x,A-J.position.z)-w;for(;b>Math.PI;)b-=Math.PI*2;for(;b<-Math.PI;)b+=Math.PI*2;return H(v,C=>{J.rotation.y=w+b*Fe(C)})}function dt(J,st,A,v=.5){const w=J[st];return H(v,b=>{J[st]=w+(A-w)*Fe(b)})}const St=J=>J.localToWorld(Gt(0,J.userData.hauteurTete,.2));function Pt(J,st){const A=J.userData,v=(w,b)=>{if(!st.v)return A.bouche.visible=!1,A.sourire.visible=!0,!1;const C=Math.sin(b*16)>.1;return A.bouche.visible=C,A.sourire.visible=!C,!0};y.add(v)}async function Yt(J,st,A,v){P("#st-nom").textContent=J,P("#st-texte").textContent=A,T.hidden=!1;const w={v:!0};Pt(st,w),await r.dire(A,v),w.v=!1,Y(),T.hidden=!0,await K(.25)}const ot=J=>Yt("Papa",_,J,{pitch:.7,rate:.95}),it=(J,st={})=>Yt("Théo",e.hero,J,{pitch:1.95,rate:1.1,genre:"femme",...st});function ht(J,st=30,{couleur:A=16773792,vitesse:v=4,taille:w=.4,duree:b=1.2,gravite:C=2}={}){const U=new Float32Array(st*3),V=[];for(let ct=0;ct<st;ct++){U.set([J.x,J.y,J.z],ct*3);const vt=Gt(Math.random()-.5,Math.random()-.2,Math.random()-.5).normalize().multiplyScalar(v*(.3+Math.random()));V.push(vt)}const Z=new Ce;Z.setAttribute("position",new ke(U,3));const $=new Ar(Z,new Ns({map:u,color:A,size:w,transparent:!0,opacity:1,blending:mn,depthWrite:!1}));$.frustumCulled=!1;const lt=p;lt.add($),O.push($);let nt=0;y.add(ct=>{nt+=ct;for(let vt=0;vt<st;vt++)V[vt].y-=C*ct,U[vt*3]+=V[vt].x*ct,U[vt*3+1]+=V[vt].y*ct,U[vt*3+2]+=V[vt].z*ct;return Z.attributes.position.needsUpdate=!0,$.material.opacity=Math.max(0,1-nt/b),nt>=b?(lt.remove($),Z.dispose(),$.material.dispose(),!1):!0})}const mt=(J,st)=>H(st,A=>{E.style.opacity=String(J*Math.sin(Math.PI*Math.min(1,A)))}),Et=(J,st)=>{const A=Number(F.style.opacity||0);return H(st,v=>{F.style.opacity=String(A+(J-A)*v)})};function Lt(J,st){const A=new Set;return J.traverse(v=>{v.isMesh&&!v.material.transparent&&A.add(v.material)}),A.forEach(v=>{v.transparent=!0,v.opacity=0,v.needsUpdate=!0}),H(st,v=>{A.forEach(w=>{w.opacity=v})}).then(()=>{A.forEach(v=>{v.transparent=!1,v.opacity=1,v.needsUpdate=!0})})}function Ut(){const J=new ee,st=new jt({color:14690350,roughness:.45}),A=new B(new Se(.15,16,12),st);A.scale.set(1,.92,1),J.add(A);const v=new B(new Dt(.008,.01,.07,5),new jt({color:5913894}));v.position.y=.15,J.add(v);const w=new B(new Se(.05,8,6),new jt({color:4045656}));return w.scale.set(1.6,.3,.8),w.position.set(.05,.17,0),w.rotation.z=.4,J.add(w),J}function re(){const J=new ee;J.add(new B(new Ht(.09,.04,.17),new jt({color:2830648,roughness:.5})));const st=new B(new Dt(.018,.018,.02,8),new jt({color:16726843,emissive:16726843,emissiveIntensity:.8}));return st.position.set(0,.03,-.03),J.add(st),J}async function kt(){const J=e.hero,st=J.userData,A=_.userData,v=l.position;J.rotation.order="YXZ",A.bras[0].rotation.x=-.5,A.bras[1].rotation.x=-.25;const w=Ut();w.position.set(0,-.08,.1),A.mains[0].add(w),O.push(w);const b=re();b.position.set(0,-.06,.06),A.mains[1].add(b),O.push(b),q(Gt(-6.5,8,9.5),Gt(-15,3.8,1.2)),await tt(J,-10.5,1.2,9),await gt(J,-19,1.2,.5),_.position.set(-19.3,0,1.2),_.rotation.y=Math.PI/2,s.fx("porte"),await Promise.all([H(1.8,_t=>c.ouvrir(Fe(_t))),K(.5).then(()=>(_.visible=!0,Lt(_,.9)))]),await tt(_,-14.2,1.2,5,!1),q(Gt(-7.5,6.2,6.2),Gt(-12.6,4.4,1.2)),await ot("Regarde, fiston !"),await it("Papa ? Qu’est-ce que c’est ?"),await ot("J’ai créé une nouvelle machine, pour rétrécir les objets !"),await ot("Viens, je vais te la montrer avec cette pomme."),q(Gt(4.5,7.5,4),Gt(-5,3.5,-4)),H(1.4,_t=>c.ouvrir(1-Fe(_t))),await Promise.all([tt(_,-5.4,-5.6,8,!1),K(.7).then(()=>tt(J,-2.4,-4.6,8))]),await Promise.all([gt(_,v.x,v.z),gt(J,v.x,v.z)]),q(Gt(5.2,7,.5),Gt(-2.4,3.6,-8)),await ot("Regarde bien !"),A.bras[1].rotation.x=-1.4,s.fx("clic"),s.fx("machine"),ht(Gt(v.x,1.2,v.z),20,{couleur:8382463,vitesse:2,duree:2}),await H(2.2,_t=>l.ouvrirVerre(Fe(_t))),await H(.5,_t=>{A.bras[0].rotation.x=-.5-1.1*Fe(_t)}),await H(.25,_t=>{A.bras[0].rotation.x=-1.6-.7*_t}),i.attach(w);const C=w.position.clone(),U=Gt(v.x,l.platY+.4,v.z);H(.55,_t=>{A.bras[0].rotation.x=-2.3+1.8*Fe(_t)}),await H(.95,_t=>{w.position.lerpVectors(C,U,_t),w.position.y+=Math.sin(Math.PI*_t)*3.2,w.rotation.z=_t*5}),w.position.copy(U),await ot("Et maintenant, le rayon !"),s.fx("clic"),s.fx("rayon"),await H(.6,_t=>l.rayon(Fe(_t)));const V=w.scale.x;ht(U,40,{couleur:12580607,vitesse:3.5,duree:1.4}),await H(1.5,_t=>{w.scale.setScalar(V*(1-.7*Fe(_t))),w.position.y=l.platY+.4-.25*Fe(_t)}),s.fx("ding"),await H(.5,_t=>l.rayon(1-Fe(_t)*.55)),await ot("Ça marche ! Elle est toute petite !"),q(Gt(1.6,6.2,-.8),Gt(-2.4,4.4,-6.5));const Z=st.tete;ht(St(J),14,{couleur:16773312,vitesse:.8,taille:.3,duree:2.6,gravite:-.2}),s.fx("reniflement"),st.sourire.visible=!1,st.bouche.visible=!0,await Promise.all([dt(Z.rotation,"x",-.5,1.2),dt(J.rotation,"x",-.12,1.2),it("Ah… ah…",{rate:.6})]),gt(_,J.position.x,J.position.z,.5),await ot("Fiston ? Ça va ?"),s.fx("reniflement"),await it("Ah… ah… ah…",{rate:.5}),st.sourire.visible=!1,st.bouche.visible=!0,s.fx("atchoum"),r.dire("Atchoum !",{pitch:2,rate:1.3,genre:"femme"}),ht(St(J),50,{couleur:16777215,vitesse:6,taille:.45,duree:1,gravite:4}),q(Gt(2.8,5.2,-4.2),Gt(-1.6,3,-8.4));const $=J.position.clone();st.bras[0].rotation.x=-1.3,st.bras[1].rotation.x=-1.3,await H(.45,_t=>{Z.rotation.x=-.5+1.5*Fe(_t),J.rotation.x=-.12+.55*Fe(_t),J.position.set($.x+(-1.6-$.x)*Fe(_t),0,$.z+(-8.4-$.z)*Fe(_t))}),s.fx("rayon");const lt=J.position.clone(),nt=Gt(v.x,l.platY,v.z-.3);await Promise.all([H(.85,_t=>{J.position.lerpVectors(lt,nt,_t),J.position.y=nt.y*_t+Math.sin(Math.PI*_t)*3.4,J.rotation.x=.43*(1-_t),st.jambes[0].rotation.x=-.5,st.jambes[1].rotation.x=.5}),H(.85,_t=>{l.rayon(.45+_t)}),dt(Z.rotation,"x",0,.85)]),J.rotation.set(0,0,0),ut(J),st.bras.forEach(_t=>{_t.rotation.x=0}),q(Gt(3.4,3.8,-6.2),Gt(v.x,2.4,v.z)),s.fx("retrecir"),ht(Gt(v.x,3,v.z),70,{couleur:12580607,vitesse:5,taille:.5,duree:1.6}),mt(.95,1.1),await H(1.7,_t=>{J.scale.setScalar(3-2.7*Fe(_t)),l.rayon(1.4+Math.sin(_t*20)*.2)}),ht(Gt(v.x,1.6,v.z),40,{couleur:16773792,vitesse:3,duree:1.2}),st.sourire.visible=!0,st.bouche.visible=!1,await H(.7,_t=>l.rayon(1.4*(1-Fe(_t)))),q(Gt(-.2,1.7,-8.6),Gt(-3.4,5.2,-6.9)),gt(_,v.x,v.z,.3),A.bras[0].rotation.x=-1,A.bras[1].rotation.x=-1,tt(_,-3.3,-6.7,4,!1),await ot("Oh non ! Théo ! Mon fils ! Il est tout petit !"),q(Gt(v.x+1.4,1.9,v.z+3.2),Gt(v.x,1.2,v.z));let ct=!0;y.add((_t,G)=>ct?(st.bras[1].rotation.z=-2.5+Math.sin(G*11)*.35,!0):!1),await it("Papa ? Qu’est-ce qui m’arrive ?",{pitch:2.1}),ct=!1,st.bras[1].rotation.z=0,m||(m=Km(),n.renderer.compile(m.scene,n.camera)),q(Gt(5.6,7.2,-2.2),Gt(v.x,4.2,v.z)),s.fx("alarme");let vt=!0;y.add((_t,G)=>vt?(l.alarme(Math.sin(G*14)>0?1:.3),l.secouer(.25+.35*Math.min(1,(d-Rt)/3)),!0):!1);const Rt=d;l.rayon(.9),A.bras[0].rotation.x=-1.9,A.bras[1].rotation.x=-1.9,await ot("La machine surchauffe ! Elle va exploser !"),s.fx("alarme"),await it("Papa ! Aide-moi !",{pitch:2.1}),await K(.6),vt=!1;const wt=Gt(v.x,l.platY+.6,v.z);ne(wt),l.exploser(),l.alarme(0),q(Gt(7,6.5,1.5),Gt(v.x,4,v.z),!0),H(.9,_t=>{_.position.x=-3.3-2.2*Fe(_t),_.position.z=-6.7+2.4*Fe(_t),_.rotation.x=-.3*Math.sin(Math.PI*_t)});const Wt=new Tl([Gt(v.x,1.2,v.z),Gt(-.8,6,-8),Gt(-.3,7,0),Gt(0,6.6,10),Gt(0,6.2,18),Gt(.6,13,30),Gt(1.6,20,48),Gt(2.2,12,64),Gt(2.6,3.2,76)]),Vt=Gt(0,0,0);r.dire("Aaaaaah !",{pitch:2,rate:1.2,genre:"femme"}),s.fx("chute"),await K(.35),await H(3.6,_t=>{Wt.getPoint(Math.min(1,_t),Vt),J.position.copy(Vt),J.rotation.z=_t*14,J.rotation.x=_t*5,q(Gt(Vt.x-2+(_t>.6?6*(_t-.6):0),Vt.y+2.5,Vt.z-11),Gt(Vt.x,Vt.y,Vt.z))}),J.rotation.set(0,0,0),s.fx("atterrissage"),ht(Gt(J.position.x,.6,J.position.z),40,{couleur:13220234,vitesse:5,taille:1.2,duree:1.2,gravite:5}),await K(.5),mt(1,.9),await K(.35),W(),q(Gt(8,26,30),Gt(0,10,0),!0),J.position.set(0,70,0),J.rotation.set(0,0,0),s.fx("chute"),await H(1.1,_t=>{J.position.y=70*(1-_t*_t),J.rotation.x=_t*3}),J.rotation.x=0,s.fx("atterrissage"),ht(Gt(0,1,0),50,{couleur:13220234,vitesse:7,taille:2,duree:1.4,gravite:6}),H(.25,_t=>{J.scale.set(3*(1+.25*Math.sin(Math.PI*_t)),3*(1-.25*Math.sin(Math.PI*_t)),3*(1+.25*Math.sin(Math.PI*_t)))}),q(Gt(8,11,24),Gt(0,6,0)),await K(.8),dt(st.tete.rotation,"y",-.9,1).then(()=>dt(st.tete.rotation,"y",.9,1.6)),await it("Aïe… Où suis-je ? Tout est tellement grand !",{pitch:2.1}),await K(1.6),await Et(1,1.4),P("#cine-carte").textContent="À suivre…",P("#cine-carte").style.opacity="1",await K(3)}function ne(J){s.fx("explosion"),M=1.2,mt(1,.8);const st=new B(new Se(1,18,14),new Ee({color:16756800,transparent:!0,opacity:1,blending:mn,depthWrite:!1}));st.position.copy(J),i.add(st),O.push(st);const A=new B(new zs(.9,1.1,40),new Ee({color:16769696,transparent:!0,opacity:.8,side:Te,depthWrite:!1}));A.rotation.x=-Math.PI/2,A.position.set(J.x,.15,J.z),i.add(A),O.push(A);const v=new Rs(16752704,900,60,1.4);v.position.copy(J),i.add(v),O.push(v);let w=0;y.add(C=>{w+=C;const U=Math.min(1,w/.6);return st.scale.setScalar(1+9*Fe(U)),st.material.opacity=Math.max(0,1-w/.8),A.scale.setScalar(1+w*28),A.material.opacity=Math.max(0,.8-w*1.2),v.intensity=Math.max(0,900*(1-w/1.2)),w>1.3?(i.remove(st,A,v),!1):!0}),ht(J,90,{couleur:16752704,vitesse:22,taille:1.4,duree:1.6,gravite:12}),ht(J,50,{couleur:16773824,vitesse:30,taille:.9,duree:1,gravite:6});const b=[5531516,7243424,10478574,14035002,2830648];for(let C=0;C<34;C++){const U=C%3===0?new Dt(.2,.2,.8+Math.random()*1.4,6):new Ht(.4+Math.random()*1.2,.3+Math.random()*.8,.4+Math.random()*1.2),V=new B(U,new jt({color:b[C%5],roughness:.6,transparent:C%5===2,opacity:C%5===2?.5:1}));V.position.set(J.x,J.y+1+Math.random()*4,J.z),i.add(V),O.push(V);const Z=Math.random()*6.28,$=Gt(Math.cos(Z),0,Math.sin(Z)).multiplyScalar(5+Math.random()*14);$.y=8+Math.random()*20;const lt=Gt(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(14);let nt=0;y.add(ct=>(nt+=ct,$.y-=40*ct,V.position.addScaledVector($,ct),V.position.y<.3&&(V.position.y=.3,$.y*=-.35,$.x*=.6,$.z*=.6,lt.multiplyScalar(.6)),V.rotation.x+=lt.x*ct,V.rotation.y+=lt.y*ct,V.rotation.z+=lt.z*ct,nt>6?(i.remove(V),!1):!0))}for(let C=0;C<18;C++){const U=new B(new Se(1,10,8),new Ee({color:3815994,transparent:!0,opacity:.7,depthWrite:!1}));U.position.set(J.x+(Math.random()-.5)*3,J.y+Math.random()*2,J.z+(Math.random()-.5)*3),i.add(U),O.push(U);const V=(Math.random()-.5)*3,Z=(Math.random()-.5)*3;let $=Math.random()*-.4;y.add(lt=>($+=lt,$<0?!0:(U.position.x+=V*lt,U.position.z+=Z*lt,U.position.y+=(3+$)*lt,U.scale.setScalar(.8+$*1.5),U.material.opacity=Math.max(0,.55-$*.14),$>4?(i.remove(U),!1):!0)))}}function W(){p=m.scene,n.voir(m.scene),m.maj(d),e.changerMonde(m,m.depart.x,m.depart.z,0),e.hero.scale.setScalar(3),e.hero.rotation.order="YXZ"}function _e(){r.arreter();for(const A of O)A.parent&&A.parent.remove(A);O.length=0,S.clear(),y.clear(),_&&(i.remove(_),_.visible=!1);const J=e.hero,st=J.userData;J.scale.setScalar(3),J.rotation.order="XYZ",J.rotation.set(0,0,0),st.tete.rotation.set(0,0,0),st.sourire.visible=!0,st.bouche.visible=!1,st.bras.forEach(A=>A.rotation.set(0,0,0)),ut(J),c.ouvrir(0),l.ouvrirVerre(0),l.rayon(0),l.reparer(),p=i,n.voir(i),e.changerMonde(t,-12,1.2,-Math.PI/2),J.scale.setScalar(3),M=0,s.baisser(!1),E.style.opacity="0",F.style.opacity="0",P("#cine-carte").style.opacity="0",T.hidden=!0,N.hidden=!0,o.classList.remove("en-cine"),a.bloquer(!1),h=!1}const $t=J=>{J.reason===_o&&J.preventDefault()};async function Kt(){if(h)return;window.addEventListener("unhandledrejection",$t),h=!0,f=!1,d=0,s.baisser(!0),a.bloquer(!0),o.classList.add("en-cine"),N.hidden=!1,F.style.opacity="0",E.style.opacity="0",P("#cine-carte").style.opacity="0",_||(_=zm({echelle:3})),i.add(_),_.visible=!1,L.pos.copy(n.camera.position),L.look.set(e.pos.x,e.pos.y+4,e.pos.z),L.posC.copy(L.pos),L.lookC.copy(L.look);const J=new Promise(st=>{g=st});try{await Promise.race([kt().catch(st=>{if(st!==_o)throw st}),J])}catch(st){console.error(st)}_e(),setTimeout(()=>window.removeEventListener("unhandledrejection",$t),500)}function Bt(){if(h){f=!0;for(const J of S)J.res();r.arreter(),g&&g()}}return P("#cine-passer").addEventListener("click",Bt),{lancer:Kt,annuler:Bt,maj:Q,actif:()=>h}}function tg(i){const t=typeof window<"u"&&"speechSynthesis"in window&&typeof SpeechSynthesisUtterance<"u";if(t)try{speechSynthesis.getVoices(),speechSynthesis.addEventListener("voiceschanged",()=>speechSynthesis.getVoices())}catch{}const e=n=>{if(!t)return null;const s=speechSynthesis.getVoices().filter(c=>/^fr/i.test(c.lang)),r=s.some(c=>c.localService)?s.filter(c=>c.localService):s;if(!r.length)return null;const o=/thomas|daniel|male|homme|paul|henri/i,a=/amélie|amelie|audrey|aurélie|marie|julie|female|femme|virginie/i;return r.find(c=>(n==="homme"?o:a).test(c.name))||r[0]};return{disponible:()=>!!e("homme"),arreter(){if(t)try{speechSynthesis.cancel()}catch{}},dire(n,{pitch:s=1,rate:r=1,genre:o="homme"}={}){return new Promise(a=>{const c=1100+n.length*52,l=performance.now();let u=!1;const h=()=>{u||(u=!0,setTimeout(a,Math.max(0,c-(performance.now()-l))))},f=e(o),d=i();if(!t||d<=0){h();return}try{const g=new SpeechSynthesisUtterance(n);f&&(g.voice=f),g.lang=f?f.lang:"fr-FR",g.pitch=Math.min(2,s),g.rate=r,g.volume=d,g.onend=h,g.onerror=h,speechSynthesis.speak(g),setTimeout(h,12e3)}catch{h()}})}}}function eg(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}function ng({racine:i,clavier:t}){if(!eg())return{actif:!1};i.classList.add("tactile"),i.insertAdjacentHTML("beforeend",`
    <div class="tactile-ui" id="tactile-ui">
      <div class="joystick" id="joy"><div class="pouce" id="pouce"></div></div>
      <div class="boutons-tactiles">
        <button class="bt" id="t-sprint">Sprint</button>
        <button class="bt grand" id="t-saut">Sauter</button>
      </div>
    </div>
    <div class="tourne" id="tourne"><p>Tourne ton téléphone à l’horizontale pour jouer</p></div>`);const e=i.querySelector("#joy"),n=i.querySelector("#pouce"),s=56;let r=null,o={x:0,y:0};const a=(g,_)=>{t.forcer("droite",g>.3),t.forcer("gauche",g<-.3),t.forcer("reculer",_>.3),t.forcer("avancer",_<-.3)},c=g=>{let _=g.clientX-o.x,m=g.clientY-o.y;const p=Math.hypot(_,m);p>s&&(_=_/p*s,m=m/p*s),n.style.transform=`translate(${_}px, ${m}px)`,a(_/s,m/s)};e.addEventListener("pointerdown",g=>{g.preventDefault(),r=g.pointerId;const _=e.getBoundingClientRect();o={x:_.left+_.width/2,y:_.top+_.height/2};try{e.setPointerCapture(r)}catch{}c(g)}),e.addEventListener("pointermove",g=>{g.pointerId===r&&c(g)});const l=g=>{g.pointerId===r&&(r=null,n.style.transform="",a(0,0))};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l);const u=i.querySelector("#t-saut");u.addEventListener("pointerdown",g=>{g.preventDefault(),t.declencher("sauter"),t.forcer("sauter",!0)});const h=()=>t.forcer("sauter",!1);u.addEventListener("pointerup",h),u.addEventListener("pointercancel",h),u.addEventListener("pointerleave",h);const f=i.querySelector("#t-sprint");f.addEventListener("pointerdown",g=>{g.preventDefault(),t.forcer("sprinter",!0),f.classList.add("appuye")});const d=()=>{t.forcer("sprinter",!1),f.classList.remove("appuye")};return f.addEventListener("pointerup",d),f.addEventListener("pointercancel",d),f.addEventListener("pointerleave",d),{actif:!0,montrer(g){i.querySelector("#tactile-ui").style.display=g?"":"none"}}}function ig({reglages:i,surMenu:t,son:e}){const n=document.createElement("main");n.className="ecran jeu";const s=document.createElement("canvas");s.className="monde3d",n.appendChild(s),n.insertAdjacentHTML("beforeend",`
    <header class="barre-jeu"><span class="lieu">Le grenier du professeur Mousse</span><button class="bouton secondaire petit" id="btn-menu">Menu</button></header>
    <div class="indice" id="indice" hidden><button class="bouton gros moyen" id="btn-anim">Démarrer l'animation</button><span class="touche-agir" id="touche-agir"></span></div>
    <aside class="aide-touches" id="aide-touches"></aside>`);const r=n.querySelector("#indice"),o=Im(s),a=Om(),c=km({scene:a.scene,colliders:a.colliders,depart:a.depart,limites:a.limites,limiterCamera:a.limiterCamera}),l=Xm(()=>i().touches),u=tg(()=>i().voix),h=ng({racine:n,clavier:l}),f=Qm({scene:a.scene,garage:a,joueur:c,moteur:o,son:e,voix:u,racine:n,clavier:l}),d=()=>.25*16**i().sensibilite;let g=null;s.addEventListener("pointerdown",M=>{g||(g={x:M.clientX,y:M.clientY,id:M.pointerId},s.setPointerCapture(M.pointerId),s.classList.add("glisse"))}),s.addEventListener("pointermove",M=>{!g||M.pointerId!==g.id||(c.tourner(M.clientX-g.x,M.clientY-g.y,d()),g={x:M.clientX,y:M.clientY,id:M.pointerId})});const _=M=>{g&&M&&M.pointerId!==void 0&&M.pointerId!==g.id||(g=null,s.classList.remove("glisse"))};s.addEventListener("pointerup",_),s.addEventListener("pointercancel",_),s.addEventListener("wheel",M=>{M.preventDefault(),c.zoom(M.deltaY)},{passive:!1});const m=M=>{M.code==="Escape"&&!document.getElementById("dlg").open&&(M.preventDefault(),f.actif()?f.annuler():t())};window.addEventListener("keydown",m);function p(){const M=i().touches,S=y=>zl((M[y]||[]).find(Boolean))||"-";n.querySelector("#touche-agir").textContent=S("agir")!=="-"?`ou touche ${S("agir")}`:"",n.querySelector("#aide-touches").innerHTML=`<b>${S("avancer")} ${S("gauche")} ${S("reculer")} ${S("droite")}</b> bouger<span class="sep"></span><b>${S("sauter")}</b> sauter<span class="sep"></span><b>${S("sprinter")}</b> sprinter<span class="sep"></span><b>Souris</b> tourner la caméra`}return p(),n.querySelector("#btn-menu").addEventListener("click",t),o.camera.position.set(1,9,14),n.querySelector("#btn-anim").addEventListener("click",()=>f.lancer()),o.definir(a.scene,(M,S)=>{if(a.maj(M),f.actif()){f.maj(S),l.finImage();return}h.actif&&h.montrer(!0),c.maj(S,l,M),c.camera(o.camera,S);const y=a.porteMaison,O=Math.hypot(c.pos.x-y.x,c.pos.z-(y.z+2))<8;r.hidden=!O,O&&l.vient("agir")&&f.lancer(),l.finImage()}),{element:n,majAide:p,bloquer:M=>l.bloquer(M),animation:f,detruire(){f.annuler(),u.arreter(),l.detruire(),window.removeEventListener("keydown",m)},moteur:o,joueur:c,garage:a}}const Wc=i=>440*2**((i-69)/12),Xc=[62,64,66,69,71,74,76];function sg(){let i=null,t,e,n,s,r=null,o=0,a=0;const c={musique:.6,ambiance:.6,effets:.8};let l=!1;function u(){if(i)return;i=new(window.AudioContext||window.webkitAudioContext);const M=i.createDynamicsCompressor();M.connect(i.destination),t=i.createGain(),e=i.createGain(),n=i.createGain();for(const Q of[t,e,n])Q.connect(M);s=i.createBuffer(1,i.sampleRate*3,i.sampleRate);const S=s.getChannelData(0);for(let Q=0;Q<S.length;Q++)S[Q]=Math.random()*2-1;const y=d(),O=i.createBiquadFilter();O.type="lowpass",O.frequency.value=520;const L=i.createGain();L.gain.value=.35;const P=i.createOscillator();P.frequency.value=.09;const N=i.createGain();N.gain.value=.22,P.connect(N),N.connect(L.gain),P.start(),y.connect(O),O.connect(L),L.connect(e);const T=d(),E=i.createBiquadFilter();E.type="bandpass",E.frequency.value=2200,E.Q.value=.7;const F=i.createGain();F.gain.value=.16;const Y=i.createOscillator();Y.frequency.value=.37;const H=i.createGain();H.gain.value=.05,Y.connect(H),H.connect(F.gain),Y.start(),T.connect(E),E.connect(F),F.connect(e);const K=i.createDelay(1);K.delayTime.value=.42;const q=i.createGain();q.gain.value=.38,K.connect(q),q.connect(K),K.connect(t),t.echo=K,g()}let h=null;function f(){if(!h)try{h=new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA="),h.loop=!0,h.volume=.01,h.play().catch(()=>{}),document.addEventListener("visibilitychange",()=>{!document.hidden&&i&&i.state!=="running"&&i.resume().catch(()=>{})})}catch{}}function d(){const M=i.createBufferSource();return M.buffer=s,M.loop=!0,M.start(0,Math.random()*2),M}function g(){if(!i)return;const M=i.currentTime;t.gain.setTargetAtTime(c.musique*.55*(l?.25:1),M,.15),e.gain.setTargetAtTime(c.ambiance*.5*(l?.25:1),M,.15),n.gain.setTargetAtTime(c.effets*1,M,.05)}function _(M,S,y,O,L,P,N=!1){const T=i.createOscillator(),E=i.createGain();T.type=M,T.frequency.setValueAtTime(S,y),E.gain.setValueAtTime(1e-4,y),E.gain.exponentialRampToValueAtTime(L,y+.015),E.gain.exponentialRampToValueAtTime(1e-4,y+O),T.connect(E),E.connect(P),N&&t.echo&&E.connect(t.echo),T.start(y),T.stop(y+O+.05)}function m(M){const S=2300+Math.random()*1500,y=i.createStereoPanner();y.pan.value=Math.random()*1.6-.8,y.connect(e);const O=2+Math.floor(Math.random()*4);for(let L=0;L<O;L++){const P=i.createOscillator(),N=i.createGain();P.type="sine",P.frequency.setValueAtTime(S*(1+L*.07),M+L*.11),P.frequency.exponentialRampToValueAtTime(S*(1.2+L*.07),M+L*.11+.09),N.gain.setValueAtTime(1e-4,M+L*.11),N.gain.exponentialRampToValueAtTime(.1,M+L*.11+.01),N.gain.exponentialRampToValueAtTime(1e-4,M+L*.11+.1),P.connect(N),N.connect(y),P.start(M+L*.11),P.stop(M+L*.11+.12)}}function p(){const M=i.currentTime;for(;o<M+.4;){const S=Xc[Math.floor(Math.random()*Xc.length)]-(Math.random()<.25?12:0);_("triangle",Wc(S),o,1.8,.16,t,!0),_("sine",Wc(S+12),o,1.2,.05,t,!0),o+=.55+Math.random()*1.1}M>=a&&(m(M+.05),a=M+3+Math.random()*7)}return{appliquer(M){Object.assign(c,M),g()},baisser(M){l=M,g()},async demarrer(){try{u(),i.state==="suspended"&&await i.resume(),f(),r||(o=i.currentTime+.3,a=i.currentTime+2,r=setInterval(p,80))}catch{}},clic(){i&&i.state==="running"&&(_("sine",660,i.currentTime+.01,.18,.2,n),_("sine",990,i.currentTime+.07,.22,.15,n))},magie(){i&&i.state==="running"&&[523,659,784,1047].forEach((M,S)=>_("triangle",M,i.currentTime+.02+S*.09,.7,.14,n))},fx(M){if(!i)return;i.state==="suspended"&&i.resume().catch(()=>{});const S=i.currentTime+.02,y=(P,N,T,E,F,Y,H)=>_(P,N,T,E,Math.min(1,F*1.7),Y,H),O=(P,N,T,E,F=1)=>{const Y=Math.min(1,E*1.7),H=i.createBufferSource();H.buffer=s;const K=i.createBiquadFilter();K.type="bandpass",K.Q.value=F,K.frequency.setValueAtTime(P,S),K.frequency.exponentialRampToValueAtTime(N,S+T);const q=i.createGain();q.gain.setValueAtTime(1e-4,S),q.gain.exponentialRampToValueAtTime(Y,S+.03),q.gain.exponentialRampToValueAtTime(1e-4,S+T),H.connect(K),K.connect(q),q.connect(n),H.start(S,Math.random()*2),H.stop(S+T+.05)},L=(P,N,T,E,F)=>{const Y=Math.min(1,F*1.7),H=i.createOscillator(),K=i.createGain();H.type=P,H.frequency.setValueAtTime(N,S),H.frequency.exponentialRampToValueAtTime(T,S+E),K.gain.setValueAtTime(1e-4,S),K.gain.exponentialRampToValueAtTime(Y,S+.05),K.gain.exponentialRampToValueAtTime(1e-4,S+E),H.connect(K),K.connect(n),H.start(S),H.stop(S+E+.05)};if(M==="porte"&&(L("sawtooth",170,95,1.4,.16),L("square",340,190,1.4,.07),y("square",90,S+1.45,.12,.18,n)),M==="clic"&&(y("square",1400,S,.05,.12,n),y("square",900,S+.06,.07,.1,n)),M==="machine"&&(L("sawtooth",70,220,2.2,.14),L("triangle",140,440,2.2,.1),O(300,1200,2.2,.15,.6)),M==="rayon"&&(L("sawtooth",220,880,.6,.12),O(2e3,5e3,1.2,.12,2),L("sine",880,880,1.6,.06)),M==="ding"&&(y("triangle",1568,S,.9,.2,n,!0),y("triangle",2093,S+.1,.9,.14,n,!0)),M==="reniflement"&&O(900,2600,.35,.22,3),M==="atchoum"&&(O(4500,600,.38,.9,.8),L("sine",160,50,.3,.5)),M==="retrecir"&&(L("sine",1600,140,1.5,.22),L("triangle",2400,300,1.5,.12),O(6e3,800,1.5,.2,1.5)),M==="alarme")for(let P=0;P<6;P++)y("square",P%2?660:880,S+P*.28,.2,.12,n);M==="explosion"&&(O(900,60,1.6,1,.5),O(200,40,2.2,.9,.4),L("sine",110,28,1.4,.9),L("sawtooth",220,40,.8,.25)),M==="chute"&&(L("sine",1800,300,1.4,.18),O(3e3,800,1.4,.1,1.2)),M==="atterrissage"&&(L("sine",150,45,.25,.6),O(1500,300,.25,.3,.8)),M==="pas"&&y("sine",90,S,.1,.15,n)},etat(){return{actif:!!i&&i.state==="running",musique:!!r}}}}const Hl="bonsai-reglages",pi={musique:.6,ambiance:.6,effets:.8,voix:.9,feuilles:!0,sensibilite:.5,qualite:"normale",touches:Dr()},Es=(i,t,e,n)=>Number.isFinite(i)?Math.min(e,Math.max(t,i)):n;function Vl(i){const t=i&&typeof i=="object"?i:{};return{musique:Es(t.musique,0,1,pi.musique),ambiance:Es(t.ambiance,0,1,pi.ambiance),effets:Es(t.effets,0,1,pi.effets),voix:Es(t.voix,0,1,pi.voix),feuilles:t.feuilles!==!1,sensibilite:Es(t.sensibilite,0,1,pi.sensibilite),qualite:["basse","normale"].includes(t.qualite)?t.qualite:pi.qualite,touches:Bl(t.touches)}}function rg(){try{return Vl(JSON.parse(localStorage.getItem(Hl)||"null"))}catch{return{...pi,touches:Dr()}}}function og(i){try{localStorage.setItem(Hl,JSON.stringify(i))}catch{}}const is=rg(),ag=document.getElementById("app"),pe=document.getElementById("dlg"),fn=sg();fn.appliquer(is);let De=null;for(const i of["pointerdown","keydown"])document.addEventListener(i,()=>fn.demarrer(),{once:!0});function Ra(i){ag.replaceChildren(i.element)}const bs=()=>{og(is),fn.appliquer(is)};function Gl(i="son"){const t=is;let e=null;pe.className="large",pe.innerHTML=`<h2>Paramètres</h2>
    <div class="onglets"><button data-o="son">Son</button><button data-o="commandes">Commandes</button></div>
    <section id="o-son">
      <label class="ligne"><span>Musique</span><input type="range" id="p-musique" min="0" max="1" step="0.05" value="${t.musique}"></label>
      <label class="ligne"><span>Sons de la nature</span><input type="range" id="p-ambiance" min="0" max="1" step="0.05" value="${t.ambiance}"></label>
      <label class="ligne"><span>Voix des personnages</span><input type="range" id="p-voix" min="0" max="1" step="0.05" value="${t.voix}"></label>
      <label class="ligne"><span>Bruitages</span><input type="range" id="p-effets" min="0" max="1" step="0.05" value="${t.effets}"></label>
      <div class="pied"><button class="bouton secondaire" id="p-plein">Plein écran</button></div>
    </section>
    <section id="o-commandes" hidden></section>
    <div class="pied"><button class="bouton gros moyen" id="p-fermer">Fermer</button></div>`,pe.open||pe.showModal(),De&&De.bloquer(!0);const n=c=>{pe.querySelectorAll(".onglets button").forEach(l=>l.classList.toggle("actif",l.dataset.o===c)),pe.querySelector("#o-son").hidden=c!=="son",pe.querySelector("#o-commandes").hidden=c!=="commandes",c==="commandes"&&r()};function s(c){const l=t.touches[c.id],u=[0,1].map(h=>{const f=e&&e.action===c.id&&e.i===h,d=f?"Appuie sur une touche":l[h]?zl(l[h]):"";return`<button class="case ${f?"ecoute":""}" data-a="${c.id}" data-i="${h}" ${c.bientot?"disabled":""}>${d}</button>`}).join("");return`<div class="rangee ${c.bientot?"bientot":""}"><span class="nom-action">${c.nom}${c.bientot?"<em>bientôt</em>":""}</span>${u}<button class="croix" data-a="${c.id}" aria-label="Effacer ${c.nom}" ${c.bientot?"disabled":""}>×</button></div>`}function r(){const c=pe.querySelector("#o-commandes");c.innerHTML=`<h3 class="section">SOURIS</h3>
      <label class="ligne"><span>Sensibilité de la souris <b id="p-sens-val">${Math.round(t.sensibilite*100)} %</b></span><input type="range" id="p-sens" min="0" max="100" step="1" value="${Math.round(t.sensibilite*100)}"></label>
      <h3 class="section">DÉPLACEMENT</h3>${Rr.filter(l=>!l.bientot&&l.id!=="agir").map(s).join("")}
      <h3 class="section">ACTIONS</h3>${Rr.filter(l=>l.bientot||l.id==="agir").map(s).join("")}
      <p class="note">Clique sur une case, puis appuie sur la touche que tu veux. Échap pour annuler. La croix rouge efface la case.</p>
      <button class="bouton secondaire" id="p-defaut">Rétablir les touches de départ</button>`,c.querySelector("#p-sens").addEventListener("input",l=>{t.sensibilite=Number(l.target.value)/100,c.querySelector("#p-sens-val").textContent=`${l.target.value} %`,bs()}),c.querySelectorAll(".case").forEach(l=>l.addEventListener("click",()=>{e={action:l.dataset.a,i:Number(l.dataset.i)},r()})),c.querySelectorAll(".croix").forEach(l=>l.addEventListener("click",()=>{t.touches[l.dataset.a]=[null,null],bs(),De&&De.majAide(),e=null,r()})),c.querySelector("#p-defaut").addEventListener("click",()=>{t.touches=Dr(),bs(),De&&De.majAide(),e=null,r()})}const o=c=>{if(e){if(c.preventDefault(),c.stopPropagation(),c.code==="Escape"){e=null,r();return}t.touches=qm(t.touches,e.action,e.i,c.code),bs(),De&&De.majAide(),fn.clic(),e=null,r()}};window.addEventListener("keydown",o,!0),pe.addEventListener("cancel",c=>{e&&c.preventDefault()}),pe.addEventListener("close",()=>{window.removeEventListener("keydown",o,!0),De&&De.bloquer(!1)},{once:!0}),pe.querySelectorAll(".onglets button").forEach(c=>c.addEventListener("click",()=>{e=null,n(c.dataset.o)}));const a=()=>{Object.assign(t,Vl({...t,musique:Number(pe.querySelector("#p-musique").value),ambiance:Number(pe.querySelector("#p-ambiance").value),effets:Number(pe.querySelector("#p-effets").value),voix:Number(pe.querySelector("#p-voix").value)})),bs()};pe.querySelectorAll("#o-son input").forEach(c=>c.addEventListener("input",a)),pe.querySelector("#p-plein").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()}),pe.querySelector("#p-fermer").addEventListener("click",()=>{fn.clic(),pe.close()}),n(i)}function cg(){pe.open||(pe.className="",pe.innerHTML='<h2>Pause</h2><div class="menu-pause"><button class="bouton gros moyen" id="m-reprendre">Reprendre</button><button class="bouton secondaire" id="m-param">Paramètres</button><button class="bouton secondaire" id="m-quitter">Retour à la couverture</button></div>',pe.showModal(),De&&De.bloquer(!0),pe.addEventListener("close",()=>{De&&De.bloquer(!1)},{once:!0}),pe.querySelector("#m-reprendre").addEventListener("click",()=>{fn.clic(),pe.close()}),pe.querySelector("#m-param").addEventListener("click",()=>{fn.clic(),pe.addEventListener("close",()=>Gl("commandes"),{once:!0}),pe.close()}),pe.querySelector("#m-quitter").addEventListener("click",()=>{fn.clic(),pe.addEventListener("close",()=>ug(),{once:!0}),pe.close()}))}function lg(){fn.magie(),De=ig({reglages:()=>is,surMenu:cg,son:fn}),Ra(De)}function ug(){De&&(De.detruire(),De.moteur.arreter(),De=null),Ra(kl)}const kl=$l({surCommencer:()=>{fn.demarrer(),lg()},surParametres:()=>{fn.demarrer(),Gl("son")}});Ra(kl);window.bonsai={son:fn,get reglages(){return is},get jeu(){return De}};
