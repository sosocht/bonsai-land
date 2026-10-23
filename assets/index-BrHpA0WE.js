(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Gs(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const Jl=(i,t="#0a5c3e")=>`<path d="M0,0 C40,-90 150,-150 300,-120 C250,-45 130,-8 0,0Z" fill="${i}"/><path d="M0,0 C100,-48 200,-84 296,-118" stroke="${t}" stroke-width="4" fill="none" opacity=".55"/>`;function Xs(i,t,e,n,s,r){const o=Gs(r);let a="";for(let c=0;c<6;c++){const l=-80+c*30+o()*10;a+=`<g transform="rotate(${l.toFixed(0)}) scale(${(.8+o()*.45).toFixed(2)})">${Jl(s[c%s.length])}</g>`}return`<g transform="translate(${i},${t}) rotate(${n}) scale(${e})"><g class="balance" style="animation-delay:${(o()*-5).toFixed(1)}s">${a}</g></g>`}function qs(i,t,e,n,s,r,o=!1){const a=Gs(r);let c=`<path d="M0,0 C20,-120 90,-210 210,-250" stroke="${s}" stroke-width="7" fill="none" stroke-linecap="round"/>`;for(let l=1;l<18;l++){const u=l/18,h=210*(1-Math.pow(1-u,2))*1.02,d=-250*u-(1-u)*6,f=46*(1-u*.7);for(const g of[-1,1])c+=`<ellipse cx="${(h+4).toFixed(1)}" cy="${d.toFixed(1)}" rx="${f.toFixed(1)}" ry="${(f*.2).toFixed(1)}" fill="${s}" transform="rotate(${(g*(48+a()*14)-18).toFixed(0)} ${h.toFixed(1)} ${d.toFixed(1)})"/>`}return`<g transform="translate(${i},${t}) rotate(${n}) scale(${o?-e:e},${e})"><g class="balance lent" style="animation-delay:${(a()*-6).toFixed(1)}s">${c}</g></g>`}function Ci(i,t,e,n){const s=Gs(n);let r="",o="";for(let a=70+s()*40;a<900;a+=110+s()*50){r+=`<rect x="${i-t/2-3}" y="${a}" width="${t+6}" height="9" rx="4" fill="#2f9d57"/>`;for(const c of[-1,1]){const l=i+c*t*.5;o+=`<path d="M${l},${a} C${l+c*38},${a-24} ${l+c*100},${a-14} ${l+c*138},${a+16} C${l+c*96},${a+4} ${l+c*42},${a+6} ${l},${a}Z" fill="#8be36c"/>`}}return`<g class="balance tige" style="animation-delay:${(s()*-5).toFixed(1)}s" transform="rotate(${e} ${i} 900)"><rect x="${i-t/2}" y="-30" width="${t}" height="950" fill="#7fe07a"/><rect x="${i-t/2}" y="-30" width="${t*.3}" height="950" fill="#c4f59a" opacity=".75"/><rect x="${i+t*.25}" y="-30" width="${t*.25}" height="950" fill="#2f9d57" opacity=".6"/>${r}${o}</g>`}function Yc(i,t,e,n,s="#ffd24d"){let r="";for(let o=0;o<5;o++)r+=`<ellipse cx="0" cy="-12" rx="7" ry="13" fill="${n}" transform="rotate(${o*72})"/>`;return`<g transform="translate(${i},${t}) scale(${e})">${r}<circle r="5" fill="${s}"/></g>`}function jl(i,t,e,n){const s=Gs(n);let r=`<path d="M${i},-20 C${i+e},${t*.35} ${i-e*.6},${t*.7} ${i+e*.4},${t}" fill="none" stroke="#1a8a5c" stroke-width="${3+s()*3}" stroke-linecap="round"/>`;for(let o=1;o<=6;o++){const a=o/7,c=i+e*.4*a*a+(s()-.5)*6;r+=`<ellipse cx="${c.toFixed(1)}" cy="${(t*a).toFixed(1)}" rx="12" ry="6" fill="${["#3fd07a","#7de58a","#22b06a"][o%3]}" transform="rotate(${(s()*100-50).toFixed(0)} ${c.toFixed(1)} ${(t*a).toFixed(1)})"/>`}return s()>.45&&(r+=Yc(i+e*.4,t+8,.75,s()>.5?"#ff8a2b":"#ff9fc0")),`<g class="liane" style="animation-delay:${(s()*-5).toFixed(1)}s">${r}</g>`}function Kl(){const i=Gs(11);let t="";for(let r=0;r<16;r++)t+=`<circle class="bulle" style="animation-delay:${(-i()*12).toFixed(1)}s;animation-duration:${(10+i()*10).toFixed(1)}s" cx="${(i()*1600).toFixed(0)}" cy="${(300+i()*600).toFixed(0)}" r="${(8+i()*26).toFixed(0)}" fill="#fff" opacity=".13"/>`;let e="";for(let r=0;r<12;r++)e+=jl(40+r*140+(i()-.5)*60,90+i()*260,(i()-.5)*80,70+r);let n="";for(let r=0;r<14;r++){const o=i()<.5;n+=Yc(o?30+i()*380:1190+i()*380,770+i()*110,.9+i()*.7,i()>.45?"#ff8a2b":"#ff9fc0")}const s=document.createElement("div");return s.className="fond",s.innerHTML=`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="bleu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a3f9a"/><stop offset=".45" stop-color="#1a86d8"/><stop offset=".8" stop-color="#4fcfe6"/><stop offset="1" stop-color="#8fe9e2"/></linearGradient>
      <radialGradient id="lueur" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#dff8ff" stop-opacity=".85"/><stop offset="1" stop-color="#dff8ff" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#bleu)"/>
    <ellipse class="lueur" cx="1130" cy="190" rx="520" ry="360" fill="url(#lueur)"/>
    ${t}
    <g opacity=".5">${Xs(120,760,1.3,8,["#0d6f9a","#117fa3"],3)}${Xs(1490,770,1.3,-10,["#0d6f9a","#117fa3"],4)}</g>
    ${Ci(70,28,-2,5)}${Ci(150,20,2,6)}${Ci(240,16,-1,7)}
    ${Ci(1530,28,2,8)}${Ci(1450,20,-2,9)}${Ci(1360,16,1,10)}
    ${e}
    ${Xs(-30,940,1.7,0,["#14a064","#2fc27a","#0e8456","#4ad98a"],12)}
    ${Xs(1630,940,1.7,0,["#14a064","#2fc27a","#0e8456","#4ad98a"],13)}
    ${qs(330,930,1.5,-8,"#1fb36e",21)}
    ${qs(1270,930,1.5,8,"#1fb36e",22,!0)}
    ${qs(520,940,1.1,-22,"#35cf80",23)}
    ${qs(1090,940,1.1,22,"#35cf80",24,!0)}
    ${n}
  </svg>`,s}function Ql({surCommencer:i,surParametres:t}){const e=document.createElement("main");return e.className="ecran couverture",e.appendChild(Kl()),e.insertAdjacentHTML("beforeend",`
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
 */const ha="170",tu=0,La=1,eu=2,Zc=1,nu=2,zn=3,ni=0,tn=1,Te=2,ti=0,Yi=1,mn=2,Ia=3,Da=4,iu=5,xi=100,su=101,ru=102,ou=103,au=104,cu=200,lu=201,uu=202,hu=203,yo=204,So=205,fu=206,du=207,pu=208,mu=209,gu=210,xu=211,_u=212,vu=213,Mu=214,wo=0,Eo=1,bo=2,Ki=3,To=4,Ao=5,Ro=6,Co=7,Jc=0,yu=1,Su=2,Vn=0,wu=1,Eu=2,bu=3,Tu=4,Au=5,Ru=6,Cu=7,jc=300,Qi=301,ts=302,Po=303,Lo=304,Lr=306,Ns=1e3,Mi=1001,Io=1002,fn=1003,Pu=1004,$s=1005,Ln=1006,Or=1007,yi=1008,kn=1009,Kc=1010,Qc=1011,Fs=1012,fa=1013,Ei=1014,In=1015,ks=1016,da=1017,pa=1018,es=1020,tl=35902,el=1021,nl=1022,bn=1023,il=1024,sl=1025,Zi=1026,ns=1027,ma=1028,ga=1029,rl=1030,xa=1031,_a=1033,Mr=33776,yr=33777,Sr=33778,wr=33779,Do=35840,Uo=35841,No=35842,Fo=35843,Oo=36196,Bo=37492,zo=37496,Ho=37808,Vo=37809,Go=37810,ko=37811,Wo=37812,Xo=37813,qo=37814,$o=37815,Yo=37816,Zo=37817,Jo=37818,jo=37819,Ko=37820,Qo=37821,Er=36492,ta=36494,ea=36495,ol=36283,na=36284,ia=36285,sa=36286,Lu=3200,Iu=3201,al=0,Du=1,Qn="",rn="srgb",os="srgb-linear",Ir="linear",Me="srgb",Pi=7680,Ua=519,Uu=512,Nu=513,Fu=514,cl=515,Ou=516,Bu=517,zu=518,Hu=519,Na=35044,Fa="300 es",Hn=2e3,Ar=2001;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Br=Math.PI/180,ra=180/Math.PI;function cs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function Vu(i,t){return(i%t+t)%t}function zr(i,t,e){return(1-e)*i+e*t}function _s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,n,s,r,o,a,c,l){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],w=s[1],y=s[4],M=s[7],F=s[2],P=s[5],T=s[8];return r[0]=o*_+a*w+c*F,r[3]=o*m+a*y+c*P,r[6]=o*p+a*M+c*T,r[1]=l*_+u*w+h*F,r[4]=l*m+u*y+h*P,r[7]=l*p+u*M+h*T,r[2]=d*_+f*w+g*F,r[5]=d*m+f*y+g*P,r[8]=d*p+f*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hr.makeScale(t,e)),this}rotate(t){return this.premultiply(Hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new ie;function ll(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gu(){const i=Rr("canvas");return i.style.display="block",i}const Oa={};function Rs(i){i in Oa||(Oa[i]=!0,console.warn(i))}function ku(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Wu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const he={enabled:!0,workingColorSpace:os,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Me&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Me&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?Ir:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ba=[.64,.33,.3,.6,.15,.06],za=[.2126,.7152,.0722],Ha=[.3127,.329],Va=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ga=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[os]:{primaries:Ba,whitePoint:Ha,transfer:Ir,toXYZ:Va,fromXYZ:Ga,luminanceCoefficients:za,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:Ba,whitePoint:Ha,transfer:Me,toXYZ:Va,fromXYZ:Ga,luminanceCoefficients:za,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let Li;class qu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=Rr("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $u=0;class ul{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vr(s[o].image)):r.push(Vr(s[o]))}else r=Vr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yu=0;class Ze extends as{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=Mi,s=Mi,r=Ln,o=yi,a=bn,c=kn,l=Ze.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=cs(),this.name="",this.source=new ul(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=jc;Ze.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,M=(f+1)/2,F=(p+1)/2,P=(u+d)/4,T=(h+_)/4,D=(g+m)/4;return y>M&&y>F?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=P/n,r=T/n):M>F?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=P/s,r=D/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=T/r,s=D/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(d-u)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zu extends as{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ul(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Zu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class hl extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ju extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,w=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const F=Math.sqrt(y),P=Math.atan2(F,p*w);m=Math.sin(m*P)/F,a=Math.sin(a*P)/F}const M=a*w;if(c=c*m+d*M,l=l*m+f*M,u=u*m+g*M,h=h*m+_*M,m===1-a){const F=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=F,l*=F,u*=F,h*=F}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ka.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gr.copy(this).projectOnVector(t),this.sub(Gr)}reflect(t){return this.sub(Gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new U,ka=new ls;class Ri{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),Zs.subVectors(this.max,vs),Ii.subVectors(t.a,vs),Di.subVectors(t.b,vs),Ui.subVectors(t.c,vs),qn.subVectors(Di,Ii),$n.subVectors(Ui,Di),ai.subVectors(Ii,Ui);let e=[0,-qn.z,qn.y,0,-$n.z,$n.y,0,-ai.z,ai.y,qn.z,0,-qn.x,$n.z,0,-$n.x,ai.z,0,-ai.x,-qn.y,qn.x,0,-$n.y,$n.x,0,-ai.y,ai.x,0];return!kr(e,Ii,Di,Ui,Zs)||(e=[1,0,0,0,1,0,0,0,1],!kr(e,Ii,Di,Ui,Zs))?!1:(Js.crossVectors(qn,$n),e=[Js.x,Js.y,Js.z],kr(e,Ii,Di,Ui,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,Ys=new Ri,Ii=new U,Di=new U,Ui=new U,qn=new U,$n=new U,ai=new U,vs=new U,Zs=new U,Js=new U,ci=new U;function kr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ci.fromArray(i,r);const a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),c=t.dot(ci),l=e.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ju=new Ri,Ms=new U,Wr=new U;class us{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ju.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);const e=Ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(Wr)),this.expandByPoint(Ms.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new U,Xr=new U,js=new U,Yn=new U,qr=new U,Ks=new U,$r=new U;class fl{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xr.copy(t).add(e).multiplyScalar(.5),js.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Xr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(js),a=Yn.dot(this.direction),c=-Yn.dot(js),l=Yn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xr).addScaledVector(js,d),f}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){qr.subVectors(e,t),Ks.subVectors(n,t),$r.crossVectors(qr,Ks);let o=this.direction.dot($r),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const c=a*this.direction.dot(Ks.crossVectors(Yn,Ks));if(c<0)return null;const l=a*this.direction.dot(qr.cross(Yn));if(l<0||c+l>o)return null;const u=-a*Yn.dot($r);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,s,r,o,a,c,l,u,h,d,f,g,_,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ku,t,Qu)}lookAt(t,e,n){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Zn.crossVectors(n,ln),Zn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Zn.crossVectors(n,ln)),Zn.normalize(),Qs.crossVectors(ln,Zn),s[0]=Zn.x,s[4]=Qs.x,s[8]=ln.x,s[1]=Zn.y,s[5]=Qs.y,s[9]=ln.y,s[2]=Zn.z,s[6]=Qs.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],y=n[7],M=n[11],F=n[15],P=s[0],T=s[4],D=s[8],E=s[12],S=s[1],N=s[5],Z=s[9],H=s[13],tt=s[2],W=s[6],j=s[10],ht=s[14],et=s[3],gt=s[7],vt=s[11],Et=s[15];return r[0]=o*P+a*S+c*tt+l*et,r[4]=o*T+a*N+c*W+l*gt,r[8]=o*D+a*Z+c*j+l*vt,r[12]=o*E+a*H+c*ht+l*Et,r[1]=u*P+h*S+d*tt+f*et,r[5]=u*T+h*N+d*W+f*gt,r[9]=u*D+h*Z+d*j+f*vt,r[13]=u*E+h*H+d*ht+f*Et,r[2]=g*P+_*S+m*tt+p*et,r[6]=g*T+_*N+m*W+p*gt,r[10]=g*D+_*Z+m*j+p*vt,r[14]=g*E+_*H+m*ht+p*Et,r[3]=w*P+y*S+M*tt+F*et,r[7]=w*T+y*N+M*W+F*gt,r[11]=w*D+y*Z+M*j+F*vt,r[15]=w*E+y*H+M*ht+F*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],w=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,y=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,M=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,F=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,P=e*w+n*y+s*M+r*F;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return t[0]=w*T,t[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*T,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*T,t[4]=y*T,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*f+e*c*f)*T,t[8]=M*T,t[9]=(g*h*r-u*_*r-g*n*f+e*_*f+u*n*p-e*h*p)*T,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*T,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*f-e*a*f)*T,t[12]=F*T,t[13]=(u*_*s-g*h*s+g*n*d-e*_*d-u*n*m+e*h*m)*T,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*T,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,w=c*l,y=c*u,M=c*h,F=n.x,P=n.y,T=n.z;return s[0]=(1-(_+p))*F,s[1]=(f+M)*F,s[2]=(g-y)*F,s[3]=0,s[4]=(f-M)*P,s[5]=(1-(d+p))*P,s[6]=(m+w)*P,s[7]=0,s[8]=(g+y)*T,s[9]=(m-w)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ni.set(s[0],s[1],s[2]).length();const o=Ni.set(s[4],s[5],s[6]).length(),a=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const l=1/r,u=1/o,h=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Hn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Hn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ar)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Hn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*l,f=(n+s)*u;let g,_;if(a===Hn)g=(o+r)*h,_=-2*h;else if(a===Ar)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new U,yn=new me,Ku=new U(0,0,0),Qu=new U(1,1,1),Zn=new U,Qs=new U,ln=new U,Wa=new me,Xa=new ls;class Qe{constructor(t=0,e=0,n=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xa.setFromEuler(this),this.setFromQuaternion(Xa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let th=0;const qa=new U,Fi=new ls,Fn=new me,tr=new U,ys=new U,eh=new U,nh=new ls,$a=new U(1,0,0),Ya=new U(0,1,0),Za=new U(0,0,1),Ja={type:"added"},ih={type:"removed"},Oi={type:"childadded",child:null},Yr={type:"childremoved",child:null};class Oe extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new U,e=new Qe,n=new ls,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new ie}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis($a,t)}rotateY(t){return this.rotateOnAxis(Ya,t)}rotateZ(t){return this.rotateOnAxis(Za,t)}translateOnAxis(t,e){return qa.copy(t).applyQuaternion(this.quaternion),this.position.add(qa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($a,t)}translateY(t){return this.translateOnAxis(Ya,t)}translateZ(t){return this.translateOnAxis(Za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tr.copy(t):tr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(ys,tr,this.up):Fn.lookAt(tr,ys,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ja),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ih),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ja),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,eh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Oe.DEFAULT_UP=new U(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new U,On=new U,Zr=new U,Bn=new U,Bi=new U,zi=new U,ja=new U,Jr=new U,jr=new U,Kr=new U,Qr=new ye,to=new ye,eo=new ye;class En{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),On.subVectors(n,e),Zr.subVectors(t,e);const o=Sn.dot(Sn),a=Sn.dot(On),c=Sn.dot(Zr),l=On.dot(On),u=On.dot(Zr),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Qr.setScalar(0),to.setScalar(0),eo.setScalar(0),Qr.fromBufferAttribute(t,e),to.fromBufferAttribute(t,n),eo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Qr,r.x),o.addScaledVector(to,r.y),o.addScaledVector(eo,r.z),o}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),On.subVectors(t,e),Sn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),Sn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Bi.subVectors(s,n),zi.subVectors(r,n),Jr.subVectors(t,n);const c=Bi.dot(Jr),l=zi.dot(Jr);if(c<=0&&l<=0)return e.copy(n);jr.subVectors(t,s);const u=Bi.dot(jr),h=zi.dot(jr);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Bi,o);Kr.subVectors(t,r);const f=Bi.dot(Kr),g=zi.dot(Kr);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(zi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return ja.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(ja,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Bi,o).addScaledVector(zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},er={h:0,s:0,l:0};function no(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Vu(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=no(o,r,t+1/3),this.g=no(o,r,t),this.b=no(o,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=pl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return he.fromWorkingColorSpace($e.copy(this),t),Math.round(ke($e.r*255,0,255))*65536+Math.round(ke($e.g*255,0,255))*256+Math.round(ke($e.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=rn){he.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(er);const n=zr(Jn.h,er.h,e),s=zr(Jn.s,er.s,e),r=zr(Jn.l,er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Qt;Qt.NAMES=pl;let sh=0;class hs extends as{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=cs(),this.name="",this.blending=Yi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=So,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==So&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ua&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ee extends hs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new U,nr=new Dt;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Na&&(t.usage=this.usage),t}}class ml extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gl extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rh=0;const pn=new me,io=new Oe,Hi=new U,un=new Ri,Ss=new Ri,He=new U;class Ce extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ll(t)?gl:ml)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return io.lookAt(t),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(un.min,Ss.min),un.expandByPoint(He),He.addVectors(un.max,Ss.max),un.expandByPoint(He)):(un.expandByPoint(Ss.min),un.expandByPoint(Ss.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)He.fromBufferAttribute(a,l),c&&(Hi.fromBufferAttribute(t,l),He.add(Hi)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new U,c[D]=new U;const l=new U,u=new U,h=new U,d=new Dt,f=new Dt,g=new Dt,_=new U,m=new U;function p(D,E,S){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(N),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(N),a[D].add(_),a[E].add(_),a[S].add(_),c[D].add(m),c[E].add(m),c[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,E=w.length;D<E;++D){const S=w[D],N=S.start,Z=S.count;for(let H=N,tt=N+Z;H<tt;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const y=new U,M=new U,F=new U,P=new U;function T(D){F.fromBufferAttribute(s,D),P.copy(F);const E=a[D];y.copy(E),y.sub(F.multiplyScalar(F.dot(E))).normalize(),M.crossVectors(P,E);const N=M.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,N)}for(let D=0,E=w.length;D<E;++D){const S=w[D],N=S.start,Z=S.count;for(let H=N,tt=N+Z;H<tt;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Ve(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ka=new me,li=new fl,ir=new us,Qa=new U,sr=new U,rr=new U,or=new U,so=new U,ar=new U,tc=new U,cr=new U;class O extends Oe{constructor(t=new Ce,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(so.fromBufferAttribute(h,t),o?ar.addScaledVector(so,u):ar.addScaledVector(so.sub(e),u))}e.add(ar)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(ir.containsPoint(li.origin)===!1&&(li.intersectSphere(ir,Qa)===null||li.origin.distanceToSquared(Qa)>(t.far-t.near)**2))&&(Ka.copy(r).invert(),li.copy(t.ray).applyMatrix4(Ka),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,F=y;M<F;M+=3){const P=a.getX(M),T=a.getX(M+1),D=a.getX(M+2);s=lr(this,p,t,n,l,u,h,P,T,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=lr(this,o,t,n,l,u,h,w,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,F=y;M<F;M+=3){const P=M,T=M+1,D=M+2;s=lr(this,p,t,n,l,u,h,P,T,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,y=m+1,M=m+2;s=lr(this,o,t,n,l,u,h,w,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function oh(i,t,e,n,s,r,o,a){let c;if(t.side===tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ni,a),c===null)return null;cr.copy(a),cr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(cr);return l<e.near||l>e.far?null:{distance:l,point:cr.clone(),object:i}}function lr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,sr),i.getVertexPosition(c,rr),i.getVertexPosition(l,or);const u=oh(i,t,e,n,sr,rr,or,tc);if(u){const h=new U;En.getBarycoord(tc,sr,rr,or,h),s&&(u.uv=En.getInterpolatedAttribute(s,a,c,l,h,new Dt)),r&&(u.uv1=En.getInterpolatedAttribute(r,a,c,l,h,new Dt)),o&&(u.normal=En.getInterpolatedAttribute(o,a,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new U,materialIndex:0};En.getNormal(sr,rr,or,d.normal),u.face=d,u.barycoord=h}return u}class Gt extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(h,2));function g(_,m,p,w,y,M,F,P,T,D,E){const S=M/T,N=F/D,Z=M/2,H=F/2,tt=P/2,W=T+1,j=D+1;let ht=0,et=0;const gt=new U;for(let vt=0;vt<j;vt++){const Et=vt*N-H;for(let Pt=0;Pt<W;Pt++){const kt=Pt*S-Z;gt[_]=kt*w,gt[m]=Et*y,gt[p]=tt,l.push(gt.x,gt.y,gt.z),gt[_]=0,gt[m]=0,gt[p]=P>0?1:-1,u.push(gt.x,gt.y,gt.z),h.push(Pt/T),h.push(1-vt/D),ht+=1}}for(let vt=0;vt<D;vt++)for(let Et=0;Et<T;Et++){const Pt=d+Et+W*vt,kt=d+Et+W*(vt+1),ot=d+(Et+1)+W*(vt+1),it=d+(Et+1)+W*vt;c.push(Pt,kt,it),c.push(kt,ot,it),et+=6}a.addGroup(f,et,E),f+=et,d+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=is(i[e]);for(const s in n)t[s]=n[s]}return t}function ah(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const ch={clone:is,merge:Ke};var lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends hs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lh,this.fragmentShader=uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=ah(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _l extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new U,ec=new Dt,nc=new Dt;class hn extends _l{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,ec,nc),e.subVectors(nc,ec)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Gi=1;class hh extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(Vi,Gi,t,e);s.layers=this.layers,this.add(s);const r=new hn(Vi,Gi,t,e);r.layers=this.layers,this.add(r);const o=new hn(Vi,Gi,t,e);o.layers=this.layers,this.add(o);const a=new hn(Vi,Gi,t,e);a.layers=this.layers,this.add(a);const c=new hn(Vi,Gi,t,e);c.layers=this.layers,this.add(c);const l=new hn(Vi,Gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vl extends Ze{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fh extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ti});r.uniforms.tEquirect.value=e;const o=new O(s,r),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=Ln),new hh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ro=new U,dh=new U,ph=new ie;class di{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ro.subVectors(n,e).cross(dh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ro),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ph.getNormalMatrix(t),s=this.coplanarPoint(ro).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new us,ur=new U;class va{constructor(t=new di,e=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],w=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,m-f,M-p).normalize(),n[1].setComponents(c+r,d+l,m+f,M+p).normalize(),n[2].setComponents(c+o,d+u,m+g,M+w).normalize(),n[3].setComponents(c-o,d-u,m-g,M-w).normalize(),n[4].setComponents(c-a,d-h,m-_,M-y).normalize(),e===Hn)n[5].setComponents(c+a,d+h,m+_,M+y).normalize();else if(e===Ar)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ur.x=s.normal.x>0?t.max.x:t.min.x,ur.y=s.normal.y>0?t.max.y:t.min.y,ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ml(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function mh(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class De extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*d-o;for(let y=0;y<l;y++){const M=y*h-r;g.push(M,-w,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const y=w+l*p,M=w+l*(p+1),F=w+1+l*(p+1),P=w+1+l*p;f.push(y,M,P),f.push(M,F,P)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.width,t.height,t.widthSegments,t.heightSegments)}}var gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xh=`#ifdef USE_ALPHAHASH
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
#endif`,_h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sh=`#ifdef USE_AOMAP
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
#endif`,wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eh=`#ifdef USE_BATCHING
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
#endif`,bh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Th=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ch=`#ifdef USE_IRIDESCENCE
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
#endif`,Ph=`#ifdef USE_BUMPMAP
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
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zh=`#define PI 3.141592653589793
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
} // validated`,Hh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vh=`vec3 transformedNormal = objectNormal;
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
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
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
#endif`,Qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
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
}`,rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cf=`uniform bool receiveShadow;
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
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pf=`PhysicalMaterial material;
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
#endif`,mf=`struct PhysicalMaterial {
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
}`,gf=`
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
#endif`,vf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tf=`#if defined( USE_POINTS_UV )
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
#endif`,Af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS )
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
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
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
#endif`,Df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
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
vec3 nonPerturbedNormal = normal;`,Nf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zf=`#ifdef USE_NORMALMAP
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
#endif`,Hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ed=`float getShadowMask() {
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
}`,nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,id=`#ifdef USE_SKINNING
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
#endif`,sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rd=`#ifdef USE_SKINNING
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
#endif`,od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ld=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ud=`#ifdef USE_TRANSMISSION
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
#endif`,hd=`#ifdef USE_TRANSMISSION
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
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xd=`uniform sampler2D t2D;
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
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`#include <common>
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
}`,wd=`#if DEPTH_PACKING == 3200
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
}`,Ed=`#define DISTANCE
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
}`,bd=`#define DISTANCE
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
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ad=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`uniform float scale;
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
}`,Cd=`uniform vec3 diffuse;
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
}`,Pd=`#include <common>
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
}`,Ld=`uniform vec3 diffuse;
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
}`,Id=`#define LAMBERT
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
}`,Dd=`#define LAMBERT
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
}`,Ud=`#define MATCAP
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
}`,Nd=`#define MATCAP
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
}`,Fd=`#define NORMAL
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
}`,Od=`#define NORMAL
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
}`,Bd=`#define PHONG
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
}`,zd=`#define PHONG
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
}`,Hd=`#define STANDARD
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
}`,Vd=`#define STANDARD
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
}`,Gd=`#define TOON
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
}`,kd=`#define TOON
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
}`,Wd=`uniform float size;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,qd=`#include <common>
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
}`,$d=`uniform vec3 color;
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
}`,Yd=`uniform float rotation;
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
}`,Zd=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:gh,alphahash_pars_fragment:xh,alphamap_fragment:_h,alphamap_pars_fragment:vh,alphatest_fragment:Mh,alphatest_pars_fragment:yh,aomap_fragment:Sh,aomap_pars_fragment:wh,batching_pars_vertex:Eh,batching_vertex:bh,begin_vertex:Th,beginnormal_vertex:Ah,bsdfs:Rh,iridescence_fragment:Ch,bumpmap_pars_fragment:Ph,clipping_planes_fragment:Lh,clipping_planes_pars_fragment:Ih,clipping_planes_pars_vertex:Dh,clipping_planes_vertex:Uh,color_fragment:Nh,color_pars_fragment:Fh,color_pars_vertex:Oh,color_vertex:Bh,common:zh,cube_uv_reflection_fragment:Hh,defaultnormal_vertex:Vh,displacementmap_pars_vertex:Gh,displacementmap_vertex:kh,emissivemap_fragment:Wh,emissivemap_pars_fragment:Xh,colorspace_fragment:qh,colorspace_pars_fragment:$h,envmap_fragment:Yh,envmap_common_pars_fragment:Zh,envmap_pars_fragment:Jh,envmap_pars_vertex:jh,envmap_physical_pars_fragment:lf,envmap_vertex:Kh,fog_vertex:Qh,fog_pars_vertex:tf,fog_fragment:ef,fog_pars_fragment:nf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:rf,lights_lambert_fragment:of,lights_lambert_pars_fragment:af,lights_pars_begin:cf,lights_toon_fragment:uf,lights_toon_pars_fragment:hf,lights_phong_fragment:ff,lights_phong_pars_fragment:df,lights_physical_fragment:pf,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:xf,lights_fragment_end:_f,logdepthbuf_fragment:vf,logdepthbuf_pars_fragment:Mf,logdepthbuf_pars_vertex:yf,logdepthbuf_vertex:Sf,map_fragment:wf,map_pars_fragment:Ef,map_particle_fragment:bf,map_particle_pars_fragment:Tf,metalnessmap_fragment:Af,metalnessmap_pars_fragment:Rf,morphinstance_vertex:Cf,morphcolor_vertex:Pf,morphnormal_vertex:Lf,morphtarget_pars_vertex:If,morphtarget_vertex:Df,normal_fragment_begin:Uf,normal_fragment_maps:Nf,normal_pars_fragment:Ff,normal_pars_vertex:Of,normal_vertex:Bf,normalmap_pars_fragment:zf,clearcoat_normal_fragment_begin:Hf,clearcoat_normal_fragment_maps:Vf,clearcoat_pars_fragment:Gf,iridescence_pars_fragment:kf,opaque_fragment:Wf,packing:Xf,premultiplied_alpha_fragment:qf,project_vertex:$f,dithering_fragment:Yf,dithering_pars_fragment:Zf,roughnessmap_fragment:Jf,roughnessmap_pars_fragment:jf,shadowmap_pars_fragment:Kf,shadowmap_pars_vertex:Qf,shadowmap_vertex:td,shadowmask_pars_fragment:ed,skinbase_vertex:nd,skinning_pars_vertex:id,skinning_vertex:sd,skinnormal_vertex:rd,specularmap_fragment:od,specularmap_pars_fragment:ad,tonemapping_fragment:cd,tonemapping_pars_fragment:ld,transmission_fragment:ud,transmission_pars_fragment:hd,uv_pars_fragment:fd,uv_pars_vertex:dd,uv_vertex:pd,worldpos_vertex:md,background_vert:gd,background_frag:xd,backgroundCube_vert:_d,backgroundCube_frag:vd,cube_vert:Md,cube_frag:yd,depth_vert:Sd,depth_frag:wd,distanceRGBA_vert:Ed,distanceRGBA_frag:bd,equirect_vert:Td,equirect_frag:Ad,linedashed_vert:Rd,linedashed_frag:Cd,meshbasic_vert:Pd,meshbasic_frag:Ld,meshlambert_vert:Id,meshlambert_frag:Dd,meshmatcap_vert:Ud,meshmatcap_frag:Nd,meshnormal_vert:Fd,meshnormal_frag:Od,meshphong_vert:Bd,meshphong_frag:zd,meshphysical_vert:Hd,meshphysical_frag:Vd,meshtoon_vert:Gd,meshtoon_frag:kd,points_vert:Wd,points_frag:Xd,shadow_vert:qd,shadow_frag:$d,sprite_vert:Yd,sprite_frag:Zd},Rt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Pn={basic:{uniforms:Ke([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ke([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ke([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ke([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ke([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ke([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ke([Rt.points,Rt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ke([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ke([Rt.common,Rt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ke([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ke([Rt.sprite,Rt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ke([Rt.common,Rt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ke([Rt.lights,Rt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Pn.physical={uniforms:Ke([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const hr={r:0,b:0,g:0},hi=new Qe,Jd=new me;function jd(i,t,e,n,s,r,o){const a=new Qt(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?e:t).get(y)),y}function _(w){let y=!1;const M=g(w);M===null?p(a,c):M&&M.isColor&&(p(M,1),y=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===Lr)?(u===void 0&&(u=new O(new Gt(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:is(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),hi.copy(y.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jd.makeRotationFromEuler(hi)),u.material.toneMapped=he.getTransfer(M.colorSpace)!==Me,(h!==M||d!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new O(new De(2,2),new ii({name:"BackgroundMaterial",uniforms:is(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=he.getTransfer(M.colorSpace)!==Me,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,y){w.getRGB(hr,xl(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:_,addToRenderList:m}}function Kd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,N,Z,H,tt){let W=!1;const j=h(H,Z,N);r!==j&&(r=j,l(r.object)),W=f(S,H,Z,tt),W&&g(S,H,Z,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(S,N,Z,H),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,N,Z){const H=Z.wireframe===!0;let tt=n[S.id];tt===void 0&&(tt={},n[S.id]=tt);let W=tt[N.id];W===void 0&&(W={},tt[N.id]=W);let j=W[H];return j===void 0&&(j=d(c()),W[H]=j),j}function d(S){const N=[],Z=[],H=[];for(let tt=0;tt<e;tt++)N[tt]=0,Z[tt]=0,H[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Z,attributeDivisors:H,object:S,attributes:{},index:null}}function f(S,N,Z,H){const tt=r.attributes,W=N.attributes;let j=0;const ht=Z.getAttributes();for(const et in ht)if(ht[et].location>=0){const vt=tt[et];let Et=W[et];if(Et===void 0&&(et==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),et==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),vt===void 0||vt.attribute!==Et||Et&&vt.data!==Et.data)return!0;j++}return r.attributesNum!==j||r.index!==H}function g(S,N,Z,H){const tt={},W=N.attributes;let j=0;const ht=Z.getAttributes();for(const et in ht)if(ht[et].location>=0){let vt=W[et];vt===void 0&&(et==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),et==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor));const Et={};Et.attribute=vt,vt&&vt.data&&(Et.data=vt.data),tt[et]=Et,j++}r.attributes=tt,r.attributesNum=j,r.index=H}function _(){const S=r.newAttributes;for(let N=0,Z=S.length;N<Z;N++)S[N]=0}function m(S){p(S,0)}function p(S,N){const Z=r.newAttributes,H=r.enabledAttributes,tt=r.attributeDivisors;Z[S]=1,H[S]===0&&(i.enableVertexAttribArray(S),H[S]=1),tt[S]!==N&&(i.vertexAttribDivisor(S,N),tt[S]=N)}function w(){const S=r.newAttributes,N=r.enabledAttributes;for(let Z=0,H=N.length;Z<H;Z++)N[Z]!==S[Z]&&(i.disableVertexAttribArray(Z),N[Z]=0)}function y(S,N,Z,H,tt,W,j){j===!0?i.vertexAttribIPointer(S,N,Z,tt,W):i.vertexAttribPointer(S,N,Z,H,tt,W)}function M(S,N,Z,H){_();const tt=H.attributes,W=Z.getAttributes(),j=N.defaultAttributeValues;for(const ht in W){const et=W[ht];if(et.location>=0){let gt=tt[ht];if(gt===void 0&&(ht==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),ht==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),gt!==void 0){const vt=gt.normalized,Et=gt.itemSize,Pt=t.get(gt);if(Pt===void 0)continue;const kt=Pt.buffer,ot=Pt.type,it=Pt.bytesPerElement,ft=ot===i.INT||ot===i.UNSIGNED_INT||gt.gpuType===fa;if(gt.isInterleavedBufferAttribute){const mt=gt.data,bt=mt.stride,It=gt.offset;if(mt.isInstancedInterleavedBuffer){for(let zt=0;zt<et.locationSize;zt++)p(et.location+zt,mt.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let zt=0;zt<et.locationSize;zt++)m(et.location+zt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let zt=0;zt<et.locationSize;zt++)y(et.location+zt,Et/et.locationSize,ot,vt,bt*it,(It+Et/et.locationSize*zt)*it,ft)}else{if(gt.isInstancedBufferAttribute){for(let mt=0;mt<et.locationSize;mt++)p(et.location+mt,gt.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let mt=0;mt<et.locationSize;mt++)m(et.location+mt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let mt=0;mt<et.locationSize;mt++)y(et.location+mt,Et/et.locationSize,ot,vt,Et*it,Et/et.locationSize*mt*it,ft)}}else if(j!==void 0){const vt=j[ht];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(et.location,vt);break;case 3:i.vertexAttrib3fv(et.location,vt);break;case 4:i.vertexAttrib4fv(et.location,vt);break;default:i.vertexAttrib1fv(et.location,vt)}}}}w()}function F(){D();for(const S in n){const N=n[S];for(const Z in N){const H=N[Z];for(const tt in H)u(H[tt].object),delete H[tt];delete N[Z]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;const N=n[S.id];for(const Z in N){const H=N[Z];for(const tt in H)u(H[tt].object),delete H[tt];delete N[Z]}delete n[S.id]}function T(S){for(const N in n){const Z=n[N];if(Z[S.id]===void 0)continue;const H=Z[S.id];for(const tt in H)u(H[tt].object),delete H[tt];delete Z[S.id]}}function D(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Qd(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function tp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==bn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const D=T===ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==kn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==In&&!D)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:F,maxSamples:P}}function ep(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new di,a=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const w=r?0:n,y=w*4;let M=p.clippingState||null;c.value=M,M=u(g,d,y,f);for(let F=0;F!==y;++F)M[F]=e[F];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,M=f;y!==_;++y,M+=4)o.copy(h[y]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function np(i){let t=new WeakMap;function e(o,a){return a===Po?o.mapping=Qi:a===Lo&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Po||a===Lo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new fh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class yl extends _l{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qi=4,ic=[.125,.215,.35,.446,.526,.582],_i=20,oo=new yl,sc=new Qt;let ao=null,co=0,lo=0,uo=!1;const pi=(1+Math.sqrt(5))/2,ki=1/pi,rc=[new U(-pi,ki,0),new U(pi,ki,0),new U(-ki,0,pi),new U(ki,0,pi),new U(0,pi,-ki),new U(0,pi,ki),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class oc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ao=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ao,co,lo),this._renderer.xr.enabled=uo,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ao=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:ks,format:bn,colorSpace:os,depthBuffer:!1},s=ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ip(r)),this._blurMaterial=sp(r,t,e)}return s}_compileMaterial(t){const e=new O(this._lodPlanes[0],t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,n,s){const a=new hn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(sc),u.toneMapping=Vn,u.autoClear=!1;const f=new Ee({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new O(new Gt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(sc),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;fr(s,w*y,p>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qi||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new O(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;fr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,oo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rc[(s-r-1)%rc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new O(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_i-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):_i;m>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const p=[];let w=0;for(let T=0;T<_i;++T){const D=T/_,E=Math.exp(-D*D/2);p.push(E),T===0?w+=E:T<m&&(w+=2*E)}for(let T=0;T<p.length;T++)p[T]=p[T]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const M=this._sizeLods[s],F=3*M*(s>y-qi?s-y+qi:0),P=4*(this._cubeSize-M);fr(e,F,P,3*M,2*M),c.setRenderTarget(e),c.render(h,oo)}}function ip(i){const t=[],e=[],n=[];let s=i;const r=i-qi+1+ic.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-qi?c=ic[o-i+qi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),y=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let P=0;P<f;P++){const T=P%3*2/3-1,D=P>2?0:-1,E=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];w.set(E,_*g*P),y.set(d,m*g*P);const S=[P,P,P,P,P,P];M.set(S,p*g*P)}const F=new Ce;F.setAttribute("position",new Ve(w,_)),F.setAttribute("uv",new Ve(y,m)),F.setAttribute("faceIndex",new Ve(M,p)),t.push(F),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ac(i,t,e){const n=new bi(i,t,e);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sp(i,t,e){const n=new Float32Array(_i),s=new U(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function cc(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function lc(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ma(){return`

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
	`}function rp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Po||c===Lo,u=c===Qi||c===ts;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new oc(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new oc(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function op(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Rs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ap(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let y=0,M=w.length;y<M;y+=3){const F=w[y+0],P=w[y+1],T=w[y+2];d.push(F,P,P,T,T,F)}}else if(g!==void 0){const w=g.array;_=g.version;for(let y=0,M=w.length/3-1;y<M;y+=3){const F=y+0,P=y+1,T=y+2;d.push(F,P,P,T,T,F)}}else return;const m=new(ll(d)?gl:ml)(d,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function cp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function lp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function up(i,t,e){const n=new WeakMap,s=new ye;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let S=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let F=a.attributes.position.count*M,P=1;F>t.maxTextureSize&&(P=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const T=new Float32Array(F*P*4*h),D=new hl(T,F,P,h);D.type=In,D.needsUpdate=!0;const E=M*4;for(let N=0;N<h;N++){const Z=p[N],H=w[N],tt=y[N],W=F*P*4*N;for(let j=0;j<Z.count;j++){const ht=j*E;g===!0&&(s.fromBufferAttribute(Z,j),T[W+ht+0]=s.x,T[W+ht+1]=s.y,T[W+ht+2]=s.z,T[W+ht+3]=0),_===!0&&(s.fromBufferAttribute(H,j),T[W+ht+4]=s.x,T[W+ht+5]=s.y,T[W+ht+6]=s.z,T[W+ht+7]=0),m===!0&&(s.fromBufferAttribute(tt,j),T[W+ht+8]=s.x,T[W+ht+9]=s.y,T[W+ht+10]=s.z,T[W+ht+11]=tt.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new Dt(F,P)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function hp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Sl extends Ze{constructor(t,e,n,s,r,o,a,c,l,u=Zi){if(u!==Zi&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zi&&(n=Ei),n===void 0&&u===ns&&(n=es),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wl=new Ze,uc=new Sl(1,1),El=new hl,bl=new Ju,Tl=new vl,hc=[],fc=[],dc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=hc[s];if(r===void 0&&(r=new Float32Array(s),hc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Dr(i,t){let e=fc[t];e===void 0&&(e=new Int32Array(t),fc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;mc.set(n),i.uniformMatrix2fv(this.addr,!1,mc),ze(e,n)}}function xp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;pc.set(n),i.uniformMatrix3fv(this.addr,!1,pc),ze(e,n)}}function _p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;dc.set(n),i.uniformMatrix4fv(this.addr,!1,dc),ze(e,n)}}function vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function Ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uc.compareFunction=cl,r=uc):r=wl,e.setTexture2D(t||r,s)}function Rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bl,s)}function Cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tl,s)}function Pp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||El,s)}function Lp(i){switch(i){case 5126:return fp;case 35664:return dp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return xp;case 35676:return _p;case 5124:case 35670:return vp;case 35667:case 35671:return Mp;case 35668:case 35672:return yp;case 35669:case 35673:return Sp;case 5125:return wp;case 36294:return Ep;case 36295:return bp;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Pp}}function Ip(i,t){i.uniform1fv(this.addr,t)}function Dp(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function Up(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function Np(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function Fp(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Op(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bp(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zp(i,t){i.uniform1iv(this.addr,t)}function Hp(i,t){i.uniform2iv(this.addr,t)}function Vp(i,t){i.uniform3iv(this.addr,t)}function Gp(i,t){i.uniform4iv(this.addr,t)}function kp(i,t){i.uniform1uiv(this.addr,t)}function Wp(i,t){i.uniform2uiv(this.addr,t)}function Xp(i,t){i.uniform3uiv(this.addr,t)}function qp(i,t){i.uniform4uiv(this.addr,t)}function $p(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||wl,r[o])}function Yp(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bl,r[o])}function Zp(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Tl,r[o])}function Jp(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||El,r[o])}function jp(i){switch(i){case 5126:return Ip;case 35664:return Dp;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return Vp;case 35669:case 35673:return Gp;case 5125:return kp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}class Kp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lp(e.type)}}class Qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jp(e.type)}}class t0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function gc(i,t){i.seq.push(t),i.map[t.id]=t}function e0(i,t,e){const n=i.name,s=n.length;for(ho.lastIndex=0;;){const r=ho.exec(n),o=ho.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){gc(e,l===void 0?new Kp(a,i,t):new Qp(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new t0(a),gc(e,h)),e=h}}}class br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);e0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function xc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const n0=37297;let i0=0;function s0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const _c=new ie;function r0(i){he._getMatrix(_c,he.workingColorSpace,i);const t=`mat3( ${_c.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Ir:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function vc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+s0(i.getShaderSource(t),o)}else return s}function o0(i,t){const e=r0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function a0(i,t){let e;switch(t){case wu:e="Linear";break;case Eu:e="Reinhard";break;case bu:e="Cineon";break;case Tu:e="ACESFilmic";break;case Ru:e="AgX";break;case Cu:e="Neutral";break;case Au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const dr=new U;function c0(){he.getLuminanceCoefficients(dr);const i=dr.x.toFixed(4),t=dr.y.toFixed(4),e=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function u0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Cs(i){return i!==""}function Mc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(i){return i.replace(f0,p0)}const d0=new Map;function p0(i,t){let e=se[t];if(e===void 0){const n=d0.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oa(e)}const m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(i){return i.replace(m0,g0)}function g0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function x0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function _0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case Lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function v0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function M0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jc:t="ENVMAP_BLENDING_MULTIPLY";break;case yu:t="ENVMAP_BLENDING_MIX";break;case Su:t="ENVMAP_BLENDING_ADD";break}return t}function y0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function S0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=x0(e),l=_0(e),u=v0(e),h=M0(e),d=y0(e),f=l0(e),g=u0(r),_=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(m=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?se.tonemapping_pars_fragment:"",e.toneMapping!==Vn?a0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,o0("linearToOutputTexel",e.outputColorSpace),c0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),o=oa(o),o=Mc(o,e),o=yc(o,e),a=oa(a),a=Mc(a,e),a=yc(a,e),o=Sc(o),a=Sc(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=w+m+o,M=w+p+a,F=xc(s,s.VERTEX_SHADER,y),P=xc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,F),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(N){if(i.debug.checkShaderErrors){const Z=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(F).trim(),tt=s.getShaderInfoLog(P).trim();let W=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,F,P);else{const ht=vc(s,F,"vertex"),et=vc(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Z+`
`+ht+`
`+et)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(H===""||tt==="")&&(j=!1);j&&(N.diagnostics={runnable:W,programLog:Z,vertexShader:{log:H,prefix:m},fragmentShader:{log:tt,prefix:p}})}s.deleteShader(F),s.deleteShader(P),D=new br(s,_),E=h0(s,_)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,n0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=P,this}let w0=0;class E0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new b0(t),e.set(t,n)),n}}class b0{constructor(t){this.id=w0++,this.code=t,this.usedTimes=0}}function T0(i,t,e,n,s,r,o){const a=new dl,c=new E0,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,N,Z,H){const tt=Z.fog,W=H.geometry,j=E.isMeshStandardMaterial?Z.environment:null,ht=(E.isMeshStandardMaterial?e:t).get(E.envMap||j),et=ht&&ht.mapping===Lr?ht.image.height:null,gt=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const vt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Et=vt!==void 0?vt.length:0;let Pt=0;W.morphAttributes.position!==void 0&&(Pt=1),W.morphAttributes.normal!==void 0&&(Pt=2),W.morphAttributes.color!==void 0&&(Pt=3);let kt,ot,it,ft;if(gt){const oe=Pn[gt];kt=oe.vertexShader,ot=oe.fragmentShader}else kt=E.vertexShader,ot=E.fragmentShader,c.update(E),it=c.getVertexShaderID(E),ft=c.getFragmentShaderID(E);const mt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),It=H.isInstancedMesh===!0,zt=H.isBatchedMesh===!0,re=!!E.map,Xt=!!E.matcap,ee=!!ht,q=!!E.aoMap,ge=!!E.lightMap,qt=!!E.bumpMap,ne=!!E.normalMap,Ht=!!E.displacementMap,K=!!E.emissiveMap,st=!!E.metalnessMap,A=!!E.roughnessMap,v=E.anisotropy>0,V=E.clearcoat>0,rt=E.dispersion>0,lt=E.iridescence>0,b=E.sheen>0,C=E.transmission>0,L=v&&!!E.anisotropyMap,z=V&&!!E.clearcoatMap,k=V&&!!E.clearcoatNormalMap,Y=V&&!!E.clearcoatRoughnessMap,J=lt&&!!E.iridescenceMap,ut=lt&&!!E.iridescenceThicknessMap,Mt=b&&!!E.sheenColorMap,xt=b&&!!E.sheenRoughnessMap,Ft=!!E.specularMap,At=!!E.specularColorMap,_t=!!E.specularIntensityMap,G=C&&!!E.transmissionMap,Tt=C&&!!E.thicknessMap,ct=!!E.gradientMap,pt=!!E.alphaMap,Lt=E.alphaTest>0,wt=!!E.alphaHash,Kt=!!E.extensions;let xe=Vn;E.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(xe=i.toneMapping);const Pe={shaderID:gt,shaderType:E.type,shaderName:E.name,vertexShader:kt,fragmentShader:ot,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:ft,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:zt,batchingColor:zt&&H._colorsTexture!==null,instancing:It,instancingColor:It&&H.instanceColor!==null,instancingMorph:It&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:os,alphaToCoverage:!!E.alphaToCoverage,map:re,matcap:Xt,envMap:ee,envMapMode:ee&&ht.mapping,envMapCubeUVHeight:et,aoMap:q,lightMap:ge,bumpMap:qt,normalMap:ne,displacementMap:d&&Ht,emissiveMap:K,normalMapObjectSpace:ne&&E.normalMapType===Du,normalMapTangentSpace:ne&&E.normalMapType===al,metalnessMap:st,roughnessMap:A,anisotropy:v,anisotropyMap:L,clearcoat:V,clearcoatMap:z,clearcoatNormalMap:k,clearcoatRoughnessMap:Y,dispersion:rt,iridescence:lt,iridescenceMap:J,iridescenceThicknessMap:ut,sheen:b,sheenColorMap:Mt,sheenRoughnessMap:xt,specularMap:Ft,specularColorMap:At,specularIntensityMap:_t,transmission:C,transmissionMap:G,thicknessMap:Tt,gradientMap:ct,opaque:E.transparent===!1&&E.blending===Yi&&E.alphaToCoverage===!1,alphaMap:pt,alphaTest:Lt,alphaHash:wt,combine:E.combine,mapUv:re&&_(E.map.channel),aoMapUv:q&&_(E.aoMap.channel),lightMapUv:ge&&_(E.lightMap.channel),bumpMapUv:qt&&_(E.bumpMap.channel),normalMapUv:ne&&_(E.normalMap.channel),displacementMapUv:Ht&&_(E.displacementMap.channel),emissiveMapUv:K&&_(E.emissiveMap.channel),metalnessMapUv:st&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:L&&_(E.anisotropyMap.channel),clearcoatMapUv:z&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:k&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(E.sheenRoughnessMap.channel),specularMapUv:Ft&&_(E.specularMap.channel),specularColorMapUv:At&&_(E.specularColorMap.channel),specularIntensityMapUv:_t&&_(E.specularIntensityMap.channel),transmissionMapUv:G&&_(E.transmissionMap.channel),thicknessMapUv:Tt&&_(E.thicknessMap.channel),alphaMapUv:pt&&_(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ne||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(re||pt),fog:!!tt,useFog:E.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:bt,skinning:H.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Pt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:re&&E.map.isVideoTexture===!0&&he.getTransfer(E.map.colorSpace)===Me,decodeVideoTextureEmissive:K&&E.emissiveMap.isVideoTexture===!0&&he.getTransfer(E.emissiveMap.colorSpace)===Me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Te,flipSided:E.side===tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Kt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&E.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)S.push(N),S.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(w(S,E),y(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function w(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function M(E){const S=g[E.type];let N;if(S){const Z=Pn[S];N=ch.clone(Z.uniforms)}else N=E.uniforms;return N}function F(E,S){let N;for(let Z=0,H=u.length;Z<H;Z++){const tt=u[Z];if(tt.cacheKey===S){N=tt,++N.usedTimes;break}}return N===void 0&&(N=new S0(i,S,E,r),u.push(N)),N}function P(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function T(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:F,releaseProgram:P,releaseShaderCache:T,programs:u,dispose:D}}function A0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function R0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ec(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||R0),n.length>1&&n.sort(d||Ec),s.length>1&&s.sort(d||Ec)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function C0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new bc,i.set(n,[o])):s>=r.length?(o=new bc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function P0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Qt};break;case"SpotLight":e={position:new U,direction:new U,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function L0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let I0=0;function D0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function U0(i){const t=new P0,e=L0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new me,o=new me;function a(l){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,y=0,M=0,F=0,P=0,T=0;l.sort(D0);for(let E=0,S=l.length;E<S;E++){const N=l[E],Z=N.color,H=N.intensity,tt=N.distance,W=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=Z.r*H,h+=Z.g*H,d+=Z.b*H;else if(N.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(N.sh.coefficients[j],H);T++}else if(N.isDirectionalLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ht=N.shadow,et=e.get(N);et.shadowIntensity=ht.intensity,et.shadowBias=ht.bias,et.shadowNormalBias=ht.normalBias,et.shadowRadius=ht.radius,et.shadowMapSize=ht.mapSize,n.directionalShadow[f]=et,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=N.shadow.matrix,w++}n.directional[f]=j,f++}else if(N.isSpotLight){const j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(Z).multiplyScalar(H),j.distance=tt,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,n.spot[_]=j;const ht=N.shadow;if(N.map&&(n.spotLightMap[F]=N.map,F++,ht.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[_]=ht.matrix,N.castShadow){const et=e.get(N);et.shadowIntensity=ht.intensity,et.shadowBias=ht.bias,et.shadowNormalBias=ht.normalBias,et.shadowRadius=ht.radius,et.shadowMapSize=ht.mapSize,n.spotShadow[_]=et,n.spotShadowMap[_]=W,M++}_++}else if(N.isRectAreaLight){const j=t.get(N);j.color.copy(Z).multiplyScalar(H),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=j,m++}else if(N.isPointLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const ht=N.shadow,et=e.get(N);et.shadowIntensity=ht.intensity,et.shadowBias=ht.bias,et.shadowNormalBias=ht.normalBias,et.shadowRadius=ht.radius,et.shadowMapSize=ht.mapSize,et.shadowCameraNear=ht.camera.near,et.shadowCameraFar=ht.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=N.shadow.matrix,y++}n.point[g]=j,g++}else if(N.isHemisphereLight){const j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(H),j.groundColor.copy(N.groundColor).multiplyScalar(H),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==w||D.numPointShadows!==y||D.numSpotShadows!==M||D.numSpotMaps!==F||D.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+F-P,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=T,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=w,D.numPointShadows=y,D.numSpotShadows=M,D.numSpotMaps=F,D.numLightProbes=T,n.version=I0++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const y=l[p];if(y.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Tc(i){const t=new U0(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function N0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Tc(i),t.set(s,[a])):r>=o.length?(a=new Tc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class F0 extends hs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class O0 extends hs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
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
}`;function H0(i,t,e){let n=new va;const s=new Dt,r=new Dt,o=new ye,a=new F0({depthPacking:Iu}),c=new O0,l={},u=e.maxTextureSize,h={[ni]:tn,[tn]:ni,[Te]:Te},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:B0,fragmentShader:z0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new O(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let p=this.type;this.render=function(P,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(ti),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const H=p!==zn&&this.type===zn,tt=p===zn&&this.type!==zn;for(let W=0,j=P.length;W<j;W++){const ht=P[W],et=ht.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;s.copy(et.mapSize);const gt=et.getFrameExtents();if(s.multiply(gt),r.copy(et.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/gt.x),s.x=r.x*gt.x,et.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/gt.y),s.y=r.y*gt.y,et.mapSize.y=r.y)),et.map===null||H===!0||tt===!0){const Et=this.type!==zn?{minFilter:fn,magFilter:fn}:{};et.map!==null&&et.map.dispose(),et.map=new bi(s.x,s.y,Et),et.map.texture.name=ht.name+".shadowMap",et.camera.updateProjectionMatrix()}i.setRenderTarget(et.map),i.clear();const vt=et.getViewportCount();for(let Et=0;Et<vt;Et++){const Pt=et.getViewport(Et);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),Z.viewport(o),et.updateMatrices(ht,Et),n=et.getFrustum(),M(T,D,et.camera,ht,this.type)}et.isPointLightShadow!==!0&&this.type===zn&&w(et,D),et.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,N)};function w(P,T){const D=t.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new bi(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(T,null,D,d,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(T,null,D,f,_,null)}function y(P,T,D,E){let S=null;const N=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)S=N;else if(S=D.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Z=S.uuid,H=T.uuid;let tt=l[Z];tt===void 0&&(tt={},l[Z]=tt);let W=tt[H];W===void 0&&(W=S.clone(),tt[H]=W,T.addEventListener("dispose",F)),S=W}if(S.visible=T.visible,S.wireframe=T.wireframe,E===zn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Z=i.properties.get(S);Z.light=D}return S}function M(P,T,D,E,S){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===zn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const H=t.update(P),tt=P.material;if(Array.isArray(tt)){const W=H.groups;for(let j=0,ht=W.length;j<ht;j++){const et=W[j],gt=tt[et.materialIndex];if(gt&&gt.visible){const vt=y(P,gt,E,S);P.onBeforeShadow(i,P,T,D,H,vt,et),i.renderBufferDirect(D,null,H,vt,P,et),P.onAfterShadow(i,P,T,D,H,vt,et)}}}else if(tt.visible){const W=y(P,tt,E,S);P.onBeforeShadow(i,P,T,D,H,W,null),i.renderBufferDirect(D,null,H,W,P,null),P.onAfterShadow(i,P,T,D,H,W,null)}}const Z=P.children;for(let H=0,tt=Z.length;H<tt;H++)M(Z[H],T,D,E,S)}function F(P){P.target.removeEventListener("dispose",F);for(const D in l){const E=l[D],S=P.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const V0={[wo]:Eo,[bo]:Ro,[To]:Co,[Ki]:Ao,[Eo]:wo,[Ro]:bo,[Co]:To,[Ao]:Ki};function G0(i,t){function e(){let G=!1;const Tt=new ye;let ct=null;const pt=new ye(0,0,0,0);return{setMask:function(Lt){ct!==Lt&&!G&&(i.colorMask(Lt,Lt,Lt,Lt),ct=Lt)},setLocked:function(Lt){G=Lt},setClear:function(Lt,wt,Kt,xe,Pe){Pe===!0&&(Lt*=xe,wt*=xe,Kt*=xe),Tt.set(Lt,wt,Kt,xe),pt.equals(Tt)===!1&&(i.clearColor(Lt,wt,Kt,xe),pt.copy(Tt))},reset:function(){G=!1,ct=null,pt.set(-1,0,0,0)}}}function n(){let G=!1,Tt=!1,ct=null,pt=null,Lt=null;return{setReversed:function(wt){if(Tt!==wt){const Kt=t.get("EXT_clip_control");Tt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT);const xe=Lt;Lt=null,this.setClear(xe)}Tt=wt},getReversed:function(){return Tt},setTest:function(wt){wt?mt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(wt){ct!==wt&&!G&&(i.depthMask(wt),ct=wt)},setFunc:function(wt){if(Tt&&(wt=V0[wt]),pt!==wt){switch(wt){case wo:i.depthFunc(i.NEVER);break;case Eo:i.depthFunc(i.ALWAYS);break;case bo:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case Ro:i.depthFunc(i.GREATER);break;case Co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=wt}},setLocked:function(wt){G=wt},setClear:function(wt){Lt!==wt&&(Tt&&(wt=1-wt),i.clearDepth(wt),Lt=wt)},reset:function(){G=!1,ct=null,pt=null,Lt=null,Tt=!1}}}function s(){let G=!1,Tt=null,ct=null,pt=null,Lt=null,wt=null,Kt=null,xe=null,Pe=null;return{setTest:function(oe){G||(oe?mt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(oe){Tt!==oe&&!G&&(i.stencilMask(oe),Tt=oe)},setFunc:function(oe,on,an){(ct!==oe||pt!==on||Lt!==an)&&(i.stencilFunc(oe,on,an),ct=oe,pt=on,Lt=an)},setOp:function(oe,on,an){(wt!==oe||Kt!==on||xe!==an)&&(i.stencilOp(oe,on,an),wt=oe,Kt=on,xe=an)},setLocked:function(oe){G=oe},setClear:function(oe){Pe!==oe&&(i.clearStencil(oe),Pe=oe)},reset:function(){G=!1,Tt=null,ct=null,pt=null,Lt=null,wt=null,Kt=null,xe=null,Pe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,y=null,M=null,F=null,P=null,T=new Qt(0,0,0),D=0,E=!1,S=null,N=null,Z=null,H=null,tt=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ht=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(et)[1]),j=ht>=1):et.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),j=ht>=2);let gt=null,vt={};const Et=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),kt=new ye().fromArray(Et),ot=new ye().fromArray(Pt);function it(G,Tt,ct,pt){const Lt=new Uint8Array(4),wt=i.createTexture();i.bindTexture(G,wt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<ct;Kt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(Tt+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return wt}const ft={};ft[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),o.setFunc(Ki),qt(!1),ne(La),mt(i.CULL_FACE),q(ti);function mt(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function bt(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function It(G,Tt){return h[G]!==Tt?(i.bindFramebuffer(G,Tt),h[G]=Tt,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Tt),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function zt(G,Tt){let ct=f,pt=!1;if(G){ct=d.get(Tt),ct===void 0&&(ct=[],d.set(Tt,ct));const Lt=G.textures;if(ct.length!==Lt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Kt=Lt.length;wt<Kt;wt++)ct[wt]=i.COLOR_ATTACHMENT0+wt;ct.length=Lt.length,pt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,pt=!0);pt&&i.drawBuffers(ct)}function re(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const Xt={[xi]:i.FUNC_ADD,[su]:i.FUNC_SUBTRACT,[ru]:i.FUNC_REVERSE_SUBTRACT};Xt[ou]=i.MIN,Xt[au]=i.MAX;const ee={[cu]:i.ZERO,[lu]:i.ONE,[uu]:i.SRC_COLOR,[yo]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[fu]:i.DST_ALPHA,[hu]:i.ONE_MINUS_SRC_COLOR,[So]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[du]:i.ONE_MINUS_DST_ALPHA,[xu]:i.CONSTANT_COLOR,[_u]:i.ONE_MINUS_CONSTANT_COLOR,[vu]:i.CONSTANT_ALPHA,[Mu]:i.ONE_MINUS_CONSTANT_ALPHA};function q(G,Tt,ct,pt,Lt,wt,Kt,xe,Pe,oe){if(G===ti){_===!0&&(bt(i.BLEND),_=!1);return}if(_===!1&&(mt(i.BLEND),_=!0),G!==iu){if(G!==m||oe!==E){if((p!==xi||M!==xi)&&(i.blendEquation(i.FUNC_ADD),p=xi,M=xi),oe)switch(G){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mn:i.blendFunc(i.ONE,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Da:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}w=null,y=null,F=null,P=null,T.set(0,0,0),D=0,m=G,E=oe}return}Lt=Lt||Tt,wt=wt||ct,Kt=Kt||pt,(Tt!==p||Lt!==M)&&(i.blendEquationSeparate(Xt[Tt],Xt[Lt]),p=Tt,M=Lt),(ct!==w||pt!==y||wt!==F||Kt!==P)&&(i.blendFuncSeparate(ee[ct],ee[pt],ee[wt],ee[Kt]),w=ct,y=pt,F=wt,P=Kt),(xe.equals(T)===!1||Pe!==D)&&(i.blendColor(xe.r,xe.g,xe.b,Pe),T.copy(xe),D=Pe),m=G,E=!1}function ge(G,Tt){G.side===Te?bt(i.CULL_FACE):mt(i.CULL_FACE);let ct=G.side===tn;Tt&&(ct=!ct),qt(ct),G.blending===Yi&&G.transparent===!1?q(ti):q(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const pt=G.stencilWrite;a.setTest(pt),pt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),K(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(G){S!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),S=G)}function ne(G){G!==tu?(mt(i.CULL_FACE),G!==N&&(G===La?i.cullFace(i.BACK):G===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),N=G}function Ht(G){G!==Z&&(j&&i.lineWidth(G),Z=G)}function K(G,Tt,ct){G?(mt(i.POLYGON_OFFSET_FILL),(H!==Tt||tt!==ct)&&(i.polygonOffset(Tt,ct),H=Tt,tt=ct)):bt(i.POLYGON_OFFSET_FILL)}function st(G){G?mt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function A(G){G===void 0&&(G=i.TEXTURE0+W-1),gt!==G&&(i.activeTexture(G),gt=G)}function v(G,Tt,ct){ct===void 0&&(gt===null?ct=i.TEXTURE0+W-1:ct=gt);let pt=vt[ct];pt===void 0&&(pt={type:void 0,texture:void 0},vt[ct]=pt),(pt.type!==G||pt.texture!==Tt)&&(gt!==ct&&(i.activeTexture(ct),gt=ct),i.bindTexture(G,Tt||ft[G]),pt.type=G,pt.texture=Tt)}function V(){const G=vt[gt];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function b(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function C(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function L(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function z(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Y(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(G){kt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),kt.copy(G))}function xt(G){ot.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ot.copy(G))}function Ft(G,Tt){let ct=l.get(Tt);ct===void 0&&(ct=new WeakMap,l.set(Tt,ct));let pt=ct.get(G);pt===void 0&&(pt=i.getUniformBlockIndex(Tt,G.name),ct.set(G,pt))}function At(G,Tt){const pt=l.get(Tt).get(G);c.get(Tt)!==pt&&(i.uniformBlockBinding(Tt,pt,G.__bindingPointIndex),c.set(Tt,pt))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},gt=null,vt={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,y=null,M=null,F=null,P=null,T=new Qt(0,0,0),D=0,E=!1,S=null,N=null,Z=null,H=null,tt=null,kt.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:bt,bindFramebuffer:It,drawBuffers:zt,useProgram:re,setBlending:q,setMaterial:ge,setFlipSided:qt,setCullFace:ne,setLineWidth:Ht,setPolygonOffset:K,setScissorTest:st,activeTexture:A,bindTexture:v,unbindTexture:V,compressedTexImage2D:rt,compressedTexImage3D:lt,texImage2D:J,texImage3D:ut,updateUBOMapping:Ft,uniformBlockBinding:At,texStorage2D:k,texStorage3D:Y,texSubImage2D:b,texSubImage3D:C,compressedTexSubImage2D:L,compressedTexSubImage3D:z,scissor:Mt,viewport:xt,reset:_t}}function Ac(i,t,e,n){const s=k0(n);switch(e){case el:return i*t;case il:return i*t;case sl:return i*t*2;case ma:return i*t/s.components*s.byteLength;case ga:return i*t/s.components*s.byteLength;case rl:return i*t*2/s.components*s.byteLength;case xa:return i*t*2/s.components*s.byteLength;case nl:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case _a:return i*t*4/s.components*s.byteLength;case Mr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sr:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uo:case Fo:return Math.max(i,16)*Math.max(t,8)/4;case Do:case No:return Math.max(i,8)*Math.max(t,8)/2;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Er:case ta:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ol:case na:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ia:case sa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function k0(i){switch(i){case kn:case Kc:return{byteLength:1,components:1};case Fs:case Qc:case ks:return{byteLength:2,components:1};case da:case pa:return{byteLength:2,components:4};case Ei:case fa:case In:return{byteLength:4,components:1};case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function W0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Dt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return f?new OffscreenCanvas(A,v):Rr("canvas")}function _(A,v,V){let rt=1;const lt=st(A);if((lt.width>V||lt.height>V)&&(rt=V/Math.max(lt.width,lt.height)),rt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const b=Math.floor(rt*lt.width),C=Math.floor(rt*lt.height);h===void 0&&(h=g(b,C));const L=v?g(b,C):h;return L.width=b,L.height=C,L.getContext("2d").drawImage(A,0,0,b,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+b+"x"+C+")."),L}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,v,V,rt,lt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let b=v;if(v===i.RED&&(V===i.FLOAT&&(b=i.R32F),V===i.HALF_FLOAT&&(b=i.R16F),V===i.UNSIGNED_BYTE&&(b=i.R8)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(b=i.R8UI),V===i.UNSIGNED_SHORT&&(b=i.R16UI),V===i.UNSIGNED_INT&&(b=i.R32UI),V===i.BYTE&&(b=i.R8I),V===i.SHORT&&(b=i.R16I),V===i.INT&&(b=i.R32I)),v===i.RG&&(V===i.FLOAT&&(b=i.RG32F),V===i.HALF_FLOAT&&(b=i.RG16F),V===i.UNSIGNED_BYTE&&(b=i.RG8)),v===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(b=i.RG8UI),V===i.UNSIGNED_SHORT&&(b=i.RG16UI),V===i.UNSIGNED_INT&&(b=i.RG32UI),V===i.BYTE&&(b=i.RG8I),V===i.SHORT&&(b=i.RG16I),V===i.INT&&(b=i.RG32I)),v===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(b=i.RGB8UI),V===i.UNSIGNED_SHORT&&(b=i.RGB16UI),V===i.UNSIGNED_INT&&(b=i.RGB32UI),V===i.BYTE&&(b=i.RGB8I),V===i.SHORT&&(b=i.RGB16I),V===i.INT&&(b=i.RGB32I)),v===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(b=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(b=i.RGBA16UI),V===i.UNSIGNED_INT&&(b=i.RGBA32UI),V===i.BYTE&&(b=i.RGBA8I),V===i.SHORT&&(b=i.RGBA16I),V===i.INT&&(b=i.RGBA32I)),v===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(b=i.RGB9_E5),v===i.RGBA){const C=lt?Ir:he.getTransfer(rt);V===i.FLOAT&&(b=i.RGBA32F),V===i.HALF_FLOAT&&(b=i.RGBA16F),V===i.UNSIGNED_BYTE&&(b=C===Me?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(b=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(b=i.RGB5_A1)}return(b===i.R16F||b===i.R32F||b===i.RG16F||b===i.RG32F||b===i.RGBA16F||b===i.RGBA32F)&&t.get("EXT_color_buffer_float"),b}function M(A,v){let V;return A?v===null||v===Ei||v===es?V=i.DEPTH24_STENCIL8:v===In?V=i.DEPTH32F_STENCIL8:v===Fs&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ei||v===es?V=i.DEPTH_COMPONENT24:v===In?V=i.DEPTH_COMPONENT32F:v===Fs&&(V=i.DEPTH_COMPONENT16),V}function F(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==fn&&A.minFilter!==Ln?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function P(A){const v=A.target;v.removeEventListener("dispose",P),D(v),v.isVideoTexture&&u.delete(v)}function T(A){const v=A.target;v.removeEventListener("dispose",T),S(v)}function D(A){const v=n.get(A);if(v.__webglInit===void 0)return;const V=A.source,rt=d.get(V);if(rt){const lt=rt[v.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&E(A),Object.keys(rt).length===0&&d.delete(V)}n.remove(A)}function E(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const V=A.source,rt=d.get(V);delete rt[v.__cacheKey],o.memory.textures--}function S(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(v.__webglFramebuffer[rt]))for(let lt=0;lt<v.__webglFramebuffer[rt].length;lt++)i.deleteFramebuffer(v.__webglFramebuffer[rt][lt]);else i.deleteFramebuffer(v.__webglFramebuffer[rt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[rt])}else{if(Array.isArray(v.__webglFramebuffer))for(let rt=0;rt<v.__webglFramebuffer.length;rt++)i.deleteFramebuffer(v.__webglFramebuffer[rt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let rt=0;rt<v.__webglColorRenderbuffer.length;rt++)v.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[rt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const V=A.textures;for(let rt=0,lt=V.length;rt<lt;rt++){const b=n.get(V[rt]);b.__webglTexture&&(i.deleteTexture(b.__webglTexture),o.memory.textures--),n.remove(V[rt])}n.remove(A)}let N=0;function Z(){N=0}function H(){const A=N;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function tt(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function W(A,v){const V=n.get(A);if(A.isVideoTexture&&Ht(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const rt=A.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(V,A,v);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function j(A,v){const V=n.get(A);if(A.version>0&&V.__version!==A.version){ot(V,A,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function ht(A,v){const V=n.get(A);if(A.version>0&&V.__version!==A.version){ot(V,A,v);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function et(A,v){const V=n.get(A);if(A.version>0&&V.__version!==A.version){it(V,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}const gt={[Ns]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},vt={[fn]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},Et={[Uu]:i.NEVER,[Hu]:i.ALWAYS,[Nu]:i.LESS,[cl]:i.LEQUAL,[Fu]:i.EQUAL,[zu]:i.GEQUAL,[Ou]:i.GREATER,[Bu]:i.NOTEQUAL};function Pt(A,v){if(v.type===In&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ln||v.magFilter===Or||v.magFilter===$s||v.magFilter===yi||v.minFilter===Ln||v.minFilter===Or||v.minFilter===$s||v.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,gt[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,gt[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,gt[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,vt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,vt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===fn||v.minFilter!==$s&&v.minFilter!==yi||v.type===In&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function kt(A,v){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",P));const rt=v.source;let lt=d.get(rt);lt===void 0&&(lt={},d.set(rt,lt));const b=tt(v);if(b!==A.__cacheKey){lt[b]===void 0&&(lt[b]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),lt[b].usedTimes++;const C=lt[A.__cacheKey];C!==void 0&&(lt[A.__cacheKey].usedTimes--,C.usedTimes===0&&E(v)),A.__cacheKey=b,A.__webglTexture=lt[b].texture}return V}function ot(A,v,V){let rt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(rt=i.TEXTURE_3D);const lt=kt(A,v),b=v.source;e.bindTexture(rt,A.__webglTexture,i.TEXTURE0+V);const C=n.get(b);if(b.version!==C.__version||lt===!0){e.activeTexture(i.TEXTURE0+V);const L=he.getPrimaries(he.workingColorSpace),z=v.colorSpace===Qn?null:he.getPrimaries(v.colorSpace),k=v.colorSpace===Qn||L===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let Y=_(v.image,!1,s.maxTextureSize);Y=K(v,Y);const J=r.convert(v.format,v.colorSpace),ut=r.convert(v.type);let Mt=y(v.internalFormat,J,ut,v.colorSpace,v.isVideoTexture);Pt(rt,v);let xt;const Ft=v.mipmaps,At=v.isVideoTexture!==!0,_t=C.__version===void 0||lt===!0,G=b.dataReady,Tt=F(v,Y);if(v.isDepthTexture)Mt=M(v.format===ns,v.type),_t&&(At?e.texStorage2D(i.TEXTURE_2D,1,Mt,Y.width,Y.height):e.texImage2D(i.TEXTURE_2D,0,Mt,Y.width,Y.height,0,J,ut,null));else if(v.isDataTexture)if(Ft.length>0){At&&_t&&e.texStorage2D(i.TEXTURE_2D,Tt,Mt,Ft[0].width,Ft[0].height);for(let ct=0,pt=Ft.length;ct<pt;ct++)xt=Ft[ct],At?G&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,J,ut,xt.data):e.texImage2D(i.TEXTURE_2D,ct,Mt,xt.width,xt.height,0,J,ut,xt.data);v.generateMipmaps=!1}else At?(_t&&e.texStorage2D(i.TEXTURE_2D,Tt,Mt,Y.width,Y.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Y.width,Y.height,J,ut,Y.data)):e.texImage2D(i.TEXTURE_2D,0,Mt,Y.width,Y.height,0,J,ut,Y.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){At&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Mt,Ft[0].width,Ft[0].height,Y.depth);for(let ct=0,pt=Ft.length;ct<pt;ct++)if(xt=Ft[ct],v.format!==bn)if(J!==null)if(At){if(G)if(v.layerUpdates.size>0){const Lt=Ac(xt.width,xt.height,v.format,v.type);for(const wt of v.layerUpdates){const Kt=xt.data.subarray(wt*Lt/xt.data.BYTES_PER_ELEMENT,(wt+1)*Lt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,wt,xt.width,xt.height,1,J,Kt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,xt.width,xt.height,Y.depth,J,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Mt,xt.width,xt.height,Y.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else At?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,xt.width,xt.height,Y.depth,J,ut,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Mt,xt.width,xt.height,Y.depth,0,J,ut,xt.data)}else{At&&_t&&e.texStorage2D(i.TEXTURE_2D,Tt,Mt,Ft[0].width,Ft[0].height);for(let ct=0,pt=Ft.length;ct<pt;ct++)xt=Ft[ct],v.format!==bn?J!==null?At?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,J,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Mt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?G&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,J,ut,xt.data):e.texImage2D(i.TEXTURE_2D,ct,Mt,xt.width,xt.height,0,J,ut,xt.data)}else if(v.isDataArrayTexture)if(At){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Mt,Y.width,Y.height,Y.depth),G)if(v.layerUpdates.size>0){const ct=Ac(Y.width,Y.height,v.format,v.type);for(const pt of v.layerUpdates){const Lt=Y.data.subarray(pt*ct/Y.data.BYTES_PER_ELEMENT,(pt+1)*ct/Y.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,Y.width,Y.height,1,J,ut,Lt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,J,ut,Y.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,Y.width,Y.height,Y.depth,0,J,ut,Y.data);else if(v.isData3DTexture)At?(_t&&e.texStorage3D(i.TEXTURE_3D,Tt,Mt,Y.width,Y.height,Y.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,J,ut,Y.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,Y.width,Y.height,Y.depth,0,J,ut,Y.data);else if(v.isFramebufferTexture){if(_t)if(At)e.texStorage2D(i.TEXTURE_2D,Tt,Mt,Y.width,Y.height);else{let ct=Y.width,pt=Y.height;for(let Lt=0;Lt<Tt;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Mt,ct,pt,0,J,ut,null),ct>>=1,pt>>=1}}else if(Ft.length>0){if(At&&_t){const ct=st(Ft[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Mt,ct.width,ct.height)}for(let ct=0,pt=Ft.length;ct<pt;ct++)xt=Ft[ct],At?G&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,J,ut,xt):e.texImage2D(i.TEXTURE_2D,ct,Mt,J,ut,xt);v.generateMipmaps=!1}else if(At){if(_t){const ct=st(Y);e.texStorage2D(i.TEXTURE_2D,Tt,Mt,ct.width,ct.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J,ut,Y)}else e.texImage2D(i.TEXTURE_2D,0,Mt,J,ut,Y);m(v)&&p(rt),C.__version=b.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function it(A,v,V){if(v.image.length!==6)return;const rt=kt(A,v),lt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const b=n.get(lt);if(lt.version!==b.__version||rt===!0){e.activeTexture(i.TEXTURE0+V);const C=he.getPrimaries(he.workingColorSpace),L=v.colorSpace===Qn?null:he.getPrimaries(v.colorSpace),z=v.colorSpace===Qn||C===L?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);const k=v.isCompressedTexture||v.image[0].isCompressedTexture,Y=v.image[0]&&v.image[0].isDataTexture,J=[];for(let pt=0;pt<6;pt++)!k&&!Y?J[pt]=_(v.image[pt],!0,s.maxCubemapSize):J[pt]=Y?v.image[pt].image:v.image[pt],J[pt]=K(v,J[pt]);const ut=J[0],Mt=r.convert(v.format,v.colorSpace),xt=r.convert(v.type),Ft=y(v.internalFormat,Mt,xt,v.colorSpace),At=v.isVideoTexture!==!0,_t=b.__version===void 0||rt===!0,G=lt.dataReady;let Tt=F(v,ut);Pt(i.TEXTURE_CUBE_MAP,v);let ct;if(k){At&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Ft,ut.width,ut.height);for(let pt=0;pt<6;pt++){ct=J[pt].mipmaps;for(let Lt=0;Lt<ct.length;Lt++){const wt=ct[Lt];v.format!==bn?Mt!==null?At?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt,0,0,wt.width,wt.height,Mt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt,Ft,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt,0,0,wt.width,wt.height,Mt,xt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt,Ft,wt.width,wt.height,0,Mt,xt,wt.data)}}}else{if(ct=v.mipmaps,At&&_t){ct.length>0&&Tt++;const pt=st(J[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Ft,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Y){At?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,J[pt].width,J[pt].height,Mt,xt,J[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Ft,J[pt].width,J[pt].height,0,Mt,xt,J[pt].data);for(let Lt=0;Lt<ct.length;Lt++){const Kt=ct[Lt].image[pt].image;At?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt+1,0,0,Kt.width,Kt.height,Mt,xt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt+1,Ft,Kt.width,Kt.height,0,Mt,xt,Kt.data)}}else{At?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Mt,xt,J[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Ft,Mt,xt,J[pt]);for(let Lt=0;Lt<ct.length;Lt++){const wt=ct[Lt];At?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt+1,0,0,Mt,xt,wt.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt+1,Ft,Mt,xt,wt.image[pt])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),b.__version=lt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ft(A,v,V,rt,lt,b){const C=r.convert(V.format,V.colorSpace),L=r.convert(V.type),z=y(V.internalFormat,C,L,V.colorSpace),k=n.get(v),Y=n.get(V);if(Y.__renderTarget=v,!k.__hasExternalTextures){const J=Math.max(1,v.width>>b),ut=Math.max(1,v.height>>b);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,b,z,J,ut,v.depth,0,C,L,null):e.texImage2D(lt,b,z,J,ut,0,C,L,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ne(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,lt,Y.__webglTexture,0,qt(v)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,lt,Y.__webglTexture,b),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(A,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const rt=v.depthTexture,lt=rt&&rt.isDepthTexture?rt.type:null,b=M(v.stencilBuffer,lt),C=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=qt(v);ne(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,b,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,b,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,b,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,A)}else{const rt=v.textures;for(let lt=0;lt<rt.length;lt++){const b=rt[lt],C=r.convert(b.format,b.colorSpace),L=r.convert(b.type),z=y(b.internalFormat,C,L,b.colorSpace),k=qt(v);V&&ne(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,k,z,v.width,v.height):ne(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k,z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,z,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(v.depthTexture);rt.__renderTarget=v,(!rt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const lt=rt.__webglTexture,b=qt(v);if(v.depthTexture.format===Zi)ne(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(v.depthTexture.format===ns)ne(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function It(A){const v=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const rt=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),rt){const lt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,rt.removeEventListener("dispose",lt)};rt.addEventListener("dispose",lt),v.__depthDisposeCallback=lt}v.__boundDepthTexture=rt}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");bt(v.__webglFramebuffer,A)}else if(V){v.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[rt]),v.__webglDepthbuffer[rt]===void 0)v.__webglDepthbuffer[rt]=i.createRenderbuffer(),mt(v.__webglDepthbuffer[rt],A,!1);else{const lt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,b=v.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,b),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,b)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),mt(v.__webglDepthbuffer,A,!1);else{const rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(A,v,V){const rt=n.get(A);v!==void 0&&ft(rt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&It(A)}function re(A){const v=A.texture,V=n.get(A),rt=n.get(v);A.addEventListener("dispose",T);const lt=A.textures,b=A.isWebGLCubeRenderTarget===!0,C=lt.length>1;if(C||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=v.version,o.memory.textures++),b){V.__webglFramebuffer=[];for(let L=0;L<6;L++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[L]=[];for(let z=0;z<v.mipmaps.length;z++)V.__webglFramebuffer[L][z]=i.createFramebuffer()}else V.__webglFramebuffer[L]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let L=0;L<v.mipmaps.length;L++)V.__webglFramebuffer[L]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(C)for(let L=0,z=lt.length;L<z;L++){const k=n.get(lt[L]);k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&ne(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let L=0;L<lt.length;L++){const z=lt[L];V.__webglColorRenderbuffer[L]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[L]);const k=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),J=y(z.internalFormat,k,Y,z.colorSpace,A.isXRRenderTarget===!0),ut=qt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,V.__webglColorRenderbuffer[L])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(b){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,v);for(let L=0;L<6;L++)if(v.mipmaps&&v.mipmaps.length>0)for(let z=0;z<v.mipmaps.length;z++)ft(V.__webglFramebuffer[L][z],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,z);else ft(V.__webglFramebuffer[L],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(C){for(let L=0,z=lt.length;L<z;L++){const k=lt[L],Y=n.get(k);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture),Pt(i.TEXTURE_2D,k),ft(V.__webglFramebuffer,A,k,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,0),m(k)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let L=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(L=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(L,rt.__webglTexture),Pt(L,v),v.mipmaps&&v.mipmaps.length>0)for(let z=0;z<v.mipmaps.length;z++)ft(V.__webglFramebuffer[z],A,v,i.COLOR_ATTACHMENT0,L,z);else ft(V.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,L,0);m(v)&&p(L),e.unbindTexture()}A.depthBuffer&&It(A)}function Xt(A){const v=A.textures;for(let V=0,rt=v.length;V<rt;V++){const lt=v[V];if(m(lt)){const b=w(A),C=n.get(lt).__webglTexture;e.bindTexture(b,C),p(b),e.unbindTexture()}}}const ee=[],q=[];function ge(A){if(A.samples>0){if(ne(A)===!1){const v=A.textures,V=A.width,rt=A.height;let lt=i.COLOR_BUFFER_BIT;const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=n.get(A),L=v.length>1;if(L)for(let z=0;z<v.length;z++)e.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,C.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,C.__webglFramebuffer);for(let z=0;z<v.length;z++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),L){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,C.__webglColorRenderbuffer[z]);const k=n.get(v[z]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,V,rt,0,0,V,rt,lt,i.NEAREST),c===!0&&(ee.length=0,q.length=0,ee.push(i.COLOR_ATTACHMENT0+z),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ee.push(b),q.push(b),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),L)for(let z=0;z<v.length;z++){e.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,C.__webglColorRenderbuffer[z]);const k=n.get(v[z]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,k,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,C.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function qt(A){return Math.min(s.maxSamples,A.samples)}function ne(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ht(A){const v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function K(A,v){const V=A.colorSpace,rt=A.format,lt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==os&&V!==Qn&&(he.getTransfer(V)===Me?(rt!==bn||lt!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function st(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=Z,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=ht,this.setTextureCube=et,this.rebindTextures=zt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=ne}function X0(i,t){function e(n,s=Qn){let r;const o=he.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===da)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return i.BYTE;if(n===Qc)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===fa)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===ks)return i.HALF_FLOAT;if(n===el)return i.ALPHA;if(n===nl)return i.RGB;if(n===bn)return i.RGBA;if(n===il)return i.LUMINANCE;if(n===sl)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===ma)return i.RED;if(n===ga)return i.RED_INTEGER;if(n===rl)return i.RG;if(n===xa)return i.RG_INTEGER;if(n===_a)return i.RGBA_INTEGER;if(n===Mr||n===yr||n===Sr||n===wr)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===Uo||n===No||n===Fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===Bo||n===zo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oo||n===Bo)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ho||n===Vo||n===Go||n===ko||n===Wo||n===Xo||n===qo||n===$o||n===Yo||n===Zo||n===Jo||n===jo||n===Ko||n===Qo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ho)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Go)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ko)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===ta||n===ea)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Er)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===na||n===ia||n===sa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class q0 extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class te extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $0={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
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

}`;class J0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ii({vertexShader:Y0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new O(new De(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j0 extends as{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new J0,m=e.getContextAttributes();let p=null,w=null;const y=[],M=[],F=new Dt;let P=null;const T=new hn;T.viewport=new ye;const D=new hn;D.viewport=new ye;const E=[T,D],S=new q0;let N=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let it=y[ot];return it===void 0&&(it=new fo,y[ot]=it),it.getTargetRaySpace()},this.getControllerGrip=function(ot){let it=y[ot];return it===void 0&&(it=new fo,y[ot]=it),it.getGripSpace()},this.getHand=function(ot){let it=y[ot];return it===void 0&&(it=new fo,y[ot]=it),it.getHandSpace()};function H(ot){const it=M.indexOf(ot.inputSource);if(it===-1)return;const ft=y[it];ft!==void 0&&(ft.update(ot.inputSource,ot.frame,l||o),ft.dispatchEvent({type:ot.type,data:ot.inputSource}))}function tt(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",W);for(let ot=0;ot<y.length;ot++){const it=M[ot];it!==null&&(M[ot]=null,y[ot].disconnect(it))}N=null,Z=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,w=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ot){l=ot},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new bi(f.framebufferWidth,f.framebufferHeight,{format:bn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,ft=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?ns:Zi,ft=m.stencil?es:Ei);const bt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new bi(d.textureWidth,d.textureHeight,{format:bn,type:kn,depthTexture:new Sl(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(ot){for(let it=0;it<ot.removed.length;it++){const ft=ot.removed[it],mt=M.indexOf(ft);mt>=0&&(M[mt]=null,y[mt].disconnect(ft))}for(let it=0;it<ot.added.length;it++){const ft=ot.added[it];let mt=M.indexOf(ft);if(mt===-1){for(let It=0;It<y.length;It++)if(It>=M.length){M.push(ft),mt=It;break}else if(M[It]===null){M[It]=ft,mt=It;break}if(mt===-1)break}const bt=y[mt];bt&&bt.connect(ft)}}const j=new U,ht=new U;function et(ot,it,ft){j.setFromMatrixPosition(it.matrixWorld),ht.setFromMatrixPosition(ft.matrixWorld);const mt=j.distanceTo(ht),bt=it.projectionMatrix.elements,It=ft.projectionMatrix.elements,zt=bt[14]/(bt[10]-1),re=bt[14]/(bt[10]+1),Xt=(bt[9]+1)/bt[5],ee=(bt[9]-1)/bt[5],q=(bt[8]-1)/bt[0],ge=(It[8]+1)/It[0],qt=zt*q,ne=zt*ge,Ht=mt/(-q+ge),K=Ht*-q;if(it.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(K),ot.translateZ(Ht),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),bt[10]===-1)ot.projectionMatrix.copy(it.projectionMatrix),ot.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const st=zt+Ht,A=re+Ht,v=qt-K,V=ne+(mt-K),rt=Xt*re/A*st,lt=ee*re/A*st;ot.projectionMatrix.makePerspective(v,V,rt,lt,st,A),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function gt(ot,it){it===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(it.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let it=ot.near,ft=ot.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),S.near=D.near=T.near=it,S.far=D.far=T.far=ft,(N!==S.near||Z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,Z=S.far),T.layers.mask=ot.layers.mask|2,D.layers.mask=ot.layers.mask|4,S.layers.mask=T.layers.mask|D.layers.mask;const mt=ot.parent,bt=S.cameras;gt(S,mt);for(let It=0;It<bt.length;It++)gt(bt[It],mt);bt.length===2?et(S,T,D):S.projectionMatrix.copy(T.projectionMatrix),vt(ot,S,mt)};function vt(ot,it,ft){ft===null?ot.matrix.copy(it.matrixWorld):(ot.matrix.copy(ft.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(it.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(it.projectionMatrix),ot.projectionMatrixInverse.copy(it.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=ra*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ot){c=ot,d!==null&&(d.fixedFoveation=ot),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ot)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Et=null;function Pt(ot,it){if(u=it.getViewerPose(l||o),g=it,u!==null){const ft=u.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let mt=!1;ft.length!==S.cameras.length&&(S.cameras.length=0,mt=!0);for(let It=0;It<ft.length;It++){const zt=ft[It];let re=null;if(f!==null)re=f.getViewport(zt);else{const ee=h.getViewSubImage(d,zt);re=ee.viewport,It===0&&(t.setRenderTargetTextures(w,ee.colorTexture,d.ignoreDepthValues?void 0:ee.depthStencilTexture),t.setRenderTarget(w))}let Xt=E[It];Xt===void 0&&(Xt=new hn,Xt.layers.enable(It),Xt.viewport=new ye,E[It]=Xt),Xt.matrix.fromArray(zt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(zt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(re.x,re.y,re.width,re.height),It===0&&(S.matrix.copy(Xt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),mt===!0&&S.cameras.push(Xt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const It=h.getDepthInformation(ft[0]);It&&It.isValid&&It.texture&&_.init(t,It,s.renderState)}}for(let ft=0;ft<y.length;ft++){const mt=M[ft],bt=y[ft];mt!==null&&bt!==void 0&&bt.update(mt,it,l||o)}Et&&Et(ot,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const kt=new Ml;kt.setAnimationLoop(Pt),this.setAnimationLoop=function(ot){Et=ot},this.dispose=function(){}}}const fi=new Qe,K0=new me;function Q0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),y=w.envMap,M=w.envMapRotation;y&&(m.envMap.value=y,fi.copy(M),fi.x*=-1,fi.y*=-1,fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(fi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,y){const M=y.program;n.uniformBlockBinding(w,M)}function l(w,y){let M=s[w.id];M===void 0&&(g(w),M=u(w),s[w.id]=M,w.addEventListener("dispose",m));const F=y.program;n.updateUBOMapping(w,F);const P=t.render.frame;r[w.id]!==P&&(d(w),r[w.id]=P)}function u(w){const y=h();w.__bindingPointIndex=y;const M=i.createBuffer(),F=w.__size,P=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,F,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const y=s[w.id],M=w.uniforms,F=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,T=M.length;P<T;P++){const D=Array.isArray(M[P])?M[P]:[M[P]];for(let E=0,S=D.length;E<S;E++){const N=D[E];if(f(N,P,E,F)===!0){const Z=N.__offset,H=Array.isArray(N.value)?N.value:[N.value];let tt=0;for(let W=0;W<H.length;W++){const j=H[W],ht=_(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,Z+tt,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,tt),tt+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,y,M,F){const P=w.value,T=y+"_"+M;if(F[T]===void 0)return typeof P=="number"||typeof P=="boolean"?F[T]=P:F[T]=P.clone(),!0;{const D=F[T];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return F[T]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(w){const y=w.uniforms;let M=0;const F=16;for(let T=0,D=y.length;T<D;T++){const E=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,N=E.length;S<N;S++){const Z=E[S],H=Array.isArray(Z.value)?Z.value:[Z.value];for(let tt=0,W=H.length;tt<W;tt++){const j=H[tt],ht=_(j),et=M%F,gt=et%ht.boundary,vt=et+gt;M+=gt,vt!==0&&F-vt<ht.storage&&(M+=F-vt),Z.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=M,M+=ht.storage}}}const P=M%F;return P>0&&(M+=F-P),w.__size=M,w.__cache={},this}function _(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){const y=w.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class em{constructor(t={}){const{canvas:e=Gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=Vn,this.toneMappingExposure=1;const M=this;let F=!1,P=0,T=0,D=null,E=-1,S=null;const N=new ye,Z=new ye;let H=null;const tt=new Qt(0);let W=0,j=e.width,ht=e.height,et=1,gt=null,vt=null;const Et=new ye(0,0,j,ht),Pt=new ye(0,0,j,ht);let kt=!1;const ot=new va;let it=!1,ft=!1;const mt=new me,bt=new me,It=new U,zt=new ye,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function ee(){return D===null?et:1}let q=n;function ge(R,X){return e.getContext(R,X)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ha}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),q===null){const X="webgl2";if(q=ge(X,R),q===null)throw ge(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let qt,ne,Ht,K,st,A,v,V,rt,lt,b,C,L,z,k,Y,J,ut,Mt,xt,Ft,At,_t,G;function Tt(){qt=new op(q),qt.init(),At=new X0(q,qt),ne=new tp(q,qt,t,At),Ht=new G0(q,qt),ne.reverseDepthBuffer&&d&&Ht.buffers.depth.setReversed(!0),K=new lp(q),st=new A0,A=new W0(q,qt,Ht,st,ne,At,K),v=new np(M),V=new rp(M),rt=new mh(q),_t=new Kd(q,rt),lt=new ap(q,rt,K,_t),b=new hp(q,lt,rt,K),Mt=new up(q,ne,A),Y=new ep(st),C=new T0(M,v,V,qt,ne,_t,Y),L=new Q0(M,st),z=new C0,k=new N0(qt),ut=new jd(M,v,V,Ht,b,f,c),J=new H0(M,b,ne),G=new tm(q,K,ne,Ht),xt=new Qd(q,qt,K),Ft=new cp(q,qt,K),K.programs=C.programs,M.capabilities=ne,M.extensions=qt,M.properties=st,M.renderLists=z,M.shadowMap=J,M.state=Ht,M.info=K}Tt();const ct=new j0(M,q);this.xr=ct,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=qt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=qt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(R){R!==void 0&&(et=R,this.setSize(j,ht,!1))},this.getSize=function(R){return R.set(j,ht)},this.setSize=function(R,X,nt=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=R,ht=X,e.width=Math.floor(R*et),e.height=Math.floor(X*et),nt===!0&&(e.style.width=R+"px",e.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(j*et,ht*et).floor()},this.setDrawingBufferSize=function(R,X,nt){j=R,ht=X,et=nt,e.width=Math.floor(R*nt),e.height=Math.floor(X*nt),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(Et)},this.setViewport=function(R,X,nt,Q){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,X,nt,Q),Ht.viewport(N.copy(Et).multiplyScalar(et).round())},this.getScissor=function(R){return R.copy(Pt)},this.setScissor=function(R,X,nt,Q){R.isVector4?Pt.set(R.x,R.y,R.z,R.w):Pt.set(R,X,nt,Q),Ht.scissor(Z.copy(Pt).multiplyScalar(et).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(R){Ht.setScissorTest(kt=R)},this.setOpaqueSort=function(R){gt=R},this.setTransparentSort=function(R){vt=R},this.getClearColor=function(R){return R.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(R=!0,X=!0,nt=!0){let Q=0;if(R){let $=!1;if(D!==null){const yt=D.texture.format;$=yt===_a||yt===xa||yt===ga}if($){const yt=D.texture.type,Ct=yt===kn||yt===Ei||yt===Fs||yt===es||yt===da||yt===pa,Ot=ut.getClearColor(),Nt=ut.getClearAlpha(),$t=Ot.r,Jt=Ot.g,Bt=Ot.b;Ct?(g[0]=$t,g[1]=Jt,g[2]=Bt,g[3]=Nt,q.clearBufferuiv(q.COLOR,0,g)):(_[0]=$t,_[1]=Jt,_[2]=Bt,_[3]=Nt,q.clearBufferiv(q.COLOR,0,_))}else Q|=q.COLOR_BUFFER_BIT}X&&(Q|=q.DEPTH_BUFFER_BIT),nt&&(Q|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),z.dispose(),k.dispose(),st.dispose(),v.dispose(),V.dispose(),b.dispose(),_t.dispose(),G.dispose(),C.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Tn),ct.removeEventListener("sessionend",gn),xn.stop()};function pt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=K.autoReset,X=J.enabled,nt=J.autoUpdate,Q=J.needsUpdate,$=J.type;Tt(),K.autoReset=R,J.enabled=X,J.autoUpdate=nt,J.needsUpdate=Q,J.type=$}function wt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Kt(R){const X=R.target;X.removeEventListener("dispose",Kt),xe(X)}function xe(R){Pe(R),st.remove(R)}function Pe(R){const X=st.get(R).programs;X!==void 0&&(X.forEach(function(nt){C.releaseProgram(nt)}),R.isShaderMaterial&&C.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,nt,Q,$,yt){X===null&&(X=re);const Ct=$.isMesh&&$.matrixWorld.determinant()<0,Ot=gs(R,X,nt,Q,$);Ht.setMaterial(Q,Ct);let Nt=nt.index,$t=1;if(Q.wireframe===!0){if(Nt=lt.getWireframeAttribute(nt),Nt===void 0)return;$t=2}const Jt=nt.drawRange,Bt=nt.attributes.position;let ae=Jt.start*$t,ue=(Jt.start+Jt.count)*$t;yt!==null&&(ae=Math.max(ae,yt.start*$t),ue=Math.min(ue,(yt.start+yt.count)*$t)),Nt!==null?(ae=Math.max(ae,0),ue=Math.min(ue,Nt.count)):Bt!=null&&(ae=Math.max(ae,0),ue=Math.min(ue,Bt.count));const _e=ue-ae;if(_e<0||_e===1/0)return;_t.setup($,Q,Ot,nt,Nt);let We,ce=xt;if(Nt!==null&&(We=rt.get(Nt),ce=Ft,ce.setIndex(We)),$.isMesh)Q.wireframe===!0?(Ht.setLineWidth(Q.wireframeLinewidth*ee()),ce.setMode(q.LINES)):ce.setMode(q.TRIANGLES);else if($.isLine){let Vt=Q.linewidth;Vt===void 0&&(Vt=1),Ht.setLineWidth(Vt*ee()),$.isLineSegments?ce.setMode(q.LINES):$.isLineLoop?ce.setMode(q.LINE_LOOP):ce.setMode(q.LINE_STRIP)}else $.isPoints?ce.setMode(q.POINTS):$.isSprite&&ce.setMode(q.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ce.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))ce.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Vt=$._multiDrawStarts,vn=$._multiDrawCounts,de=$._multiDrawCount,cn=Nt?rt.get(Nt).bytesPerElement:1,Le=st.get(Q).currentProgram.getUniforms();for(let Ge=0;Ge<de;Ge++)Le.setValue(q,"_gl_DrawID",Ge),ce.render(Vt[Ge]/cn,vn[Ge])}else if($.isInstancedMesh)ce.renderInstances(ae,_e,$.count);else if(nt.isInstancedBufferGeometry){const Vt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,vn=Math.min(nt.instanceCount,Vt);ce.renderInstances(ae,_e,vn)}else ce.render(ae,_e)};function oe(R,X,nt){R.transparent===!0&&R.side===Te&&R.forceSinglePass===!1?(R.side=tn,R.needsUpdate=!0,_n(R,X,nt),R.side=ni,R.needsUpdate=!0,_n(R,X,nt),R.side=Te):_n(R,X,nt)}this.compile=function(R,X,nt=null){nt===null&&(nt=R),p=k.get(nt),p.init(X),y.push(p),nt.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),R!==nt&&R.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const Q=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const yt=$.material;if(yt)if(Array.isArray(yt))for(let Ct=0;Ct<yt.length;Ct++){const Ot=yt[Ct];oe(Ot,nt,$),Q.add(Ot)}else oe(yt,nt,$),Q.add(yt)}),y.pop(),p=null,Q},this.compileAsync=function(R,X,nt=null){const Q=this.compile(R,X,nt);return new Promise($=>{function yt(){if(Q.forEach(function(Ct){st.get(Ct).currentProgram.isReady()&&Q.delete(Ct)}),Q.size===0){$(R);return}setTimeout(yt,10)}qt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let on=null;function an(R){on&&on(R)}function Tn(){xn.stop()}function gn(){xn.start()}const xn=new Ml;xn.setAnimationLoop(an),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(R){on=R,ct.setAnimationLoop(R),R===null?xn.stop():xn.start()},ct.addEventListener("sessionstart",Tn),ct.addEventListener("sessionend",gn),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(X),X=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,X,D),p=k.get(R,y.length),p.init(X),y.push(p),bt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ot.setFromProjectionMatrix(bt),ft=this.localClippingEnabled,it=Y.init(this.clippingPlanes,ft),m=z.get(R,w.length),m.init(),w.push(m),ct.enabled===!0&&ct.isPresenting===!0){const yt=M.xr.getDepthSensingMesh();yt!==null&&An(yt,X,-1/0,M.sortObjects)}An(R,X,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(gt,vt),Xt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Xt&&ut.addToRenderList(m,R),this.info.render.frame++,it===!0&&Y.beginShadows();const nt=p.state.shadowsArray;J.render(nt,R,X),it===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,$=m.transmissive;if(p.setupLights(),X.isArrayCamera){const yt=X.cameras;if($.length>0)for(let Ct=0,Ot=yt.length;Ct<Ot;Ct++){const Nt=yt[Ct];si(Q,$,R,Nt)}Xt&&ut.render(R);for(let Ct=0,Ot=yt.length;Ct<Ot;Ct++){const Nt=yt[Ct];ds(m,R,Nt,Nt.viewport)}}else $.length>0&&si(Q,$,R,X),Xt&&ut.render(R),ds(m,R,X);D!==null&&(A.updateMultisampleRenderTarget(D),A.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(M,R,X),_t.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],it===!0&&Y.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function An(R,X,nt,Q){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)nt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ot.intersectsSprite(R)){Q&&zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(bt);const Ct=b.update(R),Ot=R.material;Ot.visible&&m.push(R,Ct,Ot,nt,zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ot.intersectsObject(R))){const Ct=b.update(R),Ot=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),zt.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),zt.copy(Ct.boundingSphere.center)),zt.applyMatrix4(R.matrixWorld).applyMatrix4(bt)),Array.isArray(Ot)){const Nt=Ct.groups;for(let $t=0,Jt=Nt.length;$t<Jt;$t++){const Bt=Nt[$t],ae=Ot[Bt.materialIndex];ae&&ae.visible&&m.push(R,Ct,ae,nt,zt.z,Bt)}}else Ot.visible&&m.push(R,Ct,Ot,nt,zt.z,null)}}const yt=R.children;for(let Ct=0,Ot=yt.length;Ct<Ot;Ct++)An(yt[Ct],X,nt,Q)}function ds(R,X,nt,Q){const $=R.opaque,yt=R.transmissive,Ct=R.transparent;p.setupLightsView(nt),it===!0&&Y.setGlobalState(M.clippingPlanes,nt),Q&&Ht.viewport(N.copy(Q)),$.length>0&&ri($,X,nt),yt.length>0&&ri(yt,X,nt),Ct.length>0&&ri(Ct,X,nt),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function si(R,X,nt,Q){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new bi(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?ks:kn,minFilter:yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const yt=p.state.transmissionRenderTarget[Q.id],Ct=Q.viewport||N;yt.setSize(Ct.z,Ct.w);const Ot=M.getRenderTarget();M.setRenderTarget(yt),M.getClearColor(tt),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),Xt&&ut.render(nt);const Nt=M.toneMapping;M.toneMapping=Vn;const $t=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),it===!0&&Y.setGlobalState(M.clippingPlanes,Q),ri(R,nt,Q),A.updateMultisampleRenderTarget(yt),A.updateRenderTargetMipmap(yt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Bt=0,ae=X.length;Bt<ae;Bt++){const ue=X[Bt],_e=ue.object,We=ue.geometry,ce=ue.material,Vt=ue.group;if(ce.side===Te&&_e.layers.test(Q.layers)){const vn=ce.side;ce.side=tn,ce.needsUpdate=!0,Rn(_e,nt,Q,We,ce,Vt),ce.side=vn,ce.needsUpdate=!0,Jt=!0}}Jt===!0&&(A.updateMultisampleRenderTarget(yt),A.updateRenderTargetMipmap(yt))}M.setRenderTarget(Ot),M.setClearColor(tt,W),$t!==void 0&&(Q.viewport=$t),M.toneMapping=Nt}function ri(R,X,nt){const Q=X.isScene===!0?X.overrideMaterial:null;for(let $=0,yt=R.length;$<yt;$++){const Ct=R[$],Ot=Ct.object,Nt=Ct.geometry,$t=Q===null?Ct.material:Q,Jt=Ct.group;Ot.layers.test(nt.layers)&&Rn(Ot,X,nt,Nt,$t,Jt)}}function Rn(R,X,nt,Q,$,yt){R.onBeforeRender(M,X,nt,Q,$,yt),R.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(M,X,nt,Q,R,yt),$.transparent===!0&&$.side===Te&&$.forceSinglePass===!1?($.side=tn,$.needsUpdate=!0,M.renderBufferDirect(nt,X,Q,$,R,yt),$.side=ni,$.needsUpdate=!0,M.renderBufferDirect(nt,X,Q,$,R,yt),$.side=Te):M.renderBufferDirect(nt,X,Q,$,R,yt),R.onAfterRender(M,X,nt,Q,$,yt)}function _n(R,X,nt){X.isScene!==!0&&(X=re);const Q=st.get(R),$=p.state.lights,yt=p.state.shadowsArray,Ct=$.state.version,Ot=C.getParameters(R,$.state,yt,X,nt),Nt=C.getProgramCacheKey(Ot);let $t=Q.programs;Q.environment=R.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(R.isMeshStandardMaterial?V:v).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",Kt),$t=new Map,Q.programs=$t);let Jt=$t.get(Nt);if(Jt!==void 0){if(Q.currentProgram===Jt&&Q.lightsStateVersion===Ct)return ms(R,Ot),Jt}else Ot.uniforms=C.getUniforms(R),R.onBeforeCompile(Ot,M),Jt=C.acquireProgram(Ot,Nt),$t.set(Nt,Jt),Q.uniforms=Ot.uniforms;const Bt=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Bt.clippingPlanes=Y.uniform),ms(R,Ot),Q.needsLights=Fr(R),Q.lightsStateVersion=Ct,Q.needsLights&&(Bt.ambientLightColor.value=$.state.ambient,Bt.lightProbe.value=$.state.probe,Bt.directionalLights.value=$.state.directional,Bt.directionalLightShadows.value=$.state.directionalShadow,Bt.spotLights.value=$.state.spot,Bt.spotLightShadows.value=$.state.spotShadow,Bt.rectAreaLights.value=$.state.rectArea,Bt.ltc_1.value=$.state.rectAreaLTC1,Bt.ltc_2.value=$.state.rectAreaLTC2,Bt.pointLights.value=$.state.point,Bt.pointLightShadows.value=$.state.pointShadow,Bt.hemisphereLights.value=$.state.hemi,Bt.directionalShadowMap.value=$.state.directionalShadowMap,Bt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Bt.spotShadowMap.value=$.state.spotShadowMap,Bt.spotLightMatrix.value=$.state.spotLightMatrix,Bt.spotLightMap.value=$.state.spotLightMap,Bt.pointShadowMap.value=$.state.pointShadowMap,Bt.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=Jt,Q.uniformsList=null,Jt}function ps(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=br.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function ms(R,X){const nt=st.get(R);nt.outputColorSpace=X.outputColorSpace,nt.batching=X.batching,nt.batchingColor=X.batchingColor,nt.instancing=X.instancing,nt.instancingColor=X.instancingColor,nt.instancingMorph=X.instancingMorph,nt.skinning=X.skinning,nt.morphTargets=X.morphTargets,nt.morphNormals=X.morphNormals,nt.morphColors=X.morphColors,nt.morphTargetsCount=X.morphTargetsCount,nt.numClippingPlanes=X.numClippingPlanes,nt.numIntersection=X.numClipIntersection,nt.vertexAlphas=X.vertexAlphas,nt.vertexTangents=X.vertexTangents,nt.toneMapping=X.toneMapping}function gs(R,X,nt,Q,$){X.isScene!==!0&&(X=re),A.resetTextureUnits();const yt=X.fog,Ct=Q.isMeshStandardMaterial?X.environment:null,Ot=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:os,Nt=(Q.isMeshStandardMaterial?V:v).get(Q.envMap||Ct),$t=Q.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Jt=!!nt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Bt=!!nt.morphAttributes.position,ae=!!nt.morphAttributes.normal,ue=!!nt.morphAttributes.color;let _e=Vn;Q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(_e=M.toneMapping);const We=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ce=We!==void 0?We.length:0,Vt=st.get(Q),vn=p.state.lights;if(it===!0&&(ft===!0||R!==S)){const Xe=R===S&&Q.id===E;Y.setState(Q,R,Xe)}let de=!1;Q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==vn.state.version||Vt.outputColorSpace!==Ot||$.isBatchedMesh&&Vt.batching===!1||!$.isBatchedMesh&&Vt.batching===!0||$.isBatchedMesh&&Vt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Vt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Vt.instancing===!1||!$.isInstancedMesh&&Vt.instancing===!0||$.isSkinnedMesh&&Vt.skinning===!1||!$.isSkinnedMesh&&Vt.skinning===!0||$.isInstancedMesh&&Vt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Vt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Vt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Vt.instancingMorph===!1&&$.morphTexture!==null||Vt.envMap!==Nt||Q.fog===!0&&Vt.fog!==yt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Y.numPlanes||Vt.numIntersection!==Y.numIntersection)||Vt.vertexAlphas!==$t||Vt.vertexTangents!==Jt||Vt.morphTargets!==Bt||Vt.morphNormals!==ae||Vt.morphColors!==ue||Vt.toneMapping!==_e||Vt.morphTargetsCount!==ce)&&(de=!0):(de=!0,Vt.__version=Q.version);let cn=Vt.currentProgram;de===!0&&(cn=_n(Q,X,$));let Le=!1,Ge=!1,oi=!1;const ve=cn.getUniforms(),dn=Vt.uniforms;if(Ht.useProgram(cn.program)&&(Le=!0,Ge=!0,oi=!0),Q.id!==E&&(E=Q.id,Ge=!0),Le||S!==R){Ht.buffers.depth.getReversed()?(mt.copy(R.projectionMatrix),Wu(mt),Xu(mt),ve.setValue(q,"projectionMatrix",mt)):ve.setValue(q,"projectionMatrix",R.projectionMatrix),ve.setValue(q,"viewMatrix",R.matrixWorldInverse);const Cn=ve.map.cameraPosition;Cn!==void 0&&Cn.setValue(q,It.setFromMatrixPosition(R.matrixWorld)),ne.logarithmicDepthBuffer&&ve.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ve.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Ge=!0,oi=!0)}if($.isSkinnedMesh){ve.setOptional(q,$,"bindMatrix"),ve.setOptional(q,$,"bindMatrixInverse");const Xe=$.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),ve.setValue(q,"boneTexture",Xe.boneTexture,A))}$.isBatchedMesh&&(ve.setOptional(q,$,"batchingTexture"),ve.setValue(q,"batchingTexture",$._matricesTexture,A),ve.setOptional(q,$,"batchingIdTexture"),ve.setValue(q,"batchingIdTexture",$._indirectTexture,A),ve.setOptional(q,$,"batchingColorTexture"),$._colorsTexture!==null&&ve.setValue(q,"batchingColorTexture",$._colorsTexture,A));const Wn=nt.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&Mt.update($,nt,cn),(Ge||Vt.receiveShadow!==$.receiveShadow)&&(Vt.receiveShadow=$.receiveShadow,ve.setValue(q,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(dn.envMap.value=Nt,dn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(dn.envMapIntensity.value=X.environmentIntensity),Ge&&(ve.setValue(q,"toneMappingExposure",M.toneMappingExposure),Vt.needsLights&&xs(dn,oi),yt&&Q.fog===!0&&L.refreshFogUniforms(dn,yt),L.refreshMaterialUniforms(dn,Q,et,ht,p.state.transmissionRenderTarget[R.id]),br.upload(q,ps(Vt),dn,A)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(br.upload(q,ps(Vt),dn,A),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ve.setValue(q,"center",$.center),ve.setValue(q,"modelViewMatrix",$.modelViewMatrix),ve.setValue(q,"normalMatrix",$.normalMatrix),ve.setValue(q,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Xe=Q.uniformsGroups;for(let Cn=0,x=Xe.length;Cn<x;Cn++){const I=Xe[Cn];G.update(I,cn),G.bind(I,cn)}}return cn}function xs(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Fr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,X,nt){st.get(R.texture).__webglTexture=X,st.get(R.depthTexture).__webglTexture=nt;const Q=st.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=nt===void 0,Q.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const nt=st.get(R);nt.__webglFramebuffer=X,nt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,nt=0){D=R,P=X,T=nt;let Q=!0,$=null,yt=!1,Ct=!1;if(R){const Nt=st.get(R);if(Nt.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(q.FRAMEBUFFER,null),Q=!1;else if(Nt.__webglFramebuffer===void 0)A.setupRenderTarget(R);else if(Nt.__hasExternalTextures)A.rebindTextures(R,st.get(R.texture).__webglTexture,st.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Bt=R.depthTexture;if(Nt.__boundDepthTexture!==Bt){if(Bt!==null&&st.has(Bt)&&(R.width!==Bt.image.width||R.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ct=!0);const Jt=st.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Jt[X])?$=Jt[X][nt]:$=Jt[X],yt=!0):R.samples>0&&A.useMultisampledRTT(R)===!1?$=st.get(R).__webglMultisampledFramebuffer:Array.isArray(Jt)?$=Jt[nt]:$=Jt,N.copy(R.viewport),Z.copy(R.scissor),H=R.scissorTest}else N.copy(Et).multiplyScalar(et).floor(),Z.copy(Pt).multiplyScalar(et).floor(),H=kt;if(Ht.bindFramebuffer(q.FRAMEBUFFER,$)&&Q&&Ht.drawBuffers(R,$),Ht.viewport(N),Ht.scissor(Z),Ht.setScissorTest(H),yt){const Nt=st.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,Nt.__webglTexture,nt)}else if(Ct){const Nt=st.get(R.texture),$t=X||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Nt.__webglTexture,nt||0,$t)}E=-1},this.readRenderTargetPixels=function(R,X,nt,Q,$,yt,Ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ot=Ot[Ct]),Ot){Ht.bindFramebuffer(q.FRAMEBUFFER,Ot);try{const Nt=R.texture,$t=Nt.format,Jt=Nt.type;if(!ne.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-Q&&nt>=0&&nt<=R.height-$&&q.readPixels(X,nt,Q,$,At.convert($t),At.convert(Jt),yt)}finally{const Nt=D!==null?st.get(D).__webglFramebuffer:null;Ht.bindFramebuffer(q.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(R,X,nt,Q,$,yt,Ct){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ot=Ot[Ct]),Ot){const Nt=R.texture,$t=Nt.format,Jt=Nt.type;if(!ne.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-Q&&nt>=0&&nt<=R.height-$){Ht.bindFramebuffer(q.FRAMEBUFFER,Ot);const Bt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Bt),q.bufferData(q.PIXEL_PACK_BUFFER,yt.byteLength,q.STREAM_READ),q.readPixels(X,nt,Q,$,At.convert($t),At.convert(Jt),0);const ae=D!==null?st.get(D).__webglFramebuffer:null;Ht.bindFramebuffer(q.FRAMEBUFFER,ae);const ue=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await ku(q,ue,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Bt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,yt),q.deleteBuffer(Bt),q.deleteSync(ue),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,nt=0){R.isTexture!==!0&&(Rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const Q=Math.pow(2,-nt),$=Math.floor(R.image.width*Q),yt=Math.floor(R.image.height*Q),Ct=X!==null?X.x:0,Ot=X!==null?X.y:0;A.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,nt,0,0,Ct,Ot,$,yt),Ht.unbindTexture()},this.copyTextureToTexture=function(R,X,nt=null,Q=null,$=0){R.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1],X=arguments[2],$=arguments[3]||0,nt=null);let yt,Ct,Ot,Nt,$t,Jt,Bt,ae,ue;const _e=R.isCompressedTexture?R.mipmaps[$]:R.image;nt!==null?(yt=nt.max.x-nt.min.x,Ct=nt.max.y-nt.min.y,Ot=nt.isBox3?nt.max.z-nt.min.z:1,Nt=nt.min.x,$t=nt.min.y,Jt=nt.isBox3?nt.min.z:0):(yt=_e.width,Ct=_e.height,Ot=_e.depth||1,Nt=0,$t=0,Jt=0),Q!==null?(Bt=Q.x,ae=Q.y,ue=Q.z):(Bt=0,ae=0,ue=0);const We=At.convert(X.format),ce=At.convert(X.type);let Vt;X.isData3DTexture?(A.setTexture3D(X,0),Vt=q.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(A.setTexture2DArray(X,0),Vt=q.TEXTURE_2D_ARRAY):(A.setTexture2D(X,0),Vt=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);const vn=q.getParameter(q.UNPACK_ROW_LENGTH),de=q.getParameter(q.UNPACK_IMAGE_HEIGHT),cn=q.getParameter(q.UNPACK_SKIP_PIXELS),Le=q.getParameter(q.UNPACK_SKIP_ROWS),Ge=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,_e.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,_e.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Nt),q.pixelStorei(q.UNPACK_SKIP_ROWS,$t),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Jt);const oi=R.isDataArrayTexture||R.isData3DTexture,ve=X.isDataArrayTexture||X.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const dn=st.get(R),Wn=st.get(X),Xe=st.get(dn.__renderTarget),Cn=st.get(Wn.__renderTarget);Ht.bindFramebuffer(q.READ_FRAMEBUFFER,Xe.__webglFramebuffer),Ht.bindFramebuffer(q.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let x=0;x<Ot;x++)oi&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,st.get(R).__webglTexture,$,Jt+x),R.isDepthTexture?(ve&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,st.get(X).__webglTexture,$,ue+x),q.blitFramebuffer(Nt,$t,yt,Ct,Bt,ae,yt,Ct,q.DEPTH_BUFFER_BIT,q.NEAREST)):ve?q.copyTexSubImage3D(Vt,$,Bt,ae,ue+x,Nt,$t,yt,Ct):q.copyTexSubImage2D(Vt,$,Bt,ae,ue+x,Nt,$t,yt,Ct);Ht.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else ve?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(Vt,$,Bt,ae,ue,yt,Ct,Ot,We,ce,_e.data):X.isCompressedArrayTexture?q.compressedTexSubImage3D(Vt,$,Bt,ae,ue,yt,Ct,Ot,We,_e.data):q.texSubImage3D(Vt,$,Bt,ae,ue,yt,Ct,Ot,We,ce,_e):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,$,Bt,ae,yt,Ct,We,ce,_e.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,$,Bt,ae,_e.width,_e.height,We,_e.data):q.texSubImage2D(q.TEXTURE_2D,$,Bt,ae,yt,Ct,We,ce,_e);q.pixelStorei(q.UNPACK_ROW_LENGTH,vn),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,de),q.pixelStorei(q.UNPACK_SKIP_PIXELS,cn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Le),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Ge),$===0&&X.generateMipmaps&&q.generateMipmap(Vt),Ht.unbindTexture()},this.copyTextureToTexture3D=function(R,X,nt=null,Q=null,$=0){return R.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,Q=arguments[1]||null,R=arguments[2],X=arguments[3],$=arguments[4]||0),Rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,nt,Q,$)},this.initRenderTarget=function(R){st.get(R).__webglFramebuffer===void 0&&A.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),Ht.unbindTexture()},this.resetState=function(){P=0,T=0,D=null,Ht.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}class ya{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=e}clone(){return new ya(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new Sa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Al extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class nm extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=fn,u=fn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rc extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new me,Cc=new me,pr=[],Pc=new Ri,im=new me,ws=new O,Es=new us;class Ls extends O{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,im)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Pc.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Pc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Es.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),Cc.multiplyMatrices(n,Wi),ws.matrixWorld=Cc,ws.raycast(t,pr);for(let o=0,a=pr.length;o<a;o++){const c=pr[o];c.instanceId=r,c.object=this,e.push(c)}pr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Rc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new nm(new Float32Array(s*this.count),s,this.count,ma,In));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Os extends hs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lc=new me,aa=new fl,mr=new us,gr=new U;class Cr extends Oe{constructor(t=new Ce,e=new Os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;Lc.copy(s).invert(),aa.copy(t.ray).applyMatrix4(Lc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);gr.fromBufferAttribute(h,m),Ic(gr,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)gr.fromBufferAttribute(h,g),Ic(gr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ic(i,t,e,n,s,r,o){const a=aa.distanceSqToPoint(i);if(a<e){const c=new U;aa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class wa extends Ze{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Dt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,s=[],r=[],o=[],a=new U,c=new me;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ke(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ea extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Dt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class sm extends Ea{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ba(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const xr=new U,po=new ba,mo=new ba,go=new ba;class Rl extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(xr.subVectors(s[0],s[1]).add(s[0]),l=xr);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=xr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),po.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),mo.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),go.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(po.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),mo.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),go.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(po.calc(c),mo.calc(c),go.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function rm(i,t){const e=1-i;return e*e*t}function om(i,t){return 2*(1-i)*i*t}function am(i,t){return i*i*t}function Is(i,t,e,n){return rm(i,t)+om(i,e)+am(i,n)}function cm(i,t){const e=1-i;return e*e*e*t}function lm(i,t){const e=1-i;return 3*e*e*i*t}function um(i,t){return 3*(1-i)*i*i*t}function hm(i,t){return i*i*i*t}function Ds(i,t,e,n,s){return cm(i,t)+lm(i,e)+um(i,n)+hm(i,s)}class Cl extends Dn{constructor(t=new Dt,e=new Dt,n=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Dt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fm extends Dn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y),Ds(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pl extends Dn{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dm extends Dn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ll extends Dn{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Is(t,s.x,r.x,o.x),Is(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pm extends Dn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Is(t,s.x,r.x,o.x),Is(t,s.y,r.y,o.y),Is(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Il extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Dc(a,c.x,l.x,u.x,h.x),Dc(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Dt().fromArray(s))}return this}}var Uc=Object.freeze({__proto__:null,ArcCurve:sm,CatmullRomCurve3:Rl,CubicBezierCurve:Cl,CubicBezierCurve3:fm,EllipseCurve:Ea,LineCurve:Pl,LineCurve3:dm,QuadraticBezierCurve:Ll,QuadraticBezierCurve3:pm,SplineCurve:Il});class mm extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Uc[s.type]().fromJSON(s))}return this}}class ca extends mm{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pl(this.currentPoint.clone(),new Dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ll(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Cl(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s),new Dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Il(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ea(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ta extends Ce{constructor(t=[new Dt(0,-.5),new Dt(.5,0),new Dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ke(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new U,d=new Dt,f=new U,g=new U,_=new U;let m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let w=0;w<=e;w++){const y=n+w*u*s,M=Math.sin(y),F=Math.cos(y);for(let P=0;P<=t.length-1;P++){h.x=t[P].x*M,h.y=t[P].y,h.z=t[P].x*F,o.push(h.x,h.y,h.z),d.x=w/e,d.y=P/(t.length-1),a.push(d.x,d.y);const T=c[3*P+0]*M,D=c[3*P+1],E=c[3*P+0]*F;l.push(T,D,E)}}for(let w=0;w<e;w++)for(let y=0;y<t.length-1;y++){const M=y+w*t.length,F=M,P=M+t.length,T=M+t.length+1,D=M+1;r.push(F,P,D),r.push(T,D,P)}this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("uv",new fe(a,2)),this.setAttribute("normal",new fe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.points,t.segments,t.phiStart,t.phiLength)}}class ss extends Ta{constructor(t=1,e=1,n=4,s=8){const r=new ca;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ss(t.radius,t.length,t.capSegments,t.radialSegments)}}class wn extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new U,u=new Dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ut extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;w(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function w(){const M=new U,F=new U;let P=0;const T=(e-t)/n;for(let D=0;D<=r;D++){const E=[],S=D/r,N=S*(e-t)+t;for(let Z=0;Z<=s;Z++){const H=Z/s,tt=H*c+a,W=Math.sin(tt),j=Math.cos(tt);F.x=N*W,F.y=-S*n+m,F.z=N*j,h.push(F.x,F.y,F.z),M.set(W,T,j).normalize(),d.push(M.x,M.y,M.z),f.push(H,1-S),E.push(g++)}_.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){const S=_[E][D],N=_[E+1][D],Z=_[E+1][D+1],H=_[E][D+1];(t>0||E!==0)&&(u.push(S,N,H),P+=3),(e>0||E!==r-1)&&(u.push(N,Z,H),P+=3)}l.addGroup(p,P,0),p+=P}function y(M){const F=g,P=new Dt,T=new U;let D=0;const E=M===!0?t:e,S=M===!0?1:-1;for(let Z=1;Z<=s;Z++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const N=g;for(let Z=0;Z<=s;Z++){const tt=Z/s*c+a,W=Math.cos(tt),j=Math.sin(tt);T.x=E*j,T.y=m*S,T.z=E*W,h.push(T.x,T.y,T.z),d.push(0,S,0),P.x=W*.5+.5,P.y=j*.5*S+.5,f.push(P.x,P.y),g++}for(let Z=0;Z<s;Z++){const H=F+Z,tt=N+Z;M===!0?u.push(tt,tt+1,H):u.push(tt+1,tt,H),D+=3}l.addGroup(p,D,M===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ut(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Si extends Ut{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Si(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Aa extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const y=new U,M=new U,F=new U;for(let P=0;P<e.length;P+=3)f(e[P+0],y),f(e[P+1],M),f(e[P+2],F),c(y,M,F,w)}function c(w,y,M,F){const P=F+1,T=[];for(let D=0;D<=P;D++){T[D]=[];const E=w.clone().lerp(M,D/P),S=y.clone().lerp(M,D/P),N=P-D;for(let Z=0;Z<=N;Z++)Z===0&&D===P?T[D][Z]=E:T[D][Z]=E.clone().lerp(S,Z/N)}for(let D=0;D<P;D++)for(let E=0;E<2*(P-D)-1;E++){const S=Math.floor(E/2);E%2===0?(d(T[D][S+1]),d(T[D+1][S]),d(T[D][S])):(d(T[D][S+1]),d(T[D+1][S+1]),d(T[D+1][S]))}}function l(w){const y=new U;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(w),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function u(){const w=new U;for(let y=0;y<r.length;y+=3){w.x=r[y+0],w.y=r[y+1],w.z=r[y+2];const M=m(w)/2/Math.PI+.5,F=p(w)/Math.PI+.5;o.push(M,1-F)}g(),h()}function h(){for(let w=0;w<o.length;w+=6){const y=o[w+0],M=o[w+2],F=o[w+4],P=Math.max(y,M,F),T=Math.min(y,M,F);P>.9&&T<.1&&(y<.2&&(o[w+0]+=1),M<.2&&(o[w+2]+=1),F<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,y){const M=w*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function g(){const w=new U,y=new U,M=new U,F=new U,P=new Dt,T=new Dt,D=new Dt;for(let E=0,S=0;E<r.length;E+=9,S+=6){w.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),P.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),D.set(o[S+4],o[S+5]),F.copy(w).add(y).add(M).divideScalar(3);const N=m(F);_(P,S+0,w,N),_(T,S+2,y,N),_(D,S+4,M,N)}}function _(w,y,M,F){F<0&&w.x===1&&(o[y]=w.x-1),M.x===0&&M.z===0&&(o[y]=F/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.vertices,t.indices,t.radius,t.details)}}class rs extends ca{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ca().fromJSON(s))}return this}}const gm={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Dl(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=ym(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Bs(r,o,e,a,c,f,0),o}};function Dl(i,t,e,n,s){let r,o;if(s===Im(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Nc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Nc(r,i[r],i[r+1],o);return o&&Ur(o,o.next)&&(Hs(o),o=o.next),o}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ur(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Hs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Tm(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?_m(i,n,s,r):xm(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Hs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=vm(Ti(i),t,e),Bs(i,t,e,n,s,r,2)):o===2&&Mm(i,t,e,n,s,r):Bs(Ti(i),t,e,n,s,r,1);break}}}function xm(i){const t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&$i(s,a,r,c,o,l,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _m(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ae(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=la(f,g,t,e,n),w=la(_,m,t,e,n);let y=i.prevZ,M=i.nextZ;for(;y&&y.z>=p&&M&&M.z<=w;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&$i(a,u,c,h,l,d,y.x,y.y)&&Ae(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&$i(a,u,c,h,l,d,M.x,M.y)&&Ae(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&$i(a,u,c,h,l,d,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=w;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&$i(a,u,c,h,l,d,M.x,M.y)&&Ae(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function vm(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Ur(s,r)&&Ul(s,n,n.next,r)&&zs(s,r)&&zs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Hs(n),Hs(n.next),n=i=r),n=n.next}while(n!==i);return Ti(n)}function Mm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cm(o,a)){let c=Nl(o,a);o=Ti(o,o.next),c=Ti(c,c.next),Bs(o,t,e,n,s,r,0),Bs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ym(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Dl(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Rm(l));for(s.sort(Sm),r=0;r<s.length;r++)e=wm(s[r],e);return e}function Sm(i,t){return i.x-t.x}function wm(i,t){const e=Em(i,t);if(!e)return t;const n=Nl(e,i);return Ti(n,n.next),Ti(e,e.next)}function Em(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&$i(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),zs(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&bm(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function bm(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function Tm(i,t,e,n){let s=i;do s.z===0&&(s.z=la(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Am(s)}function Am(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function la(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Rm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $i(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Cm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Pm(i,t)&&(zs(i,t)&&zs(t,i)&&Lm(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||Ur(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ur(i,t){return i.x===t.x&&i.y===t.y}function Ul(i,t,e,n){const s=vr(Ae(i,t,e)),r=vr(Ae(i,t,n)),o=vr(Ae(e,n,i)),a=vr(Ae(e,n,t));return!!(s!==r&&o!==a||s===0&&_r(i,e,t)||r===0&&_r(i,n,t)||o===0&&_r(e,i,n)||a===0&&_r(e,t,n))}function _r(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vr(i){return i>0?1:i<0?-1:0}function Pm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ul(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function zs(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function Lm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nl(i,t){const e=new ua(i.i,i.x,i.y),n=new ua(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Nc(i,t,e,n){const s=new ua(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ua(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Im(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Us{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Us.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Fc(t),Oc(n,t);let o=t.length;e.forEach(Fc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Oc(n,e[c]);const a=gm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Fc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Oc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class sn extends Aa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sn(t.radius,t.detail)}}class Vs extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,f=new U,g=new Dt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const w=p+m,y=w,M=w+n+1,F=w+n+2,P=w+1;a.push(y,M,P),a.push(M,F,P)}}this.setIndex(a),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class wi extends Ce{constructor(t=new rs([new Dt(0,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(o,2));function l(u){const h=s.length/3,d=u.extractPoints(e);let f=d.shape;const g=d.holes;Us.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const w=g[m];Us.isClockWise(w)===!0&&(g[m]=w.reverse())}const _=Us.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const w=g[m];f=f.concat(w)}for(let m=0,p=f.length;m<p;m++){const w=f[m];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let m=0,p=_.length;m<p;m++){const w=_[m],y=w[0]+h,M=w[1]+h,F=w[2]+h;n.push(y,M,F),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Dm(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new wi(n,t.curveSegments)}}function Dm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Se extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new U,d=new U,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const w=[],y=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let F=0;F<=e;F++){const P=F/e;h.x=-t*Math.cos(s+P*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+P*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(P+M,1-y),w.push(l++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const y=u[p][w+1],M=u[p][w],F=u[p+1][w],P=u[p+1][w+1];(p!==0||o>0)&&f.push(y,M,P),(p!==n-1||c<Math.PI)&&f.push(M,F,P)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class be extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new U,h=new U,d=new U;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;o.push(_,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zt extends hs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ra extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Fl extends Ra{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const xo=new me,Bc=new U,zc=new U;class Ol{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bc),zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zc),e.updateMatrixWorld(),xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hc=new me,bs=new U,_o=new U;class Um extends Ol{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(bs),_o.copy(n.position),_o.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_o),n.updateMatrixWorld(),s.makeTranslation(-bs.x,-bs.y,-bs.z),Hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc)}}class Ps extends Ra{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Um}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Nm extends Ol{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bl extends Ra{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Nm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Fm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ha);function Om(i){const t=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,e=new em({canvas:i,antialias:!t,powerPreference:"high-performance"});let s=Math.min(t?1.5:2,window.devicePixelRatio||1);e.setPixelRatio(s);let r=0,o=0;e.toneMapping=Vn;const a=new hn(52,1,.1,4e3);let c=null,l=()=>{};const u=new Fm;let h=0,d=!0;function f(){const _=i.clientWidth||window.innerWidth,m=i.clientHeight||window.innerHeight;e.setSize(_,m,!1),a.aspect=_/m,a.updateProjectionMatrix()}new ResizeObserver(f).observe(i),f();function g(){if(!d)return;const _=u.getDelta(),m=Math.min(.1,_);h+=m,r++,o+=_,o>1.5&&(r/o<28&&s>.75&&(s=Math.max(.75,s*.8),e.setPixelRatio(s),f()),r=0,o=0),l(h,m,Math.min(.33,_)),c&&e.render(c,a),requestAnimationFrame(g)}return g(),{renderer:e,camera:a,voir(_){c=_},definir(_,m){c=_,l=m||(()=>{})},temps:()=>h,arreter(){d=!1,e.dispose()}}}function zl(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ce;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Gc(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=Gc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Gc(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Ve(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function ji(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const dt=(i,t={})=>new Zt({color:i,roughness:.85,metalness:0,flatShading:!0,...t}),Bm=(()=>{const i=new rs;return i.moveTo(0,0),i.bezierCurveTo(.5,.4,.5,1.1,0,1.6),i.bezierCurveTo(-.5,1.1,-.5,.4,0,0),i})();function Ca(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new wa(i)}function zm(i,t=[]){i.updateMatrixWorld(!0);const e=new Set(t),n=new Map,s=o=>{if(!e.has(o)){if(o.isMesh&&!o.isInstancedMesh){const a=o.material;if(a&&a.isMeshStandardMaterial&&!a.map&&!a.transparent&&!a.polygonOffset&&a.emissive.getHex()===0&&o.visible&&!o.userData.garder){const c=`${a.flatShading}|${a.roughness}|${a.metalness}|${a.side}`;n.has(c)||n.set(c,{m:a,liste:[]}),n.get(c).liste.push(o);return}}for(const a of[...o.children])s(a)}};s(i);let r=0;for(const{m:o,liste:a}of n.values()){const c=a.map(u=>{const h=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();h.applyMatrix4(u.matrixWorld),h.deleteAttribute("uv");const d=h.attributes.position.count,f=new Float32Array(d*3),g=u.material.color;for(let _=0;_<d;_++)f.set([g.r,g.g,g.b],_*3);return h.setAttribute("color",new Ve(f,3)),h}),l=new O(zl(c,!1),new Zt({vertexColors:!0,roughness:o.roughness,metalness:o.metalness,flatShading:o.flatShading,side:o.side}));for(const u of a)u.parent&&u.parent.remove(u),u.geometry.dispose();i.add(l),r+=a.length}return r}const Hm=(i,t,e)=>[Math.min(19.4,Math.max(-19.4,i)),Math.min(9.4,11.5+8*(1-Math.abs(i)/20),Math.max(.9,t)),Math.min(14.4,Math.max(-14.5,e))],Vm={xMin:-18.6,xMax:18.6,zMin:-13.6,zMax:13.6};function jt(i,t){for(const[e,n]of Object.entries(t))n&&n.isVector3?i[e].copy(n):n&&n.isEuler?i.rotation.copy(n):i[e]=n;return i}function je(i,t,e,n=null){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new wa(s);return r.colorSpace=rn,n&&(r.wrapS=r.wrapT=Ns,r.repeat.set(n[0],n[1])),r}function Gm(){const i=new Al,t=ji(77),e=[];function n(x,I,B,at,St,Yt,Re,{solide:en=!1,rot:Xn=0,mate:Zl={}}={}){const Ws=new O(new Gt(x,I,B),dt(Re,Zl));return Ws.position.set(at,St,Yt),Ws.rotation.y=Xn,i.add(Ws),en&&e.push({min:[at-x/2,St-I/2,Yt-B/2],max:[at+x/2,St+I/2,Yt+B/2]}),Ws}function s(x,I,B,at,St,Yt,Re,en=12){const Xn=new O(new Ut(x,I,B,en),dt(Re));return Xn.position.set(at,St,Yt),i.add(Xn),Xn}i.add(new Fl(16773336,8016948,.55));const r=new Bl(16773839,.9);r.position.set(16,20,-6),i.add(r);const o=new Ps(16767392,420,60,1.6);o.position.set(0,14,0),i.add(o);const a=new Ps(16769192,150,24,1.8);a.position.set(-12,8,-10),i.add(a);const c=je(512,512,(x,I,B)=>{const at=ji(5);for(let St=0;St<8;St++){x.fillStyle=["#b98a58","#a97b4b","#c29463","#b08050"][St%4],x.fillRect(0,St*64,I,62),x.fillStyle="rgba(0,0,0,0.22)",x.fillRect(0,St*64+62,I,2),x.fillStyle="rgba(0,0,0,0.12)";for(let Yt=0;Yt<14;Yt++)x.fillRect(at()*I,St*64+6+at()*50,30+at()*80,1.4);x.fillStyle="rgba(0,0,0,0.25)",x.fillRect(St*173%400+30,St*64,2,62)}},[6,5]),l=new O(new De(40,30),new Zt({map:c,roughness:.9}));l.rotation.x=-Math.PI/2,i.add(l);const u=je(512,512,(x,I)=>{for(let B=0;B<6;B++)x.fillStyle=["#8a5e3c","#7e5535","#935f3b"][B%3],x.fillRect(B*86,0,84,512),x.fillStyle="rgba(0,0,0,0.3)",x.fillRect(B*86+84,0,2,512)},[4,1]),h=new Zt({map:u,roughness:.95}),d=(x,I,B,at,St,Yt=0)=>{const Re=new O(new De(x,I),h);return Re.position.set(B,at,St),Re.rotation.y=Yt,i.add(Re),Re};d(40,12,0,6,-15,0),d(30,12,-20,6,0,Math.PI/2),d(30,12,20,6,0,-Math.PI/2);const f=(x,I,B,at)=>{const St=h.clone();St.map=u.clone(),St.map.repeat.set(x/10,I/12),St.map.needsUpdate=!0;const Yt=new O(new De(x,I),St);Yt.position.set(B,at,15),Yt.rotation.y=Math.PI,i.add(Yt)};f(12,12,-14,6),f(12,12,14,6),f(16,2,0,11);const g=new O(new wi((()=>{const x=new rs;return x.moveTo(-20,12),x.lineTo(20,12),x.lineTo(0,21),x.closePath(),x})()),h);g.position.set(0,0,-15),i.add(g);const _=g.clone();_.position.set(0,0,15),_.rotation.y=Math.PI,i.add(_);const m=Math.atan2(9,20),p=Math.hypot(20,9);for(const x of[-1,1]){const I=new O(new Gt(p+1,.5,31),dt(5913894));I.position.set(x*10,16.55,0),I.rotation.z=-x*m,i.add(I)}for(let x=-13;x<=13;x+=6.5){n(40,.9,.9,0,12.1,x,3810837);for(const I of[-1,1]){const B=new O(new Gt(p,.8,.8),dt(3810837));B.position.set(I*10,16.1,x),B.rotation.z=-I*m,i.add(B)}n(.8,4.4,.8,0,14.4,x,3810837)}n(.9,.9,30,0,20.4,0,3810837);const w=je(512,512,(x,I,B)=>{const at=x.createLinearGradient(0,0,0,B);at.addColorStop(0,"#1f8fe6"),at.addColorStop(.55,"#7fe3dc"),at.addColorStop(1,"#fff3c0"),x.fillStyle=at,x.fillRect(0,0,I,B),x.fillStyle="#5fb7b8",x.beginPath(),x.ellipse(120,360,220,90,0,0,6.3),x.fill(),x.fillStyle="#4fb45a",x.fillRect(0,380,I,140),x.fillStyle="#7b4f2e",x.fillRect(256,190,34,200);for(const[St,Yt,Re,en]of[[240,170,90,"#23a04c"],[330,190,70,"#45c755"],[200,220,60,"#45c755"],[270,120,70,"#8fe55f"]])x.fillStyle=en,x.beginPath(),x.arc(St,Yt,Re,0,6.3),x.fill();x.fillStyle="#ff8a2b";for(const[St,Yt]of[[230,140],[320,170],[190,215]])x.beginPath(),x.arc(St,Yt,7,0,6.3),x.fill();x.fillStyle="#fffbe0",x.beginPath(),x.arc(420,90,36,0,6.3),x.fill()}),y=new O(new wn(4.2,40),new Ee({map:w}));y.position.set(9,9,-14.85),i.add(y);const M=new O(new be(4.3,.34,8,40),dt(3810837));M.position.set(9,9,-14.7),i.add(M),n(8.6,.24,.3,9,9,-14.7,3810837),n(.24,8.6,.3,9,9,-14.7,3810837);const F=new O(new De(9,34),new Ee({color:16773824,transparent:!0,opacity:.1,blending:mn,depthWrite:!1,side:Te,fog:!1}));F.position.set(11.5,5,-7.5),F.rotation.set(-.95,-.3,.12),i.add(F),n(10.4,.45,3.6,-12,3.2,-12.6,11565637,{solide:!0});for(const[x,I]of[[-16.8,-14.1],[-7.2,-14.1],[-16.8,-11.1],[-7.2,-11.1]])n(.5,3.2,.5,x,1.6,I,8015920);n(9.6,.25,3,-12,1.2,-12.6,9264952),e.push({min:[-17.2,0,-14.4],max:[-6.8,3.5,-10.8]}),n(1.2,1.1,1.4,-17,3.95,-12.6,4871528),n(.35,.9,1.5,-16.2,4.05,-12.6,8095636);const P=je(256,128,(x,I,B)=>{x.fillStyle="#d9b27a",x.fillRect(0,0,I,B),x.fillStyle="rgba(80,50,20,0.45)";for(let at=6;at<I;at+=12)for(let St=6;St<B;St+=12)x.beginPath(),x.arc(at,St,1.5,0,6.3),x.fill()}),T=new O(new De(12,6),new Zt({map:P,roughness:.9}));T.position.set(-12,8.6,-14.88),i.add(T);const D=[[12.6,.3,0,3.1],[12.6,.3,0,-3.1],[.3,6.4,6.2,0],[.3,6.4,-6.2,0]];for(const[x,I,B,at]of D)n(x,I,.3,-12+B,8.6+at,-14.75,7031343);const E=10134704,S=new te;S.add(jt(new O(new Ut(.1,.12,2.6,8),dt(12159576)),{position:new U(0,0,0)})),S.add(jt(new O(new Gt(1.3,.6,.5),dt(7239554)),{position:new U(0,1.4,0)})),S.position.set(-16,8.8,-14.6),i.add(S);const N=new te;N.add(new O(new Ut(.14,.14,2.8,8),dt(E)));const Z=new O(new be(.42,.14,6,10,Math.PI*1.6),dt(E));Z.position.y=1.5,N.add(Z),N.position.set(-14.4,8.7,-14.6),N.rotation.z=.2,i.add(N);const H=new rs;H.moveTo(0,0),H.lineTo(3.4,.9),H.lineTo(3.4,-.9),H.closePath();const tt=new O(new wi(H),new Zt({color:13160664,side:Te,flatShading:!0}));tt.position.set(-12.3,9.6,-14.6),tt.rotation.z=-.5,i.add(tt),n(.7,.4,.5,-12.1,9.9,-14.6,12600623);for(const[x,I]of[[-10.2,14035002],[-9.6,16756768],[-9,4165606]])s(.17,.17,.9,x,7.6,-14.6,I,8),s(.05,.05,1.4,x,6.55,-14.6,E,6);for(const[x,I,B]of[[-15.2,6.9,.2],[-13.4,6.6,-.15]]){const at=new te;for(const St of[-1,1]){const Yt=new O(new Gt(.28,2.4,.2),dt(E));Yt.rotation.z=St*.14,at.add(Yt);const Re=new O(new Gt(.34,1.2,.26),dt(14035002));Re.position.set(St*.34,-.95,0),Re.rotation.z=St*.14,at.add(Re)}at.position.set(x,I,-14.6),at.rotation.z=B,i.add(at)}for(const[x,I,B]of[[-8.4,8,16765517],[-7.7,6.9,16742981]]){const at=new O(new be(.55,.22,8,16),dt(B));at.position.set(x,I,-14.6),i.add(at)}const W=new te;W.add(jt(new O(new Ut(.1,.1,2.2,8),dt(12159576)),{rotation:new Qe(0,0,Math.PI/2)})),W.add(jt(new O(new Gt(.5,.9,.5),dt(7239554)),{position:new U(-1.1,.1,0)})),W.position.set(-14.5,3.62,-12),W.rotation.y=.6,i.add(W);for(const[x,I,B]of[[-9.4,-13.2,14035002],[-8.6,-12.4,4165606],[-10.2,-11.8,4052640]])s(.42,.42,.7,x,3.78,I,B,10),s(.3,.3,.12,x,4.2,I,14541802,10);const j=new O(new Ut(.5,.5,1.1,10),new Zt({color:13625583,transparent:!0,opacity:.45}));j.position.set(-15.6,3.98,-13.4),i.add(j);for(let x=0;x<12;x++){const I=new O(new Gt(.1,.45,.1),dt(11581632));I.position.set(-15.6+(t()-.5)*.6,3.7+t()*.5,-13.4+(t()-.5)*.6),I.rotation.set(t(),t(),t()),i.add(I)}s(.5,.5,.2,-10.5,3.52,-13.6,3817286);const ht=new O(new Ut(.08,.08,4,6),dt(3817286));ht.position.set(-10.5,5.5,-13.6),i.add(ht);const et=new O(new Si(.9,.9,12,1,!0),new Zt({color:16756768,side:Te,emissive:16756768,emissiveIntensity:.4}));et.position.set(-10.5,7.5,-13.2),et.rotation.x=Math.PI,i.add(et);function gt(x,I,B,at=0,St=0){const Yt=new te;Yt.add(new O(new Gt(3*B,3*B,3*B),dt(12159576)));for(const Re of[-1.35,1.35]){const en=new O(new Gt(3.1*B,.3*B,3.1*B),dt(8015920));en.position.y=Re*B,Yt.add(en)}for(const[Re,en]of[[-1.35,-1.35],[1.35,-1.35],[-1.35,1.35],[1.35,1.35]]){const Xn=new O(new Gt(.3*B,3.1*B,.3*B),dt(8015920));Xn.position.set(Re*B,0,en*B),Yt.add(Xn)}Yt.position.set(x,at+1.5*B,I),Yt.rotation.y=St,i.add(Yt),e.push({min:[x-1.5*B,at,I-1.5*B],max:[x+1.5*B,at+3*B,I+1.5*B]})}gt(13.5,-11.2,1,0,.1),gt(16.8,-11.8,1,0,-.08),gt(15.2,-11.4,1,3,.2),gt(16.2,-7.4,.8,0,.3);function vt(x,I,B){const at=new te;at.add(new O(new Ut(1.3,1.3,3.2,14),dt(B)));for(const St of[-1.1,1.1]){const Yt=new O(new be(1.32,.09,6,16),dt(2830648));Yt.rotation.x=Math.PI/2,Yt.position.y=St,at.add(Yt)}at.position.set(x,1.6,I),i.add(at),e.push({min:[x-1.3,0,I-1.3],max:[x+1.3,3.2,I+1.3]})}vt(-18.2,6.2,4160176),vt(-16.4,8.4,11553338),n(3.4,1.6,1.7,-3.4,.8,-8.4,14035002,{solide:!0}),n(3.5,.2,1.8,-3.4,1.45,-8.4,15223378);const Et=new O(new be(.7,.07,6,12,Math.PI),dt(2830648));Et.position.set(-3.4,1.7,-8.4),i.add(Et);const Pt=new te;Pt.add(jt(new O(new Ut(2.4,2.4,.4,20),dt(11041354)),{position:new U(0,.2,0)})),Pt.add(jt(new O(new Ut(2.4,2.4,.4,20),dt(11041354)),{position:new U(0,2.6,0)})),Pt.add(jt(new O(new Ut(1.2,1.2,2.4,14),dt(9264952)),{position:new U(0,1.4,0)})),Pt.position.set(5,0,-6.4),i.add(Pt),e.push({min:[2.6,0,-8.8],max:[7.4,2.8,-4]}),s(.5,.5,.7,5.6,3.15,-6.2,14035002,10),n(1,.7,1.4,4.4,3.2,-6.8,16765517),n(.4,11,7,19.6,5.5,4.5,7031343),n(.4,11,7,17.6,5.5,4.5,7031343);const kt=[16742981,6013163,10216314,13081599,16765517,16734815];for(const x of[1.2,4.2,7.2,10.2]){n(2.6,.3,7,18.6,x,4.5,9264952);for(let I=0;I<6;I++){const B=kt[(I+Math.floor(x))%6];I%2?s(.45,.45,.9+I%3*.3,18.6,x+.65+I%3*.1,1.9+I*.95,B,10):n(1.1,.9+I%2*.3,.8,18.6,x+.65,1.9+I*.95,B)}}e.push({min:[17.4,0,.9],max:[19.9,11,8.1]});for(const x of[-.9,.9]){const I=new O(new Gt(.28,12.5,.28),dt(12159576));I.position.set(-18.6,5.9,-4+x),I.rotation.z=-.13,i.add(I)}for(let x=0;x<9;x++){const I=new O(new Gt(.2,.2,2),dt(11041354));I.position.set(-19+x*.12,1.2+x*1.3,-4),i.add(I)}const ot=new te;for(let x=0;x<6;x++){const I=new O(new be(.8-x*.02,.16,6,16),dt(14137466));I.position.z=x*.28,ot.add(I)}ot.position.set(-19.5,7,-10),ot.rotation.y=Math.PI/2,i.add(ot),s(.1,.1,.8,-19.7,8.1,-10,2830648,6).rotation.z=Math.PI/2;const it=new te,ft=new O(new Ut(3,3.4,.8,20),dt(5531516));ft.position.y=.4,it.add(ft);const mt=new O(new Ut(2.4,2.4,6.4,24,1,!0),new Zt({color:10478574,transparent:!0,opacity:.28,side:Te,roughness:.05}));mt.position.y=4,it.add(mt);const bt=new O(new Ut(2.3,2.3,.2,20),new Zt({color:10478574,emissive:6013163,emissiveIntensity:.9}));bt.position.y=.9,it.add(bt);const It=new O(new Ut(2.7,2.2,1,20),dt(7243424));It.position.y=7.5,it.add(It);const zt=new O(new Se(.4,12,12),new Zt({color:16734815,emissive:16734815,emissiveIntensity:1}));zt.position.y=9.2,it.add(zt);const re=new O(new Ut(.1,.1,1.8,6),dt(7243424));re.position.y=8.4,it.add(re);const Xt=new Ps(8382463,60,14);Xt.position.y=3,it.add(Xt);const ee=new O(new Ut(.5,2.1,6.4,24,1,!0),new Ee({color:8382463,transparent:!0,opacity:0,blending:mn,depthWrite:!1,side:Te}));ee.position.y=4.1,ee.visible=!1,it.add(ee);const q={position:new U(-1,0,-11),platY:1,ouvrirVerre(x){mt.position.y=4+x*5.6},alarme(x){zt.material.color.setHex(x>0?16719390:16734815),zt.material.emissive.setHex(x>0?16719390:16734815),Xt.color.setHex(x>0?16726570:8382463),Xt.intensity=60+x*340},secouer(x){it.position.set(-1+(Math.random()-.5)*x,0,-11+(Math.random()-.5)*x)},exploser(){it.visible=!1,ge.visible=!0,ee.visible=!1},reparer(){it.visible=!0,ge.visible=!1,it.position.set(-1,0,-11),mt.position.y=4,ee.visible=!1,zt.material.color.setHex(16734815),zt.material.emissive.setHex(16734815),Xt.color.setHex(8382463),Xt.intensity=60,bt.material.emissiveIntensity=.9},rayon(x){ee.visible=x>.01,ee.material.opacity=.34*Math.min(1.4,x),Xt.intensity=60+x*260,bt.material.emissiveIntensity=.9+x*1.6}},ge=new te;ge.add(jt(new O(new Ut(3,3.4,.8,20),dt(2830134)),{position:new U(0,.4,0)})),ge.add(jt(new O(new Ut(2.3,2.3,.2,16),dt(1316378)),{position:new U(0,.9,0)}));for(let x=0;x<6;x++){const I=x/6*6.28,B=new O(new Ut(.13,.17,1.6+t()*2.4,6),dt(4869976));B.position.set(Math.cos(I)*2.2,1.6,Math.sin(I)*2.2),B.rotation.set((t()-.5)*.9,0,(t()-.5)*.9),ge.add(B)}const qt=new O(new wn(6,28),new Ee({color:328965,transparent:!0,opacity:.55,depthWrite:!1}));qt.rotation.x=-Math.PI/2,qt.position.y=.05,ge.add(qt),ge.position.set(-1,0,-11),ge.visible=!1,i.add(ge),it.position.set(-1,0,-11),i.add(it),e.push({min:[-4.4,0,-14.4],max:[2.4,9,-7.6]});const ne=je(256,256,(x,I)=>{x.fillStyle="#b8453a",x.fillRect(0,0,I,I);for(const[B,at]of[[118,"#e8c9a0"],[96,"#2f6f8a"],[70,"#e8c9a0"],[46,"#b8453a"],[22,"#ffd24d"]])x.fillStyle=at,x.beginPath(),x.arc(128,128,B,0,6.3),x.fill()}),Ht=new O(new wn(6,40),new Zt({map:ne,roughness:1}));Ht.rotation.x=-Math.PI/2,Ht.position.set(1,.03,4),i.add(Ht);for(const[x,I,B,at]of[[-17,10.8,1.2,.3],[-14.2,11.4,.9,-.2],[-16.4,11,.8,.1]]){const St=new O(new Gt(2.4*B,1.8*B,2*B),dt(13148268));St.position.set(x,I===11?1.7:.9*B,I),St.rotation.y=at,i.add(St),e.push({min:[x-1.2*B,0,I-B],max:[x+1.2*B,1.8*B,I+B]})}for(let x=0;x<5;x++){const I=new O(new Ut(.28,.28,3.4,8),dt(15327952));I.position.set(11+x*.6,1.5,11.5),I.rotation.set(.1,0,Math.PI/2-.5+x*.1),i.add(I)}const K=new te;K.add(jt(new O(new Ut(.06,.06,6,6),dt(2830648)),{position:new U(0,3,0)})),K.add(new O(new Si(2.1,1.6,16,1,!0),new Zt({color:4165482,side:Te,emissive:1923648,emissiveIntensity:.4}))),K.add(jt(new O(new Se(.6,12,12),new Ee({color:16773832})),{position:new U(0,-.3,0)})),K.position.set(0,14.4,0),i.add(K);const st=je(512,128,(x,I,B)=>{x.fillStyle="#cfc8b4",x.fillRect(0,0,I,B);for(let at=0;at<4;at++){const St=at*128+10;x.fillStyle="rgba(0,0,0,0.22)",x.fillRect(St,14,108,100),x.fillStyle="#e4dcc6",x.fillRect(St+4,18,100,92),x.fillStyle="rgba(255,255,255,0.4)",x.fillRect(St+4,18,100,3)}x.fillStyle="rgba(0,0,0,0.4)",x.fillRect(0,0,I,4),x.fillRect(0,B-4,I,4)}),A=new Zt({map:st,roughness:.55,metalness:.15});for(let x=0;x<5;x++){const I=new O(new Gt(16,.3,1.9),A);I.position.set(0,11,13.4-x*1.95),i.add(I)}n(.8,10.3,.5,-8.4,5.15,14.7,5913894),n(.8,10.3,.5,8.4,5.15,14.7,5913894),n(17.6,.8,.5,0,10,14.7,5913894);const v=9081241;for(const x of[-1,1])n(.25,9.8,.3,x*8,4.9,14.2,v),n(.25,.25,9.6,x*8,10.7,9.6,v);const V=new O(new Ut(.2,.2,14.4,10),dt(v));V.rotation.z=Math.PI/2,V.position.set(0,10.8,14.1),i.add(V);for(let x=-6;x<=6;x++){const I=new O(new be(.34,.07,6,12),dt(5989488));I.rotation.y=Math.PI/2,I.position.set(x*.5-2.4,10.8,14.1),i.add(I)}n(2.2,1.3,1.2,5.8,12,14.3,4872810);const rt=new O(new Se(.16,8,8),new Zt({color:4052602,emissive:4052602,emissiveIntensity:1}));rt.position.set(5.8,12,13.62),i.add(rt),n(1,1.7,.16,10.2,4.2,14.9,15327952),s(.26,.26,.14,10.2,4.65,14.8,14035002,12).rotation.x=Math.PI/2,s(.26,.26,.14,10.2,3.8,14.8,4052602,12).rotation.x=Math.PI/2;const lt=new O(new De(15.6,9),new Ee({color:16774864,transparent:!0,opacity:.2,blending:mn,depthWrite:!1}));lt.rotation.x=-Math.PI/2,lt.position.set(0,.05,10.4),i.add(lt),i.background=new Qt(9425906),i.fog=new Sa(13495024,90,230);const b=je(16,256,(x,I,B)=>{const at=x.createLinearGradient(0,0,0,B);at.addColorStop(0,"#2f8fe0"),at.addColorStop(.55,"#8fd9f2"),at.addColorStop(.75,"#e6f6ee"),at.addColorStop(1,"#e6f6ee"),x.fillStyle=at,x.fillRect(0,0,I,B)}),C=new O(new Se(300,24,16),new Ee({map:b,side:tn,fog:!1}));C.position.set(0,-20,60),i.add(C);const L=je(256,256,(x,I,B)=>{const at=ji(21);x.fillStyle="#58b84a",x.fillRect(0,0,I,B);for(let St=0;St<900;St++)x.fillStyle=["#4aa83f","#66c455","#52b146"][St%3],x.fillRect(at()*I,at()*B,2,5+at()*5);for(let St=0;St<26;St++)x.fillStyle=["#ffffff","#ffd24d","#ff8fbf"][St%3],x.beginPath(),x.arc(at()*I,at()*B,2.2,0,6.3),x.fill()},[40,28]),z=new O(new De(320,200),new Zt({map:L,roughness:1}));z.rotation.x=-Math.PI/2,z.position.set(0,-.03,114),i.add(z),n(16,.3,1.2,0,0,15.6,10261640);for(let x=0;x<7;x++)n(4.4,.12,3.2,Math.sin(x*.9)*2.6,.04,20+x*5.2,12104356);for(let x=-60;x<=60;x+=3)n(.6,3.2,.3,x,1.6,52,15854034),n(3,.3,.2,x+1.5,2.2,52,15854034);const k=new te,Y=new O(new Se(1.5,16,12),dt(16734815,{flatShading:!1}));Y.position.set(-9,1.5,26),k.add(Y);for(const x of[0,1]){const I=new O(new be(1.5,.12,6,20),dt(16777215));I.position.set(-9,1.5,26),I.rotation.set(x?Math.PI/2:0,x?0:.3,0),k.add(I)}[[8,24,16742981,0],[10,24.6,6013163,.3],[9,24.2,16765517,-.2]].forEach(([x,I,B,at],St)=>{const Yt=new O(new Gt(1.8,1.8,1.8),dt(B));Yt.position.set(x,.9+(St===2?1.8:0),I),Yt.rotation.y=at,k.add(Yt)});const J=new te;J.add(jt(new O(new Gt(4.2,1.4,2),dt(16756768)),{position:new U(0,1.3,0)})),J.add(jt(new O(new Gt(1.5,1.4,2),dt(14035002)),{position:new U(2.4,1.6,0)}));for(const[x,I]of[[-1.3,-1],[-1.3,1],[1.8,-1],[1.8,1]]){const B=new O(new Ut(.5,.5,.3,12),dt(2303531));B.rotation.x=Math.PI/2,B.position.set(x,.5,I),J.add(B)}J.position.set(-1,0,33),J.rotation.y=.6,k.add(J);const ut=new O(new Ut(3.2,3.2,.6,20),dt(4165606));ut.position.set(14,.3,36),k.add(ut);const Mt=new O(new Ut(2.9,2.9,.65,20),dt(15784352));Mt.position.set(14,.32,36),k.add(Mt);const xt=new O(new Ut(.9,.7,1.2,10),dt(16748479));xt.position.set(15.2,1.2,36.6),k.add(xt);const Ft=new O(new Gt(.2,.15,1.8),dt(6013163));Ft.position.set(13,.8,35),Ft.rotation.y=.5,k.add(Ft);const At=new O(new Ut(1.1,1.1,.14,16),dt(10216314));At.position.set(-15,.1,40),k.add(At);for(const x of[-1,1]){const I=new O(new Ut(.12,.12,8,6),dt(11553338));I.position.set(24+x*3.2,4,30),I.rotation.z=-x*.18,k.add(I);const B=I.clone();B.position.z=33,k.add(B)}const _t=new O(new Ut(.12,.12,7.6,6),dt(11553338));_t.rotation.z=Math.PI/2,_t.position.set(24,7.7,31.5),k.add(_t);for(const x of[-1.2,1.2]){const I=new O(new Ut(.03,.03,6,4),dt(5592405));I.position.set(24+x,4.7,31.5),k.add(I)}const G=new O(new Gt(2.6,.2,1),dt(16765517));G.position.set(24,1.7,31.5),k.add(G),i.add(k);for(let x=0;x<26;x++){const I=(t()-.5)*110,B=22+t()*26;if(Math.abs(I)<6&&B<50)continue;const at=new O(new sn(1.2+t()*1.2,0),dt([4045656,3121228,5031520][x%3]));if(at.position.set(I,.8,B),i.add(at),x%2){const St=new O(new sn(.4,0),dt([16742981,16748479,16765517][x%3]));St.position.set(I+.4,1.9+t()*.8,B+.5),i.add(St)}}const Tt=150,ct=new Ls(new Ut(.7,1,9,6),dt(7031343),Tt),pt=new Ls(new sn(1,0),dt(2789194),Tt),Lt=new Ls(new sn(1,0),dt(4045656),Tt),wt=new Oe;for(let x=0;x<Tt;x++){let I=(t()-.5)*220;const B=62+t()*70,at=.9+t()*.9;Math.abs(I-2)<17&&B<102&&(I+=I>2?22:-22),wt.rotation.set(0,t()*6,0),wt.position.set(I,4.5*at,B),wt.scale.set(at,at,at),wt.updateMatrix(),ct.setMatrixAt(x,wt.matrix),wt.position.set(I,11*at,B),wt.scale.set(5.5*at,6.5*at,5.5*at),wt.updateMatrix(),pt.setMatrixAt(x,wt.matrix),wt.position.set(I+1.2*at,15*at,B-.8),wt.scale.set(3.6*at,4.2*at,3.6*at),wt.updateMatrix(),Lt.setMatrixAt(x,wt.matrix)}i.add(ct,pt,Lt);const Kt=je(128,128,x=>{x.fillStyle="#fff6df",x.beginPath(),x.arc(64,64,62,0,6.3),x.fill(),x.fillStyle="#2b3138";for(let I=0;I<12;I++){const B=I/12*6.283;x.beginPath(),x.arc(64+Math.sin(B)*52,64-Math.cos(B)*52,I%3?2.5:4.5,0,6.3),x.fill()}}),xe=new te;xe.add(new O(new be(1.7,.2,8,30),dt(7031343))),xe.add(new O(new wn(1.7,30),new Ee({map:Kt})));const Pe=new te;Pe.add(jt(new O(new Gt(.12,1,.05),dt(2830648)),{position:new U(0,.5,.05)}));const oe=new te;oe.add(jt(new O(new Gt(.08,1.4,.05),dt(14035002)),{position:new U(0,.7,.1)})),xe.add(Pe,oe),xe.position.set(-19.9,10,5),xe.rotation.y=Math.PI/2,i.add(xe);const on=je(512,256,(x,I,B)=>{x.fillStyle="#2c4a3e",x.fillRect(0,0,I,B),x.strokeStyle="rgba(255,255,255,.9)",x.fillStyle="rgba(255,255,255,.9)",x.lineWidth=4,x.lineCap="round",x.font="bold 34px sans-serif",x.fillText("PLAN SECRET",30,50),x.beginPath(),x.arc(110,110,22,0,6.3),x.stroke(),x.beginPath(),x.moveTo(110,132),x.lineTo(110,200),x.moveTo(110,150),x.lineTo(70,175),x.moveTo(110,150),x.lineTo(150,175),x.moveTo(110,200),x.lineTo(85,240),x.moveTo(110,200),x.lineTo(135,240),x.stroke(),x.beginPath(),x.moveTo(190,175),x.lineTo(330,175),x.lineTo(310,155),x.moveTo(330,175),x.lineTo(310,195),x.stroke(),x.beginPath(),x.arc(400,195,7,0,6.3),x.stroke(),x.beginPath(),x.moveTo(400,202),x.lineTo(400,222),x.moveTo(400,208),x.lineTo(390,216),x.moveTo(400,208),x.lineTo(410,216),x.stroke(),x.font="bold 22px sans-serif",x.fillText("ça rétrécit !",310,140)});n(.4,5.6,8.6,19.8,6.5,-4,7031343);const an=new O(new De(8,5),new Zt({map:on,roughness:.95}));an.position.set(19.55,6.5,-4),an.rotation.y=-Math.PI/2,i.add(an);const Tn=new te;Tn.add(jt(new O(new Ut(1.5,1.5,.25,18),dt(11041354)),{position:new U(0,3,0)})),Tn.add(jt(new O(new Ut(.22,.4,3,8),dt(8015920)),{position:new U(0,1.5,0)})),Tn.add(jt(new O(new Ut(1,.8,.55,12),dt(4876938)),{position:new U(0,3.4,0)})),Tn.add(jt(new O(new Ut(.1,.18,1.5,6),dt(7031343)),{position:new U(0,4.35,0)}));for(const[x,I,B,at,St]of[[0,5.5,0,.9,3121228],[-.7,5,.2,.6,4573013],[.7,5.1,-.2,.55,4573013]])Tn.add(jt(new O(new sn(at,0),dt(St)),{position:new U(x,I,B)}));Tn.position.set(13.5,0,-2.5),i.add(Tn),e.push({min:[12,0,-4],max:[15,3.2,-1]});const gn=new te;gn.add(jt(new O(new Gt(3,1.1,2),dt(4160176)),{position:new U(0,1.6,0)}));const xn=new O(new Ut(.75,.75,.35,14),dt(2830648));xn.rotation.x=Math.PI/2,xn.position.set(1.8,.75,0),gn.add(xn);for(const x of[-.7,.7])gn.add(jt(new O(new Gt(2.6,.16,.16),dt(12159576)),{position:new U(-2.2,1.2,x)}));for(const x of[-.7,.7])gn.add(jt(new O(new Gt(.16,1.2,.16),dt(8015920)),{position:new U(-.7,.6,x)}));for(const[x,I]of[[-.4,.3],[.3,-.4],[.5,.4]])gn.add(jt(new O(new sn(.45,0),dt(16742981)),{position:new U(x,2.35,I)}));gn.position.set(-12.5,0,11.5),gn.rotation.y=.5,i.add(gn),e.push({min:[-15,0,9.5],max:[-10,2.4,13.5]});for(const[x,I,B]of[[-6.4,12.4,16742981],[-5.2,12.8,16748479],[6.6,12.5,16756768],[7.9,12.2,16748479]]){const at=new O(new Ut(.7,.5,1,10),dt(12740924));at.position.set(x,.5,I),i.add(at),s(.04,.04,1.4,x,1.6,I,3116876,5);const St=new O(new sn(.55,0),dt(B));St.position.set(x,2.45,I),i.add(St);const Yt=new O(new sn(.6,0),dt(4045656));Yt.position.set(x,1.3,I),i.add(Yt)}const An=new te;An.add(jt(new O(new Ut(.8,.9,1.5,12),dt(4045722)),{position:new U(0,.75,0)})),An.add(jt(new O(new Ut(.14,.2,1.8,8),dt(4045722)),{position:new U(1.2,1.5,0),rotation:new Qe(0,0,-.9)}));const ds=new O(new be(.6,.08,6,12,Math.PI),dt(3119742));ds.position.set(-.1,1.5,0),An.add(ds),An.position.set(-3.4,0,11.6),An.rotation.y=-.4,i.add(An),e.push({min:[-4.8,0,10.6],max:[-2,1.6,12.6]});for(const[x,I,B,at]of[[12.2,12,.4,14035002],[12.2,12,1.2,4165606],[13.6,12.2,.4,16765517]])s(.6,.6,.8,x,B,I,at,12),s(.5,.5,.1,x,B+.45,I,14541802,12);e.push({min:[11.5,0,11.3],max:[14.3,1.6,12.9]});const si=new O(new be(1,.45,8,18),dt(2303531));si.rotation.x=Math.PI/2,si.position.set(16.2,.46,11),i.add(si);const ri=si.clone();ri.position.y=1.36,i.add(ri),e.push({min:[14.7,0,9.5],max:[17.7,1.8,12.5]});const Rn=new te;for(const x of[-2.1,2.1]){const I=new O(new be(1.1,.09,6,22),dt(2303531));I.rotation.y=Math.PI/2,I.position.set(0,1.1,x),Rn.add(I)}const _n=(x,I,B)=>{const at=new U().subVectors(I,x),St=new O(new Ut(.07,.07,at.length(),6),dt(B));St.position.copy(x).addScaledVector(at,.5),St.quaternion.setFromUnitVectors(new U(0,1,0),at.normalize()),Rn.add(St)},ps=new U(0,1.1,-2.1),ms=new U(0,1.1,2.1),gs=new U(0,2.6,-.7),xs=new U(0,1.2,.2),Fr=new U(0,2.7,1.8);_n(ps,gs,14035002),_n(ps,xs,14035002),_n(gs,xs,14035002),_n(gs,new U(0,2.7,1.5),14035002),_n(ms,Fr,14035002),_n(xs,ms,14035002),Rn.add(jt(new O(new Gt(.25,.1,.9),dt(2303531)),{position:new U(0,2.75,-.8)})),Rn.add(jt(new O(new Gt(1.4,.1,.1),dt(2303531)),{position:new U(0,3,1.85)})),Rn.position.set(18.7,0,7),Rn.rotation.z=-.12,i.add(Rn);const R=[16765517,16742981,6013163,16748479,10216314];for(const x of[-6.5,6.5])for(let I=0;I<=28;I++){const B=I/28,at=-18.5+B*37,St=11.2-Math.sin(B*Math.PI)*1.5,Yt=new O(new Se(.13,8,6),new Ee({color:R[I%5]}));Yt.position.set(at,St,x),i.add(Yt)}const X={z:1.2},nt=je(256,512,(x,I,B)=>{x.fillStyle="#2f78a8",x.fillRect(0,0,I,B),x.fillStyle="rgba(0,0,0,0.28)";for(const[St,Yt,Re,en]of[[26,250,90,110],[140,250,90,110],[26,380,90,110],[140,380,90,110]])x.fillRect(St,Yt,Re,en);x.fillStyle="#3d8dc2";for(const[St,Yt,Re,en]of[[32,256,78,98],[146,256,78,98],[32,386,78,98],[146,386,78,98]])x.fillRect(St,Yt,Re,en);x.fillStyle="#f5e9c8",x.beginPath(),x.arc(128,130,78,0,6.3),x.fill();const at=x.createRadialGradient(128,130,4,128,130,70);at.addColorStop(0,"#fff3b0"),at.addColorStop(1,"#ffc65a"),x.fillStyle=at,x.beginPath(),x.arc(128,130,68,0,6.3),x.fill(),x.strokeStyle="#f5e9c8",x.lineWidth=6,x.beginPath(),x.moveTo(128,62),x.lineTo(128,198),x.moveTo(60,130),x.lineTo(196,130),x.stroke()}),Q=new te;Q.add(jt(new O(new Gt(5.8,8.6,.5),dt(5913894)),{position:new U(0,4.3,.25)}));const $=je(64,128,(x,I,B)=>{const at=x.createLinearGradient(0,0,0,B);at.addColorStop(0,"#fff4c8"),at.addColorStop(.6,"#ffd890"),at.addColorStop(1,"#e8a860"),x.fillStyle=at,x.fillRect(0,0,I,B),x.fillStyle="rgba(120,70,30,.35)",x.fillRect(0,B-14,I,14)});Q.add(jt(new O(new De(4.6,7.7),new Ee({map:$})),{position:new U(0,3.95,.08)}));const yt=new te;yt.position.set(-2.3,0,.45),yt.add(jt(new O(new Gt(4.6,7.7,.3),new Zt({map:nt,roughness:.6})),{position:new U(2.3,3.95,0)}));const Ct=new O(new Se(.22,10,8),dt(14725184,{flatShading:!1}));Ct.position.set(3.9,3.7,.3),yt.add(Ct);const Ot=new O(new Ut(.14,.14,.12,10),dt(14725184));Ot.rotation.x=Math.PI/2,Ot.position.set(3.9,3.2,.17),yt.add(Ot);for(const x of[1.2,6.6])yt.add(jt(new O(new Gt(.14,.7,.1),dt(2830648)),{position:new U(.15,x,.19)}));Q.add(yt);const Nt=new O(new De(4.6,6),new Ee({color:16769696,transparent:!0,opacity:0,blending:mn,depthWrite:!1}));Nt.rotation.x=-Math.PI/2,Nt.position.set(0,.07,3.2),Q.add(Nt);const $t=je(128,96,(x,I,B)=>{x.fillStyle="#f0dca8",x.fillRect(0,0,I,B),x.strokeStyle="#6b4a2f",x.lineWidth=5,x.strokeRect(3,3,I-6,B-6),x.fillStyle="#3a2615",x.font="bold 17px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("DÉMARRER",I/2,20),x.fillText("L'ANIMATION",I/2,76)});Q.add(jt(new O(new Gt(2,2.9,.25),dt(5913894)),{position:new U(-3.95,5.2,.13)})),Q.add(jt(new O(new De(1.7,1.28),new Zt({map:$t,roughness:.9})),{position:new U(-3.95,5.75,.27)}));const Jt=new Zt({color:14035002,emissive:14035002,emissiveIntensity:.6,roughness:.4}),Bt=new O(new Ut(.42,.46,.22,20),Jt);Bt.rotation.x=Math.PI/2,Bt.position.set(-3.95,4.45,.38),Q.add(Bt),Q.add(jt(new O(new be(.5,.06,8,20),dt(14725184)),{position:new U(-3.95,4.45,.27)}));const ae=je(256,80,(x,I,B)=>{x.fillStyle="#c9a06c",x.fillRect(0,0,I,B),x.strokeStyle="#6b4a2f",x.lineWidth=6,x.strokeRect(3,3,I-6,B-6),x.fillStyle="#3a2615",x.font="bold 46px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("MAISON",I/2,B/2+2)});Q.add(jt(new O(new De(3.2,1),new Zt({map:ae,roughness:.9})),{position:new U(0,9.4,.12)}));const ue=new te;ue.add(jt(new O(new Ut(.4,.4,.9,8),new Zt({color:16769162,emissive:16760906,emissiveIntensity:.9})),{position:new U(0,0,0)})),ue.add(jt(new O(new Si(.6,.4,8),dt(2830648)),{position:new U(0,.65,0)})),ue.add(jt(new O(new Gt(.15,.15,.5),dt(2830648)),{position:new U(0,0,-.35)})),ue.position.set(3.7,6.2,.7);const _e=new Ps(16767392,40,16,1.8);_e.position.copy(ue.position),_e.position.z+=.8,Q.add(_e),Q.add(ue);const We=je(256,128,(x,I,B)=>{x.fillStyle="#7a5030",x.fillRect(0,0,I,B),x.strokeStyle="#d7b87a",x.lineWidth=5,x.strokeRect(8,8,I-16,B-16),x.fillStyle="#f0dca8",x.font="bold 30px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("BIENVENUE",I/2,B/2+2)}),ce=new O(new De(4.4,2.2),new Zt({map:We,roughness:1}));ce.rotation.x=-Math.PI/2,ce.position.set(0,.05,1.7),Q.add(ce);const Vt=new O(new Ut(.8,.6,1.2,10),dt(12740924));Vt.position.set(-3.9,.6,1),Q.add(Vt);for(const[x,I,B,at,St]of[[-3.9,2,1,.85,4045656],[-4.3,2.7,.8,.5,16742981],[-3.5,2.8,1.2,.5,16748479]])Q.add(jt(new O(new sn(at,0),dt(St)),{position:new U(x,I,B)}));Q.position.set(-20,0,X.z),Q.rotation.y=Math.PI/2,i.add(Q);const vn={ouvrir(x){yt.rotation.y=-x*1.75,Nt.material.opacity=.5*x},position:new U(-19.4,0,X.z)},de=(x,I)=>x<-12&&I>-3.2&&I<5.8,cn=(x,I,B=.8)=>!de(x,I)&&!e.some(at=>x>at.min[0]-B&&x<at.max[0]+B&&I>at.min[2]-B&&I<at.max[2]+B),Le=(x=30)=>{for(let I=0;I<x;I++){const B=(t()-.5)*35,at=-12.5+t()*24;if(cn(B,at))return[B,at]}return null},Ge=[12159576,11041354,13213804,9264952];for(let x=0;x<9;x++){const I=Le();if(!I)continue;const B=4+t()*4,at=new O(new Gt(B,.26,.8+t()*.5),dt(Ge[x%4]));if(at.position.set(I[0],.14,I[1]),at.rotation.y=t()*3.14,i.add(at),x%3===0){const St=new O(new Gt(B*.8,.26,.8),dt(Ge[(x+1)%4]));St.position.set(I[0]+.4,.41,I[1]+.3),St.rotation.y=t()*3.14,i.add(St)}}for(let x=0;x<16;x++){const I=Le();if(!I)continue;const B=new O(new sn(.35+t()*.25,0),dt(16052192));B.position.set(I[0],.4,I[1]),B.rotation.set(t()*6,t()*6,t()*6),i.add(B)}for(let x=0;x<9;x++){const I=Le();if(!I)continue;const B=new O(new De(1.6,2.1),new Zt({color:x%3?16183778:12573938,roughness:1,side:Te}));B.rotation.set(-Math.PI/2,0,t()*6),B.position.set(I[0],.05+x*.004,I[1]),i.add(B)}const oi=[14035002,4165606,16765517,4045656,2830648];for(let x=0;x<9;x++){const I=Le();if(!I)continue;const B=new O(new wn(.7+t()*1,14),new Zt({color:oi[x%5],roughness:.4,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));B.rotation.x=-Math.PI/2,B.scale.set(1+t()*.8,1,1),B.rotation.z=t()*3,B.position.set(I[0],.06,I[1]),i.add(B)}{const x=Le();if(x){const I=new O(new Ut(.7,.7,1.2,12),dt(4165606));I.rotation.z=Math.PI/2,I.position.set(x[0],.7,x[1]),I.rotation.y=.8,i.add(I);const B=new O(new wn(1.6,16),new Zt({color:4165606,roughness:.3,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));B.rotation.x=-Math.PI/2,B.scale.set(1.5,1,.9),B.position.set(x[0]+.8,.07,x[1]+.5),i.add(B)}}for(let x=0;x<40;x++){const I=Le();if(!I)continue;const B=new O(new Ut(.06,.06,.6+t()*.5,5),dt(x%3?11581632:13149002));if(B.rotation.set(Math.PI/2,0,t()*6),B.position.set(I[0],.08,I[1]),i.add(B),x%4===0){const at=new O(new Ut(.2,.2,.16,6),dt(9081241));at.position.set(I[0]+.5,.1,I[1]-.3),i.add(at)}}for(let x=0;x<4;x++){const I=Le();if(!I)continue;const B=new te;B.add(jt(new O(new Ut(.11,.11,2.4,8),dt(12159576)),{rotation:new Qe(0,0,Math.PI/2),position:new U(0,.12,0)})),B.add(jt(new O(new Gt(.5,.5,.9),dt(x%2?14035002:7239554)),{position:new U(-1.2,.25,0)})),B.position.set(I[0],0,I[1]),B.rotation.y=t()*6,i.add(B)}for(let x=0;x<2;x++){const I=Le();if(!I)continue;for(let at=0;at<3;at++){const St=new O(new be(.9-at*.2,.1,6,18),dt(x?16756768:2830648));St.rotation.x=Math.PI/2,St.position.set(I[0],.1+at*.18,I[1]),i.add(St)}const B=new O(new be(2.2,.1,6,16,1.6),dt(x?16756768:2830648));B.rotation.x=Math.PI/2,B.position.set(I[0]+1.6,.1,I[1]+.4),B.rotation.z=t()*6,i.add(B)}for(let x=0;x<3;x++){const I=Le();if(!I)continue;const B=new O(new be(.42,.18,8,14),dt([16765517,16742981,6013163][x]));B.rotation.x=Math.PI/2,B.position.set(I[0],.2,I[1]),i.add(B)}for(let x=0;x<4;x++){const I=Le();if(!I)continue;const B=new O(new Si(1.4+t()*.8,.7,9),dt(14729871));B.position.set(I[0],.3,I[1]),i.add(B);for(let at=0;at<5;at++){const St=new O(new be(.28,.05,5,10,4.5),dt(15718312));St.rotation.set(t()*3,t()*3,t()*3),St.position.set(I[0]+(t()-.5)*3,.15,I[1]+(t()-.5)*3),i.add(St)}}for(let x=0;x<3;x++){const I=Le();if(!I)continue;const B=new te;B.add(jt(new O(new Gt(2.4,1.6,2),dt(13148268)),{position:new U(0,.8,0)}));for(const at of[-1,1])B.add(jt(new O(new Gt(2.4,.08,1),dt(11569752)),{position:new U(0,1.9,at*1.3),rotation:new Qe(at*.9,0,0)}));B.position.set(I[0],0,I[1]),B.rotation.set(0,t()*6,(t()-.5)*.2),i.add(B)}for(let x=0;x<5;x++){const I=Le();if(!I)continue;const B=new O(new Gt(1.3,.6,.65),dt(11883834));B.position.set(I[0],.3+(x===4?.6:0),I[1]),B.rotation.y=t()*6,i.add(B)}{const x=Le();if(x){const I=new O(new Se(.5,12,10),dt(14217290,{flatShading:!1}));I.position.set(x[0],.5,x[1]),i.add(I)}}for(let x=0;x<7;x++){const I=Le();if(!I)continue;const B=new O(new Gt(.7,.7,.7),dt([16742981,6013163,10216314,16765517][x%4]));B.position.set(I[0],.35,I[1]),B.rotation.y=t()*6,i.add(B)}for(let x=0;x<4;x++){const I=new O(new Gt(.9,7-x*.5,.25),dt(Ge[x]));I.position.set(-.8+x*1,3.4,-14.5+x*.05),I.rotation.z=.12+x*.03,I.rotation.x=-.12,i.add(I)}const ve=140,dn=new Float32Array(ve*3),Wn=[];for(let x=0;x<ve;x++)Wn.push([(t()-.5)*36,1+t()*14,(t()-.5)*26,t()*6.28]);const Xe=new Cr(new Ce().setAttribute("position",new Ve(dn,3)),new Os({map:Ca(),color:16773312,size:.5,transparent:!0,opacity:.7,blending:mn,depthWrite:!1}));Xe.frustumCulled=!1,i.add(Xe),zm(i,[it,ge,yt,Pe,oe,K]);function Cn(x){const I=Xe.geometry.attributes.position;Wn.forEach((B,at)=>I.setXYZ(at,B[0]+Math.sin(x*.2+B[3])*1.4,B[1]+Math.sin(x*.3+B[3])*.8,B[2]+Math.cos(x*.25+B[3])*1.2)),I.needsUpdate=!0,K.rotation.z=Math.sin(x*.6)*.012,zt.material.emissiveIntensity=.4+Math.abs(Math.sin(x*2.2))*.9,F.material.opacity=.08+Math.sin(x*.4)*.025,Jt.emissiveIntensity=.45+Math.abs(Math.sin(x*3))*.9,ee.visible&&ee.scale.set(1+Math.sin(x*9)*.03,1,1+Math.sin(x*9)*.03),oe.rotation.z=-x*.6,Pe.rotation.z=-x*.05+1}return{scene:i,colliders:e,maj:Cn,depart:new U(1,0,3),porteMaison:{x:-18.6,z:X.z},maisonApi:vn,machineApi:q,limites:Vm,limiterCamera:Hm,nom:"Le grenier du professeur Mousse"}}const Ye=(i,t={})=>dt(i,{flatShading:!1,roughness:.72,...t}),we=(i,t,e=16,n=12)=>new O(new Se(i,e,n),t),Kn=(i,t,e,n=6,s=12)=>new O(new ss(i,t,n,s),e);function pe(i,t,e,n,s=1,r=1,o=1){return i.position.set(t,e,n),i.scale.set(s,r,o),i}function Hl(i){const{jambe:t,torse:e,large:n,teteR:s,peau:r,cheveux:o,haut:a,bas:c,chaussure:l,enfant:u,lunettes:h=!1,moustache:d=!1,sac:f=!1,barbe:g=!1}=i,_=new te,m=Ye(r),p=Ye(a),w=Ye(c),y=Ye(o,{roughness:.9}),M=Ye(l),F=Ye(16777215,{roughness:.5}),P=Ye(new Qt(r).multiplyScalar(.82).getHex()),T=t,D=t+e,E=Kn(n*.86,e*.5,p);pe(E,0,T+e*.5,0,1,1,.8),_.add(E);const S=we(n*.8,p);pe(S,0,T+e*.2,n*.12,1,.8,.85),_.add(S);const N=new O(new Ut(n*.78,n*.82,.1,18),w);N.scale.z=.82,N.position.set(0,T+.03,0),_.add(N);const Z=new O(new Gt(.1,.07,.03),Ye(14725184,{metalness:.5}));Z.position.set(0,T+.03,n*.66),_.add(Z);const H=new O(new be(s*.42,.045,8,18),p);H.rotation.x=Math.PI/2,H.position.set(0,D+.01,0),_.add(H);const tt=new O(new Ut(s*.24,s*.28,.14,12),m);tt.position.set(0,D+.04,0),_.add(tt);const W=new te;W.position.set(0,D+.05,0),_.add(W);const j=s*.95;W.add(pe(we(s,m,28,20),0,j,0,1,.97,.96)),W.add(pe(we(s*.7,m,20,14),0,j-s*.4,s*.2,1,.78,.88));for(const it of[-1,1]){W.add(pe(we(s*.28,m),it*s*.5,j-s*.27,s*.6,1,.9,.7)),W.add(pe(we(s*.19,m),it*s*.98,j-.01,0,.45,1,.8)),W.add(pe(we(s*.11,P),it*s*.99,j-.01,.01,.35,.8,.6));const ft=u?1.18:.9,mt=it*s*.37,bt=j+s*.05,It=s*.84;W.add(pe(we(s*.21*ft,F),mt,bt,It,1,1.12,.55)),W.add(pe(we(s*.125*ft,Ye(4861724)),mt+it*.004,bt-.005,It+s*.08*ft,1,1,.5)),W.add(pe(we(s*.07*ft,new Ee({color:1182213})),mt+it*.004,bt-.005,It+s*.105*ft,1,1,.5)),W.add(pe(we(s*.035*ft,new Ee({color:16777215})),mt+.025,bt+.035,It+s*.13*ft)),W.add(pe(we(s*.22*ft,P),mt,bt+s*.1*ft,It-.012,1,.38,.55));const zt=Kn(s*.035,s*.24,y,4,8);zt.rotation.z=Math.PI/2+it*(u?-.12:.05),zt.position.set(mt,bt+s*.3,It-.005),W.add(zt),u&&W.add(pe(we(s*.09,new Ee({color:16748442,transparent:!0,opacity:.55})),it*s*.55,j-s*.2,s*.8,1.3,.8,.3))}W.add(pe(we(s*.13,m),0,j-s*.14,s*.95,1,.9,.9)),W.add(pe(we(s*.075,P),-s*.1,j-s*.18,s*.9)),W.add(pe(we(s*.075,P),s*.1,j-s*.18,s*.9));const ht=new O(new be(s*.2,.014,6,16,Math.PI),new Ee({color:9059115}));ht.rotation.z=Math.PI,ht.position.set(0,j-s*.36,s*.92),W.add(ht);const et=pe(we(s*.15,new Ee({color:4854800})),0,j-s*.47,s*.9,1,1.15,.4);if(et.visible=!1,W.add(et),d)for(const it of[-1,1]){const ft=Kn(s*.05,s*.26,y,4,8);ft.rotation.z=Math.PI/2+it*.18,ft.position.set(it*s*.15,j-s*.27,s*.95),W.add(ft)}if(g&&W.add(pe(we(s*.72,new Ee({color:3877406,transparent:!0,opacity:.35}),20,14),0,j-s*.4,s*.2,1.01,.8,.9)),h){for(const ft of[-1,1]){const mt=new O(new be(s*.24,.018,6,20),Ye(2830648,{metalness:.4}));mt.position.set(ft*s*.37,j+s*.05,s*.93),W.add(mt)}const it=new O(new Gt(s*.2,.02,.02),Ye(2830648));it.position.set(0,j+s*.08,s*.95),W.add(it)}const gt=new O(new Se(s*1.04,22,14,0,Math.PI*2,0,Math.PI*(u?.56:.5)),y);gt.position.set(0,j+.01,-.03),gt.rotation.x=-.3,W.add(gt);const vt=u?[[0,.98,.1],[-.35,.92,.1],[.35,.92,.1],[-.7,.7,.05],[.7,.7,.05],[-.2,.85,-.3],[.25,.85,-.3],[0,.8,-.55]]:[[0,.95,.05],[-.4,.85,.05],[.4,.85,.05],[0,.8,-.4]];for(const[it,ft,mt]of vt){const bt=new O(new Si(s*(u?.17:.13),s*(u?.55:.28),8),y);bt.position.set(it*s,j+ft*s,mt*s),bt.rotation.set(.35+mt*.8,0,-it*1.2),W.add(bt)}for(const it of[-.6,-.3,0,.3,.6])W.add(pe(we(s*.17,y,10,8),it*s,j+s*.78,s*(.58-Math.abs(it)*.25),1,.7,.8));for(const it of[-1,1])W.add(pe(new O(new Gt(.05,s*.34,.07),y),it*s*.9,j-s*.02,s*.25));const Et=e*.92,Pt=n*.27,kt=[-1,1].map(it=>{const ft=new te;ft.add(pe(we(Pt*1.25,p),0,0,0)),ft.add(pe(Kn(Pt,Et*.34,p),0,-Et*.26,0));const mt=new te;mt.position.set(0,-Et*.47,0),mt.rotation.x=-.12,ft.add(mt),mt.add(pe(Kn(Pt*.8,Et*.3,m),0,-Et*.2,0));const bt=new te;bt.position.set(0,-Et*.53,.01),mt.add(bt),bt.add(pe(we(Pt*.95,m),0,-.05,0,.9,1.1,.85)),bt.add(pe(we(Pt*.4,m),it*Pt*.8,-0,Pt*.3));for(let It=0;It<4;It++)bt.add(pe(Kn(Pt*.17,Pt*.5,m,3,6),(It-1.5)*Pt*.4,-Pt*1.2,Pt*.1));return ft.position.set(it*(n+Pt*.9),D-.07,0),ft.userData.main=bt,_.add(ft),ft}),ot=[-1,1].map(it=>{const ft=new te;ft.add(pe(Kn(n*.4,t*.3,w),0,-t*.26,0)),ft.add(pe(we(n*.38,w),0,-t*.5,.02)),ft.add(pe(Kn(n*.33,t*.26,w),0,-t*.7,0));const mt=pe(we(n*.45,M),0,-t+.1,.07,1,.62,1.7);ft.add(mt),ft.add(pe(we(n*.3,F),0,-t+.09,n*.58,1,.65,.9));const bt=new O(new Gt(n*.88,.05,n*1.55),F);bt.position.set(0,-t+.03,.09),ft.add(bt);for(let It=0;It<3;It++){const zt=new O(new Gt(n*.5,.025,.035),F);zt.position.set(0,-t+.17+It*.012,n*(.18+It*.1)),zt.rotation.x=-.4,ft.add(zt)}return ft.position.set(it*n*.46,T,0),_.add(ft),ft});if(f){const it=Ye(3123310),ft=Ye(2062928),mt=new O(new Gt(n*1.5,e*.9,.3),it);mt.position.set(0,T+e*.55,-n*.8),_.add(mt),_.add(pe(we(n*.75,it),0,T+e*1,-n*.8,1,.45,.35));const bt=new O(new Gt(n*1,e*.35,.12),ft);bt.position.set(0,T+e*.35,-n*.8-.2),_.add(bt);const It=new O(new Gt(n*1,.02,.02),Ye(16765517));It.position.set(0,T+e*.5,-n*.8-.26),_.add(It);const zt=new O(new be(.12,.025,6,12,Math.PI),ft);zt.position.set(0,T+e*1.1,-n*.8),_.add(zt);for(const re of[-1,1]){const Xt=new O(new Gt(.09,e*.9,.05),ft);Xt.position.set(re*n*.52,T+e*.6,n*.1),Xt.rotation.x=0,_.add(Xt);const ee=new O(new Gt(.09,.05,n*1.7),ft);ee.position.set(re*n*.52,D-.02,-n*.3),_.add(ee)}}return _.userData={jambes:ot,bras:kt,tete:W,bouche:et,sourire:ht,mains:kt.map(it=>it.userData.main),hauteurTete:D+.05+j},_}function km({echelle:i=1}={}){const t=Hl({jambe:.58,torse:.52,large:.3,teteR:.4,peau:15316362,cheveux:4861724,haut:16747069,bas:3895221,chaussure:14035002,enfant:!0,sac:!0});return t.scale.setScalar(i),t}function Wm({echelle:i=1}={}){const t=Hl({jambe:.86,torse:.78,large:.36,teteR:.3,peau:14986626,cheveux:3877406,haut:4039245,bas:7035464,chaussure:5913894,enfant:!1,lunettes:!0,moustache:!0,barbe:!0}),e=new O(new Gt(.2,.2,.04),Ye(11569744));e.position.set(.2,1.35,.3),t.add(e);const n=new O(new Ut(.013,.013,.16,6),Ye(14035002));return n.position.set(.22,1.47,.3),t.add(n),t.scale.setScalar(i),t}function kc({grain:i=!1}={}){const t=new te,e=dt(1907224,{flatShading:!1}),n=new O(new Se(.9,10,8),e);n.scale.set(1.5,1,1),n.position.set(-1.5,1.1,0);const s=new O(new Se(.62,10,8),e);s.position.set(0,1.2,0);const r=new O(new Se(.58,10,8),e);r.position.set(1,1.25,0),t.add(n,s,r);const o=[];for(let a=0;a<3;a++)for(const c of[-1,1]){const l=new O(new Ut(.06,.05,1.5,4),e);l.position.set(-.9+a*.9,.6,c*.5),l.rotation.x=c*.6,t.add(l),o.push({p:l,c,i:a})}for(const a of[-1,1]){const c=new O(new Ut(.04,.04,1.1,4),e);c.position.set(1.5,1.8,a*.3),c.rotation.set(a*.4,0,-.7),t.add(c)}if(i){const a=new O(new ss(.34,1.3,4,8),dt(16776688,{flatShading:!1}));a.rotation.z=Math.PI/2,a.position.set(.3,2.35,0),t.add(a)}return t.userData.pattes=a=>{for(const{p:c,c:l,i:u}of o)c.rotation.z=Math.sin(a*9+u*2.1+(l>0?0:Math.PI))*.35},t}function Xm(){const i=new te,t=new O(new Se(2.6,16,12,0,Math.PI*2,0,Math.PI/2),dt(14035002,{flatShading:!1}));t.scale.set(1.25,1,1),t.position.y=.6,i.add(t);const e=dt(1907224,{flatShading:!1}),n=new O(new Se(1,10,8),e);n.position.set(3.4,1,0),i.add(n);const s=new O(new Gt(.1,.1,5),e);s.position.set(0,3.2,0),s.rotation.y=Math.PI/2,s.visible=!1,i.add(s);for(const[r,o]of[[-1.4,1.2],[-1.4,-1.2],[.4,1.5],[.4,-1.5],[1.7,.8],[1.7,-.8]]){const a=new O(new Se(.46,8,6),e);a.position.set(r,Math.sqrt(Math.max(.1,6.76-(r/1.25)**2-o*o))+.35,o),i.add(a)}for(const r of[-1,1])for(let o=0;o<3;o++){const a=new O(new Ut(.1,.08,2.2,4),e);a.position.set(-1.2+o*1.5,.5,r*2.4),a.rotation.x=r*.9,i.add(a)}return i}const vi=3,Xi=.42*vi,Wc=1.8*vi,qm=62,$m=22;function Ym({scene:i,colliders:t,depart:e,limites:n,limiterCamera:s}){let r={scene:i,colliders:t,limites:n,limiterCamera:s};const o=km({echelle:vi});o.position.copy(e),i.add(o);const a=e.clone(),c=new U;let l=!0,u=0,h=0,d=2.6;const f={yaw:0,pitch:.42,distance:17};function g(T){return a.x+Xi>T.min[0]&&a.x-Xi<T.max[0]&&a.y+Wc>T.min[1]&&a.y<T.max[1]&&a.z+Xi>T.min[2]&&a.z-Xi<T.max[2]}function _(T,D){if(D){a[T]+=D;for(const E of r.colliders){if(!g(E))continue;const S=T==="x"?0:T==="y"?1:2;T==="y"?(D<0?(a.y=E.max[1],l=!0):a.y=E.min[1]-Wc,c.y=0):D>0?a[T]=E.min[S]-Xi-.001:a[T]=E.max[S]+Xi+.001}}}function m(T,D,E,S=0){o.parent&&o.parent.remove(o),r={scene:T.scene,colliders:T.colliders,limites:T.limites,limiterCamera:T.limiterCamera},r.scene.add(o),a.set(D,0,E),u=S,c.set(0,0,0),d=0,l=!0,o.position.copy(a),o.rotation.set(0,S,0)}function p(T,D,E){const S=D.actif("sprinter"),N=(D.actif("avancer")?1:0)-(D.actif("reculer")?1:0),Z=(D.actif("droite")?1:0)-(D.actif("gauche")?1:0),H=S?24:14,tt=-Math.sin(f.yaw),W=-Math.cos(f.yaw),j=tt*N+Math.cos(f.yaw)*Z,ht=W*N-Math.sin(f.yaw)*Z,et=Math.hypot(j,ht),gt=et>.01;if(gt){c.x=j/et*H,c.z=ht/et*H;let kt=Math.atan2(j/et,ht/et)-u;for(;kt>Math.PI;)kt-=Math.PI*2;for(;kt<-Math.PI;)kt+=Math.PI*2;u+=kt*Math.min(1,T*12)}else c.x=0,c.z=0;l&&D.vient("sauter")&&(c.y=$m,l=!1),c.y-=qm*T,l=!1,_("x",c.x*T),_("z",c.z*T),_("y",c.y*T),a.y<=0&&(a.y=0,c.y=0,l=!0),a.x=Math.min(r.limites.xMax,Math.max(r.limites.xMin,a.x)),a.z=Math.min(r.limites.zMax,Math.max(r.limites.zMin,a.z)),o.position.copy(a),o.rotation.y=u;const vt=o.userData;gt&&l&&(h+=T*(S?15:10));const Et=gt&&l?Math.sin(h)*(S?.9:.6):0;return vt.jambes[0].rotation.x=Et,vt.jambes[1].rotation.x=-Et,vt.bras[0].rotation.x=-Et*.9,vt.bras[1].rotation.x=Et*.9,d>0&&!gt?(d-=T,vt.bras[1].rotation.z=-2.5+Math.sin(E*11)*.35,vt.bras[1].rotation.x=0,vt.tete.rotation.z=Math.sin(E*3)*.08):(d=Math.min(d,0),vt.bras[1].rotation.z=0,vt.tete.rotation.z=0),l||(vt.bras[0].rotation.x=-2.4,vt.bras[1].rotation.x=-2.4,vt.jambes[0].rotation.x=.4,vt.jambes[1].rotation.x=-.3),o.position.y+=gt&&l?Math.abs(Math.sin(h))*.06*vi:0,{bouge:gt,auSol:l,sprint:S}}function w(T,D){const E=f.distance,S=Math.cos(f.pitch);let N=a.x+Math.sin(f.yaw)*S*E,Z=a.y+1.5*vi+Math.sin(f.pitch)*E,H=a.z+Math.cos(f.yaw)*S*E;[N,Z,H]=r.limiterCamera(N,Z,H);const tt=a.x,W=a.y+1.4*vi,j=a.z,ht=(gt,vt,Et)=>r.colliders.some(Pt=>gt>Pt.min[0]-.6&&gt<Pt.max[0]+.6&&vt>Pt.min[1]-.6&&vt<Pt.max[1]+.6&&Et>Pt.min[2]-.6&&Et<Pt.max[2]+.6);for(let gt=1;gt<=10;gt++){const vt=gt/10;if(ht(tt+(N-tt)*vt,W+(Z-W)*vt,j+(H-j)*vt)){const Et=Math.max(.05,(gt-1)/10);N=tt+(N-tt)*Et,Z=W+(Z-W)*Et,H=j+(H-j)*Et;break}}const et=Math.min(1,D*9);T.position.x+=(N-T.position.x)*et,T.position.y+=(Z-T.position.y)*et,T.position.z+=(H-T.position.z)*et,T.lookAt(a.x,a.y+1.4*vi,a.z)}function y(T,D,E=1){f.yaw-=T*.006*E,f.pitch=Math.min(1.25,Math.max(.08,f.pitch+D*.005*E))}function M(T){f.distance=Math.min(24,Math.max(7,f.distance+T*.015))}function F(T,D,E){a.set(T,0,D),u=E,c.set(0,0,0),d=0,o.position.copy(a),o.rotation.y=E}function P(T){return T!==void 0&&(f.yaw=T),{yaw:f.yaw,pitch:f.pitch,distance:f.distance}}return{hero:o,pos:a,maj:p,camera:w,tourner:y,zoom:M,etat:P,placer:F,changerMonde:m}}const Pr=[{id:"avancer",nom:"Avancer"},{id:"gauche",nom:"Aller à gauche"},{id:"reculer",nom:"Reculer"},{id:"droite",nom:"Aller à droite"},{id:"sauter",nom:"Sauter"},{id:"sprinter",nom:"Sprinter"},{id:"agir",nom:"Agir (bouton, porte)"},{id:"corde",nom:"Prendre la corde",bientot:!0}],Zm={avancer:["KeyW","ArrowUp"],gauche:["KeyA","ArrowLeft"],reculer:["KeyS","ArrowDown"],droite:["KeyD","ArrowRight"],sauter:["Space",null],sprinter:["ShiftLeft",null],agir:["KeyE",null],corde:[null,null]};function Nr(){return Object.fromEntries(Object.entries(Zm).map(([i,t])=>[i,[...t]]))}function Vl(i){const t=Nr();if(i&&typeof i=="object")for(const e of Pr){const n=i[e.id];Array.isArray(n)&&(t[e.id]=[0,1].map(s=>typeof n[s]=="string"&&n[s].length<24?n[s]:null))}return t}let Tr=null;typeof navigator<"u"&&navigator.keyboard&&navigator.keyboard.getLayoutMap&&navigator.keyboard.getLayoutMap().then(i=>{Tr=i}).catch(()=>{});const Xc={Space:"Espace",ShiftLeft:"Maj",ShiftRight:"Maj",ControlLeft:"Ctrl",ControlRight:"Ctrl",AltLeft:"Alt",AltRight:"Alt",Enter:"Entrée",Tab:"Tab",Backspace:"Retour",ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→"};function Gl(i){return i?Xc[i]?Xc[i]:Tr&&Tr.get(i)?Tr.get(i).toUpperCase():i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):i.startsWith("Numpad")?"Pavé "+i.slice(6):i:""}function Jm(i){const t=new Set,e=new Set,n=new Set,s=new Set;let r=!1;const o=u=>{t.delete(u.code)},a=u=>{r||(t.has(u.code)||e.add(u.code),t.add(u.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(u.code)&&u.preventDefault())},c=()=>{t.clear(),e.clear()};return window.addEventListener("keydown",a),window.addEventListener("keyup",o),window.addEventListener("blur",c),{actif:u=>n.has(u)||(i()[u]||[]).some(h=>h&&t.has(h)),vient(u){const h=i()[u]||[];return s.has(u)||h.some(d=>d&&e.has(d))},finImage(){e.clear(),s.clear()},forcer(u,h){r||(h?n.add(u):n.delete(u))},declencher(u){r||s.add(u)},bloquer(u){r=u,u&&(c(),n.clear(),s.clear())},detruire(){window.removeEventListener("keydown",a),window.removeEventListener("keyup",o),window.removeEventListener("blur",c)}}}function jm(i,t,e,n){const s=Vl(i);for(const r of Pr)if(!r.bientot)for(let o=0;o<2;o++)s[r.id][o]===n&&(s[r.id][o]=null);return s[t][e]=n,s}const Km={xMin:-118,xMax:118,zMin:-118,zMax:118},Qm=new ls,tg=new Qe,eg=new U,ng=new U;function Ie(i,t,e,n=0,s=0,r=0,o=1,a=o,c=o){return new me().compose(eg.set(i,t,e),Qm.setFromEuler(tg.set(n,s,r,"YXZ")),ng.set(o,a,c))}function vo(i,t,e,n){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new wa(s);return r.colorSpace=rn,n&&(r.wrapS=r.wrapT=Ns,r.repeat.set(n[0],n[1]),r.anisotropy=4),r}function ig({leger:i=!1}={}){const t=new Al,e=i?.45:1,n=b=>Math.max(1,Math.round(b*e)),s=ji(4242),r=(b,C)=>b+s()*(C-b),o=[],a=10933934;t.background=new Qt(a),t.fog=new ya(a,.0036),t.add(new Fl(15137500,4876858,1.05));const c=new Bl(16773312,1.5);c.position.set(90,220,60),t.add(c);const l=new U(0,0,0),u=(b,C,L=2,z=12)=>Math.hypot(b-l.x,C-l.z)>z&&!o.some(k=>b>k.min[0]-L&&b<k.max[0]+L&&C>k.min[2]-L&&C<k.max[2]+L),h=(b=40,C=112,L=36,z=2)=>{for(let k=0;k<b;k++){const Y=r(-C,C),J=r(-C,C);if(u(Y,J,z,L))return[Y,J]}return null},d=vo(1024,1024,(b,C)=>{const L=ji(7);b.fillStyle="#5a7f38",b.fillRect(0,0,C,C);const z=["#4a7030","#6a9444","#7a6a3e","#5f4a2e","#86a64a","#3f6a2c"];for(let k=0;k<700;k++)b.fillStyle=z[k%6],b.globalAlpha=.25+L()*.3,b.beginPath(),b.ellipse(L()*C,L()*C,8+L()*46,5+L()*30,L()*3,0,6.3),b.fill();b.globalAlpha=1;for(let k=0;k<4500;k++){b.strokeStyle=["#a08a4a","#c0a85a","#3b5a26","#8a7038"][k%4],b.lineWidth=1.2,b.globalAlpha=.5;const Y=L()*C,J=L()*C,ut=L()*6.3;b.beginPath(),b.moveTo(Y,J),b.lineTo(Y+Math.cos(ut)*(5+L()*12),J+Math.sin(ut)*(5+L()*12)),b.stroke()}b.globalAlpha=1;for(let k=0;k<260;k++)b.fillStyle=["#8e8c86","#a5a29a","#75736d"][k%3],b.beginPath(),b.ellipse(L()*C,L()*C,2+L()*5,1.5+L()*3.5,L()*3,0,6.3),b.fill();for(let k=0;k<80;k++)b.fillStyle=["#ffffff","#ffe27a","#ff9fc4"][k%3],b.beginPath(),b.arc(L()*C,L()*C,2.2,0,6.3),b.fill()},[14,14]),f=new O(new De(1400,1400),new Zt({map:d,roughness:1}));f.rotation.x=-Math.PI/2,t.add(f);const g=vo(256,512,(b,C,L)=>{const z=ji(11);b.fillStyle="#5d4531",b.fillRect(0,0,C,L);for(let k=0;k<160;k++){b.strokeStyle=z()>.5?"rgba(30,18,10,.5)":"rgba(150,115,80,.35)",b.lineWidth=2+z()*5;const Y=z()*C;b.beginPath(),b.moveTo(Y,0),b.bezierCurveTo(Y+(z()-.5)*30,L*.3,Y+(z()-.5)*30,L*.6,Y+(z()-.5)*20,L),b.stroke()}for(let k=0;k<70;k++)b.fillStyle=`rgba(${70+z()*40},${120+z()*50},50,${.25+z()*.3})`,b.beginPath(),b.ellipse(z()*C,L*(.45+z()*.55),6+z()*26,10+z()*40,0,0,6.3),b.fill()},[3,6]),_=new Zt({map:g,roughness:1});function m(b,C,L,z=!0){const k=new te,Y=new O(new Ut(L*.82,L,700,18,1),_);Y.position.y=350,k.add(Y);const J=new O(new Ut(L,L*1.35,22,18,1),_);J.position.y=11,k.add(J);for(let ut=0;ut<6;ut++){const Mt=ut/6*6.28+s(),xt=new O(new ss(L*.26,L*1.5,4,8),_);xt.position.set(Math.cos(Mt)*L*1.35,3,Math.sin(Mt)*L*1.35),xt.rotation.set(0,-Mt,Math.PI/2-.2,"YXZ"),k.add(xt)}if(k.position.set(b,0,C),t.add(k),z){const ut=L*1.25;o.push({min:[b-ut,0,C-ut],max:[b+ut,700,C+ut]})}}for(let b=0;b<30;b++){const C=b/30*6.28+r(-.2,.2),L=r(64,110),z=Math.cos(C)*L,k=Math.sin(C)*L;Math.hypot(z-l.x,k-l.z)<58||m(z,k,r(16,30))}for(let b=0;b<n(40);b++){const C=s()*6.28,L=r(128,330);m(Math.cos(C)*L,Math.sin(C)*L,r(22,40),!1)}const p=new Zt({color:9145734,roughness:1,flatShading:!0}),w=new Zt({color:6199868,roughness:1,flatShading:!0});function y(b,C,L,z,k){const Y=new sn(1,2),J=Y.attributes.position;for(let xt=0;xt<J.count;xt++){const Ft=J.getX(xt),At=J.getY(xt),_t=J.getZ(xt),G=.86+.2*Math.sin(Ft*4.1+At*3.3+_t*5.7)*Math.cos(At*2.9-_t*3.7+Ft*1.3);J.setXYZ(xt,Ft*G,At*G,_t*G)}Y.computeVertexNormals();const ut=new O(Y,p);ut.scale.set(L,z,k),ut.position.set(b,z*.45,C),ut.rotation.y=s()*6,t.add(ut);const Mt=new O(new Se(1,10,6,0,6.28,0,1),w);Mt.scale.set(L*.9,z*.5,k*.9),Mt.position.set(b,z*.75,C),Mt.rotation.y=s()*6,t.add(Mt),o.push({min:[b-L*.7,0,C-k*.7],max:[b+L*.7,z*1.2,C+k*.7]})}for(let b=0;b<26;b++){const C=h(60,112,48,12);C&&y(C[0],C[1],r(7,22),r(5,16),r(7,22))}for(let b=0;b<14;b++){const C=h(60,112,28,8);C&&y(C[0],C[1],r(3,5.5),r(2,3.2),r(3,5.5))}const M=new Zt({map:g,roughness:1});for(let b=0;b<7;b++){const C=h(80,112,80,14);if(!C)continue;const L=r(50,90),z=r(6,11),k=b%2,Y=new O(new Ut(z,z*1.1,L,14),M);Y.rotation.z=k?0:Math.PI/2,Y.rotation.x=k?Math.PI/2:0,Y.position.set(C[0],z*.9,C[1]),t.add(Y);const J=new O(new wn(z*.98,14),new Zt({color:13213804,roughness:1})),ut=L/2;J.position.set(C[0]+(k?0:ut+.05),z*.9,C[1]+(k?ut+.05:0)),J.rotation.y=k?0:Math.PI/2,t.add(J);const Mt=k?z:ut,xt=k?ut:z;o.push({min:[C[0]-Mt,0,C[1]-xt],max:[C[0]+Mt,z*1.8,C[1]+xt]})}const F=[];function P(b,C,L,z=.05){const k=b.index?b.toNonIndexed():b.clone();k.applyMatrix4(L),k.deleteAttribute("uv");const Y=k.attributes.position.count,J=new Float32Array(Y*3),ut=new Qt(C);ut.offsetHSL((s()-.5)*z,(s()-.5)*z,(s()-.5)*z);for(let Mt=0;Mt<Y;Mt++)J.set([ut.r,ut.g,ut.b],Mt*3);k.setAttribute("color",new Ve(J,3)),F.push(k)}const T=new Se(1,10,7),D=new Ut(1,1,1,8),E=new sn(1,1),S=new wi(Bm,6);S.rotateX(-Math.PI/2);const N=[14038318,16747069,11037242,16748479,15253578];for(let b=0;b<n(26);b++){const C=h();if(!C)continue;const L=1+Math.floor(s()*4),z=N[b%5];for(let k=0;k<L;k++){const Y=C[0]+r(-9,9),J=C[1]+r(-9,9),ut=r(10,30)*(k?.7:1),Mt=r(6,16)*(k?.75:1),xt=r(-.15,.15);P(D,16051416,Ie(Y,ut/2,J,xt,0,xt,2.2+Mt*.12,ut,2.2+Mt*.12),.03);const Ft=new Se(1,18,10,0,6.2832,0,Math.PI*.55);if(P(Ft,z,Ie(Y,ut-.5,J,xt,0,xt,Mt,Mt*.62,Mt),.04),P(new wn(1,16).rotateX(Math.PI/2),15259824,Ie(Y,ut-.6,J,xt,0,xt,Mt*.98,1,Mt*.98),.02),z===14038318||z===16747069)for(let At=0;At<9;At++){const _t=s()*6.28,G=r(.15,.95);P(T,16777215,Ie(Y+Math.cos(_t)*Mt*Math.sin(G)*.98,ut-.5+Mt*.62*Math.cos(G)-.2,J+Math.sin(_t)*Mt*Math.sin(G)*.98,0,0,0,Mt*.13,Mt*.05,Mt*.13),.01)}}}const Z=[16747051,16740261,16777215,11566335,16765517,16734815];for(let b=0;b<n(70);b++){const C=h();if(!C)continue;const L=C[0],z=C[1],k=r(35,85),Y=r(-.18,.18),J=s()*6.28,ut=Z[b%6];P(D,4168261,Ie(L+Math.sin(Y)*k*.5*Math.cos(J),k/2,z+Math.sin(Y)*k*.5*Math.sin(J),0,0,0,.9,k,.9),.05);const Mt=L+Math.sin(Y)*k*Math.cos(J),xt=z+Math.sin(Y)*k*Math.sin(J),Ft=r(5,9);for(let At=0;At<9;At++){const _t=At/9*6.28;P(T,ut,Ie(Mt+Math.cos(_t)*Ft*.95,k+.4,xt+Math.sin(_t)*Ft*.95,0,-_t,.15,Ft*.62,Ft*.17,Ft*.32),.04)}P(T,16761370,Ie(Mt,k+1.2,xt,0,0,0,Ft*.34),.03);for(let At=0;At<2;At++)P(T,4565068,Ie(L+(At?5:-5),k*(.25+At*.2),z,0,0,At?-.7:.7,8,.8,2.6),.05)}for(let b=0;b<n(380);b++){const C=h(30,118,8);if(!C)continue;const L=r(.8,3.6),z=.45+s()*.25;P(E,new Qt(z,z*.98,z*.92),Ie(C[0],L*.3,C[1],0,s()*6,0,L*1.2,L*.6,L),.02)}for(let b=0;b<n(120);b++){const C=h(30,118,8);if(!C)continue;const L=r(18,70),z=s()*6.28,k=r(.5,1.1);P(D,7031343,Ie(C[0],k,C[1],Math.PI/2,z,0,k,L,k),.04),b%3===0&&P(D,7031343,Ie(C[0]+Math.cos(z)*L*.2,k*1.3,C[1]-Math.sin(z)*L*.2,Math.PI/2,z+.6,0,k*.7,L*.4,k*.7),.04)}const H=[14254635,12735789,15250506,9416252,7049018,11027242];for(let b=0;b<n(220);b++){const C=h(30,118,8);if(!C)continue;const L=r(12,30);P(S,H[b%6],Ie(C[0],.2+s()*.9,C[1],r(-.12,.12),s()*6.28,r(-.12,.12),L,L,L),.06)}for(let b=0;b<30;b++){const C=h(30,118,8);if(!C)continue;const L=r(2.5,4),z=s()*6;P(T,11894842,Ie(C[0],L*.9,C[1],0,z,1.2,L*1.1,L*.8,L*.8),.03),P(T,7031338,Ie(C[0]+Math.cos(z)*L*.55,L*1.05,C[1],0,z,1.2,L*.6,L*.7,L*.7),.03)}for(let b=0;b<n(60);b++){const C=h(30,118,24);if(!C)continue;const L=r(3.5,6);for(let z=0;z<3;z++){const k=z/3*6.28+.4;P(T,5222474,Ie(C[0]+Math.cos(k)*L,6+L*.2,C[1]+Math.sin(k)*L,0,0,0,L*1.2,L*.25,L*1.2),.05)}P(D,4168261,Ie(C[0],3,C[1],0,0,0,.5,6,.5),.03)}for(let b=0;b<n(140);b++){const C=h(30,118,8);if(!C)continue;const L=r(3,10);for(let z=0;z<4;z++)P(T,7319098,Ie(C[0]+r(-L,L),L*.12,C[1]+r(-L,L),0,0,0,L*r(.5,1),L*.3,L*r(.5,1)),.08)}for(let b=0;b<18;b++){const C=h();if(!C)continue;const L=r(30,60);P(D,5417040,Ie(C[0],L/2,C[1],0,0,0,.7,L,.7),.03);for(let z=0;z<34;z++){const k=tt();P(D,16053486,Ie(C[0]+k.x*6,L+k.y*6,C[1]+k.z*6,k.z*1.4,0,-k.x*1.4,.18,6,.18),.01)}P(T,15261888,Ie(C[0],L,C[1],0,0,0,2.2),.01)}function tt(){return new U(s()-.5,s()-.5,s()-.5).normalize()}function W(b,C){const L=new rs,z=14;L.moveTo(0,0);for(let J=1;J<=z;J++){const ut=J/z,Mt=C*Math.sin(Math.PI*Math.pow(ut,.7));L.lineTo(ut*b-1,Mt*(J%2?1:.55))}for(let J=z;J>=1;J--){const ut=J/z,Mt=C*Math.sin(Math.PI*Math.pow(ut,.7));L.lineTo(ut*b-1,-Mt*(J%2?1:.55))}L.closePath();const k=new wi(L),Y=k.attributes.position;for(let J=0;J<Y.count;J++)Y.setZ(J,-Math.pow(Y.getX(J)/b,2)*b*.38);return k}const j=[W(60,7),W(80,9),W(48,6)];for(let b=0;b<n(46);b++){const C=h(40,112,55);if(!C)continue;const L=7+Math.floor(s()*4),z=r(.7,1.1),k=[3116858,4038726,5026389][b%3];for(let Y=0;Y<L;Y++){const J=Y/L*6.28+s()*.4;P(j[Y%3],k,new me().multiplyMatrices(Ie(C[0],.5,C[1],0,-J,0,z),new me().makeRotationZ(r(.55,1.15))),.06)}}const ht=new O(zl(F,!1),new Zt({vertexColors:!0,roughness:.85,side:Te}));t.add(ht);const et={value:0};function gt(){const C=[],L=[],z=[];for(let Y=0;Y<=6;Y++){const J=Y/6,ut=.5*(1-Math.pow(J,1.6))+.02,Mt=J*J*.35;C.push(-ut,J,Mt,ut,J,Mt);const xt=new Qt().lerpColors(new Qt(2910760),new Qt(10935390),Math.pow(J,.8));if(L.push(xt.r,xt.g,xt.b,xt.r,xt.g,xt.b),Y<6){const Ft=Y*2;z.push(Ft,Ft+1,Ft+2,Ft+1,Ft+3,Ft+2)}}const k=new Ce;return k.setAttribute("position",new fe(C,3)),k.setAttribute("color",new fe(L,3)),k.setIndex(z),k.computeVertexNormals(),k}const vt=new Zt({vertexColors:!0,roughness:.8,side:Te});vt.onBeforeCompile=b=>{b.uniforms.uT=et,b.vertexShader=`uniform float uT;
${b.vertexShader}`.replace("#include <begin_vertex>",`vec3 transformed = vec3(position);
      float ph = instanceMatrix[3].x * 0.06 + instanceMatrix[3].z * 0.045;
      float amp = position.y * position.y;
      transformed.x += sin(uT * 1.6 + ph) * 2.4 * amp;
      transformed.z += cos(uT * 1.2 + ph * 1.3) * 1.2 * amp;`)};const Et=n(9e3),Pt=new Ls(gt(),vt,Et),kt=new Oe;let ot=0;const it=n(200);for(let b=0;b<it&&ot<Et;b++){const C=h(40,112,52);if(!C)continue;const L=18+Math.floor(s()*30),z=r(5,14);for(let k=0;k<L&&ot<Et;k++){const Y=s()*6.28,J=Math.sqrt(s())*z;kt.position.set(C[0]+Math.cos(Y)*J,0,C[1]+Math.sin(Y)*J),kt.rotation.set(r(-.3,.3),s()*6.28,r(-.3,.3));const ut=r(14,46);kt.scale.set(r(1.4,2.6),ut,1),kt.updateMatrix(),Pt.setMatrixAt(ot++,kt.matrix)}}Pt.count=ot,Pt.frustumCulled=!1,t.add(Pt);const ft=new Ls(new Se(1,10,8),new Zt({color:14677759,transparent:!0,opacity:.5,roughness:.05,metalness:.4}),400);for(let b=0;b<400;b++){const C=h(30,118,8);if(!C){kt.scale.setScalar(0),kt.updateMatrix(),ft.setMatrixAt(b,kt.matrix);continue}const L=r(.8,2.2);kt.position.set(C[0],L*.7,C[1]),kt.rotation.set(0,0,0),kt.scale.set(L,L*.8,L),kt.updateMatrix(),ft.setMatrixAt(b,kt.matrix)}t.add(ft);const mt=[];for(let b=0;b<3;b++){const C=h(60,100,45);if(!C)continue;const L=r(18,34),z=new O(new wn(L,36),new Zt({color:6269144,roughness:.05,metalness:.6,transparent:!0,opacity:.85}));z.rotation.x=-Math.PI/2,z.position.set(C[0],.25,C[1]),t.add(z);const k=new O(new Vs(L,L+3.5,36),new Zt({color:6969912,roughness:1}));k.rotation.x=-Math.PI/2,k.position.set(C[0],.2,C[1]),t.add(k);const Y=new O(new Vs(.9,1,36),new Ee({color:16777215,transparent:!0,opacity:.5,side:Te}));Y.rotation.x=-Math.PI/2,Y.position.set(C[0],.32,C[1]),t.add(Y),mt.push({onde:Y,r:L,ph:s()*5})}const bt=vo(256,256,(b,C)=>{b.strokeStyle="rgba(255,255,255,.85)",b.lineWidth=1.4;for(let L=0;L<14;L++){const z=L/14*6.28;b.beginPath(),b.moveTo(128,128),b.lineTo(128+Math.cos(z)*124,128+Math.sin(z)*124),b.stroke()}for(let L=14;L<124;L+=12){b.beginPath();for(let z=0;z<=14;z++){const k=z/14*6.28,Y=L+z%2*2,J=128+Math.cos(k)*Y,ut=128+Math.sin(k)*Y;z?b.lineTo(J,ut):b.moveTo(J,ut)}b.stroke()}for(let L=0;L<40;L++)b.fillStyle="rgba(220,245,255,.9)",b.beginPath(),b.arc(128+(Math.random()-.5)*220,128+(Math.random()-.5)*220,1.8,0,6.3),b.fill()});for(let b=0;b<4;b++){const C=h();if(!C)continue;const L=new O(new De(46,46),new Ee({map:bt,transparent:!0,side:Te,depthWrite:!1}));L.position.set(C[0],30,C[1]),L.rotation.y=s()*3,t.add(L)}const It=[],zt=3.6;for(let b=0;b<4;b++){const C=h(60,100,62);if(!C)continue;const L=r(14,28),z=b%2?1:-1;for(let k=0;k<6;k++){const Y=kc({grain:k%2===0});Y.scale.setScalar(zt),t.add(Y),It.push({f:Y,cx:C[0],cz:C[1],rayon:L,ph:k*.42,sens:z,vit:.07})}}for(let b=0;b<2;b++){const C=kc({grain:b===0});C.scale.setScalar(zt),t.add(C),It.push({f:C,cx:14,cz:-28,rayon:14,ph:b*1.1,sens:-1,vit:.09})}const re=[];for(let b=0;b<3;b++){const C=h(60,100);if(!C)continue;const L=Xm();L.scale.setScalar(1.6),L.position.set(C[0],0,C[1]),t.add(L),re.push({c:L,cx:C[0],cz:C[1],r:r(14,26),ph:s()*6})}const Xt=[],ee=new rs;ee.moveTo(0,0),ee.bezierCurveTo(8,10,22,12,20,2),ee.bezierCurveTo(22,-10,8,-12,0,0);for(let b=0;b<5;b++){const C=new te,L=[16747051,16740261,7321599,16765517,11566335][b],z=[];for(const Y of[-1,1]){const J=new te,ut=new O(new wi(ee),new Zt({color:L,side:Te,roughness:.6}));ut.rotation.x=-Math.PI/2,ut.scale.x=Y,ut.rotation.z=Y>0?0:Math.PI,J.add(ut),C.add(J),z.push(J),J.userData.c=Y}const k=new O(new ss(1.4,9,4,8),new Zt({color:3811866}));k.rotation.x=Math.PI/2,C.add(k),C.scale.setScalar(1.1),t.add(C),Xt.push({g:C,ailes:z,cx:r(-70,70),cz:r(-70,70),ph:s()*6,haut:r(40,90)})}const q=Ca(),ge=n(700),qt=new Float32Array(ge*3),ne=[];for(let b=0;b<ge;b++)ne.push([r(-120,120),r(4,160),r(-120,120),s()*6.28]);const Ht=new Cr(new Ce().setAttribute("position",new Ve(qt,3)),new Os({map:q,color:16774856,size:2.2,transparent:!0,opacity:.8,blending:mn,depthWrite:!1}));Ht.frustumCulled=!1,t.add(Ht);const K=60,st=new Float32Array(K*3),A=[];for(let b=0;b<K;b++)A.push([r(-110,110),r(8,70),r(-110,110),s()*6.28]);const v=new Cr(new Ce().setAttribute("position",new Ve(st,3)),new Os({map:q,color:14221178,size:7,transparent:!0,opacity:.9,blending:mn,depthWrite:!1}));v.frustumCulled=!1,t.add(v);const V=[];for(let b=0;b<9;b++){const C=new O(new De(r(14,30),520),new Ee({color:16774336,transparent:!0,opacity:.07,blending:mn,depthWrite:!1,side:Te,fog:!1}));C.position.set(r(-90,90),240,r(-90,90)),C.rotation.set(0,s()*3,-.35),t.add(C),V.push({r:C,ph:s()*6})}function rt(b){et.value=b;for(const C of It){const L=(b*C.vit+C.ph)*C.sens,z=C.cx+Math.cos(L)*C.rayon,k=C.cz+Math.sin(L*1.3)*C.rayon*.7,Y=-Math.sin(L)*C.rayon*C.sens,J=Math.cos(L*1.3)*1.3*C.rayon*.7*C.sens;C.f.position.set(z,0,k),C.f.rotation.y=Math.atan2(-J,Y),C.f.userData.pattes(b+C.ph*7)}for(const C of re){const L=b*.06+C.ph;C.c.position.set(C.cx+Math.cos(L)*C.r,0,C.cz+Math.sin(L)*C.r),C.c.rotation.y=-L-Math.PI/2+Math.PI}for(const C of Xt){const L=b*.25+C.ph,z=C.cx+Math.sin(L)*50,k=C.cz+Math.cos(L*.8)*40,Y=C.haut+Math.sin(L*2.3)*12;C.g.position.set(z,Y,k),C.g.rotation.y=Math.atan2(Math.cos(L)*50,-Math.sin(L*.8)*32)-Math.PI/2;const J=Math.sin(b*14+C.ph)*.9;C.ailes[0].rotation.z=J,C.ailes[1].rotation.z=-J}for(let C=0;C<ge;C++){const L=ne[C];qt[C*3]=L[0]+Math.sin(b*.2+L[3])*8,qt[C*3+1]=L[1]+Math.sin(b*.3+L[3]*2)*4,qt[C*3+2]=L[2]+Math.cos(b*.25+L[3])*8}Ht.geometry.attributes.position.needsUpdate=!0;for(let C=0;C<K;C++){const L=A[C];st[C*3]=L[0]+Math.sin(b*.4+L[3])*14,st[C*3+1]=L[1]+Math.sin(b*.7+L[3]*3)*6,st[C*3+2]=L[2]+Math.cos(b*.35+L[3])*14}v.geometry.attributes.position.needsUpdate=!0,v.material.opacity=.65+Math.sin(b*3)*.25;for(const C of V)C.r.material.opacity=.05+Math.sin(b*.5+C.ph)*.025;for(const C of mt){const L=(b*.35+C.ph)%1;C.onde.scale.setScalar(2+L*C.r*.9),C.onde.material.opacity=.5*(1-L)}}return{nom:"La forêt, vue d’une fourmi (et même plus petit)",scene:t,colliders:o,limites:Km,maj:rt,depart:l,limiterCamera:(b,C,L)=>[Math.min(150,Math.max(-150,b)),Math.min(150,Math.max(1.2,C)),Math.min(150,Math.max(-150,L))]}}function kl(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}function sg({racine:i,clavier:t}){if(!kl())return{actif:!1};i.classList.add("tactile"),i.insertAdjacentHTML("beforeend",`
    <div class="tactile-ui" id="tactile-ui">
      <div class="joystick" id="joy"><div class="pouce" id="pouce"></div></div>
      <div class="boutons-tactiles">
        <button class="bt" id="t-sprint">Sprint</button>
        <button class="bt grand" id="t-saut">Sauter</button>
      </div>
    </div>
    <div class="tourne" id="tourne"><p>Tourne ton téléphone à l’horizontale pour jouer</p></div>`);const e=i.querySelector("#joy"),n=i.querySelector("#pouce"),s=56;let r=null,o={x:0,y:0};const a=(g,_)=>{t.forcer("droite",g>.3),t.forcer("gauche",g<-.3),t.forcer("reculer",_>.3),t.forcer("avancer",_<-.3)},c=g=>{let _=g.clientX-o.x,m=g.clientY-o.y;const p=Math.hypot(_,m);p>s&&(_=_/p*s,m=m/p*s),n.style.transform=`translate(${_}px, ${m}px)`,a(_/s,m/s)};e.addEventListener("pointerdown",g=>{g.preventDefault(),r=g.pointerId;const _=e.getBoundingClientRect();o={x:_.left+_.width/2,y:_.top+_.height/2};try{e.setPointerCapture(r)}catch{}c(g)}),e.addEventListener("pointermove",g=>{g.pointerId===r&&c(g)});const l=g=>{g.pointerId===r&&(r=null,n.style.transform="",a(0,0))};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l);const u=i.querySelector("#t-saut");u.addEventListener("pointerdown",g=>{g.preventDefault(),t.declencher("sauter"),t.forcer("sauter",!0)});const h=()=>t.forcer("sauter",!1);u.addEventListener("pointerup",h),u.addEventListener("pointercancel",h),u.addEventListener("pointerleave",h);const d=i.querySelector("#t-sprint");d.addEventListener("pointerdown",g=>{g.preventDefault(),t.forcer("sprinter",!0),d.classList.add("appuye")});const f=()=>{t.forcer("sprinter",!1),d.classList.remove("appuye")};return d.addEventListener("pointerup",f),d.addEventListener("pointercancel",f),d.addEventListener("pointerleave",f),{actif:!0,montrer(g){i.querySelector("#tactile-ui").style.display=g?"":"none"}}}const Mo=Symbol("annule"),Fe=i=>i<.5?2*i*i:1-(-2*i+2)**2/2,Wt=(i,t,e)=>new U(i,t,e);function rg({scene:i,garage:t,joueur:e,moteur:n,son:s,voix:r,racine:o,clavier:a}){const{maisonApi:c,machineApi:l}=t,u=Ca();let h=!1,d=!1,f=0,g=null,_=null,m=null,p=i,w=0;const y=new Set,M=new Set,F=[],P={pos:Wt(0,0,0),look:Wt(0,0,0),posC:Wt(0,0,0),lookC:Wt(0,0,0)};o.insertAdjacentHTML("beforeend",`
    <div class="cine" id="cine" hidden>
      <div class="bande haut"></div><div class="bande bas"></div>
      <div class="sous-titre" id="st" hidden><b id="st-nom"></b><span id="st-texte"></span></div>
      <button class="bouton secondaire petit" id="cine-passer">Passer l'animation</button>
      <div class="flash" id="cine-flash"></div>
      <div class="noir" id="cine-noir"><p id="cine-carte"></p></div>
    </div>`);const T=K=>o.querySelector(K),D=T("#cine"),E=T("#st"),S=T("#cine-flash"),N=T("#cine-noir"),Z=()=>{if(d)throw Mo};function H(K,st){return new Promise(A=>{if(d){A();return}y.add({t:0,dur:Math.max(.001,K),fn:st,res:A})}).then(Z)}const tt=K=>H(K),W=(K,st,A=!1)=>{P.posC.copy(K),P.lookC.copy(st),A&&(P.pos.copy(K),P.look.copy(st))};function j(K){if(h){f+=K;for(const st of[...y]){st.t+=K;const A=Math.min(1,st.t/st.dur);st.fn&&st.fn(A),A>=1&&(y.delete(st),st.res())}for(const st of[...M])st(K,f)===!1&&M.delete(st);m&&p===m.scene&&m.maj(f),P.pos.lerp(P.posC,1-Math.exp(-K*2.6)),P.look.lerp(P.lookC,1-Math.exp(-K*3.4)),n.camera.position.copy(P.pos),w>0&&(n.camera.position.x+=(Math.random()-.5)*w*1.2,n.camera.position.y+=(Math.random()-.5)*w*1.2,w=Math.max(0,w-K*1.4)),n.camera.lookAt(P.look)}}const ht=K=>{K.userData.jambes.forEach(st=>{st.rotation.x=0})};function et(K,st,A,v=7,V=!0){const rt=K.position,lt=st-rt.x,b=A-rt.z,C=Math.hypot(lt,b),L=Math.atan2(lt,b),z=rt.x,k=rt.z,Y=K.rotation.y;let J=L-Y;for(;J>Math.PI;)J-=Math.PI*2;for(;J<-Math.PI;)J+=Math.PI*2;const ut=Math.max(.05,C/v),Mt=K.userData;return H(ut,xt=>{rt.x=z+lt*xt,rt.z=k+b*xt,K.rotation.y=Y+J*Math.min(1,xt*ut/.35);const Ft=f*(v>7?14:10),At=Math.sin(Ft);Mt.jambes[0].rotation.x=At*.7,Mt.jambes[1].rotation.x=-At*.7,V&&(Mt.bras[0].rotation.x=-At*.55,Mt.bras[1].rotation.x=At*.55),rt.y=Math.abs(At)*.09}).then(()=>{ht(K),rt.y=0})}function gt(K,st,A,v=.5){const V=K.rotation.y;let rt=Math.atan2(st-K.position.x,A-K.position.z)-V;for(;rt>Math.PI;)rt-=Math.PI*2;for(;rt<-Math.PI;)rt+=Math.PI*2;return H(v,lt=>{K.rotation.y=V+rt*Fe(lt)})}function vt(K,st,A,v=.5){const V=K[st];return H(v,rt=>{K[st]=V+(A-V)*Fe(rt)})}const Et=K=>K.localToWorld(Wt(0,K.userData.hauteurTete,.2));function Pt(K,st){const A=K.userData,v=(V,rt)=>{if(!st.v)return A.bouche.visible=!1,A.sourire.visible=!0,!1;const lt=Math.sin(rt*16)>.1;return A.bouche.visible=lt,A.sourire.visible=!lt,!0};M.add(v)}async function kt(K,st,A,v){T("#st-nom").textContent=K,T("#st-texte").textContent=A,E.hidden=!1;const V={v:!0};Pt(st,V),await r.dire(A,v),V.v=!1,Z(),E.hidden=!0,await tt(.25)}const ot=K=>kt("Papa",_,K,{pitch:.7,rate:.95}),it=(K,st={})=>kt("Théo",e.hero,K,{pitch:1.95,rate:1.1,genre:"femme",...st});function ft(K,st=30,{couleur:A=16773792,vitesse:v=4,taille:V=.4,duree:rt=1.2,gravite:lt=2}={}){const b=new Float32Array(st*3),C=[];for(let J=0;J<st;J++){b.set([K.x,K.y,K.z],J*3);const ut=Wt(Math.random()-.5,Math.random()-.2,Math.random()-.5).normalize().multiplyScalar(v*(.3+Math.random()));C.push(ut)}const L=new Ce;L.setAttribute("position",new Ve(b,3));const z=new Cr(L,new Os({map:u,color:A,size:V,transparent:!0,opacity:1,blending:mn,depthWrite:!1}));z.frustumCulled=!1;const k=p;k.add(z),F.push(z);let Y=0;M.add(J=>{Y+=J;for(let ut=0;ut<st;ut++)C[ut].y-=lt*J,b[ut*3]+=C[ut].x*J,b[ut*3+1]+=C[ut].y*J,b[ut*3+2]+=C[ut].z*J;return L.attributes.position.needsUpdate=!0,z.material.opacity=Math.max(0,1-Y/rt),Y>=rt?(k.remove(z),L.dispose(),z.material.dispose(),!1):!0})}const mt=(K,st)=>H(st,A=>{S.style.opacity=String(K*Math.sin(Math.PI*Math.min(1,A)))}),bt=(K,st)=>{const A=Number(N.style.opacity||0);return H(st,v=>{N.style.opacity=String(A+(K-A)*v)})};function It(K,st){const A=new Set;return K.traverse(v=>{v.isMesh&&!v.material.transparent&&A.add(v.material)}),A.forEach(v=>{v.transparent=!0,v.opacity=0,v.needsUpdate=!0}),H(st,v=>{A.forEach(V=>{V.opacity=v})}).then(()=>{A.forEach(v=>{v.transparent=!1,v.opacity=1,v.needsUpdate=!0})})}function zt(){const K=new te,st=new Zt({color:14690350,roughness:.45}),A=new O(new Se(.15,16,12),st);A.scale.set(1,.92,1),K.add(A);const v=new O(new Ut(.008,.01,.07,5),new Zt({color:5913894}));v.position.y=.15,K.add(v);const V=new O(new Se(.05,8,6),new Zt({color:4045656}));return V.scale.set(1.6,.3,.8),V.position.set(.05,.17,0),V.rotation.z=.4,K.add(V),K}function re(){const K=new te;K.add(new O(new Gt(.09,.04,.17),new Zt({color:2830648,roughness:.5})));const st=new O(new Ut(.018,.018,.02,8),new Zt({color:16726843,emissive:16726843,emissiveIntensity:.8}));return st.position.set(0,.03,-.03),K.add(st),K}async function Xt(){const K=e.hero,st=K.userData,A=_.userData,v=l.position;K.rotation.order="YXZ",A.bras[0].rotation.x=-.5,A.bras[1].rotation.x=-.25;const V=zt();V.position.set(0,-.08,.1),A.mains[0].add(V),F.push(V);const rt=re();rt.position.set(0,-.06,.06),A.mains[1].add(rt),F.push(rt),W(Wt(-6.5,8,9.5),Wt(-15,3.8,1.2)),await et(K,-10.5,1.2,9),await gt(K,-19,1.2,.5),_.position.set(-19.3,0,1.2),_.rotation.y=Math.PI/2,s.fx("porte"),await Promise.all([H(1.8,_t=>c.ouvrir(Fe(_t))),tt(.5).then(()=>(_.visible=!0,It(_,.9)))]),await et(_,-14.2,1.2,5,!1),W(Wt(-7.5,6.2,6.2),Wt(-12.6,4.4,1.2)),await ot("Regarde, fiston !"),await it("Papa ? Qu’est-ce que c’est ?"),await ot("J’ai créé une nouvelle machine, pour rétrécir les objets !"),await ot("Viens, je vais te la montrer avec cette pomme."),W(Wt(4.5,7.5,4),Wt(-5,3.5,-4)),H(1.4,_t=>c.ouvrir(1-Fe(_t))),await Promise.all([et(_,-5.4,-5.6,8,!1),tt(.7).then(()=>et(K,-2.4,-4.6,8))]),await Promise.all([gt(_,v.x,v.z),gt(K,v.x,v.z)]),W(Wt(5.2,7,.5),Wt(-2.4,3.6,-8)),await ot("Regarde bien !"),A.bras[1].rotation.x=-1.4,s.fx("clic"),s.fx("machine"),ft(Wt(v.x,1.2,v.z),20,{couleur:8382463,vitesse:2,duree:2}),await H(2.2,_t=>l.ouvrirVerre(Fe(_t))),await H(.5,_t=>{A.bras[0].rotation.x=-.5-1.1*Fe(_t)}),await H(.25,_t=>{A.bras[0].rotation.x=-1.6-.7*_t}),i.attach(V);const lt=V.position.clone(),b=Wt(v.x,l.platY+.4,v.z);H(.55,_t=>{A.bras[0].rotation.x=-2.3+1.8*Fe(_t)}),await H(.95,_t=>{V.position.lerpVectors(lt,b,_t),V.position.y+=Math.sin(Math.PI*_t)*3.2,V.rotation.z=_t*5}),V.position.copy(b),await ot("Et maintenant, le rayon !"),s.fx("clic"),s.fx("rayon"),await H(.6,_t=>l.rayon(Fe(_t)));const C=V.scale.x;ft(b,40,{couleur:12580607,vitesse:3.5,duree:1.4}),await H(1.5,_t=>{V.scale.setScalar(C*(1-.7*Fe(_t))),V.position.y=l.platY+.4-.25*Fe(_t)}),s.fx("ding"),await H(.5,_t=>l.rayon(1-Fe(_t)*.55)),await ot("Ça marche ! Elle est toute petite !"),W(Wt(1.6,6.2,-.8),Wt(-2.4,4.4,-6.5));const L=st.tete;ft(Et(K),14,{couleur:16773312,vitesse:.8,taille:.3,duree:2.6,gravite:-.2}),s.fx("reniflement"),st.sourire.visible=!1,st.bouche.visible=!0,await Promise.all([vt(L.rotation,"x",-.5,1.2),vt(K.rotation,"x",-.12,1.2),it("Ah… ah…",{rate:.6})]),gt(_,K.position.x,K.position.z,.5),await ot("Fiston ? Ça va ?"),s.fx("reniflement"),await it("Ah… ah… ah…",{rate:.5}),st.sourire.visible=!1,st.bouche.visible=!0,s.fx("atchoum"),r.dire("Atchoum !",{pitch:2,rate:1.3,genre:"femme"}),ft(Et(K),50,{couleur:16777215,vitesse:6,taille:.45,duree:1,gravite:4}),W(Wt(2.8,5.2,-4.2),Wt(-1.6,3,-8.4));const z=K.position.clone();st.bras[0].rotation.x=-1.3,st.bras[1].rotation.x=-1.3,await H(.45,_t=>{L.rotation.x=-.5+1.5*Fe(_t),K.rotation.x=-.12+.55*Fe(_t),K.position.set(z.x+(-1.6-z.x)*Fe(_t),0,z.z+(-8.4-z.z)*Fe(_t))}),s.fx("rayon");const k=K.position.clone(),Y=Wt(v.x,l.platY,v.z-.3);await Promise.all([H(.85,_t=>{K.position.lerpVectors(k,Y,_t),K.position.y=Y.y*_t+Math.sin(Math.PI*_t)*3.4,K.rotation.x=.43*(1-_t),st.jambes[0].rotation.x=-.5,st.jambes[1].rotation.x=.5}),H(.85,_t=>{l.rayon(.45+_t)}),vt(L.rotation,"x",0,.85)]),K.rotation.set(0,0,0),ht(K),st.bras.forEach(_t=>{_t.rotation.x=0}),W(Wt(3.4,3.8,-6.2),Wt(v.x,2.4,v.z)),s.fx("retrecir"),ft(Wt(v.x,3,v.z),70,{couleur:12580607,vitesse:5,taille:.5,duree:1.6}),mt(.95,1.1),await H(1.7,_t=>{K.scale.setScalar(3-2.7*Fe(_t)),l.rayon(1.4+Math.sin(_t*20)*.2)}),ft(Wt(v.x,1.6,v.z),40,{couleur:16773792,vitesse:3,duree:1.2}),st.sourire.visible=!0,st.bouche.visible=!1,await H(.7,_t=>l.rayon(1.4*(1-Fe(_t)))),W(Wt(-.2,1.7,-8.6),Wt(-3.4,5.2,-6.9)),gt(_,v.x,v.z,.3),A.bras[0].rotation.x=-1,A.bras[1].rotation.x=-1,et(_,-3.3,-6.7,4,!1),await ot("Oh non ! Théo ! Mon fils ! Il est tout petit !"),W(Wt(v.x+1.4,1.9,v.z+3.2),Wt(v.x,1.2,v.z));let J=!0;M.add((_t,G)=>J?(st.bras[1].rotation.z=-2.5+Math.sin(G*11)*.35,!0):!1),await it("Papa ? Qu’est-ce qui m’arrive ?",{pitch:2.1}),J=!1,st.bras[1].rotation.z=0,m||(m=ig({leger:kl()}),n.renderer.compile(m.scene,n.camera)),W(Wt(5.6,7.2,-2.2),Wt(v.x,4.2,v.z)),s.fx("alarme");let ut=!0;M.add((_t,G)=>ut?(l.alarme(Math.sin(G*14)>0?1:.3),l.secouer(.25+.35*Math.min(1,(f-Mt)/3)),!0):!1);const Mt=f;l.rayon(.9),A.bras[0].rotation.x=-1.9,A.bras[1].rotation.x=-1.9,await ot("La machine surchauffe ! Elle va exploser !"),s.fx("alarme"),await it("Papa ! Aide-moi !",{pitch:2.1}),await tt(.6),ut=!1;const xt=Wt(v.x,l.platY+.6,v.z);ee(xt),l.exploser(),l.alarme(0),W(Wt(7,6.5,1.5),Wt(v.x,4,v.z),!0),H(.9,_t=>{_.position.x=-3.3-2.2*Fe(_t),_.position.z=-6.7+2.4*Fe(_t),_.rotation.x=-.3*Math.sin(Math.PI*_t)});const Ft=new Rl([Wt(v.x,1.2,v.z),Wt(-.8,6,-8),Wt(-.3,7,0),Wt(0,6.6,10),Wt(0,6.2,18),Wt(.6,13,30),Wt(1.6,20,48),Wt(2.2,12,64),Wt(2.6,3.2,76)]),At=Wt(0,0,0);r.dire("Aaaaaah !",{pitch:2,rate:1.2,genre:"femme"}),s.fx("chute"),await tt(.35),await H(3.6,_t=>{Ft.getPoint(Math.min(1,_t),At),K.position.copy(At),K.rotation.z=_t*14,K.rotation.x=_t*5,W(Wt(At.x-2+(_t>.6?6*(_t-.6):0),At.y+2.5,At.z-11),Wt(At.x,At.y,At.z))}),K.rotation.set(0,0,0),s.fx("atterrissage"),ft(Wt(K.position.x,.6,K.position.z),40,{couleur:13220234,vitesse:5,taille:1.2,duree:1.2,gravite:5}),await tt(.5),mt(1,.9),await tt(.35),q(),W(Wt(8,26,30),Wt(0,10,0),!0),K.position.set(0,70,0),K.rotation.set(0,0,0),s.fx("chute"),await H(1.1,_t=>{K.position.y=70*(1-_t*_t),K.rotation.x=_t*3}),K.rotation.x=0,s.fx("atterrissage"),ft(Wt(0,1,0),50,{couleur:13220234,vitesse:7,taille:2,duree:1.4,gravite:6}),H(.25,_t=>{K.scale.set(3*(1+.25*Math.sin(Math.PI*_t)),3*(1-.25*Math.sin(Math.PI*_t)),3*(1+.25*Math.sin(Math.PI*_t)))}),W(Wt(8,11,24),Wt(0,6,0)),await tt(.8),vt(st.tete.rotation,"y",-.9,1).then(()=>vt(st.tete.rotation,"y",.9,1.6)),await it("Aïe… Où suis-je ? Tout est tellement grand !",{pitch:2.1}),await tt(1.6),await bt(1,1.4),T("#cine-carte").textContent="À suivre…",T("#cine-carte").style.opacity="1",await tt(3)}function ee(K){s.fx("explosion"),w=1.2,mt(1,.8);const st=new O(new Se(1,18,14),new Ee({color:16756800,transparent:!0,opacity:1,blending:mn,depthWrite:!1}));st.position.copy(K),i.add(st),F.push(st);const A=new O(new Vs(.9,1.1,40),new Ee({color:16769696,transparent:!0,opacity:.8,side:Te,depthWrite:!1}));A.rotation.x=-Math.PI/2,A.position.set(K.x,.15,K.z),i.add(A),F.push(A);const v=new Ps(16752704,900,60,1.4);v.position.copy(K),i.add(v),F.push(v);let V=0;M.add(lt=>{V+=lt;const b=Math.min(1,V/.6);return st.scale.setScalar(1+9*Fe(b)),st.material.opacity=Math.max(0,1-V/.8),A.scale.setScalar(1+V*28),A.material.opacity=Math.max(0,.8-V*1.2),v.intensity=Math.max(0,900*(1-V/1.2)),V>1.3?(i.remove(st,A,v),!1):!0}),ft(K,90,{couleur:16752704,vitesse:22,taille:1.4,duree:1.6,gravite:12}),ft(K,50,{couleur:16773824,vitesse:30,taille:.9,duree:1,gravite:6});const rt=[5531516,7243424,10478574,14035002,2830648];for(let lt=0;lt<34;lt++){const b=lt%3===0?new Ut(.2,.2,.8+Math.random()*1.4,6):new Gt(.4+Math.random()*1.2,.3+Math.random()*.8,.4+Math.random()*1.2),C=new O(b,new Zt({color:rt[lt%5],roughness:.6,transparent:lt%5===2,opacity:lt%5===2?.5:1}));C.position.set(K.x,K.y+1+Math.random()*4,K.z),i.add(C),F.push(C);const L=Math.random()*6.28,z=Wt(Math.cos(L),0,Math.sin(L)).multiplyScalar(5+Math.random()*14);z.y=8+Math.random()*20;const k=Wt(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(14);let Y=0;M.add(J=>(Y+=J,z.y-=40*J,C.position.addScaledVector(z,J),C.position.y<.3&&(C.position.y=.3,z.y*=-.35,z.x*=.6,z.z*=.6,k.multiplyScalar(.6)),C.rotation.x+=k.x*J,C.rotation.y+=k.y*J,C.rotation.z+=k.z*J,Y>6?(i.remove(C),!1):!0))}for(let lt=0;lt<18;lt++){const b=new O(new Se(1,10,8),new Ee({color:3815994,transparent:!0,opacity:.7,depthWrite:!1}));b.position.set(K.x+(Math.random()-.5)*3,K.y+Math.random()*2,K.z+(Math.random()-.5)*3),i.add(b),F.push(b);const C=(Math.random()-.5)*3,L=(Math.random()-.5)*3;let z=Math.random()*-.4;M.add(k=>(z+=k,z<0?!0:(b.position.x+=C*k,b.position.z+=L*k,b.position.y+=(3+z)*k,b.scale.setScalar(.8+z*1.5),b.material.opacity=Math.max(0,.55-z*.14),z>4?(i.remove(b),!1):!0)))}}function q(){p=m.scene,n.voir(m.scene),m.maj(f),e.changerMonde(m,m.depart.x,m.depart.z,0),e.hero.scale.setScalar(3),e.hero.rotation.order="YXZ"}function ge(){r.arreter();for(const A of F)A.parent&&A.parent.remove(A);F.length=0,y.clear(),M.clear(),_&&(i.remove(_),_.visible=!1);const K=e.hero,st=K.userData;K.scale.setScalar(3),K.rotation.order="XYZ",K.rotation.set(0,0,0),st.tete.rotation.set(0,0,0),st.sourire.visible=!0,st.bouche.visible=!1,st.bras.forEach(A=>A.rotation.set(0,0,0)),ht(K),c.ouvrir(0),l.ouvrirVerre(0),l.rayon(0),l.reparer(),p=i,n.voir(i),e.changerMonde(t,-12,1.2,-Math.PI/2),K.scale.setScalar(3),w=0,s.baisser(!1),S.style.opacity="0",N.style.opacity="0",T("#cine-carte").style.opacity="0",E.hidden=!0,D.hidden=!0,o.classList.remove("en-cine"),a.bloquer(!1),h=!1}const qt=K=>{K.reason===Mo&&K.preventDefault()};async function ne(){if(h)return;r.eveiller(),window.addEventListener("unhandledrejection",qt),h=!0,d=!1,f=0,s.baisser(!0),a.bloquer(!0),o.classList.add("en-cine"),D.hidden=!1,N.style.opacity="0",S.style.opacity="0",T("#cine-carte").style.opacity="0",_||(_=Wm({echelle:3})),i.add(_),_.visible=!1,P.pos.copy(n.camera.position),P.look.set(e.pos.x,e.pos.y+4,e.pos.z),P.posC.copy(P.pos),P.lookC.copy(P.look);const K=new Promise(st=>{g=st});try{await Promise.race([Xt().catch(st=>{if(st!==Mo)throw st}),K])}catch(st){console.error(st)}ge(),setTimeout(()=>window.removeEventListener("unhandledrejection",qt),500)}function Ht(){if(h){d=!0;for(const K of y)K.res();r.arreter(),g&&g()}}return T("#cine-passer").addEventListener("click",Ht),{lancer:ne,annuler:Ht,maj:j,actif:()=>h}}function Wl(i){const t=typeof window<"u"&&"speechSynthesis"in window&&typeof SpeechSynthesisUtterance<"u";if(t)try{speechSynthesis.getVoices(),speechSynthesis.addEventListener("voiceschanged",()=>speechSynthesis.getVoices())}catch{}const e=r=>{if(!t)return null;const o=speechSynthesis.getVoices().filter(u=>/^fr/i.test(u.lang)),a=o.some(u=>u.localService)?o.filter(u=>u.localService):o;if(!a.length)return null;const c=/thomas|daniel|male|homme|paul|henri/i,l=/amélie|amelie|audrey|aurélie|marie|julie|female|femme|virginie/i;return a.find(u=>(r==="homme"?c:l).test(u.name))||a[0]};let n=!1;function s(){if(!(!t||n))try{const r=new SpeechSynthesisUtterance(" ");r.volume=0,r.lang="fr-FR",speechSynthesis.speak(r),n=!0}catch{}}return{eveiller:s,disponible:()=>!!e("homme"),nom(r="homme"){const o=e(r);return o?{nom:o.name,langue:o.lang,locale:o.localService}:null},compte(){if(!t)return null;const r=speechSynthesis.getVoices().filter(o=>/^fr/i.test(o.lang));return{total:speechSynthesis.getVoices().length,fr:r.length,frLocales:r.filter(o=>o.localService).length}},pris:()=>t,arreter(){if(t)try{speechSynthesis.cancel()}catch{}},dire(r,{pitch:o=1,rate:a=1,genre:c="homme"}={}){return new Promise(l=>{const u=1100+r.length*52,h=performance.now();let d=!1;const f=()=>{d||(d=!0,setTimeout(l,Math.max(0,u-(performance.now()-h))))},g=e(c),_=i();if(!t||_<=0){f();return}try{const m=new SpeechSynthesisUtterance(r);g&&(m.voice=g),m.lang=g?g.lang:"fr-FR",m.pitch=Math.min(2,o),m.rate=a,m.volume=_,m.onend=f,m.onerror=f,speechSynthesis.speak(m),setTimeout(f,12e3)}catch{f()}})}}}function og({reglages:i,surMenu:t,son:e}){const n=document.createElement("main");n.className="ecran jeu";const s=document.createElement("canvas");s.className="monde3d",n.appendChild(s),n.insertAdjacentHTML("beforeend",`
    <header class="barre-jeu"><span class="lieu">Le grenier du professeur Mousse</span><button class="bouton secondaire petit" id="btn-menu">Menu</button></header>
    <div class="indice" id="indice" hidden><button class="bouton gros moyen" id="btn-anim">Démarrer l'animation</button><span class="touche-agir" id="touche-agir"></span></div>
    <aside class="aide-touches" id="aide-touches"></aside>`);const r=n.querySelector("#indice"),o=Om(s),a=Gm(),c=Ym({scene:a.scene,colliders:a.colliders,depart:a.depart,limites:a.limites,limiterCamera:a.limiterCamera}),l=Jm(()=>i().touches),u=Wl(()=>i().voix),h=sg({racine:n,clavier:l}),d=rg({scene:a.scene,garage:a,joueur:c,moteur:o,son:e,voix:u,racine:n,clavier:l}),f=()=>.25*16**i().sensibilite;let g=null;s.addEventListener("pointerdown",w=>{g||(g={x:w.clientX,y:w.clientY,id:w.pointerId},s.setPointerCapture(w.pointerId),s.classList.add("glisse"))}),s.addEventListener("pointermove",w=>{!g||w.pointerId!==g.id||(c.tourner(w.clientX-g.x,w.clientY-g.y,f()),g={x:w.clientX,y:w.clientY,id:w.pointerId})});const _=w=>{g&&w&&w.pointerId!==void 0&&w.pointerId!==g.id||(g=null,s.classList.remove("glisse"))};s.addEventListener("pointerup",_),s.addEventListener("pointercancel",_),s.addEventListener("wheel",w=>{w.preventDefault(),c.zoom(w.deltaY)},{passive:!1});const m=w=>{w.code==="Escape"&&!document.getElementById("dlg").open&&(w.preventDefault(),d.actif()?d.annuler():t())};window.addEventListener("keydown",m);function p(){const w=i().touches,y=M=>Gl((w[M]||[]).find(Boolean))||"-";n.querySelector("#touche-agir").textContent=y("agir")!=="-"?`ou touche ${y("agir")}`:"",n.querySelector("#aide-touches").innerHTML=`<b>${y("avancer")} ${y("gauche")} ${y("reculer")} ${y("droite")}</b> bouger<span class="sep"></span><b>${y("sauter")}</b> sauter<span class="sep"></span><b>${y("sprinter")}</b> sprinter<span class="sep"></span><b>Souris</b> tourner la caméra`}return p(),n.querySelector("#btn-menu").addEventListener("click",t),o.camera.position.set(1,9,14),n.querySelector("#btn-anim").addEventListener("click",()=>d.lancer()),o.definir(a.scene,(w,y,M)=>{if(a.maj(w),d.actif()){d.maj(M||y),l.finImage();return}h.actif&&h.montrer(!0),c.maj(y,l,w),c.camera(o.camera,y);const F=a.porteMaison,P=Math.hypot(c.pos.x-F.x,c.pos.z-(F.z+2))<8;r.hidden=!P,P&&l.vient("agir")&&d.lancer(),l.finImage()}),{element:n,majAide:p,bloquer:w=>l.bloquer(w),animation:d,detruire(){d.annuler(),u.arreter(),l.detruire(),window.removeEventListener("keydown",m)},moteur:o,joueur:c,garage:a}}const qc=i=>440*2**((i-69)/12),$c=[62,64,66,69,71,74,76];function ag(){let i=null,t,e,n,s,r=null,o=0,a=0;const c={musique:.6,ambiance:.6,effets:.8};let l=!1;function u(){if(i)return;i=new(window.AudioContext||window.webkitAudioContext);const y=i.createDynamicsCompressor();y.connect(i.destination),t=i.createGain(),e=i.createGain(),n=i.createGain();for(const ht of[t,e,n])ht.connect(y);s=i.createBuffer(1,i.sampleRate*3,i.sampleRate);const M=s.getChannelData(0);for(let ht=0;ht<M.length;ht++)M[ht]=Math.random()*2-1;const F=g(),P=i.createBiquadFilter();P.type="lowpass",P.frequency.value=520;const T=i.createGain();T.gain.value=.35;const D=i.createOscillator();D.frequency.value=.09;const E=i.createGain();E.gain.value=.22,D.connect(E),E.connect(T.gain),D.start(),F.connect(P),P.connect(T),T.connect(e);const S=g(),N=i.createBiquadFilter();N.type="bandpass",N.frequency.value=2200,N.Q.value=.7;const Z=i.createGain();Z.gain.value=.16;const H=i.createOscillator();H.frequency.value=.37;const tt=i.createGain();tt.gain.value=.05,H.connect(tt),tt.connect(Z.gain),H.start(),S.connect(N),N.connect(Z),Z.connect(e);const W=i.createDelay(1);W.delayTime.value=.42;const j=i.createGain();j.gain.value=.38,W.connect(j),j.connect(W),W.connect(t),t.echo=W,_()}let h=null;function d(){const M=new ArrayBuffer(6444),F=new DataView(M),P=(T,D)=>{for(let E=0;E<D.length;E++)F.setUint8(T+E,D.charCodeAt(E))};return P(0,"RIFF"),F.setUint32(4,36+3200*2,!0),P(8,"WAVE"),P(12,"fmt "),F.setUint32(16,16,!0),F.setUint16(20,1,!0),F.setUint16(22,1,!0),F.setUint32(24,8e3,!0),F.setUint32(28,16e3,!0),F.setUint16(32,2,!0),F.setUint16(34,16,!0),P(36,"data"),F.setUint32(40,3200*2,!0),URL.createObjectURL(new Blob([M],{type:"audio/wav"}))}function f(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}if(!h){try{h=new Audio(d()),h.loop=!0,h.play().catch(()=>{})}catch{}const y=()=>{i&&i.state!=="running"&&i.resume().catch(()=>{}),h&&h.paused&&h.play().catch(()=>{})};document.addEventListener("pointerdown",y),document.addEventListener("touchend",y),document.addEventListener("visibilitychange",()=>{document.hidden||y()})}}function g(){const y=i.createBufferSource();return y.buffer=s,y.loop=!0,y.start(0,Math.random()*2),y}function _(){if(!i)return;const y=i.currentTime;t.gain.setTargetAtTime(c.musique*.55*(l?.25:1),y,.15),e.gain.setTargetAtTime(c.ambiance*.5*(l?.25:1),y,.15),n.gain.setTargetAtTime(c.effets*1,y,.05)}function m(y,M,F,P,T,D,E=!1){const S=i.createOscillator(),N=i.createGain();S.type=y,S.frequency.setValueAtTime(M,F),N.gain.setValueAtTime(1e-4,F),N.gain.exponentialRampToValueAtTime(T,F+.015),N.gain.exponentialRampToValueAtTime(1e-4,F+P),S.connect(N),N.connect(D),E&&t.echo&&N.connect(t.echo),S.start(F),S.stop(F+P+.05)}function p(y){const M=2300+Math.random()*1500,F=i.createStereoPanner();F.pan.value=Math.random()*1.6-.8,F.connect(e);const P=2+Math.floor(Math.random()*4);for(let T=0;T<P;T++){const D=i.createOscillator(),E=i.createGain();D.type="sine",D.frequency.setValueAtTime(M*(1+T*.07),y+T*.11),D.frequency.exponentialRampToValueAtTime(M*(1.2+T*.07),y+T*.11+.09),E.gain.setValueAtTime(1e-4,y+T*.11),E.gain.exponentialRampToValueAtTime(.1,y+T*.11+.01),E.gain.exponentialRampToValueAtTime(1e-4,y+T*.11+.1),D.connect(E),E.connect(F),D.start(y+T*.11),D.stop(y+T*.11+.12)}}function w(){const y=i.currentTime;for(;o<y+.4;){const M=$c[Math.floor(Math.random()*$c.length)]-(Math.random()<.25?12:0);m("triangle",qc(M),o,1.8,.16,t,!0),m("sine",qc(M+12),o,1.2,.05,t,!0),o+=.55+Math.random()*1.1}y>=a&&(p(y+.05),a=y+3+Math.random()*7)}return{appliquer(y){Object.assign(c,y),_()},baisser(y){l=y,_()},async demarrer(){try{u(),i.state==="suspended"&&await i.resume(),f(),r||(o=i.currentTime+.3,a=i.currentTime+2,r=setInterval(w,80))}catch{}},clic(){i&&i.state==="running"&&(m("sine",660,i.currentTime+.01,.18,.2,n),m("sine",990,i.currentTime+.07,.22,.15,n))},magie(){i&&i.state==="running"&&[523,659,784,1047].forEach((y,M)=>m("triangle",y,i.currentTime+.02+M*.09,.7,.14,n))},fx(y){if(!i)return;i.state!=="running"&&i.resume().catch(()=>{});const M=i.currentTime+.02,F=(D,E,S,N,Z,H,tt)=>m(D,E,S,N,Math.min(1,Z*1.7),H,tt),P=(D,E,S,N,Z=1)=>{const H=Math.min(1,N*1.7),tt=i.createBufferSource();tt.buffer=s;const W=i.createBiquadFilter();W.type="bandpass",W.Q.value=Z,W.frequency.setValueAtTime(D,M),W.frequency.exponentialRampToValueAtTime(E,M+S);const j=i.createGain();j.gain.setValueAtTime(1e-4,M),j.gain.exponentialRampToValueAtTime(H,M+.03),j.gain.exponentialRampToValueAtTime(1e-4,M+S),tt.connect(W),W.connect(j),j.connect(n),tt.start(M,Math.random()*2),tt.stop(M+S+.05)},T=(D,E,S,N,Z)=>{const H=Math.min(1,Z*1.7),tt=i.createOscillator(),W=i.createGain();tt.type=D,tt.frequency.setValueAtTime(E,M),tt.frequency.exponentialRampToValueAtTime(S,M+N),W.gain.setValueAtTime(1e-4,M),W.gain.exponentialRampToValueAtTime(H,M+.05),W.gain.exponentialRampToValueAtTime(1e-4,M+N),tt.connect(W),W.connect(n),tt.start(M),tt.stop(M+N+.05)};if(y==="porte"&&(T("sawtooth",170,95,1.4,.16),T("square",340,190,1.4,.07),F("square",90,M+1.45,.12,.18,n)),y==="clic"&&(F("square",1400,M,.05,.12,n),F("square",900,M+.06,.07,.1,n)),y==="machine"&&(T("sawtooth",70,220,2.2,.14),T("triangle",140,440,2.2,.1),P(300,1200,2.2,.15,.6)),y==="rayon"&&(T("sawtooth",220,880,.6,.12),P(2e3,5e3,1.2,.12,2),T("sine",880,880,1.6,.06)),y==="ding"&&(F("triangle",1568,M,.9,.2,n,!0),F("triangle",2093,M+.1,.9,.14,n,!0)),y==="reniflement"&&P(900,2600,.35,.22,3),y==="atchoum"&&(P(4500,600,.38,.9,.8),T("sine",160,50,.3,.5)),y==="retrecir"&&(T("sine",1600,140,1.5,.22),T("triangle",2400,300,1.5,.12),P(6e3,800,1.5,.2,1.5)),y==="alarme")for(let D=0;D<6;D++)F("square",D%2?660:880,M+D*.28,.2,.12,n);y==="explosion"&&(P(900,60,1.6,1,.5),P(200,40,2.2,.9,.4),T("sine",110,28,1.4,.9),T("sawtooth",220,40,.8,.25)),y==="chute"&&(T("sine",1800,300,1.4,.18),P(3e3,800,1.4,.1,1.2)),y==="atterrissage"&&(T("sine",150,45,.25,.6),P(1500,300,.25,.3,.8)),y==="pas"&&F("sine",90,M,.1,.15,n)},etat(){return{actif:!!i&&i.state==="running",musique:!!r,contexte:i?i.state:"aucun"}}}}const Xl="bonsai-reglages",mi={musique:.6,ambiance:.6,effets:.8,voix:.9,feuilles:!0,sensibilite:.5,qualite:"normale",touches:Nr()},Ts=(i,t,e,n)=>Number.isFinite(i)?Math.min(e,Math.max(t,i)):n;function ql(i){const t=i&&typeof i=="object"?i:{};return{musique:Ts(t.musique,0,1,mi.musique),ambiance:Ts(t.ambiance,0,1,mi.ambiance),effets:Ts(t.effets,0,1,mi.effets),voix:Ts(t.voix,0,1,mi.voix),feuilles:t.feuilles!==!1,sensibilite:Ts(t.sensibilite,0,1,mi.sensibilite),qualite:["basse","normale"].includes(t.qualite)?t.qualite:mi.qualite,touches:Vl(t.touches)}}function cg(){try{return ql(JSON.parse(localStorage.getItem(Xl)||"null"))}catch{return{...mi,touches:Nr()}}}function lg(i){try{localStorage.setItem(Xl,JSON.stringify(i))}catch{}}const Ai=cg(),ug=document.getElementById("app"),le=document.getElementById("dlg"),Je=ag();Je.appliquer(Ai);let Ue=null;const gi=Wl(()=>Math.max(.5,Ai.voix));for(const i of["pointerdown","keydown"])document.addEventListener(i,()=>Je.demarrer(),{once:!0});const ei=[];window.addEventListener("error",i=>{ei.push(`${i.message} (${(i.filename||"").split("/").pop()}:${i.lineno})`),ei.length>5&&ei.shift()});window.addEventListener("unhandledrejection",i=>{ei.push(`promesse : ${i.reason&&i.reason.message?i.reason.message:i.reason}`),ei.length>5&&ei.shift()});function Pa(i){ug.replaceChildren(i.element)}const As=()=>{lg(Ai),Je.appliquer(Ai)};function $l(i="son"){const t=Ai;let e=null;le.className="large",le.innerHTML=`<h2>Paramètres</h2>
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
    <div class="pied"><button class="bouton gros moyen" id="p-fermer">Fermer</button></div>`,le.open||le.showModal(),Ue&&Ue.bloquer(!0);const n=c=>{le.querySelectorAll(".onglets button").forEach(l=>l.classList.toggle("actif",l.dataset.o===c)),le.querySelector("#o-son").hidden=c!=="son",le.querySelector("#o-commandes").hidden=c!=="commandes",c==="commandes"&&r()};function s(c){const l=t.touches[c.id],u=[0,1].map(h=>{const d=e&&e.action===c.id&&e.i===h,f=d?"Appuie sur une touche":l[h]?Gl(l[h]):"";return`<button class="case ${d?"ecoute":""}" data-a="${c.id}" data-i="${h}" ${c.bientot?"disabled":""}>${f}</button>`}).join("");return`<div class="rangee ${c.bientot?"bientot":""}"><span class="nom-action">${c.nom}${c.bientot?"<em>bientôt</em>":""}</span>${u}<button class="croix" data-a="${c.id}" aria-label="Effacer ${c.nom}" ${c.bientot?"disabled":""}>×</button></div>`}function r(){const c=le.querySelector("#o-commandes");c.innerHTML=`<h3 class="section">SOURIS</h3>
      <label class="ligne"><span>Sensibilité de la souris <b id="p-sens-val">${Math.round(t.sensibilite*100)} %</b></span><input type="range" id="p-sens" min="0" max="100" step="1" value="${Math.round(t.sensibilite*100)}"></label>
      <h3 class="section">DÉPLACEMENT</h3>${Pr.filter(l=>!l.bientot&&l.id!=="agir").map(s).join("")}
      <h3 class="section">ACTIONS</h3>${Pr.filter(l=>l.bientot||l.id==="agir").map(s).join("")}
      <p class="note">Clique sur une case, puis appuie sur la touche que tu veux. Échap pour annuler. La croix rouge efface la case.</p>
      <button class="bouton secondaire" id="p-defaut">Rétablir les touches de départ</button>`,c.querySelector("#p-sens").addEventListener("input",l=>{t.sensibilite=Number(l.target.value)/100,c.querySelector("#p-sens-val").textContent=`${l.target.value} %`,As()}),c.querySelectorAll(".case").forEach(l=>l.addEventListener("click",()=>{e={action:l.dataset.a,i:Number(l.dataset.i)},r()})),c.querySelectorAll(".croix").forEach(l=>l.addEventListener("click",()=>{t.touches[l.dataset.a]=[null,null],As(),Ue&&Ue.majAide(),e=null,r()})),c.querySelector("#p-defaut").addEventListener("click",()=>{t.touches=Nr(),As(),Ue&&Ue.majAide(),e=null,r()})}const o=c=>{if(e){if(c.preventDefault(),c.stopPropagation(),c.code==="Escape"){e=null,r();return}t.touches=jm(t.touches,e.action,e.i,c.code),As(),Ue&&Ue.majAide(),Je.clic(),e=null,r()}};window.addEventListener("keydown",o,!0),le.addEventListener("cancel",c=>{e&&c.preventDefault()}),le.addEventListener("close",()=>{window.removeEventListener("keydown",o,!0),Ue&&Ue.bloquer(!1)},{once:!0}),le.querySelectorAll(".onglets button").forEach(c=>c.addEventListener("click",()=>{e=null,n(c.dataset.o)}));const a=()=>{Object.assign(t,ql({...t,musique:Number(le.querySelector("#p-musique").value),ambiance:Number(le.querySelector("#p-ambiance").value),effets:Number(le.querySelector("#p-effets").value),voix:Number(le.querySelector("#p-voix").value)})),As()};le.querySelectorAll("#o-son input").forEach(c=>c.addEventListener("input",a)),le.querySelector("#p-plein").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()}),le.querySelector("#p-test").addEventListener("click",()=>hg(le.querySelector("#p-diag"))),le.querySelector("#p-fermer").addEventListener("click",()=>{Je.clic(),le.close()}),n(i)}async function hg(i){i.hidden=!1,i.textContent="Test en cours…",gi.eveiller(),await Je.demarrer(),Je.fx("ding");const t=Je.etat(),e=(()=>{try{const c=document.createElement("canvas").getContext("webgl"),l=c.getExtension("WEBGL_debug_renderer_info");return{carte:l?c.getParameter(l.UNMASKED_RENDERER_WEBGL):"inconnue",tex:c.getParameter(c.MAX_TEXTURE_SIZE)}}catch{return{carte:"WebGL absent",tex:0}}})(),n=await new Promise(a=>{let c=0;const l=performance.now(),u=()=>{c++,performance.now()-l<1e3?requestAnimationFrame(u):a(c)};requestAnimationFrame(u)}),s=gi.compte(),r=gi.nom("homme"),o=[`Son (bruitages, musique) : ${t.contexte==="running"?"réveillé":"ENDORMI ("+t.contexte+")"}`,`Voix : ${gi.pris()?s&&s.fr?`${s.fr} voix françaises (${s.frLocales} installées), choisie : ${r?r.nom+(r.locale?"":" (en ligne)"):"aucune"}`:"AUCUNE voix française trouvée":"pas de synthèse vocale sur cet appareil"}`,`Vitesse : ${n} images par seconde (écran vide)`,`Écran : ${screen.width}x${screen.height}, tactile : ${matchMedia("(pointer: coarse)").matches?"oui":"non"}, finesse : ${window.devicePixelRatio}`,`Carte graphique : ${e.carte} (textures ${e.tex})`,`Navigateur : ${navigator.userAgent.replace(/\s+/g," ").slice(0,110)}`,`Erreurs du jeu : ${ei.length?ei.join(" | "):"aucune"}`];i.textContent=o.join(`
`)+`

Tu dois entendre un « ding » puis la voix du papa et celle de Théo.`,await gi.dire("Bonjour, je suis la voix du papa.",{pitch:.7,genre:"homme"}),await gi.dire("Salut, c’est Théo !",{pitch:2,genre:"femme",rate:1.1})}function fg(){le.open||(le.className="",le.innerHTML='<h2>Pause</h2><div class="menu-pause"><button class="bouton gros moyen" id="m-reprendre">Reprendre</button><button class="bouton secondaire" id="m-param">Paramètres</button><button class="bouton secondaire" id="m-quitter">Retour à la couverture</button></div>',le.showModal(),Ue&&Ue.bloquer(!0),le.addEventListener("close",()=>{Ue&&Ue.bloquer(!1)},{once:!0}),le.querySelector("#m-reprendre").addEventListener("click",()=>{Je.clic(),le.close()}),le.querySelector("#m-param").addEventListener("click",()=>{Je.clic(),le.addEventListener("close",()=>$l("commandes"),{once:!0}),le.close()}),le.querySelector("#m-quitter").addEventListener("click",()=>{Je.clic(),le.addEventListener("close",()=>pg(),{once:!0}),le.close()}))}function dg(){Je.magie(),Ue=og({reglages:()=>Ai,surMenu:fg,son:Je}),Pa(Ue)}function pg(){Ue&&(Ue.detruire(),Ue.moteur.arreter(),Ue=null),Pa(Yl)}const Yl=Ql({surCommencer:()=>{Je.demarrer(),gi.eveiller(),dg()},surParametres:()=>{Je.demarrer(),$l("son")}});Pa(Yl);window.bonsai={son:Je,get reglages(){return Ai},get jeu(){return Ue}};
