import{$a as Me,A as ye,H as Ee,I as Ie,K as we,M as Y,N as h,O as g,Q as T,S as c,T as S,U as M,W as _,Z as Te,_a as Se,a as b,b as Z,bb as q,cb as Re,db as ke,ea as U,eb as f,f as pe,fa as A,hb as xe,i as ge,ia as Ae,ib as Oe,ja as V,jb as Ne,ka as Ce,kb as X,la as E,lb as Fe,na as R,pa as k,q as G,r as _e,t as ve,ua as De,xa as v,y as be}from"./chunk-S7GIKUFL.js";var ee=class extends ke{constructor(){super(...arguments),this.supportsDOMEvents=!0}},te=class n extends ee{static makeCurrent(){Re(new n)}onAndCancel(e,s,t){return e.addEventListener(s,t),()=>{e.removeEventListener(s,t)}}dispatchEvent(e,s){e.dispatchEvent(s)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,s){return s=s||this.getDefaultDocument(),s.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,s){return s==="window"?window:s==="document"?e:s==="body"?e.body:null}getBaseHref(e){let s=ht();return s==null?null:ft(s)}resetBaseElement(){x=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return xe(document.cookie,e)}},x=null;function ht(){return x=x||document.querySelector("base"),x?x.getAttribute("href"):null}function ft(n){return new URL(n,document.baseURI).pathname}var mt=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac});let n=e;return n})(),$=new T(""),Be=(()=>{let e=class e{constructor(t,i){this._zone=i,this._eventNameToPlugin=new Map,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(o=>o.supports(t)),!i)throw new Y(5101,!1);return this._eventNameToPlugin.set(t,i),i}};e.\u0275fac=function(i){return new(i||e)(c($),c(v))},e.\u0275prov=h({token:e,factory:e.\u0275fac});let n=e;return n})(),O=class{constructor(e){this._doc=e}},Q="ng-app-id",He=(()=>{let e=class e{constructor(t,i,r,o={}){this.doc=t,this.appId=i,this.nonce=r,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=X(o),this.resetHostNodes()}addStyles(t){for(let i of t)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(t){for(let i of t)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(i=>i.remove()),t.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let i of this.getAllStyles())this.addStyleToHost(t,i)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let i of this.hostNodes)this.addStyleToHost(i,t)}onStyleRemoved(t){let i=this.styleRef;i.get(t)?.elements?.forEach(r=>r.remove()),i.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${Q}="${this.appId}"]`);if(t?.length){let i=new Map;return t.forEach(r=>{r.textContent!=null&&i.set(r.textContent,r)}),i}return null}changeUsageCount(t,i){let r=this.styleRef;if(r.has(t)){let o=r.get(t);return o.usage+=i,o.usage}return r.set(t,{usage:i,elements:[]}),i}getStyleElement(t,i){let r=this.styleNodesInDOM,o=r?.get(i);if(o?.parentNode===t)return r.delete(i),o.removeAttribute(Q),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=i,this.platformIsServer&&a.setAttribute(Q,this.appId),t.appendChild(a),a}}addStyleToHost(t,i){let r=this.getStyleElement(t,i),o=this.styleRef,a=o.get(i)?.elements;a?a.push(r):o.set(i,{elements:[r],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}};e.\u0275fac=function(i){return new(i||e)(c(f),c(V),c(R,8),c(E))},e.\u0275prov=h({token:e,factory:e.\u0275fac});let n=e;return n})(),J={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ne=/%COMP%/g,Ue="%COMP%",pt=`_nghost-${Ue}`,gt=`_ngcontent-${Ue}`,_t=!0,vt=new T("",{providedIn:"root",factory:()=>_t});function bt(n){return gt.replace(ne,n)}function yt(n){return pt.replace(ne,n)}function Ve(n,e){return e.map(s=>s.replace(ne,n))}var Le=(()=>{let e=class e{constructor(t,i,r,o,a,l,d,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=l,this.ngZone=d,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=X(l),this.defaultRenderer=new N(t,a,d,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===M.ShadowDom&&(i=Z(b({},i),{encapsulation:M.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof z?r.applyToHost(t):r instanceof F&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,l=this.ngZone,d=this.eventManager,u=this.sharedStylesHost,m=this.removeStylesOnCompDestroy,D=this.platformIsServer;switch(i.encapsulation){case M.Emulated:o=new z(d,u,i,this.appId,m,a,l,D);break;case M.ShadowDom:return new ie(d,u,t,i,a,l,this.nonce,D);default:o=new F(d,u,i,m,a,l,D);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(i){return new(i||e)(c(Be),c(He),c(V),c(vt),c(f),c(E),c(v),c(R))},e.\u0275prov=h({token:e,factory:e.\u0275fac});let n=e;return n})(),N=class{constructor(e,s,t,i){this.eventManager=e,this.doc=s,this.ngZone=t,this.platformIsServer=i,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,s){return s?this.doc.createElementNS(J[s]||s,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,s){(je(e)?e.content:e).appendChild(s)}insertBefore(e,s,t){e&&(je(e)?e.content:e).insertBefore(s,t)}removeChild(e,s){e&&e.removeChild(s)}selectRootElement(e,s){let t=typeof e=="string"?this.doc.querySelector(e):e;if(!t)throw new Y(-5104,!1);return s||(t.textContent=""),t}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,s,t,i){if(i){s=i+":"+s;let r=J[i];r?e.setAttributeNS(r,s,t):e.setAttribute(s,t)}else e.setAttribute(s,t)}removeAttribute(e,s,t){if(t){let i=J[t];i?e.removeAttributeNS(i,s):e.removeAttribute(`${t}:${s}`)}else e.removeAttribute(s)}addClass(e,s){e.classList.add(s)}removeClass(e,s){e.classList.remove(s)}setStyle(e,s,t,i){i&(k.DashCase|k.Important)?e.style.setProperty(s,t,i&k.Important?"important":""):e.style[s]=t}removeStyle(e,s,t){t&k.DashCase?e.style.removeProperty(s):e.style[s]=""}setProperty(e,s,t){e!=null&&(e[s]=t)}setValue(e,s){e.nodeValue=s}listen(e,s,t){if(typeof e=="string"&&(e=q().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${s}`);return this.eventManager.addEventListener(e,s,this.decoratePreventDefault(t))}decoratePreventDefault(e){return s=>{if(s==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(s)):e(s))===!1&&s.preventDefault()}}};function je(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var ie=class extends N{constructor(e,s,t,i,r,o,a,l){super(e,r,o,l),this.sharedStylesHost=s,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=Ve(i.id,i.styles);for(let u of d){let m=document.createElement("style");a&&m.setAttribute("nonce",a),m.textContent=u,this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,s){return super.appendChild(this.nodeOrShadowRoot(e),s)}insertBefore(e,s,t){return super.insertBefore(this.nodeOrShadowRoot(e),s,t)}removeChild(e,s){return super.removeChild(this.nodeOrShadowRoot(e),s)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},F=class extends N{constructor(e,s,t,i,r,o,a,l){super(e,r,o,a),this.sharedStylesHost=s,this.removeStylesOnCompDestroy=i,this.styles=l?Ve(l,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},z=class extends F{constructor(e,s,t,i,r,o,a,l){let d=i+"-"+t.id;super(e,s,t,r,o,a,l,d),this.contentAttr=bt(d),this.hostAttr=yt(d)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,s){let t=super.createElement(e,s);return super.setAttribute(t,this.contentAttr,""),t}},Et=(()=>{let e=class e extends O{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}};e.\u0275fac=function(i){return new(i||e)(c(f))},e.\u0275prov=h({token:e,factory:e.\u0275fac});let n=e;return n})(),It=(()=>{let e=class e extends O{constructor(t){super(t),this.delegate=S(Me,{optional:!0})}supports(t){return this.delegate?this.delegate.supports(t):!1}addEventListener(t,i,r){return this.delegate.addEventListener(t,i,r)}removeEventListener(t,i,r){return this.delegate.removeEventListener(t,i,r)}};e.\u0275fac=function(i){return new(i||e)(c(f))},e.\u0275prov=h({token:e,factory:e.\u0275fac});let n=e;return n})(),Pe=["alt","control","meta","shift"],wt={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Tt={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},At=(()=>{let e=class e extends O{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,i,r){let o=e.parseEventName(i),a=e.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>q().onAndCancel(t,o.domEventName,a))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=e._normalizeKey(i.pop()),a="",l=i.indexOf("code");if(l>-1&&(i.splice(l,1),a="code."),Pe.forEach(u=>{let m=i.indexOf(u);m>-1&&(i.splice(m,1),a+=u+".")}),a+=o,i.length!=0||o.length===0)return null;let d={};return d.domEventName=r,d.fullKey=a,d}static matchEventFullKeyCode(t,i){let r=wt[t.key]||t.key,o="";return i.indexOf("code.")>-1&&(r=t.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Pe.forEach(a=>{if(a!==r){let l=Tt[a];l(t)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(t,i,r){return o=>{e.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>i(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}};e.\u0275fac=function(i){return new(i||e)(c(f))},e.\u0275prov=h({token:e,factory:e.\u0275fac});let n=e;return n})();function Ri(n,e){return Se(b({rootComponent:n},Ct(e)))}function Ct(n){return{appProviders:[...kt,...n?.providers??[]],platformProviders:Rt}}function Dt(){te.makeCurrent()}function St(){return new U}function Mt(){return Ae(document),document}var Rt=[{provide:E,useValue:Oe},{provide:Ce,useValue:Dt,multi:!0},{provide:f,useFactory:Mt,deps:[]}];var kt=[{provide:Te,useValue:"root"},{provide:U,useFactory:St,deps:[]},{provide:$,useClass:Et,multi:!0,deps:[f,v,E]},{provide:$,useClass:At,multi:!0,deps:[f]},{provide:$,useClass:It,multi:!0},Le,He,Be,{provide:De,useExisting:Le},{provide:Fe,useClass:mt,deps:[]},[]];var ki=(()=>{let e=class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}};e.\u0275fac=function(i){return new(i||e)(c(f))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var se;try{se=typeof Intl<"u"&&Intl.v8BreakIterator}catch{se=!1}var j=(()=>{let e=class e{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Ne(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||se)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(i){return new(i||e)(c(E))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var L;function xt(){if(L==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>L=!0}))}finally{L=L||!1}return L}function re(n){return xt()?n:!!n.capture}function $e(n){return n.composedPath?n.composedPath()[0]:n.target}function ze(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function oe(n){return Array.isArray(n)?n:[n]}function ae(n){return n instanceof A?n.nativeElement:n}var Ke=new Set,I,Ot=(()=>{let e=class e{constructor(t,i){this._platform=t,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ft}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Nt(t,this._nonce),this._matchMedia(t)}};e.\u0275fac=function(i){return new(i||e)(c(j),c(R,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Nt(n,e){if(!Ke.has(n))try{I||(I=document.createElement("style"),e&&I.setAttribute("nonce",e),I.setAttribute("type","text/css"),document.head.appendChild(I)),I.sheet&&(I.sheet.insertRule(`@media ${n} {body{ }}`,0),Ke.add(n))}catch(s){console.error(s)}}function Ft(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Ge=(()=>{let e=class e{constructor(t,i){this._mediaMatcher=t,this._zone=i,this._queries=new Map,this._destroySubject=new ge}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Ze(oe(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){let r=Ze(oe(t)).map(a=>this._registerQuery(a).observable),o=_e(r);return o=ve(o.pipe(ye(1)),o.pipe(Ee(1),be(0))),o.pipe(G(a=>{let l={matches:!1,breakpoints:{}};return a.forEach(({matches:d,query:u})=>{l.matches=l.matches||d,l.breakpoints[u]=d}),l}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),o={observable:new pe(a=>{let l=d=>this._zone.run(()=>a.next(d));return i.addListener(l),()=>{i.removeListener(l)}}).pipe(Ie(i),G(({matches:a})=>({query:t,matches:a})),we(this._destroySubject)),mql:i};return this._queries.set(t,o),o}};e.\u0275fac=function(i){return new(i||e)(c(Ot),c(v))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Ze(n){return n.map(e=>e.split(",")).reduce((e,s)=>e.concat(s)).map(e=>e.trim())}function et(n){return n.buttons===0||n.detail===0}function tt(n){let e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var w=function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n}(w||{}),Ye="cdk-high-contrast-black-on-white",qe="cdk-high-contrast-white-on-black",ce="cdk-high-contrast-active",it=(()=>{let e=class e{constructor(t,i){this._platform=t,this._document=i,this._breakpointSubscription=S(Ge).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return w.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(t):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(t.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return w.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return w.BLACK_ON_WHITE}return w.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(ce,Ye,qe),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===w.BLACK_ON_WHITE?t.add(ce,Ye):i===w.WHITE_ON_BLACK&&t.add(ce,qe)}}};e.\u0275fac=function(i){return new(i||e)(c(j),c(f))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var le=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=g({});let n=e;return n})();function Wt(){return!0}var Kt=new T("mat-sanity-checks",{providedIn:"root",factory:Wt}),B=(()=>{let e=class e{constructor(t,i,r){this._sanityChecks=i,this._document=r,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return ze()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[t]}};e.\u0275fac=function(i){return new(i||e)(c(it),c(Kt,8),c(f))},e.\u0275mod=_({type:e}),e.\u0275inj=g({imports:[le,le]});let n=e;return n})();var p=function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n}(p||{}),de=class{constructor(e,s,t,i=!1){this._renderer=e,this.element=s,this.config=t,this._animationForciblyDisabledThroughCss=i,this.state=p.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},st=re({passive:!0,capture:!0}),ue=class{constructor(){this._events=new Map,this._delegateEventHandler=e=>{let s=$e(e);s&&this._events.get(e.type)?.forEach((t,i)=>{(i===s||i.contains(s))&&t.forEach(r=>r.handleEvent(e))})}}addHandler(e,s,t,i){let r=this._events.get(s);if(r){let o=r.get(t);o?o.add(i):r.set(t,new Set([i]))}else this._events.set(s,new Map([[t,new Set([i])]])),e.runOutsideAngular(()=>{document.addEventListener(s,this._delegateEventHandler,st)})}removeHandler(e,s,t){let i=this._events.get(e);if(!i)return;let r=i.get(s);r&&(r.delete(t),r.size===0&&i.delete(s),i.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,st)))}},rt={enterDuration:225,exitDuration:150},Zt=800,ot=re({passive:!0,capture:!0}),at=["mousedown","touchstart"],ct=["mouseup","mouseleave","touchend","touchcancel"],P=class P{constructor(e,s,t,i){this._target=e,this._ngZone=s,this._platform=i,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,i.isBrowser&&(this._containerElement=ae(t))}fadeInRipple(e,s,t={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=b(b({},rt),t.animation);t.centered&&(e=i.left+i.width/2,s=i.top+i.height/2);let o=t.radius||Gt(e,s,i),a=e-i.left,l=s-i.top,d=r.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${a-o}px`,u.style.top=`${l-o}px`,u.style.height=`${o*2}px`,u.style.width=`${o*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let m=window.getComputedStyle(u),D=m.transitionProperty,he=m.transitionDuration,W=D==="none"||he==="0s"||he==="0s, 0s"||i.width===0&&i.height===0,y=new de(this,u,t,W);u.style.transform="scale3d(1, 1, 1)",y.state=p.FADING_IN,t.persistent||(this._mostRecentTransientRipple=y);let H=null;return!W&&(d||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let fe=()=>{H&&(H.fallbackTimer=null),clearTimeout(me),this._finishRippleTransition(y)},K=()=>this._destroyRipple(y),me=setTimeout(K,d+100);u.addEventListener("transitionend",fe),u.addEventListener("transitioncancel",K),H={onTransitionEnd:fe,onTransitionCancel:K,fallbackTimer:me}}),this._activeRipples.set(y,H),(W||!d)&&this._finishRippleTransition(y),y}fadeOutRipple(e){if(e.state===p.FADING_OUT||e.state===p.HIDDEN)return;let s=e.element,t=b(b({},rt),e.config.animation);s.style.transitionDuration=`${t.exitDuration}ms`,s.style.opacity="0",e.state=p.FADING_OUT,(e._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let s=ae(e);!this._platform.isBrowser||!s||s===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=s,at.forEach(t=>{P._eventManager.addHandler(this._ngZone,t,s,this)}))}handleEvent(e){e.type==="mousedown"?this._onMousedown(e):e.type==="touchstart"?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ct.forEach(s=>{this._triggerElement.addEventListener(s,this,ot)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===p.FADING_IN?this._startFadeOutTransition(e):e.state===p.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let s=e===this._mostRecentTransientRipple,{persistent:t}=e.config;e.state=p.VISIBLE,!t&&(!s||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let s=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=p.HIDDEN,s!==null&&(e.element.removeEventListener("transitionend",s.onTransitionEnd),e.element.removeEventListener("transitioncancel",s.onTransitionCancel),s.fallbackTimer!==null&&clearTimeout(s.fallbackTimer)),e.element.remove()}_onMousedown(e){let s=et(e),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Zt;!this._target.rippleDisabled&&!s&&!t&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!tt(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let s=e.changedTouches;if(s)for(let t=0;t<s.length;t++)this.fadeInRipple(s[t].clientX,s[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let s=e.state===p.VISIBLE||e.config.terminateOnPointerUp&&e.state===p.FADING_IN;!e.config.persistent&&s&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(at.forEach(s=>P._eventManager.removeHandler(s,e,this)),this._pointerUpEventsRegistered&&(ct.forEach(s=>e.removeEventListener(s,this,ot)),this._pointerUpEventsRegistered=!1))}};P._eventManager=new ue;var lt=P;function Gt(n,e,s){let t=Math.max(Math.abs(n-s.left),Math.abs(n-s.right)),i=Math.max(Math.abs(e-s.top),Math.abs(e-s.bottom));return Math.sqrt(t*t+i*i)}var Qn=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=g({imports:[B,B]});let n=e;return n})();var ss=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=g({imports:[B,B]});let n=e;return n})();export{Le as a,Ri as b,ki as c,B as d,Qn as e,ss as f};
