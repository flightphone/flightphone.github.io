(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rs="154",Vo=0,ys=1,ko=2,Ya=1,Wo=2,Je=3,Qe=0,ge=1,Ue=2,cn=0,Jn=1,Es=2,Ts=3,As=4,Xo=5,Yn=100,qo=101,Yo=102,bs=103,ws=104,Zo=200,jo=201,Jo=202,Ko=203,Za=204,ja=205,$o=206,Qo=207,tl=208,el=209,nl=210,il=0,rl=1,sl=2,Yr=3,al=4,ol=5,ll=6,cl=7,Ja=0,hl=1,ul=2,$e=0,fl=1,dl=2,pl=3,ml=4,gl=5,Ka=300,Qn=301,ti=302,Zr=303,jr=304,nr=306,Jr=1e3,De=1001,Kr=1002,me=1003,Rs=1004,fr=1005,Ee=1006,_l=1007,gi=1008,hn=1009,xl=1010,vl=1011,ss=1012,$a=1013,on=1014,ln=1015,_i=1016,Qa=1017,to=1018,yn=1020,Ml=1021,Ie=1023,Sl=1024,yl=1025,En=1026,ei=1027,El=1028,eo=1029,Tl=1030,no=1031,io=1033,dr=33776,pr=33777,mr=33778,gr=33779,Cs=35840,Ps=35841,Ls=35842,Us=35843,Al=36196,Ds=37492,Is=37496,Ns=37808,Fs=37809,Os=37810,Bs=37811,zs=37812,Gs=37813,Hs=37814,Vs=37815,ks=37816,Ws=37817,Xs=37818,qs=37819,Ys=37820,Zs=37821,_r=36492,bl=36283,js=36284,Js=36285,Ks=36286,ro=3e3,Tn=3001,wl=3200,Rl=3201,so=0,Cl=1,An="",Ot="srgb",Ge="srgb-linear",ao="display-p3",xr=7680,Pl=519,Ll=512,Ul=513,Dl=514,Il=515,Nl=516,Fl=517,Ol=518,Bl=519,$s=35044,Qs="300 es",$r=1035,Ke=2e3,tr=2001;class ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vr=Math.PI/180,Qr=180/Math.PI;function ri(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ce[i&255]+ce[i>>8&255]+ce[i>>16&255]+ce[i>>24&255]+"-"+ce[t&255]+ce[t>>8&255]+"-"+ce[t>>16&15|64]+ce[t>>24&255]+"-"+ce[e&63|128]+ce[e>>8&255]+"-"+ce[e>>16&255]+ce[e>>24&255]+ce[n&255]+ce[n>>8&255]+ce[n>>16&255]+ce[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function zl(i,t){return(i%t+t)%t}function Mr(i,t,e){return(1-e)*i+e*t}function ta(i){return(i&i-1)===0&&i!==0}function ts(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,r,s,a,o,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],m=n[5],x=n[8],_=r[0],p=r[3],u=r[6],R=r[1],g=r[4],v=r[7],C=r[2],D=r[5],U=r[8];return s[0]=a*_+o*R+c*C,s[3]=a*p+o*g+c*D,s[6]=a*u+o*v+c*U,s[1]=l*_+h*R+f*C,s[4]=l*p+h*g+f*D,s[7]=l*u+h*v+f*U,s[2]=d*_+m*R+x*C,s[5]=d*p+m*g+x*D,s[8]=d*u+m*v+x*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*s,m=l*s-a*c,x=e*f+n*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return t[0]=f*_,t[1]=(r*l-h*n)*_,t[2]=(o*n-r*a)*_,t[3]=d*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Sr.makeScale(t,e)),this}rotate(t){return this.premultiply(Sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sr=new Nt;function oo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const ea={};function fi(i){i in ea||(ea[i]=!0,console.warn(i))}function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Gl=new Nt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Hl=new Nt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Vl(i){return i.convertSRGBToLinear().applyMatrix3(Hl)}function kl(i){return i.applyMatrix3(Gl).convertLinearToSRGB()}const Wl={[Ge]:i=>i,[Ot]:i=>i.convertSRGBToLinear(),[ao]:Vl},Xl={[Ge]:i=>i,[Ot]:i=>i.convertLinearToSRGB(),[ao]:kl},we={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Ge},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Wl[t],r=Xl[e];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let Ln;class lo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ln===void 0&&(Ln=er("canvas")),Ln.width=t.width,Ln.height=t.height;const n=Ln.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ln}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Kn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ql=0;class co{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=ri(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Er(r[a].image)):s.push(Er(r[a]))}else s=Er(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Er(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yl=0;class Se extends ii{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=De,r=De,s=Ee,a=gi,o=Ie,c=hn,l=Se.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=ri(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Tn?Ot:An),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ka)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jr:t.x=t.x-Math.floor(t.x);break;case De:t.x=t.x<0?0:1;break;case Kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jr:t.y=t.y-Math.floor(t.y);break;case De:t.y=t.y<0?0:1;break;case Kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Tn:ro}set encoding(t){fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Tn?Ot:An}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=Ka;Se.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,r=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],x=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(x+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,v=(m+1)/2,C=(u+1)/2,D=(h+d)/4,U=(f+_)/4,z=(x+p)/4;return g>v&&g>C?g<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(g),r=D/n,s=U/n):v>C?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=D/r,s=z/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=U/s,r=z/s),this.set(n,r,s,e),this}let R=Math.sqrt((p-x)*(p-x)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(R)<.001&&(R=1),this.x=(p-x)/R,this.y=(f-_)/R,this.z=(d-h)/R,this.w=Math.acos((l+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rn extends ii{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(fi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Tn?Ot:An),this.texture=new Se(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ee,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new co(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ho extends Se{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=me,this.minFilter=me,this.wrapR=De,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zl extends Se{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=me,this.minFilter=me,this.wrapR=De,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=x,t[e+3]=_;return}if(f!==_||c!==d||l!==m||h!==x){let p=1-o;const u=c*d+l*m+h*x+f*_,R=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const C=Math.sqrt(g),D=Math.atan2(C,u*R);p=Math.sin(p*D)/C,o=Math.sin(o*D)/C}const v=o*R;if(c=c*p+d*v,l=l*p+m*v,h=h*p+x*v,f=f*p+_*v,p===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=C,l*=C,h*=C,f*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return t[e]=o*x+h*f+c*m-l*d,t[e+1]=c*x+h*d+l*f-o*m,t[e+2]=l*x+h*m+o*d-c*f,t[e+3]=h*x-o*f-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),f=o(s/2),d=c(n/2),m=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=d*h*f+l*m*x,this._y=l*m*f-d*h*x,this._z=l*h*x+d*m*f,this._w=l*h*f-d*m*x;break;case"YXZ":this._x=d*h*f+l*m*x,this._y=l*m*f-d*h*x,this._z=l*h*x-d*m*f,this._w=l*h*f+d*m*x;break;case"ZXY":this._x=d*h*f-l*m*x,this._y=l*m*f+d*h*x,this._z=l*h*x+d*m*f,this._w=l*h*f-d*m*x;break;case"ZYX":this._x=d*h*f-l*m*x,this._y=l*m*f+d*h*x,this._z=l*h*x-d*m*f,this._w=l*h*f+d*m*x;break;case"YZX":this._x=d*h*f+l*m*x,this._y=l*m*f+d*h*x,this._z=l*h*x-d*m*f,this._w=l*h*f-d*m*x;break;case"XZY":this._x=d*h*f-l*m*x,this._y=l*m*f-d*h*x,this._z=l*h*x+d*m*f,this._w=l*h*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(na.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(na.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=c*e+a*r-o*n,h=c*n+o*e-s*r,f=c*r+s*n-a*e,d=-s*e-a*n-o*r;return this.x=l*c+d*-s+h*-o-f*-a,this.y=h*c+d*-a+f*-s-l*-o,this.z=f*c+d*-o+l*-a-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tr.copy(this).projectOnVector(t),this.sub(Tr)}reflect(t){return this.sub(Tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new G,na=new Si;class yi{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Un.copy(t.boundingBox),Un.applyMatrix4(t.matrixWorld),this.union(Un);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)We.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(We)}else r.boundingBox===null&&r.computeBoundingBox(),Un.copy(r.boundingBox),Un.applyMatrix4(t.matrixWorld),this.union(Un)}const n=t.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oi),Ri.subVectors(this.max,oi),Dn.subVectors(t.a,oi),In.subVectors(t.b,oi),Nn.subVectors(t.c,oi),en.subVectors(In,Dn),nn.subVectors(Nn,In),pn.subVectors(Dn,Nn);let e=[0,-en.z,en.y,0,-nn.z,nn.y,0,-pn.z,pn.y,en.z,0,-en.x,nn.z,0,-nn.x,pn.z,0,-pn.x,-en.y,en.x,0,-nn.y,nn.x,0,-pn.y,pn.x,0];return!Ar(e,Dn,In,Nn,Ri)||(e=[1,0,0,0,1,0,0,0,1],!Ar(e,Dn,In,Nn,Ri))?!1:(Ci.crossVectors(en,nn),e=[Ci.x,Ci.y,Ci.z],Ar(e,Dn,In,Nn,Ri))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ke=[new G,new G,new G,new G,new G,new G,new G,new G],We=new G,Un=new yi,Dn=new G,In=new G,Nn=new G,en=new G,nn=new G,pn=new G,oi=new G,Ri=new G,Ci=new G,mn=new G;function Ar(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){mn.fromArray(i,s);const o=r.x*Math.abs(mn.x)+r.y*Math.abs(mn.y)+r.z*Math.abs(mn.z),c=t.dot(mn),l=e.dot(mn),h=n.dot(mn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const jl=new yi,li=new G,br=new G;class as{constructor(t=new G,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jl.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;li.subVectors(t,this.center);const e=li.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(li,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(li.copy(t.center).add(br)),this.expandByPoint(li.copy(t.center).sub(br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xe=new G,wr=new G,Pi=new G,rn=new G,Rr=new G,Li=new G,Cr=new G;class Jl{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xe.copy(this.origin).addScaledVector(this.direction,e),Xe.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){wr.copy(t).add(e).multiplyScalar(.5),Pi.copy(e).sub(t).normalize(),rn.copy(this.origin).sub(wr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Pi),o=rn.dot(this.direction),c=-rn.dot(Pi),l=rn.lengthSq(),h=Math.abs(1-a*a);let f,d,m,x;if(h>0)if(f=a*c-o,d=a*o-c,x=s*h,f>=0)if(d>=-x)if(d<=x){const _=1/h;f*=_,d*=_,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=x?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wr).addScaledVector(Pi,d),m}intersectSphere(t,e){Xe.subVectors(t.center,this.origin);const n=Xe.dot(this.direction),r=Xe.dot(Xe)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Xe)!==null}intersectTriangle(t,e,n,r,s){Rr.subVectors(e,t),Li.subVectors(n,t),Cr.crossVectors(Rr,Li);let a=this.direction.dot(Cr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rn.subVectors(this.origin,t);const c=o*this.direction.dot(Li.crossVectors(rn,Li));if(c<0)return null;const l=o*this.direction.dot(Rr.cross(rn));if(l<0||c+l>a)return null;const h=-o*rn.dot(Cr);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,r,s,a,o,c,l,h,f,d,m,x,_,p){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,h,f,d,m,x,_,p)}set(t,e,n,r,s,a,o,c,l,h,f,d,m,x,_,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=x,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Fn.setFromMatrixColumn(t,0).length(),s=1/Fn.setFromMatrixColumn(t,1).length(),a=1/Fn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*h,m=a*f,x=o*h,_=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=m+x*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=x+m*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,m=c*f,x=l*h,_=l*f;e[0]=d+_*o,e[4]=x*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-x,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,m=c*f,x=l*h,_=l*f;e[0]=d-_*o,e[4]=-a*f,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,m=a*f,x=o*h,_=o*f;e[0]=c*h,e[4]=x*l-m,e[8]=d*l+_,e[1]=c*f,e[5]=_*l+d,e[9]=m*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,x=o*c,_=o*l;e[0]=c*h,e[4]=_-d*f,e[8]=x*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*f+x,e[10]=d-_*f}else if(t.order==="XZY"){const d=a*c,m=a*l,x=o*c,_=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+_,e[5]=a*h,e[9]=m*f-x,e[2]=x*f-m,e[6]=o*h,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kl,t,$l)}lookAt(t,e,n){const r=this.elements;return ve.subVectors(t,e),ve.lengthSq()===0&&(ve.z=1),ve.normalize(),sn.crossVectors(n,ve),sn.lengthSq()===0&&(Math.abs(n.z)===1?ve.x+=1e-4:ve.z+=1e-4,ve.normalize(),sn.crossVectors(n,ve)),sn.normalize(),Ui.crossVectors(ve,sn),r[0]=sn.x,r[4]=Ui.x,r[8]=ve.x,r[1]=sn.y,r[5]=Ui.y,r[9]=ve.y,r[2]=sn.z,r[6]=Ui.z,r[10]=ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],x=n[2],_=n[6],p=n[10],u=n[14],R=n[3],g=n[7],v=n[11],C=n[15],D=r[0],U=r[4],z=r[8],M=r[12],b=r[1],rt=r[5],Q=r[9],V=r[13],k=r[2],J=r[6],st=r[10],W=r[14],B=r[3],ut=r[7],it=r[11],Y=r[15];return s[0]=a*D+o*b+c*k+l*B,s[4]=a*U+o*rt+c*J+l*ut,s[8]=a*z+o*Q+c*st+l*it,s[12]=a*M+o*V+c*W+l*Y,s[1]=h*D+f*b+d*k+m*B,s[5]=h*U+f*rt+d*J+m*ut,s[9]=h*z+f*Q+d*st+m*it,s[13]=h*M+f*V+d*W+m*Y,s[2]=x*D+_*b+p*k+u*B,s[6]=x*U+_*rt+p*J+u*ut,s[10]=x*z+_*Q+p*st+u*it,s[14]=x*M+_*V+p*W+u*Y,s[3]=R*D+g*b+v*k+C*B,s[7]=R*U+g*rt+v*J+C*ut,s[11]=R*z+g*Q+v*st+C*it,s[15]=R*M+g*V+v*W+C*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],m=t[14],x=t[3],_=t[7],p=t[11],u=t[15];return x*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*m-n*c*m)+_*(+e*c*m-e*l*d+s*a*d-r*a*m+r*l*h-s*c*h)+p*(+e*l*f-e*o*m-s*a*f+n*a*m+s*o*h-n*l*h)+u*(-r*o*h-e*c*f+e*o*d+r*a*f-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],m=t[11],x=t[12],_=t[13],p=t[14],u=t[15],R=f*p*l-_*d*l+_*c*m-o*p*m-f*c*u+o*d*u,g=x*d*l-h*p*l-x*c*m+a*p*m+h*c*u-a*d*u,v=h*_*l-x*f*l+x*o*m-a*_*m-h*o*u+a*f*u,C=x*f*c-h*_*c-x*o*d+a*_*d+h*o*p-a*f*p,D=e*R+n*g+r*v+s*C;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/D;return t[0]=R*U,t[1]=(_*d*s-f*p*s-_*r*m+n*p*m+f*r*u-n*d*u)*U,t[2]=(o*p*s-_*c*s+_*r*l-n*p*l-o*r*u+n*c*u)*U,t[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*m-n*c*m)*U,t[4]=g*U,t[5]=(h*p*s-x*d*s+x*r*m-e*p*m-h*r*u+e*d*u)*U,t[6]=(x*c*s-a*p*s-x*r*l+e*p*l+a*r*u-e*c*u)*U,t[7]=(a*d*s-h*c*s+h*r*l-e*d*l-a*r*m+e*c*m)*U,t[8]=v*U,t[9]=(x*f*s-h*_*s-x*n*m+e*_*m+h*n*u-e*f*u)*U,t[10]=(a*_*s-x*o*s+x*n*l-e*_*l-a*n*u+e*o*u)*U,t[11]=(h*o*s-a*f*s-h*n*l+e*f*l+a*n*m-e*o*m)*U,t[12]=C*U,t[13]=(h*_*r-x*f*r+x*n*d-e*_*d-h*n*p+e*f*p)*U,t[14]=(x*o*r-a*_*r-x*n*c+e*_*c+a*n*p-e*o*p)*U,t[15]=(a*f*r-h*o*r+h*n*c-e*f*c-a*n*d+e*o*d)*U,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,f=o+o,d=s*l,m=s*h,x=s*f,_=a*h,p=a*f,u=o*f,R=c*l,g=c*h,v=c*f,C=n.x,D=n.y,U=n.z;return r[0]=(1-(_+u))*C,r[1]=(m+v)*C,r[2]=(x-g)*C,r[3]=0,r[4]=(m-v)*D,r[5]=(1-(d+u))*D,r[6]=(p+R)*D,r[7]=0,r[8]=(x+g)*U,r[9]=(p-R)*U,r[10]=(1-(d+_))*U,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Fn.set(r[0],r[1],r[2]).length();const a=Fn.set(r[4],r[5],r[6]).length(),o=Fn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Re.copy(this);const l=1/s,h=1/a,f=1/o;return Re.elements[0]*=l,Re.elements[1]*=l,Re.elements[2]*=l,Re.elements[4]*=h,Re.elements[5]*=h,Re.elements[6]*=h,Re.elements[8]*=f,Re.elements[9]*=f,Re.elements[10]*=f,e.setFromRotationMatrix(Re),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Ke){const c=this.elements,l=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let m,x;if(o===Ke)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===tr)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Ke){const c=this.elements,l=1/(e-t),h=1/(n-r),f=1/(a-s),d=(e+t)*l,m=(n+r)*h;let x,_;if(o===Ke)x=(a+s)*f,_=-2*f;else if(o===tr)x=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fn=new G,Re=new ee,Kl=new G(0,0,0),$l=new G(1,1,1),sn=new G,Ui=new G,ve=new G,ia=new ee,ra=new Si;class ir{constructor(t=0,e=0,n=0,r=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ia.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ia,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ra.setFromEuler(this),this.setFromQuaternion(ra,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class uo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ql=0;const sa=new G,On=new Si,qe=new ee,Di=new G,ci=new G,tc=new G,ec=new Si,aa=new G(1,0,0),oa=new G(0,1,0),la=new G(0,0,1),nc={type:"added"},ca={type:"removed"};class ne extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ne.DEFAULT_UP.clone();const t=new G,e=new ir,n=new Si,r=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ee},normalMatrix:{value:new Nt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return On.setFromAxisAngle(t,e),this.quaternion.multiply(On),this}rotateOnWorldAxis(t,e){return On.setFromAxisAngle(t,e),this.quaternion.premultiply(On),this}rotateX(t){return this.rotateOnAxis(aa,t)}rotateY(t){return this.rotateOnAxis(oa,t)}rotateZ(t){return this.rotateOnAxis(la,t)}translateOnAxis(t,e){return sa.copy(t).applyQuaternion(this.quaternion),this.position.add(sa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(aa,t)}translateY(t){return this.translateOnAxis(oa,t)}translateZ(t){return this.translateOnAxis(la,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Di.copy(t):Di.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qe.lookAt(ci,Di,this.up):qe.lookAt(Di,ci,this.up),this.quaternion.setFromRotationMatrix(qe),r&&(qe.extractRotation(r.matrixWorld),On.setFromRotationMatrix(qe),this.quaternion.premultiply(On.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(nc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ca)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ca)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,t,tc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,ec,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ne.DEFAULT_UP=new G(0,1,0);ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ce=new G,Ye=new G,Pr=new G,Ze=new G,Bn=new G,zn=new G,ha=new G,Lr=new G,Ur=new G,Dr=new G;let Ii=!1;class Le{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ce.subVectors(t,e),r.cross(Ce);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ce.subVectors(r,e),Ye.subVectors(n,e),Pr.subVectors(t,e);const a=Ce.dot(Ce),o=Ce.dot(Ye),c=Ce.dot(Pr),l=Ye.dot(Ye),h=Ye.dot(Pr),f=a*l-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(l*c-o*h)*d,x=(a*h-o*c)*d;return s.set(1-m-x,x,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ze),Ze.x>=0&&Ze.y>=0&&Ze.x+Ze.y<=1}static getUV(t,e,n,r,s,a,o,c){return Ii===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ii=!0),this.getInterpolation(t,e,n,r,s,a,o,c)}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,Ze),c.setScalar(0),c.addScaledVector(s,Ze.x),c.addScaledVector(a,Ze.y),c.addScaledVector(o,Ze.z),c}static isFrontFacing(t,e,n,r){return Ce.subVectors(n,e),Ye.subVectors(t,e),Ce.cross(Ye).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ce.subVectors(this.c,this.b),Ye.subVectors(this.a,this.b),Ce.cross(Ye).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Le.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Le.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return Ii===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ii=!0),Le.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}getInterpolation(t,e,n,r,s){return Le.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Le.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Le.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Bn.subVectors(r,n),zn.subVectors(s,n),Lr.subVectors(t,n);const c=Bn.dot(Lr),l=zn.dot(Lr);if(c<=0&&l<=0)return e.copy(n);Ur.subVectors(t,r);const h=Bn.dot(Ur),f=zn.dot(Ur);if(h>=0&&f<=h)return e.copy(r);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Bn,a);Dr.subVectors(t,s);const m=Bn.dot(Dr),x=zn.dot(Dr);if(x>=0&&m<=x)return e.copy(s);const _=m*l-c*x;if(_<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(zn,o);const p=h*x-m*f;if(p<=0&&f-h>=0&&m-x>=0)return ha.subVectors(s,r),o=(f-h)/(f-h+(m-x)),e.copy(r).addScaledVector(ha,o);const u=1/(p+_+d);return a=_*u,o=d*u,e.copy(n).addScaledVector(Bn,a).addScaledVector(zn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let ic=0;class Ei extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Jn,this.side=Qe,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=ja,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==Qe&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const fo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pe={h:0,s:0,l:0},Ni={h:0,s:0,l:0};function Ir(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ot){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=we.workingColorSpace){if(t=zl(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ir(a,s,t+1/3),this.g=Ir(a,s,t),this.b=Ir(a,s,t-1/3)}return we.toWorkingColorSpace(this,r),this}setStyle(t,e=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ot){const n=fo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ot){return we.fromWorkingColorSpace(he.copy(this),t),Math.round(ue(he.r*255,0,255))*65536+Math.round(ue(he.g*255,0,255))*256+Math.round(ue(he.b*255,0,255))}getHexString(t=Ot){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(he.copy(this),e);const n=he.r,r=he.g,s=he.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(he.copy(this),e),t.r=he.r,t.g=he.g,t.b=he.b,t}getStyle(t=Ot){we.fromWorkingColorSpace(he.copy(this),t);const e=he.r,n=he.g,r=he.b;return t!==Ot?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Pe),Pe.h+=t,Pe.s+=e,Pe.l+=n,this.setHSL(Pe.h,Pe.s,Pe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pe),t.getHSL(Ni);const n=Mr(Pe.h,Ni.h,e),r=Mr(Pe.s,Ni.s,e),s=Mr(Pe.l,Ni.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const he=new Xt;Xt.NAMES=fo;class os extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qt=new G,Fi=new dt;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$s,this.updateRange={offset:0,count:-1},this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fi.fromBufferAttribute(this,e),Fi.applyMatrix3(t),this.setXY(e,Fi.x,Fi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qt.fromBufferAttribute(this,e),Qt.applyMatrix3(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qt.fromBufferAttribute(this,e),Qt.applyMatrix4(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qt.fromBufferAttribute(this,e),Qt.applyNormalMatrix(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qt.fromBufferAttribute(this,e),Qt.transformDirection(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$s&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class po extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mo extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ae extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rc=0;const ye=new ee,Nr=new ne,Gn=new G,Me=new yi,hi=new yi,oe=new G;class tn extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oo(t)?mo:po)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ye.makeRotationFromQuaternion(t),this.applyMatrix4(ye),this}rotateX(t){return ye.makeRotationX(t),this.applyMatrix4(ye),this}rotateY(t){return ye.makeRotationY(t),this.applyMatrix4(ye),this}rotateZ(t){return ye.makeRotationZ(t),this.applyMatrix4(ye),this}translate(t,e,n){return ye.makeTranslation(t,e,n),this.applyMatrix4(ye),this}scale(t,e,n){return ye.makeScale(t,e,n),this.applyMatrix4(ye),this}lookAt(t){return Nr.lookAt(t),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gn).negate(),this.translate(Gn.x,Gn.y,Gn.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Me.setFromBufferAttribute(s),this.morphTargetsRelative?(oe.addVectors(this.boundingBox.min,Me.min),this.boundingBox.expandByPoint(oe),oe.addVectors(this.boundingBox.max,Me.max),this.boundingBox.expandByPoint(oe)):(this.boundingBox.expandByPoint(Me.min),this.boundingBox.expandByPoint(Me.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(Me.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];hi.setFromBufferAttribute(o),this.morphTargetsRelative?(oe.addVectors(Me.min,hi.min),Me.expandByPoint(oe),oe.addVectors(Me.max,hi.max),Me.expandByPoint(oe)):(Me.expandByPoint(hi.min),Me.expandByPoint(hi.max))}Me.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)oe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(oe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)oe.fromBufferAttribute(o,l),c&&(Gn.fromBufferAttribute(t,l),oe.add(Gn)),r=Math.max(r,n.distanceToSquared(oe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<o;b++)l[b]=new G,h[b]=new G;const f=new G,d=new G,m=new G,x=new dt,_=new dt,p=new dt,u=new G,R=new G;function g(b,rt,Q){f.fromArray(r,b*3),d.fromArray(r,rt*3),m.fromArray(r,Q*3),x.fromArray(a,b*2),_.fromArray(a,rt*2),p.fromArray(a,Q*2),d.sub(f),m.sub(f),_.sub(x),p.sub(x);const V=1/(_.x*p.y-p.x*_.y);isFinite(V)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(V),R.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(V),l[b].add(u),l[rt].add(u),l[Q].add(u),h[b].add(R),h[rt].add(R),h[Q].add(R))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let b=0,rt=v.length;b<rt;++b){const Q=v[b],V=Q.start,k=Q.count;for(let J=V,st=V+k;J<st;J+=3)g(n[J+0],n[J+1],n[J+2])}const C=new G,D=new G,U=new G,z=new G;function M(b){U.fromArray(s,b*3),z.copy(U);const rt=l[b];C.copy(rt),C.sub(U.multiplyScalar(U.dot(rt))).normalize(),D.crossVectors(z,rt);const V=D.dot(h[b])<0?-1:1;c[b*4]=C.x,c[b*4+1]=C.y,c[b*4+2]=C.z,c[b*4+3]=V}for(let b=0,rt=v.length;b<rt;++b){const Q=v[b],V=Q.start,k=Q.count;for(let J=V,st=V+k;J<st;J+=3)M(n[J+0]),M(n[J+1]),M(n[J+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new G,s=new G,a=new G,o=new G,c=new G,l=new G,h=new G,f=new G;if(t)for(let d=0,m=t.count;d<m;d+=3){const x=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)oe.fromBufferAttribute(t,e),oe.normalize(),t.setXYZ(e,oe.x,oe.y,oe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let m=0,x=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let u=0;u<h;u++)d[x++]=l[m++]}return new ze(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],f=s[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ua=new ee,gn=new Jl,Oi=new as,fa=new G,Hn=new G,Vn=new G,kn=new G,Fr=new G,Bi=new G,zi=new dt,Gi=new dt,Hi=new dt,da=new G,pa=new G,ma=new G,Vi=new G,ki=new G;class Ne extends ne{constructor(t=new tn,e=new os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Bi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(Fr.fromBufferAttribute(f,t),a?Bi.addScaledVector(Fr,h):Bi.addScaledVector(Fr.sub(e),h))}e.add(Bi)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere),Oi.applyMatrix4(s),gn.copy(t.ray).recast(t.near),!(Oi.containsPoint(gn.origin)===!1&&(gn.intersectSphere(Oi,fa)===null||gn.origin.distanceToSquared(fa)>(t.far-t.near)**2))&&(ua.copy(s).invert(),gn.copy(t.ray).applyMatrix4(ua),!(n.boundingBox!==null&&gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const p=d[x],u=a[p.materialIndex],R=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=R,C=g;v<C;v+=3){const D=o.getX(v),U=o.getX(v+1),z=o.getX(v+2);r=Wi(this,u,t,n,l,h,f,D,U,z),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){const R=o.getX(p),g=o.getX(p+1),v=o.getX(p+2);r=Wi(this,a,t,n,l,h,f,R,g,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const p=d[x],u=a[p.materialIndex],R=Math.max(p.start,m.start),g=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let v=R,C=g;v<C;v+=3){const D=v,U=v+1,z=v+2;r=Wi(this,u,t,n,l,h,f,D,U,z),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){const R=p,g=p+1,v=p+2;r=Wi(this,a,t,n,l,h,f,R,g,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function sc(i,t,e,n,r,s,a,o){let c;if(t.side===ge?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===Qe,o),c===null)return null;ki.copy(o),ki.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ki);return l<e.near||l>e.far?null:{distance:l,point:ki.clone(),object:i}}function Wi(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Hn),i.getVertexPosition(c,Vn),i.getVertexPosition(l,kn);const h=sc(i,t,e,n,Hn,Vn,kn,Vi);if(h){r&&(zi.fromBufferAttribute(r,o),Gi.fromBufferAttribute(r,c),Hi.fromBufferAttribute(r,l),h.uv=Le.getInterpolation(Vi,Hn,Vn,kn,zi,Gi,Hi,new dt)),s&&(zi.fromBufferAttribute(s,o),Gi.fromBufferAttribute(s,c),Hi.fromBufferAttribute(s,l),h.uv1=Le.getInterpolation(Vi,Hn,Vn,kn,zi,Gi,Hi,new dt),h.uv2=h.uv1),a&&(da.fromBufferAttribute(a,o),pa.fromBufferAttribute(a,c),ma.fromBufferAttribute(a,l),h.normal=Le.getInterpolation(Vi,Hn,Vn,kn,da,pa,ma,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new G,materialIndex:0};Le.getNormal(Hn,Vn,kn,f.normal),h.face=f}return h}class Ti extends tn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,n,e,t,a,s,0),x("z","y","x",1,-1,n,e,-t,a,s,1),x("x","z","y",1,1,t,n,e,r,a,2),x("x","z","y",1,-1,t,n,-e,r,a,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(f,2));function x(_,p,u,R,g,v,C,D,U,z,M){const b=v/U,rt=C/z,Q=v/2,V=C/2,k=D/2,J=U+1,st=z+1;let W=0,B=0;const ut=new G;for(let it=0;it<st;it++){const Y=it*rt-V;for(let tt=0;tt<J;tt++){const Mt=tt*b-Q;ut[_]=Mt*R,ut[p]=Y*g,ut[u]=k,l.push(ut.x,ut.y,ut.z),ut[_]=0,ut[p]=0,ut[u]=D>0?1:-1,h.push(ut.x,ut.y,ut.z),f.push(tt/U),f.push(1-it/z),W+=1}}for(let it=0;it<z;it++)for(let Y=0;Y<U;Y++){const tt=d+Y+J*it,Mt=d+Y+J*(it+1),F=d+(Y+1)+J*(it+1),L=d+(Y+1)+J*it;c.push(tt,Mt,L),c.push(Mt,F,L),B+=6}o.addGroup(m,B,M),m+=B,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ni(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function pe(i){const t={};for(let e=0;e<i.length;e++){const n=ni(i[e]);for(const r in n)t[r]=n[r]}return t}function ac(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function go(i){return i.getRenderTarget()===null?i.outputColorSpace:Ge}const oc={clone:ni,merge:pe};var lc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lc,this.fragmentShader=cc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ni(t.uniforms),this.uniformsGroups=ac(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _o extends ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Ke}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Te extends _o{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wn=-90,Xn=1;class hc extends ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Te(Wn,Xn,t,e);r.layers=this.layers,this.add(r);const s=new Te(Wn,Xn,t,e);s.layers=this.layers,this.add(s);const a=new Te(Wn,Xn,t,e);a.layers=this.layers,this.add(a);const o=new Te(Wn,Xn,t,e);o.layers=this.layers,this.add(o);const c=new Te(Wn,Xn,t,e);c.layers=this.layers,this.add(c);const l=new Te(Wn,Xn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Ke)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,c,l]=this.children,h=t.getRenderTarget(),f=t.toneMapping,d=t.xr.enabled;t.toneMapping=$e,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,r),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=f,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class xo extends Se{constructor(t,e,n,r,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Qn,super(t,e,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uc extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(fi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Tn?Ot:An),this.texture=new xo(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ti(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ge,blending:cn});s.uniforms.tEquirect.value=e;const a=new Ne(r,s),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=Ee),new hc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Or=new G,fc=new G,dc=new Nt;class vn{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Or.subVectors(n,e).cross(fc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Or),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dc.getNormalMatrix(t),r=this.coplanarPoint(Or).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _n=new as,Xi=new G;class ls{constructor(t=new vn,e=new vn,n=new vn,r=new vn,s=new vn,a=new vn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ke){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],f=r[6],d=r[7],m=r[8],x=r[9],_=r[10],p=r[11],u=r[12],R=r[13],g=r[14],v=r[15];if(n[0].setComponents(c-s,d-l,p-m,v-u).normalize(),n[1].setComponents(c+s,d+l,p+m,v+u).normalize(),n[2].setComponents(c+a,d+h,p+x,v+R).normalize(),n[3].setComponents(c-a,d-h,p-x,v-R).normalize(),n[4].setComponents(c-o,d-f,p-_,v-g).normalize(),e===Ke)n[5].setComponents(c+o,d+f,p+_,v+g).normalize();else if(e===tr)n[5].setComponents(o,f,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(t){return _n.center.set(0,0,0),_n.radius=.7071067811865476,_n.applyMatrix4(t.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Xi.x=r.normal.x>0?t.max.x:t.min.x,Xi.y=r.normal.y>0?t.max.y:t.min.y,Xi.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Xi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vo(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function pc(i,t){const e=t.isWebGL2,n=new WeakMap;function r(l,h){const f=l.array,d=l.usage,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,f,d),l.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,f){const d=h.array,m=h.updateRange;i.bindBuffer(f,l),m.count===-1?i.bufferSubData(f,0,d):(e?i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,r(l,h)):f.version<l.version&&(s(f.buffer,l,h),f.version=l.version)}return{get:a,remove:o,update:c}}class cs extends tn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,f=t/o,d=e/c,m=[],x=[],_=[],p=[];for(let u=0;u<h;u++){const R=u*d-a;for(let g=0;g<l;g++){const v=g*f-s;x.push(v,-R,0),_.push(0,0,1),p.push(g/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let R=0;R<o;R++){const g=R+l*u,v=R+l*(u+1),C=R+1+l*(u+1),D=R+1+l*u;m.push(g,v,D),m.push(v,C,D)}this.setIndex(m),this.setAttribute("position",new Ae(x,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}var mc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gc=`#ifdef USE_ALPHAHASH
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
#endif`,_c=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ec=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ac=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bc=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,wc=`#ifdef USE_BUMPMAP
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
#endif`,Rc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ic=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fc=`#define PI 3.141592653589793
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
} // validated`,Oc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bc=`vec3 transformedNormal = objectNormal;
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
#endif`,zc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xc=`#ifdef USE_ENVMAP
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
#endif`,qc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yc=`#ifdef USE_ENVMAP
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
#endif`,Zc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jc=`#ifdef USE_ENVMAP
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
#endif`,Jc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$c=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,th=`#ifdef USE_GRADIENTMAP
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
}`,eh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ih=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sh=`uniform bool receiveShadow;
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
#endif`,ah=`#ifdef USE_ENVMAP
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
#endif`,oh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ch=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uh=`PhysicalMaterial material;
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
#endif`,fh=`struct PhysicalMaterial {
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
}`,dh=`
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
#endif`,ph=`#if defined( RE_IndirectDiffuse )
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
#endif`,mh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_h=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mh=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Sh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eh=`#if defined( USE_POINTS_UV )
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
#endif`,Th=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ah=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wh=`#ifdef USE_MORPHNORMALS
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
#endif`,Rh=`#ifdef USE_MORPHTARGETS
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
#endif`,Ch=`#ifdef USE_MORPHTARGETS
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
#endif`,Ph=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Lh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ih=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nh=`#ifdef USE_NORMALMAP
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
#endif`,Fh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Oh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kh=`float getShadowMask() {
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
}`,$h=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qh=`#ifdef USE_SKINNING
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
#endif`,tu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eu=`#ifdef USE_SKINNING
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
#endif`,nu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ru=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,su=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,au=`#ifdef USE_TRANSMISSION
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
#endif`,ou=`#ifdef USE_TRANSMISSION
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
#endif`,lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,du=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_u=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`#include <common>
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
}`,vu=`#if DEPTH_PACKING == 3200
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
}`,Mu=`#define DISTANCE
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
}`,Su=`#define DISTANCE
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
}`,yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tu=`uniform float scale;
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
}`,Au=`uniform vec3 diffuse;
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
}`,bu=`#include <common>
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
}`,wu=`uniform vec3 diffuse;
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
}`,Ru=`#define LAMBERT
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
}`,Cu=`#define LAMBERT
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
}`,Pu=`#define MATCAP
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
}`,Lu=`#define MATCAP
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
}`,Uu=`#define NORMAL
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
}`,Du=`#define NORMAL
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
}`,Iu=`#define PHONG
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
}`,Nu=`#define PHONG
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
}`,Fu=`#define STANDARD
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
}`,Ou=`#define STANDARD
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
}`,Bu=`#define TOON
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
}`,zu=`#define TOON
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
}`,Gu=`uniform float size;
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
}`,Hu=`uniform vec3 diffuse;
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
}`,Vu=`#include <common>
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
}`,ku=`uniform vec3 color;
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
}`,Wu=`uniform float rotation;
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
}`,Xu=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:mc,alphahash_pars_fragment:gc,alphamap_fragment:_c,alphamap_pars_fragment:xc,alphatest_fragment:vc,alphatest_pars_fragment:Mc,aomap_fragment:Sc,aomap_pars_fragment:yc,begin_vertex:Ec,beginnormal_vertex:Tc,bsdfs:Ac,iridescence_fragment:bc,bumpmap_pars_fragment:wc,clipping_planes_fragment:Rc,clipping_planes_pars_fragment:Cc,clipping_planes_pars_vertex:Pc,clipping_planes_vertex:Lc,color_fragment:Uc,color_pars_fragment:Dc,color_pars_vertex:Ic,color_vertex:Nc,common:Fc,cube_uv_reflection_fragment:Oc,defaultnormal_vertex:Bc,displacementmap_pars_vertex:zc,displacementmap_vertex:Gc,emissivemap_fragment:Hc,emissivemap_pars_fragment:Vc,colorspace_fragment:kc,colorspace_pars_fragment:Wc,envmap_fragment:Xc,envmap_common_pars_fragment:qc,envmap_pars_fragment:Yc,envmap_pars_vertex:Zc,envmap_physical_pars_fragment:ah,envmap_vertex:jc,fog_vertex:Jc,fog_pars_vertex:Kc,fog_fragment:$c,fog_pars_fragment:Qc,gradientmap_pars_fragment:th,lightmap_fragment:eh,lightmap_pars_fragment:nh,lights_lambert_fragment:ih,lights_lambert_pars_fragment:rh,lights_pars_begin:sh,lights_toon_fragment:oh,lights_toon_pars_fragment:lh,lights_phong_fragment:ch,lights_phong_pars_fragment:hh,lights_physical_fragment:uh,lights_physical_pars_fragment:fh,lights_fragment_begin:dh,lights_fragment_maps:ph,lights_fragment_end:mh,logdepthbuf_fragment:gh,logdepthbuf_pars_fragment:_h,logdepthbuf_pars_vertex:xh,logdepthbuf_vertex:vh,map_fragment:Mh,map_pars_fragment:Sh,map_particle_fragment:yh,map_particle_pars_fragment:Eh,metalnessmap_fragment:Th,metalnessmap_pars_fragment:Ah,morphcolor_vertex:bh,morphnormal_vertex:wh,morphtarget_pars_vertex:Rh,morphtarget_vertex:Ch,normal_fragment_begin:Ph,normal_fragment_maps:Lh,normal_pars_fragment:Uh,normal_pars_vertex:Dh,normal_vertex:Ih,normalmap_pars_fragment:Nh,clearcoat_normal_fragment_begin:Fh,clearcoat_normal_fragment_maps:Oh,clearcoat_pars_fragment:Bh,iridescence_pars_fragment:zh,opaque_fragment:Gh,packing:Hh,premultiplied_alpha_fragment:Vh,project_vertex:kh,dithering_fragment:Wh,dithering_pars_fragment:Xh,roughnessmap_fragment:qh,roughnessmap_pars_fragment:Yh,shadowmap_pars_fragment:Zh,shadowmap_pars_vertex:jh,shadowmap_vertex:Jh,shadowmask_pars_fragment:Kh,skinbase_vertex:$h,skinning_pars_vertex:Qh,skinning_vertex:tu,skinnormal_vertex:eu,specularmap_fragment:nu,specularmap_pars_fragment:iu,tonemapping_fragment:ru,tonemapping_pars_fragment:su,transmission_fragment:au,transmission_pars_fragment:ou,uv_pars_fragment:lu,uv_pars_vertex:cu,uv_vertex:hu,worldpos_vertex:uu,background_vert:fu,background_frag:du,backgroundCube_vert:pu,backgroundCube_frag:mu,cube_vert:gu,cube_frag:_u,depth_vert:xu,depth_frag:vu,distanceRGBA_vert:Mu,distanceRGBA_frag:Su,equirect_vert:yu,equirect_frag:Eu,linedashed_vert:Tu,linedashed_frag:Au,meshbasic_vert:bu,meshbasic_frag:wu,meshlambert_vert:Ru,meshlambert_frag:Cu,meshmatcap_vert:Pu,meshmatcap_frag:Lu,meshnormal_vert:Uu,meshnormal_frag:Du,meshphong_vert:Iu,meshphong_frag:Nu,meshphysical_vert:Fu,meshphysical_frag:Ou,meshtoon_vert:Bu,meshtoon_frag:zu,points_vert:Gu,points_frag:Hu,shadow_vert:Vu,shadow_frag:ku,sprite_vert:Wu,sprite_frag:Xu},St={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Be={basic:{uniforms:pe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:pe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Xt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:pe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:pe([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:pe([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Xt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:pe([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:pe([St.points,St.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:pe([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:pe([St.common,St.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:pe([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:pe([St.sprite,St.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:pe([St.common,St.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:pe([St.lights,St.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Be.physical={uniforms:pe([Be.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const qi={r:0,b:0,g:0};function qu(i,t,e,n,r,s,a){const o=new Xt(0);let c=s===!0?0:1,l,h,f=null,d=0,m=null;function x(p,u){let R=!1,g=u.isScene===!0?u.background:null;switch(g&&g.isTexture&&(g=(u.backgroundBlurriness>0?e:t).get(g)),g===null?_(o,c):g&&g.isColor&&(_(g,1),R=!0),i.xr.getEnvironmentBlendMode()){case"opaque":R=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),R=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),R=!0;break}(i.autoClear||R)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===nr)?(h===void 0&&(h=new Ne(new Ti(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ni(Be.backgroundCube.uniforms),vertexShader:Be.backgroundCube.vertexShader,fragmentShader:Be.backgroundCube.fragmentShader,side:ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=g.colorSpace!==Ot,(f!==g||d!==g.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=g,d=g.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Ne(new cs(2,2),new Cn({name:"BackgroundMaterial",uniforms:ni(Be.background.uniforms),vertexShader:Be.background.vertexShader,fragmentShader:Be.background.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=g.colorSpace!==Ot,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||d!==g.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=g,d=g.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,u){p.getRGB(qi,go(i)),n.buffers.color.setClear(qi.r,qi.g,qi.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),c=u,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:x}}function Yu(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null);let l=c,h=!1;function f(k,J,st,W,B){let ut=!1;if(a){const it=_(W,st,J);l!==it&&(l=it,m(l.object)),ut=u(k,W,st,B),ut&&R(k,W,st,B)}else{const it=J.wireframe===!0;(l.geometry!==W.id||l.program!==st.id||l.wireframe!==it)&&(l.geometry=W.id,l.program=st.id,l.wireframe=it,ut=!0)}B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,z(k,J,st,W),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(k){return n.isWebGL2?i.bindVertexArray(k):s.bindVertexArrayOES(k)}function x(k){return n.isWebGL2?i.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function _(k,J,st){const W=st.wireframe===!0;let B=o[k.id];B===void 0&&(B={},o[k.id]=B);let ut=B[J.id];ut===void 0&&(ut={},B[J.id]=ut);let it=ut[W];return it===void 0&&(it=p(d()),ut[W]=it),it}function p(k){const J=[],st=[],W=[];for(let B=0;B<r;B++)J[B]=0,st[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:st,attributeDivisors:W,object:k,attributes:{},index:null}}function u(k,J,st,W){const B=l.attributes,ut=J.attributes;let it=0;const Y=st.getAttributes();for(const tt in Y)if(Y[tt].location>=0){const F=B[tt];let L=ut[tt];if(L===void 0&&(tt==="instanceMatrix"&&k.instanceMatrix&&(L=k.instanceMatrix),tt==="instanceColor"&&k.instanceColor&&(L=k.instanceColor)),F===void 0||F.attribute!==L||L&&F.data!==L.data)return!0;it++}return l.attributesNum!==it||l.index!==W}function R(k,J,st,W){const B={},ut=J.attributes;let it=0;const Y=st.getAttributes();for(const tt in Y)if(Y[tt].location>=0){let F=ut[tt];F===void 0&&(tt==="instanceMatrix"&&k.instanceMatrix&&(F=k.instanceMatrix),tt==="instanceColor"&&k.instanceColor&&(F=k.instanceColor));const L={};L.attribute=F,F&&F.data&&(L.data=F.data),B[tt]=L,it++}l.attributes=B,l.attributesNum=it,l.index=W}function g(){const k=l.newAttributes;for(let J=0,st=k.length;J<st;J++)k[J]=0}function v(k){C(k,0)}function C(k,J){const st=l.newAttributes,W=l.enabledAttributes,B=l.attributeDivisors;st[k]=1,W[k]===0&&(i.enableVertexAttribArray(k),W[k]=1),B[k]!==J&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,J),B[k]=J)}function D(){const k=l.newAttributes,J=l.enabledAttributes;for(let st=0,W=J.length;st<W;st++)J[st]!==k[st]&&(i.disableVertexAttribArray(st),J[st]=0)}function U(k,J,st,W,B,ut,it){it===!0?i.vertexAttribIPointer(k,J,st,B,ut):i.vertexAttribPointer(k,J,st,W,B,ut)}function z(k,J,st,W){if(n.isWebGL2===!1&&(k.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const B=W.attributes,ut=st.getAttributes(),it=J.defaultAttributeValues;for(const Y in ut){const tt=ut[Y];if(tt.location>=0){let Mt=B[Y];if(Mt===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(Mt=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(Mt=k.instanceColor)),Mt!==void 0){const F=Mt.normalized,L=Mt.itemSize,E=e.get(Mt);if(E===void 0)continue;const y=E.buffer,Z=E.type,ft=E.bytesPerElement,K=n.isWebGL2===!0&&(Z===i.INT||Z===i.UNSIGNED_INT||Mt.gpuType===$a);if(Mt.isInterleavedBufferAttribute){const ct=Mt.data,T=ct.stride,$=Mt.offset;if(ct.isInstancedInterleavedBuffer){for(let N=0;N<tt.locationSize;N++)C(tt.location+N,ct.meshPerAttribute);k.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let N=0;N<tt.locationSize;N++)v(tt.location+N);i.bindBuffer(i.ARRAY_BUFFER,y);for(let N=0;N<tt.locationSize;N++)U(tt.location+N,L/tt.locationSize,Z,F,T*ft,($+L/tt.locationSize*N)*ft,K)}else{if(Mt.isInstancedBufferAttribute){for(let ct=0;ct<tt.locationSize;ct++)C(tt.location+ct,Mt.meshPerAttribute);k.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ct=0;ct<tt.locationSize;ct++)v(tt.location+ct);i.bindBuffer(i.ARRAY_BUFFER,y);for(let ct=0;ct<tt.locationSize;ct++)U(tt.location+ct,L/tt.locationSize,Z,F,L*ft,L/tt.locationSize*ct*ft,K)}}else if(it!==void 0){const F=it[Y];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(tt.location,F);break;case 3:i.vertexAttrib3fv(tt.location,F);break;case 4:i.vertexAttrib4fv(tt.location,F);break;default:i.vertexAttrib1fv(tt.location,F)}}}}D()}function M(){Q();for(const k in o){const J=o[k];for(const st in J){const W=J[st];for(const B in W)x(W[B].object),delete W[B];delete J[st]}delete o[k]}}function b(k){if(o[k.id]===void 0)return;const J=o[k.id];for(const st in J){const W=J[st];for(const B in W)x(W[B].object),delete W[B];delete J[st]}delete o[k.id]}function rt(k){for(const J in o){const st=o[J];if(st[k.id]===void 0)continue;const W=st[k.id];for(const B in W)x(W[B].object),delete W[B];delete st[k.id]}}function Q(){V(),h=!0,l!==c&&(l=c,m(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:V,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:rt,initAttributes:g,enableAttribute:v,disableUnusedAttributes:D}}function Zu(i,t,e,n){const r=n.isWebGL2;let s;function a(l){s=l}function o(l,h){i.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,f){if(f===0)return;let d,m;if(r)d=i,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,h,f),e.update(h,s,f)}this.setMode=a,this.render=o,this.renderInstances=c}function ju(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,v=a||t.has("OES_texture_float"),C=g&&v,D=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:R,vertexTextures:g,floatFragmentTextures:v,floatVertexTextures:C,maxSamples:D}}function Ju(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new vn,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!r||x===null||x.length===0||s&&!p)s?h(null):l();else{const R=s?0:n,g=R*4;let v=u.clippingState||null;c.value=v,v=h(x,d,g,m);for(let C=0;C!==g;++C)v[C]=e[C];u.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,m,x){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=c.value,x!==!0||p===null){const u=m+_*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,v=m;g!==_;++g,v+=4)a.copy(f[g]).applyMatrix4(R,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Ku(i){let t=new WeakMap;function e(a,o){return o===Zr?a.mapping=Qn:o===jr&&(a.mapping=ti),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Zr||o===jr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new uc(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Mo extends _o{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zn=4,ga=[.125,.215,.35,.446,.526,.582],Sn=20,Br=new Mo,_a=new Xt;let zr=null;const Mn=(1+Math.sqrt(5))/2,qn=1/Mn,xa=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Mn,qn),new G(0,Mn,-qn),new G(qn,0,Mn),new G(-qn,0,Mn),new G(Mn,qn,0),new G(-Mn,qn,0)];class va{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){zr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zr),t.scissorTest=!1,Yi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qn||t.mapping===ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:_i,format:Ie,colorSpace:Ge,depthBuffer:!1},r=Ma(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ma(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$u(s)),this._blurMaterial=Qu(s,t,e)}return r}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,Br)}_sceneToCubeUV(t,e,n,r){const o=new Te(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(_a),h.toneMapping=$e,h.autoClear=!1;const m=new os({name:"PMREM.Background",side:ge,depthWrite:!1,depthTest:!1}),x=new Ne(new Ti,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(_a),_=!0);for(let u=0;u<6;u++){const R=u%3;R===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):R===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const g=this._cubeSize;Yi(r,R*g,u>2?g:0,g,g),h.setRenderTarget(r),_&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Qn||t.mapping===ti;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sa());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Yi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Br)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xa[(r-1)%xa.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ne(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Sn-1),_=s/x,p=isFinite(s)?1+Math.floor(h*_):Sn;p>Sn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Sn}`);const u=[];let R=0;for(let U=0;U<Sn;++U){const z=U/_,M=Math.exp(-z*z/2);u.push(M),U===0?R+=M:U<p&&(R+=2*M)}for(let U=0;U<u.length;U++)u[U]=u[U]/R;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:g}=this;d.dTheta.value=x,d.mipInt.value=g-n;const v=this._sizeLods[r],C=3*v*(r>g-Zn?r-g+Zn:0),D=4*(this._cubeSize-v);Yi(e,C,D,3*v,2*v),c.setRenderTarget(e),c.render(f,Br)}}function $u(i){const t=[],e=[],n=[];let r=i;const s=i-Zn+1+ga.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Zn?c=ga[a-i+Zn-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,x=6,_=3,p=2,u=1,R=new Float32Array(_*x*m),g=new Float32Array(p*x*m),v=new Float32Array(u*x*m);for(let D=0;D<m;D++){const U=D%3*2/3-1,z=D>2?0:-1,M=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];R.set(M,_*x*D),g.set(d,p*x*D);const b=[D,D,D,D,D,D];v.set(b,u*x*D)}const C=new tn;C.setAttribute("position",new ze(R,_)),C.setAttribute("uv",new ze(g,p)),C.setAttribute("faceIndex",new ze(v,u)),t.push(C),r>Zn&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ma(i,t,e){const n=new Rn(i,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Qu(i,t,e){const n=new Float32Array(Sn),r=new G(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hs(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Sa(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hs(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function ya(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function hs(){return`

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
	`}function tf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Zr||c===jr,h=c===Qn||c===ti;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new va(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||h&&f&&r(f)){e===null&&(e=new va(i));const d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ef(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function nf(i,t,e,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);for(const x in d.morphAttributes){const _=d.morphAttributes[x];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const x in d)t.update(d[x],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const _=m[x];for(let p=0,u=_.length;p<u;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,x=f.attributes.position;let _=0;if(m!==null){const R=m.array;_=m.version;for(let g=0,v=R.length;g<v;g+=3){const C=R[g+0],D=R[g+1],U=R[g+2];d.push(C,D,D,U,U,C)}}else{const R=x.array;_=x.version;for(let g=0,v=R.length/3-1;g<v;g+=3){const C=g+0,D=g+1,U=g+2;d.push(C,D,D,U,U,C)}}const p=new(oo(d)?mo:po)(d,1);p.version=_;const u=s.get(f);u&&t.remove(u),s.set(f,p)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function rf(i,t,e,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,m){i.drawElements(s,m,o,d*c),e.update(m,s,1)}function f(d,m,x){if(x===0)return;let _,p;if(r)_=i,p="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,d*c,x),e.update(m,s,x)}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=f}function sf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function af(i,t){return i[0]-t[0]}function of(i,t){return Math.abs(t[1])-Math.abs(i[1])}function lf(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,a=new le,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,f){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let J=function(){V.dispose(),s.delete(h),h.removeEventListener("dispose",J)};var m=J;p!==void 0&&p.texture.dispose();const g=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),C===!0&&(M=3);let b=h.attributes.position.count*M,rt=1;b>t.maxTextureSize&&(rt=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const Q=new Float32Array(b*rt*4*_),V=new ho(Q,b,rt,_);V.type=ln,V.needsUpdate=!0;const k=M*4;for(let st=0;st<_;st++){const W=D[st],B=U[st],ut=z[st],it=b*rt*4*st;for(let Y=0;Y<W.count;Y++){const tt=Y*k;g===!0&&(a.fromBufferAttribute(W,Y),Q[it+tt+0]=a.x,Q[it+tt+1]=a.y,Q[it+tt+2]=a.z,Q[it+tt+3]=0),v===!0&&(a.fromBufferAttribute(B,Y),Q[it+tt+4]=a.x,Q[it+tt+5]=a.y,Q[it+tt+6]=a.z,Q[it+tt+7]=0),C===!0&&(a.fromBufferAttribute(ut,Y),Q[it+tt+8]=a.x,Q[it+tt+9]=a.y,Q[it+tt+10]=a.z,Q[it+tt+11]=ut.itemSize===4?a.w:1)}}p={count:_,texture:V,size:new dt(b,rt)},s.set(h,p),h.addEventListener("dispose",J)}let u=0;for(let g=0;g<d.length;g++)u+=d[g];const R=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(i,"morphTargetBaseInfluence",R),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==x){_=[];for(let v=0;v<x;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<x;v++){const C=_[v];C[0]=v,C[1]=d[v]}_.sort(of);for(let v=0;v<8;v++)v<x&&_[v][1]?(o[v][0]=_[v][0],o[v][1]=_[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(af);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let R=0;for(let v=0;v<8;v++){const C=o[v],D=C[0],U=C[1];D!==Number.MAX_SAFE_INTEGER&&U?(p&&h.getAttribute("morphTarget"+v)!==p[D]&&h.setAttribute("morphTarget"+v,p[D]),u&&h.getAttribute("morphNormal"+v)!==u[D]&&h.setAttribute("morphNormal"+v,u[D]),r[v]=U,R+=U):(p&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),u&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),r[v]=0)}const g=h.morphTargetsRelative?1:1-R;f.getUniforms().setValue(i,"morphTargetBaseInfluence",g),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function cf(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const So=new Se,yo=new ho,Eo=new Zl,To=new xo,Ea=[],Ta=[],Aa=new Float32Array(16),ba=new Float32Array(9),wa=new Float32Array(4);function si(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ea[r];if(s===void 0&&(s=new Float32Array(r),Ea[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function rr(i,t){let e=Ta[t];e===void 0&&(e=new Int32Array(t),Ta[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;i.uniform2fv(this.addr,t),re(e,t)}}function ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ie(e,t))return;i.uniform3fv(this.addr,t),re(e,t)}}function df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;i.uniform4fv(this.addr,t),re(e,t)}}function pf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),re(e,t)}else{if(ie(e,n))return;wa.set(n),i.uniformMatrix2fv(this.addr,!1,wa),re(e,n)}}function mf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),re(e,t)}else{if(ie(e,n))return;ba.set(n),i.uniformMatrix3fv(this.addr,!1,ba),re(e,n)}}function gf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),re(e,t)}else{if(ie(e,n))return;Aa.set(n),i.uniformMatrix4fv(this.addr,!1,Aa),re(e,n)}}function _f(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;i.uniform2iv(this.addr,t),re(e,t)}}function vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ie(e,t))return;i.uniform3iv(this.addr,t),re(e,t)}}function Mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;i.uniform4iv(this.addr,t),re(e,t)}}function Sf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;i.uniform2uiv(this.addr,t),re(e,t)}}function Ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ie(e,t))return;i.uniform3uiv(this.addr,t),re(e,t)}}function Tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;i.uniform4uiv(this.addr,t),re(e,t)}}function Af(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2D(t||So,r)}function bf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Eo,r)}function wf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||To,r)}function Rf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||yo,r)}function Cf(i){switch(i){case 5126:return hf;case 35664:return uf;case 35665:return ff;case 35666:return df;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return _f;case 35667:case 35671:return xf;case 35668:case 35672:return vf;case 35669:case 35673:return Mf;case 5125:return Sf;case 36294:return yf;case 36295:return Ef;case 36296:return Tf;case 35678:case 36198:case 36298:case 36306:case 35682:return Af;case 35679:case 36299:case 36307:return bf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Rf}}function Pf(i,t){i.uniform1fv(this.addr,t)}function Lf(i,t){const e=si(t,this.size,2);i.uniform2fv(this.addr,e)}function Uf(i,t){const e=si(t,this.size,3);i.uniform3fv(this.addr,e)}function Df(i,t){const e=si(t,this.size,4);i.uniform4fv(this.addr,e)}function If(i,t){const e=si(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Nf(i,t){const e=si(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ff(i,t){const e=si(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Of(i,t){i.uniform1iv(this.addr,t)}function Bf(i,t){i.uniform2iv(this.addr,t)}function zf(i,t){i.uniform3iv(this.addr,t)}function Gf(i,t){i.uniform4iv(this.addr,t)}function Hf(i,t){i.uniform1uiv(this.addr,t)}function Vf(i,t){i.uniform2uiv(this.addr,t)}function kf(i,t){i.uniform3uiv(this.addr,t)}function Wf(i,t){i.uniform4uiv(this.addr,t)}function Xf(i,t,e){const n=this.cache,r=t.length,s=rr(e,r);ie(n,s)||(i.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||So,s[a])}function qf(i,t,e){const n=this.cache,r=t.length,s=rr(e,r);ie(n,s)||(i.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Eo,s[a])}function Yf(i,t,e){const n=this.cache,r=t.length,s=rr(e,r);ie(n,s)||(i.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||To,s[a])}function Zf(i,t,e){const n=this.cache,r=t.length,s=rr(e,r);ie(n,s)||(i.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||yo,s[a])}function jf(i){switch(i){case 5126:return Pf;case 35664:return Lf;case 35665:return Uf;case 35666:return Df;case 35674:return If;case 35675:return Nf;case 35676:return Ff;case 5124:case 35670:return Of;case 35667:case 35671:return Bf;case 35668:case 35672:return zf;case 35669:case 35673:return Gf;case 5125:return Hf;case 36294:return Vf;case 36295:return kf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return Zf}}class Jf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Cf(e.type)}}class Kf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=jf(e.type)}}class $f{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Gr=/(\w+)(\])?(\[|\.)?/g;function Ra(i,t){i.seq.push(t),i.map[t.id]=t}function Qf(i,t,e){const n=i.name,r=n.length;for(Gr.lastIndex=0;;){const s=Gr.exec(n),a=Gr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ra(e,l===void 0?new Jf(o,i,t):new Kf(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new $f(o),Ra(e,f)),e=f}}}class $i{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Qf(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Ca(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let td=0;function ed(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function nd(i){switch(i){case Ge:return["Linear","( value )"];case Ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Pa(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+ed(i.getShaderSource(t),a)}else return r}function id(i,t){const e=nd(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function rd(i,t){let e;switch(t){case fl:e="Linear";break;case dl:e="Reinhard";break;case pl:e="OptimizedCineon";break;case ml:e="ACESFilmic";break;case gl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function sd(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ui).join(`
`)}function ad(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function od(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ui(i){return i!==""}function La(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ua(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ld=/^[ \t]*#include +<([\w\d./]+)>/gm;function es(i){return i.replace(ld,hd)}const cd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hd(i,t){let e=zt[t];if(e===void 0){const n=cd.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return es(e)}const ud=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Da(i){return i.replace(ud,fd)}function fd(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ia(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dd(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ya?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Je&&(t="SHADOWMAP_TYPE_VSM"),t}function pd(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qn:case ti:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function md(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ti:t="ENVMAP_MODE_REFRACTION";break}return t}function gd(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ja:t="ENVMAP_BLENDING_MULTIPLY";break;case hl:t="ENVMAP_BLENDING_MIX";break;case ul:t="ENVMAP_BLENDING_ADD";break}return t}function _d(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xd(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=dd(e),l=pd(e),h=md(e),f=gd(e),d=_d(e),m=e.isWebGL2?"":sd(e),x=ad(s),_=r.createProgram();let p,u,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ui).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ui).join(`
`),u.length>0&&(u+=`
`)):(p=[Ia(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ui).join(`
`),u=[m,Ia(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$e?"#define TONE_MAPPING":"",e.toneMapping!==$e?zt.tonemapping_pars_fragment:"",e.toneMapping!==$e?rd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,id("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ui).join(`
`)),a=es(a),a=La(a,e),a=Ua(a,e),o=es(o),o=La(o,e),o=Ua(o,e),a=Da(a),o=Da(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Qs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=R+p+a,v=R+u+o,C=Ca(r,r.VERTEX_SHADER,g),D=Ca(r,r.FRAGMENT_SHADER,v);if(r.attachShader(_,C),r.attachShader(_,D),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),b=r.getShaderInfoLog(C).trim(),rt=r.getShaderInfoLog(D).trim();let Q=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,D);else{const k=Pa(r,C,"vertex"),J=Pa(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+k+`
`+J)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(b===""||rt==="")&&(V=!1);V&&(this.diagnostics={runnable:Q,programLog:M,vertexShader:{log:b,prefix:p},fragmentShader:{log:rt,prefix:u}})}r.deleteShader(C),r.deleteShader(D);let U;this.getUniforms=function(){return U===void 0&&(U=new $i(r,_)),U};let z;return this.getAttributes=function(){return z===void 0&&(z=od(r,_)),z},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=td++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=D,this}let vd=0;class Md{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sd(t),e.set(t,n)),n}}class Sd{constructor(t){this.id=vd++,this.code=t,this.usedTimes=0}}function yd(i,t,e,n,r,s,a){const o=new uo,c=new Md,l=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,b,rt,Q,V){const k=Q.fog,J=V.geometry,st=M.isMeshStandardMaterial?Q.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||st),B=W&&W.mapping===nr?W.image.height:null,ut=x[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const it=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Y=it!==void 0?it.length:0;let tt=0;J.morphAttributes.position!==void 0&&(tt=1),J.morphAttributes.normal!==void 0&&(tt=2),J.morphAttributes.color!==void 0&&(tt=3);let Mt,F,L,E;if(ut){const Fe=Be[ut];Mt=Fe.vertexShader,F=Fe.fragmentShader}else Mt=M.vertexShader,F=M.fragmentShader,c.update(M),L=c.getVertexShaderID(M),E=c.getFragmentShaderID(M);const y=i.getRenderTarget(),Z=V.isInstancedMesh===!0,ft=!!M.map,K=!!M.matcap,ct=!!W,T=!!M.aoMap,$=!!M.lightMap,N=!!M.bumpMap,H=!!M.normalMap,X=!!M.displacementMap,ht=!!M.emissiveMap,I=!!M.metalnessMap,A=!!M.roughnessMap,pt=M.anisotropy>0,Tt=M.clearcoat>0,Vt=M.iridescence>0,P=M.sheen>0,S=M.transmission>0,et=pt&&!!M.anisotropyMap,mt=Tt&&!!M.clearcoatMap,gt=Tt&&!!M.clearcoatNormalMap,xt=Tt&&!!M.clearcoatRoughnessMap,bt=Vt&&!!M.iridescenceMap,vt=Vt&&!!M.iridescenceThicknessMap,at=P&&!!M.sheenColorMap,Ct=P&&!!M.sheenRoughnessMap,Pt=!!M.specularMap,Lt=!!M.specularColorMap,wt=!!M.specularIntensityMap,Rt=S&&!!M.transmissionMap,Gt=S&&!!M.thicknessMap,qt=!!M.gradientMap,O=!!M.alphaMap,yt=M.alphaTest>0,nt=!!M.alphaHash,_t=!!M.extensions,Et=!!J.attributes.uv1,Wt=!!J.attributes.uv2,Yt=!!J.attributes.uv3;return{isWebGL2:h,shaderID:ut,shaderType:M.type,shaderName:M.name,vertexShader:Mt,fragmentShader:F,defines:M.defines,customVertexShaderID:L,customFragmentShaderID:E,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Z,instancingColor:Z&&V.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:y===null?i.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Ge,map:ft,matcap:K,envMap:ct,envMapMode:ct&&W.mapping,envMapCubeUVHeight:B,aoMap:T,lightMap:$,bumpMap:N,normalMap:H,displacementMap:d&&X,emissiveMap:ht,normalMapObjectSpace:H&&M.normalMapType===Cl,normalMapTangentSpace:H&&M.normalMapType===so,metalnessMap:I,roughnessMap:A,anisotropy:pt,anisotropyMap:et,clearcoat:Tt,clearcoatMap:mt,clearcoatNormalMap:gt,clearcoatRoughnessMap:xt,iridescence:Vt,iridescenceMap:bt,iridescenceThicknessMap:vt,sheen:P,sheenColorMap:at,sheenRoughnessMap:Ct,specularMap:Pt,specularColorMap:Lt,specularIntensityMap:wt,transmission:S,transmissionMap:Rt,thicknessMap:Gt,gradientMap:qt,opaque:M.transparent===!1&&M.blending===Jn,alphaMap:O,alphaTest:yt,alphaHash:nt,combine:M.combine,mapUv:ft&&_(M.map.channel),aoMapUv:T&&_(M.aoMap.channel),lightMapUv:$&&_(M.lightMap.channel),bumpMapUv:N&&_(M.bumpMap.channel),normalMapUv:H&&_(M.normalMap.channel),displacementMapUv:X&&_(M.displacementMap.channel),emissiveMapUv:ht&&_(M.emissiveMap.channel),metalnessMapUv:I&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:et&&_(M.anisotropyMap.channel),clearcoatMapUv:mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:gt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:at&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(M.sheenRoughnessMap.channel),specularMapUv:Pt&&_(M.specularMap.channel),specularColorMapUv:Lt&&_(M.specularColorMap.channel),specularIntensityMapUv:wt&&_(M.specularIntensityMap.channel),transmissionMapUv:Rt&&_(M.transmissionMap.channel),thicknessMapUv:Gt&&_(M.thicknessMap.channel),alphaMapUv:O&&_(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(H||pt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:Wt,vertexUv3s:Yt,pointsUvs:V.isPoints===!0&&!!J.attributes.uv&&(ft||O),fog:!!k,useFog:M.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:tt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&rt.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:$e,useLegacyLights:i.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ue,flipSided:M.side===ge,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:_t&&M.extensions.derivatives===!0,extensionFragDepth:_t&&M.extensions.fragDepth===!0,extensionDrawBuffers:_t&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const rt in M.defines)b.push(rt),b.push(M.defines[rt]);return M.isRawShaderMaterial===!1&&(R(b,M),g(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function R(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function g(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),M.push(o.mask)}function v(M){const b=x[M.type];let rt;if(b){const Q=Be[b];rt=oc.clone(Q.uniforms)}else rt=M.uniforms;return rt}function C(M,b){let rt;for(let Q=0,V=l.length;Q<V;Q++){const k=l[Q];if(k.cacheKey===b){rt=k,++rt.usedTimes;break}}return rt===void 0&&(rt=new xd(i,b,M,s),l.push(rt)),rt}function D(M){if(--M.usedTimes===0){const b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function U(M){c.remove(M)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:v,acquireProgram:C,releaseProgram:D,releaseShaderCache:U,programs:l,dispose:z}}function Ed(){let i=new WeakMap;function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function e(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Td(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Na(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fa(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,d,m,x,_,p){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:_,group:p},i[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=_,u.group=p),t++,u}function o(f,d,m,x,_,p){const u=a(f,d,m,x,_,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):e.push(u)}function c(f,d,m,x,_,p){const u=a(f,d,m,x,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):e.unshift(u)}function l(f,d){e.length>1&&e.sort(f||Td),n.length>1&&n.sort(d||Na),r.length>1&&r.sort(d||Na)}function h(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function Ad(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Fa,i.set(n,[a])):r>=s.length?(a=new Fa,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function bd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Xt};break;case"SpotLight":e={position:new G,direction:new G,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function wd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Rd=0;function Cd(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Pd(i,t){const e=new bd,n=wd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new G);const s=new G,a=new ee,o=new ee;function c(h,f){let d=0,m=0,x=0;for(let rt=0;rt<9;rt++)r.probe[rt].set(0,0,0);let _=0,p=0,u=0,R=0,g=0,v=0,C=0,D=0,U=0,z=0;h.sort(Cd);const M=f===!0?Math.PI:1;for(let rt=0,Q=h.length;rt<Q;rt++){const V=h[rt],k=V.color,J=V.intensity,st=V.distance,W=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)d+=k.r*J*M,m+=k.g*J*M,x+=k.b*J*M;else if(V.isLightProbe)for(let B=0;B<9;B++)r.probe[B].addScaledVector(V.sh.coefficients[B],J);else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity*M),V.castShadow){const ut=V.shadow,it=n.get(V);it.shadowBias=ut.bias,it.shadowNormalBias=ut.normalBias,it.shadowRadius=ut.radius,it.shadowMapSize=ut.mapSize,r.directionalShadow[_]=it,r.directionalShadowMap[_]=W,r.directionalShadowMatrix[_]=V.shadow.matrix,v++}r.directional[_]=B,_++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(k).multiplyScalar(J*M),B.distance=st,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,r.spot[u]=B;const ut=V.shadow;if(V.map&&(r.spotLightMap[U]=V.map,U++,ut.updateMatrices(V),V.castShadow&&z++),r.spotLightMatrix[u]=ut.matrix,V.castShadow){const it=n.get(V);it.shadowBias=ut.bias,it.shadowNormalBias=ut.normalBias,it.shadowRadius=ut.radius,it.shadowMapSize=ut.mapSize,r.spotShadow[u]=it,r.spotShadowMap[u]=W,D++}u++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(k).multiplyScalar(J),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),r.rectArea[R]=B,R++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity*M),B.distance=V.distance,B.decay=V.decay,V.castShadow){const ut=V.shadow,it=n.get(V);it.shadowBias=ut.bias,it.shadowNormalBias=ut.normalBias,it.shadowRadius=ut.radius,it.shadowMapSize=ut.mapSize,it.shadowCameraNear=ut.camera.near,it.shadowCameraFar=ut.camera.far,r.pointShadow[p]=it,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=V.shadow.matrix,C++}r.point[p]=B,p++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(J*M),B.groundColor.copy(V.groundColor).multiplyScalar(J*M),r.hemi[g]=B,g++}}R>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=St.LTC_FLOAT_1,r.rectAreaLTC2=St.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=St.LTC_HALF_1,r.rectAreaLTC2=St.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const b=r.hash;(b.directionalLength!==_||b.pointLength!==p||b.spotLength!==u||b.rectAreaLength!==R||b.hemiLength!==g||b.numDirectionalShadows!==v||b.numPointShadows!==C||b.numSpotShadows!==D||b.numSpotMaps!==U)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=R,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=D+U-z,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=z,b.directionalLength=_,b.pointLength=p,b.spotLength=u,b.rectAreaLength=R,b.hemiLength=g,b.numDirectionalShadows=v,b.numPointShadows=C,b.numSpotShadows=D,b.numSpotMaps=U,r.version=Rd++)}function l(h,f){let d=0,m=0,x=0,_=0,p=0;const u=f.matrixWorldInverse;for(let R=0,g=h.length;R<g;R++){const v=h[R];if(v.isDirectionalLight){const C=r.directional[d];C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),d++}else if(v.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),x++}else if(v.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(u),o.identity(),a.copy(v.matrixWorld),a.premultiply(u),o.extractRotation(a),C.halfWidth.set(v.width*.5,0,0),C.halfHeight.set(0,v.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(u),m++}else if(v.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:r}}function Oa(i,t){const e=new Pd(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Ld(i,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let c;return o===void 0?(c=new Oa(i,t),e.set(s,[c])):a>=o.length?(c=new Oa(i,t),o.push(c)):c=o[a],c}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ud extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dd extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Id=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nd=`uniform sampler2D shadow_pass;
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
}`;function Fd(i,t,e){let n=new ls;const r=new dt,s=new dt,a=new le,o=new Ud({depthPacking:Rl}),c=new Dd,l={},h=e.maxTextureSize,f={[Qe]:ge,[ge]:Qe,[Ue]:Ue},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Id,fragmentShader:Nd}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new tn;x.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ne(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let u=this.type;this.render=function(C,D,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const z=i.getRenderTarget(),M=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),rt=i.state;rt.setBlending(cn),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const Q=u!==Je&&this.type===Je,V=u===Je&&this.type!==Je;for(let k=0,J=C.length;k<J;k++){const st=C[k],W=st.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const B=W.getFrameExtents();if(r.multiply(B),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/B.x),r.x=s.x*B.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/B.y),r.y=s.y*B.y,W.mapSize.y=s.y)),W.map===null||Q===!0||V===!0){const it=this.type!==Je?{minFilter:me,magFilter:me}:{};W.map!==null&&W.map.dispose(),W.map=new Rn(r.x,r.y,it),W.map.texture.name=st.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ut=W.getViewportCount();for(let it=0;it<ut;it++){const Y=W.getViewport(it);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),rt.viewport(a),W.updateMatrices(st,it),n=W.getFrustum(),v(D,U,W.camera,st,this.type)}W.isPointLightShadow!==!0&&this.type===Je&&R(W,U),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(z,M,b)};function R(C,D){const U=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Rn(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(D,null,U,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(D,null,U,m,_,null)}function g(C,D,U,z){let M=null;const b=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)M=b;else if(M=U.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const rt=M.uuid,Q=D.uuid;let V=l[rt];V===void 0&&(V={},l[rt]=V);let k=V[Q];k===void 0&&(k=M.clone(),V[Q]=k),M=k}if(M.visible=D.visible,M.wireframe=D.wireframe,z===Je?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:f[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const rt=i.properties.get(M);rt.light=U}return M}function v(C,D,U,z,M){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Je)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const Q=t.update(C),V=C.material;if(Array.isArray(V)){const k=Q.groups;for(let J=0,st=k.length;J<st;J++){const W=k[J],B=V[W.materialIndex];if(B&&B.visible){const ut=g(C,B,z,M);i.renderBufferDirect(U,null,Q,ut,C,W)}}}else if(V.visible){const k=g(C,V,z,M);i.renderBufferDirect(U,null,Q,k,C,null)}}const rt=C.children;for(let Q=0,V=rt.length;Q<V;Q++)v(rt[Q],D,U,z,M)}}function Od(i,t,e){const n=e.isWebGL2;function r(){let O=!1;const yt=new le;let nt=null;const _t=new le(0,0,0,0);return{setMask:function(Et){nt!==Et&&!O&&(i.colorMask(Et,Et,Et,Et),nt=Et)},setLocked:function(Et){O=Et},setClear:function(Et,Wt,Yt,se,Fe){Fe===!0&&(Et*=se,Wt*=se,Yt*=se),yt.set(Et,Wt,Yt,se),_t.equals(yt)===!1&&(i.clearColor(Et,Wt,Yt,se),_t.copy(yt))},reset:function(){O=!1,nt=null,_t.set(-1,0,0,0)}}}function s(){let O=!1,yt=null,nt=null,_t=null;return{setTest:function(Et){Et?y(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(Et){yt!==Et&&!O&&(i.depthMask(Et),yt=Et)},setFunc:function(Et){if(nt!==Et){switch(Et){case il:i.depthFunc(i.NEVER);break;case rl:i.depthFunc(i.ALWAYS);break;case sl:i.depthFunc(i.LESS);break;case Yr:i.depthFunc(i.LEQUAL);break;case al:i.depthFunc(i.EQUAL);break;case ol:i.depthFunc(i.GEQUAL);break;case ll:i.depthFunc(i.GREATER);break;case cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=Et}},setLocked:function(Et){O=Et},setClear:function(Et){_t!==Et&&(i.clearDepth(Et),_t=Et)},reset:function(){O=!1,yt=null,nt=null,_t=null}}}function a(){let O=!1,yt=null,nt=null,_t=null,Et=null,Wt=null,Yt=null,se=null,Fe=null;return{setTest:function(jt){O||(jt?y(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(jt){yt!==jt&&!O&&(i.stencilMask(jt),yt=jt)},setFunc:function(jt,Oe,fe){(nt!==jt||_t!==Oe||Et!==fe)&&(i.stencilFunc(jt,Oe,fe),nt=jt,_t=Oe,Et=fe)},setOp:function(jt,Oe,fe){(Wt!==jt||Yt!==Oe||se!==fe)&&(i.stencilOp(jt,Oe,fe),Wt=jt,Yt=Oe,se=fe)},setLocked:function(jt){O=jt},setClear:function(jt){Fe!==jt&&(i.clearStencil(jt),Fe=jt)},reset:function(){O=!1,yt=null,nt=null,_t=null,Et=null,Wt=null,Yt=null,se=null,Fe=null}}}const o=new r,c=new s,l=new a,h=new WeakMap,f=new WeakMap;let d={},m={},x=new WeakMap,_=[],p=null,u=!1,R=null,g=null,v=null,C=null,D=null,U=null,z=null,M=!1,b=null,rt=null,Q=null,V=null,k=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let st=!1,W=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),st=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),st=W>=2);let ut=null,it={};const Y=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),Mt=new le().fromArray(Y),F=new le().fromArray(tt);function L(O,yt,nt,_t){const Et=new Uint8Array(4),Wt=i.createTexture();i.bindTexture(O,Wt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<nt;Yt++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(yt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(yt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Wt}const E={};E[i.TEXTURE_2D]=L(i.TEXTURE_2D,i.TEXTURE_2D,1),E[i.TEXTURE_CUBE_MAP]=L(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(E[i.TEXTURE_2D_ARRAY]=L(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),E[i.TEXTURE_3D]=L(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),y(i.DEPTH_TEST),c.setFunc(Yr),X(!1),ht(ys),y(i.CULL_FACE),N(cn);function y(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function Z(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function ft(O,yt){return m[O]!==yt?(i.bindFramebuffer(O,yt),m[O]=yt,n&&(O===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=yt),O===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=yt)),!0):!1}function K(O,yt){let nt=_,_t=!1;if(O)if(nt=x.get(yt),nt===void 0&&(nt=[],x.set(yt,nt)),O.isWebGLMultipleRenderTargets){const Et=O.texture;if(nt.length!==Et.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Wt=0,Yt=Et.length;Wt<Yt;Wt++)nt[Wt]=i.COLOR_ATTACHMENT0+Wt;nt.length=Et.length,_t=!0}}else nt[0]!==i.COLOR_ATTACHMENT0&&(nt[0]=i.COLOR_ATTACHMENT0,_t=!0);else nt[0]!==i.BACK&&(nt[0]=i.BACK,_t=!0);_t&&(e.isWebGL2?i.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function ct(O){return p!==O?(i.useProgram(O),p=O,!0):!1}const T={[Yn]:i.FUNC_ADD,[qo]:i.FUNC_SUBTRACT,[Yo]:i.FUNC_REVERSE_SUBTRACT};if(n)T[bs]=i.MIN,T[ws]=i.MAX;else{const O=t.get("EXT_blend_minmax");O!==null&&(T[bs]=O.MIN_EXT,T[ws]=O.MAX_EXT)}const $={[Zo]:i.ZERO,[jo]:i.ONE,[Jo]:i.SRC_COLOR,[Za]:i.SRC_ALPHA,[nl]:i.SRC_ALPHA_SATURATE,[tl]:i.DST_COLOR,[$o]:i.DST_ALPHA,[Ko]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[el]:i.ONE_MINUS_DST_COLOR,[Qo]:i.ONE_MINUS_DST_ALPHA};function N(O,yt,nt,_t,Et,Wt,Yt,se){if(O===cn){u===!0&&(Z(i.BLEND),u=!1);return}if(u===!1&&(y(i.BLEND),u=!0),O!==Xo){if(O!==R||se!==M){if((g!==Yn||D!==Yn)&&(i.blendEquation(i.FUNC_ADD),g=Yn,D=Yn),se)switch(O){case Jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Es:i.blendFunc(i.ONE,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case As:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Es:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case As:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,C=null,U=null,z=null,R=O,M=se}return}Et=Et||yt,Wt=Wt||nt,Yt=Yt||_t,(yt!==g||Et!==D)&&(i.blendEquationSeparate(T[yt],T[Et]),g=yt,D=Et),(nt!==v||_t!==C||Wt!==U||Yt!==z)&&(i.blendFuncSeparate($[nt],$[_t],$[Wt],$[Yt]),v=nt,C=_t,U=Wt,z=Yt),R=O,M=!1}function H(O,yt){O.side===Ue?Z(i.CULL_FACE):y(i.CULL_FACE);let nt=O.side===ge;yt&&(nt=!nt),X(nt),O.blending===Jn&&O.transparent===!1?N(cn):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),o.setMask(O.colorWrite);const _t=O.stencilWrite;l.setTest(_t),_t&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),A(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?y(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function ht(O){O!==Vo?(y(i.CULL_FACE),O!==rt&&(O===ys?i.cullFace(i.BACK):O===ko?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),rt=O}function I(O){O!==Q&&(st&&i.lineWidth(O),Q=O)}function A(O,yt,nt){O?(y(i.POLYGON_OFFSET_FILL),(V!==yt||k!==nt)&&(i.polygonOffset(yt,nt),V=yt,k=nt)):Z(i.POLYGON_OFFSET_FILL)}function pt(O){O?y(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function Tt(O){O===void 0&&(O=i.TEXTURE0+J-1),ut!==O&&(i.activeTexture(O),ut=O)}function Vt(O,yt,nt){nt===void 0&&(ut===null?nt=i.TEXTURE0+J-1:nt=ut);let _t=it[nt];_t===void 0&&(_t={type:void 0,texture:void 0},it[nt]=_t),(_t.type!==O||_t.texture!==yt)&&(ut!==nt&&(i.activeTexture(nt),ut=nt),i.bindTexture(O,yt||E[O]),_t.type=O,_t.texture=yt)}function P(){const O=it[ut];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(O){Mt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Mt.copy(O))}function wt(O){F.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),F.copy(O))}function Rt(O,yt){let nt=f.get(yt);nt===void 0&&(nt=new WeakMap,f.set(yt,nt));let _t=nt.get(O);_t===void 0&&(_t=i.getUniformBlockIndex(yt,O.name),nt.set(O,_t))}function Gt(O,yt){const _t=f.get(yt).get(O);h.get(yt)!==_t&&(i.uniformBlockBinding(yt,_t,O.__bindingPointIndex),h.set(yt,_t))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ut=null,it={},m={},x=new WeakMap,_=[],p=null,u=!1,R=null,g=null,v=null,C=null,D=null,U=null,z=null,M=!1,b=null,rt=null,Q=null,V=null,k=null,Mt.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:y,disable:Z,bindFramebuffer:ft,drawBuffers:K,useProgram:ct,setBlending:N,setMaterial:H,setFlipSided:X,setCullFace:ht,setLineWidth:I,setPolygonOffset:A,setScissorTest:pt,activeTexture:Tt,bindTexture:Vt,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:et,texImage2D:Ct,texImage3D:Pt,updateUBOMapping:Rt,uniformBlockBinding:Gt,texStorage2D:vt,texStorage3D:at,texSubImage2D:mt,texSubImage3D:gt,compressedTexSubImage2D:xt,compressedTexSubImage3D:bt,scissor:Lt,viewport:wt,reset:qt}}function Bd(i,t,e,n,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,f=r.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let _;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(P,S){return u?new OffscreenCanvas(P,S):er("canvas")}function g(P,S,et,mt){let gt=1;if((P.width>mt||P.height>mt)&&(gt=mt/Math.max(P.width,P.height)),gt<1||S===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const xt=S?ts:Math.floor,bt=xt(gt*P.width),vt=xt(gt*P.height);_===void 0&&(_=R(bt,vt));const at=et?R(bt,vt):_;return at.width=bt,at.height=vt,at.getContext("2d").drawImage(P,0,0,bt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+bt+"x"+vt+")."),at}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function v(P){return ta(P.width)&&ta(P.height)}function C(P){return o?!1:P.wrapS!==De||P.wrapT!==De||P.minFilter!==me&&P.minFilter!==Ee}function D(P,S){return P.generateMipmaps&&S&&P.minFilter!==me&&P.minFilter!==Ee}function U(P){i.generateMipmap(P)}function z(P,S,et,mt,gt=!1){if(o===!1)return S;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xt=S;return S===i.RED&&(et===i.FLOAT&&(xt=i.R32F),et===i.HALF_FLOAT&&(xt=i.R16F),et===i.UNSIGNED_BYTE&&(xt=i.R8)),S===i.RG&&(et===i.FLOAT&&(xt=i.RG32F),et===i.HALF_FLOAT&&(xt=i.RG16F),et===i.UNSIGNED_BYTE&&(xt=i.RG8)),S===i.RGBA&&(et===i.FLOAT&&(xt=i.RGBA32F),et===i.HALF_FLOAT&&(xt=i.RGBA16F),et===i.UNSIGNED_BYTE&&(xt=mt===Ot&&gt===!1?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT_4_4_4_4&&(xt=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(xt=i.RGB5_A1)),(xt===i.R16F||xt===i.R32F||xt===i.RG16F||xt===i.RG32F||xt===i.RGBA16F||xt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function M(P,S,et){return D(P,et)===!0||P.isFramebufferTexture&&P.minFilter!==me&&P.minFilter!==Ee?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function b(P){return P===me||P===Rs||P===fr?i.NEAREST:i.LINEAR}function rt(P){const S=P.target;S.removeEventListener("dispose",rt),V(S),S.isVideoTexture&&x.delete(S)}function Q(P){const S=P.target;S.removeEventListener("dispose",Q),J(S)}function V(P){const S=n.get(P);if(S.__webglInit===void 0)return;const et=P.source,mt=p.get(et);if(mt){const gt=mt[S.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&k(P),Object.keys(mt).length===0&&p.delete(et)}n.remove(P)}function k(P){const S=n.get(P);i.deleteTexture(S.__webglTexture);const et=P.source,mt=p.get(et);delete mt[S.__cacheKey],a.memory.textures--}function J(P){const S=P.texture,et=n.get(P),mt=n.get(S);if(mt.__webglTexture!==void 0&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++)i.deleteFramebuffer(et.__webglFramebuffer[gt]),et.__webglDepthbuffer&&i.deleteRenderbuffer(et.__webglDepthbuffer[gt]);else{if(i.deleteFramebuffer(et.__webglFramebuffer),et.__webglDepthbuffer&&i.deleteRenderbuffer(et.__webglDepthbuffer),et.__webglMultisampledFramebuffer&&i.deleteFramebuffer(et.__webglMultisampledFramebuffer),et.__webglColorRenderbuffer)for(let gt=0;gt<et.__webglColorRenderbuffer.length;gt++)et.__webglColorRenderbuffer[gt]&&i.deleteRenderbuffer(et.__webglColorRenderbuffer[gt]);et.__webglDepthRenderbuffer&&i.deleteRenderbuffer(et.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let gt=0,xt=S.length;gt<xt;gt++){const bt=n.get(S[gt]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(S[gt])}n.remove(S),n.remove(P)}let st=0;function W(){st=0}function B(){const P=st;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),st+=1,P}function ut(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function it(P,S){const et=n.get(P);if(P.isVideoTexture&&Tt(P),P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){const mt=P.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(et,P,S);return}}e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+S)}function Y(P,S){const et=n.get(P);if(P.version>0&&et.__version!==P.version){ft(et,P,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+S)}function tt(P,S){const et=n.get(P);if(P.version>0&&et.__version!==P.version){ft(et,P,S);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+S)}function Mt(P,S){const et=n.get(P);if(P.version>0&&et.__version!==P.version){K(et,P,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+S)}const F={[Jr]:i.REPEAT,[De]:i.CLAMP_TO_EDGE,[Kr]:i.MIRRORED_REPEAT},L={[me]:i.NEAREST,[Rs]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Ee]:i.LINEAR,[_l]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},E={[Ll]:i.NEVER,[Bl]:i.ALWAYS,[Ul]:i.LESS,[Il]:i.LEQUAL,[Dl]:i.EQUAL,[Ol]:i.GEQUAL,[Nl]:i.GREATER,[Fl]:i.NOTEQUAL};function y(P,S,et){if(et?(i.texParameteri(P,i.TEXTURE_WRAP_S,F[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,F[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,F[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,L[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,L[S.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==De||S.wrapT!==De)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,b(S.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==me&&S.minFilter!==Ee&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,E[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const mt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===me||S.minFilter!==fr&&S.minFilter!==gi||S.type===ln&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===_i&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(P,mt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Z(P,S){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",rt));const mt=S.source;let gt=p.get(mt);gt===void 0&&(gt={},p.set(mt,gt));const xt=ut(S);if(xt!==P.__cacheKey){gt[xt]===void 0&&(gt[xt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,et=!0),gt[xt].usedTimes++;const bt=gt[P.__cacheKey];bt!==void 0&&(gt[P.__cacheKey].usedTimes--,bt.usedTimes===0&&k(S)),P.__cacheKey=xt,P.__webglTexture=gt[xt].texture}return et}function ft(P,S,et){let mt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(mt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(mt=i.TEXTURE_3D);const gt=Z(P,S),xt=S.source;e.bindTexture(mt,P.__webglTexture,i.TEXTURE0+et);const bt=n.get(xt);if(xt.version!==bt.__version||gt===!0){e.activeTexture(i.TEXTURE0+et),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const vt=C(S)&&v(S.image)===!1;let at=g(S.image,vt,!1,h);at=Vt(S,at);const Ct=v(at)||o,Pt=s.convert(S.format,S.colorSpace);let Lt=s.convert(S.type),wt=z(S.internalFormat,Pt,Lt,S.colorSpace);y(mt,S,Ct);let Rt;const Gt=S.mipmaps,qt=o&&S.isVideoTexture!==!0,O=bt.__version===void 0||gt===!0,yt=M(S,at,Ct);if(S.isDepthTexture)wt=i.DEPTH_COMPONENT,o?S.type===ln?wt=i.DEPTH_COMPONENT32F:S.type===on?wt=i.DEPTH_COMPONENT24:S.type===yn?wt=i.DEPTH24_STENCIL8:wt=i.DEPTH_COMPONENT16:S.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===En&&wt===i.DEPTH_COMPONENT&&S.type!==ss&&S.type!==on&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=on,Lt=s.convert(S.type)),S.format===ei&&wt===i.DEPTH_COMPONENT&&(wt=i.DEPTH_STENCIL,S.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=yn,Lt=s.convert(S.type))),O&&(qt?e.texStorage2D(i.TEXTURE_2D,1,wt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,wt,at.width,at.height,0,Pt,Lt,null));else if(S.isDataTexture)if(Gt.length>0&&Ct){qt&&O&&e.texStorage2D(i.TEXTURE_2D,yt,wt,Gt[0].width,Gt[0].height);for(let nt=0,_t=Gt.length;nt<_t;nt++)Rt=Gt[nt],qt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,Pt,Lt,Rt.data):e.texImage2D(i.TEXTURE_2D,nt,wt,Rt.width,Rt.height,0,Pt,Lt,Rt.data);S.generateMipmaps=!1}else qt?(O&&e.texStorage2D(i.TEXTURE_2D,yt,wt,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,Pt,Lt,at.data)):e.texImage2D(i.TEXTURE_2D,0,wt,at.width,at.height,0,Pt,Lt,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&O&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,wt,Gt[0].width,Gt[0].height,at.depth);for(let nt=0,_t=Gt.length;nt<_t;nt++)Rt=Gt[nt],S.format!==Ie?Pt!==null?qt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Rt.width,Rt.height,at.depth,Pt,Rt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,wt,Rt.width,Rt.height,at.depth,0,Rt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Rt.width,Rt.height,at.depth,Pt,Lt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,wt,Rt.width,Rt.height,at.depth,0,Pt,Lt,Rt.data)}else{qt&&O&&e.texStorage2D(i.TEXTURE_2D,yt,wt,Gt[0].width,Gt[0].height);for(let nt=0,_t=Gt.length;nt<_t;nt++)Rt=Gt[nt],S.format!==Ie?Pt!==null?qt?e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,Pt,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,wt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,Pt,Lt,Rt.data):e.texImage2D(i.TEXTURE_2D,nt,wt,Rt.width,Rt.height,0,Pt,Lt,Rt.data)}else if(S.isDataArrayTexture)qt?(O&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,wt,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Pt,Lt,at.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,at.width,at.height,at.depth,0,Pt,Lt,at.data);else if(S.isData3DTexture)qt?(O&&e.texStorage3D(i.TEXTURE_3D,yt,wt,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Pt,Lt,at.data)):e.texImage3D(i.TEXTURE_3D,0,wt,at.width,at.height,at.depth,0,Pt,Lt,at.data);else if(S.isFramebufferTexture){if(O)if(qt)e.texStorage2D(i.TEXTURE_2D,yt,wt,at.width,at.height);else{let nt=at.width,_t=at.height;for(let Et=0;Et<yt;Et++)e.texImage2D(i.TEXTURE_2D,Et,wt,nt,_t,0,Pt,Lt,null),nt>>=1,_t>>=1}}else if(Gt.length>0&&Ct){qt&&O&&e.texStorage2D(i.TEXTURE_2D,yt,wt,Gt[0].width,Gt[0].height);for(let nt=0,_t=Gt.length;nt<_t;nt++)Rt=Gt[nt],qt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Pt,Lt,Rt):e.texImage2D(i.TEXTURE_2D,nt,wt,Pt,Lt,Rt);S.generateMipmaps=!1}else qt?(O&&e.texStorage2D(i.TEXTURE_2D,yt,wt,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Lt,at)):e.texImage2D(i.TEXTURE_2D,0,wt,Pt,Lt,at);D(S,Ct)&&U(mt),bt.__version=xt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function K(P,S,et){if(S.image.length!==6)return;const mt=Z(P,S),gt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+et);const xt=n.get(gt);if(gt.version!==xt.__version||mt===!0){e.activeTexture(i.TEXTURE0+et),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const bt=S.isCompressedTexture||S.image[0].isCompressedTexture,vt=S.image[0]&&S.image[0].isDataTexture,at=[];for(let nt=0;nt<6;nt++)!bt&&!vt?at[nt]=g(S.image[nt],!1,!0,l):at[nt]=vt?S.image[nt].image:S.image[nt],at[nt]=Vt(S,at[nt]);const Ct=at[0],Pt=v(Ct)||o,Lt=s.convert(S.format,S.colorSpace),wt=s.convert(S.type),Rt=z(S.internalFormat,Lt,wt,S.colorSpace),Gt=o&&S.isVideoTexture!==!0,qt=xt.__version===void 0||mt===!0;let O=M(S,Ct,Pt);y(i.TEXTURE_CUBE_MAP,S,Pt);let yt;if(bt){Gt&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,O,Rt,Ct.width,Ct.height);for(let nt=0;nt<6;nt++){yt=at[nt].mipmaps;for(let _t=0;_t<yt.length;_t++){const Et=yt[_t];S.format!==Ie?Lt!==null?Gt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,0,0,Et.width,Et.height,Lt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,Rt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,0,0,Et.width,Et.height,Lt,wt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,Rt,Et.width,Et.height,0,Lt,wt,Et.data)}}}else{yt=S.mipmaps,Gt&&qt&&(yt.length>0&&O++,e.texStorage2D(i.TEXTURE_CUBE_MAP,O,Rt,at[0].width,at[0].height));for(let nt=0;nt<6;nt++)if(vt){Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,at[nt].width,at[nt].height,Lt,wt,at[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Rt,at[nt].width,at[nt].height,0,Lt,wt,at[nt].data);for(let _t=0;_t<yt.length;_t++){const Wt=yt[_t].image[nt].image;Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,0,0,Wt.width,Wt.height,Lt,wt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,Rt,Wt.width,Wt.height,0,Lt,wt,Wt.data)}}else{Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Lt,wt,at[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Rt,Lt,wt,at[nt]);for(let _t=0;_t<yt.length;_t++){const Et=yt[_t];Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,0,0,Lt,wt,Et.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,Rt,Lt,wt,Et.image[nt])}}}D(S,Pt)&&U(i.TEXTURE_CUBE_MAP),xt.__version=gt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ct(P,S,et,mt,gt){const xt=s.convert(et.format,et.colorSpace),bt=s.convert(et.type),vt=z(et.internalFormat,xt,bt,et.colorSpace);n.get(S).__hasExternalTextures||(gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,0,vt,S.width,S.height,S.depth,0,xt,bt,null):e.texImage2D(gt,0,vt,S.width,S.height,0,xt,bt,null)),e.bindFramebuffer(i.FRAMEBUFFER,P),pt(S)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,gt,n.get(et).__webglTexture,0,A(S)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,mt,gt,n.get(et).__webglTexture,0),e.bindFramebuffer(i.FRAMEBUFFER,null)}function T(P,S,et){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer&&!S.stencilBuffer){let mt=i.DEPTH_COMPONENT16;if(et||pt(S)){const gt=S.depthTexture;gt&&gt.isDepthTexture&&(gt.type===ln?mt=i.DEPTH_COMPONENT32F:gt.type===on&&(mt=i.DEPTH_COMPONENT24));const xt=A(S);pt(S)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,mt,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,mt,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,mt,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(S.depthBuffer&&S.stencilBuffer){const mt=A(S);et&&pt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,i.DEPTH24_STENCIL8,S.width,S.height):pt(S)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const mt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let gt=0;gt<mt.length;gt++){const xt=mt[gt],bt=s.convert(xt.format,xt.colorSpace),vt=s.convert(xt.type),at=z(xt.internalFormat,bt,vt,xt.colorSpace),Ct=A(S);et&&pt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,at,S.width,S.height):pt(S)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,at,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,at,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),it(S.depthTexture,0);const mt=n.get(S.depthTexture).__webglTexture,gt=A(S);if(S.depthTexture.format===En)pt(S)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0);else if(S.depthTexture.format===ei)pt(S)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function N(P){const S=n.get(P),et=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");$(S.__webglFramebuffer,P)}else if(et){S.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[mt]),S.__webglDepthbuffer[mt]=i.createRenderbuffer(),T(S.__webglDepthbuffer[mt],P,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),T(S.__webglDepthbuffer,P,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function H(P,S,et){const mt=n.get(P);S!==void 0&&ct(mt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),et!==void 0&&N(P)}function X(P){const S=P.texture,et=n.get(P),mt=n.get(S);P.addEventListener("dispose",Q),P.isWebGLMultipleRenderTargets!==!0&&(mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture()),mt.__version=S.version,a.memory.textures++);const gt=P.isWebGLCubeRenderTarget===!0,xt=P.isWebGLMultipleRenderTargets===!0,bt=v(P)||o;if(gt){et.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)et.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(et.__webglFramebuffer=i.createFramebuffer(),xt)if(r.drawBuffers){const vt=P.texture;for(let at=0,Ct=vt.length;at<Ct;at++){const Pt=n.get(vt[at]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&pt(P)===!1){const vt=xt?S:[S];et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let at=0;at<vt.length;at++){const Ct=vt[at];et.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[at]);const Pt=s.convert(Ct.format,Ct.colorSpace),Lt=s.convert(Ct.type),wt=z(Ct.internalFormat,Pt,Lt,Ct.colorSpace,P.isXRRenderTarget===!0),Rt=A(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,wt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,et.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),T(et.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),y(i.TEXTURE_CUBE_MAP,S,bt);for(let vt=0;vt<6;vt++)ct(et.__webglFramebuffer[vt],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt);D(S,bt)&&U(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){const vt=P.texture;for(let at=0,Ct=vt.length;at<Ct;at++){const Pt=vt[at],Lt=n.get(Pt);e.bindTexture(i.TEXTURE_2D,Lt.__webglTexture),y(i.TEXTURE_2D,Pt,bt),ct(et.__webglFramebuffer,P,Pt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D),D(Pt,bt)&&U(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?vt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,mt.__webglTexture),y(vt,S,bt),ct(et.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,vt),D(S,bt)&&U(vt),e.unbindTexture()}P.depthBuffer&&N(P)}function ht(P){const S=v(P)||o,et=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let mt=0,gt=et.length;mt<gt;mt++){const xt=et[mt];if(D(xt,S)){const bt=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(xt).__webglTexture;e.bindTexture(bt,vt),U(bt),e.unbindTexture()}}}function I(P){if(o&&P.samples>0&&pt(P)===!1){const S=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],et=P.width,mt=P.height;let gt=i.COLOR_BUFFER_BIT;const xt=[],bt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(P),at=P.isWebGLMultipleRenderTargets===!0;if(at)for(let Ct=0;Ct<S.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Ct=0;Ct<S.length;Ct++){xt.push(i.COLOR_ATTACHMENT0+Ct),P.depthBuffer&&xt.push(bt);const Pt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Pt===!1&&(P.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),at&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Ct]),Pt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[bt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[bt])),at){const Lt=n.get(S[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,et,mt,0,0,et,mt,gt,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Ct=0;Ct<S.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Ct]);const Pt=n.get(S[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function A(P){return Math.min(f,P.samples)}function pt(P){const S=n.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(P){const S=a.render.frame;x.get(P)!==S&&(x.set(P,S),P.update())}function Vt(P,S){const et=P.colorSpace,mt=P.format,gt=P.type;return P.isCompressedTexture===!0||P.format===$r||et!==Ge&&et!==An&&(et===Ot?o===!1?t.has("EXT_sRGB")===!0&&mt===Ie?(P.format=$r,P.minFilter=Ee,P.generateMipmaps=!1):S=lo.sRGBToLinear(S):(mt!==Ie||gt!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),S}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=it,this.setTexture2DArray=Y,this.setTexture3D=tt,this.setTextureCube=Mt,this.rebindTextures=H,this.setupRenderTarget=X,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=pt}function zd(i,t,e){const n=e.isWebGL2;function r(s,a=An){let o;if(s===hn)return i.UNSIGNED_BYTE;if(s===Qa)return i.UNSIGNED_SHORT_4_4_4_4;if(s===to)return i.UNSIGNED_SHORT_5_5_5_1;if(s===xl)return i.BYTE;if(s===vl)return i.SHORT;if(s===ss)return i.UNSIGNED_SHORT;if(s===$a)return i.INT;if(s===on)return i.UNSIGNED_INT;if(s===ln)return i.FLOAT;if(s===_i)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ml)return i.ALPHA;if(s===Ie)return i.RGBA;if(s===Sl)return i.LUMINANCE;if(s===yl)return i.LUMINANCE_ALPHA;if(s===En)return i.DEPTH_COMPONENT;if(s===ei)return i.DEPTH_STENCIL;if(s===$r)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===El)return i.RED;if(s===eo)return i.RED_INTEGER;if(s===Tl)return i.RG;if(s===no)return i.RG_INTEGER;if(s===io)return i.RGBA_INTEGER;if(s===dr||s===pr||s===mr||s===gr)if(a===Ot)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===dr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===dr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cs||s===Ps||s===Ls||s===Us)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Cs)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ps)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ls)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Us)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Al)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ds||s===Is)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ds)return a===Ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Is)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ns||s===Fs||s===Os||s===Bs||s===zs||s===Gs||s===Hs||s===Vs||s===ks||s===Ws||s===Xs||s===qs||s===Ys||s===Zs)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ns)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fs)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Os)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bs)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zs)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gs)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hs)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vs)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ks)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ws)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xs)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qs)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ys)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zs)return a===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_r)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===_r)return a===Ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===bl||s===js||s===Js||s===Ks)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===_r)return o.COMPRESSED_RED_RGTC1_EXT;if(s===js)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Js)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ks)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yn?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Gd extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zi extends ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hd={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),u=this._getHandJoint(l,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&d>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hd)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Vd extends Se{constructor(t,e,n,r,s,a,o,c,l,h){if(h=h!==void 0?h:En,h!==En&&h!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===En&&(n=on),n===void 0&&h===ei&&(n=yn),super(null,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:me,this.minFilter=c!==void 0?c:me,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class kd extends ii{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,m=null,x=null;const _=e.getContextAttributes();let p=null,u=null;const R=[],g=[],v=new Te;v.layers.enable(1),v.viewport=new le;const C=new Te;C.layers.enable(2),C.viewport=new le;const D=[v,C],U=new Gd;U.layers.enable(1),U.layers.enable(2);let z=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=R[Y];return tt===void 0&&(tt=new Hr,R[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=R[Y];return tt===void 0&&(tt=new Hr,R[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=R[Y];return tt===void 0&&(tt=new Hr,R[Y]=tt),tt.getHandSpace()};function b(Y){const tt=g.indexOf(Y.inputSource);if(tt===-1)return;const Mt=R[tt];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,l||a),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function rt(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",rt),r.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<R.length;Y++){const tt=g[Y];tt!==null&&(g[Y]=null,R[Y].disconnect(tt))}z=null,M=null,t.setRenderTarget(p),m=null,d=null,f=null,r=null,u=null,it.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",rt),r.addEventListener("inputsourceschange",Q),_.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:m}),u=new Rn(m.framebufferWidth,m.framebufferHeight,{format:Ie,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let tt=null,Mt=null,F=null;_.depth&&(F=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=_.stencil?ei:En,Mt=_.stencil?yn:on);const L={colorFormat:e.RGBA8,depthFormat:F,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(L),r.updateRenderState({layers:[d]}),u=new Rn(d.textureWidth,d.textureHeight,{format:Ie,type:hn,depthTexture:new Vd(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const E=t.properties.get(u);E.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(Y){for(let tt=0;tt<Y.removed.length;tt++){const Mt=Y.removed[tt],F=g.indexOf(Mt);F>=0&&(g[F]=null,R[F].disconnect(Mt))}for(let tt=0;tt<Y.added.length;tt++){const Mt=Y.added[tt];let F=g.indexOf(Mt);if(F===-1){for(let E=0;E<R.length;E++)if(E>=g.length){g.push(Mt),F=E;break}else if(g[E]===null){g[E]=Mt,F=E;break}if(F===-1)break}const L=R[F];L&&L.connect(Mt)}}const V=new G,k=new G;function J(Y,tt,Mt){V.setFromMatrixPosition(tt.matrixWorld),k.setFromMatrixPosition(Mt.matrixWorld);const F=V.distanceTo(k),L=tt.projectionMatrix.elements,E=Mt.projectionMatrix.elements,y=L[14]/(L[10]-1),Z=L[14]/(L[10]+1),ft=(L[9]+1)/L[5],K=(L[9]-1)/L[5],ct=(L[8]-1)/L[0],T=(E[8]+1)/E[0],$=y*ct,N=y*T,H=F/(-ct+T),X=H*-ct;tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(X),Y.translateZ(H),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const ht=y+H,I=Z+H,A=$-X,pt=N+(F-X),Tt=ft*Z/I*ht,Vt=K*Z/I*ht;Y.projectionMatrix.makePerspective(A,pt,Tt,Vt,ht,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function st(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;U.near=C.near=v.near=Y.near,U.far=C.far=v.far=Y.far,(z!==U.near||M!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,M=U.far);const tt=Y.parent,Mt=U.cameras;st(U,tt);for(let F=0;F<Mt.length;F++)st(Mt[F],tt);Mt.length===2?J(U,v,C):U.projectionMatrix.copy(v.projectionMatrix),W(Y,U,tt)};function W(Y,tt,Mt){Mt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0);const F=Y.children;for(let L=0,E=F.length;L<E;L++)F[L].updateMatrixWorld(!0);Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)};let B=null;function ut(Y,tt){if(h=tt.getViewerPose(l||a),x=tt,h!==null){const Mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let F=!1;Mt.length!==U.cameras.length&&(U.cameras.length=0,F=!0);for(let L=0;L<Mt.length;L++){const E=Mt[L];let y=null;if(m!==null)y=m.getViewport(E);else{const ft=f.getViewSubImage(d,E);y=ft.viewport,L===0&&(t.setRenderTargetTextures(u,ft.colorTexture,d.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(u))}let Z=D[L];Z===void 0&&(Z=new Te,Z.layers.enable(L),Z.viewport=new le,D[L]=Z),Z.matrix.fromArray(E.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(E.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(y.x,y.y,y.width,y.height),L===0&&(U.matrix.copy(Z.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),F===!0&&U.cameras.push(Z)}}for(let Mt=0;Mt<R.length;Mt++){const F=g[Mt],L=R[Mt];F!==null&&L!==void 0&&L.update(F,tt,l||a)}B&&B(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),x=null}const it=new vo;it.setAnimationLoop(ut),this.setAnimationLoop=function(Y){B=Y},this.dispose=function(){}}}function Wd(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,go(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,R,g,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,v)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,R,g):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===ge&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===ge&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const R=t.get(u).envMap;if(R&&(p.envMap.value=R,p.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const g=i.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*g,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,R,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*R,p.scale.value=g*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,R){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ge&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const R=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Xd(i,t,e,n){let r={},s={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(R,g){const v=g.program;n.uniformBlockBinding(R,v)}function l(R,g){let v=r[R.id];v===void 0&&(x(R),v=h(R),r[R.id]=v,R.addEventListener("dispose",p));const C=g.program;n.updateUBOMapping(R,C);const D=t.render.frame;s[R.id]!==D&&(d(R),s[R.id]=D)}function h(R){const g=f();R.__bindingPointIndex=g;const v=i.createBuffer(),C=R.__size,D=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,v),v}function f(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const g=r[R.id],v=R.uniforms,C=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let D=0,U=v.length;D<U;D++){const z=v[D];if(m(z,D,C)===!0){const M=z.__offset,b=Array.isArray(z.value)?z.value:[z.value];let rt=0;for(let Q=0;Q<b.length;Q++){const V=b[Q],k=_(V);typeof V=="number"?(z.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,M+rt,z.__data)):V.isMatrix3?(z.__data[0]=V.elements[0],z.__data[1]=V.elements[1],z.__data[2]=V.elements[2],z.__data[3]=V.elements[0],z.__data[4]=V.elements[3],z.__data[5]=V.elements[4],z.__data[6]=V.elements[5],z.__data[7]=V.elements[0],z.__data[8]=V.elements[6],z.__data[9]=V.elements[7],z.__data[10]=V.elements[8],z.__data[11]=V.elements[0]):(V.toArray(z.__data,rt),rt+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,z.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,g,v){const C=R.value;if(v[g]===void 0){if(typeof C=="number")v[g]=C;else{const D=Array.isArray(C)?C:[C],U=[];for(let z=0;z<D.length;z++)U.push(D[z].clone());v[g]=U}return!0}else if(typeof C=="number"){if(v[g]!==C)return v[g]=C,!0}else{const D=Array.isArray(v[g])?v[g]:[v[g]],U=Array.isArray(C)?C:[C];for(let z=0;z<D.length;z++){const M=D[z];if(M.equals(U[z])===!1)return M.copy(U[z]),!0}}return!1}function x(R){const g=R.uniforms;let v=0;const C=16;let D=0;for(let U=0,z=g.length;U<z;U++){const M=g[U],b={boundary:0,storage:0},rt=Array.isArray(M.value)?M.value:[M.value];for(let Q=0,V=rt.length;Q<V;Q++){const k=rt[Q],J=_(k);b.boundary+=J.boundary,b.storage+=J.storage}if(M.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,U>0){D=v%C;const Q=C-D;D!==0&&Q-b.boundary<0&&(v+=C-D,M.__offset=v)}v+=b.storage}return D=v%C,D>0&&(v+=C-D),R.__size=v,R.__cache={},this}function _(R){const g={boundary:0,storage:0};return typeof R=="number"?(g.boundary=4,g.storage=4):R.isVector2?(g.boundary=8,g.storage=8):R.isVector3||R.isColor?(g.boundary=16,g.storage=12):R.isVector4?(g.boundary=16,g.storage=16):R.isMatrix3?(g.boundary=48,g.storage=48):R.isMatrix4?(g.boundary=64,g.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),g}function p(R){const g=R.target;g.removeEventListener("dispose",p);const v=a.indexOf(g.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const R in r)i.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}function qd(){const i=er("canvas");return i.style.display="block",i}class Ao{constructor(t={}){const{canvas:e=qd(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const u=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ot,this.useLegacyLights=!0,this.toneMapping=$e,this.toneMappingExposure=1;const g=this;let v=!1,C=0,D=0,U=null,z=-1,M=null;const b=new le,rt=new le;let Q=null;const V=new Xt(0);let k=0,J=e.width,st=e.height,W=1,B=null,ut=null;const it=new le(0,0,J,st),Y=new le(0,0,J,st);let tt=!1;const Mt=new ls;let F=!1,L=!1,E=null;const y=new ee,Z=new dt,ft=new G,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return U===null?W:1}let T=n;function $(w,j){for(let ot=0;ot<w.length;ot++){const q=w[ot],lt=e.getContext(q,j);if(lt!==null)return lt}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rs}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),T===null){const j=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&j.shift(),T=$(j,w),T===null)throw $(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&T instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),T.getShaderPrecisionFormat===void 0&&(T.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let N,H,X,ht,I,A,pt,Tt,Vt,P,S,et,mt,gt,xt,bt,vt,at,Ct,Pt,Lt,wt,Rt,Gt;function qt(){N=new ef(T),H=new ju(T,N,t),N.init(H),wt=new zd(T,N,H),X=new Od(T,N,H),ht=new sf(T),I=new Ed,A=new Bd(T,N,X,I,H,wt,ht),pt=new Ku(g),Tt=new tf(g),Vt=new pc(T,H),Rt=new Yu(T,N,Vt,H),P=new nf(T,Vt,ht,Rt),S=new cf(T,P,Vt,ht),Ct=new lf(T,H,A),bt=new Ju(I),et=new yd(g,pt,Tt,N,H,Rt,bt),mt=new Wd(g,I),gt=new Ad,xt=new Ld(N,H),at=new qu(g,pt,Tt,X,S,d,c),vt=new Fd(g,S,H),Gt=new Xd(T,ht,H,X),Pt=new Zu(T,N,ht,H),Lt=new rf(T,N,ht,H),ht.programs=et.programs,g.capabilities=H,g.extensions=N,g.properties=I,g.renderLists=gt,g.shadowMap=vt,g.state=X,g.info=ht}qt();const O=new kd(g,T);this.xr=O,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const w=N.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=N.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(J,st,!1))},this.getSize=function(w){return w.set(J,st)},this.setSize=function(w,j,ot=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,st=j,e.width=Math.floor(w*W),e.height=Math.floor(j*W),ot===!0&&(e.style.width=w+"px",e.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(J*W,st*W).floor()},this.setDrawingBufferSize=function(w,j,ot){J=w,st=j,W=ot,e.width=Math.floor(w*ot),e.height=Math.floor(j*ot),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(it)},this.setViewport=function(w,j,ot,q){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,j,ot,q),X.viewport(b.copy(it).multiplyScalar(W).floor())},this.getScissor=function(w){return w.copy(Y)},this.setScissor=function(w,j,ot,q){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,j,ot,q),X.scissor(rt.copy(Y).multiplyScalar(W).floor())},this.getScissorTest=function(){return tt},this.setScissorTest=function(w){X.setScissorTest(tt=w)},this.setOpaqueSort=function(w){B=w},this.setTransparentSort=function(w){ut=w},this.getClearColor=function(w){return w.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(w=!0,j=!0,ot=!0){let q=0;if(w){let lt=!1;if(U!==null){const At=U.texture.format;lt=At===io||At===no||At===eo}if(lt){const At=U.texture.type,Ut=At===hn||At===on||At===ss||At===yn||At===Qa||At===to,Dt=at.getClearColor(),It=at.getClearAlpha(),Ht=Dt.r,Ft=Dt.g,Bt=Dt.b;Ut?(m[0]=Ht,m[1]=Ft,m[2]=Bt,m[3]=It,T.clearBufferuiv(T.COLOR,0,m)):(x[0]=Ht,x[1]=Ft,x[2]=Bt,x[3]=It,T.clearBufferiv(T.COLOR,0,x))}else q|=T.COLOR_BUFFER_BIT}j&&(q|=T.DEPTH_BUFFER_BIT),ot&&(q|=T.STENCIL_BUFFER_BIT),T.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),gt.dispose(),xt.dispose(),I.dispose(),pt.dispose(),Tt.dispose(),S.dispose(),Rt.dispose(),Gt.dispose(),et.dispose(),O.dispose(),O.removeEventListener("sessionstart",jt),O.removeEventListener("sessionend",Oe),E&&(E.dispose(),E=null),fe.stop()};function yt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const w=ht.autoReset,j=vt.enabled,ot=vt.autoUpdate,q=vt.needsUpdate,lt=vt.type;qt(),ht.autoReset=w,vt.enabled=j,vt.autoUpdate=ot,vt.needsUpdate=q,vt.type=lt}function _t(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Et(w){const j=w.target;j.removeEventListener("dispose",Et),Wt(j)}function Wt(w){Yt(w),I.remove(w)}function Yt(w){const j=I.get(w).programs;j!==void 0&&(j.forEach(function(ot){et.releaseProgram(ot)}),w.isShaderMaterial&&et.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,ot,q,lt,At){j===null&&(j=K);const Ut=lt.isMesh&&lt.matrixWorld.determinant()<0,Dt=Bo(w,j,ot,q,lt);X.setMaterial(q,Ut);let It=ot.index,Ht=1;q.wireframe===!0&&(It=P.getWireframeAttribute(ot),Ht=2);const Ft=ot.drawRange,Bt=ot.attributes.position;let Jt=Ft.start*Ht,Kt=(Ft.start+Ft.count)*Ht;At!==null&&(Jt=Math.max(Jt,At.start*Ht),Kt=Math.min(Kt,(At.start+At.count)*Ht)),It!==null?(Jt=Math.max(Jt,0),Kt=Math.min(Kt,It.count)):Bt!=null&&(Jt=Math.max(Jt,0),Kt=Math.min(Kt,Bt.count));const be=Kt-Jt;if(be<0||be===1/0)return;Rt.setup(lt,q,Dt,ot,It);let Ve,$t=Pt;if(It!==null&&(Ve=Vt.get(It),$t=Lt,$t.setIndex(Ve)),lt.isMesh)q.wireframe===!0?(X.setLineWidth(q.wireframeLinewidth*ct()),$t.setMode(T.LINES)):$t.setMode(T.TRIANGLES);else if(lt.isLine){let kt=q.linewidth;kt===void 0&&(kt=1),X.setLineWidth(kt*ct()),lt.isLineSegments?$t.setMode(T.LINES):lt.isLineLoop?$t.setMode(T.LINE_LOOP):$t.setMode(T.LINE_STRIP)}else lt.isPoints?$t.setMode(T.POINTS):lt.isSprite&&$t.setMode(T.TRIANGLES);if(lt.isInstancedMesh)$t.renderInstances(Jt,be,lt.count);else if(ot.isInstancedBufferGeometry){const kt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,lr=Math.min(ot.instanceCount,kt);$t.renderInstances(Jt,be,lr)}else $t.render(Jt,be)},this.compile=function(w,j){function ot(q,lt,At){q.transparent===!0&&q.side===Ue&&q.forceSinglePass===!1?(q.side=ge,q.needsUpdate=!0,bi(q,lt,At),q.side=Qe,q.needsUpdate=!0,bi(q,lt,At),q.side=Ue):bi(q,lt,At)}p=xt.get(w),p.init(),R.push(p),w.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(g.useLegacyLights),w.traverse(function(q){const lt=q.material;if(lt)if(Array.isArray(lt))for(let At=0;At<lt.length;At++){const Ut=lt[At];ot(Ut,w,q)}else ot(lt,w,q)}),R.pop(),p=null};let se=null;function Fe(w){se&&se(w)}function jt(){fe.stop()}function Oe(){fe.start()}const fe=new vo;fe.setAnimationLoop(Fe),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(w){se=w,O.setAnimationLoop(w),w===null?fe.stop():fe.start()},O.addEventListener("sessionstart",jt),O.addEventListener("sessionend",Oe),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(j),j=O.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,j,U),p=xt.get(w,R.length),p.init(),R.push(p),y.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Mt.setFromProjectionMatrix(y),L=this.localClippingEnabled,F=bt.init(this.clippingPlanes,L),_=gt.get(w,u.length),_.init(),u.push(_),gs(w,j,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(B,ut),this.info.render.frame++,F===!0&&bt.beginShadows();const ot=p.state.shadowsArray;if(vt.render(ot,w,j),F===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(_,w),p.setupLights(g.useLegacyLights),j.isArrayCamera){const q=j.cameras;for(let lt=0,At=q.length;lt<At;lt++){const Ut=q[lt];_s(_,w,Ut,Ut.viewport)}}else _s(_,w,j);U!==null&&(A.updateMultisampleRenderTarget(U),A.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(g,w,j),Rt.resetDefaultState(),z=-1,M=null,R.pop(),R.length>0?p=R[R.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function gs(w,j,ot,q){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Mt.intersectsSprite(w)){q&&ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(y);const Ut=S.update(w),Dt=w.material;Dt.visible&&_.push(w,Ut,Dt,ot,ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Mt.intersectsObject(w))){const Ut=S.update(w),Dt=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ft.copy(w.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ft.copy(Ut.boundingSphere.center)),ft.applyMatrix4(w.matrixWorld).applyMatrix4(y)),Array.isArray(Dt)){const It=Ut.groups;for(let Ht=0,Ft=It.length;Ht<Ft;Ht++){const Bt=It[Ht],Jt=Dt[Bt.materialIndex];Jt&&Jt.visible&&_.push(w,Ut,Jt,ot,ft.z,Bt)}}else Dt.visible&&_.push(w,Ut,Dt,ot,ft.z,null)}}const At=w.children;for(let Ut=0,Dt=At.length;Ut<Dt;Ut++)gs(At[Ut],j,ot,q)}function _s(w,j,ot,q){const lt=w.opaque,At=w.transmissive,Ut=w.transparent;p.setupLightsView(ot),F===!0&&bt.setGlobalState(g.clippingPlanes,ot),At.length>0&&Oo(lt,At,j,ot),q&&X.viewport(b.copy(q)),lt.length>0&&Ai(lt,j,ot),At.length>0&&Ai(At,j,ot),Ut.length>0&&Ai(Ut,j,ot),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Oo(w,j,ot,q){const lt=H.isWebGL2;E===null&&(E=new Rn(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?_i:hn,minFilter:gi,samples:lt?4:0})),g.getDrawingBufferSize(Z),lt?E.setSize(Z.x,Z.y):E.setSize(ts(Z.x),ts(Z.y));const At=g.getRenderTarget();g.setRenderTarget(E),g.getClearColor(V),k=g.getClearAlpha(),k<1&&g.setClearColor(16777215,.5),g.clear();const Ut=g.toneMapping;g.toneMapping=$e,Ai(w,ot,q),A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E);let Dt=!1;for(let It=0,Ht=j.length;It<Ht;It++){const Ft=j[It],Bt=Ft.object,Jt=Ft.geometry,Kt=Ft.material,be=Ft.group;if(Kt.side===Ue&&Bt.layers.test(q.layers)){const Ve=Kt.side;Kt.side=ge,Kt.needsUpdate=!0,xs(Bt,ot,q,Jt,Kt,be),Kt.side=Ve,Kt.needsUpdate=!0,Dt=!0}}Dt===!0&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),g.setRenderTarget(At),g.setClearColor(V,k),g.toneMapping=Ut}function Ai(w,j,ot){const q=j.isScene===!0?j.overrideMaterial:null;for(let lt=0,At=w.length;lt<At;lt++){const Ut=w[lt],Dt=Ut.object,It=Ut.geometry,Ht=q===null?Ut.material:q,Ft=Ut.group;Dt.layers.test(ot.layers)&&xs(Dt,j,ot,It,Ht,Ft)}}function xs(w,j,ot,q,lt,At){w.onBeforeRender(g,j,ot,q,lt,At),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),lt.onBeforeRender(g,j,ot,q,w,At),lt.transparent===!0&&lt.side===Ue&&lt.forceSinglePass===!1?(lt.side=ge,lt.needsUpdate=!0,g.renderBufferDirect(ot,j,q,lt,w,At),lt.side=Qe,lt.needsUpdate=!0,g.renderBufferDirect(ot,j,q,lt,w,At),lt.side=Ue):g.renderBufferDirect(ot,j,q,lt,w,At),w.onAfterRender(g,j,ot,q,lt,At)}function bi(w,j,ot){j.isScene!==!0&&(j=K);const q=I.get(w),lt=p.state.lights,At=p.state.shadowsArray,Ut=lt.state.version,Dt=et.getParameters(w,lt.state,At,j,ot),It=et.getProgramCacheKey(Dt);let Ht=q.programs;q.environment=w.isMeshStandardMaterial?j.environment:null,q.fog=j.fog,q.envMap=(w.isMeshStandardMaterial?Tt:pt).get(w.envMap||q.environment),Ht===void 0&&(w.addEventListener("dispose",Et),Ht=new Map,q.programs=Ht);let Ft=Ht.get(It);if(Ft!==void 0){if(q.currentProgram===Ft&&q.lightsStateVersion===Ut)return vs(w,Dt),Ft}else Dt.uniforms=et.getUniforms(w),w.onBuild(ot,Dt,g),w.onBeforeCompile(Dt,g),Ft=et.acquireProgram(Dt,It),Ht.set(It,Ft),q.uniforms=Dt.uniforms;const Bt=q.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Bt.clippingPlanes=bt.uniform),vs(w,Dt),q.needsLights=Go(w),q.lightsStateVersion=Ut,q.needsLights&&(Bt.ambientLightColor.value=lt.state.ambient,Bt.lightProbe.value=lt.state.probe,Bt.directionalLights.value=lt.state.directional,Bt.directionalLightShadows.value=lt.state.directionalShadow,Bt.spotLights.value=lt.state.spot,Bt.spotLightShadows.value=lt.state.spotShadow,Bt.rectAreaLights.value=lt.state.rectArea,Bt.ltc_1.value=lt.state.rectAreaLTC1,Bt.ltc_2.value=lt.state.rectAreaLTC2,Bt.pointLights.value=lt.state.point,Bt.pointLightShadows.value=lt.state.pointShadow,Bt.hemisphereLights.value=lt.state.hemi,Bt.directionalShadowMap.value=lt.state.directionalShadowMap,Bt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Bt.spotShadowMap.value=lt.state.spotShadowMap,Bt.spotLightMatrix.value=lt.state.spotLightMatrix,Bt.spotLightMap.value=lt.state.spotLightMap,Bt.pointShadowMap.value=lt.state.pointShadowMap,Bt.pointShadowMatrix.value=lt.state.pointShadowMatrix);const Jt=Ft.getUniforms(),Kt=$i.seqWithValue(Jt.seq,Bt);return q.currentProgram=Ft,q.uniformsList=Kt,Ft}function vs(w,j){const ot=I.get(w);ot.outputColorSpace=j.outputColorSpace,ot.instancing=j.instancing,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function Bo(w,j,ot,q,lt){j.isScene!==!0&&(j=K),A.resetTextureUnits();const At=j.fog,Ut=q.isMeshStandardMaterial?j.environment:null,Dt=U===null?g.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ge,It=(q.isMeshStandardMaterial?Tt:pt).get(q.envMap||Ut),Ht=q.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Ft=!!ot.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Bt=!!ot.morphAttributes.position,Jt=!!ot.morphAttributes.normal,Kt=!!ot.morphAttributes.color,be=q.toneMapped?g.toneMapping:$e,Ve=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,$t=Ve!==void 0?Ve.length:0,kt=I.get(q),lr=p.state.lights;if(F===!0&&(L===!0||w!==M)){const _e=w===M&&q.id===z;bt.setState(q,w,_e)}let ae=!1;q.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==lr.state.version||kt.outputColorSpace!==Dt||lt.isInstancedMesh&&kt.instancing===!1||!lt.isInstancedMesh&&kt.instancing===!0||lt.isSkinnedMesh&&kt.skinning===!1||!lt.isSkinnedMesh&&kt.skinning===!0||kt.envMap!==It||q.fog===!0&&kt.fog!==At||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==bt.numPlanes||kt.numIntersection!==bt.numIntersection)||kt.vertexAlphas!==Ht||kt.vertexTangents!==Ft||kt.morphTargets!==Bt||kt.morphNormals!==Jt||kt.morphColors!==Kt||kt.toneMapping!==be||H.isWebGL2===!0&&kt.morphTargetsCount!==$t)&&(ae=!0):(ae=!0,kt.__version=q.version);let fn=kt.currentProgram;ae===!0&&(fn=bi(q,j,lt));let Ms=!1,ai=!1,cr=!1;const de=fn.getUniforms(),dn=kt.uniforms;if(X.useProgram(fn.program)&&(Ms=!0,ai=!0,cr=!0),q.id!==z&&(z=q.id,ai=!0),Ms||M!==w){if(de.setValue(T,"projectionMatrix",w.projectionMatrix),H.logarithmicDepthBuffer&&de.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),M!==w&&(M=w,ai=!0,cr=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const _e=de.map.cameraPosition;_e!==void 0&&_e.setValue(T,ft.setFromMatrixPosition(w.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&de.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||lt.isSkinnedMesh)&&de.setValue(T,"viewMatrix",w.matrixWorldInverse)}if(lt.isSkinnedMesh){de.setOptional(T,lt,"bindMatrix"),de.setOptional(T,lt,"bindMatrixInverse");const _e=lt.skeleton;_e&&(H.floatVertexTextures?(_e.boneTexture===null&&_e.computeBoneTexture(),de.setValue(T,"boneTexture",_e.boneTexture,A),de.setValue(T,"boneTextureSize",_e.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const hr=ot.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0&&H.isWebGL2===!0)&&Ct.update(lt,ot,fn),(ai||kt.receiveShadow!==lt.receiveShadow)&&(kt.receiveShadow=lt.receiveShadow,de.setValue(T,"receiveShadow",lt.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(dn.envMap.value=It,dn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ai&&(de.setValue(T,"toneMappingExposure",g.toneMappingExposure),kt.needsLights&&zo(dn,cr),At&&q.fog===!0&&mt.refreshFogUniforms(dn,At),mt.refreshMaterialUniforms(dn,q,W,st,E),$i.upload(T,kt.uniformsList,dn,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&($i.upload(T,kt.uniformsList,dn,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&de.setValue(T,"center",lt.center),de.setValue(T,"modelViewMatrix",lt.modelViewMatrix),de.setValue(T,"normalMatrix",lt.normalMatrix),de.setValue(T,"modelMatrix",lt.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const _e=q.uniformsGroups;for(let ur=0,Ho=_e.length;ur<Ho;ur++)if(H.isWebGL2){const Ss=_e[ur];Gt.update(Ss,fn),Gt.bind(Ss,fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fn}function zo(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function Go(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,j,ot){I.get(w.texture).__webglTexture=j,I.get(w.depthTexture).__webglTexture=ot;const q=I.get(w);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=ot===void 0,q.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,j){const ot=I.get(w);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(w,j=0,ot=0){U=w,C=j,D=ot;let q=!0,lt=null,At=!1,Ut=!1;if(w){const It=I.get(w);It.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(T.FRAMEBUFFER,null),q=!1):It.__webglFramebuffer===void 0?A.setupRenderTarget(w):It.__hasExternalTextures&&A.rebindTextures(w,I.get(w.texture).__webglTexture,I.get(w.depthTexture).__webglTexture);const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Ut=!0);const Ft=I.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(lt=Ft[j],At=!0):H.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?lt=I.get(w).__webglMultisampledFramebuffer:lt=Ft,b.copy(w.viewport),rt.copy(w.scissor),Q=w.scissorTest}else b.copy(it).multiplyScalar(W).floor(),rt.copy(Y).multiplyScalar(W).floor(),Q=tt;if(X.bindFramebuffer(T.FRAMEBUFFER,lt)&&H.drawBuffers&&q&&X.drawBuffers(w,lt),X.viewport(b),X.scissor(rt),X.setScissorTest(Q),At){const It=I.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+j,It.__webglTexture,ot)}else if(Ut){const It=I.get(w.texture),Ht=j||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,It.__webglTexture,ot||0,Ht)}z=-1},this.readRenderTargetPixels=function(w,j,ot,q,lt,At,Ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=I.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(Dt=Dt[Ut]),Dt){X.bindFramebuffer(T.FRAMEBUFFER,Dt);try{const It=w.texture,Ht=It.format,Ft=It.type;if(Ht!==Ie&&wt.convert(Ht)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Ft===_i&&(N.has("EXT_color_buffer_half_float")||H.isWebGL2&&N.has("EXT_color_buffer_float"));if(Ft!==hn&&wt.convert(Ft)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===ln&&(H.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-q&&ot>=0&&ot<=w.height-lt&&T.readPixels(j,ot,q,lt,wt.convert(Ht),wt.convert(Ft),At)}finally{const It=U!==null?I.get(U).__webglFramebuffer:null;X.bindFramebuffer(T.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(w,j,ot=0){const q=Math.pow(2,-ot),lt=Math.floor(j.image.width*q),At=Math.floor(j.image.height*q);A.setTexture2D(j,0),T.copyTexSubImage2D(T.TEXTURE_2D,ot,0,0,w.x,w.y,lt,At),X.unbindTexture()},this.copyTextureToTexture=function(w,j,ot,q=0){const lt=j.image.width,At=j.image.height,Ut=wt.convert(ot.format),Dt=wt.convert(ot.type);A.setTexture2D(ot,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,ot.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,ot.unpackAlignment),j.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,q,w.x,w.y,lt,At,Ut,Dt,j.image.data):j.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,q,w.x,w.y,j.mipmaps[0].width,j.mipmaps[0].height,Ut,j.mipmaps[0].data):T.texSubImage2D(T.TEXTURE_2D,q,w.x,w.y,Ut,Dt,j.image),q===0&&ot.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(w,j,ot,q,lt=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const At=w.max.x-w.min.x+1,Ut=w.max.y-w.min.y+1,Dt=w.max.z-w.min.z+1,It=wt.convert(q.format),Ht=wt.convert(q.type);let Ft;if(q.isData3DTexture)A.setTexture3D(q,0),Ft=T.TEXTURE_3D;else if(q.isDataArrayTexture)A.setTexture2DArray(q,0),Ft=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,q.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,q.unpackAlignment);const Bt=T.getParameter(T.UNPACK_ROW_LENGTH),Jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Kt=T.getParameter(T.UNPACK_SKIP_PIXELS),be=T.getParameter(T.UNPACK_SKIP_ROWS),Ve=T.getParameter(T.UNPACK_SKIP_IMAGES),$t=ot.isCompressedTexture?ot.mipmaps[0]:ot.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,$t.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,$t.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,w.min.x),T.pixelStorei(T.UNPACK_SKIP_ROWS,w.min.y),T.pixelStorei(T.UNPACK_SKIP_IMAGES,w.min.z),ot.isDataTexture||ot.isData3DTexture?T.texSubImage3D(Ft,lt,j.x,j.y,j.z,At,Ut,Dt,It,Ht,$t.data):ot.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),T.compressedTexSubImage3D(Ft,lt,j.x,j.y,j.z,At,Ut,Dt,It,$t.data)):T.texSubImage3D(Ft,lt,j.x,j.y,j.z,At,Ut,Dt,It,Ht,$t),T.pixelStorei(T.UNPACK_ROW_LENGTH,Bt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Kt),T.pixelStorei(T.UNPACK_SKIP_ROWS,be),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ve),lt===0&&q.generateMipmaps&&T.generateMipmap(Ft),X.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),X.unbindTexture()},this.resetState=function(){C=0,D=0,U=null,X.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ke}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Tn:ro}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Tn?Ot:Ge}}class Yd extends Ao{}Yd.prototype.isWebGL1Renderer=!0;class Zd extends ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class He{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const h=n[r],d=n[r+1]-h,m=(a-h)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new dt:new G);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new G,r=[],s=[],a=[],o=new G,c=new ee;for(let m=0;m<=t;m++){const x=m/t;r[m]=this.getTangentAt(x,new G)}s[0]=new G,a[0]=new G;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(ue(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,x))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(ue(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let x=1;x<=t;x++)s[x].applyMatrix4(c.makeRotationAxis(r[x],m*x)),a[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class us extends He{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new dt,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*f+this.aX,l=d*f+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class jd extends us{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function fs(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,f){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+f)+(c-o)/f;d*=h,m*=h,r(a,o,d,m)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const ji=new G,Vr=new fs,kr=new fs,Wr=new fs;class Jd extends He{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new G){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=r[(o-1)%s]:(ji.subVectors(r[0],r[1]).add(r[0]),l=ji);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(ji.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ji),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),x<1e-4&&(x=_),p<1e-4&&(p=_),Vr.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,x,_,p),kr.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,x,_,p),Wr.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,x,_,p)}else this.curveType==="catmullrom"&&(Vr.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),kr.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),Wr.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(Vr.calc(c),kr.calc(c),Wr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new G().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ba(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function Kd(i,t){const e=1-i;return e*e*t}function $d(i,t){return 2*(1-i)*i*t}function Qd(i,t){return i*i*t}function di(i,t,e,n){return Kd(i,t)+$d(i,e)+Qd(i,n)}function tp(i,t){const e=1-i;return e*e*e*t}function ep(i,t){const e=1-i;return 3*e*e*i*t}function np(i,t){return 3*(1-i)*i*i*t}function ip(i,t){return i*i*i*t}function pi(i,t,e,n,r){return tp(i,t)+ep(i,e)+np(i,n)+ip(i,r)}class bo extends He{constructor(t=new dt,e=new dt,n=new dt,r=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(pi(t,r.x,s.x,a.x,o.x),pi(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rp extends He{constructor(t=new G,e=new G,n=new G,r=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new G){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(pi(t,r.x,s.x,a.x,o.x),pi(t,r.y,s.y,a.y,o.y),pi(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ds extends He{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sp extends He{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wo extends He{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(di(t,r.x,s.x,a.x),di(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ap extends He{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(di(t,r.x,s.x,a.x),di(t,r.y,s.y,a.y),di(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ro extends He{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Ba(o,c.x,l.x,h.x,f.x),Ba(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new dt().fromArray(r))}return this}}var Co=Object.freeze({__proto__:null,ArcCurve:jd,CatmullRomCurve3:Jd,CubicBezierCurve:bo,CubicBezierCurve3:rp,EllipseCurve:us,LineCurve:ds,LineCurve3:sp,QuadraticBezierCurve:wo,QuadraticBezierCurve3:ap,SplineCurve:Ro});class op extends He{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new ds(e,t))}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Co[r.type]().fromJSON(r))}return this}}class un extends op{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ds(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new wo(this.currentPoint.clone(),new dt(t,e),new dt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new bo(this.currentPoint.clone(),new dt(t,e),new dt(n,r),new dt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ro(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new us(t,e,n,r,s,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $n extends un{constructor(t){super(t),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new un().fromJSON(r))}return this}}const lp={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Po(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,f,d,m;if(n&&(s=dp(i,t,s,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let x=e;x<r;x+=e)f=i[x],d=i[x+1],f<o&&(o=f),d<c&&(c=d),f>l&&(l=f),d>h&&(h=d);m=Math.max(l-o,h-c),m=m!==0?32767/m:0}return xi(s,a,e,o,c,m,0),a}};function Po(i,t,e,n,r){let s,a;if(r===Tp(i,t,e,n)>0)for(s=t;s<e;s+=n)a=za(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=za(s,i[s],i[s+1],a);return a&&sr(a,a.next)&&(Mi(a),a=a.next),a}function Pn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(sr(e,e.next)||Zt(e.prev,e,e.next)===0)){if(Mi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xi(i,t,e,n,r,s,a){if(!i)return;!a&&s&&xp(i,n,r,s);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?hp(i,n,r,s):cp(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Mi(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=up(Pn(i),t,e),xi(i,t,e,n,r,s,2)):a===2&&fp(i,t,e,n,r,s):xi(Pn(i),t,e,n,r,s,1);break}}}function cp(i){const t=i.prev,e=i,n=i.next;if(Zt(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=r<s?r<a?r:a:s<a?s:a,f=o<c?o<l?o:l:c<l?c:l,d=r>s?r>a?r:a:s>a?s:a,m=o>c?o>l?o:l:c>l?c:l;let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=f&&x.y<=m&&jn(r,o,s,c,a,l,x.x,x.y)&&Zt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function hp(i,t,e,n){const r=i.prev,s=i,a=i.next;if(Zt(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,h=r.y,f=s.y,d=a.y,m=o<c?o<l?o:l:c<l?c:l,x=h<f?h<d?h:d:f<d?f:d,_=o>c?o>l?o:l:c>l?c:l,p=h>f?h>d?h:d:f>d?f:d,u=ns(m,x,t,e,n),R=ns(_,p,t,e,n);let g=i.prevZ,v=i.nextZ;for(;g&&g.z>=u&&v&&v.z<=R;){if(g.x>=m&&g.x<=_&&g.y>=x&&g.y<=p&&g!==r&&g!==a&&jn(o,h,c,f,l,d,g.x,g.y)&&Zt(g.prev,g,g.next)>=0||(g=g.prevZ,v.x>=m&&v.x<=_&&v.y>=x&&v.y<=p&&v!==r&&v!==a&&jn(o,h,c,f,l,d,v.x,v.y)&&Zt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;g&&g.z>=u;){if(g.x>=m&&g.x<=_&&g.y>=x&&g.y<=p&&g!==r&&g!==a&&jn(o,h,c,f,l,d,g.x,g.y)&&Zt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;v&&v.z<=R;){if(v.x>=m&&v.x<=_&&v.y>=x&&v.y<=p&&v!==r&&v!==a&&jn(o,h,c,f,l,d,v.x,v.y)&&Zt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function up(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!sr(r,s)&&Lo(r,n,n.next,s)&&vi(r,s)&&vi(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Mi(n),Mi(n.next),n=i=s),n=n.next}while(n!==i);return Pn(n)}function fp(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sp(a,o)){let c=Uo(a,o);a=Pn(a,a.next),c=Pn(c,c.next),xi(a,t,e,n,r,s,0),xi(c,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function dp(i,t,e,n){const r=[];let s,a,o,c,l;for(s=0,a=t.length;s<a;s++)o=t[s]*n,c=s<a-1?t[s+1]*n:i.length,l=Po(i,o,c,n,!1),l===l.next&&(l.steiner=!0),r.push(Mp(l));for(r.sort(pp),s=0;s<r.length;s++)e=mp(r[s],e);return e}function pp(i,t){return i.x-t.x}function mp(i,t){const e=gp(i,t);if(!e)return t;const n=Uo(e,i);return Pn(n,n.next),Pn(e,e.next)}function gp(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,c=r.x,l=r.y;let h=1/0,f;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&jn(a<l?s:n,a,c,l,a<l?n:s,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(s-e.x),vi(e,i)&&(f<h||f===h&&(e.x>r.x||e.x===r.x&&_p(r,e)))&&(r=e,h=f)),e=e.next;while(e!==o);return r}function _p(i,t){return Zt(i.prev,i,t.prev)<0&&Zt(t.next,i,i.next)<0}function xp(i,t,e,n){let r=i;do r.z===0&&(r.z=ns(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,vp(r)}function vp(i){let t,e,n,r,s,a,o,c,l=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(a>1);return i}function ns(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function jn(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function Sp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!yp(i,t)&&(vi(i,t)&&vi(t,i)&&Ep(i,t)&&(Zt(i.prev,i,t.prev)||Zt(i,t.prev,t))||sr(i,t)&&Zt(i.prev,i,i.next)>0&&Zt(t.prev,t,t.next)>0)}function Zt(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function sr(i,t){return i.x===t.x&&i.y===t.y}function Lo(i,t,e,n){const r=Ki(Zt(i,t,e)),s=Ki(Zt(i,t,n)),a=Ki(Zt(e,n,i)),o=Ki(Zt(e,n,t));return!!(r!==s&&a!==o||r===0&&Ji(i,e,t)||s===0&&Ji(i,n,t)||a===0&&Ji(e,i,n)||o===0&&Ji(e,t,n))}function Ji(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ki(i){return i>0?1:i<0?-1:0}function yp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Lo(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function vi(i,t){return Zt(i.prev,i,i.next)<0?Zt(i,t,i.next)>=0&&Zt(i,i.prev,t)>=0:Zt(i,t,i.prev)<0||Zt(i,i.next,t)<0}function Ep(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Uo(i,t){const e=new is(i.i,i.x,i.y),n=new is(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function za(i,t,e,n){const r=new is(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Mi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function is(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tp(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class bn{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return bn.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Ga(t),Ha(n,t);let a=t.length;e.forEach(Ga);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,Ha(n,e[c]);const o=lp.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Ga(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ha(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ar extends tn{constructor(t=new $n([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Ae(r,3)),this.setAttribute("uv",new Ae(s,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const u=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:Ap;let g,v=!1,C,D,U,z;u&&(g=u.getSpacedPoints(h),v=!0,d=!1,C=u.computeFrenetFrames(h,!1),D=new G,U=new G,z=new G),d||(p=0,m=0,x=0,_=0);const M=o.extractPoints(l);let b=M.shape;const rt=M.holes;if(!bn.isClockWise(b)){b=b.reverse();for(let T=0,$=rt.length;T<$;T++){const N=rt[T];bn.isClockWise(N)&&(rt[T]=N.reverse())}}const V=bn.triangulateShape(b,rt),k=b;for(let T=0,$=rt.length;T<$;T++){const N=rt[T];b=b.concat(N)}function J(T,$,N){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().addScaledVector($,N)}const st=b.length,W=V.length;function B(T,$,N){let H,X,ht;const I=T.x-$.x,A=T.y-$.y,pt=N.x-T.x,Tt=N.y-T.y,Vt=I*I+A*A,P=I*Tt-A*pt;if(Math.abs(P)>Number.EPSILON){const S=Math.sqrt(Vt),et=Math.sqrt(pt*pt+Tt*Tt),mt=$.x-A/S,gt=$.y+I/S,xt=N.x-Tt/et,bt=N.y+pt/et,vt=((xt-mt)*Tt-(bt-gt)*pt)/(I*Tt-A*pt);H=mt+I*vt-T.x,X=gt+A*vt-T.y;const at=H*H+X*X;if(at<=2)return new dt(H,X);ht=Math.sqrt(at/2)}else{let S=!1;I>Number.EPSILON?pt>Number.EPSILON&&(S=!0):I<-Number.EPSILON?pt<-Number.EPSILON&&(S=!0):Math.sign(A)===Math.sign(Tt)&&(S=!0),S?(H=-A,X=I,ht=Math.sqrt(Vt)):(H=I,X=A,ht=Math.sqrt(Vt/2))}return new dt(H/ht,X/ht)}const ut=[];for(let T=0,$=k.length,N=$-1,H=T+1;T<$;T++,N++,H++)N===$&&(N=0),H===$&&(H=0),ut[T]=B(k[T],k[N],k[H]);const it=[];let Y,tt=ut.concat();for(let T=0,$=rt.length;T<$;T++){const N=rt[T];Y=[];for(let H=0,X=N.length,ht=X-1,I=H+1;H<X;H++,ht++,I++)ht===X&&(ht=0),I===X&&(I=0),Y[H]=B(N[H],N[ht],N[I]);it.push(Y),tt=tt.concat(Y)}for(let T=0;T<p;T++){const $=T/p,N=m*Math.cos($*Math.PI/2),H=x*Math.sin($*Math.PI/2)+_;for(let X=0,ht=k.length;X<ht;X++){const I=J(k[X],ut[X],H);y(I.x,I.y,-N)}for(let X=0,ht=rt.length;X<ht;X++){const I=rt[X];Y=it[X];for(let A=0,pt=I.length;A<pt;A++){const Tt=J(I[A],Y[A],H);y(Tt.x,Tt.y,-N)}}}const Mt=x+_;for(let T=0;T<st;T++){const $=d?J(b[T],tt[T],Mt):b[T];v?(U.copy(C.normals[0]).multiplyScalar($.x),D.copy(C.binormals[0]).multiplyScalar($.y),z.copy(g[0]).add(U).add(D),y(z.x,z.y,z.z)):y($.x,$.y,0)}for(let T=1;T<=h;T++)for(let $=0;$<st;$++){const N=d?J(b[$],tt[$],Mt):b[$];v?(U.copy(C.normals[T]).multiplyScalar(N.x),D.copy(C.binormals[T]).multiplyScalar(N.y),z.copy(g[T]).add(U).add(D),y(z.x,z.y,z.z)):y(N.x,N.y,f/h*T)}for(let T=p-1;T>=0;T--){const $=T/p,N=m*Math.cos($*Math.PI/2),H=x*Math.sin($*Math.PI/2)+_;for(let X=0,ht=k.length;X<ht;X++){const I=J(k[X],ut[X],H);y(I.x,I.y,f+N)}for(let X=0,ht=rt.length;X<ht;X++){const I=rt[X];Y=it[X];for(let A=0,pt=I.length;A<pt;A++){const Tt=J(I[A],Y[A],H);v?y(Tt.x,Tt.y+g[h-1].y,g[h-1].x+N):y(Tt.x,Tt.y,f+N)}}}F(),L();function F(){const T=r.length/3;if(d){let $=0,N=st*$;for(let H=0;H<W;H++){const X=V[H];Z(X[2]+N,X[1]+N,X[0]+N)}$=h+p*2,N=st*$;for(let H=0;H<W;H++){const X=V[H];Z(X[0]+N,X[1]+N,X[2]+N)}}else{for(let $=0;$<W;$++){const N=V[$];Z(N[2],N[1],N[0])}for(let $=0;$<W;$++){const N=V[$];Z(N[0]+st*h,N[1]+st*h,N[2]+st*h)}}n.addGroup(T,r.length/3-T,0)}function L(){const T=r.length/3;let $=0;E(k,$),$+=k.length;for(let N=0,H=rt.length;N<H;N++){const X=rt[N];E(X,$),$+=X.length}n.addGroup(T,r.length/3-T,1)}function E(T,$){let N=T.length;for(;--N>=0;){const H=N;let X=N-1;X<0&&(X=T.length-1);for(let ht=0,I=h+p*2;ht<I;ht++){const A=st*ht,pt=st*(ht+1),Tt=$+H+A,Vt=$+X+A,P=$+X+pt,S=$+H+pt;ft(Tt,Vt,P,S)}}}function y(T,$,N){c.push(T),c.push($),c.push(N)}function Z(T,$,N){K(T),K($),K(N);const H=r.length/3,X=R.generateTopUV(n,r,H-3,H-2,H-1);ct(X[0]),ct(X[1]),ct(X[2])}function ft(T,$,N,H){K(T),K($),K(H),K($),K(N),K(H);const X=r.length/3,ht=R.generateSideWallUV(n,r,X-6,X-3,X-2,X-1);ct(ht[0]),ct(ht[1]),ct(ht[3]),ct(ht[1]),ct(ht[2]),ct(ht[3])}function K(T){r.push(c[T*3+0]),r.push(c[T*3+1]),r.push(c[T*3+2])}function ct(T){s.push(T.x),s.push(T.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return bp(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Co[r.type]().fromJSON(r)),new ar(n,t.options)}}const Ap={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new dt(s,a),new dt(o,c),new dt(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[r*3],m=t[r*3+1],x=t[r*3+2],_=t[s*3],p=t[s*3+1],u=t[s*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new dt(a,1-c),new dt(l,1-f),new dt(d,1-x),new dt(_,1-u)]:[new dt(o,1-c),new dt(h,1-f),new dt(m,1-x),new dt(p,1-u)]}};function bp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Do extends Ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Va={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class wp{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){const m=l[f],x=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}}const Rp=new wp;class ps{constructor(t){this.manager=t!==void 0?t:Rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ps.DEFAULT_MATERIAL_NAME="__DEFAULT";const je={};class Cp extends Error{constructor(t,e){super(t),this.response=e}}class Pp extends ps{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Va.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(je[t]!==void 0){je[t].push({onLoad:e,onProgress:n,onError:r});return}je[t]=[],je[t].push({onLoad:e,onProgress:n,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=je[t],f=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,x=m!==0;let _=0;const p=new ReadableStream({start(u){R();function R(){f.read().then(({done:g,value:v})=>{if(g)u.close();else{_+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:m});for(let D=0,U=h.length;D<U;D++){const z=h[D];z.onProgress&&z.onProgress(C)}u.enqueue(v),R()}})}}});return new Response(p)}else throw new Cp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(x=>m.decode(x))}}}).then(l=>{Va.add(t,l);const h=je[t];delete je[t];for(let f=0,d=h.length;f<d;f++){const m=h[f];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=je[t];if(h===void 0)throw this.manager.itemError(t),l;delete je[t];for(let f=0,d=h.length;f<d;f++){const m=h[f];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Lp extends ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Xr=new ee,ka=new G,Wa=new G;class Up{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ka.setFromMatrixPosition(t.matrixWorld),e.position.copy(ka),Wa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wa),e.updateMatrixWorld(),Xr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Dp extends Up{constructor(){super(new Mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ip extends Lp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ne.DEFAULT_UP),this.updateMatrix(),this.target=new ne,this.shadow=new Dp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Xa=new dt;class Np{constructor(t=new dt(1/0,1/0),e=new dt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xa.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xa).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class xn{constructor(){this.type="ShapePath",this.color=new Xt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new un,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,r){return this.currentPath.quadraticCurveTo(t,e,n,r),this}bezierCurveTo(t,e,n,r,s,a){return this.currentPath.bezierCurveTo(t,e,n,r,s,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(u){const R=[];for(let g=0,v=u.length;g<v;g++){const C=u[g],D=new $n;D.curves=C.curves,R.push(D)}return R}function n(u,R){const g=R.length;let v=!1;for(let C=g-1,D=0;D<g;C=D++){let U=R[C],z=R[D],M=z.x-U.x,b=z.y-U.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(U=R[D],M=-M,z=R[C],b=-b),u.y<U.y||u.y>z.y)continue;if(u.y===U.y){if(u.x===U.x)return!0}else{const rt=b*(u.x-U.x)-M*(u.y-U.y);if(rt===0)return!0;if(rt<0)continue;v=!v}}else{if(u.y!==U.y)continue;if(z.x<=u.x&&u.x<=U.x||U.x<=u.x&&u.x<=z.x)return!0}}return v}const r=bn.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,c;const l=[];if(s.length===1)return o=s[0],c=new $n,c.curves=o.curves,l.push(c),l;let h=!r(s[0].getPoints());h=t?!h:h;const f=[],d=[];let m=[],x=0,_;d[x]=void 0,m[x]=[];for(let u=0,R=s.length;u<R;u++)o=s[u],_=o.getPoints(),a=r(_),a=t?!a:a,a?(!h&&d[x]&&x++,d[x]={s:new $n,p:_},d[x].s.curves=o.curves,h&&x++,m[x]=[]):m[x].push({h:o,p:_[0]});if(!d[0])return e(s);if(d.length>1){let u=!1,R=0;for(let g=0,v=d.length;g<v;g++)f[g]=[];for(let g=0,v=d.length;g<v;g++){const C=m[g];for(let D=0;D<C.length;D++){const U=C[D];let z=!0;for(let M=0;M<d.length;M++)n(U.p,d[M].p)&&(g!==M&&R++,z?(z=!1,f[M].push(U)):u=!0);z&&f[g].push(U)}}R>0&&u===!1&&(m=f)}let p;for(let u=0,R=d.length;u<R;u++){c=d[u].s,l.push(c),p=m[u];for(let g=0,v=p.length;g<v;g++)c.holes.push(p[g].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rs);const Fp=Ot;class ms extends ps{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,r){const s=this,a=new Pp(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t){const e=this;function n(F,L){if(F.nodeType!==1)return;const E=v(F);let y=!1,Z=null;switch(F.nodeName){case"svg":L=x(F,L);break;case"style":s(F);break;case"g":L=x(F,L);break;case"path":L=x(F,L),F.hasAttribute("d")&&(Z=r(F));break;case"rect":L=x(F,L),Z=c(F);break;case"polygon":L=x(F,L),Z=l(F);break;case"polyline":L=x(F,L),Z=h(F);break;case"circle":L=x(F,L),Z=f(F);break;case"ellipse":L=x(F,L),Z=d(F);break;case"line":L=x(F,L),Z=m(F);break;case"defs":y=!0;break;case"use":L=x(F,L);const ct=(F.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),T=F.viewportElement.getElementById(ct);T?n(T,L):console.warn("SVGLoader: 'use node' references non-existent node id: "+ct);break}Z&&(L.fill!==void 0&&L.fill!=="none"&&Z.color.setStyle(L.fill,Fp),D(Z,Y),Q.push(Z),Z.userData={node:F,style:L});const ft=F.childNodes;for(let K=0;K<ft.length;K++){const ct=ft[K];y&&ct.nodeName!=="style"&&ct.nodeName!=="defs"||n(ct,L)}E&&(k.pop(),k.length>0?Y.copy(k[k.length-1]):Y.identity())}function r(F){const L=new xn,E=new dt,y=new dt,Z=new dt;let ft=!0,K=!1;const ct=F.getAttribute("d");if(ct===""||ct==="none")return null;const T=ct.match(/[a-df-z][^a-df-z]*/ig);for(let $=0,N=T.length;$<N;$++){const H=T[$],X=H.charAt(0),ht=H.slice(1).trim();ft===!0&&(K=!0,ft=!1);let I;switch(X){case"M":I=p(ht);for(let A=0,pt=I.length;A<pt;A+=2)E.x=I[A+0],E.y=I[A+1],y.x=E.x,y.y=E.y,A===0?L.moveTo(E.x,E.y):L.lineTo(E.x,E.y),A===0&&Z.copy(E);break;case"H":I=p(ht);for(let A=0,pt=I.length;A<pt;A++)E.x=I[A],y.x=E.x,y.y=E.y,L.lineTo(E.x,E.y),A===0&&K===!0&&Z.copy(E);break;case"V":I=p(ht);for(let A=0,pt=I.length;A<pt;A++)E.y=I[A],y.x=E.x,y.y=E.y,L.lineTo(E.x,E.y),A===0&&K===!0&&Z.copy(E);break;case"L":I=p(ht);for(let A=0,pt=I.length;A<pt;A+=2)E.x=I[A+0],E.y=I[A+1],y.x=E.x,y.y=E.y,L.lineTo(E.x,E.y),A===0&&K===!0&&Z.copy(E);break;case"C":I=p(ht);for(let A=0,pt=I.length;A<pt;A+=6)L.bezierCurveTo(I[A+0],I[A+1],I[A+2],I[A+3],I[A+4],I[A+5]),y.x=I[A+2],y.y=I[A+3],E.x=I[A+4],E.y=I[A+5],A===0&&K===!0&&Z.copy(E);break;case"S":I=p(ht);for(let A=0,pt=I.length;A<pt;A+=4)L.bezierCurveTo(_(E.x,y.x),_(E.y,y.y),I[A+0],I[A+1],I[A+2],I[A+3]),y.x=I[A+0],y.y=I[A+1],E.x=I[A+2],E.y=I[A+3],A===0&&K===!0&&Z.copy(E);break;case"Q":I=p(ht);for(let A=0,pt=I.length;A<pt;A+=4)L.quadraticCurveTo(I[A+0],I[A+1],I[A+2],I[A+3]),y.x=I[A+0],y.y=I[A+1],E.x=I[A+2],E.y=I[A+3],A===0&&K===!0&&Z.copy(E);break;case"T":I=p(ht);for(let A=0,pt=I.length;A<pt;A+=2){const Tt=_(E.x,y.x),Vt=_(E.y,y.y);L.quadraticCurveTo(Tt,Vt,I[A+0],I[A+1]),y.x=Tt,y.y=Vt,E.x=I[A+0],E.y=I[A+1],A===0&&K===!0&&Z.copy(E)}break;case"A":I=p(ht,[3,4],7);for(let A=0,pt=I.length;A<pt;A+=7){if(I[A+5]==E.x&&I[A+6]==E.y)continue;const Tt=E.clone();E.x=I[A+5],E.y=I[A+6],y.x=E.x,y.y=E.y,a(L,I[A],I[A+1],I[A+2],I[A+3],I[A+4],Tt,E),A===0&&K===!0&&Z.copy(E)}break;case"m":I=p(ht);for(let A=0,pt=I.length;A<pt;A+=2)E.x+=I[A+0],E.y+=I[A+1],y.x=E.x,y.y=E.y,A===0?L.moveTo(E.x,E.y):L.lineTo(E.x,E.y),A===0&&Z.copy(E);break;case"h":I=p(ht);for(let A=0,pt=I.length;A<pt;A++)E.x+=I[A],y.x=E.x,y.y=E.y,L.lineTo(E.x,E.y),A===0&&K===!0&&Z.copy(E);break;case"v":I=p(ht);for(let A=0,pt=I.length;A<pt;A++)E.y+=I[A],y.x=E.x,y.y=E.y,L.lineTo(E.x,E.y),A===0&&K===!0&&Z.copy(E);break;case"l":I=p(ht);for(let A=0,pt=I.length;A<pt;A+=2)E.x+=I[A+0],E.y+=I[A+1],y.x=E.x,y.y=E.y,L.lineTo(E.x,E.y),A===0&&K===!0&&Z.copy(E);break;case"c":I=p(ht);for(let A=0,pt=I.length;A<pt;A+=6)L.bezierCurveTo(E.x+I[A+0],E.y+I[A+1],E.x+I[A+2],E.y+I[A+3],E.x+I[A+4],E.y+I[A+5]),y.x=E.x+I[A+2],y.y=E.y+I[A+3],E.x+=I[A+4],E.y+=I[A+5],A===0&&K===!0&&Z.copy(E);break;case"s":I=p(ht);for(let A=0,pt=I.length;A<pt;A+=4)L.bezierCurveTo(_(E.x,y.x),_(E.y,y.y),E.x+I[A+0],E.y+I[A+1],E.x+I[A+2],E.y+I[A+3]),y.x=E.x+I[A+0],y.y=E.y+I[A+1],E.x+=I[A+2],E.y+=I[A+3],A===0&&K===!0&&Z.copy(E);break;case"q":I=p(ht);for(let A=0,pt=I.length;A<pt;A+=4)L.quadraticCurveTo(E.x+I[A+0],E.y+I[A+1],E.x+I[A+2],E.y+I[A+3]),y.x=E.x+I[A+0],y.y=E.y+I[A+1],E.x+=I[A+2],E.y+=I[A+3],A===0&&K===!0&&Z.copy(E);break;case"t":I=p(ht);for(let A=0,pt=I.length;A<pt;A+=2){const Tt=_(E.x,y.x),Vt=_(E.y,y.y);L.quadraticCurveTo(Tt,Vt,E.x+I[A+0],E.y+I[A+1]),y.x=Tt,y.y=Vt,E.x=E.x+I[A+0],E.y=E.y+I[A+1],A===0&&K===!0&&Z.copy(E)}break;case"a":I=p(ht,[3,4],7);for(let A=0,pt=I.length;A<pt;A+=7){if(I[A+5]==0&&I[A+6]==0)continue;const Tt=E.clone();E.x+=I[A+5],E.y+=I[A+6],y.x=E.x,y.y=E.y,a(L,I[A],I[A+1],I[A+2],I[A+3],I[A+4],Tt,E),A===0&&K===!0&&Z.copy(E)}break;case"Z":case"z":L.currentPath.autoClose=!0,L.currentPath.curves.length>0&&(E.copy(Z),L.currentPath.currentPoint.copy(E),ft=!0);break;default:console.warn(H)}K=!1}return L}function s(F){if(!(!F.sheet||!F.sheet.cssRules||!F.sheet.cssRules.length))for(let L=0;L<F.sheet.cssRules.length;L++){const E=F.sheet.cssRules[L];if(E.type!==1)continue;const y=E.selectorText.split(/,/gm).filter(Boolean).map(Z=>Z.trim());for(let Z=0;Z<y.length;Z++){const ft=Object.fromEntries(Object.entries(E.style).filter(([,K])=>K!==""));V[y[Z]]=Object.assign(V[y[Z]]||{},ft)}}}function a(F,L,E,y,Z,ft,K,ct){if(L==0||E==0){F.lineTo(ct.x,ct.y);return}y=y*Math.PI/180,L=Math.abs(L),E=Math.abs(E);const T=(K.x-ct.x)/2,$=(K.y-ct.y)/2,N=Math.cos(y)*T+Math.sin(y)*$,H=-Math.sin(y)*T+Math.cos(y)*$;let X=L*L,ht=E*E;const I=N*N,A=H*H,pt=I/X+A/ht;if(pt>1){const vt=Math.sqrt(pt);L=vt*L,E=vt*E,X=L*L,ht=E*E}const Tt=X*A+ht*I,Vt=(X*ht-Tt)/Tt;let P=Math.sqrt(Math.max(0,Vt));Z===ft&&(P=-P);const S=P*L*H/E,et=-P*E*N/L,mt=Math.cos(y)*S-Math.sin(y)*et+(K.x+ct.x)/2,gt=Math.sin(y)*S+Math.cos(y)*et+(K.y+ct.y)/2,xt=o(1,0,(N-S)/L,(H-et)/E),bt=o((N-S)/L,(H-et)/E,(-N-S)/L,(-H-et)/E)%(Math.PI*2);F.currentPath.absellipse(mt,gt,L,E,xt,xt+bt,ft===0,y)}function o(F,L,E,y){const Z=F*E+L*y,ft=Math.sqrt(F*F+L*L)*Math.sqrt(E*E+y*y);let K=Math.acos(Math.max(-1,Math.min(1,Z/ft)));return F*y-L*E<0&&(K=-K),K}function c(F){const L=g(F.getAttribute("x")||0),E=g(F.getAttribute("y")||0),y=g(F.getAttribute("rx")||F.getAttribute("ry")||0),Z=g(F.getAttribute("ry")||F.getAttribute("rx")||0),ft=g(F.getAttribute("width")),K=g(F.getAttribute("height")),ct=1-.551915024494,T=new xn;return T.moveTo(L+y,E),T.lineTo(L+ft-y,E),(y!==0||Z!==0)&&T.bezierCurveTo(L+ft-y*ct,E,L+ft,E+Z*ct,L+ft,E+Z),T.lineTo(L+ft,E+K-Z),(y!==0||Z!==0)&&T.bezierCurveTo(L+ft,E+K-Z*ct,L+ft-y*ct,E+K,L+ft-y,E+K),T.lineTo(L+y,E+K),(y!==0||Z!==0)&&T.bezierCurveTo(L+y*ct,E+K,L,E+K-Z*ct,L,E+K-Z),T.lineTo(L,E+Z),(y!==0||Z!==0)&&T.bezierCurveTo(L,E+Z*ct,L+y*ct,E,L+y,E),T}function l(F){function L(ft,K,ct){const T=g(K),$=g(ct);Z===0?y.moveTo(T,$):y.lineTo(T,$),Z++}const E=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,y=new xn;let Z=0;return F.getAttribute("points").replace(E,L),y.currentPath.autoClose=!0,y}function h(F){function L(ft,K,ct){const T=g(K),$=g(ct);Z===0?y.moveTo(T,$):y.lineTo(T,$),Z++}const E=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,y=new xn;let Z=0;return F.getAttribute("points").replace(E,L),y.currentPath.autoClose=!1,y}function f(F){const L=g(F.getAttribute("cx")||0),E=g(F.getAttribute("cy")||0),y=g(F.getAttribute("r")||0),Z=new un;Z.absarc(L,E,y,0,Math.PI*2);const ft=new xn;return ft.subPaths.push(Z),ft}function d(F){const L=g(F.getAttribute("cx")||0),E=g(F.getAttribute("cy")||0),y=g(F.getAttribute("rx")||0),Z=g(F.getAttribute("ry")||0),ft=new un;ft.absellipse(L,E,y,Z,0,Math.PI*2);const K=new xn;return K.subPaths.push(ft),K}function m(F){const L=g(F.getAttribute("x1")||0),E=g(F.getAttribute("y1")||0),y=g(F.getAttribute("x2")||0),Z=g(F.getAttribute("y2")||0),ft=new xn;return ft.moveTo(L,E),ft.lineTo(y,Z),ft.currentPath.autoClose=!1,ft}function x(F,L){L=Object.assign({},L);let E={};if(F.hasAttribute("class")){const K=F.getAttribute("class").split(/\s/).filter(Boolean).map(ct=>ct.trim());for(let ct=0;ct<K.length;ct++)E=Object.assign(E,V["."+K[ct]])}F.hasAttribute("id")&&(E=Object.assign(E,V["#"+F.getAttribute("id")]));function y(K,ct,T){T===void 0&&(T=function(N){return N.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),N}),F.hasAttribute(K)&&(L[ct]=T(F.getAttribute(K))),E[K]&&(L[ct]=T(E[K])),F.style&&F.style[K]!==""&&(L[ct]=T(F.style[K]))}function Z(K){return Math.max(0,Math.min(1,g(K)))}function ft(K){return Math.max(0,g(K))}return y("fill","fill"),y("fill-opacity","fillOpacity",Z),y("fill-rule","fillRule"),y("opacity","opacity",Z),y("stroke","stroke"),y("stroke-opacity","strokeOpacity",Z),y("stroke-width","strokeWidth",ft),y("stroke-linejoin","strokeLineJoin"),y("stroke-linecap","strokeLineCap"),y("stroke-miterlimit","strokeMiterLimit",ft),y("visibility","visibility"),L}function _(F,L){return F-(L-F)}function p(F,L,E){if(typeof F!="string")throw new TypeError("Invalid input: "+typeof F);const y={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},Z=0,ft=1,K=2,ct=3;let T=Z,$=!0,N="",H="";const X=[];function ht(Tt,Vt,P){const S=new SyntaxError('Unexpected character "'+Tt+'" at index '+Vt+".");throw S.partial=P,S}function I(){N!==""&&(H===""?X.push(Number(N)):X.push(Number(N)*Math.pow(10,Number(H)))),N="",H=""}let A;const pt=F.length;for(let Tt=0;Tt<pt;Tt++){if(A=F[Tt],Array.isArray(L)&&L.includes(X.length%E)&&y.FLAGS.test(A)){T=ft,N=A,I();continue}if(T===Z){if(y.WHITESPACE.test(A))continue;if(y.DIGIT.test(A)||y.SIGN.test(A)){T=ft,N=A;continue}if(y.POINT.test(A)){T=K,N=A;continue}y.COMMA.test(A)&&($&&ht(A,Tt,X),$=!0)}if(T===ft){if(y.DIGIT.test(A)){N+=A;continue}if(y.POINT.test(A)){N+=A,T=K;continue}if(y.EXP.test(A)){T=ct;continue}y.SIGN.test(A)&&N.length===1&&y.SIGN.test(N[0])&&ht(A,Tt,X)}if(T===K){if(y.DIGIT.test(A)){N+=A;continue}if(y.EXP.test(A)){T=ct;continue}y.POINT.test(A)&&N[N.length-1]==="."&&ht(A,Tt,X)}if(T===ct){if(y.DIGIT.test(A)){H+=A;continue}if(y.SIGN.test(A)){if(H===""){H+=A;continue}H.length===1&&y.SIGN.test(H)&&ht(A,Tt,X)}}y.WHITESPACE.test(A)?(I(),T=Z,$=!1):y.COMMA.test(A)?(I(),T=Z,$=!0):y.SIGN.test(A)?(I(),T=ft,N=A):y.POINT.test(A)?(I(),T=K,N=A):ht(A,Tt,X)}return I(),X}const u=["mm","cm","in","pt","pc","px"],R={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function g(F){let L="px";if(typeof F=="string"||F instanceof String)for(let y=0,Z=u.length;y<Z;y++){const ft=u[y];if(F.endsWith(ft)){L=ft,F=F.substring(0,F.length-ft.length);break}}let E;return L==="px"&&e.defaultUnit!=="px"?E=R.in[e.defaultUnit]/e.defaultDPI:(E=R[L][e.defaultUnit],E<0&&(E=R[L].in*e.defaultDPI)),E*parseFloat(F)}function v(F){if(!(F.hasAttribute("transform")||F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))))return null;const L=C(F);return k.length>0&&L.premultiply(k[k.length-1]),Y.copy(L),k.push(L),L}function C(F){const L=new Nt,E=J;if(F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))){const y=g(F.getAttribute("x")),Z=g(F.getAttribute("y"));L.translate(y,Z)}if(F.hasAttribute("transform")){const y=F.getAttribute("transform").split(")");for(let Z=y.length-1;Z>=0;Z--){const ft=y[Z].trim();if(ft==="")continue;const K=ft.indexOf("("),ct=ft.length;if(K>0&&K<ct){const T=ft.slice(0,K),$=p(ft.slice(K+1));switch(E.identity(),T){case"translate":if($.length>=1){const N=$[0];let H=0;$.length>=2&&(H=$[1]),E.translate(N,H)}break;case"rotate":if($.length>=1){let N=0,H=0,X=0;N=$[0]*Math.PI/180,$.length>=3&&(H=$[1],X=$[2]),st.makeTranslation(-H,-X),W.makeRotation(N),B.multiplyMatrices(W,st),st.makeTranslation(H,X),E.multiplyMatrices(st,B)}break;case"scale":if($.length>=1){const N=$[0];let H=N;$.length>=2&&(H=$[1]),E.scale(N,H)}break;case"skewX":$.length===1&&E.set(1,Math.tan($[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":$.length===1&&E.set(1,0,0,Math.tan($[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":$.length===6&&E.set($[0],$[2],$[4],$[1],$[3],$[5],0,0,1);break}}L.premultiply(E)}}return L}function D(F,L){function E(K){it.set(K.x,K.y,1).applyMatrix3(L),K.set(it.x,it.y)}function y(K){const ct=K.xRadius,T=K.yRadius,$=Math.cos(K.aRotation),N=Math.sin(K.aRotation),H=new G(ct*$,ct*N,0),X=new G(-T*N,T*$,0),ht=H.applyMatrix3(L),I=X.applyMatrix3(L),A=J.set(ht.x,I.x,0,ht.y,I.y,0,0,0,1),pt=st.copy(A).invert(),P=W.copy(pt).transpose().multiply(pt).elements,S=rt(P[0],P[1],P[4]),et=Math.sqrt(S.rt1),mt=Math.sqrt(S.rt2);if(K.xRadius=1/et,K.yRadius=1/mt,K.aRotation=Math.atan2(S.sn,S.cs),!((K.aEndAngle-K.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const xt=st.set(et,0,0,0,mt,0,0,0,1),bt=W.set(S.cs,S.sn,0,-S.sn,S.cs,0,0,0,1),vt=xt.multiply(bt).multiply(A),at=Ct=>{const{x:Pt,y:Lt}=new G(Math.cos(Ct),Math.sin(Ct),0).applyMatrix3(vt);return Math.atan2(Lt,Pt)};K.aStartAngle=at(K.aStartAngle),K.aEndAngle=at(K.aEndAngle),U(L)&&(K.aClockwise=!K.aClockwise)}}function Z(K){const ct=M(L),T=b(L);K.xRadius*=ct,K.yRadius*=T;const $=ct>Number.EPSILON?Math.atan2(L.elements[1],L.elements[0]):Math.atan2(-L.elements[3],L.elements[4]);K.aRotation+=$,U(L)&&(K.aStartAngle*=-1,K.aEndAngle*=-1,K.aClockwise=!K.aClockwise)}const ft=F.subPaths;for(let K=0,ct=ft.length;K<ct;K++){const $=ft[K].curves;for(let N=0;N<$.length;N++){const H=$[N];H.isLineCurve?(E(H.v1),E(H.v2)):H.isCubicBezierCurve?(E(H.v0),E(H.v1),E(H.v2),E(H.v3)):H.isQuadraticBezierCurve?(E(H.v0),E(H.v1),E(H.v2)):H.isEllipseCurve&&(ut.set(H.aX,H.aY),E(ut),H.aX=ut.x,H.aY=ut.y,z(L)?y(H):Z(H))}}}function U(F){const L=F.elements;return L[0]*L[4]-L[1]*L[3]<0}function z(F){const L=F.elements,E=L[0]*L[3]+L[1]*L[4];if(E===0)return!1;const y=M(F),Z=b(F);return Math.abs(E/(y*Z))>Number.EPSILON}function M(F){const L=F.elements;return Math.sqrt(L[0]*L[0]+L[1]*L[1])}function b(F){const L=F.elements;return Math.sqrt(L[3]*L[3]+L[4]*L[4])}function rt(F,L,E){let y,Z,ft,K,ct;const T=F+E,$=F-E,N=Math.sqrt($*$+4*L*L);return T>0?(y=.5*(T+N),ct=1/y,Z=F*ct*E-L*ct*L):T<0?Z=.5*(T-N):(y=.5*N,Z=-.5*N),$>0?ft=$+N:ft=$-N,Math.abs(ft)>2*Math.abs(L)?(ct=-2*L/ft,K=1/Math.sqrt(1+ct*ct),ft=ct*K):Math.abs(L)===0?(ft=1,K=0):(ct=-.5*ft/L,ft=1/Math.sqrt(1+ct*ct),K=ct*ft),$>0&&(ct=ft,ft=-K,K=ct),{rt1:y,rt2:Z,cs:ft,sn:K}}const Q=[],V={},k=[],J=new Nt,st=new Nt,W=new Nt,B=new Nt,ut=new dt,it=new G,Y=new Nt,tt=new DOMParser().parseFromString(t,"image/svg+xml");return n(tt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:Q,xml:tt.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:n.ORIGIN,t:0};function s(_,p,u,R){const g=_.x,v=p.x,C=u.x,D=R.x,U=_.y,z=p.y,M=u.y,b=R.y,rt=(D-C)*(U-M)-(b-M)*(g-C),Q=(v-g)*(U-M)-(z-U)*(g-C),V=(b-M)*(v-g)-(D-C)*(z-U),k=rt/V,J=Q/V;if(V===0&&rt!==0||k<=0||k>=1||J<0||J>1)return null;if(rt===0&&V===0){for(let st=0;st<2;st++)if(a(st===0?u:R,_,p),r.loc==n.ORIGIN){const W=st===0?u:R;return{x:W.x,y:W.y,t:r.t}}else if(r.loc==n.BETWEEN){const W=+(g+r.t*(v-g)).toPrecision(10),B=+(U+r.t*(z-U)).toPrecision(10);return{x:W,y:B,t:r.t}}return null}else{for(let B=0;B<2;B++)if(a(B===0?u:R,_,p),r.loc==n.ORIGIN){const ut=B===0?u:R;return{x:ut.x,y:ut.y,t:r.t}}const st=+(g+k*(v-g)).toPrecision(10),W=+(U+k*(z-U)).toPrecision(10);return{x:st,y:W,t:k}}}function a(_,p,u){const R=u.x-p.x,g=u.y-p.y,v=_.x-p.x,C=_.y-p.y,D=R*C-v*g;if(_.x===p.x&&_.y===p.y){r.loc=n.ORIGIN,r.t=0;return}if(_.x===u.x&&_.y===u.y){r.loc=n.DESTINATION,r.t=1;return}if(D<-Number.EPSILON){r.loc=n.LEFT;return}if(D>Number.EPSILON){r.loc=n.RIGHT;return}if(R*v<0||g*C<0){r.loc=n.BEHIND;return}if(Math.sqrt(R*R+g*g)<Math.sqrt(v*v+C*C)){r.loc=n.BEYOND;return}let U;R!==0?U=v/R:U=C/g,r.loc=n.BETWEEN,r.t=U}function o(_,p){const u=[],R=[];for(let g=1;g<_.length;g++){const v=_[g-1],C=_[g];for(let D=1;D<p.length;D++){const U=p[D-1],z=p[D],M=s(v,C,U,z);M!==null&&u.find(b=>b.t<=M.t+Number.EPSILON&&b.t>=M.t-Number.EPSILON)===void 0&&(u.push(M),R.push(new dt(M.x,M.y)))}}return R}function c(_,p,u){const R=new dt;p.getCenter(R);const g=[];return u.forEach(v=>{v.boundingBox.containsPoint(R)&&o(_,v.points).forEach(D=>{g.push({identifier:v.identifier,isCW:v.isCW,point:D})})}),g.sort((v,C)=>v.point.x-C.point.x),g}function l(_,p,u,R,g){(g==null||g==="")&&(g="nonzero");const v=new dt;_.boundingBox.getCenter(v);const C=[new dt(u,v.y),new dt(R,v.y)],D=c(C,_.boundingBox,p);D.sort((Q,V)=>Q.point.x-V.point.x);const U=[],z=[];D.forEach(Q=>{Q.identifier===_.identifier?U.push(Q):z.push(Q)});const M=U[0].point.x,b=[];let rt=0;for(;rt<z.length&&z[rt].point.x<M;)b.length>0&&b[b.length-1]===z[rt].identifier?b.pop():b.push(z[rt].identifier),rt++;if(b.push(_.identifier),g==="evenodd"){const Q=b.length%2===0,V=b[b.length-2];return{identifier:_.identifier,isHole:Q,for:V}}else if(g==="nonzero"){let Q=!0,V=null,k=null;for(let J=0;J<b.length;J++){const st=b[J];Q?(k=p[st].isCW,Q=!1,V=st):k!==p[st].isCW&&(k=p[st].isCW,Q=!0)}return{identifier:_.identifier,isHole:Q,for:V}}else console.warn('fill-rule: "'+g+'" is currently not implemented.')}let h=999999999,f=-999999999,d=t.subPaths.map(_=>{const p=_.getPoints();let u=-999999999,R=999999999,g=-999999999,v=999999999;for(let C=0;C<p.length;C++){const D=p[C];D.y>u&&(u=D.y),D.y<R&&(R=D.y),D.x>g&&(g=D.x),D.x<v&&(v=D.x)}return f<=g&&(f=g+1),h>=v&&(h=v-1),{curves:_.curves,points:p,isCW:bn.isClockWise(p),identifier:-1,boundingBox:new Np(new dt(v,R),new dt(g,u))}});d=d.filter(_=>_.points.length>1);for(let _=0;_<d.length;_++)d[_].identifier=_;const m=d.map(_=>l(_,d,h,f,t.userData?t.userData.style.fillRule:void 0)),x=[];return d.forEach(_=>{if(!m[_.identifier].isHole){const u=new $n;u.curves=_.curves,m.filter(g=>g.isHole&&g.for===_.identifier).forEach(g=>{const v=d[g.identifier],C=new un;C.curves=v.curves,u.holes.push(C)}),x.push(u)}}),x}static getStrokeStyle(t,e,n,r,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(t,e,n,r){const s=[],a=[],o=[];if(ms.pointsToStrokeWithBuffers(t,e,n,r,s,a,o)===0)return null;const c=new tn;return c.setAttribute("position",new Ae(s,3)),c.setAttribute("normal",new Ae(a,3)),c.setAttribute("uv",new Ae(o,2)),c}static pointsToStrokeWithBuffers(t,e,n,r,s,a,o,c){const l=new dt,h=new dt,f=new dt,d=new dt,m=new dt,x=new dt,_=new dt,p=new dt,u=new dt,R=new dt,g=new dt,v=new dt,C=new dt,D=new dt,U=new dt,z=new dt,M=new dt;n=n!==void 0?n:12,r=r!==void 0?r:.001,c=c!==void 0?c:0,t=$(t);const b=t.length;if(b<2)return 0;const rt=t[0].equals(t[b-1]);let Q,V=t[0],k;const J=e.strokeWidth/2,st=1/(b-1);let W=0,B,ut,it,Y,tt=!1,Mt=0,F=c*3,L=c*2;E(t[0],t[1],l).multiplyScalar(J),p.copy(t[0]).sub(l),u.copy(t[0]).add(l),R.copy(p),g.copy(u);for(let N=1;N<b;N++){Q=t[N],N===b-1?rt?k=t[1]:k=void 0:k=t[N+1];const H=l;if(E(V,Q,H),f.copy(H).multiplyScalar(J),v.copy(Q).sub(f),C.copy(Q).add(f),B=W+st,ut=!1,k!==void 0){E(Q,k,h),f.copy(h).multiplyScalar(J),D.copy(Q).sub(f),U.copy(Q).add(f),it=!0,f.subVectors(k,V),H.dot(f)<0&&(it=!1),N===1&&(tt=it),f.subVectors(k,Q),f.normalize();const X=Math.abs(H.dot(f));if(X>Number.EPSILON){const ht=J/X;f.multiplyScalar(-ht),d.subVectors(Q,V),m.copy(d).setLength(ht).add(f),z.copy(m).negate();const I=m.length(),A=d.length();d.divideScalar(A),x.subVectors(k,Q);const pt=x.length();switch(x.divideScalar(pt),d.dot(z)<A&&x.dot(z)<pt&&(ut=!0),M.copy(m).add(Q),z.add(Q),Y=!1,ut?it?(U.copy(z),C.copy(z)):(D.copy(z),v.copy(z)):ft(),e.strokeLineJoin){case"bevel":K(it,ut,B);break;case"round":ct(it,ut),it?Z(Q,v,D,B,0):Z(Q,U,C,B,1);break;case"miter":case"miter-clip":default:const Tt=J*e.strokeMiterLimit/I;if(Tt<1)if(e.strokeLineJoin!=="miter-clip"){K(it,ut,B);break}else ct(it,ut),it?(x.subVectors(M,v).multiplyScalar(Tt).add(v),_.subVectors(M,D).multiplyScalar(Tt).add(D),y(v,B,0),y(x,B,0),y(Q,B,.5),y(Q,B,.5),y(x,B,0),y(_,B,0),y(Q,B,.5),y(_,B,0),y(D,B,0)):(x.subVectors(M,C).multiplyScalar(Tt).add(C),_.subVectors(M,U).multiplyScalar(Tt).add(U),y(C,B,1),y(x,B,1),y(Q,B,.5),y(Q,B,.5),y(x,B,1),y(_,B,1),y(Q,B,.5),y(_,B,1),y(U,B,1));else ut?(it?(y(u,W,1),y(p,W,0),y(M,B,0),y(u,W,1),y(M,B,0),y(z,B,1)):(y(u,W,1),y(p,W,0),y(M,B,1),y(p,W,0),y(z,B,0),y(M,B,1)),it?D.copy(M):U.copy(M)):it?(y(v,B,0),y(M,B,0),y(Q,B,.5),y(Q,B,.5),y(M,B,0),y(D,B,0)):(y(C,B,1),y(M,B,1),y(Q,B,.5),y(Q,B,.5),y(M,B,1),y(U,B,1)),Y=!0;break}}else ft()}else ft();!rt&&N===b-1&&T(t[0],R,g,it,!0,W),W=B,V=Q,p.copy(D),u.copy(U)}if(!rt)T(Q,v,C,it,!1,B);else if(ut&&s){let N=M,H=z;tt!==it&&(N=z,H=M),it?(Y||tt)&&(H.toArray(s,0*3),H.toArray(s,3*3),Y&&N.toArray(s,1*3)):(Y||!tt)&&(H.toArray(s,1*3),H.toArray(s,3*3),Y&&N.toArray(s,0*3))}return Mt;function E(N,H,X){return X.subVectors(H,N),X.set(-X.y,X.x).normalize()}function y(N,H,X){s&&(s[F]=N.x,s[F+1]=N.y,s[F+2]=0,a&&(a[F]=0,a[F+1]=0,a[F+2]=1),F+=3,o&&(o[L]=H,o[L+1]=X,L+=2)),Mt+=3}function Z(N,H,X,ht,I){l.copy(H).sub(N).normalize(),h.copy(X).sub(N).normalize();let A=Math.PI;const pt=l.dot(h);Math.abs(pt)<1&&(A=Math.abs(Math.acos(pt))),A/=n,f.copy(H);for(let Tt=0,Vt=n-1;Tt<Vt;Tt++)d.copy(f).rotateAround(N,A),y(f,ht,I),y(d,ht,I),y(N,ht,.5),f.copy(d);y(d,ht,I),y(X,ht,I),y(N,ht,.5)}function ft(){y(u,W,1),y(p,W,0),y(v,B,0),y(u,W,1),y(v,B,1),y(C,B,0)}function K(N,H,X){H?N?(y(u,W,1),y(p,W,0),y(v,B,0),y(u,W,1),y(v,B,0),y(z,B,1),y(v,X,0),y(D,X,0),y(z,X,.5)):(y(u,W,1),y(p,W,0),y(C,B,1),y(p,W,0),y(z,B,0),y(C,B,1),y(C,X,1),y(U,X,0),y(z,X,.5)):N?(y(v,X,0),y(D,X,0),y(Q,X,.5)):(y(C,X,1),y(U,X,0),y(Q,X,.5))}function ct(N,H){H&&(N?(y(u,W,1),y(p,W,0),y(v,B,0),y(u,W,1),y(v,B,0),y(z,B,1),y(v,W,0),y(Q,B,.5),y(z,B,1),y(Q,B,.5),y(D,W,0),y(z,B,1)):(y(u,W,1),y(p,W,0),y(C,B,1),y(p,W,0),y(z,B,0),y(C,B,1),y(C,W,1),y(z,B,0),y(Q,B,.5),y(Q,B,.5),y(z,B,0),y(U,W,1)))}function T(N,H,X,ht,I,A){switch(e.strokeLineCap){case"round":I?Z(N,X,H,A,.5):Z(N,H,X,A,.5);break;case"square":if(I)l.subVectors(H,N),h.set(l.y,-l.x),f.addVectors(l,h).add(N),d.subVectors(h,l).add(N),ht?(f.toArray(s,1*3),d.toArray(s,0*3),d.toArray(s,3*3)):(f.toArray(s,1*3),f.toArray(s,3*3),d.toArray(s,0*3));else{l.subVectors(X,N),h.set(l.y,-l.x),f.addVectors(l,h).add(N),d.subVectors(h,l).add(N);const pt=s.length;ht?(f.toArray(s,pt-1*3),d.toArray(s,pt-2*3),d.toArray(s,pt-4*3)):(f.toArray(s,pt-2*3),d.toArray(s,pt-1*3),d.toArray(s,pt-4*3))}break}}function $(N){let H=!1;for(let ht=1,I=N.length-1;ht<I;ht++)if(N[ht].distanceTo(N[ht+1])<r){H=!0;break}if(!H)return N;const X=[];X.push(N[0]);for(let ht=1,I=N.length-1;ht<I;ht++)N[ht].distanceTo(N[ht+1])>=r&&X.push(N[ht]);return X.push(N[N.length-1]),X}}}const Op=document.querySelector("#rings_canvas"),qr=new Ao({antialias:!0,canvas:Op,alpha:!0}),wn=new Te(35,2,.1,1e3);wn.position.set(0,0,20);wn.focus=10;wn.up.set(0,1,0);wn.lookAt(0,0,0);const or=new Zd,mi=new ne;or.add(mi);{const i=new Ip(16777215,1);i.position.set(20,30,30),or.add(i)}const Bp=new Do({color:13421772,roughness:.2,metalness:.95,side:Qe}),zp=new os({color:16711935,side:Ue}),Io=[{x:1225,y:850,z:0,rotz:26.7,rotx:-20,maxX:-Math.PI/10,maxY:-Math.PI/10,maxZ:0},{x:1385,y:700,z:0,rotz:-8,rotx:35,maxX:Math.PI/35,maxY:Math.PI/35,maxZ:0},{x:1463,y:522,z:0,rotz:34.3,rotx:5,maxX:-Math.PI/10,maxY:-Math.PI/10,maxZ:0},{x:1480,y:375,z:-1.2,rotz:-26.3,rotx:0,maxX:Math.PI/16,maxY:Math.PI/16,maxZ:0},{x:1325,y:300,z:0,rotz:6.9,rotx:-30,maxX:-Math.PI/10,maxY:-Math.PI/10,maxZ:0}];Io.forEach(i=>{let t=Hp(),e=new ne;e.add(t);let n=Vp(i.x,i.y);t.rotation.z=i.rotz/180*Math.PI,t.rotation.x=i.rotx/180*Math.PI,e.translateX(n.x),e.translateY(n.y),e.translateZ(i.z),mi.add(e),i.ring=t});let Qi=1,te={v:Qi,x:0,maxX:Math.PI/14,maxY:Math.PI/10,maxZ:Math.PI/10,rotation:{x:0,y:0,z:0}},an={x:0,y:0,z:0};function Gp(i){const t=i.domElement,e=window.devicePixelRatio,n=t.clientWidth*e|0,r=t.clientHeight*e|0,s=t.width!==n||t.height!==r;return s&&i.setSize(n,r,!1),s}function No(i){if(Gp(qr)){const t=qr.domElement;wn.aspect=t.clientWidth/t.clientHeight,wn.updateProjectionMatrix()}te.x+=te.v,te.rotation.x+=(an.y-te.rotation.x)*.01,te.rotation.y+=(an.x-te.rotation.y)*.01,te.rotation.z+=(an.z-te.rotation.z)*.01,mi.rotation.x=te.maxX*Math.sin(te.rotation.x),mi.rotation.y=te.maxY*Math.sin(te.rotation.y),mi.rotation.z=te.maxZ*Math.sin(te.rotation.z),Io.forEach(t=>{t.ring.rotation.z=t.rotz/180*Math.PI+t.maxZ*Math.sin(te.rotation.z),t.ring.rotation.x=t.rotx/180*Math.PI+t.maxX*Math.sin(te.rotation.x),t.ring.rotation.y=0+t.maxY*Math.sin(te.rotation.y)}),qr.render(or,wn),requestAnimationFrame(No)}requestAnimationFrame(No);function Fo(i){let t=i.targetTouches,e={x:t?t[0].clientX:i.clientX,y:t?t[0].clientY:i.clientY},n=e.x/window.innerWidth*2-1,r=-(e.y/window.innerHeight)*2+1,s=Math.abs(an.x-n)+Math.abs(an.y+r);te.v+=s/10*Qi,te.v>Qi&&(te.v=Qi),an.x=n*Math.PI*2,an.y=-r*Math.PI*2,an.z=0}window.addEventListener("mousemove",Fo);window.addEventListener("touchmove",Fo);DeviceMotionEvent&&typeof DeviceMotionEvent.requestPermission=="function"&&DeviceMotionEvent.requestPermission();function Hp(){let i=6.12,t=.44,e=.35,n=new ne;const r={curveSegments:200,steps:1,depth:e,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelOffset:0,bevelSegments:2},s={curveSegments:200,steps:2,depth:e/4,bevelEnabled:!0,bevelThickness:0,bevelSize:0,bevelOffset:0,bevelSegments:0};let a=qa(i,t,e,r),o=new Ne(a,Bp);o.rotateX(Math.PI/2),n.add(o);let c=new qa(i+.1,t/3,e/4,s),l=new Ne(c,zp);return l.rotateX(Math.PI/2),n.add(l),n}function qa(i,t,e,n){let r=i/2,s=(i-2*t)/2,a=new $n,o=new un;o.arc(0,0,r,0,Math.PI*2,!1),a.add(o);let c=new un;c.arc(0,0,s,0,Math.PI*2,!0),a.add(c);let l=new ar(a,n);return l.translate(0,0,-e/2),l}function Vp(i,t){return i=(i-1920/2)/100,t=(1080/2-t)/100,{x:i,y:t}}kp();function kp(){const i=new Do({emissive:16776960,envMapIntensity:1,roughness:0,metalness:.3,side:Ue});let t=`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="1280.000000pt" height="930.000000pt" viewBox="0 0 1280.000000 930.000000"
    preserveAspectRatio="xMidYMid meet">
   <g transform="translate(0.000000,930.000000) scale(0.100000,-0.100000)"
   fill="#000000" stroke="none">
   <path d="M400 8990 l-25 -20 -3 -579 c-4 -626 1 -775 25 -798 22 -23 564 -22
   666 1 231 51 411 232 479 481 29 106 31 325 4 428 -38 147 -135 296 -247 381
   -71 55 -105 71 -197 96 -68 18 -113 21 -377 25 -290 5 -301 4 -325 -15z m556
   -347 c186 -55 252 -391 118 -606 -47 -75 -123 -112 -224 -107 l-65 3 -3 350
   c-1 192 0 356 3 362 6 18 109 17 171 -2z"/>
   <path d="M2000 8990 l-27 -21 0 -673 c0 -592 2 -674 16 -694 l15 -22 494 0
   495 0 16 24 c13 21 15 49 12 165 -2 98 -7 144 -16 153 -10 10 -84 14 -312 16
   l-300 3 0 94 0 95 224 0 c290 0 271 -12 271 175 0 187 19 175 -271 175 l-224
   0 0 84 0 85 296 3 296 3 19 24 c16 20 19 40 19 151 0 111 -3 131 -19 151 l-19
   24 -479 3 c-474 3 -480 2 -506 -18z"/>
   <path d="M3600 8990 l-24 -19 0 -677 0 -677 24 -19 c20 -17 40 -19 156 -19
   116 0 136 2 156 19 l24 19 5 363 5 364 39 -130 c139 -466 187 -611 203 -622
   24 -18 243 -18 267 0 20 14 26 33 157 457 l94 305 5 -370 c3 -203 7 -371 8
   -372 1 -1 9 -9 18 -17 13 -13 44 -16 179 -16 145 0 165 2 186 19 l24 19 0 677
   0 677 -24 19 c-21 18 -42 19 -271 19 -221 0 -250 -2 -269 -17 -15 -13 -46
   -101 -113 -320 -51 -166 -97 -303 -102 -305 -5 -2 -49 134 -98 302 -64 218
   -95 310 -110 323 -18 15 -46 17 -268 17 -229 0 -250 -1 -271 -19z"/>
   <path d="M6000 8990 c-259 -68 -429 -308 -455 -640 -13 -167 18 -334 91 -482
   85 -174 216 -281 389 -317 223 -47 457 27 582 184 168 212 217 550 122 836
   -76 227 -213 370 -405 420 -74 19 -250 19 -324 -1z m250 -362 c72 -53 104
   -183 97 -392 -6 -180 -22 -238 -82 -297 -40 -40 -46 -43 -97 -43 -73 0 -114
   28 -150 100 -37 74 -52 179 -45 325 8 189 41 274 122 316 47 24 115 20 155 -9z"/>
   </g>
   </svg>`;const n=new ms().parse(t),r=new ne;n.paths.forEach((s,a)=>{s.toShapes(!0).forEach((c,l)=>{const h=new ar(c,{depth:20,bevelEnabled:!1}),f=new Ne(h,i);f.scale.set(.015,.015,.015),r.add(f)})}),or.add(r),r.rotateX(Math.PI),r.rotateY(-.3),r.translateX(-11),r.translateY(-3)}
